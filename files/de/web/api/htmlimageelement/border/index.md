---
title: "HTMLImageElement: border-Eigenschaft"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die veraltete [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`border`** gibt an, wie viele Pixel dick der Rahmen um das Bild sein soll. Ein Wert von 0, der Standardwert, bedeutet, dass kein Rahmen gezeichnet werden soll.

Sie sollten diese Eigenschaft _nicht_ verwenden! Stattdessen sollten Sie CSS verwenden, um den Rahmen zu gestalten. Die {{cssxref("border")}}-Eigenschaft oder deren Langformeigenschaften ermöglichen es nicht nur, die Dicke des Rahmens festzulegen, sondern auch eine Vielzahl anderer Stiloptionen anzuwenden.

Die Breite wird insbesondere durch die schreibmodussensitiven Eigenschaften {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}} kontrolliert.

Aus Gründen der Kompatibilität (oder vielleicht anderen) können Sie die älteren Eigenschaften stattdessen (oder zusätzlich) verwenden: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} und {{cssxref("border-left-width")}}.

## Wert

Ein String, der einen ganzzahligen Wert enthält, der die Dicke des Rahmens angibt, der das Bild umgeben soll, in CSS-Pixeln. Ein Wert von `0` oder ein leerer String bedeutet, dass kein Rahmen gezeichnet werden soll. Der Standardwert von `border` ist `0`.

Wenn auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.border = null` gleichbedeutend ist mit `elt.border = ""`.

## Verwendungshinweise

Verwenden Sie `border` nicht. Es ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("border")}}-Eigenschaft und deren Langformeigenschaften, um Rahmen um Bilder zu erstellen.

Wenn Sie beispielsweise folgendes HTML haben:

```html
<img src="image.png" border="2" />
```

Wird das folgende CSS dieselbe Darstellung bieten, ohne die veraltete Eigenschaft zu verwenden:

```html
<img src="image.png" style="border: 2px;" />
```

Sie können auch zusätzliche Informationen bereitstellen, um die Farbe und andere Merkmale des Rahmens zu ändern:

```html
<img src="image.png" style="border: dashed 2px #333388;" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
