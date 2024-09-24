---
title: baseline-Verschiebung
slug: Web/SVG/Attribute/baseline-shift
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`baseline-shift`**-Attribut ermöglicht die Verschiebung der dominanten Basislinie relativ zur dominanten Basislinie des übergeordneten Textelementinhalts. Das verschobene Objekt könnte ein Tief- oder Hochgestelltsein sein.

> [!NOTE]
> Als Präsentationsattribut kann `baseline-shift` als CSS-Eigenschaft verwendet werden.

> [!NOTE]
> Diese Eigenschaft wird in Zukunft veraltet sein, und es wird empfohlen, stattdessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) zu verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Anmerkungen zur Verwendung

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

  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementinhalts um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementinhalts um den angegebenen Prozentsatz des {{SVGAttr("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
