---
title: "MathMLAnchorElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/MathMLAnchorElement/hreflang
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`hreflang`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der die Sprache der verlinkten Ressource angibt.

Sie spiegelt das `hreflang`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

Webbrowser und Suchmaschinen können diese Information verwenden, um die Sprache des verlinkten Inhalts besser zu verstehen, sind jedoch nicht dazu verpflichtet, sie zu befolgen. Der für das `hreflang`-Attribut angegebene Wert muss dem Format des {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtags")}} entsprechen. Andernfalls wird er ignoriert.

Webbrowser verlassen sich nach dem Abrufen der verlinkten Ressource nicht ausschließlich auf das `hreflang`-Attribut. Stattdessen verwenden sie direkt mit der Ressource verknüpfte Sprachinformationen (z. B. über HTTP-Header), um ihre Sprache zu bestimmen.

## Wert

Ein String, der ein Sprach-Tag enthält, oder der leere String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

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

- Das MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Element
