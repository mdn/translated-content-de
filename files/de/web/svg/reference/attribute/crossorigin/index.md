---
title: "SVG-Attribut: crossorigin"
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das Attribut `crossorigin`, gültig für die {{SVGElement("image")}}- und {{SVGElement("feImage")}}-Elemente, bietet Unterstützung für die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS))-Anfragen für die vom Element abgerufenen Daten.

Diese Tabelle zeigt mögliche Schlüsselwörter und ihre Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Bei CORS-Anfragen des Clients für dieses Element wird das `credentials`-Flag auf 'same-origin' gesetzt.               |
| `use-credentials` | Bei CORS-Anfragen des Clients für dieses Element wird das `credentials`-Flag auf 'include' gesetzt.                   |
| `""`              | Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

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
