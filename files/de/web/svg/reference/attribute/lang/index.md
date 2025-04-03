---
title: lang
slug: Web/SVG/Reference/Attribute/lang
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`lang`**-Attribut gibt die Hauptsprache an, die in den Inhalten und Attributen von bestimmten Elementen verwendet wird, die Textinhalte enthalten.

Es gibt auch ein {{SVGAttr("xml:lang")}}-Attribut (mit Namespace). Wenn beide definiert sind, wird das mit Namespace verwendet und das ohne wird ignoriert.

In SVG 1.1 wurde ein `lang`-Attribut mit einer anderen Bedeutung definiert, das nur für {{SVGElement("glyph")}}-Elemente galt. Dieses Attribut spezifizierte eine Liste von Sprachen gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. Das Glyph sollte verwendet werden, wenn das `xml:lang`-Attribut genau mit einer der Sprachen übereinstimmte, die im Wert dieses Parameters angegeben sind, oder wenn das `xml:lang`-Attribut genau einem Präfix einer der Sprachen entspricht, die im Wert dieses Parameters angegeben sind, so dass das erste Zeichen des Tags nach dem Präfix ein "-" ist.

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

  - : Dieser Wert gibt die für das Element verwendete Sprache an. Die Syntax dieses Wertes ist definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweistelligen Kleinbuchstabenteil für die Sprache und einem zweistelligen Großbuchstabenteil für die Region oder das Land gebildet wird, getrennt durch ein Minuszeichen, z.B. `en-US` für US-Englisch oder `de-AT` für österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}
