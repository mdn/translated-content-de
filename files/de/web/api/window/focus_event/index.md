---
title: "Window: focus event"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält.

Das Gegenteil von `focus` ist [`blur`](/de/docs/Web/API/Window/blur_event).

Dieses Ereignis ist nicht stornierbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das ein sekundäres Ziel für dieses Ereignis darstellt. In einigen Fällen (z. B. beim Wechseln zwischen Seiten) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt sein.

## Beispiele

### Live-Beispiel

Dieses Beispiel ändert das Erscheinungsbild eines Dokuments, wenn es den Fokus verliert. Es nutzt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um `focus`- und [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignisse zu überwachen.

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #dddddd;
  color: #555555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

const log = document.getElementById("log");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### Ergebnis

{{EmbedLiveSample("Live_example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes Ereignis: [`blur`](/de/docs/Web/API/Window/blur_event)
- Dieses Ereignis auf `Element`-Ziele: [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis
