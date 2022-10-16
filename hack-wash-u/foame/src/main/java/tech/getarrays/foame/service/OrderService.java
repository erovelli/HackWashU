package tech.getarrays.foame.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.foame.model.Order;
import tech.getarrays.foame.repo.OrdersRepo;

import java.util.List;


@Service
public class OrderService {
    private final OrdersRepo ordersRepo;

    @Autowired
    public OrderService(OrdersRepo ordersRepo) {
        this.ordersRepo = ordersRepo;
    }

    public Order addOrder(Order order) {
        order.setId(10L);
        return ordersRepo.save(order);
    }

    public List<Order> findAllOrders() {
        return ordersRepo.findAll();

    }

    public Order findOrderByName(String name) {
        return ordersRepo.findOrderByName(name);

    }

    public void deleteOrder(Long id){
        ordersRepo.deleteOrderById(id);
    }
}
