---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 99e1dec177de79d99e1cef9d433ee2d84f44149f
---

{{CSSRef}}

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## Syntax

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Containerabstände](#syntax_für_rechtecke_durch_containerabstände), durch [Koordinatenabstände](#syntax_für_rechtecke_durch_abstände) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mithilfe einer der `<basic_shape>` CSS-Funktionen definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Containerabstände](#syntax_für_rechtecke_durch_containerabstände), [Rechtecke durch Abstände](#syntax_für_rechtecke_durch_abstände) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS-{{cssxref("border-radius")}} Kurzschreibweise.

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte sind {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite des Referenzrahmens, um die Länge des Radius zu bestimmen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite des Referenzrahmens.

- `<position>`

  - : Definiert die mittlere [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig `center`, wenn ausgelassen.

- `<fill-rule>`

  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form gefüllt wird. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > **Hinweis:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

### Syntax für Rechtecke durch Containerabstände

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein eingesetztes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle vier ersten Argumente angegeben werden, stellen sie die inneren Abstände von oben, rechts, unten und links von der Referenzbox dar, die die Position der Kanten des eingesetzten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzschreibweise, die es Ihnen ermöglicht, alle vier Einsätze mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einsätzen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` durch einen oberen Einsatz von `90%` und einen unteren Einsatz von `60%` reduziert proportional zu `inset(60% 10% 40% 10%)`. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Abstände

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Kanten der Referenzbox, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei Verwendung der `rect()` Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das `auto` Schlüsselwort wird als `0%` für die oberen und linken Werte sowie als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten der Referenzbox befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks, in dieser Reihenfolge, mit optional abgerundeten Ecken, Größe erhält.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument stellt den Radius des Kreises dar, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn ausgelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achse und y-Achse Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} spezifiziert. Prozentwerte werden hier relativ zur verwendeten Breite (für den rx-Wert) und zur verwendeten Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben ist, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion akzeptiert eine Liste von durch Kommas getrennten Koordinatenpaaren, von denen jedes aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Das erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Attribute/d) als String in Anführungszeichen. Die `path()` Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines initialen Ausgangspunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` stellt den Ausgangspunkt für den ersten Formbefehl dar, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähneln. Die `shape()` Funktion ist kein gültiger {{cssxref("shape-outside")}} Eigenschaftswert.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem der Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randkastens des Elements, wobei die x-Achse nach rechts verläuft und die y-Achse nach unten verläuft. Alle in Prozent ausgedrückten Längen werden von den Abmessungen der Referenzbox aufgelöst.

Die Standardreferenzbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im folgenden Bild gezeigt. Das Bild zeigt einen Kreis, der unter Verwendung von `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Boxmodells hervor, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form hier wird mit Bezug zur margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>` Funktion werden so berechnet, wie sie angegeben sind, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: der erste Versatz ist horizontal und der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, von denen jeder entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} ist.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden zu der entsprechenden `inset()` Funktion berechnet.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die nachstehenden {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Für die Interpolation zwischen zwei Formen müssen beide Formen dieselbe Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Die Interpolation kann weiterhin erfolgen, wenn die Werte nicht zu diesen Datentypen gehören, aber zwischen den beiden interpolierenden grundlegenden Formfunktionen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn sie dieselbe `<fill-rule>` verwenden und die gleiche Anzahl von durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die gleiche Anzahl, den gleichen Typ und die gleiche Reihenfolge der [Pfaddaten-Befehle](/de/docs/Web/SVG/Attribute/d#path_commands) haben.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn sie dasselbe Befehls-Schlüsselwort und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dieselbe `<fill-rule>` haben.

  - Wenn sie das `<curve-command>` oder das `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn die Liste der Pfaddaten-Befehle in Anzahl sowie Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddaten-Befehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel, um einen Klipppfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl an Ecken haben, was für das Funktionieren dieser Art der Animation erforderlich ist.

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
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Übersicht der CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
