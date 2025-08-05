---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

**Farbräume** sind benannte Organisationen von Farben für zugrundeliegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie sich die Komponenten einer Farbe (z. B. die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farbe) zu einem Farbraum verhalten. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen transformiert werden, während sie immer noch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Bereiche von Farben. Jeder Farbraum wird durch ein mathematisches Modell und ein zugehöriges Regelwerk definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_-Farbraum (standardmäßig Rot, Grün und Blau) wurde für das Web erstellt, aber wir sind nicht mehr auf diesen Farbraum beschränkt. Das [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) beinhalten `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) beinhalten `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) beinhalten `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrundeliegenden Komponenten darstellt — Rot-, Grün- und Blaukanäle —, die bei Kombination verschiedene Nuancen erzeugen. sRGB oder "Standard RGB" ist der zugrundeliegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Display-Spezifikation von PC- und {{Glossary("world_wide_web", "Web")}}-basierten Bildsystemen kodifizieren. Es ist nun üblicherweise der angenommene Farbraum für diejenigen, die kein markiertes oder eingebettetes Farbprofil haben.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der einen breiteren {{Glossary("gamut", "Gamut")}} an Farben darstellen kann als der _sRGB_-Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als einzelne 24-Bit-Zahl in hexadezimaler Notation dargestellt werden (zum Beispiel ist `#add8e6` ein helles Blau) oder in [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

CSS-`<color>`-Werte in den sRGB-Farbräumen beinhalten {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißanteil, Schwarzanteil). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten hexadezimalen Werten zugeordnet sind. Das Konvertieren dieser verschiedenen Farbdarstellungen in sRGB ist mathematisch unkompliziert. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann — es ist nicht auf sRGB beschränkt.

Die `rgb()`-Farb-Funktion ist nicht die einzige Farbfunktion, die den _sRGB_-Farbraum repräsentieren kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (Farbton-Sättigung-Licht) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (Farbton-Weiße-Schwarze) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum, oder "Standard RGB", ist der standardmäßige RGB (Rot, Grün, Blau) Farbraum. Er wurde für die Verwendung auf Monitoren, Druckern und dem Web erstellt. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b` mit Werten im Gamut-Bereich von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte Linearlicht-sRGB-Farbraum, `srgb-linear`, ist der gleiche wie `srgb`, außer dass die Transferfunktion linear-light ohne Gamma-Codierung ist. Der `srgb-linear` Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit Farben im Gamut von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Definiert von Apple, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter)-Farbraum den DCI-P3-Farbumfang, den Weißpunkt D65 und die sRGB-Gammakurve. Es ist ein weiter Gamut-Raum, der typisch für aktuelle Wide-Gamut-Monitore ist und ermöglicht lebendigere Grüns und Rottöne als der sRGB-Farbumfang. Der `display-p3` basiert auf `r`, `g` und `b`, mit Werten im Gamut von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, entworfen, um alle CMYK-Farben als RGB darzustellen. Ungefähr 50% der sichtbaren Farben, die im [CIELab-Farbraum](#cielab-farbräume) spezifiziert sind, können erreicht werden, wobei mehr Cyan-Grün-Nuancen als andere RGB-Farbräume umfasst werden. Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Die Übertragungskurve ist eine Gammakurve, nahe an, aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die in der Natur wahrscheinlich auftreten, und etwa 90% von [CIELab-Farben](#cielab-farbräume). Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Die Übertragungskurve ist eine Gammakurve mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe, der von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Rundfunkindustrie-Standard für Ultra-High-Definition-4k- und 8k-Fernseher. Der ultraweite Farbraum kann fast alle sichtbaren realen Weltfarben darstellen, jenseits der Fähigkeiten der meisten derzeitigen Displays. Es wird erwartet, dass die Abdeckung im Laufe der Zeit zunimmt, da sich die Anzeigen verbessern. Werte im Gamut für `r`, `g` und `b` reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB- (oder CIELab-) Farbraum, auch als L\*a\*b* (oder Lab* kurz) bezeichnet, repräsentiert den gesamten Farbumfang, den Menschen sehen können. Diese Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die perzeptuelle Helligkeit und a\* und b\* für die vier einzigartigen Farben der menschlichen Sicht: Rot, Grün, Blau und Gelb.

Lab ist ein rechtwinkliges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpuriges Rot, während negative Werte das Gegenteil sind: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere Absolutwerte gesättigter sind.

CIELab-Farb-Funktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind dieselben, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farben als `L` in einem Bereich von `0` bis `100` aus, während `a` und `b` in einem Bereich von `-125` bis `125` liegen. Die `a`- und `b`-Achsen sind nicht durch diese Bereichswerte gebunden, die Referenzen bei der Definition von Prozent-Eingaben und -Ausgaben in Bezug auf den `Display P3`-Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` liegt von `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbräume

Während Kombinationen von Rot, Grün und Blau gut geeignet sind, um Farben auf Bildschirmen darzustellen, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Erstellt von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die CIE 1931 XYZ-Farbräume (oder kurz XYZ) die ersten definierten quantitativen Verbindungen zwischen Verteilung von Wellenlängen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehen haben drei Arten von Zapfenzellen, die Licht wahrnehmen und unterschiedliche spektrale Empfindlichkeiten bei unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Stimulationsniveaus der drei Arten von Zapfenzellen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y`-Kanal repräsentiert die Leuchtdichte einer Farbe. Der `Z`-Kanal spiegelt die Menge an Blau in der Farbe wider, ist jedoch nicht dasselbe wie das `B` in RGB. Die `X`-Achse ist orthogonal zu der Y- und Z-Achse des XYZ-Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz`-Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte bei der Definition von Prozent-Eingaben und -Ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist derselbe wie `xyz-d65`, außer dass er D50 als Weißpunkt verwendet.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Feature
- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB-Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB-Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931-Farbraum](https://de.wikipedia.org/wiki/CIE_1931_Farbraum) auf Wikipedia
- [Oklab-Farbraum](https://bottosson.github.io/posts/oklab/)
