---
title: Texte
slug: Web/SVG/Tutorial/Texts
l10n:
  sourceCommit: 29d6027a92c08ee23da65755a190e1b7944fa0e8
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

Wenn wir über Text in SVG sprechen, müssen wir zwischen zwei fast vollständig getrennten Themen unterscheiden. Das eine ist die Einbindung und Darstellung von Text in einem Bild, das andere sind SVG-Schriften. Letztere werden in einem späteren Abschnitt des Tutorials beschrieben, während sich diese Seite auf den ersten Teil konzentriert: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Im [Einführungsbeispiel](/de/docs/Web/SVG/Tutorial/Getting_Started) haben wir gesehen, dass das `text`-Element verwendet werden kann, um beliebigen Text in SVG-Dokumente einzufügen:

```xml
<text x="10" y="10">Hello World!</text>
```

Die Attribute `x` und `y` bestimmen, wo im Viewport der Text erscheint. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welche Richtung der Text von diesem Punkt fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet über die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem `fill`-Attribut koloriert und mit dem `stroke`-Attribut umrandet werden. Beide können sich auch auf Verläufe oder Muster beziehen, was das einfache Einfärben von Text in SVG im Vergleich zu CSS 2.1 sehr leistungsfähig macht.

## Festlegen von Schrifteigenschaften

Ein wesentlicher Bestandteil eines Textes ist die Schrift, in der er angezeigt wird. SVG bietet eine Reihe von Attributen, die vielen ihrer CSS-Gegenstücke ähneln, um die Schriftauswahl zu ermöglichen. Jedes der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration gesetzt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Weitere textelementbezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilbereiche eines größeren Textes zu markieren. Es muss ein Kind eines `text`-Elements oder eines anderen `tspan`-Elements sein. Ein typischer Anwendungsfall ist, ein Wort eines Satzes fett rot zu färben.

```html
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
  <text>
    This is
    <tspan font-weight="bold" fill="red">bold and red</tspan>
  </text>

  <style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('tspan', '100%', 100) }}

Das `tspan`-Element hat folgende spezielle Attribute:

- `x`
  - : Setzt eine neue absolute `x`-Koordinate für den enthaltenen Text. Dies überschreibt die standardmäßige aktuelle Textposition. Das Attribut kann auch eine Liste von Zahlen enthalten, die nacheinander auf die einzelnen Zeichen des `tspan`-Elements angewendet werden.
- `dx`

  - : Beginnt mit dem Zeichnen des Textes mit einem horizontalen Offset `dx` von der standardmäßigen aktuellen Position aus. Auch hier können Sie eine Liste von Werten bereitstellen, die auf aufeinanderfolgende Zeichen angewendet werden und so den Offset im Laufe der Zeit aufbauen.

  In ähnlicher Weise gibt es **`y`** und **`dy`** für die vertikale Verschiebung.

- `rotate`
  - : Rotiert alle Zeichen um diesen Grad. Eine Liste von Zahlen bewirkt, dass jedes Zeichen auf seinen jeweiligen Wert rotiert wird, wobei verbleibende Zeichen gemäß dem letzten Wert rotieren.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenkette an. Dies ist ein eher undurchsichtiges Attribut und soll der Rendering-Engine ermöglichen, die Positionen der Glyphen fein abzustimmen, wenn ihre eigene gemessene Textlänge nicht mit der hier angegebenen übereinstimmt.

### textPath

Dieses Element ruft über sein `href`-Attribut einen beliebigen Pfad ab und richtet die Zeichen, die es umgibt, entlang dieses Pfades aus:

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
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('textPath', '100%', 100) }}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}
