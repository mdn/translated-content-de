---
title: "`is` HTML globales Attribut"
short-title: is
slug: Web/HTML/Reference/Global_attributes/is
l10n:
  sourceCommit: 1bc1971a1265d1792c94b99b736c5accec1fec6d
---

> [!NOTE]
> [Safari plant nicht, angepasste eingebaute Elemente zu unterstützen](https://github.com/WebKit/standards-positions/issues/97) und [Browser-Anbieter erkunden alternative Lösungen zur Anpassung von eingebauten Elementen](https://github.com/WICG/webcomponents/issues/1029). Überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung.

Das **`is`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Ihnen, anzugeben, dass ein standardmäßiges HTML-Element sich wie ein definiertes angepasstes eingebautes Element verhalten soll. Weitere Informationen finden Sie unter [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements).

Dieses Attribut kann nur verwendet werden, wenn der angegebene Name des benutzerdefinierten Elements im aktuellen Dokument erfolgreich [definiert](/de/docs/Web/API/CustomElementRegistry/define) wurde und den Elementtyp erweitert, auf den es angewendet wird.

## Beispiele

Der folgende Code stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Constructor contents omitted for brevity
    // …
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
