---
title: Was wir dokumentieren
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

MDN Web Docs enthält _browserneutrale_ Dokumentation, die Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel erfahren Sie, ob ein bestimmtes Thema oder eine bestimmte Art von Inhalt auf MDN Web Docs aufgenommen werden sollte.

## Redaktionelle Richtlinien

Dieser Abschnitt beschreibt die Richtlinien, die das Mozilla-MDN-Team für Inhalte auf MDN Web Docs festgelegt hat. Von allen Mitwirkenden wird erwartet, dass sie diese Richtlinien einhalten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden auf der Website nicht akzeptiert. Das gilt auch für Inhalte, die ohne ausreichende Sorgfalt erstellt wurden, etwa generierte Texte, die bereits vorhandene Informationen wiederholen oder nicht auf Richtigkeit geprüft wurden. Mitwirkende, die wiederholt versuchen, solche Inhalte einzureichen, können nach Ermessen des Mozilla-MDN-Teams von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema relevant sind, werden im Einzelfall beurteilt. Ihr Nutzen für Webentwickler muss den kommerziellen Vorteil für die verlinkte Website überwiegen.

> [!NOTE]
> Im Bereich [Webentwicklung lernen](/de/docs/Learn_web_development) von MDN finden Sie Links zu kommerziellen Websites. Wir setzen diese jedoch sparsam ein und verlinken nur auf vertrauenswürdige Bildungspartner. Weitere Informationen finden Sie unter [Richtlinien für Lerninhalte > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) wahren und Unterschiede zwischen Browsern ohne redaktionelle Voreingenommenheit darstellen. Abwertende Kommentare über Browser oder User Agents sind nicht zulässig.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden, sollten sich auf dem Weg zur Standardisierung befinden und von mindestens einer Rendering-Engine implementiert sein. Unterschiede bei der Unterstützung durch Browser werden im Abschnitt zur [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

### Verantwortlichkeit

Sie sind für alle Inhalte verantwortlich, die Sie einreichen, einschließlich Vorschlägen und Entwürfen.
Jeder Beitrag muss vor dem Einreichen von einem Menschen geprüft werden, unabhängig davon, welche Werkzeuge bei seiner Erstellung verwendet wurden.

## Inhalte vorschlagen

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte vor dem Einreichen diese Seite, um sicherzustellen, dass Ihr Vorschlag geeignet ist.

Für neue Referenzseiten oder Leitfäden erstellen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose), in dem Sie möglichst genau erläutern, welche Inhalte Sie vorschlagen und warum.

Wenn Sie größere Projekte mit neuen Inhaltsbereichen vorschlagen möchten, lesen Sie bitte die Seite [Aufnahmekriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion). Dort wird auch das Antragsverfahren beschrieben.

## Themen, die auf MDN Web Docs gehören

Grundsätzlich dokumentieren wir auf MDN Web Docs offene Webtechnologien. Dazu gehören alle Funktionen, mit denen Webentwickler jetzt oder in naher Zukunft Websites und Anwendungen erstellen können.

Wenn eine Funktion von mehreren Browsern implementiert wurde und entweder als Standard anerkannt ist oder sich auf dem Weg zur Standardisierung befindet, dokumentieren wir sie auf jeden Fall. Ist eine Funktion noch stark experimentell, nicht in mehreren Browsern implementiert oder Änderungen unterworfen, kann sie ebenfalls aufgenommen werden. Ihre Dokumentation hat für das Redaktionsteam jedoch möglicherweise keine Priorität.

Mit anderen Worten: Webtechnologien, die auf MDN Web Docs dokumentiert werden, sollten alle folgenden Kriterien erfüllen:

- Sie befinden sich auf dem Weg zur Standardisierung.
- Sie sind in einer von einer zuverlässigen Standardisierungsorganisation veröffentlichten Spezifikation beschrieben.
- Sie sind von mindestens einer Rendering-Engine implementiert.
- Sie wurden in einer stabilen Browserversion veröffentlicht.

Unser Schwerpunkt liegt auf den folgenden Frontend-Webtechnologien:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web-APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige übergreifende Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Darüber hinaus bieten wir ausführliche [Lernleitfäden](/de/docs/Learn_web_development) zu diesen Technologien sowie ein [Glossar](/de/docs/Glossary).

> [!NOTE]
> Backend-Technologien verfügen in der Regel über eigene Dokumentationen, die MDN Web Docs nicht ersetzen soll. Es gibt jedoch [einige Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side).

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Von Mitwirkenden wird erwartet, dass sie diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) zu Schreibstil, Codebeispielen und weiteren Themen befolgen.

Weitere Einzelheiten dazu, anhand welcher Kriterien eine Technologie auf MDN Web Docs dokumentiert werden kann, finden Sie auf der Seite [Aufnahmekriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf MDN Web Docs prüfen wir fortlaufend, welche neuen Webstandardtechnologien wir dokumentieren sollten.
Dabei versuchen wir, die Dokumentation früh genug zu veröffentlichen, damit Entwickler neue Funktionen kennenlernen können, sobald sie sie benötigen. Gleichzeitig sollte die Technologie bereits ausgereift und stabil genug sein, damit die Dokumentation nicht ständig aktualisiert oder rasch wieder entfernt werden muss.

Grundsätzlich gilt für uns als frühestmöglicher Zeitpunkt für die Dokumentation einer neuen Technologie: _Die Funktion befindet sich auf dem Weg zur Standardisierung und ist bereits irgendwo implementiert._

Wir ziehen die Dokumentation einer neuen Technologie in Betracht, wenn sie:

- in einem Spezifikationsdokument einer zuverlässigen Standardisierungsorganisation (wie W3C, WHATWG, Khronos oder IETF) beschrieben ist und einen angemessenen Grad an Stabilität erreicht hat (zum Beispiel als W3C-Arbeitsentwurf oder Empfehlungskandidat, oder wenn die Spezifikation angesichts der zu ihr gemeldeten Issues recht stabil erscheint), und
- in mindestens einem Browser konsistent implementiert ist und Entwickler anderer Browser Interesse erkennen lassen (etwa durch ein aktives Ticket oder einen laufenden „Intent to Implement“-Prozess).

Wir dokumentieren eine neue Technologie nicht, wenn:

- es keine Spezifikation dafür gibt oder die Spezifikation nur eine grobe Notiz ist, die sich wahrscheinlich noch ändern wird,
- sie derzeit in höchstens einem Browser implementiert ist und die Entwickler anderer Browser kein Interesse an einer Implementierung erkennen lassen. Dies können Sie einschätzen, indem Sie die Entwickler dieser Browser fragen und Bugtracker sowie Mailinglisten der Browser prüfen,
- sie für das Web nicht zugänglich und/oder vollständig proprietär ist oder
- sich bereits abzeichnet, dass sie veraltet sein oder durch eine ähnliche Funktion ersetzt werden wird.

## Themen, die nicht auf MDN Web Docs gehören

Grundsätzlich gehören Inhalte, die keine offenen Webstandards behandeln, nicht auf MDN Web Docs. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden auf der Website nicht akzeptiert. Mitwirkende, die wiederholt versuchen, Spam einzureichen, können nach Ermessen des Mozilla-MDN-Teams von MDN ausgeschlossen werden.

Beispiele für ungeeignete Themen auf MDN Web Docs sind:

- Technologien, die für das Web nicht zugänglich und browserspezifisch sind.
- Technologien ohne Bezug zum Web.
- Dokumentation für Endnutzer. Dokumentation dieser Art zu Mozilla-Produkten gehört beispielsweise auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Externe Links, die der Eigenwerbung dienen oder auf eigene Inhalte verweisen. Lesen Sie vor dem Hinzufügen eines externen Links die entsprechenden Richtlinien in unserem [Schreibstilleitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links).

### Wann wir Dokumentation entfernen

Seiten werden aus MDN Web Docs gelöscht, wenn sie keine nützlichen Informationen mehr enthalten, stark veraltet sind und/oder so fehlerhaft sein könnten, dass ihr Verbleib irreführend wäre.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten oder Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht browserübergreifend implementiert und später zurückgezogen wurden (üblicherweise experimentelle Funktionen, etwa solche mit Präfixen).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel behandeln Techniken, die sich später als schlechte Praxis erwiesen haben und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ hochwertigere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs ungeeignet sind.
- Bereiche von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und verursachen einen hohen Pflegeaufwand.

Weitere Informationen dazu, _wie_ Sie einzelne Dokumente löschen, finden Sie im Leitfaden [Seiten erstellen, verschieben und löschen](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). Wenn Sie einen ganzen Inhaltsbereich löschen möchten, lesen Sie den Leitfaden [Inhalte ausmustern](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content).

## Arten von Dokumenten auf MDN Web Docs

Unsere Dokumentation lässt sich im Allgemeinen in die folgenden Kategorien einteilen:

- Referenz
- Leitfaden
- Glossar
- Lerninhalte und Tutorials

MDN Web Docs dient grundsätzlich der _Produktdokumentation_, nicht der _Projekt-_ oder _Prozessdokumentation_. Wenn ein Dokument also beschreibt, „wie man etwas verwendet“ oder „wie etwas funktioniert“ – wobei dieses „Etwas“ zu einer der oben genannten Themenkategorien gehört –, kann es auf MDN Web Docs veröffentlicht werden.

Wenn ein Dokument dagegen beschreibt, „wer an der Entwicklung von etwas arbeitet“ oder „welche Pläne für die Entwicklung von etwas bestehen“, gehört es nicht auf MDN Web Docs.

Hier sind einige Beispiele für Dokumentarten, die _nicht_ auf MDN Web Docs veröffentlicht werden sollten:

- Planungsdokumente
- Designdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Anzeigen oder persönliche Informationen
