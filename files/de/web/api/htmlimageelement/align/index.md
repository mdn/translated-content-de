---
title: "HTMLImageElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`align`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert werden soll.

Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die trotz ihres Namens auch für Bilder funktioniert. Sie können auch die {{cssxref("float")}}-Eigenschaft verwenden, um das Bild an den linken oder rechten Rand zu verschieben.

Die `align`-Eigenschaft spiegelt das HTML-Attribut [`align`](/de/docs/Web/HTML/Element/img#align) wider.

## Wert

Ein String, der einen der folgenden Strings spezifiziert, die den Ausrichtungsmodus für das Bild festlegen.

### Baseline-Ausrichtung

Diese drei Werte spezifizieren die Ausrichtung des Elements relativ zur Text-Baseline. Diese sollten durch die Verwendung der CSS-Eigenschaft {{cssxref("vertical-align")}} ersetzt werden.

- `bottom`
  - : Die untere Kante des Bildes soll vertikal mit der aktuellen Text-Baseline ausgerichtet sein. **Standardwert.**
- `middle`
  - : Der Mittelpunkt des Objekts sollte vertikal mit der aktuellen Baseline ausgerichtet werden.
- `top`
  - : Die obere Kante des Objekts sollte vertikal mit der aktuellen Baseline ausgerichtet werden.

Es sei erwähnt, dass {{cssxref("vertical-align")}} mehrere zusätzliche Optionen für seinen Wert bietet; Sie sollten diese in Betracht ziehen, wenn Sie Ihren Code auf die Verwendung dieser Eigenschaft umstellen.

### Horizontales Fließen von Bildern

Die Eigenschaften `left` und `right` beeinflussen die Baseline-relative Ausrichtung nicht. Stattdessen bewirken sie, dass das Bild zum linken oder rechten Rand "fließt", wodurch der nachfolgende Text um das Bild herumfließen kann. Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("float")}} verwenden, wobei entweder `left` oder `right` als Wert spezifiziert wird.

- `left`
  - : Lässt das Bild so schweben, dass die linke Kante flächenbündig gegen den aktuellen Rand ist. Jeglicher nachfolgender Text wird gegen die rechte Kante des Bildes fließen.
- `right`
  - : Lässt das Bild so schweben, dass die rechte Kante flächenbündig gegen den rechten Rand ist. Nachfolgender Text wird entlang der linken Kante des Bildes fließen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
