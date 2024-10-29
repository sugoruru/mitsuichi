begin;
delete from main
where id = $1;
commit;