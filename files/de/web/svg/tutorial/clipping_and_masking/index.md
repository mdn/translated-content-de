---
title: Clipping und Maskierung
slug: Web/SVG/Tutorial/Clipping_and_masking
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}

Das Entfernen eines Teils dessen, was Sie erstellt haben, mag auf den ersten Blick widersprüchlich erscheinen. Wenn Sie jedoch beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell die Verwendung der folgenden Eigenschaften verstehen:

- **Clipping**, das sich auf das Entfernen von Teilen von Elementen durch andere Teile bezieht. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskierung**, die hingegen weiche Kanten ermöglicht, indem die Transparenz- und Graustufenwerte der Maske berücksichtigt werden.

## Clips erstellen

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

Zentriert bei (100,100) wird ein Kreis mit einem Radius von 100 gezeichnet. Das Attribut `clip-path` verweist auf ein `{{ SVGElement("clipPath") }}`-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde für sich genommen die obere Hälfte der Leinwand schwarz malen. Beachten Sie, dass das `clipPath`-Element üblicherweise in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gemalt. Stattdessen werden seine Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises im endgültigen Rendering erscheinen. Da das Rechteck nur die obere Hälfte des Kreises abdeckt, verschwindet die untere Hälfte des Kreises:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Jetzt haben wir einen Halbkreis, ohne uns mit Bögen in Pfadelementen auseinandersetzen zu müssen. Für das Clipping wird jeder Pfad im `clipPath` überprüft und zusammen mit seinen Stricheigenschaften und Transformationen ausgewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden `clipPath`-Inhalts liegt, nicht gerendert. Farbe, Deckkraft und dergleichen haben keinen Effekt, solange sie Teile nicht vollständig verschwinden lassen.

## Maskierung

Der Effekt der Maskierung wird am eindrucksvollsten mit einem Farbverlauf präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt ziemlich schnell mit Masken erreichen.

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

Sie sehen ein grün gefülltes `rect` in der untersten Ebene und darüber ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element zeigt. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Verlauf gefüllt ist. Dadurch verwenden die Pixel des roten Rechtecks den Helligkeitswert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen einen Grün-zu-Rot-Verlauf als Ergebnis:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das Attribut `opacity` ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gemalt. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jeweils die Deckkraft dieser Eigenschaften steuern. Beachten Sie, dass der Strich über der Füllung gemalt wird. Wenn Sie also eine Strichdeckung auf einem Element setzen, das auch eine Füllung hat, wird die Füllung auf die Hälfte des Strichs durchscheinen, während auf der anderen Hälfte der Hintergrund erscheint:

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

In diesem Beispiel sehen Sie den roten Kreis auf einem blauen Hintergrund. Der gelbe Strich ist auf 50% Deckkraft gesetzt, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung bekannter CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu integrieren, zusammen mit `visibility` und `clip`, wie sie von CSS 2 definiert wurden. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Initialwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}
