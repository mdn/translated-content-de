---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_values_and_units/CSS_value_functions
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen durchführen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) und können einige Eingabeargumente benötigen, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` beendet.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen Funktionsnotationen sind mehrere Argumente durch Kommas getrennt, bei anderen werden Leerzeichen verwendet.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die konditionalen At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert Erscheinungstransformationen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Skalierung eines Elements horizontal nach oben oder unten.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skalierung eines Elements vertikal nach oben oder unten.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skalierung eines Elements entlang der z-Achse nach oben oder unten.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skalierung eines Elements auf der 2D-Ebene nach oben oder unten.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skalierung eines Elements im 3D-Raum nach oben oder unten.

### Scherfunktionen

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

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt die Entfernung zwischen dem Benutzer und der z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-Numerischen Werte in Form von mathematischen Ausdrücken zu schreiben.

Jede der untenstehenden Seiten enthält detaillierte Informationen zur Syntax einer mathematischen Funktion, zu Browser-Kompatibilitätsdaten, Beispielen und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [Verwenden von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen an numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen auf intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einem Minimum, Zentralwert und Maximum.

### Stufenwertfunktion

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor) bei der Division einer Zahl durch eine andere.
- {{CSSxRef("progress", "progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten - einem Anfangs- und einem Endwert. Das Ergebnis wird als Zahl zwischen 0 und 1 ausgedrückt, die den Fortschritt zwischen den Start- und Endwerten darstellt.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit dem gleichen Vorzeichen wie der Divisor) bei der Division einer Zahl durch eine andere.

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

### Exponentialfunktion

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis, potenziert mit einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` potenziert mit einer Zahl.

### Zeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den gaußschen Weichzeichner des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder dunkelt es ab.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schlagschatten hinter einem Bild hinzu.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamtfarbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Verleiht einem Bild Transparenz.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Anteil eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) legt verschiedene Farbrepräsentationen fest.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine gegebene Farbe anhand ihrer roten, grünen, blauen und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine gegebene Farbe anhand ihres Farbtons, ihrer Sättigung, Helligkeit und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine gegebene Farbe anhand ihres Farbtons, der Weißheit und Schwarzheit.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, Chroma und Farbton.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, Chroma, Farbton und Alpha-(Transparenz-)Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, A-Achsen-Abstand und B-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, A-Achsen-Abstand, B-Achsen-Abstand im Lab-Farbraum und Alpha-(Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, spezifizierten Farbraum anstatt des impliziten sRGB-Farbraums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbewerte in einem bestimmten Farbraum in einem bestimmten Verhältnis.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in geräteabhängiger Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbdesign zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt ein benutzerdefiniertes maximales Leuchtdichte-Limit, das eine Mischung aus verschiedenen {{cssxref("dynamic-range-limit")}} Schlüsselwörtern in den angegebenen Prozenten ist.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bietet grafische Darstellungen von Bildern oder Farbverläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe überblenden Farben progressiv entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe überblenden Farben progressiv von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Konische Verläufe überblenden Farben progressiv um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und akzeptiert die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und akzeptiert die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und akzeptiert die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, aber mit zusätzlichen Funktionen wie der Spezifikation der Bildausrichtung und Fallback-Bildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Blendet zwei oder mehr Bilder mit einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der von einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall eingesetzt werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, sofern einer vorhanden ist.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt eine zusammengefügte Zeichenkette zurück, die die aktuellen Werte der benannten Zähler darstellt, sofern vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundformen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) stellt eine grafische Form dar. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}}-Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingelassene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Kanten des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadzeichenkette, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die definieren, welche Form gezeichnet werden soll.

### Andere Formfunktionen

- {{CSSxRef("ray", "ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} anzugeben, der mit {{cssxref("corner-shape")}} und seinen [konstituierenden](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_the_corner_shape) Eigenschaften genutzt wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um einen an anderer Stelle definierten Wert zu referenzieren:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzer-Agent definierten Umgebungsvariablen.
- {{CSSxRef("if", "if()")}}
  - : Setzt bedingt einen Eigenschaftswert in Abhängigkeit vom Ergebnis einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei aus der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den Wert einer benutzerdefinierten Eigenschaft anstelle eines anderen Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/CSS_grid_layout) verwendet:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Begrenzung einer gegebenen Größe auf eine verfügbare Größe nach der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Spur Liste, welches ermöglicht, dass eine große Anzahl von Spalten oder Reihen ein sich wiederholendes Muster zeigt.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; individuelle Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Swash](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Anmerkungen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der zu einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Übergangsfunktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine mathematische Funktion. Es wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Übergangsfunktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Übergangsfunktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer bestimmten Anzahl von Stopps entlang des Übergangs, wobei jeder Stopp für gleiche Zeitdauern angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittszeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Sicht-Fortschrittszeitleiste_.

## Verankerungspositionierungsfunktionen

Die Verankerungspositionierungsfunktionen werden verwendet, um verankerungspositionierte Elemente relativ zur Lage und Größe ihrer zugehörigen Ankerelemente zu positionieren und zu dimensionieren.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten des verankerungspositionierten Elements zurück, die mit dem verbundenen Ankerelement verbunden sind.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des verbundenen Ankerelements zurück.

## Baumzählefunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zu den meisten CSS-Werten, die auf dem flachen Baum basieren:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister einschließlich des ausgewählten Elements widerspiegelt.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
