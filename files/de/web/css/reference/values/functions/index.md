---
title: CSS-Wertfunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen durchführen, um einen [CSS-Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zu liefern. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und können Eingabeparameter annehmen, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` beendet.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber sie sind innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommata getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und mehrere [strukturbezogene Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertfunktionen. Die bedingten @-Regeln sind auch keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Erscheinungstransformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Skaliert ein Element horizontal hoch oder runter.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal hoch oder runter.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse hoch oder runter.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene hoch oder runter.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum hoch oder runter.

### Schiefe-Funktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schiebt ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schiebt ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schiebt ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als eine 4×4 homogene Matrix.

### Perspektivenfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-numerische Werte als mathematische Ausdrücke zu schreiben.

Jede der untenstehenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung in CSS-mathematische Funktionen, siehe [Using CSS math functions](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundlegende Arithmetik

- {{cssxref("calc()")}}
  - : Führt grundlegende arithmetische Berechnungen an numerischen Werten durch.
- {{cssxref("calc-size()")}}
  - : Führt Berechnungen an intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{cssxref("min()")}}
  - : Berechnet den kleinsten Wert einer Liste von Werten.
- {{cssxref("max()")}}
  - : Berechnet den größten Wert einer Liste von Werten.
- {{cssxref("clamp()")}}
  - : Berechnet den zentralen Wert einer minimalen, zentralen und maximalen Werte.

### Funktionen für gestufte Werte

- {{cssxref("round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{cssxref("mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{cssxref("progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten: einem Startwert und einem Endwert. Das Ergebnis wird als Zahl zwischen 0 und 1 ausgedrückt, die den Fortschritt zwischen den Start- und Endwerten repräsentiert.
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
  - : Berechnet den trigonometrischen Arkustangens zweier Zahlen in einer Ebene.

### Exponentialfunktionen

- {{cssxref("pow()")}}
  - : Berechnet die Basis potenziert mit einer Zahl.
- {{cssxref("sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{cssxref("hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{cssxref("log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{cssxref("exp()")}}
  - : Berechnet `e` potenziert mit einer Zahl.

### Vorzeichenbezogene Funktionen

- {{cssxref("abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{cssxref("sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{cssxref("filter-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt einen grafischen Effekt dar, der das Erscheinungsbild eines Eingangsbildes ändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den Gaußschen Weichzeichner des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhöht oder verringert die Helligkeit eines Bildes.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schatten hinter ein Bild.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Sättigung eines Bildes insgesamt.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Ton eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) spezifiziert verschiedene Farbrepräsentationen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren roten, grünen, blauen und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Farbton, Sättigung, Helligkeit und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Farbton, Weißheits- und Schwarzanteil-Komponenten.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Helligkeit, Chroma und Farbton-Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Helligkeit, Chroma, Farbton und alpha (Transparenz) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Helligkeit, a-Achsen-Abstand und b-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine bestimmte Farbe entsprechend ihren Helligkeit, a-Achsen-Abstand, b-Achsen-Abstand im Lab-Farbraum und alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, spezifizierten Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem bestimmten Farbraum in einer bestimmten Menge.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit höchstem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben auf eine geräteabhängige Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erzeugt ein benutzerdefiniertes Maximalluminanz-Limit, das eine Mischung aus verschiedenen {{cssxref("dynamic-range-limit")}} Schlüsselwörtern in spezifizierten Prozentsätzen ist.

## Bildfunktionen

Der {{cssxref("image")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bietet eine grafische Darstellung von Bildern oder Farbverläufen.

### Verlauf-Funktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern Farben schrittweise entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern Farben schrittweise von einem Zentrumspunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern Farben schrittweise um einen Kreis herum.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbwechsel unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbwechsel unendlich in alle Richtungen, um seinen gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt die gleichen Argumente, wiederholt jedoch die Farbwechsel unendlich in alle Richtungen, um seinen gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{cssxref("image")}} auf ähnliche Weise wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, aber mit zusätzlicher Funktionalität, einschließlich der Spezifizierung der Bildrichtung und Fallback-Bilder, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz, primär für Bildschirme mit hoher Pixeldichte.
- {{cssxref("cross-fade()")}}
  - : Blendet zwei oder mehr Bilder bei einer definierten Transparenz.
- {{cssxref("element()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden in der Regel mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall eingesetzt werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{cssxref("counter()")}}
  - : Gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{cssxref("counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt eine verkettete Zeichenkette zurück, die die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{cssxref("symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Formfunktionen

### Grundlegende Formen

Der {{cssxref("basic-shape")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingesetzte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform, indem die Abstände von den oberen und linken Kanten des Referenzrahmens genutzt werden.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform, indem die angegebenen Abstände von den oberen und linken Kanten des Referenzrahmens sowie die Rechteckbreite und -höhe verwendet werden.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadzeichenkette, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Weitere Formfunktionen

- {{cssxref("ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} zu spezifizieren, der mit {{cssxref("corner-shape")}} und dessen [Bestandteilen](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_corner_shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um einen anderenorts definierten Wert zu referenzieren:

- {{cssxref("attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{cssxref("env()")}}
  - : Verwendet die vom Benutzeragenten definierten Umgebungsvariablen.
- {{cssxref("if()")}}
  - : Setzt einen Eigenschaftswert bedingt, abhängig vom Ergebnis einer [Style-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{cssxref("var()")}}
  - : Verwendet den Wert einer benutzerdefinierten Eigenschaft anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/Guides/Grid_layout) verwendet:

- {{cssxref("fit-content()")}}
  - : Begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximum size, max(minimum size, argument))`.
- {{cssxref("minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{cssxref("repeat()")}}
  - : Stellt ein wiederholtes Fragment der Trackliste dar, das eine große Anzahl von Spalten oder Reihen ermöglicht, die ein wiederkehrendes Muster aufweisen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der Eigenschaft {{CSSxRef("font-variant-alternates")}} verwendet, um den Einsatz von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schrifttpezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftenpezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Zeichensatz; einzelne Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftenspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Swash](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schrifttpezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Ornamente wie [Floralelemente](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schrifttpezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Annotationen wie eingekreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schrifttpezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{cssxref("easing-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer bestimmten Anzahl von Stops entlang des Übergangs, wobei jeder Stop für gleiche Zeitdauern angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert für verschiedene {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittstimeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichtsfortschrittstimeline_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden bei der Positionierung und Größenanpassung von ankerpositionierten Elementen relativ zur Lage und Größe ihrer zugehörigen Ankerelemente verwendet.

- {{cssxref("anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines ankerpositionierten Elements des zugehörigen Ankerelements zurück.
- {{cssxref("anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zu den flachen Bäumen, die die meisten CSS-Werte verwenden:

- {{cssxref("sibling-index()")}}
  - : Gibt eine Ganzzahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count()")}}
  - : Gibt eine Ganzzahl zurück, die die Gesamtzahl der Geschwister, einschließlich des ausgewählten Elements, widerspiegelt.

## Alphabetischer Index der Funktionen

- {{cssxref("-moz-image-rect")}} {{non-standard_inline}} {{deprecated_inline}}
- {{cssxref("abs")}}
- {{cssxref("acos")}}
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
- {{cssxref("color_value/contrast-color", "contrast-color()")}} {{experimental_inline}}
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
- {{cssxref("progress")}} {{experimental_inline}}
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
- {{cssxref("sibling-count")}} {{experimental_inline}}
- {{cssxref("sibling-index")}} {{experimental_inline}}
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
