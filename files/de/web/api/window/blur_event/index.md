---
title: "Fenster: blur-Ereignis"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert.

Das Gegenteil von `blur` ist [`focus`](/de/docs/Web/API/Window/focus_event).

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Beispiele

### Live-Beispiel

Dieses Beispiel ändert das Aussehen eines Dokuments, wenn es den Fokus verliert. Es verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um [`focus`](/de/docs/Web/API/Window/focus_event) und `blur`-Ereignisse zu überwachen.

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

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) variiert zwischen den Browsern, während dieses Ereignis behandelt wird ([Firefox Bug 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, zu dem der Fokus wechseln wird, während Firefox und Chrome es oft auf den `body` des Dokuments setzen.

## Siehe auch

- Verwandtes Ereignis: [`focus`](/de/docs/Web/API/Window/focus_event)
- Dieses Ereignis bei `Element`-Zielen: [`blur`](/de/docs/Web/API/Element/blur_event) Ereignis
