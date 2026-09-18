---
title: "MathMLAnchorElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/MathMLAnchorElement/hash
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`hash`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der ein `"#"` gefolgt vom Fragmentbezeichner des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements enthält. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

Weitere Informationen finden Sie unter [`URL.hash`](/de/docs/Web/API/URL/hash).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples">...</a>
</math>
```

Sie können den `hash` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hash; // '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Element
