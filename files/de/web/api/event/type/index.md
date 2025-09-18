---
title: "Event: type-Eigenschaft"
short-title: type
slug: Web/API/Event/type
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`type`** des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt einen String zurück, der den Typ des Ereignisses enthält. Dieser wird festgelegt, wenn das Ereignis erstellt wird, und ist der Name, der häufig verwendet wird, um sich auf das spezifische Ereignis zu beziehen, wie `click`, `load` oder `error`.

## Wert

Ein String, der den Typ des [`Event`](/de/docs/Web/API/Event) enthält.

## Beispiel

Dieses Beispiel protokolliert den Ereignistyp, wann immer Sie eine Taste auf der Tastatur drücken oder eine Maustaste klicken.

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
document.addEventListener("keydown", getEventType); // first
document.addEventListener("keypress", getEventType); // second
document.addEventListener("keyup", getEventType); // third

// Mouse events
document.addEventListener("mousedown", getEventType); // first
document.addEventListener("mouseup", getEventType); // second
document.addEventListener("click", getEventType); // third
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
