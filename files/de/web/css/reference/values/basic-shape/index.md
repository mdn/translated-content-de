---
title: CSS-Typ `<basic-shape>`
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

Der [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) **`<basic-shape>`** stellt eine Form dar, die in den Eigenschaften {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}} und {{cssxref("shape-outside")}} verwendet wird.

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

Der Datentyp `<basic-shape>` wird verwendet, um grundlegende Formen zu erstellen, darunter Rechtecke durch [Einzüge des Containers](#syntax_für_rechtecke_durch_einzüge_des_containers), durch [Koordinatenabstände](#syntax_für_rechtecke_durch_abstand) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mithilfe einer `<basic_shape>`-CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Zu den Parametern, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, gehören:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Einzüge des Containers](#syntax_für_rechtecke_durch_einzüge_des_containers), [Rechtecke durch Abstände](#syntax_für_rechtecke_durch_abstand) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen), wobei dieselbe Syntax wie für die CSS-Kurzformeigenschaft {{cssxref("border-radius")}} verwendet wird.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standardwert), `farthest-side`, `closest-corner` und `farthest-corner`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form bis zur nächstgelegenen Seite des Referenzrahmens, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form bis zur am weitesten entfernten Seite des Referenzrahmens.
    Entsprechend verwenden `closest-corner` und `farthest-corner` jeweils die Länge vom Mittelpunkt der Form bis zur nächstgelegenen beziehungsweise am weitesten entfernten Ecke.

- `<position>`
  - : Definiert die zentrale {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Wenn dieser Wert weggelassen wird, ist der Standardwert `center`.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [polygon](#syntax_für_polygone), [path](#syntax_für_pfade) und [shape](#syntax_für_formen) definierten Form gefüllt wird. Mögliche Werte sind `nonzero` (der Standardwert) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt; seine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der Typ `<basic-shape-rect>`, eine Untermenge des Typs `<basic-shape>`, stellt die grundlegenden Formfunktionen dar, die auf das Erstellen von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls verwendet werden, um Rechtecke zu erstellen, sind jedoch nicht auf ausschließlich vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Einzüge des Containers

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein eingerücktes Rechteck, dessen Größe durch den Abstand jeder der vier Seiten von seinem Container und optional durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle ersten vier Argumente angegeben werden, stellen sie die Einzüge oben, rechts, unten und links vom Referenzrahmen nach innen dar, welche die Position der Kanten des eingerückten Rechtecks definieren. Diese Argumente folgen der Syntax der Kurzform {{cssxref("margin")}}, mit der Sie alle vier Einzüge mit einem, zwei, drei oder vier Werten festlegen können.

Wenn ein Paar von Einzügen für eine Dimension zusammen mehr als 100 % dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % beträgt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keine Fläche einschließen und keinen {{cssxref("shape-margin")}} haben, wirken sich nicht auf den Textumbruch aus.

#### Syntax für Rechtecke durch Abstand

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck anhand der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens, mit optionalen abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der Funktion `rect()` definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Abmessungen durch die Größe des Referenzrahmens und die vier Offsetwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, eine {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird für die oberen und linken Werte als `0%` und für die unteren und rechten Werte als `100%` interpretiert.

#### Syntax für Rechtecke mit Abmessungen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzrahmens befindet und dessen Größe durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge festgelegt wird, mit optionalen abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis anhand eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das Argument `<shape-radius>` stellt den Radius des Kreises dar, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert wird. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe des Referenzrahmens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn kein Wert angegeben wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse anhand von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die Argumente `<shape-radius>` stellen _rx_ und _ry_, die Radien der x-Achse und y-Achse der Ellipse, in dieser Reihenfolge dar. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier relativ zur verwendeten Breite (für den Wert rx) und zur verwendeten Höhe (für den Wert ry) des Referenzrahmens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die Formfunktion `ellipse()` ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon anhand einer Reihe kommagetrennter Koordinatenpaare, denen optional eine SVG-{{SVGAttr("fill-rule")}}, ein Parameter für abgerundete Ecken oder beides vorangestellt werden kann.

```plain
polygon( <'fill-rule'>? [ round <length> ]? , [ <length-percentage> <length-percentage> ]# )
```

Der optionale erste Parameter kann einen oder beide der folgenden, durch ein Leerzeichen getrennten Werte enthalten:

- Einen SVG-{{SVGAttr("fill-rule")}}-Wert, entweder `nonzero` oder `evenodd`, der den Algorithmus zum Füllen der Polygonform festlegt.
- Das Schlüsselwort [`round`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon#round_length), gefolgt von einem {{cssxref("length")}}-Wert und durch ein Leerzeichen getrennt. Dies legt fest, dass das Polygon abgerundete Ecken haben soll, wobei `<length>` den Eckenradius angibt.

Jedes Koordinatenpaar besteht aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten. Diese Werte stellen die Koordinaten auf der x- und y-Achse eines Polygonpunkts dar.

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form mithilfe einer SVG-{{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche Wert `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenkette in Anführungszeichen. Die Funktion `path()` ist kein gültiger Eigenschaftswert für {{cssxref("shape-outside")}}.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form mithilfe eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` stellt den Startpunkt für den ersten Formbefehl dar, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die Funktion `shape()` ist kein gültiger Eigenschaftswert für {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird der Referenzrahmen durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke der Margin-Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle als Prozentwerte ausgedrückten Längen werden anhand der Abmessungen des Referenzrahmens aufgelöst.

Der Standardreferenzrahmen ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im folgenden Bild dargestellt. Das Bild zeigt einen mit `shape-outside: circle(50%)` erstellten Kreis und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwicklerwerkzeugen eines Browsers angezeigt werden. Die Form wird hier in Bezug auf die margin-box definiert.

![Ein Bild, das einen mit dem Shape Inspector der Firefox-Entwicklerwerkzeuge untersuchten Kreis zeigt. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte grundlegender Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für ausgelassene Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Offsets von der oberen linken Ecke des Referenzrahmens berechnet: Der erste Offset ist horizontal und der zweite vertikal. Jeder Offset wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius)-Wert in `inset()` wird zu einer Liste aus acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder eine {{cssxref("percentage")}} sind.
- Die Funktionen {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}} werden zur äquivalenten Funktion `inset()` berechnet.

### Interpolation grundlegender Formen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzrahmen verwenden, und Anzahl sowie Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird, wenn möglich, anhand seines berechneten Werts als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc()")}} interpoliert. Eine Interpolation kann weiterhin stattfinden, wenn die Werte nicht zu diesen Datentypen gehören, aber zwischen den beiden interpolierenden grundlegenden Formfunktionen identisch sind, beispielsweise `nonzero`.

- **Beide Formen haben den Typ `ellipse()` oder `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind, anstatt als Schlüsselwörter wie `closest-side` oder `farthest-side`.

- **Beide Formen haben den Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen haben den Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und dieselbe Anzahl kommagetrennter Koordinatenpaare haben.

- **Beide Formen haben den Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenketten in beiden Formen hinsichtlich Anzahl, Typ und Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen haben den Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehlsschlüsselwort haben und dasselbe `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der Eigenschaft {{cssxref("clip-path")}} verwendet wird, werden die beiden Formen interpoliert, wenn sie außerdem dieselbe `<fill-rule>` haben.
  - Wenn sie `<curve-command>` oder `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, verläuft das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mit dem Wert `large` interpoliert.

- **Eine Form hat den Typ `path()` und die andere den Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle sowohl in Anzahl als auch Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen findet keine Interpolation statt und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die At-Regel [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes), um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone dieselbe Anzahl von Eckpunkten haben, was erforderlich ist, damit diese Art von Animation funktioniert.

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
- [Überblick über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- Modul [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- Modul [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)
- [Formpfade in den Firefox-Entwicklerwerkzeugen bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
