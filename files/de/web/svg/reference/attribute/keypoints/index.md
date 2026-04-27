---
title: keyPoints
slug: Web/SVG/Reference/Attribute/keyPoints
l10n:
  sourceCommit: 0866ba32ea22d8c2817e7c851c0ee82ad4aa17c8
---

Das **`keyPoints`**-Attribut gibt im Bereich [0,1] an, wie weit das Objekt entlang des Pfads für jeden zugeordneten Wert in {{SVGAttr("keyTimes")}} fortgeschritten ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="motionPath" />
  <circle cx="10" cy="110" r="3" fill="lightgrey" />
  <circle cx="110" cy="10" r="3" fill="lightgrey" />

  <circle r="5" fill="red">
    <animateMotion
      dur="3s"
      repeatCount="indefinite"
      keyPoints="0;0.5;1"
      keyTimes="0;0.15;1"
      calcMode="linear">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}} [; {{cssxref("number")}} ]* ;?</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number> [; <number>] ;?`
  - : Dieser Wert definiert eine durch Semikolons getrennte Liste von Gleitkommawerten zwischen 0 und 1 und gibt an, wie weit das Objekt zum angegebenen Zeitpunkt entlang des Bewegungspfads fortgeschritten sein soll, der durch den entsprechenden {{SVGAttr("keyTimes")}}-Wert angegeben wird. Die Entfernung wird entlang des Pfads berechnet, der durch das {{SVGAttr("path")}}-Attribut spezifiziert wird. Jeder Fortschrittswert in der Liste entspricht einem Wert in der `keyTimes`-Attributliste.

    Wenn eine Liste von Schlüsselpunkten angegeben ist, muss es in der `keyPoints`-Liste genau so viele Werte geben wie in der `keyTimes`-Liste.

    Wenn sich am Ende des Werts ein Semikolon befindet, gefolgt von optionalen Leerzeichen, werden sowohl das Semikolon als auch die nachfolgenden Leerzeichen ignoriert.

    Wenn es irgendwelche Fehler in der Wertspezifikation gibt (d.h. falsche Werte, zu viele oder zu wenige Werte), stellt dies einen Fehler dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
