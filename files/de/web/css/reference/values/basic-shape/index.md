---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
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

Der `<basic-shape>`-Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Behälter-Einfügungen](#syntax_für_rechtecke_durch_behälter-einfügungen), durch [Koordinaten-Distanz](#syntax_für_rechtecke_durch_distanz) oder durch [definierte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der spezifischen Syntax der Formfunktion folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen allgemein sind, beinhalten:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Behälter-Einfügungen](#syntax_für_rechtecke_durch_behälter-einfügungen), [Rechtecke durch Distanz](#syntax_für_rechtecke_durch_distanz) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) mit der gleichen Syntax wie die CSS-`border-radius`-Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte beinhalten {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side`-Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite des Bezugsrahmens, um die Radiuslänge zu erstellen. Der `farthest-side`-Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite des Bezugsrahmens.

- `<position>`
  - : Definiert das Zentrum [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig ist es `center`, wenn es weggelassen wird.

- `<fill-rule>`
  - : Setzt die genutzte {{SVGAttr("fill-rule")}}, um zu bestimmen, wie das Innere der durch die grundlegenden Formen definierten Form [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) zu füllen ist. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und seine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der Typ `<basic-shape-rect>`, ein Untertyp des `<basic-shape>`-Typs, repräsentiert die grundlegenden Formfunktionen, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können auch verwendet werden, um Rechtecke zu erstellen, sind jedoch nicht auf vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Behälter-Einfügungen

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein eingefügtes Rechteck, dessen Größe durch die Versatzdistanz jeder der vier Seiten seines Behälters und, optional, abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente geliefert werden, stellen sie den oberen, rechten, unteren und linken Versatz vom Bezugsrahmen nach innen dar, die die Position der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzschreibweise, die es Ihnen ermöglicht, alle vier Einfügungen mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einfügungen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional so reduziert, dass ihre Summe 100% ergibt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` eine obere Einfügung von `90%` und eine untere Einfügung von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Formen dieser Art, die kein Gebiet einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke durch Distanz

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Bezugsrahmens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Beim Verwenden der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen spezifizieren Sie vier Werte, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe des Bezugsrahmens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Bezugsrahmens lokalisiert ist und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des definierten Kreises entweder als {{cssxref("length")}} oder {{cssxref("percentage")}}. Ein Prozentwert hier wird aus der genutzten Breite und Höhe des Bezugsrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wird er weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achse und y-Achse Radien der Ellipse in dieser Reihenfolge. Diese Werte sind entweder als {{cssxref("length")}} oder {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die genutzte Breite (für den rx-Wert) und die genutzte Höhe (für den ry-Wert) des Bezugsrahmens aufgelöst. Wird nur ein Radiuswert angegeben, ist die `ellipse()`-Formfunktion ungültig. Wird kein Wert angegeben, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Komma getrennten Koordinatenpaaren, wobei jedes aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten besteht, die das _xi_ und _yi_ Paar darstellen. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein Zitatstring. Die `path()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}}-Eigenschaft.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>`-Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnlich sind. Die `shape()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}}-Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Bezugsrahmen durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Margin-Rahmens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle Längen, die in Prozent ausgedrückt sind, werden aus den Dimensionen des Bezugsrahmens aufgelöst.

Der Standard-Bezugsrahmen ist der [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form hier ist im Bezug auf den Margin-Box definiert.

![Ein Bild zeigt einen Kreis, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von einfachen Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Bei fehlenden Werten werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke des Bezugsrahmens berechnet: der erste Versatz ist horizontal, und der zweite ist vertikal. Jeder Versatz wird als ein {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen werden zur äquivalenten `inset()`-Funktion berechnet.

### Interpolation von einfachen Formen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen den gleichen Bezugsrahmen verwenden und die Anzahl und Art der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo dies möglich ist. Eine Interpolation kann dennoch stattfinden, wenn die Werte nicht zu diesen Datentypen gehören, aber zwischen den beiden interpolierenden einfachen Formfunktionen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (statt Schlüsselwörtern wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie die gleiche `<fill-rule>`-Vorgabe verwenden und die gleiche Anzahl von durch Komma getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die Anzahl, den Typ und die Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehlschlüsselwort und das gleiche `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch die gleiche `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte zur Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mit dem Wert `large` interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in der Anzahl sowie der Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die At-Regel [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes), um einen Clippfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Scheitelpunkten haben, was für diese Art von Animation erforderlich ist.

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
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)-Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)-Modul
- [Bearbeiten von Formpfaden in den Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
