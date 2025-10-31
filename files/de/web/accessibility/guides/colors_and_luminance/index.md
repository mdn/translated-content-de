---
title: "Web-Accessibility: Verstehen von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Während das Verständnis von Farbe, Leuchtdichte und Sättigung wichtig für Design und Lesbarkeit für alle sehenden Nutzer ist, sind sie für diejenigen mit eingeschränktem Sehvermögen und Farbmangel sowie für Menschen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen unerlässlich.

Zugänglichkeitsrichtlinien definieren ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit reduziertem Sehvermögen sowie Richtlinien, die dazu gedacht sind, Benutzern mit farbunempfindlichem Sehvermögen, allgemein als "Farbenblindheit" bekannt, zu helfen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wichtiger Aspekt der Barrierefreiheit. Auf den ersten Blick erscheint das Thema einfach. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung ebenso sehr mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Farbwahrnehmung in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen einen größeren Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriften sind so dünn oder kunstvoll, dass sie für sich allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text herum, sogar die Pixeldichten und mehr, beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand des Betrachters zum Bildschirm, der Hintergrund der Umgebung, die Gesundheit seiner Augen und mehr, alles beeinflusst, wie die Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist noch eine andere Sache und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Zum Glück gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt das [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Interface den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Host-Gerät zurück, wodurch eine Webseite über Änderungen der Lichtintensität informiert wird und folglich den Text entsprechend anpassen kann. Darüber hinaus ermöglichen die oben genannten Media Queries Entwicklern die Bereitstellung alternativer Benutzererfahrungen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen, wobei die Stufen je nach Standort des Benutzers und Art des verwendeten Bildschirms automatisch angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und entscheidenden Konzepte, um zugängliche Webinhalte mit Farbe zu erstellen. Leuchtdichte ist jedoch von besonderer Bedeutung, denn das Verständnis dessen, was sie ist und wie sie eingesetzt wird, ermöglicht Barrierefreiheit sowohl für Farbenblinde als auch für diejenigen, die Farbe wahrnehmen können. Der Leuchtdichtekontrast ermöglicht es den Farbenblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgelegt werden, bevor der Kontrast festgestellt werden kann. Wenn von Farbkontrast gesprochen wird, beziehen W3C-Formeln Leuchtdichte ein, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um sie richtig zu verstehen. Zum Beispiel ist "Sättigung" in manchen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Helligkeit" und manchmal als "Lichtheit" bezeichnet. Sogar etwas scheinbar Einfaches wie das Benennen gängiger Farben kann zur Diskussion stehen. Zum Beispiel kann die Farbe "Karmesinrot" von einigen als hexadezimale Werte `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie auf der CSS-Seite [`<named-color>`](/de/docs/Web/CSS/named-color) definiert ist.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" sie arbeiten, da verschiedene Farbräume unterschiedliche Messsysteme abbilden.

Beim Farbendruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz- (CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_ und nur den engen Bereich reflektieren, mit dem jede in Verbindung gebracht wird. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulicht hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während die Farbenräume HEX, RGB und HSL unterschiedlich notiert werden, konvertieren Browser die Werte automatisch zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe wird jedoch in diesem Dokument erwartet, dass die meisten Berechnungen im RGB-Farbraum liegen und sehr spezifisch im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich ist, einschließlich RGB, RGB dezimal, RGB prozentual, HSL, HWB, LCH, Lab und CMYK, um nur einige zu nennen.

Im digitalen Bereich hat die Technologie historisch im RGB-Farbraum bestanden. Das RGB-Farbmodell wird auf "Alpha" - RGBA - erweitert, um die Opazität einer Farbe zu spezifizieren. Andere Methoden zur Farbmessung beinhalten Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) beinhalten Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zu OpenGL auf die Verwendung von RGBA anstelle von sRGB verweisen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel für seine Verwendung in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} wie dem {{Glossary("RGB", "RGB")}}-Farbraum Variationen gibt. Zum Beispiel gibt es Variationen des RGB-Farbraums wie **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der CSS-Notation zur Definition einer Farbe. Hier ist die Beispiel-Farbe für jede ein vollständig deckender Magenta:

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

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz setzen, wobei 0% aus (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 angeben.

Anschließend werden hexadezimale Farbwerte gezeigt. Das Hexadezimalsystem ist ein Zahlensystem auf Basis 16, wobei die Ganzzahl von 0 bis 255 durch zwei Ziffern von 0-15 dargestellt wird, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. So ist `f00` das gleiche wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender ist und daher weniger transparent. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für vollständig deckend.

Das Beispiel zeigt auch die veraltete Syntax für [`rgb()` und `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die veraltete Syntax für Farb-Funktionen ist durch Kommas getrennt gebunden, mit einer separaten Funktion, wenn der Alphakanal enthalten ist. Neue Farbfunktionen haben nur eine Syntax mit leerzeichengetrennten (anstelle von kommagetrennten) Werten, mit dem Alphakanal, falls vorhanden, der durch einen Schrägstrich getrennt ist. Die moderne Syntax ermöglicht das Mischen von Zahlen und Prozentsätzen und unterstützt das Schlüsselwort `none`; die kommagetrennte, veraltete Syntax jedoch nicht.

Die folgenden Beispiele zeigen "HSL", das steht für _Hue (Farbton), Saturation (Sättigung) und Lightness (Helligkeit)_. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die mit diesen Einstellungen erzeugte Farbe befindet sich immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die ein Drehknopf oder eine kreisförmige Steuerung für die Anpassung des Farbtons verwendet. Beachten Sie, dass HSL-Farben _Lichtheit_ und nicht _Leuchtdichte_ beinhalten, was eine bedeutende Überlegung ist.

Das nächste Beispiel zeigt "HWB", das steht für _Hue, Whiteness (Weißheit) und Blackness (Schwärze)_. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert eine [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn einheitenlos, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionen.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Weisen ausgedrückt werden. Wenn man sich ansieht, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer Kurzform als dreistelliges Hex-Zahl dargestellt werden kann, die in einen RGB-Wert als sechsstellige Hex-Zahl konvertiert werden kann, die ebenfalls in denselben RGB-Wert konvertiert wird, oder als RGBA-Wert, ausgedrückt in Prozent.

RGB ist hardwareorientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und durch Shift-Klick auf Farben in Browser-Entwicklungstools wird eine Konvertierungsfunktion bereitgestellt.

Zusätzlich zu Entwicklungstools können viele Tools RGB in HSL für Sie konvertieren und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zur Kontrastüberprüfung im Browser. Beachten Sie, dass Entwickler-Tools, Farbauswahlen und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbauswahl mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) die Hinzufügung zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbausdrücke und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe angeben können. Dennoch ist sRGB immer noch der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Verbreitung.

In Bezug auf Barrierefreiheit sind jedoch Standards und Richtlinien aktuell überwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zum Betrachten von Webinhalten gehen von einer sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum verwendet wird, um die Inhalte zu verarbeiten und anzuzeigen, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB-Decimal-Referenzskala oder über `color(srgb...)` zurück. Beispiel: Das Aufrufen von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: red` liefert die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` — die RGB-Decimal-Referenz. Wird jedoch [using relative colors](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet (beispielsweise `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerausrüstung gebunden ist, misst `Window.getComputedStyle()` Farben in Bezug auf RGB und nicht so, wie das menschliche Auge Farben wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist ein Farbsehfehler, bei dem das Auge keine roten Zapfen hat; sRGB kann immer noch über grüne Zapfen wahrgenommen werden, wenn auch dunkler als die normale Sicht. Sowohl Protan- (rotdefizient) als auch Deutan- (gründefizient) Defizite verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklertools können Farbsehdifferenzen direkt in Ihrem Browser simulieren. Beispielsweise ermöglicht der Barrierefreiheit-Inspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheit-Panel.

![Ausschnitt der Firefox-Entwicklungstools, die das Simulations-Popup anzeigen](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtöne") ist eine wesentliche Komponente, aber die Verwendung von Farbe ("Farbtöne") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie zuvor erwähnt, müssen bei jeder Berechnung von Kontrast Leuchtdichte berücksichtigt werden.

Zusätzlich spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (ungefähr `18.7px`) für `fett` Text. Es wird gesagt:

_Text, der größer und mit breiteren Zeichenstrichen ist, ist bei niedrigerem Kontrast leichter lesbar. Daher ist die Kontrastanforderung für größere Texte niedriger. Dies ermöglicht es Autoren, eine breitere Auswahl an Farbkombinationen für großen Text zu verwenden, was für das Design von Seiten besonders hilfreich ist._

Während größerer Text nicht so viel Kontrast zu seinem Hintergrund benötigt wie kleinerer Text, ist das Erhöhen der Schriftgröße kein Allheilmittel.

"Normale" Schrift wird üblicherweise als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift lesbar sein kann — ein Nutzer kann Buchstaben zu etwa 70% Genauigkeit erkennen — ist das nicht leserlich. Eine 16px Schriftgröße ist allgemein für Menschen mit normalem Sehvermögen lesbar. Eine Person mit 20/40 benötigt doppelt so viel, etwa eine 31px Schrift. Aus diesem Grund fordern die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu kleiner Text schwer zu lesen ist, ist es auch ein zu großer Text. Für Benutzer mit 20/20-Sehvermögen sinkt die Lesegeschwindigkeit mit einer Schriftgröße von über ca. 96px. Außerdem, wenn es einen großen Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text beim Vergrößern vergrößern.

Im Allgemeinen gilt: Je mehr Kontrast, desto besser in Bezug auf Barrierefreiheit. Dies ändert sich jedoch bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Für mehr Informationen über Farbkontrast in Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Auch Icons benötigen genügend Kontrast zur Wahrnehmung. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied der Leuchtdichte einer Farbe, der uns den Kontrast sehen lässt. Relative Leuchtdichte wird in der WCAG definiert als „die relative Helligkeit eines Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß.“

Diese Aussage ist natürlich korrekt, könnte jedoch verwirrend sein, wenn im Zusammenhang mit dem RGB-Farbraum verwendet, der ein Ganzzahlbereich zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in der meisten, aber nicht aller Literatur). Interkulturell für den W3C-Standard oben würde das bedeuten, dass Weiß, normalisiert zu 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert zu 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher kommen also diese Zahlen von 0 bis 255? Historisch haben Grafik-Engines die Farbkanäle als ein einziges Byte gespeichert, was einen Bereich von Ganzzahlen von 0 bis 255 bedeutet.

Die Leuchtdichten der Primärfarben unterscheiden sich. Gelb hat eine größere Leuchtdichte als Blau, zum Beispiel. Dies wurde durch Design erreicht, _um die Weißabstimmung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgestellt werden.

In Bezug auf die menschliche Wahrnehmung ist ein Unterschied in der Leuchtdichte wichtiger als ein Farbunterschied. Das ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die selbst diejenigen mit Farbenblindheit sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, deutlicher gemacht werden können, indem diese Farben gegen jene mit kontrastierender Leuchtdichte gestellt werden. Eine interessante Studie der NASA über die Farbe Blau stellt beispielsweise fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _Sorgfalt geübt wird, um einen ausreichenden Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Rechner für Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio) verfügbar und sogar Anweisungen zum [Berechnen der relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbe wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis zu Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr wahrzunehmen als andere. Etwa 65% der Zapfen sind _am meisten_ empfindlich auf ein Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grün empfindlich, und nur [5% sind blau empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen als die anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weitaus weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegel-Mosaik der Standardvision und rechts das eines Protanopia-leidenden Menschen, dem die roten Kegel fehlen.](conemosaics.jpg)

Links ist das zentrale Kegel-Mosaik der Standardvision und rechts das eines Protanopia-Leidenden, einer Form der Farbenblindheit, dem die roten Kegel fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu erzeugen, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf Farbton verstehen können. Separat erlauben die roten, grünen und blauen Zapfen für Standardvision, Millionen von Farben zu sehen. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte ermöglicht feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details zur Leuchtdichte. Bilddatenkompression nutzt diesen Fakt aus. Als Beispiel, [h.264 video codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) nimmt Farben mit einem Viertel der Auflösung der Leuchtdichte.

Für Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast entscheidend für Text ist. Farbe, im Sinne von Farbton und Farbigkeit, ist wichtig zum _Unterscheiden_ von Elementen wie verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine bestimmte Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate die gleiche sRGB-Farbe. Kontextsensitive Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es denkt, was im Schatten ist oder nicht.

![Ein Bild eines Schachbretts, wo identische Farben unterschiedlich erscheinen, je nachdem, ob sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind auf Ihrem Monitor identische Farben, aber sie erscheinen unterschiedlich aufgrund des Kontexts. (Bild D. Lyon)

Unser Kontrast-, Helligkeits- und Farbempfinden wird vom Kontext der benachbarten Farben und anderen Merkmalen eines Designs oder Bilds beeinflusst. Dies macht die Vorhersage von Kontrast anspruchsvoll. Es ist nicht nur ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe so viel über menschliche Physiologie und Wahrnehmung im Gehirn ist, wie es darum geht, Licht von einem Computerbildschirm zu messen. Es ist auch wichtig zu verstehen, dass das Umgebungslicht die Fähigkeit zur Farbwahrnehmung und zum Kontrast beeinflusst. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig in der gleichen Weise an Wechsel von hellen zu dunklen Bereichen und umgekehrt an. Dies liegt an den physiologischen Eigenschaften, wie unsere Augen aufgebaut sind. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise etwa blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, nehmen Ihre Augen genau diesen blauen Text mit einem grauen Highlight unterschiedlich wahr, wenn es in einem schwarzen {{HTMLElement("div")}} oder einem weißen ist. Das wird _lokale_ Anpassung genannt. Dieser Unterschied in der Fähigkeit, den Text zu erkennen, wird beeinflusst, obwohl das Umgebungslicht im Raum nicht verändert wird.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Texten gegenüber einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung ausnutzen können.

Dunkelanpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von außen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie eine Dunkelanpassung. Es kann einige Minuten dauern, sich anzupassen.

Lichtanpassung ist das Gegenteil. Vom dunklen Raum ins helle Sonnenlicht zu gehen, geht schneller, kann aber auch wehtun.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Texten verbessern möchten, bei denen sich die Umgebungsbedingungen eines Raums geändert haben, die Vorteile des `AmbientLightSensor`-Interfaces und der [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen konzentrieren sich die meisten auf Leuchtdichte, um sicherzustellen, dass genug Kontrast zwischen Text und seinem Hintergrund besteht oder man die Möglichkeit neuronaler Bedingungsanfälle in denen mit Empfindlichkeit gegenüber lichtempfindlichen Anfällen bewertet. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von Leuchtdichte, verdient besondere Erwähnung, da es auf Zugänglichkeit zutrifft: das Konzept der Sättigung. Dies ist auf seine Fähigkeit zurückzuführen, Anfälle in denen anfällig für lichtempfindliche Anfälle zu verursachen, unabhängig von der Leuchtdichte der Farbe. Wie in [dem besonderen Fall von Rot](#der_spezielle_fall_von_rot) diskutiert, bemerkten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem saturierten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl diese gute Definitionen für "Pigmente" im Farbsatz eines Künstlers sind, sind sie nicht so genau wie die Farbstudien von einem Computerbildschirm.

Wenn es um die Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während sich die Definition von Sättigung für jeden Farbraum unterscheiden kann, ist die Sättigung bemerkenswert messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit sein, ihn gegebenenfalls zu konvertieren.

Die am häufigsten betrachteten Farbräume bei der Diskussion über Fotosensitivität sind die RGB-, HSL- und HSV-, auch bekannt als HSB-Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_, und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_, und _Helligkeit_ steht, wird in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) repräsentiert für _Farbton_, _Weißheit_, und _Schwärze_.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Beispielsweise haben gesättigte Farben im HSL eine Lichtheit von `0.5`, während sie im HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum ist in der Regel durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe gekennzeichnet. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Es sind zwei unterschiedliche "Farbtöne", aber beide werden als gesättigte Farben angesehen.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz in eine Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu führen, Helligkeit kann erhöht werden, indem man Weiß hinzufügt, was die Sättigung verringert. Ein typisches Beispiel ist, Weiß zu Rot hinzuzufügen, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß einen Verlust an Sättigung. In NASA's [Wirkung der Leuchtdichte auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Verlust an Sättigung bei niedriger Leuchtdichte gibt, und auch, „…der Verlust von Sättigung bei hoher Leuchtdichte – die Farben streben nach Weiß.“

## Farbkombinationen

Kontrast allein reicht bei Überlegungen zur Barrierefreiheit nicht aus. Im Fall von Animation sind bestimmte Farbkombinationen wahrscheinlicher, bei denen anfällig für Anfälle, Fotosensibilität auszulösen, als andere. Beispielsweise ist bei abwechselnden Zwischenblitzen zwischen Rot und Blau problematischer als bei abwechselnden Zwischenblitzen zwischen Grün und Blau. Es wurde vermutet, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe der Mitte) zu gruppieren, physikalisch an einem anderen Ort liegen als die "blauen" empfindlichen Zapfen unserer Augen, die sich abseits der Fovea und in Richtung der Ränder befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu lösen, während die Informationen in unseren Gehirnen verarbeitet werden.

Einige Farben lösen eher [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf) aus. Die Komplexitäten unter der Dynamik des Gehirns können durch einige Farbkombinationen mehr als durch andere moduliert werden. Beispielsweise verursacht ein rot-blinkender Reiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein und einige Farbkombinationen können einige Beeinträchtigungen beeinträchtigen. Die Kombination aus Rot / Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein auf den Farbton zur Unterscheidung von Details. Ein adäquater Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus, daher wird es meist ein wesentlicher Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben mit niedriger Leuchtdichte sollten die dunklere der kontrastierenden Farben sein. Blau ist auch sehr niedrig in Auflösung. Es gibt weitaus weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und nicht in unserem Zentralsehen vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von Blau:

- Reines Blau sollte typischerweise die dunkelste einer der zwei Farben sein.
- Bei Verwendung von Blau als die hellere der zwei Farben fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es sich an einem anderen Ort auf der Netzhaut fokussiert als Rot, daher können ein reines Rot und ein reines Blau, das unmittelbar nebeneinander und sich berührend platziert sind, manchmal "schimmern", wenn sie nebeneinander stehen.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen auf dieselbe Weise verarbeitet. Physiologisch und psychologisch werden wir, im Allgemeinen, von der Farbe Rot in einer anderen Weise als von anderen Farben beeinflusst. Wir reagieren physiologisch wie auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Zugänglichkeitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die Menschen, die lichtempfindlich sind, helfen kann. Um die Graustufen-Einstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwierig zu verstehen, wenn man nur auf Zahlen und Terminologie schaut, aber Betrachten Sie das folgende Bild, um das Konzept der Sättigung einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" geht von der am wenigsten gesättigten am linken Rand über, zur am meisten gesättigten am rechten.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot betrachtet werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne sind im RGB-Spektrum oder anderen Spektren, die in der Webentwicklung üblich sind, gut darstellbar. Laut Wikipedia-Seite "Schattierungen von Rot" ist die Farbe "Karmesin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen länger als 600nm enthält; der Artikel macht die besondere Bemerkung, dass "Karmesin" nah am äußeren Spektrum liegt. Dies platziert es weit jenseits Standard-Gamuten (RGB und CMYK) und sein gegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes, rot blinkendes

Zusätzlich zu einer roten Umgebung, die die kognitive Funktion von denen mit traumatischen Hirnverletzungen beeinflusst, erfordert Farbe im roten Wellenlängenspektrum besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, bei Tests des _Photosensitive epilepsy analysis tool_, stellte fest, dass die Häufigkeit der Anfälle viel höher war als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [Das Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Unterbrechendes Blinken heller/dunkler bei Raten über drei Blinks pro Sekunde wurde gezeigt, fotische Anfälle bei einigen Menschen auszulösen. Es wurde auch festgestellt, dass spezifische, sehr regelmäßige, hochkontrastreiche Muster, wie parallel weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren einige grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blinks in einer Sekunde sind zulässig, aber eine Blinksequenz wird nicht empfohlen, wenn mehr als drei Blinks innerhalb einer Sekunde auftreten.
2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen beinhalten, wenn sich die Streifenrichtung ändert, oszilliert, blinkt, oder im Kontrast wechselt, oder acht hell-dunkle Paare von Streifen, wenn das Muster unverändert bleibt oder kontinuierlich und sanft in eine Richtung driftet.

Für weitere Empfehlungen siehe das Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farbe, das in Farbtönen und Sättigung präsentiert wird, kann unsere Stimmung beeinträchtigen und unsere interaktiven Erfahrungen verbessern — oder verschlechtern.

### Beispiele für die Auswirkungen von Farbe über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch eine positive Wirkung auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Gläser können erhöhte Freude oder Glücksgefühle liefern:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist weithin bekannt für seine erheblichen Auswirkungen auf unser Verhalten:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen, die eine traumatische Hirnverletzung erlitten haben, [cognitive function is reduced in a red environment](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Barrierefreiheit Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/Reference/Properties/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Zugänglichkeit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rot-Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test durchführen, den es verwendet, um die Integrität des Sehnervs zu bewerten.
- [Photic- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
