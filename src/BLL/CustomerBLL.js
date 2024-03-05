var arrCus = [];

export function addCustomer(id, name, address, mobileNo) {
  var newCus = { id: id, name: name, address: address, mobileNo: mobileNo };
  arrCus.push(newCus);
}
export function getCustomerList() {
  return [...arrCus];
}
export function searchCustomer(id) {
  var e = arrCus.find((e) => e.id === id);
  return e;
}
export function modifyCustomer(id, name, address, mobileNo) {
  var cus = arrCus.find((e) => e.id === id);
  if (cus !== undefined) {
    cus.name = name;
    cus.mobileNo = mobileNo;
    cus.address = address;
  } else {
    return "id not find";
  }
}
export function deleteCustomer(id) {
  let index = arrCus.findIndex((e) => e.id === id);
  return index !== -1 ? arrCus.splice(index, 1) : "id not found ";
}
