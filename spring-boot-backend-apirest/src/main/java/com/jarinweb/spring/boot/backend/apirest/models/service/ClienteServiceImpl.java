package com.jarinweb.spring.boot.backend.apirest.models.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.jarinweb.spring.boot.backend.apirest.model.entity.Cliente;
import com.jarinweb.spring.boot.backend.apirest.models.dao.IClienteDao;

@Service
public class ClienteServiceImpl implements IClienteService{

	@Autowired IClienteDao clienteDao;
	
	@Override
	@Transactional
	public List<Cliente> FindAll() {
		
		return (List<Cliente>)clienteDao.findAll();
	}
	
	

}
