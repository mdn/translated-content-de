---
title: "HTMLTableElement: cellPadding-Eigenschaft"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.cellPadding`**-Eigenschaft repräsentiert den Abstand um die einzelnen Zellen der Tabelle.

## Wert

Ein String, der Pixel (z.B. `"10"`) oder einen Prozentwert (z.B. `"10%"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.cellPadding = null` gleichbedeutend mit `elt.cellPadding = ""` ist.

## Beispiele

```js
// Set cell padding to 10 pixels
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
