---
title: lang
slug: Web/SVG/Reference/Attribute/lang
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`lang`**-Attribut gibt die primäre Sprache an, die in den Inhalten und Attributen mit Textinhalt bestimmter Elemente verwendet wird.

Es gibt auch ein {{SVGAttr("xml:lang")}}-Attribut (mit Namensraum). Wenn beide definiert sind, wird das Attribut mit Namensraum verwendet und das ohne Namensraum ignoriert.

In SVG 1.1 gab es ein `lang`-Attribut, das mit einer anderen Bedeutung definiert war und nur für {{SVGElement("glyph")}}-Elemente galt. Dieses Attribut spezifizierte eine Liste von Sprachen gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. Das Glyph wurde verwendet, wenn das `xml:lang`-Attribut genau mit einer der im Wert dieses Parameters angegebenen Sprachen übereinstimmte oder wenn das `xml:lang`-Attribut genau einem Präfix von einer der im Wert dieses Parameters angegebenen Sprachen entsprach, so dass das erste Zeichen nach dem Präfix ein "-" war.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text lang="en-US">This is some English text</text>
</svg>
```

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

  - : Dieser Wert gibt die für das Element verwendete Sprache an. Die Syntax dieses Wertes wird in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweibuchstabigen Teil in Kleinbuchstaben für die Sprache und einem zweibuchstabigen Teil in Großbuchstaben für die Region oder das Land besteht, getrennt durch einen Bindestrich, z.B. `en-US` für US-Englisch oder `de-AT` für Österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}
