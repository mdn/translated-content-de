---
title: "Web-Zugänglichkeit: Verständnis von Farben und Leuchtdichte"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Während das Verständnis von Farbe, Leuchtdichte und Sättigung für das Design und die Lesbarkeit für alle sehenden Nutzer wichtig ist, sind sie für Personen mit eingeschränkter Sicht, Farbsehschwächen und spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen unerlässlich.

Zugänglichkeitsrichtlinien definieren angemessene [Farbkontraste](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehbehinderte Nutzer sowie Richtlinien, die Nutzern mit farbunempfindlicher Sicht helfen sollen, was oft als "Farbenblindheit" bezeichnet wird. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Personen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wichtiger Bestandteil der Barrierefreiheit. Auf den ersten Blick erscheint das Thema einfach. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung ebenso viel mit der Physiologie des Auges und der Verarbeitung durch das menschliche Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgestrahlt wird.

### Umwelt und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farben in einem gut beleuchteten Raum unterscheidet sich von der Wahrnehmung derselben Farben auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit haben bestimmte Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, sogar Pixeldichten und mehr beeinflussen die Darstellung der Farben vom Bildschirm.

Der Abstand des Betrachters zum Bildschirm, der Umgebungs-Hintergrund, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farben vom Betrachter wahrgenommen werden. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist noch einmal ein anderes Thema und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf den Benutzervorlieben bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbdesign](/de/docs/Web/CSS/@media/prefers-color-scheme).

Unterstützt wird auch die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle, die das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät herum zurückgibt, und somit ermöglicht, dass eine Webseite auf Änderungen der Lichtintensität reagiert und den Text entsprechend anpasst. Zusätzlich ermöglichen die oben genannten Media Queries Entwicklern, alternative Nutzererfahrungen bereitzustellen, wenn die Benutzervorlieben bestimmte Kontrastniveaus bevorzugen, und passen die Ebenen automatisch an den Standort des Nutzers und die Art des verwendeten Bildschirms an.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und kritischsten Konzepte, um barrierefreie Webinhalte mit Farben zu gestalten. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit für Personen ermöglicht, die farbenblind sind sowie für jene, die Farben wahrnehmen können. Der Leuchtdichte-Kontrast ermöglicht es Farbblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss vor dem Kontrast etabliert werden. Bei der Farbkontrastberechnung werden in den W3C-Formeln Leuchtdichte berücksichtigt, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da verschiedene Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um richtig verwendet zu werden. Zum Beispiel wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und manchmal als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches wie die Benennung von Standardfarben kann diskutiert werden. Zum Beispiel kann die Farbe "Karminrot" von einigen als `#990000` und von anderen als `#DC143C` beschrieben werden. In diesem Dokument verwenden wir die Terminologie, wie sie im W3C in dem [CSS-Farbmodul Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Beim Arbeiten mit Farben ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume zu unterschiedlichen Messsystemen passen.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz (CMYK) Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Farben spezifische Lichtwellenlängen _entfernen_, sodass nur der schmale mit jeder Farbe verbundene Bereich reflektiert wird. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulicht hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} die Arbeit von Webentwicklern. Während HEX, RGB und HSL Farbwerte unterschiedlich notiert werden, konvertieren Browser diese Farbnotationen automatisch. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Doch aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbwiedergabe gehen die meisten Berechnungen in diesem Dokument vom RGB-Farbraum aus und im Besonderen vom sRGB-Farbraum.

## Der sRGB-Farbraum

Farben können auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value), einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, um nur einige zu nennen.

Für digitale Belange residierte ein Großteil der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird um "alpha" — RGBA — erweitert, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung beinhalten Messungen mittels anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren die Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://de.wikipedia.org/wiki/OpenGL) und [Direct3D](https://de.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel zur Verwendung von OpenGL RGBA anstelle von sRGB erwähnen. WebGL ist üblicherweise im RGBA-Format; sehen Sie ein Beispiel zur Verwendung davon in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es auch innerhalb eines {{Glossary("color_space", "Farbraums")}} wie des {{Glossary("RGB", "RGB-")}}-Farbraums Variationen gibt. Zum Beispiel gibt es Variationen des RGB-Farbraums, darunter **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele für die in CSS verwendeten Notationen zur Definition einer Farbe. Hier ist die Beispiel-Farbe für jedes eine voll opake Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz angeben, wobei 0 % aus (schwarz) und 100 % der volle Wert für diese Farbe ist. Die Werte werden in der Reihenfolge Rot, Grün und Blau angegeben. Wir können die sRGB-Werte auch direkt mit einer Zahl von 0 bis 255 festlegen.

Danach werden hexadezimale Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit der Basis 16, wobei der Integerwert von 0 bis 255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen und die Ziffern 0-9 und a-f für 10-15 verwenden. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol '#' geht dem Wert voraus, um anzuzeigen, dass es sich um einen hexadezimalen Wert handelt.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. Daher ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlenpaar angegeben ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz im Hinblick auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe mehr opak und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für vollständig opak.

Das Beispiel zeigt auch die Legacy-Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farb-Funktionen ist komma-getrennt, mit einer separaten Funktion, wenn der Alphakanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit leerzeichen-getrennten (anstelle von komma-getrennten) Werten, wobei der Alphakanal, wenn vorhanden, durch einen Schrägstrich vorangestellt ist. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das Schlüsselwort `none`; die komma-getrennte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", die für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte betrachtet. Die Farbe, die aus den Einstellungen entsteht, befindet sich weiterhin im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Hue wird als Winkel angepasst und es ist einfach, eine Benutzeroberfläche mit einem Drehknopf oder einer Kreissteuerung zu erstellen, um den Hue zu justieren. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine signifikante Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness und Blackness_ steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle)-Wert sein. Wenn ohne Einheit, wird der Wert als Grad `deg` interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color)-Farbfunktionen.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn Sie sich ansehen, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe als eine Kurzschrift, dreistellige Hex-Nummer ausgedrückt wird, die in einen RGB-Wert umwandelt, eine sechsstellige Hex-Nummer, die ebenfalls in den gleichen RGB-Wert umwandelt, oder als ein RGBA-Wert, ausgedrückt in Prozentsätzen.

RGB ist hardwareorientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation. Die Konvertierung von RGB zu HSL ist keine einfache Gleichung. Glücklicherweise erledigen Browser dies automatisch und das Shift-Klicken auf Farben in den Entwickler-Tools der Browser bietet Konvertierungsfunktionalität.

Zusätzlich zu Entwickler-Tools gibt es viele Werkzeuge, die RGB in HSL für Sie konvertieren können und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zum Prüfen des Kontrasts im Browser. Beachten Sie, dass Farbauswahl-Tools und dieses Werkzeug alle WCAG-[Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbauswahl mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, fügt das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) zusätzliche Farbräume hinzu, einschließlich der funktionalen Farbschrift, einschließlich der [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Funktionalitäten sowie der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Das gesagt, sRGB ist immer noch der Standard- und bevorzugte Farbraum im Hinblick auf Barrierefreiheit aufgrund seiner Verfügbarkeit.

Hinsichtlich der Barrierefreiheit werden Standards und Richtlinien jedoch aktuell überwiegend unter Verwendung des sRGB-Farbraums geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Webinhaltsanzeige gehen von sRGB-Codierung aus. Solange nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige des Inhalts verwendet wird, sollten Autoren die Verwendung von Farben im sRGB-Farbraum bewerten. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfrage von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) liefert Werte unter Verwendung der RGB-Dezimalreferenzskala oder über `color(srgb...)`. Beispielsweise liefert der Aufruf von `Window.getComputedStyle()` für ein `<div>` mit `background-color: #ff0000` den berechneten Hintergrund als `rgb(255 0 0)` — die RGB-Dezimalreferenz. Bei Verwendung von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst es Farbe in Bezug auf RGB und nicht, wie das menschliche Auge Farbe wahrnimmt.

### Rot-/Grün-Farbenblindheit

Protanopie ist eine Farbsehstörung, bei der das Auge keine Rot-Zapfen hat; sRGB kann dennoch über die grünen Zapfen wahrgenommen werden, jedoch dunkler als bei normaler Sicht. Sowohl Protan (rot-schwach) als auch Deutan (grün-schwach) Defizite machen es schwierig, zwischen Rot und Grün zu unterscheiden.

Entwicklertools können helfen, Unterschiede im Farbsehen direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Zugänglichkeitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Zugänglichkeitsbereich.

![Ausschnitt von Firefox-Entwicklerwerkzeugen, der das Simulieren-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber der Einsatz von Farben ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie zuvor erwähnt, muss jede Kontrastberechnung die Leuchtdichte umfassen.

Darüber hinaus ist die "Form" des Textes selbst von Bedeutung. Dünne Buchstaben sind schwieriger zu lesen als dicke; alle Schriftarten benötigen Raum zum "Atmen" für menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ca. `24px`) oder größer ist bei {{cssxref('font-weight')}} `normal` und `14pt` (ca. `18.7px`) für `fett` Formulierung:

_Text, der größer und mit breiteren Zeichenstrichen ist, ist bei geringerem Kontrast einfacher zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine größere Auswahl an Farboptionen für großen Text zu verwenden, was für das Design von Seiten, insbesondere Überschriften, hilfreich ist._

Während größerer Text nicht denselben hohen Farbkontrast zu seinem Hintergrund benötigt wie kleinerer Text, ist die Erhöhung der Schriftgröße keine Allzwecklösung.

"Normal" Druck wird üblicherweise als 11,5pt bis 12pt betrachtet, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift lesbar sein kann — ein Nutzer kann Buchstaben bei \~70% Genauigkeit entziffern — ist sie dennoch nicht einfach zu lesen. Eine Schriftgröße von 16px ist für Menschen mit normalem Sehvermögen allgemein lesbar. Jemand mit 20/40 Sehstärke benötigt das Doppelte, etwa eine 31px Schriftgröße. Aus diesem Grund erfordern die WCAG-Richtlinien, dass die Nutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während zu kleiner angezeigter Text schwer zu lesen ist, gilt dies auch für zu großen Text. Für Nutzer mit 20/20 Sehvermögen nimmt die Lesegeschwindigkeit bei einer Textgröße größer als ca. 96px ab. Wenn auch eine große Diskrepanz zwischen dem kleinsten und dem größten Text auf einer Seite besteht, wird der größere Text weniger lesbar, wenn die Nutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser alle Texte gemeinsam zoomen.

Allgemein gilt für Barrierefreiheitszwecke, dass mehr Kontrast besser ist. Das ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Für weitere Informationen zu Farbkontrasten in Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Auch ist zu beachten, dass Symbole genügend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es ermöglicht, den Kontrast zu sehen. Relative Leuchtdichte wird in den WCAG als "die relative Helligkeit eines Punktes in einem Farbraum, normalisiert zu 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich zutreffend, aber möglicherweise verwirrend, wenn sie in Bezug auf den RGB-Farbraum verwendet wird, der ein Integer-Wert zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Schriften). Interpretiert man für den oben genannten W3C-Standard, würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` bzw. `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher kommen also diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafiken die Farbkanäle als ein einzelnes Byte, was bedeutet eine Nummernspanne von 0 bis 255.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat eine größere Leuchtdichte als Blau, zum Beispiel. Dies wurde vom Design aus durchgesetzt, _um die Weißausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichteregion, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Wo es um die menschliche Wahrnehmung geht, zählt ein Unterscheidung der Leuchtdichte mehr als ein Farbunterschied. Das ist wichtig, da Leuchtdichteschärfe die Entwicklung von Inhalten ermöglicht, die selbst diejenigen mit Farbenblindheit sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, lesbarer werden, wenn sie gegen andere mit kontrastierender Leuchtdichte platziert werden. Eine interessante NASA-Studie zu der Farbe Blau stellte z.B. fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _Sorge dafür getragen wird, einen ausreichenden Leuchtdichte-Kontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)).

Berechnungen zur relativen Leuchtdichte sind keine beiläufigen Berechnungen. Glücklicherweise gibt es [Online-Leuchtdichte- und Kontrastprüfer](https://www.siegemedia.com/contrast-ratio) und sogar Anweisungen, wie man die [relative Leuchtdichte berechnet](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Wahrnehmung von Farben

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Sensibilität für diese verschiedenen Farbtöne ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65 % der Zapfen sind _am meisten_ empfindlich gegenüber einem Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "roten" Zapfen). 30 % sind grünempfindlich, und nur [5 % sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es deutlich weniger blau-empfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringeren Zahlen ausgleicht.

Tiefblau wird anders wahrgenommen als andere Farben, da blaue Zapfen nichts zur Leuchtdichte beitragen und wir weitaus weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegelmosaik der Standard-Sicht, und rechts das eines Menschen mit Protanopie, wo die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Kegelmosaik der Standard-Sicht, und rechts das eines Menschen mit Protanopie, eine Form der Farbenblindheit, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu erschaffen, was wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbabstand wahrnehmen können. Getrennt ermöglichen die roten, grünen und blauen Zapfen der Standard-Sicht, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Ton und Farbfülle) verarbeitet.

Leuchtdichte liefert feinere Details der Sicht, einschließlich Differenzierung von Kanten und Text. Ton und Farbfülle übertragen ein Drittel des Detaillevels der Leuchtdichte. Bilddatenkompression macht sich diese Tatsache zunutze. Als Beispiel verkostet der [h.264 Videocodec](/de/docs/Web/Media/Formats/Video_codecs) zu einem Viertel der Auflösung der Leuchtdichte.

Für die Barrierefreiheit bedeutet dies, dass Leuchtdichteschärfe von entscheidender Bedeutung für den Text ist. Die Farbe, wie in Farbton und Farbfülle, ist wichtig für _Unterscheidung_ von Elementen wie verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, den es zu berücksichtigen gilt, ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate die gleichen sRGB-Farben. Kontextbezogene Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es glaubt, im Schatten zu sein oder nicht.

![Ein Bild eines Schachbretts, auf dem identische Farben unterschiedlich aussehen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, erscheinen jedoch aufgrund des Kontextes unterschiedlich. (Bild D.Lyon)

Unseren Kontrast, die Helligkeit und die Farbfarbe sind vom Kontext der nahegelegenen Farben und anderen Design- oder Bildmerkmalen beeinflusst. Dies macht die Vorhersage des Kontrasts herausfordernd. Es ist nicht so einfach, wie ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst ist Farbe ebenso sehr eine Frage der menschlichen Physiologie und Wahrnehmung im Gehirn, wie sie eine Frage der Ermüdungsmessung von Licht aus einem Computerbildschirm ist. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit beeinträchtigt, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber das menschliche Sehen und Wahrnehmen nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an, wenn wir von hellen zu dunklen Bereichen gehen und umgekehrt. Dies liegt an den physiologischen Eigenschaften unserer Augen. Dies beeinträchtigt die Fähigkeit eines Nutzers, Text auf einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an die Umgebung.

Lokale Anpassung geschieht direkt auf der "Seite", die ein Leser betrachtet. Beispielsweise werden Ihre Augen denselben blauen Text mit einem grauen "hervorgehobenen" Bereich anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}}, oder einem weißen befindet. Dies wird _Lokalanpassung_ genannt. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, obwohl die Umgebungsbeleuchtung des Raumes sich nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern wollen, die Prinzipien der Lokalanpassung nutzen können.

Die Dunkelanpassung zu niedriger Leuchtdichte ist langsam. Wenn Sie von draußen eintreten, wo die Sonne hell ist, und in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann einige Minuten dauern, sich daran zu gewöhnen.

Die Lichtanpassung ist das Gegenteil. Aus einem dunklen Raum in helle Sonne gehen ist schneller, kann jedoch auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern wollen, bei dem sich die Umgebungsverhältnisse eines Raumes verändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)-Media-Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Allgemein liegt der Fokus eher auf Leuchtdichte, wenn versucht wird, ausreichenden Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit, Anfälle bei Menschen mit fotosensitiven Anfällen auszulösen, zu bewerten. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit in Bezug auf Barrierefreiheit: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, Anfälle bei Menschen, die empfindlich auf fotosensitive Anfälle reagieren, auszulösen, unabhängig von der Leuchtdichte der Farbe. Wie im [beispielhaften Fall des Rots](#der_spezielle_fall_des_rots) besprochen, merkte die [Epilepsie-Stiftung](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) an, dass _ungeachtet der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstler-Malset sind, sind sie nicht so genau wie die Farbdefinitionen von einem Computerscreen.

Wenn es um Farben auf einem Bildschirm geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein mag, ist die Sättigung leicht zu messen. Der Schlüssel ist zu wissen, mit welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten in Zusammenhang mit Fotosensitivität betrachtet werden, sind die RGB-, HSL- und HSV, auch bekannt als HSB, Farbräume. Der HSV-Farbraum, der für _hue_, _saturation_, und _value_ steht, und die Synonyme HSB, die für _hue_, _saturation_, und _brightness_ stehen, sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _hue_, _whiteness_ und _blackness_ vertreten.

Es ist wichtig zu wissen, mit welchem Farbraum man arbeitet. Zum Beispiel haben gesättigte Farben eine Helligkeit `0.5` in HSL, während in HWB einen Wert von `1`. Die Sättigung im RGB-Farbraum wird in der Regel durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angegeben. Beispielsweise hat ein gesättigtes Rot des Hex-Werts `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", aber beide gelten als gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man weiß, schwarz oder grau zur Farbe hinzufügt; um das Beispiel weiter zu verdeutlichen, kann die Helligkeit durch das Hinzufügen von weiß erhöht werden, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zum Rot, um die Farbe Pink zu erhalten. Pink gilt als ungesättigtes Rot.

### Sättigung und Leuchtdichte

Es gibt einen Sättigungsverlust an den Extreme der Leuchtdichte und den Extreme von Schwarz und Weiß. In NASAs [Effekt der Leuchtdichte auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Sättigungsverlust bei niedrigen Leuchtdichten gibt und auch "…den Verlust der Sättigung bei hohen Leuchtdichten — die Farben nähern sich Weiß."

## Farbkombinationen

Kontrast allein reicht bei Barrierefreiheiterwägungen nicht aus. Im Fall von Animation sind bestimmte Farbkombinationen für Menschen, die anfällig für fotosensitive Anfälle sind, eher problematisch als andere. Zum Beispiel ist das abwechselnde Blitzen zwischen Rot und Blau problematischer als das zwischen Grün und Blau. Es wird vermutet, dass dies daran liegt, dass die "roten" sensibles Zapfen unserer Augen, die dazu neigen, sich um die fovea (in der Nähe des Zentrums) zu gruppieren, physisch anders platziert sind als die "blauen" sensibles Zapfen unserer Augen, die sich fern von der fovea und in Richtung der Ränder befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu lösen, da die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben verursachen eher [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten, die den Gehirndynamiken zugrunde liegen, können durch einige Farbkombinationen stärker moduliert werden als durch andere. Beispielsweise verursacht ein rot-blauer Blitzreiz eine stärkere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können sehr problematisch auf einem Computermonitor oder Mobilgerät sein, und einige Farbkombinationen können mit einigen Beeinträchtigungen interferieren. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals nur auf Farbtöne, um Details zu differenzieren. Ein angemessener Leuchtdichtenkontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus, daher wird es in der Regel ein bedeutender Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben, die eine niedrige Leuchtdichte haben, sollten die dunkleren der kontrastierenden Farben sein. Blau ist auch sehr niedrig in der Auflösung. Es gibt weitaus weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verteilt und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau bei einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte typischerweise die dunklere der zwei Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es an einem anderen Ort auf der Netzhaut fokussiert wird als Rot, sodass eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander und berührend sind, "schimmern" können, wenn sie nebeneinander liegen.

## Der spezielle Fall des Rots

Nicht alle Farben ("Farbtöne") werden von unserem Gehirn auf die gleiche Weise verarbeitet. Menschlicher Physiologie und Psychologie werden allgemein gesagt durch die Farbe Rot beeinflusst, in andere Weise als andere Farben. Wir reagieren physiologisch sowie psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben mehr epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen, die empfindlich auf Licht reagieren, helfen kann. Um die Graustufen-Einstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwierig zu verstehen, wenn man nur auf Zahlen und Terminologien schaut, daher betrachten Sie das Bild unten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Red Saturation von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" bewegt sich von der am wenigsten gesättigten auf der linken Seite zur am meisten gesättigten auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine volle Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ähnlich hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100 %.

Nicht alle gesättigten Rottöne können gut im RGB-Spektrum oder anderen Spektren, die häufig in Webentwicklung verwendet werden, dargestellt werden. Laut dem Wikipedia-Artikel "Rottöne" ist "Karmesinrot" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rote Lichtwellenlängen über 600 nm enthält; der Artikel macht die besondere Bemerkung, dass "Karmesinrot" nahe dem Extremspektrum liegt. Dies platziert es weit jenseits der Standardfarbumfänge (RGB und CMYK), und der angegebene RGB-Wert ist nur eine schwache Annäherung."

### Gesättigtes rotes Blitzen

Neben einer roten Umgebung, die die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinflusst, erfordert Farbe im Rotwellenlängenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte beim Testen des _Photosensitive epilepsy analysis tool_ eine viel höhere als erwartete Anfallrate fest. Sie fanden heraus, dass wir auf gesättigtes rotes Blitzen viel empfindlicher sind. (Siehe Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Kontinuierliches Blitzen heller/dunkler bei Geschwindigkeiten über drei Blitzen pro Sekunde hat erwiesen, photische Anfälle bei einigen Menschen auszulösen. Es wurde auch festgestellt, dass spezifische, sehr regelmäßige, kontrastreiche Muster wie parallele weiße und schwarze Streifen ebenfalls Anfälle auslösen können.

Die Epilepsie-Stiftung von Amerika hat [fotosensitive und musterkontaktierte Anfälle](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group) untersucht. Die Studie ergab mehrere grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Sequenz von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb von einer Sekunde geschehen.

2. Bei der Anzeige von Licht- und Dunkelstreifen sollte das Muster nicht mehr als fünf Licht–Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren oder acht Licht–Dunkel-Paare von Streifen, wenn das Muster unverändert bleibt oder stetig und glatt in eine Richtung driftet.

Die Konsensempfehlungen finden sich in diesem kurzen Papier, [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x). Einige zusätzliche Einsichten sind in diesem UK-Papier, das sich [Richtlinien zur Verhinderung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) befasst.

## Psychophysikalische Aspekte der Farbe

Farbe, sowohl Farbtöne als auch Sättigung, kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern oder vermindern.

### Beispiele für den Einfluss der Farbe über die Sicht hinaus

- **Farbe kann kulturell abhängig sein:** [Eine kulturelle Studie über die affektiven Bedeutungen der Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontrasten können auch positive Auswirkungen auf unsere Emotionen haben:** [Emotionale Variation durch die Kontrolle von Kontrasten visueller Inhalte über EEG-basierte Tiefenemotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Wahrnehmung der Zeit beeinflussen:** [Farbe und Zeitwahrnehmung: Nachweis für zeitliche Überschätzung von blauen Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen bedeutenden Einfluss auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können zu erhöhter Freude oder Glück führen:** [Durch die "rosarote Brille" schauen: Der Einfluss von Tönung auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, bedeutende Auswirkungen auf unser Verhalten zu haben:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischer Hirnverletzung die [kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Weitere Informationen

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Lernpfad für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Zugänglichkeit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit machen, um die Integrität des Sehnervs zu beurteilen.
- [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
