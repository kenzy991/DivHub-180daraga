import { useState } from "react";
import axios from "axios";

export default function Hero2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        university: "",
        university_level: "",
        course: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(
                "https://fake-form.onrender.com/api/students/addStudent",
                formData
            );
            console.log("Response:", response.data);
            console.log("Response:", response.status);
            alert("Form submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                university: "",
                university_level: "",
                course: "",
            });
    
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white mt-9">
            <div className="w-[85%] max-w-md sm:w-[35%]">
                <h2 className="text-2xl font-bold text-center mb-[3%]">Cautions</h2>
                <p className="text-center text-[1.1rem] font-sans mb-[10%]">
                    Be sure to check your E-mail after submitting the form!
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608] outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608] outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608] outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block">University</label>
                        <select
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608]"
                            required
                        >
                            <option value="">Select an option:</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Ain Shams">Ain Shams</option>
                            <option value="Helwan">Helwan</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block">University Level</label>
                        <select
                            name="university_level"
                            value={formData.university_level}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608]"
                            required
                        >
                            <option value="">Select an option:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <label className="block">Course</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:border-[#700608]"
                            required
                        >
                            <option value="">Select an option:</option>
                            <option value="C++">C++</option>
                            <option value="OOP">OOP</option>
                            <option value="Flutter">Flutter</option>
                            <option value="DS & Algorithms">DS & Algorithms</option>
                            <option value="UI/UX">UI/UX</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#700608] text-white p-2 rounded-sm text-base font-sans mb-[20%] md:mb-[10%]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
