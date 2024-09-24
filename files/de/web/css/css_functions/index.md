---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: 3fc0148fce9cbc63468fec3c8783a9fe76bc1fdb
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Types) und können einige Eingabeargumente benötigen, um den Rückgabewert zu berechnen.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer offenen Klammer `(`. Danach folgen das/die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber sie sind innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommata getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturierte Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert Erscheinungsveränderungen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Skaliert ein Element horizontal.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum.

### Schrägungsfunktionen

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
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivenfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt die Entfernung zwischen dem Benutzer und der z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen erlauben es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der unten stehenden Seiten enthält detaillierte Informationen über die Syntax der mathematischen Funktion, Daten zur Browserkompatibilität, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathematikfunktionen siehe [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundrechenarten

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einem minimalen, zentralen und maximalen Wert.

### Stufenwertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Teiler) bei der Division einer Zahl durch eine andere.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Dividende) bei der Division einer Zahl durch eine andere.

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
  - : Berechnet die Basis hoch die Potenz einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate ihrer Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` hoch die Potenz einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt einen grafischen Effekt dar, der das Aussehen eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Bild-Gauss'sche Unschärfe.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamthue eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Invertiert die Farben eines Bildes.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiaton eines Bildes.

## Farbwertefunktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) spezifiziert verschiedene Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren roten, grünen, blauen und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren Farbton, Sättigung, Helligkeit und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe gemäß ihren Farbton, Weißheit und Schwärze Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma und Farbton Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, Chroma, Farbton und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achsen-Distanz und b-Achsen-Distanz im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe gemäß ihrer Helligkeit, a-Achsen-Distanz, b-Achsen-Distanz im Lab-Farbraum und alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, angegebenen Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum nach einer bestimmten Menge.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}}
  - : Wählt den höchsten Farbkontrast aus einer Liste von Farben im Vergleich zu einem Basisfarbwert.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlaufsfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe verändern Farben fortschreitend entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe verändern Farben fortschreitend von einem Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Konische Verläufe verändern Farben fortschreitend um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnlich wie `linear-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnlich wie `radial-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnlich wie `conic-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildlösungen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlicher Funktionalität, einschließlich der Festlegung der Bildrichtung und von Ersatzbildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz, hauptsächlich für hochauflösende Bildschirme.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Blendet zwei oder mehr Bilder mit einer definierten Transparenz ineinander.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der von einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet erzeugt wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, falls einer vorhanden ist.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt eine zusammengefügte Zeichenfolge zurück, die die aktuellen Werte der benannten Zähler darstellt, falls welche vorhanden sind.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile inline direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingefügte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Rändern des Referenzkastens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Entfernungen von den oberen und linken Rändern des Referenzkastens sowie Breite und Höhe des Rechtecks.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um die Zeichnung einer Form zu ermöglichen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine kommaseparierte Liste von Befehlen, die die zu zeichnende Form definieren.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen an anderer Stelle definierten Wert zu verweisen.

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf dem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die benutzerdefinierte Umgebungsvariable.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle irgendwelcher Teile eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich größer oder gleich _min_ und kleiner oder gleich _max_.
- {{CSSxRef("repeat", "repeat()")}}
  - : Stellt ein wiederholtes Fragment der Trackliste dar und ermöglicht so eine große Anzahl von Spalten oder Reihen, die ein wiederkehrendes Muster aufweisen.

## Schriftfunktion

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von Ersatzzeichen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen werden unabhängige und nicht notwendigerweise kohärente Stile haben. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Zierschrift](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Annotationen wie umrandete Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Übergangsfunktionen

Die folgenden Funktionen werden als Wert in Übergangs- und Animationseigenschaften verwendet.

- {{cssxref("easing-function#linear_easing_function", "linear()")}}
  - : Übergangsfunktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function#cubic_b%C3%A9zier_easing_function", "cubic-bezier()")}}
  - : Übergangsfunktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function#steps_easing_function", "steps()")}}
  - : Iteration entlang einer angegebenen Anzahl von Stopps entlang des Übergangs, wobei jeder Stopp für gleiche Zeitlängen angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener `animation-timeline`-Eigenschaften verwendet. Siehe {{CSSxRef("animation-timeline")}} für weitere Details darüber.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschritts-Timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme View-Fortschritts-Timeline_.

## Anker-Positionierungsfunktionen

Die Anker-Positionierungsfunktionen werden verwendet, wenn Sie Anker-positionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente positionieren und dimensionieren.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Ränder eines Anker-positionierten Elements im Verhältnis zu seinem zugehörigen Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
