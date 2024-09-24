---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle koordinatenbasierter Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`, `w` und `b` Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbe) zu einem Farbraum in Beziehung stehen. Die meisten Farbräume sind drei- oder vierdimensionalen Raster, die Farben repräsentieren. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt werden und von einem Farbraum in einen anderen transformiert werden, während sie gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und ein zugehöriges Regelwerk definiert. Jeder Farbraum hat einen definierten {{glossary("Gamut", "Gamut")}}, welcher sich auf den spezifischen Farbbereich bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung auf verschiedenen Geräten und Software.

Der _sRGB_-Farbraum (Standard rot, grün und blau) wurde für das Web entwickelt, aber wir sind nicht mehr auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Zu den vordefinierten [RGB-Farbräumen](#rgb-farbräume) gehören `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Zu den vordefinierten [CIELAB-Farbräumen](#cielab-farbräume) gehören `lab-d50` und `lab-d65`. Zu den vordefinierten [XYZ-Farbräumen](#xyz-farbräume) gehören `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt — roten, grünen und blauen Farbkanälen — die bei Kombination verschiedene Töne erzeugen. sRGB oder „Standard RGB“ ist der zugrunde liegende Farbraum für {{Glossary("RGB")}}-Farben. sRGB soll die Display-Spezifikation von PC- und {{glossary("World Wide Web", "Web")}}-basierten Bildsystemen kodifizieren. Es ist mittlerweile normalerweise der angenommene Farbraum für diejenigen ohne markiertes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der einen weiter gefassten {{glossary("Gamut")}} von Farben darstellen kann als der _sRGB_-Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, um die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS")}} können sie als einzelne 24-Bit-Ganzzahl im Hexadezimalformat dargestellt werden (zum Beispiel ist `#add8e6` hellblau) oder in [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktionalnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

CSS `<color>`-Werte in den sRGB-Farbräumen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißkeit, Schwärze). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert), und sein Synonym HSB (Farbton, Sättigung und Helligkeit), werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbnotationen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede Farbe sein kann — sie ist nicht auf sRGB beschränkt.

Die `rgb()`-Farbfunktion ist nicht die einzige, die den _sRGB_-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie das [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder das [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum

  - : Der sRGB-Farbraum oder „Standard RGB“ ist der Standard RGB (rot, grün, blau) Farbraum. Er wurde entwickelt, um auf Monitoren, Druckern und im Web verwendet zu werden. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit Werten im Gamut im Bereich von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum

  - : Der vordefinierte lineare sRGB-Farbraum, `srgb-linear`, ist der gleiche wie `srgb`, außer dass die Übertragungsfunktion linear ist ohne Gamma-Kodierung. Der `srgb-linear` Farbraum akzeptiert die drei `r`, `g` und `b` Werte als numerische Parameter, mit Farben im Gamut, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `display-p3` Farbraum

  - : Definiert von Apple, kombiniert der **Display P3** Farbraum den DCI-P3 Farbraum, den D65 Weißpunkt und die sRGB-Gamma-Kurve. Es ist ein weiter Farbraum, typisch für aktuelle Weit-Farbraum-Monitore, der lebhaftere Grüntöne und Rottöne als der sRGB Farbraum ermöglicht. Der `display-p3` basiert auf `r`, `g` und `b`, mit Werten im Gamut im Bereich von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum

  - : `a98-rgb` ist der Adobe® 1998 RGB-Farbraum, der entworfen wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50% der sichtbaren Farben, die vom [CIELab Farbraum](#cielab-farbräume) spezifiziert werden, können erreicht werden, einschließlich mehr Cyan-Grün-Töne als andere RGB-Farbräume. Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion, nahe an aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`

  - : Entwickelt von Kodak, der `prophoto-rgb` Farbraum kann alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90% der [CIElab Farben](#cielab-farbräume). Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion, mit einem Wert von 1/1.8, und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe wie beim CIELab.

- `rec2020`

  - : `rec2020` ist ein Standard der Rundfunkindustrie für Ultra-High-Definition 4k und 8k Fernseher. Der ultra-weite Farbraum ist in der Lage, fast alle sichtbaren Farben der realen Welt darzustellen, jenseits der Fähigkeiten der meisten aktuellen Displays. Erwartet wird, dass die Abdeckung im Laufe der Zeit zunimmt, wenn sich Displays verbessern. Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder Lab* für kurz) bezeichnet, repräsentiert den gesamten Farbbereich, den Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farben als drei Werte aus: L\* für wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: rot, grün, blau und gelb.

Lab ist ein rechtwinkliges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a` Achse sind ein purpurrot, während negative Werte das Komplement darstellen: grün. Positive Werte entlang der `b` Achse sind gelb, und negative sind blau/violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte gesättigter sind.

CIELab-Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind gleich, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum

  - : Drückt Farben als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind von diesen Bereichswerten nicht beschränkt, die Referenzen sind, die zur Definition von Eingangs- und Ausgangsprozentsätzen in Bezug auf den `Display P3` Farbraum dienen. Der Weißpunkt ist D50.

- `lab-d65` Farbraum

  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum

  - : Ähnlich zu `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbräume

Während Kombinationen von rot, grün und blau gut dafür geeignet sind, Farben auf dem Bildschirm darzustellen, entspricht sRGB nicht direkt der Art und Weise, wie Menschen Farbe wahrnehmen. Erschaffen von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die CIE 1931 XYZ (oder XYZ für kurz) Farbräume die ersten definierten quantitativen Verbindungen zwischen den Verteilungen von Wellenlängen im elektromagnetischen sichtbaren Spektrum und den wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normaler Sehkraft haben drei Arten von Zapfenzellen, die Licht wahrnehmen und ihre spektrale Empfindlichkeit in unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Stimulationsgraden der drei Arten von Zapfenzellen, die im Prinzip jede sichtbare Farbe beschreiben können. Der `Y` Kanal repräsentiert die Leuchtdichte einer Farbe. Der `Z` Kanal spiegelt die Menge an Blau in der Farbe wider, entspricht jedoch nicht dem `B` in RGB. Die `X` Achse ist orthogonal zur Y- und Z-Achse des 3D-Koordinatensystems des XYZ-Farbraums.

- `xyz` und `xyz-d65` Farbraum

  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` begrenzt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Bezugspunkte zur Definition von Eingangs- und Ausgangsprozentsätzen verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum

  - : `xyz-d50` ist derselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` Funktion
- [CSS Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE_1931-Farbraum) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
