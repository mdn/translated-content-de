---
title: "HTMLImageElement: border-Eigenschaft"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die veraltete [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
Eigenschaft **`border`** gibt die Anzahl der Pixel an, die der
Rahmen um das Bild dick sein soll. Ein Wert von 0, der Standardwert, zeigt an, dass kein
Rahmen gezeichnet werden soll.

Sie sollten _nicht_ diese Eigenschaft verwenden! Stattdessen sollten Sie CSS verwenden, um den
Rahmen zu gestalten. Die {{cssxref("border")}}-Eigenschaft oder deren Langform-Eigenschaften bieten nicht nur die Möglichkeit, die Dicke des Rahmens festzulegen, sondern auch eine Vielzahl weiterer Stiloptionen darauf anzuwenden.

Die Breite wird insbesondere durch die schreibmodusbewussten
{{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}},
{{cssxref("border-inline-start-width")}}, und {{cssxref("border-inline-end-width")}}
Eigenschaften gesteuert.

Aus Gründen der Kompatibilität (oder vielleicht anderer Gründe) können Sie stattdessen (oder zusätzlich) die älteren Eigenschaften verwenden: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}},
{{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}.

## Wert

Ein String, der einen ganzzahligen Wert enthält und die Dicke des Rahmens angibt, der das Bild umgeben soll, in CSS-Pixeln. Ein Wert von `0` oder ein leerer String bedeutet, dass kein Rahmen gezeichnet werden soll. Der Standardwert von `border` ist `0`.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.border = null` gleichbedeutend ist mit `elt.border = ""`.

## Anwendungshinweise

Verwenden Sie `border` nicht. Es ist veraltet. Stattdessen sollten Sie die CSS
{{cssxref("border")}}-Eigenschaft und deren Langform-Eigenschaften verwenden, um Rahmen um
Bilder festzulegen.

Zum Beispiel, wenn Sie das folgende HTML haben:

```html
<img src="image.png" border="2" />
```

Das Folgende bietet das gleiche Erscheinungsbild unter Verwendung von CSS anstelle dieser veralteten
Eigenschaft:

```html
<img src="image.png" style="border: 2px;" />
```

Sie können außerdem zusätzliche Informationen bereitstellen, um die Farbe und andere Merkmale
des Rahmens zu ändern:

```html
<img src="image.png" style="border: dashed 2px #333388;" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
