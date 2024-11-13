---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: 695fd71c2c147dc2df123be0bfcf20bb687d76ba
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Types) und können einige Eingabeargumente verwenden, um den Rückgabewert zu berechnen.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argumente, und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente haben, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionellen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Auch die Bedingungsregeln mit `@` sind keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert Transformationen des Erscheinungsbilds. Er wird als ein Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Schrägstellt ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schrägstellt ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schrägstellt ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Nutzer und der z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der unten stehenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Browser-Kompatibilitätsdaten, Beispiele und mehr. Für eine umfassende Einführung in CSS-Mathematikfunktionen siehe [Using CSS math functions](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundrechenarten

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einem Minimum, einem zentralen und einem Maximum.

### Stufenwertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
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
  - : Berechnet `e` erhöht auf die Potenz einer Zahl.

### Vorzeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt einen grafischen Effekt dar, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Bildgaussianische Unschärfe.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Hellt ein Bild auf oder dunkelt es ab.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schlagschatten hinter ein Bild.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Wandelt ein Bild in Graustufen um.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Ton eines Bildes.

## Farbfunktions

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) spezifiziert unterschiedliche Farbdarstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer roten, grünen, blauen und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe anhand ihres Farbtons, ihrer Sättigung, Helligkeit und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe anhand ihres Farbtons, Weiß- und Schwarzanteils.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, Chroma und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, Chroma, Farbton und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, a-Achsenabstand und b-Achsenabstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe anhand ihrer Helligkeit, a-Achsenabstand, b-Achsenabstand im Lab-Farbraum und alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, angegebenen Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum in einem bestimmten Verhältnis.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}}
  - : Wählt den höchsten Farbkontrast aus einer Liste von Farben in Bezug auf einen Basisfarbwert.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) liefert eine grafische Darstellung von Bildern oder Verläufen.

### Verlauffunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe übertragen Farben schrittweise entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe übertragen Farben schrittweise von einem Mittelpunkt aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Konische Verläufe übertragen Farben schrittweise um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container zu bedecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} in ähnlicher Weise wie der {{cssxref("url_value", "&lt;url&gt;")}} Typ, jedoch mit zusätzlichen Funktionalitäten einschließlich der Angabe der Bildausrichtung und Ersatzbildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das geeignetste CSS-Bild aus einem gegebenen Satz aus, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden im Allgemeinen mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers repräsentiert, falls es einen gibt.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen zusammengefügten String zurück, der die aktuellen Werte der benannten Zähler, falls vorhanden, repräsentiert.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile inline, direkt als Wert einer Eigenschaft.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine grafische Form. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}}-Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine rechteckige Form als Einsatz.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine rechteckige Form unter Verwendung der Abstände von den oberen und linken Rändern der Referenzbox.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine rechteckige Form unter Verwendung der angegebenen Abstände von den oberen und linken Rändern der Referenzbox und der Breite und Höhe des Rechtecks.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine kommagetrennte Liste von Befehlen, die die zu zeichnende Form definieren.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen anderswo definierten Wert zu verweisen.

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die Attribute, die an das HTML-Element definiert sind.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Nutzeragenten als Umgebungsvariable definierte.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den Wert der benutzerdefinierten Eigenschaft anstelle eines Teils des Wertes einer anderen Eigenschaft.

## Grid-Funktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Gitter](/de/docs/Web/CSS/CSS_grid_layout) zu definieren.

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine gegebene Größe an eine verfügbare Größe nach der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Repräsentiert einen wiederholten Ausschnitt der Spurleiste und erlaubt eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}} Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie z. B. `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt aber keine zusammenhängenden Glyphen für einen Satz von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt zusammenhängende Stile. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie z. B. `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Verzierungsglyphen](https://en.wikipedia.org/wiki/Swash_%28typography%29). Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie z. B. `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie z. B. `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Anmerkungen wie zirkulierte Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie z. B. `nalt 2`.

## Easing-Funktionen

Die folgenden Funktionen werden als Wert in Übergangs- und Animations-Eigenschaften verwendet.

- {{cssxref("easing-function#linear_easing_function", "linear()")}}
  - : Easing Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function#cubic_bezier_easing_function", "cubic-bezier()")}}
  - : Easing Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function#steps_easing_function", "steps()")}}
  - : Iteration entlang einer angegebenen Anzahl von Haltepunkten entlang des Übergangs, wobei jeder Haltepunkt für gleiche Zeitdauern angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener `animation-timeline` Eigenschaften verwendet. Siehe {{CSSxRef("animation-timeline")}} für mehr Details darüber.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschritts-Timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansicht-Fortschritts-Timeline_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, wenn Anker-Positionselemente relativ zu der Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-Positionselements in Bezug auf sein zugehöriges Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Siehe auch

- [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
