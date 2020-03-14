package com.youmarket.domain;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="nombre", length=50)
	private String name;
	
	@Positive
	private double precio;
	
	@Positive
	private double precioIva;
	
	@Column(name="descripcion", length = 255)
	private String descripcion;
	
	@Positive
	private double peso;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="marca")
	private Marca marca;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="departamento")
	private Departamento departamento;
	
	@ManyToMany
	private List<Etiqueta> etiqueta;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="supermercado_id")
	private Supermercado supermercado;
	
	@Column(name="url_imagen")
	private String imagen;
	
	@JoinColumn(name="unidad")
	private String unidad;

	public Producto(int id, String name, @Positive double precio) {
		super();
		this.id = id;
		this.name = name;
		this.precio = precio;
	}



	
	
}
