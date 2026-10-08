---
title: "Barrierefreiheit im Web: Farben und Luminanz verstehen"
short-title: Farben und Luminanz
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Farben, Luminanz und Sättigung zu verstehen, ist für die Gestaltung und Lesbarkeit für alle sehenden Nutzer wichtig. Für Menschen mit eingeschränktem Sehvermögen oder Farbsehstörungen sowie für Menschen mit bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen ist es unerlässlich.

Barrierefreiheitsrichtlinien definieren einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Menschen mit eingeschränktem Sehvermögen. Sie enthalten außerdem Vorgaben, die Menschen mit Farbsehstörungen helfen sollen, die häufig als „Farbenblindheit“ bezeichnet werden. Farben zu verstehen, ist auch wichtig, um [Krampfanfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit vestibulären oder anderen neurologischen Störungen zu vermeiden.

## Überblick

Die Auswahl und Verwendung von Farben ist ein wesentlicher Bestandteil der Barrierefreiheit. Oberflächlich betrachtet scheint das Thema einfach. Tatsächlich ist es komplex: Die Farbwahrnehmung hängt ebenso von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn ab wie vom Licht, das ein Computerbildschirm aussendet.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Eine Farbe wird auf demselben Computerbildschirm in einem gut beleuchteten Raum anders wahrgenommen als in einem dunklen Raum. Für die Barrierefreiheit haben manche Farbkombinationen größere Auswirkungen als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) – manche Schriftarten sind so dünn oder verschnörkelt, dass sie selbst Barrierefreiheitsprobleme verursachen –, Hintergrundfarbe, die Größe der Hintergrundfläche um den Text herum, Pixeldichte und weitere Faktoren beeinflussen, wie Farben auf dem Bildschirm dargestellt werden.

Auch der Abstand zum Bildschirm, die Umgebung, die Gesundheit der Augen und weitere Faktoren beeinflussen, wie eine betrachtende Person die Farbe aufnimmt. Wie sie die Farbe wahrnimmt, nachdem das Licht ihre Augen erreicht hat, ist eine weitere Frage und kann vom allgemeinen Gesundheitszustand abhängen. Glücklicherweise können Entwickler mit [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media) Stile bereitstellen, die sich nach Nutzereinstellungen richten, darunter Einstellungen für [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).

Sofern unterstützt, gibt die Schnittstelle [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) die aktuelle Beleuchtungsstärke des Umgebungslichts am Gerät zurück. Dadurch kann eine Webseite Änderungen der Lichtintensität erkennen und den Text entsprechend anpassen. Mit den genannten Media Queries können Entwickler zudem alternative Darstellungen anbieten, wenn Nutzereinstellungen einen bevorzugten Kontrast angeben. Die Kontrastwerte lassen sich abhängig vom Aufenthaltsort und vom verwendeten Bildschirm automatisch anpassen.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz gehören zu den wichtigsten Konzepten für die Erstellung barrierefreier Webinhalte mit Farbe. Besonders wichtig ist die Luminanz: Wer versteht, was sie ist und wie sie eingesetzt wird, kann Inhalte sowohl für Menschen mit Farbsehstörungen als auch für Menschen ohne solche Störungen zugänglich machen. Der Luminanzkontrast ermöglicht es Menschen mit Farbsehstörungen, Dunkles von Hellem zu unterscheiden.

Die Luminanz muss bestimmt werden, bevor sich der Kontrast bestimmen lässt. Wenn von Farbkontrast die Rede ist, berücksichtigen die Formeln des W3C die Luminanz und nicht nur die Farben beziehungsweise Farbtöne selbst.

### Terminologie

Die Terminologie kann verwirrend sein, weil verschiedene Begriffe häufig dasselbe beschreiben. Besonders bei „Luminanz“ und „Sättigung“ ist eine genaue Unterscheidung wichtig. So wird „Sättigung“ in manchen Zusammenhängen als „Chroma“ bezeichnet; in anderen sind „Chroma“ und „Sättigung“ unterschiedliche Konzepte. Das „L“ im HSL-Farbraum wird manchmal „Luminosität“, manchmal „Helligkeit“ genannt. Selbst die Benennung geläufiger Farben kann umstritten sein: Manche beschreiben „Karmesinrot“ mit dem Hex-Wert `#990000`, andere mit `#DC143C`. In diesem Dokument verwenden wir die Terminologie der CSS-Seite {{cssxref("named-color")}}.

Bei der Arbeit mit Farben ist es wichtig zu wissen, in welchem „Farbraum“ Sie arbeiten, da unterschiedliche Farbräume unterschiedliche Messsysteme verwenden.

Im Farbdruck verwendet Ihr Drucker wahrscheinlich Tintenpatronen in Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell: Die vier Tinten _entziehen_ dem Licht bestimmte Wellenlängen und reflektieren nur den jeweils zugehörigen engen Bereich. RGB ist ein additives Farbmodell, bei dem rotes, grünes und blaues Licht in unterschiedlichen Anteilen kombiniert werden.

Der {{Glossary("RGB", "RGB-Farbraum")}} ist derzeit der vorherrschende Farbraum in der Webentwicklung. Obwohl HEX, RGB und HSL Farben unterschiedlich notieren, rechnen Browser die Werte automatisch zwischen diesen Schreibweisen um. Die [CSS-Farbmodule](/de/docs/Web/CSS/Guides/Colors) stellen zusätzliche Farbräume bereit. Da die Farbausgabe derzeit jedoch überwiegend im RGB-Farbraum gemessen wird, beziehen sich die meisten Berechnungen in diesem Dokument auf den RGB-Farbraum, genauer gesagt auf sRGB.

## Der sRGB-Farbraum

Farben lassen sich auf viele Arten definieren. Das zeigt sich am Datentyp {{cssxref("&lt;color&gt;")}}, der unter anderem RGB, dezimales RGB, RGB-Prozentwerte, HSL, HWB, LCH, Lab und CMYK umfasst.

Im digitalen Bereich basierte ein großer Teil der Technik historisch auf dem RGB-Farbraum. Das RGB-Farbmodell wurde um „Alpha“ zu RGBA erweitert, damit sich die Deckkraft einer Farbe angeben lässt. Andere Verfahren zur Farbmessung nutzen andere Farbräume und werden von modernen Bildschirmen und Browsern unterstützt. Dennoch überwiegen Messungen im RGB-Farbraum, auch bei der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, auch wenn manche Artikel zu OpenGL RGBA statt sRGB verwenden. WebGL verwendet üblicherweise das RGBA-Format; ein Beispiel finden Sie unter „[Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)“.

### CSS-Farbwerte

Auch innerhalb eines {{Glossary("color_space", "Farbraums")}} wie {{Glossary("RGB", "RGB")}} gibt es Varianten. Zum RGB-Farbraum gehören beispielsweise **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**.

Die folgenden Beispiele zeigen CSS-Schreibweisen zur Definition einer Farbe. Die Beispielfarbe ist jeweils ein vollständig deckendes Magenta:

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

Das erste Beispiel verwendet eine der definierten {{cssxref("named-color")}}s.

Wir können sRGB-Werte direkt als Prozentwerte festlegen: 0 % bedeutet „aus“ (Schwarz), 100 % den vollen Wert der jeweiligen Farbe. Die Werte stehen in der Reihenfolge Rot, Grün und Blau. Alternativ können wir sRGB-Werte direkt als Zahlen von 0 bis 255 angeben.

Danach folgen hexadezimale Farbwerte. Das Hexadezimalsystem hat die Basis 16. Ein ganzzahliger Wert von 0 bis 255 wird durch zwei Stellen dargestellt, die jeweils einen Wert von 0 bis 15 haben: mit den Ziffern 0 bis 9 und den Buchstaben a bis f für 10 bis 15. Somit gilt `ff` = `255`, `00` = `0` und `d5` = `200`. Das Zeichen „#“ vor der Farbe kennzeichnet den Wert als hexadezimal.

Wenn jedes Wertepaar aus zwei gleichen Stellen besteht, kann der Wert mit einzelnen Stellen dargestellt werden, die der Browser verdoppelt. Somit entspricht `f00` dem Wert `ff0000`. Ist ein vierter Wert vorhanden, stellt er das A in RGBA dar: den Alpha-Kanal, der die Transparenz über die Deckkraft der Farbe bestimmt. Ein höherer Wert bedeutet, dass die Farbe deckender und damit weniger transparent ist. In den obigen Beispielen stehen die Alpha-Werte `f`, `ff`, `1` und `100%` für vollständige Deckkraft.

Das Beispiel zeigt außerdem die ältere Syntax für [`rgb()` und `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). Bei dieser Syntax werden die Werte durch Kommas getrennt; für Werte mit Alpha-Kanal gibt es eine eigene Funktion. Neue Farbfunktionen verwenden nur eine Syntax mit durch Leerzeichen statt Kommas getrennten Werten. Falls ein Alpha-Kanal vorhanden ist, steht vor ihm ein Schrägstrich. Die moderne Syntax erlaubt es, Zahlen und Prozentwerte zu mischen, und unterstützt das Schlüsselwort `none`. Die ältere, kommaseparierte Syntax bietet das nicht.

Die folgenden Beispiele zeigen „HSL“, die Abkürzung für _Hue, Saturation und Lightness_ (Farbton, Sättigung und Helligkeit). Viele empfinden HSL-Farbwerte als intuitiver als RGB-Werte. Die erzeugte Farbe liegt weiterhin im sRGB-Farbraum, doch {{cssxref("color_value/hsl")}} bietet vielen eine verständlichere Syntax. Der Farbton wird als Winkel eingestellt. So lässt sich leicht eine Bedienoberfläche mit einem Drehregler oder einem kreisförmigen Steuerelement zur Anpassung des Farbtons erstellen. Beachten Sie, dass HSL die _Helligkeit_ und nicht die _Luminanz_ berücksichtigt – ein wichtiger Unterschied.

Das nächste Beispiel zeigt „HWB“, die Abkürzung für _Hue, Whiteness und Blackness_ (Farbton, Weißanteil und Schwarzanteil). Sowohl bei `hsl()` als auch bei {{cssxref("color_value/hwb")}} kann der erste Wert ein {{cssxref("number")}}- oder ein {{cssxref("angle")}}-Wert sein. Ohne Einheit wird der Wert als Winkel in `deg` interpretiert.

Es gibt weitere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen, wie Magenta mit den Farbfunktionen {{cssxref("color_value/lab")}}, {{cssxref("color_value/oklch")}} und {{cssxref("color_value/color")}} dargestellt wird.

### Umrechnungen

Wie gezeigt, kann eine Farbe innerhalb desselben Farbraums auf viele Arten ausgedrückt werden. Bei der Beschreibung von „Magenta“ im RGB-Farbraum kann dieselbe Farbe beispielsweise als dreistellige Hex-Kurzform, als sechsstelliger Hex-Wert oder als rgba-Wert mit Prozentangaben geschrieben werden. Die Hex-Werte lassen sich jeweils in denselben rgb-Wert umrechnen.

RGB orientiert sich an Hardware und geht auf die Verwendung von Röhrenbildschirmen zurück. Viele Entwickler und Designer bevorzugen die intuitivere {{cssxref("color_value/hsl")}}-Schreibweise. Browser rechnen RGB und HSL glücklicherweise automatisch ineinander um. In den Entwicklertools von Browsern lassen sich Farben zudem häufig per Umschalttaste und Klick umrechnen.

Neben den Entwicklertools gibt es zahlreiche Werkzeuge, die RGB in HSL umrechnen und sowohl die hexadezimale RGB-Schreibweise als auch die CSS-Funktionssyntax anzeigen. Viele Farbwähler liefern außerdem Werte für den WCAG-[Farbkontrast](https://webaim.org/resources/contrastchecker/).

![Farbwähler mit HSL- und RGB-Werten sowie Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) zusätzliche Farbräume. Dazu gehören die funktionalen Farbschreibweisen {{cssxref("color_value/lch")}} und {{cssxref("color_value/oklch")}} sowie die Farbkoordinatensysteme {{cssxref("color_value/lab")}} und {{cssxref("color_value/oklab")}}, mit denen sich jede sichtbare Farbe angeben lässt. Aufgrund seiner weiten Verbreitung bleibt sRGB für die Barrierefreiheit dennoch der standardmäßige und bevorzugte Farbraum.

Normen und Richtlinien zur Barrierefreiheit sind derzeit überwiegend für den sRGB-Farbraum formuliert, insbesondere bei Farbkontrastverhältnissen.

> [!NOTE]
> Fast alle heute zur Anzeige von Webinhalten verwendeten Systeme setzen eine sRGB-Kodierung voraus. Sofern nicht bekannt ist, dass die Inhalte in einem anderen Farbraum verarbeitet und dargestellt werden, sollten Autoren sie anhand des sRGB-Farbraums bewerten. Wenn Sie andere Farbräume verwenden, wenden Sie die Grundsätze für [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Farbwerte abfragen

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte auf der dezimalen RGB-Skala oder in der Form `color(srgb...)` zurück. Wird beispielsweise `Window.getComputedStyle()` für ein `<div>` mit `background-color: red` aufgerufen, gibt die Methode die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurück – einen dezimalen RGB-Wert. Bei der [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), etwa `background-color: rgb(from blue 255 0 0)`, gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe dagegen als `color(srgb 1 0 0)` zurück. Da `Window.getComputedStyle()` an Computerhardware gebunden ist, misst die Methode Farben als RGB-Werte und nicht nach der Wahrnehmung des menschlichen Auges.

### Rot-Grün-Sehschwäche

Protanopie ist eine Farbsehstörung, bei der dem Auge die rotempfindlichen Zapfen fehlen. sRGB-Farben können über die grünempfindlichen Zapfen weiterhin wahrgenommen werden, erscheinen jedoch dunkler als bei normalem Farbsehen. Sowohl Protan-Störungen (eingeschränkte Rotwahrnehmung) als auch Deutan-Störungen (eingeschränkte Grünwahrnehmung) erschweren die Unterscheidung _zwischen_ Rot und Grün.

Entwicklertools können Unterschiede im Farbsehen direkt im Browser simulieren. Der Barrierefreiheits-Inspektor von Firefox ermöglicht beispielsweise im Barrierefreiheit-Panel die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust.

![Ausschnitt aus den Firefox-Entwicklertools mit dem Menü zur Simulation unterschiedlicher Farbwahrnehmungen](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben beziehungsweise Farbtönen ist entscheidend. Farben allein reichen jedoch nicht aus, um barrierefreie Inhalte zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Luminanz berücksichtigen.

Auch die Form des Textes spielt eine Rolle. Dünne Buchstaben sind schwerer zu lesen als kräftige. Alle Schriftarten benötigen für die menschliche Wahrnehmung genügend Raum.

### Kontrast und Schriftgröße

Die [WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren „großen“ Text bei einem {{cssxref('font-weight')}} von `normal` als Text mit mindestens `18pt` (ungefähr `24px`) und bei `bold` als Text mit mindestens `14pt` (ungefähr `18.7px`). Dazu heißt es:

_Größerer Text mit breiteren Buchstabenstrichen lässt sich auch bei geringerem Kontrast leichter lesen. Deshalb sind die Kontrastanforderungen für größeren Text niedriger. So können Autoren für großen Text aus einer größeren Bandbreite von Farben wählen, was bei der Seitengestaltung insbesondere für Überschriften hilfreich ist._

Größerer Text benötigt zwar keinen so hohen Farbkontrast zum Hintergrund wie kleinerer Text, doch eine größere Schrift ist kein Allheilmittel.

Als „normale“ Druckschrift gelten meist 11,5 pt bis 12 pt, was auf dem Bildschirm 16 px entspricht. Kleinere Schrift kann zwar entzifferbar sein – jemand erkennt die Buchstaben mit einer Genauigkeit von etwa 70 % –, ist damit aber noch nicht gut lesbar. Eine Schriftgröße von 16 px ist für Menschen mit normalem Sehvermögen im Allgemeinen gut lesbar. Wer einen Visus von 20/40 hat, benötigt etwa die doppelte Größe, also ungefähr 31 px. Deshalb verlangen die WCAG-Richtlinien, dass Nutzer jeden Text vergrößern können.

Nicht nur zu kleiner, sondern auch zu großer Text ist schwer zu lesen. Bei Menschen mit einem Visus von 20/20 nimmt die Lesegeschwindigkeit bei Schriftgrößen über ungefähr 96 px ab. Besteht auf einer Seite zudem ein großer Unterschied zwischen der kleinsten und der größten Schriftgröße, kann der größere Text schlechter lesbar werden, wenn Nutzer den kleineren Text vergrößern: Die meisten Browser vergrößern beim Zoomen den gesamten Text.

Für die Barrierefreiheit gilt im Allgemeinen: Je höher der Kontrast, desto besser. Bei Animationen ist das anders. „Sicherere“ Animationen verwenden Bilder mit weniger, nicht mit mehr Kontrast. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [„Dreimaliges Blitzen oder unterhalb des Schwellenwerts: Erfolgskriterium 2.3.1 verstehen“](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie außerdem, dass Symbole einen ausreichenden Kontrast benötigen, damit sie wahrgenommen werden können. Siehe [WCAG-2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminanz

Unterschiede in der Luminanz ermöglichen es uns, Kontrast zu erkennen. Die WCAG definieren relative Luminanz als „die relative Helligkeit eines beliebigen Punktes in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß“.

Diese Aussage ist zwar richtig, kann im Zusammenhang mit dem RGB-Farbraum aber verwirren, dessen Werte als ganze Zahlen zwischen 0 und 255 angegeben werden. Weiß hat eine relative Luminanz von 100 %, Schwarz eine von 0 % (in den meisten, aber nicht allen Quellen). Bezogen auf den oben genannten W3C-Standard bedeutet das: Das auf 1 normierte Weiß hätte den RGB-Wert `rgb(255 255 255)`, das auf 0 normierte Schwarz den RGB-Wert `rgb(0 0 0)`. Weiß und Schwarz können auch als `rgb(100% 100% 100%)` beziehungsweise `rgb(0% 0% 0%)` geschrieben werden, was möglicherweise anschaulicher ist.

Woher kommen die Zahlen von 0 bis 255? Historisch speicherten Grafik-Engines jeden Farbkanal in einem Byte. Daraus ergibt sich ein Bereich ganzer Zahlen von 0 bis 255.

Die Luminanz der Primärfarben unterscheidet sich. Gelb hat beispielsweise eine höhere Luminanz als Blau. Laut dem NASA-Dokument „[Luminance Contrast in Color Graphics](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)“ wurde dies bewusst so gestaltet, _um den Weißabgleich des Monitors zu erreichen_.

Ohne die Luminanzkomponente ist ein Farbkontrastverhältnis nicht aussagekräftig. Sobald die Luminanz bestimmt ist, lässt sich auch das Farbkontrastverhältnis bestimmen.

Für die menschliche Wahrnehmung ist ein Unterschied in der Luminanz wichtiger als ein Farbunterschied. Das ist bedeutsam, weil Luminanzkontrast die Entwicklung von Inhalten ermöglicht, die auch Menschen mit Farbsehstörungen erkennen können. Farben, die wegen ihrer geringen Luminanz schwer zu sehen sind, lassen sich lesbarer machen, indem man sie vor einen Hintergrund mit gegensätzlicher Luminanz setzt. Eine NASA-Studie zur Farbe Blau stellte beispielsweise fest, dass sich diese Farbe mit ihrer geringen Luminanz lesbar darstellen lässt, wenn _auf einen ausreichenden Luminanzkontrast geachtet wird_ (aus dem Artikel [„Designing with blue“](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)).

Die Berechnung der relativen Luminanz ist nicht trivial. Glücklicherweise gibt es [Online-Werkzeuge zur Prüfung von Luminanz und Kontrast](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen dazu, wie Sie die [relative Luminanz berechnen](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farben wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen sichtbaren Bereichs des Lichtspektrums – von Rot über Gelb und Grün bis Blau. Für die verschiedenen Farbtöne sind wir nicht gleich empfindlich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), die Zapfen, reagieren auf manche Farben stärker als auf andere. Etwa 65 % der Zapfen reagieren _am stärksten_ auf Gelbgrün, aber auch auf Rot (wir nennen sie hier „rote“ Zapfen). 30 % sind grünempfindlich, und nur [5 % sind blauempfindlich](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es deutlich weniger blauempfindliche Zapfen gibt als Zapfen der beiden anderen Typen, sind sie sehr empfindlich. Das gleicht ihre geringere Anzahl teilweise aus.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben, weil blaue Zapfen nicht zur Luminanz beitragen und wir erheblich weniger blaue als rote oder grüne Zapfen haben.

![Links ein Zapfenmosaik bei normalem Farbsehen, rechts das einer Person mit Protanopie, der die rotempfindlichen Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik bei normalem Farbsehen zu sehen. Rechts ist das einer Person mit Protanopie dargestellt, einer Farbsehstörung, bei der die rotempfindlichen Zapfen fehlen. (Illustration von Mark Fairchild vom RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Die roten und grünen Zapfen wirken zusammen, um Luminanz zu erzeugen. Diese können wir uns als Hell-Dunkel-Wahrnehmung unabhängig vom Farbton vorstellen. Die roten, grünen und blauen Zapfen zusammen ermöglichen es Menschen mit normalem Farbsehen, Millionen von Farben wahrzunehmen. Für die Barrierefreiheit ist wichtig, dass unser Gehirn Luminanz getrennt von Farbe – Farbton und Farbigkeit – verarbeitet.

Luminanz ermöglicht die Wahrnehmung feiner visueller Details, darunter Kanten und Text. Farbton und Farbigkeit vermitteln nur ein Drittel der Detailinformation der Luminanz. Die Bilddatenkompression nutzt das aus: Der [Videocodec h.264](/de/docs/Web/Media/Guides/Formats/Video_codecs) erfasst Farbinformationen beispielsweise mit einem Viertel der Auflösung der Luminanz.

Für die Barrierefreiheit bedeutet das, dass der Luminanzkontrast für Text besonders wichtig ist. Farbe im Sinne von Farbton und Farbigkeit ist wichtig, um Elemente _voneinander zu unterscheiden_, etwa verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wichtiger Faktor ist die Farbe oder Luminanz der Umgebung einer Farbe. Farben erscheinen je nach Umgebung unterschiedlich. Im folgenden Bild haben sowohl die gelben Punkte als auch die grauen Quadrate jeweils denselben sRGB-Farbwert. Durch die kontextabhängige Farbwahrnehmung wirken sie verschieden: Die Bildverarbeitung Ihres Gehirns passt die Wahrnehmung daran an, welche Bereiche es für beschattet hält.

![Schachbrettmuster, bei dem identische Farben im Schatten unterschiedlich aussehen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben auf Ihrem Monitor dieselbe Farbe, wirken aufgrund ihres Kontexts jedoch unterschiedlich. (Bild: D. Lyon)

Unsere Wahrnehmung von Kontrast, Helligkeit und Farbe wird durch benachbarte Farben und andere Merkmale einer Gestaltung oder eines Bildes beeinflusst. Das erschwert die Vorhersage des wahrgenommenen Kontrasts. Er ist nicht bloß ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend hängt Farbe ebenso von der menschlichen Physiologie und der Wahrnehmung im Gehirn ab wie von der Messung des Lichts eines Computerbildschirms. Auch das Umgebungslicht beeinflusst, wie gut wir Farben und Kontraste wahrnehmen. Licht und seine Messwerte verhalten sich linear; das menschliche Sehen und die Wahrnehmung tun das nicht.

## Anpassung

Unsere Augen passen sich beim Wechsel von hellen zu dunklen Bereichen und umgekehrt nicht gleichermaßen oder auf dieselbe Weise an. Das liegt an ihrer Physiologie und beeinflusst, wie gut Nutzer Text vor einem Hintergrund lesen können. Mindestens zwei Arten der Anpassung finden statt: die lokale Anpassung und die Anpassung an das Umgebungslicht.

Die lokale Anpassung findet direkt auf der betrachteten „Seite“ statt. Stellen Sie sich blauen Text in einem grau „hervorgehobenen“ Bereich vor. Ihre Augen nehmen denselben blauen Text auf derselben grauen Hervorhebung unterschiedlich wahr, je nachdem, ob sich der Bereich in einem schwarzen oder einem weißen {{HTMLElement("div")}} befindet. Das heißt _lokale_ Anpassung. Der Unterschied in der Lesbarkeit tritt auf, obwohl sich die Beleuchtung des Raums nicht ändert.

Webentwickler können die Grundsätze der lokalen Anpassung nutzen, um die Lesbarkeit von Text vor einem Hintergrund zu verbessern.

Die Dunkeladaptation bei geringer Luminanz verläuft langsam. Wenn Sie aus hellem Sonnenlicht in einen dunklen Raum gehen, erleben Sie eine Dunkeladaptation. Es kann einige Minuten dauern, bis sich Ihre Augen angepasst haben.

Die Helladaptation verläuft umgekehrt. Der Wechsel aus einem dunklen Raum in helles Sonnenlicht geht schneller, kann aber ebenfalls unangenehm sein.

Webentwickler können die Schnittstelle `AmbientLightSensor` und die Media Query [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) nutzen, um die Lesbarkeit von Text zu verbessern, wenn sich die Lichtverhältnisse im Raum ändern.

## Sättigung

In Diskussionen über Farben beziehungsweise Farbtöne und Barrierefreiheit verdient die Sättigung besondere Beachtung. Meist steht die Luminanz im Mittelpunkt, wenn es darum geht, genügend Kontrast zwischen Text und Hintergrund sicherzustellen oder das Risiko lichtempfindlich ausgelöster Krampfanfälle zu beurteilen. Ein von der Luminanz unabhängiger Aspekt der Farbe ist dabei besonders wichtig: die Sättigung. Unabhängig von der Luminanz einer Farbe kann sie bei empfindlichen Menschen lichtempfindlich ausgelöste Krampfanfälle hervorrufen. Wie unter [„Der Sonderfall Rot“](#der_sonderfall_rot) erläutert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass _ein Übergang zu oder von gesättigtem Rot unabhängig von der Luminanz ebenfalls als Risiko gilt_.

Sättigung wird manchmal als „Reinheit“ oder „Intensität“ einer Farbe beschrieben. Für Pigmente im Farbkasten eines Künstlers sind das brauchbare Beschreibungen; für Farben auf einem Computerbildschirm sind sie weniger präzise.

Bei der Farbdarstellung auf einem Monitor sind gesättigte Farben mit bestimmten Wellenlängen verbunden. Die Definition von Sättigung kann sich je nach Farbraum unterscheiden, sie lässt sich jedoch messen. Entscheidend ist, den verwendeten Farbraum zu kennen und die Werte bei Bedarf umzurechnen.

Bei Diskussionen über Lichtempfindlichkeit werden am häufigsten die Farbräume RGB, HSL und HSV betrachtet, wobei HSV auch HSB genannt wird. HSV steht für _hue_, _saturation_ und _value_ (Farbton, Sättigung und Wert). Das synonyme HSB steht für _hue_, _saturation_ und _brightness_ (Farbton, Sättigung und Helligkeit). In CSS werden diese Konzepte als {{cssxref("color_value/hwb")}} mit _hue_, _whiteness_ und _blackness_ (Farbton, Weißanteil und Schwarzanteil) dargestellt.

Es ist wichtig zu wissen, mit welchem Farbraum Sie arbeiten. Gesättigte Farben haben in HSL beispielsweise eine Helligkeit von `0.5`, während sie in HWB den Wert `1` haben. Im RGB-Farbraum wird Sättigung für die betreffende Farbe üblicherweise durch einen RGB-Wert von `255` oder `100%` angezeigt. Ein gesättigtes Rot mit dem Hex-Wert `#ff0000` hat beispielsweise den RGB-Wert `rgb(255 0 0)` und den HSL-Wert `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit dem Hex-Wert `#ff3300` hat den RGB-Wert `rgb(255 51 0)` und den HSL-Wert `hsl(12 100% 50%)`. Beide Rottöne sind „gesättigt“. Sie haben unterschiedliche Farbtöne, gelten aber beide als gesättigte Farben.

Sättigung ist nicht dasselbe wie Helligkeit. Helligkeit beschreibt, wie viel Weiß oder Schwarz einer Farbe beigemischt ist. Die Sättigung lässt sich verringern, indem man Weiß, Schwarz oder Grau hinzufügt. Weiß kann zugleich die Helligkeit erhöhen. Ein typisches Beispiel ist die Zugabe von Weiß zu Rot, wodurch Rosa entsteht. Rosa gilt als entsättigtes Rot.

### Sättigung und Luminanz

An den Extremen der Luminanz sowie bei Schwarz und Weiß geht Sättigung verloren. In der NASA-Veröffentlichung zum [Einfluss der Luminanz auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass die Sättigung bei geringer Luminanz abnimmt. Auch bei hoher Luminanz geht sie verloren: „… die Farben nähern sich Weiß an.“

## Farbkombinationen

Bei Fragen der Barrierefreiheit reicht Kontrast allein nicht aus. In Animationen lösen manche Farbkombinationen bei dafür anfälligen Menschen eher lichtempfindlich ausgelöste Krampfanfälle aus als andere. Abwechselnde rote und blaue Lichtblitze sind beispielsweise problematischer als abwechselnde grüne und blaue. Eine mögliche Erklärung ist die unterschiedliche Lage der Zapfen im Auge: Die „rot“empfindlichen Zapfen häufen sich um die Fovea nahe dem Zentrum, während die „blau“empfindlichen Zapfen weiter von der Fovea entfernt zum Rand hin liegen. Bei der Verarbeitung der Informationen im Gehirn müssen die elektrischen Signale aus dem Auge entsprechend abgeglichen werden.

Manche Farben lösen mit höherer Wahrscheinlichkeit [epileptische Anfälle aus](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Die komplexen Vorgänge im Gehirn können durch bestimmte Farbkombinationen stärker beeinflusst werden als durch andere. Beispielsweise verursacht ein rot-blau flackernder Reiz eine stärkere Erregung der Großhirnrinde als ein rot-grüner oder blau-grüner Reiz.

Bestimmte Farbkombinationen können auf Computerbildschirmen oder Mobilgeräten besonders problematisch sein. Manche können sich zudem bei bestimmten Beeinträchtigungen störend auswirken. Rot und Blau sind ein solches Beispiel.

- Verlassen Sie sich bei der Unterscheidung von Details niemals allein auf den Farbton. Ein ausreichender Luminanzkontrast ist erforderlich.
- Grün liefert bei einem Monitor den größten Teil der Luminanz (des Lichts) und ist daher meist ein wesentlicher Bestandteil hellerer Farben.

### Mit Blau arbeiten

Manche Menschen können nicht alle Farben voneinander unterscheiden. Einige Farben, darunter reines Blau, haben eine geringe Luminanz. Farben mit geringer Luminanz sollten in einer kontrastierenden Farbkombination die dunklere Farbe sein. Blau wird außerdem mit geringerer räumlicher Auflösung wahrgenommen. Es gibt erheblich weniger blaue Zapfen; sie befinden sich vorwiegend im peripheren Sichtfeld und fehlen im Zentrum des Sehfelds. Das menschliche Auge nimmt Blau daher mit geringerer Auflösung wahr als Grün und Rot.

Daraus ergeben sich einige Richtlinien für die Verwendung von Blau:

- Reines Blau sollte von zwei Farben in der Regel die dunklere sein.
- Wenn Blau die hellere der beiden Farben sein soll, fügen Sie Grün hinzu, um den Kontrast und die Lesbarkeit zu verbessern.

Blaues Licht wird aufgrund seiner Eigenschaften an einer anderen Stelle der Netzhaut fokussiert als rotes Licht. Daher können ein reines Rot und ein reines Blau, die unmittelbar aneinandergrenzen, nebeneinander zu „flimmern“ scheinen.

## Der Sonderfall Rot

Unser Gehirn verarbeitet nicht alle Farben beziehungsweise Farbtöne auf dieselbe Weise. Rot beeinflusst die menschliche Physiologie und Psychologie im Allgemeinen anders als andere Farben. Wir reagieren sowohl körperlich als auch psychologisch auf Farben. Beispielsweise wurde gezeigt, dass [manche Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten als Barrierefreiheitsoption eine [„Graustufen“-Einstellung](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options) an, die lichtempfindlichen Menschen helfen kann. Um eine Graustufendarstellung nachzuahmen, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit einer {{cssxref("filter-function/grayscale")}}- oder {{cssxref("filter-function/saturate")}}-{{cssxref("filter-function")}}.

### Gesättigtes Rot

„Gesättigtes Rot“ ist ein besonderer Risikofall, für den es spezielle Tests gibt.

Farbsättigung ist allein anhand von Zahlen und Begriffen schwer zu verstehen. Das folgende Bild veranschaulicht das Konzept:

![Rotsättigung von Wikimedia Commons, SVG als PNG gespeichert; Namensnennung: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe „Farbe“ geht von der geringsten Sättigung links zur höchsten Sättigung rechts über.

_Mehr als ein Rotton kann als „gesättigtes“ Rot gelten._ Beispielsweise ist die Farbe `#990000` mit `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Auch `#8b0000` hat eine Sättigung von 100 %.

Nicht alle gesättigten Rottöne lassen sich im RGB-Spektrum oder in anderen bei der Webentwicklung üblichen Farbumfängen gut darstellen. Laut dem Wikipedia-Artikel „Shades of Red“ ist „Carmin“ ein gesättigtes Rot, das als Pigment vor allem rotes Licht mit Wellenlängen über 600 nm enthält. Der Artikel merkt ausdrücklich an, dass „Carmin“ nahe am Rand des Spektrums liegt. Damit befindet es sich weit außerhalb der üblichen Farbumfänge (RGB und CMYK); sein angegebener RGB-Wert ist nur eine grobe Annäherung.

### Blinkendes gesättigtes Rot

Rot kann nicht nur in der Umgebung die kognitive Leistungsfähigkeit von Menschen mit traumatischen Hirnverletzungen beeinflussen. Auch Farben im roten Wellenlängenbereich erfordern besondere Aufmerksamkeit und Tests.

Bei Tests des _Photosensitive epilepsy analysis tool_ stellte Gregg Vanderheiden fest, dass die Anfallsraten deutlich höher waren als erwartet. Die Forschenden fanden heraus, dass wir auf blinkendes gesättigtes Rot wesentlich empfindlicher reagieren. (Siehe das Video [„The Photosensitive epilepsy analysis tool“](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Krampfanfälle

Es wurde nachgewiesen, dass fortlaufende Hell-Dunkel-Wechsel mit mehr als drei Blitzen pro Sekunde bei manchen Menschen lichtinduzierte Krampfanfälle auslösen können. Auch bestimmte sehr regelmäßige, kontrastreiche Muster, etwa parallele weiße und schwarze Streifen, können Krampfanfälle auslösen.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) nennen mehrere grundlegende Richtlinien:

1. Ein, zwei oder drei Lichtblitze innerhalb einer Sekunde sind akzeptabel. Eine Blinkfolge mit mehr als drei Lichtblitzen innerhalb einer Sekunde wird nicht empfohlen.
2. Bei hellen und dunklen Streifen sollte das Muster höchstens fünf Hell-Dunkel-Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, schwingen, blinken oder ihren Kontrast umkehren. Bleibt das Muster unverändert oder bewegt es sich kontinuierlich und gleichmäßig in eine Richtung, sollten es höchstens acht Hell-Dunkel-Streifenpaare sein.

Weitere Empfehlungen finden Sie in der Veröffentlichung [„Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America“](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farbe

Farben – sowohl Farbtöne als auch ihre Sättigung – können unsere Stimmung beeinflussen und interaktive Erlebnisse verbessern oder verschlechtern.

### Beispiele für Wirkungen von Farben über das Sehen hinaus

- **Die Bedeutung von Farben kann kulturell bedingt sein:** [Eine kulturvergleichende Studie zur emotionalen Bedeutung von Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farben beeinflussen unsere Gefühle:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höherer Kontrast kann sich ebenfalls positiv auf unsere Gefühle auswirken:** [Emotionale Veränderungen durch die Steuerung des Kontrasts visueller Inhalte mittels EEG-basierter Emotionserkennung mit Deep Learning](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Manche Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Hinweise auf eine Überschätzung der Dauer blauer Reize](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau beeinflusst auch die Wahrnehmung von Helligkeit und Blendung erheblich:** [Blau, Blendung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können Glücks- oder Freudengefühle verstärken:** [Die Welt durch eine „rosarote Brille“ sehen: Der Einfluss der Tönung auf die visuelle Verarbeitung von Emotionen](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot hat bekanntermaßen erhebliche Auswirkungen auf unser Verhalten:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischen Hirnverletzungen [die kognitive Leistungsfähigkeit in einer roten Umgebung abnimmt](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS-Eigenschaft {{cssxref("color")}}
- CSS-Datentyp {{cssxref("&lt;color&gt;")}}
- [Barrierefreiheit im Web bei Krampfanfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, von Susana Martinez-Conde und Stephen L. Macknik, 1. November 2014
- [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/): Das menschliche Auge reagiert so empfindlich auf Rot, dass Augenärzte damit einen Test zur Beurteilung der Funktionsfähigkeit des Sehnervs durchführen.
- [Licht- und musterinduzierte Krampfanfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
