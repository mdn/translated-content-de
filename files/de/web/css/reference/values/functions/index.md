---
title: CSS-Wertfunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: d35a7643766c8f8d1d92044ca771dbf8dc843906
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und können einige Eingabeargumente verwenden, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Funktionsnamen**, gefolgt von einer linken Klammer `(`. Anschließend kommen die Argumente, und die Funktion endet mit einer abschließenden Klammer `)`.

Funktionen können mehrere Argumente aufnehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und einige [baumstrukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die bedingten at-rules sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert Erscheinungstransformationen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Verschiebt ein Element im dreidimensionalen Raum.

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
  - : Dreht ein Element um eine feste Achse im dreidimensionalen Raum.

### Skalierungsfunktionen

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Skaliert ein Element horizontal herauf oder herunter.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal herauf oder herunter.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse herauf oder herunter.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene herauf oder herunter.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im dreidimensionalen Raum herauf oder herunter.

### Verzerrungsfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Verzieht ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Verzieht ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Verzieht ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Legt den Abstand zwischen dem Benutzer und der z=0-Ebene fest.

## Mathematikfunktionen

Die Mathematikfunktionen ermöglichen es, numerische CSS-Werte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Browser-Kompatibilitätsdaten, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [Verwenden von CSS-Mathematikfunktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundrechenarten

- {{cssxref("calc()")}}
  - : Führt grundlegende arithmetische Berechnungen auf numerischen Werten durch.
- {{cssxref("calc-size()")}}
  - : Führt Berechnungen auf intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{cssxref("min()")}}
  - : Berechnet den kleinsten Wert einer Liste von Werten.
- {{cssxref("max()")}}
  - : Berechnet den größten Wert einer Liste von Werten.
- {{cssxref("clamp()")}}
  - : Berechnet den zentralen Wert zwischen einem Mindest-, Zentrum- und Höchstwert.

### Funktionen für abgestufte Werte

- {{cssxref("round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{cssxref("mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Teiler), wenn eine Zahl durch eine andere geteilt wird.
- {{cssxref("progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten — einem Startwert und einem Endwert. Das Ergebnis repräsentiert den Fortschritt zwischen Start- und Endwert, wobei 0 der Start und 1 das Ende ist.
- {{cssxref("rem()")}}
  - : Berechnet einen Rest (mit dem gleichen Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

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
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen auf einer Ebene.

### Exponentialfunktionen

- {{cssxref("pow()")}}
  - : Berechnet die Basis potenziert mit einer Zahl.
- {{cssxref("sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{cssxref("hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate ihrer Argumente.
- {{cssxref("log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{cssxref("exp()")}}
  - : Berechnet `e` potenziert mit einer Zahl.

### Zeichenbezogene Funktionen

- {{cssxref("abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{cssxref("sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{cssxref("filter-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingangsbildes ändern kann. Es wird in den {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Gaußsche Unschärfe des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder verdunkelt es.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamtfarbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiaton eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) gibt verschiedene Farbdarstellungen an.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Rot-, Grün-, Blau- und Alpha-(Transparenz)-Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Farbton-, Sättigungs-, Helligkeits- und Alpha-(Transparenz)-Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Farbton-, Weiß- und Schwarztöne-Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Helligkeits-, Chroma- und Farbton-Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Helligkeits-, Chroma-, Farbton- und Alpha-(Transparenz)-Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Helligkeits-, a-Achs-Distanz- und b-Achs-Distanz im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine gegebene Farbe entsprechend ihrer Helligkeits-, a-Achs-Distanz-, b-Achs-Distanz im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, angegebenen Farbraum an, anstatt den impliziten sRGB-Farbraum.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum durch einen bestimmten Anteil.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/alpha", "alpha()")}}
  - : Gibt eine Farbe mit einem modifizierten Alpha-(Transparenz)-Kanal zurück.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt eine benutzerdefinierte maximale Luminanzgrenze, die eine Mischung aus verschiedenen {{cssxref("dynamic-range-limit")}} Schlüsselwörtern in angegebenen Prozentsätzen darstellt.

## Bildfunktionen

Der {{cssxref("image")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauffunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern die Farben nach und nach entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern die Farben nach und nach von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern die Farben nach und nach um einen Kreis herum.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnelt `linear-gradient()` und nimmt die gleichen Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnelt `radial-gradient()` und nimmt die gleichen Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnelt `conic-gradient()` und nimmt die gleichen Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{cssxref("image")}} ähnlich wie der {{cssxref("url_value", "&lt;url&gt;")}} Typ, aber mit zusätzlicher Funktionalität, einschließlich der Angabe der Richtungsabhängigkeit des Bildes und Ersatzbilder, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das geeignetste CSS-Bild aus einem gegebenen Set, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{cssxref("cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{cssxref("element()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden generell mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{cssxref("counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, wenn es einen gibt.
- {{cssxref("counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen verketteten String zurück, der die aktuellen Werte der benannten Zähler darstellt, falls welche vorhanden sind.
- {{cssxref("symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundformen

Der {{cssxref("basic-shape")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine grafische Form. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}}-Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingelassene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform mit den Abständen von den oberen und linken Rändern der Referenzbox.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Rändern der Referenzbox sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Weitere Formfunktionen

- {{cssxref("ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann zur Angabe eines {{cssxref("corner-shape-value")}} verwendet werden, der mit {{cssxref("corner-shape")}} und seinen [konstituierenden](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_corner-shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen andernorts definierten Wert zu verweisen:

- {{cssxref("attr()")}}
  - : Verwendet die auf HTML-Elementen definierten Attribute.
- {{cssxref("env()")}}
  - : Verwendet die vom Benutzeragenten definierten Umgebungsvariablen.
- {{cssxref("if()")}}
  - : Setzt bedingt einen Eigenschaftswert abhängig vom Ergebnis einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Medienanfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Funktionsanfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{cssxref("var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Raster](/de/docs/Web/CSS/Guides/Grid_layout) zu definieren:

- {{cssxref("fit-content()")}}
  - : Klemmt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximaler Wert, max(minimaler Wert, Argument))`.
- {{cssxref("minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{cssxref("repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Track-Liste, das eine große Anzahl an Spalten oder Zeilen erlaubt, die ein wiederkehrendes Muster aufweisen.

## Schriftarten-Funktionen

CSS-Schriftarten-Funktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von alternativen Zeichen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichen-Sets. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert bestimmte stilistische Alternativen für Zeichen. Ähnlich wie `styleset()`, erstellt jedoch keine kohärenten Glyphen für ein Set von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwungbuchstaben](https://en.wikipedia.org/wiki/Swash_%28typography%29). Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Anmerkungen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Timingfunktionen

Der {{cssxref("easing-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Eine Timingfunktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Eine Timingfunktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteriert entlang einer spezifischen Anzahl von Stopps entlang des Übergangs und zeigt jeden Stopp für gleich lange Zeit an.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittszeitachse_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichtsfortschrittszeitachse_.

## Anker-Positionierungsfunktionen

Die Anker-Positionierungsfunktionen werden verwendet, um Anker-Positionierungs-Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente zu positionieren und zu dimensionieren.

- {{cssxref("anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-Positionierungs-Elements zurück, die dem zugehörigen Ankerelement entspricht.
- {{cssxref("anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum wie die meisten CSS-Werte:

- {{cssxref("sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister einschließlich des ausgewählten Elements widerspiegelt.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
