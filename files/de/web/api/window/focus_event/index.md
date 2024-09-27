---
title: "Window: focus Ereignis"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält.

Das Gegenteil von `focus` ist [`blur`](/de/docs/Web/API/Window/blur_event).

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das ein sekundäres Ziel für dieses Ereignis darstellt. In einigen Fällen (wie beim Wechseln zwischen Seiten durch Tab-Taste) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt sein.

## Beispiele

### Live-Beispiel

Dieses Beispiel ändert das Aussehen eines Dokuments, wenn es den Fokus verliert. Es verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um `focus`- und [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignisse zu überwachen.

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
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
- Dieses Ereignis auf `Element`-Ziele: [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis
