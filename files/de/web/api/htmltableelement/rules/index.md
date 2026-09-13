---
title: "HTMLTableElement: rules-Eigenschaft"
short-title: rules
slug: Web/API/HTMLTableElement/rules
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.rules`**-Eigenschaft gibt an, welche Zellränder in der Tabelle gerendert werden sollen.

## Wert

Einer der folgenden Werte:

- `none`
  - : Keine Regeln
- `groups`
  - : Linien nur zwischen Gruppen
- `rows`
  - : Linien zwischen Zeilen
- `cols`
  - : Linien zwischen Spalten
- `all`
  - : Linien zwischen allen Zellen

## Beispiele

```js
// Turn on all the internal borders of a table
const t = document.getElementById("TableID");
t.rules = "all";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
