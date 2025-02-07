---
title: Was wir schreiben
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

MDN Web Docs enthält _browserneutrale_ Dokumentation, die es Webentwicklern ermöglicht, _browserunabhängigen_ Code zu schreiben. In diesem Artikel finden Sie Informationen darüber, ob ein bestimmtes Thema und/oder eine Art von Inhalt in MDN Web Docs aufgenommen werden sollte.

## Richtlinien für redaktionelle Inhalte

Dieser Abschnitt beschreibt die von der Mozilla MDN-Redaktion festgelegten Richtlinien, die die Inhalte auf MDN Web Docs regeln. Von allen Mitwirkenden bei MDN Web Docs wird erwartet, dass sie diese Richtlinien einhalten.

### Relevanz

Alle Inhalte auf MDN Web Docs müssen für den technologischen Bereich, in dem sie erscheinen, relevant sein. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Beiträge, die weiterhin Spam einreichen, können nach Ermessen der Mozilla MDN-Redaktion von MDN ausgeschlossen werden.

Ausgehende Links zu kommerziellen Websites, die für das Thema, von dem sie verlinkt werden, relevant sind, werden von Fall zu Fall beurteilt. Ihr Nutzen für Webentwickler muss den kommerziellen Vorteil für die verlinkte Website überwiegen.

> [!NOTE]
> Sie werden Links zu kommerziellen Websites im MDN-Abschnitt [Learn web development](/de/docs/Learn_web_development) sehen, aber diese werden sparsam verwendet, und wir verlinken nur zu vertrauenswürdigen Bildungspartnern. Weitere Informationen dazu finden Sie unter [Learn web development writing guidelines > External links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

### Neutralität

Artikel auf MDN Web Docs müssen eine [neutrale Perspektive](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view) beibehalten und über Unterschiede zwischen Browsern ohne redaktionelle Voreingenommenheit berichten. Abfällige Bemerkungen über einen beliebigen Browser oder User-Agenten sind nicht akzeptabel.

### Standardisierung

Webtechnologien, die auf MDN Web Docs dokumentiert werden sollen, sollten sich auf einem Standardisierungspfad befinden und müssen mindestens in einer Rendering-Engine implementiert sein. Unterschiede in der Browser-Unterstützung werden im Abschnitt [Browser-Kompatibilität](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) eines Artikels dokumentiert.

## Inhalte vorschlagen

Wenn Sie Inhalte für MDN Web Docs vorschlagen möchten, lesen Sie bitte diese Seite, bevor Sie etwas einreichen, um sicherzustellen, dass Ihr Vorschlag geeignet ist.

Für neue Referenzseiten oder Leitfäden öffnen Sie bitte ein [neues Issue](https://github.com/mdn/mdn/issues/new/choose), in dem Sie den vorgeschlagenen Inhalt und die Gründe dafür detailliert beschreiben (bitte seien Sie so genau wie möglich).

Für Vorschläge zu größeren Projekten, die neue Inhaltsbereiche umfassen, lesen Sie bitte die Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion), die auch den Bewerbungsprozess beschreibt.

## Themen, die auf MDN Web Docs gehören

Im Allgemeinen dokumentieren wir jede offene Webtechnologie auf MDN Web Docs. Dies schließt jede Funktion ein, die von Webentwicklern zur Erstellung von Websites und Anwendungen jetzt und in naher Zukunft genutzt werden kann.

Wenn eine Funktion von mehreren Browsern implementiert wird und entweder als Standard akzeptiert ist oder sich auf dem Weg zur Standardisierung befindet, dann dokumentieren wir sie auf jeden Fall hier. Ist eine Funktion jedoch noch sehr experimentell und nicht in mehreren Browsern implementiert und/oder könnte sich ändern, ist sie immer noch für die Aufnahme geeignet, könnte jedoch nicht als Priorität für das Redaktionsteam angesehen werden.

Mit anderen Worten sollten Webtechnologien, die auf MDN Web Docs dokumentiert werden, alle folgenden Kriterien erfüllen:

- Sie befinden sich auf einem Standardisierungspfad.
- Sie sind in einer von einer zuverlässigen Normungsorganisation veröffentlichten Spezifikation spezifiziert.
- Sie sind in mindestens einer Rendering-Engine implementiert worden.
- Sie sind in einer stabilen Browser-Version veröffentlicht.

Unser Hauptaugenmerk liegt darauf, über die folgenden Frontend-Webtechnologien zu schreiben:

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [JavaScript](/de/docs/Web/JavaScript)
- [Web APIs](/de/docs/Web/API)
- [HTTP](/de/docs/Web/HTTP)

Wir dokumentieren auch einige breitere Themen wie [SVG](/de/docs/Web/SVG), [XML](/de/docs/Web/XML), [WebAssembly](/de/docs/WebAssembly) und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility). Darüber hinaus bieten wir umfangreiche [Lernleitfäden](/de/docs/Learn_web_development) für diese Technologien sowie ein [Glossar](/de/docs/Glossary) an.

> [!NOTE]
> Backend-Technologien verfügen in der Regel über ihre eigene Dokumentation, die MDN Web Docs nicht zu ersetzen versucht, obwohl wir [einige Ausnahmen haben](/de/docs/Learn_web_development/Extensions/Server-side).

Alle Inhalte in MDN Web Docs müssen für den technologischen Bereich, in dem sie erscheinen, relevant sein. Beitragsleistende werden erwartet, diesen [MDN-Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) für Schreibstil, Code-Beispiele und andere Themen zu folgen.

Weitere Details zu den Kriterien, ob eine Technologie in MDN Web Docs dokumentiert werden kann, finden Sie auf der Seite [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Wenn wir eine neue Technologie dokumentieren

Auf MDN Web Docs sind wir ständig bemüht, neue Webstandard-Technologien zu dokumentieren, wenn dies angebracht ist.
Wir versuchen, ein Gleichgewicht zu finden zwischen der frühen Veröffentlichung der Dokumentation, damit Entwickler neue Funktionen so schnell wie möglich erlernen können, und einer späteren Veröffentlichung, wenn die Technologie ausgereift und stabil ist, damit die Dokumentation nicht ständig aktualisiert oder schnell entfernt werden muss.

Im Allgemeinen definieren wir den frühesten Zeitpunkt, zu dem wir in Betracht ziehen, eine neue Technologie zu dokumentieren, folgendermaßen: _Wenn die Funktion sich auf einem Standardpfad befindet und irgendwo implementiert ist._

Wir ziehen die Dokumentation einer neuen Technologie in Betracht, wenn sie:

- In einem Spezifikationsdokument spezifiziert ist, das von einer zuverlässigen Normungsorganisation (wie W3C, WHATWG, Khronos, IETF, usw.) veröffentlicht wurde und ein angemessenes Maß an Stabilität erreicht hat (z. B. ein W3C-Arbeitsentwurf oder eine Empfehlungskandidatur, oder wenn die Spezifikation anhand der Menge der eingereichten Probleme als stabil angesehen wird), und
- In mindestens einem Browser konsistent implementiert ist, während andere Browser-Entwickler Interesse zeigen (z. B. ein aktives Ticket oder ein laufender Prozess zur "Absicht zur Implementierung").

Wir dokumentieren keine neue Technologie, wenn:

- Es keine Spezifikation gibt oder die Spezifikation eine grobe Notiz ist, die sich wahrscheinlich ändern wird,
- Einer oder kein Browser sie derzeit implementiert hat und Browser, die sie nicht unterstützen, kein Interesse zeigen, sie zu implementieren. Dies lässt sich durch das Fragen von Ingenieuren, die an diesen Browsern arbeiten, oder durch die Betrachtung von Browser-Bugtrackern und Mailinglisten beurteilen,
- Es sich nicht um eine dem Web zugängliche Technologie handelt und/oder sie vollständig proprietär ist, oder
- Sie bereits Anzeichen einer Einstellung zeigt oder durch eine ähnliche Funktion überholt werden könnte.

## Themen, die nicht zu MDN Web Docs gehören

Im Allgemeinen gehört alles, was kein offener Webstandard ist, nicht zu MDN Web Docs. Spam (kommerzieller Werbung) und andere irrelevante Inhalte werden niemals auf der Website akzeptiert. Mitwirkende, die weiterhin Spam einreichen, können nach Ermessen der Mozilla MDN-Redaktion von MDN ausgeschlossen werden.

Beispiele für unpassende Themen für MDN Web Docs sind:

- Technologien, die nicht im Web verfügbar sind und spezifisch für einen Browser sind.
- Technologien, die nicht mit dem Web zu tun haben.
- Dokumentation für Endbenutzer. Für Mozilla-Produkte gehört solche Dokumentation beispielsweise auf die [Mozilla-Support-Website](https://support.mozilla.org/).
- Selbstverlinkung oder selbstfördernde externe Links. Lesen Sie die Richtlinien dazu in unserem [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), bevor Sie einen externen Link hinzufügen.

### Wann wir Dokumentation entfernen

Seiten werden von MDN Web Docs gelöscht, wenn sie keine Informationen mehr enthalten, die in irgendeiner Weise nützlich sind, ausreichend veraltet sind und/oder bis zu dem Punkt falsch sein könnten, an dem sie irreführend sein könnten.

Die folgenden Beispiele beschreiben Situationen, in denen Seiten/Inhalte möglicherweise gelöscht werden:

- Artikel enthalten Informationen über Funktionen, die nicht in allen Browsern implementiert wurden und später zurückgezogen wurden (meist experimentelle Funktionen wie vorangestellte Funktionalität).
- Referenzseiten beschreiben Funktionen, die aus der Spezifikation entfernt wurden, bevor sie in einem Browser implementiert wurden.
- Artikel behandeln Techniken, die später als schlechte Praktiken gezeigt wurden und durch bessere Techniken ersetzt wurden.
- Artikel enthalten Informationen, die später durch andere, qualitativ bessere Artikel ersetzt wurden.
- Artikel enthalten Inhalte, die ungeeignet für MDN Web Docs sind.
- Bereiche von MDN Web Docs konzentrieren sich nicht auf offene Webtechnologien und sind eine Wartungsbelastung.

Weitere Informationen dazu, _wie_ Dokumente gelöscht werden können, finden Sie im [Leitfaden zum Erstellen, Verschieben und Löschen von Seiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Erlaubte Dokumenttypen auf MDN Web Docs

Im Allgemeinen fallen unsere Dokumentationen in die folgenden Kategorien:

- Referenz
- Leitfaden
- Glossar
- Lernen/Tutorials

Im Allgemeinen sind MDN Web Docs für _Produkt_-Dokumentation gedacht, nicht für _Projekt_- oder _Prozess_-Dokumentation. Wenn das Dokument also beschreibt „wie man ein Ding benutzt“ oder „wie ein Ding funktioniert“ (wobei das „Ding“ in eine der oben genannten Themenkategorien fällt), dann gehört es zu MDN Web Docs.

Wenn ein Dokument jedoch beschreibt „wer an der Entwicklung eines Dings arbeitet“ oder „welche Pläne es für die Entwicklung eines Dings gibt“, dann gehört es nicht zu MDN Web Docs.

Hier einige Beispiele für Dokumenttypen, die _nicht_ auf MDN Web Docs platziert werden sollten:

- Planungsdokumente
- Entwurfsdokumente
- Projektvorschläge
- Spezifikationen oder Standards
- Werbematerial, Werbung oder persönliche Informationen
