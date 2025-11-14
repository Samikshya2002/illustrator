import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const Example=()=>{
    const{isPending, error, data, isFetching } = useQuery({
        queryKey :['repoData'],
        queryFn : async()=>{
            const res = await axios.get('https://api.github.com/repos/TanStack/query')
            return res.data;

        }
    })

}
export default Example;