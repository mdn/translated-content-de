---
title: "Element: mouseout-Ereignis"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`mouseout`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) verwendet wird, um den Cursor so zu bewegen, dass er sich nicht mehr innerhalb des Elements oder eines seiner Kinder befindet.

`mouseout` wird auch an ein Element übermittelt, wenn der Cursor ein Kind-Element betritt, da das Kind-Element den sichtbaren Bereich des Elements verdeckt.

Wenn das Ziel-Element Kind-Elemente hat, werden `mouseout`- und `mouseover`-Ereignisse ebenfalls ausgelöst, wenn die Maus über die Grenzen dieser Elemente bewegt wird, nicht nur über das Ziel-Element selbst. Gewöhnlich ist das Verhalten der [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)- und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignisse sinnvoller, da sie nicht betroffen sind, wenn man in Kind-Elemente hineinwechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("mouseout", (event) => { })

onmouseout = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Die folgenden Beispiele zeigen die Verwendung des `mouseout`-Ereignisses.

### mouseout und mouseleave

Das folgende Beispiel illustriert den Unterschied zwischen den `mouseout`- und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignissen. Das `mouseleave`-Ereignis wird zum {{HTMLElement("ul")}} hinzugefügt, um die Liste lila zu färben, wenn die Maus das `<ul>` verlässt. `mouseout` wird der Liste hinzugefügt, um das angezielte Element orange zu färben, wenn die Maus es verlässt.

Wenn Sie dies ausprobieren, werden Sie feststellen, dass `mouseout` an die einzelnen Listenelemente geliefert wird, während `mouseleave` zur gesamten Liste geht, dank der Hierarchie der Elemente und der Tatsache, dass Listenelemente die darunterliegende `<ul>` verdecken.

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
