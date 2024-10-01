---
title: "Web-Barrierefreiheit: Verständnis von Farben und Leuchtdichte"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Während das Verständnis von Farbe, Leuchtdichte und Sättigung wichtig für Design und Lesbarkeit für alle sehenden Benutzer ist, ist es für Menschen mit eingeschränktem Sehvermögen und farbschwachem Sehen sowie für Menschen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen unerlässlich.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehbehinderte Benutzer sowie Richtlinien, die Nutzern mit farbunempfindlichem Sehen, häufig als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Oberflächlich betrachtet scheint das Thema einfach, aber es ist ein komplexes Thema, da die Farbwahrnehmung ebenso sehr von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn abhängt wie von dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen eine stärkere Wirkung als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder verspielt, dass sie für sich genommen Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, selbst Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungs-Hintergrund, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter aufgenommen wird. Wie der Betrachter Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist ein weiteres Thema und kann durch die allgemeine Gesundheit beeinflusst werden. Zum Glück gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme), bereitzustellen.

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder den Helligkeitsgrad des Umgebungslichts um das Hosting-Gerät zurück, wodurch eine Webseite sich auf Änderungen der Lichtintensität einstellen und entsprechend den Text anpassen kann. Darüber hinaus ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererlebnisse bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontrastniveaus anzeigen, indem sie die Levels je nach Standort des Benutzers und der Art des verwendeten Bildschirms automatisch anpassen.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und kritischsten Konzepte zur Erstellung zugänglicher Webinhalte mit Farbe. Die Leuchtdichte ist von besonderer Bedeutung, da das Verständnis, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit sowohl für Farbblinde als auch für Personen, die Farbe erkennen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Farbblinden, Dunkel von Hell zu unterscheiden.

Die Leuchtdichte muss festgelegt werden, bevor der Kontrast festgelegt werden kann. Wenn von Farbkontrast die Rede ist, verwenden die W3C-Formeln Leuchtdichte und nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. Es ist besonders wichtig, "Leuchtdichte" und "Sättigung" richtig zu verstehen. Zum Beispiel wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und manchmal als "Helligkeit" bezeichnet. Sogar etwas scheinbar Einfaches, wie das Benennen gewöhnlicher Farben, kann zur Diskussion stehen. Zum Beispiel kann die Farbe "Karminrot" von einigen als Hex-Wert `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie im W3C definiert ist, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume zu unterschiedlichen Messsystemen gehören.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz (CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellenlängen _entfernen_ und nur den engen Bereich reflektieren, mit dem sie assoziiert sind. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot, Grün und Blau hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} den Bereich, in dem Webentwickler arbeiten. Während HEX, RGB und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser automatisch Werte zwischen diesen Farbschreibweisen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch, aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung von Farbausgaben, werden die meisten Berechnungen in diesem Dokument im RGB-Farbraum und, ganz speziell, im sRGB-Farbraum durchgeführt.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie es im [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) ersichtlich ist, einschließlich RGB, RGB dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderen.

Für digitale Belange hat sich die Technologie historisch gesehen im RGB-Farbraum angesiedelt. Das RGB-Farbmodell wird um "Alpha" – RGBA – erweitert, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung beinhalten Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, unter anderem auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) enthalten Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zur OpenGL-Nutzung von RGBA anstelle von sRGB referenzieren. WebGL ist normalerweise im RGBA-Format; sehen Sie ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} Variationen, wie den {{Glossary("RGB", "RGB")}}-Farbraum, gibt. Beispielsweise umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele für die in CSS verwendeten Notationen zur Definition einer Farbe. Hier ist die Beispielsfarbe jeweils ein voll opakes Magenta:

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
oklch(0.7 0.32 328.37);
oklch(0.7 0.32 328.37 / 1);

/* color() function in the XYZ color space */
color(xyz-d65 0.59 0.28 0.96);
color(xyz-d65 0.59 0.28 0.96 / 1);
```

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% Aus (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Anschließend werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit der Basis 16, bei dem die ganzzahlige Zahl von 0 bis 255 durch zwei Ziffern dargestellt wird, die von 0 bis 15 reichen und die Zahlen 0-9 und a-f für 10-15 verwenden. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol '#' steht vor der Farbe, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. Somit ist `f00` dasselbe wie `ff0000`. Wenn eine vierte Zahlengruppe vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger und daher weniger transparent ist. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für vollständig opak.

Das Beispiel zeigt auch die Legacy-Syntax sowohl für [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farbfunktionsaufrufe ist durch Kommata getrennt, mit einer separaten Funktion, wenn der Alphakanal einbezogen wird. Neue Farbfunktionsaufrufe haben nur eine Syntax mit durch Leerzeichen getrennten (anstelle von durch Kommata getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich gefolgt wird. Moderne Syntax erlaubt das Mischen von Zahlen und Prozentangaben und unterstützt das Schlüsselwort `none`; die durch Kommata getrennte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", das für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die Farbe, die aus den Einstellungen hervorgeht, ist immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine erhebliche Überlegung ist.

Die nächsten Beispiele zeigen "HWB", das für _Hue, Whiteness, and Blackness_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) sein. Wenn er ohne Einheit ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionsaufrufe und Farbräume. Die letzten drei Beispiele zeigen, wie Magenta mit den Farbfunktionsaufrufen [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) dargestellt wird.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten dargestellt werden. Bei Betrachtung, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe in einer Kurzschrift als dreistellige Hex-Zahl ausgedrückt wird, die in einen rgb-Wert als sechsstellige Hex-Zahl umgewandelt wird, die auch in dieselbe rgb-Wert umgewandelt wird, oder als rgba-Wert, ausgedrückt in Prozentangaben.

RGB ist hardwareorientiert und reflektiert die Verwendung von CRTs. Viele Entwickler und Designer ziehen die intuitivere [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Schreibweise vor. Die Umrechnung von RGB in HSL ist keine einfache Gleichung. Zum Glück machen Browser es automatisch, und ein Shift-Klick auf Farben in Entwicklertools des Browsers bietet Umrechnungsfunktionen.

Zusätzlich zu Entwicklertools können viele Tools RGB in HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie umwandelt, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zum Überprüfen von Kontrasten im Browser. Beachten Sie, dass Entwicklertools-Farbauswähler und dieses Tool alle WCAG-[Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und die Farbfunktionen [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab), die jede sichtbare Farbe spezifizieren können. Dennoch bleibt sRGB der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Allgegenwart.

Was die Barrierefreiheit betrifft, werden Standards und Richtlinien derzeit größtenteils im sRGB-Farbraum geschrieben, insbesondere was die Farbbildkontrastverhältnisse betrifft.

> [!NOTE]
> Fast alle Systeme, die heute verwendet werden, um Webinhalte anzusehen, setzen sRGB-Codierung voraus. Es sei denn, es ist bekannt, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums in Betracht ziehen. Falls andere Farbräume verwendet werden, wenden Sie die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte mit der RGB Dezimalreferenzskala oder über `color(srgb...)` zurück. Zum Beispiel gibt ein Aufruf von `Window.getComputedStyle()` bei einem `<div>` mit `background-color: #ff0000` den berechneten Hintergrundfarbwert als `rgb(255 0 0)` zurück – die RGB Dezimalreferenz. Wenn jedoch [relative Farben verwendet](/de/docs/Web/CSS/CSS_colors/Relative_colors) werden (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` den berechneten Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farben in Bezug auf RGB und nicht, wie das menschliche Auge Farbe wahrnimmt.

### Rot/Grün-Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann jedoch immer noch über grüne Zapfen wahrgenommen werden, wenn auch dunkler als mit normalem Sehvermögen. Sowohl Protan (rot-defizitär) als auch Deutan (grün-defizitär) Schwächen verursachen Schwierigkeiten, _zwischen_ Rot und Grün zu unterscheiden.

Entwicklertools können helfen, Farbsichtdifferenzen direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Zugänglichkeitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheits-Panel.

![Ausschnitt von Firefox Entwicklertools zeigt das Simulations-Popup](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein entscheidender Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Leuchtdichte beinhalten.

Zudem ist die "Form" des Textes selbst von Bedeutung. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriftarten brauchen Raum, um für die menschliche Wahrnehmung zu "atmen".

### Kontrast und Schriftgröße

Die [WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18 pt` (ungefähr `24 px`) oder größer ist, wenn die {{cssxref('font-weight')}} `normal` ist, und `14 pt` (ungefähr `18,7 px`) für `fett` gedruckten Text. Sie besagen:

_Text, der größer ist und breitere Strichstärken hat, ist bei geringerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies erlaubt es Autoren, eine breitere Palette von Farboptionen für großen Text zu verwenden, was für das Design von Seiten, insbesondere von Titeln, hilfreich ist._

Während größerer Text nicht so viel Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird normalerweise als 11,5 pt bis 12 pt angesehen, was auf dem Bildschirm 16 px entspricht. Während kleinere Schrift möglicherweise lesbar ist — ein Benutzer kann Buchstaben mit etwa 70% Genauigkeit erkennen —, ist das nicht leserlich. Eine Schriftgröße von 16 px ist für Menschen mit normalem Sehvermögen im Allgemeinen lesbar. Jemand mit 20/40 benötigt doppelt so viel, ungefähr eine 31 px-Schrift. Aus diesem Grund verlangen die WCAG-Richtlinien, dass Benutzer die Fähigkeit haben müssen, jeden Text zu vergrößern.

Während ein zu klein angezeigter Text schwer zu lesen ist, ist auch ein zu großer Text schwer zu lesen. Bei Benutzern mit 20/20-Sehvermögen verringert sich bei einer Schriftgröße größer als etwa 96 px die Lesegeschwindigkeit. Auch wenn es auf einer Seite einen großen Unterschied zwischen der kleinsten und größten Schriftgröße gibt, wird der größere Text weniger lesbar, wenn Nutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text vergrößern.

Generell gilt für Barrierefreiheitszwecke, je mehr Kontrast desto besser. Das ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Für mehr über Farbkontraste in Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole einen ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu sehen. Die relative Leuchtdichte wird in WCAG als "die relative Helligkeit eines beliebigen Punkts in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß," definiert.

Diese Aussage ist natürlich zutreffend, kann aber verwirrend sein, wenn sie im Bezug auf den RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Schriften). Interpretierend für den oben genannten W3C-Standard würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Wenn also diese Zahlen von 0 bis 255 kommen: Diese kommen historisch aus Grafiken, die Farbebenen in einem einzigen Byte speichern, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, _um die weiße Ausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Was die menschliche Wahrnehmung betrifft, zählt ein Unterschied in der Leuchtdichte mehr als ein Farbunterschied. Dies ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die sogar diejenigen mit Farbenblindheit sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, lesbarer gemacht werden können, indem diese Farben gegen andere mit kontrastierender Leuchtdichte platziert werden. Eine interessante Studie der NASA über die Farbe Blau stellte zum Beispiel fest, dass diese Farbe, die eine niedrige Leuchtdichte aufweist, lesbar gemacht werden kann, wenn _Sorgfalt geboten ist, um einen ausreichenden Leuchtdichtekontrast zu erzielen_ (aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)).

Berechnungen für relative Leuchtdichte sind keine beiläufigen. Zum Glück gibt es [online Leuchtdichte- und Kontrastprüfer](https://www.siegemedia.com/contrast-ratio) und sogar Anleitungen, wie man [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) berechnet.

## Wahrnehmung von Farbe

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf abgestimmt, einige Farben mehr zu erkennen als andere. Ungefähr 65% der Zapfen sind _am meisten_ empfindlich für ein Gelb/Grün, reagieren aber auch auf Rot (wir nannten diese "roten" Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger blauempfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Zahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen, und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist eine konische Mosaikdarstellung mit normalem Sehvermögen und rechts die Darstellung von jemandem mit Protanopie, bei der die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale konische Mosaik des normalen Sehens, und rechts das von jemandem mit Protanopie, einer Form von Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen wirken zusammen, um Leuchtdichte zu erzeugen, die wir als Helligkeit/Dunkel ohne Rücksicht auf den Farbton betrachten können. Getrennt, ermöglichen die roten, grünen und blauen Zapfen, dass das normale Sehvermögen Millionen von Farben wahrnimmt. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtdichte. Bilddatenkompression macht sich diese Tatsache zunutze. Als Beispiel kodiert der [h.264-Video-Codec](/de/docs/Web/Media/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte.

Für Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast für Text kritisch wichtig ist. Farbe, als Farbton und Farbigkeit, ist wichtig für das _Unterscheiden_ von Elementen wie unterschiedlichen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextempfindliche Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Verarbeitung des Bildes im Gehirn passt die Wahrnehmung basierend auf dem an, was es denkt, was im Schatten liegt oder nicht.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich erscheinen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind auf Ihrem Monitor identische Farben, aber sie erscheinen unterschiedlich aufgrund des Kontexts. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbempfinden werden vom Kontext der nahegelegenen Farben und anderen Merkmalen eines Designs oder Bildes beeinflusst. Dies macht es schwierig, den Kontrast vorherzusagen. Es ist nicht so einfach wie ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst: Farbe hat mit der menschlichen Physiologie und der Wahrnehmung im Gehirn ebenso viel zu tun, wie mit der Lichtmessung von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass das Umgebungslicht die Fähigkeit, Farbe und Kontrast wahrzunehmen, beeinflusst. Licht und seine Messungen sind linear, aber das menschliche Sehvermögen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichermaßen, in der gleichen Weise, an helle Bereiche und dunkle Bereiche an und umgekehrt. Dies liegt an den physiologischen Bauweisen unserer Augen. Dies wirkt sich auf die Fähigkeit eines Benutzers aus, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Zum Beispiel, wenn Sie blauen Text in einem grauen "hervorgehobenen" Bereich haben, wird Ihre Wahrnehmung dieses genau blauen Textes mit einem grauen Highlight eine andere sein, wenn er sich in einem schwarzen {{HTMLElement("div")}} befindet, oder einem weißen. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, ist betroffen, selbst wenn sich die Raumbeleuchtung nicht ändert.

Der Implikation nach können Webentwickler, die die Lesbarkeit von Text im Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen.

Die Dunkelanpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erleben Sie Dunkelanpassung. Dies kann ein paar Minuten dauern, um sich daran zu gewöhnen.

Die Lichtanpassung ist das Gegenteil. Aus einem dunklen Raum ins helle Sonnenlicht zu gehen geht schneller, kann aber auch weh tun.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei denen sich die Umgebungsbedingungen eines Raums geändert haben, die `Ambient Light Sensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)-Media-Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Allgemein gesprochen liegt der meiste Fokus auf der Leuchtdichte, wenn versucht wird, genug Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit von Anfällen bei Menschen zu bewerten, die empfindlich auf photosensitive Anfälle reagieren. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit, da er für die Barrierefreiheit gilt: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei Menschen, die anfällig für photosensitive Anfälle sind, Anfälle zu verursachen, unabhängig von der Leuchtdichte der Farbe. Wie im [besonderen Fall von Rot](#der_besondere_fall_von_rot) besprochen, stellte die [Epilepsy Foundation](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) fest, dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in den Farben eines Künstlers sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farben auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, kann die Sättigung leicht gemessen werden. Der Schlüssel besteht darin zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf umzurechnen.

Die Farbräume, die am häufigsten in Bezug auf Photosensitivität betrachtet werden, sind die RGB-, HSL- und HSV-, auch als HSB bekannten, Farbräume. Der HSV-Farbraum, der für _hue_, _saturation_ und _value_ steht, und das Synonym HSB, das für _hue_, _saturation_ und _brightness_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _hue_, _whiteness_ und _blackness_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben in HSL eine Helligkeit von `0.5`, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei unterschiedliche "Farbtöne", werden aber beide als gesättigte Farben betrachtet.

Sättigung ist keine Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz in einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu führen, kann die Helligkeit durch das Hinzufügen von Weiß erhöht werden, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt einen Verlust an Sättigung an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In NASAs [Effekt der Leuchtdichte auf die Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass bei niedrigen Leuchtdichten ein Verlust der Sättigung auftritt. Und ebenfalls, "…der Verlust der Sättigung bei hohen Leuchtdichten – die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein reicht bei Betrachtungen zur Barrierefreiheit nicht aus. Im Falle von Animationen sind bestimmte Farbkombinationen eher dazu geeignet, bei Menschen, die dafür anfällig sind, photosensitive Anfälle auszulösen, als andere. Zum Beispiel ist ein abwechselndes Blitzen zwischen Rot und Blau problematischer als ein abwechselndes Blitzen zwischen Grün und Blau. Es wird angenommen, dass dies daran liegt, dass die "rotempfindlichen" Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe dem Zentrum) zu gruppieren, physisch an einem anderen Ort als die "blauempfindlichen" Zapfen unserer Augen liegen, die etwas von der Fovea entfernt und Richtung Ränder lokalisiert sind. Die elektrischen Signale vom Auge zum Gehirn müssen zwischen ihnen viel auflösen, während die Information in unserem Gehirn verarbeitet wird.

Einige Farben lösen wahrscheinlich [epileptische Anfälle aus](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten im Zusammenhang mit der Dynamik des Gehirns können durch einige Farbkombinationen stärker beeinflusst werden als durch andere. Zum Beispiel verursacht ein rotes-blaues Flimmern eine größere kortikale Erregung als ein rotes-grünes oder blaues-grünes Flimmern.

Bestimmte Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können bei einigen Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Vertrauen Sie niemals nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Helligkeitskontrast ist erforderlich.
- Das Grün auf einem Monitor macht den Großteil der Leuchtdichte (Helligkeit) aus, so dass es normalerweise ein wesentlicher Teil der helleren Farben sein wird.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben, die eine niedrige Leuchtdichte aufweisen, sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt weit weniger blaue Zapfen, und sie sind in unserer peripheren Sicht verstreut und nicht in unserer zentralen Sicht vorhanden. Das menschliche Auge sieht Blau in einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reine Blautöne sollten typischerweise die dunkleren der zwei Farben sein.
- Wenn Blau als der hellere der zwei Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts bewirkt, dass es sich an einem anderen Ort auf der Netzhaut fokussiert als Rot, so dass ein reiner Rot- und ein reiner Blaufarbton, die unmittelbar nebeneinander liegen und sich berühren, "schimmern" können, wenn sie nah beieinander liegen.

## Der besondere Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen auf die gleiche Weise verarbeitet. Die menschliche Physiologie und Psychologie wird von der Farbe Rot im Allgemeinen anders beeinflusst als bei anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben eher dazu geeignet sind, epileptische Anfälle auszulösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als eine Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen können, die photosensibel sind. Um die Graustufeneinstellung zu simulieren, verwenden Sie die CSS {{cssxref("filter")}}-Eigenschaft mit einem [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologie schaut, also betrachten Sie das Bild unten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Sättigung von Rot, von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe "Farbe" bewegt sich von der am wenigsten gesättigten auf der linken Seite zur am stärksten gesättigten auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot angesehen werden._ Zum Beispiel hat die Farbe `#990000` mit `hsl(0 100% 30%)` eine vollständige Sättigung, ist aber weniger hell als die oben beschriebenen Farben. Ähnlich hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können gut im RGB-Spektrum oder anderen Spektren, die häufig in der Webentwicklung verwendet werden, dargestellt werden. Laut der Wikipedia-Seite "Schattierungen von Rot" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit einer Wellenlänge länger als 600 nm enthält; der Artikel macht die besondere Bemerkung, dass "Karmin" nahe am Extremspektrum liegt. Dies platziert es weit jenseits der Standard-Gamuts (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Flackern

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen beeinflusst, erfordert Farbe im Wellenlängenbereich des roten Spektrums besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei der Prüfung des _Photosensitive epilepsy analysis tool_ fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Flackern sind. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Flackern und Anfälle

Kontinuierliches Flackern in hell/dunkel-Wechseln mit höheren Frequenzen als drei Flackern pro Sekunde hat gezeigt, dass es bei einigen Personen photische Anfälle auslösen kann. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

Die Epilepsy Foundation of America forschte zu [photic- und pattern-induced Seizures](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie führte zu mehreren grundlegenden Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze innerhalb einer Sekunde sind akzeptabel, aber eine Folge von mehr als drei Blitzen in einer Sekunde wird nicht empfohlen.

2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare anzeigen, wenn die Streifen die Richtung wechseln, oszillieren, flackern oder den Kontrast umkehren, oder acht hell-dunkle Streifenpaare, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Die Konsens-Empfehlungen sind in diesem kurzen Papier, [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x). Einige zusätzliche Einblicke sind verfügbar in diesem britischen Artikel, der [Richtlinien zur Verhinderung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf), behandelt.

## Psychophysikalische Aspekte von Farbe

Farbe als Farbtöne und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern – oder verschlechtern.

### Beispiele für die Wirkung von Farbe über die Sicht hinaus

- **Farbe kann kulturell abhängig sein:** [Eine interkulturelle Studie über die affektiven Bedeutungen von Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann auch positiv auf unsere Emotionen wirken:** [Emotionale Variation durch Steuerung des Kontrasts von visuellen Inhalten mit EEG-basierter Tiefenerkennung der Emotion](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Hinweise auf zeitliche Überschätzung blauer Reize](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch signifikante Auswirkungen auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können Glück oder Freude steigern:** [Durch "Rosarote" Brillen sehen: Der Einfluss von Tönung auf visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- \*\*Es ist bekannt, dass](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die unter traumatischen Hirnverletzungen leiden, [die kognitive Funktion in einer roten Umgebung](https://pubmed.ncbi.nlm.nih.gov/20649469/) reduziert wird.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color)-Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik im November 1, 2014
- [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot "geeicht", dass Augenärzte einen Test damit eingerichtet haben, der die Integrität des Sehnervs bewertet.
- [Photic- und pattern-induced Seizures: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
