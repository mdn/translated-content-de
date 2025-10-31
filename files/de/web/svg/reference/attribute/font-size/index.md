---
title: font-size
slug: Web/SVG/Reference/Attribute/font-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`font-size`** Attribut bezieht sich auf die Größe der Schriftart von {{Glossary("baseline/typography", "Baseline")}} zu Baseline, wenn mehrere Textzeilen in einem mehrzeiligen Layout-Umfeld durchgehend eingestellt sind.

> [!NOTE]
> Als Präsentationsattribut hat `font-size` auch ein entsprechendes CSS-Property: {{cssxref("font-size")}}. Wenn beides spezifiziert ist, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### SVG-Schriftgröße steuern

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="25" font-size="smaller">smaller</text>
  <text x="100" y="25" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>&#x3C;absolute-size></code> | <code>&#x3C;relative-size></code> |
        <code>&#x3C;length-percentage></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>medium</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte, beachten Sie bitte die [CSS `font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-size")}} Eigenschaft
