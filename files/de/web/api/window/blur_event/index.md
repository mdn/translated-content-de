---
title: "Fenster: blur-Ereignis"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verloren hat.

Das Gegenteil von `blur` ist {{domxref("Window/focus_event", "focus")}}.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten {{domxref("UIEvent")}} und indirekt von {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : Ein {{domxref("EventTarget")}}, das ein sekundäres Ziel für dieses Ereignis darstellt. In einigen Fällen (z.B. beim Tab-Wechsel innerhalb oder außerhalb einer Seite) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt werden.

## Beispiele

### Live-Beispiel

Dieses Beispiel ändert das Aussehen eines Dokuments, wenn es den Fokus verliert. Es verwendet {{domxref("EventTarget.addEventListener()", "addEventListener()")}}, um die {{domxref("Window/focus_event", "focus")}}- und `blur`-Ereignisse zu überwachen.

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
  log.textContent = "FOCUS VERLOREN!";
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

Der Wert von {{DOMxRef("Document.activeElement")}} variiert zwischen den Browsern, während dieses Ereignis behandelt wird ([Firefox Bug 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, auf das der Fokus verschoben wird, während Firefox und Chrome es oft auf den `body` des Dokuments setzen.

## Siehe auch

- Verwandtes Ereignis: {{domxref("Window/focus_event", "focus")}}
- Dieses Ereignis auf `Element`-Zielen: {{domxref("Element/blur_event", "blur")}}-Ereignis
