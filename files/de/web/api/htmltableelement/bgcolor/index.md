---
title: "HTMLTableElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`bgcolor`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) repräsentiert die Hintergrundfarbe der Tabelle.

> [!NOTE]
> Verwenden Sie dieses Attribut nicht mehr. Stattdessen sollten Sie die CSS-{{cssxref("background-color")}}-Eigenschaft verwenden, indem Sie das [`style`](/de/docs/Web/API/HTMLElement/style)-Attribut des Elements ändern oder eine Stilregel einsetzen.

## Wert

Ein String, der einen Farbwert darstellt.

Wenn auf den `null`-Wert gesetzt wird, wird dieser `null`-Wert in einen leeren String (`""`) umgewandelt, sodass `elt.bgColor = null` dem entspricht, `elt.bgColor = ""`.

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
