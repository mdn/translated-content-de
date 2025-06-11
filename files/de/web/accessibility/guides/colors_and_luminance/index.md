---
title: "Web-Zugänglichkeit: Farben und Leuchtdichte verstehen"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Während das Verständnis von Farben, Leuchtdichte und Sättigung wichtig für Design und Lesbarkeit für alle sehenden Nutzer ist, sind sie unerlässlich für diejenigen mit eingeschränktem Sehvermögen und Farbsehstörungen sowie für Personen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen.

Zugänglichkeitsrichtlinien definieren angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Leitlinien, um Nutzern mit farbunempfindlichen Augen, allgemein als "Farbenblindheit" bezeichnet, zu helfen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Personen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Einsatz ist ein wesentlicher Bestandteil der Barrierefreiheit. An der Oberfläche scheint das Thema einfach zu sein. Es ist jedoch ein komplexes Thema, da die Farbwahrnehmung ebenso viel mit der Physiologie des Auges und der Gehirnverarbeitung des Menschen zu tun hat wie mit dem Licht, das von einem Computerbildschirm abgegeben wird.

### Umwelt und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung einer Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung dieser gleichen Farbe auf diesem gleichen Computermonitor in einem dunklen Raum. Bezüglich der Barrierefreiheit haben bestimmte Farbkombinationen einen größeren Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie allein Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, sogar Pixeldichten und mehr beeinflussen, wie die Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters vom Bildschirm, der umgebende Hintergrund, die Gesundheit seiner Augen und vieles mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie in seine Augen gelangt ist, ist noch ein anderes Thema und kann durch die allgemeine Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), mit denen Entwickler Stile basierend auf Benutzereinstellungen bereitstellen können, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück, wodurch eine Webseite über jede Änderung der Lichtintensität informiert werden kann und folglich den Text entsprechend anpasst. Zusätzlich ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzereinstellungen bevorzugte Kontrastpegel anzeigen, und Passen Sie die Pegel automatisch an, je nach Standort des Benutzers und welche Art von Bildschirm sie verwenden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und entscheidendsten Konzepte, um barrierefreie Webinhalte mit Farben zu erstellen. Die Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, Barrierefreiheit für diejenigen ermöglicht, die farbenblind sind, sowie für diejenigen, die Farben wahrnehmen können. Der Leuchtdichtekontrast ermöglicht es den Farbenblinden, Dunkelheit von Helligkeit zu unterscheiden.

Die Leuchtdichte muss festgelegt werden, bevor der Kontrast angepasst wird. Wenn man über Farbkontrast spricht, verwendet die W3C-Formel Leuchtdichte, nicht nur die Farben ("Hues") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, weil oft verschiedene Begriffe dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, richtig zu verstehen. Zum Beispiel ist "Sättigung" in manchen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Helligkeit" und manchmal als "Lichtheit" bezeichnet. Selbst etwas scheinbar Einfaches, wie das Benennen üblicher Farben, kann umstritten sein. Zum Beispiel kann die Farbe "Crimson Red" in Hex-Werten von einigen als `#990000` beschrieben werden und von anderen als `#DC143C`. Für dieses Dokument verwenden wir die Terminologie, wie sie auf der CSS [`<named-color>`](/de/docs/Web/CSS/named-color) Seite definiert ist.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume unterschiedlichen Messsystemen zugeordnet sind.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Tintenpatronen für Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Farben spezifische Wellenlängen des Lichts _entfernen_, sodass nur der enge Bereich reflektiert wird, mit dem jede Farbe assoziiert ist. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulichtern hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX, RGB und HSL-Farbräume unterschiedlich notiert werden, wandeln Browser Werte zwischen diesen Farbnotationen automatisch um. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch, aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung von Farbausgabe, werden die meisten Berechnungen in diesem Dokument im RGB-Farbraum angenommen und sehr spezifisch im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie am [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) ersichtlich wird, einschließlich RGB, RGB-Decimale, RGB-Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderen.

Bei digitalen Belangen befindet sich ein Großteil der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird um "Alpha" — RGBA — erweitert, um die Spezifikation der Farbopazität zu erlauben. Andere Methoden zur Farbmessung beinhalten Messungen in anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch überwiegen Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) bieten Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zu OpenGL auf die Verwendung von RGBA anstelle von sRGB verweisen. WebGL ist normalerweise im RGBA-Format; sehen Sie ein Beispiel dafür in "[Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es sogar innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}} Farbraum, Variationen gibt. Zum Beispiel beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der in CSS verwendeten Notationen, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jede eine vollständig opake Magenta:

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

/* by LAB representation of the sRGB value*/
color: lab(60 93.56 -60.5);
color: lab(60 93.56 -60.5 / 1);

/* representation in the CIELAB color spaces */
color: oklch(0.7 0.32 328.37);
color: oklch(0.7 0.32 328.37 / 1);

/* color() function in the XYZ color space */
color: color(xyz-d65 0.59 0.28 0.96);
color: color(xyz-d65 0.59 0.28 0.96 / 1);
```

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz setzen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt mit einer Zahl von 0 bis 255 setzen.

Dargestellt danach sind Hex-Farbwerte. Hexadezimal ist ein nummerisches System mit Basis 16, bei dem der Integer von 0 bis 255 durch zwei Ziffern im Bereich von 0 bis 15 dargestellt wird, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Also ist `ff` = `255`, `00` = `0`, und `d5` = `200`. Das '#' Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einfachere Ziffern dargestellt werden, die der Browser duplizieren wird. Daher ist `f00` dasselbe wie `ff0000`. Wenn eine vierte Gruppe von Zahlen vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtig ist und daher weniger transparent. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1`, und `100%` für vollständig opak.

Das Beispiel zeigt auch die legacy Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farb-Funktionen ist kommagetrennt, mit einer separaten Funktion, wenn der Alphakanal einbezogen ist. Neue Farb-Funktionen haben nur eine Syntax mit leerzeichengetrennten (anstelle von kommagetrennten) Werten, wobei der Alpha-Wert, falls vorhanden, von einem Schrägstrich gefolgt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das `none` Schlüsselwort; die kommagetrennte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation und Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die aus den Einstellungen erzeugte Farbe befindet sich immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche mit einem Drehknopf oder einer Kreissteuerung zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Lichtheit_ und nicht _Leuchtdichte_ integrieren, was eine wichtige Überlegung ist.

Das nächste Beispiel zeigt "HWB", was für _Hue, Whiteness und Blackness_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) sein. Wenn einheitenlos, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), und [`color()`](/de/docs/Web/CSS/color_value/color)-Farb-Funktionen.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Beim Betrachten, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe in einem abgekürzten, dreistelligen Hex-Wert ausgedrückt werden kann, der zu einem RGB-Wert als sechsstelligem Hex-Wert konvertiert, der auch in denselben RGB-Wert konvertiert, oder als RGBA-Wert, ausgedrückt in Prozentsätzen.

RGB ist hardwareorientiert und spiegelt die Verwendung von Bildröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation. Zum Glück konvertieren die Browser automatisch von RGB zu HSL, und ein Shift-Klick auf Farben in den Entwickler-Tools des Browsers bietet Konvertierungsfunktionalität.

Zusätzlich zu den Entwickler-Tools gibt es viele Tools, die RGB zu HSL für Sie konvertieren können und sowohl die RGB-Hexadezimal als auch die CSS-Funktionssyntax anbieten. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass sowohl die Entwickler-Tools Farbenwähler als auch dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bieten.

![Farbenwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) die Ergänzung weiterer Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-funktionale Farbnotationen und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB immer noch der Standard und bevorzugte Farbraum für die Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Wenn es um Barrierefreiheit geht, sind jedoch Standards und Richtlinien derzeit überwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf die Farbkontrast-Verhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Webinhalten gehen von sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums evaluieren. Bei der Verwendung anderer Farbräume sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte mit der RGB-Decimale-Referenzskala oder über `color(srgb...)` zurück. Wenn man beispielsweise `Window.getComputedStyle()` auf einem `<div>` mit `background-color: #ff0000` aufruft, wird die berechnete Hintergrundfarbe als `rgb(255 0 0)`—die RGB-Decimale-Referenz—zurückgegeben. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt der Aufruf von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da sie an Computerhardware gebunden ist, misst `Window.getComputedStyle()` die Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot/Grün-Farbenblindheit

Protanopie ist eine Farbsehsstörung, bei der das Auge keine Rot-Zapfen hat; sRGB kann immer noch über Grün-Zapfen gesehen werden, jedoch dunkler als normalerweise. Sowohl Protan (rot-defizient) als auch Deutan (grün-defizient) verursachen Schwierigkeiten beim Unterscheiden _zwischen_ Rot und Grün.

Entwicklertools können helfen, Unterschiede im Farbsehen direkt in Ihrem Browser zu simulieren. Beispielsweise ermöglicht der Accessibility Inspector von Firefox das Simulieren von Protanopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich.

![Ausschnitt der Firefox-Entwicklertools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Hues") ist ein kritischer Bestandteil, aber die Verwendung von Farbe allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts die Leuchtdichte einschließen.

Darüber hinaus wird auch die "Form" des Textes wichtig sein. Dünne Buchstaben werden schwieriger zu lesen sein als dicke; alle Schriftarten benötigen Raum, um "zu atmen", um von Menschen wahrgenommen zu werden.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (ungefähr `18,7px`) für "bold" Text. Es wird ausgeführt:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei niedrigerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht Autoren eine größere Vielfalt von Farbwahlmöglichkeiten für großen Text, was für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Obwohl größerer Text nicht so großen Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist eine Vergrößerung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird im Allgemeinen als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift möglicherweise lesbar ist — ein Benutzer kann Buchstaben mit ~70% Genauigkeit erkennen — ist das nicht leserlich. Eine 16px-Schriftgröße ist allgemeiner Lesbarkeit bei normalem Sehvermögen. Jemand mit 20/40 benötigt etwa das Doppelte, etwa eine 31px-Schrift. Deshalb verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu klein angezeigter Text schwer zu lesen ist, ist es auch ein zu großer Text. Für Benutzer mit 20/20-Sehvermögen nimmt die Lesegeschwindigkeit bei einer Schriftgröße von mehr als etwa 96px ab. Auch wenn es einen großen Unterschied zwischen der kleinsten und der größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser alle Texte vergrößern, wenn der Benutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheitszwecke: Je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Für mehr über Farbkontrast in Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Außerdem müssen auch Symbole einen ausreichenden Kontrast für die Wahrnehmung haben. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der uns ermöglicht, den Kontrast zu sehen. Die relative Leuchtdichte ist in WCAG definiert als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß."

Diese Aussage ist natürlich korrekt, kann aber verwirrend sein, wenn sie im Zusammenhang mit dem RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht in allen Schriften). Bei der Interpretation des oben genannten W3C-Standards würde dies bedeuten, dass weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und schwarz, normiert auf 0, einen RGB-Wert von `rgb(0 0 0)` haben würde. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was vielleicht intuitiver ist.

Woher kommen diese Zahlen von 0 bis 255? Historisch haben Grafikmodule die Farbkanäle als ein einzelnes Byte gespeichert, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben unterscheiden sich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde entworfen, _um die Weißausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichte-Komponente, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgestellt werden.

Was die menschliche Wahrnehmung betrifft, ist ein Unterschied in der Leuchtdichte wichtiger als ein Farbunterschied. Dies ist wichtig, da ein Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die sogar von Farbblinden gesehen werden können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass schwer sichtbare Farben aufgrund ihrer niedrigen Leuchtdichte lesbarer gemacht werden, indem diese Farben gegen eine andere mit kontrastierender Leuchtdichte platziert werden. Eine interessante Studie der NASA über die Farbe Blau stellte beispielsweise fest, dass diese Farbe, die eine geringe Leuchtdichte aufweist, lesbar gemacht werden kann, wenn _darauf geachtet wird, einen ausreichenden Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen zur relativen Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Leuchtdichte- und Kontrastchecker](https://www.siegemedia.com/contrast-ratio), und sogar Anleitungen, wie man [relative Leuchtdichte berechnet](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbe wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am meisten_ empfindlich gegenüber einem Gelb/Grün, reagieren jedoch auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grün empfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen gibt als die beiden anderen Typen, sind diese Zapfen sehr empfindlich, was ihre geringen Zahlen teilweise ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da die blauen Zapfen nicht zur Leuchtdichte beitragen und wir deutlich weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Zapfenmosaik des Standardsehens zu sehen, und rechts das eines Protanopikers, der die roten Zapfen vermisst.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik des Standardsehens zu sehen, und rechts das eines Protanopikers, einer Form der Farbsehsstörung, bei der dieser die roten Zapfen vermisst. (Illustration von Mark Fairchild von der RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verschmelzen, um Leuchtdichte zu schaffen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Tons betrachten können. Getrennt ermöglichen die roten, grünen und blauen Zapfen dem Standardsehen die Wahrnehmung von Millionen von Farben. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte sorgt für feine visuelle Details, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtdichte. Bilddatenkomprimierung nutzt diese Tatsache. Ein Beispiel dafür ist der [h.264 Video Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs), der Farbe mit einem Viertel der Auflösung der Leuchtdichte sampelt.

Für Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast für Text entscheidend wichtig ist. Farbe, als Farbton und Farbigkeit, ist wichtig, um _Gegenstände zu unterscheiden_, wie unterschiedliche Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt zu berücksichtigen ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextempfindliche Farbperzeption lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend auf dem an, was es als Schatten oder nicht ansieht.

![Ein Bild eines Schachbretts, auf dem identische Farben unterschiedlich erscheinen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Licht- und Farbempfinden wird durch den Kontext der nahegelegenen Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Dies macht Kontrastvorhersagen herausfordernd. Es ist nicht nur ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst: Farbe hat ebenso viel mit menschlicher Physiologie und Wahrnehmung im Gehirn zu tun, wie es mit der Messung von Licht von einem Computerbildschirm zu tun hat. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an, wenn wir von hellen in dunkle Bereiche gehen und umgekehrt. Dies liegt an der physiologischen Beschaffenheit unserer Augen. Dies beeinflusst die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an die Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser ansieht. Wenn Sie beispielsweise blauen Text in einem grauen "hervorgehobenen" Bereich haben, werden Ihre Augen genau diesen blauen Text mit einem grauen Hintergrund anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} befindet oder einem weißen. Dies nennt man _lokale_ Anpassung. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, obwohl sich die Umgebungsbeleuchtung des Raumes nicht ändert.

Daraus folgt, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, sich die Prinzipien der lokalen Anpassung zunutze machen können.

Die Anpassung an die Dunkelheit bei niedriger Leuchtdichte erfolgt langsam. Wenn Sie von draußen, wo die Sonne scheint, in einen dunklen Raum kommen, erleben Sie eine Anpassung an Dunkelheit. Es kann ein paar Minuten dauern, bis Sie sich daran angepasst haben.

Die Anpassung an Helligkeit ist das Gegenteil. Von einem dunklen Raum in helles Sonnenlicht zu gehen, geht schneller, kann aber auch schmerzen.

Daraus folgt, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei dem sich die Umgebungsbedingungen eines Raumes geändert haben, sich die `AmbientLightSensor`-Schnittstelle und die Medienabfrage [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) zunutze machen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe und Barrierefreiheit. Allgemein gesagt, liegt der Schwerpunkt beim Versuch sicherzustellen, dass genügend Kontrast zwischen Text und Hintergrund besteht oder bei der Bewertung der Möglichkeit, Anfälle bei Personen, die auf lichtempfindliche Anfälle empfindlich reagieren, zu induzieren, am meisten auf Leuchtdichte. Ein Aspekt der Farbe, unabhängig von Leuchtdichte, verdient besondere Aufmerksamkeit, da er sich auf Barrierefreiheit auswirkt: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei Personen, die auf lichtempfindliche Anfälle anfällig sind, Anfälle auszulösen, unabhängig von der Leuchtdichte der Farbe. Wie im [speziellen Fall von Rot](#der_sonderfall_von_rot) diskutiert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstlerfarbset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farben auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Sättigung einfach zu messen. Der Schlüssel liegt darin, zu wissen, in welchem Farbraum Sie arbeiten, und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten betrachtet werden, wenn es um Fotosensitivität geht, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB. Der HSV-Farbraum, der für _Hue_, _Saturation_ und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_ und _Brightness_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue_, _Whiteness_ und _Blackness_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Beispielsweise haben gesättigte Farben in HSL eine Lichtheit von `0.5`, in HWB haben sie einen Wert `1`. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot von Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Hues", gelten jedoch beide als gesättigte Farben.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu führen, kann die Helligkeit erhöht werden, indem man Weiß hinzufügt, wodurch die Sättigung reduziert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

An den Extremen der Leuchtdichte und der Extremen von Schwarz und Weiß kommt es zu einem Sättigungsverlust. In NASAs [Effect of Luminance on Saturation](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es bei niedrigen Leuchtdichten zu einem Sättigungsverlust kommt, und auch, "... der Verlust der Sättigung bei hohen Leuchtdichten — die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein reicht bei Barrierefreiheitsüberlegungen nicht aus. Im Falle von Animation sind bestimmte Farbkombinationen wahrscheinlicher, bei anfälligen Menschen fotosensitive Anfälle hervorzurufen, als andere. Zum Beispiel ist ein abwechselndes Blinken zwischen Rot und Blau problematischer als ein abwechselndes Blinken zwischen Grün und Blau. Es wird vermutet, dass dies daran liegt, dass die "rotempfindlichen" Zapfen unserer Augen, die sich eher um die Fovea (nahe dem Zentrum) gruppieren, physisch an einem anderen Ort liegen als die "blauempfindlichen" Zapfen unserer Augen, die sich von der Fovea entfernt und an den Rändern befinden. Die elektrischen Signale von den Augen zum Gehirn müssen viel auflösen, während die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben verursachen eher [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten, die der Gehirndynamik zugrunde liegen, können durch einige Farbkombinationen stärker moduliert werden als durch andere. Beispielsweise verursacht ein rot-blinkender Reiz eine stärkere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen beeinträchtigen. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie allein auf Farbton, um Details zu differenzieren. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (des Lichts) aus und wird daher normalerweise ein signifikanter Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben, die eine niedrige Leuchtdichte aufweisen, sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt deutlich weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und in unserem zentralen Sehen nicht vorhanden. Das menschliche Auge sieht Blau mit niedrigerer Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung der Farbe Blau:

- Reines Blau sollte in der Regel die dunkelste der beiden Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts lässt es auf der Netzhaut an einem anderen Ort fokussieren als Rot, sodass ein reiner roter und ein reiner blauer Farbton, die unmittelbar nebeneinander liegen und sich berühren, "flimmern" können, wenn sie nebeneinander liegen.

## Der Sonderfall von Rot

Nicht alle Farben ("Farbton") werden von unserem Gehirn gleich verarbeitet. Menschliche Physiologie und Psychologie werden allgemein gesprochen unterschiedlich von der Farbe Rot beeinflusst als von anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde nachgewiesen, dass [manche Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Manche Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)", die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung zu simulieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt besondere Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Fachbegriffe blickt, daher sollten Sie das folgende Bild betrachten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung aus Wikimedia Commons svg, gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" geht von links am wenigsten gesättigt nach rechts am stärksten gesättigt über.

_Mehr als eine "rote" Farbe kann als "gesättigt" angesehen werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine volle Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. In ähnlicher Weise hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die üblicherweise in der Webentwicklung verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite "Schattierungen von Rot" ist die Farbe "Karmesinrot" ein gesättigtes Rot, die in ihrer Pigmentform überwiegend rotes Licht mit Wellenlängen enthält, die länger als 600nm sind; der Artikel macht die besondere Anmerkung, dass "Karmesinrot" nahe dem extremen Spektrum liegt. Dies platziert es weit außerhalb der Standardfarbräume (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich zur Rotumgebung, die die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen beeinflusst, erfordert die Farbe im Spektrum von Rot Wellenlängen besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden bemerkte bei der Erprobung des _Photosensitive epilepsy analysis tool_, dass die Anfallsraten deutlich höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Kontinuierliches Blinken heller/dunkler mit Raten von mehr als drei Blinken pro Sekunde hat sich als fotogene Anfälle bei einigen Menschen gezeigt. Es wurde auch festgestellt, dass spezifische, sehr gleichmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren mehrere grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blinken innerhalb einer Sekunde sind akzeptabel, aber eine Abfolge von Blinken wird nicht empfohlen, wenn mehr als drei Blinken innerhalb einer Sekunde auftreten.
2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare haben, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder ihren Kontrast umkehrt, oder acht hell-dunkle Streifenpaare, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driften.

Für weitere Empfehlungen siehe das Papier [Photic- und Pattern-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte der Farbe

Farben, wie Farbtöne und Sättigungen, können unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verstärken oder abschwächen.

### Beispiele für den Effekt der Farbe über die visuelle Wahrnehmung hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch positive Auswirkungen auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Wahrnehmung der Zeit beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Effekt auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rottönige Brillen können erhöhte Glücksgefühle oder Freude bieten:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekanntlich von großer Bedeutung für unser Verhalten:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik.
- **Rote Umgebung:** Studien haben gezeigt, dass für solche mit traumatischer Hirnverletzung [kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Zugänglichkeit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte damit einen Test durchführen, um die Integrität des Sehnervs zu bewerten.
- [Fotische- und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
