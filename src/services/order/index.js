import Cookies from 'js-cookie';

export const createNewOrder = async (formData) => {
  try {
    const res = await fetch('http://localhost:3000/api/order/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrdersForUsers = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/order/get-all-orders?id=${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetails = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/order/order-details?id=${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrdersForAllUsers = async () => {
  try {
    const res = await fetch(
      'http://localhost:3000/api/admin/orders/get-all-orders',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderStatus = async (formData) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/admin/orders/update-order`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
