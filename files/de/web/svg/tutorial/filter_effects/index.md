---
title: Filtereffekte
slug: Web/SVG/Tutorial/Filter_effects
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}

Es gibt Situationen, in denen grundlegende Formen nicht die Flexibilität bieten, die Sie benötigen, um einen bestimmten Effekt zu erzielen. Schlagschatten, um ein beliebtes Beispiel zu nennen, können nicht vernünftig mit einer Kombination aus Verläufen erstellt werden. Filter sind SVG's Mechanismus, um anspruchsvolle Effekte zu erzeugen.

Ein grundlegendes Beispiel ist das Hinzufügen eines Weichzeichnungseffekts zu SVG-Inhalten. Während grundlegende Unschärfen mit Hilfe von Verläufen erreicht werden können, ist der Unschärfefilter erforderlich, um darüber hinauszugehen.

## Beispiel

Filter werden durch das {{SVGElement('filter')}} Element definiert, das in den `<defs>`-Abschnitt Ihrer SVG-Datei eingefügt werden sollte. Zwischen den Filter-Tags steht eine Liste von _Primitives_: grundlegende Operationen, die auf den vorherigen Operationen aufbauen (wie Weichzeichnen, Hinzufügen eines Lichteffekts, etc.). Um Ihren erstellten Filter auf ein grafisches Element anzuwenden, setzen Sie das {{SVGAttr('filter')}} Attribut.

```html
<svg
  width="250"
  viewBox="0 0 200 85"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <defs>
    <!-- Filterdeklaration -->
    <filter
      id="MyFilter"
      filterUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="120">
      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

      <!-- litPaint -->
      <feSpecularLighting
        in="blur"
        surfaceScale="5"
        specularConstant=".75"
        specularExponent="20"
        lighting-color="#bbbbbb"
        result="specOut">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite
        in="specOut"
        in2="SourceAlpha"
        operator="in"
        result="specOut" />
      <feComposite
        in="SourceGraphic"
        in2="specOut"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litPaint" />

      <!-- offsetBlur + litPaint zusammenführen -->
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="litPaint" />
      </feMerge>
    </filter>
  </defs>

  <!-- Grafische Elemente -->
  <g filter="url(#MyFilter)">
    <path
      fill="none"
      stroke="#D90000"
      stroke-width="10"
      d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
    <path
      fill="#D90000"
      d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
    <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
      <text x="52" y="52">SVG</text>
    </g>
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '100%', 120) }}

### Schritt 1

```html
<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
```

{{SVGElement('feGaussianBlur')}} nimmt `in` "SourceAlpha", das der Alpha-Kanal der Ausgangsgrafik ist; wendet eine Unschärfe von 4 an; und speichert das `result` in einem temporären Puffer namens "blur".

### Schritt 2

```html
<feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
```

{{SVGElement('feOffset')}} nimmt `in` "blur", was wir zuvor erstellt haben; verschiebt das Ergebnis um "4" nach rechts und "4" nach unten; und speichert das `result` im Puffer "offsetBlur". Die beiden ersten Primitives haben gerade einen Schlagschatten erzeugt.

### Schritt 3

```html
<feSpecularLighting
  in="offsetBlur"
  surfaceScale="5"
  specularConstant=".75"
  specularExponent="20"
  lighting-color="#bbbbbb"
  result="specOut">
  <fePointLight x="-5000" y="-10000" z="20000" />
</feSpecularLighting>
```

{{SVGelement('feSpecularLighting')}} nimmt `in` "offsetBlur", erzeugt einen Lichteffekt und speichert das `result` im Puffer "specOut".

### Schritt 4

```html
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
```

Der erste {{SVGElement('feComposite')}} nimmt `in` "specOut" und "SourceAlpha", maskiert das Ergebnis von "specOut", sodass das Ergebnis nicht größer als "SourceAlpha" (die ursprüngliche Ausgangsgrafik) ist, und überschreibt das `result` "specOut".

### Schritt 5

```html
<feComposite
  in="SourceGraphic"
  in2="specOut"
  operator="arithmetic"
  k1="0"
  k2="1"
  k3="1"
  k4="0"
  result="litPaint" />
```

Der zweite {{SVGElement('feComposite')}} nimmt `in` "SourceGraphic" und "specOut", fügt das Ergebnis von "specOut" über "SourceGraphic" hinzu und speichert das `result` in "litPaint".

### Schritt 6

```html
<feMerge>
  <feMergeNode in="offsetBlur" />
  <feMergeNode in="litPaint" />
</feMerge>
```

Schließlich kombiniert {{SVGElement('feMerge')}} "offsetBlur", welches der Schlagschatten ist, und "litPaint", welches die Originalgrafik mit einem Lichteffekt ist.

![Ausgangsgrafik](filters01-0.png)

Ausgangsgrafik

![Primitive 1](filters01-1.png)

Primitive 1

![Primitive 2](filters01-2.png)

Primitive 2

![Primitive 3](filters01-3.png)

Primitive 3

![Primitive 4](filters01-4.png)

Primitive 4

![Primitive 5](filters01-5.png)

Primitive 5

![Primitive 6](filters01-6.png)

Primitive 6

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}