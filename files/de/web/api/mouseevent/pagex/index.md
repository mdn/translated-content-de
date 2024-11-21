---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`pageX`** des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die X-Koordinate (horizontal) in Pixeln an, bei der die Maus im Verhältnis zum linken Rand des gesamten Dokuments geklickt wurde. Dies umfasst auch alle Teile des Dokuments, die derzeit nicht sichtbar sind.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, berücksichtigt sie jede horizontale Bildlaufbewegung der Seite. Zum Beispiel, wenn die Seite so gescrollt ist, dass 200 Pixel der linken Seite des Dokuments außer Sicht sind und die Maus 100 Pixel vom linken Rand der Ansicht geklickt wird, beträgt der von `pageX` zurückgegebene Wert 300.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View-Modul](/de/docs/Web/CSS/CSSOM_view) hat sie als `double`-Float neu definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

Siehe [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#page) für weitere Informationen über auf diese Weise spezifizierte Koordinaten.

## Wert

Eine `double`-Gleitkommazahl von Pixeln vom linken Rand des _Dokuments_, bei dem die Maus geklickt wurde, unabhängig von jeglichem Scrollen oder der Positionierung des Ansichtsfensters, das möglicherweise in Kraft ist.

Diese Eigenschaft wurde ursprünglich in der Touch Events-Spezifikation als langes Integer spezifiziert, aber im CSSOM View-Modul zu einer doppelt-genauen Gleitkommazahl umdefiniert, um Subpixel-Genauigkeit zu ermöglichen. Obwohl beide numerischen Typen in JavaScript als `Number` dargestellt werden, können sie intern im Code des Browsers unterschiedlich behandelt werden, was zu potenziellen Verhaltensunterschieden führen kann.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um herauszufinden, welche Browser auf den überarbeiteten Datentyp aktualisiert wurden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Betrachten Sie ein Beispiel, das Ihnen die Mausposition relativ zum Ursprungsort der Seite zeigt. Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; das Kästchen, auf das wir für Mausereignisse achten werden, hat die Klasse `"box"`. Es enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`. Diese werden bei jedem Auftreten eines Ereignisses aktualisiert, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Das für dieses Beispiel verwendete CSS wird unten gezeigt.

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

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zur Registrierung der Funktion `updateDisplay()` als Ereignishandler für die Ereignisse [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event).

`updateDisplay()` ersetzt den Inhalt der für das Halten der X- und Y-Koordinaten vorgesehenen {{HTMLElement("span")}}-Elemente mit den Werten von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das zeigt, [wie der Zugriff auf die Mausposition](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#example) in jedem verfügbaren Koordinatensystem funktioniert.

## Spezifikationen

{{Specifications}}

Bevor sie zur CSSOM View-Spezifikation hinzugefügt wurden, waren `pageX` und `pageY` auf der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle in einem begrenzten Satz von Browsern für kurze Zeit verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
