---
title: "HTMLTableElement: rules-Eigenschaft"
short-title: rules
slug: Web/API/HTMLTableElement/rules
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Die **`HTMLTableElement.rules`**-Eigenschaft gibt an, welche Zellengrenzen in der Tabelle dargestellt werden sollen.

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
