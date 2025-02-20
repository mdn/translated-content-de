---
title: "Element: mouseenter-Ereignis"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: 6e5b16aa29efee13cc7ec2fdc5512f0b3d275377
---

{{APIRef}}

Das **`mouseenter`**-Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) initial bewegt wird, sodass sein Hotspot innerhalb des Elements liegt, in dem das Ereignis ausgelöst wurde.

Beachten Sie, dass sich „in ein Element hineinbewegen“ auf die Position des Elements im DOM-Baum und nicht auf seine visuelle Position bezieht. Zum Beispiel: Wenn ein Kindelement so positioniert ist, dass es sich außerhalb des übergeordneten Elements befindet, wird durch das Hineinbewegen in das Kindelement trotzdem ein `mouseenter`-Ereignis auf dem übergeordneten Element ausgelöst, auch wenn sich der Zeiger immer noch außerhalb der Grenzen des übergeordneten Elements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("mouseenter", (event) => {});

onmouseenter = (event) => {};
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Taste <kbd>alt</kbd> gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Taste, die (falls zutreffend) gedrückt wurde, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die (falls vorhanden) gedrückt wurden, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Taste <kbd>control</kbd> gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Taste <kbd>meta</kbd> gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des Außenrands des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des Außenrands des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Taste <kbd>shift</kbd> gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis generiert hat (eine der `MOZ_SOURCE_*`-Konstanten). Damit können Sie zum Beispiel feststellen, ob ein Mausereignis von einer tatsächlichen Maus oder von einem Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen kann, mit der die Koordinaten des Ereignisses interpretiert werden).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die aufgewendete Kraft beim Klicken.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Hinweise zur Nutzung

Obwohl `mouseenter` dem [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ähnelt, unterscheidet es sich darin, dass es nicht [bubbles](/de/docs/Web/API/Event/bubbles) und nicht an Nachkommen gesendet wird, wenn der Zeiger von einem physikalischen Bereich eines Nachkommen in seinen eigenen Bereich bewegt wird. Abgesehen davon werden `mouseenter`- und `mouseover`-Ereignisse für dieselbe Situation gleichzeitig ausgelöst, wenn dies zutrifft.

### Verhalten von `mouseenter`-Ereignissen

Dies beschreibt die `mouseenter`-Ereignisse, die jede der vier konzentrischen `div`-Elemente ohne Padding oder Rand erhalten, sodass die Ereignisse zur gleichen Zeit auftreten:
![Diagramm zum `mouseenter`-Verhalten](mouseenter.png)
Ein `mouseenter`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn sie betreten werden. Hier werden 4 Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger den Text erreicht.

### Verhalten von `mouseover`-Ereignissen

![Diagramm zum `mouseover`-Verhalten](mouseover.png)
Ein einzelnes `mouseover`-Ereignis wird an das tiefste Element des DOM-Baums gesendet, dann wird es durch die Hierarchie nach oben weitergeleitet, bis es von einem Handler abgebrochen oder die Wurzel erreicht wird.

Bei tiefen Hierarchien können die gesendeten `mouseenter`-Ereignisse recht zahlreich sein und erhebliche Leistungsprobleme verursachen. In solchen Fällen ist es besser, auf `mouseover`-Ereignisse zu hören.

Zusammen mit dem entsprechenden `mouseleave` (das ausgelöst wird, wenn die Maus den Inhaltsbereich des Elements verlässt), verhält sich das `mouseenter`-Ereignis sehr ähnlich zur CSS-{{cssxref(':hover')}}-Pseudoklasse.

## Beispiele

Die Dokumentation zu [`mouseover`](/de/docs/Web/API/Element/mouseover_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseover` und `mouseenter` verdeutlicht.

### mouseenter

Das folgende triviale Beispiel verwendet das `mouseenter`-Ereignis, um den Rand der `div` zu ändern, wenn der Mauszeiger in den zugewiesenen Bereich eintritt. Anschließend wird eine Liste mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses ergänzt.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Styling der `div`, um sie sichtbar zu machen.

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333;
}
```

#### JavaScript

```js
let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem(`This is mouseenter event ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem(`This is mouseleave event ${leaveEventCount}.`);
});

function addListItem(text) {
  // Create a new text node using the supplied text
  const newTextNode = document.createTextNode(text);

  // Create a new li element
  const newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}
```

### Ergebnis

{{EmbedLiveSample('mouseenter')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
