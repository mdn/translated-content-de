---
title: Farben klug einsetzen
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Die richtigen Farben für eine Website auszuwählen, kann schwierig sein, besonders wenn Sie nicht gut in Kunst, Design oder zumindest grundlegender Farbtheorie bewandert sind. Die falsche Farbwahl kann Ihre Website unattraktiv machen oder, schlimmer noch, den Inhalt unlesbar machen aufgrund von Problemen mit dem Kontrast oder konfliktierenden Farben. Die Verwendung falscher Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, völlig unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema auszuwählen. Während sie nicht einen guten Designer ersetzen können, der Ihnen bei diesen Entscheidungen hilft, können sie den Anfang erleichtern.

### Basisfarbe

Der erste Schritt ist die Auswahl Ihrer **Basisfarbe**. Diese Farbe repräsentiert Ihre Website oder deren Thematik. So wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew), Blau mit dem Himmel oder dem Ozean assoziieren, ist es ein guter Ansatz, eine passende Basisfarbe zu wählen, die Ihre Website repräsentiert. Es gibt viele Möglichkeiten, eine Basisfarbe auszuwählen; einige Ideen umfassen:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts assoziiert wird, wie die bereits bestehende Farbe eines Produkts oder einer Idee oder eine Farbe, die das Gefühl widerspiegelt, das Sie vermitteln möchten.
- Eine Farbe aus Bildern, die mit Ihrer Thematik verbunden sind. Wenn Sie eine Website über einen bestimmten Artikel oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Artikel vorhanden ist.
- Durchstöbern Sie Websites, die Ihnen ermöglichen, viele bestehende Farbpaletten und Bilder anzusehen, um Inspiration zu finden.

Es gibt mehrere nützliche Browser-Erweiterungen, die bei der Auswahl einer Basisfarbe helfen können. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/) Browser-Erweiterung ein Pipettenwerkzeug, mit dem Sie Farben von jeder Webseite auswählen können. Es kann auch Durchschnittswerte der Farben eines Bereichs einer Seite berechnen.

Das Aufgreifen einer "durchschnittlichen Farbe" ist nützlich, weil das, was wie ein einheitlicher Farbblock aussieht, tatsächlich mehrere verwandte Farben sein können, wie das Aufgreifen des Blaus in einem Foto des Ozeans oder des Himmels. Ein einzelnes Pixel Blau, das aus einem Foto ausgewählt wurde, kann zu einer Farbe führen, die fehl am Platz wirkt.

### Die Palette erweitern

Sobald Sie Ihre Basisfarbe festgelegt haben, besteht der nächste Schritt darin, eine Palette geeigneter Farben zu erstellen, die Sie zusammen mit dieser verwenden können. Es gibt mehrere Tools, die Farbtheorie auf Ihre Basisfarbe anwenden und zusätzliche passende Farben ausgeben können. Online-Tools, wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel) können Ihnen helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Tools können auch Filter auf Ihre Palette anwenden, sodass Sie sehen können, wie sie für Menschen mit verschiedenen Arten von Farbenblindheit aussieht. Siehe [Farbe und Zugänglichkeit](#farbe_und_zugänglichkeit) für eine kurze Erklärung, warum das wichtig ist.

Bei der Gestaltung Ihrer Palette müssen Sie diese wahrscheinlich auch mit einigen neutralen Basisfarben ergänzen, wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und einem oder mehreren Grautönen.

> [!NOTE]
> In der Regel ist es besser, die kleinste Anzahl von Farben zu verwenden. Wenn Sie Farben einsetzen, um wichtige Inhalte hervorzuheben, anstatt alles einzufärben, wird das mehr Wirkung zeigen und Ihr Inhalt wird lesbarer sein.

## Farbtheorieressourcen

Eine vollständige Überprüfung der Farbtheorie geht über den Umfang dieses Artikels hinaus, jedoch gibt es zahlreiche Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Farbenwissenschaft](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie die Definition von Farbe, ihre Wahrnehmung und die Anwendung zur Ausdruck von Ideen einführt. Präsentiert von Pixar-Künstlern und Designern.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Wikipedias Beitrag zur Farbtheorie enthält großartige Informationen aus technischer Sicht. Es wird wahrscheinlich nicht direkt beim Auswahlprozess helfen, ist aber dennoch voll von nützlichen Informationen.

## Farbe und Zugänglichkeit

Stellen Sie sicher, dass Ihre Inhalte [zugänglich sind](/de/docs/Web/Accessibility). Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility")}} Problem erzeugen kann. Unsachgemäße oder unbedachte Verwendung von Farbe kann dazu führen, dass eine Website oder App für einen Teil Ihrer Zielgruppe nicht ausreichend nutzbar ist, was zu verlorenem Traffic, verlorenem Geschäft und möglicherweise sogar einem Problem mit der Öffentlichkeitsarbeit oder einer Klage führen kann. Daher ist es wichtig, Ihre Verwendung von Farbe sorgfältig zu überdenken.

Es ist wichtig, [Farbe und Leuchtdichte zu verstehen](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) und stets [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Seizure_disorders) zu berücksichtigen. Es gibt mehrere Arten; die häufigste ist die Rot-Grün-Farbenblindheit, die dazu führt, dass Menschen den Unterschied zwischen den Farben Rot und Grün nicht erkennen können. Es gibt auch andere Arten, die von der Unfähigkeit, bestimmte Farben zu unterscheiden, bis zur völligen Unfähigkeit, Farben wahrzunehmen, reichen. Es gibt sogar Farben- und Animationskombinationen, die bei Ihren fotosensitiven Nutzern [Anfälle](/de/docs/Web/Accessibility/Seizure_disorders#colors) auslösen können.

Obwohl ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft positiv ist, wenn es um Zugänglichkeit geht, reduziert das Reduzieren des Farbkontrasts bei animierten, besonders schnell animierten Elementen das Risiko von Anfällen. Wenn Sie Animationen einbeziehen, verwenden Sie das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) {{cssxref("@media")}} Query-Feature, um Animation für Nutzer zu reduzieren, die diese Präferenz ausgewählt haben.

Das gesagt, stellen Sie sicher, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und dem Vordergrundinhalt haben, um Lesbarkeit zu gewährleisten. Verwenden Sie niemals Farbe als einziges Mittel, um Informationen zu vermitteln. Wenn Sie beispielsweise den Erfolg eines Vorgangs durch einen grünen Rahmen um das zugehörige UI-Element anzeigen und das Scheitern desselben mit einem roten Rahmen anzeigen, könnten Nutzer mit Rot-Grün-Farbenblindheit Ihre Seite nicht ordnungsgemäß verwenden. Stattdessen sollten Sie Text- und Farbindikatoren zusammen nutzen, um diese Benutzer einzubeziehen. Beispielsweise wären ein grünes Häkchen und ein rotes Kreuz besser.

## Palette-Design-Beispiel

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos vom Mars](https://www.google.com/search?q=Mars&tbm=isch) wird mehrere Farbfotos ausgeben.

Verwenden Sie ein Farbauswahlwerkzeug, um eine Farbprobe für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` gewählt, eine rostige Orange-Rot-Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu finden. Wenn wir Paletton öffnen, sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das "Base RGB"-Feld in der unteren linken Ecke des Tools ein:

![Nach Eingabe der Basisfarbe](paletton2.png)

Wir sehen nun eine monochromatische Palette basierend auf der Farbe, die wir aus dem Marsfoto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind das wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe hervortritt, klicken wir auf den "add complementary"-Schalter unterhalb des Menüs, mit dem Sie den Palettentyp auswählen. Der Standard war "Monochromatisch". Paletton berechnet eine geeignete Akzentfarbe; wenn wir auf die Akzentfarbe in der unteren rechten Ecke klicken, erfahren wir, dass diese Farbe `#508D7C` ist.

![Jetzt mit enthaltenen Komplementärfarben.](paletton3.png)

Wenn die vorgeschlagene Farbe für Ihre Bedürfnisse nicht funktioniert, können Sie das Farbschema ändern. Wenn beispielsweise die vorgeschlagene grünlich-blaue Farbe nicht funktioniert, wählen Sie das Trias-Farbschema aus, was zu folgendem Ergebnis führt:

![Trias-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das gräuliche Blau oben rechts. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie zum Beispiel für Überschriften, Tab-Highlights oder andere Indikatoren auf der Website:

![Trias-Farbschema ausgewählt](paletton-color-detail.png)

Jetzt haben wir unsere Basisfarbe und unseren Akzent. Wir haben auch einige komplementäre Schattierungen von beiden, die verwendet werden können, um Farbverläufe zu erstellen oder als Akzentfarbe, um den Fokus anzuzeigen, wie zum Beispiel für Link-Hover-Zustände. Die Farben können in verschiedenen Formaten für die Verwendung exportiert werden.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast bietet, damit Ihr Text klar und lesbar ist, während Sie sicherstellen, dass sie nicht anstrengend für die Augen ist. Ist der Kontrast zu niedrig, wird Ihr Text vom Hintergrund ausgewaschen und unleserlich, doch ist der Kontrast zu hoch, könnte der Nutzer Ihre Seite grell und unangenehm finden.

## Farbe, Hintergründe, Kontrast und Druck

Ihre Seite kann beim Drucken ganz anders aussehen als das, was der Benutzer auf seinem Bildschirm sieht.
Beim Drucken Ihrer Seite kann der Benutzer wählen, nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und -bilder beim Drucken von Dokumenten.

Das, was am meisten zählt, ist normalerweise der Text selbst, aber wenn Ihre Hintergrundfarben und -bilder sorgfältig ausgewählt und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass er keine Anpassungen am Erscheinungsbild des Inhalts vornehmen soll.

Der Standardwert von `print-color-adjust: economy` bedeutet, dass der Browser Anpassungen an der Darstellung vornehmen darf, die er für notwendig hält, um die Lesbarkeit und/oder die Druckwirtschaftlichkeit des Inhalts zu optimieren, abhängig vom Typ des Ausgabegeräts, auf dem das Dokument dargestellt wird.

Sie können `print-color-adjust: exact` setzen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, speziell dafür gestaltet wurden, am besten mit den Farben und Bildern in ihrer ursprünglichen Form zu funktionieren.
Mit dieser Einstellung wird der Browser nicht das Erscheinungsbild des Elements verändern, auf das dieser Wert angewendet wird, und es so zeichnen, wie es in Ihrem CSS angegeben ist.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS exakt wie angegeben verwendet wird.
> Wenn der Browser dem Benutzer Einstellungen zur Änderung der Ausgabe anbietet (wie ein "Hintergründe nicht drucken"-Kontrollkästchen in einem Druckdialogfeld), hebt das den Wert von `print-color-adjust` auf.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
