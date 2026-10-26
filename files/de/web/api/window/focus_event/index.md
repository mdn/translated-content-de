---
title: "Window: focus-Ereignis"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("UI Events")}}

Das **`focus`**-Ereignis wird ausgelöst, wenn das Fenster den Fokus erhält, beispielsweise wenn der Fokus von der Adressleiste auf die Seite wechselt. Der Fokus kann auf dem Viewport des Dokuments oder auf einem Element darin liegen.

Das Gegenstück zu `focus` ist [`blur`](/de/docs/Web/API/Window/blur_event).

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("focus", (event) => { })
```

Alternativ können Sie die [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onfocus = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Beispiele

### Interaktives Beispiel

Dieses Beispiel ändert das Erscheinungsbild eines Dokuments, wenn es den Fokus verliert. Es verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um `focus`- und [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignisse zu überwachen.

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

- Zugehöriges Ereignis: [`blur`](/de/docs/Web/API/Window/blur_event)
- Dieses Ereignis auf `Element`-Zielen: [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis
