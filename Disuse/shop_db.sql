create database shop_db default character set UTF8;

use shop_db;

create table User
(
	name varchar(30),
	birth varchar(30),
	tel int(30),
    adrdress varchar(30)
);

show tables;

insert into User(name,birth,tel,address) values(홍길동,19990323,01012341234,부산시);

select *
from User