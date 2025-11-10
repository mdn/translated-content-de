---
title: xml:lang
slug: Web/SVG/Reference/Attribute/xml:lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{Deprecated_Header}}

Das **`xml:lang`** Attribut gibt die Hauptsprache an, die in Inhalten und Attributen mit Textinhalt bestimmter Elemente verwendet wird.

Es ist ein universelles Attribut, das in allen XML-Dialekten erlaubt ist, um die natürliche menschliche Sprache zu markieren, die ein Element enthält.

Es gibt auch ein {{SVGAttr("lang")}} Attribut (ohne Namensraum). Wenn beide definiert sind, wird das mit Namensraum verwendet und das ohne wird ignoriert.

## Elemente

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;language-tag></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<language-tag>`
  - : Dieser Wert gibt die Sprache des Elements als einen gültigen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} an.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweistelligen, kleingeschriebenen Teil für die Sprache und einem zweistelligen, großgeschriebenen Teil für die Region oder das Land besteht, getrennt durch einen Bindestrich, z.B. `en-US` für US-Englisch oder `de-AT` für Österreichisches Deutsch.

## Beispiele

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text xml:lang="en-US">This is some English text</text>
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML-Spezifikation von `xml:lang`](https://www.w3.org/TR/xml/#sec-lang-tag)
- {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}
