---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`pageX`**-Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus relativ zum linken Rand des gesamten Dokuments geklickt wurde.
Dies umfasst auch den Teil des Dokuments, der derzeit nicht sichtbar ist.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, berücksichtigt sie jegliches horizontale Scrollen der Seite.
Wenn beispielsweise die Seite so gescrollt wird, dass 200 Pixel der linken Seite des Dokuments aus dem Sichtbereich gescrollt sind, und die Maus 100 Pixel vom linken Rand des Sichtbereichs nach innen geklickt wird, wird der von `pageX` zurückgegebene Wert 300 sein.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat es als `double`-Gleitkommazahl neu definiert. Einzelheiten finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

Weitere Informationen zu Koordinaten, die auf diese Weise angegeben werden, finden Sie unter [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#page).

## Wert

Eine `double`-Gleitkommazahl von Pixeln vom linken Rand des _Dokuments_, an dem die Maus geklickt wurde, unabhängig von eventuellem Scrollen oder der Positionierung des Ansichtsfensters.

Diese Eigenschaft wurde ursprünglich in der Touch-Events-Spezifikation als ganzzahliger Wert angegeben, wurde aber im CSSOM View Module in eine Gleitkommazahl mit doppelter Genauigkeit umgewandelt, um Subpixel-Präzision zu ermöglichen.
Obwohl beide numerischen Typen in JavaScript als `Number` dargestellt werden, können sie intern im Browsercode unterschiedlich behandelt werden, was zu unterschiedlichen Verhaltensweisen führen kann.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um zu erfahren, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Anzeige der Mausposition relativ zum Ursprung der Seite

Schauen wir uns ein Beispiel an, das Ihnen die Position der Maus relativ zum Ursprung der Seite zeigt.
Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; das Feld, das wir für Mausereignisse beobachten werden, hat die Klasse `"box"`.
Es enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`.
Diese werden jedes Mal aktualisiert, wenn ein Ereignis auftritt, um die neuesten Mauskoordinaten relativ zur Seite anzuzeigen.

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

box.addEventListener("mousemove", updateDisplay);
box.addEventListener("mouseenter", updateDisplay);
box.addEventListener("mouseleave", updateDisplay);
```

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignis-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die die X- und Y-Koordinaten enthalten sollen, mit den Werten von `pageX`
und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das zeigt, [wie Sie auf die Mausposition zugreifen](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#example) können, Informationen in jedem verfügbaren Koordinatensystem.

## Spezifikationen

{{Specifications}}

Bevor sie zur CSSOM-View-Spezifikation hinzugefügt wurden, waren `pageX` und `pageY` in einer begrenzten Anzahl von Browsern für kurze Zeit auf der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
