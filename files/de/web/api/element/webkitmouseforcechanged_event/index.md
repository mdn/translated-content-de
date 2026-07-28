---
title: "Element: webkitmouseforcechanged Event"
short-title: webkitmouseforcechanged
slug: Web/API/Element/webkitmouseforcechanged_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Das in Safari nicht standardmäßige **`webkitmouseforcechanged`**-Ereignis wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad/Bildschirm ändert.

**`webkitmouseforcechanged`** ist ein proprietäres, WebKit-spezifisches Ereignis, das von Apple eingeführt wurde, um ihre [Force Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events) zu unterstützen.

Dieses Ereignis wird erstmals nach dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis ausgelöst und stoppt das Auslösen, bevor das [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis eintritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("webkitmouseforcechanged", (event) => { })

onwebkitmouseforcechanged = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Spezifikationen

_Teil keiner Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event)
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event)
