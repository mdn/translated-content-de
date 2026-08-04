---
title: CSS-Wertfunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und können einige Eingabeargumente annehmen, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertesyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen das/die Argument(e) und die Funktion endet mit einer schließenden Klammer `)`.

Funktionen können mehrere Argumente aufnehmen, die ähnlich zu CSS-Eigenschaftswerten formatiert sind. Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. Bei einigen funktionalen Notationen sind mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der CSS-{{CSSxRef("&lt;transform-function&gt;")}} [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert Erscheinungstransformationen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Übersetzungsfunktionen

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
  - : Skaliert ein Element horizontal auf oder ab.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal auf oder ab.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse auf oder ab.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene auf oder ab.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum auf oder ab.

### Schiefwinkelfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schert ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schert ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schert ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivenfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Legt die Entfernung zwischen dem Benutzer und der z=0-Ebene fest.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen zur Syntax einer mathematischen Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung in CSS-Mathematikfunktionen siehe [Verwendung von CSS-Math-Funktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundarithmetik

- {{cssxref("calc()")}}
  - : Führt grundlegende arithmetische Berechnungen an numerischen Werten durch.
- {{cssxref("calc-size()")}}
  - : Führt Berechnungen an intrinsischen Größenwerten durch, wie `auto`, `fit-content` und `max-content`, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{cssxref("min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{cssxref("max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{cssxref("clamp()")}}
  - : Berechnet den zentralen Wert von minimalen, zentralen und maximalen Werten.

### Abgestufte Wertfunktionen

- {{cssxref("round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{cssxref("mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor) beim Teilen einer Zahl durch eine andere.
- {{cssxref("progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten — einem Start- und einem Endwert. Das Ergebnis wird als Zahl zwischen 0 und 1 ausgedrückt, die den Fortschritt zwischen den Start- und Endwerten darstellt.
- {{cssxref("rem()")}}
  - : Berechnet einen Rest (mit dem gleichen Vorzeichen wie der Dividend) beim Teilen einer Zahl durch eine andere.

### Trigonometrische Funktionen

- {{cssxref("sin()")}}
  - : Berechnet den trigonometrischen Sinus einer Zahl.
- {{cssxref("cos()")}}
  - : Berechnet den trigonometrischen Kosinus einer Zahl.
- {{cssxref("tan()")}}
  - : Berechnet den trigonometrischen Tangens einer Zahl.
- {{cssxref("asin()")}}
  - : Berechnet den trigonometrischen Arkussinus einer Zahl.
- {{cssxref("acos()")}}
  - : Berechnet den trigonometrischen Arkuskosinus einer Zahl.
- {{cssxref("atan()")}}
  - : Berechnet den trigonometrischen Arkustangens einer Zahl.
- {{cssxref("atan2()")}}
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen in einer Ebene.

### Exponentialfunktionen

- {{cssxref("pow()")}}
  - : Berechnet die Basis, potenziert mit einer Zahl.
- {{cssxref("sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{cssxref("hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{cssxref("log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{cssxref("exp()")}}
  - : Berechnet `e` potenziert mit einer Zahl.

### Vorzeichenbezogene Funktionen

- {{cssxref("abs()")}}
  - : Berechnet den Absolutbetrag einer Zahl.
- {{cssxref("sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{cssxref("filter-function")}} CSS [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Unschärfe des Bilds durch Gaußsche Unschärfe.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder dunkelt es ab.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bilds.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schatten hinter einem Bild hinzu.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamtfarbton eines Bilds.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Invertiert die Farben eines Bilds.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bilds.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Ton eines Bilds.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) spezifiziert verschiedene Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Rot-, Grün-, Blau- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrem Farbton, ihrer Sättigung, Helligkeit und Alpha-Komponente (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrem Farbton, Weißgrad und Schwarzgrad.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, Chroma und Farbton.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, Chroma, Farbton und Alpha-Komponente (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, a-Achsen-Distanz und b-Achsen-Distanz im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, a-Achsen-Distanz, b-Achsen-Distanz im Lab-Farbraum und Alpha-Komponente (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, angegebenen Farbraum an, anstatt des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum anhand eines gegebenen Betrags.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben geräteabhängig.
- {{CSSXref("color_value/alpha", "alpha()")}}
  - : Gibt eine Farbe mit einem modifizierten Alpha-Kanal (Transparenz) zurück.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbgebungsschema zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt eine benutzerdefinierte maximale Leuchtkraftgrenze, die eine Mischung verschiedener {{cssxref("dynamic-range-limit")}}-Schlüsselwörter in bestimmten Prozentsätzen ist.

## Bildfunktionen

Der {{cssxref("image")}} CSS [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bietet eine grafische Darstellung von Bildern oder Farbverläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern Farben stetig entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern Farben stetig von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern Farben stetig um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnlich wie `linear-gradient()` und nimmt dieselben Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um sein gesamtes Container zu bedecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnlich wie `radial-gradient()` und nimmt dieselben Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um sein gesamtes Container zu bedecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnlich wie `conic-gradient()` und nimmt dieselben Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um sein gesamtes Container zu bedecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{cssxref("image")}} ähnlich dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlichen Funktionen, einschließlich der Spezifizierung der Bildrichtung und Ersatzbildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das geeignetste CSS-Bild aus einem angegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{cssxref("cross-fade()")}}
  - : Mischt zwei oder mehr Bilder mit definierter Transparenz.
- {{cssxref("element()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der mit einem PaintWorklet generiert wurde.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{cssxref("counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{cssxref("counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt eine verkettete Zeichenkette zurück, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{cssxref("symbols()")}}
  - : Definiert die Zählerstile inline direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundformen

Der {{cssxref("basic-shape")}} CSS [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine grafische Form. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}}-Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingezogene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform mithilfe der Abstände von den oberen und linken Kanten der Referenzbox.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform, indem die angegebenen Abstände von den oberen und linken Kanten der Referenzbox und die Rechtecksbreite sowie -höhe verwendet werden.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadspezifikation, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Andere Formfunktionen

- {{cssxref("ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert die Liniensegmente, denen ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} anzugeben, der mit {{cssxref("corner-shape")}} und seinen [bestandteiligen](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_corner-shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um einen an anderer Stelle definierten Wert zu referenzieren:

- {{cssxref("attr()")}}
  - : Verwendet die auf dem HTML-Element definierten Attribute.
- {{cssxref("env()")}}
  - : Verwendet die vom User-Agenten definierten Umgebungsvariablen.
- {{cssxref("if()")}}
  - : Setzt bedingt einen Eigenschaftswert abhängig vom Ergebnis einer [Stilabfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{cssxref("var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines beliebigen Teils des Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Raster](/de/docs/Web/CSS/Guides/Grid_layout) zu definieren:

- {{cssxref("fit-content()")}}
  - : Beschränkt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{cssxref("minmax()")}}
  - : Definiert einen Größenbereich, der größer als oder gleich _min_ und kleiner als oder gleich _max_ ist.
- {{cssxref("repeat()")}}
  - : Stellt ein wiederholtes Fragment der Spur-Definition dar, das eine große Anzahl von Spalten oder Reihen ermöglicht, die ein wiederkehrendes Muster aufweisen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um den Einsatz alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensatzgruppen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für eine Zeichensatzgruppe; einzelne Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Schrieb](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Anmerkungen wie umrandete Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{cssxref("easing-function")}} CSS [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteriert über eine angegebene Anzahl von Stopppunkten entlang des Übergangs und zeigt jeden Stopp für gleiche Zeitlängen an.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert unterschiedlicher {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Progess-Zeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichts-Progess-Zeitleiste_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, um Anker-elementierte Elemente relativ zu ihrem Standort und ihrer Größe zu positionieren und zu dimensionieren.

- {{cssxref("anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten des Anker-positionierten Elements zugehörigen Ankerelements zurück.
- {{cssxref("anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum, wie die meisten CSS-Werte:

- {{cssxref("sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister, einschließlich des ausgewählten Elements, widerspiegelt.

## Alphabetisches Verzeichnis der Funktionen

- {{cssxref("-moz-image-rect")}} {{non-standard_inline}} {{deprecated_inline}}
- {{cssxref("abs")}}
- {{cssxref("acos")}}
- {{cssxref("alpha")}}
- {{cssxref("anchor")}}
- {{cssxref("anchor-size")}}
- {{cssxref("asin")}}
- {{cssxref("atan")}}
- {{cssxref("atan2")}}
- {{cssxref("attr")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("calc")}}
- {{cssxref("calc-size")}} {{experimental_inline}}
- {{cssxref("basic-shape/circle", "circle()")}}
- {{cssxref("clamp")}}
- {{cssxref("color_value/color", "color()")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("color_value/contrast-color", "contrast-color()")}}
- {{cssxref("cos")}}
- {{cssxref("counter")}}
- {{cssxref("counters")}}
- {{cssxref("cross-fade")}}
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{cssxref("color_value/device-cmyk", "device-cmyk()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("dynamic-range-limit-mix")}} {{experimental_inline}}
- {{cssxref("element")}} {{experimental_inline}}
- {{cssxref("basic-shape/ellipse", "ellipse()")}}
- {{cssxref("env")}}
- {{cssxref("exp")}}
- {{cssxref("fit-content()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("color_value/hsl", "hsl()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("color_value/hwb", "hwb()")}}
- {{cssxref("hypot")}}
- {{cssxref("if")}} {{experimental_inline}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("basic-shape/inset", "inset()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("color_value/lab", "lab()")}}
- {{cssxref("@import/layer_function", "layer()")}}
- {{cssxref("color_value/lch", "lch()")}}
- {{cssxref("color_value/light-dark", "light-dark()")}}
- {{cssxref("easing-function/linear", "linear()")}}
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
- {{cssxref("log")}}
- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("max")}}
- {{cssxref("min")}}
- {{cssxref("minmax")}}
- {{cssxref("mod")}}
- {{cssxref("color_value/oklab", "oklab()")}}
- {{cssxref("color_value/oklch", "oklch()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("image/paint", "paint()")}}
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
- {{cssxref("basic-shape/path", "path()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("basic-shape/polygon", "polygon()")}}
- {{cssxref("pow")}}
- {{cssxref("progress")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("random")}}
- {{cssxref("ray")}}
- {{cssxref("basic-shape/rect", "rect()")}}
- {{cssxref("rem")}}
- {{cssxref("repeat")}}
- {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("color_value/rgb", "rgb()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("round")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("animation-timeline/scroll", "scroll()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("basic-shape/shape", "shape()")}}
- {{cssxref("sibling-count")}}
- {{cssxref("sibling-index")}}
- {{cssxref("sign")}}
- {{cssxref("sin")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewx", "skewx()")}}
- {{cssxref("transform-function/skewy", "skewy()")}}
- {{cssxref("sqrt")}}
- {{cssxref("easing-function/steps", "steps()")}}
- {{cssxref("superellipse")}} {{experimental_inline}}
- {{cssxref("symbols")}}
- {{cssxref("tan")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate3d()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}
- {{cssxref("type")}} {{experimental_inline}}
- {{cssxref("url_function", "url()")}}
- {{cssxref("var")}}
- {{cssxref("animation-timeline/view", "view()")}}
- {{cssxref("basic-shape/xywh", "xywh()")}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
