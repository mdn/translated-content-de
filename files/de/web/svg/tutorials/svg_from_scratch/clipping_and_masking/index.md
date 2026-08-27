---
title: Zuschneiden und Maskieren
slug: Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}

Es scheint zunächst widersprüchlich, einen Teil dessen, was Sie erstellt haben, zu löschen. Aber wenn Sie beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell feststellen, dass die folgenden Eigenschaften nützlich sind:

- **Zuschneiden**, was sich auf das Entfernen von Teilen von Elementen bezieht, die durch andere Teile definiert werden. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskieren**, das hingegen weiche Kanten ermöglicht, indem es Transparenz und Grautöne der Maske berücksichtigt.

## Erstellen von Clips

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

Zentriert bei (100,100) wird ein Kreis mit Radius 100 gezeichnet. Das Attribut `clip-path` verweist auf ein {{ SVGElement("clipPath") }}-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde auf seiner eigenen den oberen Teil der Leinwand schwarz malen. Beachten Sie, dass das `clipPath`-Element normalerweise in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gemalt. Stattdessen werden seine Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises es in die endgültige Darstellung "schaffen". Da das Rechteck nur den oberen Teil des Kreises abdeckt, verschwindet der untere Teil des Kreises:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben nun einen Halbkreis, ohne uns mit Bögen in Pfadelementen befassen zu müssen. Beim Zuschneiden wird jeder Pfad im `clipPath` untersucht und zusammen mit seinen Stricheigenschaften und Transformationen ausgewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden Inhalts des `clipPath` liegt, nicht gerendert. Farbe, Deckkraft und dergleichen haben keine Wirkung, solange sie keine Teile vollständig verschwinden lassen.

## Maskieren

Der Effekt des Maskierens wird am eindrucksvollsten mit einem Verlauf präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt ziemlich schnell mit Masken erzielen.

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

Sie sehen ein grün gefülltes `rect` auf der untersten Ebene und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element zeigt. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Verlauf gefüllt ist. Dadurch verwenden die Pixel des roten Rechtecks den Helligkeitswert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen als Ergebnis einen Grün-zu-Rot-Verlauf:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das `opacity`-Attribut ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gezeichnet. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jede der Eigentumsopazitäten separat steuern. Beachten Sie, dass der Strich über der Füllung gezeichnet wird. Daher, wenn Sie eine Strichopazität auf einem Element einstellen, das auch eine Füllung hat, wird die Füllung durch die Hälfte des Strichs hindurchscheinen, während auf der anderen Hälfte der Hintergrund erscheint:

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

Sie sehen in diesem Beispiel den roten Kreis auf blauem Hintergrund. Der gelbe Strich ist auf 50% Transparenz gesetzt, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung bekannter CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu übernehmen, zusammen mit `visibility` und `clip`, wie in CSS 2 definiert. Um eine zuvor gesetzte `display: none` wieder rückgängig zu machen, ist es wichtig zu wissen, dass der Anfangswert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}
