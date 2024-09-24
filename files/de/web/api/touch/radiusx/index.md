---
title: "Touch: radiusX-Eigenschaft"
short-title: radiusX
slug: Web/API/Touch/radiusX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`radiusX`**-Eigenschaft der {{domxref("Touch")}}-Schnittstelle gibt den X-Radius der Ellipse zurück, die den Kontaktbereich mit der Touch-Oberfläche am genauesten umschreibt. Der Wert wird in CSS-Pixeln derselben Skala wie {{ domxref("Touch.screenX") }} angegeben.

Dieser Wert bildet zusammen mit {{ domxref("Touch.radiusY") }} und {{ domxref("Touch.rotationAngle") }} eine Ellipse, die Größe und Form des Kontaktbereichs zwischen dem Benutzer und dem Bildschirm annähernd wiedergibt. Dies kann eine relativ große Ellipse sein, die den Kontakt zwischen einer Fingerspitze und dem Bildschirm darstellt, oder ein kleiner Bereich, der die Spitze eines Stifts repräsentiert.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `Touch.radiusX`-, `Touch.radiusX`- und {{domxref("Touch.rotationAngle")}}-Eigenschaften der {{domxref("Touch")}}-Schnittstelle. Die `Touch.radiusX`-Eigenschaft ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der Achse **umschreibt**, die durch den Berührungspunkt {{domxref("Touch.rotationAngle")}} angegeben wird. Ebenso ist die {{domxref("Touch.radiusY")}}-Eigenschaft der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der Achse **senkrecht** zu der durch {{domxref("Touch.rotationAngle")}} angegebenen Achse umschreibt. Der {{domxref("Touch.rotationAngle")}} ist der Winkel (in Grad), um den die durch `radiusX` und `radiusY` beschriebene Ellipse um ihren Mittelpunkt im Uhrzeigersinn gedreht wird.

Das folgende einfache Code-Snippet registriert einen einzigen Handler für die {{domxref("Element/touchstart_event", "touchstart")}}-, {{domxref("Element/touchmove_event", "touchmove")}}- und {{domxref("Element/touchend_event", "touchend")}}-Events. Wenn das `src`-Element berührt wird, werden die Breite und Höhe des Elements basierend auf den `radiusX`- und `radiusY`-Werten des Berührungspunkts berechnet, und das Element wird dann mithilfe des `rotationAngle`-Werts des Berührungspunkts gedreht.

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

  // Deaktivieren der Standard-Event-Handhabung
  e.preventDefault();

  // Drehen des Elements 'src'.
  src.style.width = `${touch.radiusX * 2}px`;
  src.style.height = `${touch.radiusY * 2}px`;
  src.style.transform = `rotate(${touch.rotationAngle}deg)`;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
