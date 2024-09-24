---
title: regexp:replace()
slug: Web/EXSLT/regexp/replace
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:replace()` ersetzt die Teile eines Strings, die einem vorgegebenen regulären Ausdruck entsprechen, durch den Inhalt eines anderen Strings.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameter

- `originalString`
  - : Der String, bei dem eine Such-und-Ersetzungsoperation durchgeführt werden soll.
- `regExpString`
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet werden soll.
- `flagsString`
  - : Der String, der Zeichenflaggen enthält.
- `replaceString`
  - : Der String, durch den die übereinstimmenden Teilstrings ersetzt werden sollen.

Die Zeichenflaggen sind:

- `g` - Globaler Ersatz
  - : Wenn dieses Flag angegeben ist, werden alle Vorkommen des regulären Ausdrucks innerhalb des `originalString` ersetzt. Andernfalls wird nur das erste Vorkommen ersetzt.
- `i` - Groß- und Kleinschreibung ignorieren
  - : Wenn dieses Flag angegeben ist, erfolgt der Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung.

### Rückgabewert

Die überarbeitete Version des Strings.

## Spezifikationen

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
