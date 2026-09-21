---
title: CSS-Wertfunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: 08a5a4313166a8f36f8c0c1320ac970423239b9a
---

**CSS-Wertfunktionen** sind Anweisungen, die eine spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS)-[Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und können Eingabeargumente annehmen, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer öffnenden Klammer `(`. Darauf folgen die Argumente, und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerraum ist zulässig, innerhalb der Klammern jedoch optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) benötigen Parameterwerte, sind jedoch keine Wertfunktionen. Auch die bedingten at-rules sind keine Wertfunktionen; die Klammern werden zur Gruppierung verwendet.

## Transformationsfunktionen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;transform-function&gt;")}} repräsentiert Transformationen des Erscheinungsbilds. Er wird als Wert der Eigenschaft {{CSSxRef("transform")}} verwendet.

### Verschiebungsfunktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Verschiebt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Verschiebt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Verschiebt ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Verschiebt ein Element in der 2D-Ebene.
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
  - : Dreht ein Element um einen festen Punkt in der 2D-Ebene.
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
  - : Skaliert ein Element in der 2D-Ebene nach oben oder unten.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum nach oben oder unten.

### Scherfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schert ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schert ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schert ein Element in der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als homogene 4×4-Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Legt den Abstand zwischen dem Benutzer und der z=0-Ebene fest.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen das Schreiben numerischer CSS-Werte als mathematische Ausdrücke.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Eine umfassende Einführung in mathematische CSS-Funktionen finden Sie unter [Verwenden mathematischer CSS-Funktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundlegende Arithmetik

- {{cssxref("calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten aus.
- {{cssxref("calc-size()")}}
  - : Führt Berechnungen mit intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` aus, die von der Funktion `calc()` nicht unterstützt werden.

### Vergleichsfunktionen

- {{cssxref("min()")}}
  - : Berechnet den kleinsten Wert einer Werteliste.
- {{cssxref("max()")}}
  - : Berechnet den größten Wert einer Werteliste.
- {{cssxref("clamp()")}}
  - : Berechnet den mittleren von Minimal-, Mittel- und Maximalwert.

### Funktionen für abgestufte Werte

- {{cssxref("round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{cssxref("mod()")}}
  - : Berechnet beim Dividieren einer Zahl durch eine andere einen Modulo mit demselben Vorzeichen wie der Divisor.
- {{cssxref("progress()")}}
  - : Berechnet die Position eines Werts zwischen zwei anderen Werten – einem Startwert und einem Endwert. Das Ergebnis repräsentiert den Fortschritt zwischen Start- und Endwert, wobei 0 der Start und 1 das Ende ist.
- {{cssxref("rem()")}}
  - : Berechnet beim Dividieren einer Zahl durch eine andere einen Rest mit demselben Vorzeichen wie der Dividend.

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
  - : Berechnet den trigonometrischen Arkustangens zweier Zahlen in einer Ebene.

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

### Zufallswertfunktionen

- {{cssxref("random")}}
  - : Erzeugt einen Zufallswert zwischen einem Minimal- und einem Maximalwert.

### Vorzeichenbezogene Funktionen

- {{cssxref("abs()")}}
  - : Berechnet den Absolutwert einer Zahl.
- {{cssxref("sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{cssxref("filter-function")}} repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Gaußsche Unschärfe des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder dunkelt es ab.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Invertiert die Farben eines Bildes.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die gesamte Sättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Anteil eines Bildes.

## Farbfunktionen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("color_value","&lt;color&gt;")}} spezifiziert verschiedene Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine Farbe anhand ihrer Rot-, Grün-, Blau- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine Farbe anhand ihrer Farbton-, Sättigungs-, Helligkeits- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine Farbe anhand ihrer Farbton-, Weiß- und Schwarz-Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeits-, Chroma- und Farbton-Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeits-, Chroma-, Farbton- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, ihres Abstands auf der a-Achse und ihres Abstands auf der b-Achse im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, ihres Abstands auf der a-Achse, ihres Abstands auf der b-Achse im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, explizit angegebenen Farbraum statt des impliziten sRGB-Farbraums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem angegebenen Farbraum um einen angegebenen Anteil.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt für eine angegebene Farbe eine Farbe mit maximalem Farbkontrast zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben geräteabhängig.
- {{CSSXref("color_value/alpha", "alpha()")}}
  - : Gibt eine Farbe mit einem modifizierten Alpha-Kanal (Transparenz) zurück.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt abhängig vom aktuellen Farbschema eine von zwei bereitgestellten Farben zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt eine benutzerdefinierte maximale Leuchtdichtebegrenzung, die eine Mischung verschiedener {{cssxref("dynamic-range-limit")}}-Schlüsselwörter in angegebenen Prozentwerten ist.

## Bildfunktionen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{cssxref("image")}} stellt grafische Darstellungen von Bildern oder Farbverläufen bereit.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Farbverläufe wechseln Farben schrittweise entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Farbverläufe wechseln Farben schrittweise von einem Mittelpunkt (Ursprung) aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Konische Farbverläufe wechseln Farben schrittweise um einen Kreis herum.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnelt `linear-gradient()` und akzeptiert dieselben Argumente, wiederholt die Farbstopps jedoch unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnelt `radial-gradient()` und akzeptiert dieselben Argumente, wiederholt die Farbstopps jedoch unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnelt `conic-gradient()` und akzeptiert dieselben Argumente, wiederholt die Farbstopps jedoch unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{cssxref("image")}} ähnlich wie der Typ {{cssxref("url_value", "&lt;url&gt;")}}, jedoch mit zusätzlichen Funktionen, einschließlich der Angabe der Schreibrichtung des Bildes und von Fallback-Bildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt aus einer gegebenen Menge das passendste CSS-Bild aus, vor allem für Bildschirme mit hoher Pixeldichte.
- {{cssxref("cross-fade()")}}
  - : Überblendet zwei oder mehr Bilder mit einer definierten Transparenz.
- {{cssxref("element()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element erzeugt wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der mit einem PaintWorklet erzeugt wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der Eigenschaft {{CSSxRef("content")}} verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{cssxref("counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{cssxref("counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt eine verkettete Zeichenkette zurück, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{cssxref("symbols()")}}
  - : Definiert die Zählerstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundformen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{cssxref("basic-shape")}} repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine rechteckige Ausschnittsform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform anhand der Abstände von den oberen und linken Kanten des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform anhand der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie der Breite und Höhe des Rechtecks.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadzeichenkette, um das Zeichnen einer Form zu ermöglichen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Andere Formfunktionen

- {{cssxref("ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann zur Angabe eines {{cssxref("corner-shape-value")}} verwendet werden, das mit {{cssxref("corner-shape")}} und dessen [Bestandteil-](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [zugehörigen](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_corner-shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen an anderer Stelle definierten Wert zu verweisen:

- {{cssxref("attr()")}}
  - : Verwendet die auf dem HTML-Element definierten Attribute.
- {{cssxref("env()")}}
  - : Verwendet die vom User-Agent als Umgebungsvariable definierten Werte.
- {{cssxref("if()")}}
  - : Legt einen Eigenschaftswert abhängig vom Ergebnis einer [Style-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) bedingt fest.
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{cssxref("var()")}}
  - : Verwendet den Wert der benutzerdefinierten Eigenschaft anstelle eines beliebigen Teils eines Werts einer anderen Eigenschaft.

## Grid-Funktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout) zu definieren:

- {{cssxref("fit-content()")}}
  - : Beschränkt eine gegebene Größe gemäß der Formel `min(maximum size, max(minimum size, argument))` auf eine verfügbare Größe.
- {{cssxref("minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{cssxref("repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Track-Liste und ermöglicht eine große Anzahl von Spalten oder Zeilen mit einem wiederkehrenden Muster.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der Eigenschaft {{CSSxRef("font-variant-alternates")}} verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, etwa `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Gruppen von Zeichen. Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, etwa `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert bestimmte stilistische Alternativen für Zeichen. Sie ähnelt `styleset()`, erzeugt jedoch keine kohärenten Glyphen für eine Zeichengruppe; einzelne Zeichen erhalten unabhängige und nicht notwendigerweise kohärente Stile. Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, etwa `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung-Glyphen](https://en.wikipedia.org/wiki/Swash_%28typography%29). Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, etwa `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, etwa `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie eingekreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, etwa `nalt 2`.

## Easing-Funktionen

Der CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) {{cssxref("easing-function")}} repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die zwischen ihren Punkten linear interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer angegebenen Anzahl von Stopps während des Übergangs, wobei jeder Stopp für gleich lange Zeit angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener Eigenschaften von {{CSSxRef("animation-timeline")}} verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittszeitachse_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme View-Fortschrittszeitachse_.

## Funktionen zur Ankerpositionierung

Die Funktionen zur Ankerpositionierung werden verwendet, wenn ankerpositionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten des zugehörigen Ankerelements eines ankerpositionierten Elements zurück.
- {{cssxref("anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Funktionen zur Baumzählung

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, anstatt auf dem flachen Baum, wie es die meisten CSS-Werte tun:

- {{cssxref("sibling-index()")}}
  - : Gibt eine ganze Zahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count()")}}
  - : Gibt eine ganze Zahl zurück, die die Gesamtzahl der Geschwister einschließlich des ausgewählten Elements widerspiegelt.

## Alphabetischer Index der Funktionen

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

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
