---
title: WebAssembly.Table()-Konstruktor
slug: WebAssembly/JavaScript_interface/Table/Table
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Table()`**-Konstruktor erstellt ein neues `Table`-Objekt der angegebenen Größe und Elementart, gefüllt mit dem bereitgestellten Wert.

## Syntax

```js-nolint
new WebAssembly.Table(tableDescriptor)
new WebAssembly.Table(tableDescriptor, value)
```

### Parameter

- `tableDescriptor`

  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:

    - `element`
      - : Ein String, der den Typ des Wertes darstellt, der in der Tabelle gespeichert werden soll. Dies kann einen Wert von `"anyfunc"` (Funktionen) oder `"externref"` (Host-Referenzen) haben.
    - `initial`
      - : Die anfängliche Anzahl der Elemente der WebAssembly-Tabelle.
    - `maximum` {{optional_inline}}
      - : Die maximale Anzahl von Elementen, um die die WebAssembly-Tabelle wachsen darf.

- `value` {{optional_inline}}

  - : Das Element, mit dem der neu-zugewiesene Speicherplatz gefüllt wird.

### Ausnahmen

- Wenn `tableDescriptor` kein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn `maximum` angegeben ist und kleiner als `initial` ist, wird ein {{jsxref("RangeError")}} ausgelöst.
- Wenn `element` nicht zu den [Referenztypen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) gehört, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn `value` kein Wert vom Typ `element` ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Erstellen einer neuen WebAssembly-Tabelleninstanz

Im folgenden Beispiel wird eine `WebAssembly.Table`-Instanz mit einer anfänglichen Größe von 2 Elementen erstellt. Der Inhalt der `WebAssembly.Table` wird mit einem WebAssembly-Modul gefüllt und ist von JavaScript aus zugänglich. Wenn Sie das [Live-Beispiel](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html) betrachten, öffnen Sie Ihre Entwicklerkonsole, um Konsolenprotokollnachrichten aus den unten stehenden Code-Ausschnitten anzuzeigen.

Dieses Beispiel verwendet die folgenden Referenzdateien:

1. `table2.html`: Eine HTML-Datei mit JavaScript, das eine `WebAssembly.Table` erstellt ([Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html))
2. `table2.wasm`: Ein von dem JavaScript-Code in `table2.html` importiertes WebAssembly-Modul ([Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat))

In `table2.html` erstellen wir eine `WebAssembly.Table`:

```js
const tbl = new WebAssembly.Table({
  initial: 2,
  element: "anyfunc",
});
```

Wir können den Indexinhalt mit [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) abrufen:

```js
console.log(tbl.length); // a table with 2 elements
console.log(tbl.get(0)); // content for index 0 is null
console.log(tbl.get(1)); // content for index 1 is null
```

Als nächstes erstellen wir ein Importobjekt, das die `WebAssembly.Table` enthält:

```js
const importObject = {
  js: { tbl },
};
```

Als nächstes laden und instanziieren wir ein WebAssembly-Modul. Das `table2.wasm`-Modul definiert eine Tabelle mit zwei Funktionen. Die erste Funktion gibt 42 zurück und die zweite gibt 83 zurück:

```wasm
(module
    (import "js" "tbl" (table 2 anyfunc))
    (func $f42 (result i32) i32.const 42)
    (func $f83 (result i32) i32.const 83)
    (elem (i32.const 0) $f42 $f83)
)
```

Wir instanziieren `table2.wasm` mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static):

```js
const instantiating = WebAssembly.instantiateStreaming(
  fetch("table2.wasm"),
  importObject,
);
```

Nach der Instanziierung von `table2.wasm` wird `tbl` wie folgt aktualisiert:

- Tabellenlänge ist weiterhin 2
- Inhalt für Index 0 ist jetzt eine Funktion, die 42 zurückgibt
- Inhalt für Index 1 ist jetzt eine Funktion, die 83 zurückgibt

Die Elemente an den Indizes 0 und 1 der Tabelle sind jetzt aufrufbare [exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions). Um sie aufzurufen, beachten Sie, dass wir den Funktionsaufrufsoperator `()` nach dem `get()`-Aufruf hinzufügen müssen:

```js
instantiating.then((obj) => {
  console.log(tbl.length); // 2
  console.log(tbl.get(0)()); // 42
  console.log(tbl.get(1)()); // 83
});
```

Während wir die `WebAssembly.Table` von JavaScript aus erstellen und darauf zugreifen, ist dieselbe `Table` auch innerhalb der WebAssembly-Instanz sichtbar und aufrufbar.

### Erstellen einer neuen WebAssembly-Tabelleninstanz mit einem Wert

Das folgende Beispiel erstellt eine neue WebAssembly-Tabelleninstanz mit 4 Elementen, die alle mit demselben Objekt gefüllt sind:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table(
  {
    element: "externref",
    initial: 4,
    maximum: 4,
  },
  myObject,
);

console.log(myObject === table.get(2)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
