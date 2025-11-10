---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Farbe) zu einem Farbraum in Beziehung stehen. Die meisten Farbräume sind drei- oder vierdimensionale Raster, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen umgewandelt werden, während sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbpaletten. Jeder Farbraum wird durch ein mathematisches Modell und einen zugehörigen Regelsatz definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Farbumfang (Gamut)")}}, der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_-Farbraum (standardmäßiges Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht mehr nur auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) bietet mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrundeliegenden Komponenten darstellt – Rot, Grün und Blau – die bei Kombination verschiedene Farbtöne erzeugen. sRGB oder "Standard RGB" ist der zugrundeliegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Display-Spezifikation von PC- und {{Glossary("world_wide_web", "Web")}}-basierten Bildsystemen kodifizieren. Es ist nun normalerweise der angenommene Farbraum für diejenigen ohne ein getaggtes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der einen breiteren {{Glossary("gamut", "Farbumfang (Gamut)")}} als der _sRGB_-Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als eine einzelne 24-Bit-Ganzzahl in hexadezimaler Notation (z.B. `#add8e6` ist hellblau) oder in der [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (z.B. `rgb(46 139.5 87)`) dargestellt werden.

CSS `<color>`-Werte in den sRGB-Farbräumen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißanteil, Schwarzanteil). Es gibt auch die `srgb`-, `srgb-linear`-, `a98-rgb`- und `prophoto-rgb`-Farbräume für die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) werden in CSS als [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die Umrechnung dieser verschiedenen Farbnotationen in sRGB ist mathematisch unkompliziert. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann – sie ist nicht auf sRGB beschränkt.

Die `rgb()`-Funktion ist nicht die einzige Farb-Funktion, die den _sRGB_-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie das [`HSL`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (_Farbton-Sättigung-Helligkeit_) oder [`HWB`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (_Farbton-Weißanteil-Schwarzanteil_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum, oder "Standard RGB", ist der standardmäßige RGB (Rot, Grün, Blau) Farbraum. Er wurde entwickelt, um auf Monitoren, Druckern und im Web verwendet zu werden. Er ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit innerhalb des Farbums liegenden Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte Lineallicht sRGB-Farbraum, `srgb-linear`, ist derselbe wie `srgb`, außer dass die Transferfunktion Lineallicht ohne Gamma-Kodierung ist. Der `srgb-linear`-Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit innerhalb des Farbums liegenden Farben von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Von Apple definiert kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum den DCI-P3-Farbumfang, den Weißpunkt D65 und die sRGB-Gammakurve. Es handelt sich um einen Farbumfang, der typisch für aktuelle breitbandige Monitore ist und lebhaftere Grüntöne und Rottöne als der sRGB-Farbumfang ermöglicht. Der `display-p3` basiert auf `r`, `g` und `b`, mit innerhalb des Farbums liegenden Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB-Farbraum, der entwickelt wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50 % der sichtbaren Farben, die vom [CIELab-Farbraum](#cielab-farbräume) spezifiziert werden, können erreicht werden und umfassen mehr Cyan-Grün-Töne als andere RGB-Farbräume. Innerhalb des Farbums liegende `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion, die nahe, aber nicht exakt bei 1/2.2 liegt. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen und etwa 90 % der [CIElab-Farben](#cielab-farbräume) umfassen. Innerhalb des Farbums liegende `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion, mit einem Wert von 1/1.8 und einem kleinen linearen Teil nahe Schwarz. Der Weißpunkt ist D50, derselbe, der auch von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Branchenstandard für den Rundfunk für ultra-hochauflösende 4k- und 8k-Fernseher. Der ultrabreite Farbumfang kann fast alle realen, sichtbaren Farben darstellen, über die Fähigkeiten der meisten aktuellen Displays hinaus. Es wird erwartet, dass die Abdeckung im Laufe der Zeit zunimmt, da die Displays verbessert werden. Innerhalb des Farbums liegende `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Weitere zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder Lab* kurz) bekannt, stellt das gesamte Farbspektrum dar, das Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farben als drei Werte aus: L\* für wahrnehmungsbedingte Helligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrot, während negative Werte das Komplement sind: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte satter sind.

Zu den CIELab-Funktionen gehören {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind gleich, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, einschließlich Lab, LCH, Oklab und OkLCh, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Stellt Farbe als `L` in einem Bereich von `0` bis `100` dar, sowie `a` und `b` in einem Bereich von `-125` bis `125`. Die `a`- und `b`-Achsen sind nicht durch diese Bereichswerte gebunden, die als Referenzen zur Definition von Prozentwerteingaben und -ausgaben in Bezug auf den `Display P3` Farbraum dienen. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1` und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbräume

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben auf Bildschirmen geeignet sind, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Erstellt von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die CIE 1931 XYZ (oder XYZ kurz) Farbräume die ersten definierten quantitativen Verknüpfungen zwischen Verteilungen von Wellenlängen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normaler Sicht haben drei Arten von Zapfenzellen, die Licht wahrnehmen und ihren maximalen spektralen Empfindlichkeiten in unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Reizstufen der drei Arten von Zapfenzellen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y`-Kanal stellt die Helligkeit einer Farbe dar. Der `Z`-Kanal reflektiert den Blauanteil in der Farbe, ist aber nicht mit dem `B` in RGB identisch. Die `X`-Achse ist orthogonal zur Y- und Z-Achse des 3D-Koordinatensystems von XYZ.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz`-Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte zur Definition von Prozentwerteingaben und -ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist derselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Funktion
- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
- [sRGB-Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB-Farbraum](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CIE 1931 Farbraum](https://en.wikipedia.org/wiki/CIE_1931_color_space) auf Wikipedia
- [Oklab-Farbraum](https://bottosson.github.io/posts/oklab/)
