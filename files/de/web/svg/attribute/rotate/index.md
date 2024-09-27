---
title: rotate
slug: Web/SVG/Attribute/rotate
l10n:
  sourceCommit: 052d4c77d0346c43351c50de9ea5e834af365779
---

{{SVGRef}}

Das `rotate`-Attribut gibt an, wie sich das animierte Element dreht, während es entlang eines in einem {{SVGElement("animateMotion")}}-Element angegebenen Pfads bewegt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animateMotion")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>auto-reverse</code> |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Die Werte `auto` und `auto-reverse` ermöglichen es, dass sich die Drehung des animierten Elements dynamisch ändert, während es sich entlang des Pfads bewegt. Wenn der Wert von `rotate` auf `auto` gesetzt ist, dreht sich das Element so, dass seine rechte Seite in die aktuelle Bewegungsrichtung zeigt. Wenn der Wert `auto-reverse` ist, dreht es seine linke Seite in die aktuelle Bewegungsrichtung.

Das Festlegen eines Zahlenwerts für `rotate` spezifiziert eine konstante Drehung in Grad, die sich während der Animation nicht ändert. Der Standardwert von `0` hält das animierte Element in seiner ursprünglichen Orientierung.

## Beispiele

### SVG

```html
<svg
  width="400"
  height="120"
  viewBox="0 0 480 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Draw the outline of the motion path in grey -->
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="theMotionPath" />

  <!-- Red arrow which will not rotate -->
  <path fill="red" d="M-5,-5 L10,0 -5,5 0,0 Z">
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="0">
      <mpath href="#theMotionPath" />
    </animateMotion>
  </path>

  <g transform="translate(100, 0)">
    <use href="#theMotionPath" />
    <!-- Green arrow which will rotate along the motion path -->
    <path fill="green" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(200, 0)">
    <use href="#theMotionPath" />
    <!-- Blue arrow which will rotate backwards along the motion path -->
    <path fill="blue" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto-reverse">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(300, 0)">
    <use href="#theMotionPath" />
    <!-- Purple arrow which will have a static rotation of 210 degrees -->
    <path fill="purple" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="210">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>
</svg>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}
