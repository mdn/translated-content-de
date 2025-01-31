---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Tag/type
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`type()`** Prototyp-Methode des [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Objekts kann verwendet werden, um die Sequenz von Datentypen zu erhalten, die mit dem Tag verknüpft sind.

## Syntax

```js-nolint
type()
```

### Parameter

Keine

### Rückgabewert

Ein Objekt mit einer Eigenschaft namens `parameters`, die auf das Array der mit diesem [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) verknüpften Datentypen verweist.

Dies ist eine Kopie des `type`-Objekts, das ursprünglich an den [`Tag()`-Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) übergeben wurde.

## Beispiele

Dieses Codebeispiel erstellt ein Tag, das zwei Datentypen definiert, und exportiert sie dann mit `type()`.
Das Ergebnis wird in der Konsole ausgegeben:

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
