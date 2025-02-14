package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.EstoqueRepository;
import com.easysales.entities.Estoque;

@Service
public class EstoqueService {
     @Autowired
    private EstoqueRepository estoqueRepository;

    public List<Estoque> getAllEstoques() {
        return estoqueRepository.findAll();
    }

    public Estoque getEstoqueById(Integer id) {
        return estoqueRepository.findById(id).orElse(null);
    }

    public Estoque createEstoque(Estoque estoque) {
        return estoqueRepository.save(estoque);
    }

    public Estoque updateEstoque(Integer id, Estoque estoque) {
        if (estoqueRepository.existsById(id)) {
            estoque.setIdEstoque(id);
            return estoqueRepository.save(estoque);
        }
        return null;
    }

    public void deleteEstoque(Integer id) {
        estoqueRepository.deleteById(id);
    }
}
