---
title: "MathMLAnchorElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/MathMLAnchorElement/hostname
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`hostname`**-Eigenschaft des [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Interfaces ist ein String, der entweder den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, beispielsweise durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) konvertiert.

Weitere Informationen finden Sie unter [`URL.hostname`](/de/docs/Web/API/URL/hostname).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples"> ... </a>
</math>
```

können Sie den `hostname` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hostname; // returns 'example.com'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
