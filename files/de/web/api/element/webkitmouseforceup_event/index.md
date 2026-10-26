---
title: "Element: webkitmouseforceup-Ereignis"
short-title: webkitmouseforceup
slug: Web/API/Element/webkitmouseforceup_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Das nicht standardisierte Ereignis **`webkitmouseforceup`** wird von Safari an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, nachdem das Ereignis [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) aufgetreten ist und der Druck auf die Taste ausreichend nachgelassen hat, um den „Force Click“ zu beenden.

**`webkitmouseforceup`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der Funktion [Force Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webkitmouseforceup", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebkitmouseforceup = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Spezifikationen

_Kein Bestandteil einer Spezifikation._ Apple stellt [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html) bereit.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event)
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event)
