---
title: method
slug: Web/SVG/Attribute/method
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{SeeCompatTable}}

Das **`method`**-Attribut gibt die Methode an, nach der Text entlang des Pfades eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` die Methode an, nach der Text entlang des Pfades gerendert werden soll.

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
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie nicht gestreckt oder verzerrt werden. Die Zeichen werden beim Rendern gedreht, skaliert und gestreckt. Daher können sich die Verbindungen bei Schriftarten mit verbundenen Zeichen (z. B. Schreibschrift) möglicherweise nicht korrekt ausrichten, wenn der Text entlang des Pfades gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Umrisse der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Mit diesem Ansatz bleiben die Verbindungen bei verbundenen Zeichen, wie bei Schreibschriften, erhalten.

## Spezifikationen

{{Specifications}}
