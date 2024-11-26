---
title: "Barrierefreiheit im Web: Verstehen von Farben und Leuchtdichte"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{AccessibilitySidebar}}

Während das Verstehen von Farbe, Leuchtdichte und Sättigung für das Design und die Lesbarkeit für alle sehenden Nutzer wichtig ist, sind sie für diejenigen mit eingeschränktem Sehvermögen und Farbsehschwäche sowie für Personen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen unerlässlich.

Barrierefreiheitsrichtlinien definieren angemessene [Farbkontraste](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehbehinderte Nutzer sowie Richtlinien, die Nutzern mit farbunempfindlichem Sehvermögen, üblicherweise als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Personen mit vestibulären Störungen oder anderen neurologischen Erkrankungen zu verhindern.

## Überblick

Die Farbwahl und deren Einsatz ist ein bedeutender Bestandteil der Barrierefreiheit. Oberflächlich betrachtet scheint das Thema einfach zu sein. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung sowohl von der Physiologie des Auges als auch von der Verarbeitung durch das menschliche Gehirn sowie vom Licht, das vom Computerbildschirm ausgestrahlt wird, abhängt.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung einer Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. Im Hinblick auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen einen größeren Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder extravagant, dass sie allein Probleme für die Barrierefreiheit darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters vom Bildschirm, der Umgebungs Hintergrund, die Gesundheit seiner Augen und mehr beeinflussen, wie die Farbe von ihm wahrgenommen wird. Wie der Betrachter die Farbe nach Eintritt in seine Augen wahrnimmt, ist eine andere Sache und kann durch die allgemeine Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme)-Präferenzen.

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Lichtstärke des Umgebungslichts um das Hostgerät zurück, wodurch eine Webseite auf Änderungen der Lichtintensität aufmerksam wird und infolgedessen den Text entsprechend anpassen kann. Zusätzlich ermöglichen die oben genannten Media Queries den Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn die Benutzerpräferenzen bevorzugte Kontrastniveaus angeben, indem die Stufen automatisch an den Standort des Benutzers und den von ihm verwendeten Bildschirm angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und kritischsten Konzepte zur Erstellung barrierefreier Webinhalte mit Farbe. Leuchtdichte ist jedoch von besonderer Bedeutung, weil das Verständnis dessen, was es ist und wie es eingesetzt wird, Barrierefreiheit für farbenblinde Personen sowie für diejenigen, die Farbe wahrnehmen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es den Farbenblinden, Dunkel von Hell zu unterscheiden.

Die Leuchtdichte muss vor dem Kontrast festgelegt werden. Wenn von Farbkontrast die Rede ist, enthalten die W3C-Formeln die Leuchtdichte, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, weil verschiedene Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, richtig zu verstehen. Zum Beispiel wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. In anderen Kreisen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Leuchtkraft" und manchmal als "Helligkeit" bezeichnet. Selbst einfache Dinge wie die Benennung gängiger Farben können umstritten sein. Zum Beispiel kann die Farbe "Karminrot" von einigen als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie im W3C, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert wird.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume auf unterschiedliche Messsysteme abgebildet werden.

Beim Farbendruck hat Ihr Drucker wahrscheinlich Tintenpatronen in Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Wellenlängen von Licht _entfernen_, um nur den engen Bereich zu reflektieren, mit dem jede verknüpft ist. RGB ist ein additives Farbmodell, das verschiedene Proportionen von Rot, Grün und Blau hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch, wegen der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe werden die meisten Berechnungen in diesem Dokument im RGB-Farbraum und, sehr spezifisch, im sRGB-Farbraum ausgeführt.

## Der sRGB-Farbraum

Farbe hat viele Möglichkeiten, definiert zu werden, erkennbar am [`<color>` Datentyp](/de/docs/Web/CSS/color_value), einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

In digitalen Belangen hat sich historisch gesehen viel der Technologie im RGB-Farbraum abgespielt. Das RGB-Farbmodell wird auf "Alpha" erweitert — RGBA — um die Spezifikation der Opazität einer Farbe zu ermöglichen. Andere Methoden zur Farbmessung beinhalten Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Video-Produktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zur Verwendung von OpenGL die Verwendung von RGBA statt sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel für die Verwendung in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es Variationen auch innerhalb eines {{Glossary("color_space", "Farbraums")}} wie dem {{Glossary("RGB", "RGB")}}-Farbraum gibt. Zum Beispiel beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der in CSS verwendeten Notationen zur Definition einer Farbe. Hier ist die Beispiel-Farbe für jede vollständig opake Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz setzen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt als eine Zahl von 0 bis 255 setzen.

Danach werden hexadezimale Farbwerte gezeigt. Hexadezimal ist ein Zahlensystem mit Basis 16, wobei die Ganzzahl von 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen und die Ziffern 0-9 verwenden sowie a-f für 10-15. Somit `ff` = `255`, `00` = `0`, und `d5` = `200`. Das Zeichen '#' geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. Somit ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz im Sinne des Deckkraftwerts der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1`, und `100%` für vollständig deckend.

Das Beispiel zeigt auch die Legacy-Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die veraltete Syntax für Farb Funktionen ist komma-getrennt, mit einer separaten Funktion, wenn der Alpha-Kanal enthalten ist. Neue Farb Funktionen haben nur eine Syntax mit leerzeichengetrennten (statt komma-getrennten) Werten, wobei, wenn vorhanden, der Alpha-Kanal von einem Schrägstrich vorangestellt wird. Moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das `none` Schlüsselwort; die komma-getrennte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation und Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die durch die Einstellungen erzeugte Farbe befindet sich weiterhin im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Die Helligkeit wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um die Helligkeit anzupassen. Beachten Sie, dass HSL-Farben _Lightness_ und nicht _Luminance_ beinhalten, was eine wichtige Überlegung ist.

Die nächste Beispiele zeigt "HWB", das für _Hue, Whiteness, and Blackness_ steht. Sowohl bei `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn kein Einheitenwert angegeben ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mithilfe der [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), und [`color()`](/de/docs/Web/CSS/color_value/color) Farb Funktionen.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn Sie sich ansehen, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe in einer verkürzten dreistelligen hexadezimalen Zahl ausgedrückt werden kann, die zu einem rgb-Wert als eine sechsstellige hexadezimale Zahl konvertiert wird, der auch in denselben rgb-Wert konvertiert wird, oder als rgba-Wert, ausgedrückt in Prozentsätzen.

RGB ist hardwareorientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation. Das Konvertieren von RGB zu HSL ist keine einfache Gleichung. Zum Glück erledigen Browser dies automatisch, und Sie können durch SHIFT-Klick auf Farben in den Entwickler-Tools der Browser eine Konvertierungs Funktionalität erhalten.

Zusätzlich zu den Entwickler-Tools gibt es viele Werkzeuge, die RGB für Sie in HSL konvertieren können und sowohl die RGB-hexadezimale als auch die CSS- Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hexa Optionen zur Überprüfung von Kontrasten im Browser. Beachten Sie, dass Entwickler-Tools-Farbauswähler und dieses Werkzeug alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bereitstellen.

![Farbauswähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich der [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionalen Farbnotation und der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe angeben können. Das gesagt, bleibt sRGB der Standard- und bevorzugte Farbenraum für Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Wo es um Barrierefreiheit geht, werden Standards und Richtlinien derzeit jedoch überwiegend mit dem sRGB-Farbraum geschrieben, insbesondere wenn es um Farbkontrastverhältnisse geht.

> [!NOTE]
> Fast alle heute verwendeten Systeme zum Anzeigen von Webinhalten gehen von einer sRGB-Kodierung aus. Wenn nicht bekannt ist, dass ein anderer Farbraum verwendet wird, um den Inhalt zu verarbeiten und darzustellen, sollten Autoren die Bewertung des sRGB-Farbraums in Betracht ziehen. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB Dezimalreferenz Skala oder über `color(srgb...)` zurück. Zum Beispiel würde das Aufrufen von `Window.getComputedStyle()` auf einem `<div>`, für das `background-color: #ff0000` gesetzt ist, die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurückgeben — die RGB Dezimalreferenz. Wenn jedoch [relativ Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet werden (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt das Aufrufen von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da sie mit Computerhardware verbunden ist, misst `Window.getComputedStyle()` Farben in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot/Grün-Farbenblindheit

Protanopie ist eine Farbsehenschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann jedoch immer noch über grüne Zapfen wahrgenommen werden, wenn auch dunkler als im normalen Sehen. Sowohl Protan- (rot-defizient) als auch Deutan- (grün-defizient) Schwächen verursachen Schwierigkeiten beim Unterscheiden von _Rot und Grün_.

Entwickler-Tools können Simulationen von Farbsehunterschieden direkt in Ihrem Browser unterstützen. Zum Beispiel ermöglicht der Zugänglichkeitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitspanel.

![Ausschnitt der Firefox-Entwickler-Tools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist eine kritische Komponente, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts die Leuchtdichte einbeziehen.

Außerdem spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriftarten benötigen Raum, um "zu atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (circa `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (circa `18.7px`) für `fetten` Text. Darin steht:

_Text, der größer ist und breitere Strichzüge hat, ist bei geringem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht Autoren die Verwendung einer breiteren Palette an Farboptionen für großen Text, was besonders hilfreich für das Design von Seiten, insbesondere Titeln, ist._

Obwohl größerer Text keinen so großen Farbkontrast mit seinem Hintergrund benötigt wie kleinerer Text, ist eine Schriftgrößenerhöhung kein Allheilmittel.

"Normale" Druckschrift wird normalerweise als 11.5pt bis 12pt angesehen, was 16px auf dem Bildschirm entspricht. Während kleinere Schrift lesbar sein kann — ein Benutzer kann Buchstaben bei \~70% Genauigkeit erkennen — ist das nicht wirklich lesbar. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 benötigt das Doppelte, etwa eine 31px-Schrift. Aus diesem Grund verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu klein dargestellter Text schwer zu lesen ist, ist auch ein zu großer Text schwer lesbar. Für Benutzer mit 20/20-Sehvermögen sinkt die Lesegeschwindigkeit bei einer Schriftgröße über etwa 96px. Auch wenn es einen großen Unterschied zwischen der kleinsten und der größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser beim Zoomen alle Texte vergrößern.

Im Allgemeinen gilt für Barrierezwecke: Je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Drei Blitze oder darunter Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Beachten Sie auch, dass Icons einen ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu erkennen. Relative Leuchtdichte wird in WCAG als "die relative Helligkeit eines beliebigen Punkts in einem Farbraum, normiert auf 0 für das tiefste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie im Bezug auf den RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat eine 100% relative Leuchtdichte, Schwarz hat eine 0% relative Leuchtdichte (in der meisten, aber nicht allen Literatur). Nach der oben genannten W3C-Norm hätte Weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normiert auf 0, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher stammen also diese Zahlen von 0 bis 255? Historisch speicherten Grafik-Engines die Farbkanäle als einzelnes Byte, was einen Bereich von ganzen Zahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichte der Primärfarben ist unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde entworfen, damit _die weiße Ausrichtung des Monitors erreicht wird_, gemäß dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichtekomponente, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Wo es um die menschliche Wahrnehmung geht, zählt ein Unterschied in der Leuchtdichte mehr als ein Farbunterschied. Dies ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die sogar von Farbenblindheit betroffene Personen sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, lesbarer gemacht werden könnten, indem diese Farben gegen andere mit kontrastierender Leuchtdichte gesetzt werden. Eine interessante Studie der NASA zur Farbe Blau stellte zum Beispiel fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _darauf geachtet wird, einen ausreichenden Leuchtdichtekontrast zu erreichen_ (aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen zur relativen Leuchtdichte sind keine zufälligen. Glücklicherweise gibt es [Online-Checker für Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio) und sogar Anleitungen, wie man die [relative Leuchtdichte berechnet](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Farbwahrnehmung

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am_ empfindlichsten für ein Gelb/Grün, reagieren aber auch auf Rot (wir werden diese "rote" Zapfen nennen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger blauempfindliche Zapfen gibt als die anderen beiden Arten, sind diese Zapfen sehr empfindlich, was teilweise für ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Zapfenmosaik des Standardsehens und rechts das eines Menschen mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik des Standardsehens, und rechts das eines Menschen mit Protanopie, einer Form von Farbsehschwäche, bei der sie die roten Zapfen vermissen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen verbünden sich zur Schaffung von Leuchtdichte, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton verstehen können. Die roten, grünen und blauen Zapfen erlauben getrennt das Standardsehen, um Millionen von Farben wahrzunehmen. Bei der Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte wird für feine Sehdetails bereitgestellt, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtdichte. Bilddatene Kompression nutzt dies aus. Ein Beispiel ist, dass der [h.264 Video-Codec](/de/docs/Web/Media/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte abtastet.

Für die Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast für Text von kritischer Bedeutung ist. Farbe, wie bei Farbton und Farbigkeit, ist wichtig für die _Unterscheidung_ von Elementen, z.B. verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextsensitive Farbwahrnehmung lässt sie anders erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung an, basierend darauf, was es als im Schatten oder nicht annimmt.

![Ein Bild eines Schachbretts, wo identische Farben anders aussehen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, sehen aber aufgrund des Kontexts unterschiedlich aus. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und unsere Farbwahrnehmung werden von den nahen Farben und anderen Merkmalen eines Designs oder Bildes beeinflusst. Dies macht die Vorhersage des Kontrasts herausfordernd. Es ist nicht so einfach wie ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe so sehr mit der menschlichen Physiologie und Wahrnehmung im Gehirn zu tun hat wie mit der Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich beim Wechsel von Licht- in Dunkelbereiche und umgekehrt nicht gleichmäßig an. Dies liegt an der physiologischen Struktur unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten von Anpassungen finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie zum Beispiel blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen blauen Text mit grauem Highlight anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird _lokale_ Anpassung genannt. Diese Unterschiede in der Fähigkeit, den Text wahrzunehmen, werden beeinflusst, selbst wenn sich die Umgebungs Beleuchtung im Raum nicht ändert.

Die Implikation ist, dass Webentwickler, die versuchen, die Lesbarkeit des Textes vor einem Hintergrund zu verbessern, die Prinzipien der lokalen Anpassung nutzen können.

Dunkelanpassung an niedrige Leuchtdichte erfolgt langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erfahren Sie die Dunkelanpassung. Es kann ein paar Minuten dauern, sich daran zu gewöhnen.

Die Lichtanpassung ist das Gegenteil. Von einem dunklen Raum ins helle Sonnenlicht zu gehen ist schneller, kann aber auch schmerzhaft sein.

Die Implikation ist, dass Webentwickler, die versuchen, die Lesbarkeit des Textes in dem sich ändernden Umgebungsbedingungen eines Raums zu verbessern, die `AmbientLightSensor`-Schnittstelle verwenden und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query verwenden können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farben ("Farbtöne") und Zugänglichkeit. Allgemein gesagt liegt der Fokus meist auf Leuchtdichte, wenn versucht wird, genügend Kontrast zwischen Text und Hintergrund sicherzustellen oder die Möglichkeit von Anfällen bei Menschen, die empfindlich auf lichtempfindliche Anfälle reagieren, zu evaluieren. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit, da er auf die Zugänglichkeit anwendbar ist: das Konzept der Sättigung. Dies ist auf ihre Fähigkeit zurückzuführen, bei Menschen, die anfällig für lichtempfindliche Anfälle sind, Anfälle zu verursachen, unabhängig von der Leuchtdichte der Farbe. Wie im [besonderen Fall von Rot](#der_besondere_fall_von_rot) diskutiert, stellte die [Epilepsie Foundation](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) fest, dass _unabhängig von der Leuchtdichte der Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstlerfarbenset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Bezüglich der Farbe auf einem Monitor sind gesättigte Farben von einer bestimmten Wellenlänge. Während sich die Definition der Sättigung für jeden Farbraum unterscheiden kann, ist die Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten, und bereit zu sein, ihn gegebenenfalls zu konvertieren.

Die am häufigsten betrachteten Farbräume beim Thema Fotosensitivität sind die RGB-, HSL- und HSV-, auch bekannt als HSB-Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue_, _Whiteness_, und _Blackness_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0,5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Beispielsweise hat ein gesättigtes Rot mit dem hexadezimalen Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem hexadezimalen Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne" bilden jedoch eine gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann die Helligkeit durch das Hinzufügen von Weiß erhöht werden, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

An den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß gibt es einen Sättigungsverlust. In NASAs [Wirkung der Leuchtdichte auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Sättigungsverlust bei niedrigen Leuchtdichten gibt, und auch, "...den Sättigungsverlust bei hohen Leuchtdichten–die Farben konvergieren zu Weiß."

## Farbkombinationen

Kontrast allein reicht nicht aus, wenn es um Zugänglichkeitsüberlegungen geht. Im Falle von Animation sind einige Farbkombinationen für Menschen, die anfällig für lichtempfindliche Anfälle sind, problematischer als andere. Zum Beispiel ist der Wechsel zwischen Rot und Blau problematischer als der Wechsel zwischen Grün und Blau. Es wird vermutet, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die sich tendenziell um die Fovea (nahe dem Zentrum) gruppieren, physisch an einer anderen Stelle als die "blauen" empfindlichen Zapfen unserer Augen liegen, die sich abseits der Fovea und an den Rändern befinden. Die elektrischen Signale vom Auge zum Gehirn müssen viel zwischen ihnen auflösen, wenn die Information im Gehirn verarbeitet wird.

Einige Farben verursachen mehr wahrscheinlich [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten, die den neuronalen Dynamiken zugrunde liegen, können durch einige Farbkombinationen mehr als andere moduliert werden. Beispielsweise verursacht ein rot-blaues Flackerstimulus eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus.

Bestimmte Farbkombinationen können auf einem Monitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können bei einigen Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein auf den Farbton zur Unterscheidung von Details. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor erzeugt den Großteil der Leuchtdichte (Licht), und wird daher oft einen großen Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie beispielsweise reines Blau, haben eine geringe Leuchtdichte. Farben, die eine geringe Leuchtdichte haben, sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen, und sie sind verstreut in unserem peripheren Sichtfeld und im zentralen Sichtfeld nicht vorhanden. Das menschliche Auge sieht Blau in einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte typischerweise die dunkelste der beiden Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Eigenschaften des blauen Lichts führen dazu, dass es an einem anderen Ort auf der Netzhaut fokussiert wird als Rot, daher können eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander und berührend sind, bei Berührung "flimmern".

## Der besondere Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen auf dieselbe Weise verarbeitet. Die menschliche Physiologie und Psychologie werden von der Farbe Rot, allgemein gesprochen, auf andere Weise beeinflusst als bei anderen Farben. Wir reagieren physiologisch sowie psychologisch auf Farben. Zum Beispiel wurde festgestellt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Zugänglichkeitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die Menschen, die empfindlich auf Lichtstimuli reagieren, helfen kann. Um die Graustufeneinstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwierig zu verstehen, wenn man nur Zahlen und Terminologie betrachtet, ziehen Sie also das folgende Bild heran, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe "Farbe" geht von der am wenigsten gesättigten auf der linken Seite zur am meisten gesättigten auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot angesehen werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, hat jedoch eine geringere Helligkeit als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die häufig in der Webentwicklung verwendet werden, gut dargestellt werden. Das Wikipedia zur Seite "Rottöne" merkt an, dass die Farbe "Karmin" ein gesättigtes Rot ist, das, in seiner Pigmentform, hauptsächlich rotes Licht mit einer Wellenlänge länger als 600nm enthält; die Artikel stellen fest, dass "Karmin" nahe am Extremspektrum liegt. Dies platziert sie weit außerhalb der Standard-Gamuten (RGB und CMYK), und ihr angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes Rot Flackern

Zusätzlich zu einer roten Umgebung, die die kognitive Funktion bei Personen mit traumatischer Hirnverletzung beeinträchtigt, erfordert die Farbe im roten Spektrumsbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte beim Testen des _Photosensitive epilepsy analysis tool_ fest, dass die Anfallsraten weit höher waren, als erwartet. Sie entdeckten, dass wir viel empfindlicher auf Schimmern roter Flashs reagieren. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Flackern und Anfälle

Ein kontinuierliches Flackern heller/dunkler mit Raten von mehr als drei Blitzen pro Sekunde hat sich gezeigt, um bei manchen Menschen photische Anfälle auszulösen. Es wurde auch festgestellt, dass spezifische, sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

Die Epilepsie-Foundation of America erforschte [Photic- und Pattern-induzierte Anfälle](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie resultierte in mehreren grundlegenden Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze innerhalb einer Sekunde sind akzeptabel, aber eine Sequenz von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde erfolgen.

2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster maximal fünf helle–dunkle Streifenpaare enthalten, wenn die Streifenrichtung wechselt, schwingt, flimmert, oder acht helle–dunkle Streifenpaare zeigen, wenn das Muster unverändert bleibt oder sich kontinuierlich und gleichmäßig in eine Richtung bewegt.

Die Konsensempfehlungen sind in diesem kurzen Paper zu finden, [Photic- und Pattern-iniduzierte Anfälle: Expertenkonsensus der Epilepsie-Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x). Einige zusätzliche Erkenntnisse sind in diesem britischen Papier zu finden, das sich mit [Richtlinien zur Verhinderung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) befasst.

## Psychophysische Aspekte von Farbe

Farbe wie bei Farbton und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verstärken oder mindern.

### Beispiele für den Einfluss von Farbe über die Vision hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können sich auch positiv auf unsere Emotionen auswirken:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen erheblichen Effekt auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können die Freude oder das Glück erhöhen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist dafür bekannt, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen, die unter einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad für Barrierefreiheit](/de/docs/Learn/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color)-Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp
- [Web-Zugänglichkeit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf "Rot abgestimmt", dass Augenärzte einen Test damit aufstellen, um die Integrität des Sehnervs zu beurteilen.
- [Photic- und pattern-induzierte Anfälle: Expertenkonsensus der Epilepsie Foundation of America Arbeitsgruppe](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
