---
title: "HTMLTableElement: cellSpacing-Eigenschaft"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Obwohl Sie stattdessen die CSS-Eigenschaft {{cssxref("border-spacing")}} verwenden sollten, stellt die veraltete [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle die **`cellSpacing`**-Eigenschaft dar, die den Abstand um die einzelnen {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente, die die Zellen einer Tabelle repräsentieren, beschreibt. Jegliche zwei Zellen sind durch die Summe des `cellSpacing` von jeder der beiden Zellen getrennt.

## Wert

Ein String, der entweder eine Pixelanzahl (wie `"10"`) oder einen Prozentwert (wie `"10%"`) darstellt.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.cellSpacing = null` gleichbedeutend mit `elt.cellSpacing = ""` ist.

## Beispiele

Dieses Beispiel setzt den Zellenabstand für eine gegebene Tabelle auf 10 Pixel.

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
