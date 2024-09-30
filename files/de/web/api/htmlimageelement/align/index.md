---
title: "HTMLImageElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`align`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert werden soll.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die tatsächlich auch bei Bildern funktioniert, obwohl der Name dies nicht nahelegt. Sie können auch die CSS-Eigenschaft {{cssxref("float")}} verwenden, um das Bild an den linken oder rechten Rand zu verschieben.

Die `align`-Eigenschaft spiegelt das HTML-Attribut [`align`](/de/docs/Web/HTML/Element/img#align) wider.

## Wert

Ein String, der eine der folgenden Zeichenfolgen angibt, welche den Ausrichtungsmodus für das Bild festlegen.

### Basislinienausrichtung

Diese drei Werte geben die Ausrichtung des Elements relativ zur Textbasislinie an. Diese sollten durch die Verwendung der CSS-Eigenschaft {{cssxref("vertical-align")}} ersetzt werden.

- `bottom`
  - : Die untere Kante des Bildes soll vertikal mit der aktuellen Textbasislinie ausgerichtet werden. **Standardwert.**
- `middle`
  - : Die Mitte des Objekts soll vertikal mit der aktuellen Basislinie ausgerichtet werden.
- `top`
  - : Die obere Kante des Objekts soll vertikal mit der aktuellen Basislinie ausgerichtet werden.

Es ist erwähnenswert, dass {{cssxref("vertical-align")}} mehrere zusätzliche Optionen für seinen Wert bietet; Sie sollten diese in Betracht ziehen, wenn Sie Ihren Code ändern, um sie zu verwenden.

### Bilder horizontal flottierend

Die Eigenschaften `left` und `right` beeinflussen nicht die basislinienbezogene Ausrichtung. Stattdessen bewirken sie, dass das Bild zum linken oder rechten Rand "schwebt", sodass der nachfolgende Text um das Bild herumfließen kann. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("float")}} verwenden, wobei der Wert entweder `left` oder `right` angegeben wird.

- `left`
  - : Lässt das Bild "schweben", um die linke Kante bündig am aktuellen Rand zu platzieren. Jeglicher folgende Text wird entlang der rechten Kante des Bildes fließen.
- `right`
  - : Lässt das Bild "schweben", um seine rechte Kante bündig am rechten Rand zu platzieren. Nachfolgender Text wird entlang der linken Kante des Bildes fließen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
