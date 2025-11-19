---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 3b34c98c3f1dcbeb35d56e40c003037c60888870
---

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbanordnungen. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Farbe) zu einem Farbraum in Beziehung stehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen umgewandelt werden, während sie immer noch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und eine zugehörige Regelsammlung definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_-Farbraum (Standard Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht länger auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab_farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz_farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt — Rot-, Grün- und Blaukanäle — die verschiedene Farbtöne erzeugen, wenn sie kombiniert werden. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Anzeige auf PC- und {{Glossary("world_wide_web", "Web")}}-basierten Bildsystemen kodifizieren. Es ist jetzt normalerweise der angenommene Farbraum für diejenigen ohne markierte oder eingebettete Farbprofile.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der ein breiteres {{Glossary("gamut", "Gamut")}} von Farben als der _sRGB_-Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als einzelner 24-Bit-Integer im hexadezimalen Format (zum Beispiel ist `#add8e6` hellblau) oder in der [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`) dargestellt werden.

CSS-`<color>`-Werte in den sRGB-Farbräumen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weiß, Schwarz). Es gibt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) werden in CSS als [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Das Konvertieren dieser verschiedenen Farbnotationen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann — sie ist nicht auf sRGB beschränkt.

Die `rgb()`-Farb-Funktion ist nicht die einzige Farbfunktion, die den _sRGB_-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum oder "Standard RGB" ist der Standard-RGB-Farbraum (Rot, Grün, Blau). Er wurde für Monitore, Drucker und das Web erstellt. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit In-Gamut-Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte Linear-Light-sRGB-Farbraum, `srgb-linear`, ist der gleiche wie `srgb`, außer dass die Übertragungsfunktion Linear-Light ohne Gamma-Kodierung ist. Der `srgb-linear` Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit In-Gamut-Farben von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Definiert von Apple, verbindet der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum den DCI-P3 Farbraum, den D65 Weißpunkt und die sRGB-Gammakurve. Es ist ein weitläufiger Farbraum, typisch für aktuelle Weitfarbmonitore, die leuchtendere Grüntöne und Rottöne als der sRGB-Farbraum ermöglichen. Der `display-p3` Raum basiert auf `r`, `g` und `b` Kanälen, mit In-Gamut-Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3-linear` Farbraum
  - : Der vordefinierte `display-p3-linear` Farbraum ist ähnlich wie `display-p3`, außer dass er eine Linear-Light-Übertragungsfunktion verwendet und keine Gamma-Kodierung hat, was eine höhere Präzision in den angezeigten Farben ermöglicht. Der `display-p3-linear` Raum basiert auf `r`, `g` und `b` Kanälen, mit In-Gamut-Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der entworfen wurde, um alle CMYK-Farben als RGB darzustellen. Ungefähr 50% der sichtbaren Farben, die durch den [CIELab Farbraum](#cielab_farbräume) spezifiziert sind, können erreicht werden und umfassen mehr Cyan-Grüntöne als andere RGB-Farbräume. Die `r`, `g` und `b` In-Gamut-Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion, nahe, aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle in der Natur wahrscheinlich vorkommenden Farben und etwa 90% der [CIElab Farben](#cielab_farbräume) darstellen. In-Gamut `r`, `g`, und `b` Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe dem Schwarzpunkt. Der Weißpunkt ist D50, derselbe wie bei CIELab.

- `rec2020`
  - : `rec2020` ist ein Rundfunkindustriestandard für Ultra-High-Definition 4k und 8k Fernseher. Der äußerst breite Farbraum ist in der Lage, fast alle sichtbaren realen Farben darzustellen, über die Fähigkeiten der meisten aktuellen Displays hinaus. Es wird erwartet, dass die Abdeckung im Laufe der Zeit zunimmt, da sich die Displays verbessern. In-Gamut `r`, `g`, und `b` Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Weitere zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB Farbräume

Der CIELAB (oder CIELab) Farbraum, der auch als L\*a\*b* (oder kurz Lab*) bezeichnet wird, stellt das gesamte Spektrum der Farben dar, die Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für wahrgenommene Helligkeit, und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem, mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a` Achse sind ein purpurrotes Rot, während negative Werte das Komplement darstellen: Grün. Positive Werte entlang der `b` Achse sind gelb und negative sind blau/violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere Absolutwerte stärker gesättigt sind.

CIELab-Farb-Funktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind die gleichen, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab Farbräume, einschließlich Lab, LCH, Oklab, und OkLCh, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farbe als `L` in einem Bereich von `0` bis `100`, und `a` und `b` mit einem Bereich von `-125` bis `125` aus. Die `a` und `b` Achsen sind nicht durch diese Bereiche begrenzt, die Referenzen bei der Definition von Eingaben und Ausgaben in Prozent im Verhältnis zum `Display P3` Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ Farbräume

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben auf dem Bildschirm geeignet sind, korrespondiert sRGB nicht direkt mit der menschlichen Farbwahrnehmung. Die CIE 1931 XYZ (oder kurz XYZ) Farbräume, erstellt von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die ersten definierten quantitativen Verbindungen zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehen haben drei Arten von Zapfen in den Augen, die Licht wahrnehmen und ihre maximale spektrale Empfindlichkeit in unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Reizniveaus der drei Arten von Zapfen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y` Kanal repräsentiert die Leuchtdichte einer Farbe. Der `Z` Kanal reflektiert die Menge an Blau in der Farbe, entspricht jedoch nicht dem `B` in RGB. Die `X` Achse ist orthogonal zur Y- und Z-Achse des XYZ-Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` begrenzt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte bei der Definition von Eingaben und Ausgaben in Prozent verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist derselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` Feature
- [CSS Datentyp: `<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normfarbsystem) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
