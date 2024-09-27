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
> Verwenden Sie dieses Attribut nicht mehr. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("background-color")}} verwenden, indem Sie das [`style`](/de/docs/Web/API/HTMLElement/style)-Attribut des Elements modifizieren oder eine Stilregel anwenden.

## Wert

Ein String, der einen Farbwert darstellt.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.bgColor = null` gleichbedeutend ist mit `elt.bgColor = ""`.

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
