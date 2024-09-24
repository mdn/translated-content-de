---
title: "HTMLTableElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Die **`bgcolor`**-Eigenschaft des {{domxref("HTMLTableElement")}} stellt die Hintergrundfarbe der Tabelle dar.

> [!NOTE]
> Verwenden Sie dieses Attribut nicht mehr. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, indem Sie das [`style`](/de/docs/Web/API/HTMLElement/style)-Attribut des Elements ändern oder eine Stilregel verwenden.

## Wert

Ein String, der einen Farbwert darstellt.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.bgColor = null` gleichbedeutend ist mit `elt.bgColor = ""`.

## Beispiele

```js
// Setzen der Hintergrundfarbe der Tabelle auf hellblau
const t = document.getElementById("TableA");
t.bgColor = "lightblue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-color")}}
