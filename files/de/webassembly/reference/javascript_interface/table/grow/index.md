---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Table/grow
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`grow()`**-Prototyp-Methode des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Objekts erhöht die Größe der `Table`-Instanz um eine angegebene Anzahl von Elementen, die mit dem bereitgestellten Wert gefüllt werden.

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
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn die aktuelle Größe zusammen mit `delta` die maximale Kapazität der `Table`-Instanz überschreitet.
    - Wenn der Client nicht genügend Speicher für die Zuweisung hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` kein Wert des Elementtyps der Tabelle ist.

## Beispiele

### Nutzung von grow

Das folgende Beispiel erstellt eine neue WebAssembly-Tabelle mit einer Anfangsgröße von 2 und einer maximalen Größe von 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Vergrößern Sie die Tabelle um 1 Element mit `Table.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

### Nutzung von grow mit einem Wert

Das folgende Beispiel erstellt eine neue WebAssembly-`Table`-Instanz mit einer Anfangsgröße von 0 und einer maximalen Größe von 4 und füllt sie mit einem Objekt:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

Vergrößern Sie die Tabelle um 4 Einheiten und füllen Sie sie mit einem Wert unter Verwendung von `WebAssembly.grow()`:

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
