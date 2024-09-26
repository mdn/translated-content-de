---
title: "HTMLTableElement: cellPadding-Eigenschaft"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Die **`HTMLTableElement.cellPadding`**-Eigenschaft repräsentiert den Abstand um die einzelnen Zellen der Tabelle.

## Wert

Ein String, der Pixel (z.B. `"10"`) oder einen Prozentwert (z.B. `"10%"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.cellPadding = null` gleichbedeutend mit `elt.cellPadding = ""` ist.

## Beispiele

```js
// Setzen Sie den Zellabstand auf 10 Pixel
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}