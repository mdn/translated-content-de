---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Das **`baseline-shift`**-Attribut ermöglicht die Neupositionsierung der Dominanten-Basislinie relativ zur dominanten Basislinie des übergeordneten Textinhalts-Elements. Das verschobene Objekt könnte ein Tief- oder Hochgestellt sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Property: {{cssxref("baseline-shift")}}. Wenn beide spezifiziert sind, hat das CSS-Property Vorrang.

> [!NOTE]
> Dieses Attribut wird in Zukunft veraltet sein und es wird empfohlen, stattdessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) zu verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Verwendungsnotizen

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
  - : Die dominante Basislinie wird auf die Standardposition für Tiefgestelltes verschoben.
- `super`
  - : Die dominante Basislinie wird auf die Standardposition für Hochgestelltes verschoben.
- `<length-percentage>`
  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textinhalts-Elements um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textinhalts-Elements um den angegebenen Prozentsatz der {{cssxref("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
