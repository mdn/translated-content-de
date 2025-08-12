---
title: "Element: mouseenter event"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Das **`mouseenter`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) zuerst so bewegt wird, dass sein Hotspot innerhalb des Elements liegt, bei dem das Ereignis ausgelöst wurde.

Beachten Sie, dass sich "in ein Element bewegen" auf die Position des Elements im DOM-Baum und nicht auf seine visuelle Position bezieht. Wenn zum Beispiel ein untergeordnetes Element so positioniert ist, dass es außerhalb seines übergeordneten Elements platziert ist, wird beim Bewegen in das untergeordnete Element `mouseenter` auf dem übergeordneten Element ausgelöst, obwohl der Zeiger noch außerhalb der Grenzen des übergeordneten Elements ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mouseenter", (event) => { })

onmouseenter = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Taste, die gedrückt wurde (falls zutreffend), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt wurden (falls vorhanden), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel für das Ereignis, falls vorhanden.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*`-Konstanten).
    Dies ermöglicht es Ihnen beispielsweise festzustellen, ob ein Mausereignis von einer tatsächlichen Maus oder von einem Touch-Ereignis erzeugt wurde (was die Genauigkeit, mit der Sie die dem Ereignis zugeordneten Koordinaten interpretieren, beeinflussen könnte).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die Menge des angewandten Drucks beim Klicken.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Verwendungshinweise

Obwohl ähnlich wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event), unterscheidet sich `mouseenter` dadurch, dass es nicht [bubbled](/de/docs/Web/API/Event/bubbles) und nicht an irgendwelche Nachkommen gesendet wird, wenn der Zeiger von einem der physischen Räume der Nachkommen in den eigenen physischen Raum bewegt wird. Abgesehen davon werden Enter- und Over-Ereignisse für dieselbe Situation zur selben Zeit gesendet, wenn dies zutrifft.

### Verhalten von `mouseenter`-Ereignissen

Dies beschreibt die `mouseenter`-Ereignisse, die von jedem der vier konzentrischen `divs` ohne Polsterung oder Rand empfangen werden, sodass die Ereignisse alle zur selben Zeit geschehen:
![Diagramm des `mouseenter`-Verhaltens](mouseenter.png)
Ein `mouseenter`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn diese betreten werden. Hier werden 4 Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger den Text erreicht.

### Verhalten von `mouseover`-Ereignissen

![Diagramm des `mouseover`-Verhaltens](mouseover.png)
Ein einzelnes `mouseover`-Ereignis wird an das tiefste Element des DOM-Baums gesendet, dann steigt es die Hierarchie hinauf, bis es von einem Handler abgebrochen oder die Wurzel erreicht wird.

Bei tiefen Hierarchien kann die Anzahl der `mouseenter`-Ereignisse ziemlich groß sein und erhebliche Leistungsprobleme verursachen. In solchen Fällen ist es besser, `mouseover`-Ereignisse zu hören.

Kombiniert mit dem entsprechenden `mouseleave` (das ausgelöst wird, wenn die Maus den Inhaltsbereich eines Elements verlässt) verhält sich das `mouseenter`-Ereignis sehr ähnlich zur CSS {{cssxref(':hover')}}-Pseudoklasse.

## Beispiele

Die [`mouseover`](/de/docs/Web/API/Element/mouseover_event#examples)-Dokumentation enthält ein Beispiel, das den Unterschied zwischen `mouseover` und `mouseenter` veranschaulicht.

### mouseenter

Das folgende einfache Beispiel verwendet das `mouseenter`-Ereignis, um den Rand des `div` zu ändern, wenn die Maus in den dafür vorgesehenen Bereich eintritt. Es fügt dann der Liste ein Element mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses hinzu.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Stylen des `div`, um es sichtbarer zu machen.

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333333;
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
  mouseTarget.style.border = "1px solid #333333";
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
