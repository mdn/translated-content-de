---
title: Farben weise verwenden
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die Auswahl der richtigen Farben für eine Website kann schwierig sein, besonders wenn Sie in Kunst, Design oder zumindest in grundlegender Farbtheorie nicht gut bewandert sind. Die falsche Farbauswahl kann Ihre Seite unattraktiv machen oder schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder widersprüchlichen Farben unlesbar lassen. Die Verwendung der falschen Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, absolut unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema zu wählen. Obwohl sie nicht den Rat eines guten Designers ersetzen können, der Ihnen bei diesen Entscheidungen hilft, können sie Ihnen den Einstieg erleichtern.

### Grundfarbe

Der erste Schritt besteht darin, Ihre **Grundfarbe** auszuwählen. Diese Farbe repräsentiert Ihre Website oder deren Thema. Genauso wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) oder Blau mit dem Himmel oder dem Ozean assoziieren, ist es ein guter Ausgangspunkt, eine geeignete Grundfarbe zu wählen, um Ihre Seite zu repräsentieren. Es gibt viele Möglichkeiten, eine Grundfarbe auszuwählen; einige Ideen umfassen:

- Eine Farbe, die natürlicherweise mit dem Thema Ihres Inhalts assoziiert wird, wie die bestehende Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die das Gefühl vermittelt, das Sie ausdrücken möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema assoziiert sind. Wenn Sie eine Website über einen bestimmten Gegenstand oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Gegenstand vorhanden ist.
- Suchen Sie auf Websites, die Ihnen erlauben, viele vorhandene Farbpaletten und Bilder zu betrachten, um Inspiration zu finden.

Mehrere nützliche Browser-Erweiterungen können helfen, Grundfarben auszuwählen. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/)-Browsererweiterung ein Pipettenwerkzeug zum Aufnehmen von Farben von jeder Webseite. Sie kann auch Durchschnittswerte der Farben eines Bereichs einer Seite aufnehmen.

Ein „Durchschnittsfarbengriff“ ist nützlich, weil manchmal das, was wie ein solider Farbblock aussieht, tatsächlich mehrere verwandte Farben sein könnten, wie das Aufnehmen des Blaus in einem Foto eines Ozeans oder des Himmels. Ein einziger Pixel Blau, der aus einem Foto ausgewählt wird, könnte zu einer Farbe führen, die fehl am Platz wirkt.

### Die Palette ausarbeiten

Sobald Sie Ihre Grundfarbe gewählt haben, besteht der nächste Schritt darin, eine Palette passender Farben zu erstellen, die Sie zusammen mit ihr verwenden können. Es gibt mehrere Werkzeuge, die Farbtheorie auf Ihre Grundfarbe anwenden können, um geeignete ergänzende Farben zu erzeugen. Online-Werkzeuge, wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel), können Ihnen helfen, eine zugängliche Farbpalette zu wählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, damit Sie sehen können, wie sie für Menschen mit verschiedenen Formen der Farbenblindheit aussehen. Siehe [Farben und Barrierefreiheit](#farben_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Beim Gestalten Ihrer Palette müssen Sie sie wahrscheinlich auch mit einigen neutralen Kernfarben ergänzen, wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und einem oder mehreren Grautönen.

> [!NOTE]
> In der Regel ist es besser, die kleinstmögliche Anzahl an Farben zu verwenden. Farben zu verwenden, um wichtige Inhalte hervorzuheben, anstatt Farbe zu allem hinzuzufügen, wird mehr Wirkung haben und Ihr Inhalt wird leichter lesbar sein.

## Ressourcen zur Farbtheorie

Ein vollständiger Überblick über die Farbtheorie ist über den Umfang dieses Artikels hinausreichend, jedoch gibt es viele Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Farbwissenschaft](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte einführt, wie was Farbe ist, wie sie wahrgenommen wird und wie man Farben verwendet, um Ideen auszudrücken. Präsentiert von Pixar-Künstlern und Designern.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Der Wikipedia-Eintrag zur Farbtheorie enthält großartige Informationen aus einer technischen Perspektive. Wahrscheinlich wird er Ihren Farbauswahlprozess nicht direkt unterstützen, ist aber dennoch voll von nützlichen Informationen.

## Farben und Barrierefreiheit

Stellen Sie sicher, dass Ihr Inhalt [zugänglich](/de/docs/Web/Accessibility) ist. Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility", "Barrierefreiheitsproblem")}} verursachen kann. Unsachgemäße oder unvorsichtige Verwendung von Farbe kann zu einer Website oder App führen, die ein Teil Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenen Besuchern, verlorenem Geschäft und möglicherweise sogar zu einem Öffentlichkeitsproblem oder einer Klage führen kann. Daher ist es wichtig, die Verwendung von Farbe sorgfältig zu überlegen.

Es ist wichtig, [Farbe und Leuchtdichte zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu berücksichtigen. Es gibt mehrere Arten; die häufigste ist die Rot-Grün-Farbenblindheit, die dazu führt, dass Menschen nicht zwischen den Farben Rot und Grün unterscheiden können. Es gibt auch andere, von der Unfähigkeit, den Unterschied zwischen bestimmten Farben zu erkennen, bis zur völligen Unfähigkeit, Farben überhaupt zu sehen. Es gibt sogar Farb- und Animationskombinationen, die Ihre fotosensiblen Benutzer [Anfälle](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) erleben lassen können.

Während höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft gut ist, wenn es um Barrierefreiheit geht, kann es bei Animationen, insbesondere bei schnellen, hilfreich sein, den [Farbkontrast zu reduzieren](/de/docs/Web/Accessibility/Guides/Seizure_disorders#reduce_contrast) um das Risiko von Anfällen zu verringern. Wenn Sie Animationen einbeziehen, verwenden Sie die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) {{cssxref("@media")}}-Abfrage, um Animationen für Benutzer, die diese Präferenz ausgewählt haben, zu reduzieren.

Stellen Sie dennoch sicher, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und Ihren Vordergrundinhalten haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie Farbe niemals als einziges Mittel, um Informationen zu übermitteln. Wenn Sie zum Beispiel den Erfolg einer Operation mit einem grünen Rahmen um das zugehörige UI-Element und das Scheitern mit einem roten Rahmen kennzeichnen, werden Benutzer mit Rot-Grün-Farbenblindheit Ihre Website nicht richtig nutzen können. Verwenden Sie stattdessen Text und Farbindikatoren zusammen, um auch diese Benutzer einzubeziehen. Zum Beispiel wäre ein grünes Häkchen und ein rotes Kreuz besser.

## Beispiel für das Entwerfen einer Palette

In diesem Beispiel werden wir eine geeignete Farbpalette für eine Website für ein Spiel erstellen, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos von Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbphotos.

Verwenden Sie ein Farbauswahlwerkzeug, um ein Farbmuster für die Grundfarbe auszuwählen. In diesem Beispiel haben wir `#D79C7A` ausgewählt, eine rostig orange-rote Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu erstellen. Nach dem Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als Nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das "Base RGB"-Feld in der unteren linken Ecke des Werkzeugs ein:

![Nach Eingabe der Grundfarbe](paletton2.png)

Wir sehen jetzt eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Grundfarbe auffällt, klicken wir unter dem Menü, das es Ihnen ermöglicht, den Palettentyp auszuwählen, auf den „Ergänzende hinzufügen“-Schalter. Standardmäßig war "Monochromatisch" ausgewählt. Paletton berechnet eine passende Akzentfarbe; ein Klick auf die Akzentfarbe in der unteren rechten Ecke zeigt uns, dass diese Farbe `#508D7C` ist.

![Jetzt mit ergänzenden Farben enthalten.](paletton3.png)

Wenn die vorgeschlagene Farbe Ihren Anforderungen nicht gerecht wird, können Sie das Farbschema ändern. Wenn zum Beispiel die vorgeschlagene türkisfarbene Farbe nicht funktioniert, wählen Sie das „Triaden“-Farbschema-Icon aus, das zu folgendem führt:

![Triaden-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das graublaue in der oberen rechten Ecke. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Elemente hervorzuheben, wie zum Beispiel für Überschriften, Registerkarten-Highlights oder andere Indikatoren auf der Website:

![Triaden-Farbschema ausgewählt](paletton-color-detail.png)

Jetzt haben wir unsere Grundfarbe und unseren Akzent. Wir haben auch ein paar ergänzende Schattierungen von beiden, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe, um den Fokus anzuzeigen, wie zum Beispiel für Link-Hover-Zustände. Die Farben können in mehreren Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast bietet, damit Ihr Text klar und lesbar ist, während Sie sicherstellen, dass sie nicht zu grell ist. Wenn der Kontrast zu gering ist, wird Ihr Text vom Hintergrund überdeckt und unlesbar, aber wenn Ihr Kontrast zu hoch ist, könnte der Nutzer Ihre Seite als grell und unangenehm empfinden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Seite könnte sehr unterschiedlich aussehen, wenn sie gedruckt wird, im Vergleich zu dem, was der Benutzer auf seinem Bildschirm sieht.
Wenn Ihr Dokument ausgedruckt wird, kann der Benutzer auswählen, es nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und Bilder beim Drucken von Dokumenten.

Was am meisten zählt, ist normalerweise der Text selbst, aber wenn Ihre Hintergrundfarben und Bilder sorgfältig ausgewählt wurden und/oder für die Nützlichkeit des Inhalts entscheidend sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass er keine Anpassungen am Erscheinungsbild der Inhalte vornehmen soll.

Der Standardwert von `print-color-adjust: economy` bedeutet, dass der Browser berechtigt ist, Änderungen am Erscheinungsbild vorzunehmen, die er für notwendig hält, um die Lesbarkeit zu optimieren und/oder die Wirtschaftlichkeit des Drucks des Inhalts zu verbessern, abhängig vom Typ des Ausgabegeräts, auf das das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` einstellen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, so gestaltet wurden, dass sie am besten funktionieren, wenn die Farben und Bilder unverändert bleiben.
Mit dieser Einstellung wird der Browser nicht das Erscheinungsbild des Elements, auf das dieser Wert angewendet wurde, verändern und es so zeichnen, wie es von Ihrem CSS angegeben wurde.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzervoreinstellungen bietet, um die Ausgabe zu ändern (wie ein „keine Hintergründe drucken“-Kontrollkästchen im Druckdialogfeld), hat das Vorrang vor dem Wert von `print-color-adjust`.

## Siehe auch

- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
