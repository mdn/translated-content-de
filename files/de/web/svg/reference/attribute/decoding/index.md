---
title: decoding
slug: Web/SVG/Reference/Attribute/decoding
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das `decoding` Attribut, das auf {{SVGElement("image")}} Elementen gültig ist, gibt dem Browser einen Hinweis darauf, ob das Bild zusammen mit der anderen Inhalte in einem einzigen Darstellungsschritt dekodiert werden soll, der "korrekter" aussieht (`sync`), oder ob zuerst die anderen Inhalte gerendert und präsentiert werden sollen und das Bild anschließend dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass der nächste Malvorgang nicht darauf wartet, dass das Bild dekodiert wird.

Es ist oft schwierig, einen merklichen Effekt wahrzunehmen, wenn `decoding` auf statischen `<image>` Elementen verwendet wird. Diese werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen werden, und dann ohnehin unabhängig verarbeitet, sodass die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während des Dekodierens, auch wenn es oft recht klein ist, _kann_ jedoch gemessen werden — auch wenn es mit dem menschlichen Auge schwer zu beobachten ist.

Die Verwendung verschiedener `decoding` Typen kann zu spürbareren Unterschieden führen, wenn `<image>` Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`SVGImageElement.decoding`](/de/docs/Web/API/SVGImageElement/decoding) für weitere Details.

Zulässige Werte:

- `sync`
  - : Dekodiert das Bild synchron zusammen mit der Darstellung der anderen Inhalte und präsentiert alles zusammen.
- `async`
  - : Dekodiert das Bild asynchron, nach der Darstellung und Präsentation der anderen Inhalte.
- `auto`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

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
- [Was macht das Bilddekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
