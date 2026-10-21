---
title: "MathMLAnchorElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/MathMLAnchorElement/rel
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist eine Zeichenfolge mit einer durch Leerzeichen getrennten Liste von Linktypen, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.

Sie spiegelt das `rel`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

## Wert

Eine Zeichenfolge.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

Sie können den `rel`-Wert des Links wie folgt abrufen:

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
