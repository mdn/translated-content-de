---
title: xml:lang
slug: Web/SVG/Reference/Attribute/xml:lang
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{Deprecated_Header}}

Das **`xml:lang`** Attribut gibt die Hauptsprache an, die in Inhalten und Attributen mit Textinhalt bestimmter Elemente verwendet wird.

Es handelt sich um ein universelles Attribut, das in allen XML-Dialekten verwendet werden darf, um die natürliche menschliche Sprache, die ein Element enthält, zu kennzeichnen.

Es gibt auch ein {{SVGAttr("lang")}} Attribut (ohne Namensraum). Wenn beide definiert sind, wird das Attribut mit Namensraum verwendet und das ohne wird ignoriert.

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

  - : Dieser Wert gibt die verwendete Sprache für das Element an. Die Syntax dieses Wertes ist in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definiert.

    Die gängigste Syntax ist ein Wert, der aus einem zweistelligen Kleinbuchstabenteil für die Sprache und einem zweistelligen Großbuchstabenteil für die Region oder das Land besteht, getrennt durch einen Bindestrich, z.B. `en-US` für US-Englisch oder `de-AT` für Österreichisches Deutsch.

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
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
