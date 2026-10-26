---
title: "Element: mouseleave-Ereignis"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mouseleave`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Zeiger eines Zeigegeräts (gewöhnlich einer Maus) das Element verlässt.

`mouseleave` und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) sind ähnlich, unterscheiden sich jedoch darin, dass `mouseleave` nicht durch die DOM-Hierarchie aufsteigt, `mouseout` hingegen schon. Das bedeutet, dass `mouseleave` ausgelöst wird, wenn der Zeiger das Element _und_ alle seine Nachfahren verlassen hat. `mouseout` wird dagegen ausgelöst, wenn der Zeiger das Element _oder_ einen seiner Nachfahren verlässt – aufgrund des Aufsteigens durch die DOM-Hierarchie sogar dann, wenn sich der Zeiger noch innerhalb des Elements befindet. Abgesehen davon werden die entsprechenden `mouseleave`- und `mouseout`-Ereignisse für dieselbe Situation gegebenenfalls gleichzeitig ausgelöst.

Die Ereignisse `mouseleave` und `mouseout` werden nicht ausgelöst, wenn das Element im DOM ersetzt oder daraus entfernt wird.

Beachten Sie, dass sich das „Verlassen eines Elements“ auf dessen Position im DOM-Baum bezieht, nicht auf seine visuelle Position. Wenn beispielsweise zwei Geschwisterelemente so positioniert sind, dass eines innerhalb des anderen angezeigt wird, löst der Wechsel vom äußeren zum inneren Element beim äußeren Element `mouseleave` aus – obwohl sich der Zeiger weiterhin innerhalb seiner sichtbaren Grenzen befindet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mouseleave", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmouseleave = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beschreibung

### Verhalten von `mouseleave`-Ereignissen

![Diagramm zum Verhalten von mouseleave](mouseleave.png)

Beim Verlassen der Elemente wird an jedes Element der Hierarchie ein `mouseleave`-Ereignis gesendet. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn sich der Zeiger vom Text in einen Bereich außerhalb des äußersten hier dargestellten div bewegt.

### Verhalten von `mouseout`-Ereignissen

![Diagramm zum Verhalten von mouseout](mouseout.png)

Ein einziges `mouseout`-Ereignis wird an das tiefste Element des DOM-Baums gesendet. Anschließend steigt es in der Hierarchie auf, bis es von einem Handler abgebrochen wird oder die Wurzel erreicht.

## Beispiele

Die Dokumentation zu [`mouseout`](/de/docs/Web/API/Element/mouseout_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseout` und `mouseleave` veranschaulicht.

### mouseleave

Das folgende einfache Beispiel verwendet das `mouseenter`-Ereignis, um den Rahmen des `<div>` zu ändern, wenn die Maus in den dafür vorgesehenen Bereich eintritt. Anschließend wird der Liste ein Eintrag mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses hinzugefügt.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Formatierung des `<div>`, damit es besser sichtbar ist.

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

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
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
