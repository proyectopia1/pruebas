import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const jornadas = sqliteTable("jornadas", {
	idJornada: integer("id_jornada").primaryKey(),
	nomJornada: text("nom_jornada"),
});

export const mediaTecnica = sqliteTable("media_tecnica", {
	idMediaTecnica: integer("id_media_tecnica").primaryKey(),
	nomMedia: text("nom_media"),
	descMedia: text("desc_media"),
	idEstudianteInscrito: integer("id_estudiante_inscrito").references((): AnySQLiteColumn => estudiantesInscritos.idEstudianteInscrito),
	idJornada: integer("id_jornada").references(() => jornadas.idJornada),
});

export const estudiantesInscritos = sqliteTable("estudiantes_inscritos", {
	idEstudianteInscrito: numeric("id_estudiante_inscrito").primaryKey(),
	nombreApellidos: text("nombre_apellidos"),
	idMediaTecnica: integer("id_media_tecnica").references((): AnySQLiteColumn => mediaTecnica.idMediaTecnica),
	idJornada: integer("id_jornada").references(() => jornadas.idJornada),
});