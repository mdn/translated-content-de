---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

MDN Web Docs enthält _browserneutrale_ Dokumentationen, die es Webentwicklern ermöglichen, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine Inhaltsart auf MDN Web Docs aufgenommen werden sollte.

## Redaktionelle Richtlinien

In diesem Abschnitt werden die Richtlinien beschrieben, die vom Mozilla MDN-Team festgelegt wurden, um den Inhalt auf MDN Web Docs zu steuern. Alle Mitwirkenden zu MDN Web Docs sind verpflichtet, sich an diese Richtlinien zu halten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich, in dem sie erscheinen, relevant sein. Spam (Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die versuchen, weiterhin Spam einzureichen, können nach Ermessen des Mozilla MDN-Teams von MDN ausgeschlossen werden.

Externe Links zu kommerziellen Websites, die für das Thema, von dem aus sie verlinkt sind, relevant sind, werden von Fall zu Fall bewertet. Ihr Nutzen für Webentwickler muss den kommerziellen Vorteil der verlinkten Seite überwiegen.

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) bewahren und über Browservariationen ohne redaktionelle Voreingenommenheit berichten. Abfällige Kommentare über einen Browser oder User Agenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungsweg befinden und müssen von mindestens einer Rendering-Engine implementiert sein. Unterschiede in der Browserunterstützung werden im Abschnitt [Browserkompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Vorschlag von Inhalten

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie einen Vorschlag einreichen, um sicherzustellen, dass Ihr Vorschlag geeignet ist.

Für neue Referenzseiten oder Anleitungen öffnen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose), in dem Sie beschreiben, welche Inhalte Sie vorschlagen und warum (bitte so ausführlich wie möglich).

Für größere Projekte, die neue Inhaltsbereiche umfassen, beachten Sie bitte die [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Antragsprozess erläutern.

## Themen, die zu MDN Web Docs gehören

Im Allgemeinen dokumentieren wir auf MDN Web Docs offene Webtechnologien. Dazu gehört jede Funktion, die von Webentwicklern zur Erstellung von Websites und Anwendungen genutzt werden kann, jetzt und in naher Zukunft.

Wenn eine Funktion von mehreren Browsern implementiert wird und entweder als Standard akzeptiert ist oder sich in Richtung Standardisierung bewegt, dann dokumentieren wir sie hier auf jeden Fall. Wenn eine Funktion noch sehr experimentell und nicht in mehreren Browsern implementiert und/oder änderungsanfällig ist, ist sie dennoch für die Aufnahme geeignet, könnte aber von der Redaktion nicht als Priorität angesehen werden.

Mit anderen Worten, Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten alle der folgenden Kriterien erfüllen:

- Auf einem Standardisierungsweg sein.
- In einer von einem zuverlässigen Standardisierungsgremium veröffentlichten Spezifikation spezifiziert sein.
- Von mindestens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt darauf, über die folgenden Frontend-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn/Accessibility). Zusätzlich bieten wir ausführliche [Lernmaterialien](/de/docs/Learn) für diese Technologien und auch ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Backend-Technologien haben in der Regel ihre eigene Dokumentation anderswo, die MDN Web Docs nicht zu überbieten versucht, obwohl wir [einige Ausnahmen](/de/docs/Learn/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen für den Technologiebereich, in dem sie erscheinen, relevant sein. Beitragende sollten diesen [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen folgen.

Für weitere Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann oder nicht, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wann wir eine neue Technologie dokumentieren

Auf MDN Web Docs sind wir ständig bestrebt, neue Webstandardtechnologien angemessen zu dokumentieren. Wir versuchen, ein Gleichgewicht zwischen der frühzeitigen Veröffentlichung der Dokumentation, damit Entwickler über neue Funktionen lernen können, sobald sie diese benötigen, und der späten Veröffentlichung, damit die Technologie ausgereift und stabil ist und die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss, zu finden.

Im Allgemeinen ist unsere Definition des frühesten Zeitpunkts, zu dem wir in Betracht ziehen, eine neue Technologie zu dokumentieren: _Wenn die Funktion auf einem Standardisierungsweg ist und irgendwo implementiert ist._

Wir ziehen in Betracht, eine neue Technologie zu dokumentieren, wenn sie:

- In einem Spezifikationsdokument unter einer zuverlässigen Standardisierungsorganisation veröffentlicht und ein vernünftiges Maß an Stabilität erreicht hat (z.B. ein W3C Working Draft oder Candidate Recommendation oder wenn die Spezifikation, gemessen am Fluss der eingereichten Probleme, relativ stabil aussieht) und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browserentwickler Interesse zeigen (z.B. ein aktives Ticket oder ein „Intent to implement“-Prozess ist in Kraft).

Wir dokumentieren keine neue Technologie, wenn:

- Sie keine Spezifikation hat oder die Spezifikation eine grobe Notiz ist, die änderungsanfällig erscheint,
- Ein oder keiner der Browser sie derzeit implementiert hat und nicht unterstützende Browser kein Interesse an der Implementierung zeigen. Sie können dies abschätzen, indem Sie Ingenieure, die an diesen Browsern arbeiten, fragen und sich die Bug-Tracker und Mailinglisten der Browser ansehen,
- Sie keine web-exponierte Technologie ist und/oder vollständig proprietär ist, oder
- Sie bereits Anzeichen dafür zeigt, dass sie veraltet ist oder von einer ähnlichen Funktion abgelöst wird.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die versuchen, weiterhin Spam einzureichen, können nach Ermessen des Mozilla MDN-Teams von MDN ausgeschlossen werden.

Beispiele für unangemessene Themen für MDN Web Docs sind:

- Technologie, die nicht für das Web zugänglich ist und spezifisch für einen Browser ist.
- Technologie, die nicht mit dem Web in Verbindung steht.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte gehört solche Dokumentation beispielsweise auf die [Mozilla Support-Seite](https://support.mozilla.org/).
- Selbstverlinkende oder selbstförmige externe Links. Sehen Sie sich diese Richtlinien in unserem [Stilrichtlinienleitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) an, bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden von MDN Web Docs gelöscht, wenn sie keine in irgendeiner Weise nützlichen Informationen mehr enthalten, alt genug sind und/oder möglicherweise so falsch sind, dass ihre Beibehaltung irreführend wäre.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (in der Regel experimentelle Funktionen wie vorangestellte Funktionalitäten).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel behandeln Techniken, die später als schlechte Praktiken erkannt wurden und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unangebracht sind.
- Abschnitte von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und stellen eine Wartungslast dar.

Weitere Informationen zum _Wie_ des Löschens von Dokumenten finden Sie im Leitfaden [Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Arten von Dokumenten, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind MDN Web Docs für _Produkt_-Dokumentation da, nicht für _Projekt_- oder _Prozess_-Dokumentation. Also, wenn das Dokument darüber handelt, "wie man etwas benutzt" oder "wie etwas funktioniert" (wobei das "etwas" in eine der oben genannten Themenkategorien fällt), dann kann es auf MDN Web Docs sein.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung einer Sache arbeitet" oder "Pläne für die Entwicklung einer Sache", dann sollte es nicht auf MDN Web Docs sein.

Hier sind einige Beispiele für Arten von Dokumenten, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Designdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
