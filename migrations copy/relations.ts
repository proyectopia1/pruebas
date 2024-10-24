import { relations } from "drizzle-orm/relations";
import { estudiantesInscritos, mediaTecnica, jornadas } from "./schema";

export const mediaTecnicaRelations = relations(mediaTecnica, ({one, many}) => ({
	estudiantesInscrito: one(estudiantesInscritos, {
		fields: [mediaTecnica.idEstudianteInscrito],
		references: [estudiantesInscritos.idEstudianteInscrito],
		relationName: "mediaTecnica_idEstudianteInscrito_estudiantesInscritos_idEstudianteInscrito"
	}),
	jornada: one(jornadas, {
		fields: [mediaTecnica.idJornada],
		references: [jornadas.idJornada]
	}),
	estudiantesInscritos: many(estudiantesInscritos, {
		relationName: "estudiantesInscritos_idMediaTecnica_mediaTecnica_idMediaTecnica"
	}),
}));

export const estudiantesInscritosRelations = relations(estudiantesInscritos, ({one, many}) => ({
	mediaTecnicas: many(mediaTecnica, {
		relationName: "mediaTecnica_idEstudianteInscrito_estudiantesInscritos_idEstudianteInscrito"
	}),
	mediaTecnica: one(mediaTecnica, {
		fields: [estudiantesInscritos.idMediaTecnica],
		references: [mediaTecnica.idMediaTecnica],
		relationName: "estudiantesInscritos_idMediaTecnica_mediaTecnica_idMediaTecnica"
	}),
	jornada: one(jornadas, {
		fields: [estudiantesInscritos.idJornada],
		references: [jornadas.idJornada]
	}),
}));

export const jornadasRelations = relations(jornadas, ({many}) => ({
	mediaTecnicas: many(mediaTecnica),
	estudiantesInscritos: many(estudiantesInscritos),
}));