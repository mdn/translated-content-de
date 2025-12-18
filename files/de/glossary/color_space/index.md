---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 5ba55a6939c0aaf988fc4d34ad7e51c52373a2a6
---

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle aus koordinatenbasierten Farbanordnungen. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`, `w` und `b` Kanäle eines {{cssxref("color_value/hwb")}} Farbwertes) in Bezug auf einen Farbraum stehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen umgewandelt werden, während sie visuell identisch bleiben.

Farbräume kategorisieren und definieren spezifische Farbpaletten. Jeder Farbraum wird durch ein mathematisches Modell und ein zugehöriges Regelwerk definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Farbumfang")}}, der den spezifischen Bereich von Farben bezeichnet, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_ Farbraum (Standard Rot, Grün und Blau) wurde für das Web entwickelt, aber wir sind nicht länger auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) umfassen `xyz-d50` und `xyz-d65` (sowie `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechtwinklig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechtwinklige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen aus drei zugrunde liegenden Komponenten darstellt – den Farbstrahlen Rot, Grün und Blau –, die kombiniert verschiedene Farbtöne erzeugen. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Darstellungsanforderungen von PC- und webbasierenden Bildsystemen kodifizieren. Es wird mittlerweile als der Standardfarbraum angenommen für diejenigen, die kein Farbprofil haben oder bei denen es nicht eingebettet ist.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_ Farbraum, der eine breitere {{Glossary("gamut", "Farbumfang")}} an Farben darstellen kann als der _sRGB_ Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als einzelner 24-Bit-Integer in hexadezimaler Notation (zum Beispiel ist `#add8e6` hellblau) oder in {{cssxref("color_value/rgb")}} funktionale Notation als drei separate Zahlen zwischen 0 und 255 dargestellt werden (zum Beispiel `rgb(46 139.5 87)`).

CSS `<color>` Werte in den sRGB-Farbräumen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißheit, Schwarzheit). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die {{cssxref("color_value/color")}} Funktion.

Der HSV (Farbton, Sättigung und Wert)-Farbraum und sein Synonym HSB (Farbton, Sättigung und Helligkeit) werden in CSS als {{cssxref("color_value/hwb")}} dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbnotationen in sRGB ist mathematisch unkompliziert. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann – es ist nicht auf sRGB beschränkt.

Die `rgb()` Farb-Funktion ist nicht die einzige Farbfunktion, die den _sRGB_ Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden auch verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum oder "Standard RGB" ist der Standardfarbraum für Rot, Grün und Blau. Er wurde für Monitore, Drucker und das Web entwickelt. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit im Bereich liegenden Werten zwischen `0` und `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte linearer sRGB-Farbraum `srgb-linear` ist derselbe wie `srgb`, außer dass die Übertragungsfunktion linear ist und keine Gamma-Kodierung aufweist. Der `srgb-linear` Farbraum akzeptiert die drei `r`, `g`, und `b` Werte als numerische Parameter, mit im Bereich liegenden Farben zwischen `0` und `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Von Apple definiert, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum das DCI-P3 Farbumfang, den D65 Weißpunkt und die sRGB Gammakurve. Es ist ein ultrabreiter Farbraum, typisch für aktuelle Monitore, die lebendigere Grüntöne und Rottöne bieten als der sRGB Farbumfang. Der `display-p3` Raum basiert auf `r`, `g`, und `b` Kanälen, mit im Bereich liegenden Werten zwischen `0` und `1`. Der Weißpunkt ist D65.

- `display-p3-linear` Farbraum
  - : Der `display-p3-linear` vordefinierte Farbraum ist ähnlich wie `display-p3`, außer dass er eine lineare Lichtübertragungsfunktion verwendet und keine Gamma-Kodierung besitzt, was eine höhere Präzision der dargestellten Farben erlaubt. Der `display-p3-linear` Raum basiert auf `r`, `g`, und `b` Kanälen, mit im Bereich liegenden Werten zwischen `0` und `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der entwickelt wurde, um alle CMYK-Farben als RGB zu repräsentieren. Etwa 50 % der sichtbaren Farben gemäß des [CIELab Farbraums](#cielab-farbräume) können erreicht werden und mehr cyan-grün Töne als andere RGB Farbräume umfassen. Im Bereich liegende `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gammafunktion, die nahe, aber nicht exakt bei 1/2,2 liegt. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90 % der [CIELab-Farben](#cielab-farbräume). Im Bereich stehende `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gammafunktion mit einem Wert von 1/1,8 und einem kleinen linearen Abschnitt in der Nähe von Schwarz. Der Weißpunkt ist D50, derselbe, der auch von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Broadcast-Industrie-Standard für Ultra-High-Definition 4k und 8k Fernseher. Der ultraweite Farbraum kann fast alle sichtbaren realen Farben darstellen, jenseits der Fähigkeiten der meisten aktuellen Displays. Die Abdeckung soll im Laufe der Zeit zunehmen, da sich die Displays verbessern. Im Bereich stehende `r`, `g`, und `b` Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv`, und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB- (oder CIELab-) Farbraum, auch als L\*a\*b* (oder Lab* abgekürzt) bezeichnet, stellt den gesamten Farbbereich dar, den Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben der menschlichen Wahrnehmung: Rot, Grün, Blau und Gelb.

Lab ist ein rechtwinkliges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind purpurrot, während negative Werte das Komplement bilden: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative Werte Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte gesättigtere Farben darstellen.

CIELab Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind dieselben, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab Farbräume, einschließlich Lab, LCH, Oklab und OkLCh, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farben als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind nicht auf diese Werte begrenzt, die in Bezug auf die `Display P3` Farbraum als Referenzen bei der Definition von Prozentanzeigeeingaben und -ausgaben verwendet werden. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, mit dem Unterschied, dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0,4` bis `0,4`.

### XYZ-Farbräume

Während Kombinationen aus Rot, Grün und Blau gut geeignet sind, um Farben auf einem Bildschirm darzustellen, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Der 1931 von der Internationalen Beleuchtungskommission (CIE) geschaffene CIE 1931 XYZ (oder XYZ) Farbraum bildet die ersten quantitativen Verbindungen zwischen Verteilungen von Wellenlängen im elektromagnetischen sichtbaren Spektrum und den von Menschen wahrgenommenen Farben.

Menschen mit normalem Sehvermögen haben drei Arten von Zellen, die Licht wahrnehmen, mit Sensibilitätsspitzen in unterschiedlichen Wellenlängen. Die CIE X, Y und Z Parameter entsprechen den Stimuluspegeln der drei Zelltypen, die prinzipiell jede sichtbare Farbe beschreiben. Der `Y` Kanal repräsentiert die Helligkeit einer Farbe. Der `Z` Kanal reflektiert die Blauanteile der Farbe, ist jedoch nicht gleich dem `B` in RGB. Die `X` Achse steht orthogonal zur Y- und Z-Achse im XYZ Farbraum.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen `0` bis `1` Bereich limitiert, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte in der Definition von Prozentanzeigeeingaben und -ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist dasselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut")}} `@media`-Funktion
- {{cssxref("&lt;color&gt;")}} CSS-Datentyp
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/L*a*b-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/XYZ-Farbraum) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
