---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

MDN Web Docs enthält _browserneutrale_ Dokumentation, die es Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder ein bestimmter Inhalt auf MDN Web Docs enthalten sein sollte.

## Redaktionsrichtlinien

Dieser Abschnitt beschreibt die von den Mozilla MDN-Mitarbeitern festgelegten Richtlinien zur Steuerung der Inhalte auf MDN Web Docs. Alle Beiträger zu MDN Web Docs müssen sich an diese Richtlinien halten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzielles Werbematerial) und andere für die Seite irrelevante Inhalte werden niemals akzeptiert. Beitragende, die wiederholt versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Seiten, die für das Thema, von dem aus sie verlinkt sind, relevant sind, werden fallweise beurteilt. Ihr Wert zur Unterstützung von Webentwicklern muss den kommerziellen Nutzen für die verlinkte Seite überwiegen.

> [!NOTE]
> Sie werden Links zu kommerziellen Websites im MDN [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) Abschnitt sehen, diese werden jedoch sparsam verwendet, und wir verlinken nur zu vertrauenswürdigen Bildungspartnern. Sie können mehr darüber im Abschnitt [Richtlinien zur Erstellung von Lerninhalten > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) lesen.

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und über Browserunterschiede ohne redaktionelle Voreingenommenheit berichten. Abfällige Kommentare über Browser oder User Agents sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten auf einem Standardisierungspfad sein und müssen von mindestens einer Rendering-Engine implementiert sein. Unterschiede in der Browserunterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschlagen von Inhalten

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, stellen Sie bitte sicher, dass Sie diese Seite lesen, bevor Sie etwas einreichen, um sicherzustellen, dass das, was Sie vorschlagen, geeignet ist.

Für neue Referenzseiten oder Leitfäden eröffnen Sie bitte ein [neues Problem](https://github.com/mdn/mdn/issues/new/choose) und skizzieren Sie, welche Inhalte Sie vorschlagen und warum (bitte so genau wie möglich).

Für die Vorschläge größerer Projekte, die neue Inhaltsbereiche beinhalten, beziehen Sie sich bitte auf die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen dokumentieren wir es auf MDN Web Docs, wenn es sich um eine offene Webtechnologie handelt. Dies schließt alle Funktionen ein, die von Webentwicklern zur Erstellung von Websites und Anwendungen jetzt und in naher Zukunft verwendet werden können.

Wenn eine Funktion von mehreren Browsern implementiert wurde und entweder als Standard akzeptiert oder auf dem Weg zur Standardisierung ist, dann dokumentieren wir sie hier definitiv. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert wird und/oder Änderungsanfälligkeit besteht, ist sie immer noch geeignet, aufgenommen zu werden, aber sie wird möglicherweise nicht als Priorität für das Schreibteam angesehen, um daran zu arbeiten.

Mit anderen Worten, Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten alle folgenden Kriterien erfüllen:

- Auf einem Standardisierungspfad sein.
- In einer Spezifikation veröffentlicht sein, die von einem zuverlässigen Standardisierungsgremium herausgegeben wird.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptfokus liegt darauf, über folgende Webtechnologien für die Frontend-Entwicklung zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen, wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Zusätzlich bieten wir umfassende [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien und auch ein [Glossar](/de/docs/Glossary).

> [!NOTE]
> Backend-Technologien haben normalerweise ihre eigene Dokumentation an anderer Stelle, die MDN Web Docs nicht zu übertreffen versucht, obwohl wir [einige Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Beitragende werden erwartet, diesen [MDN-Erstellungsrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen zu folgen.

Weitere Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann, finden Sie auf der Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf MDN Web Docs suchen wir ständig nach Möglichkeiten, neue Webstandard-Technologien zu dokumentieren, wenn es angemessen ist.
Wir bemühen uns, ein Gleichgewicht zwischen der Veröffentlichung der Dokumentation so früh wie möglich, damit Entwickler über neue Funktionen so bald wie nötig lernen können, und so spät wie möglich, damit die Technologie ausgereift und stabil ist, sodass die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen definieren wir den frühesten Zeitpunkt, zu dem wir in Betracht ziehen, eine neue Technologie zu dokumentieren: _Wenn die Funktion auf einem Standardisierungspfad ist und irgendwo implementiert wird._

Wir ziehen in Betracht, eine neue Technologie zu dokumentieren, wenn sie:

- In einem Spezifikationsdokument unter einer zuverlässigen Standardisierungsorganisation (wie W3C, WHATWG, Khronos, IETF usw.) spezifiziert und ein gewisses Maß an Stabilität erreicht hat (z. B. ein W3C-Arbeitsentwurf oder Kandidatenempfehlung oder wenn die Spezifikation stabil aussieht, beurteilt anhand der eingereichten Flut von Problemen), und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browser-Entwickler Interesse zeigen (wie etwa ein aktives Ticket oder ein „Absicht zu implementieren“-Prozess in Kraft ist).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Es keine Spezifikation gibt oder die Spezifikation ein grober Entwurf ist, der änderungsanfällig aussieht,
- Ein oder kein Browser sie derzeit implementiert hat und andere Browser kein Interesse daran zeigen, sie zu implementieren. Sie können dies beurteilen, indem Sie Ingenieure fragen, die an diesen Browsern arbeiten, und indem Sie Browser-Fehlerverfolgungen und Mailinglisten ansehen usw.,
- Sie ist keine weboffene Technologie und/oder vollständig proprietär, oder
- Sie bereits Anzeichen dafür zeigt, dass sie veraltet wird oder durch eine ähnliche Funktion ersetzt wird.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (kommerzielles Werbematerial) und andere irrelevante Inhalte werden niemals auf der Seite akzeptiert. Beitragende, die wiederholt versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Beispiele für ungeeignete Themen für MDN Web Docs sind:

- Technologie, die nicht dem Web zugänglich ist und browserspezifisch ist.
- Technologie, die nicht mit dem Web zusammenhängt.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte beispielsweise gehört eine solche Dokumentation auf die [Mozilla Support-Site](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Konsultieren Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentationen entfernen

Seiten werden von MDN Web Docs entfernt, wenn sie keine in irgendeiner Weise nützlichen Informationen mehr enthalten, so veraltet sind und/oder so fehlerhaft sein können, dass ihr Verbleib irreführend sein könnte.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte möglicherweise gelöscht werden:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (normalerweise experimentelle Funktionen wie vorgefixte Funktionalitäten).
- Referenzseiten beschreiben Funktionen, die vor ihrer Implementierung in einem Browser aus der Spezifikation entfernt wurden.
- Artikel decken Techniken ab, die sich später als schlechte Praktiken herausstellten und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs ungeeignet sind.
- Abschnitte von MDN Web Docs sind nicht auf offene Webtechnologien fokussiert und stellen eine Wartungsbelastung dar.

Weitere Informationen dazu, _wie_ Sie einzelne Dokumente löschen, finden Sie im [Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden. Wenn Sie einen gesamten Inhaltsabschnitt löschen möchten, konsultieren Sie den [Inhalte einstellen](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content) Leitfaden.

## Arten von Dokumenten, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fällt unsere Dokumentation in folgende Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen ist MDN Web Docs für _Produkt_-Dokumentation, nicht für _Projekt_- oder _Prozess_-Dokumentation gedacht. Wenn das Dokument also darüber informiert, "wie man eine Sache benutzt" oder "wie eine Sache funktioniert" (wobei die "Sache" in einer der oben erwähnten Themenkategorien ist), dann kann es auf MDN Web Docs erscheinen.

Wenn ein Dokument darüber informiert, "wer an der Entwicklung einer Sache arbeitet" oder "Pläne für die Entwicklung einer Sache", dann sollte es nicht auf MDN Web Docs erscheinen.

Hier sind einige Beispiele für Dokumententypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Designdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbe-, kommerzielle oder persönliche Informationen
