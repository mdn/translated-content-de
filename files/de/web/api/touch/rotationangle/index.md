---
title: "Touch: rotationAngle-Eigenschaft"
short-title: rotationAngle
slug: Web/API/Touch/rotationAngle
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`rotationAngle`**-Eigenschaft der {{domxref("Touch")}}-Schnittstelle gibt den Rotationswinkel in Grad der Kontaktbereichsellipse zurück, die durch {{ domxref("Touch.radiusX") }} und {{ domxref("Touch.radiusY") }} definiert wird. Der Wert kann zwischen 0 und 90 liegen. Zusammen beschreiben diese drei Werte eine Ellipse, die die Größe und Form des Kontaktbereichs zwischen dem Benutzer und dem Bildschirm annähernd darstellt. Dies kann eine relativ große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm repräsentiert, oder ein kleiner Bereich, der beispielsweise die Spitze eines Stifts darstellt.

## Wert

Eine Zahl.

## Beispiele

Das [Touch.radiusX-Beispiel](/de/docs/Web/API/Touch/radiusX#examples) enthält ein Beispiel für die Verwendung dieser Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
