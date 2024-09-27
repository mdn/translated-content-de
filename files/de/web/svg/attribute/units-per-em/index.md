---
title: units-per-em
slug: Web/SVG/Attribute/units-per-em
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das **`units-per-em`**-Attribut gibt die Anzahl der Koordinateneinheiten im "em Quadrat" an, einem abstrakten Quadrat, dessen Höhe den beabsichtigten Abstand zwischen den Zeilen beim gleichen Schriftgrad darstellt. Dies ist die Größe des Design-Rasters, auf dem die [Glyphen](/de/docs/Glossary/glyph) angeordnet sind.

> [!NOTE]
> Dieser Wert ist fast immer notwendig, da nahezu jedes andere Attribut die Definition eines Design-Rasters erfordert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1000</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die Anzahl der Koordinateneinheiten im em Quadrat an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
