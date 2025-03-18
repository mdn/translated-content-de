---
title: units-per-em
slug: Web/SVG/Reference/Attribute/units-per-em
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`units-per-em`**-Attribut gibt die Anzahl der Koordinateneinheiten auf dem "em-Quadrat" an, ein abstraktes Quadrat, dessen Höhe der beabsichtigte Abstand zwischen Zeilen des gleichen Schriftgrades ist. Dies ist die Größe des Designrasters, auf dem {{Glossary("glyph", "Glyphen")}} angeordnet sind.

> [!NOTE]
> Dieser Wert ist fast immer notwendig, da fast jedes andere Attribut die Definition eines Designrasters erfordert.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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
  - : Dieser Wert gibt die Anzahl der Koordinateneinheiten auf dem em-Quadrat an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
