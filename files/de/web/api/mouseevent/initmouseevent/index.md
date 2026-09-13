---
title: "MouseEvent: initMouseEvent()-Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Pointer Events")}}

Die **`MouseEvent.initMouseEvent()`**-Methode initialisiert den Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren, wie [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Der Abschnitt über [Erstellen und Abwickeln von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) bietet weitere Informationen zur Verwendung dieser.

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
  - : Der String, der den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festlegt. Mögliche Typen für Mausereignisse sind: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : Ob das Ereignis blasen kann. Legt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) fest.
- `cancelable`
  - : Ob die Standardaktion des Ereignisses verhindert werden kann. Legt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) fest.
- `view`
  - : Das AbstractView des Ereignisses. Hier sollte das [`window`](/de/docs/Web/API/Window)-Objekt übergeben werden. Legt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) fest.
- `detail`
  - : Die Klickanzahl des Mausereignisses. Legt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) fest.
- `screenX`
  - : Die Bildschirm-x-Koordinate des Ereignisses. Legt den Wert von [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) fest.
- `screenY`
  - : Die Bildschirm-y-Koordinate des Ereignisses. Legt den Wert von [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) fest.
- `clientX`
  - : Die client-x-Koordinate des Ereignisses. Legt den Wert von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) fest.
- `clientY`
  - : Die client-y-Koordinate des Ereignisses. Legt den Wert von [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) fest.
- `ctrlKey`
  - : Ob die <kbd>Strg</kbd>-Taste während des Ereignisses gedrückt war. Legt den Wert von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) fest.

- `altKey`
  - : Ob die <kbd>Alt</kbd>-Taste während des Ereignisses gedrückt war. Legt den Wert von [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) fest.

- `shiftKey`
  - : Ob die <kbd>Umschalt</kbd>-Taste während des Ereignisses gedrückt war. Legt den Wert von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) fest.

- `metaKey`
  - : Ob die <kbd>Meta</kbd>-Taste während des Ereignisses gedrückt war. Legt den Wert von [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) fest.

- `button`
  - : Die Maustaste des Ereignisses [`button`](/de/docs/Web/API/MouseEvent/button).
- `relatedTarget`
  - : Der [zugehörige EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur bei einigen Ereignistypen verwendet (z. B. `mouseover` und `mouseout`). In anderen Fällen `null` übergeben.

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

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)-Konstruktor, die moderne Standardmethode zum Erstellen eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode, die einem ähnlichen Zweck dient. Auch sie ist veraltet und sollte nicht mehr verwendet werden.
