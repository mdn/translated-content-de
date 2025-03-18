---
title: filter
slug: Web/SVG/Reference/Attribute/filter
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`filter`**-Attribut gibt die Filtereffekte an, die durch das {{SVGElement("filter")}}-Element definiert sind und auf das entsprechende Element angewendet werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `filter` auch ein entsprechendes CSS-Property: {{cssxref("filter")}}. Wenn beides angegeben ist, hat das CSS-Property Vorrang.

Technisch kann `filter` auf jedes Element angewendet werden, aber es hat nur Wirkung auf [Container-Elemente](/de/docs/Web/SVG/Reference/Element#container_elements) ohne das {{SVGElement("defs")}}-Element, alle [Grafik-Elemente](/de/docs/Web/SVG/Reference/Element#graphics_elements) und das {{SVGElement("use")}}-Element.

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

## Anmerkungen zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>none</code>
        <a
          href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#single_bar"
          title="Single bar: genau eines der Entitäten muss vorhanden sein"
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

Für eine Beschreibung der Werte siehe die CSS-Eigenschaft {{cssxref("filter")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- CSS {{cssxref("filter")}}-Eigenschaft
