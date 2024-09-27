---
title: "Event: Eigenschaft type"
short-title: type
slug: Web/API/Event/type
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den Typ des Ereignisses enthält. Sie wird festgelegt, wenn das Ereignis erstellt wird, und ist der Name, der üblicherweise verwendet wird, um auf das spezifische Ereignis zu verweisen, wie zum Beispiel `click`, `load` oder `error`.

## Wert

Ein Zeichenfolge, die den Typ des [`Event`](/de/docs/Web/API/Event) enthält.

## Beispiel

Dieses Beispiel protokolliert den Ereignistyp, wann immer Sie eine Tastaturtaste drücken oder eine Maustaste klicken.

### HTML

```html
<p>Press any key or click the mouse to get the event type.</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById("log");
  log.innerText = `${event.type}\n${log.innerText}`;
}

// Keyboard events
document.addEventListener("keydown", getEventType, false); // first
document.addEventListener("keypress", getEventType, false); // second
document.addEventListener("keyup", getEventType, false); // third

// Mouse events
document.addEventListener("mousedown", getEventType, false); // first
document.addEventListener("mouseup", getEventType, false); // second
document.addEventListener("click", getEventType, false); // third
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
