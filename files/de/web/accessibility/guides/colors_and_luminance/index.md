---
title: "Web-Barrierefreiheit: Verständnis von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Verständnis von Farbe, Leuchtdichte und Sättigung ist für das Design und die Lesbarkeit für alle sehenden Benutzer wichtig, aber besonders für Personen mit eingeschränktem Sehvermögen und Farbfehlsichtigkeit sowie für Personen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen.

Richtlinien zur Barrierefreiheit definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Benutzer mit eingeschränktem Sehen und enthalten Richtlinien, die Benutzern mit farbinsensitivem Sehen, allgemein als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Übersicht

Die Auswahl und Nutzung von Farben ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick mag das Thema einfach erscheinen. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung nicht nur von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn abhängt, sondern auch von dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum unterscheidet sich von der Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf Barrierefreiheit haben bestimmte Farbkombinationen möglicherweise mehr Auswirkungen als andere. Schriftgröße, [Schriftart](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie von sich aus Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, selbst Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm wiedergegeben wird.

Der Abstand des Betrachters vom Bildschirm, der umgebende Hintergrund, der Gesundheitszustand seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht, ist eine andere Sache und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Bei Unterstützung gibt die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück, wodurch eine Webseite sich der Änderung der Lichtintensität bewusst wird und den Text entsprechend anpassen kann. Außerdem ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen zu bieten, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen, wobei die Stufen je nach Standort des Benutzers und der Art des Bildschirms, den er verwendet, automatisch angepasst werden.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und kritischsten Konzepte zur Erstellung von barrierefreiem Webinhalt mit Farbe. Leuchtdichte ist jedoch von besonderem Interesse, da ihr Verständnis und deren Einsatz Barrierefreiheit sowohl für Farbenblinde als auch für diejenigen ermöglicht, die Farben wahrnehmen können. Der Leuchtdichtekontrast ermöglicht es Farbenblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgelegt werden, bevor der Kontrast bestimmt werden kann. Wenn von Farbkontrast gesprochen wird, beinhalten W3C-Formeln die Leuchtdichte, nicht nur die Farben selbst ("Farbtöne").

### Terminologie

Die Terminologie kann verwirrend sein, weil verschiedene Begriffe oft das Gleiche beschreiben. Es ist besonders wichtig, "Leuchtdichte" und "Sättigung" richtig zu verstehen. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" bezeichnet, andere Male als "Helligkeit". Selbst scheinbar einfache Dinge wie das Benennen von Farben können zur Diskussion stehen. Zum Beispiel kann die Farbe "Karmesinrot" von einigen als `#990000` beschrieben werden und von anderen als `#DC143C`. In diesem Dokument verwenden wir die Terminologie, wie sie im W3C im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Wenn mit Farbe gearbeitet wird, ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da verschiedene Farbräume unterschiedlichen Messsystemen entsprechen.

Im Farbdruck hat der Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz (CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_ und nur den engen Bereich reflektieren, mit dem sie assoziiert sind. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot, Grün und Blau hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, wandeln Browser die Werte zwischen diesen Farbnotationen automatisch um. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch basieren die meisten Berechnungen in diesem Dokument auf dem RGB-Farbraum, sehr spezifisch auf dem sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie es im [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) deutlich wird, einschließlich RGB, RGB-Dezimal, RGB-Prozent, HSL, HWB, LCH, LAB und CMYK, um nur einige zu nennen.

Für digitale Belange hat die Technologie historisch gesehen im RGB-Farbraum gelegen. Das RGB-Farbmodell wird um "Alpha" – RGBA – erweitert, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung umfassen Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, einschließlich in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel für die OpenGL-Nutzung auf die Verwendung von RGBA anstelle von sRGB Bezug nehmen. WebGL ist normalerweise im RGBA-Format; sehen Sie sich ein Beispiel dazu an unter "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass innerhalb eines Farbraums, wie des {{Glossary("RGB", "RGB")}}-Farbraums, Variationen existieren. Zum Beispiel beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele für die CSS-Notation, die zur Definition einer Farbe verwendet wird. Hier ist die Beispiel-Farbe für jede ein vollständig deckendes Magenta:

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

Das erste Beispiel verwendet eine der definierten [Named Colors](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% ausgeschaltet (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl zwischen 0 und 255 festlegen.

Danach werden hexadezimale Farbwerte angezeigt. Hexadezimal ist ein Nummerierungssystem mit Basis 16, bei dem die Ganzzahl 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Somit `ff` = `255`, `00` = `0` und `d5` = `213`. Das '#' Symbol vor der Farbe zeigt an, dass der Wert hexadezimal ist.

Wenn alle Werte Paare von identischen Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dann verdoppelt. So ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, repräsentiert dieser Wert das A in RGBA, den Alphakanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger ist und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert jeweils `f`, `ff`, `1` und `100%` für vollständig deckend.

Das Beispiel zeigt auch die alte Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die ältere Syntax für Farb-Funktionen ist mit Komma getrennt, mit einer separaten Funktion, wenn der Alphakanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit Leerzeichen-getrennten (statt Komma-getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich vorangestellt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentangaben und unterstützt das `none` Schlüsselwort; die Komma-getrennte ältere Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die aus den Einstellungen erzeugte Farbe liegt weiterhin im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist leicht, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine bedeutende Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, and Blackness_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn einheitenlos, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta unter Verwendung der [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionen.

### Konvertierungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Weisen ausgedrückt werden. Wenn wir uns ansehen, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, können Sie sehen, dass die gleiche Farbe in einer Kurznotation als dreistellige Hexadezimalzahl ausgedrückt werden kann, die zu einem RGB-Wert als sechsstellige Hexadezimalzahl konvertiert, die auch zum selben RGB-Wert konvertiert, oder als RGBA-Wert, in Prozent ausgedrückt.

RGB ist hardwareorientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer ziehen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation vor. Die Konvertierung von RGB nach HSL ist keine einfache Gleichung. Glücklicherweise erledigen Browser dies automatisch, und durch Shift-Klick auf Farben in den Entwicklerwerkzeugen der Browser wird eine Konvertierungsfunktion bereitgestellt.

Zusätzlich zu den Entwicklerwerkzeugen gibt es viele Werkzeuge, die RGB in HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zum Überprüfen von Kontrast im Browser. Beachten Sie, dass Farbwähler in Entwicklerwerkzeugen und dieses Werkzeug alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich der funktionalen Farbnotationen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) sowie der Farbkordinatensysteme [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab), mit denen jede sichtbare Farbe spezifiziert werden kann. Abgesehen davon ist sRGB immer noch der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Verbreitung.

Wo Barrierefreiheit betroffen ist, werden jedoch Standards und Richtlinien derzeit hauptsächlich unter Verwendung des sRGB-Farbraums geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zum Anzeigen von Webinhalten basieren auf sRGB-Codierung. Sofern nicht bekannt ist, dass ein anderer Farbraum verwendet wird, um den Inhalt zu verarbeiten und anzuzeigen, sollten Autoren die Verwendung des sRGB-Farbraums in Betracht ziehen. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfrage von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB-Dezimalreferenzskala oder über `color(srgb...)` zurück. Wenn beispielsweise `Window.getComputedStyle()` auf ein `<div>` mit `background-color: #ff0000` angewendet wird, wird die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurückgegeben – die RGB-Dezimalreferenz. Wenn jedoch [relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt ein Aufruf von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` die Farbe in Bezug auf RGB und nicht, wie das menschliche Auge Farbe wahrnimmt.

### Rot-/Grün-Farbblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann dennoch über grüne Zapfen wahrgenommen werden, obwohl dunkler als normales Sehen. Sowohl bei Protan (rote Schwäche) als auch bei Deutan (grüne Schwäche) gibt es Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklerwerkzeuge können helfen, Farbsehunterschiede direkt in Ihrem Browser zu simulieren. Beispielsweise ermöglicht der Barrierefreiheits-Inspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheits-Panel.

![Ausschnitt aus den Entwicklerwerkzeugen von Firefox, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist eine entscheidende Komponente, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreien Inhalt zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Leuchtdichte beinhalten.

Darüber hinaus spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriftarten benötigen Raum, um für das menschliche Auge "luftig" zu wirken.

### Kontrast und Schriftgröße

[WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ca. `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist, und `14pt` (ca. `18,7px`) für `fettet` Text. Daraufhin:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Palette von Farbwahlmöglichkeiten für großen Text zu verwenden, was für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Obwohl größerer Text nicht so viel Farbkontrast zu seinem Hintergrund erfordert wie kleiner Text, ist das Erhöhen der Schriftgröße kein Allheilmittel.

"Normale" Druckschrift wird normalerweise mit 11,5pt bis 12pt betrachtet, was auf dem Bildschirm 16px entspricht. Während eine kleinere Schrift lesbar sein kann — ein Benutzer kann Buchstaben mit \~70% Genauigkeit erkennen — bedeutet dies nicht, dass sie gut lesbar ist. Eine Schriftgröße von 16px ist allgemein für Menschen mit normalem Sehen lesbar. Jemand mit 20/40 Sehkraft benötigt das Doppelte, etwa eine 31px-Schrift. Dies ist der Grund, warum die WCAG-Richtlinien verlangen, dass Benutzer in der Lage sind, jede Textgröße zu vergrößern.

Während ein zu kleiner Text schwer zu lesen ist, ist es auch ein zu großer Text. Für Benutzer mit 20/20 Sehkraft nimmt die Lesegeschwindigkeit bei einer Schriftgröße von mehr als ca. 96px ab. Außerdem wird, wenn ein großer Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite besteht, der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser beim Zoomen den gesamten Text vergrößern.

Im Allgemeinen gilt für Barrierefreiheitszwecke: Je mehr Kontrast, desto besser. Das ändert sich mit Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Außerdem ist zu beachten, dass Symbole für die Wahrnehmung einen ausreichenden Kontrast haben müssen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu sehen. Relative Leuchtdichte wird in WCAG als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich genau, kann jedoch verwirrend sein, wenn sie im Hinblick auf den RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in der meisten, aber nicht aller Literatur). Nach dem W3C-Standard oben interpretiert, würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher stammen also diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als ein einzelnes Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde durch ein Design zur _Erreichung der Weißausrichtung des Monitors_ erreicht, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis bestimmt werden.

Was die menschliche Wahrnehmung betrifft, ist ein Unterschied in der Leuchtdichte wichtiger als ein Farbunterschied. Dies ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die selbst Farbenblinde sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer geringen Leuchtdichte schwer zu sehen sind, leserlicher gemacht werden könnten, indem diese Farben gegen eine andere Farbe mit kontrastierender Leuchtdichte platziert werden. Eine interessante Studie der NASA zu der Farbe Blau stellte beispielsweise fest, dass diese Farbe, die eine geringe Leuchtdichte hat, lesbar gemacht werden kann, wenn _dabei sorgfältig ein ausreichender Leuchtdichtekontrast erreicht_ wird (Aus dem Artikel [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen zur relativen Leuchtdichte sind nicht einfach. Glücklicherweise gibt es [Online-Tools zur Überprüfung von Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio) und sogar Anleitungen zur [Berechnung der relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Wahrnehmung von Farbe

Farbe ist unsere Wahrnehmung des schmalen Bands sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), sogenannte Zapfen, sind darauf abgestimmt, einige Farben stärker wahrzunehmen als andere. Etwa 65% der Zapfen sind _am empfindlichsten_ gegenüber einem Gelb/Grün, aber sie reagieren auch auf Rot (wir werden diese "rote" Zapfen nennen). 30% sind grünempfindlich und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger blauempfindliche Zapfen gibt als bei den anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Kegel-Mosaik des Standardsehens und rechts ist das eines Menschen mit Protanopie, bei der die roten Zapfen fehlen.](conemosaics.jpg)

Links sehen Sie das zentrale Kegel-Mosaik des Standardsehens, und rechts das eines Menschen mit Protanopie, einer Form der Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen vereinen sich, um Leuchtdichte zu erzeugen, was wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton verstehen können. Separat ermöglichen die roten, grünen und blauen Zapfen, dass das Standardsehen Millionen von Farben wahrnehmen kann. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von der Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details zur Leuchtdichte bei. Bilddatenkompression macht sich diese Tatsache zunutze. Zum Beispiel sampelt der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farben bei einem Viertel der Auflösung der Leuchtdichte.

Für die Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast entscheidend wichtig für Text ist. Farbe, im Sinne von Farbton und Farbigkeit, ist wichtig, um _Gegenstände_ wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm zu unterscheiden.

Ein weiterer wesentlicher Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich je nachdem, was sie umgibt. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextabhängige Farbwahrnehmung lässt sie anders erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es als im Schatten liegend oder nicht erachtet.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, je nachdem, ob sie im Schatten liegen.](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen unterschiedlich aufgrund des Kontexts. (Bild D.Lyon)

Unser Kontrast, unsere Helligkeit und unsere Farbwahrnehmung werden durch die Umgebung der nahegelegenen Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Dies macht es herausfordernd, Kontrast vorherzusagen. Es ist nicht so einfach wie ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe sowohl von der menschlichen Physiologie und Wahrnehmung im Gehirn als auch von der Messung von Licht von einem Computerbildschirm abhängt. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit zur Wahrnehmung von Farbe und Kontrast beeinflusst. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht auf gleiche Weise an, wenn sie von hellen in dunkle Bereiche wechseln und umgekehrt. Dies liegt an den physiologischen Bauweisen unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzers, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: die lokale Anpassung und die Anpassung an die Umgebungsbedingungen.

Die lokale Anpassung findet direkt auf der "Seite" statt, die ein Leser ansieht. Zum Beispiel wird blauer Text innerhalb eines grauen "hervorgehobenen" Bereichs von Ihren Augen anders wahrgenommen, wenn er in einem schwarzen {{HTMLElement("div")}}, oder in einem weißen enthalten ist. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, ist beeinflusst, obwohl das Umgebungslicht im Raum sich nicht ändert.

Die Implikation für Webentwickler, die die Lesbarkeit von Text vor einem Hintergrund verbessern möchten, ist, dass sie die Prinzipien der lokalen Anpassung nutzen können.

Die Anpassung an dunkle Umgebungen bei niedriger Leuchtdichte ist langsam. Wenn Sie von draußen hereinkommen, wo die Sonne hell ist, und in einen dunklen Raum gehen, erfahren Sie die Anpassung an dunkle Umgebungen. Es kann einige Minuten dauern, bis sich Ihr Blick anpasst.

Die Anpassung an Licht ist das Gegenteil. Vom dunklen Raum in helles Sonnenlicht zu gehen, ist schneller, kann aber auch schmerzhaft sein.

Die Implikation für Webentwickler, die die Lesbarkeit von Text verbessern wollen, wenn sich die Umgebungsbedingungen in einem Raum geändert haben, ist die Nutzung der `AmbientLightSensor`-Schnittstelle und der [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)-Media Query.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der Fokus hauptsächlich auf der Leuchtdichte, wenn versucht wird, ausreichenden Kontrast zwischen Text und Hintergrund sicherzustellen oder das Risiko von Anfällen bei Menschen zu bewerten, die empfindlich gegenüber photosensitiven Anfällen sind. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit, da er sich auf die Barrierefreiheit bezieht: das Konzept der Sättigung. Dies ist auf seine Fähigkeit zurückzuführen, bei Menschen, die empfindlich gegenüber photosensitiven Anfällen sind, Anfälle auszulösen, unabhängig von der Leuchtdichte der Farbe. Wie im [speziellen Fall von Rot](#der_besondere_fall_von_rot) besprochen, bemerkte die [Epilepsy Foundation](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf), dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet wird_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstlerfarbset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computerbildschirm.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, kann Sättigung problemlos gemessen werden. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten, und bereit zu sein, ihn bei Bedarf umzuwandeln.

Die Farbräume, die am häufigsten in Bezug auf Photosensitivität betrachtet werden, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB. Der HSV-Farbraum, der für _Hue_, _Saturation_ und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_ und _Brightness_ steht, sind in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue_, _Whiteness_ und _Blackness_ repräsentiert.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beides sind gesättigte Rottöne. Sie sind zwei verschiedene "Farbtöne", werden aber beide als gesättigte Farbe betrachtet.

Sättigung ist nicht dasselbe wie Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann die Helligkeit durch Hinzufügen von Weiß, wenn auch bei Abnahme der Sättigung, erhöht werden. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Pink zu erzielen. Pink wird als entsättigtes Rot betrachtet.

### Sättigung und Leuchtdichte

Es gibt einen Sättigungsverlust an den Extremen der Leuchtdichte und der Extremen von Schwarz und Weiß. In NASAs [Wirkung der Leuchtdichte auf die Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Sättigungsverlust bei niedrigen Leuchtdichten gibt, und auch, "… den Verlust der Sättigung bei hohen Leuchtdichten – die Farben verlassen sich auf Weiß."

## Farbkombinationen

Ein alleiniger Kontrast ist nicht ausreichend für Überlegungen zur Barrierefreiheit. Im Fall von Animationen sind bestimmte Farbkombinationen wahrscheinlicher, bei Menschen, die dafür anfällig sind, photosensitive Anfälle zu verursachen, als andere. Zum Beispiel sind abwechselnde Blitze zwischen Rot und Blau problematischer als abwechselnde Blitze zwischen Grün und Blau. Es wurde theoretisiert, dass dies aufgrund der Tatsache ist, dass die "rotempfindlichen" Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe dem Zentrum) zu gruppieren, physisch an einem anderen Ort als die "blauempfindlichen" Zapfen unserer Augen, die sich von der Fovea weg und zu den Rändern hin befinden, befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu bewältigen, da die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben verursachen eher [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten zugrundeliegender Gehirndynamiken können durch einige Farbkombinationen stärker als durch andere moduliert werden. Zum Beispiel verursacht ein rot-blinkender Reiz eine größere kortikale Erregung als ein rot-grün oder blau-grün Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können bei einigen Beeinträchtigungen störend wirken. Das Rot/Blau-Kombination ist ein solches Beispiel.

- Verlassen Sie sich niemals nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün im Monitor macht den Großteil der Leuchtdichte (des Lichts) aus, daher wird es häufig einen wesentlichen Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Manche Menschen können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, haben eine geringe Leuchtdichte. Farben mit geringer Leuchtdichte sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt deutlich weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau in niedrigerer Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reine Blautöne sollten typischerweise die dunkleren von zwei Farben sein.
- Wenn Blau als die hellere von zwei Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es an einem anderen Ort auf der Netzhaut fokussiert wird als rotes Licht, sodass eine reine rote und eine reine blaue Farbe, die sich unmittelbar nebeneinander befinden und aneinander grenzen, schimmern können, wenn sie nebeneinander stehen.

## Der besondere Fall von Rot

Nicht alle Farben ("Farbtöne") werden von unserem Gehirn gleich verarbeitet. Die menschliche Physiologie und Psychologie werden von der Farbe Rot, allgemein gesprochen, auf andere Weise beeinflusst als von anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel ist nachgewiesen, dass [einige Farben wahrscheinlicher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die Menschen, die lichtempfindlich sind, helfen kann. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS-{{cssxref("filter")}}-Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn nur Zahlen und Begriffe betrachtet werden, daher sollten Sie sich das folgende Bild ansehen, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rot-Sättigung von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" schreitet von am wenigsten gesättigt auf der linken Seite bis zu am stärksten gesättigt auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigt" angesehen werden._ Zum Beispiel hat die Farbe `#990000` mit `hsl(0 100% 30%)` volle Sättigung, ist aber weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder in anderen Spektren, die in der Webentwicklung verwendet werden, gut dargestellt werden. Laut Wikipedias Seite über "Schattierungen von Rot" ist die Farbe "Karmesin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen länger als 600nm enthält; der Artikel macht die spezielle Anmerkung, dass "Karmesin" nah am extremen Spektrum liegt. Dies setzt es weit über die standardmäßigen Farbskalen (RGB und CMYK) hinaus, und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinflusst, erfordert Farbe im roten Spektrum Wellenlänge besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, als er das _Photosensitive epilepsy analysis tool_ testete, stellte fest, dass die Anfallsrate viel höher war als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Sehen Sie sich das Video an, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Kontinuierliches Blitzen, das heller/dunkler mit einer Frequenz von mehr als drei Blitzen pro Sekunde ist, hat bei einigen Menschen photische Anfälle ausgelöst. Außerdem wurde festgestellt, dass bestimmte, sehr regelmäßige, hochkontrastreiche Muster, wie parallele weiße und schwarze Streifen, auch Anfälle auslösen können.

Die Epilepsy Foundation of America forschte zu [fotound musterinduzierten Anfällen](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie führte zu mehreren grundlegenden Richtlinien:

1. Einzeln, doppelt oder dreifach blinkende Lichter innerhalb einer Sekunde sind akzeptabel, aber eine Folge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.

2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf Paar von hell-dunklen Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blinken oder im Kontrast umkehren, oder acht Paar von Streifen, wenn das Muster unverändert bleibt oder sich kontinuierlich und gleichmäßig in eine Richtung bewegt.

Die Konsensempfehlungen befinden sich in diesem kurzen Papier, [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x). Einige zusätzliche Einblicke sind in diesem UK-Papier verfügbar, das [Richtlinien zur Verhinderung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) behandelt.

## Psychophysikalische Aspekte der Farbe

Farben als Farbtöne und Sättigung können unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verstärken – oder mindern.

### Beispiele für die Auswirkungen von Farbe über die Sehkraft hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann auch einen positiven Einfluss auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können vermehrt Freude oder Glück hervorrufen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischer Hirnverletzung, [kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lehrpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so feinfühlig auf Rot "eingestellt", dass Augenärzte einen Test damit durchführen, um die Integrität des Sehnervs zu bewerten.
- [Foto- und musterinduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
