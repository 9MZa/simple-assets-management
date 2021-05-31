SELECT  employee_assets.id,DATE_FORMAT(employee_assets.date_time, '%d %b %Y') AS 'date_time'  ,employee_assets.asset_id, 
assets_item.name AS 'item', asset_type.name AS 'type' , employees.name AS 'employee', staffs.name AS 'staff'
FROM ((((employee_assets
INNER JOIN employees ON employee_assets.employee_id = employees.id)
INNER JOIN assets_item ON employee_assets.asset_id = assets_item.id)
INNER JOIN asset_type ON assets_item.asset_type_id = asset_type.id)
INNER JOIN staffs ON employee_assets.staff_id = staffs.id)
ORDER BY employee_assets.id ASC;
