---
title: Anleitung zur Dokumentation eines HTTP-Headers
short-title: Dokumentieren eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Im [HTTP-Header-Referenz](/de/docs/Web/HTTP/Reference/Headers) wird der Header-Abschnitt von Anfrage- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)) dokumentiert. Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA führt ein [Verzeichnis der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Wenn es auf der aktuellen [HTTP-Header-Referenz-Übersichtsseite](/de/docs/Web/HTTP/Reference/Headers) **rote Links** gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Wenn Sie unsicher sind, [fragen Sie das MDN Web Docs Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die vorhandenen HTTP-Header-Seiten

- Bestehende HTTP-Header sind [hier](/de/docs/Web/HTTP/Reference/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: [Request Header](/de/docs/Glossary/Request_header), [Response Header](/de/docs/Glossary/Response_header) und [Representation Header](/de/docs/Glossary/Representation_header).
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anfrage- als auch Antwort-Header sein können).
- Gehen Sie zu einer bestehenden Header-Referenzseite, die derselben Kategorie angehört.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter diesem Verzeichnis: [`files/en-us/web/http/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/headers)
- Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie die kopierte Struktur von einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Es liegt an Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie diese Abschnitte haben:

  - Einführender Text, in dem der Header-Name (fett) erwähnt und sein Zweck zusammengefasst wird.
  - Informationsbox, die mindestens den Header-Typ und ob der Header ein [verbotener Anfrage-Header](/de/docs/Glossary/Forbidden_request_header) ist, enthält.
  - Eine Syntax-Box, die alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header zeigt oder wo und wie er normalerweise auftritt.
  - Ein Abschnitt mit Spezifikationen, der relevante RFC-Standarddokumente auflistet.
  - Ein „Weitere Informationen“-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Browser-Kompatibilitätsinformationen hinzu

- Wenn Sie andere HTTP-Header-Seiten betrachtet haben, werden Sie sehen, dass ein `\{{Compat}}`-Makro vorhanden ist, das eine Browser-Tabelle für Sie ausfüllt.
- Die Kompatibilitätstabellenseite wird aus strukturierten Daten generiert. Wenn Sie Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns eine Pull-Request.

## Schritt 6 – Aktualisieren Sie die HTTP-Header-Liste

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [HTTP-Header-Referenz-Übersichtsseite](/de/docs/Web/HTTP/Reference/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, senden Sie sie als Pull-Request. Ein Mitglied unseres Review-Teams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
