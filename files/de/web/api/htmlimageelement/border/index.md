---
title: "HTMLImageElement: border-Eigenschaft"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`border`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt an, wie viele Pixel dick der Rahmen um das Bild sein soll. Ein Wert von 0, der Standardwert, bedeutet, dass kein Rahmen gezeichnet werden soll. Es entspricht dem [`border`](/de/docs/Web/HTML/Reference/Elements/img#border)-Inhaltsattribut des `<img>`-Elements.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("border")}} oder ihre Langform-Eigenschaften verwenden, um nicht nur die Dicke des Rahmens festzulegen, sondern auch eine Vielzahl anderer Stiloptionen darauf anzuwenden.

## Wert

Ein String, der einen ganzzahligen Wert enthält, der die Dicke des Rahmens angibt, der das Bild umgeben soll, gemessen in CSS-Pixeln. Ein Wert von `0` oder ein leerer String zeigt an, dass kein Rahmen gezeichnet werden soll. Der Standardwert von `border` ist `0`.

Wenn er auf den `null`-Wert gesetzt ist, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.border = null` gleichbedeutend mit `elt.border = ""` ist.

## Beispiele

### Setzen des border-Attributs

```js example-bad
const img = new Image();
img.src = "example.png";
img.border = "1";
```

Anstatt die veraltete `border`-Eigenschaft zu verwenden, sollten Sie in Erwägung ziehen, die CSS-`border`-Eigenschaft festzulegen:

```js example-good
const img = new Image();
img.src = "example.png";
img.style.border = "1px solid black";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
