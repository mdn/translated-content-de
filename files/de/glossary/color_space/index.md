---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbe) sich auf einen Farbraum beziehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt werden und können von einem Farbraum in einen anderen transformiert werden, während sie weiterhin gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und einen zugehörigen Regelwerk definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_ Farbraum (Standard Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht mehr auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht weiter, indem es Funktionen zur Definition benutzerdefinierter Farbräume spezifiziert.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt — Rot-, Grün- und Blau-Farbkanäle — die zusammen verschiedene Farbtöne erzeugen. sRGB, oder „Standard RGB“, ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB ist dafür gedacht, die Anzeige-Spezifikation von PC- und {{Glossary("world_wide_web", "Web")}}-basierten Bildsystemen zu kodifizieren. Es ist jetzt normalerweise der angenommene Farbraum für diejenigen ohne getaggtes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_ Farbraum, die einen breiteren {{Glossary("gamut", "Farbumfang")}} als der _sRGB_ Farbraum darstellen können. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als einzelne 24-Bit-Integer in hexadezimaler Notation (zum Beispiel `#add8e6` ist ein helles Blau) oder in der [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`) dargestellt werden.

CSS `<color>`-Werte im sRGB-Farbraum umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißgrad, Schwarzgrad). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbdarstellungen in sRGB ist mathematisch unkompliziert. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede Farbe sein kann — es ist nicht auf sRGB beschränkt.

Die `rgb()`-Funktion ist nicht die einzige Farb-Funktion, die den _sRGB_ Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_Farbton-Sättigung-Helligkeit_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_Farbton-Weißgrad-Schwarzgrad_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum, oder "Standard RGB", ist der Standard-RGB (Rot, Grün, Blau) Farbraum. Er wurde entwickelt, um auf Monitoren, Druckern und im Web verwendet zu werden. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit innerhalb des Farbumfangs liegenden Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte linear-licht sRGB Farbraum, `srgb-linear`, entspricht `srgb`, außer dass die Transferfunktion linear-licht ist, ohne Gamma-Kodierung. Der `srgb-linear` Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit im Farbumfang liegenden Farben von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Definiert von Apple, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum den DCI-P3 Farbumfang, den D65 Weißpunkt und die sRGB-Gamma-Kurve. Es ist ein breiter Farbumfang, typisch für aktuelle weite Farbumfang-Monitore, und ermöglicht lebendigere Grün- und Rottöne als der sRGB-Farbumfang. Der `display-p3` basiert auf `r`, `g` und `b`, mit im Farbumfang liegenden Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB-Farbraum, der entworfen wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50% der sichtbaren Farben, die durch den [CIELab-Farbraum](#cielab-farbräume) spezifiziert sind, können erreicht werden, wobei mehr Cyan-Grün-Töne als in anderen RGB-Farbräumen enthalten sind. In-Gamut-`r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gamma-Funktion, nahe bei, aber nicht genau 1/2,2. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90% der [CIELab-Farben](#cielab-farbräume). In-Gamut-`r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gamma-Funktion, mit einem Wert von 1/1,8 und einem kleinen linearen Teil in der Nähe von Schwarz. Der Weißpunkt ist D50, derselbe, der von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Broadcast-Industrie-Standard für Ultra-High-Definition 4k und 8k Fernseher. Der extrem breite Farbumfang ist in der Lage, nahezu alle sichtbaren realen Farben darzustellen, jenseits der Möglichkeiten der meisten aktuellen Displays. Es wird erwartet, dass die Abdeckung im Laufe der Zeit zunimmt, da sich die Displays verbessern. Im Farbumfang liegende `r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB- (oder CIELab-) Farbraum, auch als L\*a\*b* (oder kurz Lab*) bezeichnet, repräsentiert den gesamten Farbbereich, den Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrotes Rot, während negative Werte das Komplement sind: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b` mit größeren absoluten Werten, die gesättigter sind.

CIELab-Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind dieselben, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farbe als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a`- und `b`-Achsen sind nicht an diese Bereichswerte gebunden, die Referenzen bei der Definition von Prozentwerteingaben und -ausgaben in Bezug auf den `Display P3`-Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum entspricht dem `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbräume

Während Kombinationen aus Rot, Grün und Blau gut geeignet sind, um Farben auf dem Bildschirm darzustellen, korreliert sRGB nicht direkt damit, wie Menschen Farbe wahrnehmen. Die CIE 1931 XYZ- (oder kurz XYZ-) Farbenräume wurden 1931 von der Internationalen Beleuchtungskommission (CIE) eingeführt und repräsentieren die ersten definierten quantitativen Verbindungen zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfenzellen, die Licht wahrnehmen und Spitzen der spektralen Empfindlichkeit in unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Stimulierungsebenen der drei Arten von Zapfenzellen, die prinzipiell jede sichtbare Farbe beschreiben. Der `Y`-Kanal repräsentiert die Helligkeit einer Farbe. Der `Z`-Kanal spiegelt die Menge an Blau in der Farbe wider, ist jedoch nicht identisch mit dem `B` in RGB. Die `X`-Achse ist orthogonal zur Y- und Z-Achse des XYZ-Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz`-Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum an diesen Bereich nicht gebunden ist; diese Werte werden nur als Referenzpunkte zur Definition von Eingabe- und Ausgabeprozentsätzen verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` entspricht dem `xyz-d65`, außer dass D50 als Weißpunkt verwendet wird.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Merkmal
- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) in der Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normfarbsystem) in der Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
