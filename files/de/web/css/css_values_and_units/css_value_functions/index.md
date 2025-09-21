---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS)-[Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeargumente zur Berechnung des Rückgabewerts erhalten.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer öffnenden Klammer `(`. Danach folgen die Argumente und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baum-strukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Erscheinungstransformation. Es wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Übersetzungsfunktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Versetzt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Versetzt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Versetzt ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Versetzt ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Versetzt ein Element im 3D-Raum.

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

### Schrägstellungsfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schrägt ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schrägt ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schrägt ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4-homogene Matrix.

### Perspektivische Funktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt die Entfernung zwischen dem Benutzer und der z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der unten aufgeführten Seiten enthält detaillierte Informationen zur Syntax einer mathematischen Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung in CSS-Mathematische Funktionen siehe [Verwendung von CSS-Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen mit intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einem Minimal-, Mittelpunkt- und Maximalwert.

### Abgestufte Wertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet ein Modulus (mit dem gleichen Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit dem gleichen Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

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

### Exponentielle Funktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis potenziert mit einer Zahl.
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
  - : Berechnet den Absolutwert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Bestimmt das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den Gaußschen Weichzeichner eines Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast eines Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schlagschatten hinter einem Bild hinzu.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht die Sepia eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) gibt verschiedene Farbrepräsentationen an.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Rot-, Grün-, Blau- und Alpha- (Transparenz-) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Farbton-, Sättigungs-, Helligkeits- und Alpha- (Transparenz-) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Farbton-, Weißanteils- und Schwarzanteils-Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeits-, Chroma- und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeits-, Chroma-, Farbton- und Alpha- (Transparenz-) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeits-, a-Achsen-Abstand- und b-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeits-, a-Achsen-Abstand-, b-Achsen-Abstand im Lab-Farbraum und Alpha- (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, angegebenen Farbraum an, anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum um einen bestimmten Anteil.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast zu einer angegebenen Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben auf eine gerätespezifische Art und Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe überblenden Farben fortschreitend entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe überblenden Farben fortschreitend von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe überblenden Farben fortschreitend um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnlich wie `linear-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps endlos in alle Richtungen, um seinen gesamten Behälter zu bedecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnlich wie `radial-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps endlos in alle Richtungen, um seinen gesamten Behälter zu bedecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnlich wie `conic-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps endlos in alle Richtungen, um seinen gesamten Behälter zu bedecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie der {{cssxref("url_value", "&lt;url&gt;")}} Typ, jedoch mit zusätzlicher Funktionalität, einschließlich der Angabe der Bildrichtung und Fallback-Bildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für hochauflösende Bildschirme.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Überblendet zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}} Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}} Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden in der Regel mit der {{CSSxRef("content")}} Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers repräsentiert, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen verketteten String zurück, der die aktuellen Werte der benannten Zähler repräsentiert, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert Zählerstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundformen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingezogene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Kanten der Referenzbox.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Kanten der Referenzbox sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadzeichenfolge, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Trennzeichen getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Andere Formfunktionen

- {{CSSxRef("ray", "ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} anzugeben, der mit {{cssxref("corner-shape")}} und seinen [Bestandteilen](/de/docs/Web/CSS/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/corner-shape#properties_that_follow_the_corner_shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen anderenorts definierten Wert zu verweisen:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die Attribute, die auf HTML-Elementen definiert sind.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzeragenten definierten Umgebungsvariablen.
- {{CSSxRef("if", "if()")}}
  - : Setzt bedingt einen Eigenschaftswert abhängig vom Ergebnis einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/CSS_grid_layout) verwendet:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe an eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer als oder gleich _min_ und kleiner als oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Spuraufzählung und erlaubt eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}} Eigenschaft verwendet, um die Verwendung von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Schwungbuchstaben](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Zierschriftzeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Anmerkungen wie eingekreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion. Er wird in den Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer festgelegten Anzahl von Haltestellen während des Übergangs und zeigt jede Haltestelle für die gleiche Zeitdauer an.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}} Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Fortschritts-Timeline mit Bildlauf_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansicht-Fortschritts-Timeline_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, wenn Anker-Positionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge zurück, die sich auf die Position der Ränder des Anker-Positionierten Elements im Verhältnis zu seinem zugehörigen Ankerelement bezieht.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge zurück, die sich auf die Größe des zugehörigen Ankerelements bezieht.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum, wie dies bei den meisten CSS-Werten der Fall ist:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister einschließlich des ausgewählten Elements widerspiegelt.

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
