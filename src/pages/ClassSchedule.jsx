import Days from "../features/schedule/Days";

const ClassSchedule = () => {
  return (
    <>
      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Class Schedule</h1>
          <p className="mt-4 text-gray-600">
            Stay fit and healthy with our variety of classes.
          </p>
        </div>
      </div>

      {/* class schedule table */}
      <div className="container mx-auto px-4 py-8">
        <Days />
      </div>
    </>
  );
};

export default ClassSchedule;
