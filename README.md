# DOTA2 HEROES

APIRest contruida para la consulta de heroes de Dota2

## RUTA PARA BUSCAR POR NOMBRE

puedes buscar tanto por nombre completo o por parte de nombre , la api responderá 
con todos los que coincidan 

> /api/heroes/getHeroeByName?name=:nombre
> :nombre = nombre del héroe o parte del nombre

      
	[
		{
			"id": 5,
			"name": "Crystal Maiden",
			"primary_atr": "int",
			"attack_type": "RANGED",
			"role": ["Support","Disabler","Nuker","Jungler"],
			"img": "[https://api.opendota.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png?](https://api.opendota.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png?)",
			"base_str": "18",
			"base_agi": "16",
			"base_int": "16",
			"str_gain": "2.2",
			"agi_gain": "1.6",
			"int_gain": "3.3",
			"attack_range": "600",
			"move_speed": "280",
			"attack_rate": "1.7"
		}
	]

## RUTA PARA BUSCAR POR ID

> /api/heroes//id/:id
> :id = id del heroe

    
	    {
		    "id": 5,
		    "name": "Crystal Maiden",
		    "primary_atr": "int",
		    "attack_type": "RANGED",
		    "role": ["Support","Disabler","Nuker","Jungler"],
		    "img": "[https://api.opendota.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png?](https://api.opendota.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png?)",
		    "base_str": "18",
		    "base_agi": "16",
		    "base_int": "16",
		    "str_gain": "2.2",
		    "agi_gain": "1.6","
		    int_gain": "3.3",
		    "attack_range": "600",
		    "move_speed": "280",
		    "attack_rate": "1.7"
		}


## RUTA PARA TRAER TODO LOS HEROES

> /api/heroes/all

    [
	    {
		    "id": 1,"name": "Anti-Mage",
		    "primary_atr": "agi",
		    "attack_type": "MELEE",
		    "role": ["Carry","Escape","Nuker"],
		    "img": "[https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png?](https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png?)",
		    "base_str": "21",
		    "base_agi": "24",
		    "base_int": "12",
		    "str_gain": "1.6",
		    "agi_gain": "2.8",
		    "int_gain": "1.8",
		    "attack_range": "150",
		    "move_speed": "310",
		    "attack_rate": "1.4"
	    },
	    y mas
	]

## RUTA PARA TRAER POR TIPO DE ATAQUE

> /api/heroes/attack_type/:type
> :type = "MELEE  o RANGED

    [
	    {
		    "id": 3,
		    "name": "Bane",
		    "primary_atr": "int",
		    "attack_type": "RANGED",
		    y mas...
		},
	    {
			"id": 5,
			"name": "Crystal Maiden",
			"primary_atr": "int",
			"attack_type": "RANGED",
			y mas...
	    },
		y mas..
	]

## RUTA PARA TRAEN POR ATRIBUTO PRIMARIO

    

> /api/heroes/primary_atr/:atr
> :atr = int , agi o str

    [
	    {
		    "id": 2,
		    "name": "Axe",
		    "primary_atr": "str",
		    "attack_type": "MELEE",
		    y mas ...
	    },
		{
			"id": 14,
			"name": "Pudge",
			"primary_atr": "str",
			"attack_type": "MELEE",
			y mas ...
		},
		y mas ..
	]

