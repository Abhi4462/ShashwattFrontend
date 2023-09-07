import { useEffect, useState } from "react";
import ReactPaginate from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

function ViewVendors() {
  const [userList, setUserList] = useState([]);
  const [activePage, setActivePage] = useState(1); // Active page for pagination
  const itemsPerPage = 12; // Number of items to display per page
  const navigate = useNavigate();
  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = "http://localhost:8181/vendors-list-authentic";
    axios.get(url).then((response) => {
      setUserList(response.data);
    });
  };

  const handleEdit = (id) => {
    // Save the ID in localStorage
    localStorage.setItem("id", id);
    // console.log(empId);
    // Navigate to the Add Employee page
    navigate("/vendor-info");
  };

  const handleDelete = (userId) => {
    let url = `http://localhost:8181/delete?empId=${userId}`;
    axios.get(url).then((response) => {
      getAllUserAction();
    });
  };

  // Calculate the total number of pages based on the number of items and itemsPerPage
  const totalItemsCount = userList.length;
  const totalPagesCount = Math.ceil(totalItemsCount / itemsPerPage);

  // Get the current page's items based on the activePage and itemsPerPage
  const getPageItems = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userList.slice(startIndex, endIndex);
  };

  // Handle page change event
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <div className="row background-image p-2 justify-content-center">
        <div className="col-sm-12 col-md-11">
          <div className="row justify-content-between">
            <input
              type="button"
              value="All Vendors"
              className="w-100 btn btn-lg btn-primary mb-3 shadow"
            />
            <div className="table-responsive">
              <table className="table table-light shadow">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">License Number</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Email</th>
                    <th scope="col">Shop Name</th>
                    <th scope="col">Street Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Postal Code</th>
                    
                    
                   
                  </tr>
                </thead>
                <tbody>
                  {getPageItems().map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td className="text-capitalize">{item.vendorName}</td>
                      <td>{item.licenseNumber}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.shopName}</td>
                      <td>{item.address.streetAddress}</td>
                      <td>{item.address.city}</td>
                      <td>{item.address.state}</td>
                      <td>{item.address.postalCode}</td>
                      
                       
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
      <ReactPaginate
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="Previous"
                nextPageText="Next"
                firstPageText="First"
                lastPageText="Last"
                innerClass="pagination justify-content-center"
                activeClass="active"
              />
      </div>
    </>
  );
}

export default ViewVendors;
