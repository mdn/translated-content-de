---
title: filter
slug: Web/SVG/Attribute/filter
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{SVGRef}}

Das **`filter`** Attribut gibt die durch das {{SVGElement("filter")}} Element definierten Filtereffekte an, die auf sein Element angewendet werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `filter` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("filter")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch kann `filter` auf jedes Element angewendet werden, aber es hat nur Auswirkungen auf [Container-Elemente](/de/docs/Web/SVG/Element#container_elements) ohne das {{SVGElement("defs")}} Element, alle [Grafik-Elemente](/de/docs/Web/SVG/Element#graphics_elements) und das {{SVGElement("use")}} Element.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur">
    <feGaussianBlur stdDeviation="2" />
  </filter>

  <rect x="10" y="10" width="80" height="80" filter="url(#blur)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>none</code>
        <a
          href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#single_bar"
          title="Einzelner Balken: Genau eine der Entitäten muss vorhanden sein"
          >|</a
        >
        <code>&#x3C;filter-value-list></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie in der CSS {{cssxref("filter")}} Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- CSS {{cssxref("filter")}} Eigenschaft
