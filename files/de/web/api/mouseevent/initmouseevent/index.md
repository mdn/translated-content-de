---
title: "MouseEvent: initMouseEvent() Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`** Methode initialisiert den
Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Stattdessen sollten Sie spezifische Ereignis-Konstruktoren wie [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) verwenden.
> Die Seite über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) gibt weitere Informationen über die Nutzung dieser Möglichkeit.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode erstellt worden sein.
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
  - : der String, mit dem der [`type`](/de/docs/Web/API/Event/type) des Ereignisses festgelegt wird. Mögliche Typen
    für Mausereignisse sind: `click`, `mousedown`,
    `mouseup`, `mouseover`, `mousemove`,
    `mouseout`.
- `canBubble`
  - : ob das Ereignis aufsteigen kann oder nicht. Legt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) fest.
- `cancelable`
  - : ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Legt den Wert von
    [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) fest.
- `view`
  - : die AbstractView des Ereignisses. Hier sollten Sie das [`window`](/de/docs/Web/API/Window) Objekt übergeben.
    Legt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) fest.
- `detail`
  - : die Anzahl der Mausklicks des Ereignisses. Legt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) fest.
- `screenX`
  - : die Bildschirm-x-Koordinate des Ereignisses. Legt den Wert von
    [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) fest.
- `screenY`
  - : die Bildschirm-y-Koordinate des Ereignisses. Legt den Wert von
    [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) fest.
- `clientX`
  - : die client x-Koordinate des Ereignisses. Legt den Wert von
    [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) fest.
- `clientY`
  - : die client y-Koordinate des Ereignisses. Legt den Wert von
    [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) fest.
- `ctrlKey`

  - : ob die <kbd>Strg</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert
    von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) fest.

- `altKey`

  - : ob die <kbd>Alt</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert von
    [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) fest.

- `shiftKey`

  - : ob die <kbd>Shift</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert
    von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) fest.

- `metaKey`

  - : ob die <kbd>Meta</kbd>-Taste während des Ereignisses gedrückt wurde oder nicht. Legt den Wert von
    [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) fest.

- `button`
  - : der Maus-[`button`](/de/docs/Web/API/MouseEvent/button) des Ereignisses.
- `relatedTarget`
  - : das [verwandte EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Nur bei einigen Ereignistypen verwendet (z.B. `mouseover` und `mouseout`). In
    anderen Fällen übergeben Sie `null`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<div style="background:red; width:180px; padding:10px;">
  <div id="out"></div>
  <input type="text" />
</div>
```

### JavaScript

```js
document.body.onclick = (event) => {
  const elementTag = event.target.tagName.toLowerCase();
  document.getElementById("out").textContent = elementTag;
};

const simulateClick = () => {
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
};

simulateClick();
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) Konstruktor, die moderne
  Standardmethode zur Erstellung eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode, die einen ähnlichen Zweck erfüllt. Sie
  ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
