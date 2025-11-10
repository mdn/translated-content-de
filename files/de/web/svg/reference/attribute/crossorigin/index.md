---
title: crossorigin
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: 39d45a2e71cee2c107a026a59ba0d9229a511592
---

Das `crossorigin` Attribut, gültig auf den {{SVGElement("image")}} und {{SVGElement("feImage")}} Elementen, unterstützt die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS)) Anfragen für die abgerufenen Daten des Elements.

Diese Tabelle zeigt mögliche Schlüsselwörter und deren Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element werden das Credentials-Flag auf 'same-origin' gesetzt haben.                  |
| `use-credentials` | Client-CORS-Anfragen für dieses Element werden das Credentials-Flag auf 'include' gesetzt haben.                      |
| `""`              | Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

Es folgt denselben Verarbeitungsregeln wie das HTML-Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

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
