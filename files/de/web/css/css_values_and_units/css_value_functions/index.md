---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
l10n:
  sourceCommit: d248d3fea7878283144f630070dc821d58c87744
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS)-[Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeargumente verwenden, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argumente und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transform-Funktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Erscheinungstransformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Translate-Funktionen

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

### Schrägfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schrägt ein Element in horizontaler Richtung ab.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schrägt ein Element in vertikaler Richtung ab.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schrägt ein Element auf der 2D-Ebene ab.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen ermöglichen es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der unten aufgeführten Seiten enthält ausführliche Informationen über die Syntax einer Mathematikfunktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung zu CSS-Mathematikfunktionen sehen Sie [Using CSS math functions](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions).

### Grundrechenarten

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen mit intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einem Minimum-, Zentral- und Maximumwert.

### Stufenwertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
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
  - : Berechnet den trigonometrischen Arkustangens zweier Zahlen in einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis, die auf die Potenz einer Zahl erhoben wird.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e`, das auf die Potenz einer Zahl erhoben wird.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingangsbildes verändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den Gaußschen Weichzeichner des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder verdunkelt es.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die gesamte Sättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Ton eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) legt verschiedene Farbdarstellungen fest.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Rot-, Grün-, Blau- und Alphakomponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Farbton-, Sättigungs-, Helligkeits- und Alphakomponenten (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Farbton-, Weißheits- und Schwarztöne-Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeits-, Chroma- und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeits-, Chroma-, Farbton- und Alphakomponenten (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, A-Achsen– und B-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, A-Achsen-Abstand, B-Achsen-Abstand im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen spezifischen, festgelegten Farbraum anstelle des impliziten sRGB-Farbraums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum durch einen bestimmten Betrag.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast zu einer gegebenen Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei gegebenen Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauffunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern die Farben allmählich entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern die Farben allmählich von einem Mittelpunkt aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelige Verläufe ändern die Farben allmählich um einen Kreis herum.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnelt `linear-gradient()` und nimmt die gleichen Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu füllen.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnelt `radial-gradient()` und nimmt die gleichen Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu füllen.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnelt `conic-gradient()` und nimmt die gleichen Argumente, wiederholt aber die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu füllen.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlicher Funktionalität, einschließlich der Spezifizierung der Bildrichtung und Fallback-Bildern, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden in der Regel mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen verknüpften String zurück, der die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählstile direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine grafische Form. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, und {{CSSxRef("shape-outside")}}-Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingekerbte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform durch die Abstände von den oberen und linken Rändern des Bezugskastens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Bezugskastens sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine kommaseparierte Liste von Befehlen, die die zu zeichnende Form definieren.
- {{CSSxRef("ray", "ray()")}}
  - : Gültig nur bei `offset-path`, definiert das Liniensegment, dem ein animiertes Element folgen kann.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um einen an anderer Stelle definierten Wert zu referenzieren:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die benutzerdefinierte Umweltvariable des Benutzers.
- {{CSSxRef("if", "if()")}}
  - : Setzt bedingt einen Eigenschaftswert abhängig vom Ergebnis einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/CSS_grid_layout) verwendet:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Begrenzung einer gegebenen Größe auf eine verfügbare Größe gemäß der Formel `min(maximum size, max(minimum size, argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Stellt ein wiederkehrendes Fragment der Trackliste dar, das es ermöglicht, eine große Anzahl von Spalten oder Zeilen mit wiederkehrendem Muster darzustellen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensets. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für ein Set von Zeichen; einzelne Zeichen haben unabhängige und nicht notwendigerweise kohärente Stile. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie umkreiste Ziffern oder umgedrehte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteriert über eine bestimmte Anzahl von Haltestellen entlang der Übergangs, wobei jede Haltestelle für gleich lange Zeit angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschritts-Timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Anzeige-Fortschritts-Timeline_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, wenn Anker-positionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-positionierten Elements und seines zugehörigen Ankerelements zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
