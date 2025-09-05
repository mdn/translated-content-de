---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 0fb61080baf21a3efd8f21911bd4554c14f75c17
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Container-Inset](#syntax_für_rechtecke_durch_container-insets), durch [Koordinatenabstand](#syntax_für_rechtecke_durch_abstand) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden unter Verwendung einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Gemeinsame Parameter

Die in der Syntax einiger grundlegender Formfunktionen gemeinsamen Parameter umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Insets](#syntax_für_rechtecke_durch_container-insets), [Rechtecke durch Abstand](#syntax_für_rechtecke_durch_abstand) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung der gleichen Syntax wie die CSS Kurzform-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (die Standardeinstellung) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwert `closest-side` verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzkasten, um die Radiuslänge zu erstellen. Der Schlüsselwert `farthest-side` verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite des Referenzkasten.

- `<position>`
  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird in der Standardeinstellung auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form gefüllt werden soll. Mögliche Werte sind `nonzero` (die Standardeinstellung) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

### Syntax für Rechtecke durch Container-Insets

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein eingefügtes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten des Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die inneren Versätze oben, rechts, unten und links vom Referenzkasten, die die Position der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der Kurzform von {{cssxref("margin")}}, die es ermöglicht, alle vier Einsätze mit einem, zwei, drei oder vier Werten zu setzen.

Wenn ein Paar Einsätze für eine Dimension mehr als 100 % dieser Dimension ausmacht, werden beide Werte proportional so reduziert, dass ihre Summe 100 % entspricht. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Einsatz von `90%` und einem unteren Einsatz von `60%` auf `inset(60% 10% 40% 10%)` proportioniert reduziert. Solche Formen, die kein Gebiet umschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Abstand

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck durch die angegebenen Abstände von den oberen und linken Rändern des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der Funktion `rect()` definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Abmessungen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Rändern des Referenzkastens befindet und mit der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks dimensioniert wird, in dieser Reihenfolge, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis mittels eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der als entweder ein {{cssxref("length")}} oder ein {{cssxref("percentage")}} definiert ist. Ein Prozentwert hier wird von der verwendeten Breite und Höhe des Referenzkastens als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn er weggelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse mittels zweier Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzkastens aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert bereitgestellt wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren, jedes bestehend aus zwei durch Leerzeichen getrennten `<length-percentage>`-Werten als das _xi_ und _yi_ Paar. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an der Position _i_ (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfade-Definition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein zitierter String. Die `path()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines anfänglichen Startpunkts und einer Serie von Form-Befehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>`-Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formenbefehle, die ähnlich sind wie die [SVG-Pfade-Befehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung in der oberen linken Ecke der Randumrandung des Elements standardmäßig, wobei die x-Achse nach rechts und die y-Achse nach unten läuft. Alle im Prozentsatz ausgedrückten Längen werden von den Abmessungen des Referenzkastens aufgelöst.

Der Standard-Referenzkasten ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im nachstehenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Boxmodells hervor, wie sie in den Entwicklerwerkzeugen eines Browsers angezeigt werden. Die Form wird hier im Bezug auf den margin-box definiert.

![Ein Bild, das einen Kreis mit dem Firefox DevTools Shape Inspector geprüft zeigt. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle fehlenden Werte werden die Standardeinstellungen verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke des Referenzkastens berechnet: der erste Versatz ist horizontal und der zweite ist vertikal. Jeder Versatz wird als ein {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten expandiert, wobei jeder Wert entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} ist.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen werden in die äquivalente `inset()`-Funktion berechnet.

### Interpolation von grundlegenden Formen

Beim Animieren zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen denselben Referenzkasten verwenden und Anzahl und Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc", "calc()")}} wo immer möglich interpoliert. Eine Interpolation kann dennoch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden grundlegenden Formfunktionen identisch sind, wie zum Beispiel `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben sind (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`).

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie denselben `<fill-rule>` verwenden und dieselbe Anzahl von durch Komma getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfad-Strings in beiden Formen mit der Anzahl, dem Typ und der Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Befehls-Schlüsselwort und dasselbe `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch denselben `<fill-rule>` haben.
  - Wenn sie die `<curve-command>` oder die `<smooth-command>` verwenden, muss die Anzahl der Steuerpunkte für die Interpolation übereinstimmen.

  - Wenn sie `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe unter Verwendung des `large` Wertes interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone dieselbe Anzahl an Ecken haben müssen, damit diese Art der Animation funktioniert.

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
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [Formen-Pfade in den Firefox-Entwicklerwerkzeugen bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
