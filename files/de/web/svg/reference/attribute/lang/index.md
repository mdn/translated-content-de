---
title: lang
slug: Web/SVG/Reference/Attribute/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`lang`**-Attribut gibt die primäre Sprache an, die in Inhalten und Attributen verwendet wird, die Textinhalt bestimmter Elemente enthalten.

Es gibt auch ein {{SVGAttr("xml:lang")}}-Attribut (mit Namensraum). Wenn beide definiert sind, wird das mit Namensraum verwendet und das ohne wird ignoriert.

In SVG 1.1 war ein `lang`-Attribut mit einer anderen Bedeutung definiert, das nur auf `<glyph>`-Elemente anwendbar war. Dieses Attribut spezifizierte eine Liste von {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcodes")}}. Der Glyph sollte verwendet werden, wenn das `xml:lang`-Attribut genau mit einer der Sprachen übereinstimmte, die im Wert dieses Parameters angegeben sind, oder wenn das `xml:lang`-Attribut genau einem Präfix einer der im Wert dieses Parameters angegebenen Sprachen entsprach, so dass das erste Tag-Zeichen nach dem Präfix ein "-"-Zeichen war.

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
  - : Dieser Wert gibt die verwendete Sprache für das Element als gültigen {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} an.

    Die gebräuchlichste Syntax ist ein Wert, der aus einem zweistelligen, kleingeschriebenen Teil für die Sprache und einem zweistelligen, großgeschriebenen Teil für die Region oder das Land besteht, getrennt durch ein Minuszeichen, z. B. `en-US` für Amerikanisches Englisch oder `de-AT` für Österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}}
