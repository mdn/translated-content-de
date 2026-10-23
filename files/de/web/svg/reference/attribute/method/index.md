---
title: method
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: dc195092b071bc64c614958a1fedb316a0b57ed7
---

Das Attribut **`method`** gibt an, mit welcher Methode Text entlang des Pfads eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## textPath

Bei {{SVGElement("textPath")}} gibt `method` an, mit welcher Methode Text entlang des Pfads gerendert werden soll.

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
  - : Dieser Wert gibt an, dass die Zeichen ohne Streckung oder Verzerrung gerendert werden sollen. Beim Rendern werden die Zeichen gedreht, skaliert und verschoben. Daher kann es bei Schriftarten mit verbundenen Zeichen (z. B. Schreibschriften) vorkommen, dass die Verbindungen nicht richtig ausgerichtet sind, wenn der Text entlang des Pfads gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Zeichenkonturen in Pfade umgewandelt und anschließend gestreckt und gegebenenfalls verzerrt werden. Bei diesem Ansatz bleiben die Verbindungen zwischen verbundenen Zeichen, etwa in Schreibschriften, erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method)
