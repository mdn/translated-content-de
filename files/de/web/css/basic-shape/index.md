---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## Syntax

Der `<basic-shape>`-Datentyp wird verwendet, um grundlegende Formen zu erstellen, darunter Rechtecke durch [Container-Inset](#syntax_für_rechtecke_durch_container-insets), durch [Koordinatenabstände](#syntax_für_rechtecke_durch_abstände) oder durch [festgelegte Dimensionen](#syntax_für_rechtecke_mit_dimensionen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden mithilfe einer `<basic_shape>`-CSS-Funktion definiert, wobei jeder Wert ein Parameter ist, der der funktionsspezifischen Syntax der Form folgt.

### Allgemeine Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam genutzt werden, umfassen:

- `round <'border-radius'>`

  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Inset](#syntax_für_rechtecke_durch_container-insets), [Rechtecke durch Abstände](#syntax_für_rechtecke_durch_abstände) und [Rechtecke mit Dimensionen](#syntax_für_rechtecke_mit_dimensionen) unter Verwendung derselben Syntax wie die CSS-Kurzform-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius).

- `<shape-radius>`

  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standardwert) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side`-Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu bestimmen. Der `farthest-side`-Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite der Referenzbox.

- `<position>`

  - : Definiert das Zentrum [`<position>`](/de/docs/Web/CSS/position_value) eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Standardmäßig wird `center` verwendet, wenn es ausgelassen wird.

- `<fill-rule>`

  - : Legt die {{SVGAttr("fill-rule")}} fest, die bestimmt, wie das Innere der Form, die durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird, gefüllt werden soll. Mögliche Werte sind `nonzero` (Standardwert) und `evenodd`.

    > **Hinweis:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt, und seine Verwendung macht die Eigenschaft ungültig.

### Syntax für Rechtecke durch Container-Insets

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein inset-Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben sind, stellen sie die Versätze von oben, rechts, unten und links von der Referenzbox nach innen dar, die die Position der Kanten des inset-Rechtecks definieren. Diese Argumente folgen der Syntax der Kurzform-Eigenschaft {{cssxref("margin")}}, die es ermöglicht, alle vier Insets mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Insets für eine Dimension mehr als 100 % dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % beträgt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Inset von `90%` und einem unteren Inset von `60%` proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich umschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

### Syntax für Rechtecke durch Abstände

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck mithilfe der angegebenen Abstände von den oberen und linken Kanten der Referenzbox mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Bei der Verwendung der `rect()`-Funktion wird die Breite und Höhe des Rechtecks nicht definiert. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, dessen Dimensionen durch die Größe der Referenzbox und die vier Offsetwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

### Syntax für Rechtecke mit Dimensionen

Die Funktion {{cssxref("basic-shape/xywh","xywh()")}} definiert ein Rechteck, das sich an den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten der Referenzbox befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert ist, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die Funktion {{cssxref("basic-shape/circle","circle()")}} definiert einen Kreis mithilfe eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das Argument `<shape-radius>` repräsentiert den Radius des Kreises, definiert entweder als {{cssxref("length")}} oder {{cssxref("percentage")}}. Ein Prozentwert hier wird aus der genutzten Breite und Höhe der Referenzbox als `sqrt(width^2+height^2)/sqrt(2)` berechnet. Wenn es ausgelassen wird, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die Funktion {{cssxref("basic-shape/ellipse","ellipse()")}} definiert eine Ellipse mithilfe von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

### Syntax für Polygone

Die Funktion {{cssxref("basic-shape/polygon","polygon()")}} definiert ein Polygon mithilfe einer SVG-{{SVGAttr("fill-rule")}} und einer Reihe von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

### Syntax für Pfade

Die Funktion {{cssxref("basic-shape/path","path()")}} definiert eine Form mithilfe einer SVG-{{SVGAttr("fill-rule")}} und einer SVG-[Pfaddefinition](/de/docs/Web/SVG/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

### Syntax für Formen

Die Funktion {{cssxref("basic-shape/shape","shape()")}} definiert eine Form mithilfe eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

## Beschreibung

Bei der Erstellung einer Form wird die Referenzbox durch die Eigenschaft definiert, die `<basic-shape>`-Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig in der oberen linken Ecke des Randrahmens (margin-box) des Elements, wobei sich die x-Achse nach rechts und die y-Achse nach unten erstreckt. Alle Längen, die in Prozentsätzen ausgedrückt sind, werden aus den Dimensionen der Referenzbox berechnet.

Die Standardreferenzbox ist die [`margin-box`](/de/docs/Web/CSS/box-edge#margin-box), wie im Bild unten gezeigt. Das Bild zeigt einen Kreis, der mit `shape-outside: circle(50%)` erstellt wurde, und hebt die verschiedenen Teile des Box-Modells hervor, wie sie in den Browser-Entwicklungstools angezeigt werden. Die Form hier wird mit Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis zeigt, der mit den Firefox DevTools Shape Inspector inspiziert wird. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von grundlegenden Formen

Die Werte in einer `<basic-shape>`-Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle ausgelassenen Werte werden deren Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als Paar von Versätzen von der oberen linken Ecke der Referenzbox berechnet: Der erste Versatz ist horizontal und der zweite vertikal. Jeder Versatz wird als {{cssxref("length-percentage")}}-Wert angegeben.

### Interpolation von grundlegenden Formen

Bei der Animation zwischen zwei `<basic-shape>`-Funktionen gelten die folgenden {{Glossary("interpolation", "Interpolations")}}-Regeln.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/@keyframes)-Regel, um einen Clip-Pfad zwischen zwei Polygonen zu animieren.

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
