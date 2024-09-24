---
title: "Element: mouseleave-Ereignis"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: 694fcee3661206baded9795045cab396836fac60
---

{{APIRef}}

Das **`mouseleave`**-Ereignis wird bei einem {{domxref("Element")}} ausgelöst, wenn der Cursor eines Zeigegeräts (normalerweise eine Maus) das Element verlässt.

`mouseleave` und {{domxref("Element/mouseout_event", "mouseout")}} sind ähnlich, unterscheiden sich jedoch darin, dass `mouseleave` nicht durchläuft und `mouseout` schon. Das bedeutet, dass `mouseleave` ausgelöst wird, wenn der Zeiger das Element _und_ alle seine Nachkommen verlassen hat, während `mouseout` ausgelöst wird, wenn der Zeiger das Element _oder_ einen seiner Nachkommen verlässt (auch wenn der Zeiger sich noch innerhalb des Elements befindet).

Die Ereignisse `mouseleave` und `mouseout` werden nicht ausgelöst, wenn das Element ersetzt oder aus dem DOM entfernt wird.

Beachten Sie, dass sich "ein Element verlassen" auf die Position des Elements im DOM-Baum bezieht, nicht auf seine visuelle Position. Wenn beispielsweise zwei Geschwisterelemente so positioniert sind, dass eines innerhalb des anderen platziert ist, wird das `mouseleave`-Ereignis auf dem äußeren Element ausgelöst, wenn man vom äußeren Element in das innere Element wechselt, auch wenn sich der Zeiger noch innerhalb der Grenzen des äußeren Elements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("mouseleave", (event) => {});

onmouseleave = (event) => {};
```

## Ereignistyp

Ein {{domxref("MouseEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Die Nummer der Taste, die (falls zutreffend) beim Auslösen des Mausereignisses gedrückt wurde.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Die Tasten, die beim Auslösen des Mausereignisses gedrückt wurden (falls vorhanden).
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Strg</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Meta</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Randeinfassung des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Randeinfassung des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Umschalt</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Gerätetyp, der das Ereignis generiert hat (einer der `MOZ_SOURCE_*` Konstanten). Damit können Sie z.B. feststellen, ob ein Mausereignis durch eine tatsächliche Maus oder ein Touch-Ereignis generiert wurde (was die Genauigkeit der Interpretation der mit dem Ereignis verbundenen Koordinaten beeinflussen könnte).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der ausgeübte Druck beim Klicken.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientY")}}.

### Verhalten von `mouseleave`-Ereignissen

![mouseleave behavior diagram](mouseleave.png)

Ein `mouseleave`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn diese verlassen werden. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger vom Text zu einem Bereich außerhalb des hier dargestellten äußersten div verschoben wird.

### Verhalten von `mouseout`-Ereignissen

![mouseout behavior diagram](mouseout.png)

Ein einziges `mouseout`-Ereignis wird an das tiefste Element des DOM-Baums gesendet und durchläuft dann die Hierarchie, bis es von einem Handler abgebrochen oder die Wurzel erreicht wird.

## Beispiele

Die Dokumentation zu [`mouseout`](/de/docs/Web/API/Element/mouseout_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseout` und `mouseleave` erläutert.

### mouseleave

Das folgende einfache Beispiel verwendet das `mouseenter`-Ereignis, um den Rahmen des `<div>` zu ändern, wenn die Maus in den ihm zugewiesenen Raum eintritt. Es fügt dann einen Eintrag zur Liste hinzu mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Stil für das `<div>`, um es besser sichtbar zu machen.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
