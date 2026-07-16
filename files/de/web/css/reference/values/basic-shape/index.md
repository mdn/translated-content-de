---
title: "`<basic-shape>` CSS-Typ"
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}} und {{cssxref("shape-outside")}} verwendet wird.

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

Der `<basic-shape>` Datentyp wird verwendet, um Grundformen zu erstellen, darunter Rechtecke nach [Containereinzug](#syntax_für_rechtecke_nach_containereinzügen), nach [Abstandskoordinaten](#syntax_für_rechtecke_nach_abstand) oder nach [festgelegten Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [benutzerdefinierte Formen](#syntax_für_formen). Diese Grundformen werden mit einer der CSS `<basic_shape>`-Funktionen definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger Grundform-Funktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke nach Containereinzügen](#syntax_für_rechtecke_nach_containereinzügen), [Rechtecke nach Abstand](#syntax_für_rechtecke_nach_abstand) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwort-Wert verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite des Referenzrahmens, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwort-Wert verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzrahmens.

- `<position>`
  - : Definiert die Mitte {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig wird `center` verwendet, wenn nicht angegeben.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die Grundformen definierten [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) ausgefüllt werden soll. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn er verwendet wird.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Untertyp des `<basic-shape>` Typs, repräsentiert die Grundform-Funktionen, die sich auf die Erstellung von Rechtecken beschränken, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) Funktionen können ebenfalls verwendet werden, um Rechtecke zu erstellen, sind aber nicht auf nur vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke nach Containereinzügen

Die {{cssxref("basic-shape/inset","inset()")}}-Funktion erstellt ein einsetztes Rechteck, dessen Größe durch den Abstand jeder der vier Seiten seines Containers definiert wird und optional abgerundete Ecken hat.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle ersten vier Argumente angegeben sind, repräsentieren sie die oberen, rechten, unteren und linken Offsets von der Bezugskiste nach innen, die die Position der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax des {{cssxref("margin")}}-Kurzschreibens, das es Ihnen ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einzügen für eine Dimension mehr als 100% dieser Dimension addiert, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich umschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke nach Abstand

Die {{cssxref("basic-shape/rect","rect()")}}-Funktion definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Wenn Sie die `rect()` Funktion verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe des Referenzrahmens und die vier Offset-Werte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird für die oberen und linken Werte als `0%` interpretiert und für die unteren und rechten Werte als `100%`.

#### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}}-Funktion definiert ein Rechteck, das sich an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzrahmens befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks dimensioniert ist, in dieser Reihenfolge, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}}-Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, definiert entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}}. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe des Referenzrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn er nicht angegeben ist, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}}-Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x- und y-Achsradien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} angegeben. Prozentwerte werden hier in Bezug auf die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzrahmens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben ist, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}}-Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von kommagetrennten Koordinatenpaaren, wobei jedes Paar aus zwei leerzeichengetrennten `<length-percentage>`-Werten als _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}}-Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein Zeichenfolgenliteral. Die `path()`-Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}}-Funktion definiert eine Form unter Verwendung eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Das `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

## Beschreibung

Beim Erstellen einer Form wird der Referenzrahmen durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randrahmen des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle Längen, die in Prozent angegeben sind, werden aus den Abmessungen des Referenzrahmens aufgelöst.

Der Standardreferenzrahmen ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im folgenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die unterschiedlichen Teile des Boxmodells hervor, wie in den Entwicklertools eines Browsers zu sehen. Die Form hier ist in Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Shape-Inspector von Firefox DevTools inspiziert wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Offsets von der oberen linken Ecke des Referenzrahmens berechnet: der erste Offset ist horizontal und der zweite ist vertikal. Jeder Offset wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird zu einer Liste von acht Werten ausgeweitet, die entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden zur äquivalenten `inset()` Funktion berechnet.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzrahmen verwenden, und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc()")}} interpoliert, wo dies möglich ist. Eine Interpolation kann weiterhin stattfinden, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie etwa `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und dieselbe Anzahl von kommagetrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die Anzahl, den Typ und die Abfolge der [Pfaddatenkommandos](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Befehls-Schlüsselwort und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dieselbe `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Steuerpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenkommandos in der Anzahl und auch in der Abfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddatenkommandos beibehält.

In allen anderen Fällen findet keine Interpolation statt und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) At-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl an Ecken haben müssen, damit diese Art von Animation funktioniert.

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

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}}
- SVG-Formelemente: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- [Formpfade in den Firefox-Entwicklertools bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
