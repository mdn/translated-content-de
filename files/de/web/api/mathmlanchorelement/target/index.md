---
title: "MathMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/MathMLAnchorElement/target
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`target`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie spiegelt das `target`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann eines der [Schlüsselwörter](/de/docs/Web/MathML/Reference/Element/a#target) `_blank`, `_self`, `_parent` oder `_top` sein.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" target="_blank"> ... </a>
</math>
```

können Sie das `target` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.target; // returns '_blank'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Element
