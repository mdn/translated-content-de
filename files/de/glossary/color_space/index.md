---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle eines [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farbsystems) zu einem Farbraum in Beziehung stehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben repräsentieren. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen umgewandelt werden, während sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Bereiche von Farben. Jeder Farbraum wird durch ein mathematisches Modell und einen zugehörigen Satz von Regeln definiert. Jeder Farbraum hat einen definierten [Gamut](/de/docs/Glossary/Gamut), der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung auf verschiedenen Geräten und Software.

Der _sRGB_-Farbraum (Standard Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht mehr auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht weiter und spezifiziert Funktionen zum Definieren benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab_farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz_farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechtwinklig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechtwinklige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Zu den polaren Farbräumen gehören `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen aus drei zugrunde liegenden Komponenten darstellt – rote, grüne und blaue Farbkanäle –, die verschiedene Farbtöne erzeugen, wenn sie kombiniert werden. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für [RGB](/de/docs/Glossary/RGB)-Farben. sRGB soll die Display-Spezifikation von PC- und [Web](/de/docs/Glossary/world_wide_web)-basierten Bildsystemen kodifizieren. Es ist jetzt normalerweise der angenommene Farbraum für diejenigen ohne markiertes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der einen breiteren [Gamut](/de/docs/Glossary/gamut) von Farben als der _sRGB_-Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) unterscheiden sich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In [CSS](/de/docs/Glossary/CSS) können sie als einzelner 24-Bit-Integer in hexadezimaler Notation dargestellt werden (zum Beispiel ist `#add8e6` hellblau) oder in der funktionalen Notation [`rgb()`](/de/docs/Web/CSS/color_value/rgb) als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

CSS `<color>` Werte im sRGB-Farbraum umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Tonwert, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Tonwert, Weißanteil, Schwarzanteil). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion.

Der HSV (Tonwert, Sättigung und Wert) Farbraum und sein Synonym HSB (Tonwert, Sättigung und Helligkeit) sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die auf spezifische hexadezimale Werte abgebildet sind. Die Umwandlung dieser verschiedenen Farbnotationen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede Farbe sein kann – sie ist nicht auf sRGB beschränkt.

Die `rgb()` Funktion ist nicht die einzige Farbfunktion, die den _sRGB_ Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_Hue-Saturation-Lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_Hue-Whiteness-Blackness_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum

  - : Der sRGB Farbraum, oder "Standard RGB", ist der Standard RGB (rot, grün, blau) Farbraum. Er wurde erstellt, um auf Monitoren, Druckern und im Web verwendet zu werden. Er ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit in-Gamut-Werten, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum

  - : Der vordefinierte lineare sRGB Farbraum, `srgb-linear`, ist derselbe wie `srgb`, außer dass die Transferfunktion linear ist, ohne Gamma-Kodierung. Der `srgb-linear` Farbraum akzeptiert die drei `r`, `g` und `b` Werte als numerische Parameter, mit in-Gamut-Farben, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `display-p3` Farbraum

  - : Definiert von Apple, kombiniert der **Display P3** Farbraum den DCI-P3 Gamut, den D65 Weißpunkt und die sRGB Gammakurve. Es ist ein weitreichender Gamuttyp, der typisch für aktuelle breit aufgestellte Monitore ist, die sattere Grüntöne und Rottöne als der sRGB Farbraum ermöglichen. Der `display-p3` basiert auf `r`, `g` und `b`, mit in-Gamut-Werten, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum

  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der entworfen wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50 % der sichtbaren Farben, die durch den [CIELab Farbraum](#cielab_farbräume) spezifiziert werden, können erreicht werden, und es sind mehr Cyan-Grün-Töne als in anderen RGB Farbräumen enthalten. Die in-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion, fast, aber nicht genau, 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`

  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die in der Natur vorkommen könnten, und etwa 90 % der [CIElab Farben](#cielab_farbräume). Die in-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe Schwärze. Der Weißpunkt ist D50, derselbe, der von CIELab verwendet wird.

- `rec2020`

  - : `rec2020` ist ein Rundfunk-Industrie-Standard für Ultra-High-Definition-4k- und 8k-Fernseher. Der ultrabreite Gamut-Farbraum ist in der Lage, fast alle sichtbaren realen Farben darzustellen, über die Fähigkeiten der meisten aktuellen Displays hinaus. Es wird erwartet, dass die Abdeckung mit der Verbesserung der Displays zunehmen wird. Die in-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation sind, umfassen: `HSI` (Hue, Saturation, Intensity), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder kurz Lab*) bezeichnet, stellt den gesamten Farbbereich dar, den Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die Wahrnehmungshelligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechtwinkliges Koordinatensystem, mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrotes Rot, während negative Werte die Komplementärfarbe darstellen: Grün. Positive Werte entlang der `b`-Achse sind Gelb, negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte gesättigter sind.

CIELab-Funktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind dieselben, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) statt Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von denselben bezeichneten Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB Farbräumen.

CIELab-Farbräume, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum

  - : Drückt Farbe als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a`- und `b`-Achsen sind nicht durch diese Bereichswerte gebunden, die bei der Definition von Prozentangaben und -ausgaben im Verhältnis zum `Display P3` Farbraum Referenzwerte sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum

  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum

  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1` und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ Farbräume

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben auf dem Bildschirm geeignet sind, korrespondiert sRGB nicht direkt mit der menschlichen Farbwahrnehmung. Der von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931 geschaffene CIE 1931 XYZ (oder kurz XYZ) Farbraum bildet die ersten definierten quantitativen Verbindungen zwischen Verteilungen von Wellenlängen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben des menschlichen Sehens.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfen in den Augen, die Licht erkennen, mit Spitzen der spektralen Empfindlichkeit bei unterschiedlichen Wellenlängen. Die CIE X, Y und Z Parameter korrespondieren mit den Stimulierungsebenen der drei Arten von Zapfen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y`-Kanal repräsentiert die Luminanz einer Farbe. Der `Z`-Kanal reflektiert die Menge an Blau in der Farbe, ist aber nicht dasselbe wie das `B` in RGB. Die `X`-Achse ist rechtwinklig zur Y- und Z-Achse des XYZ-Farbraum-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum

  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` begrenzt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte zur Definition von Prozentangaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum

  - : `xyz-d50` ist derselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` Funktion
- [CSS Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normvalenzsystem) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
