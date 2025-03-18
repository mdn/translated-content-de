---
title: Methode
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{SeeCompatTable}}

Das **`method`**-Attribut gibt an, auf welche Weise der Text entlang des Pfads eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` an, auf welche Weise der Text entlang des Pfads gerendert werden soll.

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
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie nicht gestreckt oder verzerrt werden. Die Zeichen werden beim Rendern gedreht, skaliert und gestreckt. Somit kann es bei Schriften mit verbundenen Zeichen (z.B. Schreibschriften) dazu kommen, dass die Verbindungen beim Rendern entlang des Pfads nicht richtig ausgerichtet sind.
- stretch
  - : Dieser Wert gibt an, dass die Umrisse der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Bei dieser Herangehensweise bleiben die Verbindungen bei verbundenen Zeichen, wie in Schreibschriften, erhalten.

## Spezifikationen

{{Specifications}}
