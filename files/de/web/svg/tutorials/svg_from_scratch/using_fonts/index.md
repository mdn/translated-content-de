---
title: Schriftarten in SVG verwenden
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

SVG bietet mehrere Möglichkeiten, Schriftarten für {{SVGElement("text")}}-Elemente festzulegen.
Der heute empfohlene Ansatz ist die Verwendung von CSS, ähnlich wie bei der Gestaltung von Schriftarten in HTML.

## Eine Schriftart mit CSS anwenden und gestalten

Der folgende Code zeigt, wie Sie das angegebene `<text>`-Element mit CSS in einer bestimmten Schriftart darstellen können: in diesem Fall in der Systemschriftart „Courier New“.
Beachten Sie, dass sich das CSS hier innerhalb eines SVG-{{SVGElement("style")}}-Elements befindet, aber auch im einbindenden HTML angewendet werden könnte.

```html
<svg>
  <style>
    text {
      /* Specify the system or custom font to use */
      font-family: "Courier New", monospace;

      /* Add other styling */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Some text</text>
</svg>
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("apply_and_style_a_font_using_css", "100", "30px")}}

## Webfonts mit `@font-face` verwenden

Im vorherigen Abschnitt wird CSS verwendet, um eine Systemschriftart anzuwenden. Auf genau die gleiche Weise können Sie auch einen Webfont anwenden, der mit der {{cssxref("@font-face")}}-At-Regel festgelegt wurde.

Das Beispiel zeigt, wie eine Schriftfamilie namens „FiraSans“ zunächst definiert und anschließend verwendet wird:

```html
<svg
  viewBox="0 0 400 50"
  width="350"
  height="50"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    /* Define the font family using web fonts */
    @font-face {
      font-family: "FiraSans";
      src:
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Italic.woff2")
          format("woff2"),
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2")
          format("woff2");
    }

    /* Style the text */
    text {
      /* Specify the system or custom font to use */
      font-family: "FiraSans", sans-serif;

      /* Add other styling */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Text styled with custom font</text>
</svg>
```

{{EmbedLiveSample("Using web fonts with @font-face", "100", "70px")}}

## Einen Stil im Textelement referenzieren

Sie können einen Stil auch direkt innerhalb eines {{SVGElement("text")}}-Elements über das Attribut {{SVGAttr("font-family")}} referenzieren.
Dieser Code zeigt, wie die benutzerdefinierte Schriftart „My Font“ auf das `<text>`-Element angewendet werden kann.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Dies ähnelt der Anwendung eines Stils auf ein HTML-Element.
In manchen Fällen kann das nützlich sein, im Allgemeinen ist es jedoch besser, CSS und CSS-Selektoren zu verwenden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
