---
title: "Web-Accessibility: Verständnis von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

Das Verständnis von Farbe, Leuchtdichte und Sättigung ist wichtig für Design und Lesbarkeit für alle sehenden Nutzer, sie sind jedoch unerlässlich für Menschen mit eingeschränktem Sehvermögen, farblicher Sehschwäche und speziellen neurologischen, kognitiven und anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien definieren angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehbehinderte Nutzer und geben auch Richtlinien, um Nutzern mit farbinsensitiver Sicht, allgemein als "Farbenblindheit" bekannt, zu helfen. Das Verständnis der Farbe ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Erkrankungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung sind ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach zu sein. Dennoch ist es komplex, da die Farbwahrnehmung genauso viel mit der Physiologie des Auges und der Verarbeitung durch das menschliche Gehirn zu tun hat, wie mit dem von einem Computerbildschirm ausgestrahlten Licht.

### Umgebung und Wahrnehmung

Die Umgebung ist entscheidend. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. Im Hinblick auf die Barrierefreiheit haben bestimmte Farbkombinationen einen stärkeren Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder fancy, dass sie allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundraums um den Text, sogar Pixeldichten und noch viel mehr beeinflussen, wie Farben vom Bildschirm übertragen werden.

Der Abstand eines Betrachters zum Bildschirm, das Umgebungslicht, die Gesundheit der Augen und vieles mehr beeinflusst, wie diese Farbe vom Betrachter wahrgenommen wird. Wie der Betrachter die Farbe wahrnimmt, nachdem sie das Auge erreicht hat, ist noch ein anderes Thema und kann durch die allgemeine Gesundheit beeinflusst werden. Zum Glück gibt es [Media Queries](/de/docs/Web/CSS/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/@media/prefers-contrast) und [Farbgebung](/de/docs/Web/CSS/@media/prefers-color-scheme).

Wenn unterstützt, liefert die [Umgebungslichtsensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät, sodass eine Webseite auf jede Änderung der Lichtintensität reagieren und den Text entsprechend anpassen kann. Zusätzlich ermöglichen die genannten Media Queries Entwicklern, alternative Benutzererfahrungen bereitzustellen, wenn Benutzerpräferenzen bevorzugte Kontraststufen anzeigen und die Werte je nach Standort des Benutzers und der Art des verwendeten Bildschirms automatisch anpassen.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralsten und kritischsten Konzepte, um barrierefreie Webinhalte mit Farben zu erstellen. Leuchtdichte ist dabei besonders wichtig, da das Verständnis, was sie ist und wie sie eingesetzt wird, Barrierefreiheit sowohl für Farbblinde als auch für Menschen, die Farben wahrnehmen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Farbblinden, Dunkelheit von Helligkeit zu unterscheiden.

Die Leuchtdichte muss festgelegt werden, bevor der Kontrast entstehen kann. Beim Sprechen über Farbkontrast beinhalten W3C-Formeln die Leuchtdichte, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, richtig zu verstehen. Zum Beispiel ist "Sättigung" in manchen Kreisen als "Chroma" bekannt. In anderen werden "Chroma" und "Sättigung" als zwei verschiedene Konzepte angesehen. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und manchmal als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie die Benennung allgemeiner Farben, kann zur Debatte stehen. Beispielsweise kann die Farbe "Karmesinrot" von einigen als `#990000` und von anderen als `#DC143C` in Hex-Werten beschrieben werden. Für dieses Dokument verwenden wir die im W3C definierte Terminologie im [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).

Wenn Sie mit Farben arbeiten, ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da unterschiedliche Farbräume mit unterschiedlichen Messsystemen korrespondieren.

Beim Farbdrucken hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz (CMYK)-Tintenpatronen. CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Lichtwellenlängen _entfernen_, sodass nur der enge Bereich, mit dem jede in Verbindung steht, reflektiert wird. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blaulicht hinzufügt.

Derzeit ist der {{Glossary("RGB", "RGB-Farbraum")}} der vorherrschende Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert werden, konvertieren Browser automatisch Werte zwischen diesen Farbnotationssystemen. [CSS-Farbmodule](/de/docs/Web/CSS/CSS_colors) bieten zusätzliche Farbräume. Doch aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe wird in diesem Dokument davon ausgegangen, dass die meisten Berechnungen im RGB-Farbraum und ganz speziell im sRGB-Farbraum durchgeführt werden.

## Der sRGB Farbraum

Farbe kann auf viele Arten definiert werden, wie im [`<color>` Daten Typ](/de/docs/Web/CSS/color_value) ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, LAB und CMYK und weiteren.

Für digitale Belange hat sich ein Großteil der Technologie historisch im RGB-Farbraum entwickelt. Der RGB-Farbmodell wird erweitert, um "Alpha" — RGBA — einzuschließen, um die Opazität einer Farbe anzugeben. Andere Methoden zur Farbmessung umfassen Messungen unter Verwendung anderer Farbräume und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, insbesondere bei der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) integrieren die Unterstützung für die sRGB-Gammakurve, obwohl einige Artikel für OpenGL auf die Verwendung von RGBA statt sRGB hinweisen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel für seine Verwendung in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS Farbwerte

Es ist wichtig zu wissen, dass es Variationen gibt selbst innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}} Farbraum. Zum Beispiel gehören **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA** und weitere zu den Variationen des RGB-Farbraums.

Dies sind Beispiele für die CSS-Notationen, die zur Definition einer Farbe verwendet werden. Hier ist die Beispiel-Farbe für einen voll deckenden Magenta:

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

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0% ausgeschaltet (schwarz) ist und 100% den vollen Wert für diese Farbe darstellt. Die Werte sind in der Reihenfolge von Rot, Grün und Blau. Wir können auch die sRGB-Werte direkt durch eine Zahl von 0 bis 255 festlegen.

Gezeigt danach sind Hex-Farbwerte. Hexadezimal ist ein Zahlensystem mit Basis-16, wobei die ganzzahlige Zahl 0-255 durch zwei Ziffern dargestellt wird, die von 0-15 mit den Ziffern 0-9 und a-f für 10-15 reichen. Daher bedeutet `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol '#' steht vor der Farbe, um anzugeben, dass der Wert hexadezimal ist.

Wenn alle Werte Paare von identischen Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. Somit ist `f00` dasselbe wie `ff0000`. Wenn ein vierter Satz Zahlen vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz in Bezug auf den Opazitätsgrad der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe undurchsichtiger und daher weniger transparent ist. In den obigen Beispielen ist der Alpha-Wert `f`, `ff`, `1` und `100%` für vollständig deckend.

Das Beispiel zeigt auch die alte Syntax sowohl für [`rgb()` als auch für `rgba()`](/de/docs/Web/CSS/color_value/rgb#examples). Die alte Syntax für Farb-Funktionen trennt Kommata, mit einer separaten Funktion, wenn der Alpha-Kanal enthalten ist. Neue Farb-Funktionen haben nur eine Syntax mit wertgetrennten (statt kommaseparierten) Werten, wobei der Alpha-Kanal, falls vorhanden, von einem Schrägstrich gefolgt wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentsätzen und unterstützt das `none`-Schlüsselwort; die kommaseparierte ältere Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation und Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver als RGB-Werte angesehen. Die aus den Einstellungen resultierende Farbe ist noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/color_value/hsl) ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche mit einem Knopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_, nicht _Leuchtdichte_, einbeziehen, was eine bedeutende Überlegung ist.

Die nächsten Beispiele zeigen "HWB", was für _Hue, Whiteness, and Blackness_ steht. Sowohl bei `hsl()` als auch bei [`hwb()`](/de/docs/Web/CSS/color_value/hwb) kann der erste Wert ein [`<number>`](/de/docs/Web/CSS/number) oder ein [`<angle>`](/de/docs/Web/CSS/angle) Wert sein. Bei einheitenlosen Zahlen wird der Wert als `deg` (Grad) interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele demonstrieren die Repräsentation von Magenta mit den [`lab()`](/de/docs/Web/CSS/color_value/lab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color()`](/de/docs/Web/CSS/color_value/color) Farb-Funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Betrachtet man, wie der RGB-Farbraum verwendet wird, um die Farbe "Magenta" zu beschreiben, sieht man, dass dieselbe Farbe in einer Kurzform als dreistellige Hexadezimalzahl ausgedrückt wird, die in einen RGB-Wert als sechsstellige Hexadezimalzahl umgewandelt wird, die ebenfalls in denselben RGB-Wert konvertiert wird oder als RGBA-Wert in Prozent ausgedrückt wird.

RGB ist hardwareorientiert und reflektiert die Verwendung von CRTs. Viele Entwickler und Designer ziehen die intuitivere Notation von [`hsl()`](/de/docs/Web/CSS/color_value/hsl) vor. Glücklicherweise konvertieren Browser von RGB zu HSL automatisch, und ein Umschalt-Klicken auf Farben in den Entwicklerwerkzeugen der Browser bietet Konvertierungsfunktionen.

Zusätzlich zu Entwicklerwerkzeugen gibt es viele Tools, die für Sie RGB zu HSL konvertieren und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das für Sie Farben konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL-, RGB- und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass Entwicklerwerkzeuge, Farbwähler und dieses Tool alle WCAG-[Farbkontrast](https://webaim.org/resources/contrastchecker/)-Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie zuvor erwähnt, umfasst der [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors) das Hinzufügen zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch) funktionaler Farbnutzung und der [`lab()`](/de/docs/Web/CSS/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe spezifizieren können. Dennoch bleibt sRGB der Standard und bevorzugte Farbraum für die Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Wenn es um Barrierefreiheit geht, werden jedoch Standards und Richtlinien derzeit vorwiegend im sRGB-Farbraum geschrieben, insbesondere in Bezug auf Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heutigen Systeme, die Webinhalte ansehen, gehen von sRGB-Codierung aus. Sofern nicht angenommen wird, dass ein anderer Farbraum zur Verarbeitung und Anzeige von Inhalten verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums bewerten. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfrage von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) liefert Werte unter Verwendung der RGB-Dezimalreferenz-Skala oder über `color(srgb...)`. Beispielsweise gibt ein Aufruf von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: #ff0000` als Hintergrundfarbe die berechnete Hintergrundfarbe als `rgb(255 0 0)` zurück — die RGB-Dezimalreferenz. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/CSS_colors/Relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst es Farben in Bezug auf RGB, nicht wie das menschliche Auge Farben wahrnimmt.

### Rot/Grün-Farbblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann immer noch über grüne Zapfen wahrgenommen werden, wenn auch dunkler als bei normalem Sehen. Sowohl die Protan- (rotdefizient) als auch die Deutan- (gründefizient) Schwäche verursachen Schwierigkeiten bei der Unterscheidung _zwischen_ Rot und Grün.

Entwicklerwerkzeuge können helfen, Farbsehdifferenzen direkt in Ihrem Browser zu simulieren. Beispielsweise ermöglicht Firefox's Accessibility Inspector die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsfeld.

![Ausschnitt aus Firefox Entwicklerwerkzeugen mit Simulations-Pop-up](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein entscheidender Bestandteil, aber die Verwendung von Farbe ("Farbtönen") allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie bereits erwähnt, muss jede Kontrastberechnung die Leuchtdichte einbeziehen.

Darüber hinaus spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben sind schwieriger zu lesen als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG-Kontrast-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (ungefähr `18,7px`) für `fett` ist. Hierbei gilt:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. Dies ermöglicht Autoren eine breitere Farbauswahl für große Texte, was für das Design von Seiten, insbesondere für Titel, hilfreich ist._

Während größerer Text nicht so viel Farbkonstrast mit dem Hintergrund erfordert wie kleinerer Text, ist das Erhöhen der Schriftgröße keine Patentlösung.

"Normale" Druckschrift wird in der Regel als 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift möglicherweise lesbar ist — ein Benutzer kann Buchstaben zu ~70% richtig erkennen —, ist das keine Lesbarkeit. Eine Schriftgröße von 16px ist für Menschen mit normalem Sehvermögen im Allgemeinen lesbar. Jemand mit 20/40 benötigt das Doppelte, etwa eine Schriftgröße von 31px. Aus diesem Grund verlangen die WCAG-Richtlinien, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Obwohl zu klein dargestellter Text schwer lesbar ist, gilt dies auch für zu große Texte. Für Benutzer mit 20/20 Sehkraft, mit einer Schriftgröße größer als etwa 96px, sinkt die Lesegeschwindigkeit. Wenn es auf einer Seite einen großen Unterschied zwischen der kleinsten und größten Schriftgröße gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser alle Texte zoomen, sobald der Benutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheitszwecke, je mehr Kontrast, desto besser. Das ändert sich mit Animationen. "Sichere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zu Farbkontrasten in Animationen finden Sie unter [Drei Blitze oder darunter Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Zudem benötigen Symbole ausreichenden Kontrast für die Wahrnehmung. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Leuchtdichte

Die Differenz in der Leuchtdichte einer Farbe ermöglicht es uns, den Kontrast zu sehen. Relative Leuchtdichte wird im WCAG als "die relative Helligkeit eines beliebigen Punktes in einem Farbenraum, normalisiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann jedoch verwirrend sein, wenn sie im Bezug auf den RGB-Farbraum verwendet wird, der eine ganze Zahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Quellen). Bei Interpretation des oben stehenden W3C-Standards würde das bedeuten, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)`. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein könnte.

Woher kommen diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafikmaschinen die Farbkanäle als einzelnes Byte, was einen Bereich von ganzen Zahlen zwischen 0 und 255 bedeutete.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Zum Beispiel hat Gelb eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, _um die weiße Ausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://colorusage.arc.nasa.gov/design_lum_1.php)".

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtenkomponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis bestimmt werden.

Wo es um die menschliche Wahrnehmung geht, spielt ein Unterschied in der Leuchtdichte mehr eine Rolle als ein Farbunterschied. Das ist wichtig, da Leuchtdichtenkontrast die Entwicklung von Inhalten ermöglicht, die selbst Farbenblinde erkennen können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, durch das Platzieren dieser Farben gegen eine andere mit kontrastierender Leuchtdichte lesbarer gemacht werden könnten. Eine interessante Studie der NASA über die Farbe Blau stellt zum Beispiel fest, dass diese Farbe, die eine niedrige Leuchtdichte hat, lesbar gemacht werden kann, wenn _darauf geachtet wird, einen ausreichenden Leuchtdichtenkontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://colorusage.arc.nasa.gov/blue_2.php)).

Berechnungen für die relative Leuchtdichte sind keine beiläufigen. Glücklicherweise sind [online Leuchtdichte und Kontrastprüfer](https://www.siegemedia.com/contrast-ratio) verfügbar, und sogar Anleitungen, wie [relative Leuchtdichte berechnet werden kann](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance).

## Farbwahrnehmung

Farbe ist unsere Wahrnehmung des schmalen sichtbaren Lichtbands, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), genannt Zapfen, sind darauf eingestellt, einige Farben mehr als andere wahrzunehmen. Etwa 65% der Zapfen sind am _empfindlichsten_ für ein gelb/grün, reagieren jedoch auch auf Rot (wir nennen diese "rote" Zapfen). 30% sind grünempfindlich, und nur [5% sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Während es weit weniger blauempfindliche Zapfen gibt als die anderen beiden Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir viel weniger blaue Zapfen als rote oder grüne haben.

![Links ein Zapfenmosaik normaler Sicht und rechts das eines Menschen mit Protanopie, bei dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik normaler Sicht und rechts das eines Menschen mit Protanopie, einer Form von Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen vereinen sich, um Leuchtdichte zu schaffen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Hierbei ermöglichen die roten, grünen und blauen Zapfen die Wahrnehmung von Millionen von Farben im Rahmen der normalen Sicht. Für die Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte getrennt von der Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte ermöglicht feine Sehdetails, einschließlich der Differenzierung von Kanten und Text. Farbton und Farbigkeit tragen ein Drittel der Details der Leuchtdichte. Bei der Bilddatenkompression wird dieser Tatsache Rechnung getragen. Zum Beispiel verarbeitet der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farben mit einem Viertel der Auflösung der Leuchtdichte.

Wenn es um Barrierefreiheit geht, bedeutet dies, dass Leuchtdichtekontrast kritisch wichtig für Text ist. Farbe, wie im Farbton und in der Farbigkeit, ist wichtig für das _Unterscheiden_ von Elementen wie etwa Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, der in Betracht gezogen werden muss, ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. In der folgenden Abbildung sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontextabhängige Farbperzeption lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung anhand dessen an, was es als im Schatten sieht oder nicht.

![Ein Bild eines Schachbretts, in dem identische Farben unterschiedlich erscheinen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind auf Ihrem Monitor identische Farben, erscheinen jedoch aufgrund ihres Kontexts unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farbverständnis wird vom Kontext der Farben und anderen Eigenschaften eines Designs oder Bildes in der Nähe beeinflusst. Dies macht die Vorhersage des Kontrasts herausfordernd. Er ist nicht lediglich ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass Farben ebenso viel über die menschliche Physiologie und die Wahrnehmung im Gehirn sind, wie über die Lichtabstrahlung von einem Computerbildschirm. Ebenso ist es wichtig zu verstehen, dass die Umgebungsbeleuchtung die Fähigkeit zur Wahrnehmung von Farbe und Kontrast beeinflusst. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an Übergänge von Licht zu Dunkelheit und umgekehrt an. Dies ist auf die physiologische Beschaffenheit unserer Augen zurückzuführen. Dies wirkt sich auf die Fähigkeit eines Nutzers aus, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten von Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", auf die ein Leser schaut. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen genauen blauen Text mit einem grauen Highlight anders wahrnehmen, wenn er sich in einem schwarzen {{HTMLElement("div")}} oder in einem weißen befindet. Dies wird als _lokale_ Anpassung bezeichnet. Diese Differenz in der Fähigkeit, den Text zu erkennen, wird beeinflusst, obwohl sich die Beleuchtung des Raums nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Dunkeladaptation bei niedriger Leuchtdichte ist langsam. Wenn Sie von draußen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Die Anpassung dauert einige Minuten.

Lichtanpassung ist das Gegenteil. Der Übergang von einem dunklen Raum ins helle Sonnenlicht ist schneller, kann aber auch schmerzhaft sein.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei der sich die Umgebungsbedingungen eines Raumes geändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient in Diskussionen über Farben ("Farbtöne") und Barrierefreiheit besondere Beachtung. Im Allgemeinen liegt der Fokus mehr auf der Leuchtdichte, wenn es darum geht, genügend Kontrast zwischen Text und Hintergrund sicherzustellen oder die Möglichkeit eines Herbeiführens von Anfällen bei personen, die empfindlich gegenüber lichtempfindlichen Anfällen sind, zu bewerten. Ein Aspekt der Farbe ("Farbtöne"), unabhängig von der Leuchtdichte, verdient jedoch besondere Aufmerksamkeit, da er auf die Barrierefreiheit zutrifft: das Konzept der Sättigung. Dies geschieht aufgrund seiner Fähigkeit, Anfälle bei Personen zu verursachen, die für lichtempfindliche Anfälle anfällig sind, unabhängig von der Leuchtdichte der Farbe. Wie in [dem besonderen Fall von Rot](#der_sonderfall_von_rot) beschrieben, bemerkten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) darauf, dass _unabhängig von der Leuchtdichte, ein Übergang zu oder von einem gesättigten Rot ebenfalls ein Risiko darstellt_.

Sättigung wird manchmal als "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" in einem Malkasten eines Künstlers sind, sind sie nicht so genau wie Farbbestimmungen von einem Computerbildschirm.

Wenn es um Farbe auf einem Monitor geht, handelt es sich bei gesättigten Farben um einen bestimmten Wellenlänge. Während sich die Definition von Sättigung je nach Farbraum unterscheiden kann, ist Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn gegebenenfalls zu konvertieren.

Die Farbräume, die am häufigsten betrachtet werden, wenn es um Lichtempfindlichkeit geht, sind die Farbräume RGB, HSL und HSV, auch bekannt als HSB. Der HSV-Farbraum steht für _Farbton_, _Sättigung_ und _Helligkeit_, und das Synonym HSB steht für _Farbton_, _Sättigung_ und _Helligkeit_ und wird in CSS als [`hwb()`](/de/docs/Web/CSS/color_value/hwb) für _Farbton_, _Weiß_ und _Schwarz_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Beispielsweise haben gesättigte Farben eine Helligkeit von `0,5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird üblicherweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angezeigt. Zum Beispiel hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", werden aber beide als gesättigte Farben angesehen.

Sättigung ist keine Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung durch Hinzufügen von Weiß, Schwarz oder Grau zur Farbe verringern; um das Beispiel weiterzubringen, kann die Helligkeit durch Hinzufügen von Weiß erhöht werden, wodurch die Sättigung verringert wird. Ein typisches Beispiel ist es, Weiß zu Rot hinzuzufügen, um die Farbe Rosa zu erhalten. Rosa gilt als entsättigter Rotton.

### Sättigung und Leuchtdichte

An den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß gibt es einen Verlust von Sättigung. In NASA's [Einfluss der Leuchtdichte auf Sättigung](https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Sättigungsverlust bei niedrigen Leuchtdichten gibt, und auch, "…den Verlust an Sättigung bei hohen Leuchtdichten — die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein reicht nicht aus, wenn es um Barrierefreiheit geht. Im Falle von Animationen sind bestimmte Farbkombinationen eher dafür verantwortlich, bei sensibilisierten Menschen fotosensitive Anfälle zu verursachen als andere. Zum Beispiel sind wechselnde Blitze zwischen Rot und Blau problematischer als wechselnde Blitze zwischen Grün und Blau. Es wird vermutet, dass dies darauf zurückzuführen ist, dass die "rotempfindlichen" Zapfen unserer Augen, die sich dazu neigen, um die Fovea (nahe der Mitte) zu gruppieren, sich physisch an einer anderen Stelle befinden als die "blaunempfindlichen" Zapfen unserer Augen, die sich vom Fovea entfernt und in Richtung der Ränder befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu bewältigen, wenn die Informationen in unserem Gehirn verarbeitet werden.

Einige Farben sind eher in der Lage, [epileptische Anfälle zu verursachen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexe Dynamiken des Gehirns können durch einige Farbkombinationen mehr moduliert werden als durch andere. Ein roter-blaues Flimmer-Stimulus löst eine größere kortikale Erregung aus als ein roter-grüner oder blauer-grüner Stimulus.

Gewisse Farbkombinationen können auf einem Computermonitor oder Mobilgerät sehr problematisch sein, und einige Farbkombinationen können bei einigen Beeinträchtigungen Störungen verursachen. Die Kombination Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie ausschließlich auf den Farbton, um Details zu unterscheiden. Ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus und wird daher normalerweise ein wesentlicher Bestandteil der helleren Farben sein.

### Umgang mit Blau

Einige Menschen können nicht alle Farben differenzieren. Einige Farben, wie reines Blau, haben eine niedrige Leuchtdichte. Farben mit niedriger Leuchtdichte sollten die dunkler von kontrastreichen Farben sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt viel weniger blaue Zapfen, und sie sind in unserer peripheren Sicht verstreut und nicht in unserer zentralen Sicht vorhanden. Das menschliche Auge sieht Blau mit einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für die Verwendung von Blau:

- Reines Blau sollte typischerweise die dunklere der zwei Farben sein.
- Wenn Blau als die hellere der zwei Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur von blauem Licht führt dazu, dass es an einer anderen Stelle auf der Netzhaut fokussiert wird als rotes Licht, sodass eine reine rote Farbe und eine reine blaue Farbe, die unmittelbar nebeneinander und berühren, "flimmern" können, wenn sie direkt nebeneinander sind.

## Der Sonderfall von Rot

Nicht alle Farben ("Farbton") werden von unserem Gehirn in derselben Weise verarbeitet. Generell wird behauptet, dass die menschliche Physiologie und Psychologie durch die Farbe Rot unterschiedlich beeinflusst werden als von anderen Farben. Wir reagieren sowohl physiologisch als auch psychologisch auf Farben. Es wurde beispielsweise festgestellt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheits-Option an](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen mit Fotosensibilität helfen kann. Um die Graustufen-Einstellung nachzuahmen, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale) oder einer [`saturate()`](/de/docs/Web/CSS/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/filter-function).

### Gesättigtes Rot

"Gesättigtes Rot" ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologien schaut, daher sollten Sie das Bild unten betrachten, um das Konzept der Sättigung in einer Farbe zu veranschaulichen:

![Rotsättigung aus Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" schreitet von der am wenigsten gesättigten auf der linken Seite zur gesättigtesten auf der rechten Seite vor.

_Mehr als eine "rote" Farbe mag als "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine volle Sättigung, ist jedoch weniger hell als die oben genannten Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die häufig in der Webentwicklung verwendet werden, gut dargestellt werden. Laut der Wikipedia-Seite zu "Rottönen" ist die Farbe "Karmesinrot" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen über 600nm enthält; der Artikel macht die besondere Bemerkung, dass "Karmin" nahe am extremen Spektrum liegt. Dies platziert es weit über normalen Gamuts (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung.

### Blitzendes gesättigtes Rot

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinträchtigt, erfordert Farbe im roten Spektralwellenlängenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte beim Testen des _Photosensitive epilepsy analysis tool_ fest, dass die Häufigkeit von Anfällen viel höher war als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf flimmerndes gesättigtes Rot reagieren. (Sehen Sie sich das Video an, [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/))

### Blitzen und Anfälle

Kontinuierliches Blitzen heller/dunkler bei Geschwindigkeiten über drei Blitzen pro Sekunde wurde nachgewiesen, lichtempfindliche Anfälle bei einigen Menschen auszulösen. Es wurde auch festgestellt, dass bestimmte, sehr regelmäßige, kontrastreiche Muster wie parallele weiße und schwarze Streifen ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren einige grundlegende Richtlinien:

1. Einzel-, Doppel- oder Dreifachblitze pro Sekunde sind akzeptabel, aber eine Abfolge von Blitzen sollte nicht empfohlen werden, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Wenn helle und dunkle Streifen angezeigt werden, sollte das Muster nicht mehr als fünf helle-dunkle Streifenpaare enthalten, wenn die Streifen ihre Richtung ändern, oszillieren, blinken oder den Kontrast umkehren, oder acht helle-dunkle Streifenpaare, wenn das Muster nicht verändert oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Für weitere Empfehlungen siehe das Papier [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte der Farbe

Farbe als Farbtöne und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verstärken oder vermindern.

### Beispiele für die Wirkung von Farbe über das Sehen hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann auch positiven Einfluss auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen signifikanten Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rottönige Brillen können erhöhte Freude oder Glück bringen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt für seine signifikanten Auswirkungen auf unser Verhalten:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik.
- **Rote Umgebung:** Studien haben gezeigt, dass für Personen, die unter einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Web-Accessibility für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Red Desaturation](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot "eingestellt", dass Augenärzte einen Test damit durchführen, um die Unversehrtheit des Sehnervs zu beurteilen.
- [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
