---
title: "Element: mouseenter-Ereignis"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`mouseenter`**-Ereignis wird an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) zunächst so bewegt wird, dass sein Hotspot innerhalb des Elements liegt, bei dem das Ereignis ausgelöst wurde.

Beachten Sie, dass sich „in ein Element bewegen“ auf die Position des Elements im DOM-Baum bezieht, nicht auf seine visuelle Position. Wenn beispielsweise ein Kindelement so positioniert ist, dass es außerhalb seines Elternteils platziert wird, wird das `mouseenter`-Ereignis auf dem Elternelement ausgelöst, auch wenn der Zeiger sich noch außerhalb der Grenzen des Elternelements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mouseenter", (event) => { })

onmouseenter = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Verwendungshinweise

Obwohl es dem [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ähnlich ist, unterscheidet sich `mouseenter` darin, dass es nicht [bubble](/de/docs/Web/API/Event/bubbles) und nicht an Nachkommen gesendet wird, wenn der Zeiger von einem Nachkommen in seinen eigenen physischen Raum bewegt wird. Abgesehen davon werden enter- und over-Ereignisse für die gleiche Situation gleichzeitig ausgelöst, wenn dies zutreffend ist.

### Verhalten von `mouseenter`-Ereignissen

Dies beschreibt die `mouseenter`-Ereignisse, die von vier konzentrischen `divs` ohne Padding oder Rand empfangen werden, sodass die Ereignisse alle gleichzeitig auftreten:
![Mouseenter-Verhaltensdiagramm](mouseenter.png)
Ein `mouseenter`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn man in diese eintritt. Hier werden 4 Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger den Text erreicht.

### Verhalten von `mouseover`-Ereignissen

![Mouseover-Verhaltensdiagramm](mouseover.png)
Ein einziges `mouseover`-Ereignis wird an das tiefste Element des DOM-Baums gesendet und dann in der Hierarchie nach oben geleitet, bis es von einem Handler abgebrochen wird oder die Wurzel erreicht.

Bei tiefen Hierarchien kann die Anzahl der gesendeten `mouseenter`-Ereignisse ziemlich groß sein und erhebliche Leistungsprobleme verursachen. In solchen Fällen ist es besser, `mouseover`-Ereignisse zu überwachen.

In Kombination mit dem entsprechenden `mouseleave` (das bei dem Element ausgelöst wird, wenn die Maus dessen Inhaltsbereich verlässt) verhält sich das `mouseenter`-Ereignis sehr ähnlich wie das CSS {{cssxref(':hover')}}-Pseudoklasse.

## Beispiele

Die [`mouseover`](/de/docs/Web/API/Element/mouseover_event#examples)-Dokumentation enthält ein Beispiel, das den Unterschied zwischen `mouseover` und `mouseenter` veranschaulicht.

### Mouseenter

Das folgende triviale Beispiel verwendet das `mouseenter`-Ereignis, um den Rand des `div` zu ändern, wenn die Maus den dafür vorgesehenen Bereich betritt. Anschließend wird der Liste ein Eintrag mit der Nummer des `mouseenter`- oder `mouseleave`-Ereignisses hinzugefügt.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Stilisierung des `div`, um es sichtbarer zu machen.

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
