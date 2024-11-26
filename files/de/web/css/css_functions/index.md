---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: 31e158bf22cece84ba7de3de3551f2807fe587d0
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen ausführen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen stehen für komplexere [Datentypen](/de/docs/Web/CSS/CSS_Types) und können einige Eingabeargumente verwenden, um den Rückgabewert zu berechnen.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente haben, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Die konditionalen At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt Erscheinungstransformationen dar. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Vergrößert oder verkleinert ein Element horizontal.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Vergrößert oder verkleinert ein Element vertikal.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Vergrößert oder verkleinert ein Element entlang der Z-Achse.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Vergrößert oder verkleinert ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Vergrößert oder verkleinert ein Element im 3D-Raum.

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
  - : Beschreibt eine 3D-Transformation als 4x4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der Z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS-numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen zum Syntax einer Mathematikfunktion, Browser-Kompatibilitätsdaten, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus minimalem, zentralem und maximalem Wert.

### Funktionen für gestufte Werte

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Restbetrag (mit dem gleichen Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

### Trigonometrische Funktionen

- {{CSSxRef("sin", "sin()")}}
  - : Berechnet den trigonometrischen Sinus einer Zahl.
- {{CSSxRef("cos", "cos()")}}
  - : Berechnet den trigonometrischen Cosinus einer Zahl.
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
  - : Berechnet die Basis, erhöht um die Potenz einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` erhöht um die Potenz einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt einen grafischen Effekt dar, der das Aussehen eines Eingabebildes verändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Gaußsche Unschärfe des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Wandelt ein Bild in Graustufen um.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamt-Sättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht die Sepia-Tönung eines Bildes.

## Farbwertfunktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) spezifiziert verschiedene Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren rot-, grün-, blau- und alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren Farbton-, Sättigungs-, Helligkeits- und alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrem Farbton-, Weißanteil und Schwarzanteil.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma und Farbton.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma, Farbton und alpha-Komponente (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achsen-Abstand und b-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achsen-Abstand, b-Achsen-Abstand im Lab-Farbraum und alpha-Komponente (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, angegebenen Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum mit einer bestimmten Menge.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine der beiden bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern die Farben allmählich entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern die Farben allmählich von einem Mittelpunkt (Ursprung) aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelverläufe ändern die Farben allmählich um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt die gleichen Argumente an, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt die gleichen Argumente an, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt die gleichen Argumente an, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlicher Funktionalität, einschließlich Angabe der Richtungsabhängigkeit des Bildes und Fallback-Bilder für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das geeignetste CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Vermischt zwei oder mehr Bilder mit einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden normalerweise mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler, wobei eine verkettete Zeichenkette zurückgegeben wird, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Shapefunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt eine grafische Form dar. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, und {{CSSxRef("shape-outside")}} Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingezogene rechteckige Form.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine rechteckige Form unter Verwendung der Abstände von den oberen und linken Kanten des Bezugsrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine rechteckige Form unter Verwendung der angegebenen Abstände von den oberen und linken Kanten des Bezugsrahmens sowie der Breite und Höhe des Rechtecks.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadspezifikation, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen zur Definition der zu zeichnenden Form.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen anderswo definierten Wert zu verweisen:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf dem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzeragenten definiert als Umgebungsvariable.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Werts einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/CSS_grid_layout) verwendet:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer als oder gleich _min_ und kleiner als oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Stellt ein wiederholtes Fragment der Spurauflistung dar, das eine große Anzahl von Spalten oder Zeilen ermöglicht, die ein wiederkehrendes Muster aufweisen.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Swash](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Verzierungen wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Annotationen wie umkreiste Ziffern oder umgekehrte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Timing-Funktionen

Die folgenden Funktionen werden als Wert in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Timing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Timing-Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration über eine angegebene Anzahl von Haltepunkten entlang des Übergangs, wobei jeder Haltepunkt für gleiche Zeitintervalle angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert von unterschiedlichen {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschritts-Timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichts-Fortschritts-Timeline_.

## Anker-Positionierungsfunktionen

Die Anker-Positionierungsfunktionen werden zum Positionieren und Größenanpassen von anker-positionierten Elementen relativ zu Position und Größe ihrer zugehörigen Ankerelemente verwendet.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines anker-positionierten Elements des zugehörigen Ankerelements zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
