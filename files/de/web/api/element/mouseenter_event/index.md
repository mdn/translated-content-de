---
title: "Element: mouseenter-Ereignis"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mouseenter`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) erstmals so bewegt wird, dass sich sein Hotspot innerhalb des Elements befindet, bei dem das Ereignis ausgelöst wird.

Beachten Sie, dass sich „in ein Element hineinbewegen“ auf die Position des Elements im DOM-Baum bezieht, nicht auf seine visuelle Position. Wenn beispielsweise ein Kindelement so positioniert ist, dass es außerhalb seines Elternelements liegt, löst die Bewegung des Zeigers in das Kindelement hinein `mouseenter` beim Elternelement aus – auch wenn sich der Zeiger weiterhin außerhalb der Grenzen des Elternelements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mouseenter", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onmouseenter = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Hinweise zur Verwendung

Obwohl `mouseenter` [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ähnelt, unterscheidet es sich dadurch, dass es nicht [aufsteigt](/de/docs/Web/API/Event/bubbles) und nicht an Nachfahren gesendet wird, wenn der Zeiger aus dem sichtbaren Bereich eines Nachfahren in den sichtbaren Bereich des Elements selbst bewegt wird. Abgesehen davon werden `mouseenter`- und `mouseover`-Ereignisse für dieselbe Situation gegebenenfalls gleichzeitig ausgelöst.

### Verhalten von `mouseenter`-Ereignissen

Die folgende Abbildung zeigt die `mouseenter`-Ereignisse, die jedes von vier ineinander verschachtelten `div`-Elementen ohne Innen- oder Außenabstand empfängt. Daher treten alle Ereignisse gleichzeitig auf:
![Diagramm zum Verhalten von mouseenter](mouseenter.png)
Beim Eintritt in die Elemente wird an jedes Element der Hierarchie ein `mouseenter`-Ereignis gesendet. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger den Text erreicht.

### Verhalten von `mouseover`-Ereignissen

![Diagramm zum Verhalten von mouseover](mouseover.png)
Ein einzelnes `mouseover`-Ereignis wird an das am tiefsten verschachtelte Element des DOM-Baums gesendet. Anschließend steigt es in der Hierarchie auf, bis es durch einen Handler abgebrochen wird oder die Wurzel erreicht.

Bei tiefen Hierarchien kann die Zahl der gesendeten `mouseenter`-Ereignisse sehr groß werden und erhebliche Leistungsprobleme verursachen. In solchen Fällen ist es besser, auf `mouseover`-Ereignisse zu reagieren.

Zusammen mit dem zugehörigen `mouseleave`-Ereignis (das beim Element ausgelöst wird, wenn die Maus dessen Inhaltsbereich verlässt) verhält sich das `mouseenter`-Ereignis sehr ähnlich wie die CSS-Pseudoklasse {{cssxref(':hover')}}.

## Beispiele

Die Dokumentation zu [`mouseover`](/de/docs/Web/API/Element/mouseover_event#examples) enthält ein Beispiel, das den Unterschied zwischen `mouseover` und `mouseenter` veranschaulicht.

### mouseenter

Das folgende einfache Beispiel verwendet das `mouseenter`-Ereignis, um den Rahmen des `div` zu ändern, wenn die Maus in den ihm zugewiesenen Bereich gelangt. Anschließend fügt es der Liste einen Eintrag mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses hinzu.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Das `div` wird gestaltet, damit es besser sichtbar ist.

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
