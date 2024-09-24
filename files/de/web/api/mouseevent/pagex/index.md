---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`pageX`** Schreibgeschützte Eigenschaft des {{domxref("MouseEvent")}} Interfaces gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus relativ zum linken Rand des gesamten Dokuments geklickt wurde. Dies schließt jeden nicht sichtbaren Teil des Dokuments ein.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, berücksichtigt sie jegliches horizontale Scrollen der Seite. Wenn die Seite beispielsweise so gescrollt ist, dass 200 Pixel der linken Seite des Dokuments nicht mehr sichtbar sind und die Maus 100 Pixel vom linken Rand der Ansicht entfernt geklickt wird, beträgt der von `pageX` zurückgegebene Wert 300.

Ursprünglich wurde diese Eigenschaft als `long`-Ganzzahl definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat es als `double` Gleitkommazahl neu definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

Siehe [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#page) für zusätzliche Informationen zu auf diese Weise angegebenen Koordinaten.

## Wert

Eine `double` Gleitkomma-Zahl in Pixeln vom linken Rand des _Dokuments_, an welchem die Maus geklickt wurde, unabhängig von jeglichem Scrollen oder der Positionierung des Ansichtsfensters, die möglicherweise in Kraft ist.

Diese Eigenschaft wurde ursprünglich in der Touch-Events-Spezifikation als lange Ganzzahl angegeben, aber im CSSOM View Module in eine Gleitkomma-Zahl mit doppelter Präzision umdefiniert, um Subpixelpräzision zu ermöglichen.
Selbst wenn numerische Typen beide von `Number` in JavaScript dargestellt werden, können sie intern im Code des Browsers unterschiedlich behandelt werden, was zu möglichen Verhaltensunterschieden führen kann.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um zu erfahren, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Die Mausposition relativ zum Seitenursprung anzeigen

Werfen wir einen Blick auf ein einfaches Beispiel, das Ihnen die Position der Maus relativ zum Ursprung der Seite zeigt. Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens und nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Bewegen Sie die Maus in dieser Box, um zu sehen, wie sich die Koordinaten ändern.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; die Box, auf die wir für Mausereignisse achten werden, hat die Klasse `"box"`.
Sie enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`.
Diese werden jedes Mal aktualisiert, wenn ein Ereignis auftritt, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Der für dieses Beispiel verwendete CSS-Code wird unten gezeigt.

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

Der JavaScript-Code verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um die Funktion `updateDisplay()` als Ereignishandler für die {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, und {{domxref("Element/mouseleave_event", "mouseleave")}} Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der für die X- und Y-Koordinaten vorgesehenen {{HTMLElement("span")}}-Elemente mit den Werten von `pageX`
und {{domxref("MouseEvent.pageY", "pageY")}}.

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Mehr Beispiele

Sie können auch ein Beispiel sehen, das zeigt, [wie auf die Mausposition](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#example) in jedem verfügbaren Koordinatensystem zugegriffen werden kann.

## Spezifikationen

{{Specifications}}

Bevor `pageX` und `pageY` zur CSSOM View-Spezifikation hinzugefügt wurden, waren sie kurzzeitig auf dem {{domxref("UIEvent")}} Interface in einer begrenzten Anzahl von Browsern verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent.pageY")}}
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
