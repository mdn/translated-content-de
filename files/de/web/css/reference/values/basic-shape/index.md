---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Container-Einzüge](#syntax_für_rechtecke_durch_container-einzüge), durch [Koordinatenabstände](#syntax_für_rechtecke_durch_abstände) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [von Autoren erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer der `<basic_shape>` CSS-Funktionen definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Allgemeine Parameter

Die gemeinsamen Parameter für einige grundlegende Formfunktionen umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Einzüge](#syntax_für_rechtecke_durch_container-einzüge), [Rechtecke durch Abstände](#syntax_für_rechtecke_durch_abstände) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie bei der CSS {{cssxref("border-radius")}} Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte sind {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Zentrum der Form bis zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Zentrum der Form bis zur entferntesten Seite des Referenzkastens.

- `<position>`
  - : Definiert das Zentrum {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der Form, die durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird, gefüllt werden soll. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und die Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Untertyp des `<basic-shape>` Typs, repräsentiert die grundlegenden Formfunktionen, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich der Funktionen {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path), und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls zur Erstellung von Rechtecken verwendet werden, sind jedoch nicht auf vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Container-Einzüge

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein Einfügungsrechteck, dessen Größe durch den Abstand von jeder der vier Seiten seines Containers und, optional, durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben werden, repräsentieren sie die oberen, rechten, unteren und linken Einzüge der Kanten des Einfügungsrechtecks vom Referenzkasten nach innen. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzschreibweise, die es ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einzügen für eine Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Einzug von `90%` und einem unteren Einzug von `60%` proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke durch Abstände

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck mit den angegebenen Abständen von den oberen und linken Kanten des Referenzkastens mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der Funktion `rect()` definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe des Referenzkastens und die vier Offset-Werte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens und nach der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks, in dieser Reihenfolge, mit optional abgerundeten Ecken positioniert ist.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert wird. Ein Prozentwert wird hier auf die genutzte Breite und Höhe des Referenzkastens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wird kein Wert angegeben, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achse und y-Achse Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier relativ zur genutzten Breite (für den rx-Wert) und der genutzten Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wird kein Wert angegeben, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von komma-getrennten Koordinatenpaaren, bestehend aus jeweils zwei leerraum-getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar. Diese Werte repräsentieren die x- und y-Achse Koordinaten des Polygons an der Position _i_ (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Die erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein quotierter String. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Bei der Erstellung einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung in der oberen linken Ecke der Margin-Box des Elements standardmäßig, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent angegebenen Längen werden aus den Dimensionen des Referenzkastens ermittelt.

Der Standard-Referenzkasten ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im unten stehenden Bild veranschaulicht. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwickler-Tools eines Browsers zu sehen sind. Die Form hier wird mit Bezug zur Margin-Box definiert.

![Ein Bild, das einen mit dem Firefox DevTools Shape Inspector inspizierten Kreis zeigt. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Offsets von der oberen linken Ecke des Referenzkastens berechnet: Das erste Offset ist horizontal, das zweite ist vertikal. Jedes Offset wird als ein {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen berechnen sich zur äquivalenten `inset()` Funktion.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen denselben Referenzkasten verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc()")}} interpoliert, wo möglich. Interpolation kann immer noch stattfinden, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden zu interpolierenden grundlegenden Formfunktionen identisch sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewandt, wenn ihre Radien als entweder {{cssxref("length")}} oder {{cssxref("percentage")}} (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`) spezifiziert sind.

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewandt.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewandt, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl von komma-getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewandt, wenn die Pfadstrings in beiden Formen die gleiche Anzahl, den Typ und die Reihenfolge von [Pfaddatenbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewandt, wenn sie dasselbe Befehls-Schlüsselwort und denselben `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dasselbe `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, ist das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewandt, wenn die Liste der Pfaddatenbefehle in der Anzahl sowie der Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen tritt keine Interpolation auf und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir den [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) At-Regel, um eine Clip-Pfad-Animation zwischen zwei Polygonen zu erstellen. Beachten Sie, dass beide Polygone die gleiche Anzahl von Ecken haben, was für diese Art von Animation erforderlich ist.

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
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- [Formpfade in den Firefox Developer Tools bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
