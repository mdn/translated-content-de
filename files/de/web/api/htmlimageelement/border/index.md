---
title: "HTMLImageElement: border-Eigenschaft"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die _veraltete_ **`border`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt an, wie viele Pixel dick der Rahmen um das Bild sein soll. Ein Wert von 0, der Standardwert, bedeutet, dass kein Rahmen gezeichnet werden soll. Sie spiegelt das [`border`](/de/docs/Web/HTML/Reference/Elements/img#border)-Inhaltsattribut des `<img>`-Elements wider.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("border")}} oder deren Langform-Eigenschaften verwenden, um nicht nur die Dicke des Rahmens festzulegen, sondern auch potenziell eine Vielzahl anderer Stilisierungsoptionen darauf anzuwenden.

## Wert

Ein String, der einen ganzzahligen Wert enthält, der die Dicke des Rahmens angibt, der das Bild umgeben soll, in CSS-Pixeln. Ein Wert von `0` oder ein leerer String bedeutet, dass kein Rahmen gezeichnet werden soll. Der Standardwert von `border` ist `0`.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.border = null` gleichbedeutend ist mit `elt.border = ""`.

## Beispiele

### Das border-Attribut setzen

```js example-bad
const img = new Image();
img.src = "example.png";
img.border = "1";
```

Statt die veraltete `border`-Eigenschaft zu verwenden, sollten Sie erwägen, die CSS-`border`-Eigenschaft zu setzen:

```js example-good
const img = new Image();
img.src = "example.png";
img.style.border = "1px solid black";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
