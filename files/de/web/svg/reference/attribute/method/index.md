---
title: method
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

Das **`method`**-Attribut gibt die Methode an, mit der Text entlang des Pfades eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` die Methode an, mit der Text entlang des Pfades gerendert werden soll.

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
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie nicht gestreckt oder verzerrt werden. Die Zeichen werden gedreht, skaliert und gestreckt, wenn sie gerendert werden. Als Ergebnis können bei Schriftarten mit verbundenen Zeichen (z. B. kursiven Schriften) die Verbindungen nicht richtig ausgerichtet sein, wenn der Text entlang des Pfades gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Konturen der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Mit diesem Ansatz bleiben verbundene Zeichen, wie bei kursiven Schriften, in ihren Verbindungen erhalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method)
