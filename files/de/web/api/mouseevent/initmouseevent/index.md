---
title: "MouseEvent: initMouseEvent() Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`** Methode initialisiert den Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren, wie z.B. [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent).
> Die Seite über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen zur Verwendung dieser.

In dieser Weise initialisierte Ereignisse müssen mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis einzustellen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

## Syntax

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### Parameter

- `type`
  - : der String, um den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festzulegen. Mögliche Typen für Mausereignisse beinhalten: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : ob das Ereignis blubbern kann oder nicht. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view`
  - : das AbstractView des Ereignisses. Sie sollten hier das [`window`](/de/docs/Web/API/Window) Objekt übergeben. Setzt den Wert von [`UIEvent.view`](/de/docs/Web/API/UIEvent/view).
- `detail`
  - : die Klickanzahl des Ereignisses. Setzt den Wert von [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail).
- `screenX`
  - : die Bildschirm-x-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX).
- `screenY`
  - : die Bildschirm-y-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY).
- `clientX`
  - : die Client-x-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- `clientY`
  - : die Client-y-Koordinate des Ereignisses. Setzt den Wert von [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).
- `ctrlKey`

  - : ob die <kbd>control</kbd> Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey).

- `altKey`

  - : ob die <kbd>alt</kbd> Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey).

- `shiftKey`

  - : ob die <kbd>shift</kbd> Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey).

- `metaKey`

  - : ob die <kbd>meta</kbd> Taste während des Ereignisses gedrückt wurde oder nicht. Setzt den Wert von [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey).

- `button`
  - : die Maus-`button` des Ereignisses.
- `relatedTarget`
  - : das [verwandte EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur mit einigen Ereignistypen (z.B. `mouseover` und `mouseout`) verwendet. In anderen Fällen, übergeben Sie `null`.

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

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) Konstruktor, der moderne Standardweg zum Erstellen eines [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) ist eine einfachere Methode mit ähnlichem Zweck. Sie ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
