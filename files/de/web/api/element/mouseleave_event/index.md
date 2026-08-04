---
title: "Element: mouseleave event"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("UI Events")}}

Das **`mouseleave`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Cursor eines Zeigegeräts (normalerweise eine Maus) daraus herausbewegt wird.

`mouseleave` und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) sind ähnlich, unterscheiden sich jedoch darin, dass `mouseleave` nicht blubbert und `mouseout` dies tut. Das bedeutet, dass `mouseleave` ausgelöst wird, wenn der Zeiger das Element _und_ alle seine Nachkommen verlassen hat, während `mouseout` ausgelöst wird, wenn der Zeiger das Element _oder_ eines der Nachkommen des Elements verlässt, aufgrund des Bubblings (selbst wenn der Zeiger sich noch innerhalb des Elements befindet). Abgesehen davon werden Leave- und Out-Ereignisse für dieselbe Situation zur gleichen Zeit versendet, wenn zutreffend.

Die `mouseleave`- und `mouseout`-Ereignisse werden nicht ausgelöst, wenn das Element ersetzt oder aus dem DOM entfernt wird.

Beachten Sie, dass "das Verlassen eines Elements" sich auf die Position des Elements im DOM-Baum und nicht auf seine visuelle Position bezieht. Wenn beispielsweise zwei Geschwisterelemente so positioniert sind, dass das eine innerhalb des anderen platziert ist, wird beim Bewegen vom äußeren zum inneren Element `mouseleave` auf dem äußeren Element ausgelöst, obwohl sich der Zeiger noch innerhalb der Grenzen des äußeren Elements befindet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("mouseleave", (event) => { })

onmouseleave = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beschreibung

### Verhalten von `mouseleave`-Ereignissen

![mouseleave Verhaltensdiagramm](mouseleave.png)

Ein `mouseleave`-Ereignis wird an jedes Element der Hierarchie gesendet, wenn es verlassen wird. Hier werden vier Ereignisse an die vier Elemente der Hierarchie gesendet, wenn der Zeiger sich von dem Text zu einem Bereich außerhalb des äußersten hier dargestellten `div` bewegt.

### Verhalten von `mouseout`-Ereignissen

![mouseout Verhaltensdiagramm](mouseout.png)

Ein einziges `mouseout`-Ereignis wird an das tiefste Element des DOM-Baums gesendet, dann blubbert es die Hierarchie hinauf, bis es von einem Handler abgebrochen oder die Wurzel erreicht wird.

## Beispiele

Die [`mouseout`](/de/docs/Web/API/Element/mouseout_event#examples)-Dokumentation enthält ein Beispiel, das den Unterschied zwischen `mouseout` und `mouseleave` veranschaulicht.

### mouseleave

Das folgende triviale Beispiel verwendet das `mouseenter`-Ereignis, um den Rand des `<div>` zu ändern, wenn die Maus den dafür vorgesehenen Raum betritt. Es fügt dann einen Eintrag zur Liste mit der Anzahl des `mouseenter`- oder `mouseleave`-Ereignisses hinzu.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Stilen des `<div>`, um es besser sichtbar zu machen.

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

- [Lernen: Einführung zu Ereignissen](/de/docs/Learn_web_development/Core/Scripting/Events)
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
