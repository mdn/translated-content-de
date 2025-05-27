---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen Konsistenz in Sprache und Stil auf der Website sicherstellen. Wir legen jedoch mehr Wert auf den Inhalt als auf das Format, sodass Sie sich nicht verpflichtet fühlen sollten, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender später Ihre Arbeit bearbeitet, um sie an diesen Leitfaden anzupassen. Die Gutachter könnten Sie auch auf diesen Stil-Leitfaden verweisen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentation. Andere Sprachen können (und sind willkommen) ihre eigenen Stil-Leitfäden zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams-Seite veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten herangezogen werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie z. B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu erstellen, die alle Informationen enthalten, die Leser benötigen, um das aktuelle Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Fügen Sie relevante Beispiele ein](#fügen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit Blick auf SEO](#schreiben_sie_mit_blick_auf_seo)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für den Inhalt, den Sie schreiben, im Hinterkopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen aktive Sprache und eindeutige Pronomen. Schreiben Sie kurze Sätze und beschränken Sie sich auf eine Idee pro Satz. Definieren Sie neue Begriffe für das Zielpublikum, bevor Sie sie verwenden.
- **Konzise**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel man sagen sollte. Wenn Sie zu viele Details bereitstellen, wird die Seite langwierig zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortschatz konsistent auf der Seite und über mehrere Seiten hinweg verwenden.

### Fügen Sie relevante Beispiele ein

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbare und praktische Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird und um etwaige Randfälle zu klären, die möglicherweise existieren. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Problemlösungen zu zeigen, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz (oder die Absätze) vor der ersten Überschrift die Informationen, die die Seite abdecken wird, angemessen zusammenfasst und vielleicht, was die Leser nach Durchgehen des Inhalts erreichen werden. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die zu behandelnden Themen sowie das erwartete Vorwissen, falls vorhanden, informieren. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den relevanten Informationen, und auf Situationen hinweisen, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen weg, wie zum Beispiel, was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang. Es sind zu viele Details enthalten, und der Text geht zu tief darauf ein, andere Methoden und Eigenschaften zu beschreiben. Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > Wenn die Methode `CanvasRenderingContext2D.strokeText()` der Canvas 2D API aufgerufen wird, umrandet sie die Zeichen der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > Im Fachjargon der Computergrafik bedeutet "Umrandung" von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift der Umgebung gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft der Umgebung angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` der Umgebung bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge bei `x - (stringWidth / 2)` gezeichnet und die angegebene X-Koordinate liegt in der Mitte der Zeichenfolge.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixeln festlegen können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder auf andere Weise angepasst), um in den beschriebenen Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge als mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die Methode `strokeText()`.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angegeben ist.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontextes gezeichnet und wird entsprechend den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text)-Abschnitt auf der Seite Zeichnen von Grafiken sowie unseren Hauptartikel zum Thema, [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum. Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu gestalten. Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Verwenden Sie anstelle der Begriffe **Master** und **Slave** lieber **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Coherence** ersetzt werden.
- Verwenden Sie anstelle von **Dummy** den Begriff **Placeholder**.
- Sie sollten die Begriffe **Crazy** und **Insane** nicht in der Dokumentation verwenden; falls dies der Fall ist, verwenden Sie stattdessen **Fantastic**.

Es ist am besten, geschlechtsneutrale Sprache zu verwenden, wo das Geschlecht im Zusammenhang irrelevant ist. Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; wenn es sich jedoch um eine Person eines beliebigen Geschlechts handelt, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Unkorrekt**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Nutzung seiner Webcam erlauben möchte."
- **Unkorrekt**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen auf folgende Weise:

- **Korrekt**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[Singular 'They'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine weitere Option ist es, die Benutzer in den Plural zu setzen, wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcams erlauben möchten."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Korrekt**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers zur Webcam-Nutzung anfordert, erscheint."
- **Korrekt**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel der Problemlösung ist wohl besser. Es ist nicht nur grammatikalisch korrekter, sondern reduziert auch einige der Komplexität im Umgang mit Geschlechtern in verschiedenen Sprachen, die unterschiedliche Geschlechtsregeln haben können. Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und richtungsbezogenen Worten wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen eine spezifische visuelle Anordnung voraus, die nicht auf alle Nutzer zutreffen kann. Sie können auch unklar oder irreführend sein, insbesondere für Benutzer, die auf Bildschirmleser angewiesen sind, oder für Leser übersetzter Inhalte, bei denen Richtungssprache mehrdeutig oder schwer zu übersetzen sein kann. In responsiven Layouts, bei denen sich die Position des Inhalts je nach Bildschirmgröße ändern kann, könnten solche richtungsbezogenen Bezugnahmen ungenau werden. Solche Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Beziehen Sie sich auf Abschnitte anhand ihrer Titel oder Überschriften und beziehen Sie sich auf Beispiele oder Codeausschnitte, indem Sie darauf hinweisen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Korrekt**: "Beziehen Sie sich auf den [Zugänglichkeitsabschnitt](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) weiter unten auf dieser Seite."
- **Unkorrekt**: "Beziehen Sie sich auf den Zugänglichkeitsabschnitt unten."

- **Korrekt**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Unkorrekt**: "Im folgenden Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Korrekt**: "Dieses Konzept wird im früheren Abschnitt mit dem Titel "Erstellen einer Medienabfrage" erklärt."
- **Unkorrekt**: "Dieses Konzept wird im oben stehenden Abschnitt erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel". Beschreibende Linktexte bieten bessere Kontexte für alle Leser und verbessern die Erfahrung von Benutzern mit unterstützender Technologie.

<!-- markdownlint-disable descriptive-link-text -->

- **Korrekt**: "Erfahren Sie mehr über [wie man Flex-Elemente anordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Unkorrekt**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Unkorrekt**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Durch die Beachtung dieser Richtlinien tragen Sie dazu bei, die MDN-Dokumentation zugänglich, klar und für jeden nutzbar zu machen, unabhängig davon, wie sie die Seite aufrufen.

### Schreiben Sie mit Blick auf SEO

Während das Hauptziel jedes Schreibens auf MDN Web Docs immer darin bestehen sollte, über offene Webtechnologien zu informieren und zu erklären, damit Entwickler schnell lernen, was sie wollen, oder die kleinen Details, die sie wissen müssen, um ihren Code zu perfektionieren – Es ist wichtig, dass sie das von uns geschriebene Material _finden_ können. Wir können dies erreichen, indem wir bei der Erstellung der Inhalte die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) berücksichtigen.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indexieren können, damit Leser leicht finden, was sie benötigen. Die SEO-Richtlinien beinhalten, dass jede Seite, an der Autoren und Redakteure arbeiten, angemessen gestaltet, geschrieben und markiert ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist nützlich, wenn Sie beim Schreiben und Überprüfen von Inhalten im Hinterkopf behalten, um sicherzustellen, dass die Seite und ihre Nachbarn korrekt von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten dasselbe Thema behandeln, auch wenn dem nicht so ist. Zum Beispiel, wenn ein Interface die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, indem einfach einige Wörter ausgetauscht und dasselbe Beispiel verwendet wird. Dies macht es Suchmaschinen schwer zu wissen, was was ist, und sie teilen den Page Rank, was dazu führt, dass beide schwerer zu finden sind, als sie es sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:

  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, bei denen es mehr Unterschiede geben könnte, als man denkt. Zum Beispiel beim Dokumentieren der Eigenschaften `width` und `height` schreiben Sie möglicherweise über die verschiedenen Verwendungsmöglichkeiten von horizontalem und vertikalem Raum und bieten eine Diskussion über die entsprechenden Konzepte an. Vielleicht können Sie die Verwendung von `width` im Hinblick darauf erwähnen, Platz für eine Seitenleiste zu schaffen, während Sie `height` verwenden, um horizontales Scrollen oder Fußzeilen zu behandeln. Informationen über Zugänglichkeitsfragen einzuschließen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen ähneln oft noch stärker dem Text des Hauptteils, weil die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften bereits verwenden, sodass keine echten Änderungen erforderlich sind, wenn sie wiederverwendet werden. Verwerfen Sie daher das Beispiel und schreiben Sie ein neues oder liefern Sie zumindest mehrere Beispiele, von denen einige zumindest unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Beschreibung, wie es funktioniert, in einem angemessenen Detailgrad angesichts der Komplexität des Themas und des Zielpublikums, sollte enthalten sein.

  Der einfachste Weg, zu vermeiden, zu ähnlich zu sein, besteht natürlich darin, jeden Artikel von Grund auf neu schreiben, wenn die Zeit dies zulässt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in SEO-Jargon "dünne Seiten" genannt), werden die Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip sollten sichergestellt werden, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, aber behandeln Sie diese Richtlinie gegebenenfalls als Mindestziel für die Seitenlänge.

  Diese grundlegenden Richtlinien können Ihnen dabei helfen, Seiten zu erstellen, die genug Inhalt haben, um ordnungsgemäß durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Stümpfe vermeiden**: Offensichtlich, wenn der Artikel ein Stumpf ist oder Inhalt fehlt, fügen Sie ihn hinzu. Wir versuchen, echte "Stumpf"-Seiten auf MDN Web Docs zu vermeiden, obwohl es sie gibt, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite sicherzustellen, dass sie ordnungsgemäß für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Überprüfen Sie, dass alle Abschnitte vorhanden und mit entsprechenden Inhalten gefüllt sind.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen erwähnt werden – dies ist eine besonders häufige Stelle, an der Inhalt fehlt.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, schnell etwas zu erklären, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen sollte?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele für alle Parameter vorhanden sein oder zumindest für die Parameter (oder Eigenschaften, oder Attribute), die Benutzer im Anfänger- bis Fortgeschrittenenbereich wahrscheinlich verwenden, sowie fortgeschrittene, die eine zusätzliche Erklärung benötigen. Jedes Beispiel sollte mit einer Übersicht eingeleitet werden, was das Beispiel tun wird, welche zusätzlichen Kenntnisse erforderlich sein könnten, um es zu verstehen usw. Nach dem Beispiel (oder eingefügt zwischen Teilen des Beispiels) sollte Text erläutern, wie der Code funktioniert. Sie sollten nicht an den Details oder der Fehlerbehandlung in Beispielen sparen. Beachten Sie, dass Benutzer _Ihre_ Beispiele kopieren und einfügen werden, um sie in ihren eigenen Projekten zu verwenden, und ihr Code _wird_ auf Produktionswebsites verwendet werden! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Verwendungsszenarien erklären**: Wenn es besonders häufige Verwendungsszenarien für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode ein häufiges Entwicklungsproblem lösen kann, fügen Sie tatsächlich einen Abschnitt über dieses Verwendungsszenario hinzu, mit einem Beispiel und Erläuterungen, wie das Beispiel funktioniert.
  - **Bilderinformationen hinzufügen**: Fügen Sie ordnungsgemäßen [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text für alle Bilder und Diagramme hinzu. Dieser Text, sowie Beschriftungen zu Tabellen und anderen Figuren, zählen, weil Spinnen keine Bilder crawlen können, und der `alt`-Text gibt Informationen darüber, welcher Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht zum Feature gehörende Schlüsselwörter aufzunehmen in einem Versuch, das Suchmaschinen-Ranking zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird eher bestraft.
    > Ebenso, **fügen Sie keine** wiederholten, unhelpful Material oder Schlüsselwort-Blöcke innerhalb der Seite hinzu, in einem Versuch, die Seitengröße zu verbessern und das Suchranking. Dies tut mehr Schaden als Gut, sowohl für die Lesbarkeit des Inhalts als auch für unsere Suchergebnisse.

- **Konzentrieren Sie sich auf den Themeninhalt**: Es ist viel besser, Inhalte rund um das Thema der Seite als um ein bestimmtes Schlüsselwort zu schreiben. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema aufnehmen könnten; tatsächlich viele SEOs stellen eine Liste von 5 bis 100 verschiedenen Schlüsselwörtern (je nach Länge variierend zwischen kurzen, mittleren und langen Schlüsselwörtern) zusammen, um sie in ihren Artikel aufzunehmen. Dies diversifiziert Ihre Wortwahl, was zu weniger Wiederholungen führt.

## Schreibstil

Außer grammatikalisch korrekte Sätze auf Englisch zu schreiben, empfehlen wir, dass Sie diese Richtlinien befolgen, um den Inhalt auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Nummern und Ziffern](#nummern_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Satzes erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die Nutzern wahrscheinlich unbekannt sind. Im Zweifelsfall den Begriff erweitern. Noch besser, verlinken Sie ihn mit dem Artikel oder [Glossareintrag](/de/docs/Glossary), der die Technologie beschreibt.

  - **Korrekt**: "XUL (XML User Interface Language) ist Mozillas XML-basiertes Sprachformat..."
  - **Unkorrekt**: "XUL ist Mozillas XML-basiertes Sprachformat..."

- **Großschreibung und Punkte**: Verwenden Sie durchgehende Großbuchstaben und lassen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationsnamen wie "US" und "UN", weg.

  - **Korrekt**: XUL
  - **Unkorrekt**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können häufige lateinische Abkürzungen (etc., i.e., e.g.) in Klammern und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderer geeigneter Interpunktion.

  <!-- markdownlint-disable search-replace -->

  - **Korrekt**: Web-Browser (z. B. Firefox) können verwendet werden ...
  - **Unkorrekt**: Web-Browser z.B. Firefox können verwendet werden ...
  - **Unkorrekt**: Web-Browser, z.B. Firefox, können verwendet werden ...
  - **Unkorrekt**: Web-Browser, (eg: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  Im regulären Text (also Text außerhalb von Notizen oder Klammern) verwenden Sie die englischsprachige Entsprechung der Abkürzung.

  - **Korrekt**: ... Webbrowser und so weiter.
  - **Unkorrekt**: ... Webbrowser usw.

  - **Korrekt**: Webbrowser wie Firefox können verwendet werden ...
  - **Unkorrekt**: Webbrowser z.B., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischsprachigen Entsprechungen lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abkürzung | Latein           | Englisch                |
  | --------- | ---------------- | ----------------------- |
  | cf.       | _confer_         | compare                 |
  | e.g.      | _exempli gratia_ | for example             |
  | et al.    | _et alii_        | and others              |
  | etc.      | _et cetera_      | and so forth, and so on |
  | i.e.      | _id est_         | that is, in other words |
  | N.B.      | _nota bene_      | note well               |
  | P.S.      | _post scriptum_  | postscript              |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt sind oder deren Bedeutung nicht verstehen.
  >
  > Achten Sie auch darauf, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Achten Sie darauf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralbildung von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen fügt man ein _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Korrekt**: CD-ROMs
  - **Unkorrekt**: CD-ROM's

- **"Gegen", "vs." und "v."**: Bei Verwendung der Abkürzung wird "vs." "v." vorgezogen und kann in Überschriften verwendet werden. Ansonsten verwenden Sie im Text die ausgeschriebene Form "versus".

  - **Korrekt**: dies vs. das
  - **Unkorrekt**: dies v. das
  - **Korrekt**: dies versus das

### Großschreibung

Verwenden Sie Standardregeln zur Großschreibung im englischen Text und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (Alleinstehend oder als Modifikator) und "internet" kleingeschrieben zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung der vorherigen Version dieses Leitfadens, sodass Sie möglicherweise auf viele Fälle von "Web" und "Internet" auf MDN stoßen werden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastaturtasten sollten Satzweise Großschreibung verwenden, nicht durchgehende Großbuchstaben.
Zum Beispiel, "<kbd>Eingabe</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Markenzeichen, die Großbuchstaben enthalten, oder Wörter, die von einem Namen einer Person stammen (es sei denn, das Wort wird innerhalb des Codes verwendet und der Codesyntax erfordert Kleinbuchstaben).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Markenzeichen der Oracle Corporation, es sollte immer als markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert dazu, lässig zu sein, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z. B., "don't", "can't", "shouldn't"), wenn Sie es bevorzugen.

### Nummern und Ziffern

- **Kommas**: In laufendem Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Korrekt**: 4000; 54,000
  - **Unkorrekt**: 4,000; 54000

- **Daten**: Für Datumsangaben (nicht in Codesamples) verwenden Sie das Format "January 1, 1900".

  - **Korrekt**: February 24, 1906
  - **Unkorrekt**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Korrekt**: 1906/02/24
  - **Unkorrekt**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Korrekt**: 1920s
  - **Unkorrekt**: 1920's

- **Pluralbildung von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Korrekt**: 486s
  - **Unkorrekt**: 486's

### Pluralisierung

Verwenden Sie englischsprachige Pluralformen, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Korrekt**: syllabuses, octopuses
- **Unkorrekt**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. In den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Das liegt daran, dass wir uns für Konsistenz für eine Option entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets geraten, selbst in Inline-Snippets, könnten Leser die Erwartung haben, dass sie funktionieren (was sie nicht tun werden).

- **Korrekt**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Unkorrekt**: Bitte verwenden Sie keine geschwungenen Anführungszeichen.

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein Nebensatz, der normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einem einleitenden Satz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Korrekt**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
    - **Unkorrekt**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Korrekt**: "Wenn Sie nach Richtlinien suchen, lesen Sie unseren Schreibstil-Leitfaden."
    - **Unkorrekt**: "Wenn Sie nach Richtlinien suchen, lesen Sie unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Korrekt**: "Auf mobilen Plattformen erhalten Sie normalerweise eine numerische Tastatur zur Dateneingabe."
    - **Unkorrekt**: "Auf mobilen Plattformen erhalten Sie normalerweise eine numerische Tastatur zur Dateneingabe."

- **Vor Konjunktionen**: Das serielle Komma (auch als "Oxford-Komma" bekannt) ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.

  - **Korrekt**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Unkorrekt**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "and" oder "or" in einer Liste, die zwei Elemente enthält.

  - **Korrekt**: "Mein Hund ist süß und schlau."
  - **Unkorrekt**: "Mein Hund ist süß, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "and", "but" und "or", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder kompliziert mit der Konjunktion wird, überlegen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Korrekt**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Unkorrekt**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Korrekt**: "Mein Vater ist streng, aber liebevoll."
    - **Unkorrekt**: "Mein Vater ist streng, aber liebevoll."

- **Vor "that" und "which"**: Eine einschränkende Klausel ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um sich vom Rest des Satzes abzugrenzen. Eine einschränkende Klausel wird normalerweise durch "that" eingeführt und sollte **nicht** durch ein Komma vorangestellt werden.

  - **Korrekt**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Unkorrekt**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht-einschränkende Klausel bietet zusätzliche Informationen und ist nicht essentiell für die Bedeutung des Satzes. Eine nicht-einschränkende Klausel wird normalerweise durch "which" eingeführt und sollte durch ein Komma vorangestellt werden.

  - **Korrekt**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."
  - **Unkorrekt**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."

- **Vor "such as"**: Wenn "such as" Teil einer nicht einschränkenden Klausel ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "such as".

  - **Korrekt**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten, wie z. B. zum Zusammenfügen, Umkehren und Sortieren."
  - **Unkorrekt**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten, wie z. B. zum Zusammenfügen, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann Sie kein Komma mit "such as" verwenden. In diesem Fall ist die Klausel mit "such as" wesentlich für die Bedeutung des Satzes.

  - **Korrekt**: "Webanwendungen werden immer leistungsfähiger, indem sie Features wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Unkorrekt**: "Webanwendungen werden immer leistungsfähiger, indem sie Features, wie Audio- und Videomanipulation, und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur bindestrichgekoppelt werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe des Stammesworts.

- **Korrekt**: re-elect, co-op, email
- **Unkorrekt**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Schreibweise auf Englisch.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Varianten-Schreibung oder als hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendet aufgeführt. Zum Beispiel, wenn Sie [das Wort "behaviour"](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_ hinzugefügt zur amerikanischen Standardform), finden Sie den Satz "Hauptsächlich britisch" gefolgt von einem Link zur amerikanischen Standardform ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie keine Varianten-Schreibweisen.

<!-- cSpell:ignore localise behaviour colour -->

- **Korrekt**: localize, behavior, color
- **Unkorrekt**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository führen wir mehrere Wortlisten, die in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) gespeichert sind und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jede Liste enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstatt "Tag". Außerdem sollte das Element in spitzen Klammern "<>" gesetzt und mit Backticks (`` ` ``) formatiert werden. Zum Beispiel wird die Verwendung von \ltinput\gt innerhalb von Backticks es als `<input>` formatieren, wie erwartet.

  - **Korrekt**: das `<span>`-Element
  - **Unkorrekt**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zu seiner Referenzseite hinzufügt.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente", wann immer möglich, um Konsistenz zu wahren.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Aktionen in der Benutzeroberfläche im Imperativ. Identifizieren Sie das Benutzeroberflächenelement durch sein Label und Typ.

  - **Korrekt**: "Klicken Sie auf den Bearbeiten-Button."
  - **Unkorrekt**: "Klicken Sie Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts der informellen Atmosphäre unseres Inhalts. Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Notizen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinken)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsniveaus](#überschriftsniveaus)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste stellt einige empfohlene Praktiken beim Schreiben eines Codebeispiels für die MDN Web Docs vor:

- Jedes Stück Beispielcode sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das durch das Codebeispiel demonstriert wird. Zum Beispiel, "Verwendung des Offsetdrucks" und "Zurücksetzen des Stils in der vorhergehenden Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Einzelheiten des Beispiels erklärt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: "Im folgenden Beispiel sind zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Ergebniserklärung**: Eine Erklärung nach dem Beispielcode, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Generell sollte das Codebeispiel nicht nur die Syntax des Features und seine Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature nutzen möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile aufzuteilen, sodass sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples), ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels mit dem gleichen Typ (HTML, CSS und JavaScript) zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente aufzuteilen, jedes optional mit eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation von Code unglaublich mächtig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für die MDN Web Docs stylen oder formatieren können, lesen Sie unsere [Richtlinien zur Formatierung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinken)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN anhand ihres Titels folgen Sie der Satzcappierung im Linktext (entsprechen Sie dem Seitentitel oder Abschnittstitel). Verwenden Sie Satzcappierung im Linktext, auch wenn es anders ist als der verlinkte Seitentitel oder Abschnittstitel (es könnte sein, dass die Fallkonvention, die im Seitentitel oder Abschnittstitel verwendet wird, falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN anhand ihres Titels zu verweisen, verwenden Sie den folgenden Stil:

- **Korrekt**: "Lesen Sie den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Unkorrekt**: "Lesen Sie den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Folgen Sie einem konsistenten Stil beim Verlinken innerhalb einer Seite:

- **Korrekt**: "Für weitere Informationen lesen Sie den Abschnitt [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Memory management_ Leitfaden."

Wenn sich der verlinkte Abschnitt auf derselben Seite befindet, können Sie auf die Position des Abschnitts mit beschreibenden Phrasen hinweisen.

- **Korrekt**: "Dieses Konzept wird ausführlicher im [Zugänglichkeitsbereich](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) dieses Dokuments beschrieben."
- **Unkorrekt**: "Dieses Konzept wird ausführlicher im [Zugänglichkeitsbereich](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) unten beschrieben."

Auf MDN gibt es noch eine andere Möglichkeit, um auf eine Referenzseite zu verweisen, indem Sie ein Makro verwenden. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Um beispielsweise auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind in bestimmten Situationen auf MDN Web Docs erlaubt. Nutzen Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf den MDN Web Docs hinzuzufügen. Pull-Anfragen, die externe Links hinzufügen, werden abgelehnt, wenn sie nicht diesen Richtlinien entsprechen.

Wenn Sie erwägen, einen externen Link zu den MDN-[Lernen der Webentwicklung](/de/docs/Learn_web_development)-Inhalten hinzuzufügen, lesen Sie bitte auch die [Schreibrichtlinien für die Webentwicklung > Partner-Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen müssen Sie, wenn Sie erwägen, einen externen Link hinzuzufügen, sicherstellen, dass das Risiko minimal ist in Bezug auf:

- Gebrochene oder veraltete Links
- Anschein von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Kurzlinks, die das Link-Ziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie in Betracht ziehen, Inhalte innerhalb der MDN Web Docs zu verweisen. Interne Links sind einfacher zu pflegen und machen den gesamten MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, langlebig und weithin vertrauenswürdig sind. Sie sollten es vorziehen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig und unverzichtbar sind (z. B., ein IETF RFC)
  - Notwendig für die Attribution, Zitierung oder Anerkennung sind (z. B., als Teil einer Creative Commons-Zitierung)
  - Wahrscheinlicher für das Thema gewartet werden, als solche Inhalte auf den MDN Web Docs selbst zu inkorporieren (z. B., die Versionshinweise eines Anbieters)
  - Open-Source oder community-getrieben sind, wie die MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links haben mangelnde Relevanz, Wartungsfreundlichkeit, Zugänglichkeit oder stellen sonstige Barrieren für Leser dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z. B., die Homepage eines Anbieters, anstatt der zugehörigen Dokumentation)
  - Vergänglich oder ungewartet sind (z. B., eine einmalige Ankündigung)
  - Selbsterklärend oder selbstfördernd sind (z. B., eigene Arbeiten des Autors außerhalb der MDN Web Docs)
  - Bezahlt sind (z. B., ein teurer Kurs, der außerhalb der Reichweite von Hobbyisten, Studenten oder Lesern in einkommensschwächeren Ländern liegt)
  - Unzugänglich sind (z. B., ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogeintrag, ein Konferenzvortrag oder ein GitHub-Repository von Wert sein kann, könnte das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie zu Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Verbindung zu dem Ziel eines Links haben, müssen Sie diese Verbindung in Ihrer Pull-Anfrage offenlegen. Das Nichtoffenlegen kann Ihr weiteres Engagement mit den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Herausgeber einer Spezifikation sind und zur Dokumentation dieser Spezifikation beitragen, dann wird das Verlinken zu dieser Spezifikation erwartet und akzeptiert. aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig für das Verkürzen langer Links in kleinere, leichter zu merkende URLs (auch als "Kurzlinks" bekannt) sein. Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich kann mit bestimmten Shortenern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die zu böswilligen Zwecken genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzererstellbare) URL-Shortener erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine Kurz-URL ist, die von einem zufälligen Benutzer erstellt wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com`-URL.

<!-- markdownlint-disable search-replace -->

Andererseits werden First-Party-URL-Shortenern, die von den Organisationen betrieben werden, die auch die Ziel-URLs aufrechterhalten, ermutigt. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, das ebenfalls eine Mozilla-eigene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsniveaus

Wenn ein neuer Absatz ein neuer Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriftsstufen in absteigender Reihenfolge, ohne Stufen zu überspringen: `##`, dann `###` und dann `####`; diese werden in die HTML-Überschriften-Tags `<h2>`, `<h3>` und `<h4>` übersetzt. `##` ist die höchste Stufe, die erlaubt ist, weil `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Ebenen von Headern hinzuzufügen. Wenn Sie das Bedürfnis verspüren, einen vierten Header-Level hinzuzufügen, überlegen Sie, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufzuteilen. Alternativ können Sie in Erwägung ziehen, die Informationen als Aufzählungspunkte zu präsentieren, um das Verwenden von Level-Vier-Headern zu vermeiden.

Beachten Sie die folgenden Anweisungen beim Erstellen von Überschriften für Unterabschnitte:

- **Keine einzelner Unterabschnitte erstellen.** Nicht ein Thema in ein einziges Unterthema unterteilen.
  Es sind entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften verwenden.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z. B., "Verwenden des `FooBar`-Interfaces").
- **Keine "stoßenden Köpfe" erstellen.** Dies sind Überschriften, denen sofort eine Unterüberschrift ohne Textinhalt dazwischen folgt.
  Dies sieht nicht gut aus und lässt Leser ohne erklärenden Text zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Lizenz der Medien deren Verwendung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz haben, wie zum Beispiel [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz vereinbar ist — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Für Bilder, komprimieren Sie sie mit <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein. Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat. Je nachdem, welche Art von Liste Sie erstellen, sollten Sie jedoch Ihre Schreibweise entsprechend anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen sollten Sie einen Einführungssatz enthalten, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Informationsstücke zu gruppieren. Jedes Element in der Liste sollte einem ähnlichen Satzaufbau folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten standardmäßige Zeichensetzung verwenden — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes ein Punkt erscheinen, einschließlich des letzten Satzes des Elements, wie es in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einfügen:
  >
  > - Eine Bedingung mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung mit einer kurzen Erklärung.
  > - Noch eine Bedingung mit weiterer Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur sich von Punkt zu Punkt wiederholt. In diesem Beispiel benennt jeder Punkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Listenelement endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Legt die Hintergrundfarbe fest.
  > - EigenschaftB: Fügt Textschatten hinzu.

  Wenn ein oder mehrere Listenelemente aus vollständigen Sätzen bestehen, verwenden Sie einen Punkt hinter jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, soweit es möglich ist, die gleiche Struktur für alle Elemente in einer Liste zu befolgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich zur Aufzählung von Schritten in einer Reihe von Anweisungen verwendet. Da Anweisungen kompliziert sein können, ist Klarheit Priorität, besonders wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungslisten, folgen Sie der standardmäßigen Verwendung der Zeichensetzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Nutzer Kontext zu bieten, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekt zu punkten.
  > 3. Sobald Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung des erwarteten Ergebnisses nach deren Abschluss.

  Das folgende ist ein Beispiel für eine abschließende Erklärung für die vorherige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anleitungsschritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anleitungen oder zur Durchführung eines geordneten Verfahrens verwendet werden, stellen Sie sicher, dass jedes Element fokussiert bleibt: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die Seite `@layer`.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im [format einer Aufzählungsliste](#listen) mit jedem Element in der Liste als Phrase. Im [Lernen der Webentwicklung](/de/docs/Learn_web_development)-Bereich auf MDN hingegen folgt der Siehe auch Abschnitt dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um Konsistenz auf den MDN Web Docs aufrechtzuerhalten, beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts.

#### Linktext

- Der Linktext sollte der gleiche wie der Titel der Seite oder des Abschnitts, zu dem verlinkt wird. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Seite mit dem Seitentitel "ARIA states and properties":
  - **Korrekt**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzcappierung im Linktext, auch wenn es sich von dem Titel der verlinkten Seite oder des Abschnitts unterscheidet. Es könnte sein, dass die Fallkonvention im Titel der Seite oder des Abschnitts inkorrekt ist. Zum Beispiel wäre der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)-Seite in korrekter Satzcappierung:
  - **Korrekt**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Für externe Links verwenden Sie ebenfalls Satzcappierung, auch wenn die Fallkonvention auf der Zielseite unterschiedlich ist. Dies ist, um Konsistenz über die MDN Web Docs zu gewährleisten. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie es in der [Verlinkung auf Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) Abschnitt auf der _Häufig verwendeten Makros_ erklärt wird. Die Verwendung des Makros wird dem Schlüsselwort im Linktext eine Codeformatierung hinzufügen, wie im nächsten Beispiel.
- Keine Artikel ("A", "An", "The") sind am Anfang des Linklistenelements erforderlich. Keine Zeichensetzung ist am Ende des Listenelements erforderlich, da es ausschließlich ein Begriff oder eine Phrase sein wird.
  - **Korrekt**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Unkorrekt**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) keyword.
  - **Korrekt**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Unkorrekt**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie Codeformatierung mit Backticks (`` ` ``) bei Schlüsselwörtern und Literalen im Linktext hinzu, auch wenn die Formatierung nicht in den Seiten- und Abschnittstiteln verwendet wird. Zum Beispiel für den Seitentitel "Array() constructor" wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. Im Fall einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne endende Zeichensetzung. Halten Sie sämtlichen verlinkten Text am Anfang, um das Durchsuchen der Liste der Links zu erleichtern.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren für das Styling von Checkboxes
- Verwenden Sie kein Konnjunktiv "und" vor dem letzten Element in der Serie.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links, wo immer möglich und angemessen, versuchen Sie die Ursprungswebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung anzugeben (in Klammern). Das Bereitstellen dieser Informationen im Vorfeld gibt den Lesern eine klare Vorstellung von dem Ziel, das sie durch Klick auf den Link erreichen werden. Das Veröffentlichungs- oder letzte Aktualisierungsdatum leitet die Leser auch an, die Relevanz des verlinkten Artikels zu beurteilen, und hilft MDN-Maintainern, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie zum Beispiel einen Artikel auf Wikipedia verlinken, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenpunkt ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren angeben. Ein paar Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, Autorennamen zu Blogposts oder GitHub-Repositories anzugeben, auf die Sie möglicherweise verweisen.

#### Reihenfolge der Links

- Listet die Links zu den MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den zugehörigen Leitfaden- und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge soll grundsätzlich die Durchsuchbarkeit der Elemente in der Liste erleichtern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst auf und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie einer alphabetischen oder einfache-zu-fortgeschritten Ordnung, was auch immer im Kontext mehr Sinn ergibt.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder einen Themenbereich hinzufügen müssen, werden Sie dies typischerweise durch das Erstellen einer Einstiegsseite tun, und dann Unterseiten zu jedem der einzelnen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem Abschnitt oder zwei beginnen, der das Thema oder die Technologie beschreibt, und dann eine Liste der Unterseiten mit Beschreibungen zu jeder Seite bereitstellen.
Sie können die Einfügung von Seiten in die Liste mit einigen von uns erstellten Makros automatisieren.

Zum Beispiel betrachten Sie den [JavaScript Leitfaden](/de/docs/Web/JavaScript), der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Inhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an die Spitze der Hierarchie zu setzen, was die Site verlangsamt und das Suchen und Navigieren auf der Website weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom Seiten-"Slug" unterscheiden, der der Teil der URL der Seite ist, der auf `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien beim Definieren eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn eine neue Hierarchieebene erstellt wird, sollte die neue Komponente im Slug nur ein Wort oder zwei enthalten.
- Slugs sollten einen Unterstrich für eine mehrteilige Komponente verwenden, wie z. B. `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch im Slug der Satzcappierung für jede Komponente, wie z. B. `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und strukturieren auch die Seitenhierarchie in der Brotkrumenliste oben auf der Seite. Ein Seitentitel kann sich vom Seiten-"Slug" unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Verfassen von Titeln:

- **Großschreibungsstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzqpitalisierung (nur das erste Wort und Eigennamen groß) anstelle von Schlagzeilen-Kapitalisierung verwenden:

  - **Korrekt**: "Eine neue Methode zur Erstellung von JavaScript-Zurückblendungen"
  - **Unkorrekt**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel etabliert wurde. Fühlen Sie sich frei, sie zu aktualisieren, wenn nötig. Wir werden sie allmählich durchgehen.

- **Allgemeine Richtlinien**: Bestimmen, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte im Schreiben. Das Erstellen eines Inhaltsverzeichnises kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschrittenen Konzepten über. Behandeln Sie konzeptionelle Informationen zuerst und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Erstellen von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Von oben nach unten gehen**: Wie im Abschnitt [Überschriftsebenen](#überschriftsniveaus) erklärt, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenen-Überschriften für breitere einleitende Titel, und verwenden Sie spezifischere Titel, wenn Sie zu niedriger ebeneren Überschriften übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene gruppiert sind. Titel für verschiedene Abschnitte können Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind im Text leichter zu durchscannen und im Inhaltsverzeichnis.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen, die im Abschnitt behandelt werden, zu übermitteln. Zum Beispiel verwenden Sie für einen Abschnittsüberblick über HTML-Elemente den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein einzelnes Ziel zu übermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck versuchen Sie, wenn möglich, das Verbinden von "und" in einem Titel zu vermeiden.
  - **Parallelkonstruktion verwenden**: Verwenden Sie ähnliche Sprache für Titel auf der gleichen Überschriftsebene. Zum Beispiel, wenn ein `###` Überschriftenlevetitel Gerundien verwendet, das heißt, Wörter endend auf "-ing", wie "Installieren", dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem imperativen Verb, wie "Verwenden", "Konfigurieren", beginnt, dann schreiben Sie alle Titel auf dieser Überschriftsebene, die mit einem imperativen Verb beginnen.
  - **Vermeiden Sie allgemeine Begriffe in niedrigerer Überschriften-Ebene**: Wiederholen Sie den Text im Titel einer höheren Überschrift nicht in niedrigereren Titeln. Zum Beispiel benennen Sie in einem Abschnitt mit dem Titel "Kommas" den Unterabschnittstitel nicht mit "Kommas nach einleitenden Klauseln", sondern verwenden Sie "Nach einleitenden Klauseln".
  - **Nicht mit Artikel beginnen**: Vermeiden Sie den Titelbeginn mit Artikeln "a", "an" oder "the".
  - **Einleitung hinzufügen**: Nach einem Titel fügen Sie etwas einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für Shell-Prompt-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Weitere Stil-Leitfäden

Falls Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen nützlich für Sie sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, auf Beweisen basierende Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
