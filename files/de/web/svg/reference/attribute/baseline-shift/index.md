---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`baseline-shift`** Attribut ermöglicht die Verschiebung der dominanten Basislinie relativ zur dominanten Basislinie des übergeordneten Textelementes. Das verschobene Objekt könnte ein Tief- oder Hochgestellt sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Property: {{cssxref("baseline-shift")}}. Wenn beide spezifiziert sind, hat die CSS-Eigenschaft Vorrang.

> [!NOTE]
> Diese Eigenschaft wird veraltet und Autoren sollten anstelle dessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Verwendungshinweise

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
  - : Die dominante Basislinie wird auf die Standardposition für Tiefgestellte verschoben.
- `super`
  - : Die dominante Basislinie wird auf die Standardposition für Hochgestellte verschoben.
- `<length-percentage>`

  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelements um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelements um den angegebenen Prozentsatz der {{SVGAttr("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
