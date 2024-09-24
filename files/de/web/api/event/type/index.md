---
title: "Event: type Eigenschaft"
short-title: type
slug: Web/API/Event/type
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`type`** Eigenschaft der {{domxref("Event")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen Zeichenfolgenwert zurückgibt, der den Typ des Ereignisses enthält. Sie wird beim Erstellen des Ereignisses festgelegt und ist der Name, der üblicherweise verwendet wird, um auf das spezifische Ereignis zu verweisen, wie `click`, `load` oder `error`.

## Wert

Eine Zeichenfolge, die den Typ des {{domxref("Event")}} enthält.

## Beispiel

Dieses Beispiel protokolliert den Ereignistyp, wann immer Sie eine Taste auf der Tastatur drücken oder eine Maustaste klicken.

### HTML

```html
<p>Drücken Sie eine beliebige Taste oder klicken Sie mit der Maus, um den Ereignistyp zu erhalten.</p>
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

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
