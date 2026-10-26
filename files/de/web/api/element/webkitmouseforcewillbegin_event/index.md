---
title: "Element: webkitmouseforcewillbegin-Ereignis"
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Safari für macOS löst das nicht standardisierte Ereignis **`webkitmouseforcewillbegin`** an einem [`Element`](/de/docs/Web/API/Element) aus, bevor das erste [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis ausgelöst wird.

Dadurch können Sie dem System mitteilen, dass es keine standardmäßigen Force-Touch-Aktionen auslösen soll, falls der Klick zu einem [Force-Touch-Ereignis](/de/docs/Web/API/Force_Touch_events) wird.

Um macOS anzuweisen, keine standardmäßigen Force-Touch-Aktionen auszuführen, wenn die anwendende Person genügend Druck ausübt, um ein Force-Touch-Ereignis auszulösen, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt von `webkitmouseforcewillbegin` auf.

**`webkitmouseforcewillbegin`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der Funktion für [Force-Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webkitmouseforcewillbegin", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebkitmouseforcewillbegin = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Spezifikationen

_Nicht Teil einer Spezifikation._ Apple bietet [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event)
