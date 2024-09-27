---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: 3fc0148fce9cbc63468fec3c8783a9fe76bc1fdb
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Types) und benötigen möglicherweise einige Eingabeparameter, um den Rückgabewert zu berechnen.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer öffnenden Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber sie sind innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und einige [baum-strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die konditionalen At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert Aussehenstransformationen. Er wird als Wert der Eigenschaft {{CSSxRef("transform")}} verwendet.

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
  - : Skaliert ein Element horizontal.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum.

### Schieffunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schief ein Element in die horizontale Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schief ein Element in die vertikale Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schief ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivenfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der z=0-Ebene fest.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer Mathematikfunktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung in die CSS-Mathematikfunktionen, siehe [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen zu numerischen Werten durch.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert eines Minimal-, Zentral- und Maximalwertes.

### Funktionen für gestufte Werte

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Divisor) beim Teilen einer Zahl durch eine andere.
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
  - : Berechnet den trigonometrischen Arkustangens zweier Zahlen in einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis hoch dem Potenzwert einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet "`e` hoch dem Potenzwert" einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Bildunschärfe.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einem Bild einen Schatten hinzu.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamthue eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiawert eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) spezifiziert verschiedene Farbrepräsentationen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine Farbe entsprechend ihrer Rot-, Grün-, Blau- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine Farbe entsprechend ihrer Farbton-, Sättigungs-, Helligkeits- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine Farbe entsprechend ihrer Farbton-, Weiße- und Schwarzwertkomponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine Farbe entsprechend ihrer Helligkeits-, Chroma- und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine Farbe entsprechend ihrer Helligkeits-, Chroma-, Farbton- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine Farbe entsprechend ihrer Helligkeit, a-Achsen-Entfernung und b-Achsen-Entfernung im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine Farbe entsprechend ihrer Helligkeit, a-Achsen-Entfernung, b-Achsen-Entfernung im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, spezifizierten Farbraum anstelle des impliziten sRGB-Raums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum durch einen bestimmten Betrag.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}}
  - : Wählt den höchsten Farbkontrast aus einer Liste von Farben im Vergleich zu einem Basisfarbwert aus.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) bietet grafische Darstellungen von Bildern oder Verläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern Farben progressiv entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern Farben progressiv von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern Farben progressiv um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnelt `linear-gradient()` und nimmt dieselben Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnelt `radial-gradient()` und nimmt dieselben Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnelt `conic-gradient()` und nimmt dieselben Argumente an, aber wiederholt die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{cssxref("url_value", "&lt;url&gt;")}} Typ, aber mit zusätzlicher Funktionalität, einschließlich der Spezifizierung der Bildrichtung und Ersatzbilder, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einer angegebenen Menge, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}} Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}} Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}} Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen zusammengefügten String zurück, der die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingesetzte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform basierend auf den Abständen von den oberen und linken Kanten des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadzeichenfolge, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um einen anderswo definierten Wert zu referenzieren.

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die Attribute, die auf einem HTML-Element definiert sind.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die durch den Benutzeragenten definierten Umgebungsvariablen.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle irgendeines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS Rasters](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klammern eine gegebene Größe auf eine verfügbare Größe entsprechend der Formel `min(maximalgröße, max(minimalgröße, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurenliste, das eine große Anzahl von Spalten oder Reihen ermöglicht, die ein wiederkehrendes Muster aufweisen.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}} Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Sets von Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Er ist ähnlich wie `styleset()`, aber erstellt keine kohärenten Glyphen für ein Set von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung](<https://de.wikipedia.org/wiki/Schleife_(Typografie)>) Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](<https://de.wikipedia.org/wiki/Fleuron_(Typografie)>) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Anmerkungen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet wird. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Beschleunigungsfunktionen

Die folgenden Funktionen werden als Wert in Übergangs- und Animationseigenschaften verwendet.

- {{cssxref("easing-function#linear_easing_function", "linear()")}}
  - : Beschleunigungsfunktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function#cubic_b%C3%A9zier_easing_function", "cubic-bezier()")}}
  - : Beschleunigungsfunktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function#steps_easing_function", "steps()")}}
  - : Iteration über eine angegebene Anzahl von Stopps entlang des Übergangs, wobei jeder Stopp für gleich lange Zeit angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als ein Wert von verschiedenen `animation-timeline`-Eigenschaften verwendet. Siehe {{CSSxRef("animation-timeline")}} für weitere Details dazu.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scrollfortschrittszeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Fortschrittsbetrachtungszeitleiste_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, wenn Anker-Positionselemente relativ zur Position und Größe ihrer zugeordneten Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Ankerpositionierungselements im Verhältnis zum verbundenen Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des verbundenen Ankerelements zurück.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
