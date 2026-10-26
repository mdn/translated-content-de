---
title: "Element: webkitmouseforcechanged-Ereignis"
short-title: webkitmouseforcechanged
slug: Web/API/Element/webkitmouseforcechanged_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Das nicht standardisierte Ereignis **`webkitmouseforcechanged`** wird von Safari jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad oder Touchscreen ändert.

**`webkitmouseforcechanged`** ist ein proprietäres, WebKit-spezifisches Ereignis, das Apple zur Unterstützung der Funktion [Force Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events) eingeführt hat.

Dieses Ereignis wird erstmals nach dem Ereignis [`mousedown`](/de/docs/Web/API/Element/mousedown_event) ausgelöst und vor dem Ereignis [`mouseup`](/de/docs/Web/API/Element/mouseup_event) nicht mehr ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webkitmouseforcechanged", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onwebkitmouseforcechanged = (event) => { }
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
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
