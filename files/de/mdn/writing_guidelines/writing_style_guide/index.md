---
title: Schreibstil-Leitfaden
short-title: Style guide
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, Sprach- und Stilkonstanz auf der gesamten Website sicherzustellen. Das bedeutet jedoch, dass wir mehr Interesse an den Inhalten haben als an deren Formatierung. Sie müssen also den gesamten Schreibstil-Leitfaden nicht unbedingt kennen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Sie beim Einreichen einer Inhalts-Pull-Anfrage auch auf diesen Stil-Leitfaden hinweisen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für die englischsprachige Dokumentation. Andere Sprachen können eigene Stilrichtlinien haben (und sind ermutigt, solche zu erstellen). Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Trotzdem sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nachdem die allgemeinen Schreibrichtlinien aufgelistet sind, beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und anschließend, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dieses Ziel zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei K's des Schreibens](#berücksichtigen_sie_die_drei_k's_des_schreibens)
- [Fügen Sie relevante Beispiele hinzu](#fügen_sie_relevante_beispiele_hinzu)
- [Geben Sie eine beschreibende Einführung](#geben_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie unter Berücksichtigung von SEO](#schreiben_sie_unter_berücksichtigung_von_seo)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für den Inhalt, den Sie schreiben, im Hinterkopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so sehr ins Detail über grundlegende Netzwerkkonzepte gehen wie eine typische Seite über Netzwerk. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei K's des Schreibens

Die drei K's des guten Schreibens sind, klar, knapp und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreibstil klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Modus und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, und behalten Sie das Zielpublikum im Auge.
- **Knapp**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel gesagt werden soll. Wenn Sie zu viele Details bereitstellen, wird die Seite schwer lesbar und selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortlaut durchweg auf der Seite und auf mehreren Seiten verwenden.

### Fügen Sie relevante Beispiele hinzu

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird, und um etwaige Randfälle zu erläutern, die existieren können.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme, die auftreten können, zu demonstrieren.

### Geben Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz (die einleitenden Absätze) vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, angemessen zusammenfasst und vielleicht erwähnt, was die Leser erreichen können, nachdem sie den Inhalt durchgearbeitet haben. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite relevant für seine Anliegen und gewünschten Lernergebnisse ist.

In einem Leitfaden oder Tutorial sollten die einführenden Absätze den Leser über die behandelten Themen sowie das erforderliche Vorwissen, das der Leser gegebenenfalls haben sollte, informieren. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den verwandten Informationen, und es sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B. was genau mit "Textumriss" gemeint ist, wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Diese Einführung wurde aktualisiert, ist jetzt jedoch viel zu lang. Zu viele Details werden einbezogen und der Text beschreibt zu tiefgehend andere Methoden und Eigenschaften. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wird die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API aufgerufen, umreißt sie die Zeichen der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten, mit der aktuellen Stiftfarbe.
  > Im Bereich der Computergrafik bedeutet "umreißen" von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Texts hinsichtlich der angegebenen Koordinaten wird durch die `textAlign`-, `textBaseline`- und `direction`-Eigenschaften des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge in Bezug auf die angegebene X-Koordinate; wenn der Wert `"center"` ist, dann wird die Zeichenfolge an `x - (stringWidth / 2)` gezeichnet und platziert die angegebene X-Koordinate in der Mitte der Zeichenfolge.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge ab dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter bereitstellen, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixeln angeben können.
  > Wenn Sie diesen Parameter bereitstellen, wird der Text beim Zeichnen horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge auszufüllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer passenden Einführung**: Hier sehen wir eine wesentlich bessere Übersicht für die `strokeText()`-Methode.

  > Die Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) umreißt (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angezeigt wird.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Zeichnen von Grafiken" sowie in unserem Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht benötigen; falls doch, ziehen Sie in Betracht, **fantastic** stattdessen zu verwenden.

Es ist am besten, genderneutrale Sprache in jedem Schreiben zu verwenden, bei dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist "er"/"seiner" in Ordnung; wenn es sich jedoch um eine Person beliebigen Geschlechts handelt, sind "er"/"seiner" nicht geeignet.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie genderneutrale Pronomen wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> Die MDN Web Docs erlauben die Verwendung der dritten Person Plural, die allgemein als "[Singular 'they'](https://en.wikipedia.org/wiki/Singular_they)" bekannt ist.
> Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer zu pluralisieren, wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu beseitigen:

- **Korrekt**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert, erscheint."
- **Korrekt**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis fragt, die Webcam zu verwenden, erscheint."

Dieses letzte Beispiel zur Lösung des Problems ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten, die mit der Verwendung von Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise sehr unterschiedliche Geschlechterregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Schreiben Sie unter Berücksichtigung von SEO

Während das Hauptziel jedes Eintrags auf MDN Web Docs immer sein sollte, über Open-Web-Technologien zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Dies erreichen wir, indem wir die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Auge behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, um sicherzustellen, dass Leser leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen, sicherzustellen, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und gekennzeichnet ist, um Suchmaschinen die erforderlichen Kontexte und Hinweise zu geben, damit die Artikel korrekt indexiert werden können.

Die folgende Checkliste ist gut, um sie beim Schreiben und Überprüfen von Inhalten im Auge zu behalten, um sicherzustellen, dass die Seite und ihre Nachbarn korrekt von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten dasselbe Thema behandeln, selbst wenn dies nicht der Fall ist. Stellen Sie sicher, dass jeder Seite ihre eigenen Inhalte hat. Hier sind einige Vorschläge, die Ihnen dabei helfen:

  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Anwendungsfälle, in denen es mehr Unterschiede gibt, als man denken könnte. Zum Beispiel können Sie bei der Dokumentation von `width`- und `height`-Eigenschaften darüber schreiben, wie horizontale und vertikale Räume unterschiedlich genutzt werden, und eine Diskussion über die entsprechenden Konzepte führen. Sie können die Verwendung von `width` im Sinne der Schaffung von Platz für eine Seitenleiste und die Verwendung von `height` zur Behandlung des vertikalen Scrollens oder von Footer erwähnen. Informationen über Zugänglichkeitsprobleme sind ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher in der Wiederverwendung keine wirklichen Änderungen erfordern. Verwerfen Sie das Beispiel und schreiben Sie ein neues oder stellen Sie mindestens mehrere Beispiele zur Verfügung, wobei wenigstens einige davon unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht über das, was das Beispiel tut, als auch eine Erläuterung, wie es funktioniert, sollten gegeben werden, auf einem angemessenen Detaillierungsgrad, basierend auf der Komplexität des Themas und dem Zielpublikum.

  Der einfachste Weg, um zu vermeiden, dass man zu ähnlich ist, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (sogenannte "dünne Seiten" im SEO-Jargon), werden Suchmaschinen solche Seiten nicht genau (oder gar nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten Sie sicherstellen, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Vergrößern Sie eine Seite nicht künstlich, aber betrachten Sie dies als Mindestlänge, wenn möglich.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um korrekt durchsuchbar zu sein, ohne sie mit unnötigem Text zu füllen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, offene "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl es solche gibt, aber es gibt viele Seiten, denen große Teile ihrer Inhalte fehlen.
  - **Struktur der Seite überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) korrekt strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Alle Konzepte vollständig ausarbeiten**: Es ist einfach, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer aus dem Anfänger- bis Mittelstufenbereich wahrscheinlich verwenden, sowie diejenigen für Fortgeschrittene, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick vorhergehen, was das Beispiel tun wird, welches zusätzliche Wissen benötigt werden könnte, um es zu verstehen, usw. Nach dem Beispiel (oder eingestreut zwischen Teile des Beispiels) sollten Erklärungen zur Funktionsweise der Codes gegeben werden. Ignorieren Sie nicht die Details oder die Behandlung von Fehlern in den Beispielen. Beachten Sie, dass Benutzer _Ihre_ Beispiele kopieren und in ihren eigenen Projekten verwenden _werden_, und Ihr Code auf Produktionsseiten _verwendet_ werden wird! Weitere nützliche Informationen finden Sie in unseren [Leitlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).
  - **Erklärungen zu Anwendungsfällen bieten**: Wenn es besonders häufige Anwendungsfälle für das dokumentierte Feature gibt, erwähnen Sie diese! Statt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode zur Lösung eines häufigen Entwicklungsproblems verwendet werden kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie einen geeigneten [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text auf allen Bildern und Diagrammen hinzu. Dieser Text sowie Bildunterschriften bei Tabellen und anderen Grafiken zählen, da Crawler Bilder nicht durchkriechen können, und daher `alt`-Text Suchmaschinen-Crawler darüber informiert, was die eingebetteten Medien enthalten.

    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem Feature in Zusammenhang stehen, einzubeziehen, um die Suchmaschinen-Rankings zu beeinflussen; dieses Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso **nicht** hinzufügen sich wiederholendes, nicht hilfreiches Material oder Blöcke von Schlüsselwörtern innerhalb der eigentlichen Seite, um die Größe der Seite zu verbessern und ihre Position in Suchergebnissen zu verbessern. Dies schädigt sowohl die Lesbarkeit als auch die Suchergebnisse.

- **Fokussierung auf Themeninhalte**: Es ist weit besser, Inhalte um das Thema der Seite herum zu schreiben als ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass viele Schlüsselwörter für ein bestimmtes Thema eingebaut werden könnten; tatsächlich erstellen viele SEO-Experten eine Liste von 5-100 verschiedenen Schlüsselwörtern (unterschiedlicher Länge, von Kurz- bis Langschwanz-Schlüsselwörtern), um sie innerhalb ihres Artikels einzufügen, je nach Länge. Das führt zu einer abwechslungsreicheren Wortwahl und zu weniger Wiederholungen.

## Schreibstil

Abgesehen davon, dass die Sätze in korrektem Englisch geschrieben werden, empfehlen wir Ihnen, diesen Richtlinien zu folgen, um die Konsistenz der Inhalte auf MDN Web Docs sicherzustellen.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus den Anfangsbuchstaben jeder Phrase eines Ausdrucks besteht. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die wahrscheinlich den Benutzern nicht vertraut sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser, verlinken Sie ihn mit dem Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Korrekt**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und löschen Sie die Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Korrekt**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammernden Ausdrücken und Anmerkungen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen passenden Interpunktionszeichen.

  - **Korrekt**: Webbrowser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B: Firefox) können verwendet werden ...

  In regulären Texten (d.h. Texte außerhalb von Anmerkungen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Korrekt**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Korrekt**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  | Abkürzung | Latein           | Englisch                      |
  | --------- | ---------------- | ----------------------------- |
  | cf.       | _confer_         | vergleichen                   |
  | e.g.      | _exempli gratia_ | zum Beispiel                  |
  | et al.    | _et alii_        | und andere                    |
  | etc.      | _et cetera_      | und so weiter                 |
  | i.e.      | _id est_         | das heißt, mit anderen Worten |
  | N.B.      | _nota bene_      | gut zu beachten               |
  | P.S.      | _post scriptum_  | Nachscriptum                  |

  > [!NOTE]
  > Überlegen Sie immer, ob es tatsächlich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwechseln oder nicht verstehen.
  >
  > Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Beispielsweise ist "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural der Abkürzungen und Akronyme**: Fügen Sie _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Korrekt**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text die ausgeschriebene Form "versus" verwenden.

  - **Korrekt**: dies vs. das
  - **Falsch**: dies v. das
  - **Korrekt**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer vorherigen Version dieses Leitfadens, sodass Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, wenn Sie andere Änderungen vornehmen, aber einen Artikel nur zu ändern, um die Großschreibung zu ändern, ist nicht notwendig.

Tastaturtasten sollten Satzstil-Großschreibung verwenden, nicht komplette Großschrift.
Beispielsweise "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer groß geschrieben werden, wie zum Beispiel Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Code-Syntax erfordert Kleinschreibung).
Einige Beispiele umfassen:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, sollte immer als Marke geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, informell zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Korrekt**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Datumsangaben**: Für Datumsangaben (ohne Datumsangaben in Beispielcode) verwenden Sie das Format "Januar 1, 1900".

  - **Korrekt**: Februar 24, 1906
  - **Falsch**: Februar 24th, 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.

  - **Korrekt**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Korrekt**: 1920s
  - **Falsch**: 1920's

- **Plural von Zahlen**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Korrekt**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht die von Latein oder Griechisch beeinflussten Formen.

- **Korrekt**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "kurzen" Anführungszeichen und Zitatzeichen. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für eines der beiden entscheiden müssen, um Konsistenz sicherzustellen. Wenn kurvige Anführungszeichen oder Apostrophe ihren Weg in Codeausschnitte finden, selbst inline, können Leser erwarten, dass sie funktionieren (was sie nicht werden).

- **Korrekt**: Bitte don't verwenden "curly quotes."
- **Falsch**: Bitte don&rsquo;t verwenden &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der anschließenden unabhängigen Hauptsatz zu trennen.

  - Beispiel 1:
    - **Korrekt**: "In diesem Beispiel, werden Sie sehen, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel werden Sie sehen, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Korrekt**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie hier richtig."
  - Beispiel 3:
    - **Korrekt**: "Auf Mobilplattformen, erhalten Sie normalerweise eine Nummerntastatur zur Eingabe von Daten."
    - **Falsch**: "Auf Mobilplattformen erhalten Sie normalerweise eine Nummerntastatur zur Eingabe von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. In MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Korrekt**: "Ich reise mit Zügen, Flugzeugen, und Autos."
  - **Falsch**: "Ich reise mit Zügen, Flugzeugen und Autos."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Korrekt**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie Komma vor den Konjunktionen "und", "aber", und "oder" wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex wird, überlegen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Korrekt**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Korrekt**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Eine restriktive Klausel ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas zur Abgrenzung vom restlichen Satz. Eine restriktive Klausel wird normalerweise durch "dass" eingeführt und **sollte nicht** durch ein Komma vorangestellt werden.

  - **Korrekt**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht-restriktive Klausel bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Eine nicht-restriktive Klausel wird normalerweise durch "welches" eingeführt und sollte durch ein Komma vorangestellt werden.

  - **Korrekt**: "Sie schreiben eine Richtlinie, welche eine zulässige Liste von Ursprüngen für jedes Feature ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine zulässige Liste von Ursprüngen für jedes Feature ist."

- **Vor "solche wie"**: Wenn "solche wie" Teil einer nicht-restriktiven Klausel ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "solche wie".

  - **Korrekt**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise, wie z.B. Verbinden, Umkehren, und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise wie Verbinden, Umkehren, und Sortieren."

  Das folgende Beispiel zeigt, wann man kein Komma mit "solche wie" verwenden sollte. Hier ist die Klausel, die "solche wie" enthält, wesentlich für die Bedeutung des Satzes.

  - **Korrekt**: "Webanwendungen werden leistungsfähiger durch das Hinzufügen von Features wie Audio- und Videomanipulation und Zugang zu Rohdaten über WebSockets."
  - **Falsch**: "Webanwendungen werden leistungsfähiger durch das Hinzufügen von Features, solche wie Audio- und Videomanipulation, und Zugang zu Rohdaten über WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrich geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Korrekt**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanisch-englische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als eine Variante der Schreibweise oder als hauptsächlich in einer Nicht-amerikanischen Form von Englisch verwendet aufgeführt.
Wenn Sie beispielsweise [„behaviour“](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt), finden Sie den Satz "Hauptsächlich Britisch" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Variante der Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Korrekt**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu finden. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal über den folgenden Befehl ausführen:

```bash
npx cspell --no-progress --gitignore --config .vscode/cspell.json "**/*.md"
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet sind. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, welche Wörterbücher was enthalten und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Hier sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstatt "Tag". Das Element sollte in spitzen Klammern "<>" eingeschlossen und mit Backticks (`) geschrieben sein. Wenn Sie zum Beispiel \<input\> in Backticks verwenden, wird es als `<input>` formatiert, wie es erwartet wird.

  - **Korrekt**: das `<span>` Element
  - **Falsch**: das span Tag

  In MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, was das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zur Referenzseite hinzufügt.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelltext im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff in MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" für Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Tasksequenzen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzerschnittstellenelement durch seine Bezeichnung und Art.

  - **Korrekt**: "Drücken Sie die Schaltfläche Bearbeiten."
  - **Falsch**: "Drücken Sie Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme akzeptabel, gegeben der informellen Note unserer Inhalte.
Versuchen Sie, konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollen, wie Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste stellt einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs dar:

- Jedes Codebeispiel sollte umfassen:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario zu beschreiben, das mit dem Codebeispiel demonstriert wird. Zum Beispiel "Verwendung des Offset-Drucks" und "Rückkehr zum Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Besonderheiten des Beispiels anführt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Beispielsweise: "Im folgenden Beispiel werden zwei Kaskadenebenen im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und erklärt, wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features demonstrieren und wie es genutzt wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden könnte oder müsste.
- Wenn Sie mit einem großen Stück Codebeispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu unterteilen, sodass sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels desselben Typs (HTML, CSS und JavaScript) zusammengeführt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, von denen jedes optional seine eigenen Beschreibungen, Überschriften usw. haben kann. Dies macht die Dokumentation von Code unglaublich leistungsstark und flexibel.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs stilisieren oder formatieren, siehe [Leitlinien für das Styling von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Querverweise (Verlinkung)

Wenn auf eine andere Seite oder den Abschnitt einer Seite auf MDN durch ihren Titel verwiesen wird, folgen Sie dem Satzfall in dem Linktext (entsprechen Sie dem Seiten- oder Abschnittstitel). Verwenden Sie den Satzfall im Linktext, auch wenn er von dem verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass der Fall im Seiten- oder Abschnittstitel nicht korrekt ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN durch ihren Titel zu verweisen, verwenden Sie folgendes Format:

- **Korrekt**: "Sehen Sie sich den [Leitfaden zum Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) an."
- **Falsch**: "Sehen Sie sich den "[Leitfaden zum Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" an."

Folgen Sie einem ähnlichen Stil, wenn Sie auf einen Abschnitt einer Seite verlinken, wie im Folgenden gezeigt:

- **Korrekt**: "Weitere Informationen finden Sie im [Abschnitt zur Speicherverteilung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) auf der _Seite zur Speicherverwaltung_."

Wenn der Abschnitt, auf den Sie verlinken, auf derselben Seite ist, können Sie den Standort des Abschnitts mit den Worten "oben" oder "unten" andeuten.

- **Korrekt**: "Dieses Konzept wird genauer im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) weiter unten beschrieben."

Sie können einen Teil eines Satzes mit einem Artikel oder dem Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genug Kontext für die verlinkte Seite zu geben.

- **Korrekt**: "Erfahren Sie mehr über [wie Sie Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [dieser Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN ist eine andere Möglichkeit, auf eine Referenzseite zu verweisen, die Verwendung eines Makros. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel verwenden Sie das `HTMLElement`-Makro, um auf die Referenzseite eines HTML-Elements zu verlinken, und das `CSSxRef`-Makro, um auf die Referenzseite einer CSS-Eigenschaft zu verlinken.

Wir folgen den ähnlichen Querverweis-Leitlinien im [Siehe auch](#siehe_auch)-Abschnitt am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Nutzen Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Ihr Pull-Anfrage zur Hinzufügung eines externen Links wird abgelehnt, wenn sie nicht den hier beschriebenen Richtlinien entspricht.

Wenn Sie darüber nachdenken, einen externen Link zu MDN [Learn web development](/de/docs/Learn_web_development) Inhalten hinzuzufügen, lesen Sie bitte auch die [Learn web development writing guidelines > External links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

Im Allgemeinen, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass minimales Risiko sowohl für die folgenden Probleme besteht:

- Defekte oder veraltete Links
- Der Anschein einer Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Der Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, Inhalte innerhalb von MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu pflegen und machen das gesamte MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weithin vertraut sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Erforderlich für Attributionen, Zitate oder Anerkennungen sind (zum Beispiel als Teil einer Creative-Commons-Zuordnung)
  - Wahrscheinlicher als das Einfügen solcher Inhalte in MDN Web Docs selbst für das Thema gepflegt werden (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder community-orientiert sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen anderweitig Barrieren für Leser dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z.B. die Homepage eines Anbieters, anstatt die zugehörige Dokumentation)
  - Kurzlebig oder nicht gepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigene Arbeit des Autors abseits von MDN Web Docs)
  - Eingeschränkt sind (z.B. ein teurer Kurs über die Reichweite von Hobbyisten, Studenten oder Lesern in einkommensschwächeren Ländern hinaus)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd sind oder als Spam betrachtet werden**: Obwohl ein persönlicher Blogpost, Konferenzvortrag oder GitHub-Repository einen Wert hat, kann das Verlinken zu eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie genau, bevor Sie zu Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage offenlegen. Wenn dies nicht geschieht, kann Ihre fortgesetzte Teilnahme an den MDN Web Docs gefährdet werden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel der Redakteur einer Spezifikation sind und zur Dokumentation beitragen, die sich auf diese Spezifikation bezieht, dann wird erwartet und akzeptiert, dass Sie auf diese Spezifikation verlinken. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offen legen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (auch als "Kurzlinks" bekannt) zu kürzen. Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich können mit bestimmten Shortenern die Ziele nach ihrer Erstellung geändert werden, eine Funktion, die zu böswilligen Zwecken genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzergenerierbare) URL-Shortener erstellt wurden. Verwenden Sie stattdessen die längere `example.com`-URL, wenn z.B. `https://myshort.link/foobar` eine kurze, von einem zufälligen Benutzer generierte URL ist, die zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet.

Auf der anderen Seite sind Shortener, die vom Inhaber der Ziel-URL verwaltet werden, erwünscht. `https://bugzil.la` gehört Mozilla, wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, das ebenfalls eine von Mozilla betriebene Domain ist. Verwenden Sie in diesem Fall die kürzere URL. Verwenden Sie z.B. `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenlevel in abnehmender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese entsprechen den [HTML-Überschriftentags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags.

`##` ist das höchste erlaubte Level, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Gefühl haben, dass Sie eine vierte Überschriftenebene hinzufügen müssen, überlegen Sie, ob Sie den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufteilen können. Alternativ sehen Sie, ob Sie die Informationen in Aufzählungspunkten darstellen können, um das Hinzufügen einer vierten Überschriftenebene zu vermeiden.

Beachten Sie die folgenden Dos and Don'ts, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es handelt sich entweder um zwei oder mehr Unterabschnitte oder überhaupt nicht.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Verwenden Sie jedoch Backticks, um Begriffe im Code anzuzeigen (z.B. "Verwendung des `FooBar`-Interfaces").
- **Erstellen Sie keine "zusammenstoßenden Überschriften".** Diese sind Überschriften, die unmittelbar auf eine Unterüberschrift folgen, ohne dass dazwischen Text stehen würde.
  Dies sieht nicht gut aus und lässt Leser ohne erklärenden Text am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Sollten Sie Bilder oder andere Medien auf einer Seite einsetzen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen die Verwendung erlaubt. Versuchen Sie Medien zu verwenden, die eine sehr freizügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, reduzieren Sie die Seitengröße, indem Sie <https://tinypng.com> oder <https://imageoptim.com> verwenden.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine Leerzeile hat.
- Jedem Bild muss [beschreibender `alt` Text hinzugefügt](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) werden.

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein.
Die einzelnen Listeneinträge sollten mit geeigneten Satzzeichen geschrieben sein, unabhängig vom Listenformat.
Je nach Art der Liste, die Sie erstellen, sollten Sie Ihr Schreiben anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen sollten Sie einen Einleitungssatz einfügen, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammengehörige, kurze Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten standardmäßige Satzzeichen enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes ein Punkt erscheinen, einschließlich des letzten Satzes des Elements, so wie es in einem Absatz erwartet würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Eine weitere Bedingung, mit einer ergänzenden Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel nimmt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und endet jedes Element in der Liste mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Setzt die Hintergrundfarbe
  > - EigenschaftB: Fügt Textschatten hinzu

  Wenn einer oder mehrere Listeneinträge komplette Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Bemühen Sie sich jedoch, den gleichen Aufbau für alle Elemente in einer Liste zu befolgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Anleitung aufzulisten. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, insbesondere wenn der Text in jedem Listenelement umfangreich ist. Verwenden Sie, wie bei Aufzählungslisten, die standardmäßige Interpunktion. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuführen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können recht umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, fügen Sie eine kurze abschließende Zusammenfassung oder Erklärung über das zu erwartende Ergebnis nach der Fertigstellung hinzu.

  Das folgende Beispiel zeigt eine abschließende Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die schrittweise Anweisungen zur Erstellung einer korrekt formatierten nummerierten Liste bietet.

  Beachten Sie, dass die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anleitung verwendet werden oder um jemanden durch ein geordnetes Verfahren zu führen, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im [Aufzählungslisten](#listen)-Format, wobei jedes Element in der Liste als Phrase dargestellt wird. Im [Learn web development](/de/docs/Learn_web_development)-Abschnitt auf MDN folgt der Siehe auch Abschnitt jedoch dem [Definition List](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um Konsistenz auf MDN Web Docs zu wahren, beachten Sie folgende Leitlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts.

#### Linktext

- Der Linktext sollte derselbe wie der Titel der Seite oder der Abschnitt sein, auf die/die verlinkt wird. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite, mit dem Seitentitel "ARIA-Zustände und Eigenschaften", Folgendes sein:
  - **Korrekt**: [ARIA-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie den Satzfall im Linktext, auch wenn er von dem Titel der verlinkten Seite oder dem Abschnittstitel abweicht. Es kann sein, dass der Fall im Titel der Seite oder des Abschnitts nicht korrekt ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrektem Satzfall sein:
  - **Korrekt**: [Quirks mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch bei externen Links verwenden Sie den Satzfall, selbst wenn er auf der Zielseite anders ist. Dies dient der Konsistenz auf MDN Web Docs. Ausnahmen beinhalten Namen von Büchern.
- In MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_-Seite erklärt wird. Die Verwendung des Makros fügt der Formatierung des Schlüsselworts im Linktext Codeformatierung hinzu, wie im nächsten Beispiel gezeigt.
- Am Anfang der Linkliste ist kein Artikel ("A", "An", "The") notwendig. Am Ende des Listeelements ist kein Satzzeichen erforderlich, da es sich immer um ein Begriff oder eine Phrase handeln wird.
  - **Korrekt**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Stichpunkt.
  - **Korrekt**: [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie Codeformatierung mit Backticks (\`) zu den Schlüsselwörtern und Literalen im Linktext hinzu, auch wenn die Formatierung in den Seitentiteln und Abschnittstiteln nicht verwendet wird. Zum Beispiel, für den Seitentitel "Array()-Konstruktor", wird der Linktext [`Array()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne endende Interpunktion. Halten Sie den gesamten verlinkten Text am Anfang, um das Überfliegen der Liste von Links zu erleichtern.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Checkboxes
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element der Serie.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbenbezogene Eigenschaften
- Für externe Links, wenn möglich und sinnvoll, geben Sie die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) an. Diese Informationen geben dem Leser eine klare Vorstellung davon, wohin sie geführt werden, wenn sie den Link anklicken. Das Veröffentlichungs- oder Aktualisierungsdatum hilft Lesern zu beurteilen, wie relevant der verlinkte Artikel ist und hilft auch MDN-Wartenden, Links zu Artikeln zu überprüfen, die eine lange Zeit nicht aktualisiert wurden. Wenn Sie zum Beispiel einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie auf das Veröffentlichungs-/Aktualisierungsdatum verzichten. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern, können Sie auch Autoren angeben. Sie können einige Beispiele hierfür im [Weitere Lektüre](#language_grammar_and_spelling)-Abschnitt unten sehen. Vermeiden Sie, Autorennamen für Blogposts oder GitHub-Repositories anzugeben, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge von Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfaden- und Tutorial-Seiten. Diese empfohlene Reihenfolge erleichtert hauptsächlich das Überfliegen der Punkte in der Liste.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen Links auf.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie der alphabetischen oder einfach-zu-weiter entwickelten Reihenfolge, was auch immer für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder einem Themenbereich hinzufügen müssen, tun Sie dies normalerweise durch das Erstellen einer Einstiegsseite und das Hinzufügen von Unterseiten für jeden der einzelnen Artikel.
Die Einstiegsseite sollte mit einem Absatz oder zwei beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste mithilfe einiger von uns erstellter Makros automatisieren.

Zum Beispiel schauen Sie sich das [JavaScript](/de/docs/Web/JavaScript) Handbuch an, das wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptseite des Inhaltsverzeichnisses
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren. Das verlangsamt die Seite und macht die Suche und Navigation weniger effektiv.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, welcher der Teil der URL der Seite ist, der nach `<locale>/docs/` folgt. Beachten Sie die folgenden Leitlinien beim Definieren eines Slugs:

- Halten Sie Slugs kurz. Wenn Sie eine neue Hierarchieebene erstellen, sollte die neue Komponente des Slugs ein Wort oder zwei Wörter sein.
- Verwenden Sie Unterstriche für mehrteilige Komponentenelemente im Slug, wie zum Beispiel in `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Befolgen Sie den Satzfall für Slug-Komponenten, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel kommen in Suchergebnissen vor und dienen auch zur Strukturierung der Seiten-Hierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann sich von dem oben im Abschnitt [Slugs](#slugs) beschriebenen "Slug" der Seite unterscheiden.

Beachten Sie die folgenden Leitlinien beim Schreiben von Titeln:

- **Schreibstil für Großbuchstaben**: In den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften den Satzstil für Großbuchstaben verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle des Schlagzeilen-Stils für Großbuchstaben:

  - **Korrekt**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor diesem Stilregel geschrieben wurden. Sie können sie bei Bedarf aktualisieren, wenn Sie möchten. Wir werden uns ihnen allmählich annähern.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren werden, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis schreiben kann Ihnen helfen, die Reihenfolge der Informationen zu strukturieren. Decken Sie zunächst einfache Konzepte ab und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie zuerst konzeptionelle Informationen ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie folgende allgemeine Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Gehe höher nach niedriger**: Gehen Sie, wie im Abschnitt [Heading levels](#überschriftsebenen) beschrieben, von höher `##` zu niedriger `####`, ohne Level zu überspringen. Verwenden Sie höher Level-Überschriften für breitere einleitende Titel und verwenden Sie spezifischere Titel, während Sie zu niedrigeren Ebenen fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch zusammen unter einem höheren Level-Überschrift gruppiert sind. Die Benennung von Titeln verschiedener Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halte Titel kurz**: Kürzere Titel sind in Text und Inhaltsverzeichnissen leichter zu überfliegen.
  - **Halte Titel speziell**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt über die Einführung in HTML-Elemente, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halte Titel fokussiert**: Verwenden Sie den Titel, um ein einzelnes Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck, verwenden Sie nach Möglichkeit die Konjunktion "und" nicht in einem Titel.
  - **Verwende parallele Struktur**: Verwenden Sie ähnliche Sprache für Titel auf der gleichen Überschriftsebene. Zum Beispiel, wenn ein `###`-Überschriftentitel Gerundien (d.h. Wörter, die in "-ing" enden) verwendet, wie "Installieren", dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Überschriftsebene mit einem Imperativverb am Anfang.
  - **Vermeiden Sie den allgemeinen Begriff in der Unterüberschrift**: Wiederholen Sie nicht den Text des Titels einer höherstufigen Überschrift in untergeordneten Titeln. Zum Beispiel in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Sätzen" anstelle von "Kommas nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit Artikel**: Vermeiden Sie es, Titel mit den Artikeln "a", "an" oder "the" zu beginnen.
  - **Einleitungstext hinzufügen**: Nach einem Titel fügen Sie einen einleitenden Text hinzu, der erklärt, was im Abschnitt behandelt wird.

## Siehe auch

- [Leitlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Leitlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Leitlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Leitlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Leitlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weitere Lektüre

### Andere Stilrichtlinien

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir die [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder die [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, können die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlich, evidenzbasierte Beratung; sehr gut für nicht-muttersprachliche Sprecher, vor allem für den Präpositionsgebrauch
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
