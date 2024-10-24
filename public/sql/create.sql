begin;
insert into main (
        "id",
        "username",
        "score",
        "time"
    )
values (gen_random_uuid(), $1, $2, now());
commit;