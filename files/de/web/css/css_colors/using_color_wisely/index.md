---
title: Farben weise verwenden
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die richtige Auswahl der Farben für eine Website kann knifflig sein, besonders wenn Sie nicht gut in Kunst, Design oder zumindest grundlegender Farbtheorie bewandert sind. Eine falsche Farbwahl kann Ihre Seite unattraktiv machen oder schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder widersprüchlichen Farben unlesbar lassen. Die falsche Verwendung von Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen, ein gutes Farbschema auszuwählen. Obwohl sie nicht die Entscheidung eines guten Designers ersetzen können, helfen sie Ihnen dabei, einen Anfang zu finden.

### Basisfarbe

Der erste Schritt ist die Wahl Ihrer **Basisfarbe**. Diese Farbe repräsentiert Ihre Website oder ihr Thema. Genauso wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) und Blau mit dem Himmel oder dem Ozean assoziieren, ist es ein guter Anfang, eine geeignete Basisfarbe zu wählen, die Ihre Seite repräsentiert. Es gibt viele Möglichkeiten, eine Basisfarbe auszuwählen; einige Ideen beinhalten:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts assoziiert wird, wie die bestehende Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die die Emotion widerspiegelt, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema in Verbindung stehen. Wenn Sie eine Website über einen bestimmten Gegenstand oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Gegenstand vorhanden ist.
- Surfen Sie auf Websites, die Ihnen erlauben, viele vorhandene Farbpaletten und Bilder zu betrachten, um Inspiration zu finden.

Mehrere nützliche Browser-Erweiterungen können helfen, Basisfarben zu wählen. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/)-Browsererweiterung ein Pipettenwerkzeug, um Farben von jeder Webseite auszuwählen. Sie kann auch Durchschnittswerte der Farben eines Bereichs auf einer Seite nehmen.

Ein "durchschnittlicher Farbfang" ist nützlich, weil manchmal das, was wie ein massiver Farbblock aussieht, tatsächlich mehrere verwandte Farben sind, wie das Blau in einem Foto eines Ozeans oder des Himmels zu greifen. Ein einzelnes blaues Pixel aus einem Foto kann zu einer Farbe führen, die fehl am Platz aussieht.

### Die Palette ausgestalten

Sobald Sie sich für Ihre Basisfarbe entschieden haben, ist der nächste Schritt, eine Palette geeigneter Farben zu erstellen, die neben dieser verwendet werden. Es gibt mehrere Werkzeuge, um Farbtheorie auf Ihre Basisfarbe anzuwenden und geeignete zusätzliche Farben zu erzeugen. Online-Tools wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel) können Ihnen helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, sodass Sie sehen können, wie sie für Menschen mit verschiedenen Arten von Farbenblindheit aussehen. Siehe [Farbe und Barrierefreiheit](#farbe_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Beim Entwerfen Ihrer Palette müssen Sie sie wahrscheinlich auch mit einigen grundlegenden Neutralfarben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und einem oder mehreren Grautönen ergänzen.

> [!NOTE]
> In der Regel ist es besser, die geringstmögliche Anzahl von Farben zu verwenden. Farben zur Hervorhebung wichtiger Inhalte zu nutzen, anstatt alles zu färben, hat mehr Wirkung, und Ihre Inhalte werden besser lesbar.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie geht über den Rahmen dieses Artikels hinaus, jedoch gibt es viele Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie was Farbe ist, wie sie wahrgenommen wird und wie man Farben verwendet, um Ideen auszudrücken, einführt. Präsentiert von Pixar-Künstlern und -Designer.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Wikipedias Eintrag zur Farbtheorie enthält großartige Informationen aus technischer Sicht. Es wird wahrscheinlich nicht Ihrer Farbauswahl helfen, ist aber trotzdem voller nützlicher Informationen.

## Farbe und Barrierefreiheit

Stellen Sie sicher, dass Ihre Inhalte [zugänglich](/de/docs/Web/Accessibility) sind. Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility", "Barrierefreiheitsproblem")}} schaffen kann. Unsachgemäßer oder nachlässiger Gebrauch von Farben kann zu einer Website oder App führen, die ein Teil Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenem Verkehr, verlorenem Geschäft und möglicherweise sogar zu einem PR-Problem oder einer Klage führen kann. Daher ist es wichtig, Ihre Farbnutzung sorgfältig zu bedenken.

Es ist wichtig, [Farbe und Luminanz zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu berücksichtigen. Es gibt verschiedene Arten; die häufigste ist die Rot-Grün-Farbenblindheit, die Menschen daran hindert, zwischen den Farben Rot und Grün zu unterscheiden. Es gibt auch andere, die von der Unfähigkeit reichen, den Unterschied zwischen bestimmten Farben zu erkennen, bis zur vollständigen Unfähigkeit, Farben zu sehen. Es gibt sogar Farb- und Animationskombinationen, die bei Ihren fotosensitiven Nutzern [Anfälle](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) auslösen können.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache im Hinblick auf die Barrierefreiheit ist, reduziert das [Reduzieren des Farbkontrasts](/de/docs/Web/Accessibility/Guides/Seizure_disorders#reduce_contrast) bei animierten, insbesondere schnell animierten Elementen, das Risiko von Anfällen. Wenn Sie Animationen einbeziehen, verwenden Sie das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) {{cssxref("@media")}} Abfrage-Feature, um Animationen für Nutzer zu reduzieren, die diese Präferenz gewählt haben.

Stellen Sie dennoch sicher, dass Sie genug [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und Vordergrundinhalt haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie auch niemals Farbe als einzigen Weg, um Informationen zu vermitteln. Wenn Sie zum Beispiel den Erfolg einer Operation mit einem grünen Rand um das zugehörige UI-Element und einen Fehler mit einem roten Rand anzeigen, werden Nutzer mit Rot-Grün-Farbenblindheit Ihre Seite nicht ordnungsgemäß nutzen können. Verwenden Sie stattdessen Text- und Farbindikatoren zusammen, um auch diese Nutzer einzubeziehen. Ein grünes Häkchen und ein rotes Kreuzchen wären zum Beispiel besser.

## Beispiel für Palettendesign

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website eines Spiels, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos des Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbfotos.

Verwenden Sie ein Farbpicker-Werkzeug, um ein Farbbeispiel für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` gewählt, was eine rostige Orange-Rot-Farbe ist. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu erzeugen. Beim Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als Nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das "Base RGB"-Feld in der unteren linken Ecke des Tools ein:

![Nach Eingabe der Basisfarbe](paletton2.png)

Wir sehen nun eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind diese wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe hervorsticht, klicken wir auf den "add complementary"-Schalter unterhalb des Menüs, das Ihnen erlaubt, den Palettentyp auszuwählen. Der Standard war "Monochromatisch". Paletton berechnet eine passende Akzentfarbe; durch Klicken auf die Akzentfarbe in der unteren rechten Ecke erfahren wir, dass diese Farbe `#508D7C` ist.

![Nun mit ergänzten Farben.](paletton3.png)

Wenn die vorgeschlagene Farbe nicht für Ihre Bedürfnisse funktioniert, können Sie das Farbschema ändern. Wenn die vorgeschlagene grünlich-blaue Farbe nicht funktioniert, wählen Sie das Triad-Farbschema-Symbol, was zu folgendem führt:

![Triad-Farbschema gewählt](paletton4.png)

Klicken Sie auf das grau-blaue im oberen rechten Bereich. Die Farbe ist `#556E8D`. Dies kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie zum Beispiel Überschriften, Tab-Hervorhebungen oder andere Indikatoren auf der Website:

![Triad-Farbschema gewählt](paletton-color-detail.png)

Jetzt haben wir unsere Basisfarbe und unseren Akzent. Wir haben auch einige komplementäre Schattierungen von beiden, die verwendet werden können, um Farbverläufe zu erstellen oder als Akzentfarbe, um den Fokus anzuzeigen, wie zum Beispiel für Link-Hover-Zustände. Die Farben können in mehreren Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genügend Kontrast bietet, damit Ihr Text klar und lesbar ist, während sichergestellt wird, dass sie nicht unangenehm für die Augen ist. Wenn der Kontrast zu gering ist, wird Ihr Text vom Hintergrund ausgewaschen und bleibt unlesbar, aber wenn Ihr Kontrast zu hoch ist, könnte der Benutzer Ihre Seite grell und unangenehm zu betrachten finden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Seite kann beim Drucken sehr unterschiedlich aussehen im Vergleich zu dem, was der Benutzer auf seinem Bildschirm sieht.
Beim Drucken Ihrer Seite kann der Benutzer auswählen, nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und Bilder beim Drucken von Dokumenten.

Was meistens am wichtigsten ist, ist der Text selbst, aber wenn Ihre Hintergrundfarben und Bilder sorgfältig ausgewählt wurden und/oder entscheidend für die Nützlichkeit der Inhalte sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass es keine Anpassungen an der Darstellung der Inhalte vornehmen soll.

Der Standardwert `print-color-adjust: economy` zeigt an, dass der Browser Anpassungen vornehmen darf, um die Lesbarkeit und/oder Druckökonomie des Inhalts in Abhängigkeit vom Typ des Ausgabegeräts zu optimieren, auf das das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` einstellen, um dem Browser mitzuteilen, dass diejenige Elemente, auf die Sie es anwenden, speziell so gestaltet wurden, dass sie am besten mit den unveränderten Farben und Bildern funktionieren.
Mit dieser Einstellung wird der Browser das Erscheinungsbild des Elements, auf das dieser Wert angewendet wird, nicht verändern und es wie in Ihrem CSS angegeben zeichnen.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzerpräferenzen bietet, um die Ausgabe zu ändern (wie ein "Hintergründe nicht drucken"-Kontrollkästchen im Druckdialogfeld), überschreibt dies den Wert von `print-color-adjust`.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
