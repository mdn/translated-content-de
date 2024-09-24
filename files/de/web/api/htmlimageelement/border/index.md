---
title: "HTMLImageElement: border-Eigenschaft"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die veraltete {{domxref("HTMLImageElement")}}-Eigenschaft **`border`** gibt an, wie viele Pixel dick der Rahmen um das Bild sein soll. Ein Wert von 0, der Standardwert, zeigt an, dass kein Rahmen gezeichnet werden soll.

Sie sollten diese Eigenschaft _nicht_ verwenden! Stattdessen sollten Sie CSS verwenden, um den Rahmen zu stylen. Die {{cssxref("border")}}-Eigenschaft oder ihre Langform-Eigenschaften können nicht nur die Dicke des Rahmens festlegen, sondern auch eine Vielzahl anderer Stiloptionen darauf anwenden.

Die Breite wird speziell durch die schreibmodusbewussten Eigenschaften {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}} gesteuert.

Aus Kompatibilitätsgründen (oder vielleicht aus anderen Gründen) können Sie anstelle dessen (oder zusätzlich) die älteren Eigenschaften verwenden: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} und {{cssxref("border-left-width")}}.

## Wert

Ein String, der einen ganzzahligen Wert enthält, der die Dicke des Rahmens festlegt, der das Bild umgeben soll, in CSS-Pixeln. Ein Wert von `0` oder ein leerer String bedeutet, dass kein Rahmen gezeichnet werden soll. Der Standardwert von `border` ist `0`.

Wird der Wert auf `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.border = null` gleichbedeutend ist mit `elt.border = ""`.

## Nutzungshinweise

Verwenden Sie `border` nicht. Es ist veraltet. Verwenden Sie stattdessen die CSS {{cssxref("border")}}-Eigenschaft und deren Langform-Eigenschaften, um Rahmen um Bilder zu setzen.

Wenn Sie zum Beispiel das folgende HTML haben:

```html
<img src="image.png" border="2" />
```

Wird das folgende CSS denselben Erscheinungseffekt erzielen, ohne diese veraltete Eigenschaft zu verwenden:

```html
<img src="image.png" style="border: 2px;" />
```

Außerdem können Sie zusätzliche Informationen bereitstellen, um die Farbe und andere Merkmale des Rahmens zu ändern:

```html
<img src="image.png" style="border: dashed 2px #333388;" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
