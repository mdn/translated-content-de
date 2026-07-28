---
title: "Element: mousedown Ereignis"
short-title: mousedown
slug: Web/API/Element/mousedown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`mousedown`**-Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger innerhalb des Elements befindet.

Dies unterscheidet sich vom [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, da `click` ausgelöst wird, nachdem eine vollständige Klickaktion stattgefunden hat; das heißt, die Maustaste wird gedrückt und losgelassen, während sich der Zeiger weiterhin innerhalb desselben Elements befindet. `mousedown` wird in dem Moment ausgelöst, in dem die Taste initial gedrückt wird.

Dieses Verhalten unterscheidet sich von [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignissen. Bei Verwendung einer physischen Maus werden `mousedown`-Ereignisse immer ausgelöst, wenn eine beliebige Taste einer Maus gedrückt wird. `pointerdown`-Ereignisse werden nur beim ersten Tastendruck ausgelöst; nachfolgende Tastendrücke lösen keine `pointerdown`-Ereignisse aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("mousedown", (event) => { })

onmousedown = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Siehe [`mousemove`-Ereignis](/de/docs/Web/API/Element/mousemove_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
