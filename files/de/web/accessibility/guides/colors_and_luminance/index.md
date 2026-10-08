---
title: "Barrierefreiheit im Web: Farben und Luminanz verstehen"
short-title: Farben und Luminanz
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Farben, Luminanz und Sättigung zu verstehen, ist für die Gestaltung und Lesbarkeit für alle sehenden Nutzer wichtig. Besonders entscheidend ist es jedoch für Menschen mit eingeschränktem Sehvermögen oder Farbsehschwäche sowie für Menschen mit bestimmten neurologischen, kognitiven oder anderen Beeinträchtigungen.

Barrierefreiheitsrichtlinien legen einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Menschen mit eingeschränktem Sehvermögen fest. Sie enthalten außerdem Empfehlungen für Menschen mit Farbsehschwäche, die häufig als „Farbenblindheit“ bezeichnet wird. Farben zu verstehen, ist auch wichtig, um [Krampfanfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit Störungen des Gleichgewichtssystems oder anderen neurologischen Erkrankungen zu vermeiden.

## Überblick

Die Auswahl und Verwendung von Farben ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick scheint das Thema einfach zu sein. Tatsächlich ist es komplex, denn die Farbwahrnehmung hängt ebenso von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn ab wie vom Licht, das ein Computerbildschirm aussendet.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Eine Farbe auf demselben Computerbildschirm wird in einem gut beleuchteten Raum anders wahrgenommen als in einem dunklen Raum. Für die Barrierefreiheit wirken sich manche Farbkombinationen stärker aus als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) – manche Schriften sind so dünn oder verschnörkelt, dass sie bereits für sich genommen Probleme bei der Barrierefreiheit verursachen –, Hintergrundfarbe, die Größe der Hintergrundfläche um den Text, Pixeldichte und weitere Faktoren beeinflussen, wie Farben auf dem Bildschirm dargestellt werden.

Auch der Abstand einer Person zum Bildschirm, die Umgebungsbeleuchtung, die Gesundheit ihrer Augen und weitere Faktoren beeinflussen, wie sie die Farbe aufnimmt. Wie sie die Farbe wahrnimmt, nachdem das Licht ihre Augen erreicht hat, ist eine weitere Frage und kann von ihrem allgemeinen Gesundheitszustand abhängen. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media), mit denen Entwickler Stile anhand von Nutzereinstellungen bereitstellen können, darunter Einstellungen für [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).

Wenn die Schnittstelle [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) unterstützt wird, liefert sie die aktuelle Beleuchtungsstärke des Umgebungslichts am Gerät. So kann eine Webseite Änderungen der Lichtintensität erkennen und den Text entsprechend anpassen. Die genannten Media Queries ermöglichen es Entwicklern außerdem, alternative Nutzungserlebnisse bereitzustellen, wenn die Einstellungen einer Person bevorzugte Kontraststufen erkennen lassen. Die Darstellung kann dabei automatisch an den Aufenthaltsort und die Art des verwendeten Bildschirms angepasst werden.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz gehören zu den wichtigsten Konzepten, um barrierefreie Webinhalte mit Farben zu gestalten. Luminanz ist dabei besonders wichtig: Wer versteht, was sie ist und wie sie eingesetzt wird, kann Inhalte sowohl für farbenblinde Menschen als auch für Menschen zugänglich machen, die Farben wahrnehmen können. Luminanzkontrast ermöglicht es farbenblinden Menschen, Dunkles von Hellem zu unterscheiden.

Bevor der Kontrast bestimmt werden kann, muss die Luminanz ermittelt werden. Die W3C-Formeln für Farbkontrast berücksichtigen die Luminanz und nicht nur die Farben („Farbtöne“) selbst.

### Terminologie

Die Terminologie kann verwirrend sein, weil verschiedene Begriffe häufig dasselbe beschreiben. Besonders wichtig ist es, „Luminanz“ und „Sättigung“ richtig zu verstehen. Beispielsweise wird „Sättigung“ in manchen Bereichen als „Chroma“ bezeichnet. In anderen gelten „Chroma“ und „Sättigung“ als zwei verschiedene Konzepte. Das „L“ im HSL-Farbraum wird manchmal als „Luminanz“ und manchmal als „Helligkeit“ bezeichnet. Selbst etwas scheinbar Einfaches wie die Benennung gängiger Farben kann umstritten sein. So beschreiben manche „Karmesinrot“ mit dem Hex-Wert `#990000`, andere mit `#DC143C`. In diesem Dokument verwenden wir die Terminologie, wie sie auf der CSS-Seite {{cssxref("named-color")}} definiert ist.

Wenn Sie mit Farben arbeiten, sollten Sie wissen, in welchem „Farbraum“ Sie sich bewegen, da verschiedene Farbräume unterschiedliche Messsysteme verwenden.

Beim Farbdruck verwendet Ihr Drucker wahrscheinlich Patronen mit Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell: Die vier Druckfarben _entfernen_ bestimmte Wellenlängen des Lichts und reflektieren nur den jeweils zugehörigen schmalen Bereich. RGB ist ein additives Farbmodell, bei dem Licht in unterschiedlichen Anteilen von Rot, Grün und Blau hinzugefügt wird.

Derzeit arbeiten Webentwickler überwiegend im {{Glossary("RGB", "RGB-Farbraum")}}. Obwohl HEX, RGB und HSL Farben unterschiedlich notieren, rechnen Browser die Werte automatisch zwischen diesen Schreibweisen um. Die [CSS-Farbmodule](/de/docs/Web/CSS/Guides/Colors) stellen weitere Farbräume bereit. Da die Farbausgabe derzeit jedoch überwiegend im RGB-Farbraum gemessen wird, setzen die meisten Berechnungen in diesem Dokument den RGB-Farbraum voraus, insbesondere den sRGB-Farbraum.

## Der sRGB-Farbraum

Farben lassen sich auf viele Arten definieren. Das zeigt auch der Datentyp {{cssxref("&lt;color&gt;")}}, der unter anderem RGB, dezimale RGB-Werte, RGB-Prozentwerte, HSL, HWB, LCH, Lab und CMYK umfasst.

In der Digitaltechnik fand ein Großteil der Entwicklung historisch im RGB-Farbraum statt. Das RGB-Farbmodell wurde um „Alpha“ zu RGBA erweitert, damit sich die Deckkraft einer Farbe angeben lässt. Andere Verfahren zur Farbmessung verwenden andere Farbräume und werden von modernen Bildschirmen und Browsern unterstützt. Dennoch überwiegen Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, obwohl manche Artikel zu OpenGL RGBA statt sRGB verwenden. WebGL verwendet üblicherweise das RGBA-Format; ein Beispiel finden Sie unter „[Löschen mit Farben](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)“.

### CSS-Farbwerte

Wichtig ist, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}} wie {{Glossary("RGB", "RGB")}} Varianten gibt. Zum RGB-Farbraum gehören beispielsweise **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**.

Die folgenden Beispiele zeigen CSS-Schreibweisen zur Definition einer Farbe. Als Beispielfarbe dient jeweils ein vollständig deckendes Magenta:

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

Das erste Beispiel verwendet eine der definierten Farben vom Typ {{cssxref("named-color")}}.

Wir können die sRGB-Werte direkt als Prozentwerte festlegen: 0 % bedeutet ausgeschaltet (Schwarz), 100 % den vollen Wert der jeweiligen Farbe. Die Werte stehen in der Reihenfolge Rot, Grün und Blau. Alternativ können wir die sRGB-Werte direkt als Zahlen von 0 bis 255 angeben.

Danach folgen hexadezimale Farbwerte. Das Hexadezimalsystem hat die Basis 16. Darin wird eine Ganzzahl von 0 bis 255 durch zwei Ziffern von 0 bis 15 dargestellt: 0–9 sowie a–f für 10–15. Somit gilt `ff` = `255`, `00` = `0` und `d5` = `200`. Das Zeichen „#“ vor der Farbe kennzeichnet einen Hex-Wert.

Bestehen alle Werte aus Paaren identischer Ziffern, lassen sie sich jeweils mit einer einzigen Ziffer darstellen, die der Browser verdoppelt. Daher entspricht `f00` dem Wert `ff0000`. Ist ein vierter Zahlenwert vorhanden, steht er für das A in RGBA: den Alpha-Kanal, der die Transparenz über die Deckkraft der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe deckender und damit weniger transparent ist. In den obigen Beispielen stehen die Alpha-Werte `f`, `ff`, `1` und `100%` jeweils für vollständige Deckkraft.

Das Beispiel zeigt auch die ältere Syntax für [`rgb()` und `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). In dieser Syntax werden die Werte von Farbfunktionen durch Kommas getrennt; für Werte mit Alpha-Kanal gibt es eine eigene Funktion. Neue Farbfunktionen verwenden dagegen nur eine Syntax mit durch Leerzeichen statt Kommas getrennten Werten. Ist ein Alpha-Kanal vorhanden, steht davor ein Schrägstrich. Die moderne Syntax erlaubt es, Zahlen und Prozentwerte zu mischen, und unterstützt das Schlüsselwort `none`. Die ältere, kommagetrennte Syntax bietet das nicht.

Die nächsten Beispiele zeigen „HSL“, eine Abkürzung für _Hue, Saturation und Lightness_ (Farbton, Sättigung und Helligkeit). Viele Menschen empfinden HSL-Farbwerte als intuitiver als RGB-Werte. Die erzeugte Farbe liegt weiterhin im sRGB-Farbraum, doch {{cssxref("color_value/hsl")}} ist für viele eine intuitive Syntax. Der Farbton wird als Winkel eingestellt, sodass sich leicht eine Benutzeroberfläche mit einem Drehregler oder einem kreisförmigen Steuerelement zur Anpassung des Farbtons erstellen lässt. Beachten Sie, dass HSL _Lightness_ (Helligkeit) und nicht _Luminanz_ verwendet. Dieser Unterschied ist wesentlich.

Das nächste Beispiel zeigt „HWB“, eine Abkürzung für _Hue, Whiteness und Blackness_ (Farbton, Weißanteil und Schwarzanteil). Sowohl bei `hsl()` als auch bei {{cssxref("color_value/hwb")}} kann der erste Wert ein {{cssxref("number")}}- oder ein {{cssxref("angle")}}-Wert sein. Fehlt die Einheit, wird der Wert als Grad mit der Einheit `deg` interpretiert.

Es gibt weitere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen, wie sich Magenta mit den Farbfunktionen {{cssxref("color_value/lab")}}, {{cssxref("color_value/oklch")}} und {{cssxref("color_value/color")}} darstellen lässt.

### Umrechnungen

Wie wir gesehen haben, lässt sich eine Farbe innerhalb desselben Farbraums auf viele Arten ausdrücken. Am Beispiel „Magenta“ im RGB-Farbraum wird deutlich, dass dieselbe Farbe als dreistellige Hex-Kurzschreibweise, als sechsstelliger Hex-Wert, als rgb-Wert oder als rgba-Wert mit Prozentangaben dargestellt werden kann.

RGB ist an Hardware orientiert und spiegelt die Verwendung von Röhrenbildschirmen wider. Viele Entwickler und Designer bevorzugen die intuitive {{cssxref("color_value/hsl")}}-Schreibweise. Glücklicherweise rechnen Browser RGB automatisch in HSL um. Auch ein Klick auf eine Farbe bei gedrückter Umschalttaste in den Entwicklerwerkzeugen des Browsers bietet eine Umrechnungsfunktion.

Neben den Entwicklerwerkzeugen gibt es viele Werkzeuge, die RGB für Sie in HSL umrechnen und sowohl die hexadezimale RGB-Schreibweise als auch die CSS-Funktionssyntax anzeigen. Viele Farbwähler geben außerdem WCAG-Werte für den [Farbkontrast](https://webaim.org/resources/contrastchecker/) an.

![Farbwähler mit HSL- und RGB-Werten sowie Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, erweitert das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) die verfügbaren Farbräume. Dazu gehören die funktionalen Farbschreibweisen {{cssxref("color_value/lch")}} und {{cssxref("color_value/oklch")}} sowie die Farbkoordinatensysteme {{cssxref("color_value/lab")}} und {{cssxref("color_value/oklab")}}, mit denen sich jede sichtbare Farbe angeben lässt. Wegen seiner weiten Verbreitung bleibt sRGB dennoch der standardmäßige und für die Barrierefreiheit bevorzugte Farbraum.

Standards und Richtlinien zur Barrierefreiheit verwenden derzeit überwiegend den sRGB-Farbraum, insbesondere bei Farbkontrastverhältnissen.

> [!NOTE]
> Fast alle heute zur Anzeige von Webinhalten verwendeten Systeme setzen eine sRGB-Kodierung voraus. Solange nicht bekannt ist, dass die Inhalte in einem anderen Farbraum verarbeitet und dargestellt werden, sollten Autoren sie anhand des sRGB-Farbraums beurteilen. Wenn Sie andere Farbräume verwenden, wenden Sie die Grundsätze für [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Farbwerte abfragen

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte in der dezimalen RGB-Schreibweise oder als `color(srgb...)` zurück. Wenn Sie beispielsweise `Window.getComputedStyle()` für ein `<div>` aufrufen, für das `background-color: red` festgelegt ist, erhalten Sie als berechnete Hintergrundfarbe `rgb(255, 0, 0)` – die dezimale RGB-Schreibweise. Bei der [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), beispielsweise `background-color: rgb(from blue 255 0 0)`, gibt `Window.getComputedStyle()` dagegen `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst die Methode Farben in RGB-Werten und nicht danach, wie das menschliche Auge sie wahrnimmt.

### Rot-Grün-Sehschwäche

Protanopie ist eine Farbsehschwäche, bei der im Auge keine Rot-Zapfen vorhanden sind. sRGB-Farben können über die Grün-Zapfen dennoch wahrgenommen werden, allerdings dunkler als bei normalem Farbsehen. Sowohl bei Protanopie (Rot-Schwäche) als auch bei Deuteranopie (Grün-Schwäche) fällt es schwer, Rot und Grün _voneinander_ zu unterscheiden.

Entwicklerwerkzeuge können Unterschiede beim Farbsehen direkt im Browser simulieren. Beispielsweise lassen sich im Barrierefreiheits-Panel des Firefox Accessibility Inspector Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust simulieren.

![Ausschnitt der Firefox-Entwicklerwerkzeuge mit dem Menü zur Simulation unterschiedlicher Farbwahrnehmungen](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben („Farbtönen“) ist entscheidend. Farbe („Farbton“) allein reicht jedoch nicht aus, um barrierefreie Inhalte zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Luminanz berücksichtigen.

Auch die „Form“ des Textes selbst spielt eine Rolle. Dünne Buchstaben sind schwerer zu lesen als kräftige; alle Schriftarten brauchen für die menschliche Wahrnehmung Raum zum „Atmen“.

### Kontrast und Schriftgröße

Die [WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren Text als „groß“, wenn er bei einem {{cssxref('font-weight')}}-Wert von `normal` mindestens `18pt` (etwa `24px`) und bei `bold` mindestens `14pt` (etwa `18.7px`) groß ist. Dazu heißt es:

_Größerer Text mit breiteren Buchstabenstrichen lässt sich auch bei geringerem Kontrast leichter lesen. Deshalb ist die Kontrastanforderung für größeren Text niedriger. So können Autoren bei großem Text aus einer größeren Farbpalette wählen, was bei der Seitengestaltung insbesondere für Überschriften hilfreich ist._

Größerer Text benötigt zwar keinen so hohen Farbkontrast zum Hintergrund wie kleinerer Text, doch eine größere Schrift ist kein Allheilmittel.

Als „normale“ Druckschrift gelten üblicherweise 11,5 pt bis 12 pt; auf dem Bildschirm entspricht das 16 px. Eine kleinere Schrift kann zwar entzifferbar sein – eine Person erkennt Buchstaben möglicherweise mit einer Genauigkeit von \~70 % –, ist aber nicht gut lesbar. Eine Schriftgröße von 16 px ist für Menschen mit normalem Sehvermögen im Allgemeinen lesbar. Eine Person mit einer Sehschärfe von 20/40 benötigt etwa die doppelte Größe, also ungefähr 31 px. Deshalb verlangen die WCAG-Richtlinien, dass Nutzer jeden Text vergrößern können.

Zu kleiner Text ist schwer zu lesen, zu großer aber ebenfalls. Bei Menschen mit einer Sehschärfe von 20/20 sinkt die Lesegeschwindigkeit ab einer Textgröße von ungefähr 96 px. Unterscheiden sich die kleinste und die größte Schriftgröße auf einer Seite stark, wird der größere Text außerdem schlechter lesbar, wenn Nutzer den kleineren Text vergrößern: Die meisten Browser vergrößern dabei den gesamten Text.

Für die Barrierefreiheit gilt im Allgemeinen: Je höher der Kontrast, desto besser. Bei Animationen ist das anders. „Sicherere“ Animationen verwenden Bilder mit weniger statt mehr Kontrast. Weitere Informationen zum Farbkontrast bei Animationen finden Sie unter [Drei Blitze oder unterhalb des Schwellenwerts: Erfolgskriterium 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie außerdem, dass Symbole einen ausreichenden Kontrast benötigen, damit sie wahrgenommen werden können. Siehe [WCAG-2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminanz

Der Unterschied in der Luminanz von Farben ermöglicht es uns, Kontrast zu erkennen. Die relative Luminanz ist in den WCAG definiert als „die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß“.

Diese Aussage ist korrekt, kann aber bei Bezug auf den RGB-Farbraum verwirrend sein, dessen Werte als Ganzzahlen zwischen 0 und 255 angegeben werden. Weiß hat eine relative Luminanz von 100 %, Schwarz eine relative Luminanz von 0 % (in der meisten, aber nicht der gesamten Fachliteratur). Überträgt man die oben genannte W3C-Definition auf RGB, hat Weiß, normiert auf 1, den RGB-Wert `rgb(255 255 255)` und Schwarz, normiert auf 0, den RGB-Wert `rgb(0 0 0)`. Schwarz und Weiß lassen sich auch als `rgb(0% 0% 0%)` beziehungsweise `rgb(100% 100% 100%)` schreiben, was möglicherweise intuitiver ist.

Woher stammt also der Wertebereich von 0 bis 255? Historisch speicherten Grafik-Engines jeden Farbkanal in einem einzelnen Byte. Daraus ergibt sich ein Bereich von Ganzzahlen zwischen 0 und 255.

Die Primärfarben haben unterschiedliche Luminanzen. Gelb hat beispielsweise eine höhere Luminanz als Blau. Laut dem NASA-Dokument „[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)“ wurde dies bewusst so gestaltet, _um den Weißabgleich des Monitors zu erreichen_.

Ein Farbkontrastverhältnis ist ohne Berücksichtigung der Luminanz nicht aussagekräftig. Sobald die Luminanz ermittelt ist, kann das Farbkontrastverhältnis bestimmt werden.

Für die menschliche Wahrnehmung ist ein Luminanzunterschied wichtiger als ein Farbunterschied. Das ist bedeutsam, weil Luminanzkontrast die Entwicklung von Inhalten ermöglicht, die auch Menschen mit Farbenblindheit sehen können. Farben mit niedriger Luminanz, die deshalb schwer zu erkennen sind, lassen sich besser lesbar machen, indem man sie vor eine andere Farbe mit kontrastierender Luminanz setzt. Eine interessante NASA-Studie zur Farbe Blau stellte beispielsweise fest, dass sich diese Farbe mit ihrer niedrigen Luminanz lesbar darstellen lässt, wenn _auf einen ausreichenden Luminanzkontrast geachtet wird_ (aus dem Artikel „[Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)“).

Die relative Luminanz zu berechnen ist nicht trivial. Glücklicherweise gibt es [Online-Werkzeuge zur Prüfung von Luminanz und Kontrast](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen dazu, wie Sie die [relative Luminanz berechnen](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) können.

## Farben wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bereichs sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Für diese Farbtöne sind wir unterschiedlich empfindlich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen, reagieren auf manche Farben stärker als auf andere. Etwa 65 % der Zapfen reagieren _am stärksten_ auf Gelbgrün, aber auch auf Rot (wir nennen sie „Rot-Zapfen“). 30 % reagieren besonders auf Grün und nur [5 % auf Blau](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Es gibt zwar erheblich weniger Blau-Zapfen als Zapfen der beiden anderen Typen, sie sind jedoch sehr empfindlich. Das gleicht ihre geringere Anzahl teilweise aus.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben: Blau-Zapfen tragen nicht zur Luminanz bei, und wir haben wesentlich weniger Blau-Zapfen als Rot- oder Grün-Zapfen.

![Links ein Zapfenmosaik bei normalem Farbsehen, rechts das einer Person mit Protanopie, der die Rot-Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik bei normalem Farbsehen zu sehen, rechts das einer Person mit Protanopie, einer Form der Farbsehschwäche, bei der die Rot-Zapfen fehlen. (Illustration von Mark Fairchild, RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Rot- und Grün-Zapfen wirken zusammen und erzeugen die Wahrnehmung von Luminanz, die wir als Helligkeit oder Dunkelheit unabhängig vom Farbton verstehen können. Gemeinsam ermöglichen Rot-, Grün- und Blau-Zapfen bei normalem Farbsehen die Wahrnehmung von Millionen Farben. Für die Barrierefreiheit ist wichtig zu wissen, dass unser Gehirn Luminanz getrennt von Farbe (Farbton und Farbigkeit) verarbeitet.

Luminanz liefert feine visuelle Details, darunter die Unterscheidung von Kanten und Text. Farbton und Farbigkeit vermitteln nur ein Drittel des Detailgrads der Luminanz. Die Kompression von Bilddaten nutzt diese Tatsache. Beispielsweise tastet der [h.264-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farben mit einem Viertel der Luminanzauflösung ab.

Für die Barrierefreiheit bedeutet das: Luminanzkontrast ist für Text entscheidend. Farbe im Sinne von Farbton und Farbigkeit ist wichtig, um Elemente _voneinander zu unterscheiden_, etwa verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Faktor ist die Farbe oder Luminanz der Umgebung einer Farbe. Je nach Umgebung erscheinen Farben unterschiedlich. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate jeweils denselben sRGB-Farbwert. Durch die kontextabhängige Farbwahrnehmung wirken sie verschieden: Die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung daran an, was es für beleuchtet oder im Schatten liegend hält.

![Bild eines Schachbrettmusters, in dem identische Farben unterschiedlich aussehen, je nachdem, ob sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben auf Ihrem Monitor identische Farben, erscheinen aufgrund des Kontexts aber unterschiedlich. (Bild: D. Lyon)

Unsere Wahrnehmung von Kontrast, Helligkeit und Farbe wird durch benachbarte Farben und andere Merkmale einer Gestaltung oder eines Bildes beeinflusst. Das macht es schwierig, den wahrgenommenen Kontrast vorherzusagen. Er ist nicht bloß ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend hängt Farbe ebenso sehr von der menschlichen Physiologie und der Wahrnehmung im Gehirn ab wie von der Messung des Lichts eines Computerbildschirms. Auch das Umgebungslicht beeinflusst, wie gut wir Farben und Kontraste wahrnehmen können. Licht und seine Messwerte verhalten sich linear, das menschliche Sehen und die Wahrnehmung jedoch nicht.

## Anpassung

Unsere Augen passen sich beim Wechsel von hellen zu dunklen Bereichen nicht auf dieselbe Weise oder gleich schnell an wie beim Wechsel in die andere Richtung. Das liegt am physiologischen Aufbau unserer Augen und beeinflusst, wie gut eine Person Text vor einem Hintergrund lesen kann. Es gibt mindestens zwei Arten der Anpassung: die lokale Anpassung und die Anpassung an das Umgebungslicht.

Die lokale Anpassung findet direkt auf der „Seite“ statt, die jemand betrachtet. Steht beispielsweise blauer Text auf einer grau „hervorgehobenen“ Fläche, nehmen Ihre Augen genau diesen Text mit grauer Hervorhebung anders wahr, je nachdem, ob er sich in einem schwarzen oder einem weißen {{HTMLElement("div")}} befindet. Das wird als _lokale_ Anpassung bezeichnet. Die Wahrnehmung des Textes ändert sich dabei, obwohl die Umgebungsbeleuchtung im Raum gleich bleibt.

Webentwickler können die Prinzipien der lokalen Anpassung nutzen, um Text vor einem Hintergrund besser lesbar zu machen.

Die Dunkelanpassung an eine geringe Luminanz verläuft langsam. Wenn Sie von draußen aus hellem Sonnenlicht in einen dunklen Raum gehen, erleben Sie diese Anpassung. Sie kann einige Minuten dauern.

Die Hellanpassung verläuft umgekehrt. Der Wechsel aus einem dunklen Raum in helles Sonnenlicht geht schneller, kann aber auch unangenehm sein.

Webentwickler können die Lesbarkeit von Text bei wechselnden Lichtverhältnissen im Raum verbessern, indem sie die Schnittstelle `AmbientLightSensor` und die Media Query [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) nutzen.

## Sättigung

Bei der Betrachtung von Farben („Farbtönen“) und Barrierefreiheit verdient die Sättigung besondere Aufmerksamkeit. Meist steht die Luminanz im Mittelpunkt, wenn es darum geht, einen ausreichenden Kontrast zwischen Text und Hintergrund sicherzustellen oder das Risiko lichtempfindlich ausgelöster Krampfanfälle zu beurteilen. Ein Aspekt von Farben („Farbtönen“) ist jedoch unabhängig von der Luminanz besonders wichtig: die Sättigung. Sie kann bei dafür anfälligen Menschen lichtempfindlich ausgelöste Krampfanfälle verursachen, unabhängig von der Luminanz der Farbe. Wie beim [Sonderfall Rot](#der_sonderfall_rot) erläutert, hielten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass _unabhängig von der Luminanz auch ein Übergang zu oder von einem gesättigten Rot als Risiko gilt_.

Sättigung wird manchmal als „Reinheit“ oder „Intensität“ einer Farbe beschrieben. Für Pigmente in einem Farbkasten sind das brauchbare Definitionen, für Farben auf einem Computerbildschirm jedoch weniger genau.

Bei Farben auf einem Monitor sind gesättigte Farben mit einer bestimmten Wellenlänge verbunden. Die Definition der Sättigung kann sich je nach Farbraum unterscheiden, sie lässt sich jedoch messen. Entscheidend ist, den verwendeten Farbraum zu kennen und den Wert bei Bedarf umzurechnen.

Bei Diskussionen über Lichtempfindlichkeit werden am häufigsten die Farbräume RGB, HSL und HSV betrachtet; HSV wird auch HSB genannt. HSV steht für _hue_, _saturation_ und _value_ (Farbton, Sättigung und Wert), das gleichbedeutende HSB für _hue_, _saturation_ und _brightness_ (Farbton, Sättigung und Helligkeit). In CSS steht {{cssxref("color_value/hwb")}} für _hue_, _whiteness_ und _blackness_ (Farbton, Weißanteil und Schwarzanteil).

Sie sollten wissen, mit welchem Farbraum Sie arbeiten. Gesättigte Farben haben beispielsweise in HSL eine Helligkeit von `0.5`, während sie in HWB einen Wert von `1` haben. Im RGB-Farbraum wird Sättigung für die betreffende Farbe üblicherweise durch einen RGB-Wert von `255` oder `100%` angezeigt. Ein gesättigtes Rot mit dem Hex-Wert `#ff0000` hat beispielsweise den RGB-Wert `rgb(255 0 0)` und den HSL-Wert `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit dem Hex-Wert `#ff3300` hat den RGB-Wert `rgb(255 51 0)` und den HSL-Wert `hsl(12 100% 50%)`. Beide Rottöne sind „gesättigt“. Sie haben unterschiedliche „Farbtöne“, gelten aber beide als gesättigte Farben.

Sättigung ist nicht dasselbe wie Helligkeit. Die Helligkeit beschreibt, wie viel Weiß oder Schwarz einer Farbe beigemischt ist. Durch das Hinzufügen von Weiß, Schwarz oder Grau lässt sich die Sättigung verringern. Wird Weiß hinzugefügt, kann zugleich die Helligkeit steigen. Ein typisches Beispiel ist das Mischen von Rot mit Weiß zu Rosa. Rosa gilt als entsättigtes Rot.

### Sättigung und Luminanz

An den Extremen der Luminanz, also nahe Schwarz und Weiß, geht Sättigung verloren. In der NASA-Veröffentlichung zum [Einfluss der Luminanz auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass bei niedriger Luminanz Sättigung verloren geht und ebenso „… bei hoher Luminanz – die Farben nähern sich Weiß an“.

## Farbkombinationen

Bei der Barrierefreiheit reicht es nicht aus, allein den Kontrast zu betrachten. Bei Animationen lösen manche Farbkombinationen bei anfälligen Menschen mit höherer Wahrscheinlichkeit lichtempfindlich ausgelöste Krampfanfälle aus als andere. Beispielsweise ist ein abwechselndes Blitzen von Rot und Blau problematischer als eines von Grün und Blau. Eine mögliche Erklärung ist die Lage der Zapfen: Die „rot“-empfindlichen Zapfen häufen sich um die Fovea nahe der Netzhautmitte, während die „blau“-empfindlichen Zapfen weiter außen liegen. Bei der Verarbeitung der Informationen im Gehirn müssen die elektrischen Signale aus dem Auge diese Unterschiede ausgleichen.

Manche Farben können mit höherer Wahrscheinlichkeit [epileptische Anfälle auslösen](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Bestimmte Farbkombinationen können die komplexe Dynamik des Gehirns stärker beeinflussen als andere. Beispielsweise führt ein rot-blau flackernder Reiz zu einer stärkeren Aktivierung der Großhirnrinde als ein rot-grüner oder blau-grüner Reiz.

Einige Farbkombinationen können auf Computerbildschirmen oder mobilen Geräten besonders problematisch sein oder mit bestimmten Beeinträchtigungen zusammenwirken. Rot und Blau sind ein solches Beispiel.

- Verlassen Sie sich bei der Unterscheidung von Details niemals allein auf den Farbton. Ein ausreichender Luminanzkontrast ist erforderlich.
- Grün trägt bei einem Bildschirm den größten Teil zur Luminanz (zum Licht) bei und ist daher üblicherweise ein wesentlicher Bestandteil hellerer Farben.

### Mit Blau arbeiten

Manche Menschen können nicht alle Farben voneinander unterscheiden. Einige Farben, etwa reines Blau, haben eine niedrige Luminanz. Farben mit niedriger Luminanz sollten bei einem Kontrastpaar die dunkleren Farben sein. Blau hat außerdem eine sehr niedrige Auflösung in der menschlichen Wahrnehmung. Wir haben deutlich weniger Blau-Zapfen; sie sind eher im peripheren Sehen verteilt und fehlen im Zentrum des Sehens. Das menschliche Auge sieht Blau daher mit geringerer Auflösung als Grün und Rot.

Daraus ergeben sich folgende Empfehlungen für die Verwendung von Blau:

- Reines Blau sollte in der Regel die dunklere von zwei Farben sein.
- Wenn Blau die hellere der beiden Farben sein soll, fügen Sie Grün hinzu, um den Kontrast und die Lesbarkeit zu verbessern.

Aufgrund der Eigenschaften blauen Lichts wird es an einer anderen Stelle der Netzhaut fokussiert als rotes Licht. Liegen reines Rot und reines Blau unmittelbar nebeneinander und berühren sich, können die Farben daher zu „flimmern“ scheinen.

## Der Sonderfall Rot

Unser Gehirn verarbeitet nicht alle Farben („Farbtöne“) auf dieselbe Weise. Rot beeinflusst die menschliche Physiologie und Psychologie im Allgemeinen anders als andere Farben. Wir reagieren auf Farben sowohl physiologisch als auch psychologisch. Beispielsweise wurde gezeigt, dass [manche Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten als Barrierefreiheitsoption eine [„Graustufen“-Einstellung](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die lichtempfindlichen Menschen helfen kann. Um diese Einstellung nachzuahmen, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit einer {{cssxref("filter-function/grayscale")}}- oder {{cssxref("filter-function/saturate")}}-{{cssxref("filter-function")}}.

### Gesättigtes Rot

„Gesättigtes Rot“ ist ein besonderer, gefährlicher Fall, für den es spezielle Tests gibt.

Das Konzept der Farbsättigung ist schwer zu verstehen, wenn man nur Zahlen und Begriffe betrachtet. Das folgende Bild veranschaulicht die Sättigung einer Farbe:

![Rotsättigung, aus einer SVG-Datei von Wikimedia Commons als PNG gespeichert. Urheberangabe: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe „Farbe“ geht von links mit der geringsten Sättigung nach rechts mit der höchsten Sättigung über.

_Mehr als ein „Rotton“ kann als „gesättigtes“ Rot gelten._ Beispielsweise ist die Farbe `#990000` mit `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Auch die Farbe `#8b0000` hat eine Sättigung von 100 %.

Nicht alle gesättigten Rottöne lassen sich im RGB-Spektrum oder in anderen bei der Webentwicklung üblichen Farbräumen gut darstellen. Laut dem Wikipedia-Artikel „Shades of Red“ ist die Farbe „Carmine“ ein gesättigtes Rot, das als Pigment überwiegend rotes Licht mit Wellenlängen von mehr als 600 nm enthält. Der Artikel merkt ausdrücklich an, dass Carmine „nahe am Rand des Spektrums liegt. Damit liegt es weit außerhalb üblicher Farbumfänge (RGB und CMYK), und der angegebene RGB-Wert ist nur eine grobe Annäherung.“

### Blinkendes gesättigtes Rot

Eine rote Umgebung kann die kognitive Leistungsfähigkeit von Menschen mit Schädel-Hirn-Trauma beeinträchtigen. Darüber hinaus erfordert Farbe im roten Wellenlängenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte beim Testen des _Photosensitive epilepsy analysis tool_ fest, dass die Häufigkeit von Krampfanfällen deutlich höher war als erwartet. Dabei zeigte sich, dass wir auf blinkendes gesättigtes Rot wesentlich empfindlicher reagieren. (Siehe das Video „[The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/)“.)

### Blinken und Krampfanfälle

Es wurde gezeigt, dass fortlaufendes Blinken zwischen hell und dunkel mit mehr als drei Lichtblitzen pro Sekunde bei manchen Menschen lichtinduzierte Krampfanfälle auslösen kann. Auch bestimmte, sehr regelmäßige Muster mit hohem Kontrast, etwa parallele weiße und schwarze Streifen, können Krampfanfälle auslösen.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) nennen mehrere grundlegende Empfehlungen:

1. Ein, zwei oder drei Lichtblitze innerhalb einer Sekunde sind zulässig. Eine Abfolge von Lichtblitzen wird jedoch nicht empfohlen, wenn innerhalb einer Sekunde mehr als drei auftreten.
2. Bei hellen und dunklen Streifen sollte ein Muster höchstens fünf Hell-Dunkel-Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, schwingen, blinken oder ihren Kontrast umkehren. Bleibt das Muster unverändert oder bewegt es sich kontinuierlich und gleichmäßig in eine Richtung, sollten es höchstens acht Hell-Dunkel-Streifenpaare sein.

Weitere Empfehlungen finden Sie im Fachartikel [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farben – ihre Farbtöne und ihre Sättigung – können unsere Stimmung beeinflussen und interaktive Erlebnisse verbessern oder verschlechtern.

### Beispiele für Wirkungen von Farben über das Sehen hinaus

- **Die Bedeutung von Farben kann kulturell bedingt sein:** [Eine kulturübergreifende Studie zur emotionalen Bedeutung von Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farben beeinflussen unsere Emotionen:** [Farbe und Emotionen: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können sich ebenfalls positiv auf unsere Emotionen auswirken:** [Veränderungen von Emotionen durch die Steuerung des Kontrasts visueller Inhalte, untersucht mittels EEG-basierter Emotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Manche Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Hinweise auf eine zeitliche Überschätzung blauer Reize](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau wirkt sich auch deutlich auf die Wahrnehmung von Helligkeit und Blendung aus:** [Blau, Blendung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können Glücks- oder Freudengefühle verstärken:** [Die Welt durch die „rosarote Brille“ sehen: Der Einfluss der Tönung auf die visuelle emotionale Verarbeitung](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot hat bekanntermaßen deutliche Auswirkungen auf unser Verhalten:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit einem Schädel-Hirn-Trauma [die kognitive Leistungsfähigkeit in einer roten Umgebung abnimmt](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS-Eigenschaft {{cssxref("color")}}
- CSS-Datentyp {{cssxref("&lt;color&gt;")}}
- [Barrierefreiheit im Web bei Krampfanfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, von Susana Martinez-Conde und Stephen L. Macknik, 1. November 2014
- [Rot-Entsättigung](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge reagiert so empfindlich auf Rot, dass Augenärzte damit einen Test zur Beurteilung der Funktionsfähigkeit des Sehnervs durchführen.
- [Licht- und musterinduzierte Krampfanfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
