---
title: "Element: ariaBrailleRoleDescription-Eigenschaft"
short-title: ariaBrailleRoleDescription
slug: Web/API/Element/ariaBrailleRoleDescription
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("DOM")}}

Die **`ariaBrailleRoleDescription`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)-Attributs wider, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.

Diese Eigenschaft kann verwendet werden, um eine gekürzte Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Wertes bereitzustellen. Sie sollte nur verwendet werden, wenn `aria-roledescription` vorhanden ist und in dem seltenen Fall, dass es für Braille zu detailliert ist. Das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist ein String, ein uneingeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Beispiele

### Abrufen und Setzen von ariaBrailleRoleDescription

Dieses Beispiel zeigt, wie Sie die `ariaBrailleRoleDescription`-Eigenschaft abrufen und setzen können.

#### HTML

Zuerst definieren wir ein `<article>`-Element, das als Folie in einer Diashow verwendet werden soll. Wir setzen das `aria-roledescription`-Attribut auf "slide" und die Brailleschreibweise in `aria-brailleroledescription` auf "sld".

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Willkommen zu meinem Vortrag</h1>
</article>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
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

Um die Rollenbeschreibung des Elements zu erhalten, verwenden wir die `ariaBrailleRoleDescription`-Eigenschaft. Der folgende Code ruft zuerst den Wert ab und protokolliert ihn. Anschließend setzt er die Braille-Rollenbeschreibung auf "sd" und protokolliert den Wert erneut (nur zur Veranschaulichung – im Produktivcode würden Sie diesen Wert nicht setzen).

```js
const article = document.getElementById("article");
log(article.ariaBrailleRoleDescription);
article.ariaBrailleRoleDescription = "sd";
log(article.ariaBrailleRoleDescription);
```

#### Ergebnis

{{EmbedLiveSample("Getting and setting ariaBrailleRoleDescription")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}