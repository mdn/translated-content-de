---
title: SVG-Animation mit SMIL
slug: Web/SVG/Guides/SVG_animation_with_SMIL
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

[Synchronized Multimedia Integration Language](https://www.w3.org/TR/SMIL/) (SMIL) ist eine XML-basierte Sprache zur Erstellung interaktiver Multimedia-Präsentationen. Autoren können die SMIL-Syntax in anderen XML-basierten Sprachen verwenden, um das Timing und Layout von Elementen für Animationen zu definieren.

SMIL ermöglicht Ihnen:

- numerische Attribute eines Elements zu animieren ([x](/de/docs/Web/SVG/Reference/Attribute/x), [y](/de/docs/Web/SVG/Reference/Attribute/y) usw.)
- [transform](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribute zu animieren ([translation](/de/docs/Web/SVG/Reference/Attribute/transform#translate), [rotate](/de/docs/Web/SVG/Reference/Attribute/transform#rotate) usw.)
- [color](/de/docs/Web/SVG/Reference/Attribute/color)-Attribute zu animieren
- einer Bewegungs-[path](/de/docs/Web/SVG/Reference/Element/path) zu folgen

Die folgenden Abschnitte zeigen, wie SMIL in [SVG](/de/docs/Web/SVG) für diese vier Anwendungsfälle verwendet wird.

## Attribute eines Elements animieren

Das folgende Beispiel animiert das [`cx`-Attribut](/de/docs/Web/SVG/Reference/Attribute/cx) eines Kreises. Dazu fügen wir ein {{ SVGElement("animate") }}-Element innerhalb des {{ SVGElement("circle") }}-Elements hinzu. Die wichtigen Attribute für {{ SVGElement("animate") }} sind:

- `attributeName`
  - : Der Name des zu animierenden Attributs.
- `from`
  - : Der anfängliche Wert des Attributs.
- `to`
  - : Der Endwert.
- `dur`
  - : Die Dauer der Animation (zum Beispiel, schreiben Sie '5s' für 5 Sekunden).

Wenn Sie mehr Attribute innerhalb desselben Elements animieren möchten, können Sie mehr {{ SVGElement("animate") }}-Elemente hinzufügen.

```html
<svg width="300" height="100">
  <title>Attribute Animation with SMIL</title>
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

## Animation der Transformationsattribute

Das {{ SVGElement("animateTransform") }}-Element ermöglicht die Animation von [transform](/de/docs/Web/SVG/Reference/Attribute/transform)-Attributen. Dieses Element ist notwendig, da wir kein einzelnes Attribut wie [x](/de/docs/Web/SVG/Reference/Attribute/x), das eine Zahl ist, animieren. Rotationsattribute sehen so aus: `rotation(theta, x, y)`, wobei `theta` der Winkel in Grad ist und `x` und `y` absolute Positionen sind. Im unten stehenden Beispiel animieren wir das Zentrum der Rotation und den Winkel.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with transform</title>
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

## Animation entlang eines Pfades

Das {{ SVGElement("animateMotion") }}-Element ermöglicht es Ihnen, die Position und Rotation eines Elements gemäß einem Pfad zu animieren. Der Pfad wird auf die gleiche Weise wie bei {{ SVGElement("path") }} definiert. Sie können das Attribut festlegen, um zu definieren, ob das Objekt sich dreht, indem es der Tangente des Pfads folgt.

### Beispiel 1: Lineare Bewegung

In diesem Beispiel prallt ein blauer Kreis immer wieder zwischen den linken und rechten Rändern eines schwarzen Kastens hin und her. Die Animation wird hier vom {{ SVGElement("animateMotion") }}-Element gesteuert. In diesem Fall definieren wir einen Pfad, der aus einem **MoveTo**-Befehl besteht, um den Startpunkt für die Animation festzulegen, gefolgt vom **Horizontal-line**-Befehl, um den Kreis 300 Pixel nach rechts zu bewegen, und dem **Z-Befehl**, der den Pfad schließt und somit eine Schleife erstellt, die zum Anfang zurückführt. Indem wir den Wert des **repeatCount**-Attributs auf `indefinite` setzen, zeigen wir an, dass die Animation für immer wiederholt werden soll, solange das SVG-Bild existiert.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Example_1_Linear_motion', '100%', 120) }}

[Live-Beispiel anzeigen](https://mdn.dev/archives/media/samples/svg/svganimdemo1.html)

### Beispiel 2: Gekrümmte Bewegung

Dasselbe Beispiel wie zuvor mit einem gekrümmten Pfad und der Verfolgung der Richtung des Pfades.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
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
- [SVG Animationsspezifikation](https://w3c.github.io/svgwg/svg2-draft/animate.html)
- [SMIL Spezifikation](https://www.w3.org/TR/SMIL/)
