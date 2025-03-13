---
title: "Barrierefreiheit im Web: Verstehen von Farben und Luminanz"
short-title: Farben und Luminanz
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Das Verständnis von Farbe, Luminanz und Sättigung ist wichtig für das Design und die Lesbarkeit für alle sehenden Nutzer, insbesondere jedoch für solche mit eingeschränktem Sehvermögen, farbdefizientem Sehvermögen und bestimmte neurologische, kognitive und andere Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die für Benutzer mit farbunempfindlichem Sehvermögen - oft als "Farbenblindheit" bezeichnet - gedacht sind. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Nutzung ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach zu sein, doch es ist ein komplexes Thema, weil die Farbwahrnehmung genauso viel mit der Physiologie der Augen und der Verarbeitung durch das menschliche Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird von der Wahrnehmung dieser gleichen Farbe auf demselben Computerbildschirm in einem dunklen Raum verschieden sein. In Bezug auf die Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen einen größeren Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (manche Schriftarten sind so dünn oder verspielt, dass sie allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des um den Text herumliegenden Hintergrundbereichs, sogar Pixeldichten und mehr beeinflussen alle, wie Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters zum Bildschirm, der Umgebungs-Hintergrund, die Gesundheit seiner Augen und mehr beeinflussen alle, wie diese Farbe vom Betrachter empfangen wird. Auch die Art und Weise, wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist eine weitere Frage und kann von der allgemeinen Gesundheit beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbmodus](/de/docs/Web/CSS/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt die [Umgebungslichtsensor-Schnittstelle](/de/docs/Web/API/AmbientLightSensor) den aktuellen Lichtpegel oder die Beleuchtungsstärke des umgebenden Lichts um das Hostgerät aus zurück und ermöglicht es einer Webseite, sich der Änderung der Lichtintensität bewusst zu sein und folglich den Text entsprechend anzupassen. Darüber hinaus ermöglichen die oben genannten Media Queries Entwicklern, alternative Benutzererfahrungen zu bieten, wenn Benutzerpräferenzen auf bevorzugte Kontrastniveaus hinweisen und die Niveaus automatisch je nach Standort des Nutzers und verwendetem Bildschirmtyp anzupassen.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz sind die zentralsten und kritischsten Konzepte, um zugängliche Webinhalte mit Farbe zu schaffen. Luminanz ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, Barrierefreiheit sowohl für Personen mit Farbenblindheit als auch für jene, die Farben wahrnehmen können, ermöglicht. Der Luminanzkontrast ermöglicht es Farbenblinden, Dunkel von Hell zu unterscheiden.

Die Luminanz muss etabliert sein, bevor der Kontrast festgestellt werden kann. Wenn von Farbkontrast die Rede ist, beinhalten W3C-Formeln die Luminanz und nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Die Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Luminanz" und "Sättigung" sind besonders wichtig, korrekt zu verwenden. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen sind "Chroma" und "Sättigung" zwei unterschiedliche Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Leuchtkraft" und andere Male als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie die Benennung gewöhnlicher Farben, kann zur Debatte stehen. Zum Beispiel kann die Farbe "Karmesinrot" in hex-Werten je nach Quelle als `#990000` oder `#DC143C` beschrieben werden. In diesem Dokument werden wir die Terminologie verwenden, wie sie im W3C im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) definiert ist.

Bei der Arbeit mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da unterschiedliche Farbräume unterschiedliche Messsysteme abbilden.

Im Farbendruck hat Ihr Drucker wahrscheinlich Zyan, Magenta, Gelb und Schwarz (CMYK) Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellenlängen _entfernen_, indem sie nur den schmalen Bereich reflektieren, mit dem jede assoziiert wird. RGB ist ein additives Farbmodell, das verschiedene Anteile von rotem, grünem und blauem Licht hinzufügt.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}}, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, wandeln Browser die Werte zwischen diesen Farbnomen automatisch um. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Dennoch, aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Farbmessung, wird in diesem Dokument angenommen, dass die meisten Berechnungen im RGB-Farbraum erfolgen, und zwar speziell im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Datentyp](/de/docs/Web/CSS/color_value) ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK, unter anderem.

Bei digitalen Anwendungen liegt viele Technik historisch im RGB-Farbraum. Das RGB-Farbmodell wird um "Alpha" - RGBA - erweitert, um die Opazität einer Farbe angeben zu können. Andere Methoden zur Farbmessung umfassen Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch überwiegen Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) umfassen Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel zur Verwendung von OpenGL die Verwendung von RGBA anstelle von sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel seiner Verwendung unter "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbenwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} Variationen gibt, wie beispielsweise im {{Glossary("RGB", "RGB")}} Farbraum. Beispielsweise umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele für die CSS-Notationen, die zur Definition einer Farbe verwendet werden. Hier wird die Beispiel-Farbe für jede Notation als voll deckendes Magenta gezeigt:

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

Das erste Beispiel nutzt eine der definierten [benannten Farben](/de/docs/Web/CSS/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz angeben, wobei 0% "aus" (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl im Bereich von 0 bis 255 setzen.

Anschließend werden hex-Farbwerte angezeigt. Hexadezimal ist ein Nummerierungssystem mit der Basis 16, bei dem die ganze Zahl 0-255 durch zwei Ziffern dargestellt wird, die von 0 bis 15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 stehen. Daher ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das `#`-Symbol steht vor der Farbe, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einfach dargestellte Ziffern repräsentiert werden, die der Browser duplizieren wird. Somit ist `f00` das gleiche wie `ff0000`. Wenn eine vierte Zahlenreihe vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe weniger transparent und sichtbarer wird. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für voll deckendes.

Das Beispiel zeigt auch die alte Syntax sowohl für [`rgb()` als auch `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die alte Syntax für Farb-Funktionen besteht aus Komma-Getrennten Werten mit einer separaten Funktion, wenn der Alphakanal vorhanden ist. Neue Farb-Funktionen haben nur eine Syntax mit Leerzeichen-Getrennten (anstatt Komma-Getrennten) Werten, wobei der Alphakanal, falls vorhanden, vor einem Schrägstrich steht. Die moderne Syntax erlaubt die Verwendung von Zahlen und Prozenten und unterstützt das Schlüsselwort `none`; die komma-getrennte Altsyntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, und Lightness_ steht. HSL-Farbenwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die Farbe, die aus den Einstellungen erzeugt wird, ist immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die ein Drehfeld oder eine Steuerung zur Anpassung des Farbtons verwendet. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Luminanz_ beinhalten, was ein wesentlicher Aspekt ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, und Blackness_ steht. Sowohl bei `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Ohne Einheit wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), und [`color()`](/de/docs/Web/CSS/color_value/color) Farb-Funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Man schaut darauf, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben. Man kann sehen, dass die gleiche Farbe in einer kurzen Formatierung als dreistellige Hexadezimalnummer, die in einen RGB-Wert als sechsstellige Hexadezimalnummer umgewandelt wird, oder als RGBA-Wert, ausgedrückt in Prozentwerten, dargestellt werden kann.

RGB ist hardware-zentriert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Notation. Glücklicherweise wandeln Browser RGB automatisch in HSL um, und das Shift-Klicken auf Farben in Browser-Entwicklerwerkzeugen bietet Konvertierungsfunktionen.

Zusätzlich zu Entwicklerwerkzeugen können viele Werkzeuge RGB in HSL umwandeln und bieten sowohl die RGB-Hexadezimal- als auch CSS-Funktion-Syntax. Ein großartiges Beispiel für ein Tool, das Farben für Sie umwandelt, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zur Kontrastprüfung im Browser. Beachten Sie, dass Entwicklerwerkzeuge-Farbauswähler und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte zur Verfügung stellen.

![Farbauswähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie schon gesagt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen weiterer Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionale Farbdarstellung und die [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB noch der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Verbreitung.

In Bezug auf Barrierefreiheit sind jedoch derzeit hauptsächlich Standards und Richtlinien geschrieben, die den sRGB-Farbraum verwenden, insbesondere da er auf Farbkontrastverhältnisse angewendet wird.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Web-Inhalten gehen von einer sRGB-Codierung aus. Wenn nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums in Betracht ziehen. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [minimalen Kontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfragen von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) liefert Werte unter Verwendung der RGB-Dezimalreferenzskala oder durch `color(srgb...)`. Zum Beispiel gibt das Aufrufen von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: #ff0000` gesetzt, die berechnete Hintergrundfarbe als `rgb(255 0 0)` — die RGB-Dezimalreferenz, zurück. Wenn jedoch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet werden (z.B. `background-color: rgb(from blue 255 0 0)`), gibt das Aufrufen von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot / grün Farbenblindheit

Protanopie ist eine Farbenblindheit, bei der dem Auge die roten Zapfen fehlen; sRGB kann über grüne Zapfen wahrgenommen werden, wenn auch dunkler als normales Sehvermögen. Sowohl Protan (rote Defizit) als auch Deutan (grüne Defizit) Defizite verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklerwerkzeuge können helfen, Unterschiede in der Farbwahrnehmung direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Barrierefreiheitsinspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbedienfeld.

![Ausschnitt aus Firefox-Entwicklerwerkzeugen, der das Simulations-Popup zeigt](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um zugänglichen Inhalt zu schaffen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts die Luminanz beinhalten.

Darüber hinaus ist die "Form" des Textes selbst von Bedeutung. Dünne Buchstaben werden schwieriger zu lesen sein als dicke; alle Schriftarten benötigen Raum zu „atmen“, damit sie menschlich wahrgenommen werden können.

### Kontrast und Schriftgröße

Die [WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (entspricht ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (entspricht ungefähr `18,7px`) für `fett` Text. Dazu steht:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht es Autoren, eine größere Auswahl an Farboptionen für großen Text zu verwenden, was bei der Gestaltung von Seiten hilfreich ist, insbesondere Titel._

Während größerer Text nicht so viel Farbkontrast mit seinem Hintergrund erfordert wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird oft als 11,5pt bis 12pt angesehen, was am Bildschirm 16px entspricht. Zwar kann kleinerer Text lesbar sein — etwa zu 70% -Genauigkeit —, jedoch ist das nicht gut leserlich. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen gut leserlich. Jemand mit 20/40 benötigt doppelt so viel, etwa 31px Schriftgröße. Deshalb verlangen die WCAG-Richtlinien, dass Nutzer die Fähigkeit haben, jeden Text zu vergrößern.

Während ein zu kleiner Text schwer zu lesen ist, ist es auch ein Text, der zu groß ist. Bei Benutzern mit einem Sehvermögen von 20/20 sinkt die Lesegeschwindigkeit bei einer Textgröße größer als etwa 96px. Außerdem wird ein großer Text bei einer großen Diskrepanz der kleinsten und größten Schriftgröße auf einer Seite weniger gut leserlich, da die meisten Browser den gesamten Text vergrößern, wenn der Nutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheitszwecke: Je mehr Kontrast, desto besser. Dies ändert sich bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Mehr Informationen zum Farbkontrast in Animationen finden sich unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Auch sollten Symbole ausreichend Kontrast zur Wahrnehmung besitzen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Luminanz

Der Unterschied in der Luminanz einer Farbe ermöglicht es uns, den Kontrast zu sehen. Relative Luminanz wird in WCAG als "die relative Helligkeit eines jeden Punktes in einem Farbraum, normiert auf 0 für dunkelstes Schwarz und 1 für hellstes Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie auf den RGB-Farbraum angewendet wird, der eine ganze Zahl zwischen 0 und 255 ist. Weiß hat 100% relative Luminanz, Schwarz hat 0% relative Luminanz (in den meisten, aber nicht allen Publikationen). Nach dem obigen W3C-Standard bedeutet dies, dass Weiß, normiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was möglicherweise intuitiver ist.

Woher kommen also diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als einzelnes Byte, was einen Bereich von ganzzahlen zwischen 0 und 255 bedeutet.

Die Luminanzen der Primärfarben sind unterschiedlich. Zum Beispiel hat Gelb eine größere Luminanz als Blau. Dies wurde durch Design gemacht, _um die Weißeinstellung des Monitors zu erreichen_, gemäß dem NASA-Dokument, "[Luminanzkontrast in Farbengrafiken](https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist ohne seine Luminanzkomponente bedeutungslos, und sobald die Luminanz festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Für die menschliche Wahrnehmung ist ein Unterschied in der Luminanz wichtiger als ein Farbunterschied. Dies ist wichtig, da Luminanzkontrast die Entwicklung von Inhalten ermöglicht, die sogar Farbenblinde sehen können. Durch dieses Verständnis kann Luminanz so manipuliert werden, dass Farben, die aufgrund ihrer geringen Luminanz schwer zu erkennen sind, durch diese Farben gegen eine andere mit kontrastierender Luminanz sichtbar gemacht werden können. Eine interessante Studie der NASA über die Farbe Blau stellte beispielsweise fest, dass diese Farbe, die eine geringe Luminanz hat, lesbar gemacht werden kann, wenn _für einen ausreichenden Luminanzkontrast gesorgt wurde_ ([Aus dem Artikel, Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen zur relativen Luminanz sind keine beiläufigen. Glücklicherweise gibt es [online verfügbare Luminanz- und Kontrastprüfer](/www.siegemedia.com/contrast-ratio), und sogar Anleitungen, [wie man relative Luminanz berechnet](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Wahrnehmung von Farbe

Farbe ist unsere Wahrnehmung des schmalen Bandes sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf abgestimmt, einige Farben stärker als andere wahrzunehmen. Ungefähr 65% der Zapfen sind _am empfindlichsten_ für ein gelb/grün, reagieren aber auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grün empfindlich, und nur [5% sind blau empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weitaus weniger blauempfindliche Zapfen gibt als die beiden anderen Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen sich nicht zur Luminanz beitragen und wir weit weniger blaue Zapfen als rote oder grüne haben.

![Links ist ein Kegel-Mosaik normalen Sehens, und rechts jenes von jemandem mit Protanopie, bei dem rote Kegel fehlen.](conemosaics.jpg)

Links ist das zentrale Kegel-Mosaik normalen Sehens, und rechts jenes von jemandem mit Protanopie, einer Form von Farbenblindheit, bei der rote Kegel fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Kegel verbinden sich, um Luminanz zu erzeugen, die wir uns als Helligkeit/Dunkelheit ohne Rücksicht auf den Farbton vorstellen können. Getrennt ermöglichen die roten, grünen und blauen Kegel normales Sehen, um Millionen von Farben zu erkennen. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Luminanz getrennt von Farbe (Farbton und Farbigkeit) verarbeitet.

Luminanz sorgt für feine Sehdetails, einschließlich der Differenzierung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Luminanz bei. Bilddatenkompression nutzt diese Tatsache aus. Zum Beispiel sampelt der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Luminanz.

Für die Barrierefreiheit bedeutet dies, dass Luminanzkontrast für Text entscheidend ist. Farbe, als Farbton und Farbigkeit, ist wichtig, um Objekte wie unterschiedliche Linien auf einer Karte oder Balken in einem Diagramm zu _unterscheiden_.

Ein weiterer wesentlicher Punkt, den man berücksichtigen sollte, ist die Umgebung von Farbe oder Luminanz. Farben erscheinen anders, je nachdem, was sie umgibt. In dem folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextbezogene Farbwahrnehmung lässt sie anders erscheinen; Ihr Gehirn passt die Bildverarbeitung an die wahrgenommene Beleuchtung oder die Schatten an.

![Ein Bild eines Schachbretts, in dem identische Farben unterschiedlich erscheinen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben identische Farben auf Ihrem Monitor, erscheinen aber aufgrund des Kontexts anders. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbempfinden wird von den nahegelegenen Farben und anderen Merkmalen eines Designs oder Bildes beeinflusst. Dies macht die Vorhersage von Kontrast zu einer Herausforderung. Es ist nicht nur ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farbe genauso viel mit menschlicher Physiologie und Wahrnehmung im Gehirn zu tun hat wie mit dem Messen von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungslichtbedingungen die Fähigkeit zur Farbwahrnehmung und Farbanpassung beeinflussen. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an, wenn sie aus hellen Bereichen in dunkle und umgekehrt gehen. Dies liegt an der physiologischen Bauweise unserer Augen. Dies beeinflusst die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Die lokale Anpassung erfolgt direkt auf der "Seite", auf die ein Leser schaut. Zum Beispiel wird der genau gleiche Text in Blau innerhalb eines grauen "hervorgehobenen" Bereichs anders wahrgenommen, wenn er sich in einem schwarzen {{HTMLElement("div")}} befindet oder in einem weißen. Dies wird als _lokale_ Anpassung bezeichnet. Dieser Unterschied in der Fähigkeit, den Text zu erkennen, wird beeinflusst, selbst wenn die Umgebungsbeleuchtung eines Raumes nicht verändert wird.

Dies bedeutet, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern wollen, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an niedrige Luminanz ist langsam. Wenn Sie von draußen, wo die Sonne hell scheint, in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann einige Minuten dauern, bis Sie sich angepasst haben.

Die Lichtanpassung ist das Gegenteil. Vom dunklen Raum ins helle Sonnenlicht zu gehen ist schneller, kann aber auch wehtun.

Die Schlussfolgerung ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, dessen Umgebungsbedingungen eines Raumes sich ändern, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen konzentriert sich die meiste Aufmerksamkeit auf Luminanz, wenn versucht wird, genügend Kontrast zwischen Text und seinem Hintergrund zu gewährleisten oder die Möglichkeit von Anfällen bei Personen zu bewerten, die empfindlich auf lichtempfindliche Anfälle reagieren. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von Luminanz, verdient besondere Aufmerksamkeit hinsichtlich der Barrierefreiheit: das Konzept der Sättigung. Dies ist aufgrund seiner Fähigkeit, Anfälle bei denen auszulösen, die dafür anfällig sind, unabhängig von der Luminanz der Farbe. Wie im [besonderen Fall von Rot](#der_besondere_fall_von_rot) besprochen, stellte die [Epilepsie Stiftung](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf) fest, dass _unabhängig von der Luminanz ein Übergang zu oder von gesättigtem Rot auch als Risiko gilt_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Malkasten eines Künstlers sind, sind sie nicht so genau, wie es Farbausdrücke von einem Computerbildschirm sind.

Wenn es um Farbigkeit auf einen Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Zwar unterscheiden sich die Definitionen der Sättigung für jeden Farbraum, dennoch ist die Sättigung stets messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, diese gegebenenfalls zu konvertieren.

Die Farbräume, die am häufigsten in Bezug auf Photosensitivität diskutiert werden, sind die RGB-, HSL- und HSV-, auch bekannt als HSB-, Farbräume. Der HSV-Farbraum, der für _Hue_, _Saturation_, und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_, und _Brightness_ steht, werden in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Hue_, _Whiteness_, und _Blackness_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben in HSL eine Helligkeit von `0.5`, während in HWB sie einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit einem hex-Wert von `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei unterschiedliche "Farbtöne", gelten jedoch beide als eine gesättigte Farbe.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz zu einer Farbe beigefügt wird. Man kann die Sättigung reduzieren, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter auszuführen, kann die Helligkeit durch Zugabe von Weiß erhöht und dabei die Sättigung verringert werden. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot betrachtet.

### Sättigung und Luminanz

Es gibt einen Verlust an Sättigung, sowohl bei den Extremen der Luminanz wie auch bei den Extremen von Schwarz und Weiß. In NASA's [Auswirkungen von Luminanz auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Verlust der Sättigung bei niedrigen Luminanzen, und ebenso "… den Verlust der Sättigung bei hohen Luminanzen–die Farben konvergieren zu Weiß."

## Farbkombinationen

Kontrast allein ist nicht ausreichend, wenn es um Überlegungen zur Barrierefreiheit geht. Im Falle von Animationen sind bestimmte Farbkombinationen eher dazu geeignet, bei denen, die dafür anfällig sind, lichtempfindliche Anfälle zu verursachen, als andere. Zum Beispiel sind wechselnde Blitze zwischen Rot und Blau problematischer als wechselnde Blitze zwischen Grün und Blau. Es wurde vermutet, dass dies daran liegt, dass die „rotempfindlichen“ Kegel in unseren Augen, die dazu tendieren, sich um die Fovea (nahe dem Zentrum) zu verteilen, physisch an einem anderen Ort liegen als die „blauempfindlichen“ Kegel in unseren Augen, die sich weg von der Fovea und hin zu den Rändern befinden. Die elektrischen Signale von den Augen zum Gehirn müssen beim Verarbeiten dieser Informationen viel auflösen.

Einige Farben sind eher dazu geeignet, [epileptische Anfälle auszulösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexitäten, die den Gehirndynamiken zugrunde liegen, können durch bestimmte Farbkombinationen mehr als durch andere moduliert werden. Zum Beispiel verursacht ein rotes-blinkendes Stimulans eine größere kortikale Erregung als ein rotes-grünes oder blaues-grünes Stimulans.

Bestimmte Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können bei bestimmten Beeinträchtigungen stören. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie allein auf den Farbton, um Details zu unterscheiden. Ein angemessener Luminanzkontrast wird benötigt.
- Das Grün in einem Bildschirm macht den größten Teil der Luminanz (Licht) aus, wird also normalerweise ein bedeutender Teil der helleren Farben sein.

### Arbeiten mit Blau

Einige Menschen können nicht zwischen allen Farben unterscheiden. Einige Farben, wie reines Blau, haben eine niedrige Luminanz. Farben mit niedriger Luminanz sollten die dunkleren von beiden kontrastierenden Farben sein. Blau ist auch in der Auflösung sehr niedrig. Es gibt weitaus weniger blaue Konen, und sie sind in unserem peripheren Sehen verstreut und nicht in unserem zentralen Sehen vorhanden. Das menschliche Auge sieht Blau bei einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung der Farbe Blau:

- Reine Blautöne sollten normalerweise die dunkelsten von zwei Farben sein.
- Bei der Verwendung von Blau als die hellere der beiden Farben fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es sich an einer anderen Stelle auf der Retina fokussiert als rotes Licht, sodass eine reine rote und eine reine blaue Farbe, die sich direkt berühren, "flimmern" können, wenn sie nebeneinander liegen.

## Der besondere Fall von Rot

Nicht alle Farben ("Farbtöne") werden von unseren Gehirnen auf die gleiche Weise verarbeitet. Im Allgemeinen wirken sich die menschliche Physiologie und Psychologie unterschiedlich auf die Farbe Rot aus, im Gegensatz zu anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Beispielsweise wurde gezeigt, dass [einige Farben eher epileptische Anfälle verursachen](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) als andere. Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen hilft, die fotosensitiv sind. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Begriffe schaut, daher sollten Sie sich das folgende Bild ansehen, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rote Sättigung aus Wikimedia Commons svg gespeichert als png Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" verläuft von am wenigsten gesättigt auf der linken Seite zu am stärksten gesättigt auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot betrachtet werden._ Zum Beispiel ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, jedoch weniger hell als die zuvor beschriebenen Farben. Auf ähnliche Weise weist die Farbe `#8b0000` ebenfalls eine Sättigung von 100% auf.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Farbräumen, die häufig im Web-Design verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite zu "Rottönen" ist die Farbe "Karmesin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich aus Rotlicht mit Wellenlängen von mehr als 600nm besteht; der Artikel vermerkt besonders, dass "Karmesin" nahe dem extremen Spektrum liegt. Dies setzt es weit über die Standard-Spektren (RGB und CMYK) hinaus, und sein angegebener RGB-Wert ist nur eine mangelhafte Annäherung.

### Blinkendes gesättigtes Rot

Zusätzlich dazu, dass ein rotes Umfeld die kognitive Funktion bei Personen mit traumatischer Hirnverletzung beeinträchtigt, erfordert Farbe im Wellenlängenbereich des Roten besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei Tests des _Photosensitive epilepsy analysis tool_ fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf blinkendes gesättigtes Rot reagieren. (Siehe das Video, [Das Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/))

### Blinken und Anfälle

Kontinuierliches Blinklicht heller/dunkler mit Frequenzen von mehr als drei Blitzen pro Sekunde hat sich als Auslöser für photoinduzierte Anfälle bei manchen Menschen gezeigt. Es wurde auch festgestellt, dass spezifische, sehr regelmäßige, kontrastreiche Muster, wie z.B. parallele weiße und schwarze Streifen, ebenfalls Anfälle auslösen können.

Die Epilepsie-Stiftung von Amerika recherchierte über [licht- und musterinduzierte Anfälle](https://www.researchgate.net/publication/7615895_Photic-_and_Pattern-induced_Seizures_A_Review_for_the_Epilepsy_Foundation_of_America_Working_Group). Die Studie führte zu mehreren grundlegenden Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Abfolge von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.

2. Wenn Licht und Dunkel-Streifen angezeigt werden, sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, schwingen, blinken oder in Kontrast oder acht hell-dunkel Paare von Streifen reversieren, wenn das Muster nicht verändert oder kontinuierlich und gleichmäßig driftet in eine Richtung.

Die Konsens-Empfehlungen sind in diesem kurzen Papier, [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) enthalten. Einige zusätzliche Einblicke sind in diesem UK-Papier zu Richtlinien zur [Prävention von Anfällen.](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.106.9473&rep=rep1&type=pdf) verfügbar.

## Psychophysikalische Aspekte von Farbe

Farbe im Sinne von Farbton und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern—oder mindern.

### Beispiele für Farbwirkungen über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [Eine kulturübergreifende Studie zur affektiven Bedeutung von Farbe](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können sich ebenfalls positiv auf unsere Emotionen auswirken:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Manche Farben können unser Zeitgefühl beeinflussen:** [Farbe und Zeitwahrnehmung: Beweise für die zeitliche Überschätzung von blauen Stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen erheblichen Einfluss auf Helligkeit und blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote getönte Brillen können ein erhöhtes Glück oder Freude bieten:** [Durch "Rosarote" Brille sehen: Der Einfluss von Tönung auf die visuelle affektive Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekanntlich für signifikante Auswirkungen auf unser Verhalten:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Barrierefreiheit im Web für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Rote Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so sensitierend "eingestellt" auf Rot, dass Augenärzte einen Test damit aufstellen, um die Integrität des Sehnervs zu beurteilen.
- [Licht- und Musterinduzierte Anfälle: Expert Consensus of the Epilepsie Foundation of America Working Group](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.532.7063&rep=rep1&type=pdf)
