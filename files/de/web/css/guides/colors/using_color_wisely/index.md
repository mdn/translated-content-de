---
title: Farbe weise verwenden
slug: Web/CSS/Guides/Colors/Using_color_wisely
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Auswahl der richtigen Farben für eine Website kann knifflig sein, besonders wenn Sie nicht in Kunst, Design oder zumindest in grundlegender Farbtheorie bewandert sind. Die falsche Farbwahl kann Ihre Seite unattraktiv machen oder schlimmer noch, der Kontrast oder sich widersprechende Farben können den Inhalt unlesbar machen. Die Verwendung falscher Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, völlig unbenutzbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema auszuwählen. Auch wenn sie nicht ersetzen können, dass ein guter Designer Ihnen bei diesen Entscheidungen hilft, können sie Ihnen den Einstieg erleichtern.

### Grundfarbe

Der erste Schritt ist die Wahl Ihrer **Grundfarbe**. Diese Farbe repräsentiert Ihre Website oder deren Thema. So wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew), Blau mit dem Himmel oder dem Ozean assoziieren, ist die Wahl einer geeigneten Grundfarbe zur Repräsentation Ihrer Seite ein guter Ausgangspunkt. Es gibt viele Möglichkeiten, eine Grundfarbe auszuwählen; einige Ideen sind:

- Eine Farbe, die von Natur aus mit dem Thema Ihres Inhalts assoziiert ist, wie z.B. die bestehende Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die die Emotion darstellt, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema in Verbindung stehen. Wenn Sie eine Website über einen bestimmten Gegenstand oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Gegenstand vorhanden ist.
- Durchsuchen Sie Websites, die es Ihnen ermöglichen, viele bereits existierende Farbpaletten und Bilder anzusehen, um Inspiration zu finden.

Mehrere nützliche Browsererweiterungen können bei der Auswahl von Grundfarben helfen. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/) Browsererweiterung ein Pipettenwerkzeug zum Auswählen von Farben von jeder Webseite. Es kann auch den Durchschnitt der Farben eines Bereichs auf einer Seite nehmen.

Ein "Durchschnittsfarben"-Schnappschuss ist nützlich, weil ein scheinbar einfarbiger Block manchmal tatsächlich aus mehreren verwandten Farben besteht, wie das Blau in einem Foto von einem Ozean oder dem Himmel. Ein einzelnes blaues Pixel aus einem Foto ausgewählt kann zu einer Farbe führen, die fehl am Platz aussieht.

### Die Palette erweitern

Sobald Sie sich für Ihre Grundfarbe entschieden haben, ist der nächste Schritt, eine Palette geeigneter Farben zusammenzustellen, die Sie daneben verwenden. Mehrere Werkzeuge stehen zur Verfügung, um Farbtheorie auf Ihre Grundfarbe anzuwenden und passende zusätzliche Farben zu erstellen. Online-Tools wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel) können Ihnen dabei helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, um zu zeigen, wie sie für Menschen mit verschiedenen Formen von Farbenblindheit aussehen. Siehe [Farbe und Barrierefreiheit](#farbe_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Beim Entwerfen Ihrer Palette müssen Sie wahrscheinlich auch einige neutrale Farben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und ein oder mehrere Grautöne hinzufügen.

> [!NOTE]
> Normalerweise ist es am besten, die geringste Anzahl an Farben zu verwenden, die möglich ist. Wichtige Inhalte hervorzuheben, anstatt alles mit Farbe zu versehen, wird mehr Wirkung haben und Ihr Inhalt wird lesbarer sein.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie liegt außerhalb des Rahmens dieses Artikels, jedoch gibt es viele Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte einführt, was Farbe ist, wie sie wahrgenommen wird und wie man Farben verwendet, um Ideen auszudrücken. Präsentiert von Pixar-Künstlern und Designern.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Der Wikipedia-Eintrag zur Farbtheorie bietet großartige Informationen aus technischer Sicht. Er wird Ihnen wahrscheinlich nicht bei der Farbauswahl helfen, ist aber dennoch voller nützlicher Informationen.

## Farbe und Barrierefreiheit

Stellen Sie sicher, dass Ihr Inhalt [zugänglich](/de/docs/Web/Accessibility) ist. Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility", "Barrierefreiheitsproblem")}} darstellen kann. Unangemessene oder unachtsame Verwendung von Farbe kann zu einer Website oder App führen, die ein Teil Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenem Traffic, verlorenen Geschäften und möglicherweise sogar zu einem Problem in der Öffentlichkeitsarbeit oder einem Rechtsstreit führt. Daher ist es wichtig, Ihre Farbverwendung sorgfältig zu überlegen.

Es ist wichtig, [Farbe und Luminanz zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu berücksichtigen. Es gibt mehrere Arten; die häufigste ist Rot-Grün-Farbenblindheit, bei der Menschen nicht zwischen den Farben Rot und Grün unterscheiden können. Es gibt auch andere Arten, die von der Unfähigkeit reichen, zwischen bestimmten Farben zu unterscheiden, bis hin zur völligen Unfähigkeit, Farben zu sehen. Es gibt sogar Farb- und Animationskombinationen, die bei Ihren fotosensiblen Nutzern zu [Anfällen](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) führen können.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache ist, wenn es um Barrierefreiheit geht, wird bei Animationen, besonders bei schnellen, die [Reduzierung des Farbkontrasts](/de/docs/Web/Accessibility/Guides/Seizure_disorders#reduce_contrast) bei animierten Elementen das Risiko von Anfällen verringern. Wenn Sie Animationen verwenden, verwenden Sie die [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) {{cssxref("@media")}} Abfrage-Funktion, um Animationen für Benutzer zu reduzieren, die diese Präferenz ausgewählt haben.

Dabei sollten Sie jedoch sicherstellen, dass ein ausreichender [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und den Vordergrundinhalten besteht, um die Lesbarkeit zu gewährleisten. Verwenden Sie niemals Farbe als einzigen Weg, um Informationen zu vermitteln. Wenn Sie beispielsweise den Erfolg eines Vorgangs mit einem grünen Rahmen um das zugehörige UI-Element anzeigen und den Misserfolg mit einem roten Rahmen, können Benutzer mit Rot-Grün-Farbenblindheit Ihre Website möglicherweise nicht richtig nutzen. Verwenden Sie stattdessen Text- und Farbmarkierungen zusammen, um diese Benutzer einzubeziehen. Beispielsweise wären ein grünes Häkchen und ein rotes Kreuz besser.

## Beispiel für die Gestaltung einer Farbpalette

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars stattfindet. Eine [Google-Suche nach Fotos von Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbfotos.

Verwenden Sie ein Farbauswahlwerkzeug, um ein Farbmuster für die Grundfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` ausgewählt, eine rostige orange-rote Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu entwickeln. Beim Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als Nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das "Base RGB"-Feld in der unteren linken Ecke des Werkzeugs ein:

![Nach Eingabe der Grundfarbe](paletton2.png)

Wir sehen nun eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Grundfarbe hervorsticht, klicken wir auf den "add complementary" Schalter unter dem Menü, das Ihnen die Auswahl des Palettentyps ermöglicht. Die Standardeinstellung war "Monochromatic". Paletton berechnet eine geeignete Akzentfarbe; ein Klick auf die Akzentfarbe in der unteren rechten Ecke verrät uns, dass diese Farbe `#508D7C` ist.

![Jetzt mit ergänzenden Farben enthalten.](paletton3.png)

Wenn die vorgeschlagene Farbe für Ihre Bedürfnisse nicht geeignet ist, können Sie das Farbschema ändern. Beispielsweise, wenn die vorgeschlagene grünliche blaue Farbe nicht passt, wählen Sie das Triad-Farbschema-Symbol, was zu folgendem Ergebnis führt:

![Triad-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das grau-blaue oben rechts. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie z.B. Überschriften, Registerkarten-Hervorhebungen oder andere Indikatoren auf der Website:

![Triad-Farbschema ausgewählt](paletton-color-detail.png)

Nun haben wir unsere Grundfarbe und unseren Akzent. Wir haben auch ein paar ergänzende Schattierungen von beiden, die für Farbverläufe oder als Akzentfarbe zur Anzeige von Fokuspunkten verwendet werden können, wie z.B. Zugriffe auf Links. Die Farben können in verschiedenen Formaten exportiert werden, um sie zu verwenden.

Sie sollten auch neutrale Farben wählen. Finden Sie eine Farbe, die genug Kontrast zu Ihrem Text hat, um ihn scharf und lesbar zu machen, während Sie sicherstellen, dass sie nicht unangenehm für die Augen ist. Wenn der Kontrast zu niedrig ist, wird Ihr Text durch den Hintergrund verwaschen und unlesbar. Ist der Kontrast zu hoch, könnte der Benutzer Ihre Seite als grell und unangenehm empfinden.

## Farben, Hintergründe, Kontrast und Drucken

Ihre Website kann beim Drucken sehr unterschiedlich aussehen im Vergleich zu dem, was der Benutzer auf seinem Bildschirm sieht.
Beim Drucken Ihrer Seite kann der Benutzer auswählen, dass sie nur in Schwarz-Weiß drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und -bilder, wenn sie Dokumente drucken.

Am wichtigsten ist normalerweise der Text selbst, aber wenn Ihre Hintergrundfarben und Bilder sorgfältig ausgewählt und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass er keine Anpassungen am Aussehen des Inhalts vornehmen soll.

Der Standardwert von `print-color-adjust: economy` gibt an, dass der Browser Aussehensänderungen vornehmen darf, die erforderlich sind, um die Lesbarkeit und/oder Druckökonomie des Inhalts zu optimieren, abhängig von der Art des Ausgabegeräts, auf dem das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` einstellen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, speziell entwickelt wurden, um am besten mit den Farben und Bildern zu arbeiten, wie sie sind.
Mit diesem Einstellwert wird der Browser das Aussehen des Elements, auf das dieser Wert angewendet wird, nicht verändern, und es gemäß Ihrer CSS-Vorgaben zeichnen.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzereinstellungen anbietet, um die Ausgabe zu ändern (z.B. eine "Hintergründe nicht drucken"-Checkbox im Druckdialogfeld), überschreibt dies den Wert von `print-color-adjust`.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Farbe und Luminanz verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
