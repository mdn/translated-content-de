---
title: Rundung
slug: Web/XPath/Functions/round
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `round` gibt eine Zahl zurück, die die nächstgelegene ganze Zahl zur gegebenen Zahl darstellt.

## Syntax

```plain
round( decimal )
```

### Parameter

- `decimal`
  - : Die Dezimalzahl, die gerundet werden soll.

### Rückgabewert

Die nächstgelegene ganze Zahl, die kleiner, größer oder gleich `decimal` ist.

## Beschreibung

- \-0.5 wird zu negativ null gerundet. 0.4 wird zu positiv null gerundet.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-round)

## Gecko-Unterstützung

Unterstützt.
