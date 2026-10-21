---
title: "MathMLAnchorElement: download-Eigenschaft"
short-title: download
slug: Web/API/MathMLAnchorElement/download
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("HTML DOM")}}

Die **`download`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der angibt, dass die verknüpfte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert, sofern vorhanden, gibt den vorgeschlagenen Dateinamen an.

Sie spiegelt das `download`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="/download?file=67530dc" download="booklet.pdf">...</a>
</math>
```

So können Sie den `download`-Wert des Ankers abrufen:

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
