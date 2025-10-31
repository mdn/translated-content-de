---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{InteractiveExample("CSS Demo: &lt;basic-shape&gt;")}}

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

Der `<basic-shape>`-Datentyp wird verwendet, um Grundformen zu erstellen, einschließlich Rechtecke durch [Einfügungen des Containers](#syntax_für_rechtecke_durch_einfügungen_des_containers), durch [Koordinatendistanzen](#syntax_für_rechtecke_durch_distanzen) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese Grundformen werden unter Verwendung einer der `<basic_shape>`-CSS-Funktionen definiert, wobei jeder Wert einen Parameter benötigt, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger Grundformfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Einfügungen des Containers](#syntax_für_rechtecke_durch_einfügungen_des_containers), [Rechtecke durch Distanzen](#syntax_für_rechtecke_durch_distanzen) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung der gleichen Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standardwert) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite der Referenzbox, um die Radiushöhe zu erstellen. Das Schlüsselwort `farthest-side` verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite der Referenzbox.

- `<position>`
  - : Definiert das Zentrum von [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird auf `center` gesetzt, wenn es nicht angegeben wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der Form ausgefüllt werden soll, die durch die Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird. Mögliche Werte sind `nonzero` (Standardwert) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt, und die Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>`-Typ, ein Untertyp des `<basic-shape>`-Typs, repräsentiert die Grundformfunktionen, die auf die Erstellung von Rechtecken begrenzt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/basic-shape/shape) können auch zur Erstellung von Rechtecken verwendet werden, sind jedoch nicht nur auf viereckige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Einfügungen des Containers

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein Einfügungsrechteck, dessen Größe durch die Versatzdistanz jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert ist.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle vier ersten Argumente angegeben werden, repräsentieren sie die oberen, rechten, unteren und linken Abstände von der Referenzbox nach innen, die die Position der Ränder des Einfügungsrechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzschreibweise, die es ermöglicht, alle vier Einfügungen mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einfügungen einer Dimension insgesamt mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% beträgt. Beispielsweise weist der Wert `inset(90% 10% 60% 10%)` eine obere Einfügung von `90%` und eine untere Einfügung von `60%` auf. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die kein Gebiet einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umbruchverhalten nicht.

#### Syntax für Rechtecke durch Distanzen

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern der Referenzbox mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Rändern der Referenzbox befindet und mit der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks, in dieser Reihenfolge, mit optional abgerundeten Ecken, dimensioniert wird.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier anhand der verwendeten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn nicht angegeben, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formung ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren entgegen, wobei jedes aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten als _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an der Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Das erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenkette. Die `path()`-Funktion ist kein gültiger {{cssxref("shape-outside")}}-Eigenschaftswert.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines Anfangspunktes und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>`-Parameter repräsentiert den Anfangspunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger {{cssxref("shape-outside")}}-Eigenschaftswert.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Rands der Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden anhand der Dimensionen der Referenzbox aufgelöst.

Die Standardreferenzbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Boxmodells hervorhebt, wie sie in den Entwicklerwerkzeugen eines Browsers zu sehen sind. Die Form wird hier in Bezug auf die Margin-Box definiert.

![Ein Bild, das einen mit dem Firefox DevTools Shape Inspector inspizierten Kreis zeigt. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden die Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: Der erste Versatz ist horizontal, der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen berechnen sich zur gleichwertigen `inset()`-Funktion.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die nachstehend aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen die gleiche Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann immer noch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side` zu verwenden).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie die gleiche `<fill-rule>` verwenden und die gleiche Anzahl von durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfad-Strings in beiden die gleiche Anzahl, Typ und Reihenfolge von [Pfaddatenbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und das gleiche `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, werden die beiden Formen interpoliert, wenn sie auch die gleiche `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe unter Verwendung des Wertes `large` interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl sowie Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste der Pfaddatenbefehle beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes)-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, damit diese Art von Animation funktioniert.

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
- [Überblick über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [Bearbeiten von Formpfaden in den Firefox-Entwicklerwerkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
