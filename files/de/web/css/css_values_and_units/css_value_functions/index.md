---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeargumente zur Berechnung des Rückgabewerts annehmen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baum-strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Erscheinungstransformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Übersetzungsfunktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Verschiebt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Verschiebt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Verschiebt ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Verschiebt ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Verschiebt ein Element im 3D-Raum.

### Rotationsfunktionen

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Dreht ein Element um die horizontale Achse.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Dreht ein Element um die vertikale Achse.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Dreht ein Element um die z-Achse.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Dreht ein Element um einen festen Punkt auf der 2D-Ebene.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Dreht ein Element um eine feste Achse im 3D-Raum.

### Skalierungsfunktionen

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Skaliert ein Element horizontal nach oben oder unten.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal nach oben oder unten.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse nach oben oder unten.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene nach oben oder unten.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum nach oben oder unten.

### Schiefzugsfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Verzerrt ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Verzerrt ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Verzerrt ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4-homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Legt den Abstand zwischen dem Benutzer und der z=0-Ebene fest.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS-numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax der Mathematikfunktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [CSS-Mathematikfunktionen verwenden](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen für intrinsische Größenwerte wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den Mittelwert aus einem minimalen, zentralen und maximalen Wert.

### Gezackte Wertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet ein Modulus (mit demselben Vorzeichen wie der Divisor) beim Teilen einer Zahl durch eine andere.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Dividend) beim Teilen einer Zahl durch eine andere.

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
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen in einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis hoch einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate der Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` hoch einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den gaußschen Weichzeichner des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder vermindert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schatten hinter ein Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamteindruck eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiaton eines Bildes.

## Farbfunktions

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) spezifiziert unterschiedliche Farbrepräsentationen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren roten, grünen, blauen und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrem Farbton, ihrer Sättigung, Helligkeit und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrem Farbton, Weißgrad und Schwarzwert.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma, Farbton und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achse Abstand und b-Achse Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achse Abstand, b-Achse Abstand im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, angegebenen Farbraum anstelle des impliziten sRGB-Farbraums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum mit einem bestimmten Anteil.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauffunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern Farben progressiv entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern Farben progressiv von einem Mittelpunkt aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelige Verläufe ändern Farben fortschreitend um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnelt `linear-gradient()` und verwendet dieselben Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnelt `radial-gradient()` und verwendet dieselben Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnelt `conic-gradient()` und verwendet dieselben Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, aber mit zusätzlichen Funktionen, einschließlich der Angabe der Bild-Richtung und von Ausweichbildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Blendet zwei oder mehr Bilder mit einer definierten Transparenz ein.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden generell mit der {{CSSxRef("content")}}-Eigenschaft verwendet, können theoretisch jedoch überall dort verwendet werden, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler, die eine verkettete Zeichenkette zurückgeben, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

### Basisformen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingezogene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Kanten des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie Breite und Höhe des Rechtecks.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadanweisung, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die Form zum Zeichnen definieren.

### Weitere Formfunktionen

- {{CSSxRef("ray", "ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} anzugeben, der mit {{cssxref("corner-shape")}} und seinen [Bestandteilen](/de/docs/Web/CSS/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/corner-shape#related_properties) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Eigenschaftswert verwendet, um auf einen Wert zu verweisen, der anderswo definiert ist:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die an einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzeragenten als Umgebungsvariable definierten Werte.
- {{CSSxRef("if", "if()")}}
  - : Setzt bedingt einen Eigenschaftswert abhängig von dem Ergebnis einer [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienanfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Merkmalsanfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Raster](/de/docs/Web/CSS/CSS_grid_layout) zu definieren:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederkehrendes Fragment der Spur, das eine große Anzahl von Spalten oder Reihen beschreibt, die ein wiederkehrendes Muster aufweisen.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich dem `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwungbuchstaben](https://en.wikipedia.org/wiki/Swash_%28typography%29). Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Florials](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Schmuckzeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie umkreiste Zahlen oder umgedrehte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) stellt eine mathematische Funktion dar. Er wird in Übergangs- und Animations-Eigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer angegebenen Anzahl von Haltestellen während des Übergangs, wobei jede Haltestelle für gleiche Zeitdauern angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt den {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschritts-Zeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt den {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme View-Fortschritts-Zeitleiste_.

## Anker-Positionierungsfunktionen

Die Anker-Positionierungsfunktionen werden verwendet, wenn Anker-Positionierte Elemente in Beziehung zur Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten des Anker-Positionierten Elements in Bezug auf das zugehörige Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählerfunktionen

Die folgenden Funktionen geben einen Ganzzahlwert basierend auf dem DOM-Baum zurück, im Gegensatz zu den flachen Baumwerten, die die meisten CSS-Werte ergeben:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister, einschließlich des ausgewählten Elements, widerspiegelt.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
