---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeargumente zur Berechnung des Rückgabewertes verwenden.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen das Argument bzw. die Argumente, und die Funktion endet mit einer schließenden Klammer `)`.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert werden. Leerzeichen sind erlaubt, jedoch innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Die Bedingungs-At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden zur Gruppierung verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert das Erscheinen einer Transformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Übersetzungsfunktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Verschiebt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Verschiebt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Verschiebt ein Element entlang der Z-Achse.
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
  - : Dreht ein Element um die Z-Achse.
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
  - : Skaliert ein Element entlang der Z-Achse nach oben oder unten.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene nach oben oder unten.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum nach oben oder unten.

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
  - : Setzt die Distanz zwischen dem Benutzer und der z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer Mathematikfunktion, deren Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [Using CSS math functions](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions).

### Basisarithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit Zahlenwerten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen mit intrinsischen Größenwerten durch, wie `auto`, `fit-content` und `max-content`, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den Mittelwert aus einem minimalen, zentralen und maximalen Wert.

### Schrittwertfunktionen

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
  - : Berechnet den trigonometrischen Tangent einer Zahl.
- {{CSSxRef("asin", "asin()")}}
  - : Berechnet den trigonometrischen Inverssinus einer Zahl.
- {{CSSxRef("acos", "acos()")}}
  - : Berechnet den trigonometrischen Inverskosinus einer Zahl.
- {{CSSxRef("atan", "atan()")}}
  - : Berechnet den trigonometrischen Invers-Tangens einer Zahl.
- {{CSSxRef("atan2", "atan2()")}}
  - : Berechnet den trigonometrischen Invers-Tangens von zwei Zahlen in einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Potenz zur Basis mit einer Zahl als Exponent.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` hoch der Potenz einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Bestimmt das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den gaußschen Weichzeichner des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder verdunkelt es.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Setzt einen Schlagschatten hinter ein Bild.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Wandelt ein Bild in Graustufen um.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamthue eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamt-Sättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiaton eines Bildes.

## Farbfunktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) spezifiziert verschiedene Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Rot-, Grün-, Blau- und Alpha- (Transparenz) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Farbton-, Sättigungs-, Helligkeits- und Alpha- (Transparenz) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Farbton-, Weißheits- und Schwärzheitskomponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, Chroma- und Farbkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, Chroma-, Farb- und Alpha- (Transparenz) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, A-Achsen-Distanz und B-Achsen-Distanz im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihrer Helligkeit, A-Achsen-Distanz, B-Achsen-Distanz im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, angegebenen Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum nach einer bestimmten Menge.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast zu einer bestimmten Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben auf geräteabhängige Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbmodus zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauf Funktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern die Farben schrittweise entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern die Farben progressiv aus einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern die Farben schrittweise um einen Kreis herum.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt dieselben Argumente, jedoch wiederholt es die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt dieselben Argumente, jedoch wiederholt es die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt dieselben Argumente, jedoch wiederholt es die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie der {{cssxref("url_value", "&lt;url&gt;")}} Typ, jedoch mit zusätzlichen Funktionalitäten einschließlich der Angabe der Richtung eines Bildes und Fallback-Bildern, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das passendste CSS-Bild aus einem gegebenen Set, hauptsächlich für hochauflösende Bildschirme.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei definierter Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen zusammen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler, die eine zusammengefügte Zeichenkette zurückgeben, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine grafische Form. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, und {{CSSxRef("shape-outside")}} Eigenschaften verwendet.

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
  - : Akzeptiert einen SVG-Pfadstring, um das Zeichnen einer Form zu ermöglichen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine kommagetrennte Liste von Befehlen, die die zu zeichnende Form definieren.
- {{CSSxRef("ray", "ray()")}}
  - : Nur gültig mit `offset-path`, es definiert das Liniensegment, dem ein animiertes Element folgen kann.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen anderswo definierten Wert zu verweisen:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzeragenten definierten Umgebungsvariablen.
- {{CSSxRef("if", "if()")}}
  - : Setzt den Wert einer Eigenschaft bedingt abhängig vom Ergebnis einer [Style Query](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), oder [Feature Query](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Gitter](/de/docs/Web/CSS/CSS_grid_layout) zu definieren:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe an eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer als oder gleich _min_ und kleiner als oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurenliste, das eine große Anzahl von Spalten oder Reihen zulässt, die ein wiederkehrendes Muster aufweisen.

## Schriftzeichenfunktionen

CSS-Schriftzeichenfunktionen werden zusammen mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erstellt jedoch keine zusammenhängenden Glyphen für eine Gruppe von Zeichen; einzelne Zeichen haben unabhängige und nicht notwendigerweise zusammenhängende Stile. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Abklingfunktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animations-Eigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Abklingfunktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Abklingfunktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer bestimmten Anzahl von Stopps entlang des Übergangs, wobei jeder Stopp für gleiche Zeitlängen angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Prozess-Timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansicht-Prozess-Timeline_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, wenn das Positionieren und Größenanpassen von ankerpositionierten Elementen relativ zur Position und Größe ihrer zugehörigen Ankerelemente erfolgt.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines ankerpositionierten Elements relativ zu seinem zugehörigen Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum, wie die meisten CSS-Werte es tun:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt eine ganze Zahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern darstellt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt eine ganze Zahl zurück, die die Gesamtzahl der Geschwister einschließlich des ausgewählten Elements darstellt.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
