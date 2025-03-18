---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

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
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## Syntax

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Container-Insets](#syntax_für_rechtecke_durch_container-insets), durch [Koordinatenentfernung](#syntax_für_rechtecke_durch_entfernung) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter benötigt, der der spezifischen Syntax der Formfunktion folgt.

### Gemeinsame Parameter

Die gemeinsamen Parameter in der Syntax einiger grundlegender Formfunktionen umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Insets](#syntax_für_rechtecke_durch_container-insets), [Rechtecke durch Entfernung](#syntax_für_rechtecke_durch_entfernung) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) mit derselben Syntax wie die CSS-[[`border-radius`](/de/docs/Web/CSS/border-radius) Kurzform-Eigenschaft.

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite des Referenzrahmens, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzrahmens.

- `<position>`

  - : Definiert das Zentrum [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`

  - : Setzt die {{SVGAttr("fill-rule")}}, die verwendet wird, um zu bestimmen, wie das Innere der durch die Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form auszufüllen ist. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > **Note:** `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und seine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Container-Insets

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein eingeschobenes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers definiert wird und optional abgerundete Ecken besitzt.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle vier ersten Argumente bereitgestellt werden, stellen sie die oberen, rechten, unteren und linken Versätze vom Referenzrahmen nach innen dar, die die Position der Kanten des eingeschobenen Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzform, die es Ihnen ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einzügen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keinen Bereich umschließen und keinen {{cssxref("shape-margin")}} haben, beeinträchtigen das Umfließen nicht.

### Syntax für Rechtecke durch Entfernung

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Beim Verwenden der `rect()` Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe des Referenzrahmens und die vier Offset-Werte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, eine {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das in den angegebenen Entfernungen von den linken (`x`) und oberen (`y`) Kanten des Referenzrahmens positioniert und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert ist, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, definiert entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}}. Ein Prozentwert wird hier von der verwendeten Breite und Höhe des Referenzrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier gegenüber der verwendeten Breite (für den rx-Wert) und der verwendeten Höhe (für den ry-Wert) des Referenzrahmens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren, wobei jedes Paar aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an der Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenfolge. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines anfänglichen Startpunktes und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzrahmen durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig an der oberen linken Ecke des Margin-Box der Elemente, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden von den Abmessungen des Referenzrahmens aufgelöst.

Der Standard-Referenzrahmen ist der [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Box-Modells, wie sie in den Entwickler-Tools eines Browsers zu sehen sind, hervorhebt. Die Form hier wird in Bezug auf die Margin-Box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wurde. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke des Referenzrahmens berechnet: der erste Versatz ist horizontal, der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils eine {{cssxref("length")}} oder eine {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden zur entsprechenden `inset()` Funktion berechnet.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}} Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzrahmen verwenden, und die Anzahl und Art der Werte in beiden `<basic-shape>` Listen muss übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird auf Basis seines berechneten Wertes als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} interpoliert, wo immer dies möglich ist. Eine Interpolation kann auch dann stattfinden, wenn die Werte nicht eines dieser Datentypen sind, aber zwischen den zwei interpolierenden Grundformfunktionen identisch sind, wie zum Beispiel `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side` zu verwenden).

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie die gleiche `<fill-rule>` verwenden und die gleiche Anzahl von durch Kommata getrennten Koordinatenpaaren aufweisen.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen die gleiche Anzahl, Art und Sequenz von [Pfaddatenbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) aufweisen.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Befehls-Schlüsselwort und das gleiche `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch die gleiche `<fill-rule>` haben.

  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, wird das interpolierte Ergebnis im Uhrzeigersinn (`cw`) sein. Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe mit dem `large` Wert interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in der Anzahl sowie der Sequenz identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen findet keine Interpolation statt und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Scheitelpunkten haben, was für diese Art der Animation erforderlich ist.

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

#### Ergebnis

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}},
- [CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über CSS Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
