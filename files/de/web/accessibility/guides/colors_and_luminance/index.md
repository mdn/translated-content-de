---
title: "Webzugänglichkeit: Verständnis von Farben und Leuchtkraft"
short-title: Farben und Leuchtkraft
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Während das Verständnis von Farbe, Leuchtkraft und Sättigung wichtig für Design und Lesbarkeit für alle sehenden Benutzer ist, sind diese Konzepte für Personen mit eingeschränktem Sehvermögen und Farbenblindheit sowie Menschen mit speziellen neurologischen, kognitiven oder anderen Beeinträchtigungen unerlässlich.

Zugänglichkeitsrichtlinien definieren angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die dazu dienen, Benutzern mit farbunempfindlichem Sehen, allgemein bekannt als "Farbenblindheit", zu helfen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Zugänglichkeit. Auf den ersten Blick scheint das Thema einfach. Trotzdem ist es ein komplexes Thema, da die Farbwahrnehmung ebenso mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung ist entscheidend. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Zugänglichkeit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder aufwendig, dass sie allein Zugänglichkeitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, sogar die Pixeldichte und mehr beeinflussen, wie Farbe vom Bildschirm wiedergegeben wird.

Der Abstand des Betrachters vom Bildschirm, der Lichtverhältnisse im Hintergrund, die Gesundheit seiner Augen und vieles mehr beeinflussen, wie die Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist ein weiteres Thema und kann von der allgemeinen Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media), die Entwicklern ermöglichen, Stile basierend auf Benutzervorlieben bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und Farbvorlieben.

Wenn unterstützt, gibt die [Umgebungslichtsensor]-Schnittstelle (/de/docs/Web/API/AmbientLightSensor) das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück, wodurch eine Webseite auf Änderungen der Lichtintensität reagieren und den Text entsprechend anpassen kann. Außerdem ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzervorlieben bestimmte Kontrastniveaus bevorzugen, und automatisch die Pegel anzupassen, je nachdem, wo sich der Benutzer befindet und welche Art von Bildschirm sie verwenden.

### Leuchtkraft und Wahrnehmung

Farbe, Kontrast und Leuchtkraft sind die zentralsten und kritischsten Konzepte, um zugänglichen Webinhalt mit Farbe zu erstellen. Leuchtkraft ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie verwendet wird, Zugänglichkeit für Menschen ermöglicht, die farbenblind sind, sowie für diejenigen, die Farben wahrnehmen können. Der Leuchtkraftkontrast ermöglicht es Farbblinden, Dunkles von Hellem zu unterscheiden.

Die Leuchtkraft muss festgestellt werden, bevor der Kontrast ermittelt werden kann. Wenn von Farbkontrast die Rede ist, beinhalten die W3C-Formeln die Leuchtkraft und nicht nur die Farben ("Tönungen") selbst.

### Terminologie

Terminologie kann verwirrend sein, weil verschiedene Begriffe oft dasselbe beschreiben. "Leuchtkraft" und "Sättigung" sind besonders wichtig, um sie richtig zu verstehen. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen unterscheiden sich "Chroma" und "Sättigung" als zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminanz" und zu anderen Zeiten als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie das Benennen von häufigen Farben, kann offen zur Debatte stehen. Zum Beispiel kann die Farbe "Karminrot" von einigen in Hex-Werten als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir Terminologie, wie sie auf der CSS [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Seite definiert ist.

Wenn man mit Farben arbeitet, ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da verschiedene Farbräume auf unterschiedliche Messsysteme abbilden.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz-Tintenpatronen (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_ und nur den schmalen Bereich reflektieren, mit dem sie assoziiert sind. RGB ist ein additives Farbmodell, das unterschiedliche Anteile an roten, grünen und blauen Lichtern addiert.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser automatisch Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch dominiert aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe der RGB-Farbraum, insbesondere im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>`-Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, Lab und CMYK, unter anderem.

In digitalen Belangen lag vieles der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Deckkraft einer Farbe spezifizieren zu können. Andere Methoden zur Messung von Farbe umfassen Messungen unter Verwendung anderer Farbräume und werden von modernen Displays und Browsern unterstützt. Trotzdem dominieren Farbmessungen im RGB-Farbraum, einschließlich in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel zu OpenGL die Verwendung von RGBA statt sRGB erwähnen. WebGL ist in der Regel im RGBA-Format; siehe ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es innerhalb eines {{Glossary("color_space", "Farbraums")}} wie dem {{Glossary("RGB", "RGB-Farbraum")}} Variationen gibt. Zum Beispiel umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele für die CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jeden ein vollständig deckendes Magenta:

```css
/* named color */
color: magenta;

/* sRGB value with percentage values */
color: rgb(100% 0% 100%);
color: rgb(100% 0% 100% / 100%);

/* by sRGB numeric values */
color: rgb(255 0 255);
color: rgb(255 0 255 / 1);

/* legacy rgb and rgba notation */
color: rgb(100%, 0%, 100%);
color: rgba(255, 0, 255, 1);

/* by sRGB value in hex */
color: #f0f; /* #rgb, a shorthand for #rrggbb */
color: #ff00ff; /* #rrggbb */
color: #f0ff; /* #rgba */
color: #ff00ffff; /* #rrggbbaa */

/* by HSL representation of the sRGB value */
color: hsl(300 100% 50%);
color: hsl(300deg 100% 50% / 100%);

/* by HWB representation of the sRGB value */
color: hwb(300deg 0% 0%);
color: hwb(300 0% 0% / 1);

/* by Lab representation of the sRGB value */
color: lab(60 93.56 -60.5);
color: lab(60 93.56 -60.5 / 1);

/* representation in the CIELAB color spaces */
color: oklch(0.7 0.32 328.37);
color: oklch(0.7 0.32 328.37 / 1);

/* color() function in the XYZ color space */
color: color(xyz-d65 0.59 0.28 0.96);
color: color(xyz-d65 0.59 0.28 0.96 / 1);
```

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/Reference/Values/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Danach werden Hexadezimal-Farbwerte gezeigt. Hexadezimal ist ein Zahlensystem mit der Basis 16, wobei die Ganzzahl von 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen und die Ziffern 0-9 und a-f für 10-15 umfassen. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. So ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll deckend.

Das Beispiel zeigt auch die veraltete Syntax sowohl für [`rgb()` als auch für `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). Die veraltete Syntax für Farb-Funktionen ist durch Kommas getrennt, mit einer separaten Funktion, wenn der Alpha-Kanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit durch Leerzeichen getrennten Werten (statt durch Kommas getrennt), wobei der Alpha-Kanal, falls vorhanden, von einem Schrägstrich vorausgegangen wird. Die moderne Syntax ermöglicht das Mischen von Zahlen und Prozentsätzen und unterstützt das `none`-Schlüsselwort; die durch Kommas getrennte veraltete Syntax nicht.

Die folgenden Beispiele zeigen "HSL", das für _Farbton, Sättigung und Helligkeit_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die durch die Einstellungen erzeugte Farbe befindet sich noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer zirkulären Steuerung zum Anpassen des Farbtons zu erstellen. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtkraft_ beinhalten, was eine erhebliche Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Farbton, Weißheit und Schwärze_ steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/Reference/Values/number) oder ein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) sein. Wenn keine Einheit angegeben ist, wird der Wert als `deg` (Grad) interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele demonstrieren die Darstellung von Magenta unter Verwendung der [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Farb-Funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn man sich anschaut, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer kurzen, dreistellige Hexzahl ausgedrückt werden kann, die in einen rgb-Wert als sechsstellig Hexzahl konvertiert werden kann, die auch in denselben rgb-Wert umgewandelt werden kann, oder als rgba-Wert, der in Prozentsätzen ausgedrückt wird.

RGB ist hardwareorientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die intuitivere [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Notation. Zum Glück konvertieren Browser automatisch von RGB zu HSL, und durch Umschalt-Klick auf Farben in den Entwicklerwerkzeugen des Browsers wird eine Konvertierungsfunktion bereitgestellt.

Neben den Entwicklerwerkzeugen gibt es viele Werkzeuge, die RGB in HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie umwandelt, ist Tom Jewetts "[mini-Farbwähler](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass Farbpicker für Entwicklerwerkzeuge und dieses Tool alle WCAG-[Farbkontrastwerte](https://webaim.org/resources/contrastchecker/) bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) zusätzliche Farbräume, einschließlich der [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) funktionalen Farbnomenklatur und der [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Das gesagt, sRGB ist immer noch der Standard- und bevorzugte Farbraum für Zugänglichkeit aufgrund seiner Allgegenwärtigkeit.

Wo es um Zugänglichkeit geht, werden Standards und Richtlinien derzeit jedoch überwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heutzutage zur Anzeige von Webinhalten verwendeten Systeme gehen von einer sRGB-Codierung aus. Es sei denn, es ist bekannt, dass ein anderer Farbraum verwendet wird, um die Inhalte zu verarbeiten und anzuzeigen, sollten Autoren die Verwendung des sRGB-Farbraums evaluieren. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [Minimal-Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode gibt Werte unter Verwendung der RGB Dezimal-Referenzskala oder über `color(srgb...)` zurück. Zum Beispiel gibt ein Aufruf von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: red` darauf die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurück — die RGB Dezimalreferenz. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt ein Aufruf von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst es Farben in Bezug auf RGB, nicht wie das menschliche Auge Farben wahrnimmt.

### Rot/grüne Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann immer noch über grüne Zapfen wahrgenommen werden, jedoch dunkler als normales Sehen. Sowohl protanope (rotdefiziente) als auch deutane (grünschwäche) Mängel verursachen Schwierigkeiten, Rot von Grün zu unterscheiden.

Entwicklerwerkzeuge können helfen, Farbsehunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Zugänglichkeitsinspektor von Firefox das Simulieren von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Zugänglichkeitspanel.

![Ausschnitt der Firefox-Entwicklerwerkzeuge, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtkraft und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Tönungen") ist ein kritischer Bestandteil, aber die Verwendung von Farben ("Tönungen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt, muss jede Berechnung von Kontrast die Leuchtkraft beinhalten.

Zusätzlich wird die "Form" des Textes selbst eine Rolle spielen. Dünne Buchstaben werden schwerer zu lesen sein als dicke; alle Schriften brauchen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (ungefähr `18.7px`) für `fett` ist. Aussage:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei niedrigem Kontrast leichter zu lesen. Daher ist die Kontrastsanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Palette von Farbauswahlen für großen Text zu verwenden, was hilfreich für das Design von Seiten ist, insbesondere für Titel._

Während größerer Text keinen so großen Farbkontrast mit seinem Hintergrund benötigt wie kleinerer Text, ist die Vergrößerung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird normalerweise als 11.5pt bis 12pt angesehen, was 16px auf dem Bildschirm entspricht. Während kleinerer Text lesbar sein kann — ein Benutzer kann Buchstaben mit ungefähr 70% Genauigkeit erkennen — ist das nicht lesefreundlich. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 benötigt doppelt so viel, etwa eine 31px Schrift. Aus diesem Grund erfordern die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während zu klein dargestellter Text schwer zu lesen ist, gilt dies auch für zu großen Text. Bei Benutzern mit 20/20 Sehvermögen nimmt bei einer Textgröße von mehr als etwa 96px die Lesegeschwindigkeit ab. Außerdem kann bei einer großen Diskrepanz zwischen der kleinsten und größten Schriftgröße auf einer Seite der größere Text weniger lesbar werden, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser alle Texte bei Vergrößerung gleichzeitig vergrößern.

Im Allgemeinen gilt für Zugänglichkeitszwecke: Je mehr Kontrast, desto besser. Das ändert sich mit Animationen. "Sicherere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie in [Drei Blitze oder unterhalb der Schwelle: Verständnis von SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technologie G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtkraft

Es ist der Unterschied in der Leuchtkraft einer Farbe, der es uns ermöglicht, den Kontrast zu sehen. Relative Leuchtkraft wird in der WCAG als "relative Helligkeit eines beliebigen Punktes in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß", definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie im Zusammenhang mit dem RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtkraft, Schwarz hat 0% relative Leuchtkraft (in den meisten, aber nicht allen Veröffentlichungen). Interpretiert nach dem oben genannten W3C-Standard würde dies bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher kommen diese Zahlen von 0 bis 255? Historisch haben Grafik-Engines die Farbkanäle als einzelnes Byte gespeichert, was einem Bereich von Ganzzahlen zwischen 0 und 255 entspricht.

Die Leuchtkraft der Primärfarben ist unterschiedlich. Zum Beispiel hat Gelb eine höhere Leuchtkraft als Blau. Dies wurde durch Design erreicht, _um die weiße Ausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument "[Leuchtkraftkontrast in Farbgraphiken](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist ohne seine Leuchtkomponente bedeutungslos, und sobald die Leuchtkraft festgelegt ist, kann das Farbkontrastverhältnis ermittelt werden.

Wo es um die menschliche Wahrnehmung geht, ist ein Unterschied in der Leuchtkraft wichtiger als ein Farbunterschied. Dies ist wichtig, da die Leuchtkraftkontrast die Entwicklung von Inhalten ermöglicht, die sogar von Farbblinden gesehen werden können. Mit diesem Verständnis kann die Leuchtkraft so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtkraft schwer zu sehen sind, lesbarer gemacht werden können, indem sie mit einer anderen Farbe mit kontrastierender Leuchtkraft kombiniert werden. Eine interessante Studie der NASA über die Farbe Blau hat zum Beispiel festgestellt, dass diese Farbe, die eine niedrige Leuchtkraft hat, lesbar gemacht werden kann, wenn _darauf geachtet wurde, einen ausreichenden Leuchtkraftkontrast zu erreichen_ (Aus dem Artikel, [Designen mit Blau](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)).

Die Berechnungen zur relativen Leuchtkraft sind keine einfachen. Glücklicherweise gibt es [online Leuchtkraft- und Kontrastprüfgeräte](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen zur [Berechnung der relativen Leuchtkraft](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance), die Ihnen helfen können.

## Farben wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönungen ist nicht gleichmäßig verteilt. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf eingestellt, einige Farben mehr als andere zu erkennen. Etwa 65% der Zapfen sind am _empfindlichsten_ für ein Gelb/Grün, reagieren aber auch auf Rot (wir werden diese "rote" Zapfen nennen). 30% sind grünempfindlich und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Zahl ausgleicht.

Tiefblau wird anders wahrgenommen als andere Farben, da die blauen Zapfen nicht zur Leuchtkraft beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Zapfenmosaik mit normalem Sehvermögen, rechts das eines Menschen mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik mit normalem Sehvermögen, rechts das eines Menschen mit Protanopie, einer Form der Farbsehstörung, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen schließen sich zusammen, um die Leuchtkraft zu erzeugen, die wir als Dunkelheit/Helligkeit ohne Rücksicht auf Farbton wahrnehmen können. Getrennt erlauben die roten, grünen und blauen Zapfen dem normalen Sehen, Millionen von Farben wahrzunehmen. Für die Zugänglichkeit ist es wichtig zu wissen, dass unser Gehirn Leuchtkraft separat von der Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtkraft bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtkraft. Die Bilddatenkompression nutzt diese Tatsache aus. Als Beispiel übersampelt der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe bei einem Viertel der Auflösung der Leuchtkraft.

Für die Zugänglichkeit bedeutet dies, dass Leuchtkraftkontrast entscheidend wichtig für Texte ist. Farbe, als Farbton und Farbigkeit, ist wichtig, um _Elemente zu unterscheiden_ wie unterschiedliche Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, den es zu berücksichtigen gilt, ist die Farbe oder Leuchtkraft, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. In dem folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextsensitive Farbwahrnehmung lässt sie unterschiedlich erscheinen; Ihr Gehirn passt die Bildverarbeitung an, basierend darauf, was es denkt, was im Schatten liegt oder nicht.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, wenn sie im Schatten stehen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie scheinen durch den Kontext unterschiedlich zu wirken. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbwahrnehmung werden vom Kontext der nahegelegenen Farben und anderer Merkmale eines Designs oder Bildes beeinflusst. Das macht die Vorhersage von Kontrast herausfordernd. Es handelt sich nicht nur um ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe ebenso sehr mit der Physiologie des Menschen und der Wahrnehmung im Gehirn zu tun hat wie mit der Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtverhältnisse die Fähigkeit zur Wahrnehmung von Farbe und Kontrast beeinflussen. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig in derselben Weise aus hellen in dunkle Bereiche und umgekehrt an. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzers, Text gegen einen Hintergrund zu lesen. Es gibt mindestens zwei Arten der Anpassung: die lokale Anpassung und die Anpassung an eine Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen blauen Text mit einem grauen Hintergrund anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text zu wahrnehmen, wird beeinflusst, obwohl die Umgebungsbeleuchtung des Zimmers sich nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an niedrige Leuchtdichten ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann ein paar Minuten dauern, bis man sich daran gewöhnt hat.

Die Lichteanpassung ist das Gegenteil. Wenn man von einem dunklen Raum ins helle Sonnenlicht geht, geht es schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text in einer Umgebung, in der sich die Lichtverhältnisse im Raum geändert haben, verbessern möchten, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Tönungen") und Zugänglichkeit. Im Allgemeinen richtet sich das Hauptaugenmerk auf die Leuchtkraft, wenn versucht wird, genügend Kontrast zwischen Text und dessen Hintergrund sicherzustellen oder die Möglichkeit zu bewerten, bei Menschen, die anfällig für empfindungsbedingte Anfälle sind, Anfälle auszulösen. Ein Aspekt der Farbe ("Tönungen"), unabhängig von der Leuchtkraft, verdient besondere Aufmerksamkeit im Hinblick auf Zugänglichkeit: das Konzept der Sättigung. Dies liegt an ihrer Fähigkeit, bei anfälligen Menschen Anfälle auszulösen, unabhängig von der Leuchtkraft der Farbe. Wie im [besonderen Fall von Rot](#der_besondere_fall_von_rot) erläutert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass _unabhängig von der Leuchtkraft ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl diese gute Definitionen für "Pigmente" in einem Künstler-Farbset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farben auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während sich die Definition von Sättigung für jeden Farbraum unterscheiden mag, kann Sättigung problemlos gemessen werden. Der Schlüssel ist, zu wissen, in welchem Farbraum man arbeitet und bereit zu sein, ihn gegebenenfalls zu umzuwandeln.

Die Farbräume, die am häufigsten in Betracht gezogen werden, wenn es um Lichtsensibilität geht, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) für _Farbton_, _Weißheit_ und _Schwärze_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben in HSL eine Helligkeit von `0.5`, während sie in HWB einen Wert von `1` haben. Die Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit einem Hex-Wert von `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie haben zwei verschiedene "Tönungen", werden jedoch beide als gesättigte Farben angesehen.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man der Farbe Weiß, Schwarz oder Grau hinzufügt; um das Beispiel weiter zu führen, kann die Helligkeit durch Zugabe von Weiß erhöht werden, die Sättigung verringern. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtkraft

Es gibt einen Verlust an Sättigung an den Extremen der Leuchtkraft und den Extremen von Schwarz und Weiß. In NASAs [Auswirkung der Leuchtkraft auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass es einen Verlust der Sättigung bei niedrigen Leuchtdichten gibt und "… den Verlust der Sättigung bei hohen Leuchtdichten, wobei die Farben sich auf Weiß konvergieren."

## Farbkombinationen

Kontrast allein reicht nicht aus, wenn es um Zugänglichkeitsüberlegungen geht. Im Fall von Animation sind bestimmte Farbkombinationen eher dazu geneigt, bei denjenigen, die anfällig für empfindungsbedingte Anfälle sind, Anfälle auszulösen als andere. Zum Beispiel ist das abwechselnde Flackern zwischen Rot und Blau problematischer als das zwischen Grün und Blau. Es wurde vermutet, dass dies daran liegt, dass die "roten" zapfenempfindlichen Zellen, die sich dazu neigen, um die Fovea zu gruppieren (nahe dem Zentrum), physikalisch an einer anderen Stelle als die "blauen" Zapfenempfindlichen sind, die vom Zentrum an den Rand verlagert sind. Die elektrischen Signale vom Auge zum Gehirn müssen viel verarbeiten, während die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben haben eher die Tendenz, [epileptische Anfälle zu verursachen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten, die der Gehirndynamik zugrunde liegen, können durch einige Farbkombinationen stärker moduliert werden als durch andere. Zum Beispiel verursacht ein rot-blinkender Reiz größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können sich mit bestimmten Beeinträchtigungen überschneiden. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals alleine auf den Farbton, um Details zu differenzieren. Ein ausreichender Leuchtkraftkontrast ist erforderlich.
- Das Grün eines Monitors macht den größten Teil der Leuchtdichte (Licht) aus und wird daher in der Regel ein bedeutender Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine geringe Leuchtkraft. Farben mit geringer Leuchtkraft sollten die dunkleren der kontrastierenden Farben sein. Blau ist auch in der Auflösung sehr niedrig. Es gibt weit weniger blaue Zapfen, und sie sind in unserem peripheren Sichtfeld gestreut und in unserer zentralen Sicht nicht vorhanden. Das menschliche Auge sieht Blau mit einer geringeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von Blau:

- Reines Blau sollte typischerweise die dunkelste von zwei Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es an einer anderen Stelle auf der Netzhaut fokussiert wird als Rot, so dass eine reine rote und eine reine blaue Farbe, die unmittelbar benachbart und berührt sind, "flimmern" können, wenn sie nebeneinander stehen.

## Der besondere Fall von Rot

Nicht alle Farben ("Tönungen") werden von unseren Gehirnen gleich verarbeitet. Die menschliche Physiologie und Psychologie werden allgemein gesagt anders von der Farbe Rot als von anderen Farben beeinflusst. Wir reagieren physiologisch wie psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben eher Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als eine Zugänglichkeitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" die Menschen, die lichtempfindlich sind, helfen kann. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS-{{cssxref("filter")}}-Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/Reference/Values/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/Reference/Values/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/Reference/Values/filter-function).

### Sättigtes Rot

"Sättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologie schaut. Betrachten Sie daher das folgende Bild, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons, svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" entwickelt sich von links nach rechts von am wenigsten gesättigt zu am meisten gesättigt.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot angesehen werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können gut im RGB-Spektrum oder anderen häufig in der Webentwicklung verwendeten Spektren dargestellt werden. Laut der Wikipedia-Seite zu "Rottönen" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen länger als 600nm enthält; der Artikel macht die besondere Bemerkung, dass "Karmin" nahe dem extremen Spektrum liegt. Dies platziert es weit jenseits gängiger Farb-Spektren (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine schlechte Näherung."

### Sättigtes, rotes Blinken

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion bei Menschen mit traumatischer Hirnverletzung beeinträchtigt, erfordert Farbe im roten Spektrum besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei der Untersuchung des _Fototests für Epilepsieanalysen_ fest, dass die Anfallraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes, rotes Blinken reagieren. (Siehe das Video, [Das Analysetool für Fotosensitive Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Kontinuierliches Flackern heller/dunkler mit Raten von mehr als drei Blitzen pro Sekunde hat sich gezeigt, Anfälle bei empfindlichen Menschen auszulösen. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, hochkontrastierte Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren mehrere grundlegende Richtlinien:

1. Einzeln, doppelt oder dreimal in einer Sekunde Blitze sind akzeptabel, aber eine Abfolge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Bei der Anzeige von Licht- und Dunkelstreifen sollte das Muster nicht mehr als fünf Licht-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blinken oder im Kontrast umkehren, oder acht Licht-Dunkel-Paare von Streifen, wenn das Muster unverändert oder kontinuierlich und sanft in eine Richtung driftet.

Für weitere Empfehlungen siehe das Papier [Photic- und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farbe im Sinne von Farbtonen und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern — oder beeinträchtigen.

### Beispiele für den Einfluss von Farbe über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [Eine kulturübergreifende Studie zu den affektiven Bedeutungen von Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Effekte von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch einen positiven Einfluss auf unsere Emotionen haben:** [Emotionale Variationen durch Steuerung des Kontrastes von visuellen Inhalten durch EEG-basierte, tiefgehende Emotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Hinweise auf eine zeitliche Überschätzung von blauen Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf die Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können erhöhte Freude oder Glück bieten:** [Durch "rosarote" Brillen schauen: der Einfluss der Tönung auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Zugänglichkeits-Lernweg](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`Farbe`](/de/docs/Web/CSS/Reference/Properties/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- [Web-Zugänglichkeit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot "eingestellt", dass Augenärzte einen Test mit diesem Farbmuster zum Prüfen der Sehnervenintegrität entwickelt haben.
- [Lichtinduzierte und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
