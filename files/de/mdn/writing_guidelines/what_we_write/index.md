---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

Die MDN Web Docs enthalten _browser-neutrale_ Dokumentation, die es Webentwicklern ermöglicht, _browser-agnostischen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine Art von Inhalt auf MDN Web Docs aufgenommen werden sollte.

## Redaktionelle Richtlinien

In diesem Abschnitt werden die Richtlinien beschrieben, die von den Mitarbeitern der Mozilla MDN festgelegt wurden, um den Inhalt auf MDN Web Docs zu steuern. Alle Mitwirkenden der MDN Web Docs müssen sich an diese Richtlinien halten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den Technologieabschnitt relevant sein, in dem sie erscheinen. Spam (kommerzielles Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla MDN-Personals von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema relevant sind, von dem aus sie verlinkt werden, werden von Fall zu Fall bewertet. Ihr Wert zur Unterstützung von Webentwicklern muss den kommerziellen Nutzen für die verlinkte Website überwiegen.

### Neutralität

Artikel auf MDN Web Docs müssen einen [neutralen Standpunkt](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und über Variationen zwischen Browsern ohne redaktionelle Voreingenommenheit berichten. Herabsetzende Kommentare über einen Browser oder Nutzeragenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungsweg befinden und müssen von mindestens einer Rendering-Engine implementiert sein. Variationen in der Browser-Unterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Inhalt vorschlagen

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie diese Seite bitte, bevor Sie etwas einreichen, um sicherzustellen, dass das, was Sie vorschlagen, geeignet ist.

Für neue Referenzseiten oder Leitfäden, öffnen Sie bitte ein [neues Thema](https://github.com/mdn/mdn/issues/new/choose), in dem Sie beschreiben, welche Inhalte Sie vorschlagen und warum (bitte so ausdrücklich wie möglich).

Für größere Projekte, die neue Inhaltsbereiche umfassen, beziehen Sie sich bitte auf die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die auf MDN Web Docs gehören

Im Allgemeinen, wenn es sich um eine offene Webtechnologie handelt, dokumentieren wir sie auf MDN Web Docs. Dies umfasst jede Funktion, die von Webentwicklern zur Erstellung von Websites und Anwendungen jetzt und in naher Zukunft verwendet werden kann.

Wenn eine Funktion von mehreren Browsern implementiert wird und entweder als Standard akzeptiert ist oder sich in Richtung Standardisierung bewegt, dann dokumentieren wir sie hier definitiv. Wenn eine Funktion noch sehr experimentell ist und nicht in mehreren Browsern implementiert ist und/oder Änderungen unterliegt, ist sie dennoch für die Aufnahme geeignet, wird aber möglicherweise nicht als Priorität für das Team angesehen, das an der Dokumentation arbeitet.

Mit anderen Worten, Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten alle folgenden Kriterien erfüllen:

- Auf einem Standardisierungsweg sein.
- In einer Spezifikation veröffentlicht sein, die von einer zuverlässigen Standardisierungsorganisation stammt.
- Von wenigstens einer Rendering-Engine implementiert sein.
- In einer stabilen Browserversion veröffentlicht sein.

Unser Hauptaugenmerk liegt darauf, über die folgenden Frontend-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn/Accessibility). Darüber hinaus bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn) zu diesen Technologien und auch ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Backend-Technologien haben in der Regel ihre eigene Dokumentation anderswo, die die MDN Web Docs nicht zu übertreffen versuchen, obwohl wir [einige Ausnahmen](/de/docs/Learn/Server-side) haben.

Alle Inhalte auf MDN Web Docs müssen für den Technologieabschnitt relevant sein, in dem sie erscheinen. Von Mitwirkenden wird erwartet, dass sie diese [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Codebeispiele und andere Themen befolgen.

Für mehr Details zu den Kriterien, ob eine Technologie auf MDN Web Docs dokumentiert werden kann oder nicht, siehe die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wenn wir eine neue Technologie dokumentieren

Auf MDN Web Docs suchen wir ständig nach Möglichkeiten, neue Webstandardtechnologien entsprechend zu dokumentieren.
Wir versuchen, ein Gleichgewicht zu finden zwischen dem Frühveröffentlichen der Dokumentation, damit Entwickler neue Funktionen kennenlernen können, sobald sie diese brauchen, und dem Spätveröffentlichen, damit die Technologie ausgereift und stabil ist und die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen definiert unser frühestes Zeitfenster zur Dokumentation einer neuen Technologie wie folgt: _Wenn die Funktion sich auf einem Standardisierungsweg befindet und irgendwo implementiert ist._

Wir erwägen die Dokumentation einer neuen Technologie, wenn sie:

- In einem Spezifikationsdokument veröffentlicht ist, das von einer zuverlässigen Standardisierungsorganisation (wie W3C, WHATWG, Khronos, IETF, etc.) stammt und ein vernünftiges Maß an Stabilität erreicht hat (z. B. ein W3C-Arbeitsentwurf oder eine Kandidatenempfehlung oder wenn die Spezifikation recht stabil aussieht, beurteilt anhand des Flusses von Problemen, die dagegen eingereicht werden), und
- Konsistent in mindestens einem Browser implementiert ist, wobei andere Browserentwickler Anzeichen von Interesse zeigen (wie ein aktives Ticket oder ein "Absicht, zu implementieren"-Prozess läuft).

Wir dokumentieren eine neue Technologie nicht, wenn:

- Sie keine Spezifikation hat oder die Spezifikation eine grobe Notiz ist, die sich wahrscheinlich ändern wird,
- Einer oder kein Browser hat sie derzeit implementiert und nicht unterstützende Browser zeigen keine Anzeichen von Interesse, sie zu implementieren. Sie können dies beurteilen, indem Sie Ingenieure fragen, die an diesen Browsern arbeiten, und indem Sie sich die Browser-Bugtracker und Mailinglisten, etc. ansehen,
- Es keine Web-exponierte Technologie ist und/oder völlig proprietär ist, oder
- Sie bereits Anzeichen zeigt, dass sie veraltet ist oder durch eine ähnliche Funktion ersetzt werden soll.

## Themen, die nicht auf MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht auf MDN Web Docs. Spam (kommerzielles Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin versuchen, Spam einzureichen, können nach Ermessen des Mozilla MDN-Personals von MDN ausgeschlossen werden.

Beispiele für unpassende Themen für MDN Web Docs umfassen:

- Technologie, die dem Web nicht ausgesetzt ist und spezifisch für einen Browser ist.
- Technologie, die nicht im Zusammenhang mit dem Web steht.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte zum Beispiel, gehören solche Dokumentationen auf die [Mozilla-Support-Seite](https://support.mozilla.org/).
- Selbstverlinkende oder selbstfördernde externe Links. Lesen Sie diese Richtlinien in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), bevor Sie einen externen Link hinzufügen.

### Wenn wir Dokumentation entfernen

Seiten werden von MDN Web Docs gelöscht, wenn sie keine nützlichen Informationen mehr enthalten, veraltet sind und/oder falsch genug sein könnten, dass das Beibehalten irreführend sein könnte.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte gelöscht werden könnten:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (in der Regel experimentelle Funktionen wie vorangegangene Funktionalität).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel behandeln Techniken, die später als schlechte Praktiken erkannt und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere Artikel von besserer Qualität ersetzt wurden.
- Artikel enthalten Inhalte, die für MDN Web Docs unpassend sind.
- Abschnitte von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und sind eine Wartungsbelastung.

Für weitere Informationen darüber, _wie_ Dokumente gelöscht werden, sehen Sie bitte den [Leitfaden zum Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Arten von Dokumenten, die auf MDN Web Docs erlaubt sind

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind MDN Web Docs für _Produkt_ Dokumentationen gedacht, nicht für _Projekt_ oder _Prozess_ Dokumentationen. Also, wenn das Dokument darüber handelt, "wie man eine Sache benutzt" oder "wie eine Sache funktioniert" (wobei die "Sache" in einer der oben genannten Themenkategorien ist), dann kann es auf MDN Web Docs gehen.

Wenn ein Dokument darüber handelt, "wer an der Entwicklung einer Sache arbeitet" oder "Pläne zur Entwicklung einer Sache", dann sollte es nicht auf MDN Web Docs gehen.

Hier sind einige Beispiele für Dokumenttypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
