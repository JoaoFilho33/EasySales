package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.VendaRepository;
import com.easysales.entities.Venda;

@Service
public class VendaService {
      @Autowired
    private VendaRepository vendaRepository;

    public List<Venda> getAllVendas() {
        return vendaRepository.findAll();
    }

    public Venda getVendaById(Integer id) {
        return vendaRepository.findById(id).orElse(null);
    }

    public Venda createVenda(Venda venda) {
        return vendaRepository.save(venda);
    }

    public Venda updateVenda(Integer id, Venda venda) {
        if (vendaRepository.existsById(id)) {
            venda.setIdVenda(id);
            return vendaRepository.save(venda);
        }
        return null;
    }

    public void deleteVenda(Integer id) {
        vendaRepository.deleteById(id);
    }
}
