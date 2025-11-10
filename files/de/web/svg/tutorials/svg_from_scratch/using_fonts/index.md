---
title: Verwendung von Schriftarten in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

SVG unterstützt mehrere Möglichkeiten, Schriftarten für {{SVGElement("text")}}-Elemente anzugeben.
Der empfohlene moderne Ansatz besteht darin, CSS zu verwenden, ähnlich wie Sie Schriftarten in HTML gestalten würden.

## Anwenden und Gestalten einer Schriftart mit CSS

Der folgende Code zeigt, wie Sie das angegebene `<text>`-Element mit einer bestimmten Schriftart mithilfe von CSS gestalten könnten: in diesem Fall die Systemschriftart "Courier New".
Beachten Sie, dass das CSS hier innerhalb eines SVG-{{SVGElement("style")}}-Elements verschachtelt ist, aber auch im einbettenden HTML angewendet werden könnte.

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

Dies wird wie unten gezeigt gerendert:

{{EmbedLiveSample("Anwenden einer Schriftart", "100", "30px")}}

## Verwendung von Webschriften mit `@font-face`

Der vorherige Abschnitt verwendet CSS, um eine Systemschriftart anzuwenden. Sie können jedoch eine mit der {{cssxref("@font-face")}}-Regel spezifizierte Webschrift auf genau die gleiche Weise anwenden.

Das Beispiel zeigt, wie zuerst eine Schriftfamilie namens "FiraSans" definiert und dann verwendet wird:

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

{{EmbedLiveSample("Verwendung von Webschriften mit @font-face", "100", "70px")}}

## Referenzierung eines Stils im Text-Element

Sie können auch direkt auf einen Stil innerhalb eines {{SVGElement("text")}}-Elements mit dem Attribut {{SVGAttr("font-family")}} verweisen.
Dieser Code zeigt, wie wir die benutzerdefinierte "My Font" auf das `<text>`-Element anwenden könnten.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Beachten Sie, dass dies dem Anwenden von Stil auf ein HTML-Element ähnlich ist.
Während es Fälle gibt, in denen dies nützlich sein kann, ist es im Allgemeinen besser, CSS und CSS-Selektoren zu verwenden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
