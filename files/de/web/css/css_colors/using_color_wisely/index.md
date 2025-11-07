---
title: Farben weise verwenden
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die richtigen Farben für eine Website zu wählen, kann schwierig sein, besonders wenn Sie nicht in Kunst, Design oder zumindest in Grundzügen der Farbtheorie bewandert sind. Die falsche Farbwahl kann Ihre Seite unattraktiv machen oder, schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder sich widersprechenden Farben unlesbar machen. Die Verwendung falscher Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, völlig unbrauchbar ist.

## Die richtigen Farben finden

Es gibt Werkzeuge und Verfahren, die Ihnen helfen können, ein gutes Farbschema zu wählen. Auch wenn sie einen guten Designer, der Ihnen bei diesen Entscheidungen hilft, nicht ersetzen können, bieten sie doch einen Einstiegspunkt.

### Basisfarbe

Der erste Schritt ist die Wahl Ihrer **Basisfarbe**. Diese Farbe repräsentiert Ihre Website oder deren Thema. Genau wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew), Blau mit dem Himmel oder dem Ozean assoziieren, ist die Wahl einer geeigneten Basisfarbe, die Ihre Seite repräsentiert, ein guter Ausgangspunkt. Es gibt viele Möglichkeiten, eine Basisfarbe auszuwählen; ein paar Ideen sind:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts assoziiert wird, wie die bereits existierende Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die die Emotion repräsentiert, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema zu tun haben. Wenn Sie eine Website über einen bestimmten Artikel oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Artikel vorhanden ist.
- Durchstöbern Sie Websites, die Ihnen ermöglichen, viele bestehende Farbpalletten und Bilder zu betrachten, um Inspiration zu finden.

Es gibt mehrere nützliche Browser-Erweiterungen, die beim Auswählen von Basisfarben helfen können. Zum Beispiel stellt die [ColorZilla](https://www.colorzilla.com/)-Erweiterung ein Pipettenwerkzeug zur Verfügung, um Farben von jeder Webseite zu übernehmen. Sie kann auch Durchschnittswerte der Farben eines Bereichs einer Seite erfassen.

Ein "Durchschnittsfarbwert" ist nützlich, weil manchmal, was wie ein massiver Farbblock aussieht, tatsächlich mehrere verwandte Farben sein könnten, wie das Ergreifen des Blaus in einer Fotografie eines Ozeans oder des Himmels. Ein einzelnes Pixel Blau, das aus einem Foto ausgewählt wurde, kann in einer Farbe resultieren, die fehl am Platz wirkt.

### Die Palette erweitern

Nachdem Sie Ihre Basisfarbe ausgewählt haben, besteht der nächste Schritt darin, eine Palette geeigneter Farben zu erstellen, die zusammen mit dieser verwendet werden können. Es gibt mehrere Werkzeuge, die Farbtheorie auf Ihre Basisfarbe anwenden und passende zusätzliche Farben liefern können. Online-Tools wie das kostenlose [Adobe Color CC online color wheel](https://color.adobe.com/create/color-wheel) können Ihnen helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, damit Sie sehen können, wie sie für Menschen mit verschiedenen Arten von Farbenblindheit aussehen. Siehe [Farben und Barrierefreiheit](#farben_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Bei der Gestaltung Ihrer Palette benötigen Sie wahrscheinlich auch einige Kernneutralfarben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und eine oder mehrere Grautöne.

> [!NOTE]
> In der Regel ist es besser, die geringstmögliche Anzahl an Farben zu verwenden. Die Hervorhebung wichtiger Inhalte durch Farbe, anstatt Farbe zu allem hinzuzufügen, hat mehr Wirkung, und Ihr Inhalt wird besser lesbar sein.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie sprengt den Rahmen dieses Artikels, jedoch gibt es viele Artikel zur Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Farbwissenschaft](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie die Natur der Farbe, ihre Wahrnehmung und die Verwendung von Farben zur Ideenvermittlung einführt. Präsentiert von Pixar-Künstlern und Designern.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Der Wikipedia-Eintrag zur Farbtheorie hat großartige Informationen aus technischer Sicht. Es wird vermutlich nicht Ihren Prozess zur Farbauswahl unterstützen, ist aber dennoch voller nützlicher Informationen.

## Farben und Barrierefreiheit

Stellen Sie sicher, dass Ihre Inhalte [zugänglich](/de/docs/Web/Accessibility) sind. Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility", "Barrierefreiheitsproblem")}} schaffen kann. Unsachgemäße oder unachtsame Verwendung von Farben kann zu einer Website oder App führen, die ein Teil Ihres Zielpublikums möglicherweise nicht angemessen nutzen kann, was zu verlorenem Traffic, verlorenem Geschäft und möglicherweise sogar zu einem Problem mit der öffentlichen Wahrnehmung oder einer Klage führen kann. Daher ist es wichtig, Ihre Farbnutzung sorgfältig zu überlegen.

Es ist wichtig, [Farbe und Leuchtkraft zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu beachten. Es gibt verschiedene Arten; die häufigste ist die Rot-Grün-Farbenblindheit, die dazu führt, dass Menschen nicht zwischen den Farben Rot und Grün unterscheiden können. Es gibt auch andere Arten, die von der Unfähigkeit, bestimmte Farben zu unterscheiden, bis hin zur totalen Unfähigkeit, Farbe wahrzunehmen, reichen. Es gibt sogar Farb- und Animationskombinationen, die Ihren fotosensitiven Nutzern [Anfälle](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) verursachen können.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache ist, wenn es um Barrierefreiheit geht, reduziert eine Verminderung des Farbkontrasts bei Animationen, insbesondere bei schnellen, das Risiko von Anfällen. Wenn Sie Animationen einbinden, verwenden Sie das [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) {{cssxref("@media")}} Abfrage-Feature, um Animationen für Benutzer zu reduzieren, die diese Präferenz gewählt haben.

Dennoch sollten Sie sicherstellen, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und dem Vordergrund Ihres Inhalts haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie niemals Farbe als einziges Mittel zur Vermittlung von Informationen. Wenn Sie zum Beispiel den Erfolg einer Operation mit einem grünen Rahmen um das zugehörige UI-Element und das Versagen mit einem roten Rahmen anzeigen, können Benutzer mit Rot-Grün-Farbenblindheit Ihre Website nicht richtig nutzen. Verwenden Sie stattdessen Text- und Farbindikatoren zusammen, um auch diese Benutzer einzubeziehen. Beispielsweise wäre ein grünes Häkchen und ein rotes Kreuz besser.

## Beispiel zur Palettengestaltung

In diesem Beispiel erstellen wir eine passende Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos von Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbaufnahmen.

Verwenden Sie ein Farbauswahl-Tool, um eine Farbauswahl für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` ausgewählt, eine rostige Orange-Rot-Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu finden. Sobald Paletton geöffnet ist, sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den Hex-Wert unserer Farbe (`D79C7A`) in das Feld "Base RGB" in der linken unteren Ecke des Tools ein:

![Nachdem die Basisfarbe eingegeben wurde](paletton2.png)

Nun sehen wir eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe auffällt, klicken wir auf den "Ergänzung hinzufügen" Schalter unterhalb des Menüs, das Ihnen die Auswahl des Palettentyps ermöglicht. Die Standardeinstellung war "Monochromatisch". Paletton ermittelt eine passende Akzentfarbe; ein Klick auf die Akzentfarbe in der unteren rechten Ecke zeigt uns, dass diese Farbe `#508D7C` ist.

![Jetzt mit ergänzenden Farben eingeschlossen.](paletton3.png)

Wenn die vorgeschlagene Farbe nicht Ihren Bedürfnissen entspricht, können Sie das Farbschema ändern. Wenn beispielsweise die vorgeschlagene grünlich-blaue Farbe nicht funktioniert, wählen Sie das Symbol für das Triad-Farbschema, das zu folgendem Ergebnis führt:

![Triad-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das graublau in der oberen rechten Ecke. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie Überschriften, Tab-Highlights oder andere Indikatoren auf der Seite:

![Triad-Farbschema ausgewählt](paletton-color-detail.png)

Jetzt haben wir unsere Basisfarbe und unseren Akzent. Wir haben auch ein paar ergänzende Schattierungen beider, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe zur Hervorhebung beispielsweise von Link-Hover-Zuständen. Die Farben können in mehreren Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast bietet, damit Ihr Text scharf und lesbar bleibt, während er dennoch nicht zu anstrengend für die Augen ist. Wenn der Kontrast zu gering ist, wird Ihr Text vom Hintergrund überstrahlt und dadurch unlesbar, aber wenn der Kontrast zu hoch ist, könnte Ihre Website als unangenehm empfunden werden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Website kann beim Drucken anders aussehen als das, was der Benutzer auf dem Bildschirm sieht.
Beim Drucken Ihrer Seite kann der Benutzer entscheiden, nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und -bilder beim Drucken von Dokumenten.

Am wichtigsten ist in der Regel der Text selbst, aber wenn Ihre Hintergrundfarben und -bilder sorgfältig ausgewählt wurden und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass es keine Anpassungen am Aussehen der Inhalte vornehmen soll.

Der Standardwert von `print-color-adjust: economy`, zeigt an, dass es dem Browser gestattet ist, Anpassungen am Aussehen vorzunehmen, wenn er dies für erforderlich hält, um die Lesbarkeit und/oder Druckwirtschaftlichkeit des Inhalts zu optimieren, basierend auf dem Typ des Ausgabegeräts, auf das das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` einstellen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, speziell dafür gestaltet wurden, am besten mit den Farben und Bildern zu funktionieren, so wie sie sind.
Bei dieser Einstellung wird der Browser das Aussehen des Elements, auf das dieser Wert angewendet wird, nicht verändern und es so darstellen, wie es in Ihrem CSS angegeben ist.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzereinstellungen bietet, um die Ausgabe zu ändern (wie ein "Hintergründe nicht drucken"-Kontrollkästchen im Druckdialogfeld), wird das den Wert von `print-color-adjust` überschreiben.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Verständnis von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
