---
title: Farben weise verwenden
slug: Web/CSS/Guides/Colors/Using_color_wisely
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

Die Auswahl der richtigen Farben für eine Website kann schwierig sein, insbesondere wenn Sie nicht gut in Kunst, Design oder zumindest grundlegender Farbtheorie bewandert sind. Eine falsche Farbauswahl kann Ihre Seite unattraktiv machen oder, schlimmer noch, den Inhalt aufgrund von Kontrastproblemen oder sich widersprechenden Farben unlesbar machen. Die falsche Verwendung von Farben kann dazu führen, dass Ihr Inhalt für Menschen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema zu wählen. Auch wenn sie nicht den Unterschied ausmachen können, den ein guter Designer bei diesen Entscheidungen bringt, können sie Ihnen den Einstieg erleichtern.

### Basisfarbe

Der erste Schritt besteht darin, Ihre **Basisfarbe** auszuwählen. Diese Farbe repräsentiert Ihre Website oder ihr Thema. So wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew), Blau mit dem Himmel oder dem Meer assoziieren, ist es ein guter Ausgangspunkt, eine geeignete Basisfarbe zur Repräsentation Ihrer Website auszuwählen. Es gibt zahlreiche Möglichkeiten, eine Basisfarbe zu wählen; einige Ideen sind:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts assoziiert wird, wie die vorhandene Farbe, die mit einem Produkt oder einer Idee identifiziert wurde, oder eine Farbe, die die Emotion repräsentiert, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema assoziiert sind. Wenn Sie eine Website über ein bestimmtes Objekt oder Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Objekt vorhanden ist.
- Durchstöbern Sie Websites, die Ihnen ermöglichen, zahlreiche vorhandene Farbpaletten und Bilder anzusehen, um Inspiration zu finden.

Mehrere nützliche Browser-Erweiterungen können bei der Auswahl von Basisfarben helfen. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/) Browser-Erweiterung ein Pipettenwerkzeug, um Farben von jeder Webseite auszuwählen. Es kann auch Durchschnittswerte der Farben eines Bereichs einer Seite ermitteln.

Ein „Durchschnittsfarb“-Auswahl ist nützlich, da manchmal das, was wie ein solider Farbblock aussieht, tatsächlich aus mehreren verwandten Farben besteht, wie das Auswählen des Blaus auf einem Foto des Ozeans oder Himmels. Ein einzelnes blaues Pixel, das aus einem Foto ausgewählt wurde, kann zu einer Farbe führen, die unpassend wirkt.

### Die Palette ausarbeiten

Sobald Sie sich für Ihre Basisfarbe entschieden haben, besteht der nächste Schritt darin, eine Palette geeigneter Farben zu erstellen, die zusammen mit der Basisfarbe verwendet wird. Es gibt mehrere Tools, die Farbtheorie auf Ihre Basisfarbe anwenden und entsprechende ergänzende Farben generieren. Online-Tools wie das kostenlose [Adobe Color CC online color wheel](https://color.adobe.com/create/color-wheel) können Ihnen helfen, eine zugängliche Farbpalette auszuwählen.

Viele dieser Tools können auch Filter auf Ihre Palette anwenden, damit Sie sehen, wie sie für Menschen mit verschiedenen Arten von Farbenblindheit aussehen. Siehe [Farben und Zugänglichkeit](#farben_und_zugänglichkeit) für eine kurze Erklärung, warum das wichtig ist.

Beim Entwerfen Ihrer Palette müssen Sie wahrscheinlich auch einige neutrale Kernfarben wie Weiß (oder fast Weiß), Schwarz (oder fast Schwarz) und eine oder mehrere Grautöne hinzufügen.

> [!NOTE]
> In der Regel ist es besser, so wenige Farben wie möglich zu verwenden. Die Verwendung von Farbe, um wichtige Inhalte hervorzuheben, anstatt Farbe für alles zu verwenden, wird mehr Effekt haben und Ihre Inhalte werden besser lesbar sein.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie geht über den Rahmen dieses Artikels hinaus, jedoch gibt es viele Artikel über Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie die Bedeutung von Farbe, wie sie wahrgenommen wird, und wie man Farben verwendet, um Ideen auszudrücken, einführt. Präsentiert von Pixar-Künstlern und Designern.
- [Color theory](https://en.wikipedia.org/wiki/Color_theory) auf Wikipedia
  - : Der Wikipedia-Eintrag zur Farbtheorie enthält großartige Informationen aus technischer Sicht. Es wird Ihnen wahrscheinlich nicht bei Ihrer Farbauswahl helfen, ist aber dennoch voll nützlicher Informationen.

## Farben und Zugänglichkeit

Stellen Sie sicher, dass Ihre Inhalte [zugänglich](/de/docs/Web/Accessibility) sind. Es gibt mehrere Möglichkeiten, wie Farbe ein {{Glossary("accessibility", "Zugänglichkeits-")}} Problem schaffen kann. Unsachgemäße oder unachtsame Verwendung von Farbe kann eine Website oder App hervorbringen, die ein Prozentsatz Ihrer Zielgruppe möglicherweise nicht angemessen nutzen kann, was zu verlorenen Besuchern, Geschäftsverlusten und möglicherweise sogar einem PR-Problem oder einer Klage führen kann. Daher ist es wichtig, Ihre Farbverwendung sorgfältig zu überlegen.

Es ist wichtig, [Farbe und Luminanz zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und immer [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu berücksichtigen. Es gibt mehrere Arten; die häufigste ist die Rot-Grün-Farbenblindheit, die dazu führt, dass Menschen den Unterschied zwischen den Farben Rot und Grün nicht unterscheiden können. Es gibt auch andere Arten, die vom Unvermögen reichen, den Unterschied zwischen bestimmten Farben zu erkennen, bis hin zur völligen Unfähigkeit, Farbe überhaupt zu sehen. Es gibt sogar Kombinationen von Farben und Animationen, die dazu führen können, dass Ihre fotosensitiven Benutzer [Anfälle](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) erleben.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) oft eine gute Sache ist, wenn es um Zugänglichkeit geht, reduziert sich bei Animationen, insbesondere schnellen Animationen, das [Reduzieren des Farbkontrasts](/de/docs/Web/Accessibility/Guides/Seizure_disorders#reduce_contrast) bei animierenden Elementen das Risiko von Anfällen. Wenn Sie Animationen einschließen, verwenden Sie die [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) {{cssxref("@media")}} Abfragefunktion, um Animationen für Benutzer zu reduzieren, die diese Präferenz ausgewählt haben.

Davon abgesehen, stellen Sie sicher, dass Sie genügend [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und den Vordergrundinhalten haben, um die Lesbarkeit zu gewährleisten. Verwenden Sie auch niemals Farbe als einziges Mittel, um Informationen zu übermitteln. Wenn Sie beispielsweise den Erfolg eines Vorgangs mit einem grünen Rand um das zugehörige UI-Element anzeigen und das Scheitern mit einem roten Rand, können Benutzer mit Rot-Grün-Farbenblindheit Ihre Website nicht korrekt nutzen. Verwenden Sie stattdessen Text- und Farbindikatoren zusammen, um diese Benutzer einzubeziehen. Beispielsweise wäre ein grünes Häkchen und ein rotes Kreuzchen besser.

## Beispiel für das Design einer Palette

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos von Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbfotos.

Verwenden Sie ein Farbauswahl-Werkzeug, um eine Farbprobe für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` gewählt, eine rostig orange-rote Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu ermitteln. Beim Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das „Base RGB“-Feld in der unteren linken Ecke des Werkzeugs ein:

![Nach Eingabe der Basisfarbe](paletton2.png)

Nun sehen wir eine monochromatische Palette, basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe auffällt, klicken wir auf den „add complementary“-Schalter unter dem Menü, das Ihnen erlaubt, den Palettentyp auszuwählen. Der Standard war „Monochromatisch“. Paletton berechnet eine geeignete Akzentfarbe; wenn man auf die Akzentfarbe in der unteren rechten Ecke klickt, erfahren wir, dass diese Farbe `#508D7C` ist.

![Jetzt mit enthaltenen Komplementärfarben.](paletton3.png)

Wenn die vorgeschlagene Farbe nicht Ihren Bedürfnissen entspricht, können Sie das Farbschema ändern. Wenn z. B. die vorgeschlagene grün-blaue Farbe nicht funktioniert, wählen Sie das Dreifach-Farbschema-Symbol aus, was zu folgendem führt:

![Triadisches Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das graublaue im oberen rechten Bereich. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie zum Beispiel für Überschriften, Tab-Highlights oder andere Indikatoren auf der Seite:

![Triadisches Farbschema ausgewählt](paletton-color-detail.png)

Nun haben wir unsere Basisfarbe und unser Akzent. Wir haben auch einige komplementäre Schattierungen von beiden, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe, um den Fokus anzuzeigen, wie zum Beispiel bei Link-Hover-Zuständen. Die Farben können in verschiedenen Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast bietet, damit Ihr Text scharf und lesbar ist und gleichzeitig nicht unangenehm für die Augen ist. Wenn der Kontrast zu niedrig ist, wird Ihr Text vom Hintergrund ausgewaschen, was ihn unlesbar macht, aber wenn Ihr Kontrast zu hoch ist, kann der Benutzer Ihre Website grell und unangenehm finden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Website kann beim Drucken sehr anders aussehen als das, was der Benutzer auf seinem Bildschirm sieht.
Beim Drucken Ihrer Seite kann der Benutzer auswählen, nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und Bilder beim Drucken von Dokumenten.

Was am meisten zählt, ist normalerweise der Text selbst, aber wenn Ihre Hintergrundfarben und Bilder sorgfältig ausgewählt wurden und/oder für die Nützlichkeit des Inhalts entscheidend sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass er keine Anpassungen am Erscheinungsbild des Inhalts vornehmen sollte.

Der Standardwert von `print-color-adjust: economy`, zeigt an, dass der Browser Veränderungen am Erscheinungsbild vornehmen darf, die er für notwendig hält, um die Lesbarkeit und/oder Druckökonomie des Inhalts zu optimieren, abhängig von der Art des Ausgabegeräts, auf das das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` setzen, um dem Browser mitzuteilen, dass das Element oder die Elemente, auf die Sie es anwenden, speziell dafür ausgelegt sind, am besten mit den Farben und Bildern zu arbeiten, die so belassen werden, wie sie sind. Mit dieser Einstellung wird der Browser das Erscheinungsbild des Elements, auf das dieser Wert angewendet wird, nicht stören und es wie in Ihrem CSS angegeben zeichnen.

> [!NOTE]
> Es gibt allerdings keine Garantie, dass `print-color-adjust: exact` dazu führt, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzereinstellungen zur Änderung der Ausgabe bietet (wie z.B. ein "keine Hintergründe drucken"-Checkbox in einem Druckdialogfeld), überschreibt das den Wert von `print-color-adjust`.

## Siehe auch

- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Farben und Luminanz verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
