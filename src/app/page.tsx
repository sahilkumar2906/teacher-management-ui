'use client';
import { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import { sampleTeachers } from '../app/data/teacher';

export default function HomePage() {
  const [teachers, setTeachers] = useState(sampleTeachers);

const [form, setForm] = useState({
  name: '',
  subject: '',
  email: '',
  phone: '',
  paymentStatus: 'pending',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const newTeacher = {
    id: teachers.length + 1,
    ...form,
  };

  setTeachers([newTeacher, ...teachers]);
  setForm({ name: '', subject: '', email: '', phone: '', paymentStatus: 'pending' });
};
  return (
   <main className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
    Teacher Management
  </h1>
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6 max-w-xl mx-auto space-y-4">
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Name"
    className="w-full border p-2 rounded"
    required
  />
  <input
    type="text"
    name="subject"
    value={form.subject}
    onChange={handleChange}
    placeholder="Subject"
    className="w-full border p-2 rounded"
    required
  />
  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email"
    className="w-full border p-2 rounded"
    required
  />
  <input
    type="text"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="Phone"
    className="w-full border p-2 rounded"
    required
  />
  <select
    name="paymentStatus"
    value={form.paymentStatus}
    onChange={handleChange}
    className="w-full border p-2 rounded"
  >
    <option value="paid">Paid</option>
    <option value="pending">Pending</option>
  </select>
  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
    Add Teacher
  </button>
</form>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {teachers.map((teacher) => (
  <TeacherCard key={teacher.id} teacher={teacher} />
  
))}
  </div>
</main>
  );
}