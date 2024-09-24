---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## Syntax

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Behälterinnenversatz](#syntax_für_rechtecke_durch_behälterinnenversatz), durch [Koordinatendistanz](#syntax_für_rechtecke_durch_distanz) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden unter Verwendung einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Allgemeine Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Behälterinnenversatz](#syntax_für_rechtecke_durch_behälterinnenversatz), [Rechtecke durch Distanz](#syntax_für_rechtecke_durch_distanz) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzschreibweise.

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (standardmäßig) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzkastens.

- `<position>`

  - : Definiert die Zentrum-[`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Sie ist standardmäßig `center`, wenn sie weggelassen wird.

- `<fill-rule>`

  - : Setzt die {{SVGAttr("fill-rule")}}, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen definierte Form ausgefüllt werden soll: [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen). Mögliche Werte sind `nonzero` (standardmäßig) und `evenodd`.

    > **Note:** `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und seine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Behälterinnenversatz

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein eingebettetes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die oberen, rechten, unteren und linken Versätze vom Referenzkasten nach innen, die die Position der Kanten des eingebetteten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzschreibweise, die es erlaubt, alle vier Einfügungen mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einfügungen für eine Dimension mehr als 100 % dieser Dimension ausmacht, werden beide Werte proportional reduziert, so dass ihre Summe 100 % ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` eine obere Einfügung von `90%` und eine untere Einfügung von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keinen Bereich einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Distanz

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der angegebenen Distanzen von den oberen und linken Kanten des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

Bei der Verwendung der `rect()` Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das `auto`-Schlüsselwort wird für die oberen und linken Werte als `0%` und für die unteren und rechten Werte als `100%` interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das an den angegebenen Distanzen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens liegt und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert ist, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe des Referenzkastens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn er weggelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung zweier Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente stellen _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge dar. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <`fill-rule`>?, [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren auf, die jeweils aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <`fill-rule`>?, ]? <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Attribute/d) als zitierte Zeichenfolge. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Margin-Kastens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Dimensionen des Referenzkastens aufgelöst.

Der Standardreferenzkasten ist der [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im untenstehenden Bild gezeigt. Das Bild zeigt einen Kreis, der unter Verwendung von `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Box-Modells zeigt, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form hier ist in Bezug auf den margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardeinstellungen verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar Versätze von der oberen linken Ecke des Referenzkastens berechnet: der erste Versatz ist horizontal, der zweite vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind, erweitert.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen berechnen sich zu der äquivalenten `inset()` Funktion.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die {{Glossary("Interpolation")}} Regeln unten befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen den gleichen Referenzkasten verwenden und die Anzahl und Art der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann dennoch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, jedoch zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie z. B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl von durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen die gleiche Anzahl, Typ und Sequenz von [Pfaddatenbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselben Befehlschlüsselwörter und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, inter
polieren die beiden Formen, wenn sie ebenfalls derselben `<fill-rule>` folgen.

  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, resultiert das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle identisch in Anzahl und Sequenz ist. Die interpolierte Form ist eine `shape()` Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben, was für diese Art der Animation notwendig ist.

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

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}},
- [CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Überblick über CSS Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
