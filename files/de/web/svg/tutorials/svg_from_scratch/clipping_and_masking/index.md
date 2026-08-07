---
title: Zuschneiden und Maskieren
slug: Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}

Das Entfernen eines Teils des Erstellten mag zunächst widersprüchlich erscheinen. Wenn Sie jedoch beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell den Nutzen der folgenden Eigenschaften erkennen:

- **Zuschneiden** bezieht sich auf das Entfernen von Teilen von Elementen, die durch andere Teile definiert werden. In diesem Fall sind halbtransparente Effekte nicht möglich; es handelt sich um einen Alles-oder-Nichts-Ansatz.

- **Maskieren** dagegen ermöglicht weiche Kanten, indem es Transparenz- und Graustufenwerte der Maske berücksichtigt.

## Erstellen von Zuschnitten

Wir erstellen den oben genannten Halbkreis basierend auf einem `circle`-Element:

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

Zentriert bei (100,100) wird ein Kreis mit Radius 100 gemalt. Das Attribut `clip-path` referenziert ein {{ SVGElement("clipPath") }}-Element mit einem einzelnen `rect`-Element. Dieses Rechteck allein würde die obere Hälfte der Leinwand schwarz färben. Beachten Sie, dass das `clipPath`-Element normalerweise in einem `defs`-Bereich platziert wird.

Das `rect` wird jedoch nicht gemalt. Stattdessen werden seine Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises in das endgültige Rendering "geschafft" werden. Da das Rechteck nur die obere Hälfte des Kreises abdeckt, wird die untere Hälfte des Kreises verschwinden:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben nun einen Halbkreis, ohne uns mit Bögen in Pfadelementen auseinandersetzen zu müssen. Für das Zuschneiden wird jeder Pfad innerhalb des `clipPath` inspiziert und zusammen mit seinen Stricheigenschaften und Transformationen ausgewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden Inhalts des `clipPath` liegt, nicht gerendert. Farbe, Opazität und dergleichen haben keinen Einfluss, solange sie Teile nicht vollständig verschwinden lassen.

## Maskieren

Der Effekt des Maskierens wird am eindrucksvollsten mit einem Verlauf präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt mit Masken schnell erreichen.

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
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

Sie sehen ein grün gefülltes `rect` in der untersten Ebene und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element verweist. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Verlauf gefüllt ist. Infolgedessen verwenden die Pixel des roten Rechtecks den Helligkeitswert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen als Ergebnis einen Grün-zu-Rot-Verlauf:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das Attribut `opacity` erlaubt es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obenstehende Rechteck wird halb transparent gemalt. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die die Opazität dieser Eigenschaften jeweils separat steuern. Beachten Sie, dass der Strich über der Füllung gemalt wird. Wenn Sie also eine Strichopazität bei einem Element einstellen, das auch eine Füllung hat, wird die Füllung auf der Hälfte des Strichs durchscheinen, während auf der anderen Hälfte der Hintergrund erscheint:

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
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

Sie sehen in diesem Beispiel den roten Kreis auf blauem Hintergrund. Der gelbe Strich ist auf 50% Opazität gesetzt, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung bekannter CSS-Techniken

Eines der leistungsstärksten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass entschieden wurde, diese CSS-Eigenschaft auch in SVG zu übernehmen, zusammen mit `visibility` und `clip`, wie sie von CSS 2 definiert wurden. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Standardwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}
