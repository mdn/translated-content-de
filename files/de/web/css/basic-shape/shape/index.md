---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formbefehlen, die den Verlauf der Form definieren. Die `shape()`-Funktion ist ein Mitglied des Datentyps {{cssxref("&lt;basic-shape&gt;")}}.

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
    - `nonzero`: Ein Punkt wird als innerhalb der Form liegend betrachtet, wenn ein Strahl vom Punkt aus mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt und somit eine ungleiche Anzahl ergibt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form liegend betrachtet, wenn ein Strahl vom Punkt aus eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass der Strahl bei jedem Eintritt in die Form nicht gleich oft wieder austritt, was auf eine ungerade Anzahl von Eingängen ohne korrespondierende Ausgänge hinweist.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- `from <coordinate-pair>`
  - : Definiert den Startpunkt des ersten `<shape-command>` als Koordinatenpaar, das von der oberen linken Ecke des [Referenzkasten](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) aus gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}}-Werte angegeben und repräsentieren den linken Versatz beziehungsweise den oberen Versatz. Prozentwerte sind relativ zur Breite und Höhe des Referenzkastens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`
  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren und eine Syntax verwenden, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnelt. Befehle beinhalten `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert ist.

    Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung bedeuten kann, wie `move` oder `line`, gefolgt vom Schlüsselwort `by` oder `to` und einem Satz von Koordinaten.

    `by`: Weist darauf hin, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relative" Wert).

    `to`: Weist darauf hin, dass das `<coordinate-pair>` relativ zur oberen linken Ecke des Referenzkastens ist (ein "absolute" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben wird, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzkastens berechnet.

    Die folgenden `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Wird als `move [by | to] <coordinate-pair>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Er zeichnet nichts. Stattdessen gibt er die Startposition für den nächsten Befehl an. Das Schlüsselwort `by` oder `to` gibt an, ob der `<coordinate-pair>`-Punkt relativ oder absolut ist. Wenn `<move-command>` dem `close`-Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder Unterstrecke.

    `<line-command>`: Wird als `line [by | to] <coordinate-pair>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Es wird eine gerade Linie vom Startpunkt des Befehls zu seinem Endpunkt gezeichnet. Das Schlüsselwort `by` oder `to` gibt an, ob der durch `<coordinate-pair>` angegebene Endpunkt relativ oder absolut ist.

    `<hv-line-command>`: Wird als `[hline | vline] [by | to] <length-percentage>` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` zur x-Position des durch `<length-percentage>` definierten Endpunkts gezeichnet. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` zur y-Position des durch `<length-percentage>` definierten Endpunkts gezeichnet. Das Schlüsselwort `by` oder `to` bestimmt den relativen beziehungsweise absoluten Endpunkt. Dieser Befehl ist äquivalent zu `<line-command>`, wobei ein Koordinatenwert durch das einzelne `<length-percentage>` festgelegt wird und der andere Koordinatenwert unverändert vom Startbefehl übernommen wird.

    `<curve-command>`: Wird als `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der durch das erste `<coordinate-pair>` angegebene Endpunkt der Kurve relativ oder absolut ist. Das Schlüsselwort `with` spezifiziert die Kontrollpunkte der Bézierkurve.
    - Wenn nur ein einzelnes `<coordinate-pair>` angegeben ist, zeichnet der Befehl eine [quadratische Bézierkurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte (den Startpunkt, den Kontrollpunkt und den Endpunkt) definiert ist.
    - Wenn zwei `<coordinate-pair>`-Werte angegeben sind, zeichnet der Befehl eine kubische Bézierkurve, die durch vier Punkte (den Startpunkt, zwei Kontrollpunkte und den Endpunkt) definiert ist.

    `<smooth-command>`: Wird als `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézierkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das Schlüsselwort `by` oder `to` bestimmt, ob der durch das erste `<coordinate-pair>` angegebene Endpunkt der Kurve relativ oder absolut ist.
    - Wenn `with <coordinate-pair>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézierkurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale Schlüsselwort `with` enthalten ist, spezifiziert es die Kontrollpunkte der Kurve durch `<coordinate-pair>`, und es wird eine glatte kubische Bézierkurve gezeichnet, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert ist.

    Glatte Kurven sorgen für einen kontinuierlichen Übergang von der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven erhalten einen nahtlosen Übergang mit einem einzelnen Kontrollpunkt, während glatte kubische Kurven einen feineren Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Wird als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]` angegeben. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogenkurven-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Es wird ein elliptischer Bogen zwischen einem Startpunkt und einem Endpunkt gezeichnet. Das Schlüsselwort `by` oder `to` bestimmt, ob der durch das erste `<coordinate-pair>` angegebene Endpunkt der Kurve relativ oder absolut ist.

    Der elliptische Bogenkurven-Befehl definiert zwei mögliche Ellipsen, die sowohl den Startpunkt als auch den Endpunkt kreuzen können, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen führt, abhängig von der Bogengröße, -richtung und -winkel. Das Schlüsselwort `of` spezifiziert die Größe der Ellipse, von der der Bogen entnommen wird: das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an, und das zweite `<length-percentage>` gibt den vertikalen Radius an.

    Geben Sie die folgenden Parameter an, um auszuwählen, welchen der vier Bögen Sie verwenden möchten:
    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen derjenige ist, der im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse verfolgt wird. Wenn weggelassen, beträgt der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wenn weggelassen, beträgt der Standardwert `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht werden soll. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer Winkel dreht sie gegen den Uhrzeigersinn. Wenn weggelassen, beträgt der Standardwert `0deg`.

    Besondere Situationen werden wie folgt behandelt:
    - Wenn nur ein `<length-percentage>` angegeben ist, wird der gleiche Wert sowohl für den horizontalen als auch den vertikalen Radius verwendet, wodurch effektiv ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keinen Einfluss.
    - Wenn entweder der horizontale oder der vertikale Radius null ist, ist der Befehl gleichwertig mit einem `<line-command>` zum Endpunkt.
    - Wenn entweder der horizontale oder der vertikale Radius negativ ist, wird sein absoluter Wert verwendet.
    - Wenn der horizontale und der vertikale Radius keine Ellipse beschreiben, die groß genug ist, um sowohl den Startpunkt als auch die Endpunkte nach der Drehung durch den angegebenen `<angle>` zu kreuzen, werden die Radien gleichmäßig nach oben skaliert, bis die Ellipse gerade groß genug ist, um beide Punkte zu kreuzen.
    - Wenn der Start- und Endpunkt des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall spezifiziert `<arc-sweep>` den zu wählenden Bogen, und `<arc-size>` hat keine Auswirkungen.

    `close`: Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) bis zum ersten Punkt im Pfad, der im `from <coordinate-pair>`-Parameter definiert ist, zeichnet. Um die Form zu schließen, ohne eine Linie zu zeichnen, fügen Sie vor dem Schließen-Befehl einen `<move-command>` mit den Ursprungskoordinaten ein. Wenn der `close`-Befehl unmittelbar von einem `<move-command>` gefolgt wird, definiert er den Startpunkt der nächsten Form oder Unterstrecke.

## Beschreibung

Die `shape()`-Funktion erlaubt es, komplexe Formen zu definieren. Sie ist in vielerlei Hinsicht ähnlich zur {{cssxref("basic-shape/path","path()")}}-Formfunktion:

- Der `<fill-rule>`-Parameter in der `shape()`-Funktion funktioniert genau wie derselbe Parameter in der `path()`-Funktion.
- Die `shape()`-Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath).

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die Standard-CSS-Syntax, was es einfacher macht, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax, die weniger intuitiv für diejenigen ist, die nicht mit SVG vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätze, `rem` und `em`. `path()` hingegen definiert Formen als einzigen Zeichenfolgen und beschränkt Einheiten auf `px`.
- `shape()` ermöglicht auch die Verwendung von CSS-Mathematischen Funktionen wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}, was mehr Vielseitigkeit beim Definieren von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()`, um einen Pfad zu definieren

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der Eigenschaft {{cssxref("offset-path")}} verwendet werden kann, um die Form des Pfades, dem ein Element folgen kann, zu definieren.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurvenpfad, der durch den Befehl `curve to` definiert wird. Anschließend zeichnet der `close`-Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum Ausgangspunkt, der im `from`-Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und folgt dann einer horizontalen Linie.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und bewegt sich dann zurück zu ihrer Startposition bei `50px 90px`. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Ausgangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move`-Animation und kehren zu ihrer ursprünglichen Farbe zurück, wenn die Animation neu gestartet wird. Diese zyklische Farbänderung gibt Ihnen einen visuellen Hinweis auf den Fortschritt der Animation und ihren Neustart.

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

### Verwendung von `shape()`, um den sichtbaren Teil eines Elements zu definieren

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der Eigenschaft {{cssxref("clip-path")}} verwendet werden kann, um verschiedene Formen für den Clip-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert wird. Die zweite Form (`shape2`) beinhaltet Kurven und glatte Übergänge; sie veranschaulicht auch die Verwendung des `<move-command>` nach dem `close`-Befehl, der dem Clip-Bereich eine rechteckige Form hinzufügt.

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
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) Leitfaden
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) Leitfaden
