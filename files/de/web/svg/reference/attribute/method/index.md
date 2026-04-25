---
title: Methode
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

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
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie weder gestreckt noch verzerrt werden. Die Zeichen werden beim Rendern gedreht, skaliert und gestreckt. Daher kann es bei Schriften mit verbundenen Zeichen (z.B. Schreibschrift) vorkommen, dass die Verbindungen nicht korrekt ausgerichtet sind, wenn der Text entlang des Pfades gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Konturen der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Mit diesem Ansatz werden verbundene Zeichen, wie sie bei Schreibschriften vorkommen, ihre Verbindungen beibehalten.

## Spezifikationen

{{Specifications}}
