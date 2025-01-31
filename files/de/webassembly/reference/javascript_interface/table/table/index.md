---
title: WebAssembly.Table()-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Table/Table
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Der **`WebAssembly.Table()`**-Konstruktor erstellt ein neues `Table`-Objekt mit der angegebenen Größe und dem angegebenen Elementtyp, gefüllt mit dem bereitgestellten Wert.

## Syntax

```js-nolint
new WebAssembly.Table(tableDescriptor)
new WebAssembly.Table(tableDescriptor, value)
```

### Parameter

- `tableDescriptor`

  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:

    - `element`
      - : Ein String, der den Typ des Wertes darstellt, der in der Tabelle gespeichert werden soll. Dies kann den Wert `"anyfunc"` (Funktionen) oder `"externref"` (Host-Referenzen) haben.
    - `initial`
      - : Die anfängliche Anzahl der Elemente der WebAssembly-Tabelle.
    - `maximum` {{optional_inline}}
      - : Die maximale Anzahl von Elementen, auf die die WebAssembly-Tabelle wachsen darf.

- `value` {{optional_inline}}

  - : Das Element, mit dem der neu zugewiesene Speicherplatz gefüllt werden soll.

### Ausnahmen

- Wenn `tableDescriptor` kein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn `maximum` angegeben ist und kleiner als `initial` ist, wird ein {{jsxref("RangeError")}} ausgelöst.
- Wenn `element` nicht einer der [Referenztypen](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype) ist, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn `value` kein Wert des Typs `element` ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Erstellen einer neuen WebAssembly-Tabelle-Instanz

Das folgende Beispiel erstellt eine `WebAssembly.Table`-Instanz mit einer anfänglichen Größe von 2 Elementen. Der Inhalt der `WebAssembly.Table` wird mit einem WebAssembly-Modul gefüllt und ist von JavaScript aus zugänglich. Beim Betrachten des [Live-Beispiels](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html) öffnen Sie Ihre Entwicklerkonsole, um die Konsolenlog-Nachrichten aus den folgenden Codeausschnitten anzuzeigen.

Dieses Beispiel verwendet die folgenden Referenzdateien:

1. `table2.html`: Eine HTML-Datei, die JavaScript enthält, das eine `WebAssembly.Table` erstellt ([Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html))
2. `table2.wasm`: Ein WebAssembly-Modul, das vom JavaScript-Code in `table2.html` importiert wird ([Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat))

In `table2.html` erstellen wir eine `WebAssembly.Table`:

```js
const tbl = new WebAssembly.Table({
  initial: 2,
  element: "anyfunc",
});
```

Wir können den Indexinhalt mit [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) abrufen:

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

Als nächstes laden und instanziieren wir ein WebAssembly-Modul. Das Modul `table2.wasm` definiert eine Tabelle, die zwei Funktionen enthält. Die erste Funktion gibt 42 zurück und die zweite 83:

```wasm
(module
    (import "js" "tbl" (table 2 anyfunc))
    (func $f42 (result i32) i32.const 42)
    (func $f83 (result i32) i32.const 83)
    (elem (i32.const 0) $f42 $f83)
)
```

Wir instanziieren `table2.wasm` mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static):

```js
const instantiating = WebAssembly.instantiateStreaming(
  fetch("table2.wasm"),
  importObject,
);
```

Nach dem Instantiieren von `table2.wasm` wird `tbl` wie folgt aktualisiert:

- Die Tabellengröße ist weiterhin 2
- Der Inhalt für Index 0 ist jetzt eine Funktion, die 42 zurückgibt
- Der Inhalt für Index 1 ist jetzt eine Funktion, die 83 zurückgibt

Die Elemente an den Indizes 0 und 1 der Tabelle sind jetzt aufrufbare [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions). Um sie aufzurufen, beachten Sie, dass wir dem `get()` Aufruf den Funktionsaufruf-Operator `()` hinzufügen müssen:

```js
instantiating.then((obj) => {
  console.log(tbl.length); // 2
  console.log(tbl.get(0)()); // 42
  console.log(tbl.get(1)()); // 83
});
```

Während wir die `WebAssembly.Table` von JavaScript aus erstellen und darauf zugreifen, ist dieselbe `Table` auch innerhalb der WebAssembly-Instanz sichtbar und aufrufbar.

### Erstellen einer neuen WebAssembly-Tabelle-Instanz mit einem Wert

Das folgende Beispiel erstellt eine neue WebAssembly-Tabelle-Instanz mit 4 Elementen, die alle mit demselben Objekt gefüllt sind:

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

- [WebAssembly](/de/docs/WebAssembly)-Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
