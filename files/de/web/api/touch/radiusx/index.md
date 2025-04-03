---
title: "Touch: radiusX Eigenschaft"
short-title: radiusX
slug: Web/API/Touch/radiusX
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`radiusX`** der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle gibt den X-Radius der Ellipse zurück, die am genauesten den Berührungsbereich auf der Touch-Oberfläche umschreibt. Der Wert ist in CSS-Pixeln derselben Skala wie [`Touch.screenX`](/de/docs/Web/API/Touch/screenX).

Dieser Wert bildet zusammen mit [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) eine Ellipse, die die Größe und Form des Berührungsbereichs zwischen dem Benutzer und dem Bildschirm annähert. Dies kann eine relativ große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm darstellt, oder ein kleiner Bereich, der die Spitze eines Stylus repräsentiert, zum Beispiel.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der Eigenschaften `Touch.radiusX`, `Touch.radiusY` und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle. Die `Touch.radiusX`-Eigenschaft ist der Radius der Ellipse, die den Berührungsbereich (z. B. Finger, Stylus) am genauesten entlang der **durch den Berührungspunkt vorgegebenen** Achse umschreibt, die durch [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) angegeben wird. Ebenso ist die [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY)-Eigenschaft der Radius der Ellipse, die den Berührungsbereich (z. B. Finger, Stylus) am genauesten entlang der zur durch [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) angegebenen Achse **senkrechten** Achse umschreibt. Der [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) ist der Winkel (in Grad), um den die durch `radiusX` und `radiusY` beschriebene Ellipse im Uhrzeigersinn um ihren Mittelpunkt gedreht wird.

Der folgende einfache Codeausschnitt registriert einen einzelnen Handler für die Ereignisse [`touchstart`](/de/docs/Web/API/Element/touchstart_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event). Wenn das `src`-Element berührt wird, werden die Breite und Höhe des Elements basierend auf den `radiusX`- und `radiusY`-Werten des Berührungspunkts berechnet, und das Element wird dann mit dem `rotationAngle` des Berührungspunkts gedreht.

```html
<div id="src">…</div>
```

```js
const src = document.getElementById("src");

src.addEventListener("touchstart", rotate);
src.addEventListener("touchmove", rotate);
src.addEventListener("touchend", rotate);

function rotate(e) {
  const touch = e.changedTouches.item(0);

  // Turn off default event handling
  e.preventDefault();

  // Rotate element 'src'.
  src.style.width = `${touch.radiusX * 2}px`;
  src.style.height = `${touch.radiusY * 2}px`;
  src.style.transform = `rotate(${touch.rotationAngle}deg)`;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
