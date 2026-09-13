---
title: regexp:test()
slug: Web/XML/EXSLT/Reference/regexp/test
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:test()` prüft, ob eine Zeichenkette einem angegebenen regulären Ausdruck entspricht.

## Syntax

```plain
regexp:test(testString, regExpString[, flagsString])
```

### Parameter

- `testString`
  - : Die zu prüfende Zeichenkette.
- `regExpString`
  - : Der auszuwertende reguläre Ausdruck im JavaScript-Stil.
- `flagsString` {{optional_inline}}
  - : Eine optionale Zeichenkette, die Zeichen-Flags enthält.

Die Zeichen-Flags sind:

- `g`
  - : Globale Übereinstimmung. Hat keine Auswirkung auf diese Funktion; es ist aus Gründen der Konsistenz mit anderen regexp-Funktionen zulässig.
- `i`
  - : Groß-/Kleinschreibungsunabhängige Übereinstimmung. Wenn dieses Flag angegeben ist, wird die Übereinstimmung unabhängig von Groß- und Kleinschreibung durchgeführt.

### Rückgabewert

`true`, wenn der angegebene regexp mit der zu prüfenden Zeichenkette übereinstimmt.

## Spezifikationen

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
