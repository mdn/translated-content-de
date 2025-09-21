---
title: "Web-Accessibility: Farben und Leuchtdichte verstehen"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Das Verständnis von Farbe, Leuchtdichte und Sättigung ist wichtig für das Design und die Lesbarkeit für alle sehenden Benutzer. Sie sind jedoch von entscheidender Bedeutung für Menschen mit eingeschränktem Sehvermögen, farbfehlerhaftem Sehen und anderen neurologischen, kognitiven und sonstigen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die Nutzern mit farbunempfindlichem Sehen helfen sollen, gemeinhin als "Farbenblindheit" bezeichnet. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. An der Oberfläche scheint das Thema einfach zu sein, dennoch ist es komplex, da die Farbwahrnehmung sowohl von der Physiologie des Auges als auch von der Verarbeitung im menschlichen Gehirn abhängt, genauso wie von Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung einer Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. Was die Barrierefreiheit betrifft, haben bestimmte Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftart](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie von sich aus Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, selbst Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters vom Bildschirm, der Umgebungslichteffekt, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter Farbe nach dem Erreichen der Augen wahrnimmt, ist noch eine andere Sache und kann von der allgemeinen Gesundheit beeinflusst sein. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die Entwicklern ermöglichen, Stile basierend auf den Benutzervorlieben anzubieten, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, gibt die [Umgebungslichtsensor-Schnittstelle](/de/docs/Web/API/AmbientLightSensor) das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurück, sodass eine Webseite auf Änderungen der Lichtintensität reagieren und den Text entsprechend anpassen kann. Darüber hinaus ermöglichen die genannten Media Queries Entwicklern, alternative Benutzererfahrungen zu bieten, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen und die Stufen automatisch je nach dem Standort des Benutzers und der Art des verwendeten Bildschirms angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und wichtigsten Konzepte, um zugängliche Webinhalte mit Farbe zu erstellen. Die Leuchtdichte ist jedoch von besonderer Bedeutung, denn das Verständnis dessen, was sie ist und wie sie eingesetzt wird, ermöglicht Barrierefreiheit für Menschen mit Farbenblindheit sowie für diejenigen, die Farben wahrnehmen können. Der Leuchtdichtekontrast ermöglicht es farbenblinden Menschen, Dunkel von Hell zu unterscheiden.

Die Leuchtdichte muss festgelegt werden, bevor der Kontrast ermittelt wird. Wenn wir von Farbkontrast sprechen, beinhalten die W3C-Formeln die Leuchtdichte und nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um richtig dargestellt zu werden. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminanz" und manchmal als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches wie die Benennung gängiger Farben kann zur Debatte stehen. Zum Beispiel kann die Farbe "Karmesinrot" von einigen als Hex-Wert `#990000` und von anderen als `#DC143C` beschrieben werden. In diesem Dokument verwenden wir die Terminologie, wie sie auf der CSS-Seite [`<named-color>`](/de/docs/Web/CSS/named-color) definiert ist.

Bei der Arbeit mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume auf unterschiedliche Messsysteme abbilden.

Im Farbdruck hat Ihr Drucker wahrscheinlich Tintenpatronen für Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellenlängen _entfernen_ und nur den engen Bereich widerspiegeln, mit dem sie verbunden sind. RGB ist ein additives Farbmodell, das verschiedene Proportionen von roten, grünen und blauen Lichtern hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser automatisch die Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe wird jedoch in diesem Dokument davon ausgegangen, dass die meisten Berechnungen im RGB-Farbraum und sehr spezifisch im sRGB-Farbraum erfolgen.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB dezimal, RGB Prozent, HSL, HWB, LCH, Lab und CMYK, unter anderem.

Für digitale Anliegen hat sich seit jeher viel der Technologie im RGB-Farbraum befunden. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, einschließlich der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zur OpenGL-Referenzierung die Verwendung von RGBA anstelle von sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; sehen Sie ein Beispiel dafür im Artikel "[Klärung mit Farben](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} Variationen gibt, wie etwa im {{Glossary("RGB", "RGB")}}-Farbraum. Zum Beispiel gehören zu den Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele der CSS-Notation zur Definition einer Farbe. Hier ist die Beispiel-Farbe für jede ein vollständig deckendes Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge rot, grün und blau. Wir können die sRGB-Werte auch direkt über eine Zahl von 0 bis 255 festlegen.

Danach werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Nummerierungssystem mit der Basis 16, bei dem der ganzzahlige Wert von 0-255 durch zwei Ziffern angegeben wird, die von 0-15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Daher: `ff` = `255`, `00` = `0`, und `d5` = `200`. Das Symbol '#' steht vor der Farbe, um anzugeben, dass der Wert hex ist.

Wenn alle Werte gleiche Ziffernpaare sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. So ist `f00` dasselbe wie `ff0000`. Wenn eine vierte Zahlenreihe vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Deckungsgrad der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger ist und folglich weniger transparent. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für vollständig deckend.

Das Beispiel zeigt auch die veraltete Syntax sowohl für [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die alte Syntax für Farb-Funktionen ist durch Kommata getrennt, mit einer separaten Funktion, wenn der Alphakanal enthalten ist. Neue Farbfunktionen haben nur eine Syntax mit durch Leerzeichen getrennten (anstatt durch Kommata getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich begleitet wird. Die moderne Syntax ermöglicht das Mischen von Zahlen und Prozenten und unterstützt das `none` Schlüsselwort; die durch Kommata getrennte alte Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Farbton_, _Sättigung_ und _Helligkeit_ steht. Viele halten HSL-Farbwerte für intuitiver als RGB-Werte. Die durch die Einstellungen erzeugte Farbe befindet sich immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche zu erstellen, die einen Knopf oder ein kreisförmiges Steuerungselement verwendet, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine bedeutende Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Farbton_, _Weißheit_ und _Schwärze_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert entweder ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn keine Einheit angegeben ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen, wie Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farb-Funktionen dargestellt wird.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb des gleichen Farbraums auf viele Weisen ausgedrückt werden. Wenn man darauf schaut, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, erkennt man, dass dieselbe Farbe in einer Kurznotation, als dreistellige Hex-Zahl, die in einen RGB-Wert als sechsstellige Hex-Zahl umgewandelt wird, der ebenso in denselben RGB-Wert konvertiert wird oder als RGBA-Wert, ausgedrückt in Prozent.

RGB ist hardware-orientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und mit Shift-Klick auf Farben in den Entwicklertools der Browser wird eine Umwandlungsfunktionalität bereitgestellt.

Zusätzlich zu Entwicklerwerkzeugen können viele Werkzeuge RGB in HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie umwandelt, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Kontrastüberprüfung im Browser. Beachten Sie, dass alle Entwicklertools-Farbauswähler und dieses Tool WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) zusätzliche Farbräume, einschließlich der funktionalen Farbschreibweisen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) sowie der Farbkoordinatensysteme [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab), die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB immer noch der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Verbreitung.

Wo es um Barrierefreiheit geht, sind jedoch Standards und Richtlinien derzeit vorwiegend unter Verwendung des sRGB-Farbraums geschrieben, insbesondere in Bezug auf Farbstärke-Kontrastverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Webinhalten setzen sRGB-Codierung voraus. Es sei denn, es ist bekannt, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Wird ein anderer Farbraum verwendet, wenden Sie die Prinzipien der [Mindest-Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte entweder im RGB Dezimal-Referenzmaßstab oder über `color(srgb...)` zurück. Beispielsweise gibt der Aufruf von `Window.getComputedStyle()` bei einem `<div>` mit `background-color: red` für den berechneten Hintergrund die Farbe als `rgb(255, 0, 0)` zurück — die RGB Dezimalreferenz. Wird jedoch [relative Farben verwendet](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt der Aufruf von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da sie an die Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farben im Hinblick auf RGB und nicht, wie das menschliche Auge Farbe wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann dennoch über grüne Zapfen wahrgenommen werden, allerdings dunkler als die normale Sicht. Sowohl Protan (rot-defizient) als auch Deutan (grün-defizient) Schwächen verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklerwerkzeuge können helfen, Farbunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Barrierefreiheits-Inspektor von Firefox das Simulieren von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich.

![Ausschnitt der Firefox-Entwicklertools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie zuvor erwähnt, muss jede Berechnung des Kontrasts die Leuchtdichte enthalten.

Darüber hinaus wird die "Form" des Textes selbst eine Rolle spielen. Dünne Buchstaben werden schwieriger zu lesen sein als dicke; alle Schriftarten benötigen Raum zum "Atmen", um von Menschen wahrgenommen werden zu können.

### Kontrast und Schriftgröße

Die [WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (etwa `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` und `14pt` (etwa `18.7px`) für `fett` Text sind. In der Aussage heißt es:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringerem Kontrast leichter lesbar. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine größere Bandbreite an Farboptionen für großen Text zu verwenden, was insbesondere beim Design von Seiten, insbesondere Titeln, hilfreich ist._

Während größerer Text nicht so starken Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normale" Schriftgrößen werden üblicherweise als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schriftarten lesbar sein können — ein Benutzer kann Buchstaben mit einer ~70%igen Genauigkeit erkennen — ist das nicht lesbar. Eine 16px-Schriftgröße ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit einem Sehvermögen von 20/40 benötigt die doppelte Größe, etwa 31px. Dies ist der Grund, warum die WCAG-Richtlinien verlangen, dass Benutzer in der Lage sind, jeden Text zu vergrößern.

Während zu klein angezeigter Text schwer zu lesen ist, ist dies ebenso der Fall für Texte, die zu groß sind. Für Nutzer mit 20/20 Sehvermögen sinkt die Lesegeschwindigkeit ab einer Textgröße von etwa 96px. Auch wenn auf einer Seite ein großer Unterschied zwischen der kleinsten und größten Schriftgröße besteht, wird der größere Text weniger lesbar, wenn Nutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser beim Zoomen jeden Text vergrößern.

Im Allgemeinen gilt im Hinblick auf Barrierefreiheit: Je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sichere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Drei Blitze oder unterhalb der Schwelle - Verständnis der SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu erkennen. Relative Leuchtdichte ist im WCAG als "die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie im Hinblick auf den RGB-Farbraum verwendet wird, der ein ganzzahliger Wert zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in der meisten, aber nicht allen Literatur). Wenn man den obigen W3C-Standard interpretiert, würde das bedeuten, dass weiß, auf 1 normiert, einen RGB-Wert von `rgb(255 255 255)` hätte, und schwarz, auf 0 normiert, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass schwarz und weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher stammen also diese Zahlen von 0 bis 255? Historisch gesehen haben Grafik-Engines die Farbkanäle als ein einziges Byte gespeichert, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies geschah durch Design, _um die weiße Ausrichtung des Monitors zu erreichen_, so das NASA-Dokument, "[Leuchtdichtekontrast in Farbgraphiken](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichtekomponente, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis bestimmt werden.

Im Hinblick auf die menschliche Wahrnehmung spielt der Unterschied in der Leuchtdichte eine größere Rolle als ein Farbdifferenz. Dies ist wichtig, denn Leuchtdichtekontrast ermöglicht die Entwicklung von Inhalten, die auch Menschen mit Farbenblindheit sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer geringen Leuchtdichte schwer zu sehen sind, durch Platzierung gegen eine andere Farbe mit unterschiedlicher Leuchtdichte besser lesbar gemacht werden können. Eine interessante Studie von der NASA über die Farbe Blau beispielsweise stellte fest, dass diese Farbe, die eine geringe Leuchtdichte hat, lesbar gemacht werden kann, wenn _bei der Erzielung eines angemessenen Leuchtdichtekontrasts Sorgfalt angewendet wurde_ (Aus dem Artikel, [Designen mit Blau](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine einfachen. Glücklicherweise gibt es [online Leuchtdichte- und Kontrast-Prüfer](https://www.siegemedia.com/contrast-ratio) sowie Anweisungen zur [Berechnung der relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbe wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die Lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am meisten_ empfindlich gegenüber einem Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grün-empfindlich, und nur [5% sind blau-empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es viel weniger blau-empfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr sensibel, was ihre geringere Anzahl teilweise ausgleicht.

Tiefe, reine Blautöne werden anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir viel weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Zapfenmosaik des Standard-Sehvermoegens, und rechts das eines Menschen mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik des Standard-Sehvermoegens und rechts das eines Menschen mit Protanopie, einer Form der Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu erschaffen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Unabhängig davon ermöglichen rote, grüne und blaue Zapfen dem Standard-Sehen, Millionen von Farben wahrzunehmen. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Farbton und Farbintensivität) verarbeitet.

Leuchtdichte bietet feine Details in der Vision, einschließlich der Unterscheidung von Kanten und Text. Ton und Farbigkeit tragen ein Drittel der Detailarbeit der Leuchtdichte. Bilddatenkompression macht sich diese Tatsache zunutze. Zum Beispiel wird im [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte abgetastet.

Für die Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast entscheidend für Text ist. Farbe, in Form von Farbton und Farbigkeit, ist wichtig, um _Elemente zu unterscheiden_, wie z. B. verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wichtiger Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen anders je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate die gleiche sRGB Farbe. Kontxtabhängige Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung in Ihrem Gehirn passt sich an, basierend auf der Annahme, was im Schatten ist oder nicht.

![Ein Bild eines Schachbretts, auf dem gleiche Farben unterschiedlich erscheinen, je nachdem, ob sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben identische Farben auf Ihrem Monitor, erscheinen aber aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbwahrnehmung wird durch den Kontext der nahegelegenen Farben und andere Design- oder Bildelemente beeinflusst. Dies macht die Vorhersage von Kontrast herausfordernd. Es ist nicht nur eines mathematischen Verhältnisses zwischen zwei Farben.

Zusammengefasst: Farbe ist genauso sehr eine Frage der menschlichen Physiologie und Wahrnehmung im Gehirn wie eine der Lichtmessung von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass das Umgebungslicht die Fähigkeit zur Wahrnehmung von Farbe und Kontrast beeinflusst. Licht und seine Messungen sind linear, aber die menschliche Sicht und Wahrnehmung sind es nicht.

## Adaption

Unsere Augen passen sich nicht auf gleiche Weise an, wenn sie von hellen in dunkle Bereiche und umgekehrt wechseln. Das liegt an der Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: Lokale Anpassung und Anpassung an die Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Zum Beispiel, wenn Sie einen blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, nehmen Ihre Augen denselben blauen Text mit grauem Hintergrund anders wahr, wenn er in einem schwarzen {{HTMLElement("div")}}, oder einem weißen ist. Dies wird als _lokale_ Anpassung bezeichnet. Diese Differenz in der Fähigkeit, den Text zu erkennen, wird beeinflusst, obwohl sich die Umgebungsbeleuchtung im Raum nicht ändert.

Die Implikation ist, dass Webentwickler, die versuchen, die Lesbarkeit von Text gegen einen Hintergrund zu verbessern, die Prinzipien der lokalen Anpassung nutzen können.

Dunkelanpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erleben Sie Dunkelanpassung. Es kann einige Minuten dauern, sich daran zu gewöhnen.

Lichtanpassung ist das umgekehrte. Vom dunklen Raum ins helle Sonnenlicht ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die versuchen, die Lesbarkeit von Text zu verbessern, wenn sich die Umgebungsbedingungen in einem Raum ändern, die `AmbientLightSensor`-Schnittstelle und die Medienabfrage [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der meiste Fokus auf Leuchtdichte, um sicherzustellen, dass genügend Kontrast zwischen Text und Hintergrund besteht, oder um die Möglichkeit von Krampfanfällen bei solchen mit Fotosensibilität zu bewerten. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von Leuchtdichte, verdient besondere Aufmerksamkeit in Bezug auf Barrierefreiheit: das Konzept der Sättigung. Dies ist auf die Fähigkeit zurückzuführen, bei denen, die für fotosensitive Anfälle empfänglich sind, unabhängig von der Leuchtdichte der Farbe Krampfanfälle verursachen zu können. Wie in [dem besonderen Fall von Rot](#der_spezielle_fall_von_rot) diskutiert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass, _unabhängig von der Leuchtdichte, ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Malkasten eines Künstlers sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Obwohl die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, ist Sättigung leicht zu messen. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten in Bezug auf Fotosensibilität betrachtet werden, sind die RGB-, HSL- und HSV-, auch bekannt als HSB, Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_, und _Wert_, und das Synonym HSB, das für _Farbton_, _Sättigung_, und _Helligkeit_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weißheit_ und _Schwärze_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum man arbeitet. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie im HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", werden aber beide als gesättigte Farbe angesehen.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe vermischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zu der Farbe hinzufügt; um das Beispiel weiterzuführen, die Helligkeit kann durch das Hinzufügen von Weiß erhöht und die Sättigung reduziert werden. Ein typisches Beispiel ist, Weiß zu Rot hinzuzufügen, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt einen Sättigungsverlust an den Extremen der Leuchtdichte und an den Extremen von Schwarz und Weiß. In NASAs [Effekt der Leuchtdichte auf Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php), weist darauf hin, dass es einen Verlust an Sättigung bei niedrigen Leuchtdichten gibt und auch, "…der Verlust der Sättigung bei hohen Leuchtdichten – die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein ist nicht genug, wenn es um Überlegungen zur Barrierefreiheit geht. Im Fall von Animationen sind bestimmte Farbkombinationen wahrscheinlicher als andere, bei denen, die dafür anfällig sind, fotosensitive Anfälle zu verursachen. Zum Beispiel ist abwechselndes Blitzen zwischen Rot und Blau problematischer als abwechselndes Blitzen zwischen Grün und Blau. Es wurde vermutet, dass dies darauf zurückzuführen ist, dass die "rot"-empfindlichen Zapfen unserer Augen, die sich tendenziell um die Fovea (nahe der Mitte) gruppieren, an einem anderen Punkt als die "blau"-empfindlichen Zapfen unserer Augen, die sich abseits der Fovea und am Rand befinden, physisch lokalisiert sind. Die elektrischen Signale vom Auge zum Gehirn haben viel zu verarbeiten, während sie in unserem Gehirn verarbeitet werden.

Einige Farben sind wahrscheinlicher, [epileptische Anfälle zu verursachen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten, die den Gehirndynamiken zugrunde liegen, können von einigen Farbkombinationen stärker als andere moduliert werden. Zum Beispiel löst ein rot-blau flimmernder Reiz eine größere kortikale Erregung aus als ein rot-grün oder blau-grün Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen beeinträchtigen. Die Kombination rot/blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein auf den Farbton für die Unterscheidung von Details. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus, daher ist es in der Regel ein bedeutender Teil der helleren Farben.

### Arbeiten mit Blau

Manche Menschen können nicht alle Farben unterscheiden. Manche Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben mit niedriger Leuchtdichte sollten die dunkelsten der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen, und diese sind in unserem peripheren Sehvermögen verstreut und nicht in unserem zentralen Sehvermögen vorhanden. Das menschliche Auge sieht Blau mit niedrigerer Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte typischerweise die dunkelste von zwei Farben sein.
- Wenn Blau als die hellere der zwei Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts bewirkt, dass es sich an einem anderen Punkt der Netzhaut als Rot fokussiert, sodass eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander gelegen und einander berührend sind, "flimmern" können, wenn sie nebeneinander liegen.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen auf gleicher Weise verarbeitet. Die menschliche Physiologie und Psychologie sind durch die Farbe Rot im Allgemeinen anders betroffen als durch die anderer Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die Menschen helfen können, die lichtempfindlich sind. Um die Graustufen-Einstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Begriffe schaut, daher sollten Sie sich das Bild unten ansehen, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons.svg, gespeichert als png, Urheber: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" verläuft von am wenigsten gesättigt auf der linken Seite bis zum am meisten gesättigt auf der rechten Seite.

_Mehr als ein "roter" Farbton kann als ein "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine vollständige Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die üblicherweise in der Webentwicklung verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite über "Schattierungen von Rot" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform meistens rotes Licht mit Wellenlängen länger als 600nm enthält; der Artikel stellt die besondere Anmerkung dazu, dass "Karmin" nahe am extremen Spektrum liegt. Dies platziert es weit über den Standard-Gamuts (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine grobe Annäherung."

### Gesättigtes Rotes Blitzen

Zusätzlich zu einer roten Umgebung, die die kognitive Funktion von Personen mit traumatischen Hirnverletzungen beeinflusst, erfordert Farbe im Wellenlängenbereich des roten Spektrums besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, bei den Tests mit dem _Epilepsie-Analysetool für photosensible Epilepsie_, stellte fest, dass die Anfallsraten viel höher als erwartet waren. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Sehen Sie sich das Video an, [Das Analyse-Tool für photosensible Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Kontinuierliches Blitzen heller/dunkler bei Frequenzen höher als drei Blitze pro Sekunde hat sich gezeigt, um fotogene Anfälle bei manchen Menschen auszulösen. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, hochkontrastreiche Muster, wie parallel weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren einige grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Sequenz von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze in einer Sekunde stattfinden.
2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf Paare von hellen-dunklen Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren, oder acht Paare von hellen-dunklen Streifen, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung wandert.

Für weitere Empfehlungen siehe das Papier [Photic- und Muster-induzierte Anfälle: Experten-Konsens der Epilepsy Foundation von Amerika](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte der Farbe

Farbe in Form von Farbtönen und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern — oder verschlechtern.

### Beispiele für den Effekt von Farbe über die Sicht hinaus

- **Farbe kann kulturell abhängig sein:** [Eine kulturvergleichende Studie der affektiven Bedeutungen von Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Effekte von Farbwert, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können sich ebenfalls positiv auf unsere Emotionen auswirken:** [Emotionale Variation durch Kontrolle des Kontrasts von visuellen Inhalten über EEG-basierte tiefe Emotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Nachweis für zeitliche Überschätzung von blauen Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Gläser können das Glücksgefühl erhöhen oder Freude bringen:** [Schauen durch "rosarote" Brillen: Der Einfluss von Färbung auf visuelle emotionale Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Effekte auf unser Verhalten zu haben:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit einem traumatischen Gehirntrauma [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich "auf Rot abgestimmt", dass Ophthalmologen einen Test mit ihm entwickelt haben, der die Integrität des Sehnervs beurteilt.
- [Photic- und Muster-induzierte Anfälle: Experten-Konsens der Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
