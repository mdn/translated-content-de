---
title: Dekodierung
slug: Web/SVG/Attribute/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{SVGRef}}

Das `decoding`-Attribut, gültig für {{SVGElement("image")}}-Elemente, gibt dem Browser einen Hinweis, ob die Bilddekodierung zusammen mit der Darstellung anderer Inhalte in einem einzelnen Präsentationsschritt erfolgen soll, der optisch "korrekter" aussieht (`sync`), oder ob der andere Inhalt zuerst gerendert und präsentiert werden soll und das Bild dann anschließend dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass das nächste Rendern nicht darauf wartet, dass das Bild dekodiert wird.

Es ist oft schwierig, einen spürbaren Effekt zu erkennen, wenn `decoding` auf statischen `<image>`-Elementen verwendet wird. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass die "Synchronisierung" von Inhaltsupdates weniger deutlich ist. Dennoch kann die Blockierung der Darstellung während der Dekodierung, auch wenn sie oft sehr gering ist, _gemessen_ werden — selbst wenn es für das menschliche Auge schwierig zu beobachten ist.

Die Verwendung verschiedener `decoding`-Typen kann zu spürbaren Unterschieden führen, wenn `<image>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe {{domxref("SVGImageElement.decoding")}} für weitere Details.

Erlaubte Werte:

- `sync`
  - : Dekodieren Sie das Bild synchron zusammen mit der Darstellung der anderen Inhalte und präsentieren Sie alles zusammen.
- `async`
  - : Dekodieren Sie das Bild asynchron, nach dem Rendern und der Präsentation der anderen Inhalte.
- `auto`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

## Beispiel

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    decoding="async" />
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVGImageElement: decoding Eigenschaft](/de/docs/Web/API/SVGImageElement/decoding)
- [Was bewirkt das Bild-Dekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
