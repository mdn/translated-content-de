---
title: xml:lang
slug: Web/SVG/Attribute/xml:lang
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}{{Deprecated_Header}}

Das **`xml:lang`**-Attribut gibt die Hauptsprache an, die in Inhalten und Attributen mit Textinhalt bestimmter Elemente verwendet wird.

Es ist ein universelles Attribut, das in allen XML-Dialekten erlaubt ist, um die natürliche menschliche Sprache zu markieren, die ein Element enthält.

Es gibt auch ein {{SVGAttr("lang")}}-Attribut (ohne Namensraum). Wenn beide definiert sind, wird das mit Namensraum verwendet, und das ohne Namensraum wird ignoriert.

## Elemente

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Verwendungshinweise

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

  - : Dieser Wert gibt die für das Element verwendete Sprache an. Die Syntax dieses Wertes ist in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definiert.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweistelligen Kleinschreibteil für die Sprache und einem zweistelligen Großschreibteil für die Region oder das Land besteht, getrennt durch einen Bindestrich, z.B. `en-US` für US-Englisch oder `de-AT` für Österreichisches Deutsch.

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