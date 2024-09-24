---
title: "Fenster: focus-Ereignis"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält.

Das Gegenteil von `focus` ist {{domxref("Window/blur_event", "blur")}}.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{domxref("UIEvent")}} und indirekt von {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : Ein {{domxref("EventTarget")}}, das ein sekundäres Ziel für dieses Ereignis darstellt. In einigen Fällen (wie beim Tab-Wechsel in oder aus einer Seite) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt sein.

## Beispiele

### Live-Beispiel

Dieses Beispiel ändert das Erscheinungsbild eines Dokuments, wenn es den Fokus verliert. Es verwendet {{domxref("EventTarget.addEventListener()", "addEventListener()")}}, um die `focus`- und {{domxref("Window/blur_event", "blur")}}-Ereignisse zu überwachen.

#### HTML

```html
<p id="log">Klicken Sie auf dieses Dokument, um ihm den Fokus zu geben.</p>
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
  log.textContent = "FOKUS VERLOREN!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "Dieses Dokument hat den Fokus. Klicken Sie außerhalb des Dokuments, um den Fokus zu verlieren.";
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

- Verwandtes Ereignis: {{domxref("Window/blur_event", "blur")}}
- Dieses Ereignis auf `Element`-Zielen: {{domxref("Element/focus_event", "focus")}}-Ereignis
