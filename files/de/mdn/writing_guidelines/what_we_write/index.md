---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

MDN Web Docs enthält _browserneutrale_ Dokumentation, die es Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine bestimmte Art von Inhalt auf den MDN Web Docs enthalten sein sollte.

## Redaktionsrichtlinien

In diesem Abschnitt werden die von den Mozilla MDN-Mitarbeitern festgelegten Richtlinien beschrieben, die den Inhalt auf den MDN Web Docs regeln. Alle Mitwirkenden an den MDN Web Docs müssen diese Richtlinien einhalten.

### Relevanz

Alle Inhalte auf den MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden auf der Website niemals akzeptiert. Mitwirkende, die immer wieder versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Seiten, die für das Thema, von dem sie verlinkt werden, relevant sind, werden von Fall zu Fall bewertet. Ihr Wert bei der Unterstützung von Webentwicklern muss den kommerziellen Vorteil für die verlinkte Seite überwiegen.

### Neutralität

Artikel auf den MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) wahren und ohne redaktionelle Voreingenommenheit über Browserunterschiede berichten. Abfällige Kommentare über einen Browser oder Benutzeragenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf den MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungspfad befinden und müssen von mindestens einer Rendering-Engine implementiert sein. Unterschiede in der Browserunterstützung werden im Abschnitt über die [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschlagen von Inhalten

Wenn Sie Inhalte für die MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie einen Vorschlag einreichen, um sicherzustellen, dass das, was Sie vorschlagen, angemessen ist.

Für neue Referenzseiten oder Leitfäden öffnen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose), in dem Sie darlegen, welche Inhalte Sie vorschlagen und warum (bitte seien Sie so ausdrücklich wie möglich).

Für Vorschläge zu größeren Projekten, die neue Inhaltsabschnitte beinhalten, beachten Sie bitte die Seite zu den [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die auf die MDN Web Docs gehören

Im Allgemeinen dokumentieren wir auf den MDN Web Docs Open-Web-Technologien. Dazu gehört jede Funktion, die von Webentwicklern zum Erstellen von Websites und Anwendungen jetzt und in naher Zukunft genutzt werden kann.

Wenn eine Funktion von mehreren Browsern implementiert und entweder als Standard akzeptiert oder zur Standardisierung vorangetrieben wird, dann dokumentieren wir sie auf jeden Fall hier. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert und/oder Änderungen unterworfen ist, kann sie immer noch für die Aufnahme geeignet sein, wird aber möglicherweise nicht als Priorität für das Redaktionsteam angesehen.

Mit anderen Worten sollten Webtechnologien, die auf den MDN Web Docs dokumentiert werden, alle folgenden Kriterien erfüllen:

- Auf einem Standardisierungspfad sein.
- In einer Spezifikation einer zuverlässigen Standardisierungsorganisation spezifiziert sein.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt darauf, über die folgenden Front-End-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen, wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn/Accessibility). Darüber hinaus bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn) für diese Technologien und auch ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Back-End-Technologien haben normalerweise ihre eigene Dokumentation an anderer Stelle, die von den MDN Web Docs nicht ersetzt werden soll, obwohl wir [einige Ausnahmen](/de/docs/Learn/Server-side) haben.

Alle Inhalte auf den MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Die Mitwirkenden werden erwartet, diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen zu befolgen.

Für weitere Details über die Kriterien, ob eine Technologie auf den MDN Web Docs dokumentiert werden kann, lesen Sie die Seite zu den [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf den MDN Web Docs sind wir ständig bestrebt, neue Webstandardtechnologien zu dokumentieren, sofern angemessen. Wir versuchen, einen Ausgleich zu finden zwischen der Bereitstellung der Dokumentation früh genug, damit Entwickler über neue Funktionen lernen können, sobald sie sie benötigen, und der Bereitstellung spät genug, damit die Technologie ausgereift und stabil ist, sodass die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen besteht unsere Definition des frühesten Zeitpunkts, wann wir in Erwägung ziehen, eine neue Technologie zu dokumentieren, darin: _Wenn die Funktion auf einem Standardisierungspfad ist und irgendwo implementiert wird._

Wir erwägen die Dokumentation einer neuen Technologie, wenn sie:

- In einem Spezifikationsdokument spezifiziert ist, das unter einer verlässlichen Standardisierungsorganisation (wie W3C, WHATWG, Khronos, IETF, etc.) veröffentlicht wurde und ein angemessenes Stabilitätsniveau erreicht hat (z.B. ein W3C-Arbeitsentwurf oder ein Kandidatenempfehlung oder wenn die Spezifikation stabil aussieht, gemessen an den eingereichten Issues), und
- Konsistent in mindestens einem Browser implementiert wurde, wobei andere Browserentwickler Anzeichen von Interesse zeigen (wie ein aktives Ticket oder ein "Implementierungsabsicht"-Prozess in Kraft ist).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Sie keine Spezifikation hat oder die Spezifikation ein grober Entwurf ist, der zu Änderungen neigt,
- Ein oder null Browser sie derzeit implementiert haben und Browser, die sie nicht unterstützen, keine Anzeichen von Interesse an der Implementierung zeigen. Dies kann man abschätzen, indem man Ingenieure fragt, die an diesen Browsern arbeiten, und indem man Browser-Bug-Tracker und Mailinglisten betrachtet, etc.,
- Es sich um keine webexponierte Technologie handelt und/oder sie komplett proprietär ist, oder
- Sie bereits Anzeichen dafür zeigt, dass sie veraltet ist oder durch eine ähnliche Funktion ersetzt wird.

## Themen, die nicht auf die MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein Open-Web-Standard ist, nicht auf die MDN Web Docs. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die immer wieder versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für die MDN Web Docs sind:

- Technologie, die nicht im Web exponiert wird und/oder spezifisch für einen Browser ist.
- Technologie, die nicht mit dem Web zusammenhängt.
- Dokumentation für Endnutzer. Für Mozilla-Produkte gehört eine solche Dokumentation beispielsweise auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkende oder selbstpromovierende externe Links. Überprüfen Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden von den MDN Web Docs gelöscht, wenn sie keine nützlichen Informationen mehr enthalten, ausreichend veraltet sind und/oder so ungenau sein könnten, dass es irreführend wäre, sie weiterhin zu veröffentlichen.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (normalerweise experimentelle Funktionen wie prefixed Funktionalität).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel decken Techniken ab, die später als schlechte Praktiken erwiesen und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für die MDN Web Docs unangemessen sind.
- Bereiche der MDN Web Docs konzentrieren sich nicht auf Open-Web-Technologien und sind eine Wartungslast.

Für weitere Informationen darüber, _wie_ Dokumente gelöscht werden, lesen Sie bitte den [Leitfaden zum Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Dokumenttypen, die auf den MDN Web Docs erlaubt sind

Im Allgemeinen fällt unsere Dokumentation in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind die MDN Web Docs für _Produkt_-Dokumentation gedacht, nicht für _Projekt_- oder _Prozess_-Dokumentation. Wenn das Dokument also darüber ist, "wie man ein Ding benutzt" oder "wie ein Ding funktioniert" (wobei das "Ding" in einer der oben genannten Themenkategorien liegt), dann kann es auf den MDN Web Docs platziert werden.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung eines Dings arbeitet" oder "Pläne für die Entwicklung eines Dings", dann sollte es nicht auf den MDN Web Docs platziert werden.

Hier sind einige Beispiele für Dokumenttypen, die _nicht_ auf den MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerialien, Werbung oder persönliche Informationen
