---
title: decoding
slug: Web/SVG/Attribute/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{SVGRef}}

Das `decoding`-Attribut, gültig für {{SVGElement("image")}}-Elemente, gibt dem Browser einen Hinweis darauf, ob er die Bilddekodierung zusammen mit dem Rendern anderer Inhalte in einem einzelnen Darstellungsschritt, der "korrekter" aussieht, ausführen soll (`sync`), oder ob er zuerst die anderen Inhalte rendern und präsentieren soll und dann das Bild dekodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Rendering nicht darauf wartet, dass das Bild dekodiert wird.

Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statischen `<image>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien geladen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, so dass die "Synchronisation" von Inhaltsaktualisierungen weniger auffällig ist. Das Blockieren des Renderings während der Dekodierung kann jedoch messbar sein, auch wenn es mit dem bloßen Auge schwer zu erkennen ist.

Die Verwendung verschiedener `decoding`-Typen kann zu merklicheren Unterschieden führen, wenn `<image>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`SVGImageElement.decoding`](/de/docs/Web/API/SVGImageElement/decoding) für weitere Details.

Erlaubte Werte:

- `sync`
  - : Dekodiert das Bild synchron zusammen mit dem Rendern der anderen Inhalte und präsentiert alles gemeinsam.
- `async`
  - : Dekodiert das Bild asynchron, nach dem Rendern und Präsentieren der anderen Inhalte.
- `auto`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Nutzer ist. Dies ist der Standardwert.

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

- [SVGImageElement: decoding property](/de/docs/Web/API/SVGImageElement/decoding)
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
