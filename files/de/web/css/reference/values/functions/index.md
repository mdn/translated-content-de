---
title: CSS-Wertefunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Wertefunktionen** sind Anweisungen, die spezielle Datenverarbeitungs- oder Berechnungsmechanismen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertefunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und können einige Eingabeargumente zur Berechnung des Rückgabewertes annehmen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertesyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen das/die Argument(e), und die Funktion endet mit einer schließenden Klammer `)`.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber sie sind innerhalb der Klammern optional. In einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertefunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind aber keine Wertefunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertefunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Erscheinungstransformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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

### Schiefenfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schiefert ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schiefert ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schiefert ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivenfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der nachfolgenden Seiten enthält detaillierte Informationen über die Syntax einer Mathematikfunktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine ganzheitliche Einführung in die CSS-Mathematikfunktionen siehe [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundlegende Arithmetik

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führen Sie Berechnungen mit intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den mittleren Wert eines Minimums, eines mittleren und eines Maximums.

### Gestufte Wertefunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{CSSxRef("progress", "progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten — einem Startwert und einem Endwert. Das Ergebnis wird als Zahl zwischen 0 und 1 ausgedrückt, die den Fortschritt zwischen Start- und Endwert darstellt.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Restwert (mit demselben Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

### Trigonometrische Funktionen

- {{CSSxRef("sin", "sin()")}}
  - : Berechnet den trigonometrischen Sinus einer Zahl.
- {{CSSxRef("cos", "cos()")}}
  - : Berechnet den trigonometrischen Kosinus einer Zahl.
- {{CSSxRef("tan", "tan()")}}
  - : Berechnet den trigonometrischen Tangens einer Zahl.
- {{CSSxRef("asin", "asin()")}}
  - : Berechnet den trigonometrischen inversen Sinus einer Zahl.
- {{CSSxRef("acos", "acos()")}}
  - : Berechnet den trigonometrischen inversen Kosinus einer Zahl.
- {{CSSxRef("atan", "atan()")}}
  - : Berechnet den trigonometrischen inversen Tangens einer Zahl.
- {{CSSxRef("atan2", "atan2()")}}
  - : Berechnet den trigonometrischen inversen Tangens von zwei Zahlen auf einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis, die auf die Potenz einer Zahl erhöht wird.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e`, erhöht auf die Potenz einer Zahl.

### Funktionen im Zusammenhang mit dem Vorzeichen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den absoluten Wert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt einen grafischen Effekt dar, der das Erscheinungsbild eines Eingabebilds verändern kann. Er wird in den {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Weichzeichnung des Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Aufhellen oder Abdunkeln eines Bildes.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt hinter einem Bild einen Schatten hinzu.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamttönung eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Effekt eines Bildes.

## Farbige Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) spezifiziert verschiedene Farbrepräsentationen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine gegebene Farbe gemäß ihren Rot-, Grün-, Blau- und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine gegebene Farbe gemäß ihrem Farbton, Sättigung, Helligkeit und Alpha (Transparenz).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine gegebene Farbe gemäß ihrem Farbton, Weißanteil und Schwarzwert.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine gegebene Farbe gemäß ihrer Helligkeit, Chroma und Farbton-Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine gegebene Farbe gemäß ihrer Helligkeit, Chroma, Farbton und Alpha-Komponenten (Transparenz).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine gegebene Farbe gemäß ihrer Helligkeit, a-Achsen-Abstand und b-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine gegebene Farbe gemäß ihrer Helligkeit, a-Achsen-Abstand, b-Achsen-Abstand im Lab-Farbraum und Alpha (Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, angegebenen Farbraum an, anstatt des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum in einem bestimmten Verhältnis.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben geräteabhängig.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei bereitgestellten Farben basierend auf dem aktuellen Farbschema zurück.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt ein benutzerdefiniertes Maximum für die Leuchtkraft, das eine Mischung verschiedener {{cssxref("dynamic-range-limit")}} Schlüsselwörter in angegebenen Prozentsätzen ist.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bietet eine grafische Darstellung von Bildern oder Farbverläufen.

### Gradientenfunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Gradienten färben die Übergänge entlang einer gedachten Linie stufenweise.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Gradienten färben die Übergänge stufenweise vom Mittelpunkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Gradienten färben die Übergänge stufenweise um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnlich wie `linear-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unbegrenzt in alle Richtungen, um das gesamte Behältnis zu füllen.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnlich wie `radial-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unbegrenzt in alle Richtungen, um das gesamte Behältnis zu füllen.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnlich wie `conic-gradient()` und nimmt dieselben Argumente, aber es wiederholt die Farbstopps unbegrenzt in alle Richtungen, um das gesamte Behältnis zu füllen.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlichen Funktionen wie der Festlegung der Bildrichtung und Ersatzbilder, falls das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das geeignetste CSS-Bild aus einer gegebenen Menge, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder mit einer festgelegten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden allgemein mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall verwendet werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler, indem ein verbundener String zurückgegeben wird, der die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft.

## Formenfunktionen

### Grundformen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt eine grafische Form dar. Er wird in den {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, und {{CSSxRef("shape-outside")}} Eigenschaften verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingezogene Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Rändern des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzrahmens sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfad-Zeichenfolge, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen, die die zu zeichnende Form definieren.

### Andere Formenfunktionen

- {{CSSxRef("ray", "ray()")}}
  - : Gültig mit {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} zu spezifizieren, der zusammen mit {{cssxref("corner-shape")}} und seinen [Bestandteil-](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [zugehörigen](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_the_corner_shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Werte von Eigenschaften verwendet, um einen an anderer Stelle definierten Wert zu referenzieren:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf dem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom User-Agent definierten Umgebungsvariablen.
- {{CSSxRef("if", "if()")}}
  - : Setzt bedingt einen Eigenschaftswert, abhängig vom Ergebnis einer [Stilabfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using), oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den Wert der benutzerdefinierten Eigenschaft anstelle eines Teils eines Werts einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Raster](/de/docs/Web/CSS/Guides/Grid_layout) zu definieren:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Klemmt eine angegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Stellt ein wiederholtes Fragment der Spur-Liste dar und ermöglicht eine große Anzahl von Spalten oder Reihen, die ein sich wiederholendes Muster aufweisen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Ermöglicht stilistische Alternativen für einzelne Zeichen. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `salt`, z. B. `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Ermöglicht stilistische Alternativen für Zeichensätze. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `ssXY`, z. B. `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Ermöglicht spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphe für einen Zeichensatz; einzelne Zeichen haben unabhängige und nicht notwendigerweise kohärente Stile. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `cvXY`, z. B. `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Ermöglicht [Schwungbuchstaben](https://en.wikipedia.org/wiki/Swash_%28typography%29) als Zeichen. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Ermöglicht Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Zierzeichen. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Ermöglicht Anmerkungen wie umkreiste Ziffern oder invertierte Zeichen. Das Parameter ist ein schriftartenspezifischer Name, der einer Nummer zugeordnet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Geschwindigkeitsanpassungsfunktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Eine Geschwindigkeitsanpassungsfunktion, die linear zwischen den Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Eine Geschwindigkeitsanpassungsfunktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration an einer angegebenen Anzahl von Haltestellen entlang des Übergangs, wobei jede Haltestelle für gleiche Zeitabschnitte angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Werte unterschiedlicher {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittszeitachse_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansicht-Fortschrittszeitachse_.

## Ankerpositionierungsfunktionen

Die Ankerpositionierungsfunktionen werden verwendet, um Anker-positionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente zu positionieren und zu dimensionieren.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-positionierten Elements zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählerfunktionen

Die folgenden Funktionen geben einen Integer-Wert basierend auf dem DOM-Baum zurück, nicht wie die meisten CSS-Werte auf einem flachen Baum:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt einen Integer-Wert zurück, der die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt einen Integer-Wert zurück, der die Gesamtanzahl der Geschwister, einschließlich des ausgewählten Elements, widerspiegelt.

## Alphabetischer Index von Funktionen

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
- {{cssxref("fit-content_function", "fit-content()")}}
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
- {{cssxref("transform-function/rotatex", "rotatex()")}}
- {{cssxref("transform-function/rotatey", "rotatey()")}}
- {{cssxref("transform-function/rotatez", "rotatez()")}}
- {{cssxref("round")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scalex", "scalex()")}}
- {{cssxref("transform-function/scaley", "scaley()")}}
- {{cssxref("transform-function/scalez", "scalez()")}}
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
- {{cssxref("transform-function/translatex", "translatex()")}}
- {{cssxref("transform-function/translatey", "translatey()")}}
- {{cssxref("transform-function/translatez", "translatez()")}}
- {{cssxref("type")}} {{experimental_inline}}
- {{cssxref("url_function")}}
- {{cssxref("var")}}
- {{cssxref("animation-timeline/view", "view()")}}
- {{cssxref("basic-shape/xywh", "xywh()")}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
