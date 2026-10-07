---
title: CSS-Funktion `shape()`
short-title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Mit der **[CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) `shape()`** wird eine Form für die Eigenschaften {{cssxref("border-shape")}}, {{cssxref("clip-path")}} und {{cssxref("offset-path")}} definiert. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form festlegen. Die Funktion `shape()` gehört zum Datentyp {{cssxref("basic-shape")}}.

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
  - : Legt fest, wie überlappende Bereiche einer Form gefüllt werden. Mögliche Werte sind:
    - `nonzero`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl mehr Pfadsegmente von links nach rechts als von rechts nach links kreuzt und sich dadurch ein von null verschiedener Wert ergibt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Der Strahl ist dann häufiger in die Form eingetreten, als er sie verlassen hat.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt. Seine Verwendung macht die Eigenschaft ungültig.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als Koordinatenpaar, gemessen von der oberen linken Ecke der [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box). Die Koordinaten werden als durch ein Leerzeichen getrennte {{cssxref("&lt;length-percentage&gt;")}}-Werte `<x> <y>` angegeben und beschreiben den Abstand vom linken beziehungsweise oberen Rand. Prozentwerte beziehen sich auf die Breite beziehungsweise Höhe der Referenzbox des Elements. Nach diesem Parameter folgt ein Komma.

- `<shape-command>`
  - : Gibt eine Liste aus einem oder mehreren durch Kommas getrennten Befehlen an, die die Form definieren. Die Syntax ähnelt den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls. Der erste Punkt der Form wird durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) festgelegt.

#### Formbefehle

Die Syntax der meisten Formbefehle besteht aus einem Schlüsselwort, das eine Anweisung vorgibt, beispielsweise `move` oder `line`, gefolgt vom Schlüsselwort `by` oder `to` und einer Reihe von Koordinaten.

- `by`: Gibt an, dass `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein „relativer“ Wert).
- `to`: Gibt an, dass `<coordinate-pair>` relativ zur oberen linken Ecke der Referenzbox ist (ein „absoluter“ Wert).

> [!NOTE]
> Wenn eine Koordinate in `<coordinate-pair>` als Prozentwert angegeben wird, wird der Wert relativ zur jeweiligen Breite oder Höhe der Referenzbox berechnet.

Die folgenden `<shape-command>`-Befehle können angegeben werden:

- `<move-command>`
  - : Wird als `move [by | to] <coordinate-pair>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts, sondern legt die Startposition für den nächsten Befehl fest. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der durch `<coordinate-pair>` angegebene Punkt relativ oder absolut ist. Folgt `<move-command>` auf den Befehl `close`, legt er den Startpunkt der nächsten Form oder des nächsten Teilpfads fest.

- `<line-command>`
  - : Wird als `line [by | to] <coordinate-pair>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Startpunkt zum Endpunkt des Befehls. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der durch `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

- `<hv-line-command>`
  - : Wird als `[hline | vline] [by | to] <length-percentage>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird vom Startpunkt des Befehls eine horizontale Linie bis zur oder um die durch `<length-percentage>` festgelegte `x`-Position gezeichnet. Mit `vline` wird entsprechend eine vertikale Linie bis zur oder um die festgelegte `y`-Position gezeichnet. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der Endpunkt relativ oder absolut ist. Dieser Befehl entspricht einem `<line-command>`, bei dem ein Koordinatenwert durch den einzelnen `<length-percentage>`-Wert festgelegt wird und der andere gegenüber dem Startpunkt unverändert bleibt.

- `<curve-command>`
  - : Wird als `curve [by | to] <end-point> with <control-point> [/ <control-point>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der durch `<end-point>` angegebene Endpunkt der Kurve relativ oder absolut ist.

    Das Schlüsselwort `with` gibt die Kontrollpunkte der Bézierkurve wie folgt an:
    - Wird nur ein `<control-point>` angegeben, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve). Sie wird durch drei Punkte definiert: Startpunkt, Kontrollpunkt und Endpunkt.
    - Werden zwei `<control-point>`-Werte angegeben, zeichnet der Befehl eine kubische Bézierkurve. Sie wird durch vier Punkte definiert: Startpunkt, zwei Kontrollpunkte und Endpunkt.

    Gültige Werte für `<end-point>` sind:
    - {{cssxref("&lt;position>")}}-Schlüsselwörter oder ein `<coordinate-value-pair>`
      - : Können verwendet werden, wenn der Endpunkt der Kurve absolut ist (mit `to` angegeben).
    - `<coordinate-value-pair>`
      - : Kann verwendet werden, wenn der Endpunkt der Kurve relativ ist (mit `by` angegeben).

    Gültige Werte für `<control-point>` sind:
    - {{cssxref("&lt;position>")}}
      - : Gibt ein Positionsschlüsselwort an. Dieser Wert ist nur gültig, wenn der Endpunkt der Kurve absolut ist (mit `to` angegeben).
    - `<coordinate-value-pair>`
      - : Gibt ein Paar von {{cssxref("&lt;length-percentage>")}}-Werten an, die Koordinaten festlegen.
    - `<relative-control-point>`
      - : Definiert ein `<coordinate-value-pair>`, auf das das Schlüsselwort `from` und eines der folgenden Schlüsselwörter folgen:
        - `start`
          - : Gibt an, dass der Kontrollpunkt relativ zum Startpunkt des aktuellen Befehls ist.
        - `end`
          - : Gibt an, dass der Kontrollpunkt relativ zum Endpunkt des aktuellen Befehls ist.
        - `origin`
          - : Gibt an, dass der Kontrollpunkt relativ zum Ursprung (der oberen linken Ecke) des Containers ist, in dem die Form gezeichnet wird.
            > [!NOTE]
            > Werden die Schlüsselwörter von `<relative-control-point>` nicht angegeben, sodass `<control-point>` ein gewöhnliches `<coordinate-value-pair>` ist, beziehen sich die Koordinaten auf den Startpunkt der Kurve. `start` ist also die Standardeinstellung.

- `<smooth-command>`
  - : Wird als `smooth [by | to] <end-point> [with <control-point>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen Befehl für eine [glatte Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der durch `<end-point>` angegebene Endpunkt der Kurve relativ oder absolut ist.

    Das Schlüsselwort `with` gibt einen optionalen Kontrollpunkt für die Bézierkurve an:
    - Wird `with <control-point>` weggelassen, zeichnet der Befehl eine glatte quadratische Bézierkurve. Diese verwendet den vorherigen Kontrollpunkt und den aktuellen Endpunkt, um die Kurve zu definieren.
    - Wird das optionale Schlüsselwort `with` angegeben, legt `<control-point>` einen Kontrollpunkt der Kurve fest. Dadurch wird eine glatte kubische Bézierkurve gezeichnet, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert ist.

    Glatte Kurven gewährleisten einen stetigen Übergang von der vorherigen Formkontur, anders als gewöhnliche quadratische Kurven. Glatte quadratische Kurven erzielen mit einem Kontrollpunkt einen nahtlosen Übergang, während glatte kubische Kurven mit zwei Kontrollpunkten einen feineren Übergang ermöglichen.

    Für `<end-point>` und `<control-point>` gelten dieselben Werte wie für [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Wird als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [Befehl für einen elliptischen Bogen](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das Schlüsselwort `by` beziehungsweise `to` bestimmt, ob der durch das erste `<coordinate-pair>` angegebene Endpunkt der Kurve relativ oder absolut ist.

    Der Befehl für einen elliptischen Bogen definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden. Jede davon kann im oder gegen den Uhrzeigersinn durchlaufen werden. Abhängig von Bogengröße, Richtung und Winkel ergeben sich damit vier mögliche Bögen. Das Schlüsselwort `of` gibt die Größe der Ellipse an, von der der Bogen stammt: Der erste `<length-percentage>`-Wert bestimmt den horizontalen Radius, der zweite den vertikalen Radius der Ellipse.

    Mit den folgenden Parametern legen Sie fest, welcher der vier Bögen verwendet wird:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) entlang der Ellipse verläuft. Wird der Parameter weggelassen, ist `ccw` der Standardwert.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder der kleinere (`small`) der beiden Bögen ist. Wird der Parameter weggelassen, ist `small` der Standardwert.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse gegenüber der x-Achse gedreht wird. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer gegen den Uhrzeigersinn. Wird der Parameter weggelassen, ist `0deg` der Standardwert.

    Sonderfälle werden wie folgt behandelt:
    - Wird nur ein `<length-percentage>`-Wert angegeben, wird derselbe Wert für den horizontalen und den vertikalen Radius verwendet. Dadurch entsteht ein Kreis. In diesem Fall haben `<arc-size>` und `<angle>` keine Wirkung.
    - Ist einer der Radien null, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Ist einer der Radien negativ, wird stattdessen sein Absolutwert verwendet.
    - Beschreiben der horizontale und der vertikale Radius keine Ellipse, die groß genug ist, um nach der Drehung um den angegebenen `<angle>` sowohl den Start- als auch den Endpunkt zu schneiden, werden die Radien gleichmäßig vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Liegen Start- und Endpunkt des Bogens auf genau gegenüberliegenden Seiten der Ellipse, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall bestimmt `<arc-sweep>`, welcher Bogen verwendet wird; `<arc-size>` hat keine Wirkung.

- `close`
  - : Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu. Er zeichnet eine gerade Linie von der aktuellen Position (dem Ende des letzten Befehls) zum ersten Punkt des Pfads, der im Parameter `from <coordinate-pair>` festgelegt wurde. Um die Form ohne das Zeichnen einer Linie zu schließen, fügen Sie vor dem `close`-Befehl einen `<move-command>` mit den ursprünglichen Koordinaten ein. Folgt auf den `close`-Befehl unmittelbar ein `<move-command>`, legt dieser den Startpunkt der nächsten Form oder des nächsten Teilpfads fest.

## Beschreibung

Mit der Funktion `shape()` lassen sich komplexe Formen definieren. Sie ähnelt der Formfunktion {{cssxref("basic-shape/path","path()")}} in mehreren Punkten:

- Der Parameter `<fill-rule>` funktioniert in `shape()` genauso wie in `path()`.
- Für `shape()` müssen ein oder mehrere `<shape-command>`-Befehle angegeben werden. Jeder davon verwendet einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), beispielsweise [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) oder [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Gegenüber `path()` bietet `shape()` jedoch mehrere Vorteile:

- `shape()` verwendet die übliche CSS-Syntax. Dadurch lassen sich Formen direkt im Stylesheet leichter erstellen und ändern. `path()` verwendet dagegen die [SVG-Pfadsyntax](/de/docs/Web/SVG/Reference/Element/path), die für Personen ohne SVG-Kenntnisse weniger intuitiv ist.
- `shape()` unterstützt verschiedene CSS-Einheiten, darunter Prozentwerte, `rem` und `em`. `path()` hingegen definiert Formen als einzelne Zeichenfolge und beschränkt Einheiten auf `px`.
- `shape()` erlaubt außerdem die Verwendung mathematischer CSS-Funktionen wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}. Das macht die Definition von Formen flexibler.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mit `shape()` einen Pfad definieren

Dieses Beispiel zeigt, wie die Funktion `shape()` in der Eigenschaft {{cssxref("offset-path")}} verwendet werden kann, um die Form des Pfads festzulegen, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurven-Pfad, der durch den Befehl `curve to` definiert wird. Anschließend zeichnet der Befehl `close` eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im Befehl `from` festgelegt wurde. Schließlich springt `shape1` an die neue Position `0px 150px` und verläuft von dort entlang einer horizontalen Linie.

Die zweite Form, `shape2`, verläuft zunächst entlang einer horizontalen Linie und springt dann zu ihrem Startpunkt bei `50px 90px` zurück. Anschließend folgt sie einer vertikalen Linie, bevor der Pfad zum Anfangspunkt geschlossen wird.

Beide Formen haben anfangs ihre ursprünglichen Farben und wechseln im Verlauf der Animation `move` allmählich zu `hotpink`. Wenn die Animation erneut beginnt, kehren sie zu ihrer ursprünglichen Farbe zurück. Dieser zyklische Farbwechsel verdeutlicht den Fortschritt und den Neustart der Animation.

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

### Mit `shape()` den sichtbaren Teil eines Elements definieren

Dieses Beispiel zeigt, wie die Funktion `shape()` in der Eigenschaft {{cssxref("clip-path")}} verwendet werden kann, um verschiedene Formen für den Beschneidungsbereich zu erstellen. Die erste Form (`shape1`) verwendet ein aus geraden Linien definiertes Dreieck. Die zweite Form (`shape2`) enthält Kurven und glatte Übergänge. Sie veranschaulicht außerdem die Verwendung von `<move-command>` nach dem Befehl `close`, wodurch dem Beschneidungsbereich eine rechteckige Form hinzugefügt wird.

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

### Mit `shape()` Kurven mit relativen Kontrollpunkten zeichnen

Wie in den vorherigen Beispielen wird auch hier {{cssxref("clip-path")}} verwendet, um unterschiedliche Formen für die Beschneidungsbereiche der Elemente zu erstellen. Die Formen werden durch eine Kombination aus [`<curve-command>`](#curve-command) und [`<smooth-command>`](#smooth-command) angegeben. Für die Kontrollpunkte werden Werte vom Typ [`<relative-control-point>`](#relative-control-point) verwendet.

Die erste Form (`shape1`) zeichnet zwei kubische Bézierkurven.

- Die erste Kurve beginnt in der Mitte der linken Kante der Box und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet – der Mitte der rechten Kante der Box. Sie verwendet einen Kontrollpunkt relativ zum Startpunkt der Kurve und einen relativ zum Ursprung (der oberen linken Ecke der Box).
- Die zweite Kurve beginnt in der Mitte der rechten Kante der Box und wird um `-200px` entlang der x-Achse gezeichnet – bis zur Mitte der linken Kante der Box. Sie verwendet einen Kontrollpunkt relativ zum Ursprung und einen relativ zum Startpunkt der Kurve.

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

Die zweite Form (`shape2`) zeichnet eine quadratische und eine kubische Bézierkurve.

- Die erste Kurve beginnt in der Mitte der linken Kante der Box und wird zu einem absoluten Punkt gezeichnet, der vom Ursprung aus `200px` entlang der x-Achse und `100px` entlang der y-Achse liegt. Sie verwendet einen Kontrollpunkt relativ zum Startpunkt der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorherigen Kurve und wird zur Mitte der linken Kante der Box gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Startpunkt der Kurve und einen relativ zu ihrem Endpunkt.

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

Die dritte Form (`shape3`) zeichnet mithilfe eines `smooth`-Befehls eine quadratische und eine kubische Bézierkurve.

- Die erste Kurve beginnt in der Mitte der linken Kante der Box und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Startpunkt der Kurve.
- Die zweite Kurve beginnt am Endpunkt der vorherigen Kurve und wird zur Mitte der Box gezeichnet. Sie verwendet einen Kontrollpunkt relativ zum Startpunkt der Kurve (den letzten Kontrollpunkt der vorherigen Kurve) und einen relativ zum Ursprung.

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

- {{cssxref("border-shape")}}
- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- Modul [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)
- Leitfaden [Überblick über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- Leitfaden [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
