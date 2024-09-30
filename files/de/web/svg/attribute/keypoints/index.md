---
title: keyPoints
slug: Web/SVG/Attribute/keyPoints
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

Das Attribut **`keyPoints`** gibt die einfache Dauer einer Animation an.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}} [; {{cssxref("number")}}]* ;?</td>
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

  - : Dieser Wert definiert eine durch Semikolons getrennte Liste von Gleitkommawerten zwischen 0 und 1 und gibt an, wie weit entlang des Bewegungspfads sich das Objekt zu dem durch den entsprechenden {{SVGAttr("keyTimes")}}-Wert angegebenen Zeitpunkt bewegen soll. Der Abstand wird entlang des vom {{SVGAttr("path")}}-Attribut angegebenen Pfades berechnet. Jeder Fortschrittswert in der Liste entspricht einem Wert in der `keyTimes`-Attributliste.

    Wenn eine Liste von Schlüsselpunkten angegeben ist, muss die `keyPoints`-Liste genau so viele Werte enthalten wie die `keyTimes`-Liste.

    Wenn sich am Ende des Wertes ein Semikolon befindet, das optional von Leerzeichen gefolgt ist, werden sowohl das Semikolon als auch die nachfolgenden Leerzeichen ignoriert.

    Sollten Fehler in der Wertangabe auftreten (z. B. ungültige Werte, zu viele oder zu wenige Werte), liegt ein Fehler vor.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
