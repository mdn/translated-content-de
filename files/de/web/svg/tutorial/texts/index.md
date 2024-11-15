---
title: Text
slug: Web/SVG/Tutorial/Texts
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

Wenn man über Text in SVG spricht, muss man zwischen zwei fast vollständig separaten Themen unterscheiden. Das eine ist die Einbindung und Anzeige von Text in einem Bild, und das andere sind SVG-Schriften. Letzteres wird in einem späteren Abschnitt des Tutorials beschrieben, während sich diese Seite auf den ersten Teil konzentriert: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Wie im [einführenden Beispiel](/de/docs/Web/SVG/Tutorial/Getting_Started) gesehen, kann das `text`-Element verwendet werden, um beliebigen Text in SVG-Dokumente einzufügen:

```xml
<text x="10" y="10">Hello World!</text>
```

Die Attribute `x` und `y` bestimmen, wo im Viewport der Text erscheint. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welche Richtung der Text von diesem Punkt aus fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem Attribut `fill` eingefärbt und mit dem Attribut `stroke` mit Konturen versehen werden. Beide können sich auch auf Verläufe oder Muster beziehen, was die Farbgebung von Text in SVG sehr leistungsfähig macht.

## Schriftarteigenschaften setzen

Ein wesentlicher Teil eines Textes ist die Schriftart, in der er angezeigt wird. SVG bietet einen Satz von Attributen, viele ähnlich wie ihre CSS-Pendants, um die Schriftartenauswahl zu ermöglichen. Jedes der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration gesetzt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Andere textbezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilbereiche eines größeren Textes zu markieren. Es muss ein Kind eines `text`-Elements oder eines anderen `tspan`-Elements sein. Ein typischer Anwendungsfall ist, ein Wort eines Satzes fett rot darzustellen.

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

Das `tspan`-Element hat die folgenden benutzerdefinierten Attribute:

- `x`
  - : Setzt eine neue absolute `x`-Koordinate für den enthaltenen Text. Dies überschreibt die standardmäßige aktuelle Textposition. Das Attribut kann auch eine Liste von Zahlen enthalten, die nacheinander auf die einzelnen Zeichen des `tspan`-Elements angewendet werden.
- `dx`

  - : Beginnt das Zeichnen des Textes mit einem horizontalen Versatz `dx` von der aktuellen Standardposition. Auch hier können Sie eine Liste von Werten angeben, die auf aufeinanderfolgende Zeichen angewendet werden, wodurch sich der Versatz im Laufe der Zeit aufsammelt.

    Ebenso gibt es **`y`** und **`dy`** für die vertikale Verschiebung.

- `rotate`
  - : Dreht alle Zeichen um diesen Grad. Eine Liste von Zahlen lässt jedes Zeichen auf seinen jeweiligen Wert drehen, wobei verbleibende Zeichen entsprechend dem letzten Wert rotieren.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenfolge an. Dies ist ein eher unbekanntes Attribut und soll der Rendering-Engine ermöglichen, die Positionen der Glyphen fein abzustimmen, wenn die eigene gemessene Textlänge nicht mit der hier angegebenen übereinstimmt.

### textPath

Dieses Element holt über sein `href`-Attribut einen beliebigen Pfad und richtet die Zeichen, die es umgibt, entlang dieses Pfades aus:

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
