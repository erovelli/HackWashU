package tech.getarrays.foame.resource;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.foame.model.Order;
import tech.getarrays.foame.service.OrderService;


import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderResource {
    private final OrderService orderService;

    public OrderResource(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> order = orderService.findAllOrders();
        return new ResponseEntity<>(order, HttpStatus.OK);

    }

    @GetMapping("/find/{}")
    public ResponseEntity<Order> getOrderById(@PathVariable("name") String name) {
        Order order = orderService.findOrderByName(name);
        return new ResponseEntity<>(order, HttpStatus.OK);

    }

    @PostMapping("/add")
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        Order newOrder = orderService.addOrder(order);
        return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{name}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

