---
title: Verwenden von Schriftarten in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

SVG unterstützt mehrere Möglichkeiten, Schriftarten für {{SVGElement("text")}}-Elemente anzugeben. Der empfohlene moderne Ansatz ist die Verwendung von CSS, ähnlich wie Sie Schriftarten in HTML gestalten würden.

## Anwenden und Gestalten einer Schriftart mit CSS

Der folgende Code zeigt, wie Sie das angegebene `<text>`-Element mit einer bestimmten Schriftart mithilfe von CSS gestalten könnten: In diesem Fall die Systemschriftart "Courier New". Beachten Sie, dass das CSS hier innerhalb eines SVG-{{SVGElement("style")}}-Elements verschachtelt ist, aber auch im enthaltenen HTML angewendet werden könnte.

```html
<svg>
  <style>
    text {
      /* Specify the system or custom font to use */
      font-family: "Courier New", sans-serif;

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

{{EmbedLiveSample("Wie man eine Schriftart anwendet", "100", "30px")}}

## Verwenden von Webfonts mit `@font-face`

Der vorherige Abschnitt verwendet CSS, um eine Systemschriftart anzuwenden, aber Sie können auf genau dieselbe Weise einen Webfont anwenden, der mit der {{cssxref("@font-face")}}-Regel angegeben wird.

Das Beispiel demonstriert dies, indem zunächst eine Schriftfamilie namens "FiraSans" definiert und dann verwendet wird:

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

## Einen Stil im Textelement referenzieren

Sie können auch direkt auf einen Stil innerhalb eines {{SVGElement("text")}}-Elements verweisen, indem Sie das {{SVGAttr("font-family")}}-Attribut verwenden. Dieser Code zeigt, wie wir die benutzerdefinierte "My Font" auf das `<text>`-Element anwenden könnten.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Beachten Sie, dass dies dem Anwenden eines Stils auf ein HTML-Element ähnlich ist. Obwohl es Fälle gibt, in denen es nützlich sein kann, ist es im Allgemeinen besser, CSS und CSS-Selektoren zu verwenden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
