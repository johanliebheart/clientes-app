package com.jarinweb.spring.boot.backend.apirest.models.service;

import java.util.List;

import com.jarinweb.spring.boot.backend.apirest.model.entity.Cliente;

public interface IClienteService {

	public List<Cliente> FindAll();
	
	public Cliente save (Cliente cliente);
	
	public Cliente findById(Long id);
	
	public void delete (Long id);
	
	
}
