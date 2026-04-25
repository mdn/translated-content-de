---
title: "`shape()` CSS-Funktion"
short-title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Form für die {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formenbefehlen, die den Pfad der Form festlegen. Die `shape()`-Funktion ist Teil des {{cssxref("basic-shape")}} Datentyps.

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
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer nicht null Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, eine ungerade Anzahl von Pfadsegmenten kreuzt. Dies bedeutet, dass der Strahl für jedes Mal, das er die Form betritt, nicht die gleiche Anzahl von Malen verlassen hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hindeutet.

    > [!WARNING]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und seine Verwendung macht die Eigenschaft ungültig.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Koordinatenpaar, das vom oberen linken Eckpunkt der [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) gemessen wird. Die Koordinaten sind als Leerzeichentrennung `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken Versatz bzw. den oberen Versatz darstellen. Prozentwerte beziehen sich jeweils auf die Breite und Höhe der Referenzbox des Elements. Fügen Sie nach diesem Parameter ein Komma ein.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren durch Kommas getrennten Befehlen an, die die Form definieren, und verwendet eine ähnliche Syntax wie [SVG-Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert wird.

#### Formenbefehle

Die Syntax der meisten Formenbefehle ist ein Schlüsselwort, das eine Anweisung gibt, wie `move` oder `line`, gefolgt vom `by` oder `to` Schlüsselwort und einem Satz von Koordinaten.

- `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls (ein "relativer" Wert) ist.
- `to`: Gibt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke der Referenzbox (ein "absoluter" Wert) ist.

> [!NOTE]
> Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentwert angegeben wird, wird der Wert relativ zur jeweiligen Breite oder Höhe der Referenzbox berechnet.

Die folgenden `<shape-command>`s können angegeben werden:

- `<move-command>`
  - : Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formenbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Es wird nichts gezeichnet; stattdessen wird die Startposition für den nächsten Befehl angegeben. Das `by` oder `to` Schlüsselwort gibt an, ob der `<coordinate-pair>` Punkt relativ oder absolut ist. Wenn dem `<move-command>` der `close` Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder des nächsten Unterpfads.

- `<line-command>`
  - : Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formenbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Es wird eine gerade Linie vom Startpunkt des Befehls zu seinem Endpunkt gezeichnet. Das `by` oder `to` Schlüsselwort gibt an, ob der durch `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

- `<hv-line-command>`
  - : Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formenbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `x`-Position gezeichnet. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `y`-Position gezeichnet. Das `by` oder `to` Schlüsselwort bestimmt den relativen oder absoluten Endpunkt, jeweils. Dieser Befehl ist gleichwertig mit `<line-command>`, wobei ein Koordinatenwert durch das einzelne `<length-percentage>` festgelegt wird und der andere Koordinatenwert vom Startbefehl unverändert bleibt.

- `<curve-command>`
  - : Angegeben als `curve [by | to] <end-point> with <control-point> [/ <control-point>]`. Dieser Befehl fügt der Liste der Formenbefehle einen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch den `<end-point>`, relativ oder absolut ist.

    Das `with` Schlüsselwort gibt die Kontrollpunkte der Bézierkurve wie folgt an.
    - Wenn nur ein einzelner `<control-point>` angegeben wird, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte definiert wird (den Startpunkt, den Kontrollpunkt und den Endpunkt).
    - Wenn zwei `<control-point>` Werte angegeben sind, zeichnet der Befehl eine kubische Bézierkurve, die durch vier Punkte definiert wird (den Startpunkt, zwei Kontrollpunkte und den Endpunkt).

    Gültige Werte für `<end-point>` umfassen:
    - {{cssxref("&lt;position>")}} Schlüsselwörter oder ein `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Kurvenendpunkt absolut ist (angegeben mit `to`).
    - `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Kurvenendpunkt relativ ist (angegeben mit `by`).

    Gültige Werte für `<control-point>` umfassen:
    - {{cssxref("&lt;position>")}}
      - : Gibt ein Positionsschlüsselwort an. Dieser Wert ist nur gültig, wenn der Kurvenendpunkt absolut ist (angegeben mit `to`).
    - `<coordinate-value-pair>`
      - : Gibt ein Paar von {{cssxref("&lt;length-percentage>")}} Werten an, die Koordinaten definieren.
    - `<relative-control-point>`
      - : Definiert ein `<coordinate-value-pair>`, gefolgt vom `from` Schlüsselwort und einem der folgenden Schlüsselwörter:
        - `start`
          - : Zeigt an, dass der Kontrollpunkt relativ zum Startpunkt des aktuellen Befehls ist.
        - `end`
          - : Zeigt an, dass der Kontrollpunkt relativ zum Endpunkt des aktuellen Befehls ist.
        - `origin`
          - : Zeigt an, dass der Kontrollpunkt relativ zum oberen linken (Ursprungs-) Punkt des Containers ist, in dem die Form gezeichnet wird.
            > [!NOTE]
            > Wenn die `<relative-control-point>` Schlüsselwörter nicht angegeben sind und der `<control-point>` ein reguläres `<coordinate-value-pair>` ist, sind die Koordinaten relativ zum Anfang der Kurve. Mit anderen Worten, `start` ist die Standardeinstellung.

- `<smooth-command>`
  - : Angegeben als `smooth [by | to] <end-point> [with <control-point>]`. Dieser Befehl fügt der Liste der Formenbefehle einen glatten [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch den `<end-point>`, relativ oder absolut ist.

    Das `with` Schlüsselwort gibt einen optionalen Kontrollpunkt für die Bézierkurve an:
    - Wenn `with <control-point>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézierkurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale `with` Schlüsselwort enthalten ist, spezifiziert es einen Kontrollpunkt der Kurve durch `<control-point>`, zeichnet eine glatte kubische Bézierkurve, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert wird.

    Glatte Kurven sorgen für einen kontinuierlichen Übergang aus der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven halten einen nahtlosen Übergang mit einem einzigen Kontrollpunkt aufrecht, während glatte kubische Kurven einen raffinierteren Übergang mit zwei Kontrollpunkten bieten.

    Gültige Werte für die Komponenten `<end-point>` und `<control-point>` sind dieselben wie für [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formenbefehle einen [elliptischen Bogen-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist.

    Der elliptische Bogen-Befehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn zurückverfolgt werden, was zu vier möglichen Bögen führt, abhängig von der Bogengröße, Richtung und dem Winkel. Das `of` Schlüsselwort spezifiziert die Größe der Ellipse, aus der der Bogen entnommen wird: Das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an und das zweite `<length-percentage>` den vertikalen Radius.

    Die folgenden Parameter können angegeben werden, um zu wählen, welcher der vier Bögen verwendet werden soll:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse gezogen wird. Wenn weggelassen, ist dies `ccw` als Standardwert.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist dies `small` als Standardwert.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht werden soll. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn und ein negativer Winkel gegen den Uhrzeigersinn. Wenn weggelassen, ist dies `0deg` als Standardwert.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben wird, wird derselbe Wert sowohl für den horizontalen als auch für den vertikalen Radius verwendet, was effektiv einen Kreis bildet. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkungen.
    - Wenn entweder der horizontale oder vertikale Radius null ist, ist der Befehl einem `<line-command>` zum Endpunkt gleichwertig.
    - Wenn entweder der horizontale oder vertikale Radius negativ ist, wird sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Start- als auch den Endpunkt zu schneiden (nach Rotation um den angegebenen `<angle>`), werden die Radien gleichmäßig vergrößert, bis die Ellipse groß genug ist, um beide Punkte zu schneiden.
    - Wenn die Start- und Endpunkte des Bogens exakt auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall spezifiziert `<arc-sweep>` den Bogen, der gewählt werden soll, während `<arc-size>` keine Auswirkungen hat.

- `close`
  - : Fügt der Liste der Formenbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (dem Ende des letzten Befehls) bis zum ersten Punkt im durch den Parameter `from <coordinate-pair>` definierten Pfad zeichnet. Um die Form zu schließen, ohne eine Linie zu zeichnen, fügen Sie einen `<move-command>` mit den Ursprungskoordinaten vor dem Schließbefehl ein. Wenn dem `close` Befehl sofort ein `<move-command>` folgt, definiert er den Startpunkt der nächsten Form oder Unterpfad.

## Beschreibung

Die `shape()` Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist in mehreren Aspekten der {{cssxref("basic-shape/path","path()")}} Formfunktion ähnlich:

- Der `<fill-rule>` Parameter in der `shape()` Funktion funktioniert genau wie derselbe Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Angabe von einem oder mehreren `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands), und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath), verwendet.

Jedoch bietet `shape()` mehrere Vorteile im Vergleich zur Verwendung von `path()`:

- `shape()` verwendet standardmäßige CSS-Syntax, was es einfacher macht, Formen direkt im Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, die weniger intuitiv ist für diejenigen, die mit SVG nicht vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()` hingegen definiert Formen als eine einzige Zeichenkette und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen, wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was mehr Vielseitigkeit bietet, wenn Formen definiert werden.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()` zur Definition eines Pfades

Dieses Beispiel demonstriert, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurvenpfad, der durch den `curve to` Befehl definiert wird. Der `close` Befehl zeichnet eine gerade Linie vom Endpunkt der Kurve zum Anfangspunkt, der im `from` Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und folgt dann einer horizontalen Linie.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und bewegt sich dann zurück zu ihrer Startposition bei `50px 90px`. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Anfangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move` Animation und kehren zu ihrer ursprünglichen Farbe zurück, wenn die Animation neu startet. Dieser zyklische Farbwechsel bietet Ihnen einen visuellen Hinweis auf den Fortschritt und Neustart der Animation.

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
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um verschiedene Formen für den abschneidenden Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein durch gerade Linien definiertes Dreieck. Die zweite Form (`shape2`) enthält Kurven und sanfte Übergänge; sie veranschaulicht auch die Verwendung des `<move-command>` nach dem `close` Befehl, der einen rechteckigen Bereich zum abschneidenden Bereich hinzufügt.

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
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Wie die vorherigen Beispiele verwendet auch dieses Beispiel {{cssxref("clip-path")}}, um verschiedene Formen für die abschneidenden Bereiche der Elemente zu erstellen. Die Formen werden durch eine Kombination von [`<curve-command>`](#curve-command) und [`<smooth-command>`](#smooth-command) spezifiziert, und die Kontrollpunkte werden mit [`<relative-control-point>`](#relative-control-point) Werten angegeben.

Die erste Form (`shape1`) zeichnet zwei kubische Bézierkurven.

- Die erste Kurve beginnt von der Mitte des linken Randes der Box und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet — der Mitte des rechten Randes der Box. Sie verwendet einen Kontrollpunkt relativ zum Anfang der Kurve und einen Kontrollpunkt relativ zum Ursprung (oben links der Box).
- Die zweite Kurve beginnt von der Mitte rechts der Box und wird `-200px` entlang der x-Achse gezeichnet — die Mitte des linken Randes der Box. Sie verwendet einen Kontrollpunkt relativ zum Ursprung und einen Kontrollpunkt relativ zum Anfang der Kurve.

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
  body::after {
    content: "Your browser doesn't support `shape()` relative control points.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

- Die erste Kurve beginnt von der Mitte des linken Randes der Box und wird zu einem absoluten Punkt `200px` vom Ursprung entlang der x-Achse und `100px` vom Ursprung entlang der y-Achse gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Anfang der Kurve.
- Die zweite Kurve beginnt vom Endpunkt der vorherigen Kurve und wird zur Mitte links der Box gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Anfang der Kurve und einen Kontrollpunkt relativ zum Ende.

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

Die dritte Form (`shape3`) zeichnet eine quadratische Bézierkurve und eine kubische Bézierkurve mit einem `smooth` Befehl.

- Die erste Kurve beginnt von der Mitte des linken Randes der Box und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Anfang der Kurve.
- Die zweite Kurve beginnt vom Endpunkt der vorherigen Kurve und wird zur Mitte der Box gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Anfang der Kurve (der letzte Kontrollpunkt der vorherigen Kurve) und einen Kontrollpunkt relativ zum Ursprung.

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
- [CSS shapes](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Übersicht über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) Leitfaden
- [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) Leitfaden
