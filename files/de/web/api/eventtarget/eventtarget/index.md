---
title: "EventTarget: EventTarget() Konstruktor"
short-title: EventTarget()
slug: Web/API/EventTarget/EventTarget
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`EventTarget()`** Konstruktor erstellt eine neue Instanz des {{domxref("EventTarget")}} Objekts.

> [!NOTE]
> Es ist ziemlich selten, diesen Konstruktor explizit aufzurufen. Meistens wird dieser Konstruktor innerhalb des Konstruktors eines Objekts verwendet, das die {{domxref("EventTarget")}} Schnittstelle erweitert, indem das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort verwendet wird.

## Syntax

```js-nolint
new EventTarget()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Instanz des {{domxref("EventTarget")}} Objekts.

## Beispiele

### Implementierung eines Zählers

Dieses Beispiel implementiert eine `Counter` Klasse mit den Methoden `increment()` und `decrement()`. Es löst ein benutzerdefiniertes `"valuechange"` Ereignis aus, wenn eine dieser Methoden aufgerufen wird.

#### HTML

```html
<button id="dec" aria-label="Decrement">-</button>
<span id="currentValue">0</span>
<button id="inc" aria-label="Increment">+</button>
```

#### JavaScript

```js
class Counter extends EventTarget {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  #emitChangeEvent() {
    this.dispatchEvent(new CustomEvent("valuechange", { detail: this.value }));
  }

  increment() {
    this.value++;
    this.#emitChangeEvent();
  }

  decrement() {
    this.value--;
    this.#emitChangeEvent();
  }
}

const initialValue = 0;
const counter = new Counter(initialValue);
document.querySelector("#currentValue").innerText = initialValue;

counter.addEventListener("valuechange", (event) => {
  document.querySelector("#currentValue").innerText = event.detail;
});

document.querySelector("#inc").addEventListener("click", () => {
  counter.increment();
});

document.querySelector("#dec").addEventListener("click", () => {
  counter.decrement();
});
```

#### Ergebnis

{{EmbedLiveSample("Implementing a counter")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventTarget")}}
