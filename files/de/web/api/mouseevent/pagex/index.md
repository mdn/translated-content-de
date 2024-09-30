---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`pageX`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus relativ zum linken Rand des gesamten Dokuments geklickt wurde.
Dies schließt jeden nicht sichtbar Bereich des Dokuments ein.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, berücksichtigt sie jegliches horizontale Scrollen der Seite.
Zum Beispiel, wenn die Seite so gescrollt ist, dass 200 Pixel der linken Seite des Dokuments aus dem Sichtfeld gescrollt sind und die Maus 100 Pixel vom linken Rand des Sichtfelds aus geklickt wird, beträgt der von `pageX` zurückgegebene Wert 300.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat sie als `double`-Float neu definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

Weitere Informationen zu auf diese Weise angegebenen Koordinaten finden Sie unter [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#page).

## Wert

Ein `double` Gleitkommazahl der Pixel vom linken Rand des _Dokuments_, an dem die Maus geklickt wurde, unabhängig von Scrollen oder Ansichtsfensterpositionierung, die möglicherweise in Kraft sind.

Diese Eigenschaft wurde ursprünglich in der Touch-Events-Spezifikation als langes Integer spezifiziert, aber im CSSOM View Module wurde sie als Double-Precision-Gleitkommazahl neu definiert, um Subpixel-Präzision zu ermöglichen.
Auch wenn numerische Typen beide als `Number` in JavaScript repräsentiert werden, könnten sie intern im Browercode unterschiedlich gehandhabt werden, was zu möglichen Verhaltensunterschieden führen kann.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um zu erfahren, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Schauen wir uns ein einfaches Beispiel an, das Ihnen die Position der Maus relativ zum Ursprung der Seite zeigt.
Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist die linke obere Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach gehalten; die Box, auf die wir für Mausereignisse achten werden, hat die Klasse `"box"`.
Sie enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`.
Diese werden bei jedem Auftreten eines Ereignisses aktualisiert, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Die in diesem Beispiel verwendeten CSS sind unten gezeigt.

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

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
```

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die die X- und Y-Koordinaten enthalten sollen, mit den Werten von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das zeigt, [wie auf die Mauspositionsinformationen in jedem verfügbaren Koordinatensystem zugegriffen werden kann](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#example).

## Spezifikationen

{{Specifications}}

Bevor sie zur CSSOM-View-Spezifikation hinzugefügt wurden, waren `pageX` und `pageY` auf dem [`UIEvent`](/de/docs/Web/API/UIEvent)-Interface in einer begrenzten Untergruppe von Browsern für kurze Zeit verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
