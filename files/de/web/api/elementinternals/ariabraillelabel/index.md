---
title: "ElementInternals: ariaBrailleLabel-Eigenschaft"
short-title: ariaBrailleLabel
slug: Web/API/ElementInternals/ariaBrailleLabel
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

{{APIRef("Web Components")}}

Die **`ariaBrailleLabel`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attributs wider, welches das ARIA-Braille-Etikett des Elements definiert.

Dieses Element-Etikett kann von unterstützenden Technologien verwendet werden, die Inhalte in Braille anzeigen können, sollte jedoch nur gesetzt werden, wenn ein braillespezifisches Etikett die Benutzererfahrung verbessern würde.
Das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

Ein String, der in Braille umgewandelt werden soll.

## Beispiele

Dieses Beispiel zeigt, wie die `ariaBrailleLabel`-Eigenschaft abgerufen und gesetzt wird.

Angenommen, wir haben ein benutzerdefiniertes Element namens `<star-rating>` definiert, in dem das braille-Etikett des Elementinternals auf den Wert des `aria-braillelabel`-Attributs des Elements eingestellt ist:

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

Und wir fügen das benutzerdefinierte Element mit dem Etikettentext "3 von 5 Sternen" und einem `aria-braillelabel`-Attribut mit einem Wert von `"3"` ein.
Dies ermöglicht es, einer Braille-Anzeige "Schieberegler 3" in Braille darzustellen, anstatt der ausführlicheren Variante "Schieberegler 3 von 5 Sternen".

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

Der Code verwendet die `ariaBrailleLabel`-Eigenschaft, um das Braille-Etikett abzurufen und zu setzen.

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
