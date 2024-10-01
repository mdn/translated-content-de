---
title: Farben klug einsetzen
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Die richtigen Farben für eine Website zu wählen, kann schwierig sein, besonders wenn Sie nicht gut in Kunst, Design oder zumindest grundlegender Farbtheorie bewandert sind. Die falsche Farbwahl kann Ihre Seite unattraktiv machen oder schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder sich widersprechenden Farben unleserlich machen. Durch die Verwendung der falschen Farben kann Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, völlig unbrauchbar werden.

## Die richtigen Farben finden

Es gibt Tools und Prozesse, die Ihnen helfen können, ein gutes Farbschema zu wählen. Während sie nicht die Unterstützung eines guten Designers ersetzen können, der Ihnen bei diesen Entscheidungen hilft, können sie dennoch einen Anfang bieten.

### Basisfarbe

Der erste Schritt besteht darin, Ihre **Basisfarbe** auszuwählen. Diese Farbe repräsentiert Ihre Website oder deren Thema. Ebenso wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew), Blau mit dem Himmel oder dem Ozean assoziieren, ist es ein guter Anfang, eine geeignete Basisfarbe zur Repräsentation Ihrer Seite zu wählen. Es gibt viele Möglichkeiten, eine Basisfarbe auszuwählen; ein paar Ideen sind:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhaltes assoziiert wird, wie eine bereits vorhandene Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die die Emotion repräsentiert, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema assoziiert werden. Wenn Sie eine Website über ein bestimmtes Objekt oder Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Objekt vorhanden ist.
- Durchsuchen Sie Websites, die es Ihnen ermöglichen, viele bestehende Farbpaletten und Bilder anzusehen, um Inspiration zu finden.

Es gibt mehrere nützliche Browser-Erweiterungen, die dabei helfen können, Basisfarben auszuwählen. Beispielsweise bietet die [ColorZilla](https://www.colorzilla.com/)-Browsererweiterung ein Pipettenwerkzeug, um Farben von jeder Webseite auszuwählen. Sie kann auch Durchschnittswerte der Farben eines Bereichs einer Seite ermitteln.

Das Erfassen einer "durchschnittlichen Farbe" ist nützlich, weil manchmal das, was wie ein solider Farbblock aussieht, tatsächlich mehrere verwandte Farben sein könnte, wie z.B. das Erfassen des Blaus eines Fotos des Ozeans oder des Himmels. Ein einzelnes blaues Pixel, das aus einem Foto ausgewählt wird, könnte zu einer Farbe führen, die fehl am Platz aussieht.

### Die Palette ausarbeiten

Sobald Sie Ihre Basisfarbe gewählt haben, besteht der nächste Schritt darin, eine Palette von geeigneten Farben zu erstellen, die Sie daneben verwenden können. Es gibt mehrere Tools, um Farbtheorie auf Ihre Basisfarbe anzuwenden und geeignete zusätzliche Farben zu ermitteln. Online-Tools, wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel), können Ihnen dabei helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Tools können auch Filter auf Ihre Palette anwenden, damit Sie sehen können, wie sie für Menschen mit verschiedenen Formen der Farbenblindheit aussehen. Siehe [Farbe und Barrierefreiheit](#farbe_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Beim Entwerfen Ihrer Palette müssen Sie wahrscheinlich auch einige neutrale Kernfarben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und eine oder mehrere Grautöne ergänzen.

> [!NOTE]
> In der Regel ist es besser, so wenige Farben wie möglich zu verwenden. Die Verwendung von Farbe, um wichtigen Inhalt hervorzuheben, anstatt Farbe zu allem hinzuzufügen, wird mehr Wirkung haben und Ihr Inhalt wird lesbarer sein.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie liegt außerhalb des Umfangs dieses Artikels, jedoch gibt es viele Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie, was Farbe ist, wie sie wahrgenommen wird und wie man Farben verwendet, um Ideen auszudrücken, vorstellt. Präsentiert von Künstlern und Designern von Pixar.
- [Farbentheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Der Wikipedia-Eintrag zur Farbentheorie enthält großartige Informationen aus technischer Perspektive. Es wird Ihnen wahrscheinlich nicht im Farbenauswahlprozess helfen, ist aber dennoch voll von nützlichen Informationen.

## Farbe und Barrierefreiheit

Stellen Sie sicher, dass Ihr Inhalt [zugänglich](/de/docs/Web/Accessibility) ist. Es gibt mehrere Arten, wie Farben ein {{Glossary("accessibility", "Barrierefreiheitsproblem")}} schaffen können. Eine unsachgemäße oder achtlose Verwendung von Farbe kann zu einer Website oder App führen, die ein bestimmter Prozentsatz Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenem Traffic, verlorenem Geschäft und möglicherweise sogar zu einem Problem in der Öffentlichkeitsarbeit oder einer Klage führen kann. Deshalb ist es wichtig, Ihre Verwendung von Farbe sorgfältig zu überlegen.

Es ist wichtig, [Farbe und Leuchtdichte zu verstehen](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Seizure_disorders) zu berücksichtigen. Es gibt verschiedene Arten; die häufigste ist Rot-Grün-Farbenblindheit, bei der Menschen nicht zwischen den Farben Rot und Grün unterscheiden können. Es gibt auch andere, von der Unfähigkeit, den Unterschied zwischen bestimmten Farben zu erkennen, bis hin zur totalen Unfähigkeit, Farben überhaupt zu sehen. Es gibt sogar Farb- und Animationskombinationen, die bei Ihren fotosensiblen Nutzern [Krämpfe](/de/docs/Web/Accessibility/Seizure_disorders#colors) hervorrufen können.

Während höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache in Bezug auf Barrierefreiheit ist, reduziert beim Animieren, besonders schnell, [das Verringern des Farbkontrasts](/de/docs/Web/Accessibility/Seizure_disorders#reduce_contrast) auf animierenden Elementen das Risiko von Krampfanfällen. Wenn Sie Animationen einfügen, verwenden Sie das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) {{cssxref("@media")}} Query-Feature, um Animationen für Benutzer zu reduzieren, die diese Präferenz ausgewählt haben.

Stellen Sie dennoch sicher, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und dem Vordergrundinhalt haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie auch niemals nur Farbe, um Informationen zu vermitteln. Wenn Sie beispielsweise den Erfolg eines Vorgangs mit einem grünen Rahmen um das zugehörige UI-Element und das Scheitern mit einem roten Rahmen anzeigen, können Benutzer mit Rot-Grün-Farbenblindheit Ihre Seite nicht richtig nutzen. Verwenden Sie stattdessen Text- und Farbindikatoren zusammen, um diese Benutzer einzubeziehen. Beispielsweise wären ein grünes Häkchen und ein rotes Kreuz bessere Optionen.

## Beispiele für das Entwerfen von Paletten

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos des Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbfotos.

Verwenden Sie ein Farbaufnahme-Tool, um ein Farbmuster für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` gewählt, was ein rostiges Orange-Rot ist. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu entwickeln. Beim Öffnen von Paletton sehen wir:

![Recht nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das "Base RGB"-Feld in der linken unteren Ecke des Tools ein:

![Nach Eingabe der Basisfarbe](paletton2.png)

Wir sehen jetzt eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto gewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe auffällt, klicken wir auf das "add complementary"-Toggle unterhalb des Menüs, das Ihnen die Auswahl des Palettentyps ermöglicht. Der Standard war "Monochromatisch". Paletton berechnet eine passende Akzentfarbe; wenn Sie auf die Akzentfarbe in der rechten unteren Ecke klicken, erfahren wir, dass diese Farbe `#508D7C` ist.

![Jetzt mit ergänzenden Farben.](paletton3.png)

Wenn die vorgeschlagene Farbe für Ihre Bedürfnisse nicht passt, können Sie das Farbschema ändern. Zum Beispiel, wenn die vorgeschlagene grün-blaue Farbe nicht funktioniert, wählen Sie das Triad-Farbschema-Symbol, was zu folgendem Ergebnis führt:

![Triad-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das graublaue im oberen rechten Bereich. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie z.B. für Überschriften, Registerkarten-Hervorhebungen oder andere Indikatoren auf der Seite:

![Triad-Farbschema ausgewählt](paletton-color-detail.png)

Jetzt haben wir unsere Basisfarbe und unseren Akzent. Wir haben auch einige komplementäre Schattierungen von beiden, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe, um Fokus zu markieren, wie z.B. für Link-Hover-Zustände. Die Farben können in mehreren Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genügend Kontrast bietet, damit Ihr Text klar und lesbar ist, während Sie sicherstellen, dass sie nicht unangenehm für die Augen ist. Wenn der Kontrast zu niedrig ist, wird Ihr Text durch den Hintergrund ausgewaschen und unleserlich, aber wenn Ihr Kontrast zu hoch ist, könnte Ihr Benutzer Ihre Seite als grell und unangenehm empfinden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Website kann beim Drucken sehr anders aussehen als auf dem Bildschirm des Benutzers.
Wenn Ihre Seite gedruckt wird, kann der Benutzer auswählen, dass sie nur in Schwarz-Weiß gedruckt wird. Die meisten Browser entfernen standardmäßig Hintergrundfarben und Bilder beim Drucken von Dokumenten.

In der Regel ist der Text selbst das Wichtigste, aber wenn Ihre Hintergrundfarben und Bilder sorgfältig ausgewählt wurden und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass es keine Anpassungen der Erscheinung des Inhalts vornehmen sollte.

Der Standardwert `print-color-adjust: economy` gibt an, dass der Browser Änderungen an der Erscheinung vornehmen darf, die er für notwendig erachtet, um die Lesbarkeit und/oder Druckwirtschaftlichkeit des Inhalts zu optimieren, abhängig von der Art des Ausgabegeräts, auf dem das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` setzen, um dem Browser mitzuteilen, dass das Element oder die Elemente, für die Sie dies verwenden, speziell entworfen wurden, um am besten mit den Farben und Bildern so zu arbeiten, wie sie sind.
Mit dieser Einstellung wird der Browser nicht das Erscheinungsbild des Elements, für das dieser Wert angewendet wird, verändern und es so zeichnen, wie es durch Ihr CSS angegeben ist.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau so verwendet wird, wie es angegeben ist.
> Wenn der Browser Benutzereinstellungen zur Änderung der Ausgabe bereitstellt (wie z.B. ein "Hintergründe nicht drucken"-Kontrollkästchen in einem Druckdialogfeld), überschreibt dies den Wert von `print-color-adjust`.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
