---
title: "SVG-Attribut: crossorigin"
slug: Web/SVG/Attribute/crossorigin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SVGRef}}

Das `crossorigin`-Attribut, gültig bei den Elementen {{SVGElement("image")}} und {{SVGElement("feImage")}}, bietet Unterstützung für die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS))-Anfragen für die abgerufenen Daten des Elements.

Diese Tabelle zeigt mögliche Schlüsselwörter und deren Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element werden das `credentials`-Flag auf 'same-origin' gesetzt haben.               |
| `use-credentials` | Client-CORS-Anfragen für dieses Element werden das `credentials`-Flag auf 'include' gesetzt haben.                   |
| `""`              | Das Setzen des Attributnamen auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

Es folgt denselben Verarbeitungsregeln wie das HTML-Attribut [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin).

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
