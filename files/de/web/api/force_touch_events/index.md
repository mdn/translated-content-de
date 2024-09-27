---
title: Force Touch events
slug: Web/API/Force_Touch_events
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("Force Touch Events")}}{{Non-standard_header}}

**Force Touch Events** sind eine proprietäre, spezifische Funktion von Apple, die neue Interaktionen basierend darauf ermöglicht, wie stark der Benutzer auf den Touchscreen oder das Trackpad klickt oder drückt (sofern sie von der Eingabehardware unterstützt werden).

## Events

- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{non-standard_inline}}
  - : Dieses Event wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Event ausgelöst. Sein Hauptnutzen besteht darin, dass es {{domxref("Event.preventDefault()", "default-prevented", "", 1)}} werden kann.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{non-standard_inline}}
  - : Dieses Event wird nach dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Event ausgelöst, sobald ausreichend Druck ausgeübt wurde, um als "Force Click" zu gelten.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{non-standard_inline}}
  - : Dieses Event wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) Event ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "Force Click" zu beenden.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{non-standard_inline}}
  - : Dieses Event wird jedes Mal ausgelöst, wenn sich die Druckstärke ändert. Es wird das erste Mal nach dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Event und das letzte Mal vor dem [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Event ausgelöst.

## Event Eigenschaften

Die folgende Eigenschaft ist bekannt und bei den Event-Objekten [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event), [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event), [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event), [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) verfügbar:

- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die derzeit auf das Trackpad/den Touchscreen ausgeübte Druckstärke.

## Konstanten

Diese Konstanten sind nützlich, um die relative Intensität des durch [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) angezeigten Drucks zu bestimmen:

- [`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Die minimale Kraft, die für einen normalen Klick erforderlich ist.
- [`MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Die minimale Kraft, die für einen Force Click erforderlich ist.

## Spezifikationen

_Nicht Teil einer Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).
