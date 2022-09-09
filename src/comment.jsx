import React from 'react'

export default function comment({name,time,info}) {
  return (
    <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADYQAAICAQIDAwgJBQAAAAAAAAABAgMEBREhMUESUXEGEyJhgZGx4SMyQlJiY6HB8BQlM5PR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAMZ2Qgt5yjFd7exoeoYa4PKo/2IDpBphl41n+PIql4TRuAAAAAAAAAAAAAROs6qsROmhp3tcX0h8wOrP1LHwl9JJym1uoR5/Ir+XreXe2q5eZh3Q5+8jpylOTlOTlKT3bb5ngHspSm95ycn3ye7PAABvx8zJxmvMXTj+Hfde40ACwYXlBGTUMyKj+ZHl7UTkJxsipQkpRfFNcmUM7dM1K3BntxlS36UP3QFxBrouhfVG2qSlCS3TRsAAAAAAOLVc1YWLKzg5vhBPqynzlKcnKcnKUnu2+pI6/lO/OcE/Qq9FePX+eojQAAXEACd0/R4RgrMtdqb4qvovHvJWNdcFtGEYruSSApoLXk4ONkr6SpKX3o8GV7UMKeFaot9qEvqz7/mBygACU0HPeNkKmb+hte3H7L7y1FBLjpGS8rBrnJ7zj6MvFAdoAAGNs1XXKb5RTbMjm1J7afkv8qXwApcpOcpSlzk934ngAAkNDoV2cnLlWu17ehHkr5PTUcm2L5yhw9jAnwAAOXU6FfhWxfOK7UfFHUasqahjXSlyUGwKgDxHoAnvJa19rIq6bKS+D/YgSW8mX/cJL8p/FAWgAADTmw85h3wXOVcl+huPGBQgb86h42ZbTtsoye3h0/Q0ADZj3Sx74XQ5xe+3f6jWZV1ztmoVwlKT6JAW3GyK8qlWVPddV1T7mbSu1adqOOldT6MusYy4+1cjctT1GC2njKT9dcl8AJwhNbz4yX9LTLfj6bXwMJT1XOXYUHXB89l2F7+Zx5Wn5OLxshvD70OKA5QAAJnyYhvmWz6Rr297X/CGLN5M0djEnc1xtlw8F/GBMAAAAAIHylw24xy4L6q7M/Doyvl8shGyEoTSlGS2afVFS1PTbMTIUYJyrse1b/bxA0YOHZmXdiHCK4yl0SLNi4tWJX2KY7d76y8TzCxo4mPGqPPnJ97N4AAAAABD6ppSlGV2LHaS4yguvgQZdCv63h+bvjdVF7WvZxS+18wODFonk3wpr+tN7b9y6su1FUaaYVVraMFsiO0TTv6Ot2WpefmuP4V3EoAAAAAADGUIy+sk+vFGQA0Tra4rijA6jGUIvoBzg2uruZj5qXqAwBsVT6tGSqS58QNSTb4Lc2xqitnJJtcU2uRmkktkegAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k= " alt="pic" />
      </a>
      <div className="content">
        <a href="/" className="author">
               {name}
        </a>

        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">
               {info}
        </div>
      </div>
    </div>
  </div>
  )
}
