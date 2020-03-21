package com.youmarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youmarket.domain.Cesta;
import com.youmarket.domain.Producto;
import com.youmarket.repositories.CestaRepository;

@Service
public class CestaService {
	
	@Autowired
	private CestaRepository repo;

	public List<Cesta> listaCestas(){
		
		return repo.findAll(); 
	}

	public Cesta findById(int id) {
		
		return repo.findById(id).get();
	}

	public Cesta save(Cesta p) {
		
		return repo.save(p);
	}

	public void delete() {
		// TODO Auto-generated method stub
		
	}

	public Cesta findCesta(int id) {
		return this.repo.findById(id).orElse(null);
	}


	public void delete(Cesta c) {
		this.repo.delete(c);
	}
	
	public Cesta saveProductos(Cesta c, List<Producto> lp){
		
//		c.setProductos(lp);
		return this.save(c);
	}
}
