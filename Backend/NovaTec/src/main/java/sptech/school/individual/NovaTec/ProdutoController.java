package sptech.school.individual.NovaTec;


import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final JdbcTemplate template;

    public ProdutoController(JdbcTemplate template) {
        this.template = template;
    }

@PostMapping
public ResponseEntity<Produtos> cadastrar(@RequestBody Produtos produto){
    String sql = "INSERT INTO produto (nome, descricao, preco, categoria, quantidade, imagem) VALUES (?, ?, ?, ?, ?, ?)";
    KeyHolder holder = new GeneratedKeyHolder();
    template.update(con -> {
        PreparedStatement statement = con.prepareStatement(
                sql,
                Statement.RETURN_GENERATED_KEYS
        );
        statement.setString(1, produto.getNome());
        statement.setString(2, produto.getDescricao());
        statement.setDouble(3, produto.getPreco());
        statement.setString(4, produto.getCategoria());
        statement.setInt(5, produto.getQuantidade());
        statement.setString(6, produto.getImagem());

        return statement;
    }, holder);
    Integer idGerado = holder.getKey().intValue();
    produto.setId(idGerado);
    return ResponseEntity.status(201).body(produto);
}

    @GetMapping
    public ResponseEntity<List<Produtos>> listar(){
        String sql = "SELECT * FROM produto";
        List<Produtos> resultado = template.query(sql, new BeanPropertyRowMapper<>(Produtos.class));
        return ResponseEntity.status(200).body(resultado);
    }
}
