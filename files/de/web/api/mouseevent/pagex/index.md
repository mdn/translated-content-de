---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`pageX`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus geklickt wurde, relativ zur linken Kante des gesamten Dokuments.
Dies schließt jeden Teil des Dokuments ein, der momentan nicht sichtbar ist.

Da sich diese Eigenschaft auf die Kante des Dokuments bezieht, berücksichtigt sie jegliches horizontale Scrollen der Seite.
Beispielsweise, wenn die Seite so gescrollt ist, dass 200 Pixel von der linken Seite des Dokuments aus dem Blickfeld gescrollt sind und die Maus 100 Pixel von der linken Kante des Sichtfensters nach innen geklickt wird, wird der von `pageX` zurückgegebene Wert 300 sein.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View Module](/de/docs/Web/CSS/Guides/CSSOM_view) hat sie als `double`-Float neu definiert. Details finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

Siehe [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#page) für zusätzliche Informationen zu auf diese Weise angegebenen Koordinaten.

## Wert

Eine `double`-Gleitkommazahl in Pixeln von der linken Kante des _Dokuments_, an der die Maus geklickt wurde, unabhängig davon, ob ein Scrollen oder eine Positionierung des Ansichtsfensters stattfindet.

Diese Eigenschaft wurde ursprünglich in der Touch Events-Spezifikation als Long-Integer spezifiziert, aber im CSSOM View Module als Gleitkommazahl mit doppelter Genauigkeit neu definiert, um Subpixel-Präzision zu ermöglichen.
Obwohl beide numerischen Typen in JavaScript durch `Number` dargestellt werden, können sie intern im Code des Browsers unterschiedlich verarbeitet werden, was zu möglichen Verhaltensunterschieden führen kann.

Sehen Sie [Browser-Kompatibilität](#browser-kompatibilität), um zu erfahren, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Anzeigen der Mausposition relativ zum Seitenursprung

Lassen Sie uns ein Beispiel betrachten, das die Mausposition relativ zum Seitenursprung zeigt.
Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; die Box, auf der wir Mausereignisse überwachen werden, hat die Klasse `"box"`.
Sie enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`.
Diese werden jedes Mal, wenn ein Ereignis eintritt, aktualisiert, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Das in diesem Beispiel verwendete CSS wird unten gezeigt.

```css
.box {
  width: 400px;
  height: 250px;
  border: 2px solid darkblue;
  background-color: blue;
  color: white;
  font:
    16px "Zilla",
    "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

#### JavaScript

```js
const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

box.addEventListener("mousemove", updateDisplay);
box.addEventListener("mouseenter", updateDisplay);
box.addEventListener("mouseleave", updateDisplay);
```

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignishandler für die Ereignisse [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die die X- und Y-Koordinaten enthalten sollen, durch die Werte von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das zeigt, [wie Sie auf die Mausposition zugreifen](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#example), die in jedem verfügbaren Koordinatensysteminformationen bereitgestellt wird.

## Spezifikationen

{{Specifications}}

Bevor `pageX` und `pageY` zur CSSOM View-Spezifikation hinzugefügt wurden, waren sie auf der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle in einem begrenzten Satz von Browsern für kurze Zeit verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
