---
title: "Element: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 913db38a206684e0e39db4b0443c62798be94e76
---

{{APIRef("DOM")}}

Die **`ariaBrailleLabel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attributs wider, welcher das ARIA-Braille-Label des Elements definiert.

Dieses Element-Label kann von unterstützenden Technologien, die Inhalte in Braille darstellen können, verwendet werden. Es sollte jedoch nur gesetzt werden, wenn ein spezifisches Braille-Label die Benutzererfahrung verbessert.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist ein String, ein uneingeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Beispiele

### Abrufen und Festlegen von ariaBrailleLabel

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und festgelegt wird.

#### HTML

Zuerst definieren wir eine Schaltfläche mit dem Beschriftungstext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit einem Wert von `"***"`.
Dies ermöglicht es einem Braille-Display, "btn \*\*\*" in Braille anzuzeigen, anstatt das ausführlichere "btn gra 3 von 5 Sternen".

```html
<button id="button" aria-braillelabel="***">3 out of 5 stars</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der Code verwendet dann die `ariaBrailleLabel`-Eigenschaft der Schaltfläche, um zuerst das Braille-Label abzurufen und zu protokollieren.
Anschließend wird das Braille-Label auf "3\*" gesetzt und der Wert erneut protokolliert.

```js
const button = document.getElementById("button");
log(button.ariaBrailleLabel);
button.ariaBrailleLabel = "3*";
log(button.ariaBrailleLabel);
```

#### Ergebnis

{{EmbedLiveSample("Getting and setting ariaBrailleLabel")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
