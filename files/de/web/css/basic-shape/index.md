---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{InteractiveExample("CSS Demo: &amp;lt;basic-shape&amp;gt;")}}

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
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## Syntax

Der `<basic-shape>`-Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecken durch [Behälter-Einzüge](#syntax_für_rechtecke_durch_behälter-einzüge), durch [Koordinaten-Abstände](#syntax_für_rechtecke_nach_entfernung) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade), und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer von einem `<basic_shape>` CSS-Funktionen definiert, wobei jeder Wert einen Parameter erfordert, der der funktionsspezifischen Syntax der Form folgt.

### Allgemeine Parameter

Die syntaxgleichen Parameter einiger grundlegender Formfunktionen umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Behälter-Einzüge](#syntax_für_rechtecke_durch_behälter-einzüge), [Rechtecke durch Abstand](#syntax_für_rechtecke_nach_entfernung) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) mit derselben Syntax wie die CSS- [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzform-Eigenschaft.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite des Referenzbereichs, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzbereichs.

- `<position>`
  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig `center` verwendet, wenn es weggelassen wird.

- `<fill-rule>`
  - : Legt die {{SVGAttr("fill-rule")}} fest, die verwendet wird, um zu bestimmen, wie das Innere der durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form gefüllt werden soll. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und führt zur Ungültigkeit der Eigenschaft.

### Syntax für Rechtecke durch Behälter-Einzüge

Die {{cssxref("basic-shape/inset","inset()")}}-Funktion erstellt ein Eingebettetes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Behälters und optional durch abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, repräsentieren sie die Versätze oben, rechts, unten und links von der Bezugsbox nach innen, die die Position der Kanten des Eingebetteten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}}-Kurzform, die es Ihnen ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar Einzüge für eine Dimension mehr als 100% dieser Dimension ausmachen, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und ohne {{cssxref("shape-margin")}}, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke nach Entfernung

Die {{cssxref("basic-shape/rect","rect()")}}-Funktion definiert ein Rechteck, indem sie die angegebenen Abstände von den oberen und linken Rändern der Bezugsbox mit optional abgerundeten Ecken verwendet.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()`-Funktion definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Abmessungen durch die Größe der Bezugsbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Abmessungen

Die {{cssxref("basic-shape/xywh","xywh()")}}-Funktion definiert ein Rechteck, das an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Rändern der Bezugsbox positioniert ist und mit der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}}-Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument stellt den Radius des Kreises dar, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert hier wird von der verwendeten Breite und Höhe des Referenzbereichs als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn es weggelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}}-Funktion definiert eine Ellipse unter Verwendung zweier Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente stellen _rx_ und _ry_ dar, die x-Achse und y-Achse-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte hier werden in Bezug auf die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) des Referenzbereichs aufgelöst. Wenn nur ein Radiuswert bereitgestellt wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert bereitgestellt wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}}-Funktion definiert ein Polygon unter Verwendung eines SVG-{{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von durch Kommas getrennten Koordinatenpaaren auf, die jeweils aus zwei leerzeichenseparierten `<length-percentage>`-Werten als das _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsenkoordinaten des Polygons an der Position _i_ (der Scheitelpunkt, an dem zwei Linien zusammentreffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}}-Funktion definiert eine Form unter Verwendung einer SVG-{{SVGAttr("fill-rule")}} und einer SVG- [Pfaddefinition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als Zeichenkette. Die `path()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}}-Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}}-Funktion definiert eine Form unter Verwendung eines Anfangspunktes und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}}-Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird die Bezugsbox von der Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randkastens des Elements mit der x-Achse, die nach rechts läuft, und der y-Achse, die nach unten verläuft. Alle in Prozent ausgedrückten Längen werden von den Abmessungen der Bezugsbox aufgelöst.

Die Standard-Bezugsbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Boxmodells, wie sie in den Entwicklertools eines Browsers zu sehen sind, hervorhebt. Die Form hier wird in Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit den Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Boxmodells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als ein Paar Offsets von der oberen linken Ecke der Bezugsbox berechnet: das erste Offset ist horizontal und das zweite ist vertikal. Jedes Offset wird als ein {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird in eine Liste von acht Werten expandiert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen rechnen sich in die gleichwertige `inset()`-Funktion um.

### Interpolation von Grundformen

Bei der Animation zwischen zwei `<basic-shape>`-Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}-Regeln befolgt. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen stattfinden kann, müssen beide Formen dasselbe Bezugsbox verwenden und die Anzahl und Art der Werte in beiden `<basic-shape>`-Listen muss übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Eine Interpolation kann auch dann erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber zwischen den beiden interpolierenden Grundformfunktionen identisch sind, wie z.B. `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe `<fill-rule>` verwenden und die gleiche Anzahl an durch Kommas getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadzeichenfolgen in beiden Formen die Anzahl, Typ und Abfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) übereinstimmen.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie das identische Befehls-Schlüsselwort haben und das gleiche `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch denselben `<fill-rule>` haben.
  - Wenn sie den `<curve-command>` oder den `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie den `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mithilfe des `large`-Werts interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl sowie Abfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes)-At-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone die gleiche Anzahl von Ecken haben müssen, was für diese Art von Animation erforderlich ist.

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
- [Überblick über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [Bearbeiten von Formpfaden in Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
