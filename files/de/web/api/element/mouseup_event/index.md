---
title: "Element: mouseup-Ereignis"
short-title: mouseup
slug: Web/API/Element/mouseup_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`mouseup`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. einer Maus oder eines Trackpads) losgelassen wird, während sich der Zeiger innerhalb des Elements befindet.

`mouseup`-Ereignisse sind das Gegenstück zu [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignissen.

Dieses Verhalten unterscheidet sich von [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignissen. Bei Verwendung einer physischen Maus werden `mouseup`-Ereignisse jedes Mal ausgelöst, wenn eine beliebige Maustaste losgelassen wird. `pointerup`-Ereignisse werden dagegen erst ausgelöst, wenn die letzte gedrückte Taste losgelassen wird. Werden zuvor Tasten losgelassen, während andere noch gedrückt sind, werden keine `pointerup`-Ereignisse ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mouseup", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmouseup = (event) => { }
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
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
