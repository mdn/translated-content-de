---
title: regexp:test()
slug: Web/XML/EXSLT/Reference/regexp/test
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

`regexp:test()` prüft, ob ein String einem bestimmten regulären Ausdruck entspricht.

## Syntax

```plain
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
  - : Globaler Abgleich. Hat keine Auswirkung auf diese Funktion; ist für Konsistenz mit anderen regexp-Funktionen erlaubt.
- `i`
  - : Groß-/Kleinschreibungs-unabhängiger Abgleich. Wenn dieses Flag angegeben ist, erfolgt der Abgleich unabhängig von der Groß-/Kleinschreibung.

### Rückgabewert

`true`, wenn der angegebene reguläre Ausdruck mit dem Test-String übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
