---
title: "MathMLAnchorElement: download-Eigenschaft"
short-title: download
slug: Web/API/MathMLAnchorElement/download
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`download`**-Eigenschaft der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist eine Zeichenfolge, die angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Falls ein Wert vorhanden ist, gibt er den vorgeschlagenen Dateinamen an.

Sie spiegelt das `download`-Attribut des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wider.

## Wert

Eine Zeichenfolge.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="/download?file=67530dc" download="booklet.pdf">...</a>
</math>
```

können Sie den `download`-Wert des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.download; // "booklet.pdf"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
