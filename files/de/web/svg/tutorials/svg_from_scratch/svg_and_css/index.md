---
title: SVG und CSS
slug: Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

Diese Seite veranschaulicht die Anwendung von CSS auf die spezialisierte Sprache zur Erstellung von Grafiken: [SVG](/de/docs/Web/SVG).

Im Folgenden erstellen Sie eine Demonstration, die in einem Browser läuft.

> [!NOTE]
> Elemente, die von {{SVGElement("use")}}-Elementen referenziert werden, erben die Stile von diesem Element. Um ihnen unterschiedliche Stile zuzuweisen, sollten Sie [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables) verwenden.

## Beispiel

Erstellen Sie ein neues SVG-Dokument als einfache Textdatei, `doc8.svg`. Kopieren Sie den folgenden Inhalt und fügen Sie ihn ein. Stellen Sie sicher, dass Sie nach unten scrollen, um alles zu erfassen:

```html
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link
    xmlns="http://www.w3.org/1999/xhtml"
    rel="stylesheet"
    href="style8.css"
    type="text/css" />

  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">
    Move your mouse pointer over the flower.
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />

    <g id="outer-petals">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="inner-petals" transform="rotate(9) scale(0.33)">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

Erstellen Sie eine neue CSS-Datei, `style8.css` im selben Verzeichnis wie `doc8.svg`. Kopieren Sie den folgenden Inhalt und fügen Sie ihn ein. Stellen Sie sicher, dass Sie nach unten scrollen, um alles zu erfassen:

```css
/*** SVG demonstration ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* petals */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* outer petals */
#outer-petals {
  opacity: 0.75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

Öffnen Sie das Dokument `doc8.svg` in Ihrem SVG-fähigen Browser. Bewegen Sie Ihren Mauszeiger über die Grafik, um zu sehen, was passiert.

### Ergebnis

{{EmbedLiveSample("Example", "660", "660")}}

Hinweise zu dieser Demonstration:

- Das SVG-Dokument verbindet das Stylesheet mit dem folgenden HTML `<link>`-Tag:

  ```html
  <link rel="stylesheet" href="style8.css" type="text/css" />
  ```

  Es kann auch mit der `@import`-Regel innerhalb eines `<style>`-Tags verlinkt werden:

  ```html
  <style>
    @import url(style8.css);
  </style>
  ```

- SVG verfügt über eigene CSS-Eigenschaften und -Werte. Einige davon sind den CSS-Eigenschaften für HTML ähnlich.

### Herausforderung

Ändern Sie das Stylesheet so, dass die inneren Blütenblätter alle rosa werden, wenn der Mauszeiger über einem von ihnen schwebt, ohne die Funktionsweise der äußeren Blütenblätter zu verändern.

[Siehe eine Lösung für diese Herausforderung.](/de/docs/Learn_web_development/Core/Challenges#svg_and_css)

## Vereinfachte Struktur

Die oben gezeigte SVG-Struktur könnte viel kompakter geschrieben werden, indem die einzelnen Teile der Blume über {{SVGElement("use")}}-Elemente referenziert werden. Dieses [Verhalten ist standardisiert](https://www.w3.org/TR/SVG2/struct.html#UseStyleInheritance), obwohl nur wenige Browser derzeit die {{cssxref(":hover")}}-Pseudoklasse und andere komplexere CSS-Selektoren auf Elementen unterstützen, die über `<use>`-Elemente referenziert werden. Es gibt [einige Diskussionen darüber, welche Regeln für solche referenzierten Elemente gelten](https://github.com/w3c/svgwg/issues/504).

Im Folgenden sehen Sie, wie die Struktur dann aussieht.

```html
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link
    xmlns="http://www.w3.org/1999/xhtml"
    rel="stylesheet"
    href="style8.css"
    type="text/css" />
  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <g id="segment" class="segment">
      <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
      <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
    </g>
    <g id="quadrant">
      <use href="#segment" />
      <use href="#segment" transform="rotate(18)" />
      <use href="#segment" transform="rotate(36)" />
      <use href="#segment" transform="rotate(54)" />
      <use href="#segment" transform="rotate(72)" />
    </g>
    <g id="petals">
      <use href="#quadrant" />
      <use href="#quadrant" transform="rotate(90)" />
      <use href="#quadrant" transform="rotate(180)" />
      <use href="#quadrant" transform="rotate(270)" />
    </g>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">
    Move your mouse pointer over the flower.
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />
    <use id="outer-petals" href="#petals" />
    <use id="inner-petals" href="#petals" transform="rotate(9) scale(0.33)" />
  </g>
</svg>
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

## Was als nächstes?

In dieser Demonstration weiß Ihr SVG-fähiger Browser bereits, wie SVG-Elemente angezeigt werden sollen. Das Stylesheet verändert nur die Darstellung auf bestimmte Weise. Dies gilt auch für HTML-Dokumente. Sie können CSS jedoch für allgemeine XML-Dokumente verwenden, bei denen es keine vordefinierte Anzeigeweise der Elemente gibt. Die nächste Seite demonstriert dies: [XML Einleitung](/de/docs/Web/XML/Guides/XML_introduction)
