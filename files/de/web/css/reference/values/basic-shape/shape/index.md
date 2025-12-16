---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Form für die {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Sie kombiniert einen Anfangspunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die `shape()`-Funktion ist ein Mitglied des {{cssxref("basic-shape")}}-Datentyps.

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
  - : Gibt an, wie überlappende Bereiche einer Form gefüllt werden sollen. Mögliche Werte sind:
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer ungeraden Anzahl führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass der Strahl zwar in die Form hinein, aber nicht gleich oft wieder hinausgeht und somit eine ungerade Anzahl von Eingängen ohne entsprechende Ausgänge vorliegt.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Koordinatenpaar, das von der oberen linken Ecke des [Referenzkastens](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}}-Werte angegeben, die den linken und oberen Versatz darstellen. Prozentwerte beziehen sich jeweils auf die Breite und Höhe des Referenzkastens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren und eine Syntax ähnlich den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwenden. Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den [`from <coordinate-pair>`](#from_coordinate-pair) Parameter definiert wird.

#### Formbefehle

Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung wie `move` oder `line` gibt, gefolgt vom Schlüsselwort `by` oder `to` und einem Satz von Koordinaten.

- `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).
- `to`: Gibt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke des Referenzkastens ist (ein "absoluter" Wert).

> [!NOTE]
> Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzkastens berechnet.

Die folgenden `<shape-command>`s können angegeben werden:

- `<move-command>`
  - : Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts, sondern gibt die Startposition für den nächsten Befehl an. Das `by`- oder `to`-Schlüsselwort gibt an, ob der `<coordinate-pair>`-Punkt relativ oder absolut ist. Wenn dem `<move-command>` der `close`-Befehl folgt, wird der Startpunkt der nächsten Form oder Teilstrecke identifiziert.

- `<line-command>`
  - : Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Startpunkt des Befehls bis zum Endpunkt. Das `by`- oder `to`-Schlüsselwort gibt an, ob der Endpunkt, der durch `<coordinate-pair>` spezifiziert wird, relativ oder absolut ist.

- `<hv-line-command>`
  - : Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` zur `x`-Position gezeichnet, die durch `<length-percentage>` definiert ist. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` zur `y`-Position gezeichnet, die durch `<length-percentage>` definiert ist. Das `by`- oder `to`-Schlüsselwort bestimmt den relativen oder absoluten Endpunkt, je nachdem. Dieser Befehl ist äquivalent zu `<line-command>`, wobei ein Koordinatenwert durch das einzelne `<length-percentage>` festgelegt wird und der andere Koordinatenwert unverändert vom Startbefehl bleibt.

- `<curve-command>`
  - : Angegeben als `curve [by | to] <end-point> with <control-point> [/ <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézierkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch `<end-point>` angegeben wird, relativ oder absolut ist.

    Das `with`-Schlüsselwort legt die Kontrollpunkte der Bézierkurve wie folgt fest:
    - Wenn nur ein einziger `<control-point>` angegeben ist, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte (den Startpunkt, Kontrollpunkt und Endpunkt) definiert ist.
    - Wenn zwei `<control-point>`-Werte angegeben sind, zeichnet der Befehl eine kubische Bézierkurve, die durch vier Punkte (den Startpunkt, zwei Kontrollpunkte und den Endpunkt) definiert ist.

    Gültige Werte für `<end-point>` umfassen:
    - {{cssxref("&lt;position>")}} Schlüsselwörter oder ein `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Kurvenendpunkt absolut ist (angegeben mit `to`).
    - `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Kurvenendpunkt relativ ist (angegeben mit `by`).

    Gültige Werte für `<control-point>` umfassen:
    - {{cssxref("&lt;position>")}}
      - : Gibt ein Positionsschlüsselwort an. Dieser Wert ist nur gültig, wenn der Kurvenendpunkt absolut ist (angegeben mit `to`).
    - `<coordinate-value-pair>`
      - : Gibt ein Paar von {{cssxref("&lt;length-percentage>")}}-Werten an, die Koordinaten definieren.
    - `<relative-control-point>`
      - : Definiert ein `<coordinate-value-pair>` gefolgt vom `from`-Schlüsselwort und einem der folgenden Schlüsselwörter:
        - `start`
          - : Gibt an, dass der Kontrollpunkt relativ zum Startpunkt des aktuellen Befehls ist.
        - `end`
          - : Gibt an, dass der Kontrollpunkt relativ zum Endpunkt des aktuellen Befehls ist.
        - `origin`
          - : Gibt an, dass der Kontrollpunkt relativ zum oberen linken (Ursprungs-) Punkt des Containers ist, in dem die Form gezeichnet wird.
            > [!NOTE]
            > Wenn die `<relative-control-point>`-Schlüsselwörter nicht angegeben sind und der `<control-point>` ein normales `<coordinate-value-pair>` ist, sind die Koordinaten relativ zum Start der Kurve. Mit anderen Worten, `start` ist die Standardeinstellung.

- `<smooth-command>`
  - : Angegeben als `smooth [by | to] <end-point> [with <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézierkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch `<end-point>` angegeben wird, relativ oder absolut ist.

    Das `with`-Schlüsselwort gibt einen optionalen Kontrollpunkt für die Bézierkurve an:
    - Wenn `with <control-point>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézierkurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale `with`-Schlüsselwort enthalten ist, spezifiziert es die Kontrollpunkte der Kurve durch `<control-point>`, wodurch eine glatte kubische Bézierkurve mit dem vorherigen Kontrollpunkt, dem aktuellen Kontrollpunkt und dem aktuellen Endpunkt gezeichnet wird.

    Glatte Kurven gewährleisten einen durchgehenden Übergang aus der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven halten einen nahtlosen Übergang mit einem einzigen Kontrollpunkt aufrecht, während glatte kubische Kurven einen verfeinerten Übergang mit zwei Kontrollpunkten bieten.

    Gültige Werte für die `<end-point>`- und `<control-point>`-Komponenten sind dieselben wie für [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogenkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist, je nachdem.

    Der elliptische Bogenkurvenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden können und jeweils im Uhrzeigersinn oder gegen den Uhrzeigersinn nachgezogen werden können, was zu vier möglichen Bögen führt, je nach Bogengröße, Richtung und Winkel. Das `of`-Schlüsselwort gibt die Größe der Ellipse an, von der der Bogen genommen wird: Das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an, und das zweite `<length-percentage>` gibt den vertikalen Radius an.

    Die folgenden Parameter können angegeben werden, um auszuwählen, welcher der vier Bögen verwendet werden soll:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse herum verläuft. Wenn weggelassen, ist der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist der Standardwert `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht werden soll. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer Winkel gegen den Uhrzeigersinn. Wenn weggelassen, ist der Standardwert `0deg`.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben wird, wird derselbe Wert sowohl für den horizontalen als auch für den vertikalen Radius verwendet, was effektiv einen Kreis schafft. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkung.
    - Wenn entweder der horizontale oder vertikale Radius null ist, ist der Befehl äquivalent zu einem `<line-command>` zum Endpunkt.
    - Wenn einer der Radien negativ ist, wird stattdessen sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Start- als auch den Endpunkt (nach Drehung um den angegebenen `<angle>`) zu schneiden, werden die Radien einheitlich skaliert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Wenn der Start- und Endpunkt des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall spezifiziert `<arc-sweep>` den zu wählenden Bogen und `<arc-size>` hat keine Auswirkung.

- `close`
  - : Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im Pfad zeichnet, der im `from <coordinate-pair>`-Parameter definiert ist. Um die Form zu schließen, ohne eine Linie zu zeichnen, fügen Sie einen `<move-command>` mit den ursprünglichen Koordinaten vor dem close-Befehl hinzu. Wenn dem `close`-Befehl unmittelbar ein `<move-command>` folgt, definiert das den Startpunkt der nächsten Form oder Teilstrecke.

## Beschreibung

Die `shape()`-Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist in mehreren Aspekten der {{cssxref("basic-shape/path","path()")}}-Formfunktions ähnlich:

- Der `<fill-rule>`-Parameter in der `shape()`-Funktion funktioniert genau wie derselbe Parameter in der `path()`-Funktion.
- Die `shape()`-Funktion erfordert die Angabe von einem oder mehreren `<shape-command>`s, wobei jeder Befehl einen zugrundeliegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die standardmäßige CSS-Syntax, was es einfacher macht, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax, die für diejenigen weniger intuitiv ist, die mit SVG nicht vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentwerten, `rem` und `em`. `path()` hingegen definiert Formen als einen einzigen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}, was mehr Vielseitigkeit bei der Definition von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()` zur Definition eines Pfads

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("offset-path")}}-Eigenschaft verwendet werden kann, um die Form des Pfads zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubisch Bézierkurvenpfad, der durch den `curve to`-Befehl definiert ist. Danach zeichnet der `close`-Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from`-Befehl definiert ist. Schließlich bewegt sich `shape1` zu ihrer neuen Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie, bewegt sich dann zurück zu ihrer Ausgangsposition bei `50px 90px`. Als nächstes folgt sie einer vertikalen Linie, bevor der Pfad zurück zum Anfangspunkt geschlossen wird.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` am Ende der `move`-Animation, kehren jedoch zu ihrer ursprünglichen Farbe zurück, wenn die Animation neu startet. Diese zyklische Farbänderung bietet Ihnen einen visuellen Hinweis auf den Fortschritt und den Neustart der Animation.

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

Dieses Beispiel demonstriert, wie die `shape()`-Funktion in der {{cssxref("clip-path")}}-Eigenschaft verwendet werden kann, um unterschiedliche Formen für den Ausschnittbereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert ist. Die zweite Form (`shape2`) beinhaltet Kurven und glatte Übergänge; sie veranschaulicht auch die Verwendung des `<move-command>` nach dem `close`-Befehl, der eine rechteckige Form zum Ausschnittbereich hinzufügt.

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

### Verwendung von `shape()` zum Zeichnen von Kurven mit relativen Kontrollpunkten

Wie in vorherigen Beispielen wird auch in diesem Beispiel {{cssxref("clip-path")}} verwendet, um unterschiedliche Formen für die Ausschnittbereiche der Elemente zu erstellen. Die Formen werden durch eine Kombination von [`<curve-command>`](#curve-command) und [`<smooth-command>`](#smooth-command) spezifiziert, und die Kontrollpunkte werden durch [`<relative-control-point>`](#relative-control-point)-Werte angegeben.

Die erste Form (`shape1`) zeichnet zwei kubische Bézierkurven.

- Die erste Kurve beginnt von der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet – die Mitte der rechten Kante des Kastens. Sie verwendet einen Kontrollpunkt relativ zum Beginn der Kurve und einen Kontrollpunkt relativ zum Ursprung (oben links des Kastens).
- Die zweite Kurve beginnt von der Mitte des rechten Randes des Kastens und wird `-200px` entlang der x-Achse gezeichnet – die Mitte der linken Kante des Kastens. Sie verwendet einen Kontrollpunkt relativ zum Ursprung und einen Kontrollpunkt relativ zum Beginn der Kurve.

```html hidden live-sample___relative-control-points
<div class="container">
  <div id="shape1"></div>
  <div id="shape2"></div>
  <div id="shape3"></div>
</div>
```

```css hidden live-sample___relative-control-points
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@supports not (
  clip-path: shape(
      from center left,
      curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
      curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
      close
    )
) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support `shape()` relative control points.";
  }
}
```

```css live-sample___relative-control-points
#shape1 {
  width: 200px;
  height: 200px;
  background: green;
  clip-path: shape(
    from center left,
    curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
    curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
    close
  );
}
```

Die zweite Form (`shape2`) zeichnet eine quadratische Bézierkurve und eine kubische Bézierkurve.

- Die erste Kurve beginnt in der Mitte der linken Kante des Kastens und wird zu einem absoluten Punkt `200px` vom Ursprung entlang der x-Achse und `100px` vom Ursprung entlang der y-Achse gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Beginn der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorhergehenden Kurve und wird zur Mitte der linken Kante des Kastens gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Beginn der Kurve und einen Kontrollpunkt relativ zum Ende.

```css live-sample___relative-control-points
#shape2 {
  width: 200px;
  height: 200px;
  background: purple;
  clip-path: shape(
    from center left,
    curve to 200px 100px with 50% -80% from start,
    curve to center left with 0% 70% from start / 20% 0% from end,
    close
  );
}
```

Die dritte Form (`shape3`) zeichnet eine quadratische Bézierkurve und eine kubische Bézierkurve mithilfe eines `smooth`-Befehls.

- Die erste Kurve beginnt in der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Beginn der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorhergehenden Kurve und wird zur Mitte des Kastens gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Beginn der Kurve (den letzten Kontrollpunkt der vorhergehenden Kurve) und einen Kontrollpunkt relativ zum Ursprung.

```css live-sample___relative-control-points
#shape3 {
  width: 200px;
  height: 200px;
  background: orangered;
  clip-path: shape(
    from center left,
    curve by 200px 0px with 50% -80% from start,
    smooth to center with 50% 100% from origin,
    close
  );
}
```

#### Ergebnis

{{EmbedLiveSample('relative-control-points', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Übersicht über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) Leitfaden
- [Grundlegende Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) Leitfaden
