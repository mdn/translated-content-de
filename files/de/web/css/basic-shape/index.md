---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## Syntax

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen wie Rechtecke durch [Container-Einrückung](#syntax_für_rechtecke_durch_container-einrückungen), durch [Koordinatenabstand](#syntax_für_rechtecke_durch_abstand) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen) zu erstellen. Diese grundlegenden Formen werden mit einer `<basic_shape>`-CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen häufig auftreten, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Einrückungen](#syntax_für_rechtecke_durch_container-einrückungen), [Rechtecke durch Abstand](#syntax_für_rechtecke_durch_abstand) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) unter Verwendung der gleichen Syntax wie die CSS-Kurzeigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standardwert) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form bis zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form bis zur entferntesten Seite der Referenzbox.

- `<position>`
  - : Definiert die zentrale [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen bestimmten Form [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) gefüllt werden soll. Mögliche Werte sind `nonzero` (der Standardwert) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Container-Einrückungen

Die {{cssxref("basic-shape/inset","inset()")}}-Funktion erstellt ein eingekerbtes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die oberen, rechten, unteren und linken Versätze von der Referenzbox nach innen, die die Position der Kanten des eingekerbten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzeigenschaft, die es Ihnen ermöglicht, alle vier Einrückungen mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einrückungen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional so reduziert, dass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Abstand

Die {{cssxref("basic-shape/rect","rect()")}}-Funktion definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Kanten der Referenzbox, mit optionalen abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen spezifizieren Sie vier Werte, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, eine {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Abmessungen

Die {{cssxref("basic-shape/xywh","xywh()")}}-Funktion definiert ein Rechteck, das sich an den angegebenen Abständen von der linken (`x`) und oberen (`y`) Kante der Referenzbox befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge mit optionalen abgerundeten Ecken dimensioniert ist.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}}-Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises und wird entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wird es weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}}-Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x- und y-Achsenradien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier für die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben ist, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}}-Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Komma getrennten Koordinatenpaaren, jedes bestehend aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten als _xi_ und _yi_ Paar. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an der Position _i_ (der Eckpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}}-Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenfolgenwert. Die `path()`-Funktion ist kein gültiger {{cssxref("shape-outside")}}-Eigenschaftswert.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}}-Funktion definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger {{cssxref("shape-outside")}}-Eigenschaftswert.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke der Margin-Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Dimensionen der Referenzbox aufgelöst.

Die Standard-Referenzbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Box-Modells, wie sie in den Entwickler-Tools eines Browsers zu sehen sind, hervorhebt. Die Form wird hier in Bezug auf die Margin-Box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector untersucht wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: der erste Versatz ist horizontal, der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die entweder eine {{cssxref("length")}} oder eine {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen berechnen sich zur äquivalenten `inset()`-Funktion.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen die gleiche Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wenn möglich. Eine Interpolation kann auch dann stattfinden, wenn die Werte nicht von diesen Datentypen sind, aber zwischen den beiden interpolierenden grundlegenden Formfunktionen identisch sind, wie beispielsweise `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das gleiche `<fill-rule>` verwenden und die gleiche Anzahl von durch Komma getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen in Anzahl, Typ und Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und dasselbe `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch das gleiche `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Steuerpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, dreht sich das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mit dem `large`-Wert interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) at-Regel, um einen Clipping-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, damit diese Art von Animation funktioniert.

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

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}}
- SVG-Formelemente: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking)-Modul
- [Formpfade in den Firefox-Entwicklerwerkzeugen bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
