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

Der `<basic-shape>`-Datentyp wird verwendet, um Grundformen einschließlich Rechtecke mit [Einsatz im Container](#syntax_für_rechtecke_durch_containereinsatz), durch [Abstand der Koordinaten](#syntax_für_rechtecke_durch_abstand) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen) zu erstellen. Diese Grundformen werden unter Verwendung einer `<basic_shape>`-CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die gemeinsamen Parameter in der Syntax einiger Grundform-Funktionen umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Containereinsatz](#syntax_für_rechtecke_durch_containereinsatz), [Rechtecke durch Abstand](#syntax_für_rechtecke_durch_abstand) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) mit der gleichen Syntax wie für die CSS-Kurzschreibweise [`border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite des Referenzkastens, um die Radienlänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzkastens.

- `<position>`

  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Wenn er weggelassen wird, ist der Standardwert `center`.

- `<fill-rule>`

  - : Legt das {{SVGAttr("fill-rule")}} fest, das verwendet wird, um zu bestimmen, wie das Innere der durch die Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form gefüllt wird. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > **Note:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

### Syntax für Rechtecke durch Containereinsatz

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein Einsatzrechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

Wenn alle der ersten vier Argumente geliefert werden, stellen sie die oberen, rechten, unteren und linken Versätze vom Referenzkasten nach innen dar, die die Position der Kanten des Einsatzrechtecks definieren. Diese Argumente folgen der Syntax der Kurzschreibweise {{cssxref("margin")}}, mit der Sie alle vier Einsätze mit einem, zwei, drei oder vier Werten festlegen können.

Wenn ein Paar von Einsätzen für eine Dimension mehr als 100 % dieser Dimension addieren, werden beide Werte proportional verkleinert, sodass ihre Summe 100 % beträgt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` einen obersten Einsatz von `90%` und einen untersten Einsatz von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keine Fläche einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Abstand

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

Wenn Sie die Funktion `rect()` verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Abmessungen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Abmessungen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich bei den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens befindet und in dieser Reihenfolge durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks dimensioniert ist, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument stellt den Radius des Kreises dar, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert wird. Ein Prozentwert wird hier aktiviert, indem die Breite und Höhe des Referenzkastens als `sqrt(width^2+height^2)/sqrt(2)` verwendet werden. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsenradien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte werden hier relativ zur verwendeten Breite (für den rx-Wert) und der verwendeten Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung eines SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <`fill-rule`>?, [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von kommagetrennten Koordinatenpaaren an, von denen jedes aus zwei leerzeichengetrennten `<length-percentage>`-Werten als das _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (der Scheitelpunkt, an dem zwei Linien aufeinander treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung eines SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <`fill-rule`>?, ]? <string> )
```

Das erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Attribute/d) als Anführungszeichen verschlossene Zeichenkette. Die Funktion `path()` ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines Anfangspunktes und einer Serie von Formbefehlen.

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Ausgangspunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähneln. Die Funktion `shape()` ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randkastens des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden aus den Abmessungen des Referenzkastens aufgelöst.

Der Standardreferenzkasten ist das [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im folgenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form wird hier mit Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Formeninspektor von Firefox DevTools inspiziert wurde. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden die Standardeinstellungen verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke des Referenzkastens berechnet: der erste Versatz ist horizontal, der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- Die Funktionen {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}} werden in die äquivalente `inset()`-Funktion berechnet.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten [Interpolationsregeln](/de/docs/Glossary/interpolation) befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Für die Interpolation zwischen zwei Formen müssen beide Formen denselben Referenzkasten verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der zwei `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als ein {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann dennoch erfolgen, wenn die Werte keine dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder `circle()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie denselben `<fill-rule>` verwenden und die gleiche Anzahl von kommagetrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als ein {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen die gleiche Anzahl, den gleichen Typ und die gleiche Reihenfolge von [Pfaddatenbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und dasselbe `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der Eigenschaft {{cssxref("clip-path")}} verwendet wird, interpolieren die beiden Formen, wenn sie auch dasselbe `<fill-rule>` haben.

  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Steuerpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large`-Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes)-Regel, um einen Clipping-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Eckpunkten haben müssen, damit diese Art von Animation funktioniert.

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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
