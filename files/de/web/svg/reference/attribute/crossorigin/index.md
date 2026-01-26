---
title: crossorigin
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: 367c50159a45a513a77bd3941a4fac4bb83d6934
---

Das `crossorigin` Attribut, gültig auf den {{SVGElement("image")}}, {{SVGElement("feImage")}}, und {{SVGElement("script")}} Elementen, unterstützt die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS))-Anfragen für die abgerufenen Daten des Elements.

Diese Tabelle zeigt mögliche Schlüsselwörter und deren Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element haben das "credentials"-Flag auf 'same-origin' gesetzt.                            |
| `use-credentials` | Client-CORS-Anfragen für dieses Element haben das "credentials"-Flag auf 'include' gesetzt.                                |
| `""`              | Wird der Attributname auf einen leeren Wert gesetzt, wie `crossorigin` oder `crossorigin=""`, entspricht dies `anonymous`. |

Es folgt den gleichen Verarbeitungsvorschriften wie das HTML-Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Beispiel

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    crossorigin="use-credentials" />
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
