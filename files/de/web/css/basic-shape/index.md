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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Container Insets](#syntax_für_rechtecke_durch_container_insets), durch [Koordinatendistanz](#syntax_für_rechtecke_durch_distanz) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und vom Autor erstellte Formen. Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter benötigt, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger Grundformenfunktionen gemein sind, umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Container Insets](#syntax_für_rechtecke_durch_container_insets), [Rechtecke durch Distanz](#syntax_für_rechtecke_durch_distanz) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzschreibweise.

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzkastens.

- `<position>`

  - : Definiert das Zentrum [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig ist `center`, wenn es nicht angegeben wird.

- `<fill-rule>`

  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der von den Grundformen definierten [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) auszufüllen ist. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > **Hinweis:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Container Insets

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein inset Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

Wenn alle vier ersten Argumente angegeben sind, repräsentieren sie die Abstände oben, rechts, unten und links vom Referenzkasten nach innen, die die Position der Kanten des Inset-Rechtecks bestimmen. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzschreibweise, die es Ihnen erlaubt, alle vier Insets mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Insets für eine Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Inset von `90%` und einem unteren Inset von `60%` proportional zu `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keinen Bereich einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Distanz

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck mithilfe der angegebenen Abstände von den oberen und linken Kanten des Referenzkastens mit optionalen abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

Wenn Sie die `rect()`-Funktion verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird für die oberen und linken Werte als `0%` und für die unteren und rechten Werte als `100%` interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens befindet und dessen Größe durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge beschrieben ist, mit optionalen abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis mit einem Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder {{cssxref("percentage")}} definiert ist. Ein Prozentwert wird hier aus der verwendeten Breite und Höhe des Referenzkastens wie `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn es weggelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse mit zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente stellen _rx_ und _ry_ dar, die x-Achse und y-Achse Radien der Ellipse in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radienwert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und eines Satzes von Koordinaten.

```plain
polygon( <`fill-rule`>?, [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren, die jeweils aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte stellen die x- und y-Achsenkoordinaten des Polygons an Position _i_ (dem Scheitelpunkt, an dem sich zwei Linien treffen) dar.

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <`fill-rule`>?, ]? <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Attribute/d) als gequoteter String. Die `path()`-Funktion ist kein gültiger Wert der Eigenschaft {{cssxref("shape-outside")}}.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähnlich sind. Die `shape()`-Funktion ist kein gültiger Wert der Eigenschaft {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten von der Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randkastens des Elements, wobei die x-Achse nach rechts verläuft und die y-Achse nach unten. Alle in Prozent angegebenen Längen werden aus den Dimensionen des Referenzkastens aufgelöst.

Der Standard-Referenzkasten ist der [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten dargestellt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, was die verschiedenen Teile des Boxmodells zeigt, wie sie in den Entwicklertools eines Browsers zu sehen sind. Die Form wird hier in Bezug auf den margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector untersucht wurde. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Offsets von der oberen linken Ecke des Referenzkastens berechnet: das erste Offset ist horizontal, das zweite vertikal. Jedes Offset wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten erweitert, wobei jeder entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} ist.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen werden zur äquivalenten `inset()` Funktion berechnet.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten [Interpolations](/de/docs/Glossary/interpolation)-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen denselben Referenzkasten verwenden, und die Anzahl sowie der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Die Interpolation kann immer noch erfolgen, wenn die Werte nicht zu diesen Datentypen gehören, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, zum Beispiel `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder {{cssxref("percentage")}} (statt als Schlüsselwörter wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird auf jeden entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie denselben `<fill-rule>` verwenden und dieselbe Anzahl von durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen die gleiche Anzahl, Typ und Abfolge von [Pfaddatenbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) aufweisen.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn sie das gleiche Befehlsstichwort und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch denselben `<fill-rule>` haben.

  - Wenn sie das `<curve-command>` oder das `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte zur Interpolation übereinstimmen.

  - Wenn sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Interpolation wird auf jeden entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Abfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen tritt keine Interpolation auf und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel, um einen Clipping-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Scheitelpunkten haben, was für diese Art von Animation erforderlich ist.

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
- [Überblick über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
