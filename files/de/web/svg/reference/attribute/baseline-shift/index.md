---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`baseline-shift`** Attribut ermöglicht die Neupositionierung der dominanten Grundlinie relativ zur dominanten Grundlinie des übergeordneten Textelementes. Das verschobene Objekt könnte ein Tief- oder Hochgestelltzeichen sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Property: {{cssxref("baseline-shift")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

> [!NOTE]
> Diese Eigenschaft wird veraltet und Autoren wird empfohlen, stattdessen [`vertical-align`](/de/docs/Web/CSS/vertical-align) zu verwenden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
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
  - : Die dominante Grundlinie wird auf die Standardposition für Tiefgestelltzeichen verschoben.
- `super`
  - : Die dominante Grundlinie wird auf die Standardposition für Hochgestelltzeichen verschoben.
- `<length-percentage>`

  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Grundlinie des übergeordneten Textelementes um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Grundlinie des übergeordneten Textelementes um den angegebenen Prozentsatz der {{SVGAttr("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
