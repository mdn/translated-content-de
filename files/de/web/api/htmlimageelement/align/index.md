---
title: "HTMLImageElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`align`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert werden soll.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die trotz ihres Namens auch bei Bildern funktioniert. Sie können auch die {{cssxref("float")}}-Eigenschaft nutzen, um das Bild am linken oder rechten Rand zu platzieren.

Die `align`-Eigenschaft spiegelt das HTML-[`align`](/de/docs/Web/HTML/Reference/Elements/img#align) Inhaltsattribut wider.

## Wert

Ein String, der einen der folgenden Strings angibt, die den Ausrichtungsmodus für das Bild festlegen.

### Baseline-Ausrichtung

Diese drei Werte geben die Ausrichtung des Elements relativ zur Text-Basislinie an. Diese sollten durch die CSS-Eigenschaft {{cssxref("vertical-align")}} ersetzt werden.

- `bottom`
  - : Die untere Kante des Bildes soll vertikal mit der aktuellen Text-Basislinie ausgerichtet werden. **Standardwert.**
- `middle`
  - : Die Mitte des Objekts sollte vertikal mit der aktuellen Basislinie ausgerichtet werden.
- `top`
  - : Die obere Kante des Objekts sollte vertikal mit der aktuellen Basislinie ausgerichtet werden.

Es könnte erwähnenswert sein, dass {{cssxref("vertical-align")}} mehrere zusätzliche Optionen für seinen Wert bietet; Sie sollten diese in Betracht ziehen, wenn Sie Ihren Code ändern, um es zu verwenden.

### Bilder horizontal floaten

Die Eigenschaften `left` und `right` beeinflussen nicht die ausrichtungsbezogene Basislinie. Stattdessen bewirken sie, dass das Bild zum linken oder rechten Rand "floatet", wodurch der nachfolgende Text um das Bild herumfließen kann. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("float")}} verwenden, indem Sie als Wert entweder `left` oder `right` angeben.

- `left`
  - : Lässt das Bild an den linken Rand rücken und bündig gegen die aktuelle Einrückung ausrichten. Jeder darauf folgende Text wird entlang der rechten Kante des Bildes fließen.
- `right`
  - : Lässt das Bild zur Positionierung an den rechten Rand rücken. Nachfolgender Text wird entlang der linken Kante des Bildes fließen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
