---
title: units-per-em
slug: Web/SVG/Attribute/units-per-em
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das **`units-per-em`** Attribut gibt die Anzahl der Koordinateneinheiten auf dem "em Quadrat" an, ein abstraktes Quadrat, dessen Höhe der beabsichtigten Distanz zwischen Zeilen des gleichen Schriftgrads entspricht. Dies ist die Größe des Designrasters, auf dem {{Glossary("glyph", "Glyphen")}} angeordnet sind.

> [!NOTE]
> Dieser Wert ist fast immer notwendig, da nahezu jedes andere Attribut die Definition eines Designrasters erfordert.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt die Anzahl der Koordinateneinheiten auf dem em Quadrat an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
