---
title: "Barrierefreiheit im Web: Farben und Luminanz verstehen"
short-title: Farben und Luminanz
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Farben, Luminanz und Sättigung zu verstehen, ist für die Gestaltung und Lesbarkeit für alle sehenden Nutzer wichtig. Für Menschen mit eingeschränktem Sehvermögen, Farbsehschwächen sowie bestimmten neurologischen, kognitiven und anderen Beeinträchtigungen ist es besonders wichtig.

Barrierefreiheitsrichtlinien definieren einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für sehende Menschen mit eingeschränktem Sehvermögen. Sie enthalten außerdem Vorgaben, die Menschen mit Farbsehschwächen helfen sollen, oft als „Farbenblindheit“ bezeichnet. Farben zu verstehen, ist auch wichtig, um [Krampfanfälle und andere körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) bei Menschen mit Störungen des Gleichgewichtssystems oder anderen neurologischen Erkrankungen zu vermeiden.

## Überblick

Die Auswahl und Verwendung von Farben ist ein wesentlicher Bestandteil der Barrierefreiheit. Auf den ersten Blick erscheint das Thema einfach. Tatsächlich ist es komplex, denn die Farbwahrnehmung hängt ebenso von der Physiologie des Auges und der Verarbeitung im menschlichen Gehirn ab wie vom Licht, das ein Computerbildschirm aussendet.

### Umgebung und Wahrnehmung

Die Umgebung spielt eine Rolle. Ein und dieselbe Farbe auf demselben Computerbildschirm wird in einem gut beleuchteten Raum anders wahrgenommen als in einem dunklen Raum. Für die Barrierefreiheit haben manche Farbkombinationen größere Auswirkungen als andere. Schriftgröße, [Schriftstil](https://www.nngroup.com/articles/glanceable-fonts/) (manche Schriftarten sind so dünn oder ausgefallen, dass sie schon für sich genommen Barrierefreiheitsprobleme verursachen), Hintergrundfarbe, die Größe der Hintergrundfläche um den Text, Pixeldichte und weitere Faktoren beeinflussen, wie Farben auf dem Bildschirm dargestellt werden.

Der Abstand einer Person zum Bildschirm, das Umgebungslicht, die Gesundheit ihrer Augen und weitere Faktoren beeinflussen, wie sie diese Farben aufnimmt. Wie eine Person Farben wahrnimmt, nachdem das Licht ihre Augen erreicht hat, ist eine weitere Frage und kann vom allgemeinen Gesundheitszustand abhängen. Glücklicherweise ermöglichen [Media Queries](/de/docs/Web/CSS/Reference/At-rules/@media) Entwicklern, Stile anhand von Nutzereinstellungen bereitzustellen, darunter Einstellungen für [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).

Sofern unterstützt, gibt die Schnittstelle [Ambient Light Sensor](/de/docs/Web/API/AmbientLightSensor) die aktuelle Beleuchtungsstärke des Umgebungslichts am Gerät zurück. Dadurch kann eine Webseite Änderungen der Lichtintensität erkennen und den Text entsprechend anpassen. Mit den genannten Media Queries können Entwickler außerdem alternative Darstellungen anbieten, wenn Nutzereinstellungen auf bevorzugte Kontraststufen hinweisen, und die Darstellung automatisch an die Umgebung und den verwendeten Bildschirm anpassen.

### Luminanz und Wahrnehmung

Farbe, Kontrast und Luminanz gehören zu den wichtigsten Konzepten für barrierefreie Webinhalte mit Farben. Luminanz ist besonders wichtig: Wer versteht, was sie ist und wie sie eingesetzt wird, kann Inhalte sowohl für Menschen mit Farbsehschwäche als auch für Menschen ohne Farbsehschwäche zugänglich machen. Der Luminanzkontrast ermöglicht es Menschen mit Farbsehschwäche, Dunkles von Hellem zu unterscheiden.

Die Luminanz muss bestimmt werden, bevor sich der Kontrast bestimmen lässt. Die W3C-Formeln für Farbkontrast berücksichtigen die Luminanz und nicht nur die Farben („Farbtöne“) selbst.

### Terminologie

Die Terminologie kann verwirrend sein, weil unterschiedliche Begriffe häufig dasselbe beschreiben. Besonders bei „Luminanz“ und „Sättigung“ ist eine genaue Unterscheidung wichtig. So wird „Sättigung“ in manchen Zusammenhängen als „Chroma“ bezeichnet; in anderen bezeichnen „Chroma“ und „Sättigung“ zwei verschiedene Konzepte. Das „L“ im HSL-Farbraum wird manchmal als „Luminosität“, manchmal als „Helligkeit“ bezeichnet. Selbst die Benennung geläufiger Farben kann umstritten sein. Beispielsweise beschreiben manche „Karmesinrot“ mit dem Hex-Wert `#990000`, andere mit `#DC143C`. In diesem Dokument verwenden wir die Terminologie, wie sie auf der CSS-Seite {{cssxref("named-color")}} definiert ist.

Wenn Sie mit Farben arbeiten, müssen Sie wissen, in welchem „Farbraum“ Sie sich bewegen, da unterschiedliche Farbräume unterschiedliche Messsysteme verwenden.

Beim Farbdruck enthält Ihr Drucker wahrscheinlich Tintenpatronen für Cyan, Magenta, Gelb und Schwarz (CMYK). CMYK ist ein subtraktives Modell, bei dem die vier Tinten bestimmte Wellenlängen des Lichts _entfernen_ und jeweils nur einen engen zugehörigen Bereich reflektieren. RGB ist ein additives Farbmodell, bei dem rotes, grünes und blaues Licht in unterschiedlichen Anteilen hinzugefügt werden.

Derzeit arbeiten Webentwickler überwiegend im {{Glossary("RGB", "RGB-Farbraum")}}. HEX, RGB und HSL verwenden unterschiedliche Schreibweisen, doch Browser wandeln Werte automatisch zwischen diesen Farbangaben um. Die [CSS-Farbmodule](/de/docs/Web/CSS/Guides/Colors) stellen weitere Farbräume bereit. Da die Farbausgabe jedoch derzeit überwiegend im RGB-Farbraum gemessen wird, wird bei den meisten Berechnungen in diesem Dokument der RGB-Farbraum angenommen, genauer gesagt der sRGB-Farbraum.

## Der sRGB-Farbraum

Farben lassen sich auf viele Arten definieren, wie der Datentyp {{cssxref("&lt;color&gt;")}} zeigt: unter anderem mit RGB, dezimalen RGB-Werten, RGB-Prozentwerten, HSL, HWB, LCH, Lab und CMYK.

In der Digitaltechnik war ein Großteil der Technologie historisch im RGB-Farbraum angesiedelt. Das RGB-Farbmodell wurde um „Alpha“ zu RGBA erweitert, damit sich die Deckkraft einer Farbe angeben lässt. Andere Verfahren zur Farbmessung verwenden andere Farbräume und werden von modernen Bildschirmen und Browsern unterstützt. Dennoch überwiegen Farbmessungen im RGB-Farbraum, auch in der Videoproduktion.

Technologien wie [OpenGL](https://en.wikipedia.org/wiki/OpenGL) und [Direct3D](https://en.wikipedia.org/wiki/Direct3D) unterstützen die sRGB-Gammakurve, auch wenn einige Artikel zu OpenGL die Verwendung von RGBA statt sRGB beschreiben. WebGL verwendet üblicherweise das RGBA-Format; ein Beispiel finden Sie unter „[Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)“.

### CSS-Farbwerte

Auch innerhalb eines einzelnen {{Glossary("color_space", "Farbraums")}} wie {{Glossary("RGB", "RGB")}} gibt es Varianten. Zu den Varianten des RGB-Farbraums zählen beispielsweise **RGB**, **sRGB**, **Adobe RGB**, **Adobe Wide Gamut RGB** und **RGBA**.

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

Das erste Beispiel verwendet eine der definierten Farben aus {{cssxref("named-color")}}.

Wir können sRGB-Werte direkt als Prozentwerte angeben: 0 % bedeutet aus (Schwarz), 100 % den vollen Wert der jeweiligen Farbe. Die Werte stehen in der Reihenfolge Rot, Grün und Blau. Alternativ können wir die sRGB-Werte direkt als Zahlen von 0 bis 255 angeben.

Danach folgen hexadezimale Farbwerte. Das Hexadezimalsystem hat die Basis 16. Darin wird eine ganze Zahl von 0 bis 255 durch zwei Stellen dargestellt, deren Werte jeweils zwischen 0 und 15 liegen: mit den Ziffern 0–9 und den Buchstaben a–f für 10–15. Somit gilt `ff` = `255`, `00` = `0` und `d5` = `200`. Das Zeichen „#“ vor der Farbangabe kennzeichnet den Wert als hexadezimal.

Wenn alle Werte aus Paaren identischer Zeichen bestehen, lassen sie sich mit einzelnen Zeichen darstellen, die der Browser verdoppelt. Daher ist `f00` dasselbe wie `ff0000`. Ist ein vierter Wert vorhanden, entspricht er dem A in RGBA: dem Alphakanal, der über die Deckkraft die Transparenz der Farbe festlegt. Ein höherer Wert bedeutet eine höhere Deckkraft und damit geringere Transparenz. In den obigen Beispielen stehen die Alphawerte `f`, `ff`, `1` und `100%` jeweils für vollständige Deckkraft.

Das Beispiel zeigt außerdem die ältere Syntax für [`rgb()` und `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#examples). In dieser Syntax werden die Werte durch Kommas getrennt, und für Angaben mit Alphakanal gibt es eine eigene Funktion. Neuere Farbfunktionen verwenden nur eine Syntax mit durch Leerzeichen statt durch Kommas getrennten Werten. Ein vorhandener Alphakanal wird durch einen Schrägstrich eingeleitet. Die moderne Syntax erlaubt es, Zahlen und Prozentwerte zu mischen, und unterstützt das Schlüsselwort `none`; die ältere, durch Kommas getrennte Syntax tut dies nicht.

Die nächsten Beispiele zeigen „HSL“, kurz für _Hue, Saturation, and Lightness_ (Farbton, Sättigung und Helligkeit). Viele Menschen empfinden HSL-Farbwerte als intuitiver als RGB-Werte. Die resultierende Farbe liegt weiterhin im sRGB-Farbraum, doch {{cssxref("color_value/hsl")}} bietet für viele eine intuitive Syntax. Der Farbton wird als Winkel eingestellt; dadurch lässt sich leicht eine Benutzeroberfläche mit einem Drehregler oder kreisförmigen Steuerelement zur Farbtonanpassung erstellen. Beachten Sie, dass HSL _Helligkeit_ und nicht _Luminanz_ verwendet – ein wichtiger Unterschied.

Das darauffolgende Beispiel zeigt „HWB“, kurz für _Hue, Whiteness, and Blackness_ (Farbton, Weißanteil und Schwarzanteil). Sowohl bei `hsl()` als auch bei {{cssxref("color_value/hwb")}} kann der erste Wert ein {{cssxref("number")}}- oder ein {{cssxref("angle")}}-Wert sein. Ohne Einheit wird der Wert als Winkel in Grad (`deg`) interpretiert.

Es gibt weitere Farbfunktionen und Farbräume. Die letzten drei Beispiele zeigen, wie sich Magenta mit den Farbfunktionen {{cssxref("color_value/lab")}}, {{cssxref("color_value/oklch")}} und {{cssxref("color_value/color")}} darstellen lässt.

### Umrechnungen

Wie gezeigt, lässt sich eine Farbe innerhalb desselben Farbraums auf viele Arten ausdrücken. Bei der Beschreibung von „Magenta“ im RGB-Farbraum kann dieselbe Farbe als verkürzter dreistelliger Hex-Wert, als sechsstelliger Hex-Wert, als RGB-Wert oder als RGBA-Wert mit Prozentangaben dargestellt werden.

RGB ist an Hardware orientiert und spiegelt die Verwendung von Röhrenbildschirmen wider. Viele Entwickler und Designer bevorzugen die intuitive Schreibweise {{cssxref("color_value/hsl")}}. Glücklicherweise rechnen Browser RGB automatisch in HSL um. In den Entwicklertools von Browsern können Sie außerdem mit Umschaltklick auf Farbwerte zwischen Darstellungen wechseln.

Neben den Entwicklertools gibt es viele Werkzeuge, die RGB in HSL umrechnen und sowohl RGB-Hexadezimalwerte als auch die CSS-Funktionssyntax anzeigen. Viele Farbauswahlwerkzeuge geben außerdem Werte für den [Farbkontrast](https://webaim.org/resources/contrastchecker/) nach WCAG an.

![Farbauswahlwerkzeug mit HSL- und RGB-Werten sowie Farbkontrastwerten.](microcolorsc.jpg)

Wie bereits erwähnt, umfasst das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) zusätzliche Farbräume. Dazu gehören die funktionalen Farbschreibweisen {{cssxref("color_value/lch")}} und {{cssxref("color_value/oklch")}} sowie die Farbkoordinatensysteme {{cssxref("color_value/lab")}} und {{cssxref("color_value/oklab")}}, mit denen sich jede sichtbare Farbe angeben lässt. Aufgrund seiner weiten Verbreitung bleibt sRGB jedoch der Standardfarbraum und die bevorzugte Wahl für Barrierefreiheit.

Standards und Richtlinien zur Barrierefreiheit verwenden derzeit überwiegend den sRGB-Farbraum, insbesondere für Farbkontrastverhältnisse.

> [!NOTE]
> Fast alle heute verwendeten Systeme zur Anzeige von Webinhalten gehen von einer sRGB-Codierung aus. Sofern nicht bekannt ist, dass ein anderer Farbraum zur Verarbeitung und Darstellung der Inhalte verwendet wird, sollten Autoren die Verwendung des sRGB-Farbraums prüfen. Wenn Sie andere Farbräume verwenden, wenden Sie die Grundsätze für [Mindestkontrastverhältnisse](https://webaim.org/articles/contrast/#sc143) an.

### Farbwerte abfragen

Die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt Werte auf der dezimalen RGB-Skala oder als `color(srgb...)` zurück. Wird beispielsweise `Window.getComputedStyle()` für ein `<div>` mit `background-color: red` aufgerufen, gibt die Methode die berechnete Hintergrundfarbe als `rgb(255, 0, 0)` zurück – einen dezimalen RGB-Wert. Bei der [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), etwa `background-color: rgb(from blue 255 0 0)`, gibt `Window.getComputedStyle()` die berechnete Hintergrundfarbe dagegen als `color(srgb 1 0 0)` zurück. Da die Methode an Computerhardware orientiert ist, misst `Window.getComputedStyle()` Farben in RGB und nicht nach der Farbwahrnehmung des menschlichen Auges.

### Rot-Grün-Sehschwäche

Protanopie ist eine Farbsehschwäche, bei der dem Auge die Rot-Zapfen fehlen. sRGB-Farben können über die Grün-Zapfen weiterhin wahrgenommen werden, erscheinen aber dunkler als bei normalem Farbsehen. Sowohl Protanopie (Rot-Schwäche) als auch Deuteranopie (Grün-Schwäche) erschweren die Unterscheidung _zwischen_ Rot und Grün.

Mit Entwicklertools können Sie unterschiedliche Arten der Farbwahrnehmung direkt im Browser simulieren. Der Barrierefreiheits-Inspektor von Firefox ermöglicht beispielsweise die Simulation von Protanopie, Deuteranopie, Tritanopie, Achromatopsie und Kontrastverlust im Barrierefreiheitsbereich.

![Ausschnitt der Firefox-Entwicklertools mit dem Menü zur Simulation von Unterschieden in der Farbwahrnehmung](simulate_color_differences.jpg)

## Luminanz und Kontrast

### Kontrast

Der Kontrast zwischen Farben („Farbtönen“) ist entscheidend. Farben beziehungsweise Farbtöne allein reichen jedoch nicht aus, um barrierefreie Inhalte zu erstellen. Wie bereits erwähnt, muss jede Kontrastberechnung die Luminanz berücksichtigen.

Auch die Form des Textes selbst ist wichtig. Dünne Buchstaben sind schwerer zu lesen als kräftige; alle Schriftarten benötigen für die menschliche Wahrnehmung ausreichend Platz.

### Kontrast und Schriftgröße

Die [WCAG-Kontrastrichtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) definieren „großen“ Text als Text mit mindestens `18pt` (etwa `24px`) bei {{cssxref('font-weight')}} `normal` beziehungsweise mindestens `14pt` (etwa `18.7px`) bei `bold`. Dazu heißt es:

_Größerer Text mit breiteren Zeichenstrichen ist auch bei geringerem Kontrast leichter zu lesen. Daher ist die Kontrastanforderung für größeren Text niedriger. So können Autoren für großen Text aus einer größeren Bandbreite an Farben wählen, was bei der Seitengestaltung besonders für Überschriften hilfreich ist._

Größerer Text benötigt zwar keinen so hohen Farbkontrast zum Hintergrund wie kleinerer Text, doch eine größere Schrift allein löst nicht alle Probleme.

Als „normale“ Druckschrift gelten üblicherweise 11,5 bis 12 pt, was auf dem Bildschirm etwa 16 px entspricht. Eine kleinere Schrift kann zwar entzifferbar sein – man erkennt Buchstaben mit einer Genauigkeit von etwa 70 % –, ist damit aber noch nicht gut lesbar. Eine Schriftgröße von 16 px ist für Menschen mit normalem Sehvermögen im Allgemeinen gut lesbar. Eine Person mit einer Sehschärfe von 20/40 benötigt ungefähr die doppelte Größe, also etwa 31 px. Deshalb verlangen die WCAG-Richtlinien, dass Nutzer jeden Text vergrößern können.

Zu kleiner Text ist schwer zu lesen, aber auch zu großer Text kann die Lesbarkeit beeinträchtigen. Bei Menschen mit einer Sehschärfe von 20/20 nimmt die Lesegeschwindigkeit ab, wenn die Schriftgröße ungefähr 96 px überschreitet. Besteht auf einer Seite ein großer Unterschied zwischen der kleinsten und der größten Schriftgröße, wird der größere Text zudem schlechter lesbar, wenn Nutzer den kleineren Text vergrößern: Die meisten Browser vergrößern dabei den gesamten Text.

Für die Barrierefreiheit gilt grundsätzlich: Je höher der Kontrast, desto besser. Bei Animationen ist es anders. „Sicherere“ Animationen verwenden Bilder mit geringerem, nicht höherem Kontrast. Weitere Informationen zum Farbkontrast in Animationen finden Sie unter [Drei Blitze oder unterhalb des Schwellenwerts: Erfolgskriterium 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Beachten Sie außerdem, dass Icons einen ausreichenden Kontrast benötigen, damit sie wahrgenommen werden können. Siehe [WCAG-2.1-Technik G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminanz

Unterschiede in der Luminanz von Farben ermöglichen es uns, Kontraste zu sehen. Die relative Luminanz wird in den WCAG definiert als „die relative Helligkeit eines beliebigen Punkts in einem Farbraum, normiert auf 0 für das dunkelste Schwarz und 1 für das hellste Weiß“.

Diese Aussage ist korrekt, kann aber im Zusammenhang mit dem RGB-Farbraum verwirren, dessen Werte ganze Zahlen zwischen 0 und 255 sind. Weiß hat eine relative Luminanz von 100 %, Schwarz eine relative Luminanz von 0 % (in den meisten, aber nicht allen Quellen). Nach dem oben genannten W3C-Standard würde das bedeuten: Weiß, auf 1 normiert, hat den RGB-Wert `rgb(255 255 255)`, und Schwarz, auf 0 normiert, den RGB-Wert `rgb(0 0 0)`. Weiß und Schwarz lassen sich auch als `rgb(100% 100% 100%)` beziehungsweise `rgb(0% 0% 0%)` schreiben, was möglicherweise intuitiver ist.

Woher kommen die Zahlen von 0 bis 255? Grafik-Engines speicherten Farbkanäle historisch als einzelnes Byte. Daraus ergibt sich ein Bereich ganzer Zahlen von 0 bis 255.

Die Luminanz der Primärfarben unterscheidet sich. Gelb hat beispielsweise eine höhere Luminanz als Blau. Laut dem NASA-Dokument „[Luminanzkontrast in Farbgrafiken](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)“ wurde dies bewusst so gestaltet, _um den Weißabgleich des Monitors zu erreichen_.

Ohne die Luminanzkomponente ist ein Farbkontrastverhältnis nicht aussagekräftig. Sobald die Luminanz feststeht, lässt sich das Farbkontrastverhältnis bestimmen.

Für die menschliche Wahrnehmung ist ein Luminanzunterschied wichtiger als ein Farbunterschied. Das ist bedeutsam, weil Luminanzkontrast Inhalte ermöglicht, die auch Menschen mit Farbsehschwäche erkennen können. Farben, die aufgrund geringer Luminanz schwer zu sehen sind, können besser lesbar werden, wenn sie vor einer Farbe mit gegensätzlicher Luminanz stehen. Eine NASA-Studie über Blau stellte beispielsweise fest, dass diese Farbe mit geringer Luminanz lesbar sein kann, wenn _auf einen ausreichenden Luminanzkontrast geachtet wird_ (aus dem Artikel [Mit Blau gestalten](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)).

Die Berechnung der relativen Luminanz ist nicht trivial. Glücklicherweise gibt es [Online-Werkzeuge zur Prüfung von Luminanz und Kontrast](https://www.siegemedia.com/contrast-ratio) sowie Anleitungen, um die [relative Luminanz zu berechnen](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Farben wahrnehmen

Farbe ist unsere Wahrnehmung des schmalen Bereichs sichtbaren Lichts, von Rot über Gelb und Grün bis Blau. Unsere Empfindlichkeit für diese verschiedenen Farbtöne ist nicht gleich. Die lichtempfindlichen Zellen in unseren [Augen](https://www.verywellhealth.com/eye-cones-5088699), Zapfen genannt, sind auf manche Farben stärker abgestimmt als auf andere. Etwa 65 % der Zapfen reagieren _am stärksten_ auf Gelbgrün, aber auch auf Rot (wir nennen sie „Rot-Zapfen“). 30 % reagieren empfindlich auf Grün, und nur [5 % reagieren empfindlich auf Blau](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Obwohl es deutlich weniger Blau-Zapfen als Zapfen der beiden anderen Typen gibt, sind sie sehr empfindlich. Das gleicht ihre geringere Anzahl teilweise aus.

Tiefes, reines Blau wird anders wahrgenommen als andere Farben: Blau-Zapfen tragen nicht zur Luminanz bei, und wir haben deutlich weniger Blau-Zapfen als Rot- oder Grün-Zapfen.

![Links ist ein Zapfenmosaik bei normalem Farbsehen zu sehen, rechts das einer Person mit Protanopie, der die Rot-Zapfen fehlen.](conemosaics.jpg)

Links ist das zentrale Zapfenmosaik bei normalem Farbsehen zu sehen. Rechts ist das einer Person mit Protanopie abgebildet, einer Form der Farbsehschwäche, bei der die Rot-Zapfen fehlen. (Illustration von Mark Fairchild, RIT, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Rot- und Grün-Zapfen wirken zusammen, um Luminanz wahrzunehmen, die wir uns als Helligkeit oder Dunkelheit unabhängig vom Farbton vorstellen können. Rot-, Grün- und Blau-Zapfen ermöglichen zusammen die Wahrnehmung von Millionen Farben. Für die Barrierefreiheit ist wichtig, dass unser Gehirn Luminanz getrennt von Farbe (Farbton und Farbigkeit) verarbeitet.

Luminanz liefert feine visuelle Details, etwa zur Unterscheidung von Kanten und Text. Farbton und Farbigkeit übertragen nur ein Drittel der Details der Luminanz. Die Komprimierung von Bilddaten nutzt dies aus. Der [H.264-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) beispielsweise tastet Farbinformationen mit einem Viertel der Auflösung der Luminanz ab.

Für die Barrierefreiheit bedeutet das: Luminanzkontrast ist für Text besonders wichtig. Farbe im Sinne von Farbton und Farbigkeit ist wichtig, um Elemente _voneinander zu unterscheiden_, etwa verschiedene Linien auf einer Karte oder Balken in einem Diagramm.

Ein weiterer wesentlicher Faktor ist die Farbe oder Luminanz in der Umgebung einer Farbe. Farben erscheinen je nach Umgebung unterschiedlich. Im folgenden Bild haben sowohl die gelben Punkte untereinander als auch die grauen Quadrate untereinander jeweils denselben sRGB-Farbwert. Durch die kontextabhängige Farbwahrnehmung erscheinen sie unterschiedlich: Die Bildverarbeitung im Gehirn passt die Wahrnehmung daran an, welche Bereiche es für beschattet hält.

![Bild eines Schachbrettmusters, in dem identische Farben unterschiedlich aussehen, wenn sie im Schatten liegen](yellowdotcheckershadow_dlyon.png)

Die gelben Punkte in diesem Bild haben auf Ihrem Monitor identische Farben, wirken aufgrund des Kontexts aber unterschiedlich. (Bild: D. Lyon)

Unsere Wahrnehmung von Kontrast, Helligkeit und Farbe wird durch benachbarte Farben und andere Merkmale einer Gestaltung oder eines Bildes beeinflusst. Dadurch ist es schwierig, den wahrgenommenen Kontrast vorherzusagen. Er ist nicht bloß ein mathematisches Verhältnis zwischen zwei Farben.

Zusammenfassend hängt Farbe ebenso von der menschlichen Physiologie und der Wahrnehmung im Gehirn ab wie von der Messung des Lichts eines Computerbildschirms. Auch das Umgebungslicht beeinflusst, wie gut sich Farben und Kontraste wahrnehmen lassen. Licht und seine Messwerte sind linear, das menschliche Sehen und die menschliche Wahrnehmung jedoch nicht.

## Anpassung

Unsere Augen passen sich beim Wechsel von hellen zu dunklen Bereichen nicht auf dieselbe Weise und in derselben Geschwindigkeit an wie beim Wechsel von dunklen zu hellen Bereichen. Das liegt am physiologischen Aufbau unserer Augen und beeinflusst, wie gut Nutzer Text vor einem Hintergrund lesen können. Es gibt mindestens zwei Arten der Anpassung: die lokale Anpassung und die Anpassung an die Umgebungsbeleuchtung.

Die lokale Anpassung findet direkt auf der „Seite“ statt, die eine Person betrachtet. Beispielsweise nehmen Ihre Augen denselben blauen Text auf derselben grau „hervorgehobenen“ Fläche unterschiedlich wahr, je nachdem, ob sich die Fläche in einem schwarzen oder einem weißen {{HTMLElement("div")}} befindet. Das nennt man _lokale_ Anpassung. Die unterschiedliche Lesbarkeit tritt auf, obwohl sich die Raumbeleuchtung nicht ändert.

Webentwickler können sich die Prinzipien der lokalen Anpassung zunutze machen, um die Lesbarkeit von Text vor einem Hintergrund zu verbessern.

Die Dunkeladaptation an geringe Luminanz verläuft langsam. Wenn Sie von draußen aus hellem Sonnenlicht in einen dunklen Raum gehen, erleben Sie Dunkeladaptation. Es kann einige Minuten dauern, bis sich Ihre Augen angepasst haben.

Die Helladaptation verläuft umgekehrt. Der Wechsel aus einem dunklen Raum in helles Sonnenlicht geht schneller, kann aber auch unangenehm sein.

Webentwickler können die Schnittstelle `AmbientLightSensor` und die Media Query [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) nutzen, um die Lesbarkeit von Text bei veränderten Lichtverhältnissen im Raum zu verbessern.

## Sättigung

Bei der Betrachtung von Farben („Farbtönen“) und Barrierefreiheit verdient die Sättigung besondere Aufmerksamkeit. Meist liegt der Schwerpunkt auf der Luminanz, wenn ein ausreichender Kontrast zwischen Text und Hintergrund sichergestellt oder das Risiko lichtempfindlichkeitsbedingter Krampfanfälle bewertet werden soll. Ein vom Luminanzwert unabhängiger Aspekt von Farben ist für die Barrierefreiheit jedoch besonders wichtig: die Sättigung. Sie kann bei empfindlichen Menschen unabhängig von der Luminanz einer Farbe Krampfanfälle auslösen. Wie im [Sonderfall Rot](#der_sonderfall_rot) erläutert, stellten [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) fest, dass _unabhängig von der Luminanz auch ein Übergang zu oder von gesättigtem Rot als Risiko gilt_.

Sättigung wird manchmal als „Reinheit“ oder „Intensität“ einer Farbe beschrieben. Für Pigmente im Farbkasten eines Künstlers sind das brauchbare Definitionen, für Farben auf einem Computerbildschirm sind sie jedoch weniger präzise.

Bei Farben auf einem Monitor beziehen sich gesättigte Farben auf bestimmte Wellenlängen. Die Definition von Sättigung kann sich je nach Farbraum unterscheiden, sie lässt sich jedoch gut messen. Entscheidend ist, den verwendeten Farbraum zu kennen und Werte bei Bedarf umzurechnen.

Bei der Betrachtung von Lichtempfindlichkeit werden am häufigsten die Farbräume RGB, HSL und HSV berücksichtigt; HSV wird auch HSB genannt. HSV steht für _hue_, _saturation_ und _value_ (Farbton, Sättigung und Wert), das synonyme HSB für _hue_, _saturation_ und _brightness_ (Farbton, Sättigung und Helligkeit). In CSS werden sie durch {{cssxref("color_value/hwb")}} für _hue_, _whiteness_ und _blackness_ (Farbton, Weißanteil und Schwarzanteil) dargestellt.

Es ist wichtig, den verwendeten Farbraum zu kennen. Beispielsweise haben gesättigte Farben in HSL einen Helligkeitswert von `0.5`, während sie in HWB einen Wert von `1` haben. Im RGB-Farbraum wird Sättigung für die betreffende Farbe üblicherweise durch einen RGB-Wert von `255` oder `100%` angezeigt. Ein gesättigtes Rot mit dem Hex-Wert `#ff0000` hat beispielsweise den RGB-Wert `rgb(255 0 0)` und den HSL-Wert `hsl(0 100% 50%)`. Ein anderes gesättigtes Rot mit dem Hex-Wert `#ff3300` hat den RGB-Wert `rgb(255 51 0)` und den HSL-Wert `hsl(12 100% 50%)`. Beide sind „gesättigte“ Rottöne. Sie haben unterschiedliche Farbtöne, gelten aber beide als gesättigte Farben.

Sättigung ist nicht dasselbe wie Helligkeit. Helligkeit beschreibt, wie viel Weiß oder Schwarz einer Farbe beigemischt ist. Durch das Hinzufügen von Weiß, Schwarz oder Grau kann die Sättigung abnehmen. Fügt man beispielsweise Weiß hinzu, kann zugleich die Helligkeit steigen. Ein typisches Beispiel ist Rosa, das durch das Hinzufügen von Weiß zu Rot entsteht. Rosa gilt als entsättigtes Rot.

### Sättigung und Luminanz

An den Extremen der Luminanz, also in Richtung Schwarz und Weiß, geht Sättigung verloren. Im NASA-Artikel über den [Einfluss der Luminanz auf die Sättigung](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php) wird darauf hingewiesen, dass bei niedriger Luminanz Sättigung verloren geht und dass bei hoher Luminanz „… die Farben gegen Weiß konvergieren“.

## Farbkombinationen

Für die Barrierefreiheit reicht Kontrast allein nicht aus. Bei Animationen lösen manche Farbkombinationen bei anfälligen Menschen eher lichtempfindlichkeitsbedingte Krampfanfälle aus als andere. Beispielsweise sind abwechselnde rote und blaue Lichtblitze problematischer als abwechselnde grüne und blaue. Eine mögliche Erklärung ist, dass die „rot“-empfindlichen Zapfen unserer Augen überwiegend um die Fovea nahe der Mitte liegen, während die „blau“-empfindlichen Zapfen weiter von der Fovea entfernt in Richtung der Randbereiche liegen. Bei der Verarbeitung der elektrischen Signale vom Auge muss das Gehirn diese räumlich unterschiedlichen Informationen zusammenführen.

Manche Farben lösen mit höherer Wahrscheinlichkeit [epileptische Anfälle](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf) aus. Bestimmte Farbkombinationen können die komplexe Dynamik im Gehirn stärker beeinflussen als andere. Beispielsweise verursachen rot-blau flackernde Reize eine stärkere Erregung der Großhirnrinde als rot-grüne oder blau-grüne Reize.

Auf einem Computerbildschirm oder Mobilgerät können bestimmte Farbkombinationen besonders problematisch sein und bei manchen Beeinträchtigungen Schwierigkeiten verursachen. Rot und Blau sind ein Beispiel dafür.

- Verlassen Sie sich bei der Unterscheidung von Details niemals allein auf den Farbton. Ein ausreichender Luminanzkontrast ist erforderlich.
- Grün trägt bei einem Monitor den weitaus größten Teil zur Luminanz (zum Licht) bei und ist daher in der Regel ein wesentlicher Bestandteil hellerer Farben.

### Mit Blau arbeiten

Manche Menschen können nicht alle Farben voneinander unterscheiden. Einige Farben, etwa reines Blau, haben eine geringe Luminanz. Farben mit geringer Luminanz sollten bei kontrastierenden Farbpaaren die dunklere Farbe sein. Blau hat außerdem eine geringe visuelle Auflösung. Es gibt deutlich weniger Blau-Zapfen; sie sind in unserem peripheren Sichtfeld verteilt und fehlen im zentralen Sichtfeld. Das menschliche Auge nimmt Blau mit geringerer Auflösung wahr als Grün und Rot.

Daraus ergeben sich einige Empfehlungen für die Verwendung von Blau:

- Reines Blau sollte in der Regel die dunklere von zwei Farben sein.
- Wenn Blau die hellere der beiden Farben sein soll, fügen Sie Grün hinzu, um den Kontrast und die Lesbarkeit zu verbessern.

Aufgrund der Eigenschaften blauen Lichts wird es an einer anderen Stelle der Netzhaut fokussiert als rotes Licht. Reines Rot und reines Blau können deshalb „flimmern“, wenn sie unmittelbar aneinandergrenzen.

## Der Sonderfall Rot

Nicht alle Farben („Farbtöne“) werden von unserem Gehirn gleich verarbeitet. Die Farbe Rot wirkt sich im Allgemeinen anders auf die menschliche Physiologie und Psychologie aus als andere Farben. Wir reagieren auf Farben sowohl physiologisch als auch psychologisch. Beispielsweise wurde gezeigt, dass [manche Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Einige Geräte bieten als Barrierefreiheitsoption eine [„Graustufen“-Einstellung](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" an, die lichtempfindlichen Menschen helfen kann. Um die Graustufeneinstellung nachzubilden, verwenden Sie die CSS-Eigenschaft {{cssxref("filter")}} mit der {{cssxref("filter-function")}} {{cssxref("filter-function/grayscale")}} oder {{cssxref("filter-function/saturate")}}.

### Gesättigtes Rot

„Gesättigtes Rot“ ist ein besonderer, gefährlicher Fall, für den es spezielle Tests gibt.

Das Konzept der Farbsättigung lässt sich anhand von Zahlen und Begriffen allein nur schwer verstehen. Das folgende Bild veranschaulicht, was Sättigung bei einer Farbe bedeutet:

![Rotsättigung aus Wikimedia Commons, SVG als PNG gespeichert. Namensnennung: Datumizer [CC0]](320px-red_saturations.svg.png)

Dieselbe „Farbe“ verläuft von links mit der geringsten Sättigung nach rechts mit der höchsten Sättigung.

_Mehr als ein Rotton kann als „gesättigtes“ Rot gelten._ Beispielsweise ist die Farbe `#990000` mit `hsl(0 100% 30%)` vollständig gesättigt, aber weniger hell als die oben beschriebenen Farben. Auch die Farbe `#8b0000` hat eine Sättigung von 100 %.

Nicht alle gesättigten Rottöne lassen sich im RGB-Spektrum oder in anderen bei der Webentwicklung gebräuchlichen Farbbereichen gut darstellen. Laut dem Wikipedia-Artikel über „Shades of Red“ ist „Carmine“ ein gesättigtes Rot, das als Pigment überwiegend rotes Licht mit Wellenlängen über 600 nm enthält. Der Artikel weist ausdrücklich darauf hin, dass „Carmine“ nahe am Rand des Spektrums liegt. Damit liegt es weit außerhalb der üblichen Farbumfänge (RGB und CMYK); der angegebene RGB-Wert ist nur eine grobe Annäherung.

### Blinkendes gesättigtes Rot

Neben den Auswirkungen einer roten Umgebung auf die kognitiven Fähigkeiten von Menschen mit Schädel-Hirn-Trauma erfordert Farbe im roten Wellenlängenbereich besondere Aufmerksamkeit und Tests.

Bei Tests mit dem _Photosensitive epilepsy analysis tool_ stellte Gregg Vanderheiden fest, dass die Anfallsraten deutlich höher waren als erwartet. Das Team fand heraus, dass wir auf blinkendes gesättigtes Rot wesentlich empfindlicher reagieren. (Siehe das Video [The Photosensitive epilepsy analysis tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Blinken und Krampfanfälle

Wiederholtes Blinken mit einem Wechsel zwischen hell und dunkel bei mehr als drei Blitzen pro Sekunde kann bei manchen Menschen lichtinduzierte Krampfanfälle auslösen. Auch bestimmte sehr regelmäßige Muster mit hohem Kontrast, etwa parallele weiße und schwarze Streifen, können Krampfanfälle auslösen.

[Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) nennen mehrere grundlegende Empfehlungen:

1. Ein, zwei oder drei Blitze innerhalb einer Sekunde sind akzeptabel. Von einer Blitzfolge wird abgeraten, wenn innerhalb einer Sekunde mehr als drei Blitze auftreten.
2. Bei hell-dunklen Streifen sollte ein Muster höchstens fünf Hell-Dunkel-Streifenpaare enthalten, wenn die Streifen ihre Richtung ändern, schwingen, blinken oder ihren Kontrast umkehren. Bleibt das Muster unverändert oder bewegt es sich kontinuierlich und gleichmäßig in eine Richtung, sollten es höchstens acht Hell-Dunkel-Streifenpaare sein.

Weitere Empfehlungen finden Sie in der Veröffentlichung [Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Psychophysische Aspekte von Farben

Farben im Sinne von Farbtönen und Sättigung können unsere Stimmung beeinflussen und interaktive Erlebnisse verbessern oder verschlechtern.

### Beispiele für die Wirkung von Farben über das Sehen hinaus

- **Die Bedeutung von Farben kann kulturell geprägt sein:** [Eine kulturvergleichende Studie zur emotionalen Bedeutung von Farben](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **Farben beeinflussen unsere Emotionen:** [Farbe und Emotion: Auswirkungen von Farbton, Sättigung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Höhere Kontraste können sich ebenfalls positiv auf unsere Emotionen auswirken:** [Emotionsveränderung durch die Steuerung des Kontrasts visueller Inhalte mittels EEG-basierter Emotionserkennung](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Manche Farben können unsere Zeitwahrnehmung beeinflussen:** [Farbe und Zeitwahrnehmung: Hinweise auf eine zeitliche Überschätzung blauer Reize](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Blau hat außerdem erhebliche Auswirkungen auf Helligkeit und Blendung:** [Blau, Blendung und Helligkeit](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Rot getönte Brillen können das Empfinden von Glück oder Freude verstärken:** [Die Welt durch die „rosarote Brille“ sehen: Der Einfluss von Tönungen auf die visuelle Verarbeitung emotionaler Reize](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Rot hat bekanntermaßen erhebliche Auswirkungen auf unser Verhalten:** [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, S. Martinez-Conde, Stephen L. Macknik
- **Rote Umgebung:** Studien zeigen, dass bei Menschen mit Schädel-Hirn-Trauma die [kognitive Leistungsfähigkeit in einer roten Umgebung abnimmt](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- CSS-Eigenschaft {{cssxref("color")}}
- CSS-Datentyp {{cssxref("&lt;color&gt;")}}
- [Barrierefreiheit im Web im Hinblick auf Krampfanfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American, von Susana Martinez-Conde und Stephen L. Macknik, 1. November 2014
- [Rot-Entsättigung](https://www.smartoptometry.app/red-desaturation/): Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte es für einen Test zur Beurteilung der Funktionsfähigkeit des Sehnervs verwenden.
- [Licht- und musterinduzierte Krampfanfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
