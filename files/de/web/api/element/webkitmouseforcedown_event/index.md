---
title: "Element: webkitmouseforcedown-Ereignis"
short-title: webkitmouseforcedown
slug: Web/API/Element/webkitmouseforcedown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Nachdem ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis auf das Element ausgelöst wurde, sendet Safari **`webkitmouseforcedown`**-Ereignisse an das Element, wenn und sobald ausreichender Druck auf den Maus- oder Trackpad-Button ausgeübt wurde, um als "Force Click" zu qualifizieren.

**`webkitmouseforcedown`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der [Force Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events)-Funktion.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("webkitmouseforcedown", (event) => { })

onwebkitmouseforcedown = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Spezifikationen

_Nicht Teil einer Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event)
