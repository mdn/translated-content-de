---
title: regexp:replace()
slug: Web/XML/EXSLT/Reference/regexp/replace
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:replace()` ersetzt die Teile einer Zeichenkette, die einem gegebenen regulären Ausdruck entsprechen, durch den Inhalt einer anderen Zeichenkette.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameter

- `originalString`
  - : Die Zeichenkette, für die eine Suchen-und-Ersetzen-Operation durchgeführt wird.
- `regExpString`
  - : Der auszuwertende reguläre Ausdruck im JavaScript-Stil.
- `flagsString`
  - : Die Zeichenkette, die Zeichen-Flags enthält.
- `replaceString`
  - : Die Zeichenkette, durch die die übereinstimmenden Teilzeichenketten ersetzt werden sollen.

Die Zeichen-Flags sind:

- `g` – Globales Ersetzen
  - : Wenn dieses Flag angegeben ist, werden alle Vorkommen des regulären Ausdrucks innerhalb von `originalString` ersetzt. Andernfalls wird nur das erste Vorkommen ersetzt.
- `i` – Groß-/Kleinschreibungsunabhängige Übereinstimmung
  - : Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Berücksichtigung der Groß- und Kleinschreibung durchgeführt.

### Rückgabewert

Die überarbeitete Version der Zeichenkette.

## Spezifikationen

[EXSLT – REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
