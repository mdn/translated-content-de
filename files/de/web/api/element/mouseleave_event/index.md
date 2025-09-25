---
title: "Element: mouseleave event"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`mouseleave`** Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Cursor eines Zeigegeräts (normalerweise eine Maus) sich aus diesem herausbewegt.

`mouseleave` und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) sind ähnlich, unterscheiden sich jedoch darin, dass `mouseleave` nicht bubbling-fähig ist und `mouseout` schon. Das bedeutet, dass `mouseleave` ausgelöst wird, wenn der Zeiger das Element _und_ alle seine Nachkommen verlassen hat, während `mouseout` ausgelöst wird, wenn der Zeiger das Element _oder_ einen der Nachkommen des Elements verlässt, aufgrund von Bubbling (auch wenn sich der Zeiger noch innerhalb des Elements befindet). Ansonsten werden Leave- und Out-Ereignisse für die gleiche Situation zur gleichen Zeit ausgelöst, sofern zutreffend.

Die `mouseleave` und `mouseout` Ereignisse werden nicht ausgelöst, wenn das Element ersetzt oder aus dem DOM entfernt wird.

Bitte beachten Sie, dass "sich aus einem Element herausbewegen" sich auf die Position des Elements im DOM-Baum bezieht, nicht auf seine visuelle Position. Zum Beispiel, wenn zwei Geschwisterelemente so positioniert sind, dass eines innerhalb des anderen platziert ist, wird beim Bewegen vom äußeren Element in das innere Element `mouseleave` auf dem äußeren Element ausgelöst, obwohl sich der Zeiger immer noch innerhalb der Grenzen des äußeren Elements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("mouseleave", (event) => { })

onmouseleave = (event) => { }
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
  - : Die Tasten, die (falls vorhanden) gedrückt wurden, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls es eines gibt.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (eines der `MOZ_SOURCE_*` Konstanten).
    Damit können Sie beispielsweise feststellen, ob ein Mausereignis von einer tatsächlichen Maus oder einem Touch-Ereignis erzeugt wurde (was sich auf die Genauigkeit auswirken könnte, mit der Sie die Koordinaten, die mit dem Ereignis verbunden sind, interpretieren).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Druck, der beim Klicken ausgeübt wurde.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

### Verhalten von `mouseleave`-Ereignissen

![Verhaltensdiagramm für mouseleave](mouseleave.png)

Ein `mouseleave`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn diese verlassen werden. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger sich von dem Text zu einem Bereich außerhalb des äußersten hier dargestellten `div` bewegt.

### Verhalten von `mouseout`-Ereignissen

![Verhaltensdiagramm für mouseout](mouseout.png)

Ein einziges `mouseout`-Ereignis wird an das tiefste Element des DOM-Baums gesendet, danach steigt es die Hierarchie hinauf, bis es von einem Handler abgebrochen wird oder die Wurzel erreicht.

## Beispiele

Die Dokumentation zu [`mouseout`](/de/docs/Web/API/Element/mouseout_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseout` und `mouseleave` veranschaulicht.

### mouseleave

Das folgende triviale Beispiel verwendet das `mouseenter`-Ereignis, um die Umrandung des `<div>` zu ändern, wenn die Maus den ihm zugewiesenen Bereich betritt. Es fügt dann ein Element zur Liste hinzu mit der Nummer des `mouseenter` oder `mouseleave` Ereignisses.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Stil für das `<div>`, um es sichtbarer zu machen.

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

#### Ergebnis

{{EmbedLiveSample('mouseleave')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erste Schritte: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
