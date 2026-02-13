---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die **`pageX`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interfaces gibt die X-Koordinate (horizontal) in Pixeln zurück, an der die Maus relativ zur linken Kante des gesamten Dokuments geklickt wurde. Dies schließt alle Teile des Dokuments ein, die derzeit nicht sichtbar sind.

Da diese Eigenschaft basierend auf der Kante des Dokuments definiert ist, berücksichtigt sie jeden horizontalen Bildlauf der Seite. Beispielsweise, wenn die Seite so gescrollt wird, dass 200 Pixel der linken Seite des Dokuments aus dem Sichtfeld herausgeschoben werden, und die Maus 100 Pixel von der linken Kante des Blickfelds nach innen geklickt wird, gibt der von `pageX` zurückgegebene Wert 300 sein.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View Modul](/de/docs/Web/CSS/Guides/CSSOM_view) hat es neu als `double`-Fließkommazahl definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

Siehe [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#page) für zusätzliche Informationen zu in dieser Weise angegebenen Koordinaten.

## Wert

Eine `double`-Fließkommazahl von Pixeln von der linken Kante des _Dokuments_, an der die Maus geklickt wurde, unabhängig von jeglichem Scrollen oder der Positionierung des Viewports, die möglicherweise in Kraft sind.

Diese Eigenschaft wurde ursprünglich in der Touch Events Spezifikation als long Integer spezifiziert, aber im CSSOM View Modul neu definiert, um eine doppelte Genauigkeit der Fließkommazahl zu ermöglichen, um Präzision im Subpixelbereich zu erlauben. Auch wenn numerische Typen beide in JavaScript durch `Number` dargestellt werden, können sie intern im Browsercode unterschiedlich behandelt werden, was zu potenziellen Verhaltensunterschieden führt.

Siehe [Browser-Kompatibilität](#browser-kompatibilität), um zu erfahren, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Schauen wir uns ein Beispiel an, das die Position der Maus relativ zum Ursprung der Seite zeigt. Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht das Browserfenster.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; das Feld, auf das wir Mausereignisse überwachen, hat die Klasse `"box"`. Es gibt zwei `<span>` Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`. Diese werden jedes Mal aktualisiert, wenn ein Ereignis auftritt, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

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

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignis-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}} Elemente, die die X- und Y-Koordinaten enthalten sollen, durch die Werte von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Resultat

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel sehen, das demonstriert, [wie Sie auf die Mauspositionsinformationen zugreifen](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#example) in jedem verfügbaren Koordinatensystem.

## Spezifikationen

{{Specifications}}

Bevor es zur CSSOM View Spezifikation hinzugefügt wurde, waren `pageX` und `pageY` auf der [`UIEvent`](/de/docs/Web/API/UIEvent) Schnittstelle in einem begrenzten Subset von Browsern für eine kurze Zeit verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
