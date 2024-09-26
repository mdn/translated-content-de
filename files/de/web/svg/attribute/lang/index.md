---
title: lang
slug: Web/SVG/Attribute/lang
l10n:
  sourceCommit: cd840e78b6027a391fe1f11b745564cf3ebfb8e7
---

{{SVGRef}}

Das **`lang`**-Attribut gibt die primäre Sprache an, die in den Inhalten und Attributen verwendet wird, die Textinhalte bestimmter Elemente enthalten.

Es gibt auch ein {{SVGAttr("xml:lang")}}-Attribut (mit Namespace). Falls beide definiert sind, wird das mit Namespace verwendet und das ohne wird ignoriert.

In SVG 1.1 war ein `lang`-Attribut mit anderer Bedeutung definiert und galt nur für {{SVGElement("glyph")}}-Elemente. Dieses Attribut spezifizierte eine Liste von Sprachen gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. Das Glyphelement sollte verwendet werden, wenn das `xml:lang`-Attribut genau mit einer der in diesem Parameter angegebenen Sprachen übereinstimmte oder wenn das `xml:lang`-Attribut genau einem Präfix von einer der in diesem Parameter angegebenen Sprachen entsprach, so dass das erste Tagzeichen nach dem Präfix „-“ war.

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
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<language-tag>`

  - : Dieser Wert gibt die für das Element verwendete Sprache an. Die Syntax dieses Wertes ist in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definiert.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweibuchstabigen, klein geschriebenen Teil für die Sprache und einem zweibuchstabigen, groß geschriebenen Teil für die Region oder das Land besteht, getrennt durch ein Minuszeichen, z.B. `en-US` für US-Englisch oder `de-AT` für Österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}