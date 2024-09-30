---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: 3fc0148fce9cbc63468fec3c8783a9fe76bc1fdb
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen ausführen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Types) und können einige Eingabeargumente zur Berechnung des Rückgabewertes verwenden.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argumente, und die Funktion wird mit einer schließenden Klammer `)` beendet.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind zulässig, jedoch optional innerhalb der Klammern. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturierte Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) benötigen Parameterwerte, sind aber keine Wertfunktionen. Die konditionalen At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert das Erscheinungsbild einer Transformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Translate-Funktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Übersetzt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Übersetzt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Übersetzt ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Übersetzt ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Übersetzt ein Element im 3D-Raum.

### Rotationsfunktionen

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Rotiert ein Element um die horizontale Achse.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Rotiert ein Element um die vertikale Achse.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Rotiert ein Element um die z-Achse.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Rotiert ein Element um einen festen Punkt auf der 2D-Ebene.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Rotiert ein Element um eine feste Achse im 3D-Raum.

### Skalierungsfunktionen

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Skaliert ein Element horizontal größer oder kleiner.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal größer oder kleiner.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse größer oder kleiner.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene größer oder kleiner.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum größer oder kleiner.

### Schrägstellungsfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schrägstellt ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schrägstellt ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schrägstellt ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4x4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt die Distanz zwischen dem Nutzer und der z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Browser-Kompatibilitätsdaten, Beispiele und mehr. Für eine umfassende Einführung in CSS-Mathematikfunktionen lesen Sie [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen an numerischen Werten durch.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert von Mindest-, Zentral- und Maximalwerten.

### Stufenwertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

### Trigonometrische Funktionen

- {{CSSxRef("sin", "sin()")}}
  - : Berechnet den trigonometrischen Sinus einer Zahl.
- {{CSSxRef("cos", "cos()")}}
  - : Berechnet den trigonometrischen Kosinus einer Zahl.
- {{CSSxRef("tan", "tan()")}}
  - : Berechnet den trigonometrischen Tangens einer Zahl.
- {{CSSxRef("asin", "asin()")}}
  - : Berechnet den trigonometrischen Arkussinus einer Zahl.
- {{CSSxRef("acos", "acos()")}}
  - : Berechnet den trigonometrischen Arkuskosinus einer Zahl.
- {{CSSxRef("atan", "atan()")}}
  - : Berechnet den trigonometrischen Arkustangens einer Zahl.
- {{CSSxRef("atan2", "atan2()")}}
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen auf einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Potenzierung der Basis um eine Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` potenziert mit einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Bestimmt das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebilds verändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Bildunschärfe mittels Gaußscher Unschärfe.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder dunkelt es ab.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast eines Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Erzeugt einen Schlagschatten hinter einem Bild.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Wandelt ein Bild in Graustufen um.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamthue eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht das Sepia eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) spezifiziert verschiedene Farbrepräsentationen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer roten, grünen, blauen und Alpha-(Transparenz)komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Hue, Sättigung, Helligkeit und Alpha-(Transparenz)komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Hue, Weiß- und Schwarzanteile.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, Chroma und Hue.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, Chroma, Hue und Alpha-(Transparenz)komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, A-Achsen-Abstand und B-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, A-Achsen-Abstand, B-Achsen-Abstand im Lab-Farbraum und Alpha-(Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, angegebenen Farbraum anstatt des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum nach einer bestimmten Menge.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}}
  - : Wählt den höchsten Farbkontrast aus einer Liste von Farben, verglichen mit einem Basisfarbwert.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben geräteabhängig.
- {{CSSxRef("color_value/light-dark", "light-dark()")}}
  - : Gibt eine der zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Gradient-Funktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe wechseln die Farben progressiv entlang einer gedachten Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe wechseln die Farben progressiv von einem zentralen Punkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Konische Verläufe wechseln die Farben progressiv um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt dieselben Argumente entgegen, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Behälter zu bedecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt dieselben Argumente entgegen, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Behälter zu bedecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt dieselben Argumente entgegen, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Behälter zu bedecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlichen Funktionalitäten einschließlich der Spezifikation der Bilderrichtung und von Ersatzbildern, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das passendste CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers repräsentiert, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen verketteten String zurück, der die aktuellen Werte der benannten Zähler repräsentiert, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingekerbte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform, indem die Abstände von den oberen und linken Kanten des Referenzrahmens verwendet werden.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform, indem die angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie die Rechteckbreite und -höhe verwendet werden.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um das Zeichnen einer Form zu ermöglichen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine kommagetrennte Liste von Befehlen, die die zu zeichnende Form definieren.

## Referenzfunktionen

Die folgenden Funktionen werden als Eigenschaftswert verwendet, um einen anderswo definierten Wert zu referenzieren.

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzer-Agenten definierten Umgebungsvariablen.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Grid-Funktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klammern einer gegebenen Größe auf eine verfügbare Größe entsprechend der Formel `min(maximum size, max(minimum size, argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Spur-Liste und ermöglicht eine große Anzahl von Spalten oder Reihen, die ein wiederkehrendes Muster aufweisen.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, z.B. `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Ist ähnlich `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Zeichensatz; individuelle Zeichen haben unabhängige und nicht notwendigerweise kohärente Stile. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, z.B. `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, z.B. `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, z.B. `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, z.B. `nalt 2`.

## Easing-Funktionen

Die folgenden Funktionen werden als Wert in Übergangs- und Animationseigenschaften verwendet.

- {{cssxref("easing-function#linear_easing_function", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function#cubic_b%C3%A9zier_easing_function", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function#steps_easing_function", "steps()")}}
  - : Iteration entlang einer angegebenen Anzahl von Haltepunkten während des Übergangs, wobei jeder Haltepunkt für gleich lange Zeiten angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener `animation-timeline`-Eigenschaften verwendet. Siehe {{CSSxRef("animation-timeline")}} für weitere Details hierzu.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittszeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansicht-Fortschrittszeitleiste_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, um Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente zu positionieren und zu dimensionieren.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-positionierten Elements zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
