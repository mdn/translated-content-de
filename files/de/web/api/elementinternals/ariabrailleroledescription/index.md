---
title: "ElementInternals: ariaBrailleRoleDescription-Eigenschaft"
short-title: ariaBrailleRoleDescription
slug: Web/API/ElementInternals/ariaBrailleRoleDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Components")}}

Die **`ariaBrailleRoleDescription`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attributs wider, welches die ARIA-Braillerollenbeschreibung des Elements definiert.

Diese Eigenschaft kann verwendet werden, um eine verkürzte Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Wertes bereitzustellen. Sie sollte nur verwendet werden, wenn `aria-roledescription` vorhanden ist und in seltenen Fällen, in denen diese für Braille zu ausführlich ist. Das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

Ein String, der in Braille umgewandelt werden soll.

## Beispiele

Angenommen, wir haben ein benutzerdefiniertes Slide-Element:

```js
class CustomSlide extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.role = "slide";
  }

  // …
}

customElements.define("custom-slide", CustomSlide);
```

Wir können den Wert der `aria-brailleroledescription`-Eigenschaft des benutzerdefinierten Elements abrufen und setzen:

```js
const customEl = document.querySelector("custom-slide");
log(customEl.ariaBrailleRoleDescription);
customEl.ariaBrailleRoleDescription = "sd";
log(customEl.ariaBrailleRoleDescription);
```

### Ergebnis

{{EmbedLiveSample("Getting and setting ariaBrailleRoleDescription")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
