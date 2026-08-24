---
title: "`<basic-shape>` CSS-Typ"
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 6edb918a9e6bd17858d48dcfa5d76aa5ed5b9659
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt eine Form dar, die in den Eigenschaften {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}} und {{cssxref("shape-outside")}} verwendet wird.

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

Der `<basic-shape>`-Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke nach [Behälter-Einzug](#syntax_fuer_rechtecke_nach_behaelter_einzug), nach [Koordinatenabstand](#syntax_fuer_rechtecke_nach_abstand) oder nach [festgelegten Dimensionen](#syntax_fuer_rechtecke_mit_dimensionen), [Kreise](#syntax_fuer_kreise), [Ellipsen](#syntax_fuer_ellipsen), [Polygone](#syntax_fuer_polygone), [Pfade](#syntax_fuer_pfade), und [vormals erstellte Formen](#syntax_fuer_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>`-CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Allgemeine Parameter

Zu den Parametern, die in der Syntax einiger grundlegender Formfunktionen üblich sind, gehören:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke nach Behälter-Einzug](#syntax_fuer_rechtecke_nach_behaelter_einzug), [Rechtecke nach Abstand](#syntax_fuer_rechtecke_nach_abstand) und [Rechtecke mit Dimensionen](#syntax_fuer_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzschreibweise.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_fuer_kreise) oder eine [Ellipse](#syntax_fuer_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard), `farthest-side`, `closest-corner` und `farthest-corner`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Zentrum der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu erzeugen. Der Schlüsselwert `farthest-side` verwendet die Länge vom Zentrum der Form zur weitesten Seite der Referenzbox. Ebenso verwenden `closest-corner` und `farthest-corner` die Länge vom Zentrum der Form zur nächsten bzw. weitesten Ecke.

- `<position>`
  - : Definiert das Zentrum {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_fuer_kreise) oder einer [Ellipse](#syntax_fuer_ellipsen). Es wird, wenn ausgelassen, standardmäßig auf `center` gesetzt.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der von den grundlegenden Formen [Polygon](#syntax_fuer_polygone), [Pfad](#syntax_fuer_pfade) und [Form](#syntax_fuer_formen) definierten Form gefüllt werden soll. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der Typ `<basic-shape-rect>`, ein Untertyp des `<basic-shape>`-Typs, stellt die Grundform-Funktionen dar, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können auch zum Erstellen von Rechtecken verwendet werden, sind jedoch nicht auf rein vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke nach Behälter-Einzug

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erzeugt ein eingefügtes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Behälters und gegebenenfalls abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, stellen diese die oberen, rechten, unteren und linken Versätze vom Referenzrahmen nach innen dar, die die Position der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzschreibweise, die es ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einzügen für eine Dimension mehr als 100 % dieser Dimension beträgt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % ergibt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die kein Gebiet einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke nach Abstand

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck anhand der festgelegten Abstände von den oberen und linken Kanten der Referenzbox, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Beim Verwenden der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen spezifizieren Sie vier Werte zum Erstellen des Rechtecks, wobei seine Abmessungen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten der Referenzbox positioniert ist und mit den angegebenen Breiten- (`w`) und Höhen- (`h`) Werten des Rechtecks dimensioniert ist, in dieser Reihenfolge, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis mit einem Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument stellt den Radius des Kreises dar, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` berechnet. Wird er ausgelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse mit zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) der Referenzbox berechnet. Wird nur ein Radiuswert angegeben, ist die `ellipse()`-Formfunktion ungültig. Werden keine Werte angegeben, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon mit einem Satz von durch Kommas getrennten Koordinatenpaaren, optional vorangestellt durch eine SVG-{{SVGAttr("fill-rule")}}, einen Eckabrundungsparameter oder beides.

```plain
polygon( <'fill-rule'>? [ round <length> ]? , [ <length-percentage> <length-percentage> ]# )
```

Der optionale erste Parameter kann einen oder beide der folgenden Punkte enthalten, getrennt durch ein Leerzeichen:

- Ein SVG-{{SVGAttr("fill-rule")}}-Wert, entweder `nonzero` oder `evenodd`, der den Algorithmus angibt, der zum Füllen der Polygonform verwendet wird.
- Das Schlüsselwort [`round`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon#round), gefolgt von einem {{cssxref("length")}}-Wert, getrennt durch ein Leerzeichen. Dies gibt an, dass das Polygon abgerundete Ecken haben soll, wobei das `<length>` den Eckenradius angibt.

Jedes Koordinatenpaar besteht aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten. Diese Werte repräsentieren die x-Achsen- und y-Achsen-Koordinaten eines Polygon-Wendepunkts.

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenfolgen. Die `path()`-Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines Anfangspunktes und einer Reihe von Formkommandos.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Ausgangspunkt für das erste Formkommando, und `<shape-command>` definiert ein oder mehrere Formkommandos, die den [SVG-Pfadkommandos](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke der Margin-Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Abmessungen der Referenzbox bestimmt.

Die Standard-Referenzbox ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Boxmodells hervor, wie sie in den Entwickler-Tools eines Browsers zu sehen sind. Die Form hier wird in Bezug auf die Margin-Box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden die Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: Der erste Versatz ist horizontal und der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen werden zu einer äquivalenten `inset()`-Funktion berechnet.

### Interpolation von Grundformen

Bei der Animation zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit die Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen dieselbe Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc()")}} interpoliert, wo dies möglich ist. Die Interpolation kann dennoch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundform-Funktionen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn ihre Radien entweder als eine {{cssxref("length")}} oder als ein {{cssxref("percentage")}} spezifiziert sind (anstatt als Schlüsselwörter wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird auf jeden entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl von Komma-getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als ein {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die gleiche Anzahl, den gleichen Typ und die gleiche Sequenz von [Pfaddatenkommandos](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort verwenden und dasselbe `<by-to>`-Schlüsselwort nutzen. Wenn `shape()` in der Eigenschaft {{cssxref("clip-path")}} verwendet wird, interpolieren die beiden Formen, wenn sie auch dasselbe `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, läuft das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mit dem `large`-Wert interpoliert.

- **Eine Form ist vom Typ `path()` und die andere Form ist vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn die Liste der Pfaddatenkommandos in Anzahl und Sequenz übereinstimmt. Die interpolierte Form ist eine `shape()`-Funktion, die dieselbe Liste von Pfaddatenkommandos beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die Regel [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes), um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, damit diese Art der Animation funktioniert.

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
- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskieren](/de/docs/Web/CSS/Guides/Masking) Modul
- [Formpfade in Firefox-Entwicklertools bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
