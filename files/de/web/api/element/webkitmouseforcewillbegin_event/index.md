---
title: "Element: webkitmouseforcewillbegin Ereignis"
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Safari für macOS löst das nicht standardisierte **`webkitmouseforcewillbegin`** Ereignis an einem [`Element`](/de/docs/Web/API/Element) aus, bevor das initiale [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis ausgelöst wird.

Dies bietet die Möglichkeit, dem System mitzuteilen, keine Standard-Force-Touch-Aktionen auszulösen, wenn und sobald der Klick in ein [Force Touch Ereignis](/de/docs/Web/API/Force_Touch_events) übergeht.

Um macOS anzuweisen, keine Standard-Force-Touch-Aktionen auszuführen, falls der Benutzer genügend Druck anwendet, um ein Force Touch Ereignis zu aktivieren, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `webkitmouseforcewillbegin` Ereignisobjekt auf.

**`webkitmouseforcewillbegin`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der [Force Touch Ereignisse](/de/docs/Web/API/Force_Touch_events) Funktion.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("webkitmouseforcewillbegin", (event) => { })

onwebkitmouseforcewillbegin = (event) => { }
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
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event)
