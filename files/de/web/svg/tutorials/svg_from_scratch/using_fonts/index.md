---
title: Verwendung von Schriftarten in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

SVG unterstützt mehrere Möglichkeiten, Schriftarten für {{SVGElement("text")}}-Elemente anzugeben. Der empfohlene moderne Ansatz besteht darin, CSS zu verwenden, ähnlich wie Sie Schriftarten in HTML gestalten würden.

## Eine Schriftart mit CSS anwenden und gestalten

Der folgende Code zeigt, wie Sie das angegebene `<text>`-Element mit einer bestimmten Schriftart mithilfe von CSS gestalten könnten: in diesem Fall die Systemschrift "Courier New". Beachten Sie, dass das CSS hier innerhalb eines SVG-{{SVGElement("style")}}-Elements eingebettet ist, aber auch im einbettenden HTML angewendet werden könnte.

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

Das Ergebnis wird wie folgt angezeigt:

{{EmbedLiveSample("Anleitung zur Anwendung einer Schriftart", "100", "30px")}}

## Verwendung von Webfonts mit `@font-face`

Der vorherige Abschnitt verwendet CSS, um eine Systemschrift anzuwenden, aber Sie können auch einen Webfont verwenden, der mithilfe der {{cssxref("@font-face")}}-Regel auf genau dieselbe Weise angegeben wird.

Das Beispiel zeigt, wie zunächst eine Schriftfamilie namens "FiraSans" definiert und dann verwendet wird:

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

{{EmbedLiveSample("Verwendung von Webfonts mit @font-face", "100", "70px")}}

## Verweisen auf einen Stil im Textelement

Sie können auch direkt auf einen Stil innerhalb eines {{SVGElement("text")}}-Elements unter Verwendung des {{SVGAttr("font-family")}}-Attributs verweisen. Dieser Code zeigt, wie wir die benutzerdefinierte "My Font" auf das `<text>`-Element anwenden könnten.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Beachten Sie, dass dies dem Anwenden eines Stils auf ein HTML-Element ähnlich ist. Während es Fälle gibt, in denen dies nützlich sein kann, ist es im Allgemeinen besser, CSS und CSS-Selektoren zu verwenden.

> [!NOTE]
> Das ältere SVG-Schriftformat unter Verwendung von {{ SVGElement("font") }}- und {{ SVGElement("font-face") }}-Elementen ist veraltet und sollte nicht verwendet werden. Die Verwendung von CSS bietet bessere Leistung und Kompatibilität.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
