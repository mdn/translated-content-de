---
title: "SVG-Attribut: crossorigin"
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

Das Attribut `crossorigin`, gültig für die {{SVGElement("image")}} und {{SVGElement("feImage")}} Elemente, bietet Unterstützung für die Konfiguration der Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS)) Anfragen für die abgerufenen Daten des Elements.

Diese Tabelle zeigt mögliche Schlüsselwörter und deren Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element haben das `credentials`-Flag auf 'same-origin' gesetzt.                |
| `use-credentials` | Client-CORS-Anfragen für dieses Element haben das `credentials`-Flag auf 'include' gesetzt.                    |
| `""`              | Das Attribut mit einem leeren Wert zu setzen, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

Es folgt den gleichen Verarbeitungsregeln wie das HTML-Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

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
