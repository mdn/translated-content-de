---
title: "MouseEvent: initMouseEvent()-Methode"
short-title: initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`MouseEvent.initMouseEvent()`**-Methode initialisiert den Wert eines Mausereignisses, nachdem es erstellt wurde (normalerweise mit der Methode {{domxref("Document.createEvent()")}}).

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren, wie z.B. {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}.
> Die Seite [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen zur Nutzung dieser.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode {{domxref("Document.createEvent()")}} erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit {{ domxref("EventTarget.dispatchEvent()") }} gesendet wird.

## Syntax

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### Parameter

- `type`
  - : Der Zeichenfolgenwert, um den {{domxref("Event.type", "Typ")}} des Ereignisses zu setzen. Mögliche Typen für Mausereignisse umfassen: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : Ob das Ereignis blubbern kann oder nicht. Setzt den Wert von {{domxref("Event.bubbles")}}.
- `cancelable`
  - : Ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Setzt den Wert von {{domxref("Event.cancelable")}}.
- `view`
  - : Die AbstractView des Ereignisses. Hier sollte das {{domxref("window")}}-Objekt übergeben werden. Setzt den Wert von {{domxref("UIEvent.view")}}.
- `detail`
  - : Die Klickanzahl des Ereignisses. Setzt den Wert von {{domxref("UIEvent.detail")}}.
- `screenX`
  - : Die Bildschirm-x-Koordinate des Ereignisses. Setzt den Wert von {{domxref("MouseEvent.screenX")}}.
- `screenY`
  - : Die Bildschirm-y-Koordinate des Ereignisses. Setzt den Wert von {{domxref("MouseEvent.screenY")}}.
- `clientX`
  - : Die Client-x-Koordinate des Ereignisses. Setzt den Wert von {{domxref("MouseEvent.clientX")}}.
- `clientY`
  - : Die Client-y-Koordinate des Ereignisses. Setzt den Wert von {{domxref("MouseEvent.clientY")}}.
- `ctrlKey`
  - : Ob die <kbd>control</kbd>-Taste während des Ereignisses gedrückt war oder nicht. Setzt den Wert von {{domxref("MouseEvent.ctrlKey")}}.
- `altKey`
  - : Ob die <kbd>alt</kbd>-Taste während des Ereignisses gedrückt war oder nicht. Setzt den Wert von {{domxref("MouseEvent.altKey")}}.
- `shiftKey`
  - : Ob die <kbd>shift</kbd>-Taste während des Ereignisses gedrückt war oder nicht. Setzt den Wert von {{domxref("MouseEvent.shiftKey")}}.
- `metaKey`
  - : Ob die <kbd>meta</kbd>-Taste während des Ereignisses gedrückt war oder nicht. Setzt den Wert von {{domxref("MouseEvent.metaKey")}}.
- `button`
  - : Der Maus{{domxref("MouseEvent.button", "Button")}} des Ereignisses.
- `relatedTarget`
  - : Das [verwandte EventTarget](/de/docs/Web/API/MouseEvent/relatedTarget) des Ereignisses. Wird nur mit einigen Ereignistypen verwendet (z.B. `mouseover` und `mouseout`). In anderen Fällen `null` übergeben.

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

- {{domxref("MouseEvent.MouseEvent()","MouseEvent()")}}-Konstruktor, der moderne Standardweg zur Erstellung eines {{domxref("MouseEvent")}}
- {{domxref("Event.initEvent()")}} ist eine einfachere Methode mit einem ähnlichen Zweck. Sie ist ebenfalls veraltet und sollte nicht mehr verwendet werden.
