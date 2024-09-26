-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `jornadas` (
	`id_jornada` integer PRIMARY KEY,
	`nom_jornada` text
);
--> statement-breakpoint
CREATE TABLE `media_tecnica` (
	`id_media_tecnica` integer PRIMARY KEY,
	`nom_media` text,
	`desc_media` text,
	`id_estudiante_inscrito` integer,
	`id_jornada` integer,
	FOREIGN KEY (`id_estudiante_inscrito`) REFERENCES `estudiantes_inscritos`(`id_estudiante_inscrito`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_jornada`) REFERENCES `jornadas`(`id_jornada`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `estudiantes_inscritos` (
	`id_estudiante_inscrito` numeric PRIMARY KEY,
	`nombre_apellidos` text,
	`id_media_tecnica` integer,
	`id_jornada` integer,
	FOREIGN KEY (`id_media_tecnica`) REFERENCES `media_tecnica`(`id_media_tecnica`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_jornada`) REFERENCES `jornadas`(`id_jornada`) ON UPDATE no action ON DELETE no action
);

*/