---
title: "Element: mouseover-Ereignis"
short-title: mouseover
slug: Web/API/Element/mouseover_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mouseover`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn der Cursor mit einem Zeigegerät (z. B. einer Maus oder einem Trackpad) auf das Element oder eines seiner Kindelemente bewegt wird.

Wenn das Zielelement Kindelemente hat, werden `mouseout`- und `mouseover`-Ereignisse auch ausgelöst, wenn die Maus die Grenzen dieser Elemente überquert, und nicht nur die Grenze des Zielelements selbst. Das Verhalten der Ereignisse `mouseenter` und `mouseleave` ist in der Regel besser geeignet, da sie nicht durch das Bewegen des Cursors auf Kindelemente beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mouseover", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmouseover = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Das folgende Beispiel veranschaulicht den Unterschied zwischen den Ereignissen `mouseover` und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event).

### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### JavaScript

```js
const test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
});

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", (event) => {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
});
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

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
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
