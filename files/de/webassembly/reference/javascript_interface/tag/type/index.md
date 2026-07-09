---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Tag/type
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`type()`**-Methode des [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Objekts kann verwendet werden, um die Abfolge von Datentypen zu erhalten, die mit dem Tag verknüpft sind.

## Syntax

```js-nolint
type()
```

### Parameter

Keine

### Rückgabewert

Ein Objekt mit einer Eigenschaft namens `parameters`, die das Array der mit diesem [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) verknüpften Datentypen referenziert.

Dies ist eine Kopie des `type`-Objekts, das ursprünglich in den [`Tag()`-Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) übergeben wurde.

## Beispiele

Dieses Code-Snippet erstellt ein Tag, das zwei Datentypen definiert und ruft sie dann mit `type()` ab:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());
```

Das im Konsolenprotokoll angezeigte Objekt sieht folgendermaßen aus:

```json
{
  "parameters": ["i32", "i64"]
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
