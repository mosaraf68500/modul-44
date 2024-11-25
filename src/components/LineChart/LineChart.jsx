import { LineChart as Lchart ,CartesianGrid, Line,XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const mathMarks = [
        { name: "Student 1", marks: 85 },
        { name: "Student 2", marks: 92 },
        { name: "Student 3", marks: 78 },
        { name: "Student 4", marks: 88 },
        { name: "Student 5", marks: 95 },
        { name: "Student 6", marks: 76 },
        { name: "Student 7", marks: 89 },
        { name: "Student 8", marks: 84 },
        { name: "Student 9", marks: 91 },
        { name: "Student 10", marks: 80 }
      ];

      
    return (
        <div className='text-center w-1/2 mx-auto'>
        <Lchart width={800} height={300} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
            <Line type="monotone" dataKey="marks" stroke='yellow'></Line>
            <CartesianGrid stroke="#ccc" />

        </Lchart>
            
        </div>
    );
};

export default LineChart;