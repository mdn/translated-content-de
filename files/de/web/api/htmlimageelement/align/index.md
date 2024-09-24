---
title: "HTMLImageElement: Align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`align`**-Eigenschaft der {{domxref("HTMLImageElement")}}-Schnittstelle ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert wird.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die trotz ihres Namens auch bei Bildern funktioniert. Sie können auch die {{cssxref("float")}}-Eigenschaft verwenden, um das Bild zum linken oder rechten Rand schweben zu lassen.

Die `align`-Eigenschaft spiegelt das HTML-Attribut [`align`](/de/docs/Web/HTML/Element/img#align) wider.

## Wert

Ein String, der eine der folgenden Zeichenketten angibt, die den Ausrichtungsmodus für das Bild festlegen.

### Basislinienausteilung

Diese drei Werte geben die Ausrichtung des Elements relativ zur Text-Basislinie an. Diese sollten durch die Verwendung der CSS-Eigenschaft {{cssxref("vertical-align")}} ersetzt werden.

- `bottom`
  - : Die untere Kante des Bildes soll vertikal mit der aktuellen Text-Basislinie ausgerichtet werden. **Standardwert.**
- `middle`
  - : Die Mitte des Objekts sollte vertikal mit der aktuellen Basislinie ausgerichtet werden.
- `top`
  - : Die obere Kante des Objekts sollte vertikal mit der aktuellen Basislinie ausgerichtet werden.

Es ist erwähnenswert, dass {{cssxref("vertical-align")}} mehrere zusätzliche Optionen für seinen Wert bietet; Sie möchten möglicherweise diese in Betracht ziehen, wenn Sie Ihren Code ändern, um es zu verwenden.

### Bilder horizontal schweben lassen

Die `left` und `right`-Eigenschaften beeinflussen nicht die basislinienbezogene Ausrichtung. Stattdessen sorgen sie dafür, dass das Bild zum linken oder rechten Rand "schwebt", sodass der nachfolgende Text um das Bild herum fließen kann. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("float")}} verwenden, deren Wert entweder `left` oder `right` sein sollte.

- `left`
  - : Lässt das Bild so schweben, dass seine linke Kante bündig am aktuellen Rand anliegt. Nachfolgender Text wird an der rechten Kante des Bildes fließen.
- `right`
  - : Lässt das Bild so schweben, dass seine rechte Kante bündig am rechten Rand anliegt. Nachfolgender Text wird entlang der linken Kante des Bildes fließen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
