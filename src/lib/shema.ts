import { SQliteTable, integer, text} from "drizzle-orm/sqlite-core"
import {sql} from "drizzle-orm"
import {foreignKey} from "drizzle-orm/mysql-core";

export const jornada = SQliteTable("jornada", {
    id_jornada: integer("id_jornada") .PRIMARYKEY,
    nom_jornada: text("nom_jornada"),
});

export const media_tecnica = SQliteTable("media_tecnica",{
    id_media_tecnica: integer("id_media_tecnica") .PRIMARYKEY,
    nom_media: text("nom_media"),
    desc_media: text("desc_media"),
    id_estudiante_inscrito: integer("id_estudiante_inscrito").references (()=>estudiantes_inscritos.id_estudiantes_insscritos)
    id_jornada: integer("id_jornada").references (()=>jornada.id_jornada),
});

export const estudiantes_inscritos = SQliteTable("estudiantes_inscritos"),{
    id_
};


