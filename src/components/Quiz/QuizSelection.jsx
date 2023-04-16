const assessmentTypes = [
  {
    option: "techical",
    description: "Assess your technical capabilities",
    url: "/assessment/technical",
  },
  {
    description: "How about we get to know you",
    option: "psychometric",
    url: "/assessment/psychomentric",
  },
];

export const QuizSelection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        {assessmentTypes.map((item, index) => {
          return (
            <div key={index} className="shadow mx-3 p-3">
              <div className="text-2xl capitalize font-semibold">
                {item.option}
              </div>
              <div className="text-gray my-3 ">{item.description}</div>
              <a
                className="p-3 bg-gray-600 hover:bg-gray-700  my-3 w-full text-white"
                href={item.url}
              >
                Start
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
