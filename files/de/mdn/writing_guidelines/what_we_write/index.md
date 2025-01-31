---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN Web Docs enthält _browserneutrale_ Dokumentation, die es Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine bestimmte Art von Inhalten in MDN Web Docs aufgenommen werden sollte oder nicht.

## Redaktionelle Richtlinien

Dieser Abschnitt beschreibt die von den Mitarbeitern von Mozilla MDN festgelegten Richtlinien, die die Inhalte auf MDN Web Docs regeln. Alle Mitwirkenden an MDN Web Docs sind verpflichtet, diese Richtlinien einzuhalten.

### Relevanz

Alle Inhalte in MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen der Mitarbeiter von Mozilla MDN von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema, von dem aus sie verlinkt sind, relevant sind, werden von Fall zu Fall beurteilt. Ihr Wert, Webentwicklern zu helfen, muss den kommerziellen Nutzen für die verlinkte Seite überwiegen.

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) bewahren und über Browserunterschiede ohne redaktionelle Voreingenommenheit berichten. Abfällige Kommentare über einen Browser oder ein Benutzer-Agent sind nicht akzeptabel.

### Standardisierung

Web-Technologien, die in MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungspfad befinden und müssen von mindestens einem Rendering-Engine implementiert sein. Unterschiede in der Browserunterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschläge für Inhalte

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie einen Vorschlag einreichen, um sicherzustellen, dass das, was Sie vorschlagen, angemessen ist.

Für neue Referenzseiten oder Leitfäden öffnen Sie bitte ein [neues Thema](https://github.com/mdn/mdn/issues/new/choose), in dem Sie darlegen, welche Inhalte Sie vorschlagen und warum (bitte so genau wie möglich).

Für Vorschläge zu größeren Projekten, die neue Inhaltsabschnitte beinhalten, beachten Sie bitte die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen dokumentieren wir es auf MDN Web Docs, wenn es sich um eine offene Webtechnologie handelt. Dazu gehört jede Funktion, die von Webentwicklern zum Erstellen von Websites und Anwendungen jetzt und in naher Zukunft verwendet werden kann.

Wenn ein Feature von mehreren Browsern implementiert wird und entweder als Standard akzeptiert oder sich in Richtung Standardisierung bewegt, dann dokumentieren wir es auf jeden Fall hier. Wenn ein Feature noch sehr experimentell ist und nicht in mehreren Browsern implementiert und/oder anfällig für Änderungen ist, dann ist es immer noch für die Aufnahme geeignet, könnte jedoch nicht als Priorität für das Redaktionsteam angesehen werden, daran zu arbeiten.

Mit anderen Worten sollten Webtechnologien, die in MDN Web Docs dokumentiert werden sollen, alle der folgenden Kriterien erfüllen:

- Auf einem Standardisierungspfad sein.
- In einer von einer zuverlässigen Standardorganisation veröffentlichten Spezifikation spezifiziert sein.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt darauf, über die folgenden Frontend-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web-APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige umfassendere Themen, wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Zusätzlich bieten wir umfangreiche [Lern-Leitfäden](/de/docs/Learn_web_development) für diese Technologien sowie ein [Glossar](/de/docs/Glossary).

> [!NOTE]
> Backend-Technologien haben in der Regel ihre eigene Dokumentation anderswo, die MDN Web Docs nicht zu überschreiben versucht, obwohl wir [einige Ausnahmen haben](/de/docs/Learn_web_development/Extensions/Server-side).

Alle Inhalte in MDN Web Docs müssen für den Technologiebereich, in dem sie erscheinen, relevant sein. Von Mitwirkenden wird erwartet, dass sie diesen [MDN-Schreibleitfäden](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen folgen.

Für weitere Details zu den Kriterien, ob eine Technologie in MDN Web Docs dokumentiert werden kann oder nicht, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf MDN Web Docs sind wir ständig bestrebt, neue Web-Standardtechnologien zu dokumentieren, wo es angebracht ist. Wir versuchen, ein Gleichgewicht zu finden zwischen dem frühzeitigen Veröffentlichen der Dokumentation, damit Entwickler neue Funktionen so schnell wie möglich kennenlernen können, und dem späten Veröffentlichen, sodass die Technologie reif und stabil ist, damit die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen definieren wir den frühesten Zeitpunkt, zu dem wir das Dokumentieren einer neuen Technologie in Betracht ziehen, als: _Wenn das Feature auf einem Standardisierungspfad ist und irgendwo implementiert wurde._

Wir ziehen das Dokumentieren einer neuen Technologie in Erwägung, wenn sie:

- In einem Spezifikationsdokument beschrieben ist, das unter einer zuverlässigen Standardorganisation (wie W3C, WHATWG, Khronos, IETF usw.) veröffentlicht wurde und ein angemessenes Maß an Stabilität erreicht hat (z.B. ein W3C-Arbeitsentwurf oder Kandidatenempfehlung oder wenn die Spezifikation relativ stabil wirkt, beurteilt nach dem Fluss der eingereichten Probleme), und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browserentwickler Interesse zeigen (z.B. ein aktives Ticket oder ein "Absicht zu implementieren"-Prozess ist im Gange).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Sie keine Spezifikation hat oder die Spezifikation wie ein roher Entwurf aussieht, der Änderungen unterliegt,
- Ein oder kein Browser haben sie bisher implementiert, und nicht unterstützende Browser zeigen kein Interesse an der Implementierung. Dies kann durch das Fragen von Ingenieuren, die an diesen Browsern arbeiten, und durch das Durchsehen von Browser-Fehlerverfolgungssystemen und Mailinglisten beurteilt werden,
- Sie keine web-exponierte Technologie ist und/oder vollständig proprietär ist, oder
- Sie bereits Anzeichen zeigt, veraltet oder durch ein ähnliches Feature ersetzt zu werden.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden niemals auf der Website angenommen. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für MDN Web Docs sind:

- Technologie, die dem Web nicht zugänglich ist und spezifisch für einen Browser ist.
- Technologie, die nicht mit dem Web verbunden ist.
- Dokumentation für Endbenutzer. Bei Produkten von Mozilla gehört solche Dokumentation beispielsweise auf die [Mozilla-Support-Seite](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Überprüfen Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden aus MDN Web Docs gelöscht, wenn sie keine Informationen mehr enthalten, die in irgendeiner Weise nützlich sind, ausreichend veraltet sind und/oder möglicherweise so unrichtig sind, dass ihre Beibehaltung irreführend sein könnte.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden können:

- Artikel enthalten Informationen über Features, die in allen Browsern nicht implementiert und später zurückgezogen wurden (in der Regel experimentelle Funktionen wie prefixierte Funktionalität).
- Referenzseiten beschreiben Features, die vor ihrer Implementierung in einem Browser aus der Spezifikation entfernt wurden.
- Artikel behandeln Techniken, die später als schlechte Praktiken aufgezeigt und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unpassend sind.
- Abschnitte von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und stellen eine Wartungsbelastung dar.

Für weitere Informationen darüber, _wie_ man Dokumente löscht, beachten Sie bitte die [Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Anleitung.

## Arten von Dokumenten, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind MDN Web Docs für _Produkt_-Dokumentation, nicht für _Projekt_- oder _Prozess_-Dokumentation gedacht. Wenn das Dokument also über "wie man etwas benutzt" oder "wie etwas funktioniert" (wobei das "etwas" in einer der oben genannten Themenkategorien liegt) handelt, dann kann es auf MDN Web Docs aufgenommen werden.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung von etwas arbeitet" oder "Pläne zur Entwicklung von etwas", dann sollte es nicht auf MDN Web Docs aufgenommen werden.

Hier sind einige Beispiele für Dokumenttypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
