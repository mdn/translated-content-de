---
title: "Web-Accessibility: Verständnis von Farben und Leuchtdichte"
short-title: Farben und Leuchtdichte
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Während das Verständnis von Farbe, Leuchtdichte und Sättigung wichtig für Design und Lesbarkeit für alle sehenden Nutzer ist, sind diese Aspekte essenziell für Menschen mit eingeschränktem Sehvermögen, farbdefizitem Sehvermögen und spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen.

Zugänglichkeitsrichtlinien definieren einen angemessenen [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Nutzer mit eingeschränktem Sehvermögen sowie Richtlinien, die Personen mit Farbunempfindlichkeit, gemeinhin als "Farbenblindheit" bezeichnet, helfen sollen. Das Verständnis von Farben ist ebenfalls wichtig, um [Anfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären Störungen oder anderen neurologischen Störungen zu verhindern.

## Überblick

Die Wahl der Farben und deren Verwendung ist ein wesentlicher Bestandteil der Barrierefreiheit. Oberflächlich betrachtet scheint das Thema einfach zu sein. Dennoch ist es ein komplexes Thema, da die Farbwahrnehmung genauso viel mit der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn zu tun hat wie mit dem von einem Computerbildschirm emittierten Licht.

### Umgebung und Wahrnehmung

Die Umgebung ist wichtig. Die Wahrnehmung von Farbe in einem gut beleuchteten Raum unterscheidet sich von der Wahrnehmung derselben Farbe auf demselben Computerbildschirm in einem dunklen Raum. In Bezug auf Barrierefreiheit hat die Verwendung bestimmter Farbkombinationen mehr Auswirkungen als andere. Schriftgröße, [Schriftartstil](https://www.nngroup.com/articles/glanceable-fonts/) (einige Schriftarten sind so dünn oder ausgefallen, dass sie alleine schon Barrierefreiheitsprobleme darstellen), Hintergrundfarbe, die Größe des Hintergrundbereichs um den Text, sogar Pixeldichten und mehr beeinflussen, wie Farbe vom Bildschirm wiedergegeben wird.

Der Abstand des Betrachters zum Bildschirm, der Umgebungs­hintergrund, die Gesundheit der Augen und mehr beeinflussen, wie diese Farbe beim Betrachter ankommt. Wie der Betrachter die Farbe nach dem Erreichen seiner Augen wahrnimmt, ist wieder eine andere Angelegenheit und kann durch den allgemeinen Gesundheitszustand beeinflusst werden. Glücklicherweise gibt es [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media), mit denen Entwickler Stile basierend auf Benutzerpräferenzen bereitstellen können, einschließlich [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farb­schema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Präferenzen.

Wenn unterstützt, gibt die [Umgebungslichtsensor](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück, sodass eine Webseite jede Änderung der Lichtintensität erkennen und den Text entsprechend anpassen kann. Zusätzlich ermöglichen die oben genannten Media Queries Entwicklern, alternative Nutzererfahrungen zu bieten, wenn Nutzerpräferenzen bestimmte Kontrastniveaus angeben, und automatisch Anpassungen vorzunehmen, je nach Standort des Nutzers und verwendetem Bildschirm.

### Leuchtdichte und Wahrnehmung

Farbe, Kontrast und Leuchtdichte sind die zentralen und kritischsten Konzepte zur Gestaltung von barrierefreiem Webinhalt mit Farben. Leuchtdichte ist jedoch von besonderer Bedeutung, da das Verständnis dessen, was sie ist und wie sie eingesetzt wird, die Barrierefreiheit sowohl für Personen, die Farbenblind sind, als auch für solche, die Farben erkennen können, ermöglicht. Der Leuchtdichtekontrast ermöglicht es Farbenblinden, Dunkel von Hell zu unterscheiden.

Leuchtdichte muss festgestellt werden, bevor der Kontrast bestimmt werden kann. Wenn von Farbkontrast die Rede ist, beinhalten W3C-Formeln die Leuchtdichte und nicht nur die Farben ("Farbtöne") selbst.

### Terminologie

Terminologie kann verwirrend sein, da unterschiedliche Begriffe oft dasselbe beschreiben. "Leuchtdichte" und "Sättigung" sind besonders wichtig, um sie richtig zu verwenden. Zum Beispiel ist "Sättigung" in einigen Kreisen als "Chroma" bekannt. In anderen werden "Chroma" und "Sättigung" als zwei unterschiedliche Konzepte angesehen. Das "L" im HSL-Farbraum wird manchmal als "Luminosität" und andere Male als "Helligkeit" bezeichnet. Selbst etwas scheinbar Einfaches wie die Benennung gängiger Farben kann zur Diskussion stehen. Beispielsweise könnte die Farbe "Crimson Red" von manchen als `#990000` und von anderen als `#DC143C` beschrieben werden. Für dieses Dokument werden wir die Terminologie verwenden, wie sie auf der CSS {{cssxref("named-color")}} Seite definiert ist.

Bei der Arbeit mit Farbe ist es wichtig zu wissen, in welchem "Farbraum" Sie arbeiten, da verschiedene Farbräume mit unterschiedlichen Messsystemen korrelieren.

Beim Farb­druck hat Ihr Drucker wahrscheinlich Cyan-, Magenta-, Gelb- und Schwarzpatronen (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten spezifische Lichtwellen­längen _ entfernen_ und nur den engen Bereich reflektieren, dem jede zugeordnet ist. RGB ist ein additives Farb­modell, das unterschiedliche Anteile von Rot, Grün und Blau kombiniert.

Derzeit dominiert der {{Glossary("RGB", "RGB-Farbraum")}} als der Raum, in dem Webentwickler arbeiten. Während HEX-, RGB- und HSL-Farbräume unterschiedlich notiert sind, konvertieren Browser die Werte automatisch zwischen diesen Farb­notierungen. [CSS-Farb­module](/de/docs/Web/CSS/Guides/Colors) bieten zusätzliche Farbräume. Dennoch werden aufgrund der aktuellen Vorherrschaft des RGB-Farbraums bei der Farbausgabe die meisten Berechnungen in diesem Dokument als im RGB-Farbraum vermutet und sehr spezifisch im sRGB-Farbraum gesehen.

## Der sRGB-Farbraum

Farbe kann auf viele Arten definiert werden, wie im {{cssxref("&lt;color&gt;")}} Datentyp ersichtlich ist, einschließlich RGB, RGB Dezimal, RGB Prozent, HSL, HWB, LCH, Lab und CMYK, um nur einige zu nennen.

Für digitale Belange hat sich die Technologie historisch im RGB-Farbraum angesiedelt. Das RGB-Farbmodell wird erweitert, um "Alpha" einzuschließen — RGBA — um die Opazität einer Farbe anzugeben. Andere Methoden zur Messung von Farben umfassen Messungen in anderen Farbräumen und werden in modernen Bildschirmen und Browsern unterstützt. Dennoch dominieren Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) beinhalten Unterstützung für die sRGB-Gamma-Kurve, obwohl einige Artikel für die Verwendung von OpenGL das RGBA-Format anstelle von sRGB erwähnen. WebGL ist normalerweise im RGBA-Format; siehe ein Beispiel für die Verwendung in "[Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)".

### CSS-Farbwerte

Es ist wichtig zu wissen, dass es selbst innerhalb eines {{Glossary("color_space", "Farbraums")}}, wie dem {{Glossary("RGB", "RGB")}}-Farbraum, Variationen gibt. Beispielsweise beinhalten Variationen des RGB-Farbraums **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**, unter anderen.

Dies sind Beispiele der CSS-Notationen, die verwendet werden, um eine Farbe zu definieren. Hier ist die Beispiel­farbe für jede eine voll opake Magenta:

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

Das erste Beispiel verwendet eine der definierten {{cssxref("named-color")}}.

Wir können die sRGB-Werte direkt als Prozentsatz setzen, wobei 0% aus (schwarz) und 100% der volle Wert für diese Farbe ist. Die Werte sind in der Reihenfolge Rot, Grün und Blau. Wir können die sRGB-Werte auch direkt durch eine Zahl von 0 bis 255 setzen.

Danach werden hexadezimale Farbwerte gezeigt. Hexadezimal ist ein Nummerierungs­system mit Basis 16, wobei die Ganzzahl 0-255 durch zwei Ziffern dargestellt wird, die von 0 bis 15 reichen, wobei die Ziffern 0-9 und a-f für 10-15 verwendet werden. Somit ist `ff` = `255`, `00` = `0` und `d5` = `200`. Das '#' Symbol geht der Farbe voraus, um anzuzeigen, dass der Wert hexadezimal ist.

Wenn alle Werte Paare identischer Ziffern sind, kann der Wert durch einzelne Ziffern dargestellt werden, die der Browser dupliziert. Daher ist `f00` dasselbe wie `ff0000`. Wenn ein viertes Zahlen­set vorhanden ist, ist dieser Wert das A in RGBA, der Alpha-Kanal, der die Transparenz in Bezug auf den Opazitätswert der Farbe definiert. Ein höherer Wert bedeutet, dass die Farbe weniger transparent und daher deckender ist. In den obigen Beispielen beträgt der Alpha-Wert `f`, `ff`, `1` und `100%` für voll opake Farben.

Das Beispiel zeigt auch die alte Syntax sowohl für [`rgb()` und `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). Die alte Syntax für Farb­funktionen ist durch Kommata getrennt, mit einer separaten Funktion, wenn der Alphakanal enthalten ist. Neue Farb­funktionen haben nur eine Syntax mit Leerzeichen getrennten (anstatt komma­getrennten) Werten, wobei der Alphakanal, falls vorhanden, von einem Schrägstrich eingeleitet wird. Die moderne Syntax erlaubt das Mischen von Zahlen und Prozentwerten und unterstützt das `none`-Schlüsselwort; die komma­getrennte alte Syntax tut dies nicht.

Die folgenden Beispiele zeigen "HSL", was für _Farbton, Sättigung und Helligkeit_ steht. HSL-Farbwerte werden von vielen als intuitiver angesehen als RGB-Werte. Die erzeugte Farbe aus den Einstellungen befindet sich immer noch im sRGB-Farbraum, aber {{cssxref("color_value/hsl")}} ist eine intuitive Syntax für viele. Der Farbton wird als Winkel angepasst, und es ist einfach, eine Benutzeroberfläche zu erstellen, die einen Drehknopf oder eine kreisförmige Steuerung verwendet, um den Farbton anzupassen. Beachten Sie, dass HSL-Farben _Helligkeit_ und nicht _Leuchtdichte_ beinhalten, was eine wesentliche Überlegung ist.

Das nächste Beispiel zeigt "HWB", das für _Farbton, Weißlicht und Schwarzlicht_ steht. Sowohl bei `hsl()` als auch bei {{cssxref("color_value/hwb")}} kann der erste Wert ein {{cssxref("number")}} oder ein {{cssxref("angle")}}-Wert sein. Wenn er ohne Einheit ist, wird der Wert als `deg` Grad interpretiert.

Es gibt mehrere andere Farb­funktionen und Farb­räume. Die letzten drei Beispiele zeigen die Darstellung von Magenta unter Verwendung der {{cssxref("color_value/lab")}}, {{cssxref("color_value/oklch")}} und {{cssxref("color_value/color")}} Farb­funktionen.

### Umwandlungen

Wie wir gesehen haben, kann eine Farbe innerhalb desselben Farb­raums auf viele Arten ausgedrückt werden. Betrachtet man, wie der RGB-Farb­raum verwendet wird, um die Farbe "Magenta" zu beschreiben, kann man sehen, dass dieselbe Farbe in einer verkürzten, drei­stellig hexadezimalen Zahl ausgedrückt werden kann, die in einen RGB-Wert als sechs­stellige hexadezimale Zahl konvertiert wird, die auch in denselben RGB-Wert konvertiert wird, oder als RGBA-Wert, ausgedrückt in Prozentwerten.

RGB ist hardware-orientiert und spiegelt die Verwendung von Kathodenstrahlröhren wider. Viele Entwickler und Designer bevorzugen die Intuitiveit der {{cssxref("color_value/hsl")}} Notation. Glück­licherweise konvertieren Browser automatisch von RGB zu HSL, und das Shift-Klicken auf Farben in den Entwickler­tools des Browsers bietet Konvertierungs­funktionen.

Zusätzlich zu Entwickler­tools gibt es viele Tools, die RGB in HSL umwandeln können und sowohl das RGB-­hexadezimale als auch das CSS-­Funktionssyntax bereitstellen. Ein großartiges Beispiel für ein Tool, das Farben für Sie konvertiert, ist Tom Jewetts "[mini color selector](https://colortutorial.design/microColorsC.html)" mit HSL, RGB und Hex-Optionen zum Über­prüfen des Kontrasts im Browser. Beachten Sie, dass Entwickler­tools Farb­auswahl-Tools und dieses Tool alle WCAG [Farb­kontrast](https://webaim.org/resources/contrastchecker/) Werte angeben.

![Farbauswahl-Tool mit HSL und RGB, mit Farb­kontrast­werten.](microcolorsc.jpg)

Wie bereits erwähnt, beinhaltet das [CSS-­Farbenmodul](/de/docs/Web/CSS/Guides/Colors) das Hinzufügen zusätzlicher Farbenräume, einschließlich {{cssxref("color_value/lch")}} und {{cssxref("color_value/oklch")}} funktionale Farb­schreibweise und der {{cssxref("color_value/lab")}} und {{cssxref("color_value/oklab")}} Farb­koordinaten­systeme, die jede sichtbare Farbe spezifizieren können. Dennoch ist sRGB der defaulte und bevorzugte Farbenraum für Barrierefreiheit aufgrund seiner Verbreitung.

Wo Barrierefreiheit betroffen ist, jedoch, sind Standards und Richtlinien derzeit vorwiegend im sRGB-Farbraum geschrieben, besonders was die Anwendung auf Farb­kontraste­raten betrifft.

> [!NOTE]
> Fast alle heutzutage verwendeten Systeme zur Ansicht von Webinhalten setzen sRGB-Verschlüsselung voraus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Darstellung der Inhalte verwendet wird, sollten Autoren sRGB-Farbraum verwenden. Bei Verwendung anderer Farbräume gelten die Prinzipien der [minimalen Kontraste­raten](https://webaim.org/articles/contrast/#sc143).

### Abfrage von Farb­werten

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte im Dezimal­referenz­maßstab von RGB oder über `color(srgb...)` zurück. Wenn zum Beispiel `Window.getComputedStyle()` auf ein `<div>` mit `background-color: red` angewendet wird, gibt dies die berechnete Hintergrund­farbe als `rgb(255, 0, 0)` zurück — die RGB-Decimal­referenz. Allerdings, bei [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (zum Beispiel `background-color: rgb(from blue 255 0 0)`), wird `Window.getComputedStyle()` die berechnete Hintergrund­farbe als `color(srgb 1 0 0)` zurückgeben. Da es an Computerhardware gebunden ist, misst `Window.getComputedStyle()` Farbe in Bezug auf RGB, nicht wie das menschliche Auge Farbe wahrnimmt.

### Rot / Grün Farbenblindheit

Protanopie ist eine Farbsehschwäche, bei der das Auge keine Rot-Zapfen hat; sRGB kann dennoch über Grün-Zapfen wahrgenommen werden, jedoch dunkler als die normale Sehfähigkeit. Sowohl Protan (rot defizitär) als auch Deutan (grün defizitär) Schwächen verursachen Schwierigkeiten beim Unterschied zwischen Rot und Grün.

Entwickler­tools können helfen, Farb­seh­unterschiede direkt im Browser zu simulieren. Zum Beispiel ermöglicht der Zugänglichkeits­inspektor von Firefox die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrast­verlust direkt im Barrierefreiheits­panel.

![Snippet des Firefox Entwicklertools, das das Simulations-­Popup zeigt](simulate_color_differences.jpg)

## Leuchtdichte und Kontrast

### Kontrast

Der Kontrast zwischen Farben ("Farbtönen") ist ein kritischer Bestandteil, aber die Verwendung von Farben ("Farbtönen") allein reicht nicht aus, um zugängliche Inhalte zu erstellen. Wie bereits erwähnt muss jede Berechnung des Kontrasts die Leuchtdichte umfassen.

Zusätzlich spielt die "Form" des Textes selbst eine Rolle. Dünne Buchstaben werden schwerer zu lesen sein als dicke; alle Schriftarten benötigen Raum zum "Atmen" für die menschliche Wahrnehmung.

### Kontrast und Schriftgröße

[WCAG-Kontrast­richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren "großen" Text als Text, der `18pt` (etwa `24px`) oder größer ist, wenn {{cssxref('font-weight')}} `normal` ist und `14pt` (etwa `18,7px`) für `fett` geschriebene Texte. Angabe:

_Text, der größer ist und breitere Zeichen­stiche hat, ist leichter bei niedrigerem Kontrast zu lesen. Daher ist die Kontrast­anforderung für größeren Text geringer. Dies ermöglicht Autoren die Verwendung einer breiteren Farb­palette für großen Text, was für das Design von Seiten hilfreich ist, insbesondere für Titel._

Obwohl größerer Text nicht so großen Farb­kontrast zu seinem Hintergrund erfordert wie kleinerer Text, ist die Vergrößerung der Schriftgröße kein All­heil­mittel.

"Normaler" Druck wird normalerweise als 11,5pt bis 12pt angesehen, was 16px auf dem Bildschirm entspricht. Kleinere Schriftarten können lesbar sein – ein Nutzer kann Buchstaben bei \~70% Genauigkeit erkennen – dies ist jedoch nicht 'lesbar'. Eine 16px Schriftgröße ist im Allgemeinen für Menschen mit normalem Sehvermögen lesbar. Jemand mit 20/40 benötigt doppelt so viel, etwa eine 31px Schrift. Deshalb erfordern die WCAG-Richtlinien, dass Benutzer in der Lage sein müssen, jeden Text größer zu zoomen.

Während ein zu klein angezeigter Text schwer zu lesen ist, so ist es auch ein Text, der zu groß ist. Bei Nutzern mit 20/20 Sehvermögen, bei einer Größe des Textes größer als ungefähr 96px verringert sich die Lesegeschwindigkeit. Wenn auf einer Seite ein großer Unterschied zwischen der kleinsten und größten Schriftgröße besteht, wird der größere Text beim Vergrößern des kleineren Textes auf der Seite durch den Nutzer weniger lesbar, da die meisten Browser den gesamten Text mit dem Nutzer zoomt.

Im Allgemeinen gilt für Barrierefreiheitszwecke, je mehr Kontrast desto besser. Dies ändert sich jedoch bei Animationen. "Sicherere" Animationen bedeuten Bilder mit weniger Kontrast, nicht mehr. Weitere Informationen zum Farb­kontrast in Animationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)

Auch ist zu beachten, dass Symbole einen ausreichenden Kontrast für die Wahrnehmung benötigen. Siehe [WCAG 2.1 Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207)

### Leuchtdichte

Es ist der Unterschied in der Leuchtdichte einer Farbe, der es uns ermöglicht, den Kontrast zu erkennen. Relative Leuchtdichte wird in den WCAG als "die relative Helligkeit eines jeden Punktes in einem Farbraum, von 0 für das dunkelste Schwarz und 1 für das hellste Weiß normalisiert" definiert.

Diese Aussage ist korrekt, kann jedoch verwirrend sein, wenn sie im RGB-Farbraum verwendet wird, der ein ganzzahliger Wert zwischen 0 und 255 ist. Weiß hat 100% relative Leuchtdichte, Schwarz hat 0% relative Leuchtdichte (in den meisten, aber nicht allen, Literaturquellen). In Bezug auf den oben genannten W3C-Standard würde dies bedeuten, dass Weiß, normalisiert zu 1, einen RGB-Wert von `rgb(255 255 255)` und Schwarz, normalisiert auf 0, einen RGB-Wert von `rgb(0 0 0)` hat. Beachten Sie, dass Schwarz und Weiß auch als `rgb(100% 100% 100%)` und `rgb(0% 0% 0%)` geschrieben werden können, was intuitiver sein kann.

Woher stammen also diese Zahlen von 0 bis 255? Historisch gesehen, speicherten Grafik­engines die Farb­kanäle als einzelnes Byte, was einen Bereich von Ganzzahlen zwischen 0 und 255 bedeutet.

Die Leuchtdichte der primären Farben ist unterschiedlich. Gelb hat zum Beispiel eine größere Leuchtdichte als Blau. Dies wurde durch Design erreicht, _um die Weiß­ausrichtung des Monitors zu erreichen_, laut dem NASA-Dokument, "[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)"

Ein Farb­kontrast­verhältnis ist ohne seine Leuchtdichte­komponente bedeutungslos, und sobald die Leuchtdichte festgelegt ist, kann das Farb­kontrast­verhältnis ermittelt werden.

In Bezug auf die menschliche Wahrnehmung ist ein Unterschied in der Leuchtdichte wichtiger als ein Farb­unterschied. Dies ist wichtig, da der Leuchtdichte­kontrast die Erstellung von Inhalten ermöglicht, die selbst von Personen mit Farbenblinderung gesehen werden können. Mit diesem Verständnis kann die Leuchtdichte so manipuliert werden, dass Farben, die aufgrund ihrer niedrigen Leuchtdichte schwer zu sehen sind, besser lesbar gemacht werden können, indem sie gegen eine andere mit kontrastierender Leuchtdichte gestellt werden. Eine interessante Studie der NASA über die Farbe Blau bemerkte beispielsweise, dass diese Farbe, die eine geringe Leuchtdichte hat, lesbar gemacht werden kann, wenn _darauf geachtet wurde, einen ausreichenden Leuchtdichtekontrast zu erreichen_ (Aus dem Artikel, [Designing with blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Berechnungen für die relative Leuchtdichte sind keine beiläufigen Berechnungen. Glücklicherweise gibt es [online Leuchtdichte- und Kontrast­prüfer](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen zur [Berechnung relativer Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farbe wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bands sichtbaren Lichts von Rot über Gelb und Grün bis Blau. Unsere Empfindlich­keiten gegenüber diesen verschiedenen Farb­tönen sind nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen genannt werden, sind darauf abgestimmt, einige Farben mehr als andere zu erkennen. Etwa 65% der Zapfen sind _am meisten_ empfindlich gegenüber Gelb/Grün, reagieren jedoch auch auf Rot (wir werden diese "rote Zapfen" nennen). 30% sind grün­empfindlich, und nur [5% sind blau­empfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es weit weniger blau­empfindliche Zapfen gibt als die beiden anderen Typen, sind diese Zapfen sehr empfindlich, was teilweise ihre geringere Anzahl ausgleicht.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, da blaue Zapfen nicht zur Leuchtdichte beitragen und wir weit weniger blaue Zapfen haben als rote oder grüne.

![Auf der linken Seite ist das Zapfen­mosaik normalen Sehens, und rechts das eines Menschen mit Protanopie, wo die roten Zapfen fehlen.](conemosaics.jpg)

Auf der linken Seite ist das zentrale Zapfen­mosaik des normalen Sehens, rechts das eines Menschen mit Protanopie, einer Form von Farbenblindheit, bei der die roten Zapfen fehlen. (Illustration von Mark Fairchild von RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und die grünen Zapfen verbinden sich, um Leuchtdichte zu schaffen, die wir als Helligkeit/Dunkelheit ohne Berücksichtigung des Farbtons betrachten können. Separat ermöglichen die roten, grünen und blauen Zapfen das normale Sehen, Millionen von Farben wahrzunehmen. Für Barrierefreiheit ist es wichtig zu wissen, dass unser Gehirn Leuchtdichte separat von Farbe (Farbton und Farbigkeit) verarbeitet.

Leuchtdichte ermöglicht feine Details im Sehen, einschließlich der Unterscheidung von Rändern und Text. Farbton und Farbigkeit tragen ein Drittel des Details der Leuchtdichte. Bilddatenkomprimierung nutzt diese Tatsache aus. Als Beispiel sub­sampelt der [h.264 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Farbe mit einem Viertel der Auflösung der Leuchtdichte.

Für Barrierefreiheit bedeutet dies, dass Leuchtdichte­kontrast kritisch wichtig für Text ist. Farbe, als Farbton und Farbigkeit, ist wichtig für das _Unterscheiden_ von Elementen wie verschiedenen Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Punkt, der zu beachten ist, ist die Farbe oder Leuchtdichte, die eine Farbe umgibt. Farben erscheinen unterschiedlich, je nachdem, was sie umgibt. Im folgenden Bild sind sowohl die gelben Punkte als auch die grauen Quadrate dieselbe sRGB-Farbe. Kontext-sensitive Farb­wahrnehmung lässt sie unterschiedlich erscheinen; die Bild­verarbeitung Ihres Gehirns passt die Wahrnehmung basierend darauf an, was es glaubt im Schatten oder nicht zu sein.

![Ein Bild eines Schachbretts, bei dem identische Farben unterschiedlich aussehen, wenn sie im Schatten sind](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild sind identische Farben auf Ihrem Monitor, aber sie erscheinen aufgrund des Kontextes unterschiedlich. (Bild D.Lyon)

Unser Kontrast-, Helligkeits- und Farb­wahrnehmung wird vom Kontext der nahegelegenen Farben und anderen Designelementen oder Bild­eigenschaften beeinflusst. Dies macht das Vorher­sagen von Kontrast zu einer Herausforderung. Es handelt sich nicht nur um ein mathematisches Verhältnis zwischen zwei Farben.

Zusammengefasst ist Farbe genauso viel über menschliche Physiologie und Wahrnehmung im Gehirn wie über die Messung von Licht von einem Computerbildschirm. Es ist auch wichtig zu verstehen, dass die Umgebungs­licht­umgebung die Fähigkeit, Farbe und Kontrast wahrzunehmen, beeinflusst. Licht und seine Messungen sind linear, aber menschliches Sehen und Wahrnehmung sind es nicht.

## Anpassung

Unsere Augen passen sich nicht gleichmäßig an, wenn sie von hellen Bereichen zu dunklen und umgekehrt wechseln. Dies liegt an den physiologischen Eigenheiten, wie unsere Augen gebaut sind. Dies beeinflusst die Fähigkeit eines Nutzers, Text gegen einen Hintergrund zu lesen. Mindestens zwei Arten von Anpassungen finden statt: lokale Anpassung und Anpassung an eine Umgebung.

Lokale Anpassung erfolgt direkt auf der "Seite", die ein Leser betrachtet. Wenn Sie beispielsweise blauen Text innerhalb eines grauen "hervorgehobenen" Bereichs haben, wird Ihre Wahrnehmung dieses blauen Textes mit einem grauen Highlight unterschiedlich sein, wenn er sich in einem schwarzen {{HTMLElement("div")}} befindet, oder in einem weißen. Dies wird _lokale_ Anpassung genannt. Dieser Unterschied in der Fähigkeit, den Text wahrzunehmen, wird beeinflusst, auch wenn das Umgebungslicht im Raum nicht verändert wird.

Die Implikation besteht darin, dass Webentwickler, die die Lesbarkeit von Text gegen einen Hintergrund verbessern möchten, die Prinzipien der lokalen Anpassung nutzen können.

Dunkelanpassung an niedrige Leuchtdichte ist langsam. Wenn Sie von draußen hereinkommen, wo die Sonne hell ist, in einen dunklen Raum gehen, erleben Sie die Dunkelanpassung. Es kann einige Minuten dauern, bis Sie sich daran gewöhnen.

Licht­anpassung ist das Gegenteil. Von einem dunklen Raum ins helle Sonnenlicht gehen, ist schneller, kann aber auch schmerzen.

Die Implikation ist, dass Webentwickler, die die Lesbarkeit von Text verbessern möchten, bei dem sich die Umgebungs­bedingungen eines Raumes geändert haben, die `AmbientLightSensor`-Schnittstelle und die [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) Media Query nutzen können.

## Sättigung

Sättigung verdient eine besondere Erwähnung in Diskussionen über Farbe ("Farbtöne") und Barrierefreiheit. Im Allgemeinen konzentriert sich der meiste Fokus auf Leuchtdichte, wenn versucht wird sicherzustellen, dass genug Kontrast zwischen Text und seinem Hintergrund besteht oder die Möglichkeit von Anfällen bei Personen, die auf Lichteinwirkung empfindlich reagieren, bewertet wird. Ein Aspekt von Farbe ("Farbtönen"), unabhängig von der Leuchtdichte, verdient besondere Beachtung, da er auf Barrierefreiheit anwendbar ist: das Konzept der Sättigung. Dies liegt an seiner Fähigkeit, bei Personen, die auf Lichteinwirkung empfindlich reagieren, Anfälle zu verursachen, unabhängig von der Leuchtdichte der Farbe. Wie bei [dem speziellen Fall von Rot](#der_spezielle_fall_von_rot) diskutiert, bemerkten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x), dass _unabhängig von der Leuchtdichte ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen wird_.

Sättigung wird manchmal als die "Reinheit" oder "Intensität" einer Farbe beschrieben. Obwohl diese gute Definitionen für "Pigmente" im Farbsatz eines Künstlers sind, sind sie nicht so genau wie Farb­definitionen von einem Computerbildschirm.

Wenn es um Farben auf einem Monitor geht, sind gesättigte Farben von einer bestimmten Wellen­länge. Während die Definition von Sättigung für jeden Farbraum unterschiedlich sein kann, ist die Sättigung leicht messbar. Der Schlüssel ist zu wissen, in welchem Farbraum Sie arbeiten und bereit sein, ihn bei Bedarf zu konvertieren.

Die Farb­räume, die am häufigsten in Betracht gezogen werden, wenn es um Lichtempfindlichkeit geht, sind die RGB, HSL und HSV, auch bekannt als HSB, Farb­räume. Der HSV-Farbraum, der für _Farbton_, _Sättigung_ und _Wert_ steht, und das Synonym HSB, das für _Farbton_, _Sättigung_ und _Helligkeit_ steht, sind in CSS als {{cssxref("color_value/hwb")}} für _Farbton_, _Weißanteil_ und _Schwarzanteil_ dargestellt.

Es ist wichtig zu wissen, in welchem Farbraum Sie arbeiten. Zum Beispiel haben gesättigte Farben eine Helligkeit von `0.5` in HSL, während sie in HWB einen Wert von `1` haben. Sättigung im RGB-Farbraum wird normalerweise durch einen RGB-Wert von `255` oder `100%` für die betreffende Farbe angegeben. Zum Beispiel hat ein gesättigtes Rot mit dem hexadezimalen Wert `#ff0000` einen RGB-Wert von `rgb(255 0 0)` und einen HSL-Wert von `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit einem hexadezimalen Wert von `#ff3300` hat einen RGB-Wert von `rgb(255 51 0)` und einen HSL-Wert von `hsl(12 100% 50%)`. Beide sind "gesättigte" Rottöne. Es sind zwei verschiedene "Farbtöne", aber beide werden als gesättigte Farbe angesehen.

Sättigung ist nicht Helligkeit. Helligkeit bezieht sich darauf, wie viel Weiß oder Schwarz mit einer Farbe gemischt wird. Man kann die Sättigung verringern, indem man Weiß, Schwarz oder Grau zur Farbe hinzufügt; um das Beispiel weiter zu treiben, kann die Helligkeit durch das Hinzufügen von Weiß erhöht werden, was die Sättigung verringert. Ein typisches Beispiel ist das Hinzufügen von Weiß zu Rot, um die Farbe Rosa zu erhalten. Rosa wird als entsättigtes Rot betrachtet.

### Sättigung und Leuchtdichte

Es gibt an den Extremen der Leuchtdichte und den Extremen von Schwarz und Weiß einen Verlust an Sättigung. In NASA's [Auswirkungen der Leuchtdichte auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php), weisen sie darauf hin, dass es einen Verlust an Sättigung bei niedrigen Leuchtdichten und auch, "…den Verlust an Sättigung bei hohen Leuchtdichten–die Farben konvergieren auf Weiß."

## Farbkombinationen

Kontrast allein reicht nicht aus, wenn es um barrierefreie Betrachtungen geht. Bei Animationen sind bestimmte Farb­kombinationen eher dazu geeignet, photo­empfindliche Anfälle bei denjenigen auszulösen, die dafür anfällig sind, als andere. Beispielsweise sind alternierende Blitze zwischen Rot und Blau problematischer als alternierende Blitze zwischen Grün und Blau. Es wurde spekuliert, dass dies daran liegt, dass die "rotempfindlichen" Zapfen unserer Augen, die dazu neigen, sich um die Fovea (in der Nähe der Mitte) zu sammeln, physikalisch an einem anderen Ort als die "blauempfindlichen" Zapfen unserer Augen aufgestellt sind, die sich von der Fovea weg und zu den Rändern hin befinden. Die elektrischen Signale vom Auge zum Gehirn haben viel aufzulösen, während die Information in unseren Gehirnen verarbeitet wird.

Einige Farben sind eher [Epilepsie­auslöser](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Komplexe Mechanismen in der Hirndynamik können durch einige Farb­kombinationen stärker moduliert werden als durch andere. Zum Beispiel verursacht ein rot-blinkender Stimulus größere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus.

Bestimmte Farb­kombinationen können auf einem Computerbildschirm oder mobilen Gerät sehr problematisch sein, und einige Farb­kombinationen können einige Beeinträchtigungen beeinträchtigen. Die Kombination von Rot/Blau ist ein solches Beispiel.

- Verlassen Sie sich nie nur auf den Farbton, um Details zu unterscheiden. Ein ausreichender Leuchtdichte­kontrast ist erforderlich.
- Das Grün in einem Monitor macht den Großteil der Leuchtdichte (Licht) aus, sodass es normalerweise einen erheblichen Anteil der helleren Farben ausmacht.

### Arbeiten mit Blau

Einige Personen können nicht zwischen allen Farben unterscheiden. Einige Farben, wie reines Blau, sind niedrig in Leuchtdichte. Farben, die niedrig in Leuchtdichte sind, sollten die dunkleren der kontrastierenden Farben sein. Blau ist auch sehr niedrig in Auflösung. Es gibt weit weniger blaue Zapfen, und sie sind in unserem peripheren Sichtfeld verstreut und nicht in unserem zentralen Sichtfeld vorhanden. Das menschliche Auge sieht Blau mit einer geringeren Auflösung als Grün und Rot.

Dies führt zu einigen Richtlinien zur Verwendung von Blau:

- Reines Blau sollte typischerweise das dunkelste von zwei Farben sein.
- Wenn Blau als das hellere der beiden Farben verwendet wird, fügen Sie Grün hinzu, um den Kontrast zu erhöhen und die Lesbarkeit zu verbessern.

Die Natur des blauen Lichts führt dazu, dass es an einem anderen Ort auf der Netzhaut fokussiert wird als Rot, sodass eine reine rote und eine reine blaue Farbe, die direkt nebeneinander liegen, möglicherweise "flimmern", wenn sie nebeneinander sind.

## Der spezielle Fall von Rot

Nicht alle Farben ("Farbton") werden von unseren Gehirnen ähnlich verarbeitet. Menschliche Physiologie und Psychologie werden allgemein gesprochen anders vom Farbton Rot beeinflusst, als von anderen Farben. Wir reagieren physiologisch sowie psychologisch auf Farben. Zum Beispiel wurde gezeigt, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten eine ["Graustufen"-Einstellung als Barrierefreiheits­option](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options), die Menschen helfen kann, die auf Licht­empfindung empfindlich reagieren. Um die Graustufen­einstellung nachzuahmen, verwenden Sie die CSS {{cssxref("filter")}} Eigenschaft mit einer {{cssxref("filter-function/grayscale")}} oder {{cssxref("filter-function/saturate")}} {{cssxref("filter-function")}}.

### Gesättigtes Rot

"Gesättigtes Rot" ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür.

Das Konzept der Farb­sättigung ist schwer zu verstehen, wenn man nur auf Zahlen und Terminologie schaut, also überlegen Sie, das Bild unten zu betrachten, um das Konzept der Sättigung einer Farbe zu veranschaulichen:

![Rote Sättigung von Wikimedia Commons svg, gespeichert als png Ausdruck: Datumizer [CC0]](320px-red_saturations.svg.png)

Die gleiche "Farbe" bewegt sich von der am wenigsten gesättigten auf der linken Seite zu der am meisten gesättigten auf der rechten Seite.

_Mehr als eine "rote" Farbe kann als "gesättigtes" Rot betrachtet werden._ Zum Beispiel hat die Farbe `#990000` bei `hsl(0 100% 30%)` eine volle Sättigung, ist jedoch weniger hell als die oben beschriebenen Farben. Ähnlich hat die Farbe `#8b0000` auch eine Sättigung von 100%.

Nicht alle gesättigten Rottöne können im RGB-Spektrum oder anderen Spektren, die üblicherweise in der Webentwicklung verwendet werden, gut dargestellt werden. Laut Wikipedia's Seite über "Shades of Red" ist die Farbe "Karmin" ein gesättigtes Rot, das in seiner Pigmentform hauptsächlich rotes Licht mit Wellenlängen über 600nm enthält; der Artikel stellt besonders fest, dass "Karmin" dem extremen Spektrum nahe ist. Dies setzt es weit abseits der standardmäßigen Farb­räume (RGB und CMYK), und sein angegebener RGB-Wert ist nur eine schlechte Annäherung."

### Gesättigtes rotes Blinken

Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Personen mit traumatischer Hirnverletzung beeinflusst, erfordert Farbe im rot­­spektralen Wellen­längenbereich besondere Aufmerksamkeit und Tests.

Gregg Vanderheiden stellte bei Tests des _Photosensitive Epilepsy Analysis Tools_ fest, dass die Anfall­raten höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Anfälle

Fortlaufendes Blinken heller/dunkler mit Frequenzen über drei Blitzen pro Sekunde haben gezeigt, photische Anfälle bei einigen Menschen auszulösen. Es wurde auch festgestellt, dass spezielle, sehr regelmäßige, kontrastreiche Muster, wie parallel weiße und schwarze Streifen, Anfälle auslösen können.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) präsentieren mehrere grundlegende Richtlinien:

1. Einzelne, doppelte oder dreifache Blitze in einer Sekunde sind akzeptabel, aber eine Sequenz von Blitzen wird nicht empfohlen, wenn mehr als drei Blitze innerhalb einer Sekunde auftreten.
2. Wenn helle und dunkle Streifen gezeigt werden, sollte das Muster nicht mehr als fünf Paare heller-dunkler Streifen zeigen, wenn sich die Streifenrichtung ändert, oszilliert, blitzt oder im Kontrast umkehrt, oder acht Paare heller-dunkler Streifen, wenn das Muster sich nicht ändert oder kontinuierlich und gleichmäßig driftet in eine Richtung.

Weitere Empfehlungen finden Sie in der Arbeit [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysikalische Aspekte von Farbe

Farbe als Farbton und Sättigung kann unsere Stimmung beeinflussen und unsere interaktiven Erlebnisse verbessern — oder verschlechtern.

### Beispiele für die Wirkung von Farben über die reine Wahrnehmung hinaus

- **Farbe kann kulturabhängig sein:** [A Cross-Cultural Study of the Affective Meanings of Color](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farbe beeinflusst unsere Emotionen:** [Color and emotion: effects of hue, saturation, and brightness](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können auch eine positive Auswirkung auf unsere Emotionen haben:** [Emotion Variation from Controlling Contrast of Visual Contents through EEG-Based Deep Emotion Recognition](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Einige Farben können unsere Zeitwahrnehmung beeinflussen:** [Color and time perception: Evidence for temporal overestimation of blue stimuli](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat auch einen erheblichen Effekt auf Helligkeit und Blendung:** [Blue and glare & brightness](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rote Brillen können vermehrtes Glück oder Freude verursachen:** [Looking Through "Rose-Tinted" Glasses: The Influence of Tint on Visual Affective Processing](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot ist bekannt dafür, signifikante Auswirkungen auf unser Verhalten zu haben:** [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass für Personen, die eine traumatische Hirnverletzung erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- CSS {{cssxref("color")}} Eigenschaft
- CSS {{cssxref("&lt;color&gt;")}} Daten­typ
- [Web-Barrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014
- [Red Desaturation](https://www.smartoptometry.app/red-desaturation/) Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augen­ärzte einen Test mit ihm einrichten, um die Integrität des Sehnervs zu beurteilen.
- [Visuelle und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
