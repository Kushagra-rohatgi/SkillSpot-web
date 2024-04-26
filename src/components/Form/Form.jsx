import React, { useState, useRef } from "react";
import styles from './Form.module.css'; // Importing CSS module
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import CustomAlert from "../Alert/Alert";

export default function Form() {
    const formRef = useRef();
    const ref = collection(firestore, "contacts");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        setAlertMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // Validate contact number format
        const contactNumberRegex = /^\d{10}$/;
        if (!contactNumberRegex.test(formData.contactNumber)) {
            setAlertMessage("Contact number should be a 10-digit number.");
            setShowAlert(true);
            return;
        }

        // Check if email and contact number already exist
        const emailQuery = query(ref, where("email", "==", formData.email));
        const contactQuery = query(ref, where("contactNumber", "==", formData.contactNumber));

        const [emailQuerySnapshot, contactQuerySnapshot] = await Promise.all([
            getDocs(emailQuery),
            getDocs(contactQuery)
        ]);

        if (!emailQuerySnapshot.empty) {
            setAlertMessage("Email already exists. Please use a different email.");
            setShowAlert(true);
            return;
        }

        if (!contactQuerySnapshot.empty) {
            setAlertMessage("Contact number already exists. Please use a different contact number.");
            setShowAlert(true);
            return;
        }

        try {
            await addDoc(ref, formData);
            setAlertMessage("We'll get in touch soon!");
            setShowAlert(true);
            setFormData({
                name: "",
                email: "",
                contactNumber: ""
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            setAlertMessage("An error occurred. Please try again.");
            setShowAlert(true);
        }
    };

    return (
        <section className={styles.container} id="join">
            <h2 className={styles.title}>JOIN US</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div>
                    <label className={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>Contact Number:</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        minLength={10}
                        maxLength={10}
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.submitcont}>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </div>
            </form>
            {showAlert && <CustomAlert message={alertMessage} onClose={handleCloseAlert} />}
        </section>
    );
}
