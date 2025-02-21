---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`shape()`** [CSS Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um eine Form für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Sie kombiniert einen initialen Startpunkt mit einer Reihe von Formbefehlen, die den Pfad der Form definieren. Die `shape()`-Funktion ist ein Mitglied des {{cssxref("&lt;basic-shape&gt;")}} Datentyps.

## Syntax

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, and close */
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
  curve to 60px 20% via 40px 0,
  smooth to 90px 0,
  curve by -20px 60% via 10% 40px 20% 20px,
  smooth by -40% -10px via -10px 70px
);
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Gibt an, wie sich überlappende Bereiche einer Form gefüllt werden sollen. Die möglichen Werte sind:

    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl von diesem Punkt mehr von links nach rechts als von rechts nach links über die Pfadsegmente geht, was zu einem nicht-null Ergebnis führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl von diesem Punkt eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass für jedes Mal, wenn der Strahl die Form betritt, er sie nicht gleich oft verlässt, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hindeutet.

    > **Warning:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und die Verwendung davon macht die Eigenschaft ungültig.

- `from <coordinate-pair>`

  - : Definiert den Startpunkt des ersten `<shape-command>` als ein Paar von Koordinaten, die von der oberen linken Ecke des [Referenzrahmens](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) gemessen werden. Die Koordinaten werden als durch Leerzeichen getrennte `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} Werte angegeben, die den linken und oberen Versatz darstellen. Prozentwerte sind relativ zur Breite und Höhe des Referenzrahmens des Elements. Fügen Sie nach diesem Parameter ein Komma hinzu.

- `<shape-command>`

  - : Gibt eine Liste von einem oder mehreren kommagetrennten Befehlen an, die die Form definieren und eine Syntax verwenden, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähnelt. Befehle beinhalten `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`. Jeder Befehl beginnt am Endpunkt des vorherigen Befehls, wobei der erste Punkt der Form durch den [`from <coordinate-pair>`](#from_coordinate-pair) Parameter definiert wird.

    Die Syntax der meisten Formbefehle ist ein Schlüsselwort, das eine Anweisung wie `move` oder `line` vorgibt, gefolgt vom `by` oder `to` Schlüsselwort und einem Satz von Koordinaten.

    `by`: Zeigt an, dass das `<coordinate-pair>` relativ zum Startpunkt des Befehls ist (ein "relativer" Wert).

    `to`: Zeigt an, dass das `<coordinate-pair>` relativ zur oberen linken Ecke des Referenzrahmens ist (ein "absoluter" Wert).

    > [!NOTE]
    > Wenn eine Koordinate in einem `<coordinate-pair>` als Prozentwert angegeben ist, wird der Wert relativ zur jeweiligen Breite oder Höhe des Referenzrahmens berechnet.

    Die folgenden `<shape-command>`s können angegeben werden: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` und `close`.

    `<move-command>`: Angegeben als `move [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle ein [MoveTo-Befehl](/de/docs/Web/SVG/Attribute/d#moveto_path_commands) hinzu. Es zeichnet nichts. Stattdessen gibt es die Startposition für den nächsten Befehl an. Das `by` oder `to` Schlüsselwort gibt an, ob der `<coordinate-pair>` Punkt relativ oder absolut ist. Wenn das `<move-command>` dem `close` Befehl folgt, identifiziert es den Startpunkt der nächsten Form oder des nächsten Teilpfads.

    `<line-command>`: Angegeben als `line [by | to] <coordinate-pair>`. Dieser Befehl fügt der Liste der Formbefehle ein [LineTo-Befehl](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) hinzu. Es zeichnet eine gerade Linie vom Startpunkt des Befehls zu seinem Endpunkt. Das `by` oder `to` Schlüsselwort gibt an, ob der Endpunkt, der durch `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    `<hv-line-command>`: Angegeben als `[hline | vline] [by | to] <length-percentage>`. Dieser Befehl fügt der Liste der Formbefehle einen horizontalen (`hline`) oder vertikalen (`vline`) [LineTo-Befehl](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) hinzu. Mit `hline` wird eine horizontale Linie vom Startpunkt des Befehls `to` oder `by` zur `x` Position gemessen, die durch `<length-percentage>` definiert ist. Mit `vline` wird eine vertikale Linie vom Startpunkt des Befehls `to` oder `by` zur `y` Position gemessen, die durch `<length-percentage>` definiert ist. Das `by` oder `to` Schlüsselwort bestimmt den relativen oder absoluten Endpunkt. Dieser Befehl ist gleichwertig mit `<line-command>`, wobei ein Koordinatenwert durch das einzelne `<length-percentage>` gesetzt wird und der andere Koordinatenwert aus dem Startbefehl unverändert bleibt.

    `<curve-command>`: Angegeben als `curve [by | to] <coordinate-pair> via <coordinate-pair> [<coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist. Das `via` Schlüsselwort gibt die Kontrollpunkte der Bézier-Kurve an.

    - Wenn nur ein einziges `<coordinate-pair>` angegeben ist, zeichnet der Befehl eine [quadratische Bézier-Kurve](/de/docs/Web/SVG/Attribute/d#quadratic_bézier_curve), die durch drei Punkte (den Startpunkt, Kontrollpunkt und Endpunkt) definiert ist.
    - Wenn zwei `<coordinate-pair>` Werte angegeben sind, zeichnet der Befehl eine kubische Bézier-Kurve, die durch vier Punkte (den Startpunkt, zwei Kontrollpunkte und den Endpunkt) definiert ist.

    `<smooth-command>`: Angegeben als `smooth [by | to] <coordinate-pair> [via <coordinate-pair>]`. Dieser Befehl fügt der Liste der Formbefehle einen glatten [Bézier-Kurvenbefehl](/de/docs/Web/SVG/Attribute/d#cubic_bézier_curve) hinzu. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    - Wenn `via <coordinate-pair>` weggelassen wird, zeichnet der Befehl eine glatte quadratische Bézier-Kurve, die den vorherigen Kontrollpunkt und den aktuellen Endpunkt verwendet, um die Kurve zu definieren.
    - Wenn das optionale `via` Schlüsselwort enthalten ist, gibt es die Kontrollpunkte der Kurve durch `<coordinate-pair>` an, wobei eine glatte kubische Bézier-Kurve gezeichnet wird, die durch den vorherigen Kontrollpunkt, den aktuellen Kontrollpunkt und den aktuellen Endpunkt definiert ist.

    Glatte Kurven stellen einen kontinuierlichen Übergang von der Form sicher, während quadratische Kurven dies nicht tun. Glatte quadratische Kurven sorgen mit einem einzigen Kontrollpunkt für einen nahtlosen Übergang, während glatte kubische Kurven einen verfeinerten Übergang mit zwei Kontrollpunkten bieten.

    `<arc-command>`: Angegeben als `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Dieser Befehl fügt der Liste der Formbefehle einen [elliptischen Bogenkurve Befehl](/de/docs/Web/SVG/Attribute/d#elliptical_arc_curve) hinzu. Es zeichnet einen elliptischen Bogen zwischen einem Startpunkt und einem Endpunkt. Das `by` oder `to` Schlüsselwort bestimmt, ob der Endpunkt der Kurve, der durch das erste `<coordinate-pair>` angegeben wird, relativ oder absolut ist.

    Der elliptische Bogenkurvenbefehl definiert zwei mögliche Ellipsen, die sowohl den Start- als auch den Endpunkt kreuzen, und jede kann im Uhrzeigersinn oder gegen den Uhrzeigersinn nachgezeichnet werden, was zu vier möglichen Bögen führt, abhängig von der Bogenrichtung, Größe und Winkel. Das `of` Schlüsselwort gibt die Größe der Ellipse an, aus der der Bogen genommen wird: das erste `<length-percentage>` gibt den horizontalen Radius der Ellipse an und das zweite `<length-percentage>` den vertikalen Radius.

    Die folgenden Parameter können angegeben werden, um auszuwählen, welcher der vier Bögen verwendet werden soll:

    - `<arc-sweep>`: Gibt an, ob der gewünschte Bogen der ist, der den Weg im Uhrzeigersinn (`cw`) oder gegen den Uhrzeigersinn (`ccw`) über die Ellipse nimmt. Wird er weggelassen, ist der Standard `ccw`.
    - `<arc-size>`: Gibt an, ob der gewünschte Bogen der größere (`large`) oder kleinere (`small`) der beiden Bögen ist. Wird er weggelassen, ist der Standard `small`.
    - `<angle>`: Gibt den Winkel in Grad an, um den die Ellipse relativ zur x-Achse gedreht wird. Ein positiver Winkel dreht die Ellipse im Uhrzeigersinn und ein negativer Winkel dreht sie gegen den Uhrzeigersinn. Wird er weggelassen, ist der Standard `0deg`.

    Besondere Situationen werden folgendermaßen behandelt:

    - Wenn nur ein `<length-percentage>` angegeben ist, wird derselbe Wert sowohl für den horizontalen als auch vertikalen Radius verwendet, wodurch ein Kreis effektiv erstellt wird. In diesem Fall haben `<arc-size>` und `<angle>` keine Wirkung.
    - Wenn ein Radius null ist, ist der Befehl gleichbedeutend mit einem `<line-command>` zum Endpunkt.
    - Wenn ein Radius negativ ist, wird sein absoluter Wert verwendet.
    - Wenn die horizontalen und vertikalen Radien keine Ellipse beschreiben, die groß genug ist, um den Start- und Endpunkt zu kreuzen (nach der Rotation um den angegebenen `<angle>`), werden die Radien gleichmäßig skaliert, bis die Ellipse gerade groß genug ist, um beide Punkte zu kreuzen.
    - Wenn die Start- und Endpunkte des Bogens genau auf gegenüberliegenden Seiten der Ellipse liegen, gibt es nur eine mögliche Ellipse und zwei mögliche Bögen. In diesem Fall gibt `<arc-sweep>` den Bogen an, der gewählt werden soll, und `<arc-size>` hat keine Wirkung.

    `close`: Fügt der Liste der Formbefehle einen [ClosePath-Befehl](/de/docs/Web/SVG/Attribute/d#closepath) hinzu, der eine gerade Linie von der aktuellen Position (Ende des letzten Befehls) zum ersten Punkt im durch den `from <coordinate-pair>` Parameter definierten Pfad zeichnet. Um die Form zu schließen, ohne eine Linie zu zeichnen, schließen Sie ein `<move-command>` mit den Ursprungskoordinaten vor dem Abschlussbefehl ein. Wenn der `close` Befehl unmittelbar gefolgt von einem `<move-command>` ist, definiert er den Startpunkt der nächsten Form oder des Teilpfads.

## Beschreibung

Die `shape()` Funktion ermöglicht es Ihnen, komplexe Formen zu definieren. Sie ähnelt in vielerlei Hinsicht der {{cssxref("basic-shape/path","path()")}} Formfunktion:

- Der `<fill-rule>` Parameter in der `shape()` Funktion funktioniert genauso wie derselbe Parameter in der `path()` Funktion.
- Die `shape()` Funktion erfordert die Angabe eines oder mehrerer `<shape-command>`s, wobei jeder Befehl einen zugrunde liegenden [Pfadbefehl](/de/docs/Web/SVG/Attribute/d#path_commands) verwendet, wie [MoveTo](/de/docs/Web/SVG/Attribute/d#moveto_path_commands), [LineTo](/de/docs/Web/SVG/Attribute/d#lineto_path_commands) und [ClosePath](/de/docs/Web/SVG/Attribute/d#closepath).

Jedoch bietet `shape()` mehrere Vorteile gegenüber der Verwendung von `path()`:

- `shape()` verwendet die Standard-CSS-Syntax, was das Erstellen und Ändern von Formen direkt in Ihrem Stylesheet erleichtert. Im Vergleich dazu verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Element/path) Syntax, die weniger intuitiv für diejenigen ist, die mit SVG nicht vertraut sind.
- `shape()` unterstützt eine Vielzahl von CSS-Einheiten, einschließlich Prozentwerten, `rem` und `em`. `path()` hingegen definiert Formen als einen einzigen String und beschränkt Einheiten auf `px`.
- `shape()` erlaubt auch die Verwendung von CSS-Mathematikfunktionen, wie {{cssxref("calc")}}, {{cssxref("max")}}, und {{cssxref("abs")}}, was mehr Vielseitigkeit beim Definieren von Formen bietet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `shape()`, um einen Pfad zu definieren

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("offset-path")}} Eigenschaft verwendet werden kann, um die Form des Pfades zu definieren, dem ein Element folgen kann.

Die erste Form, `shape1`, folgt einem kubischen Bézier-Kurvenpfad, der durch den `curve to` Befehl definiert wird. Anschließend zeichnet der `close` Befehl eine gerade Linie vom Endpunkt der Kurve zurück zum ursprünglichen Punkt, der im `from` Befehl definiert ist. Schließlich bewegt sich `shape1` zu seiner neuen Position bei `0px 150px` und fährt dann entlang einer horizontalen Linie fort.

Die zweite Form, `shape2`, folgt zunächst einer horizontalen Linie und kehrt dann zu ihrem Startpunkt bei `50px 90px` zurück. Anschließend folgt sie einer vertikalen Linie, bevor sie den Pfad zurück zum ursprünglichen Punkt schließt.

Beide Formen beginnen mit ihren ursprünglichen Farben und wechseln allmählich zu `hotpink` bis zum Ende der `move` Animation, um dann mit ihrer ursprünglichen Farbe erneut zu beginnen, wenn die Animation neu startet. Dieser zyklische Farbwechsel bietet Ihnen einen visuellen Hinweis auf den Fortschritt und Neustart der Animation.

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

Dieses Beispiel zeigt, wie die `shape()` Funktion in der {{cssxref("clip-path")}} Eigenschaft verwendet werden kann, um verschiedene Formen für den Clipping-Bereich zu erstellen. Die erste Form (`shape1`) verwendet ein Dreieck, das durch gerade Linien definiert ist. Die zweite Form (`shape2`) enthält Kurven und sanfte Übergänge; es zeigt auch die Verwendung des `<move-command>` nach dem `close` Befehl, der dem Clipping-Bereich eine rechteckige Form hinzufügt.

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

/* Clipping region with curves and smooth transitions and a box */
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
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) Leitfaden
- [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) Leitfaden
