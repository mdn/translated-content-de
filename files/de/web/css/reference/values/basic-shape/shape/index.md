---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die Funktion `shape()` gehört zum Datentyp {{cssxref("&lt;basic-shape&gt;")}}.

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
  - : Gibt an, wie sich überlappende Bereiche einer Form gefüllt werden sollen. Mögliche Werte sind:
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl vom Punkt aus mehr von links nach rechts als von rechts nach links die Pfadsegmente kreuzt, was zu einem nicht-null-Wert führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl vom Punkt aus eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass der Strahl für jede Form, in die er eintritt, nicht die gleiche Anzahl von Austritten hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Koordinatenpaar, das vom oberen linken Eckpunkt des [Referenzkastens](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken Offset und den oberen Offset darstellen. Prozentuale Werte sind relativ zur Breite und Höhe des Referenzkastens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren, und verwendet eine Syntax, die [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnlich ist. Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den [`from <coordinate-pair>`](#from_coordinate-pair) Parameter definiert wird.

#### Befehle für Formen

Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung liefert, wie `move` oder `line`, gefolgt von dem Schlüsselwort `by` oder `to` und einem Satz von Koordinaten.

- `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).
- `to`: Gibt an, dass das `<coordinate-pair>` relativ zum oberen linken Eckpunkt des Referenzkastens ist (ein "absoluter" Wert).

> [!NOTE]
> Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur entsprechenden Breite oder Höhe des Referenzkastens berechnet.

Die folgenden `<shape-command>`s können angegeben werden:

- `<move-command>`
  - : Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts; stattdessen gibt er die Startposition für den nächsten Befehl an. Das Schlüsselwort `by` oder `to` gibt an, ob der `<coordinate-pair>` Punkt relativ oder absolut ist. Wenn das `<move-command>` dem `close` Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder Subpfad.

- `<line-command>`
  - : Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Startpunkt des Befehls zu seinem Endpunkt. Das Schlüsselwort `by` oder `to` bestimmt, ob der durch `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

- `<hv-line-command>`
  - : Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `x`-Position gezeichnet. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `y`-Position gezeichnet. Das Schlüsselwort `by` oder `to` bestimmt den relativen oder absoluten Endpunkt, wobei dieser Befehl dem `<line-command>` entspricht, bei dem ein Koordinatenwert durch den einzelnen `<length-percentage>` festgelegt wird und der andere Koordinatenwert vom Startbefehl unverändert bleibt.

- `<curve-command>`
  - : Angegeben als `curve [by | to] <end-point> with <control-point> [/ <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` gibt an, ob der Endpunkt der Kurve, der durch den `<end-point>` angegeben wird, relativ oder absolut ist.

    Das Schlüsselwort `with` definiert die Kontrollpunkte der Bézierkurve wie folgt.
    - Wenn nur ein einziger `<control-point>` angegeben wird, wird eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve) gezeichnet, die durch drei Punkte definiert wird (den Startpunkt, den Kontrollpunkt und den Endpunkt).
    - Wenn zwei `<control-point>` Werte angegeben werden, wird eine kubische Bézierkurve gezeichnet, die durch vier Punkte definiert wird (den Startpunkt, zwei Kontrollpunkte und den Endpunkt).

    Gültige Werte für `<end-point>` umfassen:
    - {{cssxref("&lt;position>")}} Schlüsselwörter oder ein `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Endpunkt der Kurve absolut ist (mit `to` angegeben).
    - `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Endpunkt der Kurve relativ ist (mit `by` angegeben).

    Gültige Werte für `<control-point>` umfassen:
    - {{cssxref("&lt;position>")}}
      - : Gibt ein Positionsschlüsselwort an. Dieser Wert ist nur gültig, wenn der Endpunkt der Kurve absolut ist (mit `to` angegeben).
    - `<coordinate-value-pair>`
      - : Gibt ein Paar von {{cssxref("&lt;length-percentage>")}} Werten an, die Koordinaten definieren.
    - `<relative-control-point>`
      - : Definiert ein `<coordinate-value-pair>` gefolgt vom `from` Schlüsselwort und einem der folgenden Schlüsselwörter:
        - `start`
          - : Gibt an, dass der Kontrollpunkt relativ zum Startpunkt des aktuellen Befehls ist.
        - `end`
          - : Gibt an, dass der Kontrollpunkt relativ zum Endpunkt des aktuellen Befehls ist.
        - `origin`
          - : Gibt an, dass der Kontrollpunkt relativ zum oberen linken Eckpunkt (Ursprung) des Containers ist, in dem die Form gezeichnet wird.
            > [!NOTE]
            > Wenn die `<relative-control-point>` Schlüsselwörter nicht angegeben werden, wird der `<control-point>` zu einem regulären `<coordinate-value-pair>` und die Koordinaten sind relativ zum Start der Kurve. Mit anderen Worten, `start` ist die Standardeinstellung.

- `<smooth-command>`
  - : Angegeben als `smooth [by | to] <end-point> [with <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` gibt an, ob der Endpunkt der Kurve, der durch den `<end-point>` angegeben wird, relativ oder absolut ist.

    Das Schlüsselwort `with` spezifiziert einen optionalen Kontrollpunkt für die Bézierkurve:
    - Wenn `with <control-point>` weggelassen wird, wird eine glatte quadratische Bézierkurve gezeichnet, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt zur Definition der Kurve verwendet.
    - Wenn das optionale `with` Schlüsselwort enthalten ist, spezifiziert es die Kontrollpunkte der Kurve durch `<control-point>`, indem eine glatte kubische Bézierkurve definiert wird, die den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt verwendet.

    Glatte Kurven gewährleisten einen kontinuierlichen Übergang von der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven behalten einen nahtlosen Übergang unter Verwendung eines einzigen Kontrollpunkts bei, während glatte kubische Kurven einen verfeinerten Übergang mit zwei Kontrollpunkten bieten.

    Gültige Werte für die `<end-point>` und `<control-point>` Komponenten sind die gleichen wie diejenigen für [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogensegment-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    Der elliptische Bogensegment-Befehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden, und jede kann im oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen je nach Bogengröße, Richtung und Winkel führt. Das Schlüsselwort `of` gibt die Größe der Ellipse an, aus der der Bogen entnommen wird: das erste `<length-percentage>` liefert den horizontalen Radius der Ellipse, und das zweite `<length-percentage>` liefert den vertikalen Radius.

    Geben Sie die folgenden Parameter an, um auszuwählen, welcher der vier Bögen verwendet wird:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse gezeichnet wird. Wenn weggelassen, ist der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist der Standardwert `small`.
    - `<angle>`: Gibt den Grad-Winkel an, um den die Ellipse relativ zur x-Achse gedreht wird. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, und ein negativer Winkel dreht sie gegen den Uhrzeigersinn. Wenn weggelassen, ist der Standardwert `0deg`.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben wird, wird der gleiche Wert für beide Radien verwendet, sodass ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkung.
    - Wenn einer der Radien null ist, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Wenn einer der Radien negativ ist, wird sein Absolutwert stattdessen verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl Start- als auch Endpunkte zu schneiden (nach der Rotation durch den angegebenen `<angle>`), werden die Radien gleichmäßig vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den zu wählenden Bogen an, und `<arc-size>` hat keine Auswirkung.

- `close`
  - : Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, um eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im Pfad, der im `from <coordinate-pair>` Parameter definiert ist, zu zeichnen. Um die Form ohne Zeichnen einer Linie zu schließen, fügen Sie dem close Befehl ein `<move-command>` mit den Ursprungskoordinaten hinzu. Wenn der `close` Befehl unmittelbar von einem `<move-command>` gefolgt wird, definiert er den Startpunkt der nächsten Form oder des nächsten Subpfads.

## Beschreibung

Die `shape()` Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist ähnlich wie die {{cssxref("basic-shape/path","path()")}} Formfunktion in mehreren Aspekten:

- Der `<fill-rule>` Parameter in der `shape()` Funktion arbeitet genau wie derselbe Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands), und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die Standard-CSS-Syntax, was es einfacher macht, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, die weniger intuitiv für diejenigen ist, die mit SVG nicht vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentangaben, `rem` und `em`. `path()` definiert hingegen Formen als einen einzigen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematik-Funktionen wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}, was mehr Vielseitigkeit beim Definieren von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `shape()` zur Definition eines Pfads

Dieses Beispiel demonstriert, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfads zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézier gekurvten Pfad, der durch den `curve to` Befehl definiert wird. Anschließend zeichnet der `close` Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum anfänglich im `from` Befehl definierten Punkt. Schließlich bewegt sich `shape1` an ihre neue Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zuerst einer horizontalen Linie, dann bewegt sie sich zurück zu ihrer Startposition bei `50px 90px`. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zum anfänglichen Punkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move` Animation und kehren zu ihrer ursprünglichen Farbe zurück, wenn die Animation neu startet. Diese zyklische Farbänderung bietet Ihnen einen visuellen Hinweis auf den Fortschritt und den Neustart der Animation.

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

### Verwenden von `shape()` zur Definition des sichtbaren Teils eines Elements

Dieses Beispiel demonstriert, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um verschiedene Formen für den Clipping-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein durch gerade Linien definiertes Dreieck. Die zweite Form (`shape2`) enthält Kurven und glatte Übergänge; sie veranschaulicht auch die Verwendung des `<move-command>` nach dem `close` Befehl, welcher dem Clipping-Bereich eine rechteckige Form hinzufügt.

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

### Verwenden von `shape()` für das Zeichnen von Kurven mit relativen Kontrollpunkten

Wie in den vorherigen Beispielen wird auch in diesem Beispiel {{cssxref("clip-path")}} verwendet, um verschiedene Formen für die Clipping-Bereiche der Elemente zu erstellen. Die Formen werden mit einer Kombination aus [`<curve-command>`](#curve-command) und [`<smooth-command>`](#smooth-command) angegeben, und die Kontrollpunkte werden mit [`<relative-control-point>`](#relative-control-point) Werten angegeben.

Die erste Form (`shape1`) zeichnet zwei kubische Bézierkurven.

- Die erste Kurve beginnt in der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezogen – der Mitte der rechten Kante des Kastens. Sie verwendet einen Kontrollpunkt relativ zum Start der Kurve und einen Kontrollpunkt relativ zum Ursprung (oben links des Kastens).
- Die zweite Kurve beginnt von der Mitte rechts des Kastens und wird `-200px` entlang der x-Achse gezogen – die Mitte der linken Kante des Kastens. Sie verwendet einen Kontrollpunkt relativ zum Ursprung und einen Kontrollpunkt relativ zum Start der Kurve.

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

- Die erste Kurve beginnt in der Mitte der linken Kante des Kastens und wird zu einem absoluten Punkt `200px` vom Ursprung entlang der x-Achse und `100px` vom Ursprung entlang der y-Achse gezogen. Sie verwendet einen Kontrollpunkt relativ zum Start der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorherigen Kurve und wird zur Mitte links des Kastens gezogen. Sie verwendet einen Kontrollpunkt relativ zum Start der Kurve und einen Kontrollpunkt relativ zum Ende.

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

Die dritte Form (`shape3`) zeichnet eine quadratische Bézierkurve und eine kubische Bézierkurve unter Verwendung eines `smooth` Befehls.

- Die erste Kurve beginnt in der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezogen. Sie verwendet einen Kontrollpunkt relativ zum Start der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorherigen Kurve und wird zur Mitte des Kastens gezogen. Sie verwendet einen Kontrollpunkt relativ zum Start der Kurve (der letzte Kontrollpunkt der vorherigen Kurve) und einen Kontrollpunkt relativ zum Ursprung.

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
- [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) Leitfaden
