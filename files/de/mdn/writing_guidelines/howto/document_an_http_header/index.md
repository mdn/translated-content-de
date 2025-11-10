---
title: Anleitung zur Dokumentation eines HTTP-Headers
short-title: Einen HTTP-Header dokumentieren
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die [HTTP-Headers-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert den Header-Bereich von Anfragen und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)). Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- Die IANA führt ein [Register der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml), und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Wenn es **rote Links** auf der aktuellen [HTTP-Headers-Referenz-Übersichtsseite](/de/docs/Web/HTTP/Reference/Headers) gibt, sind diese Header eine gute Wahl für die Dokumentation.
- Im Zweifelsfall [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die bestehenden HTTP-Header-Seiten

- Bestehende HTTP-Header sind [in der HTTP-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Request header")}}, {{Glossary("Response_header", "Response header")}} und {{Glossary("Representation_header", "Representation header")}}.
- Finden Sie die Kategorie des Headers heraus, den Sie dokumentieren möchten (beachten Sie, dass einige Header sowohl Anfrage- als auch Antwort-Header sein können, je nach Kontext).
- Gehen Sie zu einer vorhandenen Header-Referenzseite, die der gleichen Kategorie angehört.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter folgendem Verzeichnis: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)
- Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur einer der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Die Wahl liegt bei Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie diese Abschnitte enthalten:
  - Einführungstext, in dem der erste Satz den Headernamen (fettgedruckt) erwähnt und seinen Zweck zusammenfasst.
  - Informationsbox, die mindestens den Header-Typ enthält und ob es sich um einen {{Glossary("Forbidden_request_header", "Verbotenen Anfrage-Header")}} handelt.
  - Eine Syntaxbox, die alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er üblicherweise vorkommt.
  - Ein Abschnitt mit Spezifikationen, der relevante RFC-Standarddokumente auflistet.
  - Ein "Siehe auch"-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Browser-Kompatibilitätsinformationen hinzufügen

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}`-Makro gibt, das automatisch eine Browser-Tabelle für Sie ausfüllt.
- Die Kompatibilitäts-Tabelle-Seite wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns eine Pull-Anfrage.

## Schritt 6 – Aktualisieren Sie die HTTP-Headers-Liste

Stellen Sie sicher, dass Ihr Header in der entsprechenden Kategorie auf der [HTTP-Headers-Referenz-Übersichtsseite](/de/docs/Web/HTTP/Reference/Headers) aufgelistet ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull-Anfrage ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
