---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

MDN Web Docs enthält _browserunabhängige_ Dokumentation, die es Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder Inhaltstyp in den MDN Web Docs aufgenommen werden sollte oder nicht.

## Redaktionelle Richtlinien

Dieser Abschnitt beschreibt die Richtlinien, die vom Mozilla-MDN-Team festgelegt wurden, um die Inhalte auf MDN Web Docs zu steuern. Alle Mitwirkenden an MDN Web Docs sollten sich an diese Richtlinien halten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Spam (kommerzielle Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla-MDN-Teams von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema, von dem aus sie verknüpft sind, relevant sind, werden von Fall zu Fall beurteilt. Ihr Wert für die Unterstützung von Webentwicklern muss den kommerziellen Nutzen für die verlinkte Website überwiegen.

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) wahren und über Unterschiede zwischen Browsern ohne redaktionelle Voreingenommenheit berichten. Abwertende Kommentare über einen Browser oder Benutzeragenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungspfad befinden und müssen von mindestens einer Rendering-Engine implementiert sein. Unterschiede in der Browserunterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschläge für Inhalte

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie einen Vorschlag einreichen, um sicherzustellen, dass der von Ihnen vorgeschlagene Inhalt geeignet ist.

Für neue Referenzseiten oder Leitfäden eröffnen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose) und beschreiben Sie, welchen Inhalt Sie vorschlagen und warum (bitte seien Sie so präzise wie möglich).

Bei Vorschlägen für größere Projekte, die neue Inhaltsabschnitte betreffen, beachten Sie bitte die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen dokumentieren wir auf MDN Web Docs offene Webtechnologien. Dazu gehören alle Funktionen, die von Webentwicklern zur Erstellung von Websites und Anwendungen genutzt werden können, jetzt und in naher Zukunft.

Wenn eine Funktion von mehreren Browsern implementiert wurde und entweder als Standard akzeptiert oder auf dem Weg zur Standardisierung ist, dann dokumentieren wir sie definitiv hier. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert wurde und/oder Änderungen unterliegt, ist sie dennoch für die Aufnahme geeignet, wird aber möglicherweise nicht als Priorität für das Schreibteam angesehen.

Mit anderen Worten sollten Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, alle folgenden Kriterien erfüllen:

- Sie sollten sich auf einem Standardisierungspfad befinden.
- Sie sollten in einer von einer zuverlässigen Standardisierungsorganisation veröffentlichten Spezifikation spezifiziert sein.
- Sie sollten von mindestens einer Rendering-Engine implementiert sein.
- Sie sollten in einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt darauf, über die folgenden Front-End-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Darüber hinaus bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien und auch ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Backend-Technologien haben in der Regel ihre eigene Dokumentation an anderer Stelle, die MDN Web Docs nicht ersetzen soll, obwohl wir einige [Ausnahmen](/de/docs/Learn_web_development/Extensions/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich relevant sein, in dem sie erscheinen. Mitwirkende sollten sich an diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) bezüglich Schreibstil, Codebeispiele und anderen Themen halten.

Für weitere Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf MDN Web Docs sind wir ständig bestrebt, neue Webstandardtechnologien entsprechend zu dokumentieren. Wir versuchen, ein Gleichgewicht zu finden zwischen dem frühzeitigen Veröffentlichen der Dokumentation, damit Entwickler über neue Funktionen lernen können, sobald sie diese benötigen, und der Veröffentlichung zu einem späteren Zeitpunkt, wenn die Technologie ausgereift und stabil genug ist, um zu verhindern, dass die Dokumentation ständige Aktualisierungen oder schnelles Entfernen erfordert.

Im Allgemeinen definieren wir den frühesten Zeitpunkt, zu dem wir eine neue Technologie dokumentieren werden, wie folgt: _Wenn die Funktion sich auf einem Standardisierungspfad befindet und irgendwo implementiert ist._

Wir erwägen, eine neue Technologie zu dokumentieren, wenn sie:

- In einem unter einer zuverlässigen Standardisierungsorganisation (wie W3C, WHATWG, Khronos, IETF usw.) veröffentlichten Spezifikationsdokument spezifiziert ist und ein angemessenes Maß an Stabilität erreicht hat (z. B. ein W3C-Entwurfsarbeitsdokument oder ein Kandidatenempfehlung oder wenn die Spezifikation recht stabil aussieht, gemessen am Fluss der gegen sie eingereichten Probleme), und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browserentwickler Anzeichen von Interesse zeigen (wie z. B. ein aktives Ticket oder ein "Intent to implement"-Prozess, der in Kraft ist).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Sie keine Spezifikation hat oder die Spezifikation eine grobe Notiz ist, die zu Änderungen neigen könnte,
- Einer oder keiner Browser hat sie derzeit implementiert, und nicht-unterstützende Browser zeigen keine Anzeichen von Interesse an der Implementierung. Dies können Sie durch das Fragen der Ingenieure, die an diesen Browsern arbeiten, und durch das Ansehen der Fehlerverfolgungssysteme und Mailinglisten der Browser abschätzen,
- Es sich nicht um eine webexponierte Technologie handelt und/oder sie vollständig proprietär ist, oder
- Sie bereits Anzeichen von Veralterung oder Ersatz durch eine ähnliche Funktion zeigt.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht auf MDN Web Docs. Spam (kommerzielles Advertising) und andere irrelevante Inhalte werden niemals auf der Seite akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla-MDN-Teams von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für MDN Web Docs sind:

- Technologie, die nicht dem Web ausgesetzt ist und spezifisch für einen Browser ist.
- Technologie, die nicht mit dem Web in Verbindung steht.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte gehört solche Dokumentation beispielsweise auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Sehen Sie sich diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) an, bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden von MDN Web Docs gelöscht, wenn sie keine nützlichen Informationen mehr enthalten, ausreichend veraltet sind und/oder möglicherweise falsch sind, sodass ihre Beibehaltung irreführend sein könnte.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (normalerweise experimentelle Funktionen wie prefixed functionality).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel behandeln Techniken, die sich später als schlechte Praktiken erwiesen und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unangemessen sind.
- Abschnitte von MDN Web Docs sind nicht auf offene Webtechnologien fokussiert und stellen eine Wartungslast dar.

Weitere Informationen zum _wie_ des Löschens von Dokumenten finden Sie im [Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden.

## Arten von Dokumenten, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fällt unsere Dokumentation in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen ist MDN Web Docs für _Produkt_-Dokumentation, nicht für _Projekt_- oder _Prozess_-Dokumentation. Wenn das Dokument also darüber handelt, "wie man etwas benutzt" oder "wie etwas funktioniert" (wobei das "etwas" in eine der oben genannten Themenkategorien passt), dann kann es auf MDN Web Docs erscheinen.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung von etwas arbeitet" oder "Pläne für die Entwicklung von etwas", dann sollte es nicht auf MDN Web Docs erscheinen.

Hier sind einige Beispiele für Dokumenttypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Designdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
