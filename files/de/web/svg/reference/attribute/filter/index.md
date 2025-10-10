---
title: filter
slug: Web/SVG/Reference/Attribute/filter
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **`filter`** Attribut gibt die Filtereffekte an, die vom {{SVGElement("filter")}}-Element definiert sind und auf sein Element angewendet werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `filter` auch ein entsprechendes CSS-Attribut: {{cssxref("filter")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch kann `filter` auf jedes Element angewendet werden, aber es hat nur Auswirkungen auf [Container-Elemente](/de/docs/Web/SVG/Reference/Element#container_elements) ohne das {{SVGElement("defs")}}-Element, alle [Grafikelemente](/de/docs/Web/SVG/Reference/Element#graphics_elements) und das {{SVGElement("use")}}-Element.

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
          href="/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#single_bar"
          title="Einzelner Balken: Genau eines der Einheiten muss vorhanden sein"
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

Eine Beschreibung der Werte finden Sie in der CSS {{cssxref("filter")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- CSS {{cssxref("filter")}}-Eigenschaft
