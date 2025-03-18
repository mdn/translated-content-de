---
title: "SVG-Attribut: crossorigin"
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das crossorigin-Attribut, gültig für die {{SVGElement("image")}} und {{SVGElement("feImage")}} Elemente, ermöglicht die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/Guides/CORS)) Anfragen für die vom Element abgerufenen Daten.

Diese Tabelle zeigt die möglichen Schlüsselwörter und ihre Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element werden das Credentials-Flag auf 'same-origin' gesetzt haben.                  |
| `use-credentials` | Client-CORS-Anfragen für dieses Element werden das Credentials-Flag auf 'include' gesetzt haben.                      |
| `""`              | Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

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
