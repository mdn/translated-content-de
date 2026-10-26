---
title: "Element: webkitmouseforcedown-Ereignis"
short-title: webkitmouseforcedown
slug: Web/API/Element/webkitmouseforcedown_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Nachdem ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis am Element ausgelöst wurde, beginnt Safari, **`webkitmouseforcedown`**-Ereignisse an das Element zu senden, sobald genügend Druck auf die Maus- oder Trackpad-Taste ausgeübt wird, um als „Force Click“ zu gelten.

**`webkitmouseforcedown`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der Funktion [Force Touch events](/de/docs/Web/API/Force_Touch_events).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webkitmouseforcedown", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebkitmouseforcedown = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Spezifikationen

_Nicht Teil einer Spezifikation._ Apple stellt [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html) bereit.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event)
