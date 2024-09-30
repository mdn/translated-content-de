---
title: regexp:replace()
slug: Web/EXSLT/regexp/replace
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:replace()` ersetzt die Teile eines Strings, die einem bestimmten regulären Ausdruck entsprechen, mit dem Inhalt eines anderen Strings.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameter

- `originalString`
  - : Der String, an dem eine Suchen-und-Ersetzen-Operation durchgeführt wird.
- `regExpString`
  - : Der JavaScript-Stil reguläre Ausdruck, der ausgewertet wird.
- `flagsString`
  - : Der String, der Zeichenflags enthält.
- `replaceString`
  - : Der String, mit dem die übereinstimmenden Teilstrings ersetzt werden sollen.

Die Zeichenflags sind:

- `g` - Globales Ersetzen
  - : Wenn dieses Flag angegeben wird, werden alle Vorkommen des regulären Ausdrucks innerhalb des `originalString` ersetzt. Andernfalls wird nur das erste Vorkommen ersetzt.
- `i` - Groß-/Kleinschreibung ignorieren
  - : Wenn dieses Flag angegeben wird, wird die Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Die überarbeitete Version des Strings.

## Spezifikationen

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
