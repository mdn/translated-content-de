---
title: "Element: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{APIRef("DOM")}}

Die **`ariaBrailleLabel`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel)-Attributs wider, das das ARIA-Braille-Label des Elements definiert.

Dieses Element-Label kann von unterstützenden Technologien genutzt werden, die Inhalte in Braille präsentieren können, sollte jedoch nur gesetzt werden, wenn ein braille-spezifisches Label die Benutzererfahrung verbessern würde. Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist ein String, ein unbeschränkter Wertetyp, der dazu gedacht ist, in Braille umgewandelt zu werden.

## Beispiele

### ariaBrailleLabel abrufen und festlegen

Dieses Beispiel zeigt, wie man die `ariaBrailleLabel`-Eigenschaft abruft und festlegt.

#### HTML

Zuerst definieren wir einen Button mit dem Label-Text "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit dem Wert `"\*\*\*"`.
Dies ermöglicht einem Brailledisplay, "btn \*\*\*" in Braille anzuzeigen, anstatt das ausführlichere "btn gra 3 von 5 Sternen".

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

Der Code verwendet dann die `ariaBrailleLabel`-Eigenschaft des Buttons, um zunächst das Braille-Label abzurufen und zu protokollieren. Dann setzt er das Braille-Label auf "3\*" und protokolliert den Wert erneut.

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
