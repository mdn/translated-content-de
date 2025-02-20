---
title: Verwendung von Schriftarten in SVG
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 230f3d958fe413fd1c0b62ac6242b49e0e2d9f19
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

SVG unterstützt mehrere Möglichkeiten, Schriftarten für {{SVGElement("text")}}-Elemente festzulegen. Der empfohlene moderne Ansatz ist die Verwendung von CSS, ähnlich wie Sie Schriftarten in HTML gestalten würden.

## Eine Schriftart mit CSS anwenden und gestalten

Der folgende Code zeigt, wie Sie das angegebene `<text>`-Element mit einer bestimmten Schriftart mithilfe von CSS gestalten können: in diesem Fall die Systemschriftart "Courier New". Beachten Sie, dass das CSS hier in einem SVG-{{SVGElement("style")}}-Element eingebettet ist, aber auch im eingebetteten HTML angewendet werden könnte.

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

Dies wird wie unten dargestellt gerendert:

{{EmbedLiveSample("Wie man eine Schriftart anwendet", "100", "30px")}}

## Verwenden von Web-Schriftarten mit `@font-face`

Im vorherigen Abschnitt wurde CSS verwendet, um eine Systemschriftart anzuwenden. Sie können jedoch auch eine Web-Schriftart verwenden, die mit der {{cssxref("@font-face")}}-At-Regel definiert wurde, und dies auf genau die gleiche Weise.

Das Beispiel zeigt, wie zuerst eine Schriftfamilie namens "FiraSans" definiert und anschließend verwendet wird:

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

{{EmbedLiveSample("Web-Schriftarten mit @font-face verwenden", "100", "70px")}}

## Verweisen auf eine Stilangabe im Textelement

Sie können auch direkt auf eine Stilangabe innerhalb eines {{SVGElement("text")}}-Elements verweisen, indem Sie das {{SVGAttr("font-family")}}-Attribut verwenden. Dieser Code zeigt, wie wir die benutzerdefinierte Schriftart "My Font" auf das `<text>`-Element anwenden könnten.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Beachten Sie, dass dies dem Anwenden eines Stils auf ein HTML-Element ähnelt. Während es Situationen gibt, in denen dies nützlich sein kann, ist es im Allgemeinen besser, CSS und CSS-Selektoren zu verwenden.

> [!NOTE]
> Das ältere SVG-Schriftformat, das {{ SVGElement("font") }}- und {{ SVGElement("font-face") }}-Elemente verwendet, ist veraltet und sollte nicht mehr verwendet werden. Die Verwendung von CSS bietet bessere Leistung und Kompatibilität.

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
