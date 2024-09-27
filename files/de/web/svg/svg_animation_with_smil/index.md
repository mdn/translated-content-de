---
title: SVG-Animation mit SMIL
slug: Web/SVG/SVG_animation_with_SMIL
l10n:
  sourceCommit: 207ffcdd942030c6897003085b95c408eb169ff6
---

{{SVGRef}}

Die [Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/) (SMIL) ist eine auf XML basierende Sprache zum Schreiben von interaktiven Multimedia-Präsentationen. Autoren können SMIL-Syntax in anderen XML-basierten Sprachen verwenden, um das Timing und das Layout von Elementen für Animationen zu definieren. SMIL erlaubt Ihnen:

- die numerischen Attribute eines Elements zu animieren ([x](/de/docs/Web/SVG/Attribute/x), [y](/de/docs/Web/SVG/Attribute/y), etc.)
- [transform](/de/docs/Web/SVG/Attribute/transform)-Attribute zu animieren ([translation](/de/docs/Web/SVG/Attribute/transform#translate), [rotate](/de/docs/Web/SVG/Attribute/transform#rotate), etc.)
- [color](/de/docs/Web/SVG/Attribute/color)-Attribute zu animieren
- einer Bewegungs[pfad](/de/docs/Web/SVG/Element/path) zu folgen

Die folgenden Abschnitte zeigen, wie man SMIL in [SVG](/de/docs/Web/SVG) für diese vier Anwendungsfälle verwendet.

## Attribute eines Elements animieren

Das folgende Beispiel animiert das [`cx`-Attribut](/de/docs/Web/SVG/Attribute/cx) eines Kreises. Dazu fügen wir ein {{ SVGElement("animate") }}-Element innerhalb des {{ SVGElement("circle") }}-Elements hinzu. Die wichtigen Attribute für {{ SVGElement("animate") }} sind:

- `attributeName`
  - : Der Name des zu animierenden Attributs.
- `from`
  - : Der Anfangswert des Attributs.
- `to`
  - : Der Endwert.
- `dur`
  - : Die Dauer der Animation (zum Beispiel '5s' für 5 Sekunden).

Wenn Sie mehr Attribute innerhalb desselben Elements animieren möchten, können Sie weitere {{ SVGElement("animate") }}-Elemente hinzufügen.

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

## Die Transformationsattribute animieren

Das {{ SVGElement("animateTransform") }}-Element ermöglicht die Animation von [transform](/de/docs/Web/SVG/Attribute/transform)-Attributen. Dieses Element ist notwendig, da wir nicht ein einzelnes Attribut wie [x](/de/docs/Web/SVG/Attribute/x) animieren, das eine Zahl ist. Rotationsattribute sehen so aus: `rotation(theta, x, y)`, wobei `theta` der Winkel in Grad ist und `x` und `y` absolute Positionen sind. Im unten stehenden Beispiel animieren wir das Zentrum der Rotation und den Winkel.

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

## Animation entlang eines Pfads

Das {{ SVGElement("animateMotion") }}-Element ermöglicht es, Position und Rotation eines Elements entsprechend einem Pfad zu animieren. Der Pfad wird auf dieselbe Weise wie in {{ SVGElement("path") }} definiert. Sie können das Attribut setzen, um festzulegen, ob das Objekt der Tangente des Pfads folgen soll.

### Beispiel 1: Lineare Bewegung

In diesem Beispiel prallt ein blauer Kreis zwischen den linken und rechten Rändern eines schwarzen Kastens wiederholt hin und her, unendlich oft. Die Animation wird hier durch das {{ SVGElement("animateMotion") }}-Element gesteuert. In diesem Fall legen wir einen Pfad an, der aus einem **MoveTo**-Befehl besteht, um den Startpunkt der Animation festzulegen, dann den **Horizontal-line**-Befehl, um den Kreis 300 Pixel nach rechts zu bewegen, gefolgt vom **Z-Befehl**, der den Pfad schließt und eine Schleife zurück zum Anfang bildet. Indem wir den Wert des **repeatCount**-Attributs auf `indefinite` setzen, geben wir an, dass die Animation für immer wiederholt werden soll, solange das SVG-Bild existiert.

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

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/svg/svganimdemo1.html)

### Beispiel 2: Kurvenbewegung

Dasselbe Beispiel wie zuvor, jedoch mit einem gekrümmten Pfad und der Ausrichtung entlang der Richtung des Pfads.

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
- [SVG-Animationsspezifikation](https://www.w3.org/TR/SVG/animate.html)
- [SMIL-Spezifikation](https://www.w3.org/TR/REC-smil/)
