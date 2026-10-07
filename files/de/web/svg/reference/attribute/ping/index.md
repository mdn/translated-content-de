---
title: ping
slug: Web/SVG/Reference/Attribute/ping
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`ping`** gibt eine durch Leerzeichen getrennte Liste von URLs an, an die der Browser beim Folgen des Links `POST`-Anfragen mit dem Inhalt `PING` sendet. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Beispiel

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a
    href="https://example.com"
    ping="https://example.com/ping https://example.net/log">
    <text x="5" y="15">Example</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
