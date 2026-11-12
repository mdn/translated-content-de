---
title: xml:lang
slug: Web/SVG/Reference/Attribute/xml:lang
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`xml:lang`** gibt die primäre Sprache an, die im Inhalt und in Attributen mit Textinhalt bestimmter Elemente verwendet wird.

Es ist ein universelles Attribut, das in allen XML-Dialekten zulässig ist, um die natürliche Sprache zu kennzeichnen, die ein Element enthält.

Es gibt außerdem ein Attribut {{SVGAttr("lang")}} (ohne Namespace). Wenn beide definiert sind, wird das Attribut mit Namespace verwendet und das ohne Namespace ignoriert.

## Elemente

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiele

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text xml:lang="en-US">This is some English text</text>
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
  - : Dieser Wert gibt die für das Element verwendete Sprache als gültigen {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} an.

    Die gebräuchlichste Syntax besteht aus einem zweiteiligen Wert: einem kleingeschriebenen Teil mit zwei Zeichen für die Sprache und einem großgeschriebenen Teil mit zwei Zeichen für die Region oder das Land, getrennt durch einen Bindestrich, z. B. `en-US` für amerikanisches Englisch oder `de-AT` für österreichisches Deutsch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML-Spezifikation für `xml:lang`](https://www.w3.org/TR/xml/#sec-lang-tag)
- {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}}
