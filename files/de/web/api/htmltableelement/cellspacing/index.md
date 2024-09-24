---
title: "HTMLTableElement: cellSpacing-Eigenschaft"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Obwohl stattdessen die CSS-{{cssxref("border-spacing")}}-Eigenschaft verwendet werden sollte, stellt die veraltete {{domxref("HTMLTableElement")}}-Schnittstelle die Eigenschaft **`cellSpacing`** dar, die den Abstand um die einzelnen {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente einer Tabelle beschreibt. Zwei Zellen sind durch die Summe des `cellSpacing` jeder der beiden Zellen getrennt.

## Wert

Ein String, der entweder eine Pixelanzahl (wie `"10"`) oder ein Prozentwert (wie `"10%"`) ist.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, so dass `elt.cellSpacing = null` gleichbedeutend ist mit `elt.cellSpacing = ""`.

## Beispiele

Dieses Beispiel setzt den Zellabstand für eine gegebene Tabelle auf 10 Pixel.

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
