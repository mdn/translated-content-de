---
title: referrerpolicy
slug: Web/SVG/Reference/Attribute/referrerpolicy
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`referrerpolicy`** legt fest, welche Referrer-Informationen beim Abrufen von Ressourcen oder beim Navigieren über den Link eines SVG-`<a>`-Elements gesendet werden. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Beispiel

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" referrerpolicy="origin">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>no-referrer</code> | <code>no-referrer-when-downgrade</code> |
        <code>origin</code> | <code>origin-when-cross-origin</code> |
        <code>same-origin</code> | <code>strict-origin</code> |
        <code>strict-origin-when-cross-origin</code> | <code>unsafe-url</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>strict-origin-when-cross-origin</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
- `no-referrer-when-downgrade`
  - : Sendet die vollständige URL ({{Glossary("origin", "Ursprung")}}, Pfad und Abfragezeichenfolge), wenn das Sicherheitsniveau des Protokolls gleich oder höher ist (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). An ein weniger sicheres Ziel (HTTPS→HTTP) wird jedoch kein Header gesendet.
- `origin`
  - : Der {{HTTPHeader("Referer")}}-Header enthält nur den {{Glossary("origin", "Ursprung")}} der URL. Beispielsweise sendet ein Dokument unter `https://example.com/page.html` `https://example.com/` als Referrer.
- `origin-when-cross-origin`
  - : Sendet bei einer {{Glossary("Same-origin_policy", "Same-Origin-Anfrage")}} die vollständige URL, bei Cross-Origin-Anfragen jedoch nur den {{Glossary("origin", "Ursprung")}}. An ein weniger sicheres Ziel (HTTPS→HTTP) wird kein Header gesendet.
- `same-origin`
  - : Sendet die vollständige URL nur bei einer {{Glossary("Same-origin_policy", "Same-Origin-Anfrage")}}. Bei Cross-Origin-Anfragen wird kein Header gesendet.
- `strict-origin`
  - : Sendet nur den {{Glossary("origin", "Ursprung")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt. An ein weniger sicheres Ziel wird kein Header gesendet.
- `strict-origin-when-cross-origin`
  - : Standardwert. Sendet bei einer {{Glossary("Same-origin_policy", "Same-Origin-Anfrage")}} die vollständige URL, bei Cross-Origin-Anfragen jedoch nur den {{Glossary("origin", "Ursprung")}}. An ein weniger sicheres Ziel wird kein {{HTTPHeader("Referer")}}-Header gesendet.
- `unsafe-url`
  - : Sendet bei jeder Aktion die vollständige URL, unabhängig vom Sicherheitsniveau.
    > [!WARNING]
    > Diese Richtlinie kann private Informationen preisgeben, wenn von HTTPS zu HTTP navigiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
- {{HTTPHeader("Referrer-Policy")}}-Header
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerPolicy)
