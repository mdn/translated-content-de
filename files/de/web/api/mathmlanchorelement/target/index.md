---
title: "MathMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/MathMLAnchorElement/target
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`target`**-Eigenschaft der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein String, der angibt, wo die verknüpfte Ressource angezeigt werden soll.

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
