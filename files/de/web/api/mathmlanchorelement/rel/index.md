---
title: "MathMLAnchorElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/MathMLAnchorElement/rel
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die Eigenschaft **`rel`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist eine Zeichenfolge mit einer durch Leerzeichen getrennten Liste von Linktypen, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.

Sie spiegelt das Attribut `rel` des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wider.

## Wert

Eine Zeichenfolge.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

können Sie den Wert von `rel` für den Link wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.rel; // "help alternate"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
- [`MathMLAnchorElement.relList`](/de/docs/Web/API/MathMLAnchorElement/relList)
- [HTML-Attribut `rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
