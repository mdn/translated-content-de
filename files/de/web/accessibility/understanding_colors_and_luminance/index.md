---
title: "Web-Barrierefreiheit: Verständnis von Farben und Leuchtdichte"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Während das Verständnis von Farbe, Leuchtdichte und Sättigung für das Design und die Lesbarkeit für alle sehenden Benutzer wichtig ist, sind sie für Personen mit eingeschränkter Sehfähigkeit und farbfehlerhaftem Sehen sowie für Personen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen von entscheidender Bedeutung.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit verminderter Sehfähigkeit sowie Richtlinien, die Benutzern mit farbempfindlichem Sehen, allgemein als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu vermeiden.

## Übersicht

Die Wahl der Farben und deren Verwendung ist ein bedeutender Bestandteil der Barrierefreiheit. Auf den ersten Blick erscheint das Thema einfach, doch es ist ein komplexes Thema, da die Farbwahrnehmung genauso viel mit der Physiologie des Auges und der Verarbeitung durch das menschliche Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie selbst Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text herum, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand des Betrachters vom Bildschirm, der Hintergrund in der Umgebung, die Gesundheit seiner Augen und mehr beeinflussen alle, wie diese Farbe vom Betrachter empfangen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist eine andere Sache und kann von der allgemeinen Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, liefert die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle das aktuelle Lichtniveau oder die Helligkeit des Umgebungslichts um das Hostgerät, wodurch eine Webseite Änderungen in der Lichtintensität erkennen und den Text entsprechend anpassen kann. Darüber hinaus ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontrastniveaus anzeigen, indem sie die Level je nach Standort des Benutzers und der Art des verwendeten Bildschirms automatisch anpassen.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und kritischen Konzepte zur Erstellung barrierefreien Webinhalts mit Farbe. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, Barrierefreiheit sowohl für Farbenblinde als auch für Menschen, die Farbe wahrnehmen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Farbenblinden, zwischen dunkel und hell zu unterscheiden.

Leuchtdichte muss festgelegt werden, bevor der Kontrast eingestellt werden kann. Wenn von Farbkontrast gesprochen wird, verwenden W3C-Formeln Leuchtdichte, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da verschiedene Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um sie richtig zu verstehen. Zum Beispiel wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Helligkeit" und manchmal als "Lichtstärke" bezeichnet. Selbst etwas scheinbar Einfaches wie das Benennen gewöhnlicher Farben kann umstritten sein. Zum Beispiel kann die Farbe "Karminrot" von einigen in Hex-Werten als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument werden wir die Terminologie so verwenden, wie sie im W3C definiert ist, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).

Wenn man mit Farbe arbeitet, ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da verschiedene Farbräume auf verschiedene Messsysteme abbilden.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Tintenpatronen für Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellenlängen _entfernen_ und nur den engen Bereich widerspiegeln, mit dem jede assoziiert wird. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot, Grün und Blau Licht hinzufügt.

Derzeit dominiert der [RGB-Farbraum](/de/docs/Glossary/RGB) als der Raum, in dem Webentwickler arbeiten. Während Hex-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser die Werte automatisch zwischen diesen Farbnennungen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbwiedergabe werden jedoch die meisten Berechnungen in diesem Dokument vorausgesetzt, dass sie im RGB-Farbraum und sehr spezifisch im sRGB-Farbraum erfolgen.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Für digitale Belange befand sich viel der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzubeziehen, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zu OpenGL die Verwendung von RGBA anstelle von sRGB referenzieren. WebGL ist normalerweise im RGBA-Format; sehen Sie ein Beispiel für dessen Nutzung in "Clearing with colors" ([Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)).

### CSS Farbwerte

Es ist wichtig zu wissen, dass es sogar innerhalb eines [Farbraums](/de/docs/Glossary/color_space) Variationen gibt, wie zum Beispiel im [RGB](/de/docs/Glossary/RGB) Farbraum. Beispielhafte Variationen des RGB-Farbraums beinhalten **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele der CSS-Notation zur Farbbestimmung. Hier ist die Beispiel-Farbe in allen Fällen ein voll deckendes Magenta:

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

Das erste Beispiel verwendet einen der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz einstellen, wobei 0 % für "aus" (schwarz) und 100 % für den vollen Wert dieser Farbe stehen. Die Werte folgen der Reihenfolge Rot, Grün und Blau. Wir können auch die sRGB-Werte direkt durch eine Zahl von 0 bis 255 festlegen.

Anschließend werden hexadezimale Farbwerte gezeigt. Hexadezimal ist ein Zahlensystem mit der Basis 16, bei dem die Ganzzahl von 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Daher bedeutet `ff` = `255`, `00` = `0` und `d5` = `213`. Das Symbol '#' geht der Farbe voran, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch Einzeldigits dargestellt werden, die der Browser dupliziert. Daher ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz im Hinblick auf den Deckungsgrad der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender und somit weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll deckend.

Das Beispiel zeigt auch die veraltete Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die veraltete Syntax für Farb-Funktionen ist komma-getrennt, mit einer separaten Funktion für den Fall, dass der Alphakanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit leerzeichengetrennten (anstatt komma-getrennten) Werten, wobei der Alphakanal, falls vorhanden, durch einen Schrägstrich vorangestellt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das `none` Schlüsselwort; die komma-getrennte veraltete Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation und Lightness_ (Farbton, Sättigung und Helligkeit) steht. Viele Menschen empfinden HSL-Farbwerte als intuitiver als RGB-Werte. Die Farbe, die aus den Einstellungen hervorgeht, befindet sich weiterhin im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton zu justieren. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine bedeutende Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness und Blackness_ (Farbton, Weiße und Schwarze) steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn das Einheitszeichen fehlt, wird der Wert als `deg` Grad interpretiert.

Es gibt verschiedene weitere Farbfunktionen und Farbräume. Die letzten drei Beispiele verdeutlichen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionen.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn man sich ansieht, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer Kurzschrift, als dreistellige hexadezimale Zahl, die in einen RGB-Wert konvertiert wird, als sechsstellig hexadezimale Zahl, die ebenfalls in denselben RGB-Wert konvertiert wird, oder als RGBA-Wert in Prozent ausgedrückt werden kann.

RGB ist hardwareorientiert und spiegelt den Einsatz von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Die Konvertierung von RGB zu HSL ist keine einfache Gleichung. Glücklicherweise erledigen Browser dies automatisch, und das Umklicken auf Farben in den Entwicklertools des Browsers bietet eine Konvertierungsfunktionalität.

Zusätzlich zu Entwicklertools können viele Tools RGB für Sie in HSL umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie umwandelt, ist Tom Jewett's "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen, um den Kontrast im Browser zu überprüfen. Beachten Sie, dass sowohl die Farbwähler der Entwicklertools als auch dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors) die Hinzufügung zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbnennungen und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Das gesagt, sRGB ist immer noch der Standard und bevorzugte Farbraum für Barrierefreiheit wegen seiner Allgegenwart.

In Bezug auf Barrierefreiheit jedoch sind Standards und Richtlinien derzeit überwiegend im sRGB-Farbraum geschrieben, insbesondere da es Farbkontrastverhältnisse betrifft.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Webinhalten gehen von einer sRGB-Kodierung aus. Es sei denn, es ist bekannt, dass ein anderer Farbraum verwendet wird, um die Inhalte zu verarbeiten und darzustellen, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB-Decimal-Referenzskala oder `color(srgb...)` zurück. Wenn beispielsweise `Window.getComputedStyle()` auf ein `<div>` angewendet wird, bei dem `background-color: #ff0000` gesetzt ist, wird die berechnete Hintergrundfarbe als `rgb(255 0 0)` — die RGB-Decimal-Referenz — zurückgegeben. Bei [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot-/Grün-Farbblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine Rot-Zapfen hat; sRGB kann über Grün-Zapfen wahrgenommen werden, jedoch dunkler als bei normalem Sehen. Sowohl Protan (rot-defizient) als auch Deutan (grün-defizient) Schwächen führen zu Schwierigkeiten, _zwischen_ Rot und Grün zu unterscheiden.

Entwicklertools können helfen, Farbsehdifferenzen direkt im Browser zu simulieren. Beispielsweise ermöglicht der Barrierefreiheit-Inspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich.

![Ausschnitt der Firefox-Entwicklertools mit dem Simulations-Popup](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist eine entscheidende Komponente, aber der Einsatz von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie bereits erwähnt, muss jede Berechnung des Kontrastes die Leuchtdichte einschließen.

Darüber hinaus spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben werden schwieriger zu lesen sein als dicke; alle Schriften brauchen Platz, um für den Menschen wahrnehmbar zu sein.

### Kontrast und Schriftgröße

[WCAG Kontrastrichtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (ungefähr `18.7px`) für `fett` gedruckten Text. Darin wird festgehalten:

_Text, der größer ist und größere Buchstabenstriche hat, ist bei geringerem Kontrast leichter lesbar. Daher sind die Kontrastanforderungen für größeren Text niedriger. Dies ermöglicht es den Autoren, bei großem Text ein breiteres Farbspektrum zu verwenden, was für die Gestaltung von Seiten, insbesondere Titeln, hilfreich ist._

Während größerer Text nicht so viel Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normale" Druckschrift wird üblicherweise als 11.5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift lesbar sein könnte – ein Benutzer kann Buchstaben mit ungefähr 70 % Genauigkeit erkennen – ist das nicht lesbar. Eine Schriftgröße von 16px ist für Menschen mit normalem Sehvermögen allgemein lesbar. Jemand mit 20/40 Sehkraft benötigt die doppelte Größe, etwa 31px. Deshalb verlangen die WCAG-Richtlinien, dass Benutzer in der Lage sein müssen, jeden Text zu vergrößern.

Während ein zu klein dargestellter Text schwer zu lesen ist, ist es ein Text, der zu groß ist, auch. Für Benutzer mit normalem Sehvermögen, bei einer Textgröße von über etwa 96px, nimmt die Lesegeschwindigkeit ab. Wenn es einen großen Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser beim Zoomen alle Texte vergrößern.

Im Allgemeinen gilt für Barrierefreiheitszwecke, je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Drei Blitze oder Schwellenwert überschreiten Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Icons ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der uns den Kontrast sehen lässt. Relative Leuchtdichte wird in den WCAG als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normiert auf 0 für tiefstes Schwarz und 1 für hellstes Weiß" definiert.

Diese Aussage ist natürlich genau, kann jedoch verwirrend sein, wenn sie in Bezug auf den RGB-Farbraum verwendet wird, der ein Ganzzahlwert zwischen 0 und 255 ist. Weiß hat eine relative Leuchtdichte von 100 %, Schwarz hat eine relative Leuchtdichte von 0 % (in den meisten, aber nicht allen Literaturquellen). Interpretierend für den W3C-Standard oben würde das bedeuten, dass Weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein mag.

Woher kommen diese Zahlen von 0 bis 255? Historisch speicherten Grafik-Engines die Farbkanäle als ein einziges Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Grundfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, um die weiße Ausrichtung des Monitors zu erzielen, laut dem NASA-Dokument "[Leuchtdichtekontrast in Farbgrafiken](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichtekomponente, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgestellt werden.

Wo es um die menschliche Wahrnehmung geht, ist ein Unterschied in der Leuchtdichte wichtiger als ein Farbunterschied. Das ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die selbst diejenigen sehen können, die farbenblind sind. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die schwer zu sehen sind, weil ihre Leuchtdichte niedrig ist, lesbarer gemacht werden könnten, indem diese Farben gegen eine andere mit kontrastierender Leuchtdichte platziert werden. Eine interessante NASA-Studie zur Farbe Blau zum Beispiel stellte fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn darauf geachtet wird, einen ausreichenden Leuchtdichte-Kontrast zu erzielen. (Aus dem Artikel "[Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)")

Berechnungen zur relativen Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Leuchtdichte- und Kontrast-Checker](https://www.siegemedia.com/contrast-ratio), und sogar Anleitungen, wie man [relative Leuchtdichte berechnet](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Farbverständnis

Farbe ist unsere Wahrnehmung des engen Bereichs des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), sogenannte Zapfen, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65 % der Zapfen sind am empfindlichsten für ein Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "Rot"-Zapfen). 30 % sind grünempfindlich, und nur [5 % sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen als die anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da die blauen Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Zapfen-Mosaik des Standardsehens, und rechts das eines Menschen mit Protanopie, bei denen die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfen-Mosaik des Standardsehens, und rechts das eines Menschen mit Protanopie, einer Form der Farbsehstörung, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen verbinden sich, um Leuchtdichte zu erzeugen, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton betrachten können. Getrennt erlauben die roten, grünen und blauen Zapfen dem Standardsehen, Millionen von Farben wahrzunehmen. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von der Farbe (Farbton und Farbintensität) verarbeitet.

Leuchtdichte bietet feine visuelle Details, einschließlich der Unterscheidung von Kanten und Text. Der Farbton und die Farbintensität tragen ein Drittel der Details der Leuchtdichte. Die Bilddatenkompression nutzt diese Tatsache aus. Als Beispiel, [h.264-Videocodec](/de/docs/Web/Media/Formats/Video_codecs) bemustert Farbe mit einem Viertel der Auflösung der Leuchtdichte.

Für Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe, im Sinne von Farbton und Farbintensität, ist wichtig für das _Unterscheiden_ von Elementen, wie verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, den man berücksichtigen sollte, ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Eine kontextabhängige Farbwahrnehmung lässt sie unterschiedlich aussehen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung anhand dessen an, was es denkt, sich im Schatten befindet oder nicht.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, wenn sie im Schatten sind.](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind auf Ihrem Monitor identische Farben, erscheinen jedoch aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und Farbwahrnehmung werden durch den Kontext der umliegenden Farben und anderer Merkmale eines Designs oder Bildes beeinflusst. Dies macht das Vorhersagen von Kontrast herausfordernd. Es ist nicht so einfach wie das mathematische Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe ebenso viel mit der menschlichen Physiologie und der Wahrnehmung im Gehirn zu tun hat, wie mit der Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit zur Farbwahrnehmung und zum Kontrast beeinflusst. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht auf die gleiche Weise an, wenn sie von hellen Bereichen zu dunklen wechseln und umgekehrt. Dies ist auf die physiologischen Wege zurückzuführen, auf denen unsere Augen aufgebaut sind. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Es gibt mindestens zwei Arten der Anpassung: lokale Anpassung und Anpassung an die Umgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen genau blauen Text mit einem grauen Hintergrund anders wahrnehmen, je nachdem, ob er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird als _lokale_ Anpassung bezeichnet. Diese unterschiedliche Fähigkeit zur Textwahrnehmung wird beeinflusst, selbst wenn sich die Umgebungsbeleuchtung im Raum nicht ändert.

Die Implikation besteht darin, dass Webentwickler, die die Lesbarkeit von Text vor einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Dunkel-Adaption zu niedriger Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erleben Sie die Dunkel-Adaption. Es kann etwas dauern, sich daran anzupassen.

Licht-Adaption ist das Gegenteil. Vom dunklen Raum in strahlenden Sonnenschein zu gehen, ist schneller, kann aber auch schmerzhaft sein.

Die Implikation besteht darin, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, wenn sich die Umgebungsbedingungen eines Raumes geändert haben, die `AmbientLightSensor` Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit besondere Beachtung. Im Allgemeinen liegt der Schwerpunkt bei der Beseitigung ausreichender Kontraste zwischen Text und seinem Hintergrund oder der Bewertung der Möglichkeit, bei denen, die für fotosensitive Anfälle anfällig sind, Anfälle auszulösen, auf der Leuchtdichte. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit, da er auf die Barrierefreiheit zutrifft: das Konzept der Sättigung. Dies liegt daran, dass es bei Menschen, die für fotosensitive Anfälle anfällig sind, Anfälle auslösen kann, unabhängig von der Leuchtdichte der Farbe. Wie im [besonderen Fall von Rot](#der_spezielle_fall_von_rot) diskutiert, merkte die [Epilepsieforschung](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) an, dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Malkasten eines Künstlers sind, sind sie nicht so genau wie Farbdefinitionen von einem Comput Bildschirm.

Was die Farbe auf einem Monitor betrifft, sind gesättigte Farben von einer bestimmten Wellenlänge. Obwohl die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, kann Sättigung leicht gemessen werden. Der Schlüssel liegt darin, zu wissen, in welchem Farbraum man arbeitet und bereit zu sein, ihn erforderlichenfalls zu konvertieren.

Die am häufigsten betrachteten Farbräume im Zusammenhang mit Fotosensibilität sind die RGB-, HSL- und HSV-, auch bekannt als HSB-Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Werte_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weiße_ und _Schwarze_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum man arbeitet. Beispielsweise haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Beispielsweise hat ein gesättigtes Rot von Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Es sind zwei unterschiedliche "Farbtöne", aber beide gelten als gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz in eine Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu ziehen, kann Helligkeit durch das Hinzufügen von Weiß erhöht werden, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erzeugen. Rosa wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Am äußersten Ende der Leuchtdichte und den Extremen von Schwarz und Weiß gibt es einen Sättigungsverlust. In der NASA-Abhandlung [Wirkung der Leuchtdichte auf die Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass bei niedrigen Leuchtdichten ein Sättigungsverlust auftritt. Und auch, "...der Verlust der Sättigung bei hohen Leuchtdichten – die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein ist nicht ausreichend, wenn es um Barrierefreiheitsüberlegungen geht. Im Falle von Animationen sind bestimmte Farbkombinationen eher dazu geeignet, fotosensitive Anfälle bei jenen auszurichten, die anfällig dafür sind, als andere. Beispielsweise sind abwechselnde Blitze zwischen Rot und Blau problematischer als abwechselnde Blitze zwischen Grün und Blau. Man hat theorisiert, dass dies daran liegt, dass die "rotempfindlichen" Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe dem Zentrum) zu gruppieren, physisch an einem anderen Ort sind als die "blauempfindlichen" Zapfen unserer Augen, die an den Rändern positioniert sind. Die elektrischen Signale vom Auge zum Gehirn haben viel zu klären, während die Informationen in unseren Gehirnen verarbeitet werden.

Einige Farben sind eher dazu geeignet, [epileptische Anfälle auszulösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexität, die den Gehirndynamiken zugrunde liegt, kann von einigen Farbkombinationen stärker moduliert werden als von anderen. Zum Beispiel verursacht ein rot-blinkender Reiz größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein darauf, einen Farbton für die Unterscheidung von Details zu verwenden. Ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den größten Teil der Leuchtdichte (Licht) aus, daher wird es normalerweise einen erheblichen Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, sind leuchtschwach. Farben mit niedriger Leuchtdichte sollten die dunkleren der Kontrastfarben sein. Blau ist auch sehr niedriger in Auflösung. Es gibt weit weniger blaue Zapfen, und sie sind in unserem peripheren Sehbereich verstreut und nicht in unserem zentralen Sehbereich vorhanden. Das menschliche Auge sieht blau in einer niedrigeren Auflösung als grün und rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reine Blautöne sollten typischerweise die dunkleren der beiden Farben sein.
- Beim Verwenden von Blau als die hellere der beiden Farben, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es an einer anderen Stelle auf der Netzhaut fokussiert wird als Rot, sodass eine reine rote und eine reine blaue Farbe, die unmittelbar neben- und ineinander liegen, "flimmern" können, wenn sie nebeneinander liegen.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbtöne") werden von unserem Gehirn auf die gleiche Weise verarbeitet. Die menschliche Physiologie und Psychologie sind allgemein unterschiedlich von der Farbe Rot betroffen im Vergleich zu anderen Farben. Wir reagieren physiologisch sowie psychologisch auf Farben. Beispielsweise wurde gezeigt, dass [einige Farben epileptische Anfälle eher auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die Menschen, die fotosensitiv sind, helfen kann. Um die Einstellung in Graustufen zu imitieren, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur Zahlen und Begriffe ansieht, daher ziehen Sie in Betracht, das folgende Bild zu betrachten, um das Konzept der Sättigung einer Farbe zu veranschaulichen:

![Rotsättigung von Wikimedia Commons svg als png gespeichert Urheberrecht: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" geht von am wenigsten gesättigt auf der linken Seite zu am meisten gesättigt auf der rechten Seite.

_Mehr als eine "rote" Farbe darf als "gesättigtes" Rot angesehen werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` volle Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100 %.

Nicht alle gesättigten roten Farben sind gut im RGB-Spektrum oder in anderen Spektren, die häufig in der Webentwicklung verwendet werden, darstellbar. Laut Wikipedia-Seite "Schattierungen von Rot" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen von über 600nm enthält; der Artikel macht die besondere Anmerkung, dass "Karmin" nahe am extremen Spektrum ist. Dies platziert es weit außerhalb der Standard-Gamuts (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Personen mit traumatischer Hirnverletzung beeinträchtigt, erfordert Farbe im roten Spektralwellenlängenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, beim Testen des _Photosensitive epilepsy analysis tool_, stellte fest, dass die Anfallsrate viel höher war als erwartet. Sie fanden heraus, dass wir für gesättigtes rotes Blinken viel empfindlicher sind. (Sehen Sie das Video, [Das Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Durchgehend schneller als dreimal pro Sekunde heller/dunkler blinkend kann bei manchen Menschen Photic-Anfälle auslösen. Es hat sich auch gezeigt, dass bestimmte sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

Die Epilepsy Foundation of America forschte zu [photic induzierten und musterinduzierten Anfällen](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie führte zu mehreren grundlegenden Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Blitzsequenz wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.

2. Bei der Darstellung von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blinken oder im Kontrast umkehren, oder acht hell-dunkel Paare von Streifen, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Die Konsens-Empfehlungen sind in diesem kurzen Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) enthalten. Einige zusätzliche Erkenntnisse sind in diesem UK-Papier zu finden, das die [Richtlinien zur Vermeidung von Anfällen beschreibt.](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf).

## Psychophysikalische Aspekte der Farbe

Farbe als Farbtöne und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verbessern – oder beeinträchtigen.

### Beispiele für den Einfluss von Farbe über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [Eine kulturübergreifende Untersuchung der affektiven Bedeutungen von Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können unsere Emotionen auch positiv beeinflussen:** [Variationen der Emotionen durch Kontrolle des Kontrasts visueller Inhalte durch EEG-basiertes Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Belege für zeitliche Überschätzung blauer Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- \*\*Rot getönte Brillen können erhöhe
