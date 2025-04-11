---
title: is
slug: Web/HTML/Reference/Global_attributes/is
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

> **Hinweis:** [Safari plant nicht, benutzerdefinierte eingebaute Elemente zu unterstützen](https://github.com/WebKit/standards-positions/issues/97) und [Browseranbieter erforschen alternative Lösungen zur Anpassung von eingebauten Elementen](https://github.com/WICG/webcomponents/issues/1029). Überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung.

Das **`is`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) erlaubt Ihnen zu spezifizieren, dass ein standardmäßiges HTML-Element sich wie ein definiertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

Dieses Attribut kann nur verwendet werden, wenn der angegebene Name des benutzerdefinierten Elements im aktuellen Dokument erfolgreich [definiert](/de/docs/Web/API/CustomElementRegistry/define) wurde und den Elementtyp erweitert, auf den es angewendet wird.

## Beispiele

Der folgende Code stammt aus unserem [Wortzähl-Webkomponenten](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Beispiel ([sehen Sie es direkt hier](https://mdn.github.io/web-components-examples/word-count-web-component/)).

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
