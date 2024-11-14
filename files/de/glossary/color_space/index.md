---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: c7416fd067774fc2583944d10801b56672b56631
---

{{GlossarySidebar}}

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`, `w` und `b` Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbe) sich auf einen Farbraum beziehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben repräsentieren. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt werden und können von einem Farbraum in einen anderen transformiert werden, während sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und zugehörige Regeln definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den speziellen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_ Farbraum (Standard Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht mehr auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB Farbräume](#rgb_farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB Farbräume](#cielab_farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ Farbräume](#xyz_farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt — Rot, Grün und Blau Kanäle — die verschiedene Farbtöne erzeugen, wenn sie kombiniert werden. sRGB, oder "Standard RGB", ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}} Farben. sRGB soll die Anzeige-Spezifikation von PC- und Web-basierten Bildsystemen kodifizieren. Es ist nun normalerweise der angenommene Farbraum für diejenigen ohne getaggtes oder ohne eingebettetes Farbprofil.

Es gibt mehrere RGB Farbräume, wie den _Adobe RGB_ Farbraum, der ein breiteres {{Glossary("gamut", "Gamut")}} von Farben als der _sRGB_ Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als ein einzelner 24-Bit-Integer in hexadezimaler Notation (zum Beispiel, `#add8e6` ist hellblau) oder in [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel, `rgb(46 139.5 87)`) dargestellt werden.

CSS `<color>` Werte in den sRGB Farbräumen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißheit, Schwärze). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion.

Der HSV (Farbton, Sättigung und Wert) Farbraum und sein Synonym HSB (Farbton, Sättigung und Helligkeit) sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die spezifischen Hex-Werten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbdarstellungen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede Farbe sein kann — sie ist nicht auf sRGB beschränkt.

Die `rgb()` Farb-Funktion ist nicht die einzige Farb-Funktion, die den _sRGB_ Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_Farbton-Sättigung-Helligkeit_) oder die [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_Farbton-Weiße-Schwärze_) Farbmodelle werden ebenfalls verwendet, um eine sRGB Farbe im Web darzustellen.

- `srgb` Farbraum

  - : Der sRGB Farbraum, oder "Standard RGB", ist der Standard RGB (Rot, Grün, Blau) Farbraum. Er wurde entwickelt, um auf Monitoren, Druckern und im Web verwendet zu werden. Er ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit Farbwerten im Farbbereich von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum

  - : Der vordefinierte Linearlicht-sRGB Farbraum, `srgb-linear`, ist derselbe wie `srgb`, außer dass die Transferfunktion Linearlicht ohne Gamma-Codierung ist. Der `srgb-linear` Farbraum akzeptiert die drei `r`, `g` und `b` Werte als numerische Parameter, mit Farbwerten im Farbbereich von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum

  - : Definiert von Apple, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum den DCI-P3 Farbbereich, den D65 Weißpunkt und die sRGB Gammakurve. Es handelt sich um einen breiten Farbraum, der typisch für aktuelle Monitore mit großem Farbumsatz ist und ermöglicht lebendigere Grüns und Rottöne als der sRGB Farbbereich. Der `display-p3` basiert auf `r`, `g` und `b`, mit Farbwerten im Farbbereich von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum

  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der entwickelt wurde, um alle CMYK-Farben als RGB darzustellen. Ungefähr 50% der sichtbaren Farben, die vom [CIELab Farbraum](#cielab_farbräume) spezifiziert werden, können erreicht werden, wodurch mehr Zyan-Grün-Töne umfasst werden als in anderen RGB-Farbräumen. Farbwerte im Farbbereich von `0` bis `1` für `r`, `g` und `b`. Die Transferkurve ist eine Gammafunktion, nahe aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`

  - : Entwickelt von Kodak, der `prophoto-rgb` Farbraum kann fast alle in der Natur vorkommenden Farben darstellen und etwa 90% der [CIElab-Farben](#cielab_farbräume). Farbwerte im Farbbereich von `0` bis `1` für `r`, `g` und `b`. Die Transferkurve ist eine Gammafunktion, mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe, der von CIELab verwendet wird.

- `rec2020`

  - : `rec2020` ist ein Standard der Rundfunkindustrie für Ultra-High-Definition 4k und 8k Fernseher. Der ultra-breite Farbraum kann fast alle sichtbaren realen Farben darstellen, jenseits der Fähigkeiten der meisten aktuellen Displays. Die Abdeckung wird voraussichtlich zunehmen, sobald sich die Displays verbessern. Farbwerte im Farbbereich von `0` bis `1` für `r`, `g` und `b`. Der Weißpunkt ist D65.

> [!NOTE]
> Weitere zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* bekannt (oder kurz Lab*), repräsentiert den gesamten Farbbereich, den Menschen sehen können. Dieser Farbraum wurde von der International Commission on Illumination (CIE) definiert. Er beschreibt Farbe mit drei Werten: L\* für wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben menschlicher Wahrnehmung: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem, mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a` Achse sind purpurrot, während negative Werte das Komplement Grün darstellen. Positive Werte entlang der `b` Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b`, mit größeren absoluten Werten, die satter sind.

CIELab Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind gleich, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab Farbräume, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum

  - : Drückt Farbe als `L` in einem Bereich von `0` bis `100` aus und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind nicht auf diese Wertbereiche beschränkt, die Referenzen zur Definition von Prozentangaben in Bezug auf den `Display P3` Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum

  - : Dieser Farbraum ist der gleiche wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum

  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ Farbräume

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben auf dem Bildschirm geeignet sind, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Die International Commission on Illumination (CIE) hat 1931 den CIE 1931 XYZ (oder kurz XYZ) Farbraum geschaffen, die ersten definierten quantitativen Verbindungen zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfen, die Licht wahrnehmen, wobei sie in unterschiedlichen Wellenlängen ihre maximale Spektralempfindlichkeit haben. Die CIE X-, Y- und Z-Parameter entsprechen den Stimulationsstufen der drei Arten von Zapfen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y` Kanal repräsentiert die Leuchtdichte einer Farbe. Der `Z` Kanal spiegelt die Menge Blau in der Farbe wider, ist aber nicht identisch mit dem `B` in RGB. Die `X` Achse ist orthogonal zur Y- und Z-Achse des XYZ-Farbdreidimensionalen Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum

  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte in der Definition von Prozenteingaben und -ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum

  - : `xyz-d50` ist dasselbe wie `xyz-d65`, außer dass er D50 als Weißpunkt verwendet.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` Funktion
- [CSS Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normvalenzsystem) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
