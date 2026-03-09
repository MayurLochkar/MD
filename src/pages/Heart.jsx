export default function Heart() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Heart Disease Risk Prediction
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Provide medical parameters to evaluate cardiovascular risk.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <input type="number" placeholder="Age"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />

          <input type="number" placeholder="Resting Blood Pressure"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />

          <input type="number" placeholder="Cholesterol"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />

          <input type="number" placeholder="Max Heart Rate"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />

        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
            Predict Risk
          </button>
        </div>

      </div>
    </div>
  );
}
