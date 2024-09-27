---
title: Texte
slug: Web/SVG/Tutorial/Texts
l10n:
  sourceCommit: 29d6027a92c08ee23da65755a190e1b7944fa0e8
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

Wenn wir über Text in SVG sprechen, müssen wir zwischen zwei fast völlig getrennten Themen unterscheiden. Das eine ist die Einbindung und Anzeige von Text in einem Bild, und das andere sind SVG-Schriften. Letzteres wird in einem späteren Abschnitt des Tutorials beschrieben, während sich diese Seite auf den ersten Teil konzentriert: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Wir haben im [einführenden Beispiel](/de/docs/Web/SVG/Tutorial/Getting_Started) gesehen, dass das `text` Element verwendet werden kann, um beliebigen Text in SVG-Dokumente einzufügen:

```xml
<text x="10" y="10">Hello World!</text>
```

Die `x` und `y` Attribute bestimmen, wo im Ansichtsfenster der Text erscheint. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welche Richtung der Text von diesem Punkt fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet über die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem Attribut `fill` koloriert und mit dem Attribut `stroke` mit einer Kontur versehen werden. Beide können sich auch auf Verläufe oder Muster beziehen, was das einfache Kolorieren von Text in SVG im Vergleich zu CSS 2.1 sehr leistungsstark macht.

## Schriftarteigenschaften festlegen

Ein wesentlicher Bestandteil eines Textes ist die Schriftart, in der er angezeigt wird. SVG bietet eine Reihe von Attributen, viele davon ähnlich wie ihre CSS-Pendants, um die Schriftartauswahl zu ermöglichen. Jede der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration gesetzt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Weitere textebezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilstücke eines größeren Textes zu markieren. Es muss ein Kind eines `text` Elements oder eines anderen `tspan` Elements sein. Ein typischer Anwendungsfall ist, ein Wort eines Satzes fett in Rot zu malen.

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

Das `tspan` Element hat die folgenden benutzerdefinierten Attribute:

- `x`
  - : Setzt eine neue absolute `x` Koordinate für den enthaltenen Text. Dies überschreibt die standardmäßige aktuelle Textposition. Das Attribut kann auch eine Liste von Zahlen enthalten, die nacheinander auf die einzelnen Zeichen des `tspan` Elements angewendet werden.
- `dx`

  - : Beginnt mit dem Zeichnen des Textes mit einem horizontalen Versatz `dx` von der standardmäßigen aktuellen Position. Auch hier können Sie eine Liste von Werten angeben, die auf aufeinanderfolgende Zeichen angewendet werden, wodurch sich der Versatz im Laufe der Zeit aufbaut.

    Ebenso gibt es **`y`** und **`dy`** für die vertikale Verschiebung.

- `rotate`
  - : Dreht alle Zeichen um diesen Grad. Eine Liste von Zahlen lässt jedes Zeichen zu seinem jeweiligen Wert drehen, wobei verbleibende Zeichen gemäß dem letzten Wert gedreht werden.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenkette. Dies ist ein eher undurchsichtiges Attribut und soll der Rendering-Engine ermöglichen, die Positionen der Glyphen fein abzustimmen, wenn die eigene gemessene Textlänge nicht mit der hier angegebenen übereinstimmt.

### textPath

Dieses Element ruft über sein `href` Attribut einen beliebigen Pfad ab und richtet die Zeichen, die es umschließt, entlang dieses Pfades aus:

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
