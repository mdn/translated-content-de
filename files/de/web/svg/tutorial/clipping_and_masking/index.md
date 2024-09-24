---
title: Clipping und Maskierung
slug: Web/SVG/Tutorial/Clipping_and_masking
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}

Es mag zunächst widersprüchlich erscheinen, einen Teil dessen, was Sie erstellt haben, zu löschen. Aber wenn Sie zum Beispiel versuchen, einen Halbkreis in SVG zu erstellen, werden Sie die Verwendung der folgenden Eigenschaften schnell erkennen:

- **Clipping**, bezieht sich auf das Entfernen von Teilen von Elementen, die durch andere Teile definiert sind. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskierung**, ermöglicht hingegen weiche Kanten, indem sie Transparenz und Graustufen der Maske berücksichtigt.

## Erstellen von Clips

Wir erstellen den oben erwähnten Halbkreis basierend auf einem `circle`-Element:

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

Zentriert bei (100,100) wird ein Kreis mit Radius 100 gezeichnet. Das Attribut `clip-path` referenziert ein `{{ SVGElement("clipPath") }}`-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde für sich allein genommen die obere Hälfte der Leinwand schwarz malen. Beachten Sie, dass das `clipPath`-Element üblicherweise in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gezeichnet. Stattdessen werden die Pixelinformationen verwendet, um zu bestimmen, welche Pixel des Kreises es in die endgültige Darstellung schaffen. Da das Rechteck nur die obere Hälfte des Kreises abdeckt, wird die untere Hälfte des Kreises verschwinden:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben jetzt einen Halbkreis, ohne uns mit Bögen in Pfadelementen auseinandersetzen zu müssen. Bei der Maskierung wird jeder Pfad innerhalb des `clipPath` inspiziert und zusammen mit seinen Stricheigenschaften und Transformationen bewertet. Jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden Inhalts des `clipPath` liegt, wird nicht dargestellt. Farbe, Deckkraft und dergleichen haben keinen Einfluss, solange sie keine Teile vollständig verschwinden lassen.

## Maskierung

Der Effekt der Maskierung wird am eindrucksvollsten mit einem Farbverlauf präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt recht schnell mit Masken erzielen.

```html
<svg
  width="200"
  height="200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="black" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```

Sie sehen ein grün gefülltes `rect` auf der untersten Ebene und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element verweist. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Verlauf gefüllt ist. Dadurch verwenden die Pixel des roten Rechtecks den Luminanzwert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen einen Grün-zu-Rot-Verlauf als Ergebnis:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das `opacity`-Attribut ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gezeichnet. Für die Füllung und den Umriss gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die die Transparenzen dieser Eigenschaften jeweils separat steuern. Beachten Sie, dass der Umriss über der Füllung gezeichnet wird. Wenn Sie also eine Umrissdeckkraft bei einem Element einstellen, das auch eine Füllung hat, wird die Füllung auf der Hälfte des Umrisses durchscheinen, während auf der anderen Hälfte der Hintergrund erscheint:

```html
<svg
  width="200"
  height="200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="0" y="0" width="200" height="200" fill="blue" />
  <circle
    cx="100"
    cy="100"
    r="50"
    stroke="yellow"
    stroke-width="40"
    stroke-opacity=".5"
    fill="red" />
</svg>
```

{{ EmbedLiveSample('Transparency_with_opacity','240','240') }}

Sie sehen in diesem Beispiel den roten Kreis auf blauem Hintergrund. Der gelbe Umriss ist auf 50% Deckkraft gesetzt, was effektiv zu einem zweifarbigen Umriss führt.

## Verwendung bekannter CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu integrieren, zusammen mit `visibility` und `clip`, wie in CSS 2 definiert. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Initialwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}
