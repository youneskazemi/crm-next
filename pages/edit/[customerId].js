import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EditCustomerPage from "../../components/templates/EditCustomerPage";

const Edit = () => {
  const [data, setData] = useState();

  const router = useRouter();

  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);

  if (data) return <EditCustomerPage customer={data} />;
};

export default Edit;
