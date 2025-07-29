---
title: "MouseEvent: initMouseEvent() Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`** Methode initialisiert den
Wert eines Mausklickereignisses, nachdem es erstellt wurde (normalerweise mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereignis-Konstruktoren, wie [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Der Abschnitt über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) bietet mehr Informationen darüber, wie man diese verwendet.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
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
  - : Der String, der den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festlegt. Mögliche Typen
    für Mausereignisse umfassen: `click`, `mousedown`,
    `mouseup`, `mouseover`, `mousemove`,
    `mouseout`.
- `canBubble`
  - : Ob das Ereignis hochblasen kann oder nicht. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : Ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Setzt den Wert von
    [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view`
  - : Das AbstractView des Ereignisses. Sie sollten hier das [`window`](/de/docs/Web/API/Window) Objekt übergeben.
    Setzt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view).
- `detail`
  - : Die Klickanzahl des Ereignisses. Setzt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail).
- `screenX`
  - : Die Bildschirm-x-Koordinate des Ereignisses. Setzt den Wert von
    [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX).
- `screenY`
  - : Die Bildschirm-y-Koordinate des Ereignisses. Setzt den Wert von
    [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY).
- `clientX`
  - : Die client x-Koordinate des Ereignisses. Setzt den Wert von
    [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- `clientY`
  - : Die client y-Koordinate des Ereignisses. Setzt den Wert von
    [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).
- `ctrlKey`
  - : Ob die <kbd>Steuerung</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert
    von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey).

- `altKey`
  - : Ob die <kbd>Alt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von
    [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey).

- `shiftKey`
  - : Ob die <kbd>Umschalt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert
    von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey).

- `metaKey`
  - : Ob die <kbd>Meta</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von
    [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey).

- `button`
  - : Der Maus-[`button`](/de/docs/Web/API/MouseEvent/button) des Ereignisses.
- `relatedTarget`
  - : Der [verwandte EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur
    mit einigen Ereignistypen verwendet (z. B. `mouseover` und `mouseout`). In
    anderen Fällen übergeben Sie `null`.

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
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode mit einem ähnlichen Zweck. Sie
  ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
