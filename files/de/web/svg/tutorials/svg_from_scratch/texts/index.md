---
title: Texte
slug: Web/SVG/Tutorials/SVG_from_scratch/Texts
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}

Beim Sprechen über Texte in SVG müssen wir zwischen zwei fast komplett getrennten Themen unterscheiden. Eines ist die Einbindung und Anzeige von Text in einem Bild, und das andere sind SVG-Schriftarten. Letzteres wird in einem späteren Abschnitt des Leitfadens beschrieben, während sich diese Seite auf den ersten Teil konzentriert: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Wir haben im [Einführungsbeispiel](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) gesehen, dass das `text`-Element verwendet werden kann, um beliebigen Text in SVG-Dokumente einzufügen:

```xml
<text x="10" y="10">Hello World!</text>
```

Die Attribute `x` und `y` bestimmen, wo im Sichtfenster der Text erscheint. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welcher Richtung der Text von diesem Punkt aus fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet über die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem `fill`-Attribut eingefärbt und mit dem `stroke`-Attribut umrandet werden. Beide können sich auch auf Verläufe oder Muster beziehen, was die Farbgestaltung von Text in SVG sehr mächtig macht.

## Schriftarteigenschaften festlegen

Ein wesentlicher Teil eines Textes ist die Schriftart, in der er angezeigt wird. SVG bietet eine Reihe von Attributen, von denen viele ihren CSS-Pendants ähneln, um die Auswahl der Schriftart zu ermöglichen. Jedes der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration gesetzt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Andere textbezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilstücke eines größeren Textes zu markieren. Es muss ein Kind eines `text`-Elements oder eines anderen `tspan`-Elements sein. Ein typischer Anwendungsfall ist, ein Wort eines Satzes fett rot zu färben.

```html
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
  <text>
    This is
    <tspan font-weight="bold" fill="red">bold and red</tspan>
  </text>

  <style>
    <![CDATA[
      text {
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('tspan', '100%', 100) }}

Das `tspan`-Element hat die folgenden benutzerdefinierten Attribute:

- `x`
  - : Setzt eine neue absolute `x`-Koordinate für den enthaltenen Text. Dies überschreibt die standardmäßige aktuelle Textposition. Das Attribut kann auch eine Liste von Zahlen enthalten, die nacheinander auf die einzelnen Zeichen des `tspan`-Elements angewendet werden.
- `dx`

  - : Beginnt das Zeichnen des Textes mit einem horizontalen Offset `dx` von der standardmäßigen aktuellen Position. Auch hier können Sie eine Liste von Werten angeben, die auf aufeinanderfolgende Zeichen angewendet werden, wodurch sich der Versatz über die Zeit summiert.

    Ebenso gibt es **`y`** und **`dy`** für vertikale Verschiebung.

- `rotate`
  - : Dreht alle Zeichen um diesen Grad. Eine Liste von Zahlen lässt jedes Zeichen auf seinen jeweiligen Wert rotieren, wobei verbleibende Zeichen gemäß dem letzten Wert rotieren.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenkette an. Dies ist ein eher obskures Attribut, das es der Rendering-Engine ermöglicht, die Positionen der Glyphen fein abzustimmen, wenn ihre eigene gemessene Textlänge nicht der hier angegebenen entspricht.

### textPath

Dieses Element ruft über sein `href`-Attribut einen beliebigen Pfad ab und richtet die Zeichen, die es umschließt, entlang dieses Pfades aus:

```html
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
  <text>
    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" href="#my_path">
      A curve.
    </textPath>
  </text>

  <style>
    <![CDATA[
      text {
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('textPath', '100%', 100) }}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}
