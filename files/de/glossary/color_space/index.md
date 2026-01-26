---
title: Farbraum
slug: Glossary/Color_space
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

**Farbräume** sind benannte Organisationen von Farben für zugrunde liegende Farbmodelle von koordinatenbasierten Farbarrangements. Ein Farbmodell definiert, wie die Komponenten einer Farbe (z. B. die `h`-, `w`- und `b`-Kanäle eines {{cssxref("color_value/hwb")}} Farbe) sich auf einen Farbraum beziehen. Die meisten Farbräume sind drei- oder vierdimensionale Gitter, die Farben repräsentieren. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Farben können in mehreren Farbräumen ausgedrückt und von einem Farbraum in einen anderen transformiert werden, während sie dennoch gleich aussehen.

Farbräume kategorisieren und definieren spezifische Farbbereiche. Jeder Farbraum wird durch ein mathematisches Modell und ein zugehöriges Regelwerk definiert. Jeder Farbraum hat einen definierten {{Glossary("Gamut", "Gamut")}}, der sich auf den spezifischen Bereich der Farben bezieht, den er darstellen kann. Diese Regeln ermöglichen eine konsistente und reproduzierbare Farbdarstellung auf verschiedenen Geräten und Software.

Der _sRGB_ Farbraum (standard rot, grün und blau) wurde für das Web geschaffen, aber wir sind nicht länger auf diesen Farbraum beschränkt. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) spezifiziert mehrere vordefinierte Farbräume und [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) geht weiter und spezifiziert Funktionen zur Definition benutzerdefinierter Farbräume.

## Benannte Farbräume

Die vordefinierten [RGB-Farbräume](#rgb-farbräume) umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` und `rec2020`. Zu den vordefinierten [CIELAB-Farbräumen](#cielab_farbräume) gehören `lab-d50` und `lab-d65`. Zu den vordefinierten [XYZ-Farbräumen](#xyz_farbräume) gehören `xyz-d50` und `xyz-d65` (und `xyz`, ein Alias für `xyz-d65`).

Farbräume sind entweder [rechteckig oder polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rechteckige Farbräume umfassen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` und `xyz-d65` (oder `xyz`). Zu den polar Farbräumen gehören `hsl`, `hwb`, `lch` und `oklch`.

### RGB-Farbräume

RGB ist ein Farbmodell, das Farben als Mischungen von drei zugrunde liegenden Komponenten — rot, grün und blau Farbkanäle — darstellt, die bei Kombination verschiedene Farbtöne erzeugen. sRGB, oder "Standard RGB", ist der zugrunde liegende Farbraum für {{Glossary("RGB", "RGB")}} Farben. sRGB soll die Anzeige-Spezifikation von PC und {{Glossary("world_wide_web", "Web")}} basierten Bildsystemen kodifizieren. Es ist jetzt üblicherweise der angenommene Farbraum für diejenigen ohne Markierung oder ohne ein eingebettetes Farbprofil.

Es gibt mehrere RGB-Farbräume, wie den _Adobe RGB_ Farbraum, der einen breiteren {{Glossary("gamut", "Gamut")}} von Farben als der _sRGB_ Farbraum darstellen kann. Die Koordinaten in _sRGB_ und _Adobe RGB_ (`a98-rgb`) sind unterschiedlich. Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie als eine einzige 24-Bit-Ganzzahl in hexadezimaler Notation dargestellt werden (zum Beispiel ist `#add8e6` hellblau) oder in {{cssxref("color_value/rgb")}} Funktionalschreibweise als drei separate Zahlen zwischen 0 und 255 (zum Beispiel, `rgb(46 139.5 87)`).

CSS `<color>` Werte im sRGB Farbraum umfassen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (Farbton, Sättigung, Helligkeit) und {{cssxref("color_value/hwb", "hwb()")}} (Farbton, Weißanteil, Schwarzanteil). Es gibt auch die `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` Farbräume für die {{cssxref("color_value/color")}} Funktion.

Der HSV (Hue, Sättigung und Wert) Farbraum und sein Synonym HSB (Hue, Sättigung und Helligkeit) werden in CSS als {{cssxref("color_value/hwb")}} dargestellt. Benannte Farben sind einfach Schlüsselwörter, die bestimmten Hex-Werten zugeordnet sind. Die Umwandlung dieser verschiedenen Farbnotationen in sRGB ist mathematisch unkompliziert. Beachten Sie, dass {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} jede Farbe sein kann — es ist nicht auf sRGB beschränkt.

Die `rgb()` Farb-Funktion ist nicht die einzige Farb-Funktion, die den _sRGB_ Farbraum darstellen kann. Zylindrische Koordinatensysteme wie das [`HSL`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (_Hue-Sättigung-Helligkeit_) oder [`HWB`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (_Hue-Weißanteil-Schwarzanteil_) Farbmodelle werden ebenfalls verwendet, um eine sRGB-Farbe im Web darzustellen.

- `srgb` Farbraum
  - : Der sRGB-Farbraum, oder "Standard RGB", ist der standard RGB (rot, grün, blau) Farbraum. Er wurde geschaffen, um auf Monitoren, Druckern und im Web verwendet zu werden. Er ist der am weitesten verbreitete Farbraum und wird von den meisten Betriebssystemen, Softwareprogrammen, Monitoren und Druckern unterstützt. sRGB basiert auf `r`, `g` und `b`, mit in-Gamut Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `srgb-linear` Farbraum
  - : Der vordefinierte Linearlicht-sRGB Farbraum, `srgb-linear`, ist derselbe wie `srgb`, außer dass die Transferfunktion Linearlicht ohne Gamma-Kodierung ist. Der `srgb-linear` Farbraum akzeptiert die drei `r`, `g` und `b` Werte als numerische Parameter, mit in-Gamut Farben von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3` Farbraum
  - : Definiert von Apple, der [**Display P3**](https://registry.color.org/rgb-registry/displayp3) Farbraum kombiniert den DCI-P3 Farbgamut, den D65 Weißpunkt und die sRGB Gamma-Kurve. Es ist ein weiter Gamut-Raum, typisch für aktuelle Weit-Gamut-Monitore, die lebendigere Grüntöne und Rottöne ermöglichen als der sRGB Farbgamut. Der `display-p3` Raum basiert auf `r`, `g` und `b` Kanälen, mit in-Gamut Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `display-p3-linear` Farbraum
  - : Der `display-p3-linear` vordefinierte Farbraum ist ähnlich wie `display-p3`, außer dass er eine Linearlicht-Transferfunktion verwendet und keine Gamma-Kodierung hat, was eine höhere Präzision in den angezeigten Farben ermöglicht. Der `display-p3-linear` Raum basiert auf `r`, `g` und `b` Kanälen, mit in-Gamut Werten von `0` bis `1`. Der Weißpunkt ist D65.

- `a98-rgb` Farbraum
  - : `a98-rgb` ist der Adobe® 1998 RGB Farbraum, der dazu entworfen wurde, alle CMYK-Farben als RGB darzustellen. Etwa 50% der sichtbaren Farben, die durch den [CIELab Farbraum](#cielab_farbräume) spezifiziert werden, können erreicht werden, mit mehr cyan-grünen Tönen als andere RGB-Farbräume. In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragskurve ist eine Gamma-Funktion, nahe bei, aber nicht genau 1/2.2. Der Weißpunkt ist D65.

- `prophoto-rgb`
  - : Entwickelt von Kodak kann der `prophoto-rgb` Farbraum alle Farben darstellen, die wahrscheinlich in der Natur vorkommen und etwa 90% der [CIELab Farben](#cielab_farbräume). In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Die Übertragskurve ist eine Gamma-Funktion, mit einem Wert von 1/1.8 und einem kleinen linearen Abschnitt nahe Schwarz. Der Weißpunkt ist D50, derselbe, der auch von CIELab verwendet wird.

- `rec2020`
  - : `rec2020` ist ein Rundfunkindustrie-Standard für Ultra-High-Definition 4k und 8k Fernseher. Der ultraweite Gamut Raum ist in der Lage, fast alle sichtbaren realen Farben darzustellen, jenseits der Fähigkeiten der meisten aktuellen Displays. Die Abdeckung wird voraussichtlich im Laufe der Zeit zunehmen, wenn sich die Displays verbessern. In-Gamut `r`, `g` und `b` Werte reichen von `0` bis `1`. Der Weißpunkt ist D65.

> [!NOTE]
> Zusätzliche zylindrische RGB-Räume, die nicht in der CSS-Spezifikation enthalten sind, umfassen: `HSI` (Hue, Sättigung und Intensität), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` und `Cubehelix`.

### CIELAB Farbräume

Der CIELAB (oder CIELab) Farbraum, auch als L\*a\*b* (oder Lab* abgekürzt) bezeichnet, repräsentiert den gesamten Bereich von Farben, die Menschen sehen können. Dieser Farbraum wurde von der Internationalen Beleuchtungskommission (CIE) definiert. Er drückt Farbe als drei Werte aus: L\* für wahrgenommene Helligkeit, und a\* und b\* für die vier einzigartigen Farben des menschlichen Sehens: rot, grün, blau und gelb.

Lab ist ein rechteckiges Koordinatensystem mit einer zentralen `L`-Achse für die Helligkeit. Positive Werte entlang der `a`-Achse sind ein purpurnes Rot, während negative Werte das Komplement sind: grün. Positive Werte entlang der `b`-Achse sind gelb und negative sind blau/violett. Entsättigte Farben haben kleine Werte für `a` und `b`, wobei größere absolute Werte gesättigter sind.

CIELab Farb-Funktionen umfassen {{CSSXref("color_value/lab", "lab()")}} (Helligkeit, a-Achse, b-Achse) und {{CSSXref("color_value/lch", "lch()")}} (Helligkeit, Chroma, Farbton) sowie {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}. Die Helligkeitswerte sind die gleichen, aber `lch()` und `oklch` sind polare, zylindrische Koordinatensysteme, die polare Koordinaten `C` (Chroma) und `H` (Farbton) anstelle von Achsen verwenden.

> [!NOTE]
> Der Farbton und die Helligkeit in `lch()` und `oklch` unterscheiden sich von den gleichnamigen Werten in {{cssxref("color_value/hsl", "hsl()")}} oder anderen sRGB Farbräumen.

CIELab Farbräume, einschließlich Lab, LCH, Oklab und OkLCh, sind geräteunabhängige Farbräume.

- `lab-d50` Farbraum
  - : Drückt Farben aus als `L` in einem Bereich von `0` bis `100`, und `a` und `b` in einem Bereich von `-125` bis `125`. Die `a` und `b` Achsen sind nicht durch diese Bereichswerte beschränkt, die Referenzen bei der Definition von Prozent-Eingaben und -Ausgaben im Verhältnis zum `Display P3` Farbraum sind. Der Weißpunkt ist D50.

- `lab-d65` Farbraum
  - : Dieser Farbraum ist derselbe wie `lab-d50`, außer dass der Weißpunkt D65 ist.

- `oklab` Farbraum
  - : Ähnlich dem `lab-d65`, aber der Bereich für `L` ist von `0` bis `1`, und `a` und `b` reichen von `-0.4` bis `0.4`.

### XYZ Farbräume

Während Kombinationen von rot, grün und blau gut funktionieren, um Farben auf dem Bildschirm darzustellen, entspricht sRGB nicht direkt der menschlichen Farbwahrnehmung. Erstellt von der Internationalen Beleuchtungskommission (CIE) im Jahr 1931, sind die CIE 1931 XYZ (oder XYZ kurz) Farbräume die ersten definierten quantitativen Verbindungen zwischen der Verteilung von Wellenlängen im elektromagnetischen sichtbaren Spektrum und den wahrgenommenen Farben im menschlichen Sehen.

Menschen mit normalem Sehvermögen haben drei Arten von Zapfenzellen, die Licht wahrnehmen, mit Gipfeln der spektralen Empfindlichkeit bei unterschiedlichen Wellenlängen. Die CIE X, Y und Z Parameter entsprechen den Reizeniveaus der drei Arten von Zapfenzellen, die im Prinzip jede sichtbare Farbe beschreiben. Der `Y` Kanal stellt die Leuchtdichte einer Farbe dar. Der `Z` Kanal spiegelt die Menge an Blau in der Farbe wider, ist aber nicht dasselbe wie das `B` in RGB. Die `X` Achse ist orthogonal zur Y- und Z-Achse des XYZ Farb-3D-Koordinatensystems.

- `xyz` und `xyz-d65` Farbraum
  - : Der `xyz` Bezeichner ist ein Synonym für den `xyz-d65` Farbraum. Die Achsen sind nicht auf einen Bereich von `0` bis `1` beschränkt, da der Farbraum nicht an diesen Bereich gebunden ist; diese Werte werden nur als Referenzpunkte bei der Definition von Prozent-Eingaben und -Ausgaben verwendet. Der Weißpunkt ist D65.

- `xyz-d50` Farbraum
  - : `xyz-d50` ist dasselbe wie `xyz-d65`, außer dass D50 als Weißpunkt verwendet wird.

## Siehe auch

- {{cssxref("@media/color-gamut")}} `@media` Merkmal
- {{cssxref("&lt;color&gt;")}} CSS Datentyp
- [sRGB Farbraum](https://webstore.iec.ch/en/publication/6168)
- [CIELAB Farbraum](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CIE 1931 Farbraum](https://de.wikipedia.org/wiki/CIE-Normfarbtafel) auf Wikipedia
- [Oklab Farbraum](https://bottosson.github.io/posts/oklab/)
