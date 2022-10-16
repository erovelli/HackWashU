package tech.getarrays.foame.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="orders")
public class Order implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(nullable = false)
    private String name;
    private Long drinkId;
    private String drinkName;

    public Order() {}

    public Order(String name, Long drinkId, String drinkName) {
        this.name = name;
        this.drinkId = drinkId;
        this.drinkName = drinkName;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public Long getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(Long drinkId){
        this.drinkId = drinkId;
    }

    public String getDrinkName() {
        return drinkName;
    }

    public void setDrinkName(String drinkName){
        this.drinkName = drinkName;
    }
}
