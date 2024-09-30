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
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet werden soll.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichenflags enthält.

Die Zeichenflags sind:

- `g`
  - : Globaler Match. Hat keine Wirkung für diese Funktion; erlaubt zur Konsistenz mit anderen regexp-Funktionen.
- `i`
  - : Groß-/Kleinschreibung ignorieren. Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

`true`, wenn der angegebene reguläre Ausdruck mit dem Teststring übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
