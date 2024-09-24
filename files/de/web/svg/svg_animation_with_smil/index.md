---
title: SVG-Animation mit SMIL
slug: Web/SVG/SVG_animation_with_SMIL
l10n:
  sourceCommit: 207ffcdd942030c6897003085b95c408eb169ff6
---

{{SVGRef}}

[Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/) (SMIL) ist eine XML-basierte Sprache zur Erstellung von interaktiven Multimedia-Präsentationen. Autoren können die SMIL-Syntax in anderen XML-basierten Sprachen verwenden, um das Timing und Layout von Elementen für Animationen zu definieren. SMIL ermöglicht Ihnen:

- die numerischen Attribute eines Elements zu animieren ([x](/de/docs/Web/SVG/Attribute/x), [y](/de/docs/Web/SVG/Attribute/y) usw.)
- [transform](/de/docs/Web/SVG/Attribute/transform) Attribute zu animieren ([translation](/de/docs/Web/SVG/Attribute/transform#translate), [rotate](/de/docs/Web/SVG/Attribute/transform#rotate) usw.)
- [color](/de/docs/Web/SVG/Attribute/color) Attribute zu animieren
- einem Bewegungs[pfad](/de/docs/Web/SVG/Element/path) zu folgen

Die folgenden Abschnitte zeigen, wie man SMIL in [SVG](/de/docs/Web/SVG) für diese vier Anwendungsfälle verwendet.

## Attribute eines Elements animieren

Das folgende Beispiel animiert das [`cx`-Attribut](/de/docs/Web/SVG/Attribute/cx) eines Kreises. Um dies zu tun, fügen wir ein {{ SVGElement("animate") }}-Element in das {{ SVGElement("circle") }}-Element ein. Die wichtigen Attribute für {{ SVGElement("animate") }} sind:

- `attributeName`
  - : Der Name des zu animierenden Attributs.
- `from`
  - : Der Startwert des Attributs.
- `to`
  - : Der Endwert.
- `dur`
  - : Die Dauer der Animation (zum Beispiel, schreiben Sie '5s' für 5 Sekunden).

Wenn Sie mehr Attribute innerhalb desselben Elements animieren möchten, können Sie weitere {{ SVGElement("animate") }}-Elemente hinzufügen.

```html
<svg width="300" height="100">
  <title>Attribut-Animation mit SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
      attributeName="cx"
      from="0"
      to="500"
      dur="5s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Animating_attributes_of_an_element', '100%', 120) }}

## Die Transform-Attribute animieren

Das {{ SVGElement("animateTransform") }}-Element erlaubt Ihnen, [transform](/de/docs/Web/SVG/Attribute/transform) Attribute zu animieren. Dieses Element ist notwendig, weil wir nicht ein einzelnes Attribut wie [x](/de/docs/Web/SVG/Attribute/x) animieren, das eine Zahl ist. Rotationsattribute sehen so aus: `rotation(theta, x, y)`, wobei `theta` der Winkel in Grad ist und `x` und `y` absolute Positionen sind. Im folgenden Beispiel animieren wir das Zentrum der Rotation und den Winkel.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate mit transform</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="50"
    width="15"
    height="34"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateTransform
      attributeName="transform"
      begin="0s"
      dur="20s"
      type="rotate"
      from="0 60 60"
      to="360 100 60"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Animating_the_transform_attributes', '100%', 120) }}

## Animation dem Pfad folgend

Das {{ SVGElement("animateMotion") }}-Element ermöglicht es Ihnen, die Position und Rotation eines Elements entsprechend eines Pfads zu animieren. Der Pfad wird auf die gleiche Weise definiert wie in {{ SVGElement("path") }}. Sie können das Attribut setzen, um zu bestimmen, ob sich das Objekt in Übereinstimmung mit der Tangente des Pfades dreht.

### Beispiel 1: Lineare Bewegung

In diesem Beispiel prallt ein blauer Kreis wiederholt zwischen den linken und rechten Kanten eines schwarzen Kastens hin und her. Die Animation wird hier vom {{ SVGElement("animateMotion") }}-Element gesteuert. In diesem Fall legen wir einen Pfad fest, der aus einem **MoveTo** Befehl besteht, um den Startpunkt der Animation festzulegen, dann der **Horizontal-line** Befehl, um den Kreis 300 Pixel nach rechts zu bewegen, gefolgt vom **Z-Befehl**, der den Pfad schließt und den Kreis an den Anfang zurückführt. Indem wir den Wert des **repeatCount**-Attributs auf `indefinite` setzen, geben wir an, dass die Animation für immer wiederholt werden soll, solange das SVG-Bild existiert.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate mit Pfad</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Example_1_Linear_motion', '100%', 120) }}

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/svg/svganimdemo1.html)

### Beispiel 2: Gekrümmte Bewegung

Gleiches Beispiel wie zuvor mit einem gekrümmten Pfad und folgender Richtung des Pfads.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate mit Pfad</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="0"
    width="20"
    height="20"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateMotion
      path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
      dur="3s"
      repeatCount="indefinite"
      rotate="auto" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Example_2_Curved_motion', '100%', 120) }}

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- [SVG Animation Specification](https://www.w3.org/TR/SVG/animate.html)
- [SMIL Specification](https://www.w3.org/TR/REC-smil/)
