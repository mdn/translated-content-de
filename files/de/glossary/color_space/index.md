---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle darauf basierender koordinatenbasierter Farbanordnungen. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbe) zu einem Farbraum in Beziehung stehen. Die meisten Farbräume sind drei- oder vierdimensionale Raster, die Farben repräsentieren. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen transformiert werden, wobei sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Bereiche von Farben. Jeder Farbraum ist durch ein mathematisches Modell und ein zugehöriges Regelset definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich von Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_-Farbraum (standardmäßiges Rot, Grün und Blau) wurde für das Web entwickelt, jedoch sind wir nicht mehr auf diesen Farbraum beschränkt. Das [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume, und das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter, indem es Funktionen zur Definition benutzerdefinierter Farbräume beschreibt.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbräume](#cielab-farbräume) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbräume](#xyz-farbräume) umfassen `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polaren Farbräume umfassen `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt – rote, grüne und blaue Farbkanäle –, die verschiedene Farbtöne erzeugen, wenn sie kombiniert werden. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}}-Farben. sRGB soll die Anzeigespezifikation von PC- und webbasierenden Bildsystemen kodifizieren. Es ist jetzt in der Regel der angenommene Farbraum für diejenigen ohne getaggtes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_-Farbraum, der einen breiteren {{Glossary("gamut", "Gamut")}} von Farben als der _sRGB_-Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Arten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als ein einzelner 24-Bit-Integer in Hexadezimalnotation dargestellt werden (zum Beispiel ist `#add8e6` Hellblau) oder in [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

CSS `<color>`-Werte im sRGB-Farbraum umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weiße, Schwärze). Es gibt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hexadezimalwerten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbnomenklaturen in sRGB ist mathematisch einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede beliebige Farbe sein kann – es ist nicht auf sRGB beschränkt.

Die `rgb()`-Farb-Funktion ist nicht die einzige Farb-Funktion, die den _sRGB_-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_Farbton-Sättigung-Helligkeit_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_Farbton-Weiß-Schwärze_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum

  - : Der sRGB-Farbraum oder "Standard RGB" ist der Standard-RGB (rot, grün, blau) Farbraum. Er wurde entwickelt, um auf Monitoren, Druckern und im Web verwendet zu werden. Es ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit In-Gamut-Werten, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum

  - : Der vordefinierte Linearlicht-sRGB-Farbraum, `srgb-linear`, ist derselbe wie `srgb`, mit der Ausnahme, dass die Transferfunktion linear ist und keine Gamma-Kodierung hat. Der `srgb-linear` Farbraum akzeptiert die drei `r`-, `g`- und `b`-Werte als numerische Parameter, mit In-Gamut-Farben, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `display-p3` Farbraum

  - : Von Apple definiert, kombiniert der [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter)-Farbraum den DCI-P3-Farbgamut, den D65-Weißpunkt und die sRGB-Gamma-Kurve. Es ist ein breit angelegter Farbraum, der für aktuelle Monitore typisch ist, die mehr grüne und rote Farbtöne als der sRGB-Farbgamut ermöglichen. `display-p3` basiert auf `r`, `g` und `b`, mit In-Gamut-Werten, die von `0` bis `1` reichen. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum

  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der entwickelt wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50% der sichtbaren Farben, die durch den [CIELab Farbraum](#cielab-farbräume) spezifiziert sind, können erreicht werden, wobei mehr Cyan-Grün-Töne als in anderen RGB-Farbräumen abgedeckt werden. In-Gamut-`r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion, nahe aber nicht genau 1/2,2. Der Weißpunkt ist D65.

- `prophoto-rgb`

  - : Entwickelt von Kodak, kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90% der [CIElab-Farben](#cielab-farbräume) abdecken. In-Gamut-`r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Die Transferkurve ist eine Gammafunktion, mit einem Wert von 1/1,8 und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe wie im CIELab.

- `rec2020`
  - : `rec2020` ist ein Industriestandard für Rundfunk für Ultra-High-Definition-4k- und 8k-Fernseher. Der ultra-weiter Farbraum kann fast alle sichtbaren, realen Farben darstellen, über die Fähigkeiten der meisten aktuellen Bildschirme hinaus. Es wird erwartet, dass die Abdeckung mit der Verbesserung der Bildschirme im Laufe der Zeit zunimmt. In-Gamut-`r`-, `g`- und `b`-Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbräume

Der CIELAB (oder CIELab)-Farbraum, auch als L\*a\*b\* (oder Lab\* abgekürzt) bezeichnet, repräsentiert das gesamte Farbspektrum, das Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für die wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen Helligkeitsachse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrot, während negative Werte das Gegenstück sind: grün. Positive Werte entlang der `b`-Achse sind gelb und negative sind blau/violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte eine höhere Sättigung bedeuten.

CIELab-Farb-Funktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind gleich, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die Polarkoordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbräumen.

CIELab-Farbräume, zu denen Lab, Lch, Oklab und Oklch gehören, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum

  - : Drückt Farbe aus als `L` im Bereich von `0` bis `100`, und `a` und `b` im Bereich von `-125` bis `125`. Die `a`- und `b`-Achsen sind nicht durch diese Bereichswerte begrenzt, die Referenzen bei der Definition prozentualer Eingaben und Ausgaben im Verhältnis zum `Display P3`-Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum

  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0,4` bis `0,4`.

### XYZ-Farbräume

Obwohl Kombinationen von Rot, Grün und Blau gut geeignet sind, um Farben auf dem Bildschirm darzustellen, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Der von der Internationalen Beleuchtungskommission (CIE) 1931 geschaffene CIE 1931 XYZ (oder kurz XYZ) Farbraum ist die erste definierte quantitative Verbindung zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfenzellen, die Licht wahrnehmen und Spitzen der Spektralempfindlichkeit bei unterschiedlichen Wellenlängen haben. Die CIE X-, Y- und Z-Parameter entsprechen den Stimulationsniveaus der drei Arten von Zapfenzellen, die prinzipiell jede sichtbare Farbe beschreiben. Der `Y`-Kanal repräsentiert die Helligkeit einer Farbe. Der `Z`-Kanal reflektiert die Menge an Blau in der Farbe, ist aber nicht dasselbe wie das `B` in RGB. Die `X`-Achse ist orthogonal zu den Y- und Z-Achsen des XYZ Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum

  - : Der `xyz`-Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte dienen lediglich als Referenzwerte bei der Definition prozentualer Eingaben und Ausgaben. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist derselbe wie `xyz-d65`, außer dass es D50 als Weißpunkt verwendet.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Funktion
- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB-Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB-Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normvalenzsystem) auf Wikipedia
- [Oklab-Farbraum](https://bottosson.github.io/posts/oklab/)
