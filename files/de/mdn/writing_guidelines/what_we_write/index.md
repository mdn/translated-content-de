---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: de5b264fa7bf6bb49811bf79f8f28f10835bfb79
---

Die MDN Web Docs enthalten _browserneutrale_ Dokumentationen, die es Webentwicklern ermöglichen, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen dazu, ob ein bestimmtes Thema und/oder eine Art von Inhalten in die MDN Web Docs aufgenommen werden sollten.

## Redaktionsrichtlinien

Dieser Abschnitt beschreibt die von den Mitarbeitern von Mozilla MDN festgelegten Richtlinien zur Steuerung der Inhalte auf den MDN Web Docs. Alle Mitwirkenden an den MDN Web Docs müssen sich an diese Richtlinien halten.

### Relevanz

Alle Inhalte in den MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die immer wieder versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Seiten, die für das Thema, von dem aus sie verlinkt sind, relevant sind, werden von Fall zu Fall beurteilt. Ihr Wert bei der Unterstützung von Webentwicklern muss den kommerziellen Vorteil für die verlinkte Seite überwiegen.

> [!NOTE]
> Sie werden im Abschnitt MDN [Webentwicklung lernen](/de/docs/Learn_web_development) Links zu kommerziellen Seiten sehen, aber diese werden sparsam verwendet, und wir verlinken nur zu vertrauenswürdigen Bildungspartnern. Sie können mehr darüber in den [Richtlinien zum Schreiben über Webentwicklung > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) lesen.

### Neutralität

Artikel in den MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und ohne redaktionelle Voreingenommenheit über Browser-Variationen berichten. Abwertende Kommentare über jeden Browser oder Benutzeragenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die in den MDN Web Docs dokumentiert werden sollen, müssen sich auf einem Standardisierungsweg befinden und von mindestens einer Rendering-Engine implementiert sein. Variationen in der Browser-Unterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschläge für Inhalte

Wenn Sie Inhalte für die MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie Beiträge einreichen, um sicherzustellen, dass Ihr Vorschlag angemessen ist.

Für neue Referenzseiten oder Leitfäden öffnen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose) und beschreiben Sie, welche Inhalte Sie vorschlagen und warum (bitte so detailliert wie möglich).

Für Vorschläge zu größeren Projekten, die neue Inhaltsbereiche beinhalten, beziehen Sie sich bitte auf die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die auf die MDN Web Docs gehören

Im Allgemeinen dokumentieren wir offene Webtechnologien in den MDN Web Docs. Dazu gehört jede Funktion, die von Webentwicklern zum Erstellen von Websites und Anwendungen genutzt werden kann, jetzt und in naher Zukunft.

Wenn eine Funktion von mehreren Browsern implementiert wird und entweder als Standard akzeptiert oder auf dem Weg zur Standardisierung ist, dann dokumentieren wir sie hier definitiv. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert ist und/oder änderungsanfällig ist, dann ist sie immer noch zur Aufnahme geeignet, wird aber möglicherweise nicht als Priorität für das Schreibteam angesehen.

Mit anderen Worten, Webtechnologien, die in den MDN Web Docs dokumentiert werden sollen, sollten alle folgenden Kriterien erfüllen:

- Auf einem Standardisierungsweg sein.
- In einer Spezifikation einer zuverlässigen Standardorganisation spezifiziert sein.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptfokus liegt darauf, über die folgenden Frontend-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen, wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Zusätzlich bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien und auch ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Back-End-Technologien haben normalerweise ihre eigene Dokumentation anderswo, die die MDN Web Docs nicht versuchen zu ersetzen, obwohl wir [einige Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side) haben.

Alle Inhalte in den MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Mitwirkende müssen diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen befolgen.

Für weitere Details zu den Kriterien, ob eine Technologie in den MDN Web Docs dokumentiert werden kann, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

In den MDN Web Docs sind wir ständig bestrebt, neue Webstandardtechnologien zu dokumentieren, wenn es angemessen ist.
Wir versuchen, ein Gleichgewicht zwischen der frühen Veröffentlichung der Dokumentation, damit Entwickler so schnell wie nötig über neue Funktionen lernen können, und der späten Veröffentlichung, damit die Technologie ausgereift und stabil ist, zu finden, sodass die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen ist unsere Definition des frühesten Zeitpunkts, an dem wir eine neue Technologie dokumentieren, folgender: _Wenn die Funktion sich auf einem Standardisierungsweg befindet und irgendwo implementiert ist._

Wir erwägen, eine neue Technologie zu dokumentieren, wenn sie:

- In einem Spezifikationsdokument einer zuverlässigen Standardorganisation (wie W3C, WHATWG, Khronos, IETF usw.) spezifiziert ist und ein vernünftiges Maß an Stabilität erreicht hat (z. B. ein W3C-Arbeitsentwurf oder eine Kandidatenempfehlung oder wenn die Spezifikation nach dem Fluss der gegen sie eingereichten Probleme stabil erscheint), und
- Konsistent in mindestens einem Browser implementiert ist, mit Anzeichen von Interesse seitens anderer Browserentwickler (wie ein aktives Ticket oder ein "Absicht-zu-implementieren"-Prozess in Kraft).

Wir dokumentieren keine neue Technologie, wenn:

- Keine Spezifikation vorhanden ist oder die Spezifikation eine unfertige Notiz ist, die zu Änderungen neigt,
- Einer oder kein Browser sie derzeit implementiert hat und nicht-unterstützende Browser keine Anzeichen von Interesse an ihrer Implementierung zeigen. Dies können Sie beurteilen, indem Sie Ingenieure fragen, die an diesen Browsern arbeiten, und indem Sie sich Bugtracker und Mailinglisten der Browser ansehen,
- Es sich nicht um eine web-exponierte Technologie handelt und/oder vollständig proprietär ist, oder
- Sie bereits Anzeichen zeigt, veraltet oder durch eine ähnliche Funktion ersetzt zu werden.

## Themen, die nicht auf die MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht auf die MDN Web Docs. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Site akzeptiert. Mitwirkende, die immer wieder versuchen, Spam einzureichen, können nach Ermessen der Mozilla MDN-Mitarbeiter von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für die MDN Web Docs sind:

- Technologien, die nicht dem Web ausgesetzt sind und spezifisch für einen Browser sind.
- Technologien, die nicht mit dem Web in Verbindung stehen.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte beispielsweise gehört eine solche Dokumentation auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Lesen Sie diese Richtlinien in unserem [Leitfaden für Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden aus den MDN Web Docs gelöscht, wenn sie keine Informationen mehr enthalten, die auf irgendeine Weise nützlich sind,hinreichend veraltet sind und/oder möglicherweise falsch sind, sodass sie irreführend sein könnten, wenn sie bleiben.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert und später zurückgezogen wurden (normalerweise experimentelle Funktionen wie vorangestellte Funktionalität).
- Referenzseiten beschreiben Funktionen, die vor der Implementierung in einem Browser aus der Spezifikation entfernt wurden.
- Artikel behandeln Techniken, die sich später als schlechte Praktiken herausstellten und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für die MDN Web Docs nicht angemessen sind.
- Teile der MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und sind eine Pflegebelastung.

Für weitere Informationen darüber, _wie_ man einzelne Dokumente löscht, sehen Sie bitte den [Leitfaden zum Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). Wenn Sie einen gesamten Inhaltsbereich löschen möchten, konsultieren Sie den Leitfaden [Inhalt einstellen](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content).

## Arten von Dokumenten, die auf den MDN Web Docs erlaubt sind

Im Allgemeinen fällt unsere Dokumentation in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind die MDN Web Docs für _Produkt_-Dokumentation, nicht für _Projekt_- oder _Prozess_-Dokumentation gedacht. Wenn es also darum geht, "wie ein Ding verwendet wird" oder "wie ein Ding funktioniert" (wobei das "Ding" in eine der oben erwähnten Themenkategorien fällt), dann kann es auf die MDN Web Docs.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung eines Dings arbeitet" oder "Pläne zur Entwicklung eines Dings", dann sollte es nicht auf die MDN Web Docs.

Hier sind einige Beispiele für Arten von Dokumenten, die _nicht_ in den MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
