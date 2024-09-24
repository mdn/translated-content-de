---
title: rotate
slug: Web/SVG/Attribute/rotate
l10n:
  sourceCommit: 052d4c77d0346c43351c50de9ea5e834af365779
---

{{SVGRef}}

Das `rotate`-Attribut gibt an, wie sich das animierte Element dreht, während es einem im {{SVGElement("animateMotion")}}-Element angegebenen Pfad folgt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
      <td>No</td>
    </tr>
  </tbody>
</table>

Die Werte `auto` und `auto-reverse` ermöglichen es, dass sich die Drehung des animierten Elements dynamisch verändert, während es dem Pfad folgt. Wenn der Wert von `rotate` `auto` ist, dreht sich das Element so, dass seine rechte Seite in die aktuelle Bewegungsrichtung ausgerichtet ist. Wenn der Wert `auto-reverse` ist, dreht es seine linke Seite in die aktuelle Bewegungsrichtung.

Die Festlegung des Wertes von `rotate` auf eine Zahl gibt eine konstante Drehung in Grad an, die sich nicht mit der Animation ändert. Der Standardwert von `0` behält die ursprüngliche Ausrichtung des animierten Elements bei.

## Beispiele

### SVG

```html
<svg
  width="400"
  height="120"
  viewBox="0 0 480 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Zeichnen Sie die Umrisse des Bewegungspfads in Grau -->
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="theMotionPath" />

  <!-- Roter Pfeil, der sich nicht dreht -->
  <path fill="red" d="M-5,-5 L10,0 -5,5 0,0 Z">
    <!-- Definieren der Bewegungspfad-Animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="0">
      <mpath href="#theMotionPath" />
    </animateMotion>
  </path>

  <g transform="translate(100, 0)">
    <use href="#theMotionPath" />
    <!-- Grüner Pfeil, der sich zusammen mit dem Bewegungspfad dreht -->
    <path fill="green" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Definieren der Bewegungspfad-Animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(200, 0)">
    <use href="#theMotionPath" />
    <!-- Blauer Pfeil, der sich rückwärts entlang des Bewegungspfads dreht -->
    <path fill="blue" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Definieren der Bewegungspfad-Animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto-reverse">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(300, 0)">
    <use href="#theMotionPath" />
    <!-- Lila Pfeil, der eine statische Drehung von 210 Grad hat -->
    <path fill="purple" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Definieren der Bewegungspfad-Animation -->
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
