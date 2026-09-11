---
title: "MathMLAnchorElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/MathMLAnchorElement/hreflang
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`hreflang`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der die Sprache der verlinkten Ressource angibt.

Sie spiegelt das `hreflang`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

Webbrowser und Suchmaschinen können diese Information verwenden, um die Sprache des verlinkten Inhalts besser zu verstehen, sind jedoch nicht verpflichtet, ihr zu folgen. Der für das `hreflang`-Attribut angegebene Wert muss dem Format des {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tags")}} entsprechen. Andernfalls wird er ignoriert.

Webbrowser verlassen sich nach dem Abrufen der verlinkten Ressource nicht ausschließlich auf das `hreflang`-Attribut. Stattdessen verwenden sie Sprachinformationen, die direkt mit der Ressource verknüpft sind (z. B. über HTTP-Header), um deren Sprache zu bestimmen.

## Wert

Ein String, der ein Sprach-Tag enthält, oder der leere String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

## Beispiele

### Grundlegende Verwendung

Ausgehend von diesem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples" hreflang="en-CA">
    ...
  </a>
</math>
```

können Sie das `hreflang` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hreflang; // returns 'en-CA'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
