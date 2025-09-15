---
title: "MouseEvent: pageX Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("UI Events")}}

Die **`pageX`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die X-Koordinate (horizontal) in Pixel an, an der die Maus relativ zum linken Rand des gesamten Dokuments angeklickt wurde.
Dies schließt jegliche Teile des Dokuments ein, die derzeit nicht sichtbar sind.

Da diese Eigenschaft auf der Kante des Dokuments basiert, berücksichtigt sie jegliches horizontale Scrollen der Seite.
Wenn zum Beispiel die Seite so gescrollt ist, dass 200 Pixel der linken Seite aus dem Sichtbereich herausgescrollt sind und die Maus 100 Pixel nach innen von der linken Ansichtskante geklickt wird, gibt `pageX` den Wert 300 zurück.

Ursprünglich wurde diese Eigenschaft als `long`-Integer definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat sie als einen `double`-Fließkommawert neu definiert. Details dazu finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

Zusätzliche Informationen zu Koordinaten, die auf diese Weise angegeben werden, finden Sie unter [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#page).

## Wert

Eine `double`-Fließkommazahl, die die Pixelanzahl vom linken Rand des _Dokuments_ angibt, an der die Maus geklickt wurde, unabhängig von jeglichem Scrollen oder Positionierung des Sichtbereichs, die eventuell aktiv sind.

Diese Eigenschaft wurde ursprünglich in der Touch Events-Spezifikation als langer Integer definiert, aber im CSSOM View Module als Gleitkommazahl mit doppelter Präzision neu definiert, um Subpixel-Genauigkeit zu ermöglichen.
Obwohl beide numerischen Typen in JavaScript mit `Number` dargestellt werden, können sie intern im Browsercode unterschiedlich behandelt werden, was zu möglichen Verhaltensunterschieden führen kann.

Sehen Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) nach, welche Browser auf den überarbeiteten Datentyp aktualisiert wurden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Schauen wir uns ein Beispiel an, das die Position der Maus relativ zum Ursprung der Seite zeigt.
Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist diese obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; das Feld, das wir auf Mausereignisse überwachen werden, hat die Klasse `"box"`.
Es enthält zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`.
Diese werden jedes Mal aktualisiert, wenn ein Ereignis auftritt, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

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

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-, [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)- und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die die X- und Y-Koordinaten enthalten sollen, durch die Werte von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Versuchen Sie es hier:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können sich auch ein Beispiel ansehen, das zeigt, [wie man auf die Mausposition zugreift](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#example) Informationen in jedem verfügbaren Koordinatensystem.

## Spezifikationen

{{Specifications}}

Bevor sie zur CSSOM View-Spezifikation hinzugefügt wurde, waren `pageX` und `pageY` eine Zeit lang in einem begrenzten Teil von Browsern im [`UIEvent`](/de/docs/Web/API/UIEvent)-Interface verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
