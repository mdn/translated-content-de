---
title: "Element: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{APIRef("DOM")}}

Die **`ariaBrailleLabel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel)-Attributs wider, welches das ARIA-Brailleschrift-Label des Elements definiert.

Dieses Element-Label kann von unterstützenden Technologien, die Inhalte in Brailleschrift darstellen können, verwendet werden, sollte jedoch nur gesetzt werden, wenn ein spezifisches Braille-Label das Benutzererlebnis verbessern würde.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist ein String, ein uneingeschränkter Werttyp, der in Brailleschrift umgewandelt werden soll.

## Beispiele

### Abrufen und Setzen von ariaBrailleLabel

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und gesetzt wird.

#### HTML

Zuerst definieren wir eine Schaltfläche mit dem Beschriftungstext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit dem Wert `"\*\*\*"`.
Dies ermöglicht es einer Braille-Anzeige, "btn \*\*\*" in Brailleschrift anzuzeigen, anstatt des ausführlicheren "btn gra 3 von 5 Sternen".

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

Der Code verwendet dann die `ariaBrailleLabel`-Eigenschaft der Schaltfläche, um das Braille-Label zunächst abzurufen und zu protokollieren.
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
