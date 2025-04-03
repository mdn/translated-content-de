---
title: method
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}

Das **`method`**-Attribut gibt an, auf welche Weise Text entlang des Pfades eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` an, auf welche Weise Text entlang des Pfades gerendert werden soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>align</code> | <code>stretch</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>align</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- align
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie nicht gedehnt oder verzerrt werden. Die Zeichen werden gedreht, skaliert und gedehnt, wenn sie gerendert werden. Infolgedessen können bei Schriften mit verbundenen Zeichen (z. B. Schreibschriften) die Verbindungen möglicherweise nicht richtig ausgerichtet sein, wenn Text entlang des Pfades gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Zeichenumrisse in Pfade umgewandelt und dann gedehnt und möglicherweise verzerrt werden. Mit diesem Ansatz bleiben bei verbundenen Zeichen, wie sie z. B. in Schreibschriften vorkommen, die Verbindungen erhalten.

## Spezifikationen

{{Specifications}}
