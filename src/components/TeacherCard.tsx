interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  paymentStatus: 'paid' | 'pending';
}

interface Props {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900">{teacher.name}</h2>
<p className="text-base text-blue-700">{teacher.subject}</p>
<p className="text-sm text-gray-700">{teacher.email}</p>
<p className="text-sm text-gray-700">{teacher.phone}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
          teacher.paymentStatus === 'paid'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {teacher.paymentStatus}
      </span>
    </div>
  );
}

