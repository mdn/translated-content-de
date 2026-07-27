---
title: CSS-Wertfunktionen
short-title: Functions
slug: Web/CSS/Reference/Values/Functions
l10n:
  sourceCommit: d1745aaf15baa2b3d48f67a51eba881a9f4f2c33
---

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen ausführen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/Guides/Values_and_units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und nehmen möglicherweise einige Eingabeargumente an, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsytax beginnt mit dem **Namen der Funktion**, gefolgt von einer öffnenden runden Klammer `(`. Anschließend kommen die Argumente, und die Funktion wird mit einer schließenden runden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommata getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Die bedingten At-Regeln sind ebenfalls keine Wertfunktionen; die Klammern werden zur Gruppierung verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert das Erscheinungsbild der Transformation. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

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
  - : Skaliert ein Element horizontal.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum.

### Schervorgänge (Skew-Funktionen)

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
  - : Beschreibt eine 3D-Transformation als 4×4-homogene Matrix.

### Perspektivische Funktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der Ebene z=0.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-Zahlenwerte als mathematische Ausdrücke zu schreiben.

Jede der folgenden Seiten enthält detaillierte Informationen über die Syntax einer mathematischen Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine ganzheitliche Einführung in CSS-Mathefunktionen siehe [Verwendung von CSS-Mathefunktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Grundlegende Arithmetik

- {{cssxref("calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{cssxref("calc-size()")}}
  - : Führt Berechnungen zu intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{cssxref("min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{cssxref("max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{cssxref("clamp()")}}
  - : Berechnet den mittleren Wert aus einem Minimum, einem Central- und einem Maximumswert.

### Stufengesteuerte Wertfunktionen

- {{cssxref("round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{cssxref("mod()")}}
  - : Berechnet einen Modulus (mit dem gleichen Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{cssxref("progress()")}}
  - : Berechnet die Position eines Wertes zwischen zwei anderen Werten — einem Startwert und einem Endwert. Das Ergebnis wird als Zahl zwischen 0 und 1 ausgedrückt, die den Fortschritt zwischen dem Start- und Endwert darstellt.
- {{cssxref("rem()")}}
  - : Berechnet einen Rest (mit dem gleichen Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

### Trigonometrische Funktionen

- {{cssxref("sin()")}}
  - : Berechnet den trigonometrischen Sinus einer Zahl.
- {{cssxref("cos()")}}
  - : Berechnet den trigonometrischen Cosinus einer Zahl.
- {{cssxref("tan()")}}
  - : Berechnet den trigonometrischen Tangens einer Zahl.
- {{cssxref("asin()")}}
  - : Berechnet den trigonometrischen Arkussinus einer Zahl.
- {{cssxref("acos()")}}
  - : Berechnet den trigonometrischen Arkuskosinus einer Zahl.
- {{cssxref("atan()")}}
  - : Berechnet den trigonometrischen Arkustangens einer Zahl.
- {{cssxref("atan2()")}}
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen in einer Ebene.

### Exponentielle Funktionen

- {{cssxref("pow()")}}
  - : Berechnet die Basis, die auf die Potenz einer Zahl erhoben wird.
- {{cssxref("sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{cssxref("hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{cssxref("log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{cssxref("exp()")}}
  - : Berechnet `e` auf die Potenz einer Zahl erhoben.

### Vorzeichenbezogene Funktionen

- {{cssxref("abs()")}}
  - : Berechnet den Absolutwert einer Zahl.
- {{cssxref("sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{cssxref("filter-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{CSSxRef("filter")}} und {{CSSxRef("backdrop-filter")}} verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht den gaußschen Weichzeichnereffekt eines Bildes.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast eines Bildes.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter einem Bild an.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert ein Bild in Graustufen.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamtfarbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Kehrt die Farben eines Bildes um.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepiaeffekt eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) legt verschiedene Farbdarstellungen fest.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Rot-, Grün-, Blau- und Alpha-(Transparenz)Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine gegebene Farbe anhand ihres Farbtons, ihrer Sättigung, Helligkeit und Alpha-(Transparenz)Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine gegebene Farbe anhand ihres Farbtons, ihrer Weißheit und Schwärze.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, Chroma und Farbtonkomponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, Chroma, Farbton und Alpha-(Transparenz)Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, ihrer a-Achsendistanz und ihrer b-Achsendistanz im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine gegebene Farbe anhand ihrer Helligkeit, ihrer a-Achsendistanz, ihrer b-Achsendistanz im Lab-Farbraum und Alpha-(Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Gibt einen bestimmten, spezifizierten Farbraum anstelle des impliziten sRGB-Farbraums an.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum um einen gegebenen Betrag.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast für eine gegebene Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in einer geräteabhängigen Weise.
- {{CSSXref("color_value/alpha", "alpha()")}}
  - : Gibt eine Farbe mit einem modifizierten Alpha-(Transparenz)Kanal zurück.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine der beiden angegebenen Farben zurück, basierend auf dem aktuellen Farbschema.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Erstellt ein benutzerdefiniertes maximales Leuchtkraftlimit, das eine Mischung verschiedener {{cssxref("dynamic-range-limit")}} Schlüsselwörter in bestimmten Prozentsätzen ist.

## Bildfunktionen

Der {{cssxref("image")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauffunktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern die Farben progressiv entlang einer imaginären Linie.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern die Farben progressiv von einem Mittelpunkt (Ursprung) aus.
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelige Verläufe ändern die Farben progressiv rund um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ist ähnlich wie `linear-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbunterbrechungen unendlich in alle Richtungen, um den gesamten Container zu decken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ist ähnlich wie `radial-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbunterbrechungen unendlich in alle Richtungen, um den gesamten Container zu decken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ist ähnlich wie `conic-gradient()` und nimmt die gleichen Argumente, aber es wiederholt die Farbunterbrechungen unendlich in alle Richtungen, um den gesamten Container zu decken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{cssxref("image")}} auf ähnliche Weise wie der {{cssxref("url_value", "&lt;url&gt;")}}-Typ, jedoch mit zusätzlichen Funktionen wie der Angabe der Bildrichtung und Ersatzbildern, wenn das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Satz, hauptsächlich für Bildschirme mit hoher Pixeldichte.
- {{cssxref("cross-fade()")}}
  - : Mischt zwei oder mehr Bilder mit einer definierten Transparenz.
- {{cssxref("element()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{cssxref("image")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden allgemein mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall dort eingesetzt werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{cssxref("counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des angegebenen Zählers darstellt, wenn einer existiert.
- {{cssxref("counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen zusammengefügten String zurück, der die aktuellen Werte der benannten Zähler darstellt, falls vorhanden.
- {{cssxref("symbols()")}}
  - : Definiert die Zählerstile direkt als Wert einer Eigenschaft inline.

## Formfunktionen

### Grundformen

Der {{cssxref("basic-shape")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine grafische Form. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingesetzte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Rändern des Referenzrahmens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzrahmens und der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert eine SVG-Pfadspezifikation zum Zeichnen einer Form.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen zur Definition der zu zeichnenden Form.

### Andere Formfunktionen

- {{cssxref("ray()")}}
  - : Gültig bei {{cssxref("offset-path")}}; definiert das Liniensegment, dem ein animiertes Element folgen kann.
- {{CSSxRef("superellipse()")}}
  - : Definiert die Krümmung einer Ellipse; kann verwendet werden, um einen {{cssxref("corner-shape-value")}} zu spezifizieren, der mit {{cssxref("corner-shape")}} und seinen [konstituierten](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) und [verwandten](/de/docs/Web/CSS/Reference/Properties/corner-shape#properties_that_follow_corner_shape) Eigenschaften verwendet wird.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen an anderer Stelle definierten Wert zu verweisen:

- {{cssxref("attr()")}}
  - : Verwendet die auf HTML-Elementen definierten Attribute.
- {{cssxref("env()")}}
  - : Verwendet die vom Nutzer-Agenten definierten Umweltvariablen.
- {{cssxref("if()")}}
  - : Setzt einen Eigenschaftswert bedingt abhängig vom Ergebnis einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei aus der angegebenen URL.
- {{cssxref("var()")}}
  - : Verwendet den benutzerdefinierten Attributwert anstelle eines Teils eines Wertes einer anderen Eigenschaft.

## Rasterfunktionen

Die folgenden Funktionen werden zur Definition eines [CSS-Rasters](/de/docs/Web/CSS/Guides/Grid_layout) verwendet:

- {{cssxref("fit-content()")}}
  - : Klemmt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{cssxref("minmax()")}}
  - : Definiert einen Größenbereich größer oder gleich _min_ und kleiner oder gleich _max_.
- {{cssxref("repeat()")}}
  - : Repräsentiert ein wiederholtes Fragment der Track-Liste, das eine große Anzahl von Spalten oder Reihen ermöglicht, die ein sich wiederholendes Muster aufweisen.

## Schriftfunktionen

CSS-Schriftfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung von alternativen Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Zeichensatz; einzelne Zeichen haben unabhängige und nicht notwendigerweise kohärente Stile. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Swash](https://de.wikipedia.org/wiki/Schwung "Beschreibung") Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://de.wikipedia.org/wiki/Fleuron "Beschreibung") und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Anmerkungen wie umrandete Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Nummer zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Easing-Funktionen

Der {{cssxref("easing-function")}} CSS-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézierkurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer bestimmten Anzahl von Haltepunkten entlang des Übergangs, wobei jeder Stopp für gleiche Zeitlängen angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scrollfortschritts-Zeitleiste_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichtsfortschritts-Zeitleiste_.

## Ankerpositionsfunktionen

Die Ankerpositionsfunktionen werden verwendet, um Anker-Positionierte Elemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente zu positionieren und zu dimensionieren.

- {{cssxref("anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-Positionierten Elements zu seinem zugehörigen Ankerelement zurück.
- {{cssxref("anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum, wie es bei den meisten CSS-Werten der Fall ist:

- {{cssxref("sibling-index()")}}
  - : Gibt eine ganze Zahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count()")}}
  - : Gibt eine ganze Zahl zurück, die die Gesamtzahl der Geschwister, einschließlich des ausgewählten Elements, widerspiegelt.

## Alphabetisches Index der Funktionen

- {{cssxref("-moz-image-rect")}} {{non-standard_inline}} {{deprecated_inline}}
- {{cssxref("abs")}}
- {{cssxref("acos")}}
- {{cssxref("alpha")}}
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
- {{cssxref("color_value/contrast-color", "contrast-color()")}}
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
- {{cssxref("progress")}}
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
- {{cssxref("sibling-count")}}
- {{cssxref("sibling-index")}}
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
