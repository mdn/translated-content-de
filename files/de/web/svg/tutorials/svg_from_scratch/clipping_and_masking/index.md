---
title: Clipping und Maskierung
slug: Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking
l10n:
  sourceCommit: a988fe7e721539634bad936da7259ffbad37d0e5
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}

Es mag zunächst widersprüchlich erscheinen, einen Teil dessen zu löschen, was Sie erstellt haben. Aber wenn Sie beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell den Nutzen der folgenden Eigenschaften erkennen:

- **Clipping**, das sich auf das Entfernen von Teilen von Elementen bezieht, die durch andere Teile definiert sind. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskierung**, die hingegen weiche Kanten ermöglicht, indem sie die Transparenz und Graustufenwerte der Maske berücksichtigt.

## Erstellen von Clippings

Wir erstellen den oben erwähnten Halbkreis basierend auf einem `circle`-Element:

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

Zentriert bei (100,100) wird ein Kreis mit einem Radius von 100 gezeichnet. Das Attribut `clip-path` verweist auf ein {{ SVGElement("clipPath") }}-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde für sich genommen die obere Hälfte der Leinwand schwarz malen. Beachten Sie, dass das `clipPath`-Element normalerweise in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gemalt. Stattdessen werden dessen Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises es in die endgültige Darstellung "schaffen". Da das Rechteck nur die obere Hälfte des Kreises abdeckt, verschwindet die untere Hälfte des Kreises:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben nun einen Halbkreis, ohne uns mit Bögen in Pfadelementen beschäftigen zu müssen. Beim Clipping wird jeder Pfad innerhalb des `clipPath` geprüft und zusammen mit dessen Stricheigenschaften und Transformation bewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden Inhalts des `clipPath` liegt, nicht gerendert. Farbe, Deckkraft und dergleichen haben keinen Effekt, solange sie Teile nicht vollständig verschwinden lassen.

## Maskierung

Der Effekt der Maskierung wird am eindrucksvollsten mit einem Gradienten präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt mit Masken recht schnell erzielen.

```html
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Sie sehen ein grün gefülltes `rect` in der untersten Schicht und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element verweist. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Gradienten gefüllt ist. Infolgedessen verwenden die Pixel des roten Rechtecks den Luminanzwert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen einen Grün-zu-Rot-Gradienten als Ergebnis:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das Attribut `opacity` ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gemalt. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jeweils die Deckkraft der jeweiligen Eigenschaft steuern. Beachten Sie, dass der Strich über der Füllung gemalt wird. Wenn Sie also einem Element, das eine Füllung hat, eine Strich-Deckkraft zuweisen, wird die Füllung durch die Hälfte des Strichs hindurchschimmern, während auf der anderen Hälfte der Hintergrund erscheint:

```html
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Sie sehen in diesem Beispiel den roten Kreis auf blauem Hintergrund. Der gelbe Strich hat eine Deckkraft von 50%, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung bekannter CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu übernehmen, zusammen mit `visibility` und `clip`, wie in CSS 2 definiert. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Anfangswert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}
