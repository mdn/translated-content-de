---
title: "Barrierefreiheit im Web: Verständnis von Farben und Leuchtdichte"
slug: Web/Accessibility/Understanding_Colors_and_Luminance
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Während das Verständnis von Farbe, Leuchtdichte und Sättigung wichtig für das Design und die Lesbarkeit für alle sehenden Nutzer ist, sind sie essenziell für Personen mit eingeschränktem Sehvermögen und Farbsehschwäche sowie für Menschen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die helfen sollen, Benutzer mit farbundempfindlichem Sehvermögen zu unterstützen, das üblicherweise als "Farbenblindheit" bezeichnet wird. Das Verständnis von Farbe ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Übersicht

Die Wahl der Farben und deren Verwendung ist ein bedeutender Bestandteil der Barrierefreiheit. An der Oberfläche scheint das Thema einfach zu sein. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung ebenso viel mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgestrahlt wird.

### Umgebung und Wahrnehmung

Die Umgebung ist von Bedeutung. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie für sich genommen Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text herum, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm übertragen wird.

Der Abstand des Betrachters zum Bildschirm, der Umgebungsrahmen, die Gesundheit seiner Augen und mehr beeinflussen, wie diese Farbe vom Betrachter empfangen wird. Wie der Betrachter Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist noch eine andere Sache und kann von der allgemeinen Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, liefert die [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät, wodurch eine Webseite über jede Änderung der Lichtintensität informiert werden kann und folglich den Text entsprechend anpassen kann. Zusätzlich ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen, die Levels automatisch anpassen, je nach Standort des Benutzers und der Art des verwendeten Bildschirms.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und wichtigsten Konzepte zur Schaffung barrierefreien Webinhalts mit Farbe. Die Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis, was sie ist und wie sie eingesetzt wird, Barrierefreiheit für Menschen mit Farbenblindheit sowie für Personen, die Farbe wahrnehmen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Menschen mit Farbenblindheit, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgestellt werden, bevor der Kontrast ermittelt werden kann. Wenn von Farbe gesagt wird, dass sie einen Kontrast hat, verwenden W3C-Formeln die Leuchtdichte und nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, weil unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, richtig verstanden zu werden. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und zu anderen Zeiten als "Helligkeit" bezeichnet. Sogar etwas scheinbar Einfaches, wie die Benennung üblicher Farben, kann zur Diskussion stehen. Beispielsweise kann die Farbe "Karmesinrot" von einigen als Hex-Werte `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie im W3C, im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Beim Arbeiten mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume zu unterschiedlichen Messsystemen abbilden.

Beim Farbdruck hat Ihr Drucker wahrscheinlich Tintenpatronen in Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, in dem die vier Tinten bestimmte Lichtwellenlängen entfernen, indem sie nur den schmalen Bereich reflektieren, mit dem sie assoziiert werden. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulicht hinzufügt.

Derzeit dominiert der {{glossary("RGB", "RGB color space")}} als Raum, in dem Webentwickler arbeiten. Während HEX, RGB und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser Werte zwischen diesen Farbnotationen automatisch. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe werden die meisten Berechnungen in diesem Dokument im RGB-Farbraum und ganz speziell im sRGB-Farbraum angenommen.

## Der sRGB Farbraum

Farbe kann auf viele Arten definiert werden, wie aus dem [`<color>` Daten-Typ](/de/docs/Web/CSS/color_value) ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB, und CMYK, unter anderen.

Für digitale Belange hat die Technologie historisch im RGB-Farbraum residiert. Das RGB-Farbmodell wird durch "Alpha" — RGBA — erweitert, um die Deckkraft einer Farbe anzugeben. Andere Methoden zur Messung von Farbe beinhalten Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, einschließlich in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) umfassen Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel für die Verwendung von OpenGL auf RGBA anstelle von sRGB hinweisen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel dafür in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS Farbwerte

Es ist wichtig zu wissen, dass es Variationen sogar innerhalb eines einzigen {{glossary("color space")}}, wie dem {{glossary("RGB")}} Farbraum gibt. Zum Beispiel beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB**, und **RGBA**, unter anderen.

Dies sind Beispiele für die CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel-Farbe für jede eine vollständig undurchsichtige Magenta:

```css
/* benannte Farbe */
color: magenta;

/* sRGB-Wert mit Prozentwerten */
color: rgb(100% 0% 100%);
color: rgb(100% 0% 100% / 100%);

/* durch sRGB numerische Werte */
color: rgb(255 0 255);
color: rgb(255 0 255 / 1);

/* legacy rgb und rgba Notation */
color: rgb(100%, 0%, 100%);
color: rgba(255, 0, 255, 1);

/* durch sRGB-Wert in Hex */
color: #f0f; /* #rgb, eine Kurzform für #rrggbb */
color: #ff00ff; /* #rrggbb */
color: #f0ff; /* #rgba */
color: #ff00ffff; /* #rrggbbaa */

/* durch HSL-Darstellung des sRGB-Werts */
color: hsl(300 100% 50%);
color: hsl(300deg 100% 50% / 100%);

/* durch HWB-Darstellung des sRGB-Werts */
color: hwb(300deg 0% 0%);
color: hwb(300 0% 0% / 1);

/* durch LAB-Darstellung des sRGB-Werts */
color: lab(60 93.56 -60.5);
color: lab(60 93.56 -60.5 / 1);

/* Darstellung in den CIELAB-Farbräumen */
oklch(0.7 0.32 328.37);
oklch(0.7 0.32 328.37 / 1);

/* color() Funktion im XYZ-Farbraum */
color(xyz-d65 0.59 0.28 0.96);
color(xyz-d65 0.59 0.28 0.96 / 1);
```

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz einstellen, wobei 0% für Aus (schwarz) und 100% für den vollen Wert dieser Farbe steht. Die Werte stehen in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 festlegen.

Danach werden Hex-Farbwerte gezeigt. Das Hexadezimalsystem ist ein Zählsystem mit Basis 16, bei dem die Ganzzahl 0-255 durch zwei Ziffern von 0-15 dargestellt wird, die die Ziffern 0-9 und a-f für 10-15 verwenden. Somit ist `ff` = `255`, `00` = `0`, und `d5` = `200`. Das '#' Zeichen geht der Farbe voran, um anzugeben, dass der Wert hexadezimal ist.

Wenn alle Werte Paare aus identischen Ziffern sind, kann der Wert durch einstellige Zahlen dargestellt werden, die der Browser duplizieren wird. So ist `f00` das gleiche wie `ff0000`. Wenn eine vierte Anzahl von Zahlen vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger ist und daher weniger transparent. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1`, und `100%` für vollständig undurchsichtige Farbe.

Das Beispiel zeigt auch die alte Syntax sowohl für [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die alte Syntax für Farbfunktionen wird durch Komma getrennt, mit einer separaten Funktion für den Fall, dass der Alphakanal enthalten ist. Neue Farbfunktionen haben nur eine Syntax mit durch Leerzeichen getrennten (statt durch Kommas getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich eingeführt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das `none` Schlüsselwort; die komma-getrennte alte Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, und Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die durch die Einstellungen erzeugte Farbe liegt immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einem kreisförmigen Steuerungselement zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Lightness_ und nicht _Luminance_ beinhalten, was ein bedeutender Gesichtspunkt ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, und Blackness_ steht. Mit sowohl `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Wenn einheitenlos, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen, wie Magenta mithilfe der [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), und [`color()`](/de/docs/Web/CSS/color_value/color) Farbfunktionen dargestellt wird.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Wenn man betrachtet, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, sieht man, dass dieselbe Farbe in einer Kurzform als dreistellige Hex-Zahl, die zu einem RGB-Wert als sechsstellige Hex-Zahl umgewandelt wird, die auch zurück in denselben RGB-Wert konvertiert wird, oder als RGBA-Wert, ausgedrückt in Prozent.

RGB ist hardwareorientiert und spiegelt den Einsatz von Kathodenstrahlröhren wieder. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Die Umwandlung von RGB nach HSL ist keine einfache Gleichung. Glücklicherweise erledigen Browser dies automatisch, und durch Shift-Klick auf Farben in den Entwicklertools der Browser wird Konvertierungsfunktionalität bereitgestellt.

Neben Entwicklertools gibt es viele Werkzeuge, die RGB in HSL für Sie umwandeln können und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein hervorragendes Beispiel für ein Werkzeug zur Farbkonvertierung ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zur Kontrastprüfung im Browser. Beachten Sie, dass sowohl die Entwicklertools-Farbwähler als auch dieses Werkzeug WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, beinhaltet das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionaler Farbschriftarten und der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe definieren können. Trotzdem ist sRGB nach wie vor der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Verbreitung.

Wenn es um Barrierefreiheit geht, sind Standards und Richtlinien derzeit hauptsächlich im sRGB-Farbraum verfasst, besonders wenn es um Farbkontrastverhältnisse geht.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Betrachtung von Webinhalten gehen von einer sRGB-Kodierung aus. Es sei denn, es ist bekannt, dass ein anderer Farbraum für die Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums in Betracht ziehen. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode {{domxref('Window.getComputedStyle()')}} gibt Werte unter Verwendung der RGB-Decimal-Referenzskala oder über `color(srgb...)` zurück. Wenn zum Beispiel `Window.getComputedStyle()` auf einem `<div>` aufgerufen wird, das `background-color: #ff0000` gesetzt hat, wird die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurückgegeben — die RGB-Decimal-Referenz. Jedoch, wenn [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an die Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe bezüglich RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann dennoch über grüne Zapfen wahrgenommen werden, allerdings dunkler als normales Sehen. Sowohl Protan- (rotmangel) als auch Deutan- (grünmangel) Defizite verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklertools können helfen, Farbsehstörungen direkt in Ihrem Browser zu simulieren. So ermöglicht der Zugänglichkeitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitspanel.

![Ausschnitt der Entwicklerwerkzeuge von Firefox, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber die Verwendung von Farbe allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie zuvor erwähnt, muss jede Kontrastberechnung auch die Leuchtdichte einbeziehen.

Darüber hinaus wird die "Form" des Textes selbst eine Rolle spielen. Dünne Buchstaben werden schwerer zu lesen sein als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG Kontrastrichtlinien](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (ungefähr `18,7px`) für `fetten` Text. Sie geben an:

_Text, der größer ist und breitere Buchstabenstriche hat, ist bei geringerem Kontrast leichter lesbar. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine breitere Auswahl an Farboptionen für großen Text zu verwenden, was für das Design von Seiten, insbesondere Überschriften, hilfreich ist._

Während größerer Text nicht denselben großen Farbkontrast mit seinem Hintergrund benötigt wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird üblicherweise als 11,5pt bis 12pt betrachtet, was auf dem Bildschirm 16px entspricht. Während eine kleinere Schriftart lesbar sein kann — ein Benutzer kann Buchstaben zu \~70% erkennen — ist das nicht gut lesbar. Eine Schriftgröße von 16px ist allgemein für Menschen mit normaler Sicht gut lesbar. Jemand mit 20/40 benötigt doppelt so viel, etwa eine Schriftgröße von 31px. Daher erfordern die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu klein angezeigter Text schwer zu lesen ist, gilt das gleiche für zu großen Text. Für Benutzer mit 20/20 Sicht nimmt die Lesegeschwindigkeit ab bei einer Schriftgröße größer als ungefähr 96px. Ebenso, wenn es einen großen Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger leserlich, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser allen Text vergrößern, wenn die Benutzer dies tun.

Im Allgemeinen gilt, je mehr Kontrast für Barrierefreiheitszwecke, desto besser. Das ändert sich bei Animationen. "Sichere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Für mehr Informationen über Farbkontrast in Animationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Auch ist zu beachten, dass Symbole ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Der Unterschied in der Leuchtdichte einer Farbe ermöglicht es uns, den Kontrast zu sehen. Relative Leuchtdichte wird in WCAG definiert als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß."

Diese Aussage ist natürlich korrekt, kann aber verwirrend sein, wenn sie im Zusammenhang mit dem RGB-Farbraum verwendet wird, der eine Ganzzahl zwischen 0 und 255 ist. Weiß hat eine relative Leuchtdichte von 100%, Schwarz hat eine relative Leuchtdichte von 0% (in den meisten, aber nicht allen Quellen). Wenn man den W3C-Standard oben interpretiert, würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher kommen also diese Zahlen von 0 bis 255? Historisch speicherten Grafikantriebe die Farbkanäle als ein einzelnes Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutete.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies war durch Design gewollt, _um eine Weißausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis ermittelt werden.

Wo das menschliche Wahrnehmungsvermögen betroffen ist, zählt ein Unterschied in der Leuchtdichte mehr als ein Farbunterschied. Das ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die auch Menschen mit Farbenblindheit sehen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer geringen Leuchtdichte schwer zu sehen sind, durch das Platzieren dieser Farben gegen eine andere mit kontrastierender Leuchtdichte besser lesbar gemacht werden könnten. Eine interessante Studie von NASA über die Farbe Blau zum Beispiel stellte fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _sorgfältig darauf geachtet wird, einen ausreichenden Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Leuchtdichte- und Kontrastprüfer](https://www.siegemedia.com/contrast-ratio) und sogar Anleitungen zum [Berechnen der relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Wahrnehmung von Farbe

Farbe ist unsere Wahrnehmung des schmalen sichtbaren Lichtbands, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Ungefähr 65% der Zapfen sind am empfindlichsten für ein Gelb/Grün, aber reagieren auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grünempfindlich und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es viel weniger blauempfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihren kleineren Zahlen entgegenwirkt.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir viel weniger blaue Zapfen als rote oder grüne haben.

![Auf der linken Seite ist ein Zapfenmosaik des normalen Sehens, und auf der rechten Seite eines von jemandem mit Protanopie, wo die roten Zapfen fehlen.](conemosaics.jpg)

Auf der linken Seite ist das zentrale Zapfenmosaik des normalen Sehens, und auf der rechten Seite das einesjenigen mit Protanopie, einer Form der Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen arbeiten zusammen, um Leuchtdichte zu erzeugen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Getrennt erlauben die roten, grünen und blauen Zapfen die normale Sicht, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von Farbe (Ton und Buntheit) verarbeitet.

Leuchtdichte bietet feine visuelle Details, einschließlich der Unterscheidung von Kanten und Text. Ton und Buntheit tragen ein Drittel der Details der Leuchtdichte. Die Bilddatenkompression nutzt diese Tatsache aus. Als Beispiel komprimiert der [h.264 Videos Codec](/de/docs/Web/Media/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte.

Für die Barrierefreiheit bedeutet dies, dass Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe, in Form von Ton und Buntheit, ist wichtig zum _Unterscheiden_ von Elementen, wie z.B. verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wichtiger Punkt ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Auf dem folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate die gleichen sRGB-Farben. Kontextempfindliche Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es für einen Schatten hält oder nicht.

![Ein Bild eines Schachbretts, bei dem identische Farben anders aussehen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen aufgrund des Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbenempfinden wird durch den Kontext der nahen Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Dies macht die Vorhersage von Kontrast herausfordernd. Es ist nicht so einfach wie das mathematische Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass es bei der Wahrnehmung von Farben ebenso sehr um die menschliche Physiologie und das Wahrnehmen im Gehirn geht wie um das Messen von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtumgebung die Fähigkeit, Farbe und Kontrast wahrzunehmen, beeinflusst. Licht und seine Messungen sind linear, aber die menschliche Sicht und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig, auf die gleiche Weise, an das Bewegen von hellen zu dunklen Bereichen und umgekehrt an. Dies liegt an den physiologischen Gegebenheiten, wie unsere Augen gebaut sind. Dies beeinflusst die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Es gibt mindestens zwei Arten von Anpassungen: lokale Anpassung und Anpassung an die Umgebungsumgebung.

Lokale Anpassung tritt direkt auf der "Seite" auf, die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen genau diesen blauen Text mit einem grauen Highlight anders wahrnehmen, wenn er in einem schwarzen {{HTMLElement("div")}} oder einem weißen ist. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, obwohl sich die Umgebungsbeleuchtung des Raums nicht ändert.

Dies impliziert, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkeladaption bei niedriger Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum kommen, erleben Sie die Dunkeladaption. Es kann einige Minuten dauern, bis man sich daran gewöhnt hat.

Die Lichtadaption ist das Gegenteil. Der Wechsel von einem dunklen Raum ins helle Sonnenlicht ist schneller, kann aber auch schmerzen.

Das impliziert, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei denen sich die Umgebungsbedingungen eines Raumes geändert haben, die Schnittstelle `AmbientLightSensor` und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe und Barrierefreiheit. Im Allgemeinen liegt der Schwerpunkt auf Leuchtdichte, wenn versucht wird, sicherzustellen, dass ausreichend Kontrast zwischen Text und seinem Hintergrund besteht oder die Möglichkeit von Anfällen bei Personen mit photosensitiven Anfällen zu bewerten. Ein Aspekt der Farbe, unabhängig von der Leuchtdichte, verdient besondere Aufmerksamkeit in Bezug auf die Barrierefreiheit: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei Menschen, die für photosensitive Anfälle anfällig sind, Anfälle auszulösen, unabhängig von der Leuchtdichte der Farbe. Wie in [spezieller Fall von Rot](#der_sonderfall_rot) erwähnt wird, stellte die [Epilepsy Foundation](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) fest, dass _unabhängig von der Leuchtdichte ein Übergang zu einem oder von einem gesättigten Rot ebenfalls als Risiko betrachtet wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Künstlers-Malset sind, sind sie nicht so genau wie Farbdefinitionen von einem Computermonitor.

Wenn es um Farben auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Während die Definition der Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Sättigung leicht messbar. Der Schlüssel ist, zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn bei Bedarf zu konvertieren.

Die am häufigsten betrachteten Farbräume, wenn es um Photosensibilität geht, sind die RGB-, HSL- und HSV-Farbräume, auch bekannt als HSB. Der HSV-Farbraum, der für _Hue_, _Saturation_, und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_, und _Brightness_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue_, _Whiteness_, und _Blackness_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Beispielsweise haben gesättigte Farben in HSL eine Helligkeit von `0.5`, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rot-Töne. Sie sind zwei verschiedene "Farbtöne", aber beide gelten als gesättigte Farben.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz in einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu führen, kann man die Helligkeit erhöhen, indem man Weiß hinzufügt, wodurch die Sättigung reduziert wird. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot betrachtet.

### Sättigung und Leuchtdichte

Es gibt einen Verlust der Sättigung an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In NASAs [Effekt der Leuchtdichte auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php), weisen sie darauf hin, dass es einen Verlust der Sättigung bei niedrigen Leuchtdichten gibt. und auch, "... den Verlust der Sättigung bei hohen Leuchtdichten – die Farben auf Weiß konvergieren."

## Farbkombinationen

Kontrast allein reicht bei Barrierefreiheitserwägungen nicht aus. Im Falle von Animationen verursachen bestimmte Farbkombinationen bei Personen, die für diese anfällig sind, eher photosensitive Anfälle als andere. Zum Beispiel sind Wechselblitze zwischen Rot und Blau problematischer als Wechselblitze zwischen Grün und Blau. Es wurde theorisiert, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die dazu neigen, sich um die Fovea (nahe des Zentrums) zu gruppieren, physikalisch an einem anderen Ort befinden als die "blauen" empfindlichen Zapfen unserer Augen, die sich von der Fovea entfernt und in Richtung der Ränder befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zwischen ihnen zu klären, während die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben verursachen eher [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten, die dem Gehirndynamik zugrunde liegen, können durch einige Farbkombinationen stärker moduliert werden als durch andere. Beispielsweise verursacht ein flimmernder rot-blauer Stimulus eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können einige Beeinträchtigungen stören. Die Kombination Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie allein auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün auf einem Monitor macht den größten Teil der Leuchtdichte (Licht) aus und wird daher normalerweise einen wesentlichen Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Menschen können nicht alle Farben unterscheiden. Einige Farben, wie z. B. reines Blau, sind in der Leuchtdichte niedrig. Farben mit niedriger Leuchtdichte sollten die dunkleren der kontrastierenden Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von blauen Farben:

- Reine Blau-Töne sollten typischerweise die dunkelsten von zwei Farben sein.
- Wenn Blau als das hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts bewirkt, dass es an einem anderen Punkt auf der Netzhaut fokussiert als Rot, sodass eine reine rote und eine reine blaue Farbe, die sofort nebeneinander und berührend sind, "flimmern" könnte, wenn sie nebeneinander stehen.

## Der Sonderfall Rot

Nicht alle Farben ("Ton") werden von unserem Gehirn gleichermaßen verarbeitet. Die menschliche Physiologie und Psychologie werden von der Farbe Rot im Allgemeinen stärker beeinflusst als von anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben häufiger epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen-Einstellung als Barrierefreiheitsoption"](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" die Menschen helfen kann, die lichtempfindlich sind. Um die Graustufen-Einstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur Zahlen und Begriffe betrachtet. Daher betrachten Sie das Bild unten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" verläuft von der am wenigsten gesättigten auf der linken Seite zur am meisten gesättigten auf der rechten Seite.

_Mehr als ein "roter" Farbton kann als "gesättigtes" Rot betrachtet werden._ Beispielsweise hat die Farbe `#990000` bei `hsl(0 100% 30%)` volle Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die häufig in der Webentwicklung verwendet werden, gut dargestellt werden. Laut dem Wikipedia-Eintrag zu "Shades of Red" ist die Farbe "Karmin", die in ihrer Pigmentform hauptsächlich rotes Licht mit Wellenlängen, die länger als 600 nm sind, enthält, ein gesättigtes Rot; der Artikel macht den besonderen Hinweis, dass "Karmin" nahe am extremen Spektrum ist. Dies platziert es weit außerhalb der Standard-Farbumgebungen (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Neben einem rot farbenn Umfeld, das die kognitive Funktion von Personen mit traumatischen Hirnverletzungen beeinträchtigt, erfordert Farbe im roten Spektralwellenlängen besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei Tests des _Photosensitive epilepsy analysis tool_ fest, dass die Anfallsraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Kontinuierliches Blinken heller/dunkler bei Raten von höher als drei Blinken pro Sekunde hat sich gezeigt, photogene Anfälle bei manchen Menschen auszulösen. Es wurde auch festgestellt, dass spezielle, sehr regelmäßige, kontrastreiche Muster, wie parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

Die Epilepsy Foundation of America führte Forschung zu [licht- und musterinduzierten Anfällen](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group) durch. Die Studie führte zu mehreren grundlegenden Richtlinien:

1. Einzel-, Doppel- oder Dreifach-Blinken in einer Sekunde sind akzeptabel, aber eine Folge von Blinkern wird nicht empfohlen, wenn mehr als drei Blinken in einer Sekunde auftreten.

2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen aufweisen, wenn die Streifen die Richtung wechseln, oszillieren, blinken oder im Kontrast umkehren, oder acht hell-dunkle Paare von Streifen, wenn das Muster unverändert bleibt oder kontinuierlich und reibungslos in eine Richtung driftet.

Die Konsensempfehlungen sind in diesem kurzen Papier zusammengefasst: [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x). Einige zusätzliche Erkenntnisse sind in diesem UK-Papier zu finden, das [Richtlinien zur Vermeidung von Anfällen](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) behandelt.

## Psychophysische Aspekte von Farbe

Farbe, wie Ton und Sättigung, kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verstärken — oder verringern.

### Beispiele für den Einfluss von Farbe über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch einen positiven Einfluss auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rosa getönte Gläser können für erhöhte Glücksgefühle sorgen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Effekte auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für Personen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Barrierefreiheit im Web für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Desaturation von Rot](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so sensibel auf Rot abgestimmt, dass Augenärzte einen Test mit darauf einrichten, um die Integrität des Sehnervs zu beurteilen.
- [Licht- und musterinduzierte Anfälle: Konsens von Experten der Epilepsy Foundation of America Arbeitsgruppe](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
