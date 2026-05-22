---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Tag/type
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`type()`**-Methode des [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Objekts kann verwendet werden, um die Sequenz von Datentypen abzurufen, die mit dem Tag verknüpft sind.

## Syntax

```js-nolint
type()
```

### Parameter

Keine

### Rückgabewert

Ein Objekt mit einer Eigenschaft namens `parameters`, die das Array von Datentypen referenziert, das mit diesem [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) verknüpft ist.

Dies ist eine Kopie des ursprünglich im [`Tag()`-Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) übergebenen `type`-Objekts.

## Beispiele

Dieses Codebeispiel erstellt ein Tag, das zwei Datentypen definiert, und ruft sie dann mit `type()` ab:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());
```

Das Objekt, das in die Konsole geschrieben wird, sieht folgendermaßen aus:

```js
{
  parameters: ["i32", "i64"];
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
