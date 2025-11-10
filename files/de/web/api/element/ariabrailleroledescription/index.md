---
title: "Element: ariaBrailleRoleDescription-Eigenschaft"
short-title: ariaBrailleRoleDescription
slug: Web/API/Element/ariaBrailleRoleDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaBrailleRoleDescription`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attributs wider, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.

Diese Eigenschaft kann verwendet werden, um eine abgekürzte Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Wertes bereitzustellen. Sie sollte nur verwendet werden, wenn `aria-roledescription` vorhanden ist und in dem seltenen Fall, dass es für Braille zu ausführlich ist. Das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attribut enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein nicht eingeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Beispiele

### Abrufen und Festlegen von ariaBrailleRoleDescription

Dieses Beispiel zeigt, wie Sie die `ariaBrailleRoleDescription`-Eigenschaft abrufen und festlegen können.

#### HTML

Zuerst definieren wir ein `<article>`-Element, das als Folie in einer Diaschau verwendet wird. Wir setzen das `aria-roledescription`-Attribut auf "slide" und seine Braille-Abkürzung in `aria-brailleroledescription` auf "sld".

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
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

Um die Rollenbeschreibung des Elements zu erhalten, verwenden wir die `ariaBrailleRoleDescription`-Eigenschaft. Der untenstehende Code ruft zuerst den Wert ab und protokolliert ihn. Anschließend wird die Braille-Rollenbeschreibung auf "sd" gesetzt und der Wert erneut protokolliert (nur zur Veranschaulichung — im Produktionscode würden Sie diesen Wert nicht setzen).

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
