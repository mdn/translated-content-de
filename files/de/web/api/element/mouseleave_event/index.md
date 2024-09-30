---
title: "Element: mouseleave Ereignis"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: 694fcee3661206baded9795045cab396836fac60
---

{{APIRef}}

Das **`mouseleave`** Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Cursor eines Zeigegeräts (meistens eine Maus) es verlässt.

`mouseleave` und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) sind ähnlich, unterscheiden sich aber darin, dass `mouseleave` nicht nach oben durchreicht (bubbled) und `mouseout` schon. Dies bedeutet, dass `mouseleave` ausgelöst wird, wenn der Zeiger das Element _und_ alle seine Nachkommen verlassen hat, während `mouseout` ausgelöst wird, wenn der Zeiger das Element _oder_ einen der Nachkommen des Elements verlässt (auch wenn der Zeiger sich noch innerhalb des Elements befindet).

Die `mouseleave` und `mouseout` Ereignisse werden nicht ausgelöst, wenn das Element ersetzt oder aus dem DOM entfernt wird.

Beachten Sie, dass "das Verlassen eines Elements" sich auf die Position des Elements im DOM-Baum bezieht, nicht auf seine visuelle Position. Wenn beispielsweise zwei Geschwisterelemente so positioniert sind, dass eines das andere umfasst, dann löst das Bewegen vom äußeren Element in das innere Element ein `mouseleave` beim äußeren Element aus, obwohl sich der Zeiger noch innerhalb der Grenzen des äußeren Elements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("mouseleave", (event) => {});

onmouseleave = (event) => {};
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Taste, die (falls zutreffend) gedrückt wurde, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt wurden (falls vorhanden), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Strg</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Randeinfassung des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Randeinfassung des Zielknotens.
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
  - : Gibt `true` zurück, wenn die <kbd>Shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*` Konstanten). Dies ermöglicht Ihnen zum Beispiel die Bestimmung, ob ein Mausereignis von einer tatsächlichen Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die mit dem Ereignis verbundenen Koordinaten interpretieren).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die aufgebrachte Druckmenge beim Klicken.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

### Verhalten der `mouseleave` Ereignisse

![Verhaltensdiagramm für mouseleave](mouseleave.png)

Ein `mouseleave` Ereignis wird an jedes Element der Hierarchie gesendet, wenn es verlassen wird. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Mauszeiger sich vom Text zu einem Bereich außerhalb des hier dargestellten äußeren Div bewegt.

### Verhalten der `mouseout` Ereignisse

![Verhaltensdiagramm für mouseout](mouseout.png)

Ein einzelnes `mouseout` Ereignis wird an das tiefste Element des DOM-Baums gesendet, dann wandert es die Hierarchie hinauf, bis es von einem Handler abgebrochen wird oder die Wurzel erreicht.

## Beispiele

Die Dokumentation zu [`mouseout`](/de/docs/Web/API/Element/mouseout_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseout` und `mouseleave` veranschaulicht.

### mouseleave

Das folgende einfache Beispiel nutzt das `mouseenter` Ereignis, um den Rand des `<div>` zu ändern, wenn die Maus den für es vorgesehenen Raum betritt. Dann wird ein Element zu der Liste mit der Nummer des `mouseenter` oder `mouseleave` Ereignisses hinzugefügt.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Gestaltung des `<div>`, um es besser sichtbar zu machen.

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

#### Ergebnis

{{EmbedLiveSample('mouseleave')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
