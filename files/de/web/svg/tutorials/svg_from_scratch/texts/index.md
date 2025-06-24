---
title: Texte
slug: Web/SVG/Tutorials/SVG_from_scratch/Texts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}

Beim Sprechen über Text in SVG müssen wir zwischen zwei fast völlig getrennten Themen unterscheiden. Das eine ist die Einbeziehung und Anzeige von Text in einem Bild, und das andere sind SVG-Schriftarten. Letzteres wird in einem späteren Abschnitt des Tutorials beschrieben, während sich diese Seite auf den ersten Teil konzentriert: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Wir haben im [Einführungsbeispiel](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) gesehen, dass das `text`-Element verwendet werden kann, um beliebigen Text in SVG-Dokumente einzufügen:

```xml
<text x="10" y="10">Hello World!</text>
```

Die Attribute `x` und `y` bestimmen, wo im Viewport der Text erscheint. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welche Richtung der Text von diesem Punkt an fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem `fill`-Attribut koloriert und mit dem `stroke`-Attribut gestrichen werden. Beide können auch auf Verläufe oder Muster verweisen, was das Kolorieren von Text in SVG sehr mächtig macht.

## Festlegen von Schriftarteigenschaften

Ein wesentlicher Teil von Text ist die Schriftart, in der er angezeigt wird. SVG bietet eine Reihe von Attributen, die vielen ihrer CSS-Gegenstücke ähneln, um die Schriftauswahl zu ermöglichen. Jedes der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration gesetzt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Andere textbezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilbereiche eines größeren Textes zu markieren. Es muss ein Kind eines `text`-Elements oder eines anderen `tspan`-Elements sein. Ein typischer Anwendungsfall ist es, ein Wort eines Satzes fett und rot zu färben.

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

  - : Beginnt das Zeichnen des Textes mit einem horizontalen Offset `dx` von der standardmäßigen aktuellen Position. Auch hier können Sie eine Liste von Werten angeben, die auf aufeinanderfolgende Zeichen angewendet werden, sodass sich der Offset im Laufe der Zeit erhöht.

    Ebenso gibt es **`y`** und **`dy`** für die vertikale Verschiebung.

- `rotate`
  - : Dreht alle Zeichen um diesen Grad. Eine Liste von Zahlen lässt jedes Zeichen zu seinem jeweiligen Wert rotieren, wobei die verbleibenden Zeichen gemäß dem letzten Wert rotieren.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenkette an. Dies ist ein eher obskures Attribut, und es soll der Rendering-Engine ermöglichen, die Positionen der Glyphen fein abzustimmen, wenn ihre eigene gemessene Textlänge nicht mit der hier angegebenen übereinstimmt.

### textPath

Dieses Element ruft über sein `href`-Attribut einen beliebigen Pfad ab und richtet die es umgebenden Zeichen entlang dieses Pfades aus:

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
