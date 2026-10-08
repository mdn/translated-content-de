---
title: "Window: blur-Ereignis"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("UI Events")}}

Das **`blur`**-Ereignis wird ausgelöst, wenn das Fenster den Fokus verliert, beispielsweise wenn die fokussierte Stelle von der Seite zur Adressleiste wechselt. Zuvor kann der Fokus auf dem Viewport des Dokuments oder auf einem darin enthaltenen Element gelegen haben.

Das Gegenstück zu `blur` ist [`focus`](/de/docs/Web/API/Window/focus_event).

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Beispiele

### Interaktives Beispiel

Dieses Beispiel ändert das Erscheinungsbild eines Dokuments, wenn es den Fokus verliert. Es verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um [`focus`](/de/docs/Web/API/Window/focus_event)- und `blur`-Ereignisse zu überwachen.

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
const log = document.getElementById("log");

function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

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

- Zugehöriges Ereignis: [`focus`](/de/docs/Web/API/Window/focus_event)
- Dieses Ereignis auf `Element`-Zielen: [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignis
