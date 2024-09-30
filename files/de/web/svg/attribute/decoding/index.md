---
title: decoding
slug: Web/SVG/Attribute/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{SVGRef}}

Das `decoding`-Attribut, gültig für {{SVGElement("image")}}-Elemente, gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit der Wiedergabe anderer Inhalte in einem einzigen Darstellungsdurchgang, der "korrekter" aussieht (`sync`), oder ob die anderen Inhalte zuerst dargestellt und präsentiert werden sollen und das Bild später dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass der nächste Zeichenzyklus nicht auf die Bilddekodierung wartet.

Bei statischen `<image>`-Elementen ist es oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` wahrzunehmen. Diese werden wahrscheinlich zunächst als leere Bilder wiedergegeben, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann ohnehin unabhängig verarbeitet werden, sodass die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren der Darstellung während der Dekodierung kann jedoch, auch wenn es oft sehr klein ist, _gemessen_ werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist.

Die Verwendung unterschiedlicher `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<image>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`SVGImageElement.decoding`](/de/docs/Web/API/SVGImageElement/decoding) für weitere Details.

Erlaubte Werte:

- `sync`
  - : Das Bild wird synchron dekodiert und zusammen mit dem anderen Inhalt dargestellt und präsentiert.
- `async`
  - : Das Bild wird asynchron dekodiert, nachdem der andere Inhalt dargestellt und präsentiert wurde.
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

- [SVGImageElement: decoding-Eigenschaft](/de/docs/Web/API/SVGImageElement/decoding)
- [Was tut das Image-Decoding-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
