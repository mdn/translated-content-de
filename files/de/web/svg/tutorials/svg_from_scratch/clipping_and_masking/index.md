---
title: Clippen und Maskieren
slug: Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}

Das Löschen von Teilen dessen, was Sie erstellt haben, mag zunächst widersprüchlich erscheinen. Aber wenn Sie zum Beispiel versuchen, einen Halbkreis in SVG zu erstellen, werden Sie schnell den Nutzen der folgenden Eigenschaften erkennen:

- **Clippen**, das sich auf das Entfernen von Teilen von Elementen bezieht, die durch andere Teile definiert sind. In diesem Fall sind halbdurchsichtige Effekte nicht möglich; es ist ein Alles-oder-Nichts-Ansatz.

- **Maskieren**, das auf der anderen Seite weiche Kanten ermöglicht, indem Transparenz- und Graustufenwerte der Maske berücksichtigt werden.

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

Zentriert bei (100,100) wird ein Kreis mit einem Radius von 100 gezeichnet. Das Attribut `clip-path` verweist auf ein {{ SVGElement("clipPath") }}-Element mit einem einzelnen `rect`-Element. Dieses Rechteck würde allein die obere Hälfte der Leinwand schwarz darstellen. Beachten Sie, dass das `clipPath`-Element in der Regel in einem `defs`-Abschnitt platziert wird.

Das `rect` wird jedoch nicht gezeichnet. Stattdessen werden seine Pixeldaten verwendet, um zu bestimmen, welche Pixel des Kreises in der endgültigen Wiedergabe "durchkommen". Da das Rechteck nur die obere Hälfte des Kreises abdeckt, verschwindet die untere Hälfte des Kreises:

{{ EmbedLiveSample('Creating_clips','240','240') }}

Wir haben jetzt einen Halbkreis, ohne uns mit Bögen in Pfadelementen beschäftigen zu müssen. Beim Clippen werden alle Pfade innerhalb des `clipPath` untersucht und zusammen mit ihren Stricheigenschaften und der Transformation ausgewertet. Dann wird jeder Teil des Ziels, der in einem transparenten Bereich des resultierenden Inhalts des `clipPath` liegt, nicht gerendert. Farbe, Opazität und Ähnliches haben keine Auswirkung, solange sie Teile nicht vollständig verschwinden lassen.

## Maskieren

Der Effekt des Maskierens wird am beeindruckendsten mit einem Farbverlauf präsentiert. Wenn Sie möchten, dass ein Element verblasst, können Sie diesen Effekt mit Masken ziemlich schnell erreichen.

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

Sie sehen ein grün gefülltes `rect` auf der untersten Schicht und oben ein rot gefülltes `rect`. Letzteres hat das `mask`-Attribut, das auf das `mask`-Element verweist. Der Inhalt der Maske ist ein einzelnes `rect`-Element, das mit einem Schwarz-zu-Weiß-Farbverlauf gefüllt ist. Als Ergebnis verwenden die Pixel des roten Rechtecks den Leuchtwert des Maskeninhalts als Alphawert (die Transparenz), und wir sehen als Ergebnis einen Grün-zu-Rot-Farbverlauf:

{{ EmbedLiveSample('Masking','240','240') }}

## Transparenz mit `opacity`

Das Attribut `opacity` ermöglicht Ihnen, die Transparenz für ein ganzes Element festzulegen:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Das obige Rechteck wird halbtransparent gezeichnet. Für die Füllung und den Strich gibt es zwei separate Attribute, `fill-opacity` und `stroke-opacity`, die jeweils die Opazität dieser Eigenschaften steuern. Beachten Sie, dass der Strich oben auf der Füllung gezeichnet wird. Wenn Sie daher eine Strichopazität auf einem Element festlegen, das auch eine Füllung hat, leuchtet die Füllung durch die Hälfte des Strichs hindurch, während auf der anderen Hälfte der Hintergrund erscheint:

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

Sie sehen in diesem Beispiel den roten Kreis auf blauem Hintergrund. Der gelbe Strich ist auf 50 % Opazität eingestellt, was effektiv zu einem zweifarbigen Strich führt.

## Verwendung von bekannten CSS-Techniken

Eines der mächtigsten Werkzeuge im Werkzeugkasten eines Webentwicklers ist `display: none`. Es ist daher keine Überraschung, dass beschlossen wurde, diese CSS-Eigenschaft auch in SVG zu übernehmen, zusammen mit `visibility` und `clip`, wie in CSS 2 definiert. Um ein zuvor gesetztes `display: none` rückgängig zu machen, ist es wichtig zu wissen, dass der Initialwert für alle SVG-Elemente `inline` ist.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations", "Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG") }}
