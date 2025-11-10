---
title: filter
slug: Web/SVG/Reference/Attribute/filter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`filter`** Attribut gibt die Filtereffekte an, die durch das {{SVGElement("filter")}} Element definiert wurden und auf sein Element angewendet werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `filter` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("filter")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch gesehen kann `filter` auf jedes Element angewendet werden, aber es hat nur Wirkung auf [Containerelemente](/de/docs/Web/SVG/Reference/Element#container_elements) ohne das {{SVGElement("defs")}} Element, alle [Grafikelemente](/de/docs/Web/SVG/Reference/Element#graphics_elements) und das {{SVGElement("use")}} Element.

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
          href="/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#single_bar"
          title="Einzelbalken: genau eine der Einheiten muss vorhanden sein"
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

Für eine Beschreibung der Werte siehe die CSS {{cssxref("filter")}} Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- CSS {{cssxref("filter")}} Eigenschaft
