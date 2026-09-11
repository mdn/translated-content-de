---
title: "MathMLAnchorElement: type-Eigenschaft"
short-title: type
slug: Web/API/MathMLAnchorElement/type
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`type`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der den MIME-Typ der verlinkten Ressource angibt.

Sie spiegelt das `type`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" type="text/html"> ... </a>
</math>
```

können Sie den `type` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.type; // returns 'text/html'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Element
