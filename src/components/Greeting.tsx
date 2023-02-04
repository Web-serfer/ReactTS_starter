interface IGreeting {
  name: string;
}

export const Greeting = ({ name }: IGreeting) => {
  return (
    <div>
      <h2>Hello {name} !!!</h2>
    </div>
  );
};
