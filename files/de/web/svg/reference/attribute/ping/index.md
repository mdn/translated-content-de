---
title: ping
slug: Web/SVG/Reference/Attribute/ping
l10n:
  sourceCommit: 4c62538fb3d6e71c1d8c380b1ff752cdfd545a12
---

{{SeeCompatTable}}

Das **`ping`**-Attribut gibt eine durch Leerzeichen getrennte Liste von URLs an, an die der Browser beim Aufrufen des Links `POST`-Anfragen mit dem Body `PING` sendet. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
