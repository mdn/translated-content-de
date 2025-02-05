---
title: regexp:replace()
slug: Web/XML/EXSLT/Reference/regexp/replace
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`regexp:replace()` ersetzt die Teile eines Strings, die einem gegebenen regulären Ausdruck entsprechen, mit dem Inhalt eines anderen Strings.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameter

- `originalString`
  - : Der String, an dem eine Suchen-und-Ersetzen-Operation durchgeführt wird.
- `regExpString`
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet wird.
- `flagsString`
  - : Der String, der die Zeichen-Flags enthält.
- `replaceString`
  - : Der String, durch den die übereinstimmenden Substrings ersetzt werden.

Die Zeichen-Flags sind:

- `g` - Globales Ersetzen
  - : Wenn dieses Flag angegeben ist, werden alle Vorkommen des regulären Ausdrucks innerhalb des `originalString` ersetzt. Andernfalls wird nur das erste Vorkommen ersetzt.
- `i` - Groß-/Kleinschreibung ignorieren
  - : Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Unterscheidung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Die überarbeitete Version des Strings.

## Spezifikationen

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
