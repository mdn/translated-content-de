---
title: "MouseEvent: initMouseEvent() Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`**-Methode initialisiert den
Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren wie [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Der Abschnitt über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt weitere Informationen über die Verwendung dieser.

Auf diese Weise initialisierte Ereignisse müssen mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis festzulegen,
bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

## Syntax

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### Parameter

- `type`
  - : Der String, um den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festzulegen. Mögliche Typen
    für Mausereignisse sind: `click`, `mousedown`,
    `mouseup`, `mouseover`, `mousemove`,
    `mouseout`.
- `canBubble`
  - : Ob das Ereignis bubbeln kann oder nicht. Legt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) fest.
- `cancelable`
  - : Ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Legt den Wert von
    [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) fest.
- `view`
  - : Die AbstractView des Ereignisses. Sie sollten hier das [`window`](/de/docs/Web/API/Window)-Objekt übergeben.
    Legt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) fest.
- `detail`
  - : Die Klickanzahl des Ereignisses. Legt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) fest.
- `screenX`
  - : Die x-Koordinate des Bildschirms des Ereignisses. Legt den Wert von
    [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) fest.
- `screenY`
  - : Die y-Koordinate des Bildschirms des Ereignisses. Legt den Wert von
    [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) fest.
- `clientX`
  - : Die x-Koordinate des Clients des Ereignisses. Legt den Wert von
    [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) fest.
- `clientY`
  - : Die y-Koordinate des Clients des Ereignisses. Legt den Wert von
    [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) fest.
- `ctrlKey`
  - : Ob die <kbd>control</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert
    von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) fest.

- `altKey`
  - : Ob die <kbd>alt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert von
    [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) fest.

- `shiftKey`
  - : Ob die <kbd>shift</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert
    von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) fest.

- `metaKey`
  - : Ob die <kbd>meta</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert von
    [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) fest.

- `button`
  - : Die Maus-[`button`](/de/docs/Web/API/MouseEvent/button) des Ereignisses.
- `relatedTarget`
  - : Das [related EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur bei
    manchen Ereignistypen benutzt (z. B. `mouseover` und `mouseout`). In
    anderen Fällen, übergeben Sie `null`.

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

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)-Konstruktor, der moderne
  Standard zum Erstellen eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode mit einem ähnlichen Zweck. Sie
  ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
