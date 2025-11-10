---
title: "Barrierefreiheit im Web: Verstehen von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Während das Verständnis von Farbe, Leuchtdichte und Sättigung für das Design und die Lesbarkeit für alle sehenden Nutzer wichtig ist, sind sie für Menschen mit eingeschränktem Sehvermögen, Farbenblindheit und bestimmte neurologische, kognitive und andere Einschränkungen unerlässlich.

Barrierefreiheitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die Nutzern mit farbunempfindlichem Sehen, allgemein als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farben ist auch wichtig, um [Anfälle und andere physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit Gleichgewichtsstörungen oder anderen neurologischen Erkrankungen zu verhindern.

## Übersicht

Die Wahl der Farben und deren Verwendung ist ein bedeutender Bestandteil der Barrierefreiheit. An der Oberfläche erscheint das Thema einfach, aber es ist ein komplexes Thema, weil die Farbwahrnehmung genauso viel mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem Licht, das von einem Computerbildschirm ausgeht.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Die Farbwahrnehmung in einem gut beleuchteten Raum wird anders sein als die Wahrnehmung derselben Farbe auf demselben Bildschirm in einem dunklen Raum. Was die Barrierefreiheit betrifft, haben bestimmte Farbkombinationen mehr Einfluss als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriften sind so dünn oder verschnörkelt, dass sie allein schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrunds um den Text, sogar Pixeldichtungen und mehr, beeinflussen alle, wie Farbe vom Bildschirm übertragen wird.

Der Abstand eines Betrachters vom Bildschirm, der Umgebungs-Hintergrund, der Gesundheitszustand seiner Augen und mehr beeinflussen, wie diese Farbe beim Betrachter ankommt. Wie der Betrachter die Farbe wahrnimmt, nachdem sie seine Augen erreicht hat, ist noch eine andere Sache und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media), die es Entwicklern ermöglichen, Stile basierend auf Benutzerpräferenzen bereitzustellen, einschließlich [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farbdesign](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt das [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) Interface das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts rund um das Hostgerät zurück, sodass eine Webseite sich der Veränderung in der Lichtintensität bewusst ist und den Text entsprechend anpassen kann. Darüber hinaus ermöglichen die oben genannten Media Queries den Entwicklern, alternative Benutzererlebnisse anzubieten, wenn die Benutzerpräferenzen bestimmte Kontrastniveaus bevorzugen, indem die Ebene je nach Standort des Benutzers und der Art des verwendeten Bildschirms automatisch angepasst wird.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und wichtigsten Konzepte, um barrierefreie Webinhalte mit Farbe zu schaffen. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit sowohl für Farbenblinde als auch für Menschen, die Farben unterscheiden können, ermöglicht. Der Leuchtdichtekontrast erlaubt es Farbenblinden, Dunkel von Hell zu unterscheiden.

Die Leuchtdichte muss festgelegt werden, bevor der Kontrast bestimmt werden kann. Wenn von Farbkontrast gesprochen wird, beinhalten die W3C-Formeln die Leuchtdichte, nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um sie richtig zu erfassen. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt, in anderen sind "Chroma" und "Sättigung" zwei verschiedene Konzepte. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und manchmal als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches, wie das Benennen gewöhnlicher Farben, kann umstritten sein. Beispielsweise kann die Farbe "karminrot" von einigen mit Hex-Werten als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument verwenden wir die Terminologie, wie sie auf der CSS-Seite [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) definiert ist.

Wenn man mit Farben arbeitet, ist es wichtig zu wissen, in welchem "Farbraum" man arbeitet, da verschiedene Farbräume in unterschiedliche Messsysteme umgesetzt werden.

Im Farbdruck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarz-Tintenpatronen (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Farben spezifische Wellenlängen des Lichts _entfernen_, sodass nur der schmale Bereich reflektiert wird, der mit ihnen assoziiert ist. RGB ist ein additives Farbmodell, das unterschiedliche Anteile von Rot-, Grün- und Blautönen addiert.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser automatisch Werte zwischen diesen Farbnotationen. [CSS-Farbmodule](/de/docs/Web/CSS/Guides/Colors) bieten zusätzliche Farbräume. Aufgrund der aktuellen Dominanz des RGB-Farbraums bei der Messung der Farbausgabe gehen die meisten Berechnungen in diesem Dokument davon aus, dass sie sich im RGB-Farbraum befinden, und sehr spezifisch im sRGB-Farbraum.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie es im [`<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, Lab und CMYK, neben anderen.

Für digitale Belange befand sich ein Großteil der Technologie historisch im RGB-Farbraum. Das RGB-Farbmodell wird auf "Alpha" erweitert — RGBA — um die Spezifikation der Deckkraft einer Farbe zu ermöglichen. Andere Methoden zur Farbmessung umfassen Messungen mit anderen Farbräumen und werden in modernen Displays und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://de.wikipedia.org/wiki/OpenGL) und [Direct3D](https://de.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl einige Artikel für die OpenGL-Verwendung auf RGBA anstelle von sRGB verweisen. WebGL liegt normalerweise im RGBA-Format vor; sehen Sie ein Beispiel dafür in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es sogar innerhalb eines {{Glossary("color_space", "Farbraums")}} wie des {{Glossary("RGB", "RGB")}}-Farbraums Variationen gibt. Beispielsweise umfassen Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist das Beispiel einer voll deckenden Magenta-Farbe:

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

/* by Lab representation of the sRGB value */
color: lab(60 93.56 -60.5);
color: lab(60 93.56 -60.5 / 1);

/* representation in the CIELAB color spaces */
color: oklch(0.7 0.32 328.37);
color: oklch(0.7 0.32 328.37 / 1);

/* color() function in the XYZ color space */
color: color(xyz-d65 0.59 0.28 0.96);
color: color(xyz-d65 0.59 0.28 0.96 / 1);
```

Das erste Beispiel verwendet eine der definierten [benannten Farben](/de/docs/Web/CSS/Reference/Values/named-color).

Wir können die sRGB-Werte direkt als Prozentsatz festlegen, wobei 0 % ausgeschaltet (schwarz) und 100 % der volle Wert für diese Farbe ist. Die Werte stehen in der Reihenfolge von Rot, Grün und Blau. Wir können auch die sRGB-Werte direkt mit einer Zahl von 0 bis 255 einstellen.

Danach werden Hex-Farbwerte gezeigt. Hexadezimal ist ein Nummerierungssystem mit Basis 16, wobei die Ganzzahl von 0 bis 255 durch zwei Ziffern dargestellt wird, die von 0 bis 15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Daher ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das Symbol `#` geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. So ist `f00` das gleiche wie `ff0000`. Wenn ein viertes Zahlenpaar vorhanden ist, ist dieser Wert das A in RGBA, der Alphakanal, der die Transparenz in Bezug auf den Deckkraftwert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender und daher weniger transparent ist. In den obigen Beispielen ist der Alphawert `f`, `ff`, `1` und `100%` für völlig deckend.

Das Beispiel zeigt auch die veraltete Syntax für [`rgb()` und `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). Die veraltete Syntax für Farb-Funktionen ist kommasepariert, mit einer separaten Funktion, wenn der Alphakanal einbezogen wird. Neue Farb-Funktionen haben nur eine Syntax mit durch Leerzeichen getrennten (anstatt durch Kommas getrennten) Werten, wobei der Alphakanal, falls vorhanden, durch einen Schrägstrich vorangestellt wird. Moderne Syntax erlaubt das Mischen von Zahlen und Prozenten und unterstützt das Schlüsselwort `none`; die kommaseparierte veraltete Syntax nicht.

Die folgenden Beispiele zeigen "HSL", was für _Hue, Saturation, and Lightness_ steht. HSL-Farbwerte werden von vielen als intuitiver betrachtet als RGB-Werte. Die Farbe, die durch die Einstellungen erzeugt wird, liegt immer noch im sRGB-Farbraum, aber [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) ist für viele eine intuitive Syntax. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche mit einem Drehknopf oder einer kreisförmigen Steuerung zu erstellen, um den Farbton einzustellen. Beachten Sie, dass HSL-Farben _Helligkeit_, nicht _Leuchtdichte_ einbeziehen, was ein bedeutender Aspekt ist.

Das nächste Beispiel zeigt "HWB", das für _Hue, Whiteness, and Blackness_ steht. Sowohl bei `hsl()` als auch [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) kann der erste Wert eine [`<number>`](/de/docs/Web/CSS/Reference/Values/number) oder eine [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) sein. Wenn keine Einheit angegeben ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb-Funktionen und Farbräume. Die letzten drei Beispiele zeigen die Darstellung von Magenta mittels der [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), und [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Farb-Funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb des gleichen Farbraums auf viele Arten ausgedrückt werden. Wenn man sich ansieht, wie der RGB-Farbraum verwendet wird, um die Farbe "magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer dreistelligen Kurzform-Hexzahl ausgedrückt werden kann, die in einen RGB-Wert als sechsstelliges Hexzahl umgewandelt wird, das auch in denselben RGB-Wert umgewandelt wird, oder als RGBA-Wert, der in Prozenten ausgedrückt wird.

RGB ist hardware-orientiert und spiegelt die Verwendung von CRTs wider. Viele Entwickler und Designer bevorzugen die Intuitivität der [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Notation. Glücklicherweise konvertieren Browser automatisch von RGB zu HSL, und das Shift-Klicken auf Farben in den Entwickler-Tools des Browsers bietet Konvertierungsfunktionen.

Zusätzlich zu den Entwickler-Tools können viele Werkzeuge RGB zu HSL für Sie konvertieren und sowohl die RGB-Hexadezimal- als auch die CSS-Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Werkzeug, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zur Überprüfung des Kontrasts im Browser. Beachten Sie, dass die Farb-Picker der Entwickler-Tools und dieses Tool alle WCAG [Farbkontrast](https://webaim.org/resources/contrastchecker/) Werte bereitstellen.

![Farbwähler mit HSL und RGB, mit Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) das Hinzufügen zusätzlicher Farbräume, einschließlich [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) funktionale Farbnomenklatur sowie die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Farbkoordinatensysteme, die jede sichtbare Farbe angeben können. Dennoch ist sRGB immer noch der Standard- und bevorzugte Farbraum für Barrierefreiheit aufgrund seiner Allgegenwärtigkeit.

Hinsichtlich der Barrierefreiheit sind Standards und Richtlinien derzeit hauptsächlich im sRGB-Farbraum geschrieben, insbesondere was die Farbkontrastverhältnisse betrifft.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Web-Inhalten gehen von einer sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Anzeige des Inhalts verwendet wird, sollten Autoren eine Bewertung im sRGB-Farbraum vornehmen. Wenn andere Farbräume verwendet werden, sollten die Prinzipien der [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) angewendet werden.

### Abfrage von Farbwerten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte unter Verwendung der RGB Decimal Reference Skala oder via `color(srgb...)` zurück. Beispielsweise gibt das Aufrufen von `Window.getComputedStyle()` auf einem `<div>` mit `background-color: red` die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurück — die RGB Decimal Reference. Wenn jedoch [relative Farben verwendet werden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), gibt das Aufrufen von `Window.getComputedStyle()` die berechnete Hintergrundfarbe als `color(srgb 1 0 0)` zurück. Da es an Computer-Hardware gebunden ist, misst `Window.getComputedStyle()` Farben in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot / grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine roten Zapfen hat; sRGB kann immer noch über grüne Zapfen wahrgenommen werden, allerdings dunkler als beim normalen Sehen. Sowohl Protan (rot schwächen) als auch Deutan (grün schwächen) Schwächen verursachen Schwierigkeiten, _zwischen_ Rot und Grün zu unterscheiden.

Entwickler-Tools können helfen, Farbunterschiede direkt in Ihrem Browser zu simulieren. Zum Beispiel ermöglicht der Barrierefreiheitsinspektor von Firefox, Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust direkt im Barrierefreiheitsbereich zu simulieren.

![Ausschnitt der Firefox-Entwickler-Tools, der das Simulations-Pop-up zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtöne") ist ein kritischer Bestandteil, aber die Verwendung von Farbe ("Farbton") allein reicht nicht aus, um barrierefreie Inhalte zu schaffen. Wie bereits erwähnt, muss jede Berechnung des Kontrasts die Leuchtdichte umfassen.

Darüber hinaus spielt die "Form" von Text selbst eine Rolle. Dünne Buchstaben sind schwerer zu lesen als dicke; alle Schriften benötigen Platz, um für menschliche Wahrnehmung "zu atmen".

### Kontrast und Schriftgröße

[WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (ungefähr `24px`) oder größer ist, wenn {{cssxref('font-weight')}} auf `normal` gesetzt ist, und `14pt` (ungefähr `18.7px`) für `fett` Text. Es heißt:

_Text, der größer ist und breitere Zeichenstriche hat, ist bei geringem Kontrast leichter zu lesen. Daher sind die Kontrastanforderungen für größeren Text niedriger. Dies ermöglicht es Autoren, eine größere Auswahl an Farbwahl für großen Text zu verwenden, was hilfreich für das Design von Seiten, besonders Titeln, ist._

Während größerer Text nicht so viel Farbkontrast zu seinem Hintergrund benötigt wie kleinerer Text, ist die Erhöhung der Schriftgröße kein Allheilmittel.

"Normaler" Druck wird in der Regel mit 11,5pt bis 12pt angesehen, was auf dem Bildschirm 16px entspricht. Während kleinere Schrift leserlich sein kann — ein Benutzer kann Buchstaben mit einer Genauigkeit von \~70% erkennen — ist das nicht gut lesbar. Eine Schriftgröße von 16px ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 benötigt das Doppelte, etwa 31px Schrift. Dies ist der Grund, warum die WCAG-Richtlinien erfordern, dass Benutzer die Möglichkeit haben, jeden Text zu vergrößern.

Während ein zu klein dargestellter Text schwer zu lesen ist, gilt das Gleiche auch für zu großen Text. Für Benutzer mit 20/20-Sehvermögen nimmt die Lesegeschwindigkeit ab, wenn die Schriftgröße 96px überschreitet. Auch wenn es einen großen Unterschied zwischen der kleinsten und größten Schriftgröße auf einer Seite gibt, wird der größere Text weniger lesbar, wenn Benutzer den kleineren Text auf der Seite vergrößern, da die meisten Browser den gesamten Text vergrößern, wenn der Benutzer den Text vergrößert.

Im Allgemeinen gilt für Barrierefreiheitszwecke: Je mehr Kontrast, desto besser. Das ändert sich bei Animationen. "Sichere" Animation bedeutet Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zu Farbkontrast in Animationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Beachten Sie auch, dass Symbole ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu sehen. Die relative Leuchtdichte wird in WCAG als "die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normalisiert auf 0 für tiefschwarzes Schwarz und 1 für hellstes Weiß" definiert.

Diese Aussage ist natürlich korrekt, kann aber verwirrend sein, wenn sie im Zusammenhang mit dem RGB-Farbraum verwendet wird, der eine ganze Zahl zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen Literaturquellen). Die Interpretation für den oben genannten W3C-Standard bedeutet, dass Weiß, normalisiert auf 1, einen RGB-Wert von `rgb(255 255 255)` hätte, und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hätte. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher kommen also diese Zahlen von 0 bis 255? Historisch gesehen speicherten Grafik-Engines die Farbkanäle als ein einziges Byte, was einen Bereich ganzer Zahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichten der Primärfarben sind unterschiedlich. Gelb hat beispielsweise eine größere Leuchtdichte als Blau. Dies wurde aus Designgründen gemacht, _um die Weißausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farbkontrastverhältnis ist ohne seine Leuchtdichtekomponente bedeutungslos, und wenn die Leuchtdichte festgelegt ist, kann das Farbkontrastverhältnis festgelegt werden.

Was die menschliche Wahrnehmung betrifft, zählt ein Unterschied in der Leuchtdichte mehr als ein Farbunterschied. Dies ist wichtig, da der Leuchtdichtekontrast die Entwicklung von Inhalten ermöglicht, die selbst von Menschen mit Farbenblindheit gesehen werden können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer geringen Leuchtdichte schwer zu sehen sind, lesbarer gemacht werden können, indem diese Farben gegen eine andere mit kontrastierender Leuchtdichte platziert werden. Eine interessante Studie der NASA über die Farbe Blau beispielsweise stellte fest, dass diese Farbe, die eine geringe Leuchtdichte hat, lesbar gemacht werden kann, wenn _darauf geachtet wird, einen angemessenen Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für relative Leuchtdichte sind keine beiläufigen. Glücklicherweise gibt es [Online-Checker für Leuchtdichte und Kontrast](https://www.siegemedia.com/contrast-ratio), und sogar Anleitungen, wie man [relative Leuchtdichte berechnet](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Wahrnehmung von Farben

Farbe ist unsere Wahrnehmung des schmalen Spektrums von sichtbarem Licht von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit gegenüber diesen verschiedenen Farbtönen ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf abgestimmt, einige Farben mehr als andere wahrzunehmen. Etwa 65 % der Zapfen sind _am meisten_ empfindlich für gelb/grün, reagieren aber auch auf rot (wir nennen diese "rote" Zapfen). 30 % sind für Grün empfindlich und nur [5 % sind für Blau empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger blaue Zapfen gibt als die beiden anderen Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringeren Zahlen ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Links ist ein Kon-Mosaik des Standardsehvermögens zu sehen und rechts das eines Protanopie-Betroffenen, dem die roten Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Kon-Mosaik des Standardsehvermögens zu sehen, und rechts das eines Protanopie-Betroffenen, einer Form von Farbsehschwäche, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu erzeugen, die wir als Helligkeit und Dunkelheit ohne Rücksicht auf den Farbton betrachten können. Getrennt davon ermöglichen die roten, grünen und blauen Zapfen das Standardsehen, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist es wichtig, zu wissen, dass unser Gehirn Leuchtdichte separat von der Farbe (Farbton und Farbenfülle) verarbeitet.

Leuchtdichte sorgt für feine Sehdetails, einschließlich Unterscheidung von Kanten und Text. Farbton und Farbenfülle tragen ein Drittel der Details der Leuchtdichte. Die Bilddatenkompression nutzt diese Tatsache aus. Als Beispiel verwendet der [h.264 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) die Farbabtastung mit einem Viertel der Auflösung der Leuchtdichte.

Für die Barrierefreiheit bedeutet dies, dass der Leuchtdichtekontrast für Text von entscheidender Bedeutung ist. Farbe, im Sinne von Farbton und Farbenfülle, ist wichtig für das _Unterscheiden_ von Elementen, wie verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer bedeutender Punkt, den es zu berücksichtigen gilt, ist die Farbe oder die Leuchtdichte, die eine Farbe umgibt. Farben sehen je nach Umgebungsfarben unterschiedlich aus. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. kontextabhängige Farbwahrnehmung lässt sie unterschiedlich erscheinen; die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es für im Schatten oder nicht im Schatten hält.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, wenn sie im Schatten stehen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie scheinen unterschiedlich aufgrund des Kontexts. (Bild D.Lyon)

Unser Kontrastempfinden, unsere Helligkeits- und Farbwahrnehmung werden durch den Kontext der nahegelegenen Farben und andere Merkmale eines Designs oder Bildes beeinflusst. Das macht die Vorhersage des Kontrasts herausfordernd. Es ist nicht nur ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend lässt sich sagen, dass es bei Farbe genauso um die menschliche Physiologie und die Wahrnehmung im Gehirn geht wie um die Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungsbeleuchtung die Fähigkeit beeinflusst, Farbe und Kontrast wahrzunehmen. Licht und seine Messungen sind linear, aber das menschliche Sehen und die Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an, wenn sie von hellen Bereichen in dunkle und umgekehrt gehen. Dies liegt an der physiologischen Weise, wie unsere Augen aufgebaut sind. Dies beeinflusst die Fähigkeit eines Benutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten der Anpassung finden statt: lokale Anpassung und Anpassung an eine Umgebungsumgebung.

Lokale Anpassung findet direkt auf der "Seite" statt, auf die ein Leser schaut. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, werden Ihre Augen diesen genauen blauen Text mit einem grauen Highlight anders wahrnehmen, wenn er in einem schwarzen {{HTMLElement("div")}} oder einem weißen ist. Dies wird _lokale_ Anpassung genannt. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, auch wenn sich die Umgebungsbeleuchtung im Raum nicht ändert.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Die Dunkelanpassung an geringe Leuchtdichte ist langsam. Wenn Sie von draußen hereinkommen, wo die Sonne hell ist, und in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann einige Minuten dauern, sich daran anzupassen.

Die Lichtanpassung ist das Gegenteil. Der Übergang von einem dunklen Raum in helles Sonnenlicht ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, in denen sich die Umgebungsbedingungen eines Raums geändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)-Media-Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen liegt der meiste Fokus auf Leuchtdichte, wenn versucht wird, genügend Kontrast zwischen Text und seinem Hintergrund sicherzustellen oder die Möglichkeit von Anfällen bei Menschen, die gegenüber lichtempfindlichen Anfällen empfindlich sind, zu bewerten. Ein Aspekt von Farbe ("Farbtöne"), unabhängig von Leuchtdichte, verdient besondere Aufmerksamkeit, da er sich auf die Barrierefreiheit auswirkt: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei denjenigen, die gegenüber lichtempfindlichen Anfällen empfänglich sind, Anfälle zu verursachen, unabhängig von der Leuchtdichte der Farbe. Wie in [dem besonderen Fall von Rot](#the_special_form_of_red) diskutiert, wurde von [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) festgestellt, dass "unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen wird".

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl dies gute Definitionen für "Pigmente" im Farbsatz eines Künstlers sind, sind sie als Farbbeschreibungen von einem Computerbildschirm nicht so genau.

Wenn es um Farbe auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellenlänge. Wenn auch die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit zu sein, ihn gegebenenfalls zu konvertieren.

Die Farbräume, die häufig in Bezug auf Lichtempfindlichkeit in Betracht gezogen werden, sind die RGB-, HSL- und HSV-, auch bekannt als HSB-, Farbräume. Der HSV-Farbraum, der für _Hue_, _Saturation_ und _Value_ steht, und das Synonym HSB, das für _Hue_, _Saturation_ und _Brightness_ steht, sind in CSS als [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) für _Hue_, _Whiteness_ und _Blackness_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum man arbeitet. Beispielsweise haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Die Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die jeweilige Farbe angezeigt. Beispielsweise hat ein gesättigtes Rot mit dem Hex-Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem Hex-Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Sie sind zwei verschiedene "Farbtöne", werden aber beide als gesättigte Farben angesehen.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt ist. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiterzuführen, kann die Helligkeit erhöht werden, indem man Weiß hinzufügt und so die Sättigung reduziert. Ein typisches Beispiel ist die Zugabe von Weiß zu Rot, um die Farbe Pink zu erhalten. Pink wird als entsättigtes Rot angesehen.

### Sättigung und Leuchtdichte

Es gibt einen Verlust an Sättigung an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß. In NASAs [Effekt der Leuchtdichte auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) weisen sie darauf hin, dass es einen Verlust an Sättigung bei niedrigen Leuchtdichten gibt, und auch, „... der Verlust der Sättigung bei hohen Leuchtdichten – die Farben konvergieren zu Weiß.“

## Farbkombinationen

Kontrast allein reicht nicht aus, wenn es um Zugänglichkeitsüberlegungen geht. Im Fall von Animation sind bestimmte Farbkombinationen eher als andere in der Lage, lichtempfindliche Anfälle bei denjenigen zu verursachen, die dafür empfänglich sind. Beispielsweise ist ein Wechselblitzen zwischen Rot und Blau problematischer als ein Wechsel zwischen Grün und Blau. Es wird vermutet, dass dies daran liegt, dass die "roten" empfindlichen Zapfen unserer Augen, die sich tendenziell um die Fovea (nahe der Mitte) clustern, physisch an einem anderen Ort als die "blauen" empfindlichen Zapfen unserer Augen sind, die sich weg von der Fovea und zu den Rändern hin befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel zu lösen, während die Informationen im Gehirn verarbeitet werden.

Einige Farben sind eher in der Lage, [epileptische Anfälle auszulösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die Komplexitäten, die den Dynamiken des Gehirns zugrunde liegen, können durch einige Farbkombinationen mehr als durch andere moduliert werden. Beispielsweise verursacht ein Rot-Blau-Flimmerreiz eine größere kortikale Erregung als ein Rot-Grün oder Blau-Grün-Reiz.

Bestimmte Farbkombinationen können auf einem Computermonitor oder mobilen Gerät sehr problematisch sein, und einige Farbkombinationen können sich störend auf einige Beeinträchtigungen auswirken. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich niemals nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichtekontrast ist erforderlich.
- Das Grün in einem Monitor macht den größten Teil der Leuchtdichte (Licht) aus, also wird es normalerweise einen bedeutenden Teil der helleren Farben ausmachen.

### Arbeiten mit Blau

Einige Leute können nicht alle Farben unterscheiden. Einige Farben, wie reines Blau, sind niedrig in Leuchtdichte. Farben, die wenig Leuchtdichte haben, sollten die dunkleren der kontrastierenden sein. Blau hat auch eine sehr niedrige Auflösung. Es gibt weit weniger blaue Zapfen, und sie sind in unserem peripheren Sehen verstreut und in unserem zentralen Sehen nicht vorhanden. Das menschliche Auge sieht Blau in einer niedrigeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien für den Gebrauch von Blau:

- Reines Blau sollte typischerweise die dunkelste von zwei Farben sein.
- Wenn Blau als die hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts lässt es an einem anderen Punkt auf der Netzhaut fokussieren als das Rot, so dass eine reine rote und eine reine blaue Farbe, die unmittelbar nebeneinander stehen und sich berühren, "schimmern" können, wenn sie nebeneinander sind.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbton") werden von unserem Gehirn auf die gleiche Weise verarbeitet. Die menschliche Physiologie und Psychologie wird von der Farbe Rot im Allgemeinen anders beeinflusst als von anderen Farben. Wir reagieren sowohl physisch als auch psychologisch auf Farben. Beispielsweise wurde gezeigt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheitsoption](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options) an, was Menschen helfen kann, die fotosensitiv sind. Um die Graustufeneinstellung zu imitieren, verwenden Sie die CSS {{cssxref("filter")}}-Eigenschaft mit einer [`grayscale()`](/de/docs/Web/CSS/Reference/Values/filter-function/grayscale) oder [`saturate()`](/de/docs/Web/CSS/Reference/Values/filter-function/saturate) [`<filter-function>`](/de/docs/Web/CSS/Reference/Values/filter-function).

### Gesättigtes Rot

„Gesättigtes Rot“ ist ein besonderer, gefährlicher Fall, und dafür gibt es spezielle Tests.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologie schaut. Betrachten Sie daher das folgende Bild als Illustration des Konzepts der Sättigung in einer Farbe:

![Rote Sättigung von Wikimedia Commons svg als png gespeichert Attribution: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" wandert von am wenigsten gesättigt auf der linken Seite bis am meisten gesättigt auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als ein "gesättigtes" Rot angesehen werden._ Beispielsweise ist die Farbe `#990000` bei `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Ebenso hat die Farbe `#8b0000` ebenfalls eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können gut im RGB-Spektrum oder anderen Spektren dargestellt werden, die in der Webentwicklung gängig sind. Laut Wikipedia-Seite „Töne von Rot“ ist die Farbe „Karmin“ ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen über 600 nm enthält; der Artikel macht die besondere Anmerkung, dass „Karmin“ nahe am Extrem des Spektrums ist. Dies liegt weit jenseits der Standard-Gamuts (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Näherung."

### Gesättigtes rotes Blitzen

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion bei Menschen mit traumatischen Hirnverletzungen beeinflusst, erfordert Farbe im roten Spektrumsbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden, beim Testen des _Photosensitive epilepsy analysis tool_, stellte fest, dass die Anfallsraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [Das Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blitzen und Anfälle

Kontinuierliches Blitzen heller/dunkler bei Frequenzen von mehr als drei Blitzen pro Sekunde hat gezeigt, dass es photische Anfälle bei manchen Menschen auslösen kann. Außerdem wurde festgestellt, dass spezifische, sehr regelmäßige, hochkontrastierte Muster wie parallele weiße und schwarze Streifen ebenfalls Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) geben mehrere grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Folge von mehr als drei Blitzen in einer Sekunde wird nicht empfohlen.
2. Beim Anzeigen von hellen und dunklen Streifen sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren, oder acht Hell-Dunkel-Paare, wenn das Muster sich nicht ändert oder kontinuierlich und gleichmäßig in eine Richtung driftet.

Weitere Empfehlungen finden Sie im Artikel [Photic- und Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farbe im Sinne von Tönen und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erfahrungen verbessern oder verschlechtern.

### Beispiele für den Einfluss von Farbe über die Vision hinaus

- **Farbe kann kulturell abhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch einen positiven Einfluss auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen erheblichen Einfluss auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können erhöhte Freude oder Zufriedenheit bringen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischen Hirnverletzungen [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS [`color`](/de/docs/Web/CSS/Reference/Properties/color) Eigenschaft
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- [Web-Barrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Red Desaturation](https://www.smartoptometry.app/red-desaturation/), das menschliche Auge ist so sensibel auf "rot" abgestimmt, dass Augenärzte einen Test damit entwickelt haben, der die Integrität des Sehnervs bewertet.
- [Photic- und pattern-induced seizures: ekspert consensus of the Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
