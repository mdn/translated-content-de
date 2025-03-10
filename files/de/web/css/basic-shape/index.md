---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Behälter-Inset](#syntax_für_rechtecke_nach_behälter-insets), durch [Koordinatenabstand](#syntax_für_rechtecke_nach_abstand), oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mit einer `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der speziell für die Funktion geltenden Syntax folgt.

### Allgemeine Parameter

Die Parameter, die in der Syntax einiger Grundformfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke nach Behälter-Insets](#syntax_für_rechtecke_nach_behälter-insets), [Rechtecke nach Abstand](#syntax_für_rechtecke_nach_abstand) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) unter Verwendung derselben Syntax wie die CSS-Kurzeigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (der Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der Schlüsselwortwert `closest-side` verwendet die Länge vom Mittelpunkt der Form bis zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Mittelpunkt der Form bis zur entferntesten Seite der Referenzbox.

- `<position>`

  - : Definiert die Mitte [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig `center` verwendet, wenn es weggelassen wird.

- `<fill-rule>`

  - : Legt die {{SVGAttr("fill-rule")}} fest, die bestimmt, wie das Innere der durch die Grundformen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definierten Form gefüllt werden soll. Mögliche Werte sind `nonzero` (der Standard) und `evenodd`.

    > **Note:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und die Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke nach Behälter-Insets

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein Inset-Rechteck, bei dem die Größe durch den Versatzabstand jeder der vier Seiten seines Containers und, optional, abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle vier ersten Argumente angegeben sind, repräsentieren sie die inneren Abstände von oben, rechts, unten und links aus der Referenzbox, die die Position der Ränder des Inset-Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzschreibweise, die es ermöglicht, alle vier Inset-Werte mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Inset-Werten für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Inset von `90%` und einem unteren Inset von `60%` proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke nach Abstand

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern der Referenzbox mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Wenn Sie die Funktion `rect()` verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Abmessungen durch die Größe der Referenzbox und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Abmessungen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Rändern der Referenzbox befindet und in der angegebenen Reihenfolge durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks dimensioniert wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>`-Argument repräsentiert den Radius des Kreises, der entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} definiert ist. Ein Prozentwert hier wird aus der verwendeten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` aufgelöst. Wenn es weggelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>`-Argumente repräsentieren _rx_ und _ry_, die x-Achsen- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} angegeben. Prozentwerte hier werden gegen die verwendete Breite (für den rx-Wert) und die verwendete Höhe (für den ry-Wert) der Referenzbox aufgelöst. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()`-Formfunktion ungültig. Wenn kein Wert angegeben wird, wird `50% 50%` verwendet.

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion nimmt eine Liste von komma-separierten Koordinatenpaaren auf, die jeweils aus zwei leerzeichen­separierten `<length-percentage>` Werten als _xi_ und _yi_ Paar bestehen. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an Position _i_ (der Scheitelpunkt, an dem sich zwei Linien treffen).

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG-Pfad](/de/docs/Web/SVG/Attribute/d) als Zeichenkette. Die `path()`-Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form unter Verwendung eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der Parameter `from <coordinate-pair>` repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert einen oder mehrere Formbefehle, die den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) ähneln. Die `shape()`-Funktion ist kein gültiger Wert für die Eigenschaft {{cssxref("shape-outside")}}.

## Beschreibung

Beim Erstellen einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Margin-Box des Elements, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Alle Längen, die als Prozentsätze ausgedrückt werden, werden aus den Abmessungen der Referenzbox aufgelöst.

Die Standard-Referenzbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im untenstehenden Bild gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde und die verschiedenen Teile des Modellrahmens zeigt, wie sie in einem Browser-Entwicklerwerkzeug zu sehen sind. Die Form hier wird mit Bezug auf die Margin-Box definiert.

![Ein Bild, das einen Kreis im Firefox DevTools Shape Inspector zeigt. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Versatzwerten von der oberen linken Ecke der Referenzbox berechnet: Der erste Versatz ist horizontal, und der zweite ist vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Wert in `inset()` wird in eine Liste von acht Werten erweitert, die jeweils entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} sind.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}-Funktionen werden zu einer äquivalenten `inset()`-Funktion berechnet.

### Interpolation von Grundformen

Wenn zwischen zwei `<basic-shape>`-Funktionen animiert wird, gelten die unten aufgeführten {{Glossary("interpolation", "Interpolations")}}regeln. Die Parameterwerte jeder `<basic-shape>`-Funktion bilden eine Liste. Damit eine Interpolation zwischen zwei Formen erfolgen kann, müssen beide Formen dieselbe Referenzbox verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>`-Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>`-Funktionen wird basierend auf seinem berechneten Wert als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} oder {{cssxref("calc", "calc()")}} interpoliert, wo möglich. Die Interpolation kann dennoch erfolgen, wenn die Werte nicht einer dieser Datentypen sind, aber bei den beiden interpolierenden Grundformfunktionen identisch sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder `circle()`**: Die Interpolation wird für jeden entsprechenden Wert angewendet, wenn deren Radien entweder als {{cssxref("length")}} oder als {{cssxref("percentage")}} (anstatt Schlüsselwörter wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Die Interpolation wird für jeden entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Die Interpolation wird für jeden entsprechenden Wert angewendet, wenn sie denselben `<fill-rule>` verwenden und die gleiche Anzahl von komma-separierten Koordinatenpaaren haben.

- **Both shapes are of type `path()`**: Die Interpolation wird auf jeden Parameter als {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfad-Zeichenfolgen in beiden Formen die gleiche Anzahl, den gleichen Typ und die gleiche Abfolge der [Pfaddaten-Befehle](/de/docs/Web/SVG/Attribute/d#path_commands) haben.

- **Both shapes are of type `shape()`**: Die Interpolation wird für jeden entsprechenden Wert angewendet, wenn sie dasselbe Befehls-Schlüsselwort und dasselbe `<by-to>`-Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}}-Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dasselbe `<fill-rule>` haben.

  - Wenn sie `<curve-command>` oder `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie `<arc-command>` mit unterschiedlichen `<arc-sweep>`-Richtungen verwenden, ist das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>`-Schlüsselwörter verwenden, wird die Größe mit dem Wert `large` interpoliert.

- **Eine Form ist vom Typ `path()` und die andere vom Typ `shape()`**: Die Interpolation wird für jeden entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und Abfolge identisch ist. Die interpolierte Form ist eine `shape()`-Funktion, die die gleiche Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen erfolgt keine Interpolation und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes) at-Regel, um einen Clippfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone dieselbe Anzahl von Ecken haben müssen, was für diese Art der Animation erforderlich ist.

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
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Übersicht über CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Bearbeiten von Formpfaden in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
