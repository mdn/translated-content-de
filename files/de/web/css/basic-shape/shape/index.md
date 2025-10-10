---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die `shape()` Funktion ist ein Mitglied des {{cssxref("&lt;basic-shape&gt;")}} Datentyps.

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
  - : Gibt an, wie überlappende Bereiche einer Form gefüllt werden sollen. Die möglichen Werte sind:
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl vom Punkt aus mehr linke-zu-rechte Pfadsegmente als rechte-zu-linke Pfadsegmente kreuzt, was zu einer nicht-null-Wert führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl vom Punkt aus eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass jedes Mal, wenn der Strahl in die Form eintritt, er nicht eine gleiche Anzahl von Malen verlassen hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > [!WARNING]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Koordinatenpaar, das von der oberen linken Ecke der [Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken und oberen Versatz darstellen. Prozentwerte sind relativ zur Breite bzw. Höhe der Referenzbox des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren durch Kommas getrennten Befehlen an, die die Form definieren und eine Syntax ähnlich den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwenden. Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den [`from <coordinate-pair>`](#from_coordinate-pair) Parameter definiert wird.

    Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung, wie `move` oder `line`, gefolgt von dem `by` oder `to` Schlüsselwort und einem Satz von Koordinaten bereitstellt.

    `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).

    `to`: Gibt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke der Referenzbox ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentwert angegeben wird, wird der Wert relativ zur jeweiligen Breite oder Höhe der Referenzbox berechnet.

    Die folgenden `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Spezifiziert als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) zur Liste der Formbefehle hinzu. Es wird nichts gezeichnet. Vielmehr wird die Startposition für den nächsten Befehl angegeben. Das Schlüsselwort `by` oder `to` gibt an, ob das `<coordinate-pair>` relativ oder absolut ist. Wenn das `<move-command>` dem `close` Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder Unterbahn.

    `<line-command>`: Spezifiziert als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) zur Liste der Formbefehle hinzu. Er zeichnet eine gerade Linie vom Startpunkt des Befehls zu seinem Endpunkt. Das Schlüsselwort `by` oder `to` gibt an, ob der vom `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

    `<hv-line-command>`: Spezifiziert als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) zur Liste der Formbefehle hinzu. Bei `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` zur definierten `x` Position durch `<length-percentage>` gezeichnet. Bei `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` zur definierten `y` Position durch `<length-percentage>` gezeichnet. Das Schlüsselwort `by` oder `to` bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl ist gleichbedeutend mit `<line-command>`, wobei ein Koordinatenwert durch die einzelne `<length-percentage>` festgelegt wird und der andere Koordinatenwert unverändert vom Ausgangsbefehl bleibt.

    `<curve-command>`: Spezifiziert als `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`. Dieser Befehl fügt einen [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) zur Liste der Formbefehle hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben ist, relativ oder absolut ist. Das Schlüsselwort `with` gibt die Steuerpunkte der Bézierkurve an.
    - Wenn nur ein einzelnes `<coordinate-pair>` angegeben ist, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte (Startpunkt, Steuerpunkt und Endpunkt) definiert ist.
    - Wenn zwei `<coordinate-pair>` Werte angegeben sind, zeichnet der Befehl eine kubische Bézierkurve, die durch vier Punkte (Startpunkt, zwei Steuerpunkte und Endpunkt) definiert ist.

    `<smooth-command>`: Spezifiziert als `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`. Dieser Befehl fügt einen glatten [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) zur Liste der Formbefehle hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben ist, relativ oder absolut ist.
    - Wenn `with <coordinate-pair>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézierkurve, die den vorherigen Steuerpunkt und den aktuellen Endpunkt zur Definition der Kurve verwendet.
    - Wenn das optionale `with` Schlüsselwort enthalten ist, gibt es die Steuerpunkte der Kurve durch `<coordinate-pair>` an, wodurch eine glatte kubische Bézierkurve gezeichnet wird, die durch den vorherigen Steuerpunkt, den aktuellen Steuerpunkt und den aktuellen Endpunkt definiert ist.

    Glatte Kurven stellen einen kontinuierlichen Übergang von der Form sicher, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven sorgen für einen nahtlosen Übergang mit einem Steuerpunkt, während glatte kubische Kurven einen raffinierteren Übergang mit zwei Steuerpunkten bieten.

    `<arc-command>`: Spezifiziert als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt einen [elliptischen Bogenkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) zur Liste der Formbefehle hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben ist, relativ oder absolut ist.

    Der elliptische Bogenkurvenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt kreuzen, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen je nach Bogenbreite, Richtung und Winkel führt. Das `of` Schlüsselwort gibt die Größe der Ellipse an, aus der der Bogen genommen wird: das erste `<length-percentage>` liefert den horizontalen Radius der Ellipse, und das zweite `<length-percentage>` liefert den vertikalen Radius.

    Geben Sie die folgenden Parameter an, um auszuwählen, welcher der vier Bögen verwendet werden soll:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse verfolgt wird. Wenn weggelassen, ist der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist der Standardwert `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht werden soll. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer Winkel gegen den Uhrzeigersinn. Wenn weggelassen, ist der Standardwert `0deg`.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben ist, wird derselbe Wert sowohl für den horizontalen als auch den vertikalen Radius verwendet, was effektiv einen Kreis erzeugt. In diesem Fall haben `<arc-size>` und `<angle>` keine Wirkung.
    - Wenn entweder der horizontale oder der vertikale Radius null ist, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Wenn entweder der horizontale oder der vertikale Radius negativ ist, wird sein absoluter Wert stattdessen verwendet.
    - Wenn der horizontale und der vertikale Radius keine Ellipse beschreiben, die groß genug ist, um sowohl den Startpunkt als auch den Endpunkt zu kreuzen (nach der Drehung um den angegebenen `<angle>`), werden die Radien gleichmäßig vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu kreuzen.
    - Wenn sich der Start- und Endpunkt des Bogens genau auf gegenüberliegenden Seiten der Ellipse befinden, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den auszuwählenden Bogen an, und `<arc-size>` hat keine Wirkung.

    `close`: Fügt einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) zur Liste der Formbefehle hinzu und zeichnet eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im durch das `from <coordinate-pair>` Parameter definierten Pfad. Um die Form zu schließen, ohne eine Linie zu ziehen, fügen Sie einen `<move-command>` mit den Ursprungskoordinaten vor dem `close` Befehl ein. Wenn der `close` Befehl sofort von einem `<move-command>` gefolgt wird, definiert er den Startpunkt der nächsten Form oder Unterbahn.

## Beschreibung

Die `shape()` Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist in vielerlei Hinsicht der {{cssxref("basic-shape/path","path()")}} Formfunktion ähnlich:

- Der `<fill-rule>` Parameter in der `shape()` Funktion funktioniert genau wie der gleiche Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Angabe von einem oder mehreren `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath), verwendet.

Allerdings bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die standardmäßige CSS-Syntax, was es erleichtert, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, die weniger intuitiv für diejenigen ist, die nicht mit SVG vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozent, `rem` und `em`. `path()` hingegen definiert Formen als einen einzigen String und begrenzt die Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen, wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was beim Definieren von Formen mehr Vielseitigkeit bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()` zur Definition eines Pfades

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurvenpfad, der durch den `curve to` Befehl definiert ist. Als Nächstes zeichnet der `close` Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from` Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zuerst einer horizontalen Linie und bewegt sich dann zurück zu ihrer Startposition bei `50px 90px`. Als Nächstes folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Anfangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln nach und nach zu `hotpink` am Ende der `move` Animation, um beim Neustart der Animation zu ihrer ursprünglichen Farbe zurückzukehren. Diese zyklische Farbanpassung bietet Ihnen einen visuellen Hinweis auf den Fortschritt und den Neustart der Animation.

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

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um unterschiedliche Formen für den Clipsbereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert ist. Die zweite Form (`shape2`) beinhaltet Kurven und weiche Übergänge; sie veranschaulicht auch die Verwendung des `<move-command>` nach dem `close` Befehl, der eine rechteckige Form zum Clipsbereich hinzufügt.

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
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) Leitfaden
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) Leitfaden
