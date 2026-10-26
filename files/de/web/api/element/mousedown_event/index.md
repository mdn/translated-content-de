---
title: "Element: mousedown-Ereignis"
short-title: mousedown
slug: Web/API/Element/mousedown_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mousedown`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger innerhalb des Elements befindet.

Es unterscheidet sich vom [`click`](/de/docs/Web/API/Element/click_event)-Ereignis dadurch, dass `click` erst nach einer vollständigen Klickaktion ausgelöst wird: Die Maustaste wird gedrückt und wieder losgelassen, während der Zeiger innerhalb desselben Elements bleibt. `mousedown` wird bereits in dem Moment ausgelöst, in dem die Taste gedrückt wird.

Dieses Verhalten unterscheidet sich von dem der [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse. Bei einer physischen Maus wird ein `mousedown`-Ereignis jedes Mal ausgelöst, wenn eine beliebige Maustaste gedrückt wird. Ein `pointerdown`-Ereignis wird nur beim Drücken der ersten Taste ausgelöst; das anschließende Drücken weiterer Tasten löst kein `pointerdown`-Ereignis aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mousedown", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmousedown = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Beispielcode finden Sie beim [`mousemove`-Ereignis](/de/docs/Web/API/Element/mousemove_event#examples).

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
