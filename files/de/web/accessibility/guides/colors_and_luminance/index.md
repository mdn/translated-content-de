---
title: "Barrierefreiheit im Web: Farben und Leuchtdichte verstehen"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das Verständnis von Farbe, Leuchtdichte und Sättigung ist wichtig für das Design und die Lesbarkeit für alle sehenden Nutzer. Für Personen mit eingeschränktem Sehvermögen und farbfehlerhaftem Sehen sowie für Menschen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen sind sie jedoch von entscheidender Bedeutung.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die helfen sollen, Nutzern mit farbunempfindlichem Sehen, oft als "Farbenblindheit" bezeichnet, zu unterstützen. Das Verständnis von Farben ist auch wichtig, um [Krämpfe und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Einsatz ist ein bedeutender Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach. Dennoch ist es ein komplexes Thema, weil die Farbwahrnehmung ebenso viel mit der Physiologie des Auges und der menschlichen Gehirnverarbeitung zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgestrahlt wird.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farben in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung dieser gleichen Farbe auf diesem gleichen Computerbildschirm in einem dunklen Raum. In Bezug auf Zugänglichkeit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (manche Schriftarten sind so dünn oder ausgefallen, dass sie für sich allein schon Zugänglichkeitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text herum, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungs-Hintergrund, der Gesundheitszustand seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter empfangen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist eine andere Sache und kann durch den Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [media queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschemata](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurück, wodurch eine Webseite auf Änderungen der Lichtintensität achten und den Text entsprechend anpassen kann. Zusätzlich ermöglichen die oben genannten media queries den Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen und die Stufen automatisch anpassen, abhängig von der Benutzerstandort und der Art des Bildschirms, den sie verwenden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die wichtigsten und kritischsten Konzepte, um barrierefreie Webinhalte mit Farben zu erstellen. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit für Farbblinde sowie für diejenigen, die Farben wahrnehmen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Farblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgelegt werden, bevor der Kontrast hergestellt werden kann. Wenn man von Farbkontrast spricht, integriert W3C Formeln Leuchtdichte, nicht nur die Farben selbst ("Farbtöne").

### Terminologie

Terminologie kann verwirrend sein, weil verschiedene Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, richtig zu verstehen. Zum Beispiel wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und andere Male als "Helligkeit" bezeichnet. Sogar etwas scheinbar Einfaches wie das Benennen von allgemeinen Farben kann umstritten sein. Zum Beispiel kann die Farbe "Karminrot" von manchen in Hex-Werten als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument werden wir Terminologie verwenden, wie sie im W3C im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Wenn man mit Farben arbeitet, ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da verschiedene Farbräume auf verschiedene Messsysteme abgebildet sind.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarzpatronen (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmten Lichtwellenlängen _entfernen_, wobei nur der enge Bereich reflektiert wird, mit dem jede verbunden ist. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulicht hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnomenklaturen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Da jedoch die heutige Dominanz des RGB-Farbraums bei der Messung der Farbausgabe besteht, wird in diesem Dokument davon ausgegangen, dass die meisten Berechnungen im RGB-Farbraum und, sehr spezifisch, im sRGB-Farbraum erfolgen.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) deutlich wird, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Für digitale Belange hat sich die Technologie historisch im RGB-Farbraum befunden. Das RGB-Farbmodell wird auf "Alpha" – RGBA – erweitert, um die Opazität einer Farbe anzugeben. Andere Methoden zur Messung von Farben beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, einschließlich in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel für die Verwendung von RGBA anstelle von sRGB bei OpenGL verweisen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es Varianten sogar innerhalb eines einzigen {{Glossary("color_space", "Farbraums")}} gibt, wie zum Beispiel dem {{Glossary("RGB", "RGB")}}-Farbraum. Zum Beispiel: Varianten des RGB-Farbraums umfassen **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jeden ein voll deckendes Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz einstellen, wobei 0 % aus (schwarz) und 100 % der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können auch die sRGB-Werte direkt durch eine Zahl von 0 bis 255 einstellen.

Danach werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit Basis 16, bei dem die 0-255 Ganze Zahl durch zwei Ziffern dargestellt wird, die von 0-15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. So ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol '#' geht der Farbe voraus, um anzuzeigen, dass der Wert hex ist.

Wenn alle Werte gleich doppel Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. So ist `f00` dasselbe wie `ff0000`. Wenn eine vierte Reihe von Zahlen vorhanden ist, steht dieser Wert für das A in RGBA, dem Alpha-Kanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger wird und somit weniger transparent ist. In den obengenannten Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll deckend.

Das Beispiel zeigt auch die Legacy-Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farb-Funktionen ist durch Kommas getrennt, mit einer separaten Funktion, wenn der Alpha-Kanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit leerzeichengetrennten (anstatt komma-getrennten) Werten, wobei der Alpha-Kanal, falls vorhanden, durch einen Schrägstrich vorangestellt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das Schlüsselwort `none`; die komma-getrennte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Sättigung und Lichtheit_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die Farbe, die aus den Einstellungen entsteht, befindet sich immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die einen Knopf oder eine kreisförmige Steuerung verwendet, um den Farbton zu adjustieren. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ enthalten, was eine signifikante Überlegung ist.

Das nächste Beispiel zeigt "HWB", was für _Hue, Whiteness und Blackness_ steht. Sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) in der ersten Ziffer kann ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn er einheitslos ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farb-Funktionen.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn wir uns ansehen, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe in einer Kurzform, dreistelligen Hex-Zahl ausgedrückt werden kann, die in einen rgb-Wert als sechsstellige Hex-Zahl konvertiert wird, der auch in denselben rgb-Wert konvertiert oder als rgba-Wert ausgedrückt in Prozenten.

RGB ist hardwareorientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Zum Glück konvertieren Browser von RGB zu HSL automatisch, und Shift-Klicken auf Farben in Browser-Entwickler-Tools bietet eine Konvertierungsfunktionalität.

Zusätzlich zu den Entwickler-Tools können viele Werkzeuge RGB für Sie in HSL umrechnen und sowohl die RGB-Hexadezimalnotation als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)", mit HSL, RGB und Hex Optionen zum Prüfen von Kontrasten im Browser. Beachten Sie, dass Entwickler-Tools Farbpicker und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) den Zusatz zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbnotation und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB nach wie vor der Standard- und bevorzugte Farbraum für die Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Wo die Barrierefreiheit betroffen ist, sind jedoch Standards und Richtlinien derzeit überwiegend mit dem sRGB-Farbraum geschrieben, insbesondere wenn es um Farbkontrastraten geht.

> [!NOTE]
> Fast alle Systeme, die heute für das Anzeigen von Webinhalten verwendet werden, gehen von einer sRGB-Kodierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige des Inhalts verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Bei Verwendung anderer Farbräume sollten die Prinzipien der [minimalen Kontrastraten](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte mit der RGB-Decimal-Referenzskala oder über `color(srgb...)` zurück. Zum Beispiel, das Aufrufen von `Window.getComputedStyle()` auf einem `<div>`, dessen `background-color: #ff0000` gesetzt ist, gibt die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurück, die RGB-Dezimal-Referenz. Wenn jedoch [relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computer-Hardware gebunden ist, misst es Farben in RGB und nicht wie das menschliche Auge Farben wahrnimmt.

### Rot-/Grün-Farbfehlsichtigkeit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann immer noch über grüne Zapfen wahrgenommen werden, jedoch dunkler als bei normalem Sehen. Sowohl Protane (rot-defizient) als auch Deutane (grün-defizient) Schwächen verursachen Schwierigkeiten beim Unterscheiden _zwischen_ Rot und Grün.

Entwickler-Tools können helfen, Farbsehunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel kann der Barrierefreiheitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Zugänglichkeitsfeld ermöglichen.

![Ausschnitt der Firefox Entwickler-Tools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber die Nutzung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Leuchtdichte einschließen.

Zusätzlich wird die "Form" des Textes selbst wichtig sein. Dünne Buchstaben werden schwieriger zu lesen sein als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ca. `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (ca. `18,7px`) für `fett` Text. Es heißt:

_Text, der größer ist und breitere Buchstabenstriche hat, ist bei geringem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht Autoren, eine breitere Palette von Farbwahlmöglichkeiten für großen Text zu verwenden, was für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Während größerer Text nicht so viel Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist das Erhöhen der Schriftgröße kein Allheilmittel.

"Normales" Druck ist in der Regel als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift leserlich sein kann — ein Nutzer kann Buchstaben mit ca. 70% Genauigkeit erkennen — ist das nicht lesbar. Eine Schriftgröße von 16px ist im Allgemeinen für Personen mit normalem Sehen lesbar. Jemand mit 20/40 benötigt das Doppelte, etwa eine Schriftgröße von 31px. Aus diesem Grund verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text größer zu zoomen.

Während ein Text, der zu klein angezeigt wird, schwer zu lesen ist, gilt dasselbe für einen Text, der zu groß ist. Für Benutzer mit 20/20 Sehvermögen nimmt die Lesegeschwindigkeit bei einer Textgröße von mehr als ca. 96px ab. Darüber hinaus wird der größere Text weniger lesbar, wenn es einen großen Unterschied zwischen der kleinsten und der größten Schriftgröße auf einer Seite gibt, da die meisten Browser den gesamten Text zoomen, wenn der Benutzer den kleineren Text auf der Seite vergrößert.

Im Allgemeinen ist für Barrierefreeheitszwecke mehr Kontrast besser. Das ändert sich jedoch bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Für weitere Informationen über Farbkontraste bei Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der uns ermöglicht, Kontraste zu sehen. Relative Leuchtdichte ist in WCAG als "die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist zweifellos zutreffend, kann jedoch verwirrend sein, wenn sie auf den RGB-Farbraum bezogen wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, während Schwarz 0% relative Leuchtdichte aufweist (in den meisten, aber nicht allen Literaturen). Entsprechend dem oben erwähnten W3C-Standard bedeutet dies, dass Weiß, auf 1 normalisiert, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, auf 0 normalisiert, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher kommen diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als einzelnes Byte, was eine Spanne von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Zum Beispiel hat Gelb eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, _um die Weißeinstellung des Monitors zu erreichen_, gemäß dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastratio ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann der Farbkontrastratio etabliert werden.

Was die menschliche Wahrnehmung betrifft, ist ein Unterschied in der Leuchtdichte mehr wert als ein Farbunterschied. Dies ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die auch Farbblinde sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, lesbarer gemacht werden können, indem diese Farben gegen eine andere Farbe mit kontrastierender Leuchtdichte gestellt werden. Eine interessante Studie von der NASA über die Farbe Blau stellte zum Beispiel fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, _wenn darauf geachtet wird, einen ausreichenden Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)).

Berechnungen zur relativen Leuchtdichte sind keine einfachen. Glücklicherweise gibt es [Online Checker für Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio) und sogar Anleitungen, wie [relative Leuchtdichte berechnet werden kann](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbe wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bandes sichtbaren Lichts, von Rot über Gelb und Grün zu Blau. Unsere Sensibilität für diese verschiedenen Farbtöne ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf eingestellt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am meisten_ auf ein Gelb/Grün empfindlich, reagieren jedoch auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind auf Grün empfindlich, und nur [5% sind auf Blau empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger auf Blau empfindliche Zapfen als bei den anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was ihre geringere Zahl teilweise ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ein Kegel-Mosaik des normalen Sehens und rechts das eines Menschen mit Protanopie, bei dem die roten Kegel fehlen.](conemosaics.jpg)

Links das zentrale Kegel-Mosaik des normalen Sehens und rechts das eines Menschen mit Protanopie, einer Form der Farbsehschwäche, bei der die roten Kegel fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um die Leuchtdichte zu schaffen, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton betrachten können. Getrennt ermöglichen die roten, grünen und blauen Zapfen standardmäßiges Sehen, das Millionen von Farben wahrnehmen kann. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Farbton und Farbintensität) verarbeitet.

Leuchtdichte liefert feine Details des Sehens, einschließlich der Differenzierung von Kanten und Texten. Farbton und Farbintensität tragen ein Drittel der Details der Leuchtdichte. Die Datenkompression von Bildern nutzt diese Tatsache aus. Zum Beispiel [h.264 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) sammelt Farbe bei einem Viertel der Auflösung der Leuchtdichte.

Für die Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe, wie in Farbton und Farbintensität, ist wichtig für _Erkennungs_ Elemente wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, der berücksichtigt werden muss, ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen anders, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate die gleiche sRGB-Farbe. Eine kontextuelle Farbwahrnehmung lässt sie anders erscheinen; die Bildverarbeitung in Ihrem Gehirn passt die Wahrnehmung basierend darauf an, was sie als im Schatten oder nicht interpretiert.

![Ein Bild eines Damebretts, auf dem identische Farben unterschiedlich aussehen, je nachdem, ob sie im Schatten liegen oder nicht](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind dieselben Farben auf Ihrem Monitor, scheinen aber aufgrund des Kontexts unterschiedlich zu sein. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und unsere Farbwahrnehmung werden durch den Kontext der nahegelegenen Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Dies macht die Vorhersage von Kontrasten herausfordernd. Es ist nicht einfach ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend ist Farbe ebenso eine Frage der menschlichen Physiologie und der Wahrnehmung im Gehirn wie die Lichtmessung von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig und auf die gleiche Weise an, wenn sie von hellen zu dunklen Bereichen und umgekehrt wechseln. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Nutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten von Anpassungen finden statt: lokale Anpassung und Anpassung an die Umgebungsumgebung.

Die lokale Anpassung findet direkt auf der "Seite" statt, die ein Leser betrachtet. Wenn Sie zum Beispiel blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen exakt blauen Text mit einem grauen Hintergrund anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} befindet oder in einem weißen. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, auch wenn sich das Umgebungslicht im Raum nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text vor einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die dunkle Anpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von draußen kommen, wo die Sonne hell scheint, und in einen dunklen Raum gehen, erleben Sie eine dunkle Anpassung. Es kann einige Minuten dauern, bis Sie sich anpassen.

Die Lichtanpassung ist das Gegenteil. Wenn Sie von einem dunklen Raum in helles Sonnenlicht gehen, ist dies schneller, kann aber auch schmerzhaft sein.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, in dem sich die Umgebungsbedingungen eines Raums geändert haben, die `AmbientLightSensor` Schnittstelle und die Medienquery [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der Fokus hauptsächlich auf der Leuchtdichte, wenn versucht wird, genug Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit zu evaluieren, Krämpfe bei Personen auszulösen, die empfindlich auf fotosensitive Krampfanfälle reagieren. Ein Aspekt der Farbe ("Farbtöne"), der unabhängig von der Leuchtdichte besondere Aufmerksamkeit verdient, sofern es um Barrierefreiheit geht, ist das Konzept der Sättigung. Dies ist auf seine Fähigkeit zurückzuführen, Krämpfe bei Menschen auszulösen, die für fotosensitive Krampfanfälle anfällig sind, unabhängig von der Leuchtdichte der Farbe. Wie im besonderen Fall von Rot diskutiert, bemerkten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl diese gute Definitionen für "Pigmente" in einem Malerset eines Künstlers sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten in Betracht gezogen werden, wenn es um Fotosensibilität geht, sind die RGB-, HSL- und HSV-, auch bekannt als HSB-, Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, wird in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weißheit_ und _Schwärze_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0,5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit dem Hex-Wert `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", aber beide gelten als eine gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man der Farbe Weiß, Schwarz oder Grau hinzufügt; um das Beispiel weiter zu führen, kann die Helligkeit erhöht werden, indem man Weiß hinzufügt und die Sättigung reduziert. Ein typisches Beispiel ist, Weiß zu Rot hinzuzufügen, um die Farbe Rosa zu erzeugen. Rosa wird als ein entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt einen Sättigungsverlust an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In der NASA's [effekt der Leuchtdichte auf die Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Sättigungsverlust bei niedrigen Leuchtdichten gibt, und außerdem, „...den Sättigungsverlust bei hohen Leuchtdichten – die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein ist nicht genug, wenn es um Barrierefreiheitsüberlegungen geht. Im Fall von Animationen sind bestimmte Farbkombinationen für diejenigen, die dafür anfällig sind, eher in der Lage, fotosensitive Krampfanfälle auszulösen als andere. Zum Beispiel sind abwechselnde Blitze zwischen Rot und Blau problematischer als abwechselnde Blitze zwischen Grün und Blau. Es wurde die Theorie aufgestellt, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe dem Zentrum) zu gruppieren, physisch an einer anderen Stelle liegen als die "blauen" empfindlichen Zapfen unserer Augen, die sich von der Fovea entfernt und zu den Rändern befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu klären, wenn die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben lösen eher [epileptische Anfälle aus](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die in das Gehirn integrierten komplexen Dynamiken können durch einige Farbkombinationen stärker moduliert werden als durch andere. Zum Beispiel verursacht ein rot-blau flackernder Reiz mehr kortikale Aufregung als grün-rote oder blau-grüne Reize.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können bei bestimmten Beeinträchtigungen störend wirken. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie allein auf den Farbton, um Details zu differenzieren. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den überwiegenden Teil der Leuchtdichte (Licht) aus, daher wird es normalerweise einen signifikanten Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine geringe Leuchtdichte. Farben, die eine niedrige Leuchtdichte haben, sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt weit weniger blaue Zapfen, und sie sind in unserem peripheren Sehen zerstreut und in unserem zentralen Sehen nicht vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für den Einsatz der Farbe Blau:

- Reines Blau sollte typischerweise die dunkelste von zwei Farben sein.
- Wenn Blau als das hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es beim Fokussieren auf einen anderen Ort auf der Netzhaut als Rot fokussiert wird, sodass eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander und berühren, "flimmern" können, wenn sie nebeneinander sind.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbtöne") werden von unserem Gehirn ähnlich verarbeitet. Sowohl die menschliche Physiologie als auch Psychologie werden von der Farbe Rot, allgemein gesprochen, anders beeinflusst als von anderen Farben. Wir reagieren physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Zugänglichkeitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung zu simulieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur Zahlen und Begriffe betrachtet. Betrachten Sie daher das folgende Bild, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg als png gespeichert Autor: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" verändert sich von links nach rechts von am wenigsten gesättigt nach am stärksten gesättigt.

_Mehr als eine "rote" Farbe kann als ein "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine vollständige Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ähnlich hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder in anderen Spektren, die häufig für die Webentwicklung verwendet werden, gut dargestellt werden. Laut Wikipedias Seite zu "Schattierungen von Rot" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen länger als 600 nm enthält; der Artikel macht die besondere Anmerkung, dass "Karmin" nahe dem extremen Spektrum liegt. Dies platziert es weit jenseits der standardmäßigen Farbräume (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Flimmern

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit einer traumatischen Hirnverletzung beeinträchtigt, erfordert Farbe im roten Spektrum Wellenlängen besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, beim Testen des _Photosensitive epilepsy analysis tool_, stellte fest, dass Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Flimmern reagieren. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Flimmern und Krampfanfälle

Kontinuierliches Flimmern heller/dunkler mit Raten über drei Blitzen pro Sekunde hat gezeigt, dass es bei einigen Menschen photische Krampfanfälle auslösen kann. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, kontrastreiche Muster, wie parallel angeordnete weiße und schwarze Streifen, ebenfalls Krampfanfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentiert einige grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Folge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze in einer Sekunde auftreten.
2. Wenn Licht- und dunkle Streifen angezeigt werden, sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blinken oder den Kontrast umkehren. Oder acht hell-dunkle Streifenpaare, wenn das Muster sich nicht ändert oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Für weitere Empfehlungen siehe das Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte der Farbe

Farbe, wie in Farbtönen und Sättigung, kann unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verbessern — oder beeinträchtigen.

### Beispiele für den Einfluss von Farben über die bloße Sicht hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch einen positiven Effekt auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Effekt auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können vermehrtes Glück oder Freude hervorrufen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umwelt:** Studien haben gezeigt, dass für diejenigen, die an einem traumatischen Hirntrauma leiden, [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit bei Anfällen und physischen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American By Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf "Rot" abgestimmt, dass Augenärzte einen Test mit ihm aufstellen, um die Integrität des Sehnervs zu beurteilen.
- [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
