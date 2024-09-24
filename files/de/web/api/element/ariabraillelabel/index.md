---
title: "Element: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{APIRef("DOM")}}

Die **`ariaBrailleLabel`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel)-Attributs wider, welches das ARIA-Braille-Label des Elements definiert.

Dieses Element-Label kann von unterstützenden Technologien verwendet werden, die Inhalte in Braille darstellen können, sollte jedoch nur gesetzt werden, wenn ein spezifisches Braille-Label die Benutzererfahrung verbessern würde.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein uneingeschränkter Wertetyp, der in Braille umgewandelt werden soll.

## Beispiele

### Abrufen und Setzen von ariaBrailleLabel

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und gesetzt wird.

#### HTML

Zuerst definieren wir einen Button mit dem Beschriftungstext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit dem Wert `"\*\*\*"`.
Dies ermöglicht es einer Braille-Anzeige "btn \*\*\*" in Braille anzuzeigen, anstatt des ausführlicheren "btn gra 3 von 5 Sternen".

```html
<button id="button" aria-braillelabel="\*\*\*">3 out of 5 stars</button>
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

Der Code verwendet dann die `ariaBrailleLabel`-Eigenschaft des Buttons, um zuerst das Braille-Label abzurufen und zu protokollieren.
Dann wird das Braille-Label auf "3\*" gesetzt und der Wert erneut protokolliert.

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
