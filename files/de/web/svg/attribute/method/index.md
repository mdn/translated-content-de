---
title: method
slug: Web/SVG/Attribute/method
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{SeeCompatTable}}

Das **`method`**-Attribut zeigt die Methode an, nach der Text entlang des Pfades eines {{SVGElement("textPath")}}-Elements gerendert werden soll.

Dieses Attribut kann mit folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}

## textPath

Für {{SVGElement("textPath")}} gibt `method` an, welche Methode verwendet wird, um Text entlang des Pfades zu rendern.

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
  - : Dieser Wert gibt an, dass die Zeichen so gerendert werden sollen, dass sie nicht gestreckt oder verzerrt sind. Die Zeichen werden rotiert, skaliert und gestreckt, wenn sie gerendert werden. Dies kann zur Folge haben, dass bei Schriften mit verbundenen Zeichen (z. B. Kursivschriften) die Verbindungen möglicherweise nicht richtig ausgerichtet sind, wenn Text entlang des Pfades gerendert wird.
- stretch
  - : Dieser Wert gibt an, dass die Konturen der Zeichen in Pfade umgewandelt und dann gestreckt und möglicherweise verzerrt werden. Bei diesem Ansatz bleiben verbundene Zeichen, wie in Kursivschriften, erhalten.

## Spezifikationen

{{Specifications}}
