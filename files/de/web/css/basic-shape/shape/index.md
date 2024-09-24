---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{SeeCompatTable}}

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Serie von Form-Kommandos, die den Pfad der Form definieren. Die `shape()` Funktion ist ein Mitglied des {{cssxref("&lt;basic-shape&gt;")}} Datentyps.

## Syntax

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, und close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(from 10px 10px, curve to 80px 80px via 160px 1px 20% 16px);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Verwendung einer CSS-Math-Funktion */
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
  curve to 60px 20% via 40px 0,
  smooth to 90px 0,
  curve by -20px 60% via 10% 40px 20% 20px,
  smooth by -40% -10px via -10px 70px
);
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Bestimmt, wie sich überlappende Bereiche einer Form gefüllt werden sollen. Die möglichen Werte umfassen:

    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der von diesem Punkt ausgeht, mehr von links nach rechts als von rechts nach links durch Pfadsegmente verläuft, was zu einem nicht-null Variabilität zählt. Dies ist der Standardwert, wenn `<fill-rule>` ausgelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der von diesem Punkt ausgeht, eine ungerade Anzahl von Pfadsegmente überquert. Dies bedeutet, dass für jede Zeit, die der Strahl in die Form eintritt, er nicht gleich oft ausgetreten ist, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > **Warning:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- `from <coordinate-pair>`

  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Paar von Koordinaten, die von der oberen linken Ecke des [Referenzrahmens](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) gemessen werden. Die Koordinaten werden als Leerzeichen-unterteilte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken Offset und den oberen Offset darstellen. Prozentwerte beziehen sich jeweils auf die Breite und Höhe des Referenzrahmens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`

  - : Gibt eine Liste von einem oder mehreren durch Kommata getrennte Kommandos an, die die Form definieren, mit einer Syntax ähnlich der [SVG-Pfadbefehle](/de/docs/Web/SVG/Attribute/d#path_commands). Kommandos umfassen `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Jeder Startpunkt eines Kommandos ist der Endpunkt des vorherigen Kommandos, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert wird.

    Die Syntax der meisten Form-Kommandos ist ein Stichwort, das eine Direktive vorgibt, wie `move` oder `line`, gefolgt vom `by` oder `to` Stichwort und einem Koordinatensatz.

    `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Kommandos ist (ein "relativer" Wert).

    `to`: Gibt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke des Referenzrahmens ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzrahmens berechnet.

    Die folgenden `<shape-command>` können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Angegeben als `move [by | to] <coordinate-pair>`. Dieses Kommando fügt der Liste der Form-Kommandos ein [MoveTo-Kommando](/de/docs/Web/SVG/Attribute/d#moveto_path_commands) hinzu. Es zeichnet nichts, sondern gibt die Startposition für das nächste Kommando an. Das Stichwort `by` oder `to` gibt an, ob der `<coordinate-pair>` Punkt relativ oder absolut ist. Wenn das `<move-command>` dem `close` Kommando folgt, bestimmt es den Startpunkt der nächsten Form oder Unterschrift.

    `<line-command>`: Angegeben als `line [by | to] <coordinate-pair>`. Dieses Kommando fügt der Liste der Form-Kommandos ein [LineTo-Kommando](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) hinzu. Es zeichnet eine gerade Linie vom Startpunkt des Kommandos zu seinem Endpunkt. Das Stichwort `by` oder `to` gibt an, ob der Endpunkt, der durch `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    `<hv-line-command>`: Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieses Kommando fügt der Liste der Form-Kommandos ein horizontales (`hline`) oder vertikales (`vline`) [LineTo-Kommando](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Kommandos `to` oder `by` zur `x` Position, die durch `<length-percentage>` definiert wird, gezogen. Mit `vline` wird eine vertikale Linie vom Startpunkt des Kommandos `to` oder `by` zur `y` Position, die durch `<length-percentage>` definiert wird, gezogen. Das Stichwort `by` oder `to` bestimmt den relativen oder absoluten Endpunkt. Dieses Kommando ist gleichwertig zu `<line-command>` mit einem Koordinatenwert, der durch den einzelnen `<length-percentage>` festgelegt wird, während der andere Koordinatenwert unverändert vom Startkommando bleibt.

    `<curve-command>`: Angegeben als `curve [by | to] <coordinate-pair> via <coordinate-pair> [<coordinate-pair>]`. Dieses Kommando fügt der Liste der Form-Kommandos ein [Bézier-Kurvenkommando](/de/docs/Web/SVG/Attribute/d#cubic_bézier_curve) hinzu. Das Stichwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist. Das Stichwort `via` gibt die Kontrollpunkte der Bézier-Kurve an.

    - Wenn nur ein einziges `<coordinate-pair>` angegeben wird, zeichnet das Kommando eine [quadratische Bézier-Kurve](/de/docs/Web/SVG/Attribute/d#quadratic_bézier_curve), welche durch drei Punkte definiert ist (den Startpunkt, Kontrollpunkt und Endpunkt).
    - Wenn zwei `<coordinate-pair>` Werte angegeben werden, zeichnet das Kommando eine kubische Bézier-Kurve, die durch vier Punkte definiert ist (den Startpunkt, zwei Kontrollpunkte und den Endpunkt).

    `<smooth-command>`: Angegeben als `smooth [by | to] <coordinate-pair> [via <coordinate-pair>]`. Dieses Kommando fügt der Liste der Form-Kommandos ein geschmeidiges [Bézier-Kurvenkommando](/de/docs/Web/SVG/Attribute/d#cubic_bézier_curve) hinzu. Das Stichwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist.

    - Wenn `via <coordinate-pair>` ausgelassen wird, zeichnet das Kommando eine sanfte quadratische Bézier-Kurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale Stichwort `via` enthalten ist, gibt es die Kontrollpunkte der Kurve durch `<coordinate-pair>` an und zeichnet eine sanfte kubische Bézier-Kurve, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert ist.

    Sanfte Kurven gewährleisten einen kontinuierlichen Übergang aus der Form, während quadratische Kurven dies nicht tun. Sanfte quadratische Kurven halten einen nahtlosen Übergang mit einem einzigen Kontrollpunkt aufrecht, während sanfte kubische Kurven einen feineren Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieses Kommando fügt der Liste der Form-Kommandos ein [elliptisches Bogenkurvenkommando](/de/docs/Web/SVG/Attribute/d#elliptical_arc_curve) hinzu. Es zeichnet ein elliptisches Bogen zwischen einem Startpunkt und einem Endpunkt. Das Stichwort `by` oder `to` bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist.

    Das elliptische Bogenkurvenkommando definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt durchqueren können, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden, was zu vier möglichen Bögen je nach Bogengröße, Richtung und Winkel führt. Das Stichwort `of` gibt die Größe der Ellipse an, aus der der Bogen genommen wird: das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an, und das zweite `<length-percentage>` gibt den vertikalen Radius an.

    Geben Sie die folgenden Parameter an, um auszuwählen, welchen der vier Bögen Sie verwenden möchten:

    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse gezeichnet wird. Wird dies weggelassen, ist der Standardwert `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wird dies weggelassen, ist der Standardwert `small`.
    - `<angle>`: Spezifiziert den Winkel in Grad, um den die Ellipse relativ zur x-Achse rotiert wird. Ein positiver Winkel rotiert die Ellipse im Uhrzeigersinn, ein negativer Winkel rotiert sie gegen den Uhrzeigersinn. Wird dies weggelassen, ist der Standardwert `0deg`.

    Besondere Situationen werden wie folgt behandelt:

    - Wenn nur ein `<length-percentage>` angegeben wird, wird derselbe Wert für sowohl den horizontalen als auch den vertikalen Radius verwendet, wodurch effektiv ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkungen.
    - Wenn einer der Radien null ist, entspricht das Kommando einem `<line-command>` zum Endpunkt.
    - Wenn einer der Radien negativ ist, wird sein absoluter Wert stattdessen verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Start- als auch den Endpunkt (nach Rotation um den angegebenen `<angle>`) zu überschneiden, werden die Radien gleichmäßig skaliert, bis die Ellipse gerade groß genug ist, um beide Punkte zu überschneiden.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den zu wählenden Bogen an, und `<arc-size>` hat keine Auswirkung.

    `close`: Fügt der Liste der Form-Kommandos ein [Pfadschließungskommando](/de/docs/Web/SVG/Attribute/d#closepath) hinzu und zeichnet eine gerade Linie von der aktuellen Position (Ende des letzten Kommandos) zum ersten Punkt im durch den Parameter `from <coordinate-pair>` definierten Pfad. Um die Form zu schließen, ohne eine Linie zu zeichnen, fügen Sie ein `<move-command>` mit den ursprünglichen Koordinaten vor dem Schließkommando ein. Wenn das `close` Kommando unmittelbar von einem `<move-command>` gefolgt wird, definiert es den Startpunkt der nächsten Form oder Unterschrift.

## Beschreibung

Die `shape()` Funktion erlaubt es Ihnen, komplexe Formen zu definieren. Sie ist der {{cssxref("basic-shape/path","path()")}} Form-Funktion in mehreren Punkten ähnlich:

- Der `<fill-rule>` Parameter in der `shape()` Funktion funktioniert genauso wie derselbe Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Spezifizierung eines oder mehrerer `<shape-command>`s, bei denen jedes Kommando ein zugrunde liegendes [Pfadkommando](/de/docs/Web/SVG/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Attribute/d#closepath).

Allerdings bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die standardmäßige CSS-Syntax, wodurch es einfacher wird, Formen direkt in Ihrem Stylesheet zu erstellen und zu modifizieren. Im Vergleich dazu verwendet `path()` die [SVG-Pfads](/de/docs/Web/SVG/Element/path)-Syntax, die für diejenigen, die mit SVG nicht vertraut sind, weniger intuitiv ist.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()` hingegen definiert Formen als einen einzigen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Math-Funktionen wie {{cssxref("calc")}}, {{cssxref("max")}} und {{cssxref("abs")}}, was mehr Vielseitigkeit bei der Definition von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()`, um einen Pfad zu definieren

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézierkurvenpfad, der durch das `curve to` Kommando definiert wird. Als nächstes zeichnet das `close` Kommando eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from` Kommando definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und bewegt sich dann zurück zu ihrer Startposition bei `50px 90px`. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum Anfangspunkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` am Ende der `move` Animation, kehren dann zu ihrer ursprünglichen Farbe zurück, während die Animation neu startet. Diese zyklische Farbänderung bietet Ihnen einen visuellen Hinweis auf den Fortschritt und Neustart der Animation.

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
    curve to 180px 180px via 90px 190px,
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

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um verschiedene Formen für den Clipping-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert wird. Die zweite Form (`shape2`) enthält Kurven und sanfte Übergänge; sie illustriert auch die Verwendung des `<move-command>` nach dem `close` Kommando, das eine rechteckige Form zum Clipping-Bereich hinzufügt.

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

/* Dreieckiger Clipping-Bereich */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* Clipping-Bereich mit Kurven und sanften Übergängen und einem Kasten */
.shape2 {
  clip-path: shape(
    from 10px 10px,
    curve to 60px 20% via 40px 0,
    smooth to 90px 0,
    curve by -20px 60% via 10% 40px 20% 20px,
    smooth by -40% -10px via -10px 70px,
    close,
    move to 100px 100px,
    hline by 50px,
    vline by 50px,
    hline by -50px,
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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) Anleitung
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) Anleitung
