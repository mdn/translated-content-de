---
title: method
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

Das **`method`** Attribut gibt die Methode an, nach der Text entlang des Pfades eines {{SVGElement("textPath")}}-Elements dargestellt werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` die Methode an, nach der Text entlang des Pfades dargestellt werden soll.

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
  - : Dieser Wert gibt an, dass die Zeichen so dargestellt werden sollen, dass sie nicht gestreckt oder verzerrt werden. Die Zeichen werden gedreht, skaliert und gestreckt, wenn sie dargestellt werden. Als Ergebnis können bei Schriftarten mit verbundenen Zeichen (z.B. kursiven Schriften) die Verbindungen möglicherweise nicht korrekt ausgerichtet sein, wenn der Text entlang des Pfades dargestellt wird.
- stretch
  - : Dieser Wert gibt an, dass die Umrisse der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Mit diesem Ansatz bleiben bei verbundenen Zeichen, wie bei kursiven Schriftarten, die Verbindungen erhalten.

## Spezifikationen

{{Specifications}}
