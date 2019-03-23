import React, { Component } from "react";
import styles from "./Course.module.css";
import ImageHolder from "./ImageHolder";
import DataBase from "./img/database.jpeg";
import cn1 from "./img/cn1.jpeg";
import datascience from "./img/datascience.jpeg";
import ml from "./img/ml.jpeg";
import ds from "./img/datastructure.png";
import java from "./img/java.png";
import c from "./img/c.jpeg";
import sql from "./img/sql.png";
import cpp from "./img/C++.png";
import python from "./img/pythpn.jpeg";
const small = true;
export default class Course extends Component {
  render() {
    return (
      <div className={styles.course}>
        <ImageHolder
          title={"DataBase"}
          image={DataBase}
          link={"https://www.javatpoint.com/dbms-tutorial"}
        />
        <ImageHolder
          title={"Computer Network"}
          image={cn1}
          link={"https://www.javatpoint.com/computer-network-tutorial"}
        />
        <ImageHolder
          title={"DataScience"}
          image={datascience}
          link={"https://www.javatpoint.com/data-structure-tutorial"}
        />
        <ImageHolder
          title={"Meachine Learning"}
          image={ml}
          link={"https://www.guru99.com/machine-learning-tutorial.html"}
        />
        <ImageHolder
          title={"Java"}
          image={java}
          link={"https://www.javatpoint.com/java-tutorial"}
        />
        <ImageHolder
          title={"C"}
          image={c}
          link={"https://www.javatpoint.com/c-programming-language-tutorial"}
        />
        <ImageHolder
          title={"C++"}
          image={cpp}
          link={"https://www.javatpoint.com/cpp-tutorial"}
        />
        <ImageHolder
          title={"SQL"}
          image={sql}
          link={"https://www.javatpoint.com/sql-tutorial"}
        />
        <ImageHolder
          title={"PYTHON"}
          image={python}
          link={"https://www.javatpoint.com/python-tutorial"}
        />
      </div>
    );
  }
}
