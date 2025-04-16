---
title: "ElementInternals: ariaBrailleRoleDescription-Eigenschaft"
short-title: ariaBrailleRoleDescription
slug: Web/API/ElementInternals/ariaBrailleRoleDescription
l10n:
  sourceCommit: cb63724cbe56936234194f3f5db2fa4f9bf13a81
---

{{APIRef("Web Components")}}

Die **`ariaBrailleRoleDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attributs wider, das die ARIA Braille-Rollenbeschreibung des Elements definiert.

Diese Eigenschaft kann verwendet werden, um eine abgekürzte Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Werts bereitzustellen. Sie sollte nur verwendet werden, wenn `aria-roledescription` vorhanden ist und in dem seltenen Fall, dass es zu umständlich für Braille ist. Das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) enthält zusätzliche Informationen darüber, wann die Eigenschaft gesetzt werden sollte.

## Wert

Ein String, der in Braille umgewandelt werden soll.

## Beispiele

Angenommen, wir haben ein benutzerdefiniertes `slide`-Element:

```js
class CustomSlide extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.role = "slide";
  }

  // ...
}

customElements.define("custom-slide", CustomSlide);
```

Wir können den Wert des benutzerdefinierten Elements `aria-brailleroledescription` abrufen und setzen:

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
