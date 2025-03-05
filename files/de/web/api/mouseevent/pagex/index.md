---
title: "MouseEvent: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{APIRef("UI Events")}}

Die **`pageX`** Schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die X-Koordinate (horizontal) in Pixel an, an der die Maus relativ zum linken Rand des gesamten Dokuments geklickt wurde. Dies schließt alle derzeit nicht sichtbaren Teile des Dokuments ein.

Da diese Eigenschaft auf dem Rand des Dokuments basiert, berücksichtigt sie jegliches horizontale Scrollen der Seite. Wenn die Seite beispielsweise so gescrollt ist, dass 200 Pixel des linken Teils des Dokuments aus dem Sichtfeld herausgescrollt sind und die Maus 100 Pixel vom linken Rand des Ansichtspunktes entfernt geklickt wird, beträgt der von `pageX` zurückgegebene Wert 300.

Ursprünglich war diese Eigenschaft als `long` Integer definiert. Das [CSSOM View Module](/de/docs/Web/CSS/CSSOM_view) hat sie als `double` Gleitkommawert neu definiert. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Einzelheiten.

Weitere Informationen zu auf diese Weise angegebenen Koordinaten finden Sie unter [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#page).

## Wert

Eine `double` Gleitkommazahl, die die Anzahl der Pixel vom linken Rand des _Dokuments_ angibt, an dem die Maus geklickt wurde, unabhängig von Scrollen oder der Positionierung im Ansichtsfenster, die möglicherweise aktiv ist.

Diese Eigenschaft wurde ursprünglich in der Touch Events-Spezifikation als langes Integer festgelegt, aber im CSSOM View Module zu einer Gleitkommazahl mit doppelter Genauigkeit umdefiniert, um Subpixelpräzision zu ermöglichen. Obwohl beide Zahlentypen in JavaScript durch `Number` dargestellt werden, können sie intern im Code des Browsers unterschiedlich behandelt werden, was zu potenziellen Verhaltensunterschieden führen kann.

Unter [Browser-Kompatibilität](#browser-kompatibilität) erfahren Sie, welche Browser aktualisiert wurden, um den überarbeiteten Datentyp zu verwenden.

## Beispiele

### Anzeige der Mausposition relativ zum Seitenursprung

Schauen wir uns ein Beispiel an, das Ihnen die Position der Maus relativ zum Ursprung der Seite zeigt. Da dieses Beispiel in einem {{HTMLElement("iframe")}} präsentiert wird, ist die obere linke Ecke die obere linke Ecke des Rahmens, nicht des Browserfensters.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

Das HTML ist einfach; das Kästchen, auf das wir Mausereignisse beobachten werden, hat die Klasse `"box"`. Es hat zwei `<span>`-Elemente, eines mit der ID `"x"` und eines mit der ID `"y"`. Diese werden jedes Mal, wenn ein Ereignis auftritt, aktualisiert, um die neuesten Mauskoordinaten relativ zur Seite zu enthalten.

#### CSS

Nachfolgend ist das für dieses Beispiel verwendete CSS dargestellt.

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

Der JavaScript-Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um die Funktion `updateDisplay()` als Ereignis-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignisse zu registrieren.

`updateDisplay()` ersetzt den Inhalt der {{HTMLElement("span")}}-Elemente, die X- und Y-Koordinaten enthalten sollen, durch die Werte von `pageX` und [`pageY`](/de/docs/Web/API/MouseEvent/pageY).

#### Ergebnis

Probieren Sie es hier aus:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### Weitere Beispiele

Sie können auch ein Beispiel ansehen, das zeigt, [wie Sie die Mausposition abrufen](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#example) können, um Informationen in jedem verfügbaren Koordinatensystem zu erhalten.

## Spezifikationen

{{Specifications}}

Bevor `pageX` und `pageY` zur CSSOM View-Spezifikation hinzugefügt wurden, waren sie auf dem [`UIEvent`](/de/docs/Web/API/UIEvent)-Interface in einem begrenzten Teilmengen von Browsern für kurze Zeit verfügbar.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
