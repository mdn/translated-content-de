---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

MDN Web Docs enthält browserneutrale Dokumentation, die es Webentwicklern ermöglicht, browserunabhängigen Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine Art von Inhalt in MDN Web Docs aufgenommen werden sollte oder nicht.

## Redaktionsrichtlinien

Dieser Abschnitt beschreibt die von den Mozilla MDN-Mitarbeitern festgelegten Richtlinien zur Verwaltung der Inhalte auf MDN Web Docs. Alle Mitwirkenden an MDN Web Docs werden erwartet, sich an diese Richtlinien zu halten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen relevant für den Technologiebereich sein, in dem sie erscheinen. Spam (kommerzielles Werbematerial) und andere irrelevante Inhalte werden niemals auf der Seite akzeptiert. Mitwirkende, die wiederholt versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema, von dem aus sie verlinkt sind, relevant sind, werden von Fall zu Fall beurteilt. Ihr Wert zur Unterstützung von Webentwicklern muss den kommerziellen Nutzen für die verlinkte Seite überwiegen.

> [!NOTE]
> Sie werden Links zu kommerziellen Websites im MDN-Bereich [Webentwicklung lernen](/de/docs/Learn_web_development) sehen, aber diese werden sparsam verwendet, und wir verlinken nur zu vertrauenswürdigen Bildungspartnern. Sie können mehr darüber lesen unter [Richtlinien für das Schreiben über Webentwicklung > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und über Unterschiede zwischen Browsern ohne redaktionelle Voreingenommenheit berichten. Abfällige Bemerkungen über einen Browser oder Benutzeragenten sind inakzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungspfad befinden und müssen von mindestens einer Rendering-Engine implementiert sein. Unterschiede in der Browser-Unterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Inhalte vorschlagen

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie Beiträge einreichen, um sicherzustellen, dass das, was Sie vorschlagen, angemessen ist.

Für neue Referenzseiten oder Leitfäden erstellen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose), in dem Sie die vorgeschlagenen Inhalte und deren Gründe darlegen (bitte so präzise wie möglich).

Für Vorschläge zu größeren Projekten, die neue Inhaltsabschnitte beinhalten, beachten Sie bitte die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen, wenn es eine offene Webtechnologie ist, dokumentieren wir sie auf MDN Web Docs. Dies umfasst alle Funktionen, die Webentwickler verwenden können, um Websites und Anwendungen jetzt und in naher Zukunft zu erstellen.

Wenn eine Funktion von mehreren Browsern implementiert wird und entweder als Standard akzeptiert oder auf dem Weg zur Standardisierung ist, dann dokumentieren wir sie definitiv hier. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert und/oder anfällig für Änderungen ist, dann ist sie immer noch geeignet, aufgenommen zu werden, könnte jedoch nicht als Priorität für das Schreibteam angesehen werden.

Anders ausgedrückt, Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten alle folgenden Kriterien erfüllen:

- Auf einem Standardisierungspfad sein.
- In einer Spezifikation festgelegt sein, die von einer zuverlässigen Standardisierungsorganisation veröffentlicht wurde.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt auf den folgenden Frontend-Webtechnologien:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Außerdem bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien und ein [Glossar](/de/docs/Glossary).

> [!NOTE]
> Back-End-Technologien haben in der Regel ihre eigene Dokumentation anderswo, die MDN Web Docs nicht zu übertreffen versucht, obwohl wir [einige Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen relevant für den Technologiebereich sein, in dem sie erscheinen. Mitwirkende sollen diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen befolgen.

Weitere Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann oder nicht, finden Sie auf der Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Wenn wir eine neue Technologie dokumentieren

Bei MDN Web Docs sind wir ständig bemüht, neue Webstandard-Technologien zu dokumentieren, wenn dies angebracht ist. Wir versuchen, eine Balance zu finden zwischen dem frühzeitigen Veröffentlichen der Dokumentation, damit Entwickler neue Funktionen kennenlernen können, sobald sie diese benötigen, und der späten Veröffentlichung, damit die Technologie ausgereift und stabil ist und die Dokumentation nicht ständige Aktualisierungen oder rasche Entfernung benötigt.

Im Allgemeinen definieren wir den frühesten Zeitpunkt, zu dem wir in Betracht ziehen, eine neue Technologie zu dokumentieren, so: _Wenn die Funktion sich auf einem Standardisierungspfad befindet und irgendwo implementiert ist._

Wir ziehen die Dokumentation einer neuen Technologie in Betracht, wenn sie:

- In einem Spezifikationsdokument festgelegt ist, das unter einer zuverlässigen Normenorganisation (wie W3C, WHATWG, Khronos, IETF, etc.) veröffentlicht wurde und ein angemessenes Maß an Stabilität erreicht hat (z. B. ein W3C-Arbeitsentwurf oder eine Kandidatenempfehlung oder wenn die Spezifikation ziemlich stabil aussieht gemessen an der Flut der eingereichten Issues) und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browserentwickler Interesse zeigen (z. B. ein aktives Ticket oder ein "Absicht zur Implementierung"-Prozess in Kraft ist).

Wir dokumentieren keine neue Technologie, wenn:

- Sie keine Spezifikation hat oder die Spezifikation eine grobe Notiz ist, die anfällig für Änderungen ist,
- Ein oder kein Browser sie derzeit implementiert hat und nicht unterstützende Browser kein Interesse an der Implementierung zeigen. Sie können dies einschätzen, indem Sie Ingenieure befragen, die an diesen Browsern arbeiten, und die Fehlerverfolgungs- und Mailinglisten der Browser prüfen,
- Sie keine weboffene Technologie ist und/oder völlig proprietär ist, oder
- Sie bereits Anzeichen dafür zeigt, dass sie veraltet oder durch eine ähnliche Funktion ersetzt wird.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (kommerzielles Werbematerial) und andere irrelevante Inhalte werden niemals auf der Seite akzeptiert. Mitwirkende, die wiederholt versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für MDN Web Docs sind:

- Technologien, die nicht dem Web ausgesetzt sind und spezifisch für einen Browser sind.
- Technologien, die nicht mit dem Web zu tun haben.
- Dokumentation für Endanwender. Für Mozilla-Produkte gehört eine solche Dokumentation zum Beispiel auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkende oder selbstwerbende externe Links. Überprüfen Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden aus MDN Web Docs gelöscht, wenn sie keine nützlichen Informationen mehr enthalten, veraltet genug sind und/oder möglicherweise falsch sind, sodass das Beibehalten irreführend sein könnte.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte möglicherweise gelöscht werden:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (normalerweise experimentelle Funktionen wie präfixierte Funktionalität).
- Referenzseiten beschreiben Funktionen, die vor ihrer Implementierung in einem Browser aus der Spezifikation entfernt wurden.
- Artikel behandeln Techniken, die später als schlechte Praktiken erwiesen und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unangemessen sind.
- Bereiche von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und sind eine Wartungsbelastung.

Weitere Informationen dazu, _wie_ Dokumente gelöscht werden, finden Sie im [Leitfaden zu Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Dokumenttypen, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen ist MDN Web Docs für _Produkt_dokumentationen, nicht für \_Projekt_- oder \_Prozess_dokumentationen. Wenn das Dokument also davon handelt, "wie man eine Sache benutzt" oder "wie eine Sache funktioniert" (wobei die "Sache" in einer der oben genannten Themenkategorien ist), dann kann es auf MDN Web Docs.

Wenn ein Dokument davon handelt, "wer an der Entwicklung einer Sache arbeitet" oder "Pläne zur Entwicklung einer Sache", dann sollte es nicht auf MDN Web Docs.

Hier sind einige Beispiele für Dokumenttypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
