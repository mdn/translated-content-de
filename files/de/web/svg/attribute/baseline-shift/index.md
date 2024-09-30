---
title: baseline-shift
slug: Web/SVG/Attribute/baseline-shift
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut **`baseline-shift`** ermöglicht die Verschiebung der dominanten Basislinie relativ zur dominanten Basislinie des übergeordneten Textelementinhalts. Das verschobene Objekt könnte ein Sub- oder Superscript sein.

> [!NOTE]
> Als Präsentationsattribut kann `baseline-shift` auch als CSS-Eigenschaft verwendet werden.

> [!NOTE]
> Diese Eigenschaft wird veraltet und Autoren wird geraten, stattdessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) zu verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Anwendungshinweise

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
  - : Die dominante Basislinie wird auf die Standardposition für Tiefstellungen verschoben.
- `super`
  - : Die dominante Basislinie wird auf die Standardposition für Hochstellungen verschoben.
- `<length-percentage>`

  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementinhalts um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementinhalts um den angegebenen Prozentsatz der {{SVGAttr("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
