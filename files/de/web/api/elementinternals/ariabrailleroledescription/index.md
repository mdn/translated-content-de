---
title: "ElementInternals: Eigenschaft ariaBrailleRoleDescription"
short-title: ariaBrailleRoleDescription
slug: Web/API/ElementInternals/ariaBrailleRoleDescription
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Web Components")}}

Die Eigenschaft **`ariaBrailleRoleDescription`** der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider, das die ARIA-Rollenbeschreibung des Elements für Braille definiert.

Diese Eigenschaft kann verwendet werden, um eine gekürzte Version des Werts von [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) bereitzustellen. Sie sollte nur verwendet werden, wenn `aria-roledescription` vorhanden ist und in dem seltenen Fall, dass dessen Wert für Braille zu ausführlich ist. Die Dokumentation zu [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) enthält weitere Informationen dazu, wann die Eigenschaft gesetzt werden sollte.

## Wert

Eine Zeichenfolge, die in Braille umgewandelt werden soll.

## Beispiele

Angenommen, wir haben ein benutzerdefiniertes Folienelement:

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

```html hidden
<custom-slide></custom-slide>
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(value) {
  logElement.textContent += `${value}\n`;
}
```

Wir können den Wert von `aria-brailleroledescription` des benutzerdefinierten Elements abrufen und festlegen:

```js
const customEl = document.querySelector("custom-slide");
log(customEl._internals.ariaBrailleRoleDescription);
customEl._internals.ariaBrailleRoleDescription = "sd";
log(customEl._internals.ariaBrailleRoleDescription);
```

### Ergebnis

{{EmbedLiveSample("examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
