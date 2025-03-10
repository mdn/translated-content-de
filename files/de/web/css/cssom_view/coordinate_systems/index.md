---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Wenn die Position eines Pixels in einem Grafik-Kontext angegeben wird (genauso wie bei der Angabe von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als die Anzahl der Pixel angegeben, die vom Ursprung in jeder Dimension des Kontextes versetzt sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Abmessungen

In den von Webtechnologien verwendeten Koordinatensystemen wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert eine Position rechts vom Ursprung angibt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert über dem Ursprung und ein positiver Wert unter dem Ursprung liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines gegebenen Kontextes (wobei positive y-Koordinatenwerte unter dem Ursprung liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt und positive y-Koordinatenwerte über dem Ursprung sind.

Beim Verwenden der dritten Dimension, um Objekte von vorne nach hinten zu schichten, verwenden wir die **z-Achse**. Die z-Achse verläuft vom Betrachter zur Bildschirmoberfläche. Der Wert der CSS-Eigenschaft {{cssxref("z-index")}} beeinflusst, wo positionierte Elemente auf dieser Achse sitzen und vermittelt den Effekt, sich vom Betrachter weg oder auf ihn zu zu bewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch vorerst nur über das Standardkoordinatensystem sprechen.

## Standard-CSSOM-Koordinatensysteme

Es gibt vier standardmäßige Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Um die Hauptsysteme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalt enthält, der außerhalb des {{Glossary("viewport", "Viewports")}} gescrollt wurde. Seiteninhalte, die außerhalb des Viewports gescrollt wurden, werden halbtransparent über dem Browserfenster angezeigt, um anzugeben, wo der Ursprung für „Seiten“-Koordinaten wäre. Der Ursprung der Koordinatensysteme „Client“, „Seite“ und „Viewport“ wird hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite rendert; die obere Hälfte wird als außerhalb des Browser-Viewports gescrollt dargestellt. Die oberen linken Ecken des Bildschirms, der Seite und des Viewports sind alle mit den Koordinaten 0,0 beschriftet.](css-coords.svg)

### Offset

Koordinaten, die mit dem „Offset“-Modell angegeben werden, verwenden die obere linke Ecke des untersuchten Elements oder das Element, bei dem ein Ereignis aufgetreten ist.

Zum Beispiel wird bei einem [Maus-Ereignis](/de/docs/Web/API/MouseEvent) die Position der Maus, wie sie in den Eigenschaften [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis gesendet wurde. Der Ursprung ist durch die _Innenrandkante_, die Kante zwischen dem Innenbereich und dem Randbereich, eingearbeitet.

### Viewport

Das „Viewport“- (oder „Client“-) Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontextes, in dem das Ereignis auftrat. Dies ist der gesamte Sichtbereich, in dem das Dokument dargestellt wird.

Auf einem Desktop-Computer geben beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers an, als das Ereignis auftrat, relativ zur oberen linken Ecke des [`Fensters`](/de/docs/Web/API/Window). Bei Verwendung eines Eingabestifts oder eines Zeigegeräts liegen die Koordinaten [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) relativ zum gleichen Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Dokumentinhalt oder vom Scrollen, das stattgefunden hat. Mit anderen Worten, das Scrollen des Dokuments ändert die Viewport-Koordinaten einer gegebenen Position innerhalb des Dokuments.

### Seite

Das „Seiten“-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Dokuments`](/de/docs/Web/API/Document) an. Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments nach einem horizontalen oder vertikalen Scrollen im Dokument dieselben Koordinaten beibehält, es sei denn, das Element bewegt sich durch Layoutänderungen.

Die Eigenschaften [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) von Maus-Ereignissen geben die Position der Maus zu dem Zeitpunkt an, als das Ereignis generiert wurde, relativ zur oberen linken Ecke des Dokuments. Die Koordinaten [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

### Bildschirm

Schließlich kommen wir zum „Bildschirm“-Modell, bei dem der Ursprung die obere linke Ecke des Bildschirmbereichs des Benutzers ist. Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, und somit erhöhen und verringern sich die Werte entlang jeder Achse um ganze Zahlen. Die Position eines gegebenen Punkts innerhalb eines Dokuments ändert sich, wenn das Fenster verschoben wird oder sich die Bildschirmsituation des Benutzers ändert (durch Ändern der Bildschirmauflösung oder Hinzufügen oder Entfernen von Monitoren zum System).

Die Eigenschaften [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) geben die Koordinaten der Position eines Maus-Ereignisses relativ zum Ursprung des Bildschirms an. Die Koordinaten [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

## Beispiel

Sehen wir uns ein Beispiel an, das Mauskoordinaten in einem Element protokolliert. Immer wenn sich die Maus in das innere Feld bewegt, darin herumbewegt oder es verlässt, werden die Ereignisse durch Protokollieren der aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme behandelt.

### JavaScript

Für das JavaScript setzt der Code die Ereignishandler im inneren Feld durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jeden der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event). Für jedes der Ereignisse rufen wir die Funktion `setCoords()` auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

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

### HTML

Das HTML enthält ein `<p>` mit der Klasse `"log"`, die die Daten aus den Mausereignissen anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für das umgebende Feld ist absichtlich zu breit gewählt, um die Effekte von Mauskoordinaten bei gescrolltem Inhalt zu betrachten. Der `"inner"`-Absatz ist dort, wo Mausereignisse verfolgt und protokolliert werden.

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

### Ergebnis

Hier können Sie die Ergebnisse in Aktion sehen. Wenn Sie innerhalb und um das blaue Feld herum die Maus bewegen, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie man ein Koordinatensystem verändert
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):

  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
