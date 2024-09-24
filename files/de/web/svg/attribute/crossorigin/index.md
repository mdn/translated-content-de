---
title: "SVG-Attribut: crossorigin"
slug: Web/SVG/Attribute/crossorigin
l10n:
  sourceCommit: f5656e96eef40ef1d8694a4c04d5768c4df5cb2d
---

{{SVGRef}}

Das `crossorigin`-Attribut, gültig für die {{SVGElement("image")}}- und {{SVGElement("feImage")}}-Elemente, unterstützt die Konfiguration von Cross-Origin Resource Sharing ([CORS](/de/docs/Web/HTTP/CORS))-Anfragen für die vom Element abgerufenen Daten.

Diese Tabelle zeigt mögliche Schlüsselwörter und deren Bedeutung:

| Schlüsselwort     | Beschreibung                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client-CORS-Anfragen für dieses Element setzen das Credentials-Flag auf 'same-origin'.                            |
| `use-credentials` | Client-CORS-Anfragen für dieses Element setzen das Credentials-Flag auf 'include'.                                |
| `""`              | Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. |

Es folgt den gleichen Verarbeitungsregeln wie das HTML-Attribut [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin).

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

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
