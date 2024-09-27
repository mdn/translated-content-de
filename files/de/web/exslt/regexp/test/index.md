---
title: regexp:test()
slug: Web/EXSLT/regexp/test
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:test()` prüft, ob ein String einem angegebenen regulären Ausdruck entspricht.

## Syntax

```js-nolint
regexp:test(testString, regExpString[, flagsString])
```

### Parameter

- `testString`
  - : Der zu prüfende String.
- `regExpString`
  - : Der zu bewertende reguläre Ausdruck im JavaScript-Stil.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichenflags enthält.

Die Zeichenflags sind:

- `g`
  - : Globale Übereinstimmung. Hat keine Auswirkung für diese Funktion; es ist erlaubt, um Konsistenz mit anderen `regexp`-Funktionen zu gewährleisten.
- `i`
  - : Groß-/Kleinschreibung ignorieren. Wenn dieses Flag angegeben wird, erfolgt die Übereinstimmung ohne Beachtung der Groß-/Kleinschreibung.

### Rückgabewert

`true`, wenn der angegebene `regexp` mit dem Teststring übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
