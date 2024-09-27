---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`pageX`** schreibgeschützte Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus geklickt wurde, relativ zum linken Rand des gesamten Dokuments. Dies schließt auch den Teil des Dokuments ein, der derzeit nicht sichtbar ist.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, wird jede horizontale Bildlaufbewegung der Seite berücksichtigt. Beispielsweise, wenn die Seite so gescrollt ist, dass 200 Pixel der linken Seite des Dokuments ausgeblendet sind und die Maus 100 Pixel vom linken Rand der Ansicht aus nach innen geklickt wird, beträgt der von `pageX` zurückgegebene Wert 300.

Ursprünglich wurde diese Eigenschaft als `long`-Ganzzahl definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat sie als `double`-Fließkommazahl neu definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

Siehe [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#page) für zusätzliche Informationen über Koordinaten, die auf diese Weise angegeben werden.

## Wert

Eine `double`-Gleitkommazahl in Pixeln vom linken Rand des _Dokuments_, an dem die Maus geklickt wurde, unabhängig von jeglichem Scrollen oder der Positionierung des Viewports, die aktiv sein könnte.

Diese Eigenschaft wurde ursprünglich in der Touch Events-Spezifikation als lange Ganzzahl spezifiziert, aber im CSSOM View Module neu definiert, um eine Gleitkommazahl mit doppelter Genauigkeit zu sein, um Subpixel-Präzision zu ermöglichen. Auch wenn beide Zahlentypen in JavaScript durch `Number` dargestellt werden, können sie intern im Browsercode unterschiedlich behandelt werden, was zu potenziellen Unterschiede im Verhalten führen kann.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um herauszufinden, welche Browser auf den überarbeiteten Datentyp aktualisiert wurden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Schauen wir uns ein einfaches Beispiel an, das Ihnen die Position der Maus relativ zum Ursprung der Seite zeigt. Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; die Box, auf der wir Mausereignisse beobachten, erhält die Klasse `"box"`. Sie enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`. Diese werden jedes Mal aktualisiert, wenn ein Ereignis eintritt, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Das für dieses Beispiel verwendete CSS wird unten angezeigt.

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

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als den Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die die X- und Y-Koordinaten enthalten sollen, mit den Werten von `pageX`
und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das demonstriert, [wie auf die Mauspositionsinformationen in jedem verfügbaren Koordinatensystem zugegriffen wird](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#example).

## Spezifikationen

{{Specifications}}

Bevor sie zur CSSOM-View-Spezifikation hinzugefügt wurden, waren `pageX` und `pageY` für kurze Zeit auf der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle in einer begrenzten Anzahl von Browsern verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
