import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Initial',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    brb: 2000
  },
  {
    name: 'Result',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    brb: 2000
  }
];

export default function Page() {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="brb" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )

}
