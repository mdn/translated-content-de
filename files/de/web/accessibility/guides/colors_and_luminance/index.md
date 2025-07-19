---
title: "Web-Accessibility: Verstehen von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Auch wenn das Verständnis von Farbe, Leuchtdichte und Sättigung für Design und Lesbarkeit aller sehenden Nutzer wichtig ist, sind sie unerlässlich für Menschen mit eingeschränktem Sehvermögen, Farbschwäche und spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen und Richtlinien, die darauf abzielen, Menschen mit farbunempfindlichem Sehvermögen, häufig als "Farbenblindheit" bezeichnet, zu helfen. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit Gleichgewichtsstörungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Einsatz ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach zu sein, jedoch ist es ein komplexes Thema, da Farbempfinden sowohl durch die Physiologie des Auges als auch durch die Verarbeitung im menschlichen Gehirn beeinflusst wird, ebenso wie durch das Licht, das von einem Computerbildschirm emittiert wird.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung einer Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriften sind so dünn oder ausgefallen, dass sie allein schon Barrierefreiheitsprobleme darstellen), die Hintergrundfarbe, die Größe des Hintergrundraums um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungshintergrund, der Gesundheitszustand seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter aufgenommen wird. Wie der Betrachter Farbe wahrnimmt, nachdem sie auf seine Augen trifft, ist eine weitere Angelegenheit und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, auf Basis von Benutzerpräferenzen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen, Styles bereitzustellen.

Wenn unterstützt, liefert die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle den aktuellen Lichtpegel oder die Beleuchtung des Umgebungslichts rund um das Hostgerät, sodass eine Webseite auf Änderungen der Lichtintensität reagieren und den Text entsprechend anpassen kann. Darüber hinaus ermöglichen die obigen Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bestimmte bevorzugte Kontrastlevel anzeigen, automatisch Level einstellen, je nachdem, wo sich der Benutzer befindet und welchen Bildschirm er verwendet.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und wichtigsten Begriffe für die Gestaltung barrierefreier Webinhalte mit Farbe. Die Leuchtdichte ist von besonderer Bedeutung, da das Verständnis, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit für Farbenblinde sowie Farbensehende ermöglicht. Der Leuchtdichtekontrast ermöglicht es den Farbenblinden, Dunkel von Hell zu unterscheiden.

Die Leuchtdichte muss vor dem Kontrast festgelegt werden. Beim Sprechen von Farbkontrast werden in W3C-Formeln Leuchtdichte einbezogen, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig richtig zu verwenden. Beispielsweise wird "Sättigung" in einigen Kreisen als "Chroma" bezeichnet. Anderswo gelten "Chroma" und "Sättigung" als zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und andere Male als "Helligkeit" bezeichnet. Sogar etwas scheinbar Einfaches wie das Benennen von gewöhnlichen Farben kann diskutiert werden. Zum Beispiel kann die Farbe "Karminrot" von einigen in Hex-Werten als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument werden wir die Terminologie so verwenden, wie sie auf der CSS [`<named-color>`](/de/docs/Web/CSS/named-color) Seite definiert ist.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume unterschiedlichen Messsystemen zugeordnet sind.

Beim Farbdrucken hat Ihr Drucker wahrscheinlich Cyan, Magenta, Gelb und Schwarz (CMYK) Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Wellenlängen des Lichts _entfernen_ und nur den engen Bereich reflektieren, mit dem jede assoziiert ist. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot, Grün und Blau Lichtern hinzufügt.

Gegenwärtig dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser automatisch Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Da jedoch der RGB-Farbraum bei der Messung von Farbausgaben derzeit dominiert, wird in diesem Dokument davon ausgegangen, dass die meisten Berechnungen im RGB-Farbraum erfolgen und sehr spezifisch im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB dezimal, RGB prozentual, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Mit Blick auf digitale Belange lag die Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird um "Alpha" erweitert — RGBA — um die Transparenz einer Farbe anzugeben. Andere Methoden zur Farbmessung beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Farbmessungen im RGB-Farbraum überwiegen jedoch, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) umfassen Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zu OpenGL die Verwendung von RGBA anstelle von sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}}-Farbraum, Variationen gibt. Zum Beispiel gibt es Variationen des RGB-Farbraums wie **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele für die CSS-Notation zur Definition einer Farbe. Hier ist die Beispiel-Farbe für jede ein vollständig deckendes Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0 % aus (schwarz) und 100 % der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Danach werden Hex-Farbwerte gezeigt. Hexadezimal ist ein Zahlensystem mit Basis 16, wobei der ganzzahlige Bereich von 0 bis 255 durch zwei Ziffern repräsentiert wird, die von 0 bis 15 reichen und die Ziffern 0-9 und a-f für 10-15 verwenden. So entspricht `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol steht vor der Farbe, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. So ist `f00` dasselbe wie `ff0000`. Wenn ein vierter Satz Zahlen vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Deckungswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender und damit weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für vollständig undurchsichtig.

Das Beispiel zeigt auch die alte Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die alte Syntax für Farbwerte ist durch Kommas getrennt, mit einer separaten Funktion für den Fall, dass der Alphakanal eingeschlossen ist. Neue Farbwerte haben nur eine Syntax mit Leerzeichen getrennten (statt Komma getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich eingeleitet wird. Die moderne Syntax erlaubt es, Zahlen und Prozentwerte zu mischen und unterstützt das Schlüsselwort `none`; die Komma-getrennte alte Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für Farbton, Sättigung und Helligkeit steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die aus den Einstellungen erzeugte Farbe liegt immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_, nicht _Leuchtdichte_ einbeziehen, was eine wichtige Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für Farbton, Weiß- und Schwarzanteil steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn einheitenlos, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbwerte und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farbwerten.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn man sich anschaut, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer Kurzform, als dreistellige Hex-Zahl, konvertiert werden kann in einen RGB-Wert als sechzehnstellige Hex-Zahl, die ebenfalls in denselben RGB-Wert umrechnet, oder als RGBA-Wert, ausgedrückt in Prozentzahlen.

RGB ist hardwareorientiert und entspricht der Nutzung von Kathodenstrahlröhren. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und ein Shift-Klick auf Farben in den Entwickler-Tools des Browsers ermöglicht Konvertierungsfunktionen.

Zusätzlich zu Entwickler-Tools gibt es viele Werkzeuge, die RGB in HSL für Sie konvertieren können und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie konvertiert, ist Tom Jewetts "[Mini-Farbwähler](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung von Kontrasten im Browser. Beachten Sie, dass die Farbwähler in den Entwickler-Tools und dieses Werkzeug alle WCAG [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)-Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) die Hinzufügung zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionaler Farbdarstellungen sowie der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe angeben können. Dennoch ist sRGB aufgrund seiner Allgegenwärtigkeit immer noch der Standard- und bevorzugte Farbraum für Barrierefreiheit.

In Bezug auf Barrierefreiheit sind die Standards und Richtlinien derzeit vorwiegend im sRGB-Farbraum geschrieben, insbesondere was die Anwendung auf Farbkontrastverhältnisse betrifft.

> [!NOTE]
> Fast alle Systeme, die heute zur Ansicht von Webinhalten verwendet werden, gehen von sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum verwendet wird, um die Inhalte zu verarbeiten und anzuzeigen, sollten Autoren die Verwendung des sRGB-Farbraums evaluieren. Wenn andere Farbräume verwendet werden, wenden Sie die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Abrufen von Farbwerten

Die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode gibt Werte auf der RGB-Dezimal-Referenzskala oder über `color(srgb...)` zurück. Beispielsweise gibt der Aufruf von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: #ff0000` als Hintergrundfarbe den berechneten Hintergrundfarbe als `rgb(255 0 0)` zurück — das RGB-Dezimal-Referenzsystem. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (z. B. `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farben wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine Rot-Zapfen hat; sRGB kann immer noch über Grün-Zapfen wahrgenommen werden, jedoch dunkler als normal. Sowohl beim Protan (Rotmangel) als auch beim Deutan (Grünmangel) gibt es Schwierigkeiten, zwischen Rot und Grün zu unterscheiden.

Entwickler-Tools können helfen, Farbsehunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Barrierefreiheit-Inspektor von Firefox das Simulieren von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitspanel.

![Ausschnitt der Firefox-Entwicklertools, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein wesentlicher Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu erstellen. Wie zuvor erwähnt, muss jede Kontrastberechnung die Leuchtdichte umfassen.

Zudem spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dickere; alle Schriftarten brauchen Raum zum "atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

Die [WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (etwa `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (etwa `18.7px`) für `fettdruck`. Aussage:

_Text, der größer ist und breitere Zeichenstriche hat, ist leichter bei geringem Kontrast zu lesen. Daher ist die Kontrastanforderung bei größerem Text niedriger. Dies ermöglicht es den Autoren, eine breitere Palette von Farben für großen Text zu verwenden, was bei der Gestaltung von Seiten, insbesondere Titeln, hilfreich ist._

Während bei größerem Text der Kontrast mit dem Hintergrund nicht so stark sein muss wie bei kleinem Text, ist das Erhöhen der Schriftgröße kein Allheilmittel.

"Normale" Druckschrift wird gewöhnlich als 11,5pt bis 12pt betrachtet, was einem Bildschirm in 16px entspricht. Während kleinere Schrift möglicherweise leserlich ist — ein Nutzer kann Buchstaben mit etwa 70% Genauigkeit erkennen — ist das nicht leserfreundlich. Eine 16px-Schriftgröße ist im Allgemeinen für Menschen mit normalem Sehvermögen leserlich. Jemand mit einer 20/40-Sehfähigkeit braucht das Doppelte, etwa eine 31px-Schrift. Deshalb erfordern die WCAG-Richtlinien, dass Nutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu klein angezeigter Text schwer zu lesen ist, gilt das auch für einen zu großen Text. Für Nutzer mit einer 20/20-Sehfähigkeit nimmt die Lesegeschwindigkeit mit einer Textgröße von mehr als etwa 96px ab. Außerdem wird der größere Text weniger leserlich, wenn es einen großen Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite gibt, da die meisten Browser alle Texte vergrößern, wenn der Nutzer den kleineren Text auf der Seite vergrößert.

Im Allgemeinen gilt für Barrierefreiheit: je mehr Kontrast, desto besser. Dies ändert sich bei Animationen. "Sicherere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Drei Blitze oder darunter Schwellenwert, Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Außerdem müssen auch Symbole genügend Kontrast für die Wahrnehmung haben. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu sehen. Relative Leuchtdichte wird in WCAG definiert als "die relative Helligkeit irgendeines Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß".

Diese Aussage ist natürlich genau, mag aber verwirren, wenn sie in Bezug auf den RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Literaturen). Gemäß dem oben genannten W3C-Standard würde das bedeuten, dass Weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normiert auf 0, einen RGB-Wert `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` beziehungsweise `rgb(0% 0% 0%)`, geschrieben werden können, was eventuell intuitiver ist.

Woher kommen diese 0 bis 255 Zahlen? Historisch wurden von Grafik-Engines die Farbkanäle als ein einzelnes Byte gespeichert, das bedeutet eine Bandbreite an Ganzzahlen zwischen 0 und 255.

Die Leuchtdichte der Primärfarben ist unterschiedlich. Gelb hat beispielsweise eine größere Leuchtdichte als Blau. Dies wurde aus Designgründen getan, _um das Weiß-Aligment des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist bedeutungslos ohne seine Leuchtdichtekomponente, und sobald die Leuchtdichte feststeht, kann das Farbkontrastverhältnis festgestellt werden.

In Bezug auf die menschliche Wahrnehmung zählt ein Unterschied in der Leuchtdichte mehr als ein Farbunterschied. Dies ist wichtig, da Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, damit auch Farbenblinde sie sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, lesbarer gemacht werden können, indem sie gegen eine mit im Kontrast dazu stehender Leuchtdichte gestellt werden. Eine interessante Studie von NASA zur Farbe Blau zum Beispiel stellte fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _sorgfältig auf einen ausreichenden Leuchtdichtekontrast geachtet wird_. (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine einfachen Berechnungen. Glücklicherweise gibt es [online Helligkeits- und Kontrast-Checker](https://www.siegemedia.com/contrast-ratio) und sogar Anweisungen, um [relative Leuchtdichte zu berechnen](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farben wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bands des sichtbaren Lichts, von Rot über Gelb und Grün zu Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind empfindlich darauf eingestellt, manche Farben mehr zu erkennen als andere. Ungefähr 65% der Zapfen sind _am meisten_ empfindlich gegenüber Gelb/Grün, reagieren aber auch auf Rot (wir nennen sie „rote“ Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weitaus weniger blauempfindliche Zapfen gibt als die beiden anderen Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Zapfenmosaik des Standardsehvermögens, und rechts ist eins von jemandem mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik des Standardsehvermögens, und rechts ist das von jemandem mit Protanopie, eine Form des Farbsehdefizits, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die Rot- und Grünzapfen verbinden sich, um die Leuchtdichte zu erzeugen, die wir als Helligkeit/Dunkelheit unabhängig von Farbton betrachten können. Separat ermöglichen die roten, grünen und blauen Zapfen dem Standardsehvermögen, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Farbton und Farbigkeit) verarbeitet.

Die Leuchtdichte bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtdichte. Die Bilddatenkomprimierung nutzt diese Tatsache. Als Beispiel nimmt [h.264 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte auf.

Für Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe im Sinne von Farbton und Farbigkeit ist wichtig, um _Elemente zu unterscheiden_, wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder die Leuchtdichte, welche eine einzelne Farbe umgibt. Farben erscheinen anders, je nachdem, was sie umgibt. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB Farbe. Kontextsensitive Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung an basierend darauf, was es denkt, was im Schatten liegt oder nicht.

![Ein Bild eines Schachbretts, auf dem identische Farben anders aussehen, wenn sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen unterschiedlich aufgrund des Kontexts. (Image D.Lyon)

Unser Kontrast-, Helligkeits- und Farbwahrnehmung wird durch den Kontext der umgebenden Farben und anderen Merkmale eines Designs oder Bildes beeinflusst. Das macht die Vorhersage von Kontrast herausfordernd. Es ist nicht einfach ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe sowohl über die menschliche Physiologie und Wahrnehmung im Gehirn als auch über die Messung von Licht auf einem Computerbildschirm bestimmt wird. Es ist auch wichtig zu verstehen, dass die Umgebung des Lichts die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht auf gleiche Weise an, wenn sie von hellen auf dunkle Bereiche wechseln und umgekehrt. Dies liegt an der physiologischen Bauweise unserer Augen. Das beeinträchtigt die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an die Umgebungsbedingungen.

Die lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen blauen Text mit grauen Highlights anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text zu erkennen, wird beeinflusst, auch wenn die Umgebungsbeleuchtung im Raum nicht verändert wird.

Die Implikation ist, dass Web-Entwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an niedrige Leuchtdichten ist langsam. Wenn Sie von draußen hereinkommen, wo die Sonne hell ist, und in einen dunklen Raum gehen, erfahren Sie Dunkelanpassung. Es kann ein paar Minuten dauern, um sich daran zu gewöhnen.

Die Lichtanpassung ist das Gegenteil. Aus einem dunklen Raum ins helle Sonnenlicht zu gehen, ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Web-Entwickler, die die Lesbarkeit von Text verbessern möchten, bei dem sich die Umgebungsbedingungen eines Raumes geändert haben, von der `AmbientLightSensor`-Schnittstelle und der [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)-Media Query profitieren können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der Fokus, wenn es darum geht, genügend Kontrast zwischen Text und Hintergrund sicherzustellen oder die Möglichkeit von Krampfanfällen bei Personen, die für lichtempfindliche Anfälle anfällig sind, zu bewerten, meistens auf Leuchtdichte. Ein Aspekt von Farbe ("Farbtöne"), der unabhängig von der Leuchtdichte besondere Aufmerksamkeit verdient, da er Wirkung auf Barrierefreiheit hat: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei Personen mit Empfindlichkeit für lichtempfindliche Anfälle Krampfanfälle zu verursachen, unabhängig von der Leuchtdichte. Wie im speziellen Fall von Rot diskutiert, notierte [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Leuchtdichte, ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Auch wenn dies gute Definitionen für "Pigmente" in einem Maltset eines Künstlers sind, sind sie nicht so genau wie die Farbbeschreibungen von einem Computerbildschirm.

Bei Farbe auf einem Monitor sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, ist Sättigung leicht messbar. Der Schlüssel ist, zu wissen, in welchem Farbraum Sie arbeiten, und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die am häufigsten betrachteten Farbräume bei der Diskussion über Fotosensitivität sind die RGB-, HSL- und HSV-, auch als HSB bekannten, Farbräume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weiß-
und \_Schwarzanteil_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Beispielsweise haben gesättigte Farben im HSL eine Helligkeit von `0.5`, während im HWB ein Wert von `1` gilt. Sättigung im RGB-Farbraum ist in der Regel durch einen RGB-Wert von `255` oder `100%` für die fragliche Farbe angegeben. Zum Beispiel hat ein gesättigtes Rot mit dem Hexwert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hexwert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", gelten jedoch beide als gesättigte Farben.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann die Helligkeit erhöht werden, indem man Weiß hinzufügt und die Sättigung verringert. Ein typisches Beispiel ist es, Weiß zu Rot hinzuzufügen, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt einen Sättigungsverlust bei den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In "NASA's [Einfluss der Leuchtdichte auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)" wird auf einen Sättigungsverlust bei niedriger Leuchtdichte hingewiesen, aber auch: „…den Verlust der Sättigung bei hoher Leuchtdichte – die Farben nähern sich dem Weiß an.“

## Farbkombinationen

Kontrast allein reicht im Hinblick auf Barrierefreiheit nicht aus. Bei Animationen können bestimmte Farbkombinationen eher epileptische Anfälle bei empfangsbereiten Personen auslösen als andere. Beispielsweise sind abwechselnde Blitze zwischen Rot und Blau problematischer als Blitze zwischen Grün und Blau. Es wird spekuliert, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea zu gruppieren (nahe der Mitte), physikalisch an einem anderen Ort als die "blauen" empfindlichen Zapfen unserer Augen, die sich abseits der Fovea und hin zu den Rändern befinden, lokalisiert sind. Die elektrischen Signale vom Auge zum Gehirn haben viel zu verarbeiten, während die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben sind eher [epileptische Anfälle auslösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten, die den Gehirndynamiken zugrunde liegen, können durch einige Farbkombinationen stärker moduliert werden als durch andere. Beispielsweise verursacht der rot-blaue Flimmerreiz eine stärkere kortikale Erregung als der rot-grüne oder blau-grüne Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können manche Beeinträchtigungen beeinträchtigen. Die Kombination aus Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün eines Monitors bildet den Großteil der Leuchtdichte (Licht), daher wird es normalerweise ein wesentlicher Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben, die eine niedrige Leuchtdichte haben, sollten die dunkleren der kontrastierenden Farben sein. Blau ist auch in der Auflösung sehr niedrig. Es gibt viel weniger blaue Zapfen, und sie sind in unserem peripheren Blickfeld verstreut und im zentralen Blickfeld nicht vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von Blau:

- Reines Blau sollte typischerweise die dunkelste von zwei Farben sein.
- Wenn Blau als hellere der zwei Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts bewirkt, dass es sich an einem anderen Ort auf der Netzhaut fokussiert als Rot, sodass eine rein rote und eine rein blaue Farbe, die unmittelbar nebeneinander und berührend sind, "flirren" können, wenn sie nebeneinander stehen.

## Der besondere Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen auf die gleiche Weise verarbeitet. Die menschliche Physiologie und Psychologie sind im Allgemeinen unterschiedlich von der Farbe Rot betroffen als von anderen Farben. Wir reagieren physiologisch und psychologisch auf Farben. Zum Beispiel wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen" Einstellung als eine Barrierefreizeitoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen kann, die fotosensitiv sind. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist ein schwieriges Verständniskonzept, wenn man nur Zahlen und Terminologie betrachtet, also betrachten Sie das Bild unten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" geht von der am wenigsten gesättigten Seite auf der linken Seite zur am meisten gesättigten Seite auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als ein "gesättigtes" Rot betrachtet werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten roten Töne können im RGB-Spektrum oder anderen Spektren, die üblicherweise in der Webentwicklung verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite "Rotschattierungen", wird die Farbe "Karminrot" als gesättigtes Rot, welches in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen von über 600nm enthält; in dem Artikel wird besonders darauf hingewiesen, dass "Karminrot" nahe dem extremen Spektrum liegt. Dies bringt es weit über die Standard-Gamuts hinaus (RGB und CMYK), und sein gegebenes RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes Rot blitzen

Zusätzlich zu einem roten Umfeld, welches die kognitive Leistungsfähigkeit von Menschen mit traumatischen Hirnverletzungen beeinflusst, benötigt Farbe im Wellenlängenbereich des Spektrums von Rot spezielle Aufmerksamkeit und Tests.

Gregg Vanderheiden, bei der Bewertung des Tools für fotosensitive Epilepsieanalyse, stellte fest, dass die Anfallraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes Rot blitzen reagieren. (Siehe das Video, [Das Tool für die fotosensitive Epilepsieanalyse](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Krampfanfälle

Kontinuierliches Blitzen heller/dunkler bei Raten über drei Blitzen pro Sekunde hat sich bei einigen Personen als auslösend für Lichtblitzeanfall erwiesen. Zudem wurde festgestellt, dass spezifische, sehr regelmäßige, kontrastreiche Muster, wie parallele schwarz-weiße Streifen, ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) legen mehrere grundlegende Richtlinien fest:

1. Einzelne, doppelte oder dreifache Blitze innerhalb einer Sekunde sind zulässig, aber eine Folge von Blitzlichtern wird nicht empfohlen, wenn mehr als drei Blitze innerhalb von einer Sekunde passieren.
2. Wenn helle und dunkle Streifen angezeigt werden, sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare aufweisen, wenn sich die Streifenrichtung ändert, sie schwingen, blitzen oder den Kontrast umkehren oder acht hell-dunkle Streifenpaare, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Weitere Empfehlungen entnehmen Sie dem Artikel [Photic- und Musterinduzierte Anfälle: Expertengremium der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte von Farben

Farbe wie in Farbtönen und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern — oder verschlechtern.

### Beispiele für Auswirkungen von Farbe, die über das Sehen hinausgehen

- **Farbe kann kulturell abhängig sein:** [Eine länderübergreifende Studie der affektiven Bedeutung von Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann ebenfalls einen positiven Effekt auf unsere Emotionen haben:** [Emotionale Variation durch Kontrolle des Kontrasts von visuellen Inhalten durch EEG-basiertes Deep-Emotion-Erkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Manche Farben können unsere Wahrnehmung von Zeit beeinflussen:** [Farbe und Zeitwahrnehmung: Beweis für zeitliche Überschätzung von blauen Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Effekt auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können erhöhte Freude oder Glück hervorrufen:** [Blick durch "rosarote" Brillen: Der Einfluss von Tönungen auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, bedeutende Effekte auf unser Verhalten zu haben:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit traumatischen Hirnverletzungen [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Pfad zum Erlernen der Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Accessibility für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Desaturation](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot "eingestellt", dass Augenärzte einen Test damit durchführen, der die Integrität des Sehnervs beurteilt.
- [Photic- und Musterinduzierte Anfälle: Expertengremium der Epilepsy Foundation of America Arbeitsgruppe](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
