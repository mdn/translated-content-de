---
title: Farben klug verwenden
slug: Web/CSS/CSS_colors/Using_color_wisely
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Die richtigen Farben für eine Website auszuwählen kann schwierig sein, insbesondere wenn Sie nicht gut in Kunst, Design oder zumindest in grundlegender Farbtheorie verankert sind. Eine falsche Farbwahl kann Ihre Seite unattraktiv machen oder schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder sich widersprechenden Farben unlesbar machen. Die Verwendung falscher Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, völlig unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema zu wählen. Auch wenn sie keinen guten Designer ersetzen können, der Ihnen bei diesen Entscheidungen hilft, können sie Ihnen einen Einstieg bieten.

### Grundfarbe

Der erste Schritt besteht darin, Ihre **Grundfarbe** auszuwählen. Diese Farbe repräsentiert Ihre Website oder das Thema derselben. So wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) oder Blau mit dem Himmel oder dem Ozean assoziieren, ist die Wahl einer passenden Grundfarbe, um Ihre Seite zu repräsentieren, ein guter Ausgangspunkt. Es gibt viele Möglichkeiten, eine Grundfarbe zu wählen; einige Ideen sind:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts verbunden ist, wie die bereits existierende Farbe, die mit einem Produkt oder einer Idee identifiziert ist oder eine Farbe, die die Emotion repräsentiert, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema verbunden sind. Wenn Sie eine Website über einen bestimmten Artikel oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Artikel vorhanden ist.
- Durchsuchen Sie Websites, die Ihnen erlauben, viele bestehende Farbpaletten und Bilder anzusehen, um Inspiration zu finden.

Es gibt mehrere nützliche Browser-Erweiterungen, die bei der Auswahl von Grundfarben helfen können. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/) Browser-Erweiterung ein Pipettenwerkzeug, um Farben von jeder Webseite auszuwählen. Sie kann auch den Durchschnitt der Farben eines Bereichs einer Seite erfassen.

Ein „Durchschnittsfarben“-Aufgriff ist nützlich, weil manchmal, was wie ein solider Farbblock aussieht, tatsächlich mehrere verwandte Farben sein können, wie das Aufnehmen des Blaus in einem Foto eines Ozeans oder des Himmels. Ein einzelnes Pixel Blau, das aus einem Foto ausgewählt wurde, kann zu einer Farbe führen, die fehl am Platz aussieht.

### Die Palette erweitern

Nachdem Sie sich für Ihre Grundfarbe entschieden haben, besteht der nächste Schritt darin, eine Palette von passenden Farben zu entwickeln, die Sie neben dieser verwenden. Es gibt mehrere Werkzeuge, die Farbtheorie auf Ihre Grundfarbe anwenden und passende zusätzliche Farben ausgeben können. Online-Tools, wie das kostenlose [Adobe Color CC online color wheel](https://color.adobe.com/create/color-wheel) können Ihnen helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, damit Sie sehen können, wie sie für Menschen mit verschiedenen Formen von Farbenblindheit aussehen. Siehe [Farbe und Barrierefreiheit](#farbe_und_barrierefreiheit) für eine kurze Erklärung, warum dies wichtig ist.

Beim Entwerfen Ihrer Palette werden Sie wahrscheinlich auch einige neutrale Kernfarben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und eine oder mehrere Grautöne ergänzen müssen.

> [!NOTE]
> Normalerweise ist es besser, die kleinste Anzahl von Farben zu verwenden. Farbe zu nutzen, um wichtigen Inhalt hervorzuheben, anstatt Farbe zu allem hinzuzufügen, wird mehr Wirkung haben und Ihr Inhalt wird leichter lesbar sein.

## Ressourcen zur Farbtheorie

Ein vollständiger Überblick über Farbtheorie ist über den Rahmen dieses Artikels hinaus, jedoch gibt es viele Artikel zur Farbtheorie, die zur Verfügung stehen. Wir fanden die folgenden Ressourcen besonders hilfreich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte einführt, wie was Farbe ist, wie sie wahrgenommen wird und wie man Farben verwendet, um Ideen auszudrücken. Präsentiert von Pixar-Künstlern und Designern.
- [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Wikipedias Eintrag zur Farbtheorie bietet großartige Informationen aus technischer Perspektive. Es wird wahrscheinlich nicht in Ihrem Farbauswahlprozess helfen, enthält jedoch viele nützliche Informationen.

## Farbe und Barrierefreiheit

Stellen Sie sicher, dass Ihr Inhalt [zugänglich](/de/docs/Web/Accessibility) ist. Es gibt mehrere Wege, wie Farbe ein [Barrierefreiheits-](/de/docs/Glossary/accessibility)problem schaffen kann. Unsachgemäße oder unvorsichtige Verwendung von Farbe kann zu einer Website oder App führen, die ein Teil Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenem Traffic, verlorenem Geschäft und möglicherweise sogar zu einem PR-Problem oder einer Klage führen kann. Daher ist es wichtig, Ihre Verwendung von Farbe sorgfältig zu bedenken.

Es ist wichtig, [Farbe und Leuchtdichte zu verstehen](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Seizure_disorders) zu berücksichtigen. Es gibt mehrere Arten; die häufigste ist Rot-Grün-Farbenblindheit, die dazu führt, dass Menschen die Farben Rot und Grün nicht unterscheiden können. Es gibt auch andere Arten, die von der Unfähigkeit reichen, bestimmte Farben zu unterscheiden, bis zur völligen Unfähigkeit, Farbe überhaupt zu sehen. Es gibt sogar Farb- und Animationskombinationen, die dazu führen können, dass Ihre fotosensitiven Nutzer [Anfälle](/de/docs/Web/Accessibility/Seizure_disorders#colors) erleben.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache in Bezug auf Barrierefreiheit ist, reduziert das Reduzieren von Farbkontrasten bei animierten, insbesondere schnell animierenden, Elementen das Risiko von Anfällen. Wenn Sie Animationen einbinden, nutzen Sie die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) {{cssxref("@media")}} Abfragefunktion, um Animationen für Nutzer zu reduzieren, die diese Präferenz gewählt haben.

Dennoch, stellen Sie sicher, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und Vordergrundinhalt haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie niemals Farbe als einzigen Weg, Informationen zu vermitteln. Wenn Sie beispielsweise den Erfolg einer Operation mit einem grünen Rahmen um das zugehörige UI-Element und Misserfolg mit einem roten Rahmen anzeigen, werden Nutzer mit Rot-Grün-Farbenblindheit Ihre Seite nicht richtig nutzen können. Verwenden Sie stattdessen Text- und Farbindikatoren zusammen, um diese Benutzer einzubeziehen. Ein grünes Häkchen und ein rotes Kreuz wären zum Beispiel besser.

## Beispiel zur Palettengestaltung

In diesem Beispiel erstellen wir eine passende Farbpalette für eine Website eines Spiels, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos vom Mars](https://www.google.com/search?q=Mars&tbm=isch) zeigt mehrere Farbfotos.

Verwenden Sie ein Farbauswahlwerkzeug, um ein Farbbeispiel für die Grundfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` ausgewählt, was eine rostige orange-rote Farbe ist. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu entwickeln. Nach dem Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den hexadezimalen Farbcode (`D79C7A`) in das "Base RGB"-Feld in der linken unteren Ecke des Werkzeugs ein:

![Nach der Eingabe der Grundfarbe](paletton2.png)

Wir sehen nun eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind diese wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Grundfarbe auffällt, klicken wir den "Komplementär hinzufügen"-Schalter unter dem Menü, das Ihnen erlaubt, den Palettentyp auszuwählen. Der Standard war "Monochromatisch". Paletton berechnet eine passende Akzentfarbe; beim Klicken auf die Akzentfarbe in der unteren rechten Ecke wird uns mitgeteilt, dass diese Farbe `#508D7C` ist.

![Nun mit eingeschlossenen Komplementärfarben.](paletton3.png)

Wenn die vorgeschlagene Farbe für Ihre Bedürfnisse nicht funktioniert, können Sie das Farbschema ändern. Wenn zum Beispiel die vorgeschlagene grünlich-blaue Farbe nicht funktioniert, wählen Sie das Triad-Farbschema-Symbol, was zu Folgendem führt:

![Triad-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das grau-blaue oben rechts. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie Überschriften, Tabs-Markierungen oder andere Indikatoren auf der Seite:

![Triad-Farbschema ausgewählt](paletton-color-detail.png)

Nun haben wir unsere Grundfarbe und unseren Akzent. Wir haben auch einige komplementäre Schattierungen beider, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe, um Fokus anzudeuten, wie bei Hover-Zuständen von Links. Die Farben können in mehreren Formaten exportiert werden, damit Sie diese verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast bietet, damit Ihr Text scharf und lesbar ist, während sichergestellt wird, dass sie nicht zu hart für die Augen ist. Wenn der Kontrast zu niedrig ist, wird Ihr Text vom Hintergrund ausgewaschen und unlesbar, aber wenn Ihr Kontrast zu hoch ist, könnte der Nutzer Ihre Seite grell und unangenehm finden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Seite kann sehr unterschiedlich aussehen, wenn sie gedruckt wird im Vergleich zu dem, was der Nutzer auf seinem Bildschirm sieht.
Beim Drucken Ihrer Seite könnte der Nutzer wählen, nur in Schwarzweiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und -bilder beim Drucken von Dokumenten.

Was am wichtigsten ist, ist normalerweise der Text selbst, aber wenn Ihre Hintergrundfarben und -bilder sorgfältig ausgewählt wurden und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser zu sagen, dass er die Darstellung des Inhalts nicht anpassen sollte.

Der Standardwert von `print-color-adjust: economy` bedeutet, dass der Browser so erscheinen ändern darf, wie er es für notwendig hält, um die Lesbarkeit und/oder Wirtschaftlichkeit des Drucks des Inhalts zu optimieren, basierend auf dem Typ des Ausgabegeräts, auf dem das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` setzen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, speziell dafür gestaltet wurden, am besten mit den Farben und Bildern zu funktionieren, die unverändert bleiben.
Mit dieser Einstellung wird der Browser das Erscheinungsbild des Elements, auf das dieser Wert angewendet wird, nicht verändern und es so anzeigen, wie es in Ihrem CSS angegeben ist.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzervoreinstellungen bietet, um die Ausgabe zu ändern (wie ein "Hintergründe nicht drucken"-Kontrollkästchen in einem Druckdialogfeld), überschreibt das den Wert von `print-color-adjust`.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mittels CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
