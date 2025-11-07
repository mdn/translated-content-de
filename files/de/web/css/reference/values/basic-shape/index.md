---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

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

Der `<basic-shape>`-Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Container-Inset](#syntax_für_rechtecke_durch_container-inset), durch [Koordinatenabstand](#syntax_für_rechtecke_durch_abstand) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der spezifischen Syntax der Form entspricht.

### Allgemeine Parameter

Die in der Syntax einiger grundlegender Formfunktionen gemeinsamen Parameter umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Containereinsetze](#syntax_für_rechtecke_durch_container-inset), [Rechtecke durch Abstand](#syntax_für_rechtecke_durch_abstand) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung der gleichen Syntax wie die CSS-Abkürzungseigenschaft [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius).

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte sind {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (die Standardeinstellung) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzrahmens, um die Radiuslänge zu bestimmen. Der Wert `farthest-side` verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite des Referenzrahmens.

- `<position>`
  - : Definiert die Mitte der [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Wenn nicht angegeben, ist der Standard `center`.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der von den grundlegenden Formen definierten [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) gefüllt werden soll. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Teilbereich des `<basic-shape>` Typs, repräsentiert die grundlegenden Formfunktionen, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls zur Erstellung von Rechtecken verwendet werden, sind jedoch nicht auf vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Container-Inset

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein inset-Rechteck, dessen Größe durch den Abstand jeder der vier Seiten seines Containers und ggf. durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die Top-, Rechts-, Bottom- und Linkseinsets vom Referenzrahmen nach innen, die die Position der Kanten des inset-Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzform, die es erlaubt, alle vier Einsetze mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einsetzwerten für eine Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` ein Top-Inset von `90%` und ein Bottom-Inset von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen keinen Textumbruch.

#### Syntax für Rechtecke durch Abstand

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck mit den angegebenen Abständen von den oberen und linken Rändern des Referenzrahmens, mit optionalen abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Beim Verwenden der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe des Referenzrahmens und die vier Offset-Werte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die Top- und Linkswerte und als `100%` für die Bottom- und Rechtswerte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzrahmens positioniert und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert wird, mit optionalen abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentsatzwert wird hier aus der verwendeten Breite und Höhe des Referenzrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse in dieser Reihenfolge. Diese Werte sind als entweder {{cssxref("length")}} oder {{cssxref("percentage")}} angegeben. Prozentsatzwerte werden hier gegenüber der verwendeten Breite (für den rx-Wert) und der verwendeten Höhe (für den ry-Wert) des Referenzrahmens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommata getrennten Koordinatenpaaren, die jeweils aus zwei durch Leerzeichen getrennte `<length-percentage>` Werte als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenfolge in Anführungszeichen. Die `path()` Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird der Referenzrahmen von der Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem der Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randrahmens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verlaufen. Alle Längen, die in Prozent ausgedrückt werden, werden aus den Dimensionen des Referenzrahmens aufgelöst.

Der Standard-Referenzrahmen ist der [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im untenstehenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und verschiedene Teile des Box-Modells, wie sie in einem Browser-Entwicklungstool zu sehen sind, hervorhebt. Die Form hier wird bezogen auf den Randrahmen definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden die Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Offsets von der oberen linken Ecke des Referenzrahmens berechnet: der erste Offset ist horizontal und der zweite ist vertikal. Jeder Offset wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden zu der entsprechenden `inset()` Funktion berechnet.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die folgenden {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen den gleichen Referenzrahmen verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, soweit möglich. Die Interpolation kann dennoch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, sondern zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie z. B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn deren Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstatt von Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie die gleiche `<fill-rule>` haben und die gleiche Anzahl von durch Komma getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfad-Strings in beiden Formen die gleiche Anzahl, Typ und Reihenfolge der [Pfaddaten-Befehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) aufweisen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und das gleiche `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der Eigenschaft {{cssxref("clip-path")}} verwendet wird, interpolieren die beiden Formen, wenn sie auch die gleiche `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Steuerpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe mithilfe des Werts `large` interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddaten-Befehle in Anzahl sowie in der Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddaten-Befehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben, was für diese Art der Animation erforderlich ist.

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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- [Bearbeiten von Formpfaden in den Firefox-Entwicklungstools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
