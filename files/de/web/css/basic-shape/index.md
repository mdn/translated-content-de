---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 3b8cbcef38a3470c1e61b2d57af8bf92957ce834
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine Form, die in den {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} Eigenschaften verwendet wird.

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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen einschließlich Rechtecken durch [Behälter-Einfügungen](#syntax_fur_rechtecke_durch_container-einfugungen), durch [Koordinatenabstand](#syntax_fur_rechtecke_durch_abstand), oder durch [festgelegte Dimensionen](#syntax_fur_rechtecke_mit_dimensionen), [Kreise](#syntax_fur_kreise), [Ellipsen](#syntax_fur_ellipsen), [Polygone](#syntax_fur_polygone), [Pfade](#syntax_fur_pfade), und [vom Autor erstellte Formen](#syntax_fur_formen) zu erstellen. Diese grundlegenden Formen werden unter Verwendung einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter benötigt, der der formfunktionsspezifischen Syntax folgt.

### Allgemeine Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen üblich sind, beinhalten:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Einfügungen](#syntax_fur_rechtecke_durch_container-einfugungen), [Rechtecke durch Abstand](#syntax_fur_rechtecke_durch_abstand), und [Rechtecke mit Dimensionen](#syntax_fur_rechtecke_mit_dimensionen) mit derselben Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzform-Eigenschaft.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_fur_kreise) oder eine [Ellipse](#syntax_fur_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (die Voreinstellung) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite des Referenzkastens.

- `<position>`
  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_fur_kreise) oder einer [Ellipse](#syntax_fur_ellipsen). Bei Weglassen ist die Standardeinstellung `center`.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [Polygon](#syntax_fur_polygone), [Pfad](#syntax_fur_pfade) und [Form](#syntax_fur_formen) definierten Form gefüllt wird. Mögliche Werte sind `nonzero` (die Standardeinstellung) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Untertyp des `<basic-shape>` Typs, repräsentiert die auf das Erstellen von Rechtecken beschränkten Grundform-Funktionen, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/basic-shape/shape) können ebenfalls verwendet werden, um Rechtecke zu erstellen, sind jedoch nicht auf ausschließlich vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Container-Einfügungen

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein Einfügungsrechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional durch abgerundete Ecken definiert ist.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle ersten vier Argumente angegeben sind, stehen sie für die nach innen gerichteten Versätze von den oberen, rechten, unteren und linken Kanten des Referenzkastens, die die Position der Kanten des Einfügungsrechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzform, die es ermöglicht, alle vier Einfügungen mit einem, zwei, drei oder vier Werten zu setzen.

Wenn ein Paar von Einfügungen für eine Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportionell reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Einzug von `90%` und einem unteren Einzug von `60%` proportional auf `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keine Fläche umschließen und keine {{cssxref("shape-margin")}} haben, haben keinen Einfluss auf die Umbrüche.

#### Syntax für Rechtecke durch Abstand

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck anhand der angegebenen Abstände von den oberen und linken Kanten des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()` Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens positioniert ist und dessen Breite (`w`) und Höhe (`h`) in dieser Reihenfolge festgelegt sind, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis mit einem Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument stellt den Radius des Kreises dar, definiert als entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}}. Ein Prozentwert hier wird aus der verwendeten Breite und Höhe des Referenzkastens berechnet als `sqrt(width^2+height^2)/sqrt(2)`. Bei Weglassen wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen und y-Achsen Radien der Ellipse, in dieser Reihenfolge. Diese Werte sind entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} angegeben. Prozentwerte werden hier gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von koordinatenpaaren mit Kommas an, wobei jedes Paar aus zwei mit einem Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar besteht. Diese Werte stellen die x- und y-Achsenkoordinaten des Polygons an der Position _i_ dar (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Das erforderliche `<string>` ist ein [SVG Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein zitiertes Zeichenfolge. Die `path()` Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines ersten Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnlich sind. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Margin-Kastens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Dimensionen des Referenzkastens aufgelöst.

Der Standardreferenzkasten ist der [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Boxmodells hervor, wie sie in den Entwickler-Tools eines Browsers zu sehen sind. Die Form hier ist mit Bezug auf den Margin-Box definiert.

![Ein Bild, das einen im Firefox DevTools Shape Inspector inspizierten Kreis zeigt. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte grundlegender Formen

Die Werte einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für ausgelassene Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke des Referenzkastens berechnet: der erste Versatz ist horizontal, der zweite ist vertikal. Jeder Versatz wird als ein {{cssxref("length-percentage")}} Wert spezifiziert.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, jeder entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}}.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden in die äquivalente `inset()` Funktion umgerechnet.

### Interpolation grundlegender Formen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgelisteten {{Glossary("interpolation", "Interpolations")}} Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzkasten verwenden und die Anzahl und Art der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert interpoliert als ein {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} soweit möglich. Interpolation kann immer noch stattfinden, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`).
- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe `<fill-rule>` verwenden und die gleiche Anzahl von kommagetrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als ein {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen mit der Anzahl, der Art und der Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Befehlsschlüsselwort und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dasselbe `<fill-rule>` haben.
  - Wenn sie das `<curve-command>` oder das `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl sowie Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation bleibt diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, damit diese Art der Animation funktioniert.

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
- [Übersicht über CSS Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Einführung ins CSS Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [Bearbeiten von Formpfaden in Firefox Entwicklerwerkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
