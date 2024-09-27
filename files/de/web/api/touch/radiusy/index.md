---
title: "Touch: radiusY-Eigenschaft"
short-title: radiusY
slug: Web/API/Touch/radiusY
l10n:
  sourceCommit: 3d08b9706ce2d43b0494c28a15c8bd7df46b4f48
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`radiusY`**-Eigenschaft der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle gibt den Y-Radius der Ellipse zurück, die den Berührungsbereich auf der Touch-Oberfläche am besten umschreibt. Der Wert ist in CSS-Pixeln angegeben und hat die gleiche Skalierung wie [`Touch.screenX`](/de/docs/Web/API/Touch/screenX).

Dieser Wert bildet in Kombination mit [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) eine Ellipse, die die Größe und Form des Berührungsbereichs zwischen Benutzer und Bildschirm approximiert. Dies kann eine große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm darstellt, oder eine kleine, die die Spitze eines Stylus darstellt.

## Wert

Eine Zahl.

## Beispiele

Das [Beispiel zu Touch.radiusX](/de/docs/Web/API/Touch/radiusX#examples) enthält ein Beispiel zur Verwendung dieser Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
