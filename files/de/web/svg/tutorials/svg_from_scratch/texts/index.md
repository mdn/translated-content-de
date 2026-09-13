---
title: Texte
slug: Web/SVG/Tutorials/SVG_from_scratch/Texts
l10n:
  sourceCommit: 27bb49e1849433e05c964c8a645c448f184380ce
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}

Wenn es um Text in SVG geht, müssen wir zwischen zwei fast vollständig getrennten Themen unterscheiden. Eines ist die Einbindung und Anzeige von Text in einem Bild, und das andere sind SVG-Schriftarten. Letzteres wird in einem späteren Abschnitt des Tutorials beschrieben, während sich diese Seite auf den ersten Teil konzentrieren wird: das Einfügen von Text in ein SVG-Bild.

## Grundlagen

Im [einführenden Beispiel](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) haben wir gesehen, dass das `text`-Element verwendet werden kann, um beliebigen Text in SVG-Dokumenten zu platzieren:

```xml
<text x="10" y="10">Hello World!</text>
```

Die Attribute `x` und `y` bestimmen, wo im Ansichtsfenster der Text erscheinen wird. Das Attribut {{SVGAttr("text-anchor")}}, das die Werte `"start"`, `"middle"`, `"end"` oder `"inherit"` haben kann, entscheidet, in welche Richtung der Text von diesem Punkt aus fließt. Das Attribut {{SVGAttr("dominant-baseline")}} entscheidet über die vertikale Ausrichtung.

Wie bei den Formelementen kann Text mit dem Attribut `fill` eingefärbt und mit dem Attribut `stroke` umrissen werden. Beide Attribute können auch auf Verläufe oder Muster verweisen, was das Färben von Text in SVG sehr leistungsfähig macht.

## Schriftarteigenschaften festlegen

Ein wesentlicher Bestandteil eines Textes ist die Schriftart, in der er angezeigt wird. SVG bietet eine Reihe von Attributen, die vielen ihrer CSS-Gegenstücke ähneln, um die Auswahl der Schriftart zu ermöglichen. Jedes der folgenden Eigenschaften kann als Attribut oder über eine CSS-Deklaration festgelegt werden: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} und {{SVGAttr("text-decoration")}}.

## Weitere textbezogene Elemente

### tspan

Dieses Element wird verwendet, um Teilstücke eines größeren Textes zu markieren. Es muss ein Kind eines `text`-Elements oder eines anderen `tspan`-Elements sein. Ein typischer Anwendungsfall ist, ein Wort eines Satzes fett rot zu gestalten.

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
  - : Setzt eine neue absolute `x`-Koordinate für den enthaltenen Text. Dies überschreibt die Standardposition des aktuellen Textes. Das Attribut kann auch eine Liste von Zahlen enthalten, die nacheinander auf die einzelnen Zeichen des `tspan`-Elements angewendet werden.
- `dx`
  - : Beginnt mit der Zeichnung des Textes mit einem horizontalen Offset `dx` von der Standardposition. Auch hier können Sie eine Liste von Werten angeben, die auf aufeinanderfolgende Zeichen angewendet werden, wodurch sich der Versatz im Laufe der Zeit akkumuliert.

    Ebenso gibt es **`y`** und **`dy`** zur vertikalen Verschiebung.

- `rotate`
  - : Dreht alle Zeichen um diesen Grad. Eine Liste von Zahlen lässt jedes Zeichen zu seinem jeweiligen Wert rotieren, wobei verbleibende Zeichen entsprechend dem letzten Wert rotieren.
- `textLength`
  - : Gibt die berechnete Länge der Zeichenfolge an. Dies ist ein eher unbekanntes Attribut und soll der Rendering-Engine ermöglichen, die Positionen der Glyphen fein abzustimmen, wenn ihre eigene gemessene Textlänge nicht der hier angegebenen entspricht.

### textPath

Dieses Element holt über sein `href`-Attribut einen beliebigen Pfad und passt die Zeichen daran an, indem es sie entlang dieses Pfades ausrichtet:

```html
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="none" />
  <text>
    <textPath href="#my_path">A curve.</textPath>
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
