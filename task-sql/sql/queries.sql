/*Insert multiple values into customers table */

INSERT INTO Customers 
VALUES (6, 'Swaroop', 'vallamkonda', 18, 'IND'), (7, 'jyothi', 'vallamkonda', 19, 'USA');

/*To get number of ci=ustomers per country */ 
SELECT country, count(*) as count_of_customers from customers 
group by country;

/*To get the orders who have amount between 100 to 500.*/ 
SELECT * from Orders
WHERE amount between 100 and 500;

/*To get the first name and last name of customers who have bought Keypad.*/

SELECT orders.order_id, customers.first_name, customers.last_name
FROM orders, customers
WHERE orders.customer_id = customers.customer_id and orders.item = "Keyboard";

/*To get the name of the countries where shipping status is Pending.*/

SELECT customers.country as pending_shipping_countries from 
Shippings join Customers on shippings.customer=customers.customer_id 
where shippings.status="Pending" 
group by customers.country

/*To get the number of orders per customer.*/
SELECT customers.customer_id, Count(Orders.order_id) AS TotalOrders
FROM orders join customers
Where orders.customer_id = customers.customer_id
GROUP BY customers.customer_id
Order BY Count(Orders.order_id) ASC;

