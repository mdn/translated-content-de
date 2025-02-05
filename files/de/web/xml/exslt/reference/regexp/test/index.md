---
title: regexp:test()
slug: Web/XML/EXSLT/Reference/regexp/test
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`regexp:test()` prüft, ob ein String einem angegebenen regulären Ausdruck entspricht.

## Syntax

```js-nolint
regexp:test(testString, regExpString[, flagsString])
```

### Parameter

- `testString`
  - : Der zu überprüfende String.
- `regExpString`
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet werden soll.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichen-Flags enthält.

Die möglichen Zeichen-Flags sind:

- `g`
  - : Globaler Treffer. Hat keine Auswirkung auf diese Funktion; wird aus Konsistenzgründen mit anderen `regexp`-Funktionen erlaubt.
- `i`
  - : Groß- und Kleinschreibung ignorieren. Wenn dieses Flag angegeben ist, wird der Abgleich ohne Beachtung der Groß- und Kleinschreibung durchgeführt.

### Rückgabewert

`true`, wenn der angegebene `regexp` mit dem Test-String übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
