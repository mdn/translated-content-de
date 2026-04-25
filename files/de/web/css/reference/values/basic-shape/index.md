---
title: "`<basic-shape>` CSS-Typ"
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<basic-shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Form, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet wird.

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

Der `<basic-shape>` Datentyp wird verwendet, um grundlegende Formen zu erstellen, einschließlich Rechtecke durch [Container-Einzug](#syntax_für_rechtecke_durch_container-einzüge), durch [Koordinatenabstand](#syntax_für_rechtecke_durch_abstände) oder durch [festgelegte Abmessungen](#syntax_für_rechtecke_mit_abmessungen), [Kreise](#syntax_für_kreise), [Ellipsen](#syntax_für_ellipsen), [Polygone](#syntax_für_polygone), [Pfade](#syntax_für_pfade) und [vom Autor erstellte Formen](#syntax_für_formen). Diese grundlegenden Formen werden durch eine `<basic_shape>` CSS-Funktion definiert, wobei jeder Wert einen Parameter erfordert, der der spezifischen Syntax der Formfunktion folgt.

### Gemeinsame Parameter

Die Parameter, die in der Syntax einiger grundlegender Formfunktionen gemeinsam sind, umfassen:

- `round <'border-radius'>`
  - : Definiert abgerundete Ecken für [Rechtecke durch Container-Einzüge](#syntax_für_rechtecke_durch_container-einzüge), [Rechtecke durch Abstände](#syntax_für_rechtecke_durch_abstände) und [Rechtecke mit Abmessungen](#syntax_für_rechtecke_mit_abmessungen) unter Verwendung derselben Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzform-Eigenschaft.

- `<shape-radius>`
  - : Definiert den Radius für einen [Kreis](#syntax_für_kreise) oder eine [Ellipse](#syntax_für_ellipsen). Gültige Werte umfassen {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (Standard) und `farthest-side`. Negative Werte sind ungültig.

    Der `closest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite des Referenzkastens, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite des Referenzkastens.

- `<position>`
  - : Definiert das Zentrum {{cssxref("&lt;position&gt;")}} eines [Kreises](#syntax_für_kreise) oder einer [Ellipse](#syntax_für_ellipsen). Es wird standardmäßig auf `center` gesetzt, wenn es weggelassen wird.

- `<fill-rule>`
  - : Setzt die {{SVGAttr("fill-rule")}}, die verwendet wird, um zu bestimmen, wie das Innere der Form, die durch die grundlegenden Formen [Polygon](#syntax_für_polygone), [Pfad](#syntax_für_pfade) und [Form](#syntax_für_formen) definiert wird, gefüllt werden soll. Mögliche Werte sind `nonzero` (Standard) und `evenodd`.

    > [!NOTE]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn sie verwendet wird.

### Syntax für Rechtecke: `<basic-shape-rect>`

Der `<basic-shape-rect>` Typ, ein Untertyp des `<basic-shape>` Typs, repräsentiert die auf Rechteckerstellung begrenzten Grundformfunktionen, einschließlich {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}.

Die Funktionen [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) und [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) können ebenfalls verwendet werden, um Rechtecke zu erstellen, sind jedoch nicht auf nur vierseitige, rechtwinklige Formen beschränkt.

#### Syntax für Rechtecke durch Container-Einzüge

Die Funktion {{cssxref("basic-shape/inset","inset()")}} erstellt ein eingekapseltes Rechteck, dessen Größe durch den Versatzabstand jeder der vier Seiten seines Containers und optional abgerundete Ecken definiert wird.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Wenn alle der ersten vier Argumente angegeben werden, repräsentieren sie die oberen, rechten, unteren und linken Versätze vom Referenzkasten nach innen, die die Position der Kanten des eingekapselten Rechtecks definieren. Diese Argumente folgen der Syntax der {{cssxref("margin")}} Kurzform, die es Ihnen ermöglicht, alle vier Einzüge mit einem, zwei, drei oder vier Werten festzulegen.

Wenn ein Paar von Einzügen für eine Dimension mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% beträgt. Beispielsweise hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einzug von `90%` und einen unteren Einzug von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

#### Syntax für Rechtecke durch Abstände

Die Funktion {{cssxref("basic-shape/rect","rect()")}} definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzkastens, mit optional abgerundeten Ecken.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Wenn Sie die `rect()` Funktion verwenden, definieren Sie nicht die Breite und Höhe des Rechtecks. Stattdessen geben Sie vier Werte an, um das Rechteck zu erstellen, wobei seine Abmessungen durch die Größe des Referenzkastens und die vier Versatzwerte bestimmt werden. Jeder Wert kann entweder eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder das Schlüsselwort `auto` sein. Das Schlüsselwort `auto` wird als `0%` für die oberen und linken Werte und als `100%` für die unteren und rechten Werte interpretiert.

#### Syntax für Rechtecke mit Abmessungen

Die {{cssxref("basic-shape/xywh","xywh()")}} Funktion definiert ein Rechteck, das sich in den angegebenen Abständen von den linken (`x`) und oberen (`y`) Kanten des Referenzkastens befindet und durch die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks in dieser Reihenfolge dimensioniert wird, mit optional abgerundeten Ecken.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntax für Kreise

Die {{cssxref("basic-shape/circle","circle()")}} Funktion definiert einen Kreis unter Verwendung eines Radius und einer Position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

Das `<shape-radius>` Argument repräsentiert den Radius des Kreises, definiert als entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}}. Ein Prozentwert wird hier aus der benutzten Breite und Höhe des Referenzkastens wie `sqrt(width^2+height^2)/sqrt(2)` ermittelt. Wenn weggelassen, wird der Radius durch `closest-side` definiert.

### Syntax für Ellipsen

Die {{cssxref("basic-shape/ellipse","ellipse()")}} Funktion definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Die `<shape-radius>` Argumente repräsentieren _rx_ und _ry_, die x- und y-Achsen-Radien der Ellipse, in dieser Reihenfolge. Diese Werte werden angegeben als entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}}. Prozentwerte werden hier gegen die benutzte Breite (für den rx-Wert) und die benutzte Höhe (für den ry-Wert) des Referenzkastens ermittelt. Wenn nur ein Radiuswert angegeben wird, ist die `ellipse()` Formfunktion ungültig. Wenn kein Wert angegeben ist, wird `50% 50%` verwendet.

### Syntax für Polygone

Die {{cssxref("basic-shape/polygon","polygon()")}} Funktion definiert ein Polygon unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer Menge von Koordinaten.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

Die Funktion akzeptiert eine Liste von durch Kommas getrennten Koordinatenpaaren, von denen jedes aus zwei durch Leerzeichen getrennten `<length-percentage>` Werten als das _xi_ und _yi_ Paar besteht. Diese Werte repräsentieren die x- und y-Achsen-Koordinaten des Polygons an der Position _i_ (dem Scheitelpunkt, an dem zwei Linien sich treffen).

### Syntax für Pfade

Die {{cssxref("basic-shape/path","path()")}} Funktion definiert eine Form unter Verwendung einer SVG {{SVGAttr("fill-rule")}} und einer SVG [Pfad-Definition](/de/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

Der erforderliche `<string>` ist ein [SVG Pfad](/de/docs/Web/SVG/Reference/Attribute/d) als ein Anführungszeichen umschlossener String. Die `path()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

### Syntax für Formen

Die {{cssxref("basic-shape/shape","shape()")}} Funktion definiert eine Form unter Verwendung eines initialen Startpunkts und einer Reihe von Formbefehlen.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Der `from <coordinate-pair>` Parameter repräsentiert den Startpunkt für den ersten Formbefehl, und `<shape-command>` definiert ein oder mehrere Formbefehle, die ähnlich den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sind. Die `shape()` Funktion ist kein gültiger Wert für die {{cssxref("shape-outside")}} Eigenschaft.

## Beschreibung

Beim Erstellen einer Form wird der Referenzkasten durch die Eigenschaft definiert, die `<basic-shape>` Werte verwendet. Das Koordinatensystem für die Form hat seinen Ursprung standardmäßig an der oberen linken Ecke des Randkastens des Elements, mit der x-Achse nach rechts und der y-Achse nach unten. Alle in Prozent ausgedrückten Längen werden aus den Dimensionen des Referenzkastens ermittelt.

Der Standard-Referenzkasten ist die [`margin-box`](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box), wie im untenstehenden Bild demonstriert. Das Bild zeigt einen Kreisbogen erstellt durch `shape-outside: circle(50%)` und hebt die unterschiedlichen Teile des Box-Modells, wie sie in den Developer Tools eines Browsers gesehen werden, hervor. Die Form wird hier in Bezug auf die margin-box definiert.

![Ein Bild, das einen Kreis inspiziert zeigt, das mit dem Firefox DevTools Shape Inspector erstellt wurde. Die verschiedenen Teile des Box-Modells sind hervorgehoben.](shapes-reference-box.png)

### Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit den folgenden zusätzlichen Überlegungen:

- Für alle weggelassenen Werte werden ihre Standardwerte verwendet.
- Ein {{cssxref("position_value", "&lt;position&gt;")}} Wert in `circle()` oder `ellipse()` wird als ein Paar von Versätzen von der oberen linken Ecke des Referenzkastens berechnet: der erste Versatz ist horizontal, und der zweite ist vertikal. Jeder Versatz wird als ein {{cssxref("length-percentage")}} Wert angegeben.
- Ein [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Wert in `inset()` wird in eine Liste von acht Werten expandiert, von denen jeder entweder eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} ist.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}} Funktionen berechnen sich zur äquivalenten `inset()` Funktion.

### Interpolation von Grundformen

Beim Animieren zwischen zwei `<basic-shape>` Funktionen werden die unten aufgeführten {{Glossary("interpolation", "Interpolationsregeln")}} befolgt. Die Parameterwerte jeder `<basic-shape>` Funktion bilden eine Liste. Damit Interpolation zwischen zwei Formen stattfindet, müssen beide Formen denselben Referenzkasten verwenden und die Anzahl und der Typ der Werte in beiden `<basic-shape>` Listen müssen übereinstimmen.

Jeder Wert in den Listen der beiden `<basic-shape>` Funktionen wird basierend auf seinem berechneten Wert entweder als {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, oder {{cssxref("calc()")}} interpoliert, wo möglich. Interpolation kann dennoch stattfinden, wenn die Werte nicht eine dieser Datentypen sind, aber identisch zwischen den beiden interpolierenden Grundformfunktionen sind, wie `nonzero`.

- **Beide Formen sind vom Typ `ellipse()` oder vom Typ `circle()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn ihre Radien entweder als eine {{cssxref("length")}} oder ein {{cssxref("percentage")}} (anstelle von Schlüsselwörtern wie `closest-side` oder `farthest-side`) angegeben sind.

- **Beide Formen sind vom Typ `inset()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet.

- **Beide Formen sind vom Typ `polygon()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dieselbe `<fill-rule>` verwenden und dieselbe Anzahl von durch Komma getrennten Koordinatenpaaren haben.

- **Beide Formen sind vom Typ `path()`**: Interpolation wird zu jedem Parameter als ein {{cssxref("&lt;number&gt;")}} angewendet, wenn die Pfadstrings in beiden Formen die Anzahl, den Typ und die Reihenfolge der [Pfaddatenbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) entsprechen.

- **Beide Formen sind vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn sie dasselbe Befehls-Schlüsselwort und dasselbe `<by-to>` Schlüsselwort verwenden. Wenn `shape()` in der {{cssxref("clip-path")}} Eigenschaft verwendet wird, interpolieren die beiden Formen, wenn sie auch dieselbe `<fill-rule>` haben.
  - Wenn sie das `<curve-command>` oder das `<smooth-command>` verwenden, muss die Anzahl der Kontrollpunkte für die Interpolation übereinstimmen.

  - Wenn sie das `<arc-command>` mit unterschiedlichen `<arc-sweep>` Richtungen verwenden, geht das interpolierte Ergebnis im Uhrzeigersinn (`cw`). Wenn sie unterschiedliche `<arc-size>` Schlüsselwörter verwenden, wird die Größe mit dem `large` Wert interpoliert.

- **Eine Form ist vom Typ `path()` und die andere ist vom Typ `shape()`**: Interpolation wird zwischen jedem entsprechenden Wert angewendet, wenn die Liste der Pfaddatenbefehle in Anzahl und auch in der Reihenfolge identisch ist. Die interpolierte Form ist eine `shape()` Funktion, die dieselbe Liste von Pfaddatenbefehlen beibehält.

In allen anderen Fällen findet keine Interpolation statt, und die Animation ist diskret.

## Beispiele

### Animiertes Polygon

In diesem Beispiel verwenden wir die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) at-rule, um einen Clip-Pfad zwischen zwei Polygonen zu animieren. Beachten Sie, dass beide Polygone dieselbe Anzahl von Scheitelpunkten haben, was notwendig ist, damit diese Art von Animation funktioniert.

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
- SVG Formelemente: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Überblick über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- [Bearbeiten von Form-Pfaden in den Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
