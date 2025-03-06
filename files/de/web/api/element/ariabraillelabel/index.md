---
title: "Element: ariaBrailleLabel Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaBrailleLabel`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attributes wider, welches die ARIA-Braille-Beschriftung des Elements definiert.

Diese Elementbeschriftung kann von unterstützenden Technologien verwendet werden, die Inhalte in Braille darstellen können, sollte jedoch nur gesetzt werden, wenn eine spezifische Braille-Beschriftung die Benutzererfahrung verbessern würde.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft festgelegt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist ein Zeichenfolgenwert, ein unbeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Beispiele

### Abrufen und Setzen der ariaBrailleLabel

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und gesetzt wird.

#### HTML

Zuerst definieren wir eine Schaltfläche mit dem Labeltext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit dem Wert `"\*\*\*"`.
Dies ermöglicht, dass eine Braille-Anzeige "btn \*\*\*" in Braille anzeigt, anstatt der ausführlicheren Darstellung "btn gra 3 von 5 Sternen".

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
