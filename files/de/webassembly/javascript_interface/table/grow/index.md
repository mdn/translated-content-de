---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/JavaScript_interface/Table/grow
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table)-Objekts vergrößert die Größe der `Table`-Instanz um eine angegebene Anzahl an Elementen, gefüllt mit dem bereitgestellten Wert.

## Syntax

```js-nolint
grow(delta)
grow(delta, value)
```

### Parameter

- `delta`
  - : Die Anzahl der Elemente, um die Sie die Tabelle vergrößern möchten.
- `value` {{optional_inline}}
  - : Das Element, mit dem der neu zugewiesene Speicherplatz gefüllt wird.

### Rückgabewert

Die vorherige Länge der Tabelle.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Wenn die aktuelle Größe zuzüglich `delta` die maximale Größenkapazität der Table-Instanz überschreitet.
    - Wenn der Client nicht genügend Speicher für die Zuweisung hat.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `value` kein Wert des Elementtyps der Tabelle ist.

## Beispiele

### Verwendung von grow

Im folgenden Beispiel wird eine neue WebAssembly Table-Instanz mit einer Anfangsgröße von 2 und einer maximalen Größe von 10 erstellt:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Vergrößern Sie die Tabelle um 1 Element mithilfe von `Table.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

### Verwendung von grow mit einem Wert

Im folgenden Beispiel wird eine neue WebAssembly `Table`-Instanz mit einer Anfangsgröße von 0 und einer maximalen Größe von 4 erstellt und mit einem Objekt gefüllt:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

Vergrößern Sie die Tabelle um 4 Einheiten und füllen Sie sie mit einem Wert mithilfe von `WebAssembly.grow()`:

```js
table.grow(4, myObject);
console.log(myObject === table.get(2)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
