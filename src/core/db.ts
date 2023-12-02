import postgres from "postgres";

const sql = postgres({
	database: "popkat",
	transform: postgres.fromCamel,
});

export default sql;
