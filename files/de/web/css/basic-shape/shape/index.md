---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Ausgangspunkt mit einer Serie von Formbefehlen, die den Pfad der Form definieren. Die `shape()`-Funktion ist ein Mitglied des Datentyps {{cssxref("&lt;basic-shape&gt;")}}.

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

  - : Gibt an, wie sich überlappende Bereiche einer Form gefüllt werden sollen. Die möglichen Werte sind:

    - `nonzero`: Ein Punkt gilt als innerhalb der Form, wenn ein vom Punkt aus gezogener Strahl mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer ungleichmäßigen Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` ausgelassen wird.

    - `evenodd`: Ein Punkt gilt als innerhalb der Form, wenn ein vom Punkt aus gezogener Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Dies bedeutet, dass der Strahl für jede Eingabe nicht die gleiche Anzahl an Ausgängen hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Ausgänge hinweist.

    > [!WARNING] > `<fill-rule>` wird von {{cssxref("offset-path")}} nicht unterstützt und führt zu einer Ungültigkeit der Eigenschaft.

- `from <coordinate-pair>`

  - : Definiert den Ausgangspunkt des ersten `<shape-command>` als Paar von Koordinaten, die vom oberen linken Eckpunkt des [Referenzrahmens](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) gemessen werden. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}}-Werte angegeben, die jeweils den linken und den oberen Versatz darstellen. Prozentwerte beziehen sich jeweils auf die Breite und Höhe des Referenzrahmens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`

  - : Gibt eine Liste von einem oder mehreren durch Kommas getrennten Befehlen an, die die Form definieren, wobei eine Syntax verwendet wird, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnelt. Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Ausgangspunkt jedes Befehls ist der Endpunkt des vorhergehenden Befehls, wobei der erste Punkt der Form durch den [`from <coordinate-pair>`](#from_coordinate-pair)-Parameter definiert wird.

    Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung liefert, wie `move` oder `line`, gefolgt von dem Schlüsselwort `by` oder `to` und einem Satz von Koordinaten.

    `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Ausgangspunkt des Befehls ist (ein "relativer" Wert).

    `to`: Gibt an, dass das `<coordinate-pair>` relativ zum oberen linken Eckpunkt des Referenzrahmens ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzrahmens berechnet.

    Folgende `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts, sondern gibt die Ausgangsposition für den nächsten Befehl an. Das Schlüsselwort `by` oder `to` gibt an, ob der `<coordinate-pair>`-Punkt relativ oder absolut ist. Wenn der `<move-command>` dem `close`-Befehl folgt, identifiziert er den Ausgangspunkt der nächsten Form oder Teilpfades.

    `<line-command>`: Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Ausgangspunkt des Befehls bis zu seinem Endpunkt. Das Schlüsselwort `by` oder `to` gibt an, ob der durch `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

    `<hv-line-command>`: Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Ausgangspunkt des Befehls `to` oder `by` zur durch `<length-percentage>` definierten `x`-Position gezogen. Mit `vline` wird eine vertikale Linie vom Ausgangspunkt des Befehls `to` oder `by` zur durch `<length-percentage>` definierten `y`-Position gezogen. Das Schlüsselwort `by` oder `to` bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl entspricht einem `<line-command>`, bei dem ein Koordinatenwert durch die einzelne `<length-percentage>` festgelegt wird und der andere Koordinatenwert aus seinem Ausgangsbefehl unverändert bleibt.

    `<curve-command>`: Angegeben als `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist. Das `with`-Schlüsselwort gibt die Kontrollpunkte der Bézier-Kurve an.

    - Wenn nur ein einzelnes `<coordinate-pair>` bereitgestellt wird, zeichnet der Befehl eine [quadratische Bézier-Kurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte (den Startpunkt, den Kontrollpunkt und den Endpunkt) definiert wird.
    - Wenn zwei `<coordinate-pair>`-Werte bereitgestellt werden, zeichnet der Befehl eine kubische Bézier-Kurve, die durch vier Punkte (den Startpunkt, zwei Kontrollpunkte und den Endpunkt) definiert wird.

    `<smooth-command>`: Angegeben als `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    - Wenn `with <coordinate-pair>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézier-Kurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt zur Definition der Kurve verwendet.
    - Wenn das optionale `with`-Schlüsselwort enthalten ist, gibt es die Kontrollpunkte der Kurve durch `<coordinate-pair>` an und zeichnet eine glatte kubische Bézier-Kurve, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert wird.

    Glatte Kurven gewährleisten einen kontinuierlichen Übergang aus der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven bieten einen nahtlosen Übergang mit einem einzelnen Kontrollpunkt, während glatte kubische Kurven einen verfeinerten Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogenkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das Schlüsselwort `by` oder `to` bestimmt, ob der Endpunkt Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    Der elliptische Bogenkurvenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden können, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn gezeichnet werden, was zu vier möglichen Bögen je nach Bogengröße, Richtung und Winkel führt. Das `of`-Schlüsselwort spezifiziert die Größe der Ellipse, aus dem der Bogen genommen wird: Der erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an und der zweite `<length-percentage>` den vertikalen Radius.

    Geben Sie die folgenden Parameter an, um festzulegen, welcher der vier Bögen verwendet wird:

    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) gezeichnete Bogen ist. Wenn weggelassen, ist der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist der Standardwert `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht wird. Ein positiver Winkel rotiert die Ellipse im Uhrzeigersinn, ein negativer Winkel gegen den Uhrzeigersinn. Wenn weggelassen, ist der Standardwert `0deg`.

    Spezielle Situationen werden wie folgt behandelt:

    - Wenn nur ein `<length-percentage>` bereitgestellt wird, wird der gleiche Wert sowohl für den horizontalen als auch den vertikalen Radius verwendet, wodurch ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkung.
    - Wenn einer der Radien null ist, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Wenn einer der Radien negativ ist, wird stattdessen der absolute Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Start- als auch Endpunkt zu schneiden (nach Rotation um den angegebenen `<angle>`), werden die Radien gleichmäßig hochskaliert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall spezifiziert `<arc-sweep>` den auszuwählenden Bogen und `<arc-size>` hat keine Wirkung.

    `close`: Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im Pfad, der im `from <coordinate-pair>`-Parameter definiert wird, zeichnet. Um die Form zu schliessen, ohne eine Linie zu zeichnen, fügen Sie vor dem Schließen-Befehl einen `<move-command>` mit den ursprünglichen Koordinaten ein. Wenn dem `close`-Befehl unmittelbar ein `<move-command>` folgt, definiert er den Ausgangspunkt der nächsten Form oder des nächsten Teilpfades.

## Beschreibung

Die `shape()`-Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist in mehreren Aspekten der `path()`-Formfunktion ähnlich:

- Der `<fill-rule>`-Parameter in der `shape()`-Funktion funktioniert genau wie derselbe Parameter in der `path()`-Funktion.
- Die `shape()`-Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Allerdings bietet `shape()` mehrere Vorteile gegenüber `path()`:

- `shape()` verwendet die standardmäßige CSS-Syntax, wodurch es einfacher ist, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax, die für diejenigen, die mit SVG nicht vertraut sind, weniger intuitiv ist.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()`, hingegen, definiert Formen als einen einzigen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von mathematischen CSS-Funktionen, wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}, und bietet mehr Vielseitigkeit bei der Definition von Formen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `shape()` zur Definition eines Pfades

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("offset-path")}}-Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form `shape1` folgt einem kubischen Bézier-Kurvenpfad, der durch den `curve to`-Befehl definiert wird. Als nächstes zeichnet der `close`-Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum anfänglichen Punkt, der im `from`-Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und verläuft dann entlang einer horizontalen Linie.

Die zweite Form `shape2` folgt zunächst einer horizontalen Linie und bewegt sich dann zurück zu ihrer Ausgangsposition bei `50px 90px`. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Anfangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move`-Animation und kehren zu ihrer ursprünglichen Farbe zurück, wenn die Animation neu startet. Diese zyklische Farbänderung gibt Ihnen einen visuellen Hinweis auf den Fortschritt und Neustart der Animation.

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

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("clip-path")}}-Eigenschaft verwendet werden kann, um verschiedene Formen für die Clip-Region zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert wird. Die zweite Form (`shape2`) enthält Kurven und sanfte Übergänge; sie illustriert auch die Verwendung des `<move-command>` nach dem `close`-Befehl, der der Clip-Region eine rechteckige Form hinzufügt.

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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)-Leitfaden
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)-Leitfaden
