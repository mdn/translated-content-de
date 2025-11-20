---
title: Farben klug einsetzen
slug: Web/CSS/Guides/Colors/Using_color_wisely
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Die richtigen Farben für eine Website auszuwählen kann knifflig sein, insbesondere wenn Sie nicht gut in Kunst, Design oder zumindest Grundlagen der Farbtheorie bewandert sind. Die falsche Farbwahl kann Ihre Seite unattraktiv machen oder, schlimmer noch, den Inhalt unleserlich lassen, aufgrund von Problemen mit Kontrast oder sich widersprechenden Farben. Die Verwendung falscher Farben kann dazu führen, dass Ihr Inhalt für Personen mit bestimmten Sehproblemen, insbesondere Farbenblindheit, vollkommen unbrauchbar wird.

## Die richtigen Farben finden

Es gibt Werkzeuge und Prozesse, die Ihnen helfen können, ein gutes Farbschema zu wählen. Während sie nicht ersetzen können, dass ein guter Designer Ihnen bei diesen Entscheidungen hilft, können sie Ihnen einen Einstieg bieten.

### Basisfarbe

Der erste Schritt besteht darin, Ihre **Basisfarbe** zu wählen. Diese Farbe repräsentiert Ihre Website oder ihr Thema. So wie wir Grün mit dem Getränk [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) in Verbindung bringen oder Blau mit dem Himmel oder dem Ozean, ist es ein guter Anfang, eine passende Basisfarbe zu wählen, die Ihre Seite repräsentiert. Es gibt viele Möglichkeiten, eine Basisfarbe auszuwählen; einige Ideen beinhalten:

- Eine Farbe, die natürlich mit dem Thema Ihres Inhalts assoziiert wird, wie die bestehende Farbe, die mit einem Produkt oder einer Idee identifiziert wird, oder eine Farbe, die die Emotion repräsentiert, die Sie vermitteln möchten.
- Eine Farbe, die aus Bildern stammt, die mit Ihrem Thema assoziiert werden. Wenn Sie eine Website über einen bestimmten Gegenstand oder ein Produkt erstellen, wählen Sie eine Farbe, die physisch auf diesem Gegenstand vorhanden ist.
- Stöbern Sie auf Websites, die es Ihnen ermöglichen, viele bestehende Farbpaletten und Bilder zu durchstöbern, um Inspiration zu finden.

Mehrere nützliche Browsererweiterungen können bei der Auswahl von Basisfarben helfen. Zum Beispiel bietet die [ColorZilla](https://www.colorzilla.com/)-Browsererweiterung ein Pipettenwerkzeug, um Farben von jeder Webseite auszuwählen. Sie kann auch Durchschnittswerte der Farben eines Bereichs einer Seite berechnen.

Ein "Durchschnittsfarb"-Auswahl ist nützlich, denn was manchmal wie ein solider Farbblock aussieht, könnte tatsächlich aus mehreren verwandten Farben bestehen, wie zum Beispiel das Blau aus einem Foto von einem Ozean oder Himmel. Ein einzelnes Blau-Pixel, das aus einem Foto ausgewählt wird, könnte zu einer Farbe führen, die fehl am Platz aussieht.

### Die Palette ausarbeiten

Sobald Sie sich für Ihre Basisfarbe entschieden haben, ist der nächste Schritt, eine Palette geeigneter Farben zu erstellen, die zusammen mit ihr verwendet werden können. Mehrere Werkzeuge sind verfügbar, um Farbtheorie auf Ihre Basisfarbe anzuwenden und geeignete zusätzliche Farben auszugeben. Online-Werkzeuge, wie das kostenlose [Adobe Color CC Online-Farbrad](https://color.adobe.com/create/color-wheel), können Ihnen helfen, eine barrierefreie Farbpalette auszuwählen.

Viele dieser Werkzeuge können auch Filter auf Ihre Palette anwenden, sodass Sie sehen können, wie sie für Menschen mit verschiedenen Formen von Farbenblindheit aussehen. Siehe [Farbe und Barrierefreiheit](#farbe_und_barrierefreiheit) für eine kurze Erklärung, warum das wichtig ist.

Beim Entwerfen Ihrer Palette müssen Sie wahrscheinlich auch einige grundlegende neutrale Farben hinzufügen, wie Weiß (oder nahezu Weiß), Schwarz (oder nahezu Schwarz) und eine oder mehrere Grautöne.

> [!NOTE]
> Normalerweise ist es besser, möglichst wenige Farben zu verwenden. Durch den Einsatz von Farbe, um wichtigen Inhalt hervorzuheben, anstatt alles farbig zu gestalten, erzielen Sie eine größere Wirkung und Ihr Inhalt wird lesbarer.

## Ressourcen zur Farbtheorie

Eine vollständige Überprüfung der Farbtheorie liegt außerhalb des Rahmens dieses Artikels, jedoch gibt es viele Artikel zur Farbtheorie. Wir fanden die folgenden Ressourcen besonders nützlich:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in Zusammenarbeit mit [Pixar](https://www.pixar.com/))
  - : Ein Online-Kurs, der Konzepte wie, was Farbe ist, wie sie wahrgenommen wird und wie man Farben einsetzt, um Ideen auszudrücken, einführt. Präsentiert von Pixar-Künstlern und -Designern.
- [Farbtheorie](https://de.wikipedia.org/wiki/Farbtheorie) auf Wikipedia
  - : Der Eintrag von Wikipedia zur Farbtheorie bietet großartige Informationen aus technischer Perspektive. Er wird Ihnen wahrscheinlich nicht bei der Farbauswahl helfen, aber ist dennoch voller nützlicher Informationen.

## Farbe und Barrierefreiheit

Stellen Sie sicher, dass Ihr Inhalt [zugänglich](/de/docs/Web/Accessibility) ist. Es gibt mehrere Wege, wie Farbe ein {{Glossary("accessibility", "Barrierefreiheits")}}-Problem verursachen kann. Falscher oder unachtsamer Einsatz von Farbe kann zu einer Website oder App führen, die ein Prozentsatz Ihres Zielpublikums möglicherweise nicht angemessen nutzen kann, was zu verlorenem Traffic, verlorenem Geschäft und möglicherweise sogar einem Problem in der Öffentlichkeitsarbeit oder einer Klage führen kann. Daher ist es wichtig, Ihren Farbeinsatz sorgfältig zu bedenken.

Es ist wichtig, [Farbe und Luminanz zu verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) und stets [Farbenblindheit](https://medlineplus.gov/colorblindness.html) und [vestibuläre Störungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders) zu berücksichtigen. Es gibt verschiedene Arten; die häufigste ist Rot-Grün-Farbenblindheit, die dazu führt, dass Personen nicht zwischen den Farben Rot und Grün unterscheiden können. Es gibt noch andere, die von der Unfähigkeit reichen, bestimmte Farben zu unterscheiden, bis hin zur völligen Unfähigkeit, Farben überhaupt zu sehen. Es gibt sogar Farb- und Animationskombinationen, die dazu führen können, dass Ihre fotosensitiven Benutzer [Krämpfe](/de/docs/Web/Accessibility/Guides/Seizure_disorders#colors) erfahren.

Während ein höherer [Farbkontrast](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) in Bezug auf die Barrierefreiheit oft eine gute Sache ist, verringert sich bei der Animation, insbesondere bei schnellen Bewegungen, das Risiko von Anfällen durch das [Reduzieren des Farbkontrasts](/de/docs/Web/Accessibility/Guides/Seizure_disorders#reduce_contrast) bei animierenden Elementen. Wenn Sie Animationen einfügen, verwenden Sie das [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) {{cssxref("@media")}} Query-Feature, um Animationen für Benutzer zu reduzieren, die diese Präferenz ausgewählt haben.

Dennoch stellen Sie sicher, dass Sie genug [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen Ihrem Hintergrund und dem Vordergrundinhalt haben, um die Lesbarkeit sicherzustellen. Verwenden Sie auch niemals Farbe als einzigen Weg, Informationen zu vermitteln. Wenn Sie zum Beispiel den Erfolg eines Vorgangs durch einen grünen Rahmen um das zugehörige UI-Element und ein Scheitern durch einen roten Rahmen anzeigen, können Benutzer mit Rot-Grün-Farbenblindheit Ihre Seite nicht richtig nutzen. Verwenden Sie stattdessen Text- und Farbeindikatoren gemeinsam, um diese Benutzer einzuschließen. Zum Beispiel wären ein grünes Häkchen und ein rotes Kreuz besser.

## Beispiel für Palettendesign

In diesem Beispiel erstellen wir eine geeignete Farbpalette für eine Website für ein Spiel, das auf dem Planeten Mars spielt. Eine [Google-Suche nach Fotos von Mars](https://www.google.com/search?q=Mars&tbm=isch) liefert mehrere Farbfotos.

Verwenden Sie ein Farbwähler-Werkzeug, um eine Farbprobe für die Basisfarbe auszuwählen. Für dieses Beispiel haben wir `#D79C7A` ausgewählt, eine rostige Orange-Rot-Farbe. Wir können [Paletton](https://www.paletton.com/) verwenden, um die anderen Farben für unsere Palette zu entwickeln. Beim Öffnen von Paletton sehen wir:

![Direkt nach dem Laden von Paletton.](paletton1.png)

Als nächstes geben wir den Hex-Code unserer Farbe (`D79C7A`) in das Feld "Base RGB" unten links im Tool ein:

![Nach Eingabe der Basisfarbe](paletton2.png)

Jetzt sehen wir eine monochromatische Palette basierend auf der Farbe, die wir aus dem Mars-Foto ausgewählt haben. Wenn Sie verwandte Farben benötigen, sind dies wahrscheinlich gute Optionen. Um eine Akzentfarbe zu finden, die neben der Basisfarbe hervorsteht, klicken wir auf den "add complementary"-Schalter unter dem Menü, das es Ihnen ermöglicht, den Palettentyp auszuwählen. Der Standard war "Monochromatic". Paletton berechnet eine geeignete Akzentfarbe; ein Klick auf die Akzentfarbe in der unteren rechten Ecke zeigt uns, dass diese Farbe `#508D7C` ist.

![Jetzt mit ergänzenden Farben enthalten.](paletton3.png)

Wenn die vorgeschlagene Farbe nicht Ihren Bedürfnissen entspricht, können Sie das Farbschema ändern. Wenn zum Beispiel die vorgeschlagene grünlich-blaue Farbe nicht funktioniert, wählen Sie das Triad-Farbschema-Symbol, was zu folgendem Ergebnis führt:

![Triad-Farbschema ausgewählt](paletton4.png)

Klicken Sie auf das grau-bläuliche in der oberen rechten Ecke. Die Farbe ist `#556E8D`. Diese kann als Akzentfarbe verwendet werden, um Dinge hervorzuheben, wie z. B. für Überschriften, Tab-Highlights oder andere Indikatoren auf der Seite:

![Triad-Farbschema ausgewählt](paletton-color-detail.png)

Nun haben wir unsere Basisfarbe und unseren Akzent. Wir haben auch einige komplementäre Schattierungen von beiden, die verwendet werden können, um Verläufe zu erstellen oder als Akzentfarbe verwendet werden, um den Fokus anzuzeigen, wie z. B. bei Hover-Zuständen von Links. Die Farben können in mehreren Formaten exportiert werden, die Sie verwenden können.

Sie sollten auch neutrale Farben auswählen. Finden Sie eine Farbe, die genug Kontrast für Ihren Text bietet, um klar und lesbar zu sein, während Sie sicherstellen, dass sie nicht unangenehm für die Augen ist. Wenn der Kontrast zu niedrig ist, wird Ihr Text vom Hintergrund ausgewaschen und ist unleserlich, aber wenn Ihr Kontrast zu hoch ist, könnte der Benutzer Ihre Seite als grell und unangenehm empfinden.

## Farbe, Hintergründe, Kontrast und Drucken

Ihre Seite kann beim Drucken ganz anders aussehen als das, was der Benutzer auf seinem Bildschirm sieht. Beim Drucken Ihrer Seite könnte der Benutzer auswählen, nur in Schwarz-Weiß zu drucken. Die meisten Browser entfernen standardmäßig Hintergrundfarben und -bilder beim Drucken von Dokumenten.

In der Regel ist der Text selbst das Wichtigste, aber wenn Ihre Hintergrundfarben und -bilder sorgfältig ausgewählt wurden und/oder entscheidend für die Nützlichkeit des Inhalts sind, können Sie die CSS-Eigenschaft {{cssxref("print-color-adjust")}} verwenden, um dem Browser mitzuteilen, dass er keine Anpassungen am Erscheinungsbild des Inhalts vornehmen sollte.

Der Standardwert von `print-color-adjust: economy` gibt an, dass der Browser Auftretenänderungen nach eigenem Ermessen vornehmen darf, um die Lesbarkeit und/oder Druckökonomie des Inhalts zu optimieren, je nach Art des Ausgabegerätes, auf das das Dokument gezeichnet wird.

Sie können `print-color-adjust: exact` setzen, um dem Browser mitzuteilen, dass die Elemente, auf denen Sie es verwenden, speziell so gestaltet wurden, um am besten mit den Farben und Bildern zu arbeiten, die unverändert bleiben. Mit dieser Einstellung wird der Browser das Erscheinungsbild des Elements, auf dem dieser Wert angewendet ist, nicht verändern und es so zeichnen, wie es von Ihrem CSS angegeben ist.

> [!NOTE]
> Es gibt jedoch keine Garantie, dass `print-color-adjust: exact` dazu führen wird, dass Ihr CSS genau wie angegeben verwendet wird.
> Wenn der Browser Benutzereinstellungen zur Änderung der Ausgabe bereitstellt (wie ein "keine Hintergründe drucken"-Checkbox in einem Druckdialog), übersteuert das den Wert von `print-color-adjust`.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)-Modul
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton](https://paletton.com/)
