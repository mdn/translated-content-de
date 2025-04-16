---
title: "ElementInternals: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/ElementInternals/ariaBrailleLabel
l10n:
  sourceCommit: cb63724cbe56936234194f3f5db2fa4f9bf13a81
---

{{APIRef("Web Components")}}

Die **`ariaBrailleLabel`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attributs wider, das die ARIA-Braillebeschriftung des Elements definiert.

Diese Elementbeschriftung kann von unterstützenden Technologien verwendet werden, die Inhalte in Braille anzeigen können. Sie sollte jedoch nur gesetzt werden, wenn eine braille-spezifische Beschriftung die Benutzererfahrung verbessern würde.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

Ein Zeichenfolgenwert, der in Braille konvertiert werden soll.

## Beispiele

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und gesetzt wird.

Angenommen, wir haben ein benutzerdefiniertes Element namens `<star-rating>` definiert, in dem die interne Braille-Beschriftung des Elements auf den Wert des `aria-braillelabel`-Attributs des Elements gesetzt wird:

```js
class StarRating extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.ariaRole = "slider";
    this._internals.ariaBrailleLabel = this.ariaBrailleLabel;
  }

  // ...
}

customElements.define("star-rating", StarRating);
```

Und wir fügen das benutzerdefinierte Element mit dem Beschriftungstext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit einem Wert von `"3"` ein.
Dies ermöglicht es einer Braillezeile, "Schieberegler 3" in Braille anzuzeigen, anstatt des ausführlicheren "Schieberegler gra 3 von 5 Sternen".

```html
<star-rating id="rate" aria-braillelabel="3">3 out of 5 stars</star-rating>
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

```js hidden
const logInternals = document.querySelector("#log");
function log(text) {
  logInternals.innerText = `${logInternals.innerText}${text}\n`;
  logInternals.scrollTop = logInternals.scrollHeight;
}
```

Der Code verwendet die `ariaBrailleLabel`-Eigenschaft, um die Braillebeschriftung abzurufen und zu setzen.

```js
const el = document.querySelector("star-rating");
log(el._internals.ariaBrailleLabel);
el._internals.ariaBrailleLabel += "*";
log(el._internals.ariaBrailleLabel);
```

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ElementInternals.ariaBrailleRoleDescription`](/de/docs/Web/API/ElementInternals/ariaBrailleRoleDescription)
- [`ElementInternals.ariaBrailleRole`](/de/docs/Web/API/ElementInternals/ariaBrailleRole)
