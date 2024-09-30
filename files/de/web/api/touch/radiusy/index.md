---
title: "Touch: radiusY-Eigenschaft"
short-title: radiusY
slug: Web/API/Touch/radiusY
l10n:
  sourceCommit: 3d08b9706ce2d43b0494c28a15c8bd7df46b4f48
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`radiusY`** des [`Touch`](/de/docs/Web/API/Touch)-Interfaces gibt den Y-Radius der Ellipse zurück, die das Kontaktbereich mit der Touch-Oberfläche am genauesten umschreibt. Der Wert wird in CSS-Pixeln derselben Skalierung wie [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) angegeben.

Dieser Wert bildet zusammen mit [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) eine Ellipse, die Größe und Form des Kontaktbereichs zwischen dem Benutzer und dem Bildschirm annähernd darstellt. Dies kann eine große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm darstellt, oder eine kleine, die den Punkt einer Stiftspitze repräsentiert.

## Wert

Eine Zahl.

## Beispiele

Das [Beispiel für Touch.radiusX](/de/docs/Web/API/Touch/radiusX#examples) enthält ein Beispiel für die Verwendung dieser Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
