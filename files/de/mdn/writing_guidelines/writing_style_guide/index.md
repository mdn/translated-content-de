---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte für MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, Sprach- und Stil-Konsistenz auf der Website sicherzustellen. Nichtsdestotrotz sind wir mehr an den Inhalten interessiert als an deren Formatierung, sodass Sie sich nicht verpflichtet fühlen müssen, den gesamten Schreibstil-Leitfaden vor Ihrem Beitrag zu lernen. Seien Sie daher nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um diesem Leitfaden zu entsprechen. Die Reviewer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentation. Andere Sprachen können (und sind dazu eingeladen) ihre eigenen Stil-Leitfäden erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Trotzdem sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden, wie z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das behandelte Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Bedenken Sie Ihre Zielgruppe](#bedenken_sie_ihre_zielgruppe)
- [Bedenken Sie die drei Cs des Schreibens](#bedenken_sie_die_drei_cs_des_schreibens)
- [Relevante Beispiele einfügen](#relevante_beispiele_einfügen)
- [Eine beschreibende Einführung bieten](#eine_beschreibende_einführung_bieten)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit Blick auf SEO schreiben](#mit_blick_auf_seo_schreiben)

### Bedenken Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für die Inhalte, die Sie schreiben, im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss zum Beispiel wahrscheinlich nicht so sehr ins Detail über grundlegende Netzwerk-Konzepte gehen wie eine typische Seite über Netzwerke. Denken Sie daran, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Bedenken Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze, die sich auf eine Idee pro Satz konzentrieren. Definieren Sie neue Begriffe, bevor Sie sie verwenden, immer im Hinblick auf die Zielgruppe.
- **Prägnant**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollen. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Ausdruck durchgängig auf der Seite und über mehrere Seiten hinweg verwenden.

### Relevante Beispiele einfügen

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird und um potenzielle Randfälle zu klären, die existieren könnten. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten könnten.

### Eine beschreibende Einführung bieten

Stellen Sie sicher, dass der einleitende Absatz (oder die Absätze) vor der ersten Überschrift ausreichend zusammenfasst, welche Informationen die Seite behandeln wird und vielleicht, was die Leser nach dem Durchgehen des Inhalts erreichen können. Dies ermöglicht es einem Leser, schnell festzustellen, ob die Seite relevant für seine Anliegen und gewünschten Lernergebnisse ist.

In einem Leitfaden oder Tutorial sollten der oder die einleitenden Absätze den Leser über die behandelten Themen sowie über das erwartete Vorwissen des Lesers informieren, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und sollte auf Situationen hinweisen, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel eines kurzen Einführungstextes**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen weg, wie etwa, was es genau bedeutet, Text zu „stricheln“, wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang. Es sind zu viele Details enthalten, und der Text vertieft sich zu sehr in die Beschreibung anderer Methoden und Eigenschaften. Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn aufgerufen, strichelt die Methode **`CanvasRenderingContext2D.strokeText()`** in der Canvas 2D-API die Zeichen in der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > Im Terminologie des Computergraphiken bedeutet „stricheln“, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift des Kontextes gezeichnet, wie sie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) Eigenschaft des Kontextes angegeben ist.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontextes bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge so gezeichnet, dass sie bei `x - (stringWidth / 2)` beginnt, wodurch die angegebene X-Koordinate in die Mitte der Zeichenfolge gebracht wird.
  > Wenn der Wert `"left"` ist, beginnt die Zeichenfolge an dem angegebenen Wert von `x`. Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er bei der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional, einen vierten Parameter angeben, der Ihnen ermöglicht, eine maximale Breite für die Zeichenfolge in Pixeln anzugeben. Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen solchen breiten Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`** Methode verwenden, um die Zeichen einer Zeichenfolge mit Farbe auszufüllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer geeigneten Einführung**: Hier sehen wir einen viel besseren Überblick für die Methode `strokeText()`.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), strichelt (zeichnet die Umrisse von) die Zeichen eines angegebenen Strings, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angegeben ist. Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontextes gezeichnet und wird nach den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für mehr Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Graphics zeichnen sowie unseren Hauptartikel zum Thema [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum. Wir ermutigen sehr dazu, den Text so inklusiv wie möglich zu gestalten. Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Verwendung der Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Haupt** und **Replikat**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Kohärenz** ersetzt werden.
- Anstelle von **Dummy**, verwenden Sie **Platzhalter**.
- Sie sollten die Begriffe **verrückt** und **irre** in der Dokumentation nicht verwenden müssen; wenn jedoch der Fall eintritt, ziehen Sie in Betracht, statt dessen **fantastisch** zu verwenden.

Es ist am besten, geschlechterneutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist. Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von „er“/„sein“ in Ordnung; aber wenn es sich um eine Person beider Geschlechter handelt, ist „er“/„sein“ nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu nutzen."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu nutzen."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer plural zu machen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen zu streichen:

- **Richtig**: "Ein Bestätigungsdialog fordert die Erlaubnis des Benutzers für den Zugriff auf die Webcam an."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Verwendung der Webcam bittet."

Dieses letzte Beispiel, das mit dem Problem umgeht, ist wohl besser. Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Schwierigkeiten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise völlig unterschiedliche Geschlechterregeln haben. Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Mit Blick auf SEO schreiben

Während das Hauptziel jedes Schreibens auf MDN Web Docs immer darin bestehen sollte, über offene Webtechnologien zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie tun möchten, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können dies erreichen, indem wir bei der Erstellung von Inhalten die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Auge behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indexieren können, damit Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, angemessen gestaltet, geschrieben und ausgezeichnet ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indexiert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten sich mit denselben Dingen befassen, selbst wenn sie es nicht tun. Wenn beispielsweise eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und demselben Beispiel. Dies erschwert es Suchmaschinen, zu wissen, welche welche ist, und sie teilen dann den Seitenrang, was dazu führt, dass beide schwerer zu finden sind, als sie es sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, um dies zu erreichen:

  - **Einzigartige Konzepte erklären**: Betrachten Sie Anwendungsfälle, in denen es mehr Unterschiede geben könnte, als man glaubt. Zum Beispiel könnte man im Fall der Dokumentation von `width`- und `height`-Eigenschaften über die verschiedenen Verwendungen von horizontalem Raum und vertikalem Raum schreiben und eine Diskussion über die entsprechenden Konzepte führen. Vielleicht können Sie die Verwendung von `width` in Bezug auf das Platzschaffen für eine Seitenleiste erwähnen, während Sie `height` verwenden, um vertikales Scrollen oder Fußzeilen zu handhaben. Auch Informationen über Zugänglichkeitsprobleme einzubeziehen, ist eine nützliche und wichtige Idee.
  - **Verschiedene Beispiele verwenden**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Beginn an verwenden und daher keine wirklichen Änderungen erfordern, wenn sie wiederverwendet werden. Also verwerfen Sie das Beispiel und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, von denen mindestens einige unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Erklärung dazu, wie es funktioniert, sollten je nach Komplexität des Themas und der Zielgruppe ein angemessenes Maß an Details enthalten.

  Der einfachste Weg, um zu vermeiden, zu ähnlich zu sein, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn es die Zeit erlaubt.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (genannt „thin pages“ in der SEO-Sprache), werden solche Seiten von Suchmaschinen nicht korrekt (oder überhaupt nicht) katalogisiert. Zu kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blähen Sie eine Seite nicht künstlich auf, aber behandeln Sie diese Richtlinie als Mindestlänge, wann immer dies möglich ist.

  Hier sind einige grundlegende Richtlinien, um Ihnen zu helfen, Seiten zu erstellen, die genügend Inhalt haben, um gut durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden von Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalt fehlt, fügen Sie diesen hinzu. Wir versuchen, „Stub“-Seiten auf MDN Web Docs direkt zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie richtig strukturiert ist für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Prüfen Sie, ob alle Abschnitte vorhanden sind und angemessenen Inhalt haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Punkt, an dem Inhalte fehlen.
  - **Sicherstellen, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung für etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter oder zumindest die Parameter (oder Eigenschaften oder Attribute) abdecken, die Benutzer im Anfänger- bis mittleren Bereich wahrscheinlich verwenden, sowie alle fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte einer Übersicht darüber vorausgehen, was das Beispiel tun wird, welches zusätzliche Wissen benötigt werden könnte, um es zu verstehen, und so weiter. Nach dem Beispiel (oder in einzelnen Teilen des Beispiels verteilten) sollte Text erklärt werden, wie der Code funktioniert. Gehen Sie nicht sklavisch auf Details und Fehlerbehebung beim Beispielcode ein. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden, und Ihr Code _wird_ auf Produktionswebsites verwendet! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und einem Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bilderinformationen hinzufügen**: Fügen Sie den richtigen [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text zu allen Bildern und Diagrammen hinzu. Dieser Text zählt, da Spider Bilder nicht durchsuchen können, und so informiert der `alt`-Text die Suchmaschinen-Crawler, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem Feature in Zusammenhang stehen, einzubeziehen, um Suchmaschinenrankings zu manipulieren; diese Art von Verhalten ist leicht zu erkennen und wird oft bestraft.
    > Ebenso **fügen Sie keine** sich wiederholenden, nicht hilfreichen Materialien oder Schlüsselwortblöcken in den eigentlichen Text ein, um die Größe der Seite zu verbessern. Dies tut mehr Schaden als Gutes, sowohl der Lesbarkeit als auch unseren Suchergebnissen.

- **Fokus auf Themeninhalt**: Es ist viel besser, Inhalte basierend auf dem Thema zu schreiben als auf einem bestimmten Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein gegebenes Thema einbeziehen könnten; tatsächlich sammeln viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (von kurzen, mittleren und langen Keywords), die sie in ihren Artikel einfügen, abhängig von der Länge. Dies wird zu einer diversifizierten Wortwahl führen, die zu weniger Wiederholung führt.

## Schreibstil

Abgesehen davon, dass Sie grammatisch korrekte Sätze in Englisch schreiben, sollten Sie den folgenden Richtlinien folgen, um die Inhalte auf MDN Web Docs konsistent zu halten.

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
- [Stil](#stil)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes aus einem Satz gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erklärungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite sollten Akronyme, die Benutzern wahrscheinlich nicht vertraut sind, erweitert werden. Im Zweifelsfall den Begriff erweitern. Besser noch, verlinken Sie ihn mit dem Artikel oder [Glossareintrag](/de/docs/Glossary), der die Technologie beschreibt.

  - **Richtig**: „XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache...“
  - **Falsch**: „XUL ist Mozillas XML-basierte Sprache...“

- **Großschreibung und Punkte**: Verwenden Sie bei allen Abkürzungen und Akronymen, einschließlich Organisationen wie „US“ und „UN“, durchgängig Großbuchstaben und löschen Sie Punkte.

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammerbezogenen Ausdrücken und Randnotizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderen geeigneten Satzzeichen.

  - **Richtig**: Webbrowser (z. B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B: Firefox) können verwendet werden ...

  Im Fließtext (d.h. Text außerhalb von Anmerkungen oder Klammern) verwenden Sie die englische Entsprechung der Abkürzung.

  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  | Abk.   | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | cf.    | _confer_         | vergleichen                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter                 |
  | i.e.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | beachte                       |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten angewendet, dass viele Leser entweder verwirrt sind oder die Bedeutung nicht verstehen.
  >
  > Außerdem achten Sie darauf, ob _Sie_ sie richtig verwenden, wenn Sie sich entscheiden, es zu tun. Zum Beispiel achten Sie darauf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **„Versus“, „vs.“ und „v.“**: Wenn Sie die Kontraktion verwenden, ist „vs.“ bevorzugt gegenüber „v.“ und kann in Überschriften verwendet werden. Andernfalls im Text verwenden Sie die ausgeschriebene Form „versus“.

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie in laufendem Text Standard-Großschreibungsregeln und schreiben Sie „World Wide Web“ groß. Es ist akzeptabel, „web“ (alleine oder als Modifier verwendet) und „internet“ kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung von einer früheren Version dieses Leitfadens, deshalb könnten Sie viele Instanzen von „Web“ und „Internet“ auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zu ändern, um die Großschreibung zu korrigieren.

Tastaturtasten sollten Stil der Satzform-Kapitalisierung haben und nicht alle in Großbuchstaben geschrieben werden. Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme besteht darin, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer groß geschrieben werden, wie Marken, die Großbuchstaben enthalten oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Code-Syntax erfordert eine Kleinschreibung). Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (Markenzeichen der Oracle Corporation, es sollte immer wie eingetragen geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert zur Lockerheit, deshalb sollten Sie sich nicht scheuen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: In laufendem Text verwenden Sie Kommas nur bei Zahlen mit fünf oder mehr Stellen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Verwenden Sie für Daten (außer in Codebeispielen) das Format "Januar 1, 1900".

  - **Richtig**: Februar 24, 1906
  - **Falsch**: Februar 24th, 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie den englischen Plural, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschweiften“ Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir zur Konsistenz eine Art wählen müssen. Wenn geschweifte Anführungszeichen oder Apostrophe sich in Code-Snippets einschleichen, selbst in Inline-Code, könnten Leser sie kopieren und einfügen und annehmen, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschweiften Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „geschweiften Anführungszeichen“.

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir mit den Regeln zur Kommasetzung vertraut sein müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einem einleitenden Nebensatz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel sehen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel sehen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie an der richtigen Stelle."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, sind Sie an der richtigen Stelle."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen neigen Sie dazu, ein numerisches Tastenfeld für die Dateneingabe zu erhalten."
    - **Falsch**: "Auf mobilen Plattformen neigen Sie dazu, ein numerisches Tastenfeld für die Dateneingabe zu erhalten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie vor "und" und "oder" kein Komma in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß, und schlau."

  Verwenden Sie Komma vor den Konjunktionen „und“, „aber“ und „oder“, wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, sollten Sie in Erwägung ziehen, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt durchführen, müssen jedoch auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt durchführen, müssen jedoch auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor „dass“ und „welche“**: Ein restriktiver Satz ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um ihn vom restlichen Satz abzusetzen. Ein restriktiver Satz wird normalerweise durch „dass“ eingeleitet und **sollte nicht** mit einem Komma vorausgehen.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nichtrestriktiver Satz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nichtrestriktiver Satz wird normalerweise durch „welche“ eingeleitet und sollte mit einem Komma vorausgehen.

  - **Richtig**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor „wie zum Beispiel“**: Wenn „wie zum Beispiel“ Teil eines nichtrestriktiven Satzes ist und der restliche Satz ein unabhängiger Satz ist, verwenden Sie Komma vor „wie zum Beispiel“.

  - **Richtig**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Weisen, wie zum Beispiel das Verbinden, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Weisen wie zum Beispiel das Verbinden, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit „wie zum Beispiel“ genutzt wird. Hier ist der Satz, der „wie zum Beispiel“ enthält, wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden leistungsstärker, indem Funktionen wie Audios und Videos manipulieren und Zugang zu rohen Daten mit WebSockets erlauben hinzugefügt werden."
  - **Falsch**: "Webanwendungen werden leistungsstärker, indem Funktionen, wie Audios und Videos manipulieren, und Zugang zu rohen Daten mit WebSockets erlauben hinzugefügt werden."

### Bindestriche

Bindewörter sollten nur dann mit einem Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe Vokal wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als Variante oder hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendet. Wenn Sie beispielsweise [„behaviour“](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform) nachschlagen, finden Sie die Phrase "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie keine Variantenschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und zugelassene Wörter enthalten, die nicht in den Standardwörterbüchern sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer als fehlerhaft gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element" für HTML- und XML-Elemente, anstatt "Tag". Zudem sollte das Element in spitzen Klammern "<>" eingeschlossen sein und mit Backticks (\`) formatiert werden. Zum Beispiel, das Verwenden von \<input\> innerhalb von Backticks wird es als `<input>` formatieren, wie es erwartet wird.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Macro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatieren, die spitzen Klammern "<>" hinzufügen und einen Link zu seiner Referenzseite hinzufügen wird.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Macros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff „Argumente“, wann immer dies möglich ist.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Aufgabenfolgen Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement mit seinem Label und Typ.

  - **Richtig**: „Klicken Sie auf die Schaltfläche Bearbeiten.“
  - **Falsch**: „Klicken Sie auf Bearbeiten.“

### Stil

Obwohl die aktive Form bevorzugt wird, ist die passive Form ebenfalls akzeptabel, angesichts der informellen Natur unseres Inhalts. Versuchen Sie jedoch, konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite wie Überschriften, Notizen, Links und Beispiele zu befolgen sind.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken, wenn Sie ein Codebeispiel für MDN Web Docs schreiben:

- Jedes Beispielstück sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario zu beschreiben, das im Codebeispiel demonstriert wird. Zum Beispiel, "Verwendung von Offsetdruck" und "Zurückkehren des Stils in vorherigen Layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispiels beschreibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im Beispiel unten sind in der CSS zwei Kaskadenelemente definiert: `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Web-Entwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples), ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels, die denselben Typ (HTML, CSS und JavaScript) haben, zusammengeführt werden, bevor das Beispiel ausgeführt wird. Damit können Sie den Code in mehrere Segmente aufteilen, die jeweils optional über eigene Beschreibungen, Überschriften usw. verfügen. Dies macht die Dokumentation von Code unglaublich mächtig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs formatieren, besuchen Sie [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN verweisen, folgen Sie dem Satzfall im Linktext (und sparen Sie sich Betriebsveränderungen). Verwenden Sie den Satzfall im Linktext, auch wenn er sich vom Titel der verlinkten Seite oder Abschnitt unterscheidet (es könnte sein, dass der im Titel der Seite oder des Abschnitts verwendete Fall nicht korrekt ist). Verwenden Sie keine Anführungszeichen um den Text. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Befolgen Sie einen ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie unten gezeigt:

- **Richtig**: "Für weitere Informationen siehe die [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Sektion auf der _Memory management_ Seite."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie mit den Wörtern „oben“ oder „unten“ auf die Position des Abschnitts hinweisen.

- **Richtig**: "Dieses Konzept ist im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten ausführlicher beschrieben."

Sie können einen Teil eines Satzes mit einem Artikel oder dem Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Wörter als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite zu bieten.

- **Richtig**: "Erfahren Sie mehr über das [Sortieren von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [dieser Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN können Sie eine Referenzseite auch mit einem Macro verlinken. Diese Macros werden auf der Seite [Häufig verwendete Macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement` Macro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef` Macro.

Wir folgen ähnlichen Querverweissrichtlinien in den [See also](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossar-Seiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs unter bestimmten Bedingungen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Leitlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link zu MDN Web Docs hinzuzufügen. Ihre Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn sie nicht den hier beschriebenen Richtlinien entspricht.

Wenn Sie darüber nachdenken, einen externen Link zu MDN [Learn web development](/de/docs/Learn_web_development)-Inhalte hinzuzufügen, lesen Sie bitte auch [Learn web development writing guidelines > External links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

In der Regel, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko der folgenden Punkte minimal ist:

- Kaputte oder veraltete Links
- Anschein der Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zu verwenden, um Spam zu verteilen
- Kürze (Shortlinks), die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie den internen Link innerhalb von MDN Web Docs in Betracht ziehen. Interne Links sind einfacher zu pflegen und machen das gesamte MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten das Hinzufügen von Links zu externen Inhalten bevorzugen, die:

  - Einzigartig oder unentbehrlich sind (z.B. ein IETF RFC)
  - Für Zitation, Anerkennung oder Anerkennung erforderlich sind (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher für das Thema gewartet werden als solch ein Inhalt auf MDN Web Docs zu integrieren (z.B. die Veröffentlichungsnotizen eines Anbieters)
  - Open Source oder Community-getrieben sind, wie selbst MDN Web Docs

- **Schlechte externe Links**: Schlechte externe Links fehlen Relevanz, Wartbarkeit, Zugänglichkeit oder stellen auf andere Weise Hindernisse für Leser dar. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:

  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters, anstatt die zugehörige Dokumentation)
  - Flüchtig oder nicht gepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstreferenziert oder selbstbeworben sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahlschranken haben (z.B. ein teurer Kurs, der außerhalb der Reichweite von Hobby-Benutzern, Studenten oder Lesern aus einkommensschwachen Ländern liegt)
  - Nicht zugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstbeworben oder Spam sind**: Während ein persönlicher Blogbeitrag, Konferenzvortrag oder GitHub-Repository Wert hat, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Bedenken Sie sorgfältig, bevor Sie Links zu Ressourcen erstellen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Request offenlegen. Das Nichterreichen dieser Anforderung kann Ihre weitere Teilnahme bei den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Redakteur einer Spezifikation sind und zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, dann ist das Verlinken zu dieser Spezifikation erwartet und akzeptabel. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleinere, leichter zu merkende URLs (auch bekannt als "Shortlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Außerdem kann bei bestimmten Shortenern das Ziel nach ihrer Erstellung geändert werden, ein Feature, das für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzererstellbare) URL-Shortener erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wird und zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie den längeren `example.com` URL.

Andererseits sind Shortener ersterene, die von den Organisationen, die auch die Ziel-URLs betreiben, gewartet werden, grundsätzlich gut. `https://bugzil.la` gehört und wird von Mozilla betrieben und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` umleitet, eine ebenfalls von Mozilla betriebene Domain. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese übersetzen sich in die [HTML-Überschriftentags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags respektiv.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Überschriftenebenen hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftenebene hinzuzufügen, sollten Sie erwägen, den Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufzuteilen. Alternativ prüfen Sie, ob Sie die Informationen in Aufzählungspunkte umwandeln können, um das Hinzufügen einer vierten Überschriftenebene zu vermeiden.

Behalten Sie die folgenden Dos und Don'ts im Kopf, wenn Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine unterteilten Einheiten.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema. Solange es nicht weniger als zwei Unterüberschriften gibt, sollten keine verwendet werden.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Verwendung von `FooBar` Interface").
- **Erstellen Sie keine „stolpernden Überschriften“.** Das sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne dass Text dazwischen steht. Dies sieht nicht gut aus und lässt die Leser ohne erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medializenz es erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr permissive Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Content-Lizenz kompatibel ist — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Für Bilder, komprimieren Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Gewicht der Seite zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und achten Sie darauf, dass die `SVG`-Datei am Ende der Datei eine leere Zeile hat.
- Jedes Bild muss [beschreibenden `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten über alle Seiten hinweg gleichmäßig formatiert und strukturiert sein. Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat. Je nachdem, welche Art von Liste Sie erstellen, sollten Sie jedoch Ihre Schreibeweise anpassen, wie in den untenstehenden Abschnitten beschrieben. In beiden Fällen sollte ein Einleitungssatz enthalten sein, der die im Listenformat enthaltenen Informationen beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke prägnanter Information zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungen sollten bei der Interpunktion mit Punkt in Sätzen enden, Phrasen nicht.

  Falls es in einem Listenelement mehrere Sätze gibt, muss am Ende jedes Satzes ein Punkt stehen, so wie es in einem Absatz erwartet werden würde. Hier ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einbeziehen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine weitere Bedingung, mit etwas weiterer Erklärung.

  Beachten Sie, dass die gleiche Satzstruktur sich von Punkt zu Punkt wiederholt. In diesem Beispiel nennt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jede Listenelement endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze sind, ist am Schluss kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Legt die Hintergrundfarbe fest
  > - EigenschaftB: Fügt Textschatten hinzu

  Wenn eines oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenpunkt drei oder weniger Wörter enthält. Soweit möglich, sollten Sie jedoch den gleichen Aufbau für alle Elemente in einer Liste verwenden. Stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerisierte Listen**: Nummerierte Listen werden hauptsächlich zur Aufzählung der Schritte in einer Reihe von Anweisungen verwendet. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, insbesondere wenn der Text in jedem Listenelement lang ist. Behalten Sie, wie bei Aufzählungspunkten, die Standardregelungen zur Interpunktion bei. Hier ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen in das richtige Licht zu rücken. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und behalten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher müssen Sie verständlich schreiben und die richtige Interpunktion verwenden.
  > 3. Nachdem Sie Ihre Anweisungen fertiggestellt haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Nachfolgend ein Beispiel für das Schreiben einer abschließenden Erklärung zur obigen Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anweisende Schritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Punkte in nummerierten Listen wie kurze Absätze klingen. Da nummerierte Listen routinemäßig für Anweisungszwecke oder das Durchlaufen eines geordneten Verfahrens verwendet werden, achten Sie darauf, jeden Punkt fokussiert zu halten: ein nummeriertes Item pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal auch Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen, präsentieren Sie die Links in einem Siehe auch Abschnitt im [Aufzählungslistformat](#listen) mit jedem Item in der Liste als Phrase. Im Bereich [Learn web development](/de/docs/Learn_web_development) auf MDN folgt der Siehe auch Abschnitt dem [Definitionslistenformat](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Um Konsistenz über MDN Web Docs hinweg zu gewährleisten, beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der verlinkten Seite oder des Abschnitts. Zum Beispiel, der Linktext zur [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite, deren Seitentitel "ARIA states and properties" ist, wird sein:
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn sie vom verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass der im Seitentitel oder Abschnittstitel verwendete Fall falsch ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzfall wird sein:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch für externe Links verwenden Sie die Satzgroßschreibung, auch wenn die Großschreibung auf der Zielartikel-Seite anders ist. Dies ist, um Konsistenz über die MDN Web Docs hinweg zu gewährleisten. Ausnahmen sind Buchtitel.
- Auf MDN können Sie optional ein Macro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Macros_ Seite erklärt wird. Die Verwendung des Macros fügt eine Code-Formatierung zur Keyword im Linktext hinzu, wie im nächsten Beispiel gezeigt wird.
- Kein Artikel („A“, „An“, „The“) ist am Anfang des Linklistenelements erforderlich. Keine Interpunktion am Ende des Listenelements, da es sich unweigerlich um einen Begriff oder eine Phrase handelt.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) Keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie Code-Formatierung durch Backticks (\`) zu Keywords und Literale im Linktext, auch wenn die Formatierung in Seitentiteln und Abschnittstiteln nicht verwendet wird. Zum Beispiel, für den Seitentitel „Array() constructor“, wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Halten Sie den gesamten verlinkten Text am Anfang, um das Scannen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Checkboxen
- Verwenden Sie nicht das Bindewort „und“ vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, nach Möglichkeit die Quelle der Website und das Jahr der Veröffentlichung oder des letzten Updates (in Klammern) anzugeben. Dies gibt den Lesern eine klare Vorstellung von dem Ziel, das sie erreichen, wenn sie den Link klicken. Das Datum der Veröffentlichung oder des letzten Updates hilft den Lesern, die Relevanz des verlinkten Artikels zu beurteilen und den MDN-Maintainern, Links zu Artikeln zu überprüfen, die seit langer Zeit nicht mehr aktualisiert wurden. Wenn Sie beispielsweise einen Artikel auf Wikipedia verlinken, können Sie das Veröffentlichungs/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quelle und der Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren angeben. Sie können einige Beispiele dafür im [Weiterführendes Lesen](#language_grammar_and_spelling) Abschnitt unten finden. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories hinzuzufügen, zu denen Sie möglicherweise einen Link erstellen.

#### Reihenfolge der Links

- Ordnen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von den Links zu den verwandten Leitfäden und Tutorial-Seiten an. Diese vorgeschlagene Reihenfolge dient hauptsächlich zur Unterstützung der Lesbarkeit der Elemente in der Liste.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links auf und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links sollten Sie die alphabetische oder die Reihenfolge von einfach zu kompliziert einhalten, je nachdem, was für den Kontext sinnvoller ist.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder einem Fachgebiet hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Übersichtsseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen. Die Hauptseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen. Sie können die Addition von Seiten in die Liste automatisieren, wobei einige erstellte Makros helfen.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel in der obersten Hierarchiestufe zu platzieren, was die Website verlangsamt und die Suche und Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem Seitenslug, welcher der Teil der URL der Seite nach `<locale>/docs/` ist, unterscheiden. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchiestufe erstellen, sollte die neue Stufe im Slug nur ein Wort oder zwei enthalten.
- Slugs sollten einen Unterstrich verwenden, um ein mehrteiliges Element darzustellen, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch in Slugs dem Satzfall für jede Komponente, wie im vorherigen Beispiel `Basic_HTML_syntax`.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und werden auch verwendet, um die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich von dem Seitenslug unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften den Satzfall (nur das erste Wort und Eigennamen groß schreiben) und nicht den Schlagzeilenstil der Großschreibung verwenden:

  - **Richtig**: "Eine neue Methode zum Erstellen von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zum Erstellen Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor der Einführung dieser Stilrichtlinie geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir erreichen sie allmählich.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu schreiben, kann Ihnen helfen, zu entscheiden, wie Sie die Informationen ordnen möchten. Handeln Sie einfache Konzepte zuerst und gehen dann zu komplizierteren und fortgeschritteneren Konzepten über. Behandeln Sie konzeptionelle Informationen zuerst und bewegen Sie sich dann zu handlungsorientierten Themen.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitten oder Unterabschnitten:

  - **Von höher zu niedriger**: Wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) skizziert, gehen Sie von der höheren `##` zu der niederen `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriftenebenen für breitere einleitende Titel und verwenden Sie spezifischere Titel, wenn Sie zu niedrigeren Überschriftenebenen fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift zusammengefasst sind. Titel verschiedener Abschnitte zu benennen kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind einfacher zu überfliegen, sowohl im Text als auch im Inhaltsverzeichnis.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Übersicht".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt abgedeckt wird. Zu diesem Zweck, so weit wie möglich, versuchen Sie, die Konjunktion „und“ in einem Titel zu vermeiden.
  - **Parallel Konstruktion verwenden**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Zum Beispiel, wenn ein `###`-Überschriftentitel Gerundien verwendet, also Wörter mit der Endung "-ing", wie „Instalieren“, dann versuchen Sie, alle Titel auf dieser Überschriftenebene in dieser Weise zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie „Verwenden“, „Konfigurieren“, dann schreiben Sie alle Titel auf dieser Überschriftenebene beginnend mit einem Imperativverb.
  - **Verwenden Sie nicht denselben gemeinsamen Begriff in einer niedrigeren Überschrift**: Wiederholen Sie keinen Text im Titel einer höheren Überschriftenebene in niedrigeren Titeln.
  - **Nicht mit Artikel beginnen**: Vermeiden Sie, mit den Artikeln „a“, „an“ oder „the“ Titel zu beginnen.
  - **Fügen Sie Vorabinformationen hinzu**: Fügen Sie nach einem Titel einen einführenden Text hinzu, um zu erklären, was im Abschnitt behandelt werden soll.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shellprompt-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir die [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder die [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu Rate zu ziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler in der englischen Rechtschreibung](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik-FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Verwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur englischen Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für Präpositionsgebrauch
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
