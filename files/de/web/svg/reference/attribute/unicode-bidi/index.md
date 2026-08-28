---
title: unicode-bidi
slug: Web/SVG/Reference/Attribute/unicode-bidi
l10n:
  sourceCommit: 72644896e30a618579b67b805e68855c20ec7d0f
---

Das **`unicode-bidi`**-Attribut, zusammen mit dem {{SVGAttr("direction")}}-Attribut, bestimmt, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn beispielsweise ein Inhaltsblock sowohl Links-nach-Rechts- als auch Rechts-nach-Links-Text enthält, verwendet der Browser den Unicode-Bidirektional-Algorithmus, um zu entscheiden, wie der Text angezeigt werden soll. Das `unicode-bidi`-Attribut ermöglicht es dem Entwickler, diesen Algorithmus zu überschreiben und die Einbettung des Textes zu steuern.

> [!NOTE]
> Als Präsentationsattribut hat `unicode-bidi` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("unicode-bidi")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("unicode-bidi", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte beziehen Sie sich bitte auf die CSS {{cssxref("unicode-bidi")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("unicode-bidi")}}-Eigenschaft
