---
title: lang
slug: Web/SVG/Reference/Attribute/lang
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`lang`**-Attribut gibt die primäre Sprache an, die in Inhalten und Attributen verwendet wird, die Textinhalte bestimmter Elemente enthalten.

Es gibt auch ein {{SVGAttr("xml:lang")}}-Attribut (mit Namespace). Wenn beide definiert sind, wird dasjenige mit Namespace verwendet und das ohne wird ignoriert.

In SVG 1.1 gab es ein `lang`-Attribut, das mit einer anderen Bedeutung definiert war und nur für `<glyph>`-Elemente galt. Dieses Attribut spezifizierte eine Liste von Sprachen gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. Das Glyph sollte verwendet werden, wenn das `xml:lang`-Attribut genau mit einer der in diesem Parameter angegebenen Sprachen übereinstimmte oder wenn das `xml:lang`-Attribut genau einem Präfix einer der in diesem Parameter angegebenen Sprachen entsprach, sodass das erste Zeichen des Tags nach dem Präfix ein "-" war.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text lang="en-US">This is some English text</text>
</svg>
```

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

  - : Dieser Wert gibt die Sprache an, die für das Element verwendet wird. Die Syntax dieses Wertes ist in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definiert.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweistelligen, in Kleinbuchstaben gehaltenen Teil für die Sprache und einem zweistelligen, in Großbuchstaben gehaltenen Teil für die Region oder das Land besteht, getrennt durch einen Bindestrich, z.B. `en-US` für US-Amerikanisches Englisch oder `de-AT` für Österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
