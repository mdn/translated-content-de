---
title: "MathMLAnchorElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/MathMLAnchorElement/pathname
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`pathname`**-Eigenschaft des [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Interfaces ist ein String, der einen anfänglichen `'/'` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment (bzw. einen leeren String, wenn kein Pfad vorhanden ist).

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

können Sie den `pathname` des Ankers wie folgt abrufen:

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
