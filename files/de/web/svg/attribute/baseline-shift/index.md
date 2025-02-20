---
title: baseline-shift
slug: Web/SVG/Attribute/baseline-shift
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`baseline-shift`**-Attribut ermöglicht die Neupositionierung der Dominant-Baseline relativ zur Dominant-Baseline des übergeordneten Textelementinhalts. Das verschobene Objekt könnte ein Tief- oder Hochgestelltzeichen sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Property: {{cssxref("baseline-shift")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

> [!NOTE]
> Diese Eigenschaft wird bald veraltet sein, und es wird empfohlen, stattdessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) zu verwenden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Anwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} | <code>sub</code> |
        <code>super</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `sub`
  - : Die Dominant-Baseline wird zur Standardposition für Tiefgestelltes verschoben.
- `super`
  - : Die Dominant-Baseline wird zur Standardposition für Hochgestelltes verschoben.
- `<length-percentage>`

  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die Dominant-Baseline des übergeordneten Textelementinhalts um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die Dominant-Baseline des übergeordneten Textelementinhalts um den angegebenen Prozentsatz der {{SVGAttr("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
