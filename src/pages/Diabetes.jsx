export default function Diabetes() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Diabetes Risk Prediction
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Enter clinical parameters to assess diabetes risk using our Machine Learning model.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <input type="number" placeholder="Glucose Level"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

          <input type="number" placeholder="BMI"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

          <input type="number" placeholder="Insulin"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

          <input type="number" placeholder="Age"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Predict Risk
          </button>
        </div>

      </div>
    </div>
  );
}
