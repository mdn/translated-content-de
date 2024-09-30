---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/JavaScript_interface/Tag/type
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die **`type()`** Prototyp-Methode des [`Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag)-Objekts kann verwendet werden, um die Sequenz der Datentypen zu erhalten, die mit dem Tag verbunden sind.

## Syntax

```js-nolint
type()
```

### Parameter

Keine

### Rückgabewert

Ein Objekt mit einer Eigenschaft namens `parameters`, die das Array der Datentypen referenziert, das mit diesem [`Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) verbunden ist.

Dies ist eine Kopie des `type`-Objekts, das ursprünglich in den [`Tag()`-Konstruktor](/de/docs/WebAssembly/JavaScript_interface/Tag/Tag) übergeben wurde.

## Beispiele

Dieser Codeabschnitt erstellt ein Tag, das zwei Datentypen definiert, und exportiert sie dann mit `type()`.
Das Ergebnis wird in die Konsole ausgegeben:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());

// Console output:
// Object { parameters: (2) […] }
//   parameters: Array [ "i32", "i64" ]
//   <prototype>: Object { … }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
