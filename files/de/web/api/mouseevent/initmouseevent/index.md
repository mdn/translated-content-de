---
title: "MouseEvent: initMouseEvent() Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`** Methode initialisiert den Wert eines Mausklick-Ereignisses, nachdem es erstellt wurde (normalerweise unter Verwendung der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren, wie [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Die Seite [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen zur Nutzung.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

## Syntax

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### Parameter

- `type`
  - : der String, der den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festlegt. Mögliche Typen für Mausereignisse sind: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : Gibt an, ob das Ereignis ein Bubbling-Ereignis ist. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : Gibt an, ob die Standardaktion des Ereignisses verhindert werden kann. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view`
  - : Die AbstractView des Ereignisses. Sie sollten hier das [`window`](/de/docs/Web/API/Window) Objekt übergeben. Setzt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view).
- `detail`
  - : Die Klickanzahl des Ereignisses. Setzt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail).
- `screenX`
  - : Die X-Koordinate des Bildschirms für das Ereignis. Setzt den Wert von [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX).
- `screenY`
  - : Die Y-Koordinate des Bildschirms für das Ereignis. Setzt den Wert von [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY).
- `clientX`
  - : Die X-Koordinate des Clients für das Ereignis. Setzt den Wert von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- `clientY`
  - : Die Y-Koordinate des Clients für das Ereignis. Setzt den Wert von [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).
- `ctrlKey`
  - : Gibt an, ob die <kbd>Steuerung</kbd>-Taste während des Ereignisses gedrückt wurde. Setzt den Wert von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey).
- `altKey`
  - : Gibt an, ob die <kbd>Alt</kbd>-Taste während des Ereignisses gedrückt wurde. Setzt den Wert von [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey).
- `shiftKey`
  - : Gibt an, ob die <kbd>Umschalt</kbd>-Taste während des Ereignisses gedrückt wurde. Setzt den Wert von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey).
- `metaKey`
  - : Gibt an, ob die <kbd>Meta</kbd>-Taste während des Ereignisses gedrückt wurde. Setzt den Wert von [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey).
- `button`
  - : Die Maus-`button` des Ereignisses.
- `relatedTarget`
  - : Der [verwandte EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur bei bestimmten Ereignistypen verwendet (z. B. `mouseover` und `mouseout`). In anderen Fällen geben Sie `null` an.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const event = document.createEvent("MouseEvents");
event.initMouseEvent(
  "click",
  true,
  true,
  window,
  0,
  0,
  0,
  80,
  20,
  false,
  false,
  false,
  false,
  0,
  null,
);
document.body.dispatchEvent(event);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) Konstruktor, die moderne
  Standardmethode zur Erstellung eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode mit einem ähnlichen Zweck. Sie ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
