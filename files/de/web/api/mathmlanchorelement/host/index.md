---
title: "MathMLAnchorElement: host-Eigenschaft"
short-title: host
slug: Web/API/MathMLAnchorElement/host
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`host`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der den Host enthält, also den [`hostname`](/de/docs/Web/API/MathMLAnchorElement/hostname) und, falls der {{Glossary("port", "Port")}} der URL nicht leer ist, ein `":"`, gefolgt vom [`port`](/de/docs/Web/API/MathMLAnchorElement/port) der URL. Wenn die URL keinen `hostname` hat, enthält diese Eigenschaft einen leeren String, `""`.

Weitere Informationen finden Sie unter [`URL.host`](/de/docs/Web/API/URL/host).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a href="https://example.com#examples">...</a>
</math>
```

```js
const mathAnchor = document.querySelector("math a");

mathAnchor.href = "https://example.com/subsection";
mathAnchor.host === "example.com";

mathAnchor.href = "https://example.com:443";
mathAnchor.host === "example.com";
// The port number is not included because 443 is the scheme's default port

mathAnchor.href = "https://example.com:4097";
mathAnchor.host === "example.com:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Element
