import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

function EditCustomerPage({ customer }) {
  const date = customer.date ? moment(customer.date).format("YYYY-MM-DD") : "";
  console.log(customer);
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: customer.name,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || "",
    address: customer.address || "",
    postalCode: customer.postalCode || "",
    date: date,
    products: customer.products || "",
  });

  const editHandler = async () => {
    const res = await fetch(`/api/edit/${customer._id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: userData }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    console.log(data);

    if (data.status === "success") router.push("/");
    else alert("Invalid Data");
  };
  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Add new Customer</h4>
      <Form form={userData} setForm={setUserData} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditCustomerPage;
