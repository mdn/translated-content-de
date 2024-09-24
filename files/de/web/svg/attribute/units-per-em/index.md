---
title: units-per-em
slug: Web/SVG/Attribute/units-per-em
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das **`units-per-em`** Attribut gibt die Anzahl der Koordinateneinheiten auf dem "em-Quadrat" an, einem abstrakten Quadrat, dessen Höhe der beabsichtigte Abstand zwischen den Zeilen des Textes in derselben Schriftgröße ist. Dies ist die Größe des Designrasters, auf dem die {{Glossary("glyph", "Glyphen")}} angeordnet werden.

> [!NOTE]
> Dieser Wert ist fast immer notwendig, da fast jedes andere Attribut die Definition eines Designrasters erfordert.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Verwendungsnotizen

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
  - : Dieser Wert gibt die Anzahl der Koordinateneinheiten auf dem em-Quadrat an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
