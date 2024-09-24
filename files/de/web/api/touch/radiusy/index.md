---
title: "Touch: radiusY-Eigenschaft"
short-title: radiusY
slug: Web/API/Touch/radiusY
l10n:
  sourceCommit: 3d08b9706ce2d43b0494c28a15c8bd7df46b4f48
---

{{ APIRef("Touch Events") }}

Die **`radiusY`**-Eigenschaft der {{domxref("Touch")}}-Schnittstelle gibt den Y-Radius der Ellipse zurück, die am engsten den Berührungsbereich auf der Oberfläche umschreibt. Der Wert ist in CSS-Pixeln derselben Skala wie {{ domxref("Touch.screenX") }} angegeben.

Dieser Wert, in Kombination mit {{ domxref("Touch.radiusX") }} und {{ domxref("Touch.rotationAngle") }}, bildet eine Ellipse, die die Größe und Form des Berührungsbereichs zwischen dem Benutzer und dem Bildschirm annähert. Dies kann eine große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm darstellt, oder eine kleine, die die Spitze eines Stylus repräsentiert.

## Wert

Eine Zahl.

## Beispiele

Das [Touch.radiusX-Beispiel](/de/docs/Web/API/Touch/radiusX#examples) enthält ein Beispiel für die Verwendung dieser Eigenschaft.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
