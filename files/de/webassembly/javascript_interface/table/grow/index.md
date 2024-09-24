---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/JavaScript_interface/Table/grow
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table) Objekts erhöht die Größe der `Table`-Instanz um eine angegebene Anzahl von Elementen, die mit dem bereitgestellten Wert gefüllt werden.

## Syntax

```js-nolint
grow(delta)
grow(delta, value)
```

### Parameter

- `delta`
  - : Die Anzahl der Elemente, um die Sie die Tabelle erweitern möchten.
- `value` {{optional_inline}}
  - : Das Element, mit dem der neu zugewiesene Platz gefüllt werden soll.

### Rückgabewert

Die vorherige Länge der Tabelle.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn die aktuelle Größe plus `delta` die maximale Größe der Table-Instanz überschreitet.
    - Wenn der Client nicht genügend Speicher für die Zuordnung hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` kein Wert des Elementtyps der Tabelle ist.

## Beispiele

### Verwendung von grow

Das folgende Beispiel erstellt eine neue WebAssembly Table-Instanz mit einer Anfangsgröße von 2 und einer maximalen Größe von 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Erweitern Sie die Tabelle um 1 Element mit `Table.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

### Verwendung von grow mit einem Wert

Das folgende Beispiel erstellt eine neue WebAssembly `Table`-Instanz mit einer Anfangsgröße von 0 und einer maximalen Größe von 4 und füllt sie mit einem Objekt:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

Erweitern Sie die Tabelle um 4 Einheiten und füllen Sie sie mit einem Wert mit `WebAssembly.grow()`:

```js
table.grow(4, myObject);
console.log(myObject === table.get(2)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersichtsseite zu WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
