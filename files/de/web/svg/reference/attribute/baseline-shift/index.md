---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 3ee333bf5e414ac81c452ec10fed7af645c96740
---

Das **`baseline-shift`**-Attribut ermöglicht die Verschiebung der dominanten Basislinie relativ zur dominanten Basislinie des übergeordneten Textelementes. Das verschobene Objekt könnte ein tief- oder hochgestellter Text sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("baseline-shift")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

> [!NOTE]
> Diese Eigenschaft wird veraltet und Autoren wird geraten, stattdessen {{cssxref("vertical-align")}} zu verwenden.

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
  - : Die dominante Basislinie wird auf die Standardposition für Tiefstellungen verschoben.
- `super`
  - : Die dominante Basislinie wird auf die Standardposition für Hochstellungen verschoben.
- `<length-percentage>`
  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementes um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Basislinie des übergeordneten Textelementes um den angegebenen Prozentsatz der {{cssxref("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
