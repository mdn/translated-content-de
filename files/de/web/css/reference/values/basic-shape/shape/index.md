---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: bb650d18e1c1411a0fca94564e30dbc24a7ef030
---

Die **`shape()`** [CSS Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die `shape()` Funktion ist ein Mitglied des Datentyps {{cssxref("&lt;basic-shape&gt;")}}.

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
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezogener Strahl von links nach rechts mehr Pfadsegmente kreuzt als von rechts nach links, was zu einem ungleich null Wert führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezogener Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass jedes Mal, wenn der Strahl die Form betritt, er nicht eine gleiche Anzahl von Malen verlassen hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > [!WARNING]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und dessen Verwendung macht die Eigenschaft ungültig.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Paar von Koordinaten, die vom oberen linken Eckpunkt der [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) gemessen werden. Die Koordinaten werden als leerzeichengetrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken und oberen Versatz darstellen. Prozentwerte beziehen sich jeweils auf die Breite und Höhe der Referenzbox des Elements. Fügen Sie nach diesem Parameter ein Komma ein.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren, mit einer Syntax ähnlich den [SVG-Pfad-Befehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert ist.

#### Formbefehle

Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung gibt, wie `move` oder `line`, gefolgt von dem `by` oder `to` Schlüsselwort und einem Satz von Koordinaten.

- `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).
- `to`: Gibt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke der Referenzbox ist (ein "absoluter" Wert).

> [!NOTE]
> Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur entsprechenden Breite oder Höhe der Referenzbox berechnet.

Die folgenden `<shape-command>`s können angegeben werden:

- `<move-command>`
  - : Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts; stattdessen gibt er die Startposition für den nächsten Befehl an. Das `by` oder `to` Schlüsselwort gibt an, ob der `<coordinate-pair>` Punkt relativ oder absolut ist. Wenn dem `<move-command>` der Befehl `close` folgt, identifiziert er den Startpunkt der nächsten Form oder Unterpfads.

- `<line-command>`
  - : Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Er zeichnet eine gerade Linie vom Startpunkt des Befehls zum Endpunkt. Das `by` oder `to` Schlüsselwort gibt an, ob der angegebene Endpunkt durch `<coordinate-pair>` relativ oder absolut ist.

- `<hv-line-command>`
  - : Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` die durch `<length-percentage>` definierte x-Position gezeichnet. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` die durch `<length-percentage>` definierte y-Position gezeichnet. Das `by` oder `to` Schlüsselwort bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl entspricht dem `<line-command>` mit einem Koordinatenwert, der durch den einzelnen `<length-percentage>` festgelegt wird, und dem anderen Koordinatenwert, der vom Startbefehl unverändert bleibt.

- `<curve-command>`
  - : Angegeben als `curve [by | to] <end-point> with <control-point> [/ <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch `<end-point>` spezifiziert wird, relativ oder absolut ist.

    Das `with` Schlüsselwort gibt die Steuerpunkte der Bézierkurve an wie folgt.
    - Wenn nur ein einzelner `<control-point>` angegeben ist, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte definiert ist (der Startpunkt, der Steuerpunkt und der Endpunkt).
    - Wenn zwei `<control-point>` Werte angegeben sind, zeichnet der Befehl eine kubische Bézierkurve, die durch vier Punkte definiert ist (der Startpunkt, zwei Steuerpunkte und der Endpunkt).

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
      - : Definiert ein `<coordinate-value-pair>` gefolgt vom `from` Schlüsselwort und einem der folgenden Schlüsselwörter:
        - `start`
          - : Gibt an, dass der Steuerpunkt relativ zum Startpunkt des aktuellen Befehls ist.
        - `end`
          - : Gibt an, dass der Steuerpunkt relativ zum Endpunkt des aktuellen Befehls ist.
        - `origin`
          - : Gibt an, dass der Steuerpunkt relativ zum Ursprungspunkt (oben links) des Containers ist, in dem die Form gezeichnet wird.
            > [!NOTE]
            > Wenn die `<relative-control-point>` Schlüsselwörter nicht angegeben sind und der `<control-point>` damit ein reguläres `<coordinate-value-pair>` ist, sind die Koordinaten relativ zum Start der Kurve. Die Standardeinstellung ist also `start`.

- `<smooth-command>`
  - : Angegeben als `smooth [by | to] <end-point> [with <control-point>]`. Dieser Befehl fügt der Liste der Formbefehle einen geschmeidigen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch `<end-point>`, relativ oder absolut ist.

    Das `with` Schlüsselwort gibt einen optionalen Steuerpunkt für die Bézierkurve an:
    - Wenn `with <control-point>` weggelassen wird, zeichnet der Befehl eine geschmeidige quadratische Bézierkurve, die den vorherigen Steuerpunkt und den aktuellen Endpunkt zur Definition der Kurve verwendet.
    - Wenn das optionale `with` Schlüsselwort eingeschlossen ist, spezifiziert es Steuerpunkte der Kurve durch `<control-point>`, wobei eine geschmeidige kubische Bézierkurve gezeichnet wird, die durch den vorherigen Steuerpunkt, den aktuellen Steuerpunkt und den aktuellen Endpunkt definiert ist.

    Geschmeidige Kurven sichern einen kontinuierlichen Übergang von der Form, während quadratische Kurven dies nicht tun. Geschmeidige quadratische Kurven halten einen nahtlosen Übergang mit einem einzigen Steuerpunkt aufrecht, während geschmeidige kubische Kurven einen verfeinerten Übergang mit zwei Steuerpunkten bieten.

    Gültige Werte für die Komponenten `<end-point>` und `<control-point>` sind dieselben wie beim [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogen-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` spezifiziert wird, relativ oder absolut ist.

    Der elliptische Bogen-Befehl definiert zwei mögliche Ellipsen, die sowohl den Startpunkt als auch den Endpunkt schneiden, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen je nach Bogengröße, Richtung und Winkel führt. Das `of` Schlüsselwort spezifiziert die Größe der Ellipse, aus der der Bogen genommen wird: das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an, und das zweite `<length-percentage>` gibt den vertikalen Radius an.

    Geben Sie die folgenden Parameter an, um zu entscheiden, welcher der vier Bögen verwendet wird:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse verfolgt wird. Wenn weggelassen, ist dies standardmäßig `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, ist dies standardmäßig `small`.
    - `<angle>`: Gibt den Winkel, in Grad, an, um den die Ellipse relativ zur x-Achse gedreht wird. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer Winkel gegen den Uhrzeigersinn. Wenn weggelassen, beträgt er standardmäßig `0deg`.

    Besondere Situationen werden wie folgt gehandhabt:
    - Wenn nur ein `<length-percentage>` angegeben ist, wird derselbe Wert sowohl für den horizontalen als auch den vertikalen Radius verwendet, wodurch ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keinen Effekt.
    - Wenn ein Radius Null ist, entspricht der Befehl einem `<line-command>` zum Endpunkt.
    - Wenn ein Radius negativ ist, wird sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl Start- als auch Endpunkte zu schneiden (nach der Drehung um den spezifizierten `<angle>`), werden die Radien gleichmäßig vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall bestimmt `<arc-sweep>` den zu wählenden Bogen, und `<arc-size>` hat keinen Effekt.

- `close`
  - : Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im durch den `from <coordinate-pair>` Parameter definierten Pfad zeichnet. Um die Form ohne Zeichnen einer Linie zu schließen, fügen Sie vor dem close-Befehl einen `<move-command>` hinzu, der die ursprünglichen Koordinaten enthält. Wenn dem `close` Befehl direkt ein `<move-command>` folgt, definiert es den Startpunkt der nächsten Form oder Unterpfad.

## Beschreibung

Die `shape()` Funktion erlaubt es Ihnen, komplexe Formen zu definieren. Sie ähnelt der {{cssxref("basic-shape/path","path()")}} Formfunktion in mehreren Punkten:

- Der `<fill-rule>` Parameter in der `shape()` Funktion funktioniert genau wie derselbe Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrundeliegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath), verwendet.

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet standardmäßige CSS-Syntax, wodurch es leichter ist, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, die weniger intuitiv für jene ist, die nicht mit SVG vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()` dagegen definiert Formen als einen einzelnen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen, wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was mehr Vielseitigkeit bei der Definition von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()`, um einen Pfad zu definieren

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfads zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurvenpfad, der durch den `curve to` Befehl definiert ist. Danach zeichnet der `close` Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from` Befehl definiert ist. Schließlich bewegt sich `shape1` an seine neue Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und kehrt dann zu ihrer Startposition bei `50px 90px` zurück. Danach folgt sie einer vertikalen Linie, bevor der Pfad zurück zum Anfangspunkt geschlossen wird.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move` Animation, kehren zu ihrer Anfangsfarbe zurück, wenn die Animation neu startet. Diese zyklische Farbänderung bietet Ihnen einen visuellen Hinweis über den Fortschritt und den Neustart der Animation.

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

### Verwendung von `shape()`, um sichtbare Teile eines Elements zu definieren

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um unterschiedliche Formen für den Clip-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert ist. Die zweite Form (`shape2`) beinhaltet Kurven und weiche Übergänge; sie illustriert auch die Verwendung des `<move-command>` nach dem `close` Befehl, der eine rechteckige Form zum Clip-Bereich hinzufügt.

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

### Verwendung von `shape()`, um Kurven mit relativen Steuerpunkten zu zeichnen

Wie in früheren Beispielen verwendet auch dieses Beispiel {{cssxref("clip-path")}}, um unterschiedliche Formen für die Clip-Bereiche der Elemente zu erstellen. Die Formen werden mithilfe einer Kombination von [`<curve-command>`](#curve-command) und [`<smooth-command>`](#smooth-command) angegeben, und die Steuerpunkte werden mithilfe von [`<relative-control-point>`](#relative-control-point) Werten spezifiziert.

Die erste Form (`shape1`) zeichnet zwei kubische Bézierkurven.

- Die erste Kurve beginnt von der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet — das Zentrum der rechten Kante des Kastens. Sie verwendet einen Steuerpunkt relativ zum Start der Kurve und einen Steuerpunkt relativ zum Ursprung (oben links des Kastens).
- Die zweite Kurve beginnt von der Mitte rechts des Kastens und wird `-200px` entlang der x-Achse gezeichnet — das Zentrum der linken Kante des Kastens. Sie verwendet einen Steuerpunkt relativ zum Ursprung und einen Steuerpunkt relativ zum Start der Kurve.

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

- Die erste Kurve beginnt von der Mitte der linken Kante des Kastens und wird zu einem absoluten Punkt `200px` vom Ursprung entlang der x-Achse und `100px` vom Ursprung entlang der y-Achse gezeichnet. Sie verwendet einen Steuerpunkt relativ zum Start der Kurve.
- Die zweite Kurve beginnt vom vorherigen Kurvenendpunkt und wird zur Mitte links des Kastens gezeichnet. Sie verwendet einen Steuerpunkt relativ zum Start der Kurve und einen Steuerpunkt relativ zum Ende.

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

- Die erste Kurve beginnt von der Mitte der linken Kante des Kastens und wird zu einem Punkt `200px` entlang der x-Achse gezeichnet. Sie verwendet einen Steuerpunkt relativ zum Start der Kurve.
- Die zweite Kurve beginnt vom vorherigen Kurvenendpunkt und wird zur Mitte des Kastens gezeichnet. Sie verwendet einen Steuerpunkt relativ zum Start der Kurve (den letzten Steuerpunkt der vorherigen Kurve) und einen Steuerpunkt relativ zum Ursprung.

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
- [Überblick über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) Leitfaden
- [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) Leitfaden
