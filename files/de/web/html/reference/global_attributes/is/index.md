---
title: HTML ist ein globales Attribut
short-title: is
slug: Web/HTML/Reference/Global_attributes/is
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

> **Note:** [Safari plant nicht, benutzerdefinierte eingebaute Elemente zu unterstützen](https://github.com/WebKit/standards-positions/issues/97) und [Browser-Anbieter erforschen alternative Lösungen zur Anpassung eingebauter Elemente](https://github.com/WICG/webcomponents/issues/1029). Überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Unterstützungshinweise.

Das **`is`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht Ihnen, anzugeben, dass ein standardmäßiges HTML-Element wie ein definiertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

Dieses Attribut kann nur verwendet werden, wenn der angegebene Name des benutzerdefinierten Elements erfolgreich im aktuellen Dokument [definiert](/de/docs/Web/API/CustomElementRegistry/define) wurde und den Typ des Elements erweitert, auf das es angewendet wird.

## Beispiele

Der folgende Code stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).

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
