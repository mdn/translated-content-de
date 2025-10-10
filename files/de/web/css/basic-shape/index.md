---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [container inset](#syntax_für_rechtecke_durch_containereinlässe), durch [Koordinatendistanz](#syntax_für_rechtecke_durch_distanz) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einem `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Containereinlässe](#syntax_für_rechtecke_durch_containereinlässe), [Rechtecke durch Distanz](#syntax_für_rechtecke_durch_distanz) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung der gleichen Syntax wie die CSS [shorthand-Eigenschaft `border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side`-Schlüsselwert verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der `farthest-side`-Schlüsselwert verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzkastens.

- `<position>`
  - : Definiert das Zentrum [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form ausgefüllt werden soll. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und eine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Containereinlässe

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein eingefügtes Rechteck, dessen Größe durch die Versatzdistanz jeder der vier Seiten seines Containers und optional durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die inneren Ränder von oben, rechts, unten und links des Referenzkastens, die die Position der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzform, die es Ihnen ermöglicht, alle vier Einlässe mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einlässen für eine Dimension mehr als 100% dieser Dimension addiert, werden beide Werte proportional reduziert, sodass ihre Summe 100% entspricht. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einlass von `90%` und einen unteren Einlass von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich umschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Distanz

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der angegebenen Distanzen von den oberen und linken Rändern des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das in den angegebenen Distanzen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens lokalisiert ist und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge bestimmt wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert hier wird als `sqrt(width^2+height^2)/sqrt(2)` aus der verwendeten Breite und Höhe des Referenzkastens aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von kommagetrennten Koordinatenpaaren auf, von denen jedes aus zwei leerzeichengetrennten `<length-percentage>` Werten als das _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein zitierter String. Die `path()`-Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form durch einen initialen Ausgangspunkt und eine Reihe von Formkommandos.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für das erste Formkommando, und `<shape-command>` definiert eines oder mehrere Formkommandos, die den [SVG-Pfadkommandos](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten von der Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke der Margin-Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Dimensionen des Referenzkastens aufgelöst.

Der Standardreferenzkasten ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten demonstriert. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die hier definierte Form bezieht sich auf die Margin-Box.

![Ein Bild, das einen Kreis zeigt, der mit dem Shape Inspector der Firefox DevTools inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als ein Paar von Offsets von der oberen linken Ecke des Referenzkastens berechnet: der erste Offset ist horizontal, und der zweite ist vertikal. Jeder Offset wird als ein {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden in die äquivalente `inset()`-Funktion berechnet.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Um eine Interpolation zwischen zwei Formen vorzunehmen, müssen beide Formen denselben Referenzkasten verwenden, und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann immer noch stattfinden, wenn die Werte nicht eines dieser Datentypen sind, jedoch zwischen den beiden interpolierenden grundlegenden Formfunktionen identisch sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Eine Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Eine Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Eine Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl an kommagetrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Eine Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen der Anzahl, dem Typ und der Sequenz von [Pfaddatenkommandos](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) entsprechen.

- **Beide Formen sind vom Typ `shape()`**: Eine Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Kommando-Schlüsselwort verwenden und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die zwei Formen, wenn sie auch dieselbe `<fill-rule>` haben.
  - Falls sie das `<curve-command>` oder das `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Falls sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, erfolgt das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Falls sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Eine Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenkommandos in Anzahl sowie Sequenz identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste der Pfaddatenkommandos beibehält.

In allen anderen Fällen tritt keine Interpolation auf und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben, was für diese Art der Animation erforderlich ist.

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
- [Bearbeiten von Formenpfaden in den Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
