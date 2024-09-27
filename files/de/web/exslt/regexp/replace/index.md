---
title: regexp:replace()
slug: Web/EXSLT/regexp/replace
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:replace()` ersetzt die Teile eines Strings, die mit einem bestimmten regulären Ausdruck übereinstimmen, durch den Inhalt eines anderen Strings.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameter

- `originalString`
  - : Der String, an dem eine Such- und Ersetzungsoperation durchgeführt wird.
- `regExpString`
  - : Der zu evaluierende reguläre Ausdruck im JavaScript-Stil.
- `flagsString`
  - : Der String, der Zeichenflags enthält.
- `replaceString`
  - : Der String, durch den die übereinstimmenden Teilstrings ersetzt werden sollen.

Die Zeichenflags sind:

- `g` - Globales Ersetzen
  - : Wenn dieses Flag angegeben ist, werden alle Vorkommen des regulären Ausdrucks innerhalb des `originalString` ersetzt. Andernfalls wird nur das erste Vorkommen ersetzt.
- `i` - Unabhängig von Groß-/Kleinschreibung
  - : Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Die überarbeitete Version des Strings.

## Spezifikationen

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
