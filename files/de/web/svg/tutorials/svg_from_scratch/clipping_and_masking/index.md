---
title: Clipping und Maskierung
slug: Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}

Es mag zunächst widersprüchlich erscheinen, einen Teil dessen, was Sie erstellt haben, zu löschen. Doch wenn Sie beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell die Verwendung der folgenden Eigenschaften erkennen:

- **Clipping**, das sich darauf bezieht, Teile von Elementen zu entfernen, die durch andere Teile definiert sind. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-nichts-Ansatz.

- **Maskierung**, die hingegen weiche Kanten ermöglicht, indem Transparenz- und Graustufenwerte der Maske berücksichtigt werden.

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

Zentriert bei (100,100) wird ein Kreis mit einem Radius von 100 gezeichnet. Das Attribut `clip-path` referenziert ein `{{ SVGElement("clipPath") }}`-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde alleine die obere Hälfte der Leinwand schwarz färben. Beachten Sie, dass das `clipPath`-Element üblicherweise in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gezeichnet. Stattdessen werden seine Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises in das endgültige Rendering "geschafft" haben. Da das Rechteck nur die obere Hälfte des Kreises abdeckt, verschwindet die untere Hälfte des Kreises:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben nun einen Halbkreis, ohne uns mit Bögen in Pfadelementen befassen zu müssen. Beim Clipping wird jeder Pfad im `clipPath` inspiziert und zusammen mit seinen Stricheigenschaften und Transformationen ausgewertet. Dann wird jeder Teil des Ziels, der sich in einem transparenten Bereich des resultierenden Inhalts des `clipPath` befindet, nicht gerendert. Farbe, Opazität und dergleichen haben keinen Einfluss, solange sie die Teile nicht vollständig verschwinden lassen.

## Maskierung

Der Effekt der Maskierung wird eindrucksvoll mit einem Farbverlauf präsentiert. Wenn Sie möchten, dass ein Element ausgeblendet wird, können Sie diesen Effekt ziemlich schnell mit Masken erzielen.

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

Sie sehen ein grün gefülltes `rect` in der untersten Schicht und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element zeigt. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Verlauf gefüllt ist. Als Ergebnis verwenden die Pixel des roten Rechtecks den Luminanzwert des Maskeninhalts als Alphawert (Transparenz), und wir sehen einen Grün-zu-Rot-Verlauf:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das `opacity`-Attribut ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gezeichnet. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jede dieser Eigenschaftsopazitäten separat steuern. Beachten Sie, dass der Strich über der Füllung gezeichnet wird. Daher wird, wenn Sie eine Strichopazität auf ein Element setzen, das auch eine Füllung hat, die Füllung an der Hälfte des Strichs durchscheinen, während am anderen Ende der Hintergrund erscheint:

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

In diesem Beispiel sehen Sie den roten Kreis auf blauem Hintergrund. Der gelbe Strich ist auf 50% Opazität gesetzt, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung bekannter CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu integrieren, zusammen mit `visibility` und `clip`, wie in CSS 2 definiert. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Initialwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}
