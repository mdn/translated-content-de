---
title: "MouseEvent: initMouseEvent()-Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die Methode **`MouseEvent.initMouseEvent()`** initialisiert den Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Stattdessen sollten Sie spezifische Event-Konstruktoren verwenden, wie zum Beispiel [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Die Seite über [Erstellen und Auslösen von Events](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen zur Verwendung.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

## Syntax

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### Parameter

- `type`
  - : der String, der den [`type`](/de/docs/Web/API/Event/type) des Ereignisses setzt. Mögliche Typen für Mausereignisse sind: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : ob das Ereignis bubblen kann oder nicht. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view`
  - : das AbstractView des Ereignisses. Sie sollten hier das [`window`](/de/docs/Web/API/Window)-Objekt übergeben. Setzt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view).
- `detail`
  - : die Klickanzahl des Ereignisses. Setzt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail).
- `screenX`
  - : die Bildschirm-X-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX).
- `screenY`
  - : die Bildschirm-Y-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY).
- `clientX`
  - : die Client-X-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- `clientY`
  - : die Client-Y-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).
- `ctrlKey`

  - : ob die <kbd>Steuerung</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey).

- `altKey`

  - : ob die <kbd>Alt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey).

- `shiftKey`

  - : ob die <kbd>Umschalt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey).

- `metaKey`

  - : ob die <kbd>Meta</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey).

- `button`
  - : das Maustasten-[`button`](/de/docs/Web/API/MouseEvent/button) des Ereignisses.
- `relatedTarget`
  - : das [bezogene EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur bei einigen Ereignistypen verwendet (z.B. `mouseover` und `mouseout`). In anderen Fällen übergeben Sie `null`.

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

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)-Konstruktor, die moderne Standardmethode zur Erstellung eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode mit ähnlichem Zweck. Sie ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
