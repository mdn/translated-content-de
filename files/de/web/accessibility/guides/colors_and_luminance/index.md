---
title: "Web-Accessibility: Verstehen von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Die Kenntnisse über Farben, Leuchtdichte und Sättigung sind für das Design und die Lesbarkeit für alle sehenden Benutzer wichtig; sie sind jedoch unerlässlich für Menschen mit eingeschränktem Sehvermögen, farbdefizitem Sehen und solchen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehvermögen und Richtlinien, die Nutzern mit farbunempfindlichem Sehen helfen sollen, umgangssprachlich als "Farbenblindheit" bekannt. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Personen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Oberflächlich betrachtet scheint das Thema einfach zu sein. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung genauso viel mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm emittiert wird.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Wahrnehmung von Farben in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriften sind so dünn oder ausgefallen, dass sie alleine schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungslicht, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter Farben wahrnimmt, nachdem sie seine Augen erreicht haben, ist eine weitere Angelegenheit und kann durch die allgemeine Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media), die Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farbchema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt das [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Interface den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hosting-Gerät zurück, sodass eine Webseite Änderungen der Lichtintensität wahrnehmen und den Text entsprechend anpassen kann. Zusätzlich ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen, wodurch Pegel automatisch abhängig vom Standort des Benutzers und der Art des verwendeten Bildschirms angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und wichtigsten Konzepte für die Erstellung barrierefreier Webinhalte mit Farbe. Leuchtdichte ist von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, es ermöglicht, Barrierefreiheit für diejenigen zu schaffen, die farbenblind sind, sowie für diejenigen, die Farben wahrnehmen können. Der Leuchtdichtekontrast ermöglicht es den Farbenblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgelegt werden, bevor der Kontrast festgelegt werden kann. Wenn man von Farbkontrast spricht, integrieren W3C-Formeln Leuchtdichte, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da verschiedene Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um sie richtig zu verstehen. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und manchmal als "Helligkeit" bezeichnet. Sogar etwas scheinbar Einfaches wie die Benennung von üblichen Farben kann zur Diskussion stehen. Zum Beispiel kann die Farbe "Karmesinrot" von einigen als Hex-Wert `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir Terminologie wie auf der CSS {{cssxref("named-color")}}-Seite definiert.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume auf unterschiedliche Messsysteme abzielen.

Beim Farbendruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz-(CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezielle Lichtwellenlängen _entfernen_ und nur den engen Bereich reflektieren, mit dem sie verbunden sind. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot, Grün und Blau hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnomenklaturen. [CSS-Farbmodule](/de/docs/Web/CSS/Guides/Colors) bieten zusätzliche Farbräume. Angesichts der aktuellen Dominanz des RGB-Farbraums bei der Messung von Farbausgaben wird in diesem Dokument davon ausgegangen, dass sich die meisten Berechnungen im RGB-Farbraum und sehr genau im sRGB-Farbraum befinden.

## Der sRGB-Farbraum

Farben können auf viele Arten definiert werden, wie im {{cssxref("&lt;color&gt;")}}-Datentyp ersichtlich, einschließlich RGB, RGB-Dezimal, RGB-Prozent, HSL, HWB, LCH, Lab und CMYK, unter anderen.

Für digitale Anliegen hat sich die Technologie historisch im RGB-Farbraum entwickelt. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Opazität einer Farbe zu spezifizieren. Andere Methoden zur Messung von Farbe beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, einschließlich in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel für die OpenGL-Nutzung die Verwendung von RGBA statt sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel dafür in „[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)“.

### CSS Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} Variationen gibt, wie z.B. den {{Glossary("RGB", "RGB")}}-Farbraum. Zum Beispiel umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, neben anderen.

Dies sind Beispiele der CSS-Notationen, die zur Definition einer Farbe verwendet werden. Hier ist die Beispiel-Farbe für jede ein voll deckendes Magenta:

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

Das erste Beispiel verwendet eine der definierten {{cssxref("named-color")}}s.

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte stehen in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Dargestellt danach sind Hex-Farbwerte. Hexadezimal ist ein Nummernsystem mit Basis-16, wobei die Ganzzahl von 0-255 durch zwei Stellen von 0-15 dargestellt wird, wobei die Zahlen 0-9 und a-f für 10-15 verwendet werden. Also, `ff` = `255`, `00` = `0` und `d5` = `200`. Das '✻'-Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hex ist.

Wenn alle Werte Paare identischer Ziffern sind, können die Werte durch Einzelziffern dargestellt werden, die der Browser dupliziert. So entspricht `f00` `ff0000`. Wenn eine vierte Zahlenmenge vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz im Sinne des Transparenzwerts der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe dichter und daher weniger transparent ist. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für voll deckend.

Das Beispiel zeigt auch die alte Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). Die alte Syntax für Farb-Funktionen ist kommagetrennt, mit separater Funktion, wenn der Alphakanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit leerzeichengetrennten (statt kommagetrennten) Werten, wobei der Alphakanal, wenn vorhanden, von einem Schrägstrich vorangegangen wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das `none`-Schlüsselwort; die alte kommagetrennte Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", das für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die Farbe, die von den Einstellungen erzeugt wird, befindet sich weiterhin im sRGB-Farbraum, aber {{cssxref("color_value/hsl")}} ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die ein Drehknopf oder eine kreisförmige Steuerung zum Anpassen des Farbtons verwendet. Beachten Sie, dass HSL-Farben _Helligkeit_, nicht _Leuchtdichte_ einbeziehen, was eine signifikante Überlegung ist.

Das nächste Beispiel zeigt "HWB", das für _Hue, Whiteness und Blackness_ steht. Bei sowohl `hsl()` als auch {{cssxref("color_value/hwb")}} kann der erste Wert ein {{cssxref("number")}} oder ein {{cssxref("angle")}}-Wert sein. Wenn ohne Einheit, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele demonstrieren die Darstellung von Magenta unter Verwendung der {{cssxref("color_value/lab")}}, {{cssxref("color_value/oklch")}} und {{cssxref("color_value/color")}} Farb-Funktionen.

### Konversionen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn man sich anschaut, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, sieht man, dass dieselbe Farbe in einer Kurzform, einer dreistelligen Hexnummer ausgedrückt werden kann, die zu einem rgb-Wert als sechsstelligem Hexnummer konvertiert wird, der auch zum gleichen rgb-Wert konvertiert oder als rgba-Wert ausgedrückt in Prozentsätzen.

RGB ist hardwareorientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der {{cssxref("color_value/hsl")}}-Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und ein Shift-Klick auf Farben in den Entwickler-Tools des Browsers bietet Konvertierungsfunktionen.

Zusätzlich zu den Entwickler-Tools können viele Tools RGB in HSL für Sie konvertieren und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass die Farbpicker der Entwickler-Tools und dieses Tool alle WCAG [Kontrastwerte](https://webaim.org/resources/contrastchecker/) bereitstellen.

![Farbpicker mit HSL und RGB, mit Kontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, beinhaltet das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) das Hinzufügen zusätzlicher Farbräume, einschließlich {{cssxref("color_value/lch")}} und {{cssxref("color_value/oklch")}} funktionale Farbnomenklatur und die {{cssxref("color_value/lab")}} und {{cssxref("color_value/oklab")}} Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB weiterhin der Standard- und bevorzugte Farbraum für die Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

In Bezug auf Barrierefreiheit werden Standards und Richtlinien derzeit jedoch vorwiegend im sRGB-Farbraum geschrieben, insbesondere wenn es um Farbkontrastverhältnisse geht.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Webinhalten gehen von einer sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Bewertung des sRGB-Farbraums in Betracht ziehen. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte zurück unter Verwendung der RGB-Dezimalreferenz-Skala oder über `color(srgb...)`. Beispielsweise führt das Aufrufen von `Window.getComputedStyle()` auf einem `<div>`, für das `background-color: red` gesetzt wurde, dazu, dass die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurückgegeben wird — die RGB-Dezimalreferenz. Wenn [relative Farben verwendet werden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt das Aufrufen von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da sie an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farben in Bezug auf RGB, nicht so, wie das menschliche Auge Farben wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann dennoch über grüne Zapfen, jedoch dunkler als normales Sehen wahrgenommen werden. Sowohl protane (rot-geschwächt) als auch deutan (grün-geschwächt) Defizite verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwickler-Tools können helfen, Farbsehunterschiede direkt in Ihrem Browser zu simulieren. Beispielsweise ermöglicht der Barrierefreiheitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheits-Panel.

![Ausschnitt der Firefox-Entwickler-Tools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtöne") ist ein kritisches Element, aber die Verwendung von Farbe ("Farbtöne") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt, muss jede Berechnung von Kontrast Leuchtdichte einbeziehen.

Darüber hinaus spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} auf `normal` gesetzt ist, und `14pt` (ungefähr `18.7px`) für `bold` Text. Angemerkt wird:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringem Kontrast leichter zu lesen. Daher ist die Kontrastsanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Auswahl von Farboptionen für großen Text zu verwenden, was für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Obwohl größerer Text keinen so großen Kontrast zu seinem Hintergrund erfordert wie kleinerer Text, ist eine Vergrößerung der Schriftgröße kein Allheilmittel.

"Normale" Druckschrift wird gewöhnlich als 11.5pt bis 12pt betrachtet, was 16px auf dem Bildschirm entspricht. Während eine kleinere Schrift lesbar sein kann — ein Benutzer kann Buchstaben mit ~70% Genauigkeit erkennen — ist das nicht leserlich. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 benötigt die doppelte Größe, also etwa eine 31px-Schrift. Aus diesem Grund erfordern die WCAG-Richtlinien, dass Benutzer in der Lage sein müssen, Text beliebig zu vergrößern.

Während ein zu klein angezeigter Text schwer zu lesen ist, ist ein zu groß angezeigter Text ebenfalls schwer zu lesen. Bei einer Schriftgröße über etwa 96px nimmt die Lesegeschwindigkeit für Menschen mit normalem Sehvermögen ab. Ebenso, wenn es auf einer Seite einen großen Unterschied zwischen der kleinsten und größten Schriftgröße gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser allen Text zoomen, wenn der Benutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheit, dass mehr Kontrast besser ist. Das ändert sich bei Animationen. "Sicherere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Für mehr zu Farbkontrast in Animationen siehe [Drei Blitze oder unterhalb des Schwellenwerts Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Außerdem müssen Symbole ausreichend Kontrast für die Wahrnehmung aufweisen. Siehe [WCAG 2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist die Differenz in der Leuchtdichte einer Farbe, die es uns ermöglicht, den Kontrast zu sehen. Relative Leuchtdichte ist in WCAG als "die relative Helligkeit eines Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie im Bezug zum RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Literaturstellen). Interpretiert gemäß des W3C-Standards oben würde dies bedeuten, dass Weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte, und Schwarz, normiert auf 0, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` bzw. `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher kommen die Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als ein einzelnes Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat beispielsweise eine größere Leuchtdichte als Blau. Dies wurde durch Design umgesetzt, _um die weiße Ausrichtung des Monitors zu erreichen_, laut des NASA-Dokuments „[Leuchtdichte-Kontrast in Farbgraphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)“.

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Wo die menschliche Wahrnehmung ins Spiel kommt, zählt eine Differenz in der Leuchtdichte mehr als eine Farbunterschied. Dies ist wichtig, da Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, selbst für solche, die farbenblind sind. Mit diesem Verständnis kann Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, durch Platzierung dieser Farben gegen eine andere mit kontrastierender Leuchtdichte besser lesbar gemacht werden. Eine interessante Studie der NASA über die Farbe Blau stellte fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, leserlich gemacht werden kann, wenn _auf ausreichenden Leuchtdichtekontrast geachtet wurde_ (aus dem Artikel, [Gestaltung mit Blau](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)).

Die Berechnungen für relative Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Checker für Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen, wie man [relative Leuchtdichte berechnen](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) kann.

## Farbwahrnehmung

Farbe ist unsere Wahrnehmung des schmalen Bands des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr zu erkennen als andere. Etwa 65% der Zapfen sind _am stärksten_ empfindlich für ein Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "Rot"-Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen als die beiden anderen Typen gibt, sind diese Zapfen sehr empfindlich, was ihre geringe Anzahl teilweise ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegel-Mosaik normaler Sicht, und rechts das eines mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Kegel-Mosaik der normalen Sicht, und rechts das eines mit Protanopie, einer Form von Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu erzeugen, was wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Separat ermöglichen die roten, grünen und blauen Zapfen das Wahrnehmen von Millionen von Farben mit normalem Sehen. In Bezug auf Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Farbton und Farbintensität) verarbeitet.

Leuchtdichte bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbintensität tragen ein Drittel der Detailfülle von Leuchtdichte. Bilddatenkompression nutzt diese Tatsache aus. So zum Beispiel wird im [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte abgetastet.

Für Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe, als Farbton und Farbenstärke, ist wichtig, um _Gegenstände_ wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm zu unterscheiden.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich abhängig davon, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselben sRGB-Farben. Kontextsensitive Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es denkt, dass im Schatten liegt oder nicht.

![Ein Bild eines Schachbretts, wo identische Farben unterschiedlich aussehen, wenn sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und unsere Farbenwahrnehmung werden durch den Kontext der umliegenden Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Dies macht es schwierig, Kontrast vorherzusagen. Es handelt sich nicht nur um ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst, Farbe ist genauso über menschliche Physiologie und Wahrnehmung im Gehirn wie über die Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass das Umgebungslichterethos die Fähigkeit beeinflusst, Farben und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig und auf die gleiche Weise an Lichtbereiche und dunkle Bereiche an und vice versa. Das liegt an den physiologischen Gegebenheiten, wie unsere Augen gebaut sind. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Lokale Anpassung findet direkt auf der "Seite" statt, die ein Leser betrachtet. Zum Beispiel, wenn Sie blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen gleichen blauen Text mit einem grauen Highlight anders wahrnehmen, wenn er in einem schwarzen {{HTMLElement("div")}} oder einem weißen ist. Dies wird _lokale_ Anpassung genannt. Diese Unterschiede in der Fähigkeit, den Text wahrzunehmen, sind betroffen, auch wenn sich die Umgebungsbeleuchtung im Raum nicht ändert.

Der Implikation zufolge können Webentwickler, die die Lesbarkeit von Text gegenüber einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen.

Dunkelanpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erleben Sie Dunkelanpassung. Es kann einige Minuten dauern, bis man sich daran gewöhnt hat.

Lichtanpassung ist das Gegenteil. Von einem dunklen Raum in grelles Sonnenlicht zu gelangen, ist schneller, kann aber auch schmerzen.

Der Implikation zufolge können Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei dem sich die Umgebungsbedingungen eines Raums geändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)-Media Query verwenden.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der meiste Schwerpunkt auf Leuchtdichte, wenn versucht wird, genug Kontrast zwischen Text und Hintergrund zu gewährleisten oder die Möglichkeit von Anfällen bei Personen zu bewerten, die empfindlich auf lichtempfindliche Anfälle reagieren. Ein Aspekt von Farbe ("Farbtöne"), der unabhängig von der Leuchtdichte besondere Aufmerksamkeit verdient, da er auf Barrierefreiheit zutrifft, ist das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, Anfälle bei Personen auszulösen, die für lichtempfindliche Anfälle anfällig sind, unabhängig von der Leuchtdichte der Farbe. Wie in [dem speziellen Fall von Rot](#der_spezielle_fall_von_rot) besprochen, bemerkten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen sind für "Pigmente" im Malfarbkasten eines Künstlers, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben bestimmte Wellenlängen. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, lässt sich Sättigung leicht messen. Der Schlüssel ist, zu wissen, welchen Farbraum Sie verwenden, und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die häufigsten betrachteten Farbräume bei Diskussionen über Photosensibilität sind die Farbräume RGB, HSL und HSV, auch bekannt als HSB. Der HSV-Farbraum, der für _Hue_, _Saturation_ und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_ und _Brightness_ steht, werden in CSS als {{cssxref("color_value/hwb")}} für _Hue_, _Whiteness_ und _Blackness_ dargestellt.

Es ist wichtig zu wissen, welchen Farbraum Sie verwenden. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", werden aber beide als gesättigte Farben betrachtet.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann Helligkeit erhöht werden, indem Weiß hinzugefügt wird, was die Sättigung verringert. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Pink zu erlangen. Pink wird als entsättigtes Rot betrachtet.

### Sättigung und Leuchtdichte

Es gibt einen Verlust von Sättigung an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In der NASA-Studie zur [Auswirkung von Leuchtdichte auf Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) stellen sie fest, dass es einen Verlust von Sättigung bei niedrigen Leuchtdichten gibt und auch „… der Verlust von Sättigung bei hohen Leuchtdichten – die Farben nähern sich Weiß an.“

## Farbkombinationen

Kontrast allein reicht für Überlegungen zur Barrierefreiheit nicht aus. Im Falle von Animationen sind bestimmte Farbkombinationen mehr dazu geeignet, bei denen, die für photoinduzierte Anfälle anfällig sind, Anfälle auszulösen als andere. Zum Beispiel ist der Wechsel zwischen rotem und blauem Blinken problematischer als der zwischen grünem und blauem Blinken. Es wurde theorisiert, dass dies daran liegt, dass die "Rot"-empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe der Mitte) zu konzentrieren, physisch an einem anderen Ort sind als die "Blau"-empfindlichen Zapfen unserer Augen, die sich abseits der Fovea und zu den Rändern hin befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu lösen, während die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben lösen eher wie [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf) aus. Die Komplexitäten der zugrunde liegenden Hirndynamik können von einigen Farbkombinationen mehr als von anderen moduliert werden. Beispielsweise verursacht ein rotes-blaues Flackern größere kortikale Erregung als ein rotes-grünes oder blaues-grünes Flackern.

Gewisse Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können mit einigen Beeinträchtigungen interferieren. Die Kombination aus Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein auf den Farbton zur Unterscheidung von Details. Ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus, sodass es in der Regel einen erheblichen Teil der helleren Farben darstellt.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben, die eine niedrige Leuchtdichte haben, sollten die dunklere der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen und sie sind in unserem peripheren Sehen verstreut und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau mit einer geringeren Auflösung als Grün und Rot.

Dies führt zu einigen Leitlinien für die Verwendung von Blau:

- Reine Blautöne sollten in der Regel die dunkelsten von zwei Farben sein.
- Bei der Verwendung von Blau als die hellere der beiden Farben fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es sich an einem anderen Ort auf der Netzhaut fokussiert als Rot, sodass reine Rot- und reine Blautöne, die unmittelbar nebeneinander liegen können "schimmern", wenn sie nebeneinander sind.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbton") werden von unserem Gehirn auf die gleiche Weise verarbeitet. Menschliche Physiologie und Psychologie werden von der Farbe Rot, allgemein gesprochen, in anderer Weise beeinflusst als von anderen Farben. Wir reagieren physiologisch sowie psychologisch auf Farben. Es wurde beispielsweise nachgewiesen, dass [einige Farben eher epileptische Anfälle auslösen können als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption an](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)", die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS {{cssxref("filter")}}-Eigenschaft mit einer {{cssxref("filter-function/grayscale")}} oder {{cssxref("filter-function/saturate")}} {{cssxref("filter-function")}}.

### Gesättigtes Rot

„Gesättigtes Rot“ ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept von Farbsättigung ist schwer verständlich, wenn man nur auf Zahlen und Terminologie schaut. Betrachten Sie daher das folgende Bild, um das Konzept der Sättigung bei einer Farbe zu verdeutlichen:

![Rote Sättigung von Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche „Farbe“ geht von links nach rechts von der am wenigsten gesättigten zur am stärksten gesättigten über.

_Mehr als eine "rote" Farbe kann als "gesättigt" angesehen werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, hat jedoch eine geringere Helligkeit als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die häufig in der Webentwicklung verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite „Rottöne” ist die Farbe „Karmin“ ein gesättigtes Rot, das in seiner Pigmentform überwiegend rotes Licht mit Wellenlängen über 600 nm enthält; der Artikel macht die spezielle Anmerkung, dass „Karmin“ nahe dem extremen Spektrum liegt. Dies platziert es weit außerhalb der Standardfarbspektren (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich dazu, dass ein Umfeld in Rot die kognitive Funktion von Personen mit einer traumatischen Gehirnverletzung beeinflusst, erfordert Farbe im Wellenlängenbereich des Roten besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, beim Testen des _Analysis-Tools für photosensitive Epilepsie_, stellte fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Flackern reagieren. (Siehe das Video, [Das Analysis-Tool für photosensitive Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Ständiges Flackern, das heller/dunkler wird mit Raten über drei Blitzen pro Sekunde wurde gezeigt, um bei einigen Menschen photische Anfälle auszulösen. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, auch Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren einige grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Abfolge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf helle-dunkle Paare von Streifen darstellen, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder den Kontrast umkehrt oder acht helle-dunkle Paare von Streifen darstellt, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Für weitere Empfehlungen siehe das Papier [Photic- und pattern-induzierte Anfälle: Expert consensus der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte von Farbe

Farbe als Farbton und Sättigung kann unsere Stimmung beeinflussen und – oder – unsere interaktiven Erfahrungen verstärken.

### Beispiele für Auswirkungen von Farbe über das Sehen hinaus

- **Farbe kann kulturell bedingt sein:** ["Eine kulturübergreifende Studie der affektiven Bedeutung von Farbe"](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** ["Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit"](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch positive Auswirkungen auf unsere Emotionen haben:** ["Emotionale Variation durch Steuerung des Kontrasts von visuellen Inhalten durch EEG-basierte tiefere Emotionserkennung"](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** ["Farbe und Zeitwahrnehmung: Belege für zeitliche Überschätzung blauer Stimuli"](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch erhebliche Auswirkungen auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit.](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können erhöhte Glücksgefühle oder Freude bieten:** ["Blick durch 'rosarote' Brillen: Der Einfluss der Tönung auf die visuelle Affektverarbeitung"](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt für seine erheblichen Auswirkungen auf unser Verhalten:** ["Wie die Farbe Rot unser Verhalten beeinflusst"](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die eine traumatische Gehirnverletzung erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS {{cssxref("color")}}-Eigenschaft
- CSS {{cssxref("&lt;color&gt;")}}-Datentyp
- [Web-Accessibility für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit einrichten und die Integrität des Sehnervs beurteilen.
- [Photic- und pattern-induzierte Anfälle: Expert consensus der Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
