---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{InteractiveExample("CSS Demo: &amp;lt;basic-shape&amp;gt;")}}

```css interactive-example-choice
clip-path: inset(22% 12% 15px 35px);
```

```css interactive-example-choice
clip-path: circle(6rem at 12rem 8rem);
```

```css interactive-example-choice
clip-path: ellipse(115px 55px at 50% 40%);
```

```css interactive-example-choice
clip-path: polygon(
  50% 2.4%,
  34.5% 33.8%,
  0% 38.8%,
  25% 63.1%,
  19.1% 97.6%,
  50% 81.3%,
  80.9% 97.6%,
  75% 63.1%,
  100% 38.8%,
  65.5% 33.8%
);
```

```css interactive-example-choice
clip-path: path("M 50,245 A 160,160 0,0,1 360,120 z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Container-Inset](#syntax_für_rechtecke_durch_container-inset), durch [Koordinatenabstand](#syntax_für_rechtecke_durch_entfernung) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese Grundformen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger Grundformfunktionen gemeinsam sind, sind:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Inset](#syntax_für_rechtecke_durch_container-inset), [Rechtecke durch Entfernung](#syntax_für_rechtecke_durch_entfernung) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS-`border-radius`-Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte sind {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standardwert) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite des Referenzrahmens, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzrahmens.

- `<position>`
  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Setzt die {{SVGAttr("fill-rule")}}, die verwendet wird, um zu bestimmen, wie das Innere der Form, die von den Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird, gefüllt werden soll. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

### Syntax für Rechtecke durch Container-Inset

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein Rechteck-Inset, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, stellen sie die Abstände von oben, rechts, unten und links vom Referenzrahmen nach innen dar, die die Position der Kanten des Rechteck-Insets definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzschreibweise, die es Ihnen ermöglicht, alle vier Insets mit einem, zwei, drei oder vier Werten einzustellen.

Wenn ein Paar von Insets für eine Dimension mehr als 100 % dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % entspricht. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` ein oberes Inset von `90%` und ein unteres Inset von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keine {{cssxref("shape-margin")}} besitzen, beeinflussen das Umbruchverhalten nicht.

### Syntax für Rechtecke durch Entfernung

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der spezifizierten Abstände von den oberen und linken Kanten des Referenzrahmens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Wenn die `rect()` Funktion verwendet wird, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe des Referenzrahmens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das bei den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzrahmens positioniert ist und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge, mit optional abgerundeten Ecken, dimensioniert wird.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus der genutzten Breite und Höhe des Referenzrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzrahmens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von kommagetrennten Koordinatenpaaren, die jeweils aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfad-Definition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Das erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein zitierter String. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form durch einen anfänglichen Startpunkt und eine Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzrahmen durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig an der oberen linken Ecke des Margin-Rahmens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozentsätzen ausgedrückten Längen werden aus den Dimensionen des Referenzrahmens gelöst.

Der Standard-Referenzrahmen ist der [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Box-Modells, wie sie in den Entwicklertools eines Browsers zu sehen sind, hervorhebt. Die Form hier wird in Bezug auf den Margin-Rahmen definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector untersucht wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte der Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Versatzwerten von der oberen linken Ecke des Referenzrahmens berechnet: der erste Versatz ist horizontal, und der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten expandiert, die entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen berechnen sich zur äquivalenten `inset()` Funktion.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzrahmen verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird auf Grundlage seines berechneten Wertes als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo immer möglich. Eine Interpolation kann auch dann stattfinden, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird auf jeden entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie die gleiche `<fill-rule>` verwenden und die gleiche Anzahl an kommagetrentenen Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfad-Strings in beiden Formen die gleiche Anzahl, den gleichen Typ und die gleiche Sequenz von [Pfaddatenbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort und das gleiche `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch das gleiche `<fill-rule>` haben.
  - Wenn sie das `<curve-command>` oder `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe mit Verwendung des `large` Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Sequenz identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) Regel, um einen Clippfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Scheitelpunkten haben müssen, damit dieser Animationstyp funktioniert.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### Resultat

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}}
- SVG-Formelemente: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Überblick über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- [Formpfade in den Firefox-Entwicklertools bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
