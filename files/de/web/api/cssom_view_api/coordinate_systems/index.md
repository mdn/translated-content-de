---
title: Koordinatensysteme
slug: Web/API/CSSOM_view_API/Coordinate_systems
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{DefaultAPISidebar("CSSOM view API")}}

Wenn die Position eines Pixels in einem Grafikkontext angegeben wird (ähnlich wie bei Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird sie relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) genannt. Die Position wird durch den Abstand vom Ursprung in Pixeln entlang jeder Dimension des Kontexts angegeben.

Dieser Leitfaden beschreibt die Standardkoordinatensysteme des CSS-Objektmodells. Sie unterscheiden sich im Allgemeinen nur durch die Lage ihres Ursprungs.

## Dimensionen

In den von Webtechnologien verwendeten Koordinatensystemen wird der horizontale Abstand als _x-Koordinate_ bezeichnet. Ein negativer Wert gibt eine Position links vom Ursprung an, ein positiver Wert eine Position rechts davon. Die _y-Koordinate_ gibt den vertikalen Abstand an: Ein negativer Wert liegt oberhalb des Ursprungs, ein positiver darunter.

Im Web liegt der Ursprung standardmäßig in der _oberen_ linken Ecke des jeweiligen Kontexts (positive y-Koordinaten liegen unterhalb des Ursprungs). Dies unterscheidet sich von den meisten mathematischen Modellen, bei denen der Ursprung in der _unteren_ linken Ecke liegt und positive y-Koordinaten oberhalb des Ursprungs liegen.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten anzuordnen, kommt die **z-Achse** zum Einsatz. Die z-Achse verläuft vom Betrachter zur Bildschirmoberfläche. Der Wert der CSS-Eigenschaft {{cssxref("z-index")}} beeinflusst, wo positionierte Elemente auf dieser Achse liegen. Dadurch entsteht der Eindruck, dass sie sich vom Betrachter entfernen oder sich ihm nähern.

> [!NOTE]
> Die Definitionen und Ausrichtungen dieser Koordinatensysteme lassen sich mit CSS-Eigenschaften wie {{cssxref("transform")}} ändern. Im Folgenden geht es jedoch nur um die Standardkoordinatensysteme.

## Standardkoordinatensysteme des CSSOM

Das CSS-Objektmodell verwendet vier Standardkoordinatensysteme.
Zur Veranschaulichung der wichtigsten Systeme zeigt die folgende Abbildung einen Monitor mit einem Browserfenster, dessen Inhalt teilweise aus dem {{Glossary("viewport", "Viewport")}} herausgescrollt wurde.
Der aus dem Viewport herausgescrollte Seiteninhalt ist oberhalb des Browserfensters halbtransparent dargestellt. So wird sichtbar, wo der Ursprung der „page“-Koordinaten liegt.
Die Ursprünge der Koordinatensysteme „client“, „page“ und „viewport“ sind hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite anzeigt; die obere Hälfte ist als aus dem Browser-Viewport herausgescrollt dargestellt. Die oberen linken Ecken von Bildschirm, Seite und Viewport sind jeweils mit den Koordinaten 0,0 beschriftet.](css-coords.svg)

### Offset

Bei Koordinaten nach dem „offset“-Modell liegt der Ursprung in der oberen linken Ecke des untersuchten Elements beziehungsweise des Elements, bei dem ein Ereignis aufgetreten ist.

Wenn beispielsweise ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, geben die Eigenschaften [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) des Ereignisses die Mausposition relativ zur oberen linken Ecke des Knotens an, an den das Ereignis übermittelt wurde. Der Ursprung ist bis zur _padding edge_ eingerückt, also bis zur Kante zwischen dem Padding-Bereich und dem Rahmenbereich.

### Viewport

Das „viewport“-Koordinatensystem (auch „client“-Koordinatensystem) verwendet die obere linke Ecke des Viewports oder des Browsing-Kontexts, in dem das Ereignis aufgetreten ist, als Ursprung. Der Viewport ist der gesamte Anzeigebereich, in dem das Dokument dargestellt wird.

Auf einem Desktopcomputer geben beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers zum Zeitpunkt des Ereignisses relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window) an.
Bei Verwendung eines Eingabestifts oder eines Zeigers beziehen sich die Koordinaten [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) eines [Touch-Ereignisses](/de/docs/Web/API/TouchEvent) auf denselben Ursprung.

Die obere linke Ecke des Fensters hat immer die Koordinaten `(0, 0)`, unabhängig vom Inhalt des Dokuments und davon, ob gescrollt wurde. Anders ausgedrückt: Wenn das Dokument gescrollt wird, ändern sich die Viewport-Koordinaten einer bestimmten Position innerhalb des Dokuments.

### Page

Das „page“-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Document`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element des Dokuments nach horizontalem oder vertikalem Scrollen dieselben Koordinaten behält, sofern sich das Element nicht durch Layoutänderungen verschiebt.

Die Eigenschaften [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) eines Mausereignisses geben die Mausposition zum Zeitpunkt des Ereignisses relativ zur oberen linken Ecke des Dokuments an.
Die Koordinaten [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) eines [Touch-Ereignisses](/de/docs/Web/API/TouchEvent) beziehen sich auf denselben Ursprung.

### Screen

Beim „screen“-Modell liegt der Ursprung schließlich in der oberen linken Ecke des Bildschirmbereichs des Benutzers.
Jeder Punkt in diesem Koordinatensystem entspricht einem einzelnen logischen Pixel. Die Werte entlang jeder Achse nehmen daher in ganzzahligen Schritten zu oder ab.
Die Position eines bestimmten Punkts innerhalb eines Dokuments ändert sich beispielsweise, wenn das zugehörige Fenster verschoben wird oder sich die Bildschirmkonfiguration des Benutzers ändert – etwa durch eine andere Bildschirmauflösung oder das Hinzufügen beziehungsweise Entfernen von Monitoren.

Die Eigenschaften [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) geben die Koordinaten der Position eines Mausereignisses relativ zum Bildschirmursprung an.
Die Koordinaten [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) eines [Touch-Ereignisses](/de/docs/Web/API/TouchEvent) beziehen sich auf denselben Ursprung.

## Beispiel

Das folgende Beispiel protokolliert Mauskoordinaten innerhalb eines Elements.
Immer wenn der Mauszeiger die innere Box betritt, sich darin bewegt oder sie verlässt, werden die Ereignisse verarbeitet und die aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme protokolliert.

### HTML

Das HTML enthält ein `<p>`-Element mit der Klasse `"log"`, das die Daten der Mausereignisse anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für die umgebende Box ist absichtlich sehr breit, damit sich die Auswirkungen des Scrollens auf die Mauskoordinaten beobachten lassen.
Im Absatz `"inner"` werden Mausereignisse erfasst und protokolliert.

```css
.outer {
  width: 1000px;
}

.inner {
  font-family: monospace;
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: darkblue;
  color: white;
  cursor: crosshair;
  user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### JavaScript

Der JavaScript-Code richtet die Event-Handler für die innere Box ein, indem er für jeden der Ereignistypen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufruft.
Bei jedem Ereignis wird die Funktion `setCoords()` aufgerufen. Sie setzt den Textinhalt des `<p>`-Elements auf die Koordinaten der einzelnen Systeme.

```js
const log = document.querySelector(".log");
const inner = document.querySelector(".inner");

function setCoords(e) {
  log.innerText = `
    Offset X/Y: ${e.offsetX}, ${e.offsetY}
    Viewport X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Screen X/Y: ${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
```

### Ergebnis

Hier sehen Sie das Ergebnis in Aktion. Bewegen Sie den Mauszeiger in die blaue Box und darin umher, und beobachten Sie, wie sich die X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using): So verändern Sie ein Koordinatensystem
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):
  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):
  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
