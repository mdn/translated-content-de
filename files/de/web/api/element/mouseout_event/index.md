---
title: "Element: mouseout-Ereignis"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mouseout`**-Ereignis wird an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Cursor mit einem Zeigegerät (üblicherweise einer Maus) so bewegt wird, dass er sich nicht mehr innerhalb des Elements oder eines seiner Kindelemente befindet.

`mouseout` wird auch an ein Element übermittelt, wenn der Cursor in ein Kindelement eintritt, da das Kindelement den sichtbaren Bereich des Elements verdeckt.

Wenn das Zielelement Kindelemente hat, werden `mouseout`- und `mouseover`-Ereignisse auch ausgelöst, wenn die Maus die Grenzen dieser Kindelemente überschreitet, nicht nur die Grenze des Zielelements selbst. Das Verhalten der Ereignisse [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) ist in der Regel besser geeignet, da sie nicht durch das Bewegen des Cursors in Kindelemente beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mouseout", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmouseout = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Die folgenden Beispiele zeigen die Verwendung des `mouseout`-Ereignisses.

### mouseout und mouseleave

Das folgende Beispiel veranschaulicht den Unterschied zwischen den Ereignissen `mouseout` und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event). Das `mouseleave`-Ereignis wird dem {{HTMLElement("ul")}}-Element hinzugefügt, um die Liste lila zu färben, sobald die Maus das `<ul>`-Element verlässt. `mouseout` wird der Liste hinzugefügt, um das jeweilige Zielelement orange zu färben, wenn die Maus es verlässt.

Wenn Sie das Beispiel ausprobieren, werden Sie feststellen, dass `mouseout` an die einzelnen Listeneinträge übermittelt wird, während `mouseleave` an die gesamte Liste übermittelt wird. Das liegt an der Hierarchie der Elemente und daran, dass die Listeneinträge das darunterliegende `<ul>`-Element verdecken.

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener("mouseleave", (event) => {
  // highlight the mouseleave target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 1000);
});

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", (event) => {
  // highlight the mouseout target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
});
```

#### Ergebnis

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

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
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
