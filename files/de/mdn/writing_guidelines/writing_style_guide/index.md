---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen Konsistenz in Sprache und Stil auf der gesamten Website gewährleisten. Dennoch sind wir mehr an Inhalten interessiert als an deren Formatierung, also fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Inhalts-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens beziehen sich in erster Linie auf englischsprachige Dokumentationen. Andere Sprachen können (und sind eingeladen) ihre eigenen Stil-Leitfäden zu erstellen. Diese sollten als Unterseiten der entsprechenden Lokalisierungsteam-Seite veröffentlicht werden. Dieser Leitfaden sollte jedoch trotzdem für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Relevante Beispiele einbeziehen](#relevante_beispiele_einbeziehen)
- [Eine beschreibende Einführung bieten](#eine_beschreibende_einführung_bieten)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit SEO im Hinterkopf schreiben](#mit_seo_im_hinterkopf_schreiben)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Beispielsweise muss eine Seite zu fortgeschrittenen Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkkonzepte eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps können nicht in jedem Fall zutreffen.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, behalten Sie die Zielgruppe im Hinterkopf, bevor Sie sie verwenden.
- **Prägnant**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollen. Wenn Sie zu viele Details bereitstellen, wird die Seite mühsam zu lesen und selten verwendet.
- **Konsistent**: Stellen Sie sicher, dass Sie dasselbe Verbaise konsistent auf der Seite und über mehrere Seiten hinweg verwenden.

### Relevante Beispiele einbeziehen

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um Randfälle zu klären, die existieren könnten. Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Lösungen für Probleme zu demonstrieren, die möglicherweise auftreten.

### Eine beschreibende Einführung bieten

Stellen Sie sicher, dass der einleitende Absatz (oder Absätze) vor der ersten Überschrift die Informationen zusammenfasst, die die Seite abdecken wird, und vielleicht, was die Leser erreichen können, nachdem sie den Inhalt durchgegangen sind. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der Einleitungsabsatz den Leser über die behandelten Themen informieren sowie das erforderliche Vorwissen, das der Leser haben sollte, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den damit verbundenen Informationen, und Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie zum Beispiel, was es genau bedeutet, Text zu "umrahmen", wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang. Es sind zu viele Details enthalten, und der Text geht zu tief darauf ein, andere Methoden und Eigenschaften zu beschreiben. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > Wenn die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, werden die Zeichen in der angegebenen Zeichenkette ab den angegebenen Koordinaten gezeichnet, wobei die aktuelle Stiftfarbe verwendet wird. In der Terminologie der Computergraphik bedeutet "umrahmen" von Text das Zeichnen der Umrisse der Glyphen in der Zeichenkette, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt. `textAlign` steuert die Platzierung der Zeichenkette relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenkette platziert wird. Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend bei dem angegebenen Wert von `x` gezeichnet. Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenkette in Pixel spezifizieren können. Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen Raum dieser Breite zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenkette als mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine geeignete Einführung**: Hier sehen wir eine viel bessere Übersicht über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Umrisse der) Zeichen einer angegebenen Zeichenkette, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angegeben ist. Der Text wird unter Verwendung des aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Zeichnen von Grafiken sowie unser Hauptartikel zum Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum. Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu halten. Hier sind einige Alternativen zu gängigen Begriffen in der Dokumentation:

- Vermeiden Sie die Verwendung der Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** mit **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Statt **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in Dokumentationen nicht verwenden; wenn der Fall dennoch eintritt, ziehen Sie stattdessen **fantastic** in Betracht.

Es ist am besten, eine geschlechtsneutrale Sprache in jedem Schriftstück zu verwenden, in dem das Geschlecht für das Thema irrelevant ist. Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person eines beliebigen Geschlechts ist, ist "er"/"sein" nicht angebracht.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu nutzen."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu nutzen."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu nutzen."

> [!NOTE]
> MDN Web Docs erlaubt den Gebrauch der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen umfassen "they," "them", "their," und "theirs".

Eine andere Möglichkeit ist, die Benutzer im Plural zu verwenden, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu nutzen."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog erscheint, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Verwendung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Problemlösung ist vermutlich besser. Nicht nur ist es grammatikalisch korrekter, sondern es entfernt auch einige der Komplexitäten, die mit der Behandlung von Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben. Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Mit SEO im Hinterkopf schreiben

Während das primäre Ziel jedes Schreibens auf MDN Web Docs stets sein sollte, über offene Webtechnologie zu informieren und es Entwicklern zu ermöglichen, schnell zu lernen, was sie tun möchten oder die kleinen Details zu finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Dies können wir erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen an den Inhalt, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit Leser leicht finden, was sie benötigen. Zu den SEO-Richtlinien gehört sicherzustellen, dass jede Seite, an der Autoren und Redakteure arbeiten, sinnvoll gestaltet, geschrieben und markiert ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist hilfreich, wenn Sie sicherstellen möchten, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indiziert werden:

- **Stellen Sie sicher, dass sich Seiten nicht zu ähnlich sind**: Wenn die Inhalte auf verschiedenen Seiten textuell ähnlich sind, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema informieren, auch wenn dies nicht der Fall ist. Beispielsweise, wenn ein Interface die Eigenschaften `width` und `height` hat, kann der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich sein, mit nur wenigen ausgetauschten Wörtern und demselben Beispiel. Dies macht es Suchmaschinen schwer, zu wissen, welche Seite welche ist, und sie teilen den Seitenrang, was zur Folge hat, dass beide schwerer zu finden sind als sie sollten.

  Es ist wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, wie Sie dies erreichen können:

  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, in denen es mehr Unterschiede gibt, als man denken würde. Zum Beispiel beim Dokumentieren der Eigenschaften `width` und `height`, vielleicht schreiben Sie über die unterschiedliche Verwendung von horizontalem und vertikalem Raum und diskutieren die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` in Bezug auf das Schaffen von Platz für eine Seitenleiste erwähnen, während Sie `height` verwenden, um vertikales Scrollen oder Fußzeilen zu behandeln. Das Hinzufügen von Informationen über Zugänglichkeitsprobleme ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher keine wirklichen Änderungen erfordern, wenn sie wiederverwendet werden. Also verwerfen Sie das Beispiel und schreiben ein neues oder bieten zumindest mehrere Beispiele mit zumindest einigen unterschiedlichen an.
  - **Fügen Sie Beschreibungen zu Beispielen hinzu**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, sollten in einem geeigneten Detailgrad gegeben werden, abhängig von der Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, zu vermeiden, dass Seiten sich zu sehr ähneln, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Leitrichtlinie, stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer sind als etwa 300 Wörter. Blähen Sie eine Seite nicht künstlich auf, behandeln Sie diese Richtlinie aber als Mindestziel, wo immer dies möglich ist.

  Hier einige grundlegende Richtlinien, die Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, auf denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie richtig für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und geeignete Inhalte haben.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass auftretende Ausnahmen behandelt werden - dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist leicht, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispielsituationen zu allen Parametern oder zumindest zu den Parametern (oder Eigenschaften, oder Attributen), die Benutzer aus dem Anfänger- bis Mittelstufenbereich wahrscheinlich verwenden, sowie zu allen fortgeschrittenen Begriffen, die zusätzliche Erklärungen erfordern, vorhanden sein. Jedes Beispiel sollte mit einer Übersicht darüber begonnen werden, was das Beispiel bewirken wird, welche zusätzlichen Kenntnisse benötigt werden, um es zu verstehen, und so weiter. Nach dem Beispiel (oder in Teile des Beispiels eingewebt) sollten Texte erklären, wie der Code funktioniert. Gehen Sie nicht zu sparsam mit den Details oder dem Umgang mit Fehlern in Beispielen um. Beachten Sie, dass Benutzer _Ihr_ Beispiel kopieren und in ihre eigenen Projekte einfügen, und Ihr Code _wird_ in Produktionsumgebungen verwendet werden! Siehe unsere [Code-Beispielrichtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide) für mehr nützliche Informationen.
  - **Erläutern Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein allgemeines Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert, hinzu.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie ordnungsgemäßes [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text auf allen Bildern und Diagrammen hinzu. Dieser Text, sowie Bildunterschriften auf Tabellen und anderen Abbildungen zählen, da Suchmaschinen-Crawler nicht in Bilder kriechen können, und `alt`-Text den Suchmaschinen-Crawlern mitteilt, was der eingebettete Medieninhalt enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder Keywords, die nicht mit dem Feature zusammenhängen, einzufügen, um Suchmaschinenrankings zu manipulieren; dieses Verhalten ist leicht erkennbar und wird oft bestraft.
    > Ebenso **fügen Sie keine** wiederholten, unhilfreiche Materialien oder Keyword-Blobs innerhalb der tatsächlichen Seite hinzu, in einem Versuch, die Größe der Seite und die Suchrangfolge zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Fokus auf Themeninhalte**: Es ist viel besser, Inhalte rund um das Thema der Seite zu schreiben, als zu einem bestimmten Keyword. Es ist sehr wahrscheinlich, dass es viele Keywords gibt, die Sie für ein gegebenes Thema verwenden könnten; tatsächlich sammeln viele SEOs eine Liste von 5-100 verschiedenen Keywords (unterschiedlich von kurzen, mittleren und langen Keywords) zur Aufnahme in ihren Artikel, abhängig von der Länge. Dadurch diversifizieren Sie Ihre Wortwahl, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, grammatikalisch korrekte Sätze in Englisch zu schreiben, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um Konsistenz der Inhalte auf MDN Web Docs zu gewährleisten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus den Anfangsbuchstaben jedes Wortes eines Satzes gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite erweitern Sie Akronyme, die den Benutzern wahrscheinlich fremd sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser, verlinken Sie ihn mit dem Artikel oder [Glossareintrag](/de/docs/Glossary), der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas auf XML basierende Sprache..."
  - **Falsch**: "XUL ist Mozillas auf XML basierende Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Vollgroßschreibung und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gebräuchliche lateinische Abkürzungen (etc., i.e., e.g.) in eingeschobenen Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Webbrowser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B.: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In normalem Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente von lateinischen Abkürzungen zusammen:

<!-- markdownlint-disable search-replace -->

| Abbr.  | Latein           | Englisch                      |
| ------ | ---------------- | ----------------------------- |
| cf.    | _confer_         | vergleichen                   |
| e.g.   | _exempli gratia_ | zum Beispiel                  |
| et al. | _et alii_        | und andere                    |
| etc.   | _et cetera_      | und so weiter                 |
| i.e.   | _id est_         | das heißt, mit anderen Worten |
| N.B.   | _nota bene_      | beachten                      |
| P.S.   | _post scriptum_  | Nachschrift                   |

<!-- markdownlint-enable search-replace -->

> [!NOTE]
> Überlegen Sie immer, ob es wirklich sinnvoll ist, eine lateinische Abkürzung zu verwenden. Einige dieser Abkürzungen werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwechseln oder gar nicht verstehen.
>
> Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Zum Beispiel verwechseln Sie nicht "z.B." mit "d.h.", was ein häufiger Fehler ist.

- **Plurale von Abkürzungen und Akronymen**: Bei Pluralen von Abkürzungen und Akronymen fügen Sie einfach _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Bei der Verwendung der Abkürzung wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Andernorts im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: dieses vs. jenes
  - **Falsch**: dieses v. jenes
  - **Richtig**: dieses versus jenes

### Großschreibung

Verwenden Sie die standardmäßigen englischen Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie auf MDN noch viele Instanzen von "Web" und "Internet" finden werden. Fühlen Sie sich frei, diese bei anderen Änderungen zu ändern, aber es ist nicht notwendig, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastaturschlüssel sollten Satz-Großschreibung, nicht alles in Großbuchstaben, verwenden. Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (sofern das Wort nicht innerhalb von Code verwendet wird und die Codesyntax eine Kleinschreibung erfordert). Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, es sollte immer wie angemeldet geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, also sollten Sie sich frei fühlen, Kontraktionen (z.B., "don't", "can't", "shouldn't") zu verwenden, wenn Sie möchten.

### Zahlen und Ziffern

- **Kommas**: In fortlaufendem Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer Daten in Codebeispielen) verwenden Sie das Format "Januar 1, 1900".

  - **Richtig**: 24. Februar, 1906
  - **Falsch**: 24. Februar, 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plurale von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die latein- oder griechisch beeinflussten Formen.

- **Richtig**: Lehrpläne, Oktopusse
- **Falsch**: Lehrpläne, Oktopoden

### Apostrophe und Anführungszeichen

Verwenden Sie keine "gekrümmten" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eines von beiden aus Gründen der Konsistenz wählen müssen. Wenn sich geschwungene Anführungszeichen oder Apostrophe in Codebeispiele, sogar Inline-Beispiele, einschleichen, könnten Leser diese kopieren und einfügen, in der Erwartung, dass sie funktioneiren (was sie nicht tun).

- **Richtig**: Bitte verwenden Sie keine "geschweiften Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „geschweiften Anführungszeichen“.

### Kommas

Die folgende Liste beschreibt einige der gängigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes steht. Verwenden Sie ein Komma nach einem einleitenden Nebensatz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel werden Sie sehen, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel werden Sie sehen, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie hier genau richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, sind Sie hier genau richtig."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen tendieren Sie dazu, eine numerische Tastatur zum Eingeben von Daten zu erhalten."
    - **Falsch**: "Auf mobilen Plattformen tendieren Sie dazu, eine numerische Tastatur zum Eingeben von Daten zu erhalten."

- **Vor Konjunktionen**: Das Serialkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen steht. Auf MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich reise mit Zügen, Flugzeugen und Automobilen."
  - **Falsch**: "Ich reise mit Zügen, Flugzeugen und Automobilen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist niedlich und schlau."
  - **Falsch**: "Mein Hund ist niedlich, und schlau."

  Verwenden Sie Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex wird, sollten Sie ihn in zwei Sätze umschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Datei-Einstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Datei-Einstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein einschränkender Satz ist wesentlich für die Bedeutung des Satzes und braucht keine Kommata, um vom Rest des Satzes abgetrennt zu werden. Ein einschränkender Satz wird normalerweise durch "dass" eingeführt und **sollte nicht** durch ein Komma getrennt werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wichtigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wichtigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nicht einschränkender Satz liefert zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht einschränkender Satz wird normalerweise durch "welches" eingeführt und sollte durch ein Komma getrennt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor "wie"**: Wenn "wie" Teil eines nicht einschränkenden Satzes ist und der restliche Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "wie".

  - **Richtig**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Weisen, wie das Verbinden, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Weisen wie das Verbinden, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann Sie kein Komma mit "wie" verwenden. Hier ist der Satz mit "wie" wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Web-Anwendungen werden immer leistungsfähiger durch das Hinzufügen von Funktionen wie Audio- und Videobearbeitung und den Zugang zu Rohdaten mit WebSockets."
  - **Falsch**: "Web-Anwendungen werden immer leistungsfähiger durch das Hinzufügen von Funktionen, wie Audio- und Videobearbeitung und den Zugang zu Rohdaten mit WebSockets."

### Bindestriche

Verbundwörter sollten nur dann mit einem Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als alternative Schreibweise gelistet oder wird hauptsächlich in einem nicht-amerikanischen Englisch verwendet. Wenn Sie beispielsweise ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_, das dem amerikanischen Standard entspricht) nachschlagen, finden Sie den Hinweis "Hauptsächlich britisch" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie keine alternativen Schreibweisen.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu vermeiden. Es wird jede Woche ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden. Diese enthalten zugelassene Wörter, die nicht im Standardwörterbuch enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer beanstandet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jeder Deutsch-NameWörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "Tag". Zusätzlich sollte das Element in spitzen Klammern "<>" eingeschlossen und mit Backticks (\`) formatiert werden. Beispielsweise wird bei der Verwendung von \<input\> innerhalb von Backticks dieses als `<input>` formatiert, wie es erwartet wird.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, spitze Klammern "<>" hinzufügt sowie einen Link zur Referenzseite hinzufügt.

  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelle in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" soweit wie möglich, um Konsistenz zu gewährleisten.

- **Benutzeroberflächenaktionen**: In Taskfolgen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Benennen Sie das Benutzeroberflächenelement nach seinem Label und Typ.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Charakters unserer Inhalte. Versuchen Sie jedoch konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollten, wie Überschriften, Notizen, Links und Beispiele.

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
- [Titel](#titles)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Stück Beispielcode sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze Überschrift `###` (`<h3>`), um das durch das Codebeispiel demonstrierte Szenario zu beschreiben. Zum Beispiel "Offset-Druck verwenden" und "Zum vorherigen Layer-Stil zurückkehren".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Besonderheiten des Beispiels beschreibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: "Im folgenden Beispiel werden in CSS zwei Kaskadenebenen definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features demonstrieren und wie es verwendet wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu unterteilen, damit diese individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels desselben Typs (HTML, CSS und JavaScript) zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, jedes optional mit eigenen Beschreibungen, Überschriften und so weiter. Dies macht das Dokumentieren von Code unglaublich leistungsfähig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs formatieren oder stylen, siehe [Richtlinien zum Stylen von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder einen Abschnitt einer Seite auf MDN per Titel, verwenden Sie die Satz-Großschreibung im Linktext (passen Sie den Seiten- oder Abschnittstitel an). Verwenden Sie die Satz-Großschreibung im Linktext, auch wenn es anders als der verlinkte Seiten- oder Abschnittstitel ist (es könnte sein, dass die auf der Seite oder im Abschnitt verwendete Großschreibung falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN per Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Guide."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Guide."

Befolgen Sie einen ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie im Folgenden gezeigt:

- **Richtig**: "Für weitere Informationen siehe den [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt auf der _Memory management_ Seite."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie mit den Wörtern "oben" oder "unten" einen Hinweis auf die Position des Abschnitts geben.

- **Richtig**: "Dieses Konzept wird im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten ausführlicher beschrieben."

Sie können einen Teil eines Satzes als Link zu einem Artikel oder einem Abschnitt eines Artikels verwenden. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite bereitzustellen.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente anordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN können Sie auch ein Makro verwenden, um auf eine Referenzseite zu verlinken. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Auch in den [Siehe auch](#siehe_auch) Abschnitten am Ende der Referenzseiten, Glossarseiten und Leitfäden befolgen wir ähnliche Querverweisrichtlinien.

### Externe Links

Externen Links sind auf MDN Web Docs in spezifischen Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Ihr Pull-Request zur Hinzufügung eines externen Links wird abgelehnt, wenn er nicht den hier beschriebenen Richtlinien entspricht.

Wenn Sie überlegen, einen externen Link zu MDN [Learn web development](/de/docs/Learn_web_development) Inhalt hinzuzufügen, lesen Sie bitte auch [Learn web development writing guidelines > Externe Links und Einbindungen](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

Im Allgemeinen, wenn Sie überlegen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass folgendes minimales Risiko besteht:

- Defekte oder veraltete Links
- Eindruck von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs für die Verteilung von Spam zu nutzen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, ob Sie Inhalte innerhalb von MDN Web Docs verknüpfen können. Interne Links sind einfacher zu pflegen und machen das gesamte MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten Links zu externen Inhalten bevorzugen, die:

  - Einzigartig oder unentbehrlich sind (z.B. ein IETF RFC)
  - Notwendig sind für den Anhang, die Zitation oder die Danksagung (z.B. als Teil einer Creative Commons Lizenz)
  - Wahrscheinlicher von Dritten gepflegt werden für das Thema, als solche Inhalte auf MDN Web Docs selbst zu integrieren (z.B. Freigabenotizen eines Anbieters)
  - Open Source oder community-driven sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links sind ohne Relevanz, mangelnde Wartbarkeit, Barrierefreiheit oder setzen anderweitig Barrieren für die Leser. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:

  - Generisch oder unspezifisch sind (z.B. die Homepage eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder Eigenwerbung sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Kostenpflichtig sind (z.B. ein teurer Kurs jenseits der Reichweite von Hobbyisten, Studenten oder Lesern aus einkommensschwächeren Ländern)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die Eigenwerbung oder Spam sind**: Während ein persönlicher Blog-Beitrag, ein Konferenzvortrag oder ein GitHub-Repository Wert haben, kann das Verlinken auf Ihre eigenen Ressourcen den Eindruck eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Die Nichteinhaltung kann Ihre weitere Teilnahme an MDN Web Docs beeinträchtigen.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie beispielsweise der Redakteur einer Spezifikation sind und zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, dann ist das Verlinken zu dieser Spezifikation zu erwarten und akzeptabel. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Verkürzer (wie TinyURL oder Bitly) kann großartig sein, um lange Links zu kürzeren, leichter zu merkenden URLs (auch bekannt als "Shortlinks") zu machen. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann bei bestimmten Verkürzern das Ziel nach ihrer Erstellung verändert werden, was für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzergenerierte) URL-Verkürzer erstellt wurden. Wenn z.B. `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer erstellt wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com`-URL.

Auf der anderen Seite sind von den Organisationen, die auch die Ziel-URLs betreiben, gepflegte First-Party-Verkürzer ermutigt. `https://bugzil.la` wird von Mozilla betrieben und verwiesen URLs von `https://bugzilla.mozilla.org/`, das ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Beispiel: Verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriftenebenen in abnehmender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese übersetzen sich zu den [HTML-Überschrift-Elementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags bzw.

`##` ist die höchste zulässige Ebene, weil `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftsebene hinzuzufügen, überlegen Sie, ob Sie den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufteilen. Alternativ sehen Sie, ob Sie die Informationen in Aufzählungspunkte umwandeln können, um das Hinzufügen einer vierten Überschriftsebene zu vermeiden.

Achten Sie auf die folgenden Dos and Don'ts beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Teilen Sie ein Thema nicht in ein einziges Unterthema auf. Es sind entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie in Überschriften keine Inline-Stile, Klassen oder Makros.** Sie können jedoch Backticks verwenden, um Codebegriffe zu kennzeichnen (z.B. "Verwendung der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "Stoßüberschriften".** Dies sind Überschriften, denen sofort eine Unterüberschrift ohne erklärenden Text dazwischen folgt. Das sieht nicht gut aus und lässt Leser ohne erklärenden Text zu Beginn des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, beachten Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienterms Verwendung erlauben. Verwenden Sie möglichst Medien, die eine sehr liberale Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) oder mindestens eine Lizenz, die mit unserer allgemeinen Inhaltslizenz - [Creative Commons Lizenz Lizenz](https://creativecommons.org/licenses/by-sa/2.5/)- (CC-BY-SA) kompatibel ist.
- Für Bilder, führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und sorgen Sie dafür, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [eine beschreibende `alt`-Texterläuterung](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten durchgängig auf allen Seiten konsistent formatiert und strukturiert werden. Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat. Je nach Art der Liste, die Sie erstellen, sollten Sie Ihr Schreiben so anpassen, wie es in den folgenden Abschnitten beschrieben wird. In beiden Fällen schließen Sie einen vorbereitenden Satz ein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke prägnanter Informationen zu gruppieren. Jedes Element der Liste sollte eine ähnliche Satzstruktur befolgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten die Standard-Interpunktion beinhalten - Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des letzten Satzes des Elements, wie man es bei einem Absatz erwarten würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einfügen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Eine weitere Bedingung, mit einigen weiteren Erklärungen.

  Beachten Sie, wie sich dieselbe Satzstruktur von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel gibt jeder Aufzählungspunkt eine Bedingung gefolgt von einem Komma und einer kurzen Erklärung an und jedes Element endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Legt die Hintergrundfarbe fest
  > - EigenschaftB: Fügt Schatten zum Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Aber so weit wie möglich, folgen Sie derselben Struktur für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Anleitung zu enumerieren. Da Anleitungen komplex sein können, hat die Klarheit Priorität, besonders wenn der Text in jedem Listenelement lang ist. Wie bei Aufzählungslisten befolgen Sie die Standard-Interpunktionsnutzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz eröffnen, um die Anleitung einzuleiten. Es ist wichtig, dem Benutzer vor Beginn der Anweisungen einen Kontext zu bieten.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anleitung und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anleitung kann ziemlich ausführlich sein, daher ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nach Abschluss der Anweisungen folgt die nummerierte Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach der Fertigstellung.

  Das folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Schritte enthält, um eine nummerierte Liste mit dem korrekten Format zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig zu Instruktionszwecken oder um jemanden durch ein geordnetes Verfahren zu führen verwendet werden, stellen Sie sicher, dass Sie jedes Element fokussiert halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und auch Glossarseiten auf MDN Web Docs enthalten im Artikelende einen _Siehe auch_ Abschnitt. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel finden Sie hier den [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Präsentieren Sie die Links in einem Siehe auch Abschnitt im Allgemeinen im [Listenformat](#listen) mit jedem Eintrag als Phrase. Im Bereich [Learn web development](/de/docs/Learn_web_development) auf MDN folgt der Datei auch Abschnitt dem [Definitionsliste](< (/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um auf MDN Web Docs Konsistenz zu gewährleisten, beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verlinkt wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA Zustände und Eigenschaften" wird sein:
  - **Richtig**: [ARIA Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satz-Großschreibung im Linktext, selbst wenn es anders als der verlinkte Seiten- oder Abschnittstitel ist. Es kann sein, dass die in der Seite oder im Abschnitt verwendete Großschreibung falsch ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satz-Großschreibung wird sein:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Für externe Links ebenso, verwenden Sie die Satz-Großschreibung, auch wenn die Großschreibung auf der Zielartikel-Seite anders ist. Dies dient dazu, Konsistenz auf MDN Web Docs zu gewährleisten. Ausnahmen umfassen Büchernamen.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) der _Häufig verwendeten Makros_ Seite erläutert wird. Die Verwendung des Makros wird die Codeformatierung auf das Keyword im Linktext anwenden, wie im nächsten Beispiel gezeigt.
- Zu Beginn des Eintrags ist kein Artikel („Ein“, „Ein“, „Der“) erforderlich. Am Ende des Eintrags ist keine Zeichensetzung erforderlich, da es sich immer um einen Begriff oder eine Phrase handeln wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Das [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie eine Codeformatierung mit Backticks (\`) für Schlüsselwörter und Literale im Linktext hinzu, auch wenn die Formatierung nicht in Seiten- und Abschnittstiteln verwendet wird. Zum Beispiel für den Seitentitel "Array() Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibungstext

- Halten Sie den Beschreibungstext um den Link herum minimal. Bei einer Beschreibung fügen Sie diese nach dem Linktext und einem Doppelpunkt ein. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Halten Sie alle verlinkten Texte zu Beginn bereit, damit die Liste der Links leichter scanbar ist.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie das Bindewort „und“ nicht vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Bei externen Links geben Sie wann immer möglich die Quellwebsite und das Jahr der Veröffentlichung oder letzten Aktualisierung an. Das upfront bereitgestellte Datum der Veröffentlichung oder der letzten Aktualisierung hilft Lesern bei der Einschätzung der Relevanz des verlinkten Artikels und hilft auch MDN-Maintainern, Links zu Artikeln zu überprüfen, die seit langem nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Der folgende Eintrag ist ein Beispiel dafür, wie Sie einen Link [Top-level await](https://v8.dev/features/top-level-await) zu einem externen Artikel im Siehe auch Abschnitt, ebenso wie die Quelle und Jahresinformation, hinzufügen:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Sie können ein paar Beispiele dafür im Abschnitt [Weiterlesen](#language_grammar_and_spelling) unten sehen. Verzichten Sie darauf, Autorennamen für Blog-Posts oder GitHub-Repositories hinzuzufügen, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge von Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfaden- und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge soll hauptsächlich die Scanbarkeit der Punkte in der Liste erleichtern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links befolgen Sie die alphabetische oder einfache-zu-erweiterte Ordnung, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder einem Fachgebiet hinzufügen müssen, erfolgt dies typischerweise durch die Erstellung einer Einstiegsseite und das Hinzufügen von Unterseiten für jeden der einzelnen Artikel. Die Einstiegsseite sollte mit einem einleitenden Absatz oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten zusammen mit den Beschreibungen jeder Seite bereitstellen. Sie können die Einfügung von Seiten in die Liste mit einigen Makros, die wir erstellt haben, automatisieren.

Betrachten Sie zum Beispiel den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) - Hauptinhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren, da dies die Website verlangsamt und die Suche und Seitennavigation weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, das der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie die folgenden Richtlinien bei der Definition eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene hinzufügen, sollte die Komponente der neuen Ebene im Slug nur ein oder zwei Wörter lang sein.
- Slugs sollten ein Unterstrich für eine mehrwortige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Befolgen Sie die Satz-Großschreibung ebenfalls für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titles

Seitentitel werden in den Suchergebnissen verwendet und auch verwendet, um die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich von dem "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Stil der Großschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Großschreibung im Satzstil verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle der Groß- und Kleinschreibweise:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung von JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten nach und nach daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Behandeln Sie einfache Konzepte zuerst und dann kompliziertere und fortgeschrittene Konzepte. Behandeln Sie konzeptionelle Informationen zuerst und dann gehen Sie zu handlungsorientierten Themen über.

  Beachten Sie folgende Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Gehen Sie von oben nach unten**: Wie im [Überschriftenebenen](#überschriftenebenen)-Abschnitt angegeben, gehen Sie von der höheren `##` zu der niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie für breitere einleitende Titel höhere Ebenenüberschriften, und verwenden Sie spezifischere Titel, wenn Sie zu tiefer liegenden Ebenenüberschriften übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebeneüberschrift gruppiert sind. Betiteln der Titel verschiedener Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter in Texten und Inhaltsverzeichnissen zu erfassen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Verwenden Sie beispielsweise für einen Abschnitt zur Einführung von HTML-Elementen den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein einziges Ziel zu verfolgen - eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Aus diesem Grund versuchen Sie, so weit wie möglich, nicht das Bindewort "und" in einem Titel zu verwenden.
  - **Verwenden Sie parallele Konstruktionen**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Wenn zum Beispiel ein Titel auf der `###` Überschriftenebene Gerundien verwendet, d.h. Wörter die auf "-ing" enden, wie "Installieren", dann versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Ebene mit einem Imperativverb.
  - **Vermeiden Sie gemeinsame Begriffe in der unteren Überschriftsebene**: Wiederholen Sie den Text in der Titel einer höheren Überschrift nicht auf der unteren Ebene der Titel. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Nebensätzen" anstelle von "Kommas nach einleitenden Nebensätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit den Artikeln „a“, „an“ oder „the“ zu beginnen.
  - **Fügen Sie Einleitungstext hinzu**: Nach einem Titel, fügen Sie etwas Einleitungstext hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler in der englischen Verwendung](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Verwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Fragen-und-Antworten-Webseite für die Verwendung von englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlicher aber benutzerfreundlicher, evidenzbasierter Rat; sehr gut für nicht-muttersprachliche Sprecher, besonders für Präpositionsverwendung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
