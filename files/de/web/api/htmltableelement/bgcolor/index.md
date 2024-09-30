---
title: "HTMLTableElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Die **`bgcolor`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) repräsentiert die Hintergrundfarbe der Tabelle.

> [!NOTE]
> Verwenden Sie dieses Attribut nicht mehr. Stattdessen sollten Sie die CSS-{{cssxref("background-color")}}-Eigenschaft verwenden, indem Sie das [`style`](/de/docs/Web/API/HTMLElement/style)-Attribut des Elements ändern oder eine Stilregel verwenden.

## Wert

Ein String, der einen Farbwert darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) konvertiert, sodass `elt.bgColor = null` gleichbedeutend mit `elt.bgColor = ""` ist.

## Beispiele

```js
// Set table background color to lightblue
const t = document.getElementById("TableA");
t.bgColor = "lightblue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-color")}}
