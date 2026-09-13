---
title: "MathMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/MathMLAnchorElement/protocol
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`protocol`**-Eigenschaft der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein String, der das Protokoll oder Schema des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements einschließlich des abschließenden `":"` enthält.

Diese Eigenschaft kann festgelegt werden, um das Protokoll der URL zu ändern. Wenn der bereitgestellte String kein `":"` enthält, wird eines angehängt. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

Weitere Informationen finden Sie unter [`URL.protocol`](/de/docs/Web/API/URL/protocol).

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

können Sie das `protocol` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.protocol; // returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
