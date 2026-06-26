---
title: rotate
slug: Web/SVG/Reference/Attribute/rotate
l10n:
  sourceCommit: 78b4b9da712e8189c735f4c0ca4ef443dd626be6
---

Das `rotate`-Attribut hat zwei verschiedene Verwendungen, abhängig vom Element, auf das es angewendet wird:

- Bei {{SVGElement("animateMotion")}}-Elementen bestimmt es, wie sich das animierte Element dreht, während es sich entlang eines Bewegungspfads bewegt.
- Bei {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen gibt es die Rotation für jedes Glyph im Textelement an.

Das SVG-Attribut `rotate` kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animateMotion")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## animateMotion

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

Die Werte `auto` und `auto-reverse` erlauben, dass sich die Drehung des animierten Elements dynamisch ändert, während es sich entlang des Pfads bewegt.
Wenn der Wert von `rotate` `auto` ist, dreht sich das Element, um seine rechte Seite in die aktuelle Bewegungsrichtung auszurichten.
Wenn der Wert `auto-reverse` ist, dreht es seine linke Seite in die aktuelle Bewegungsrichtung.

Eine Zahl als Wert von `rotate` festzulegen, gibt eine konstante Drehung in Grad an, die sich mit der Animation nicht ändert.
Der Standardwert von `0` hält das animierte Element in seiner ursprünglichen Ausrichtung.

## text und tspan

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
          >&#x3C;list-of-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Liste von Zahlen (durch Leerzeichen oder Kommas getrennt), die jeweils die Drehung in Grad angeben, die auf das entsprechende Glyph angewendet werden soll.
Wenn es weniger Zahlen als Glyphen gibt, wird die letzte Zahl auf alle verbleibenden Glyphen angewendet.
Wenn es mehr Zahlen als Glyphen gibt, werden die zusätzlichen Zahlen ignoriert.

Rotationswerte gelten für einzelne gerenderte visuelle Zeichen und entsprechen daher nicht immer eins-zu-eins den Eingabezeichen oder gerenderten Glyphen.
Wenn ein einzelnes visuelles Zeichen aus mehreren Glyphen besteht (wie ein Grundbuchstabe mit einem separaten Akzent-Glyph) oder wenn mehrere Eingabezeichen zu einem einzigen Glyph zusammengefasst werden (wie eine Ligatur), werden die zusammengehörenden Teile als Gruppe gedreht.
Dies ist notwendig, da eine unabhängige Drehung das Erscheinungsbild oder die Bedeutung des Zeichens verzerren würde.

## Beispiele

### Drehung entlang eines Bewegungspfads (animateMotion)

#### SVG

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

#### Ergebnis

{{EmbedLiveSample('Rotation_along_a_motion_path_animateMotion', '100%', 120)}}

### Rotation pro Glyph (text)

#### SVG

```html
<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="50" font-size="28" rotate="0 15 30 45 60 75">Hello!</text>
</svg>
```

#### Ergebnis

{{EmbedLiveSample('Per-glyph_rotation_text', '100%', 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
