---
title: "Web-Zugänglichkeit: Verständnis von Farben und Luminanz"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{AccessibilitySidebar}}

Das Verständnis von Farbe, Luminanz und Sättigung ist nicht nur wichtig für das Design und die Lesbarkeit für alle sehenden Benutzer, sondern auch wesentlich für Personen mit eingeschränktem Sehvermögen, farbfeindlichem Sehvermögen und Personen mit spezifischen neurologischen, kognitiven oder anderen Beeinträchtigungen.

Zugänglichkeitsrichtlinien definieren ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die Benutzer mit farbunbeständigem Sehvermögen, allgemein bekannt als "Farbenblindheit", unterstützen sollen. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Übersicht

Die Wahl der Farben und deren Einsatz ist ein wesentlicher Bestandteil der Zugänglichkeit. Auf den ersten Blick erscheint das Thema einfach, dennoch ist es ein komplexes Thema, da die Farbperzeption ebenso von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn abhängt wie von dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung dieser gleichen Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf Zugänglichkeit haben bestimmte Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (manche Schriften sind so dünn oder ausgefallen, dass sie für sich alleine Zubügelichkeitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, selbst Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Abstand des Betrachters zum Bildschirm, der umgebende Hintergrund, der Gesundheitszustand der Augen und mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie in die Augen gelangt ist, ist eine weitere Frage und kann durch die allgemeine Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen einzuführen, einschließlich der Vorlieben für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück und ermöglicht es einer Webseite, sich jeder Änderung der Lichtintensität bewusst zu sein und dementsprechend den Text anzupassen. Außerdem ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen zu bieten, wenn Benutzerpräferenzen bevorzugte Kontrastniveaus anzeigen und automatisch Level je nach Standort des Benutzers und der Art des verwendeten Bildschirms anzupassen.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz sind die zentralsten und kritischsten Konzepte zur Erstellung von zugänglichen Webinhalten mit Farbe. Luminanz ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was es ist und wie es verwendet wird, die Zugänglichkeit sowohl für Farbenblinde als auch für solche, die Farben wahrnehmen können, ermöglicht. Der Luminanzkontrast ermöglicht es Farbenblinden, zwischen dunkel und hell zu unterscheiden.

Luminanz muss festgestellt werden, bevor der Kontrast festgelegt werden kann. Wenn von Farbkontrast die Rede ist, verwenden W3C-Formeln Luminanz, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Luminanz" und "Sättigung" sind besonders wichtig, um sie richtig zu verstehen. Beispielsweise ist "Sättigung" in manchen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" bezeichnet, andere Male als "Helligkeit". Selbst so etwas scheinbar Einfaches wie die Benennung gängiger Farben kann offen für Diskussionen sein. Zum Beispiel kann die Farbe "Karminrot" in Hex-Werten von einigen als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie wie sie im W3C definiert ist, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).

Beim Arbeiten mit Farben ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume unterschiedlichen Messsystemen zugeordnet sind.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz-(CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_ und nur den schmalen Bereich reflektieren, mit dem sie verbunden sind. RGB ist ein additives Farbmodell, das verschiedene Anteile von Rot-, Grün- und Blaulicht addiert.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisierte Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch, wegen der aktuellen Dominanz des RGB-Farbraums bei der Messung von Farbausgabe, wird in diesem Dokument angenommen, dass die meisten Berechnungen im RGB-Farbraum und, sehr speziell, im sRGB-Farbraum sind.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) deutlich wird, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderen.

Für digitale Belange lag ein Großteil der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird erweitert, um "Alpha" einzuschließen – RGBA – um die Opazität einer Farbe anzugeben. Andere Messmethoden für Farbe beinhalten Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel für OpenGL die Verwendung von RGBA anstelle von sRGB erwähnen. WebGL ist in der Regel im RGBA-Format; siehe ein Beispiel, wie es in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)" verwendet wird.

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}}-Farbraum, Variationen gibt. Zum Beispiel Variationen des RGB-Farbraumes umfassen **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Das sind Beispiele für die CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jede eine voll opake Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz einstellen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Nummer von 0 bis 255 einstellen.

Danach werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit einer Basis von 16, wobei die Ganzzahl von 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen und die Ziffern 0-9 und a-f für 10-15 verwenden. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. So ist `f00` dasselbe wie `ff0000`. Wenn ein vierter Satz von Zahlen vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe opaker, und daher, weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll opak.

Das Beispiel zeigt auch die Legacy-Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die Legacy-Syntax für Farb-Funktionen ist komma-separiert, mit einer separaten Funktion, wenn der Alpha-Kanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit raumgetrennten (statt komma-getrennten) Werten, wobei der Alpha-Kanal, falls vorhanden, durch einen Schrägstrich vorangestellt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das `none` Schlüsselwort; die komma-separierte Legacy-Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue (Farbton), Saturation (Sättigung) und Lightness (Helligkeit)_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die Farbe, die aus den Einstellungen erzeugt wird, ist immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als ein Winkel eingestellt, und es ist einfach, ein Benutzerinterface zu erstellen, das einen Knopf oder ein zirkuläres Element zur Einstellung des Farbtons verwendet. Beachten Sie, dass HSL-Farben _lightness_ einbeziehen, nicht _luminance_, was eine signifikante Überlegung ist.

Die nächsten Beispiele zeigen "HWB", das für _Hue (Farbton), Whiteness (Weißheit) und Blackness (Schwärze)_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle)-Wert sein. Wenn keine Einheit angegeben ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta unter Verwendung der [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), und [`color()`](/de/docs/Web/CSS/color_value/color)-Farbfunktionen.

### Umrechnungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraumes auf viele Arten ausgedrückt werden. Wenn man sich ansieht, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer abgekürzten, drei Ziffern hex Zahl dargestellt werden kann, die zu einem RGB-Wert als einer sechs Ziffern hex Zahl umgerechnet und die gleiche RGB-Wert ergibt, oder als ein RGBA-Wert, ausgedrückt in Prozenten.

RGB ist hardwareorientiert und spiegelt die Nutzung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuition der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Die Umwandlung von RGB in HSL ist keine einfache Gleichung. Glücklicherweise erledigen Browser dies automatisch, und durch Shift-Klick auf Farben in den Entwickler-Tools der Browser wird die Konvertierungsfunktion bereitgestellt.

Zusätzlich zu den Entwickler-Tools können viele Werkzeuge RGB zu HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie umwandelt, ist Tom Jewett's "[Mini Color Selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrastes im Browser. Beachten Sie, dass die Entwickler-Tools-Farbauswähler und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, beinhaltet das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) die Hinzufügung zusätzlicher Farbräume, einschließlich der [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionalen Farbschreibweise und der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Farbsysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB weiterhin der Standard- und bevorzugte Farbraum für die Zugänglichkeit aufgrund seiner Allgegenwärtigkeit.

In Bezug auf die Zugänglichkeit werden jedoch Standards und Richtlinien derzeit vorwiegend im sRGB-Farbraum geschrieben, insbesondere soweit es sich auf Farbkontrastverhältnisse bezieht.

> [!NOTE]
> Fast alle derzeit verwendeten Systeme zur Anzeige von Web-Inhalten gehen von einer sRGB-Codierung aus. Es sei denn, es ist bekannt, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums evaluieren. Wenn andere Farbräume verwendet werden, sollen die Prinzipien des [minimalen Kontrastverhältnisses](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB-Dezimalreferenzskala oder über `color(srgb...)` zurück. Wenn zum Beispiel `Window.getComputedStyle()` für ein `<div>` mit `background-color: #ff0000` aufgerufen wird, gibt sie die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurück — die RGB-Dezimalreferenz. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da sie mit Computerhardware verbunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht darauf, wie das menschliche Auge Farbe wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann jedoch über grüne Zapfen noch wahrgenommen werden, allerdings dunkler als bei normalem Sehvermögen. Sowohl Protan-Mangel (rot-schwach) als auch Deutan-Mangel (grün-schwach) führen dazu, dass es schwierig wird, zwischen Rot und Grün zu unterscheiden.

Entwicklungstools können helfen, die Unterschiede im Farbsehen direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Accessibility Inspector von Firefox, Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheits-Panel zu simulieren.

![Ausschnitt der Firefox-Entwicklungstools mit dem Simulations-Popup](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist eine entscheidende Komponente, aber der Einsatz von Farbe ("Farbtönen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie zuvor erwähnt, muss jede Berechnung des Kontrasts die Luminanz einbeziehen.

Zusätzlich wird die "Form" des Textes selbst eine Rolle spielen. Dünne Buchstaben werden schwerer zu lesen sein als dicke; alle Schriftarten benötigen Raum, um für die menschliche Wahrnehmung "atmen" zu können.

### Kontrast und Schriftgröße

[WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} auf `normal` gesetzt ist und `14pt` (ungefähr `18,7px`) für `fetten` Text. Sie erklären:

_Text, der größer ist und breitere Buchstabenstriche hat, ist bei geringem Kontrast leichter zu lesen. Deshalb ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Palette von Farboptionen für großen Text zu verwenden, was besonders für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Während größerer Text nicht so starken Farbkontrast mit seinem Hintergrund benötigt wie kleinerer Text, ist die Vergrößerung der Schriftgröße kein Allheilmittel.

"Normale" Druckschrift wird im Allgemeinen als 11,5pt bis 12pt angesehen, was 16px auf dem Bildschirm entspricht. Während kleinere Schriftarten lesbar sein können — ein Benutzer kann die Buchstaben mit ~70% Genauigkeit erkennen — das ist nicht lesefreundlich. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit einem Sehvermögen von 20/40 benötigt das Doppelte davon, etwa eine 31px-Schrift. Daher verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben müssen, einen beliebigen Text zu vergrößern.

Während zu kleiner angezeigter Text schwer zu lesen ist, ist auch zu großer Text schwer zu lesen. Für Benutzer mit 20/20 Sehvermögen nimmt die Lesegeschwindigkeit bei einer Schriftgröße von mehr als ungefähr 96px ab. Wenn es außerdem einen großen Unterschied zwischen der kleinsten und der größten Schriftgröße auf einer Seite gibt, wird der größere Text schwerer lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text vergrößern, wenn der Benutzer zoomt.

Im Allgemeinen gilt, je mehr Kontrast, desto besser für die Barrierefreiheit. Das ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zu Farbkontrast in Animationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminanz

Es ist der Unterschied in der Luminanz einer Farbe, der uns den Kontrast erkennen lässt. Relative Luminanz wird in den WCAG-Richtlinien als "die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie in Bezug auf den RGB-Farbraum verwendet wird, der eine Anzahl zwischen 0 und 255 ist. Weiß hat 100% relative Luminanz, Schwarz hat 0% relative Luminanz (in den meisten, aber nicht allen Literaturquellen). Interpretiert nach dem oben genannten W3C-Standard würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Also, woher kommen diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als ein einzelnes Byte, was eine Reichweite von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Luminanzen der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Luminanz als Blau. Dies wurde durch das Design erreicht , _um die weiße Ausrichtung des Monitors zu erreichen_ , gemäß dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)" .

Ein Farbkontrastverhältnis ist ohne seine Luminanzkomponente bedeutungslos, und sobald die Luminanz festgestellt ist, kann das Farbkontrastverhältnis festgelegt werden.

Wo die menschliche Wahrnehmung betroffen ist, zählt ein Unterschied in der Luminanz mehr als ein Farbunterschied. Dies ist wichtig, da Luminanzkontrast die Entwicklung von Inhalten ermöglicht, die selbst solche mit Farbenblindheit sehen können. Mit diesem Verständnis könnte die Luminanz manipuliert werden, sodass Farben, die aufgrund ihrer niedrigen Luminanz schwer zu sehen sind, lesbarer werden könnten, indem diese Farben gegen eine andere mit kontrastierender Luminanz platziert werden. Eine interessante Studie der NASA über die Farbe Blau stellte z.B. fest, dass diese Farbe, die eine niedrige Luminanz hat, lesbar gemacht werden kann, wenn _darauf geachtet wird, einen angemessenen Luminanzkontrast zu erreichen_ (aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)) .

Berechnungen für relative Luminanz sind keine beiläufigen. Zum Glück stehen [Online-Checker für Luminanz und Kontrast](https://www.siegemedia.com/contrast-ratio) zur Verfügung, und es gibt sogar Anleitungen, wie [relative Luminanz berechnet werden kann](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Farbsehen

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben mehr als andere zu erkennen. Ungefähr 65% der Zapfen sind _am meisten_ empfindlich für ein Gelb/Grün, reagieren jedoch auch auf Rot (wir nennen sie "rote" Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weitaus weniger blauempfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Luminanz beitragen und wir viel weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Zapfenmosaik des normalen Sehens, und rechts ist das eines Menschen mit Protanopie, wo ihnen die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik des normalen Sehens, und rechts ist das eines Menschen mit Protanopie, einer Form der Farbenblindheit, bei der ihnen die roten Zapfen fehlen. (Illustration von Mark Fairchild vom RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen verbinden sich, um Luminanz zu erzeugen, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton betrachten können. Getrennt erlauben die roten, grünen und blauen Zapfen dem normalen Sehen, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Luminanz getrennt von der Farbe (Farbton und Farbigkeit) verarbeitet.

Luminanz sorgt für feine Bilddetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Luminanz. Bilddatenkompression nutzt diese Tatsache aus. Als ein Beispiel wird der [h.264 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) bei einem Viertel der Auflösung der Luminanzfarbe abgetastet.

Für die Barrierefreiheit bedeutet das, dass Luminanzkontrast extrem wichtig für Text ist. Farbe, wie Farbton und Farbigkeit, ist wichtig, um _Elemente zu unterscheiden_, wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt ist die Farbe oder Luminanz, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. In dem folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate die gleiche sRGB-Farbe. Kontextsensitive Farbempfindung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es als im Schatten oder nicht wahrnimmt.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber aufgrund des Kontexts erscheinen sie unterschiedlich. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und Farbwahrnehmung werden durch den Kontext der nahegelegenen Farben und anderer Merkmale eines Designs oder Bildes beeinflusst. Dies macht die Vorhersage von Kontrasten herausfordernd. Es ist nicht so einfach wie ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe genauso sehr um die menschliche Physiologie und Wahrnehmung im Gehirn geht wie um die Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass das Umgebungslicht die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleich an, wenn wir von hellen in dunkle Bereiche gehen und umgekehrt. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an die Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der „Seite“, die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen „hervorgehobenen“ Bereichs haben, werden Sie diesen exakten blauen Text mit einer grauen Hervorhebung anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, obwohl sich das Umgebungslicht im Raum nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text vor einem Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an niedrige Luminanz ist langsam. Wenn Sie von draußen kommen, wo die Sonne hell ist, und in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann einige Minuten dauern, um sich daran anzupassen.

Die Lichtanpassung ist das Gegenteil. Aus einem dunklen Raum ins helle Sonnenlicht zu gehen ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei denen sich die Umgebungsbedingungen eines Raums geändert haben, die `AmbientLightSensor` Schnittstelle und den [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der Fokus am meisten auf Luminanz, wenn versucht wird, genügend Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit zu bewerten, Anfälle bei Personen mit fotosensiblen Anfällen auszulösen. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von der Luminanz, verdient besondere Aufmerksamkeit, wie er sich auf die Barrierefreiheit bezieht: das Konzept der Sättigung. Dies liegt an ihrer Fähigkeit zu Krampfanfällen bei Menschen führen zu können, die für fotosensitive Anfälle anfällig sind, unabhängig von der Luminanz der Farbe. Wie [der besondere Fall von Rot](#der_besondere_fall_von_rot) diskutiert wird, hat die [Epilepsy Foundation](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) darauf hingewiesen, dass _unabhängig von der Luminanz, ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Malkasten eines Künstlers sind, sind sie nicht so genau wie die Definitionen von Farbe auf einem Computermonitor.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, ist Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten im Zusammenhang mit Fotosensibilität betrachtet werden, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB. Der HSV-Farbraum, der für _Hue (Farbton)_, _Saturation (Sättigung)_, und _Value (Wert)_ steht, und das Synonym HSB, das für _Hue (Farbton)_, _Saturation (Sättigung)_, und _Brightness (Helligkeit)_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue (Farbton)_, _Whiteness (Weißheit)_, und _Blackness (Schwärze)_ dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum man arbeitet. Beispielsweise haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während in HWB sie einen Wert `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angegeben. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", gelten jedoch beide als gesättigte Farben.

Sättigung ist nicht gleich Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung durch Zugabe von Weiß, Schwarz oder Grau zur Farbe verringern; um das Beispiel fortzuführen, kann die Helligkeit durch Zugabe von Weiß erhöht und die Sättigung verringert werden. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot betrachtet.

### Sättigung und Luminanz

Es gibt einen Verlust an Sättigung an den Extremen der Luminanz und den Extremen von Schwarz und Weiß. In NASAs [Effekt der Luminanz auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) stellen sie fest, dass es einen Verlust der Sättigung bei niedrigen Luminanzen gibt und auch, dass "…der Verlust der Sättigung bei hohen Luminanzen–die Farben sich auf Weiß konvergieren."

## Farbkombinationen

Kontrast allein ist nicht genug, wenn es um Überlegungen zur Zugänglichkeit geht. Bei Animationen neigen bestimmte Farbkombinationen dazu, bei Menschen, die empfindlich darauf reagieren, fotosensitive Anfälle auszulösen, mehr als andere. Zum Beispiel sind wechselnde Blitze zwischen Rot und Blau problematischer als wechselnde Blitze zwischen Grün und Blau. Es wurde spekuliert, dass dies daran liegt, dass die in der Nähe der Fovea (nahe dem Zentrum) befindlichen, "rot"-empfindlichen Zapfen der Augen anders positioniert sind als die "blau"-empfindlichen Zapfen, die sich an den Rändern weg von der Fovea befinden. Die elektrischen Signale, die von den Augen ans Gehirn geleitet werden, haben viel zu klären, wenn die Informationen im Gehirn verarbeitet werden.

Einige Farben sind wahrscheinlicher, [epileptische Anfälle auszulösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Unstände, die der Dynamik im Gehirn zugrunde liegen, können durch bestimmte Farbkombinationen mehr moduliert werden als durch andere. Ein rot-blauer Flimmerreiz verursacht zum Beispiel eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können manche Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals allein auf Farbton, um Details zu unterscheiden. Ausreichender Luminanzkontrast ist erforderlich.
- Das Grün eines Monitors macht den größten Teil der Luminanz (Licht) aus, es wird also in der Regel einen signifikanten Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, sind in der Luminanz niedrig. Farben mit geringer Luminanz sollten die dunkleren kontrastierenden Farben sein. Blau ist auch in der Auflösung sehr niedrig. Es gibt viel weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte typischerweise das dunkelste von zwei Farben sein.
- Verwenden Sie Blau als die hellere der beiden Farben, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts verursacht, dass es an einem anderen Ort auf der Netzhaut fokussiert wird als rotes Licht, sodass eine reine rote und eine reine blaue Farbe, die sofort nebeneinander und berührend sind, „schimmern“ können, wenn sie nebeneinander liegen.

## Der besondere Fall von Rot

Nicht alle Farben („Farbton“) werden von unserem Gehirn gleichmäßig verarbeitet. Im Allgemeinen wirkt sich die menschliche Physiologie und Psychologie unterschiedlich auf die Farbe Rot aus als auf andere Farben. Wir reagieren physiologisch und psychologisch auf Farben. Beispielsweise wurde bestätigt, dass [manche Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen" Einstellung als Zugangsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung zu simulieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologie schaut, also betrachten Sie das Bild unten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rot Sättigung von Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Dasselbe „Farbe“ bewegt sich von der am wenigsten gesättigten auf der linken Seite zur am meisten gesättigten auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine völlige Sättigung, ist aber weniger hell als die zuvor beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rot-Farben können im RGB-Spektrum oder anderen häufig in der Web-Entwicklung verwendeten Spektren gut dargestellt werden. Laut der Wikipedia-Seite "Farben von Rot" ist die Farbe "Karmin" ein gesättigtes Rot, das sich in seiner Pigmentform hauptsächlich aus rotem Licht mit Wellenlängen von über 600nm zusammensetzt; der Artikel erwähnt besonders, dass "Karmin" nahe am extremeren Ende des Spektrums ist. Dies platziert es weit jenseits der Standard-Farbräume (RGB und CMYK), und sein gegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinträchtigt, erfordert die Farbe im Bereich der Wellenlänge Rot besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei Tests des _Photosensitive epilepsy analysis tool_ fest, dass die Anfallsraten viel höher als erwartet waren. Sie entdeckten, dass wir viel sensibler auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Durchgehendes Blinken heller/dunkler mit Raten, die höher sind als drei Blitze pro Sekunde, kann nachgewiesenermaßen photische Anfälle bei manchen Menschen auslösen. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, hochkontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle induzieren können.

Die Epilepsie Stiftung von Amerika untersuchte [Licht- und musterinduzierte Anfälle](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie führte zu mehreren fundamentalen Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze innerhalb einer Sekunde sind akzeptabel, aber eine Folge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde stattfinden.

2. Beim Anzeigen heller und dunkler Streifen sollte das Muster nicht mehr als fünf helle-dunkle Streifen-Paare anzeigen, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder den Kontrast umkehrt, oder acht helle-dunkle Streifen-Paare anzeigen, wenn das Muster sich nicht ändert oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Die Konsens-Empfehlungen sind in diesem kurzen Papier, [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) dargelegt. Einige weitere Einblicke sind in diesem britischen Papier zu finden, das [Richtlinien zur Vermeidung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) behandelt.

## Psycho-physikalische Aspekte von Farben

Farbe als Farbton und Sättigung kann unser Gemüt beeinflussen und unsere interaktiven Erlebnisse verbessern — oder verschlechtern.

### Beispiele für den Effekt der Farbe über die Sicht hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann auch eine positive Auswirkung auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Effekt auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können erhöhte Freude oder Glück bieten:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Effekte auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color)-Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp
- [Web-Zugänglichkeit bei Anfällen und physischen Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so sensibel auf "Rot" abgestimmt, dass Augenärzte einen Test under Verwendung dieses Farbtons entwickelt haben, um die Integrität des Sehnervs zu beurteilen.
- [Licht- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
