---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Container-Einfügungen](#syntax_für_rechtecke_durch_containereinfügungen), durch [Koordinatendistanzen](#syntax_für_rechtecke_durch_distanz) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfaden](#syntax_für_pfade), und [vom Autor erstellte Formen](#syntax_für_formen). Diese Grundformen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der spezifischen Syntax der Formfunktion folgt.

### Allgemeine Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Containereinfügungen](#syntax_für_rechtecke_durch_containereinfügungen), [Rechtecke durch Distanz](#syntax_für_rechtecke_durch_distanz) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) unter Verwendung derselben Syntax wie die CSS-Kurzformeigenschaft {{cssxref("border-radius")}}.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standardwert) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge von der Mitte der Form zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erzeugen. Der `farthest-side` Schlüsselwortwert verwendet die Länge von der Mitte der Form zur entferntesten Seite des Referenzkastens.

- `<position>`
  - : Definiert die Mitte der [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig `center`, wenn weggelassen.

- `<fill-rule>`
  - : Setzt die {{SVGAttr("fill-rule")}}, die verwendet wird, um zu bestimmen, wie das Innere der Form, die durch die Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird, zu füllen ist. Mögliche Werte sind `nonzero` (Standardwert) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Untertyp des `<basic-shape>` Typs, repräsentiert die Grundformenfunktionen, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls zur Erstellung von Rechtecken verwendet werden, sind jedoch nicht auf rechteckige Formen mit vier Seiten beschränkt.

#### Syntax für Rechtecke durch Containereinfügungen

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein Einfügungsrechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, stellen sie die Abstände von der Referenzbox nach innen dar, die die Position der Kanten des Einfügungsrechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzform, die es Ihnen ermöglicht, alle vier Einfügungen mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einfügungen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, so dass ihre Summe 100% entspricht. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einer oberen Einfügung von `90%` und einer unteren Einfügung von `60%` proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keine Fläche umschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke durch Distanz

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck mit den angegebenen Abständen von den oberen und linken Kanten der Referenzbox, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei Verwendung der `rect()` Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erzeugen, wobei seine Abmessungen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, eine {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Abmessungen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten der Referenzbox befindet und mit der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis mit einem Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus den verwendeten Breiten und Höhen der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} spezifiziert. Prozentwerte werden hier gegenüber der verwendeten Breite (für den rx-Wert) und der verwendeten Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben ist, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben ist, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und eines Satzes von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion übernimmt eine Liste von durch Kommas getrennten Koordinatenpaaren, die jeweils aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an der Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Das erforderliche `<string>` ist ein [SVG Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenfolgenliteral. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl und `<shape-command>` definiert ein oder mehrere Formbefehle, die den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Bei der Erstellung einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randobox des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle Längen, die als Prozentsätze ausgedrückt werden, basieren auf den Abmessungen der Referenzbox.

Die Standardreferenzbox ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im Bild unten dargestellt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Boxmodells hervor, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form hier wird in Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector überprüft wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte grundlegender Formen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: Der erste Versatz ist horizontal und der zweite vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder eine {{cssxref("percentage")}} sind.
- Die Funktionen {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} werden in die äquivalente `inset()` Funktion umgewandelt.

### Interpolation grundlegender Formen

Bei der Animation zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen die gleiche Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann immer noch stattfinden, wenn die Werte nicht einer dieser Datentypen, jedoch zwischen den beiden interpolierten Grundformen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien als entweder eine {{cssxref("length")}} oder eine {{cssxref("percentage")}} (statt Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl von durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die Anzahl, den Typ und die Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und dieselben `<by-to>` Schlüsselwörter verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dieselbe `<fill-rule>` haben.
  - Wenn sie die `<curve-command>` oder die `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für eine Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, ist das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) at-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, was für diese Art der Animation erforderlich ist.

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
- SVG Formelemente: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- [Bearbeitung von Formpfaden in den Firefox Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
