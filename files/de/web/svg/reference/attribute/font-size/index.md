---
title: font-size
slug: Web/SVG/Reference/Attribute/font-size
l10n:
  sourceCommit: da8c3171b7a7ea6694af71fac7a3194d8e9ba869
---

Das **`font-size`**-Attribut bezieht sich auf die Größe der Schrift von {{Glossary("baseline/typography", "Baseline")}} zu Baseline, wenn mehrere Textzeilen in einer mehrzeiligen Layout-Umgebung gesetzt werden.

> [!NOTE]
> Als Präsentationsattribut verfügt `font-size` auch über eine entsprechende CSS-Eigenschaft: {{cssxref("font-size")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Nutzungshinweise

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

Für eine Beschreibung der Werte, lesen Sie bitte die [CSS `font-size`](/de/docs/Web/CSS/font-size#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-size")}}-Eigenschaft
