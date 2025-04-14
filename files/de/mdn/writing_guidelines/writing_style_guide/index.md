---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: e27a3f309809220e7b54ad2d2bc861a845968fc2
---

Dieser Schreibstilleitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, die sprachliche und stilistische Konsistenz auf der Website sicherzustellen. Dennoch interessieren wir uns mehr für den Inhalt als für dessen Formatierung, also fühlen Sie sich nicht verpflichtet, den gesamten Schreibstilleitfaden zu erlernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender später Ihre Arbeit bearbeitet, um sie mit diesem Leitfaden in Einklang zu bringen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens beziehen sich hauptsächlich auf die englischsprachige Dokumentation. Andere Sprachen können (und sollten) ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten auf der Seite des jeweiligen Lokalisierungsteams veröffentlicht werden. Dennoch sollte dieser Leitfaden weiterhin für die Formatierung und Organisation von Inhalten herangezogen werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden sollen, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei C's des Schreibens](#berücksichtigen_sie_die_drei_c's_des_schreibens)
- [Fügen Sie relevante Beispiele ein](#fügen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für den Inhalt, den Sie schreiben, im Hinterkopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkbegriffe eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei C's des Schreibens

Die drei C's des guten Schreibens sind: klar, prägnant und konsistent.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden.
- **Prägnant**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollten. Wenn Sie zu viele Details liefern, wird die Seite mühsam zu lesen sein und selten genutzt werden.
- **Konsistent**: Achten Sie darauf, dass Sie denselben Wortlaut konsistent auf der gesamten Seite und über mehrere Seiten hinweg verwenden.

### Fügen Sie relevante Beispiele ein

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, für was jeder Parameter verwendet wird, und um eventuell bestehende Randfälle zu klären. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz/die einleitenden Absätze vor der ersten Überschrift die Informationen zusammenfassen, die die Seite abdecken wird, und vielleicht, was Leser in der Lage sein werden zu erreichen, nachdem sie den Inhalt durchgegangen sind. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie das notwendige Vorwissen informieren, das der Leser haben sollte, falls vorhanden. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den entsprechenden Informationen, und er sollte Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B. was es genau bedeutet, Text zu "umrahmen", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang.
  Zu viele Details sind enthalten, und der Text taucht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn aufgerufen, umrahmt die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API die Zeichen in der angegebenen Zeichenfolge beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > Im Terminus der Computergrafik bedeutet "Umrahmen" von Text das Zeichnen der Umrisse der Zeichen in der Zeichenfolge ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schrift des Kontexts gezeichnet, wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) -Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, was die angegebene X-Koordinate in die Mitte der Zeichenfolge stellt.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen ermöglicht, eine maximale Breite für die Zeichenfolge in Pixeln festzulegen.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen Raum dieser Breite zu passen, wenn er gezeichnet wird.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge mit Farbe auszufüllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die Methode `strokeText()`.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenfolge, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angezeigt wird.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für mehr Details und Beispiele, siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Grafiken zeichnen" sowie unseren Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und diverses Publikum.
Wir ermutigen ausdrücklich dazu, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Begriffen in der Dokumentation:

- Vermeiden Sie die Verwendung der Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte mit **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht verwenden; falls dies dennoch erforderlich ist, ziehen Sie in Betracht, **fantastic** als Alternative zu nutzen.

Es ist am besten, eine gender-neutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist.
Zum Beispiel, wenn Sie von den Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn es sich um eine Person eines beliebigen Geschlechts handelt, ist "er"/"sein" nicht angemessen.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Nutzung seiner Webcam gestatten möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Nutzung ihrer Webcam gestatten möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie gender-neutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Nutzung ihrer Webcam gestatten möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". Die gender-neutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Option ist, die Benutzer plural zu machen, so:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcams gestatten möchten."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog fordert die Erlaubnis des Benutzers zur Webcam-Nutzung an."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Lösung des Problems ist vermutlich besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten im Zusammenhang mit der Geschlechterverteilung in verschiedenen Sprachen, die sehr unterschiedliche Geschlechtsregeln haben können.
Diese Lösung erleichtert die Übersetzung sowohl für Leser als auch für Übersetzer.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und richtungsweisenden Begriffen wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer zutrifft. Sie können auch unklar oder irreführend sein – insbesondere für Benutzer, die Screenreader oder übersetzten Inhalt verwenden, bei dem Richtungssprache mehrdeutig oder schwer genau zu übersetzen sein kann. In responsiven Layouts, bei denen sich die Position des Inhalts je nach Bildschirmgröße ändern kann, könnten solche Richtungsanweisungen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, den Inhalt zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Formulierungen, die den Abschnitt, das Konzept oder das Element klar identifizieren, auf das verwiesen wird. Beziehen Sie sich auf Abschnitte anhand ihrer Titel oder Überschriften und beziehen Sie sich auf Beispiele oder Codeausschnitte, indem sie beschreiben, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Siehe den Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) weiter unten auf dieser Seite."
- **Falsch**: "Siehe den Abschnitt Zugänglichkeit unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mithilfe von CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Erstellen einer Media-Abfrage erklärt."
- **Falsch**: "Dieses Konzept wird im obenstehenden Abschnitt erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel". Beschreibende Linktexte bieten einen besseren Kontext für alle Leser und verbessern die Benutzererfahrung mit unterstützenden Technologien.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente anordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) um mehr zu erfahren."

Indem Sie diesen Richtlinien folgen, tragen Sie dazu bei, die MDN-Dokumentation zugänglich, klar und für alle nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie mit SEO im Hinterkopf

Während das Hauptziel jedes Textes auf den MDN Web Docs immer darin bestehen sollte, über offene Webtechnologien zu informieren und zu erklären, damit Entwickler schnell lernen können, das zu tun, was sie möchten, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie in der Lage sind, das von uns geschriebene Material zu _finden_. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben berücksichtigen.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können und dass Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, in angemessener Weise entworfen, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, nehmen Suchmaschinen an, dass die Seiten über dasselbe Thema handeln, selbst wenn dies nicht der Fall ist.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, kann es leicht passieren, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und demselben Beispiel. Dies macht es für Suchmaschinen schwer zu wissen, was was ist, und sie teilen sich den Pagerank, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist wichtig, dass jede Seite ihren eigenen Inhalt hat. Mit den folgenden Vorschlägen können Sie dies erreichen:

  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Anwendungsfälle, in denen es vielleicht mehr Unterschiede gibt, als man denken würde. Dokumentieren Sie zum Beispiel bei der Dokumentation der Eigenschaften `width` und `height`, wie horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden und diskutieren Sie über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` in Bezug auf das Schaffen von Raum für eine Seitenleiste erwähnen, während `height` für das vertikale Scrollen oder Fußzeilen verwendet wird. Informationen über Zugänglichkeitsprobleme sind ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele beide (oder alle) der ähnlichen Methoden oder Eigenschaften zu Beginn verwenden können, wodurch keine echten Änderungen erforderlich sind, wenn sie wiederverwendet werden. Also verwerfen Sie das Beispiel und schreiben ein neues oder stellen Sie zumindest mehrere Beispiele bereit, bei denen mindestens einige von ihnen unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Beschreibung, wie es funktioniert, sollten in einem angemessenen Detaillierungsgrad entsprechend der Komplexität des Themas und der Zielgruppe enthalten sein.

  Der einfachste Weg, um zu vermeiden, dass man sich zu ähnlich ist, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit dies erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu gering ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Leitlinie sollten Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blähen Sie eine Seite nicht künstlich auf, sondern behandeln Sie diese Richtlinie als Mindestziel, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um ordentlich durchsuchbar zu sein, ohne sie mit unnötigem Text zu überfrachten:

  - **Vermeiden Sie Stubs**: Natürlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, auf den MDN Web Docs "Stub"-Seiten zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Sicherstellen von Vollständigkeit**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig entwickelt sind**: Es ist leicht, eine kurze Erklärung für etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es Sonderfälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer von Anfänger- bis Mittelstufe wahrscheinlich verwenden werden, sowie die fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte von einem Überblick darüber gefolgt werden, was das Beispiel tun wird, welches zusätzliche Wissen zum Verständnis erforderlich sein könnte und so weiter. Nach dem Beispiel (oder zwischen den Teilen des Beispiels eingestreut) sollte Text stehen, der erklärt, wie der Code funktioniert. Gehen Sie in den Beispielen nicht sparsam mit Details oder der Behandlung von Fehlern um. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und in ihren eigenen Projekten verwenden, und Ihr Code _wird_ auf Produktionsseiten verwendet! Sehen Sie sich unsere [Leitlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen an.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie bei allen Bildern und Diagrammen ordnungsgemäßen [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) -Text hinzu. Dieser Text sowie Untertitel auf Tabellen und anderen Figuren zählen, da Suchmaschinen-Crawler keine Bilder durchsuchen können und `alt` Text Suchmaschinen-Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht zum Feature gehören, hinzuzufügen, in einem Versuch, Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und neigt dazu, bestraft zu werden.
    > Ebenso, **fügen Sie keine** sich wiederholenden, unhilfreichen Materialien oder Blöcke von Schlüsselwörtern innerhalb der tatsächlichen Seite ein, in einem Versuch, die Größe und das Suchranking der Seite zu verbessern. Dies schadet mehr, sowohl der Lesbarkeit des Inhalts als auch unseren Suchergebnissen.

- **Fokus auf Themeninhalte**: Es ist weitaus besser, Inhalte um das Thema der Seite herum zu schreiben als um ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einbeziehen könnten; in der Tat kompilierten viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittleren und langen Schlüsselwörtern), um sie innerhalb ihres Artikels einzuschließen, abhängig von der Länge. Dies führt zu einer Diversifizierung Ihrer Formulierung, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, dass sie grammatikalisch korrekte Sätze in Englisch schreiben, empfehlen wir, dass Sie diesen Richtlinien folgen, um Inhalte über die MDN Web Docs hinweg konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Ausdrucks gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die Benutzern möglicherweise nicht vertraut sind. Wenn Sie Zweifel haben, erweitern Sie den Begriff. Noch besser, verlinken Sie es mit dem Artikel oder [Glossar](/de/docs/Glossary) Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas auf XML basierende Sprache..."
  - **Falsch**: "XUL ist Mozillas auf XML basierende Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können in Klammerausdrücken und Notizen gebräuchliche lateinische Abkürzungen (etc., i.e., e.g.) verwenden. Verwenden Sie Punkte in diesen Abkürzungen und fügen Sie danach ein Komma oder ein anderes geeignetes Satzzeichen hinzu.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B.: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In regulärem Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abbr.  | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | vgl.   | _confer_         | vergleichen                   |
  | z.B.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter, usw.           |
  | d.h.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | beachte wohl                  |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie stets, ob es wirklich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt sind oder ihre Bedeutungen nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Beispielsweise ist es eine häufige Fehler, "z.B." mit "d.h." zu verwechseln.

- **Pluralbildung von Abkürzungen und Akronymen**: Für Plurale von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Andernfalls verwenden Sie im Text die ausgeschriebene Form "versus".

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Attribut) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung zu einer früheren Version dieses Leitfadens, daher können Sie viele Instanzen von "Web" und "Internet" auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zu ändern, um die Großschreibung zu ändern.

Tastaturtasten sollten satzweise Großschreibung verwenden, nicht großgeschriebene Großschreibung.
Zum Beispiel "<kbd>Enter</kbd>" statt "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die Taste "<kbd>Escape</kbd>" abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, z. B. Markennamen, die Großbuchstaben enthalten, oder Wörter, die auf den Namen einer Person zurückgehen (es sei denn, das Wort wird innerhalb des Codes verwendet und die Code-Syntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke von Oracle Corporation, es sollte immer so geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54.000
  - **Falsch**: 4.000; 54000

- **Daten**: Bei Daten (außer bei Datumsangaben in Codebeispielen) verwenden Sie das Format "1. Januar 1900".

  - **Richtig**: 24. Februar 1906
  - **Falsch**: 24. Februar 1906; 24/02/1906; 24/02/06

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Dekaden**: Verwenden Sie das Format "1990er". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920er
  - **Falsch**: 1920's

- **Pluralbildung von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabus, octopuses
- **Falsch**: syllabusse, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eines von beiden für Konsistenz benötigen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets gelangen, selbst in Inline-Snippets, können Leser sie kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie &ldquo;geschwungene Anführungszeichen.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die normalerweise am Anfang eines Satzes gefunden wird. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der folgenden unabhängigen Klausel zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstilleitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen beachten Sie sich auf unseren Schreibstilleitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serialkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich reise mit Zügen, Flugzeugen und Autos."
  - **Falsch**: "Ich reise mit Zügen, Flugzeugen und Autos."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, erwägen Sie, ihn als zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen darauf achten, die Datei festzulegen."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen darauf achten, die Datei festzulegen."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "was"**: Eine eingeschränkte Klausel ist wesentliche für die Bedeutung des Satzes und bedarf keine Kommas, um vom verbleibenden Satz getrennt zu werden. Eine eingeschränkte Klausel wird normalerweise durch "dass" eingeführt und **sollte nicht** von einem Komma vorangestellt werden.

  - **Richtig**: "Wir haben ein Kurs zusammengestellt, der alle wichtigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben ein Kurs zusammengestellt, der alle wichtigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht eingeschränkte Klausel liefert zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Eine nicht eingeschränkte Klausel wird normalerweise durch "was" eingeführt und sollte von einem Komma vorangestellt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor "wie"**: Wenn "wie" Teil einer nicht eingeschränkten Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "wie".

  - **Richtig**: "Das Array-Objekt hat Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie z.B. das Verbinden, Umkehren und Sortieren davon."
  - **Falsch**: "Das Array-Objekt hat Methoden, um Arrays auf verschiedene Weise zu manipulieren wie z.B. das Verbinden, Umkehren und Sortieren davon."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie" verwendet wird. In diesem Fall ist die Klausel, die "wie" enthält, wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden leistungsfähiger durch das Hinzufügen von Funktionen wie Audio- und Video-Manipulation und der Zugriff auf Rohdaten mit WebSockets."
  - **Falsch**: "Webanwendungen werden leistungsfähiger durch das Hinzufügen von Funktionen, wie Audio- und Video-Manipulation, und der Zugriff auf Rohdaten mit WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit einem Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanisch-englische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Variante oder als primär in einer nicht-amerikanischen Form von Englisch notiert.
Wenn Sie z.B. [„behaviour“](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt) nachschlagen, finden Sie die Formulierung "Chiefly British", gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Varianten der Rechtschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, welche genehmigte Wörter enthalten, die nicht in den Standard-Wörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "Tag". Darüber hinaus sollte das Element in spitze Klammern "<>" eingeschlossen sein und sollte mit Rückwärtsapostrophen (\`) gestylt werden. Zum Beispiel, wenn Sie \<input\> in Rückwärtsapostrophen einschließen, wird es als `<input>` formatiert, wie es erwartet wird.

  - **Richtig**: das `<span>` Element
  - **Falsch**: das span Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement` Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zu seiner Referenzseite hinzufügt.

  - **Rückwärtsapostrophen verwenden**: `<span>`
  - **Das Makro verwenden**: {{HTMLElement("span")}} (Quelltext in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente", wo immer dies möglich ist, zur Konsistenz.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Charakters unseres Inhalts.
Versuchen Sie jedoch konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollen, wie Überschriften, Anmerkungen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite bei den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste zeigt einige empfohlene Praktiken, wenn Sie ein Codebeispiel für die MDN Web Docs schreiben:

- Jedes Beispielstück sollte folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das durch das Codebeispiel veranschaulicht wird. Zum Beispiel „Offsetdruck verwenden“ und „Stil auf vorherige Ebene zurücksetzen“.
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Besonderheiten des Beispiels erläutert, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel „Im folgenden Beispiel sind zwei Kaskadenschichten in der CSS, `base` und `special`, definiert.“
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis und den Arbeitsmechanismus des Codes beschreibt.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und wie es verwendet wird, demonstrieren, sondern auch dessen Zweck und Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Codebeispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu unterteilen, sodass sie einzeln beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels denselben Typ haben (HTML, CSS und JavaScript), bevor das Beispiel ausgeführt wird, concatiert werden. Dadurch können Sie den Code in mehrere Segmente aufteilen, von denen jedes optional eigene Beschreibungen, Überschriften usw. haben kann. Dies macht das Dokumentieren von Code unglaublich leistungsstark und flexibel.

Um zu erfahren, wie Sie Codebeispiele für die MDN Web Docs formatieren oder stilisieren, sehen Sie unsere [Leitlinien zum Styling von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN nach ihrem Titel, folgen Sie der Groß- und Kleinschreibung im Linktext (entsprechen Sie dem Seiten- oder Abschnittstitel). Verwenden Sie die Groß- und Kleinschreibung im Linktext selbst dann, wenn sie von dem verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass die im Seiten- oder Abschnittstitel verwendete Groß- und Kleinschreibung nicht korrekt ist). Verwenden Sie keine Anführungszeichen um den Linktext herum. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, gehen Sie wie folgt vor:

- **Richtig**: "Siehe den [Leitfaden zum Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Siehe den "[Leitfaden zum Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)"."

Folgen Sie einem konsistenten Stil, wenn Sie auf Abschnitte innerhalb einer Seite verlinken:

- **Richtig**: "Für weitere Informationen, beziehen Sie sich auf den Abschnitt [Zuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Leitfaden zu Speicherverwaltung_."

Wenn sich der zu verlinkende Abschnitt auf derselben Seite befindet, können Sie den Standort des Abschnitts mit beschreibenden Phrasen angeben.

- **Richtig**: "Dieses Konzept wird im [Abschnitt Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) dieses Dokuments ausführlicher beschrieben."
- **Falsch**: "Dieses Konzept wird im [Abschnitt Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) unten ausführlicher beschrieben."

Auf MDN, eine weitere Möglichkeit, eine Referenzseite zu verlinken, ist durch die Verwendung eines Makros. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verweisen, verwenden Sie das `HTMLElement` Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verweisen, verwenden Sie das `CSSxRef` Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen oder nicht. Pull-Anfragen, die externe Links hinzufügen werden abgelehnt, wenn sie diesen Richtlinien nicht folgen.

Wenn Sie in Erwägung ziehen, einen externen Link zu MDN [Lerne Webentwicklung](/de/docs/Learn_web_development) -Inhalten hinzuzufügen, lesen Sie bitte auch [Richtlinien zur Erstellung von Inhalten für Lerne Webentwicklung > Externe Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

Im Allgemeinen, wenn Sie in Erwägung ziehen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko minimiert wird, dass:

- Links veraltet oder defekt sind
- Der Anschein einer Befürwortung insbesondere bei kommerziellen Produkten oder Dienstleistungen entsteht
- Versucht wird, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Kurze Links, die das Linkziel verschleiern verwendet werden

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, ziehen Sie in Betracht, innerhalb von MDN Web Docs zu verweisen. Interne Links sind einfacher zu pflegen und machen das gesamte MDN Web Docs für die Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die:

  - Einzigartig oder unentbehrlich sind (z.B. ein IETF RFC)
  - Notwendig für Attribution, Zitation oder Danksagung sind (z.B. als Teil einer Creative Commons-Nachweis)
  - Wahrscheinlich eher gepflegt werden als solche Inhalte auf MDN Web Docs selbst einzubeziehen (z.B. Veröffentlichungsnotizen eines Anbieters)
  - Open Source oder Community-getrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen Relevanz, Wartungsfähigkeit, Zugänglichkeit oder stellen anderweitig Barrieren für Leser auf. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters, anstatt der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Eigenwerbung oder Eigenpromotion sind (z.B. die eigene Arbeit des Autors abseits von MDN Web Docs)
  - Bezahlschrank sind (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in Ländern mit niedrigem Einkommen unerschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die Selbstpromotion oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository einen Wert hat, kann das Verlinken auf eigene Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zwei Mal, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage offenlegen. Andernfalls kann Ihre fortgesetzte Teilnahme an MDN Web Docs gefährdet sein.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Redakteur einer Spezifikation sind und an Dokumentationen zu dieser Spezifikation mitarbeiten, dann wird es erwartet und ist akzeptabel, auf diese zu verlinken. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (sogenannte "Shortlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann das Ziel bei bestimmten Shortenern nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine über Drittanbieter (nutzergenerierbare) URL-Shortener erstellten Links. Zum Beispiel, wenn `https://myshort.link/foobar` ein über einen zufälligen Benutzer erstellter Kurzlink ist und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com`-URL.

Auf der anderen Seite sind erstpartige Shortener, die von den Organisationen betrieben werden, die auch die Ziel-URLs pflegen, erwünscht. `https://bugzil.la` gehört und wird betrieben von Mozilla und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, welches ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenlevel in abnehmender Reihenfolge, ohne Level zu überspringen: `##`, dann `###` und dann `####`; diese werden in die [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>` -Tags übersetzt.

`##` ist die höchste erlaubte Ebene, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften zu verwenden. Wenn Sie das Bedürfnis verspüren, eine vierte Überschriftenebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel zu unterteilen, mit einer Landing Page. Alternativ erwägen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um eine Level-4-Überschrift zu vermeiden.

Behalten Sie beim Erstellen von Überschriften für Unterabschnitte die folgenden Do's und Don'ts im Hinterkopf:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einziges Unterthema.
  Es ist entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Rückwärtsapostrophen verwenden, um Codebegriffe anzugeben (z.B. "Die `FooBar`-Schnittstelle verwenden").
- **Erstellen Sie keine "stoßenden Überschriften".** Das sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne Text dazwischen.
  Dies sieht nicht gut aus und lässt Leser ohne erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite verwenden, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz es Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr offene Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) oder mindestens eine haben, die mit unserer allgemeinen Inhaltslizenz (Creative Commons Attribution-ShareAlike Lizenz) [Creative Commons-Lizenz: SA-Attribution - License](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) kompatibel ist.
- Um Bilder zu komprimieren, verwenden Sie <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine Leerzeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt`-Text haben](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein.
Individuelle Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat.
Abhängig von der Art der Liste, die Sie erstellen möchten, passen Sie Ihren Schreibstil wie in den folgenden Abschnitten beschrieben an. In beiden Fällen sollten Sie einen einleitenden Satz einschließen, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammengehörige, kurze Informationen zu gruppieren. Jedes Element in der Liste sollte eine ähnliche Satzstruktur verwenden. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder Subjekt fehlt oder beides) in Aufzählungslisten sollten standardmäßige Interpunktion enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des endgültigen Satzes des Elements, so wie es in einem Absatz erwartet würde. Dies ist ein Beispiel einer korrekt strukturierten Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie sich dieselbe Satzstruktur von Punkt zu Punkt wiederholt. In diesem Beispiel gibt jeder Aufzählungspunkt eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt Schatten zum Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, wo immer möglich, dieselbe Struktur für alle Elemente in einer Liste zu verwenden; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einem Satz von Anweisungen zu nummerieren. Da Anweisungen komplex sein können, steht Klarheit im Vordergrund, insbesondere wenn der Text in jedem Listenelement ausführlich ist. Wie bei Aufzählungslisten, folgen Sie den standardmäßigen Interpunktionsregeln. Dies ist ein Beispiel einer korrekt strukturierten nummerierten Liste:

  > Um eine nummerierte Liste richtig zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer Kontext zu geben, bevor er mit den Anweisungen beginnt.
  > 2. Beginnen Sie, Ihre Anweisungen zu erstellen, und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr umfangreich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, sollte die nummerierte Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis bei Abschluss gefolgt werden.

  Das folgende ist ein Beispiel, wie Sie eine abschließende Erklärung für die vorherige Liste schreiben:

  > Wir haben eine kurze nummerierte Liste erstellt, die Schritte bereitstellt, um eine nummerierte Liste korrekt zu formatieren.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungen oder zum Durchführen einer geordneten Prozedur verwendet werden, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten bei den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe Auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen präsentieren Sie die Links in einem "Siehe Auch"-Abschnitt im [Aufzählungsliste](#listen) Format, wobei jedes Element in der Liste als Phrase ist. Im [Lerne Webentwicklung](/de/docs/Learn_web_development) Abschnitt auf MDN folgt der Siehe Auch Abschnitt jedoch dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um die Konsistenz über die MDN Web Docs hinweg zu gewährleisten, behalten Sie die folgenden Richtlinien im Hinterkopf, während Sie einen "Siehe Auch"-Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts übereinstimmen, auf den verlinkt wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" wird sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzschreibung im Linktext selbst dann, wenn sie sich von dem Seitentitel oder Abschnittstitel unterscheidet. Es könnte sein, dass die bei der Seite oder Abschnitt genutzte Schreibung fehlerhaft ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzschreibung wird sein:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie Satzschreibung, selbst wenn die Schreibung auf der Zielartikel-Seite unterschiedlich ist. Das dient der Konsistenz auf den MDN Web Docs. Ausnahmen gelten für die Titel von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um eine Seite zu verlinken, wie im Abschnitt [Querverweise zu Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung eines Makros fügt dem Schlagwort im Linktext eine Codeformatierung hinzu, wie im folgenden Beispiel dargestellt wird.
- Kein Artikel ("A", "An", "The") ist am Anfang des Satzes im Linklistenelement erforderlich. Keine Interpunktion ist am Ende des Listenelements erforderlich, da es in der Regel ein Begriff oder eine Phrase ist.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) Keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie Codeformatierung mit Rückwärtsapostrophen (\`) zu Schlüsselwörtern und Literalen im Linktext hinzu, obwohl die Formatierung in den Seitentiteln und Abschnittsüberschriften nicht verwendet wird. Zum Beispiel für den Seitentitel "Array() Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link herum minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase, ohne abschließende Zeichensetzung. Halten Sie alle verlinkten Texte am Anfang um das Scannen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren für das Styling von Kontrollkästchen
- Verwenden Sie das Konjunktion "und" vor dem letzten Element in der Reihe nicht.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links, geben Sie nach Möglichkeit die Quelle der Seite und das Jahr der Veröffentlichung oder der letzten Aktualisierung an (in Klammern), wenn dies möglich und angemessen ist. Dieses Information gibt den Lesern gleich eine klare Vorstellung vom Zielort, den sie beim Anklicken des Links erreichen.
  Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft Lesern bei der Beurteilung der Relevanz des verlinkten Artikels und hilft auch den MDN-Verwaltern, Links zu Artikeln zu überprüfen,die lange nicht aktualisiert wurden. Wenn Sie einen Link auf einen Artikel auf Wikipedia anbieten, können Sie das Erscheinungs-/Aktualisierungsdatum ignorieren. Folgendes Listenelement ist ein Beispiel für die Verlinkung auf den [Top-level await](https://v8.dev/features/top-level-await) -externen Artikel im "Siehe Auch"-Abschnitt, zusammen mit der Quelle und den Jahresinformationen:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links auf Bücher können Sie auch die Namen der Autoren angeben. Einige Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repos anzugeben, auf die Sie vielleicht verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu verwandten Leitfaden- und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich dazu, die Scanfähigkeit der Punkte in der Liste zu verbessern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie der alphabetischen oder der einfachen bis fortgeschrittenen Reihenfolge, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Fachgebiet hinzufügen müssen, werden Sie dies normalerweise tun, indem Sie eine Landing Page erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Landing Page sollte mit ein oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können die Einfügung von Seiten in die Liste mithilfe einiger von uns erstellter Makros automatisieren.

Zum Beispiel sehen Sie die [JavaScript](/de/docs/Web/JavaScript) Anleitung, die wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltverzeichnis
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, was die Seite verlangsamt und Suche und Seitenavigation weniger effektiv macht.

### Slugs

Der Seitentitel, der am oberen Rand der Seite angezeigt wird, kann unterschiedlich von dem Seitensslug, der Teil der URL der Seite nach `<locale>/docs/` sein. Beachten Sie die folgenden Richtlinien beim Definieren eines Slugs:

- Slugs sollten kurz gehalten werden. Beim Erstellen einer neuen Hierarchie Ebene sollte die Komponente dieser neuen Ebene im Slug nur aus ein oder zwei Wörtern bestehen.
- Slugs sollten ein Unterstrich für eine mehrgliedrige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Halten Sie Satzschreibung in Slugs ebenso für jede Komponente, so wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann unterschiedlich von dem Seitenslug sein, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großbuchstaben Stil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften satzweise Groß- und Kleinschreibung (nur das erste Wort und Eigennamen großschreiben) und nicht Schlagzeilenstil verwenden:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovern"
  - **Falsch**: "Eine Neue Methode zur Erstellung von JavaScript Rollovern"

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten allmählich daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Das Erstellen eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, wie Sie Informationen ordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann auf kompliziertere und fortgeschrittenere Konzepte ein. Behandeln Sie konzeptionelle Informationen zuerst und gehen Sie dann zu aktionsorientierten Themen über.

  Berücksichtigen Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Von oben nach unten**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) angegeben, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebene Überschriften für allgemeinere einführende Titel und verwenden Sie spezifischere Titel, wenn Sie zu niedrigeren Ebenen Überschriften fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene Überschrift gruppiert sind. Die Benennung von Titeln für verschiedene Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter im Text und im Inhaltsverzeichnis zu überfliegen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Übersicht".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln - eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck, versuchen Sie, soweit wie möglich, die Konjunktion "und" in einem Titel zu vermeiden.
  - **Verwenden Sie parallele Konstruktion**: Verwenden Sie ähnliche Sprache für Titel auf demselben Überschriftslevel. Zum Beispiel, wenn ein `###` Überschriftstitel Gerunds verwendet, das sind Wörter, die auf "-ing" enden, wie "Installieren", dann versuchen Sie, alle Titel auf diesem Überschriftsebenen- Level mit Gerunds zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf diesem Überschriftsebenen- Level mit einem Imperativverb.
  - **Vermeiden Sie das häufige Vorkommen eines Begriffs im unteren Level Überschrift**: Wiederholen Sie den Text im Titel einer höheren Ebene nicht in niedrigeren Level Titeln. Zum BeispIel, in einem Abschnitt mit dem Titel "Kommas", den Titel eines Unterabschnitts als "Nach einleitenden Klauseln" nennen, statt "Kommas nach einleitenden Klauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit "a", "an" oder "the" zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Nach einem Titel fügen Sie einige einleitende Texte hinzu, um zu erklären, was in dem Abschnitt behandelt wird.

## Siehe auch

- [Leitlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Leitlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Leitlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Leitlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Leitlinien zum Schreiben von shell-prompt Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Weitere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler im englischen Sprachgebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [FAQ zur englischen Grammatik](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Anwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Website zur Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
