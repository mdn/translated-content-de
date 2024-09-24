---
title: regexp:test()
slug: Web/EXSLT/regexp/test
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:test()` prüft, ob ein String mit einem angegebenen regulären Ausdruck übereinstimmt.

## Syntax

```js-nolint
regexp:test(testString, regExpString[, flagsString])
```

### Parameter

- `testString`
  - : Der zu prüfende String.
- `regExpString`
  - : Der JavaScript-Stil regulärer Ausdruck, der ausgewertet werden soll.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichen-Flags enthält.

Die Zeichen-Flags sind:

- `g`
  - : Globaler Abgleich. Hat keine Wirkung für diese Funktion; es ist zur Konsistenz mit anderen regexp-Funktionen erlaubt.
- `i`
  - : Groß-/Kleinschreibungsunabhängiger Abgleich. Wenn dieses Flag angegeben ist, wird der Abgleich in einer groß-/kleinschreibungsunabhängigen Weise durchgeführt.

### Rückgabewert

`true`, wenn der angegebene regexp mit dem Test-String übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
