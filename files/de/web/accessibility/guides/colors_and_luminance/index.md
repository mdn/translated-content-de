---
title: "Web-Accessibility: Verständnis von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 3d06d82cbddf640291fd66cf85cd9014c4e867c5
---

Das Verständnis von Farbe, Leuchtdichte und Sättigung ist für das Design und die Lesbarkeit für alle sehenden Nutzer wichtig, unerlässlich ist es jedoch für Menschen mit eingeschränktem Sehvermögen, farbenfehlerhaften Sehen und speziellen neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehbehinderte Nutzer sowie Richtlinien, die Nutzern mit farbunempfindlichem Sehen, gemeinhin als "Farbenblindheit" bekannt, helfen sollen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit Vestibularstörungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und ihre Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach, dennoch ist es komplex, da die Farbwahrnehmung sowohl von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn als auch vom Licht, das von einem Computerbildschirm ausgestrahlt wird, abhängt.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Farbwahrnehmung in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf Barrierefreiheit haben die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Fonts sind so dünn oder verziert, dass sie allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters vom Bildschirm, der Umgebungs-Hintergrund, die Gesundheit seiner Augen und mehr beeinflussen, wie die Farbe vom Betrachter wahrgenommen wird. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen.

Bei Unterstützung liefert die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle den aktuellen Lichtpegel oder die Beleuchtung des umgebenden Lichts um das Hostinggerät, wodurch eine Webseite auf jede Änderung der Lichtintensität aufmerksam wird und den Text entsprechend anpassen kann. Zudem ermöglichen es die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontrastniveaus anzeigen, die automatisch je nach Benutzerstandort und Art des verwendeten Bildschirms angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und wichtigsten Konzepte bei der Erstellung von zugänglichen Webinhalten mit Farbe. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis ihrer Bedeutung und Anwendung Barrierefreiheit für Farbenblinde ebenso wie für Farbwahrnehmende ermöglicht. Das Leuchtdichtekontrast ermöglicht Farbenblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss ermittelt werden, bevor der Kontrast festgelegt werden kann. Wenn von Farbkontrast die Rede ist, verwenden W3C-Formeln Leuchtdichte und nicht nur die Farben ("Farbtöne").

### Terminologie

Die Terminologie kann verwirrend sein, weil unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um richtig verstanden zu werden. Beispielsweise ist "Sättigung" in manchen Kreisen als "Chroma" bekannt. In anderen unterscheiden sich "Chroma" und "Sättigung" als Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminanz", manchmal als "Helligkeit" bezeichnet. Selbst so etwas scheinbar Einfaches wie die Benennung einfacher Farben kann zur Debatte stehen. Zum Beispiel wird die Farbe "Karminrot" manchmal mit den Hex-Werten `#990000` und von anderen mit `#DC143C` beschrieben. In diesem Dokument nutzen wir die Terminologie, wie sie auf der CSS-Seite [`<named-color>`](/de/docs/Web/CSS/named-color) definiert ist.

Wenn man mit Farbe arbeitet, ist es wichtig zu wissen, in welchem "Farbraum" man sich befindet, da unterschiedliche Farbräume unterschiedlichen Messsystemen entsprechen.

Im Farbendruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarzpatronen (CMYK). CMYK ist ein subtraktives Model, bei dem die vier Farben spezifische Lichtwellenlängen _entfernen_ und nur den schmalen Bereich reflektieren, mit dem sie assoziiert werden. RGB ist ein additives Farbmodel, das unterschiedliche Anteile an rotem, grünen und blauem Licht hinzufügt.

Derzeit überwiegt der {{Glossary("RGB", "RGB Farbraum")}} als der Raum, mit dem Webentwickler arbeiten. Während HEX, RGB und HSL Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnotationsarten. [CSS Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aber da der RGB Farbraum in der Messung von Farbausgabe dominiert, werden die meisten Berechnungen in diesem Dokument als in den RGB Farbraum einbezogen betrachtet, und zwar ganz speziell in den sRGB Farbraum.

## Der sRGB Farbraum

Farben haben viele Möglichkeiten, wie sie definiert werden können, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Für digitale Belange liegt ein Großteil der Technologie historisch im RGB Farbraum. Das RGB Farbmodell wird erweitert, um "alpha" einzuschließen – RGBA – um die Deckkraft einer Farbe anzugeben. Andere Methoden zur Messung von Farbe beinhalten Messungen, die andere Farbräume nutzen und in modernen Displays und Browsern unterstützt werden. Dennoch dominieren Farbmessungen im RGB Farbraum, z.B. bei Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel zur Verwendung von OpenGL auf RGBA statt sRGB Bezug nehmen. WebGL verwendet normalerweise das RGBA-Format; sehen Sie ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}} Farbraum, Variationen gibt. Beispielsweise zu den Variationen des RGB Farbraums gehören **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der CSS Notationen, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jede eine vollständig deckende Magenta:

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

/* by LAB representation of the sRGB value */
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

Wir können die sRGB-Werte direkt als Prozentsatzsetzen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für die Farbe ist. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Ebenso können wir die sRGB-Werte direkt durch eine Zahl von 0 bis 255 festsetzen.

Anschließend werden Hex-Farbwertezeigt. Hexadezimal ist ein Zahlensystem mit Basis 16, wobei das Ganzzahl-Int 0-255 von zwei Ziffern dargestellt wird, die von 0-15 reichen und die Zahlen 0-9 sowie a-f für 10-15 nutzen. Somit ist `ff` = `255`, `00` = `0`, und `d5` = `200`. Ein `#`-Symbol steht vor der Farbe, um anzuzeigen, dass der Wert in Hex ist.

Wenn alle Werte Paare aus identischen Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. Somit ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlen-Set vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz in Bezug auf den Deckkraftwert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe weniger transparent und somit undurchsichtiger ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%`, um vollständig undurchsichtig zu sein.

Das Beispiel zeigt auch die alte Syntax für sowohl [`rgb()` und `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farbfunktionen ist durch Kommas getrennt, mit einer separaten Funktion, wenn der Alpha-Kanal eingeschlossen ist. Neue Farbfunktionen haben nur eine Syntax mit durch Leerzeichen getrennten (anstatt durch Kommas getrennten) Werten, wobei der Alpha-Kanal, falls vorhanden, durch einen Schrägstrich vorausgeht. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das Schlüsselwort `none`; die durch Komma getrennte alte Syntax nicht.

Die folgenden Beispiele zeigen "HSL", das steht für _Hue, Saturation, and Lightness_. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die durch die Einstellungen erzeugte Farbe sind immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche mit einem Drehknopf oder Kreiskontrolle zu erstellen, um den Farbton zu verstellen. Beachten Sie, dass HSL-Farben _Helligkeit_, aber nicht _Leuchtdichte_ einbeziehen, was eine bedeutende Überlegung ist.

Die nächsten Beispiele zeigen "HWB" was für _Hue, Whiteness und Blackness_ steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn die Einheit fehlt, wird der Wert als `deg` Grad interpretiert.

Es gibt noch mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen das Darstellen von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), and [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionswertungen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf unterschiedliche Weisen ausgedrückt werden. Wenn man sich ansieht, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe als kurzes, dreistelliges Hexformat ausgedrückt werden kann, das in einen rgb-Wert als ein sechsstelliges Hexformat umgewandelt wird, das ebenfalls in denselben rgb-Wert umgewandelt wird, oder als ein rgba-Wert, in Prozentsätzen ausgedrückt.

RGB ist hardware-orientiert und spiegelt den Einsatz von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und das Shift-Klicken von Farben in den Entwicklertools des Browsers bietet Konvertierungsfunktionalität.

Zusätzlich zu Entwicklertools gibt es viele Tools, um RGB zu HSL für Sie zu konvertieren und sowohl das RGB-Hexadezimal- wie auch das CSS-Funktionssintax anzugeben. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex Optionen, um Kontraste im Browser zu überprüfen. Beachten Sie, dass sowohl die Farbpicker der Tools für Entwickler als auch dieses Tool WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte angeben.

![Farbpicker mit HSL und RGB, mit Farbwaltungswerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, darunter die funktionale Farbschreibweise [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) sowie die Farbsysteme [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab), die jede sichtbare Farbe angeben können. Diesen sei gesagt, dass sRGB weiterhin der Standard- und bevorzugte Farbraum für die Barrierefreiheit ist, wegen seiner Allgegenwärtigkeit.

Wo barrierefreie Gestaltung gefordert ist, sind die Standards und Richtlinien derzeit hauptsächlich im sRGB Farbraum geschrieben, besonders in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heute zum Anzeigen von Web-Inhalten verwendeten Systeme nehmen eine sRGB-Codierung an. Es sei denn, es ist bekannt, dass ein anderer Farbraum verwendet wird, um die Inhalte zu verarbeiten und darzustellen, sollten Autoren in sRGB-Farbraum bewerten. Wenn andere Farbräume verwendet werden, gelten die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143).

### Abfrage von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) liefert Werte unter Verwendung der RGB-Dezimalskala oder `color(srgb...)`. Zum Beispiel gibt das Abrufen von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: #ff0000` gesetzt den berechneten Hintergrundfarbe als `rgb(255 0 0)` zurück — die RGB-Dezimalreferenz. Bei [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` den berechneten Hintergrund als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Hinblick auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farb-Sehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann dennoch über grüne Zapfen gesehen werden, wenngleich dunkler als normales Sehvermögen. Sowohl Protan- (rote Schwäche) als auch Deutan- (grüne Schwäche) Defizite führen zu Schwierigkeiten, _zwischen_ Rot und Grün zu unterscheiden.

Entwicklertools können helfen, Farbwahrnehmungsunterschiede direkt im Browser zu simulieren. Beispielsweise ermöglicht Firefox's Accessibility Inspector die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich.

![Ausschnitt der Firefox Entwicklertools mit dem Simulation Pop-up](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist eine wesentliche Komponente, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu erstellen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts Leuchtdichte einbeziehen.

Zusätzlich spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dickere; alle Schriftarten brauchen Raum, um "zu atmen", für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "große" Texte als Texte, die `18pt` (ungefähr `24px`) oder größer sind, wenn {{cssxref('font-weight')}} als `normal` und `14pt` (ungefähr `18.7px`) für `bold` Text gilt. Angabe:

_Text, der größer ist und breitere Buchstabenstriche hat, ist bei geringerem Kontrast leichter zu lesen. Dies ermöglicht Autoren, eine breitere Palette von Farboptionen für große Texte zu verwenden, was hilfreich für das Entwerfen von Seiten ist, insbesondere für Titel._

Während größerer Text nicht so großen Farbakontrast zu seinem Hintergrund benötigt wie kleiner Text, reicht die Vergrößerung der Schriftgröße allein nicht aus.

"Normaler" Druck wird üblicherweise als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Auch wenn kleinere Schrift leserlich sein mag — ein Benutzer kann Buchstaben mit \~70% Genauigkeit erkennen — ist das nicht lesbar. Eine Schriftgröße von 16px ist in der Regel für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 braucht doppelt so viel, das heißt ungefähr eine 31px-Schrift. Deshalb verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeglichen Text zu vergrößern.

Während ein zu kleiner Text schwer zu lesen ist, ist auch ein zu großer Text schwerer lesbar. Für Nutzer mit 20/20 Sehvermögen nimmt die Lesegeschwindigkeit bei einer Textgröße von über etwa 96px ab. Auch wenn es auf einer Seite einen großen Unterschied zwischen der kleinsten und größten Schriftgröße gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text vergrößern, wenn der Benutzer zoomt.

Im Allgemeinen gilt, je mehr Kontrast, desto besser, aus Barrierefreiheitsgründen. Das ändert sich bei Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zu Farbkontrast in Animationen finden Sie in [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der uns den Kontrast sehen lässt. Relative Leuchtdichte wird in WCAG definiert als "die relative Helligkeit eines Punktes in einem Farbraum, normalisiert zu 0 für tiefschwarz und 1 für reines weiß."

Diese Aussage ist natürlich korrekt, kann aber verwirrend sein, wenn sie im Bezug auf den RGB Farbraum, der eine Ganzzahl zwischen 0 und 255 ist, verwendet wird. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Literaturquellen). Wenn man den W3C-Standard oben interpretiert, würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` haben würde. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher kommen also diese Zahlen von 0 bis 255? Historisch speicherten Grafik-Engines die Farbkanäle als ein einzelnes Byte, was einen Bereich von ganzen Zahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat beispielsweise eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, _um die weiße Ausrichtung des Monitors zu erreichen_, gemäß dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist sinnlos ohne seine Leuchtdichtekomponente, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Was die menschliche Wahrnehmung betrifft, spielt ein Unterschied in der Leuchtdichte eine größere Rolle als ein Farbunterschied. Dies ist wichtig, weil Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die auch Farbenblinde sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, leichter lesbar gemacht werden können, indem sie gegen andere mit kontrastierender Leuchtdichte offenbar werden. Eine interessante NASA-Studie zur Farbe Blau stellt beispielsweise fest, dass diese Farbe, die eine geringe Leuchtdichte hat, leserlich gemacht werden kann, wenn _Sorgfalt auf die ausreichende Leuchtdichtekontrast geachtet wird_. (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine beiläufigen. Glücklicherweise sind [Online-Leuchtdichte und Kontrast-Checker](https://www.siegemedia.com/contrast-ratio) verfügbar, und sogar Anweisungen, wie man [relative Leuchtdichte berechnet](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbwahrnehmung

Farbe ist unsere Wahrnehmung des schmalen Bandes von sichtbarem Licht, von Rot über Gelb und Grün bis Blau. Unser Empfindlichkeit zu diesen verschiedenen Farbtönen ist nicht gleich. Die Lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am meisten_ empfindlich für ein Gelb/Grün, reagieren aber auch auf Rot (wir werden sie "Rot" Zapfen nennen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen als die anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was teilweise ihren kleineren Zahlen ausgleicht.

Tiefes, reines Blau wird im Vergleich zu anderen Farben anders wahrgenommen, da jetzt keine blauempfindlichen Zapfen zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegelmosiak des normalen Sehens, und rechts ist das eines Menschen mit Protanopie, wodurch sie die roten Zapfen vermissen.](conemosaics.jpg)

Links ist das zentrale Kegelmosiak des normalen Sehens, und rechts ist das eines Menschen mit Protanopie, eine Art der Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen verbinden sich, um Leuchtdichte zu schaffen, die wir als Helligkeit/Dunkelheit ohne Betrachtung des Farbtons ansehen können. Separat erlauben die roten, grünen und blauen Zapfen das normale Sehen, Millionen von Farben wahrzunehmen. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte sorgt für feine visuelle Details, einschließlich der Differenzierung von Kanten und Text. Farbton und Farbigkeit tragen ein Dritte des Details der Leuchtdichte bei. Bilddatenkompression nutzt diese Tatsache. Ein Beispiel hierfür, [h.264 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) probiert Farbe mit einem Viertel der Auflösung der Leuchtdichte zu abtasten.

Für Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast von entscheidender Bedeutung für Text ist. Farbe als Farbton und Farbigkeit ist wichtig, um Elemente zu _unterscheiden_ – wie beispielsweise verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontexlabhängige Farbwahrnehmung lässt sie unterschiedlich erscheinen; Ihre Bildverarbeitung im Gehirn passt die Wahrnehmung basierend auf dem an, was es für Schatten hält oder nicht.

![Ein Bild eines Schachbretts, in dem identische Farben unterschiedlich aussehen, ob sie im Schatten sind.](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind auf Ihrem Monitor identische Farben, erscheinen aber aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbsehen werden von der Umgebung der nahen liegenden Farben und anderen Merkmalen eines Designs oder Bildes beeinflusst. Das macht das Vorhersagen des Kontrasts schwierig. Es handelt sich nicht nur um ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst: Farbe ist genauso viel über menschliche Physiologie und Wahrnehmung im Gehirn wie es darüber ist, Licht von einem Computerbildschirm zu messen. Es ist auch wichtig zu verstehen, dass der Umgebungslichtbereich die Fähigkeit, Farbe und Kontrast wahrzunehmen, beeinflusst. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an beim Übergang aus hellen in dunkle Bereiche und umgekehrt. Dies ist auf die physiologische Struktur unserer Augen zurückzuführen. Es betrifft die Fähigkeit eines Nutzers, Text auf einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: Lokale Anpassung und Anpassung an eine Umgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser ansieht. Zum Beispiel, wenn Sie blauen Text in einem grauen "hervorgehobenen" Bereich haben, nehmen Ihre Augen diesen genau blauen Text mit einem grauen Highlight anders wahr, ob er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird _lokale_ Anpassung genannt. Dieser Unterschied in der Fähigkeit, den Text zu erfassen, ist betroffen, obwohl das Umgebungslicht im Raum gleich bleibt.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text auf einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung ausnutzen können.

Dunkelanpassung an niedrige Helligkeit ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie Dunkelanpassung. Es kann einige Minuten dauern, sich daran zu gewöhnen.

Lichtanpassung ist umgekehrt. Das Gehen von einem dunklen Raum ins Sonnenlicht ist schneller, kann jedoch ebenfalls schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, in dem die Raumbedingungen der Räume geändert wurden, die `AmbientLightSensor`-Schnittstelle und die _[[`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)]_ Media-Query ausnutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe (Farbtöne) und Barrierefreiheit. Im Allgemeinen liegt der Fokus darauf Leuchtdichte sicherzustellen, um genug Kontrast zwischen Text und Hintergrund zu erzeugen oder die Möglichkeit, Anfälle bei denjenigen auszulösen, die für lichtempfindliche Anfälle sensibel sind. Ein Aspekt von Farbe (Farbtöne), unabhängig von Leuchtdichte, verdient besondere Aufmerksamkeit, da sie für Barrierefreiheit gilt: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, Anfälle bei denjenigen auszulösen, die für lichtempfindliche Anfälle anfällig sind, unabhängig von der Leuchtdichte der Farbe. Wie im [besonderen Fall von Rot](#der_besondere_fall_von_rot), [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) "stellt unabhängig von Leuchtdichte auch der Übergang zu oder von ein gesättigtes Rot ein Risiko dar".

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Farbsatz eines Künstlers sind, sind sie nicht so korrekt wie Farbdefinitionen von einem Computerbildschirm.

Bei der Betrachtung von Farbe auf einem Monitor sind gesättigte Farben von einem bestimmten Wellenlängenbereich. Obwohl die Definition von Sättigung für jeden Farbraum unterschiedlich sein mag, ist die Sättigung leicht messbar. Der Schlüssel ist, zu wissen, welcher Farbraum, mit dem Sie arbeiten, und bereit zu sein, diesen bei Bedarf zu konvertieren.

Die am häufigsten berücksichtigten Farbräume im Kontext photosensibler Betroffenen sind die RGB-, HSL- und HSV, auch bekannt als HSB-Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weiße_ und _Schwarze_ dargestellt.

Es ist wichtig zu wissen, welchen Farbraum Sie nutzen. Gesättigte Farben weisen im HSL eine Helligkeit von `0.5` auf, im HWB dafür einen Wert `1`. Die Sättigung im RGB-Farbraum wird in der Regel durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#FF0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#FF3300` hat einen RGB-Wert `rgb(255 51 0)` und einen HSL-Wert `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Dabei handelt es sich um zwei verschiedene "Farbtöne", die beide als gesättigte Farbe betrachtet werden.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung durch Hinzufügen von Weiß, Schwarz oder Grau zu der Farbe reduzieren; um das Beispiel weiter herauszuarbeiten, kann die Helligkeit durch das Hinzufügen von Weiß erhöht werden, indem die Sättigung reduziert wird. Ein typisches Beispiel ist es, Weiß zu Rot hinzuzufügen, um die Farbe Pink zu erhalten. Pink wird als ungesättigtes Rot betrachtet.

### Sättigung und Leuchtdichte

Sättigungsverlust tritt an den extremen Enden der Leuchtdichte sowie der Extreme von Schwarz und Weiß auf. In NASA's [Effekt der Leuchtdichte auf Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php), weisen sie darauf hin, dass es einen Sättigungsverlust bei geringer Leuchtdichte gibt und, "…der Sättigungsverlust bei hoher Leuchtdichte – die Farben auf Weiß konvergieren."

## Farbkombinationen

Kontrast allein ist nicht ausreichend für Zugänglichkeitsüberlegungen. Im Falle von Animationen sind bestimmte Farbkombinationen eher dazu geneigt, lichtempfindliche Anfälle bei denjenigen hervorzurufen, die anfällig dafür sind, als andere. Beispielsweise sind abwechselnd flackernde Rot- und Blau-Töne problematischer als abwechselnd flackernde Grün- und Blau-Töne. Es wurde angenommen, dass dies darauf zurückzuführen ist, dass sich die "rot"-empfindlichen Zapfen unserer Augen, die sich nahe der Fovea (in der Nähe des Zentrums) sammeln, physisch an einem anderen Ort befinden als die "blau"-empfindlichen Zapfen unserer Augen, die sich weg von der Fovea in Richtung Rand befinden. Die elektrischen Signale vom Auge zum Gehirn müssen vieles auflösem, während die Information in unserem Gehirn verarbeitet wird.

Einige Farben sind höchstwahrscheinlich dazu fähig, [epileptische Anfälle auszulösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexität der Gehirndynamik kann durch einige Farbkombinationen stärker beeinträchtigt werden als durch andere. Beispielsweise verursachen rot-blaue flackernde Reize eine größere kortikale Erregung als rot-grüne oder blau-grüner Reize.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen beeinträchtigen. Die Kombination aus Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals ausschließlich auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den größten Teil der Leuchtdichte (Licht), so dass es normalerweise ein großer Teil der helleren Farben sein wird.

### Arbeiten mit Blau

Einigen Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine geringe Leuchtdichte. Farben mit niedriger Leuchtdichte sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt weit weniger blaue Zapfen und sie sind verstreut in unserem peripheren Sehen und nicht in unserer zentralen Sicht vorhanden. Das menschliche Auge sieht Blau mit niedrigerer Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von blauen Farben:

- Reines Blau sollte typischerweise das Dunkelste von zwei Farben sein.
- Wenn Blau als das hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts bewirkt, dass es sich an einem anderen Ort auf der Netzhaut fokussiert als rotes Licht, so dass eine reine rote und eine reine blaue Farbe, die direkt nebeneinander und berührend sind, "flimmern" können.

## Der besondere Fall von Rot

Nicht alle Farben ("Farbton") werden von unserem Gehirn gleich verarbeitet. Die menschliche Physiologie und Psychologie werden im Allgemeinen in einer Weise durch die Farbe Rot beeinflusst, die sich von der anderer Farben unterscheidet. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Beispielsweise wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle verursachen](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) als andere. Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption an](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" die Menschen, die lichtempfindlich sind, helfen kann. Um die Graustufen-Einstellung zu simulieren, nutzen Sie die CSS {{cssxref("filter")}}-Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwierig zu verstehen, wenn man sich nur Zahlen und Begriffe ansieht, im unteren Bild wird versucht, das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons, svg-Datei als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe "Farbe" geht von links nach rechts von am wenigsten gesättigt zu am meisten gesättigt.

_Es kann mehr als eine "rote" Farbe als gesättigtes Rot angesehen werden._ Das Beispiel, Farbton `#990000` mit `hsl(0 100% 30%)`, ist vollgesättigt aber weniger hell als die genannten Farben. Gleiches gilt für die Farbe `#8b0000`, die auch eine 100%ige Sättigung aufweist.

Nicht alle gesättigten Rottöne lassen sich im RGB-Spektrum oder in anderen üblicherweise für Webentwicklung verwendeten Spektren darstellen. Laut Wikipedia's Seite zu "Rottönen" ist die Farbe "Karminrot" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen über 600nm enthält; der Artikel hebt besonders hervor, dass "Karminrot" sich in der Nähe des Extremspektrums befindet. Dies setzt sie weit über die Standardspektren (RGB und CMYK) hinaus, und der gegebene RGB-Wert ist nur eine schlechte Annäherung."

### Flackern in gesättigtem Rot

Neben der Auswirkungen eines roten Umgebungen auf die kognitive Funktion bei Menschen mit traumatischen Hirnverletzungen erfordert die Farbe im Rotwellenlängenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei der Untersuchung des _Werkzeugs zur Analyse von photosensitiver Epilepsie_ fest, dass die Anfallraten höher als erwartet waren. Sie fanden heraus, dass wir viel empfindlicher auf das Flimmern in gesättigtem Rot reagieren. (Sehen Sie sich das Video an, [Das Werkzeug zur Analyse von photosensitiver Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Flimmern und Anfälle

Fortlaufendes Flimmern von heller/dunkler mit Raten über drei Mal pro Sekunde wurde nachgewiesen, photische Anfälle bei einigen Menschen auszulösen. Außerdem wurden sehr gleichmäßige, hochkontrastreiche Muster, wie parallel weiße und schwarze Streifen, festgestellt, bei denen Anfälle ebenfalls auftreten können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) stellen einige grundlegende Richtlinien vor:

1. Einzelne, doppelte oder dreifache Blitze innerhalb einer Sekunde sind akzeptabel, aber eine Abfolge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze in einer Sekunde auftreten.
2. Beim Darstellen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf helle-dunkle Streifenpaare beinhalten, wenn die Streifen die Richtung ändern, oszillieren, flackern oder den Kontrast umkehren oder acht helle-dunkle Streifenpaare, wenn das Muster unveränderlich oder kontinuierlich und sanft in eine Richtung driftet.

Für weitere Empfehlungen lesen Sie das Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farbe als Farbtöne und Sättigung kann unsere Stimmung beeinflussen und - oder entkräftend - unsere interaktiven Erlebnisse verbessern.

### Beispiele für den Effekt von Farben über die reine Sicht hinausgehend

- **Farbe kann kulturell abhängig sein:** [Eine interkulturelle Studie zu den affektiven Bedeutungen der Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Effekte von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können ebenfalls eine positive Auswirkung auf unsere Emotionen haben:** [Emotionvariation durch Kontrolle des Kontrasts visueller Inhalte durch EEG-basierte tiefgehende Emotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Beweise für temporale Überschätzung von blauen Reizen](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat ebenfalls einen signifikanten Effekt auf Helligkeit und Blende:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können erhöhte Glücksempfindungen hervorrufen:** [Durch eine "rosarote" Brille schauen: Der Einfluss der Tönung auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist gut bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen, die unter Hirnverletzungen leiden, eine [kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik, am 1. November 2014
- [Rot-Desaturierung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf die Farbe Rot "abgestimmt", dass Ophthalmologen einen Test mit ihm einrichten, der die Integrität des Sehnervs beurteilt.
- [Photic- und Muster-induzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
