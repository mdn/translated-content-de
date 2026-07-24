---
title: "`<basic-shape>` CSS-Typ"
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 1e7ba7f0645705dcd46dd7392f09284129cf87bf
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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke nach [Container-Inset](#syntax_fuer_rechtecke_nach_container-insets), nach [Koordinatenentfernung](#syntax_fuer_rechtecke_nach_entfernung), oder nach [festgelegten Dimensionen](#syntax_fuer_rechtecke_mit_dimensionen), [Kreise](#syntax_fuer_kreise), [Ellipsen](#syntax_fuer_ellipsen), [Polygone](#syntax_fuer_polygone), [Pfade](#syntax_fuer_pfade) und [autorenerschaffene Formen](#syntax_fuer_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS Funktion definiert, wobei jeder Wert einen Parameter benötigt, der der speziell für die Funktion vorgesehenen Syntax der Form folgt.

### Gemeinsame Parameter

Zu den Syntaxen einiger grundlegender Formen gehören folgende gemeinsame Parameter:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke nach Container-Inset](#syntax_fuer_rechtecke_nach_container-insets), [Rechtecke nach Entfernung](#syntax_fuer_rechtecke_nach_entfernung) und [Rechtecke mit Dimensionen](#syntax_fuer_rechtecke_mit_dimensionen), wobei die gleiche Syntax wie bei der CSS-{{cssxref("border-radius")}}-Kurzform verwendet wird.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_fuer_kreise) oder eine [Ellipse](#syntax_fuer_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standardwert), `farthest-side`, `closest-corner` und `farthest-corner`. Negative Werte sind ungültig.

    Der Schlüsselwort-Wert `closest-side` verwendet die Länge vom Zentrum der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der Schlüsselwert `farthest-side` verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite der Referenzbox.
    Ebenso verwenden `closest-corner` und `farthest-corner` die Länge vom Zentrum der Form zu den nächsten bzw. am weitesten entfernten Ecken.

- `<position>`
  - : Definiert das Zentrum {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_fuer_kreise) oder einer [Ellipse](#syntax_fuer_ellipsen). Es wird auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der Form, die durch die grundlegenden Formen [Polygon](#syntax_fuer_polygone), [Pfad](#syntax_fuer_pfade) und [Form](#syntax_fuer_formen) definiert wird, ausgefüllt werden soll. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und invalidiert die Eigenschaft bei Verwendung.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Subtyp des `<basic-shape>` Typs, repräsentiert die grundlegenden Formfunktionen, die auf die Erstellung von Rechtecken beschränkt sind, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls zur Erstellung von Rechtecken verwendet werden, sind jedoch nicht auf nur vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke nach Container-Insets

Die {{cssxref("basic-shape/inset","inset()")}} Funktion erstellt ein Inset-Rechteck, dessen Größe durch die Versatzentfernung jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert ist.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die oberen, rechten, unteren und linken Versätze von der Referenzbox nach innen, die die Position der Kanten des Inset-Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzform, die es Ihnen ermöglicht, alle vier Insets mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einsätzen für eine Dimension mehr als 100% dieser Dimension addiert, werden beide Werte proportional reduziert, sodass ihre Summe 100% entspricht. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einsatz von `90%` und einen unteren Einsatz von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und kein {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke nach Entfernung

Die {{cssxref("basic-shape/rect","rect()")}} Funktion definiert ein Rechteck unter Verwendung der angegebenen Entfernungen von den oberen und linken Kanten der Referenzbox mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Wenn Sie die `rect()` Funktion verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Dimensionen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das `auto` Schlüsselwort wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Dimensionen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das sich an den angegebenen Entfernungen von den linken (`x`) und oberen (`y`) Kanten der Referenzbox befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert ist. Optional können abgerundete Ecken verwendet werden.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentsatz hier wird als `sqrt(width^2+height^2)/sqrt(2)` von der verwendeten Breite und Höhe der Referenzbox aufgelöst. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x-Achsen und y-Achsen Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentsätze werden hier gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und eines Satzes von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von kommagetrennten Koordinatenpaaren auf, die jeweils aus zwei leerzeichengetrennten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an der Position _i_ (der Scheitelpunkt, an dem zwei Linien sich treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenkette in Anführungszeichen. Die `path()`-Funktion ist keine gültige {{cssxref("shape-outside")}}-Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Serie von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Das `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähnlich sind. Die `shape()`-Funktion ist keine gültige {{cssxref("shape-outside")}}-Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung in der oberen linken Ecke der Margin-Box des Elements standardmäßig, wobei die x-Achse nach rechts und die y-Achse nach unten läuft. Alle in Prozent ausgedrückten Längen werden aus den Abmessungen der Referenzbox berechnet.

Die Standard-Referenzbox ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im folgenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Entwickler-Tools eines Browsers zu sehen sind. Die Form hier ist in Bezug auf die Margin-Box definiert.

![Ein Bild, das einen Kreis zeigt, der mit dem Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: der erste Versatz ist horizontal, der zweite vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird in eine Liste von acht Werten expandiert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen berechnen sich zur äquivalenten `inset()` Funktion.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolation")}} Regeln befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Für die Interpolation zwischen zwei Formen müssen beide Formen die gleiche Referenzbox verwenden, und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc()")}} interpoliert, wo möglich. Die Interpolation kann weiterhin erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie z. B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder Typ `circle()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn deren Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn sie die gleiche `<fill-rule>` verwenden und die gleiche Anzahl kommagetrennter Koordinatenpaare haben.

- **Beide Formen sind vom Typ `path()`**: Die Interpolation erfolgt für jeden Parameter als {{cssxref("&lt;number&gt;")}}, wenn die Pfadzeichenfolgen in beiden Formen in der Anzahl, dem Typ und der Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn sie das gleiche Befehls-Schlüsselwort und das gleiche `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch die gleiche `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte zur Interpolation passen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, wird das interpolierte Ergebnis im Uhrzeigersinn (`cw`) verlaufen. Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe mit dem `large` Wert interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Die Interpolation erfolgt zwischen jedem entsprechenden Wert, wenn die Liste der Pfaddatenbefehle in Anzahl und Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone dieselbe Anzahl an Eckpunkten haben, was für diese Art der Animation erforderlich ist.

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
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
- [Formpfade in den Firefox-Entwicklertools bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
