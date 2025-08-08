---
title: "Web-Accessibility: Farben und Luminanz verstehen"
short-title: Farben und Luminanz
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Das Verstehen von Farbe, Luminanz und Sättigung ist wichtig für Design und Lesbarkeit für alle sehenden Nutzer, aber sie sind essenziell für Personen mit eingeschränkter Sehfähigkeit und farbdefizienter Sehkraft sowie für Personen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren adäquaten [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränkter Sehkraft sowie Richtlinien, die Menschen mit farbenblinder Sehkraft helfen sollen. Auch das Verständnis von Farben ist wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint es einfach, doch es ist ein komplexes Thema, da die Farbwahrnehmung sowohl die Physiologie des Auges und die Verarbeitung im menschlichen Gehirn betrifft, als auch das von einem Computerbildschirm ausgehende Licht.

### Umgebung und Wahrnehmung

Die Umgebung ist entscheidend. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Bildschirm in einem dunklen Raum. In Bezug auf Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen einen größeren Einfluss als andere. Schriftgröße, [Schriftartstil](https://www.nngroup.com/articles/glanceable-fonts/) (manche Schriftarten sind so dünn oder extravagant, dass sie bereits allein ein Zugänglichkeitsproblem darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, selbst Pixeldichten und mehr, beeinflussen, wie Farbe vom Bildschirm geliefert wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungs-Hintergrund, der Gesundheitszustand seiner Augen und mehr beeinflussen, wie die Farbe vom Betrachter aufgenommen wird. Wie der Betrachter die Farbe wahrnimmt, wird von seinem allgemeinen Gesundheitszustand mit beeinflusst. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Styles basierend auf Benutzerpräferenzen bereitzustellen, einschließlich Präferenzen für [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, liefert die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Host-Gerät, wodurch eine Webseite auf Änderungen der Lichtintensität reagieren und den Text entsprechend anpassen kann. Außerdem ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen anzubieten, wenn Benutzerpräferenzen bestimmte Kontrastlevels anzeigen, und so die Levels je nach Standort des Benutzers und Art des verwendeten Bildschirms automatisch anzupassen.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz sind die zentralen und entscheidenden Konzepte, um zugängliche Webinhalte mit Farbe zu erstellen. Luminanz ist jedoch von besonderer Bedeutung, denn das Verständnis, was es ist und wie es verwendet wird, ermöglicht Zugänglichkeit für farbenblinde Menschen sowie für solche, die Farben wahrnehmen können. Der Luminanzkontrast ermöglicht es Farbblinden, Dunkelheit von Helligkeit zu unterscheiden.

Luminanz muss festgelegt werden, bevor der Kontrast bestehen kann. Beim Sprechen über Farbkontrast beziehen die W3C-Formeln Luminanz mit ein, nicht nur die Farben selbst ("Töne").

### Terminologie

Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft das Gleiche beschreiben. "Luminanz" und "Sättigung" sind besonders wichtig, um sie korrekt zu verwenden. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und andere Male als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie die Benennung gängiger Farben, kann diskutabel sein. Zum Beispiel könnte die Farbe "Karminrot" in Hex-Werten von einigen als `#990000` und von anderen als `#DC143C` beschrieben werden. In diesem Dokument werden wir die Terminologie verwenden, wie sie auf der CSS [`<named-color>`](/de/docs/Web/CSS/named-color)-Seite definiert ist.

Beim Arbeiten mit Farben ist es wichtig, zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume zu unterschiedlichen Messsystemen gehören.

Im Farbdruck hat Ihr Drucker wahrscheinlich Zyan-, Magenta-, Gelb- und Schwarz-(CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellenlängen _entfernen_, sodass nur der enge Bereich reflektiert wird, mit dem sie assoziiert sind. RGB ist ein additives Farbmodell, das verschiedene Proportionen von Rot-, Grün- und Blautönen hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch zwischen diesen Farbnotierungen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aufgrund der Dominanz des RGB-Farbraums bei der Farbausgabe werden die meisten Berechnungen in diesem Dokument jedoch im RGB-Farbraum und sehr spezifisch im sRGB-Farbraum angenommen.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Für digitale Anliegen hat ein Großteil der Technologie historisch im RGB-Farbraum gelegen. Das RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Opazität einer Farbe zu spezifizieren. Andere Methoden zur Farbmessung beinhalten Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmaße im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel für OpenGL die Verwendung von RGBA statt sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; ein Beispiel sehen Sie in der "[Reinigung mit Farben](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es auch innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}}-Farbraum, Variationen gibt. Zum Beispiel beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderem.

Dies sind Beispiele für CSS-Notationen, die zur Definition einer Farbe verwendet werden. Hier wird die Beispiel-Farbe für jede ein vollständig opakes Magenta sein:

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

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% als aus (schwarz) und 100% als voller Wert für diese Farbe definiert sind. Die Werte erfolgen in der Reihenfolge von Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Danach werden Hex-Farbwerte angezeigt. Hexadezimal ist ein Zahlensystem mit Basis-16, wobei die 0-255-Ganzzahl durch zwei Ziffern dargestellt wird, die von 0-15 reichen und die Ziffern 0-9 sowie a-f für 10-15 verwenden. So ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol geht der Farbe voran, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser duplizieren wird. So ist `f00` dasselbe wie `ff0000`. Wenn ein vierter Satz von Zahlen vorhanden ist, ist dieser Wert das A in RGBA, dem Alpha-Kanal, der die Transparenz in Bezug auf den Deckungsgrad der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll undurchsichtig.

Das Beispiel zeigt auch die ältere Syntax für sowohl [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die ältere Syntax für Farb-Funktionen ist durch Kommas getrennt, wobei eine separate Funktion verwendet wird, wenn der Alpha-Kanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit durch Leerzeichen getrennten (anstatt durch Kommas getrennten) Werten, wobei der Alpha-Kanal, falls vorhanden, von einem Schrägstrich vorangestellt wird. Die moderne Syntax erlaubt die Mischung von Zahlen und Prozenten und unterstützt das Schlüsselwort `none`; die durch Kommas getrennte ältere Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die erzeugte Farbe basiert weiterhin auf dem sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel eingestellt, und es ist einfach, eine Benutzeroberfläche zu erstellen, mit der ein Regler oder eine kreisförmige Steuerung den Farbton einstellen kann. Bitte beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Luminanz_ beinhalten, was eine bedeutende Überlegung darstellt.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, and Blackness_ steht. Bei sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn einheitlich, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farb-Funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Betrachtet man, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe als abgekürzte, dreistellige Hex-Zahl ausgedrückt werden kann, die in einen RGB-Wert als sechsstelliges Hex umgewandelt wird, das ebenfalls in denselben RGB-Wert umgewandelt wird, oder als RGBA-Wert, in Prozent ausgedrückt.

RGB ist hardware-orientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuition der [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Notation. Zum Glück konvertieren Browser automatisch von RGB zu HSL, und ein Umschaltklick auf Farben in den Entwicklerwerkzeugen des Browsers bietet eine Konvertierungsfunktion.

Zusätzlich zu den Entwicklerwerkzeugen können viele Tools RGB in HSL für Sie umwandeln und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zum Überprüfen von Kontrasten im Browser. Beachten Sie, dass die Farbpicker der Entwicklerwerkzeuge und dieses Tool alle WCAG-Farbkontrastwerte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, enthält das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) die Hinzufügung zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbnationen und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB aus Gründen der Zugänglichkeit immer noch der Standard und bevorzugte Farbraum aufgrund seiner Verbreitung.

In Bezug auf Barrierefreiheit werden Standards und Richtlinien jedoch derzeit vorwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle Systeme, die heute verwendet werden, um Webinhalte anzuzeigen, gehen von sRGB-Codierung aus. Es sei denn, es ist bekannt, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums evaluieren. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte zurück, die entweder die RGB-Decimal-Referenzskala oder `color(srgb...)` verwenden. Wenn beispielsweise `Window.getComputedStyle()` bei einem `<div>` mit `background-color: red` aufgerufen wird, gibt es die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurück — die RGB-Dezimalreferenz. Wenn jedoch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet werden (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot/Grün Farbblindheit

Protanopie ist eine Farbfehlsichtigkeit, bei der das Auge keine roten Zapfen hat; sRGB kann jedoch über die grünen Zapfen erkannt werden, allerdings dunkler als normale Sicht. Sowohl Protandefekte (rot fehlerhaft) als auch Deutandefekte (grün fehlerhaft) verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklerwerkzeuge können helfen, die Unterschiede im Farbsehen direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Accessibility Inspector von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Zugänglichkeitspanel.

![Ausschnitt der Firefox-Entwicklerwerkzeuge, die das Simulations-Popup zeigen](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Tönen") ist ein kritischer Bestandteil, aber die Verwendung von Farbe ("Töne") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie zuvor erwähnt, muss jede Berechnung des Kontrasts die Luminanz einbeziehen.

Darüber hinaus wird die "Form" des Textes selbst wichtig sein. Dünne Buchstaben sind schwerer lesbar als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (ungefähr `18.7px`) für `bold` Text. Dabei steht:

_Text, der größer ist und breitere Buchstabenstriche hat, ist bei niedrigerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Auswahl an Farben für großen Text zu verwenden, was für das Design von Seiten, insbesondere Titeln, hilfreich ist._

Obwohl größerer Text nicht so viel Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird normalerweise als 11.5pt bis 12pt betrachtet, was auf dem Bildschirm 16px entspricht. Während eine kleinere Schriftgröße lesbar sein mag — ein Benutzer kann Buchstaben mit \~70% Genauigkeit erkennen — ist das nicht lesbar. Eine Schriftgröße von 16px ist allgemein lesbar für Menschen mit normaler Sehkraft. Jemand mit 20/40 benötigt etwa das Doppelte, also etwa eine 31px-Schriftgröße. Dies ist der Grund, warum die WCAG-Richtlinien verlangen, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während Text, der zu klein angezeigt wird, schwer lesbar ist, ist Text, der zu groß ist, ebenfalls schwer zu lesen. Für Benutzer mit 20/20 Sehkraft, wird bei einer Schriftgröße, die größer als ungefähr 96px ist, die Lesegeschwindigkeit abnehmen. Außerdem, wenn ein großer Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite besteht, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text vergrößern, wenn der Benutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheitszwecke, je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit geringerem Kontrast, nicht mehr. Weitere Informationen über Farbkontrast in Animationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie auch, dass Symbole ausreichend Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminanz

Es ist der Unterschied in der Luminanz einer Farbe, der uns den Kontrast erkennen lässt. Relative Luminanz wird in der WCAG als "die relative Helligkeit eines Punktes in einem Farbraum, normalisiert auf 0 für tiefstes Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann aber verwirrend sein, wenn sie in Bezug auf den RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat eine 100% relative Luminanz, Schwarz hat 0% relative Luminanz (in den meisten, aber nicht allen Literaturquellen). Interpretiert man den oben genannten W3C-Standard, würde das bedeuten, dass Weiß, normalisiert zu 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normalisiert zu 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was vielleicht intuitiver ist.

Woher kommen also diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als ein Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Luminanzen der Primärfarben sind unterschiedlich. Gelb hat eine größere Luminanz als Blau, zum Beispiel. Dies wurde durch Design gemacht, _um die weiße Ausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist ohne seine Luminanzkomponente bedeutungslos, und sobald die Luminanz festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Wo die menschliche Wahrnehmung betroffen ist, ist ein Unterschied in der Luminanz wichtiger als ein Farbunterschied. Dies ist wichtig, da der Luminanzkontrast die Entwicklung von Inhalten ermöglicht, die selbst Menschen mit Farbenblindheit sehen können. Mit diesem Verständnis kann Luminanz so manipuliert werden, dass Farben, die aufgrund ihrer geringen Luminanz schwer zu sehen sind, durch das Platzieren dieser Farben gegen eine andere Farbe mit kontrastierender Luminanz lesbarer gemacht werden könnten. Eine interessante Studie der NASA über die Farbe Blau ergab zum Beispiel, dass diese Farbe, die eine geringe Luminanz hat, lesbar gemacht werden kann, wenn _Sorgfalt darauf verwendet wird, einen ausreichenden Luminanzkontrast zu erzielen_ (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)).

Berechnungen für relative Luminanz sind nicht beiläufig. Glücklicherweise gibt es [Online-Luminanz- und Kontrastprüfgeräte](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen, wie man [relative Luminanz berechnet](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbwahrnehmung

Farbe ist unsere Wahrnehmung des schmalen Bandes des sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf abgestimmt, bestimmte Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind _am empfindlichsten_ gegenüber einem Gelb/Grün, reagieren aber auch auf Rot (wir nennen diese "roten" Zapfen). 30% sind grünempfindlich und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es viel weniger blauempfindliche Zapfen als die anderen beiden Typen gibt, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Zahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da die blauen Zapfen nicht zur Luminanz beitragen und wir viel weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegel-Mosaik der normalen Sicht, rechts das eines Menschen mit Protanopie, dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfen-Mosaik der normalen Sicht, rechts das eines Menschen mit Protanopie, einer Form von Farbenblindheit, dem die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen vereinigen sich, um Luminanz zu schaffen, die wir als Helligkeit/Dunkelheit ohne Rücksicht auf den Ton betrachten können. Separat erlauben die roten, grünen und blauen Zapfen der normalen Sicht, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Luminanz separat von Farbe (Ton und Farbintensität) verarbeitet.

Luminanz bietet feine Sehdetails, einschließlich der Unterscheidung von Kanten und Text. Ton und Farbintensität tragen ein Drittel der Details der Luminanz. Bilddatenkompression nutzt diese Tatsache. Ein Beispiel ist, dass der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Luminanz abtastet.

Für die Barrierefreiheit bedeutet dies, dass Luminanzkontrast für Text entscheidend wichtig ist. Farbe, als Ton und Farbintensität, ist wichtig zum _Unterscheiden_ von Elementen wie verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, der beachtet werden sollte, ist die Farbe oder Luminanz, die eine Farbe umgibt. Farben erscheinen anders, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextsensitive Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es denkt, das im Schatten liegt oder nicht.

![Ein Bild eines Schachbretts, bei dem identische Farben anders erscheinen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Bildschirm, aber sie erscheinen anders aufgrund des Kontexts. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbwahrnehmung werden vom Kontext nahegelegener Farben und anderer Designelemente beeinflusst. Dies macht die Vorhersage des Kontrasts zu einer Herausforderung. Es ist nicht nur ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe genauso viel über die Physiologie des Menschen und die Wahrnehmung im Gehirn geht wie über die Messung von Licht von einem Computerbildschirm. Es ist auch entscheidend, zu verstehen, dass das Umgebungslicht die Fähigkeit beeinträchtigt, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich beim Übergang von hellen zu dunklen Bereichen und umgekehrt nicht alle gleich an. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Benutzertyps, Text vor einem Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Lokale Anpassung geschieht genau auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text in einem grauen "markierten" Bereich haben, wird Ihre Sicht diesen genauen blauen Text mit der grauen Hervorhebung anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder einem weißen befindet. Dies nennt man _lokale_ Anpassung. Diese unterschiedlichen Sehfähigkeiten sind beeinflusst, selbst wenn die Raumbeleuchtung nicht wechselt.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text vor einem Hintergrund verbessern wollen, die Prinzipien der lokalen Anpassung nutzen können.

Die Anpassung an Dunkelheit bei geringer Luminanz ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, und in einen dunklen Raum gehen, erleben Sie eine Anpassung an Dunkelheit. Es kann einige Minuten dauern, bis sich Ihre Augen daran gewöhnt haben.

Helle Anpassung ist das Gegenteil. Vom dunklen Raum ins helle Sonnenlicht zu gehen, ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern wollen, bei dem sich die Umgebungsbedingungen eines Raumes geändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast)-Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Töne") und Barrierefreiheit. Allgemein gesprochen liegt der Schwerpunkt zumeist auf Luminanz, wenn versucht wird, genügend Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit von Anfällen bei Personen zu bewerten, die gegenüber optischen Auslösern empfindlich sind. Ein Aspekt von Farbe ("Töne"), unabhängig von Luminanz, verdient besondere Aufmerksamkeit, da es die Möglichkeit von Anfällen bei denen, die gegenüber optischen Auslösern empfindlich sind, unabhängig von der Luminanz der Farbe hervorrufen kann: das Konzept der Sättigung. Wie in [dem besonderen Fall von Rot](#der_besondere_fall_von_rot) diskutiert, bemerkte [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Luminanz ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstlerpinselset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computermonitor.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben in einer bestimmten Wellenlänge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein mag, ist Sättigung leicht messbar. Der Schlüssel besteht darin, zu wissen, in welchem Farbraum Sie arbeiten, und bereit zu sein, es bei Bedarf zu konvertieren.

Die Farbräume, die am häufigsten in Betracht gezogen werden, wenn es um Lichtempfindlichkeit geht, sind die RGB-, HSL- und HSV- (auch bekannt als HSB) Farbräume. Der HSV-Farbraum, der für _hue_ (Farbton), _saturation_ (Sättigung) und _value_ (Wert) steht, und das Synonym HSB, das für _hue_, _saturation_ und _brightness_ (Helligkeit) steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _hue_, _whiteness_ (Weißheit) und _blackness_ (Schwärze) repräsentiert.

Es ist wichtig, zu wissen, in welchem Farbraum man arbeitet. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Die Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hexwert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hexwert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Töne", werden aber beide als gesättigte Farbe betrachtet.

Sättigung ist keine Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz in eine Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann die Helligkeit erhöht werden, indem Weiß hinzugefügt wird, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot betrachtet.

### Sättigung und Luminanz

Es gibt einen Verlust an Sättigung an den Extremen der Luminanz und an den Extremen von Schwarz und Weiß. In NASAs [Effekt der Luminanz auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Verlust an Sättigung bei niedrigen Luminanzen gibt, und auch, dass "…der Verlust an Sättigung bei hohen Luminanzen – die Farben konvergieren auf Weiß."

## Farbkombinationen

Alleine Kontrast reicht bei Barrierefreiheitsüberlegungen nicht aus. Im Falle von Animation sind bestimmte Farbkombinationen wahrscheinlicher, lichtempfindliche Anfälle bei denjenigen zu verursachen, die empfindlich darauf reagieren, als andere. Zum Beispiel sind abwechselnde Blitze zwischen Rot und Blau problematischer als abwechselnde Blitze zwischen Grün und Blau. Es wurde theoretisiert, dass dies der Fall ist, weil die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe der Mitte) zu gruppieren, physiologisch an einem anderen Ort als die "blauen" empfänglichen Zapfen unserer Augen liegen, die sich weg von der Fovea und hin zu den Rändern befinden. Die elektrischen Signale vom Auge zum Gehirn haben vieles zu lösen, da die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben sind wahrscheinlicher [epileptische Anfälle zu verursachen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, können durch einige Farbkombinationen mehr modifiziert werden als durch andere. Beispielsweise verursacht ein roter-blauer flackernder Reiz stärkere kortikale Erregungen als ein roter-grüner oder ein blau-grüner Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder einem mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie alleine auf den Farbton, um Details zu unterscheiden. Angemessener Luminanzkontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Luminanz (Licht) aus, sodass es normalerweise einen wesentlichen Bestandteil der helleren Farben darstellt.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Manche Farben, wie reines Blau, sind in der Luminanz niedrig. Farben, die in der Luminanz niedrig sind, sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen, und sie sind in unserer peripheren Sicht verstreut und nicht in der zentralen Sicht vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Daraus resultieren einige Anleitungen zur Verwendung von Blau:

- Reines Blau sollte normalerweise die dunkelste der beiden Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Beschaffenheit des blauen Lichts verursacht, dass es sich an einem anderen Ort auf der Retina fokussiert als Rot, sodass eine reine rote und eine reine blaue Farbe, die unmittelbar aneinander angrenzen und sich berühren, "schimmern" können, wenn sie nebeneinander liegen.

## Der besondere Fall von Rot

Nicht alle Farben ("Töne") werden von unserem Gehirn auf dieselbe Weise verarbeitet. Die menschliche Physiologie und Psychologie werden von der Farbe Rot, im Allgemeinen, in einer anderen Weise als von anderen Farben beeinflusst. Wir reagieren physiologisch ebenso wie psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben epileptische Anfälle eher hervorrufen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine [„Graustufen“-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit einem [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur Zahlen und Terminologie betrachtet, daher betrachten Sie das folgende Bild, um das Konzept der Sättigung in einer Farbe zu verdeutlichen:

![Rote Sättigung von Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" verläuft von links nach rechts von am wenigsten gesättigt zu am meisten gesättigt.

_Mehr als eine "rote" Farbe kann als ein "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine vollständige Sättigung, ist aber weniger hell als die oben beschriebenen Farben. Ähnlich hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die im Webentwicklung üblicherweise verwendet werden, gut repräsentiert werden. Laut Wikipedias Artikel über "Rottöne" ist die Farbe "Carmin" ein gesättigtes Rot, welches in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen über 600nm enthält; der Artikel bemerkt besonders, dass "Carmin" nahe am extremen Spektrum liegt. Dies platziert es weit über die Standardfarbräume (RGB und CMYK) hinaus, und sein gegebener RGB-Wert ist nur eine schwache Annäherung."

### Gesättigtes rotes Blitzen

Zusätzlich zu einer roten Umgebung, die die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinflusst, erfordert Farbe im roten Spektralbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei Tests mit dem _Photosensitive epilepsy analysis tool_ fest, dass die Anfallraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [Das Werkzeug zur Analyse photosensitiver Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Fortwährendes Blitzen heller/dunkler mit einer Rate von mehr als drei Blitzen pro Sekunde hat sich gezeigt epileptische Anfälle bei manchen Menschen auszulösen. Es wurde auch festgestellt, dass spezifische, sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle hervorrufen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren mehrere grundlegende Richtlinien:

1. Einzel-, Doppel-, oder Dreifachblitze in einer Sekunde sind akzeptabel, aber eine Folge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Wenn helle und dunkle Streifen angezeigt werden, sollte das Muster nicht mehr als fünf Helldunkelpaare von Streifen enthalten, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder in Kontrast umkehren oder acht Helldunkelpaare von Streifen, wenn das Muster unverändert bleibt oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Weitere Empfehlungen finden Sie im Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte der Farbe

Farbe in Form von Tönen und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verstärken — oder abschwächen.

### Beispiele für die Wirkung von Farbe jenseits des Sehens

- **Farbe kann kulturell abhängig sein:** [Eine kulturenübergreifende Untersuchung der affektiven Bedeutungen von Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Wirkung von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch positive Auswirkungen auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Belege für die zeitliche Überschätzung von blauen Reizen](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Effekt auf Helligkeit und Blendung:** [Blau und Blendung & Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Gläser können erhöhte Freude oder Glück hervorrufen:** [Durch "Rosarote Brillen" schauen: Der Einfluss der Tönung auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [Wie Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen mit traumatischer Hirnverletzung [kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Barrierefreiheit bei Anfällen und physischen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so sensibel auf Rot abgestimmt, dass Augenärzte einen Test damit durchführen, um die Integrität des Sehnervs zu beurteilen.
- [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
