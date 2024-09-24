---
title: Force-Touch-Ereignisse
slug: Web/API/Force_Touch_events
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("Force Touch Events")}}{{Non-standard_header}}

**Force-Touch-Ereignisse** sind eine proprietäre, Apple-spezifische Funktion, die es ermöglicht (wo von der Eingabegerätehardware unterstützt), neue Interaktionen basierend darauf, wie stark der Benutzer auf den Touchscreen oder das Trackpad drückt oder klickt.

## Ereignisse

- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : Dieses Ereignis wird vor dem {{domxref("Element/mousedown_event", "mousedown")}} Ereignis ausgelöst. Der Hauptnutzen besteht darin, dass es {{domxref("Event.preventDefault()", "standardmäßig verhindert", "", 1)}} werden kann.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{non-standard_inline}}
  - : Dieses Ereignis wird nach dem {{domxref("Element/mousedown_event", "mousedown")}} Ereignis ausgelöst, sobald genügend Druck ausgeübt wurde, um es als "Force-Klick" zu qualifizieren.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{non-standard_inline}}
  - : Dieses Ereignis wird nach dem {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "Force-Klick" zu beenden.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{non-standard_inline}}
  - : Dieses Ereignis wird jedes Mal ausgelöst, wenn sich der Druck ändert. Es wird erstmals nach dem {{domxref("Element/mousedown_event", "mousedown")}} Ereignis ausgelöst und hört auf, vor dem {{domxref("Element/mouseup_event", "mouseup")}} Ereignis ausgelöst zu werden.

## Ereigniseigenschaften

Die folgende Eigenschaft ist bekannt, auf den {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}, {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}, {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}, {{domxref("Element/mousemove_event", "mousemove")}} und {{domxref("Element/mouseup_event", "mouseup")}} Ereignisobjekten verfügbar zu sein:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der derzeit auf das Trackpad/den Touchscreen ausgeübte Druck.

## Konstanten

Diese Konstanten sind nützlich, um die relative Intensität des durch {{domxref("MouseEvent.webkitForce")}} angezeigten Drucks zu bestimmen:

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN_static", "MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimaler Druck, der für einen normalen Klick erforderlich ist.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static", "MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimaler Druck, der für einen Force-Klick erforderlich ist.

## Spezifikationen

_Teil keiner Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).
