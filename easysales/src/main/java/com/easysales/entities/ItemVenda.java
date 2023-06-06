package com.easysales.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class ItemVenda {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String itemVendaId;


}
