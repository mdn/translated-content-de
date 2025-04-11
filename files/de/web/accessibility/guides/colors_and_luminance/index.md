---
title: "Web-Zugänglichkeit: Verständnis von Farben und Helligkeit"
short-title: Farben und Helligkeit
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

Während das Verständnis von Farbe, Helligkeit und Sättigung für das Design und die Lesbarkeit für alle sehenden Benutzer wichtig ist, sind sie für diejenigen mit eingeschränktem Sehvermögen und farbdefizitem Sehvermögen sowie für Menschen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen unerlässlich.

Zugänglichkeitsrichtlinien definieren einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die Benutzern mit farbunempfindlichem Sehvermögen, allgemein als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Übersicht

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach. Dennoch ist es ein komplexes Thema, weil die Farbwahrnehmung ebenso viel mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgestrahlt wird.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. Im Hinblick auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie allein schon Zugänglichkeitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebunghintergrund, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist noch ein weiterer Punkt und kann durch die allgemeine Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbgestaltung](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurück, wodurch es einer Webseite ermöglicht wird, sich einer Änderung der Lichtintensität bewusst zu sein und infolgedessen den Text entsprechend anzupassen. Darüber hinaus ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererlebnisse bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen, indem die Stufen automatisch angepasst werden, je nach Standort des Benutzers und der Art des Bildschirms, den sie verwenden.

### Helligkeit und Wahrnehmung

Farbe, Kontrast und Helligkeit sind die zentralsten und kritischsten Konzepte, um zugängliche Webinhalte mit Farben zu erstellen. Helligkeit ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, die Zugänglichkeit sowohl für Farbenblinde als auch für Menschen, die Farben wahrnehmen können, ermöglicht. Der Helligkeitskontrast ermöglicht es Farbblinden, Dunkel von Hell zu unterscheiden.

Die Helligkeit muss festgelegt werden, bevor der Kontrast es sein kann. Beim Sprechen von Farbkontrast berücksichtigen W3C-Formeln die Helligkeit, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da verschiedene Begriffe oft dasselbe beschreiben. "Helligkeit" und "Sättigung" sind besonders wichtig, richtig zu verstehen. Zum Beispiel, "Sättigung" ist in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Leuchtkraft" und manchmal als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie die Benennung gängiger Farben, kann zur Debatte stehen. Zum Beispiel kann die Farbe "Crimson Red" in Hex-Werten von einigen als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie im W3C, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume auf unterschiedliche Messsysteme abbilden.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz (CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_ und nur den schmalen Bereich reflektieren, mit dem jede assoziiert ist. RGB ist ein additives Farbmodell, das unterschiedliche Anteile roter, grüner und blauer Lichter hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Obwohl HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aber aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe wird in diesem Dokument davon ausgegangen, dass die meisten Berechnungen im RGB-Farbraum vermutet werden und, ganz besonders, im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB, und CMYK, unter anderem.

Für digitale Anliegen liegt ein Großteil der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Opazität einer Farbe anzugeben. Andere Methoden zur Messung von Farbe umfassen Messungen in anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) beinhalten Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zur Verwendung von OpenGL auf RGBA anstelle von sRGB verweisen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es sogar innerhalb eines {{Glossary("color_space", "Farbraums")}} Variationen gibt, wie dem {{Glossary("RGB", "RGB")}}-Farbraum. Zum Beispiel umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele für CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jede ein vollständig deckendes Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0 % ausgeschaltet (schwarz) und 100 % der volle Wert für diese Farbe sind. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Danach werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit der Basis 16, wobei der ganzzahlige Wert 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen, mit den Ziffern 0-9 und a-f für 10-15. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol '#' geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte identische Ziffernpaare sind, kann der Wert durch Einzelziffern dargestellt werden, die der Browser dupliziert. So ist `f00` dasselbe wie `ff0000`. Wenn eine vierte Zahlenreihe vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger und daher weniger transparent ist. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für vollständig undurchsichtig.

Das Beispiel zeigt auch die Legacy-Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farbfunktionen ist durch Kommas getrennt, mit einer separaten Funktion, wenn der Alphakanal eingeschlossen ist. Neue Farb-Funktionen haben nur eine Syntax mit durch Leerzeichen getrennten (statt kommagetrennten) Werten, wobei der Alphakanal, falls vorhanden, durch einen Schrägstrich vorausgegangen wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das Stichwort `none`; die kommagetrennte Legacy-Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, and Lightness_ (Farbton, Sättigung und Helligkeit) steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die Farbe, die aus den Einstellungen hervorgeht, befindet sich immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die einen Knopf oder ein kreisförmiges Steuerelement zur Anpassung des Farbtons verwendet. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Luminanz_ beinhalten, was ein signifikanter Aspekt ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, and Blackness_ (Farbton, Weiße und Schwarze) steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle)-Wert sein. Wenn ohne Einheit, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen magenta unter Verwendung der [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionen.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn wir uns ansehen, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass dieselbe Farbe in einer Kurzform als dreistellige Hexadezimalzahl ausgedrückt werden kann, die in einen rgb-Wert als sechsstellig hexadezimale Zahl konvertiert wird, die auch in denselben rgb-Wert oder als einen in Prozent ausgedrückten rgba-Wert umgewandelt werden kann.

RGB ist hardwareorientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und das Schaltklicken auf Farben in den Entwicklertools des Browsers bietet Umwandlungsfunktionalität.

Zusätzlich zu Entwicklertools können viele Tools RGB für Sie in HSL umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass die Farbpicker der Entwicklertools und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bereitstellen.

![Farbpicker mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbnationalisation und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Das heißt, sRGB ist immer noch der Standard und bevorzugte Farbraum für die Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Wenn es jedoch um Barrierefreiheit geht, sind Standards und Richtlinien derzeit überwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf Farbübersetzungsverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Ansicht von Webinhalten gehen von einer sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige von Inhalten verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [minimalen Kontrastsätze](https://webaim.org/articles/contrast/#sc143) an.

### Abfrage von Farbwerten

Die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode gibt Werte unter Verwendung der RGB Dezimalreferenzskala oder über `color(srgb...)` zurück. Beispielsweise wird beim Aufruf von `Window.getComputedStyle()` einer `<div>`-Element, dessen `background-color: #ff0000` darauf gesetzt ist, die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurückgegeben — die RGB Dezimalreferenz. Bei Verwendung von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst es Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot-/Grün-Farbblindheit

Protanopie ist eine Farbwahrnehmungsstörung, bei der das Auge keine roten Zapfen hat; sRGB kann jedoch noch über grüne Zapfen wahrgenommen werden, obwohl es dunkler als normales Sehen ist. Sowohl Protan (rot-defizient) als auch Deutan (grün-defizient) Defizienzen verursachen Schwierigkeiten beim Unterscheiden _zwischen_ Rot und Grün.

Entwicklertools können helfen, Farbunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht es der Barrierefreiheits-Inspektor von Firefox, Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich zu simulieren.

![Ausschnitt der Firefox-Entwicklertools, der das Simulieren-Popup zeigt](simulate_color_differences.jpg)

## Helligkeit und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein entscheidender Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts Helligkeit einbeziehen.

Darüber hinaus wird die "Form" des Textes selbst von Bedeutung sein. Dünne Buchstaben werden schwerer zu lesen sein als dicke; alle Schriftarten benötigen Raum zum "Atmen", um von Menschen wahrgenommen zu werden.

### Kontrast und Schriftgröße

[WCAG Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (ungefähr `18.7px`) für `fettem` Text. Darin heißt es:

\_Text, der größer ist und breitere Zeichenstriche hat, ist leichter bei geringem Kontrast zu lesen. Daher ist die Kontra

stanforderung für größeren Text niedriger. Dies ermöglicht es den Autoren, eine breitere Palette von Farbwahlmöglichkeiten für großen Text zu verwenden, was für das Design von Seiten, insbesondere für Titel, hilfreich ist.\_

Während größerer Text nicht so großen Farbkontrast zu seinem Hintergrund erfordert, wie kleinerer Text, ist eine Schriftgrößenvergrößerung kein Allheilmittel.

"Normaler" Druck wird in der Regel als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift lesbar sein mag — ein Benutzer kann Buchstaben mit \~70% Genauigkeit erkennen — ist das nicht leserfreundlich. Eine Schriftgröße von 16px ist für Menschen mit normaler Sicht allgemein lesbar. Jemand mit 20/40-Sicht benötigt doppelt so viel, also etwa 31px-Schrift. Deswegen verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben müssen, jeglichen Text zu vergrößern.

Während ein zu kleiner Text schwer zu lesen ist, gilt das auch für zu großen Text. Für Benutzer mit 20/20-Sicht, mit einer Schriftgröße größer als ungefähr 96px, nimmt die Lesegeschwindigkeit ab. Auch, wenn ein großer Größenunterschied zwischen der kleinsten und der größten Schriftgröße auf einer Seite besteht, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text beim Vergrößern vergrößern.

Im Allgemeinen gilt für Barrierefreiheitszwecke: Je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zur Farbkontrast in Animationen finden Sie unter [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Helligkeit

Es ist der Unterschied in der Helligkeit einer Farbe, der es uns ermöglicht, den Kontrast wahrzunehmen. Relative Helligkeit wird in WCAG als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, aber kann verwirrend sein, wenn sie im Hinblick auf den RGB-Farbraum verwendet wird, in dem ein Wert zwischen 0 und 255 liegt. Weiß hat 100% relative Helligkeit, Schwarz hat 0% relative Helligkeit (in den meisten, aber nicht allen Literaturen). Interpretiert man nach dem oben genannten W3C-Standard, würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein mag.

Woher kommen also diese Zahlen von 0 bis 255? Historisch speicherten Grafikmotoren die Farbkanäle als einzelnes Byte, was eine Bandbreite von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Helligkeiten der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Helligkeit als Blau. Dies wurde im Design getan, um eine _weiße Ausrichtung des Monitors_ zu erreichen, gemäß dem NASA-Dokument "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Helligkeitskomponente, und sobald die Helligkeit festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Aus Sicht der menschlichen Wahrnehmung zählt ein Unterschied in der Helligkeit mehr als ein Farbunterschied. Das ist wichtig, da der Helligkeitskontrast die Entwicklung von Inhalten ermöglicht, die auch Farbblinde sehen können. Mit diesem Verständnis kann die Helligkeit so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Helligkeit schwer zu sehen sind, lesbarer gemacht werden können, indem diese Farben gegen eine andere mit kontrastierender Helligkeit gestellt werden. Eine interessante NASA-Studie zur Farbe Blau stellte zum Beispiel fest, dass diese Farbe mit niedriger Helligkeit lesbar gemacht werden kann, wenn _darauf geachtet wurde, einen ausreichenden Helligkeitskontrast zu erreichen_ (aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen zur relativen Helligkeit sind keine beiläufigen. Glücklicherweise gibt es [Online-Checker für Helligkeit und Kontrast](https://www.siegemedia.com/contrast-ratio), und sogar Anleitungen, wie man [relative Helligkeit berechnet](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Wahrnehmung von Farbe

Farbe ist unsere Wahrnehmung des schmalen Bands des sichtbaren Lichts, von Rot über Gelb und Grün bis hin zu Blau. Unsere Empfindlichkeit für diese verschiedenen Farbtöne ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere zu erkennen. Etwa 65% der Zapfen sind _am meisten_ empfindlich für ein Gelb/Grün, reagieren jedoch auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen als die anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Helligkeit beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Kegel-Mosaik des normalen Sehens und rechts das von jemandem mit Protanopie, wo die roten Kegel fehlen.](conemosaics.jpg)

Links ist das zentrale Kegel-Mosaik des normalen Sehens, und rechts das von jemandem mit Protanopie, einer Form von Farbschwäche, wo die roten Kegel fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen vereinen sich, um Helligkeit zu erzeugen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Separat erlauben die roten, grünen und blauen Zapfen dem normalen Sehen Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn die Helligkeit separat von der Farbe (Farbton und Farbenfrohsinn) verarbeitet.

Helligkeit bietet feine visuelle Details, einschließlich der Unterscheidung von Kanten und Texten. Farbton und Farbenfrohsinn tragen ein Drittel der Details von Helligkeit. Bilddatene, wie [h.264 Video Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs), nutzen diesen Fakt. Beispielsweise gehen [h.264 Video Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) beim Color-Sampling auf ein Viertel der Auflösung der Helligkeit.

Für die Barrierefreiheit bedeutet dies, dass der Helligkeitskontrast für Texte von entscheidender Bedeutung ist. Farbe, im Sinne von Farbton und Farbenfrohsinn, ist wichtig, um _Elemente zu unterscheiden_ wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist Farbe oder Helligkeit, die eine Farbe umgibt. Farben erscheinen unterschiedlich, abhängig davon, was sie umgibt. In dem folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate derselbe sRGB-Farbton. Farbenwahrnehmung aus dem Kontext heraus lässt sie jedoch anders erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung an basierend darauf, was es als im Schatten oder nicht betrachtet.

![Ein Bild eines Schachbretts, bei dem identische Farben anders aussehen, ob sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben auf Ihrem Monitor die gleichen Farben, erscheinen jedoch anders aufgrund des Kontextes. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbempfinden wird durch den Kontext benachbarter Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Das macht das Vorhersagen von Kontrasten Herausfordernd. Es ist nicht einfach ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst ist Farbe ebenso viel über menschliche Physiologie und Wahrnehmung im Gehirn wie über das Messen von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht auf die gleiche Art und Weise an, wenn wir von lichtintensiven Bereichen in dunklere gehen und umgekehrt. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzers, Text gegen einen Hintergrund zu lesen. Es gibt mindestens zwei Arten von Anpassungen: lokale Anpassung und Anpassung an die Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, wird Ihre Wahrnehmung dieses exakt blauen Texts mit grauer Hervorhebung anders sein, wenn er in einem schwarzen {{HTMLElement("div")}} oder einem weißen ist. Dies nennt sich _lokale_ Anpassung. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, obwohl die Umgebungsbeleuchtung des Raums sich nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an niedrige Helligkeit ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie Dunkelanpassung. Es kann mehrere Minuten dauern, sich daran zu gewöhnen.

Die Lichtanpassung ist umgekehrt. Der Übergang aus einem dunklen Raum in helles Sonnenlicht ist schneller, kann jedoch auch schmerzhaft sein.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern wollen und bei denen die Umgebungsbedingungen eines Raums gewechselt haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query-Standorte nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der Fokus immer auf Helligkeit, wenn versucht wird, genügend Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit von Anfällen bei Menschen, die auf lichtempfindliche Anfälle reagieren, zu beurteilen. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von Helligkeit, verdient besondere Aufmerksamkeit, wenn es um Barrierefreiheit geht: das Konzept der Sättigung. Dies liegt daran, dass es Anfälle bei Menschen mit Lichtempfindlichkeit verursachen kann, unabhängig von der Helligkeit der Farbe. Wie im [besonderen Fall von Rot](#der_spezielle_fall_von_rot) diskutiert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass _unabhängig von der Helligkeit ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko gilt_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Farbkasten eines Künstlers sind, sind sie gegenüber Farbsdefinitionen von einem Computermonitor nicht so genau.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Messung von Sättigung einfach. Der Schlüssel liegt darin zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die häufig in Betracht gezogen werden, wenn über Lichtempfindlichkeit gesprochen wird, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB-Farbräume. Der HSV-Farbraum, der für _hue_, _saturation_, und _value_ steht, und der Synonym HSB, der für _hue_, _saturation_, und _brightness_ steht, wird in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _hue_, _whiteness_, und _blackness_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB Farbraum wird üblicherweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", gelten jedoch beide als gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich auf wie viel Weiß oder Schwarz in eine Farbe gemischt wird. Man kann die Sättigung durch Zugabe von Weiß, Schwarz oder Grau zur Farbe verringern; um das Beispiel weiterzuführen, kann Helligkeit durch Zugabe von Weiß erhöht und Sättigung verringert werden. Ein typisches Beispiel ist die Zugabe von Weiß zu Rot, um die Farbe Pink zu erhalten. Pink gilt als entsättigtes Rot.

### Sättigung und Helligkeit

Es gibt einen Verlust an Sättigung an den Extremen der Helligkeiten und der Extreme von Schwarz und Weiß. In NASA's [Einfluss der Helligkeit auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass ein Verlust an Sättigung bei niedrigen Helligkeiten besteht und ebenso "… der Verlust an Sättigung bei hohen Helligkeiten–die Farben konvergieren auf Weiß."

## Farbkombinationen

Nur Kontrast alleine ist nicht genug, wenn es um Barrierefreiheit geht. Im Fall von Animationen sind bestimmte Farbkombinationen eher geneigt, photoreaktive Anfälle bei denen zu verursachen, die anfällig dafür sind, als andere. Zum Beispiel ist das abwechselnde Blitzen zwischen Rot und Blau problematischer als das abwechselnde Blitzen zwischen Grün und Blau. Es wird angenommen, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen sich um die Fovea (nahe der Mitte) zu gruppieren, physisch an einem anderen Ort als die "blauen" empfindlichen Zapfen unserer Augen liegen, die sich vom Zentrum entfernt befinden und in Richtung der Ränder liegen. Die elektrischen Signale von den Augen zum Gehirn haben viel zu tun, um aufgelöst zu werden, während die Informationen in unseren Gehirnen verarbeitet werden.

Einige Farben neigen eher dazu, [epileptische Anfälle zu verursachen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten der Gehirndynamik können durch einige Farbkombinationen mehr als durch andere moduliert werden. Zum Beispiel verursacht ein rot-blinkender Reiz größere kortikale Erregung als ein rot-grün oder blau-grün Reiz.

Bestimmte Farbkombinationen können auf einem Computerbildschirm oder mobilen Gerät sehr problematisch sein und einige Farbkombinationen können bei einigen Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Berufen Sie sich niemals nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Helligkeitskontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Helligkeit (Licht) aus, so dass es normalerweise ein wesentlicher Teil der helleren Farben sein wird.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Helligkeit. Farben mit geringer Helligkeit sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt weit weniger blaue Zapfen und sie sind verstreut in unserem peripheren Sehen vorhanden und nicht in unserem zentralen Sehen. Das menschliche Auge sieht Blau in einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte in der Regel die dunkelste von zwei Farben sein.
- Wenn bei zwei Farben Blau die hellere ist, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es sich an einer anderen Stelle auf der Netzhaut fokussiert als Rot, weshalb eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander und berührend sind, "flimmern" können, wenn sie direkt nebeneinander stehen.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbtöne") werden von unserem Gehirn gleich verarbeitet. Die menschliche Physiologie und Psychologie sind im Allgemeinen anders durch die Farbe Rot betroffen als durch andere Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben wahrscheinlichere epileptische Anfälle hervorrufen, als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" das kann Menschen helfen, die fotosensitiv sind. Um die Graustufeneinstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}}-Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, allein durch Zahlen und Terminologie, also ziehen Sie dieses Bild in Betracht, um das Konzept der Sättigung einer Farbe zu veranschaulichen:

![Rot Sättigung aus Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" schreitet von der am wenigsten gesättigten auf der linken Seite zur am meisten gesättigten auf der rechten Seite fort.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot angesehen werden._ Zum Beispiel, die Farbe `#990000` bei `hsl(0 100% 30%)` ist vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Auf ähnliche Weise hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder in anderen Spektren, die häufig im Web verwendet werden, gut dargestellt werden. Der Wikipedia-Artikel "Shades of Red" macht deutlich, dass die Farbe "Karmin" ein gesättigtes Rot ist, welches vorrangig rotes Licht mit Wellenlängen über 600nm enthält; der Artikel hebt speziell hervor, dass "Karmin" nahe am extremen Spektrum liegt. Dies rückt es weit außerhalb Standardfarbräume (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes Rotblitzen

Zusätzlich beeinflusst ein rotes Umfeld die kognitive Funktion von Menschen mit traumatischen Gehirnverletzungen, dies erfordert besondere Aufmerksamkeit und Tests bei Farben im Wellenlängenbereich von Rot.

Gregg Vanderheiden stellte beim Testen des _Photosensitive Seizure Analysis Tool_ fest, dass die Anfallsraten weit höher waren als erwartet. Sie fanden heraus, dass wir weitaus empfindlicher auf gesättigtes Rotblitzen reagieren. (Sehen Sie sich das Video auf [The Photosensitive Seizure Analysis Tool.](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Ständiges Blitzen heller/dunkler mit Raten über drei Blitzen pro Sekunde hat bei manchen Menschen photische Anfälle ausgelöst. Außerdem wurde festgestellt, dass bestimmte, sehr regelmäßige, hochkontrastreiche Muster, wie parallele weiß-schwarze Streifen, auch Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren einige grundlegende Richtlinien:

1. Einzel-, Doppel- oder Dreifachblitze innerhalb einer Sekunde sind akzeptabel, aber eine Sequenz von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Wenn helle und dunkle Streifen angezeigt werden, sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare aufweisen, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder im Kontrast umkehrt oder acht hell-dunkle Streifenpaare, wenn das Muster sich nicht verändert oder kontinuierlich und weich in eine Richtung treibt.

Weitere Empfehlungen finden Sie im Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte von Farbe

Farbe als Farbtöne und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verstärken – oder abschwächen.

### Beispiele für die Wirkung von Farbe jenseits des Sehens

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch eine positive Wirkung auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Wahrnehmung der Zeit beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen wesentlichen Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Gläser können für mehr Glück oder Freude sorgen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die unter traumatischen Hirnverletzungen leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Lernpfad Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Zugänglichkeit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so sensibilisiert auf Rot, dass Augenärzte einen Test damit eingerichtet haben, der die Integrität des Sehnervs beurteilt.
- [Photische und musterausgelöste Anfälle: Expert Consensus der Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
