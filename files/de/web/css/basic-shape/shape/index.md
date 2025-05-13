---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: ce8b5d6895272940eb3ab1685727121f9431985d
---

{{CSSRef}}

Die **`shape()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen anfänglichen Startpunkt mit einer Reihe von Formenbefehlen, die den Pfad der Form definieren. Die `shape()`-Funktion ist ein Mitglied des Datentyps {{cssxref("&lt;basic-shape&gt;")}}.

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

    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer ungleichen Anzahl führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass für jede Begegnung, bei der der Strahl die Form betritt, er kein gleiches Ausmaß an Austritten hatte, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > **Warning:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und kann zu einer ungültigen Eigenschaft führen.

- `from <coordinate-pair>`

  - : Definiert den Ausgangspunkt des ersten `<shape-command>` als ein Koordinatenpaar, das vom oberen linken Eckpunkt der [Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) gemessen wird. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken und oberen Versatz darstellen. Prozentangaben beziehen sich auf die Breite bzw. Höhe der Referenzbox des Elements. Fügen Sie ein Komma nach diesem Parameter hinzu.

- `<shape-command>`

  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren. Sie verwenden eine Syntax ähnlich den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Zu den Befehlen gehören `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Der Startpunkt jedes Befehls ist der Endpunkt des vorhergehenden Befehls, wobei der erste Punkt der Form durch den Parameter [`from <coordinate-pair>`](#from_coordinate-pair) definiert wird.

    Die Syntax der meisten Formenbefehle besteht aus einem Schlüsselwort, das eine Anweisung angibt, wie `move` oder `line`, gefolgt von den Schlüsselwörtern `by` oder `to` und einem Satz von Koordinaten.

    `by`: Gibt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).

    `to`: Gibt an, dass das `<coordinate-pair>` relativ zum oberen linken Eckpunkt der Referenzbox ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentsatz angegeben ist, wird der Wert relativ zur jeweiligen Breite oder Höhe der Referenzbox berechnet.

    Die folgenden `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formenbefehle einen [MoveTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands) hinzu. Es wird nichts gezeichnet. Vielmehr wird die Startposition für den nächsten Befehl angegeben. Das `by`- oder `to`-Schlüsselwort gibt an, ob der `<coordinate-pair>`-Punkt relativ oder absolut ist. Wenn das `<move-command>` dem `close`-Befehl folgt, gibt es den Startpunkt der nächsten Form oder des nächsten Unterpfads an.

    `<line-command>`: Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formenbefehle einen [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Es wird eine gerade Linie vom Startpunkt des Befehls bis zum Endpunkt gezeichnet. Das `by`- oder `to`-Schlüsselwort gibt an, ob der Endpunkt, der durch `<coordinate-pair>` angegeben ist, relativ oder absolut ist.

    `<hv-line-command>`: Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formenbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `x`-Position gezogen. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` der durch `<length-percentage>` definierten `y`-Position gezogen. Das `by`- oder `to`-Schlüsselwort bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl entspricht `<line-command>`, wobei ein Koordinatenwert durch das einzelne `<length-percentage>` festgelegt und der andere Koordinatenwert unverändert vom Startbefehl übernommen wird.

    `<curve-command>`: Angegeben als `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formenbefehle einen [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist. Das `with`-Schlüsselwort gibt die Kontrollpunkte der Bézier-Kurve an.

    - Wenn nur ein einziges `<coordinate-pair>` angegeben wird, zeichnet der Befehl eine [quadratische Bézier-Kurve](/de/docs/Web/SVG/Reference/Attribute/d#quadratic_bézier_curve), die durch drei Punkte definiert wird (Startpunkt, Kontrollpunkt und Endpunkt).
    - Wenn zwei `<coordinate-pair>`-Werte angegeben werden, zeichnet der Befehl eine kubische Bézier-Kurve, die durch vier Punkte definiert wird (Startpunkt, zwei Kontrollpunkte und Endpunkt).

    `<smooth-command>`: Angegeben als `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formenbefehle einen glatten [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) hinzu. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist.

    - Wird `with <coordinate-pair>` weggelassen, zeichnet der Befehl eine glatte quadratische Bézier-Kurve, die mit dem vorherigen Kontrollpunkt und dem aktuellen Endpunkt die Kurve definiert.
    - Wird das optionale `with`-Schlüsselwort eingeschlossen, spezifiziert es die Kontrollpunkte der Kurve durch `<coordinate-pair>`, und es wird eine glatte kubische Bézier-Kurve gezeichnet, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert wird.

    Glatte Kurven sorgen für einen kontinuierlichen Übergang von der Form, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven gewährleisten einen nahtlosen Übergang mit einem einzigen Kontrollpunkt, während glatte kubische Kurven einen verfeinerten Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formenbefehle einen [elliptischen Bogenkurvenbefehl](/de/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve) hinzu. Er zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das `by`- oder `to`-Schlüsselwort bestimmt, ob der Endpunkt der Kurve, angegeben durch das erste `<coordinate-pair>`, relativ oder absolut ist.

    Der elliptische Bogenkurvenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt schneiden und jeweils im Uhrzeigersinn oder gegen den Uhrzeigersinn verfolgt werden können, was zu vier möglichen Bögen führt, abhängig von der Bogengröße, Richtung und dem Winkel. Das `of`-Schlüsselwort spezifiziert die Größe der Ellipse, aus der der Bogen entnommen wird: das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an und das zweite `<length-percentage>` den vertikalen Radius.

    Spezifizieren Sie die folgenden Parameter, um auszuwählen, welche der vier Bögen verwendet werden sollen:

    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) um die Ellipse verfolgt wird. Wird er weggelassen, ist `ccw` der Standardwert.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wird er weggelassen, ist `small` der Standardwert.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht werden soll. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn, ein negativer Winkel gegen den Uhrzeigersinn. Wird er weggelassen, ist `0deg` der Standardwert.

    Besondere Situationen werden wie folgt behandelt:

    - Wird nur ein `<length-percentage>` angegeben, wird derselbe Wert sowohl für den horizontalen als auch für den vertikalen Radius verwendet, wodurch ein Kreis entsteht. In diesem Fall haben `<arc-size>` und `<angle>` keine Auswirkungen.
    - Wenn ein Radius null ist, ist der Befehl äquivalent zu einem `<line-command>` zum Endpunkt.
    - Wenn ein Radius negativ ist, wird sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um sowohl den Start- als auch den Endpunkt zu schneiden (nach Drehung um den angegebenen `<angle>`), werden die Radien einheitlich vergrößert, bis die Ellipse gerade groß genug ist, um beide Punkte zu schneiden.
    - Wenn die Start- und Endpunkte des Bogens genau gegenüber auf der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den zu wählenden Bogen an und `<arc-size>` hat keine Auswirkungen.

    `close`: Fügt der Liste der Formenbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Reference/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im durch den `from <coordinate-pair>`-Parameter definierten Pfad zeichnet. Um die Form zu schließen, ohne eine Linie zu zeichnen, fügen Sie vor dem `close`-Befehl einen `<move-command>` mit den Ursprungskorodinaten hinzu. Wenn der `close`-Befehl unmittelbar von einem `<move-command>` gefolgt wird, definiert dieser den Startpunkt der nächsten Form oder des nächsten Unterpfads.

## Beschreibung

Die `shape()`-Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ist in mehreren Aspekten der {{cssxref("basic-shape/path","path()")}}-Formenfunktion ähnlich:

- Der `<fill-rule>`-Parameter in der `shape()`-Funktion funktioniert genau wie der gleiche Parameter in der `path()`-Funktion.
- Die `shape()`-Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`-s, wobei jeder Befehl einen zugrundeliegenden [Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), wie [MoveTo](/de/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Reference/Attribute/d#closepath) verwendet.

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die standardmäßige CSS-Syntax, was es einfacher macht, Formen direkt in Ihrem Stylesheet zu erstellen und zu ändern. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax, die für diejenigen, die nicht mit SVG vertraut sind, weniger intuitiv ist.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentsätzen, `rem` und `em`. `path()` hingegen definiert Formen als eine einzelne Zeichenkette und beschränkt die Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was bei der Formdefinition mehr Vielseitigkeit bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()`, um einen Pfad zu definieren

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("offset-path")}}-Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézier-Kurvenpfad, der durch den `curve to`-Befehl definiert ist. Danach zeichnet der `close`-Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum Anfangspunkt, der im `from`-Befehl definiert ist. Schließlich bewegt sich `shape1` zu ihrer neuen Position bei `0px 150px` und folgt dann einer horizontalen Linie.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie, kehrt dann zu ihrer Ausgangsposition bei `50px 90px` zurück. Anschließend folgt sie einer vertikalen Linie, bevor der Pfad wieder zum Anfangspunkt geschlossen wird.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` am Ende der `move`-Animation, wobei sie zu ihrer Anfangsfarbe zurückkehren, wenn die Animation neu startet. Diese zyklische Farbänderung bietet Ihnen einen visuellen Hinweis auf den Fortschritt und Neustart der Animation.

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

Dieses Beispiel zeigt, wie die `shape()`-Funktion in der {{cssxref("clip-path")}}-Eigenschaft verwendet werden kann, um verschiedene Formen für den Clipping-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert ist. Die zweite Form (`shape2`) enthält Kurven und sanfte Übergänge; sie zeigt auch die Verwendung des `<move-command>` nach dem `close`-Befehl, der dem Clipping-Bereich eine rechteckige Form hinzufügt.

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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) Leitfaden
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) Leitfaden
