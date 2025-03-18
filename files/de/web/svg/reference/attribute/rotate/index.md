---
title: rotate
slug: Web/SVG/Reference/Attribute/rotate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das `rotate`-Attribut legt fest, wie das animierte Element rotiert, während es entlang eines im {{SVGElement("animateMotion")}}-Element angegebenen Pfades reist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animateMotion")}}

## Anwendungshinweise

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

Die Werte `auto` und `auto-reverse` ermöglichen es, dass sich die Rotation des animierten Elements dynamisch ändert, während es entlang des Pfades reist. Wenn der Wert von `rotate` `auto` ist, dreht sich das Element so, dass seine rechte Seite in die aktuelle Bewegungsrichtung zeigt. Wenn der Wert `auto-reverse` ist, dreht sich die linke Seite in die aktuelle Bewegungsrichtung.

Die Einstellung des `rotate`-Wertes auf eine Zahl gibt eine konstante Rotation in Grad an, die sich mit der Animation nicht ändert. Der Standardwert von `0` behält das animierte Element in seiner ursprünglichen Ausrichtung.

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
