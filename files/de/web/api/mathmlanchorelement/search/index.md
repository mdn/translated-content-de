---
title: "MathMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/MathMLAnchorElement/search
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`search`**-Eigenschaft des [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Interface ist eine Suchzeichenfolge, auch als _Query-String_ bezeichnet. Sie enthält ein `"?"`, gefolgt von den Parametern des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements. Wenn die URL keine Suchanfrage hat, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann festgelegt werden, um den Query-String der URL zu ändern. Beim Festlegen wird dem bereitgestellten Wert ein einzelnes Präfix `"?"` hinzugefügt, sofern es nicht bereits vorhanden ist. Das Festlegen auf `""` entfernt den Query-String.

Die Abfrage wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Die Eigenschaft [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) ist ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das das Parsen der Parameter aus dem Query-String ermöglicht. Siehe auch [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Eine Zeichenfolge.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection?q=123"> ... </a>
</math>
```

können Sie die `search`-Zeichenfolge des Ankers folgendermaßen abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.search; // returns '?q=123'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
