---
title: filter
slug: Web/SVG/Attribute/filter
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`filter`**-Attribut spezifiziert die Filtereffekte, die durch das {{SVGElement("filter")}}-Element definiert sind und auf das Element angewendet werden sollen.

> [!NOTE]
> Als Präsentationsattribut kann `filter` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("filter")}}.

Als Präsentationsattribut kann es auf jedes Element angewendet werden, aber es hat nur Auswirkungen auf [Containerelemente](/de/docs/Web/SVG/Element#container_elements) ohne das {{SVGElement("defs")}}-Element, alle [Grafikelemente](/de/docs/Web/SVG/Element#graphics_elements) und das {{SVGElement("use")}}-Element.

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
          href="/de/docs/Web/CSS/Value_definition_syntax#single_bar"
          title="Einzelner Balken: Genau eine der Entitäten muss vorhanden sein"
          >|</a
        >
        <code>&#x3C;filter-function-list></code>
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

Eine Beschreibung der Werte finden Sie in der CSS-Eigenschaft {{cssxref("filter")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{cssxref("filter")}}
