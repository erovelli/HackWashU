package tech.getarrays.foame.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.foame.model.Order;

public interface OrdersRepo extends JpaRepository<Order, Long> {

    void deleteOrderById(Long id);

    Order findOrderByName(String name);
}
