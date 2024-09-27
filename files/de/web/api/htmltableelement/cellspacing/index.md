---
title: "HTMLTableElement: cellSpacing Eigenschaft"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} verwenden. Die veraltete Schnittstelle [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) hat die **`cellSpacing`** Eigenschaft, die den Abstand um die einzelnen {{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente, die die Zellen einer Tabelle darstellen, repräsentiert. Zwei Zellen sind durch die Summe des `cellSpacing` jeder der beiden Zellen getrennt.

## Wert

Ein String, der entweder eine Anzahl von Pixeln (wie `"10"`) oder ein prozentualer Wert (wie `"10%"`) ist.

Wenn er auf den `null` Wert gesetzt wird, wird dieser `null` Wert in den leeren String (`""`) konvertiert, sodass `elt.cellSpacing = null` gleichwertig zu `elt.cellSpacing = ""` ist.

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
