---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

MDN Web Docs enthält _browserneutrale_ Dokumentationen, die es Webentwicklern ermöglichen, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine Art von Inhalt in die MDN Web Docs aufgenommen werden sollte.

## Redaktionelle Richtlinien

Dieser Abschnitt beschreibt die von den Mozilla MDN-Mitarbeitern festgelegten Richtlinien für die Inhalte auf MDN Web Docs. Alle Mitwirkenden an MDN Web Docs sind verpflichtet, diese Richtlinien einzuhalten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen relevant für den Technologiebereich sein, in dem sie erscheinen. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla MDN-Personals von MDN ausgeschlossen werden.

Externe Links zu kommerziellen Websites, die thematisch relevant sind, werden von Fall zu Fall geprüft. Ihr Nutzen für Webentwickler muss den kommerziellen Vorteil der verlinkten Seite überwiegen.

> [!NOTE]
> Sie werden Links zu kommerziellen Websites im Abschnitt MDN [Webentwicklung lernen](/de/docs/Learn_web_development) sehen, aber diese werden sparsam verwendet, und wir verlinken nur zu vertrauenswürdigen Bildungspartnern. Weitere Informationen hierzu finden Sie in den [Richtlinien für das Schreiben von Lerninhalten > Externe Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

### Neutralität

Artikel in MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und über Browservariationen ohne redaktionelle Voreingenommenheit berichten. Herabsetzende Kommentare zu irgendeinem Browser oder Benutzeragenten sind inakzeptabel.

### Standardisierung

Webtechnologien, die in MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungsweg befinden und müssen von mindestens einem Render-Engine implementiert sein. Abweichungen in der Browserunterstützung werden im Abschnitt zur [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschläge für Inhalte

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie Ihren Vorschlag einreichen, um sicherzustellen, dass das, was Sie vorschlagen, geeignet ist.

Für neue Referenzseiten oder Leitfäden öffnen Sie bitte ein [neues Thema](https://github.com/mdn/mdn/issues/new/choose) und skizzieren, welchen Inhalt Sie vorschlagen und warum (bitte so explizit wie möglich).

Um größere Projekte vorzuschlagen, die neue Inhaltsbereiche umfassen, beachten Sie bitte die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen dokumentieren wir eine offene Webtechnologie, wenn sie das Erstellen von Websites und Anwendungen durch Webentwickler ermöglicht, jetzt und in naher Zukunft.

Wenn eine Funktion von mehreren Browsern implementiert und entweder als Standard akzeptiert ist oder sich zur Standardisierung hin bewegt, dann dokumentieren wir sie definitiv. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert ist und/oder Änderungsanfällig ist, ist sie dennoch für die Aufnahme geeignet, wird aber möglicherweise nicht als Priorität für das Schreibteam angesehen.

Mit anderen Worten, Webtechnologien, die in MDN Web Docs dokumentiert werden sollen, müssen folgende Kriterien erfüllen:

- Sie befinden sich auf einem Standardisierungsweg.
- Werden in einer Spezifikation beschrieben, die von einem zuverlässigen Standardisierungsorgan veröffentlicht wurde.
- Werden von mindestens einem Render-Engine implementiert.
- Werden in einer stabilen Browserversion veröffentlicht.

Unser Hauptfokus liegt auf folgenden Frontend-Webtechnologien:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Darüber hinaus bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien und auch ein [Glossar](/de/docs/Glossary).

> [!NOTE]
> Backend-Technologien haben normalerweise ihre eigene Dokumentation anderswo, die MDN Web Docs nicht zu übertreffen versucht, obwohl wir [einige Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen relevant für den Technologiebereich sein, in dem sie erscheinen. Von den Mitwirkenden wird erwartet, dass sie diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstile, Codebeispiele und andere Themen befolgen.

Für weitere Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Bei den MDN Web Docs suchen wir ständig nach neuen Webstandardtechnologien, die es zu dokumentieren gilt.
Wir versuchen, ein Gleichgewicht zu finden zwischen der frühzeitigen Veröffentlichung der Dokumentation, sodass Entwickler neue Funktionen kennenlernen können, sobald sie sie benötigen, und einer Veröffentlichung, die spät genug erfolgt, sodass die Technologie ausgereift und stabil ist und die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen ist unsere Definition des frühesten Zeitpunkts, zu dem wir das Dokumentieren einer neuen Technologie in Betracht ziehen: _Wenn die Funktion auf einem Standardisierungspfad ist und irgendwo implementiert wurde._

Wir überlegen, eine neue Technologie zu dokumentieren, wenn sie:

- In einem Spezifikationsdokument beschrieben wird, das von einer seriösen Standardisierungsorganisation (wie W3C, WHATWG, Khronos, IETF usw.) veröffentlicht wurde und ein angemessenes Stabilitätsniveau erreicht hat (z. B. ein W3C-Arbeitsentwurf oder Vorschlag zur Empfehlung, oder wenn die Spezifikation in Anbetracht des Flusses eingereichter Probleme relativ stabil erscheint) und
- Konsistent in mindestens einem Browser implementiert ist, mit Anzeichen des Interesses anderer Browserentwickler (wie z. B. ein aktives Ticket oder ein Prozess des "Absicht zur Implementierung" in Kraft ist).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Sie keine Spezifikation hat oder die Spezifikation eine grobe Notiz ist, die sich ändern könnte,
- Ein oder kein Browser hat sie aktuell implementiert und nicht unterstützende Browser zeigen keine Anzeichen von Interesse an einer Implementierung. Dies können Sie einschätzen, indem Sie Ingenieure fragen, die an diesen Browsern arbeiten, und indem Sie die Fehlerverfolgungstools und Mailinglisten der Browser prüfen usw.,
- Sie keine web-exponierte Technologie ist und/oder vollständig proprietär ist oder
- Sie bereits Anzeichen zeigt, dass sie veraltet oder durch eine ähnliche Funktion ersetzt werden könnte.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla MDN-Personals von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für MDN Web Docs sind:

- Technologien, die nicht im Web exponiert sind und spezifisch für einen Browser sind.
- Technologien, die nicht mit dem Web in Verbindung stehen.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte zum Beispiel gehört eine solche Dokumentation auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Überprüfen Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentationen entfernen

Seiten werden aus MDN Web Docs gelöscht, wenn sie keine Informationen mehr enthalten, die auf irgendeine Weise nützlich sind, ausreichend veraltet sind und/oder möglicherweise so unzutreffend sind, dass es irreführend sein könnte, sie zu behalten.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen zu Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (üblicherweise experimentelle Funktionen wie Präfixfunktionen).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel decken Techniken ab, die sich später als schlechte Praktiken erwiesen haben und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unangemessen sind.
- Abschnitte von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und sind eine Wartungslast.

Für weitere Informationen darüber, _wie_ Sie Dokumente löschen können, sehen Sie sich bitte die [Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Anleitung an.

## Arten von Dokumenten, die in MDN Web Docs erlaubt sind

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen ist MDN Web Docs für _Produktdokumentation_ und nicht für _Projekt_ oder _Prozessdokumentation_. Wenn das Dokument also über "wie man etwas verwendet" oder "wie etwas funktioniert" (wobei das "etwas" in einer der oben genannten thematischen Kategorien liegt), dann kann es auf MDN Web Docs erscheinen.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung eines Dings arbeitet" oder "Pläne zur Entwicklung eines Dings", dann sollte es nicht auf MDN Web Docs erscheinen.

Hier sind einige Beispiele für Dokumentarten, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungspapiere
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
