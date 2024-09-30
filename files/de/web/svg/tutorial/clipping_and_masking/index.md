---
title: Clipping und Maskieren
slug: Web/SVG/Tutorial/Clipping_and_masking
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}

Das Löschen eines Teils dessen, was Sie erstellt haben, mag zunächst widersprüchlich erscheinen. Aber wenn Sie beispielsweise versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell den Nutzen der folgenden Eigenschaften erkennen:

- **Clipping**, das sich auf das Entfernen von Teilen von Elementen bezieht, die durch andere Teile definiert sind. In diesem Fall sind halbtransparente Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskieren**, das hingegen weiche Kanten durch Berücksichtigung der Transparenz und Graustufen der Maske ermöglicht.

## Clips erstellen

Wir erstellen den oben erwähnten Halbkreis basierend auf einem `circle` Element:

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

Zentriert bei (100,100), wird ein Kreis mit Radius 100 gemalt. Das Attribut `clip-path` referenziert ein `{{ SVGElement("clipPath") }}` Element mit einem einzelnen `rect` Element. Dieses Rechteck würde allein die obere Hälfte der Leinwand schwarz malen. Beachten Sie, dass das `clipPath` Element üblicherweise in einem `defs` Abschnitt platziert wird.

Das `rect` wird jedoch nicht gemalt. Stattdessen werden seine Pixel-Daten verwendet, um zu bestimmen, welche Pixel des Kreises es in das endgültige Rendering "schaffen". Da das Rechteck nur die obere Hälfte des Kreises abdeckt, wird die untere Hälfte des Kreises verschwinden:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben nun einen Halbkreis, ohne Bögen in Pfadelementen zu verwenden. Für das Clipping wird jeder Pfad im `clipPath` inspiziert und zusammen mit seinen Stricheigenschaften und Transformationen ausgewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden `clipPath` Inhalts liegt, nicht gerendert. Farbe, Opazität und dergleichen haben keinen Einfluss, solange sie Teile nicht vollständig verschwinden lassen.

## Maskieren

Der Effekt des Maskierens wird am beeindruckendsten mit einem Farbverlauf präsentiert. Wenn Sie möchten, dass ein Element ausblendet, können Sie diesen Effekt recht schnell mit Masken erzielen.

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

Sie sehen ein grün gefülltes `rect` in der untersten Ebene und darüber ein rot gefülltes `rect`. Letzteres hat das `mask` Attribut, das auf das `mask` Element verweist. Der Inhalt der Maske ist ein einziges `rect` Element, das mit einem schwarz-zu-weiß Farbverlauf gefüllt ist. Infolgedessen verwenden die Pixel des roten Rechtecks den Luminanzwert des Maskeninhalts als Alpha-Wert (die Transparenz), und wir sehen einen grün-zu-rot Farbverlauf als Ergebnis:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das `opacity` Attribut ermöglicht es Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gemalt. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jeweils die Opazitäten dieser Eigenschaften separat steuern. Beachten Sie, dass der Strich über die Füllung gemalt wird. Wenn Sie daher eine Strichopazität auf ein Element gesetzt haben, das auch eine Füllung hat, wird die Füllung auf der Hälfte des Strichs durchscheinen, während auf der anderen Hälfte der Hintergrund erscheint:

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

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu übernehmen, zusammen mit `visibility` und `clip` wie in CSS 2 definiert. Für das Zurücksetzen eines zuvor gesetzten `display: none` ist es wichtig zu wissen, dass der Initialwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}
