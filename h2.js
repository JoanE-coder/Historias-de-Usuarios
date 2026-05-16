// ============================================================
// gestion_datos.js — Estructuras de datos avanzadas en JS
// Objetos · Sets · Maps · Iteración · Validación
// ============================================================
 
 
// ============================================================
// Objeto de productos
// Cada producto tiene: id, nombre y precio
// ============================================================
 
const productos = {
  prod_01: { id: "prod_01", nombre: "Laptop",    precio: 1200 },
  prod_02: { id: "prod_02", nombre: "Mouse",     precio: 25   },
  prod_03: { id: "prod_03", nombre: "Teclado",   precio: 45   },
  prod_04: { id: "prod_04", nombre: "Monitor",   precio: 300  },
  prod_05: { id: "prod_05", nombre: "Audífonos", precio: 80   },
};
 
console.log("=== Objeto de productos ===");
console.log(productos);
 
 
// ============================================================
// Set de números (unicidad garantizada)
// ============================================================
 
console.log("\n=== TASK 2 — Set ===");
 
// Creación: los duplicados se eliminan automáticamente
const numerosSet = new Set([10, 20, 30, 20, 10, 40, 30, 50]);
console.log("Set inicial (sin duplicados):", numerosSet);
 
// Agregar un nuevo número
numerosSet.add(60);
console.log("Después de .add(60):", numerosSet);
 
// Verificar si un número existe
console.log("¿Contiene el 20? →", numerosSet.has(20));
console.log("¿Contiene el 99? →", numerosSet.has(99));
 
// Eliminar un número
numerosSet.delete(30);
console.log("Después de .delete(30):", numerosSet);
 
// Recorrer el Set con for...of
console.log("Valores del Set:");
for (const numero of numerosSet) {
  console.log("  →", numero);
}
 
 
// ============================================================
// Map: categoría → nombre de producto
// ============================================================
 
console.log("\n=== TASK 3 — Map ===");
 
// Relaciona categoría (clave) con nombre de producto (valor)
const categoriaMap = new Map([
  ["Computación",  "Laptop"],
  ["Periférico",   "Mouse"],
  ["Periférico",   "Teclado"],   // sobrescribe la clave anterior (Map no repite claves)
  ["Pantalla",     "Monitor"],
  ["Audio",        "Audífonos"],
]);
 
console.log("Map de categorías:", categoriaMap);
 
 
// ============================================================
// Iteración sobre las tres estructuras
// ============================================================
 
console.log("\n=== TASK 4 — Iteración ===");
 
// --- for...in sobre el objeto de productos ---
console.log("\n[ for...in ] Propiedades del objeto productos:");
for (const clave in productos) {
  const p = productos[clave];
  console.log(`  ${clave} → ${p.nombre} | $${p.precio}`);
}
 
// --- Object.keys(), Object.values(), Object.entries() ---
console.log("\n[ Object.keys() ]",   Object.keys(productos));
console.log("[ Object.values() ]",  Object.values(productos));
console.log("[ Object.entries() ]", Object.entries(productos));
 
// --- for...of sobre el Set ---
console.log("\n[ for...of ] Números del Set:");
for (const num of numerosSet) {
  console.log("  Número:", num);
}
 
// --- forEach sobre el Map ---
console.log("\n[ forEach ] Categorías y productos del Map:");
categoriaMap.forEach((nombreProducto, categoria) => {
  console.log(`  Categoría: "${categoria}" → Producto: "${nombreProducto}"`);
});
 
 
// ============================================================
// Validación de productos
// ============================================================
 
console.log("\n=== TASK 5 — Validación ===");
 
/**
 * Valida que un producto tenga id (string), nombre (string)
 * y precio (número mayor a 0).
 * @param {Object} producto
 * @returns {boolean}
 */
const esProductoValido = (producto) => {
  if (!producto || typeof producto !== "object") {
    console.warn("  ✗ El argumento no es un objeto.");
    return false;
  }
  if (typeof producto.id !== "string" || producto.id.trim() === "") {
    console.warn(`  ✗ id inválido en:`, producto);
    return false;
  }
  if (typeof producto.nombre !== "string" || producto.nombre.trim() === "") {
    console.warn(`  ✗ nombre inválido en:`, producto);
    return false;
  }
  if (typeof producto.precio !== "number" || producto.precio <= 0) {
    console.warn(`  ✗ precio inválido en:`, producto);
    return false;
  }
  return true;
};
 
// --- Validar todos los productos del objeto ---
console.log("\n[ Validación ] Revisando productos:");
Object.values(productos).forEach((p) => {
  const valido = esProductoValido(p);
  console.log(`  ${valido ? "✓" : "✗"} ${p.nombre} (id: ${p.id}, precio: $${p.precio})`);
});
 
// --- Casos de prueba con datos incorrectos ---
console.log("\n[ Pruebas con datos inválidos ]:");
esProductoValido({ id: "", nombre: "Sin ID",    precio: 10  }); // id vacío
esProductoValido({ id: "x", nombre: "",         precio: 10  }); // nombre vacío
esProductoValido({ id: "y", nombre: "Sin precio", precio: -5 }); // precio negativo
esProductoValido(null);                                           // objeto nulo
 
// --- Resumen final ---
console.log("\n=== RESUMEN FINAL ===");
 
console.log("\n► Lista completa de productos (objeto):");
console.table(Object.values(productos));
 
console.log("\n► Números únicos (Set):", [...numerosSet]);
 
console.log("\n► Categorías y productos (Map):");
categoriaMap.forEach((nombre, cat) => console.log(`   ${cat}: ${nombre}`));