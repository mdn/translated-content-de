---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

**Farbräume** sind benannte Organisationen von Farben, die den zugrunde liegenden Farbmodellen von koordinatenbasierten Farbarrangements entsprechen. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farbe) sich auf einen Farbraum beziehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen umgewandelt werden, während sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und ein zugehöriges Regelwerk definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich von Farben bezieht, die er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung auf verschiedenen Geräten und Software.

Der _sRGB_ Farbraum (standardisiertes Rot, Grün und Blau) wurde für das Web erstellt, doch sind wir nicht mehr auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt – roten, grünen und blauen Farbkanälen –, die verschiedene Farbtöne erzeugen, wenn sie kombiniert werden. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Anzeigevorgaben von PC- und web-basierten Bildgebungssystemen kodifizieren. Es ist nun in der Regel der angenommene Farbraum für diejenigen ohne getaggtes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie zum Beispiel den _Adobe RGB_ Farbraum, der einen breiteren {{Glossary("gamut", "Gamut")}} an Farben darstellen kann als der _sRGB_-Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als einzelner 24-Bit-Ganzzahlwert in hexadezimaler Notation dargestellt werden (zum Beispiel ist `#add8e6` hellblau) oder in [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

In den sRGB-Farbräumen finden sich CSS-`<color>`-Werte wie {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißanteil, Schwarzanteil). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die auf spezifische Hex-Werte abgebildet sind. Die Umwandlung dieser verschiedenen Farbnotationen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann – sie ist nicht auf sRGB beschränkt.

Die `rgb()`-Farbfunktion ist nicht die einzige Farbfunktion, die den _sRGB_-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum, oder "Standard RGB", ist der standardisierte RGB (Rot, Grün, Blau) Farbraum. Er wurde für den Einsatz auf Monitoren, Druckern und im Web erstellt. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit im Gamut befindlichen Werten, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte linear-licht sRGB-Farbraum, `srgb-linear`, ist derselbe wie `srgb`, außer dass die Transferfunktion linear-licht ohne Gamma-Kodierung ist. Der `srgb-linear`-Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit im Gamut befindlichen Farben, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Von Apple definiert, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum den DCI-P3 Farbumfang, den D65 Weißpunkt und die sRGB-Gammakurve. Es ist ein breiteres Gamut, typisch für aktuelle Wide-Gamut-Monitore, und ermöglicht lebendigere Grüntöne und Rottöne als der sRGB-Farbraum. Der `display-p3` basiert auf `r`, `g` und `b`, mit im Gamut befindlichen Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB-Farbraum, der entworfen wurde, um alle CMYK-Farben als RGB darzustellen. Ungefähr 50% der sichtbaren Farben, die durch den [CIELab-Farbraum](#cielab-farbräume) spezifiziert sind, können erreicht werden und umfassen mehr Cyan-Grüntöne als andere RGB-Farbräume. Im Gamut befindliche `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gamma-Funktion, nahe bei, aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90% der [CIElab-Farben](#cielab-farbräume). Im Gamut befindliche `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gamma-Funktion mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe, der auch von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Industriestandard für den Rundfunk für ultra-hochauflösende 4k- und 8k-Fernseher. Der ultraweites Gamut-Raum ist in der Lage, fast alle sichtbaren realen Farben darzustellen, über die Fähigkeiten der meisten aktuellen Displays hinaus. Die Abdeckung wird voraussichtlich mit der Verbesserung der Displays zunehmen. Im Gamut befindliche `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Farbräume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder kurz Lab*) bezeichnet, repräsentiert den gesamten Farbbereich, den Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrotes Rot, während negative Werte das Komplement darstellen: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte bei `a` und `b`, wobei größere absolute Werte intensiver gesättigt sind.

CIELab-Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind gleich, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die die Polar-Koordinaten `C` (Chroma) und `H` (Farbton) anstelle der Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, einschließlich Lab, LCH, Oklab und OkLCh, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farbe als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind nicht durch diese Werte begrenzt, die als Referenzen bei der Definition prozentualer Eingaben und Ausgaben in Bezug auf den `Display P3` Farbraum dienen. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbräume

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben am Bildschirm geeignet sind, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Erstellt von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die CIE 1931 XYZ (oder kurz XYZ) Farbräume die ersten definierten quantitativen Verbindungen zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfen, die Licht wahrnehmen, wobei die spektrale Empfindlichkeit bei unterschiedlichen Wellenlängen ihren Höhepunkt hat. Die CIE X-, Y- und Z-Parameter entsprechen den Reizniveaus der drei Arten von Zapfen und beschreiben im Prinzip jede sichtbare Farbe. Der `Y`-Kanal stellt die Helligkeit einer Farbe dar. Der `Z`-Kanal spiegelt die Menge an Blau in der Farbe wider, ist aber nicht dasselbe wie das `B` in RGB. Die `X`-Achse ist orthogonal zur Y- und Z-Achse des XYZ-Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz`-Identifier ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` begrenzt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte in der Definition prozentualer Eingaben und Ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist identisch mit `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Funktion
- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB-Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB-Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normfarbtafel) auf Wikipedia
- [Oklab-Farbraum](https://bottosson.github.io/posts/oklab/)
