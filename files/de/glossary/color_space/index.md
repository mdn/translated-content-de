---
title: Color space
slug: Glossary/Color_space
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Farbmodelle** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle koordinatenbasierter Farbanordnungen. Ein Farbmodell definiert, wie die Komponenten einer Farbe (zum Beispiel die `h`-, `w`- und `b`-Kanäle einer [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbe) sich auf ein Farbmodell beziehen. Die meisten Farbmodelle sind drei- oder vierdimensionale Raster, die Farben darstellen. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbmodellen ausgedrückt und von einem Farbmodell in ein anderes umgewandelt werden, während sie gleich aussehen.

Farbmodelle kategorisieren und definieren bestimmte Farbbereiche. Jedes Farbmodell wird durch ein mathematisches Modell und ein damit verbundenes Regelwerk definiert. Jedes Farbmodell hat einen definierten [Farbumfang](/de/docs/Glossary/Gamut), der sich auf den spezifischen Bereich bezieht, den es darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung über verschiedene Geräte und Software hinweg.

Der _sRGB_-Farbraum (Standard rot, grün und blau) wurde für das Web erstellt, aber wir sind nicht länger auf diesen Farbraum beschränkt. Das [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbmodelle, und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht noch weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbmodelle.

## Benannte Farbmodelle

Zu den vordefinierten [RGB-Farbmodellen](#rgb-farbmodelle) gehören `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Die vordefinierten [CIELAB-Farbmodelle](#cielab-farbmodelle) umfassen `lab-d50` und `lab-d65`. Die vordefinierten [XYZ-Farbmodelle](#xyz-farbmodelle) sind `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbmodelle sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbmodelle umfassen `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Die polar koordinierten Farbmodelle schließen `hsl`, `hwb`, `lch` und `oklch` ein.

### RGB-Farbmodelle

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten darstellt - Rot, Grün und Blau - die bei Kombination verschiedene Farbtöne erzeugen. sRGB oder "Standard RGB" ist der zugrunde liegende Farbraum für [RGB](/de/docs/Glossary/RGB)-Farben. sRGB soll die Displayspezifikation von PC- und webbasierte Bildgebungssystemen kodifizieren. Es ist jetzt normalerweise der angenommene Farbraum für diejenigen ohne getaggtes oder eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbmodelle, wie das Adobe-RGB-Farbmodell, das einen breiteren [Farbumfang](/de/docs/Glossary/gamut) anzeigen kann als das sRGB-Farbmodell. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In [CSS](/de/docs/Glossary/CSS) können sie als einzelner 24-Bit-Integer in hexadezimaler Notation dargestellt werden (zum Beispiel ist `#add8e6` hellblau), oder in der [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktionsnotation als drei separate Zahlen zwischen 0 und 255 (zum Beispiel `rgb(46 139.5 87)`).

CSS-`<color>`-Werte in den sRGB-Farbmodellen umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weiße, Schwarzheit). Es gibt auch die Farbmodelle `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

Der HSV-Farbraum (Farbton, Sättigung und Wert) und sein Synonym HSB (Farbton, Sättigung und Helligkeit) sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die mathematische Umwandlung dieser verschiedenen Farbnotierungen in sRGB ist einfach. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} jede Farbe sein kann - es ist nicht auf sRGB beschränkt.

Die `rgb()`-Farbfunktion ist nicht die einzige Farbfunktion, die den sRGB-Farbraum darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbmodell

  - : Das sRGB-Farbmodell oder "Standard RGB" ist das standardmäßige RGB- (Rot, Grün, Blau)-Farbmodell. Es wurde geschaffen, um auf Monitoren, Druckern und im Web verwendet zu werden. Es ist das am weitesten verbreitete Farbmodell und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit In-Gamut-Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbmodell

  - : Das vordefinierte linear-light sRGB-Farbmodell, `srgb-linear`, ist dasselbe wie `srgb`, außer dass die Übertragungsfunktion linear-light ohne Gamma-Kodierung ist. Das `srgb-linear`-Farbmodell akzeptiert die drei `r`, `g` und `b` Werte als numerische Parameter, mit In-Gamut-Farben im Bereich von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbmodell

  - : Definiert von Apple, kombiniert der **Display P3**-Farbraum den DCI-P3-Farbumfang, den D65-Weißpunkt und die sRGB-Gamma-Kurve. Es ist ein breiter Farbraum, der typisch für aktuelle Wide-Gamut-Monitore ist und lebendigere Grüntöne und Rottöne als der sRGB-Farbraum ermöglicht. Das `display-p3` basiert auf `r`, `g` und `b`, mit In-Gamut-Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbmodell

  - : `a98-rgb` ist das Adobe® 1998 RGB-Farbmodell, das entwickelt wurde, um alle CMYK-Farben als RGB darzustellen. Etwa 50% der sichtbaren Farben, die vom [CIELab-Farbmodell](#cielab-farbmodelle) spezifiziert sind, können erreicht werden, einschließlich mehr Zyan-Grüntönen als andere RGB-Farbmodelle. In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion, die nahe bei, aber nicht genau 1/2.2 ist. Der Weißpunkt ist D65.

- `prophoto-rgb`

  - : Entwickelt von Kodak, kann das `prophoto-rgb` Farbmodell alle Farben darstellen, die wahrscheinlich in der Natur vorkommen, und etwa 90% der [CIElab-Farben](#cielab-farbmodelle). In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragungskurve ist eine Gamma-Funktion mit einem Wert von 1/1.8 und einem kleinen linearen Bereich in der Nähe von Schwarz. Der Weißpunkt ist D50, derselbe wie beim CIELab.

- `rec2020`

  - : `rec2020` ist ein Standard der Rundfunkbranche für ultra-hochauflösendes 4k- und 8k-Fernsehen. Der Ultra-Wide-Gamut-Farbraum ist in der Lage, fast alle sichtbaren Farben der realen Welt darzustellen, weit über die Fähigkeiten der meisten aktuellen Displays hinaus. Es wird erwartet, dass die Abdeckung im Laufe der Zeit zunimmt, da sich die Anzeigen verbessern. In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Farbton, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB-Farbmodelle

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder kurz Lab*) bekannt, stellt den gesamten Farbumfang dar, den Menschen sehen können. Dieses Farbmodell wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Es drückt Farben als drei Werte aus: L\* für die wahrgenommene Helligkeit und a\* und b\* für die vier einzigartigen Farben der menschlichen Wahrnehmung: Rot, Grün, Blau und Gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen Helligkeits-Achse `L`. Positive Werte entlang der `a`-Achse sind ein purpurrotes Rot, während negative Werte das Komplement sind: Grün. Positive Werte entlang der `b`-Achse sind Gelb und negative sind Blau/Violett. Entsättigte Farben haben kleine Werte für `a` und `b` mit größeren absoluten Werten, die stärker gesättigt sind.

CIELab-Farbfunktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind dieselben, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB-Farbmodellen.

CIELab-Farbmodelle, einschließlich Lab, Lch, Oklab und Oklch, sind geräteunabhängige Farbmodelle.

- `lab-d50` Farbmodell

  - : Drückt Farben als `L` in einem Bereich von `0` bis `100` aus, und `a` und `b` mit einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind nicht durch diese Werte begrenzt, die als Referenzen bei der Definition von Prozentwerteingaben und -ausgaben im Zusammenhang mit dem Farbmodell `Display P3` verwendet werden. Der Weißpunkt ist D50.

- `lab-d65` Farbmodell

  - : Dieses Farbmodell ist dasselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbmodell

  - : Ähnlich wie `lab-d65`, aber der Bereich für `L` ist `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ-Farbmodelle

Während Kombinationen von Rot, Grün und Blau gut zur Darstellung von Farben auf dem Bildschirm funktionieren, entspricht sRGB nicht direkt dem menschlichen Farbempfinden. Die 1931 von der Internationalen Beleuchtungskommission (CIE) geschaffenen CIE 1931 XYZ (oder kurz XYZ) Farbmodelle sind die ersten definierten quantitativen Verbindungen zwischen Wellenlängenverteilungen im elektromagnetischen sichtbaren Spektrum und wahrgenommenen Farben der menschlichen Wahrnehmung.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfenzellen, die auf Licht reagieren und Spitzen der spektralen Empfindlichkeit bei unterschiedlichen Wellenlängen aufweisen. Die Parameter CIE X, Y und Z entsprechen den Stimulusqualitäten der drei Arten von Zapfenzellen, die prinzipiell jede sichtbare Farbe beschreiben. Der `Y`-Kanal repräsentiert die Leuchtdichte einer Farbe. Der `Z`-Kanal reflektiert die Menge an Blau in der Farbe, ist jedoch nicht dasselbe wie das `B` in RGB. Die `X`-Achse ist orthogonal zu den Y- und Z-Achsen des XYZ-Farbraums im 3D-Koordinatensystem.

- `xyz` und `xyz-d65` Farbmodell

  - : Der `xyz`-Bezeichner ist ein Synonym für das `xyz-d65`-Farbmodell. Die Achsen sind nicht auf einen Bereich von `0` bis `1` begrenzt, da das Farbmodell nicht an diesen Bereich gebunden ist; diese Werte werden nur als Bezugspunkte bei der Definition von Prozentwerteingaben und -ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbmodell

  - : `xyz-d50` ist dasselbe wie `xyz-d65`, verwendet jedoch D50 als Weißpunkt.

## Siehe auch

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media`-Funktion
- [CSS Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [sRGB Farbmodell](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbmodell](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CIE 1931 Farbmodell](https://en.wikipedia.org/wiki/CIE_1931_color_space) auf Wikipedia
- [Oklab Farbmodell](https://bottosson.github.io/posts/oklab/)
