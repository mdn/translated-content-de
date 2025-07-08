---
title: CSS-Wertefunktionen
slug: Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
l10n:
  sourceCommit: 464b47905d85e9bc9ce2387d3c20b36f2283af5f
---

{{CSSRef}}

**CSS-Wertefunktionen** sind Anweisungen, die spezielle Datenverarbeitungen oder Berechnungen aufrufen, um einen [CSS](/de/docs/Web/CSS) [Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertefunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeparameter benötigen, um den Rückgabewert zu berechnen.

## Syntax

```plain
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertesyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argument(e), und die Funktion wird mit einer schließenden Klammer `)` beendet.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Bei einigen funktionalen Notationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

> [!NOTE]
> Die CSS-Wertefunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudo-Klassen verwechselt werden. Die [funktionalen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistischen Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und mehrere [baumstrukturelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertefunktionen. Die bedingten @-Regeln sind ebenfalls keine Wertefunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) steht für Erscheinungstransformationen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Translate-Funktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Übersetzt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Übersetzt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Übersetzt ein Element entlang der z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Übersetzt ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Übersetzt ein Element im 3D-Raum.

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
  - : Skaliert ein Element horizontal größer oder kleiner.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skaliert ein Element vertikal größer oder kleiner.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skaliert ein Element entlang der z-Achse größer oder kleiner.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skaliert ein Element auf der 2D-Ebene größer oder kleiner.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skaliert ein Element im 3D-Raum größer oder kleiner.

### Schrägfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Verzieht ein Element in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Verzieht ein Element in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Verzieht ein Element auf der 2D-Ebene.

### Matrixfunktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4 homogene Matrix.

### Perspektivfunktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der z=0-Ebene.

## Mathematikfunktionen

Die Mathematikfunktionen erlauben das Schreiben von CSS-Zahlwerten als mathematische Ausdrücke.

Jede der folgenden Seiten enthält detaillierte Informationen zur Syntax einer Mathematikfunktion, zur Browser-Kompatibilität, zu Beispielen und mehr. Für einen umfassenden Einstieg in CSS-Mathematikfunktionen siehe [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions).

### Grundrechenarten

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen auf numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen auf intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den Mittelwert von Mindest-, Mittel- und Höchstwerten.

### Wertschrittfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Divisor) bei der Division einer Zahl durch eine andere.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Dividend) bei der Division einer Zahl durch eine andere.

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
  - : Berechnet den trigonometrischen Arkustangens von zwei Zahlen in einer Ebene.

### Exponentialfunktionen

- {{CSSxRef("pow", "pow()")}}
  - : Berechnet die Basis, erhoben auf die Potenz einer Zahl.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Berechnet die Quadratwurzel einer Zahl.
- {{CSSxRef("hypot", "hypot()")}}
  - : Berechnet die Quadratwurzel der Summe der Quadrate seiner Argumente.
- {{CSSxRef("log", "log()")}}
  - : Berechnet den Logarithmus einer Zahl.
- {{CSSxRef("exp", "exp()")}}
  - : Berechnet `e` hoch der Potenz einer Zahl.

### Zeichenbezogene Funktionen

- {{CSSxRef("abs", "abs()")}}
  - : Berechnet den Absolutwert einer Zahl.
- {{CSSxRef("sign", "sign()")}}
  - : Berechnet das Vorzeichen (positiv oder negativ) der Zahl.

## Filterfunktionen

Der {{CSSxRef("&lt;filter-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) stellt einen grafischen Effekt dar, der das Erscheinungsbild eines Eingabebildes ändern kann. Er wird in den {{CSSxRef("filter")}}- und {{CSSxRef("backdrop-filter")}}-Eigenschaften verwendet.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Erhöht die Bildunschärfe (Gaußsche Unschärfe).
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Erhellt oder verdunkelt ein Bild.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Bildkontrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Erzeugt einen Schattenwurf hinter einem Bild.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Wandelt ein Bild in Graustufen um.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamtfarbton eines Bildes.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Invertiert die Farben eines Bildes.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Fügt einem Bild Transparenz hinzu.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Ändert die Gesamtsättigung eines Bildes.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Erhöht den Sepia-Effekt eines Bildes.

## Farb-Funktionen

Der {{CSSxRef("color_value","&lt;color&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) spezifiziert unterschiedliche Farb-Darstellungen.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Definiert eine Farbe anhand ihrer Rot-, Grün-, Blau- und Alpha-(Transparenz) Komponenten.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Definiert eine Farbe anhand ihres Farbtons, ihrer Sättigung, Helligkeit und Alpha-(Transparenz) Komponenten.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Definiert eine Farbe anhand ihres Farbtons, Weiß- und Schwarzgehalts.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, Chroma und Farbton Komponenten.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, Chroma, Farbton und Alpha-(Transparenz) Komponenten.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, a-Achsen- und b-Achsen-Abstand im Lab-Farbraum.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Definiert eine Farbe anhand ihrer Helligkeit, a-Achsen-Abstand, b-Achsen-Abstand im Lab-Farbraum und Alpha-(Transparenz).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spezifiziert einen bestimmten, festgelegten Farbraum anstelle des impliziten sRGB-Farbraums.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mischt zwei Farbwerte in einem gegebenen Farbraum zu einem bestimmten Anteil.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Gibt eine Farbe mit maximalem Farbkontrast zu einer gegebenen Farbe zurück.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Definiert CMYK-Farben in geräteabhängiger Weise.
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : Gibt eine von zwei angegebenen Farben basierend auf dem aktuellen Farbschema zurück.

## Bildfunktionen

Der {{CSSxRef("&lt;image&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bietet eine grafische Darstellung von Bildern oder Verläufen.

### Verlauf-Funktionen

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Lineare Verläufe ändern Farben entlang einer gedachten Linie progressiv.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radiale Verläufe ändern Farben progressiv von einem zentralen Punkt (Ursprung).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Kegelförmige Verläufe ändern Farben progressiv um einen Kreis.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Ähnlich wie `linear-gradient()`, jedoch wiederholen sich die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Ähnlich wie `radial-gradient()`, jedoch wiederholen sich die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Ähnlich wie `conic-gradient()`, jedoch wiederholen sich die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken.

### Bildfunktionen

- {{CSSxRef("image/image","image()")}}
  - : Definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich dem {{cssxref("url_value", "&lt;url&gt;")}} Typ, jedoch mit zusätzlicher Funktionalität einschließlich der Angabe der Richtungsfähigkeit des Bildes und Ausweichbildern für den Fall, dass das bevorzugte Bild nicht unterstützt wird.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Wählt das am besten geeignete CSS-Bild aus einem gegebenen Set aus, insbesondere für Bildschirme mit hoher Pixeldichte.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mischt zwei oder mehr Bilder bei einer definierten Transparenz.
- {{CSSxRef("element", "element()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der von einem beliebigen HTML-Element generiert wird.
- {{CSSxRef("image/paint", "paint()")}}
  - : Definiert einen {{CSSxRef("&lt;image&gt;")}}-Wert, der mit einem PaintWorklet generiert wird.

## Zählerfunktionen

CSS-Zählerfunktionen werden in der Regel mit der {{CSSxRef("content")}}-Eigenschaft verwendet, obwohl sie theoretisch überall eingesetzt werden können, wo ein {{CSSxRef("&lt;string&gt;")}} unterstützt wird.

- {{CSSxRef("counter", "counter()")}}
  - : Gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, falls einer vorhanden ist.
- {{CSSxRef("counters", "counters()")}}
  - : Ermöglicht verschachtelte Zähler und gibt einen verketteten String zurück, der die aktuellen Werte der benannten Zähler darstellt, falls welche vorhanden sind.
- {{CSSxRef("symbols", "symbols()")}}
  - : Definiert die Zählerstile direkt als Eigenschaftswert.

## Formfunktionen

Der {{CSSxRef("&lt;basic-shape&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) stellt eine grafische Form dar. Er wird in den Eigenschaften {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} und {{CSSxRef("shape-outside")}} verwendet.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Definiert eine Kreisform.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Definiert eine Ellipsenform.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Definiert eine eingesetzte Rechteckform.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Definiert eine Rechteckform unter Verwendung der Abstände von den oberen und linken Rändern des Referenzkastens.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Definiert eine Rechteckform unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzkastens sowie der Rechteckbreite und -höhe.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Definiert eine Polygonform.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Akzeptiert einen SVG-Pfadstring, um eine Form zu zeichnen.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Akzeptiert eine durch Kommas getrennte Liste von Befehlen zur Definition der zu zeichnenden Form.
- {{CSSxRef("ray", "ray()")}}
  - : Gültig nur mit `offset-path`, es definiert das Streckensegment, das ein animiertes Element folgen kann.

## Referenzfunktionen

Die folgenden Funktionen werden als Wert von Eigenschaften verwendet, um auf einen an anderer Stelle definierten Wert zu verweisen:

- {{CSSxRef("attr", "attr()")}}
  - : Verwendet die auf einem HTML-Element definierten Attribute.
- {{CSSxRef("env", "env()")}}
  - : Verwendet die vom Benutzeragenten als Umgebungsvariable definierte Variable.
- {{CSSxRef("if", "if()")}}
  - : Setzt je nach Ergebnis einer [Stile-Anfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Anfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Anfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) bedingt einen Eigenschaftswert.
- {{cssxref("url_function", "url()")}}
  - : Verwendet eine Datei von der angegebenen URL.
- {{CSSxRef("var", "var()")}}
  - : Verwendet den benutzerdefinierten Eigenschaftswert anstelle eines Teils eines Werts einer anderen Eigenschaft.

## Gitterfunktionen

Die folgenden Funktionen werden verwendet, um ein [CSS-Gitter](/de/docs/Web/CSS/CSS_grid_layout) zu definieren:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist.
- {{CSSxRef("repeat", "repeat()")}}
  - : Stellt ein wiederholtes Fragment der Spur-Liste dar, das eine große Anzahl von Spalten oder Reihen mit einem wiederkehrenden Muster ermöglicht.

## Schriftartenfunktionen

CSS-Schriftartenfunktionen werden mit der {{CSSxRef("font-variant-alternates")}}-Eigenschaft verwendet, um die Verwendung alternativer Glyphen zu steuern.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Aktiviert stilistische Alternativen für individuelle Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `salt`, beispielsweise `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ssXY`, beispielsweise `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `cvXY`, beispielsweise `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Aktiviert [Schwung-](https://en.wikipedia.org/wiki/Swash_%28typography%29) Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht den OpenType-Werten `swsh` und `cswh`, beispielsweise `swsh 2` und `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Aktiviert Ornamente wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Zierglyschen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `ornm`, beispielsweise `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Aktiviert Anmerkungen wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Er entspricht dem OpenType-Wert `nalt`, beispielsweise `nalt 2`.

## Easing-Funktionen

Der {{CSSxRef("&lt;easing-function&gt;")}} CSS [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) stellt eine mathematische Funktion dar. Er wird in Übergangs- und Animationseigenschaften verwendet:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Easing-Funktion, die linear zwischen ihren Punkten interpoliert.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Easing-Funktion, die eine kubische Bézier-Kurve definiert.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Iteration entlang einer bestimmten Anzahl von Stopps entlang des Übergangs, wobei jeder Stopp für gleiche Zeitabstände angezeigt wird.

## Animationsfunktionen

Die folgenden Funktionen werden als Wert verschiedener {{CSSxRef("animation-timeline")}}-Eigenschaften verwendet:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Scroll-Fortschrittstimeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Setzt die {{cssxref("animation-timeline")}} eines Elements auf eine _anonyme Ansichtsfortschrittstimeline_.

## Anker-Positionierungsfunktionen

Die Anker-Positionierungsfunktionen werden verwendet, wenn Anker-Positionierungselemente relativ zur Position und Größe ihrer zugehörigen Ankerelemente positioniert und dimensioniert werden.

- {{cssxref("anchor", "anchor()")}}
  - : Gibt eine Länge relativ zur Position der Kanten eines Anker-positionierten Elements im Verhältnis zu seinem zugehörigen Ankerelement zurück.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Gibt eine Länge relativ zur Größe des zugehörigen Ankerelements zurück.

## Baumzählungsfunktionen

Die folgenden Funktionen geben einen ganzzahligen Wert basierend auf dem DOM-Baum zurück, im Gegensatz zum flachen Baum, wie dies bei den meisten CSS-Werten der Fall ist:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Gibt eine ganze Zahl zurück, die die Position des ausgewählten Elements unter seinen Geschwistern widerspiegelt.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Gibt eine ganze Zahl zurück, die die Gesamtanzahl der Geschwister einschließlich des ausgewählten Elements widerspiegelt.

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
