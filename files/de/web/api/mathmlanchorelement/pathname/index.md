---
title: "MathMLAnchorElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/MathMLAnchorElement/pathname
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`pathname`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment (oder den leeren String, falls kein Pfad vorhanden ist).

Weitere Informationen finden Sie unter [`URL.pathname`](/de/docs/Web/API/URL/pathname).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection#examples"> ... </a>
</math>
```

können Sie den `pathname` des Ankers folgendermaßen abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.pathname; // returns '/subsection'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
