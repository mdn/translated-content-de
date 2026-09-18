---
title: "MathMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/MathMLAnchorElement/search
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`search`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist eine Suchzeichenfolge, auch als _Abfragezeichenfolge_ bezeichnet, die eine Zeichenfolge mit einem `"?"` gefolgt von den Parametern des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements enthält. Wenn die URL keine Suchabfrage enthält, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann festgelegt werden, um die Abfragezeichenfolge der URL zu ändern. Beim Festlegen wird dem angegebenen Wert ein einzelnes Präfix `"?"` hinzugefügt, sofern es nicht bereits vorhanden ist. Das Festlegen auf `""` entfernt die Abfragezeichenfolge.

Die Abfrage wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Die Eigenschaft [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) ist ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das das Parsen der Parameter aus der Abfragezeichenfolge ermöglicht. Siehe auch [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Eine Zeichenfolge.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection?q=123"> ... </a>
</math>
```

Sie können die `search`-Zeichenfolge des Ankers wie folgt abrufen:

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
