---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`shape()`**- [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Form für die {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die `shape()`-Funktion ist Mitglied des {{cssxref("&lt;basic-shape&gt;")}} Datentyps.

## Syntax

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, and close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(
  from 10px 10px,
  curve to 80px 80px with 160px 1px / 20% 16px
);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Using a CSS math function */
offset-path: shape(
  from 5px -5%,
  hline to 50px,
  vline by calc(0% + 160px),
  hline by 70.5px,
  close,
  vline by 60px
);

clip-path: shape(
  evenodd from 10px 10px,
  curve to 60px 20% with 40px 0,
  smooth to 90px 0,
  curve by -20px 60% with 10% 40px / 20% 20px,
  smooth by -40% -10px with -10px 70px,
  close
);
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : Gibt an, wie sich überlappende Bereiche einer Form gefüllt werden sollen. Die möglichen Werte umfassen:
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezogener Strahl mehr von links nach rechts als von rechts nach links verlaufende Path-Segmente kreuzt, was zu einem nicht nullzählenden Wert führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezogener Strahl eine ungerade Anzahl von Path-Segmenten kreuzt. Das bedeutet, dass jedes Mal, wenn der Strahl die Form betritt, er sie nicht mit einer gleichen Anzahl von Austritten verlässt, was auf eine ungerade Zählung von Eintritten ohne entsprechende Austritte hinweist.

    > [!WARNING] > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und seine Verwendung macht die Eigenschaft ungültig.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Koordinatenpaar, das vom oberen linken Eckpunkt des [Referenzrahmens](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken und oberen Versatz repräsentieren. Prozentwerte beziehen sich auf die Breite und Höhe des Referenzrahmens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren kommaseparierten Befehlen an, die die Form definieren, unter Verwendung einer Syntax ähnlich der [SVG-Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert wird.

    Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung wie `move` oder `line` angibt, gefolgt vom Schlüsselwort `by` oder `to` und einem Satz von Koordinaten.

    `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).

    `to`: Gibt an, dass das `<coordinate-pair>` relativ zum oberen linken Eckpunkt des Referenzrahmens ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben wird, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzrahmens berechnet.

    Die folgenden `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts, sondern gibt die Startposition für den nächsten Befehl an. Das Schlüsselwort `by` oder `to` gibt an, ob der `<coordinate-pair>`-Punkt relativ oder absolut ist. Wenn das `<move-command>` dem `close`-Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder Teilpfad.

    `<line-command>`: Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Startpunkt des Befehls zum Endpunkt. Das Schlüsselwort `by` oder `to` gibt an, ob der Endpunkt, der durch `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    `<hv-line-command>`: Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `x`-Position gezeichnet. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `y`-Position gezeichnet. Das Schlüsselwort `by` oder `to` bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl entspricht dem `<line-command>` mit einem durch den einzelnen `<length-percentage>` festgelegten Koordinatenwert, wobei der andere Koordinatenwert vom Startbefehl unverändert bleibt.

    `<curve-command>`: Angegeben als `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist. Das Schlüsselwort `with` gibt die Kontrollpunkte der Bézier-Kurve an.
    - Wenn nur ein einzelnes `<coordinate-pair>` angegeben wird, zeichnet der Befehl eine [quadratische Bézier-Kurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte definiert ist (den Startpunkt, den Kontrollpunkt und den Endpunkt).
    - Wenn zwei `<coordinate-pair>`-Werte angegeben werden, zeichnet der Befehl eine kubische Bézier-Kurve, die durch vier Punkte definiert ist (den Startpunkt, zwei Kontrollpunkte und den Endpunkt).

    `<smooth-command>`: Angegeben als `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.
    - Wenn `with <coordinate-pair>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézier-Kurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale Schlüsselwort `with` enthalten ist, gibt es die Kontrollpunkte der Kurve durch `<coordinate-pair>` an und zeichnet eine glatte kubische Bézier-Kurve, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert wird.

    Glatte Kurven gewährleisten einen kontinuierlichen Übergang von der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven gewährleisten einen nahtlosen Übergang mit einem einzigen Kontrollpunkt, während glatte kubische Kurven einen raffinierteren Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    Der elliptische Bogenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt kreuzen, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen je nach Bogengröße, Richtung und Winkel führt. Das Schlüsselwort `of` gibt die Größe der Ellipse an, aus der der Bogen genommen wird: Das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an, und das zweite `<length-percentage>` gibt den vertikalen Radius an.

    Folgende Parameter legen fest, welcher der vier Bögen verwendet wird:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse geführt wird. Wenn weggelassen, ist dies standardmäßig `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist dies standardmäßig `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht wird. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, und ein negativer Winkel dreht sie gegen den Uhrzeigersinn. Wenn weggelassen, ist dies standardmäßig `0deg`.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben wird, wird derselbe Wert sowohl für den horizontalen als auch den vertikalen Radius verwendet, wodurch effektiv ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keinen Einfluss.
    - Wenn eines der Radien null ist, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Wenn einer der Radien negativ ist, wird stattdessen sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Startpunkt als auch den Endpunkt zu kreuzen (nach der Drehung um den angegebenen `<angle>`), werden die Radien gleichmäßig vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu kreuzen.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den zu wählenden Bogen an, und `<arc-size>` hat keinen Effekt.

    `close`: Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu und zeichnet eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im Pfad, der im `from <coordinate-pair>`-Parameter definiert ist. Um die Form ohne eine Linie zu schließen, fügen Sie vor dem close-Befehl ein `<move-command>` mit den ursprünglichen Koordinaten ein. Wenn der close-Befehl unmittelbar von einem `<move-command>` gefolgt wird, definiert er den Startpunkt der nächsten Form oder des nächsten Teilpfads.

## Beschreibung

Die `shape()`-Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ähnelt der {{cssxref("basic-shape/path","path()")}}-Formfunktion in mehreren Aspekten:

- Der Parameter `<fill-rule>` in der `shape()`-Funktion funktioniert genau wie derselbe Parameter in der `path()`-Funktion.
- Die `shape()`-Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwendet, wie z. B. [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die Standard-CSS-Syntax, was es einfacher macht, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, die weniger intuitiv für diejenigen ist, die nicht mit SVG vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()` hingegen definiert Formen als Einzelzeichenfolge und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was mehr Vielseitigkeit beim Definieren von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()` zur Definition eines Pfades

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("offset-path")}}-Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézier-Kurvenpfad, der durch den Befehl `curve to` definiert wird. Anschließend zeichnet der Befehl `close` eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from`-Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und folgt dann einer horizontalen Linie.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und kehrt dann zu ihrer Startposition bei `50px 90px` zurück. Danach folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Anfangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich in ein `hotpink` am Ende der `move`-Animation, um dann als visuelle Rückmeldung über den Verlauf und Neustart der Animation zu ihren ursprünglichen Farben zurückzukehren.

```html hidden
<div class="container">
  Using <code>&lt;curve-command&gt;</code>
  <div class="shape shape1">>></div>
</div>

<div class="container">
  Using <code>&lt;move-command&gt;</code> and
  <code>&lt;hvline-command&gt;</code>
  <div class="shape shape2">>></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border: 2px dotted green;
  margin: 20px;
}

@supports not (offset-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
  }
}
```

```css
.shape {
  width: 50px;
  height: 50px;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
  animation: move 6s infinite linear;
}

.shape1 {
  offset-path: shape(
    from 30% 60px,
    curve to 180px 180px with 90px 190px,
    close,
    move by 0px 150px,
    hline by 40%
  );
}

.shape2 {
  offset-path: shape(
    from 50px 90px,
    hline to 8em,
    move to 50px 90px,
    vline by 20%,
    close
  );
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    background-color: hotpink;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Using shape() to define a path', '100%', 300)}}

### Verwendung von `shape()` zur Definition des sichtbaren Teils eines Elements

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("clip-path")}}-Eigenschaft verwendet werden kann, um unterschiedliche Formen für die Clip-Region zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert wird. Die zweite Form (`shape2`) beinhaltet Kurven und sanfte Übergänge; sie zeigt auch die Verwendung des `<move-command>` nach dem `close`-Befehl, der der Clip-Region eine rechteckige Form hinzufügt.

```html hidden
<div class="container">
  <div class="shape shape1"></div>
</div>

<div class="container">
  <div class="shape shape2"></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: lightgray;
}

@supports not (clip-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
}

/* Triangular clipping region */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* A Heart clipping region using curve and arc transitions
   and a box using hline and vline transitions */
.shape2 {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px,
    close,
    move to 150px 150px,
    hline by 40px,
    vline by 40px,
    hline by -40px,
    close
  );
}
```

#### Ergebnis

{{EmbedLiveSample('Using shape() to define the visible part of an element', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Übersicht der Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) Leitfaden
- [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) Leitfaden
