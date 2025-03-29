---
title: Anleitung zur Dokumentation eines HTTP-Headers
short-title: Dokumentation eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Die [HTTP-Header-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert den Header-Abschnitt von Anfragen- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)). Dieser Artikel erklärt, wie man eine neue Referenzseite für einen HTTP-Header erstellt.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA führt ein [Register der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Wenn es **rote Links** auf der aktuellen [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Reference/Headers) gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Wenn Sie unsicher sind, fragen Sie das [MDN Web Docs Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die bestehenden HTTP-Header-Seiten

- Bestehende HTTP-Header sind [hier](/de/docs/Web/HTTP/Reference/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}} und {{Glossary("Representation_header", "Repräsentations-Header")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anfrage- als auch Antwort-Header sein können).
- Gehen Sie zu einer bestehenden Header-Referenzseite mit derselben Kategorie.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter folgendem Verzeichnis: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)
- Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Schritt 4 – Schreiben Sie den Inhalt

- Entweder starten Sie mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur von einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Es liegt an Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie folgende Abschnitte einfügen:

  - Einleitungstext, in dem der Header-Name (fett) genannt und dessen Zweck zusammengefasst wird.
  - Informationsbox, die mindestens den Header-Typ und ob der Header ein {{Glossary("Forbidden_request_header", "verbotener Anfrage-Header")}} ist, enthält.
  - Eine Syntaxbox mit allen möglichen Direktiven/Parametern/Werten des HTTP-Headers.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der eine praktische Anwendung für diesen Header enthält oder zeigt, wo und wie er üblicherweise auftritt.
  - Einen Abschnitt Spezifikationen, der relevante RFC-Standarddokumente auflistet.
  - Einen Abschnitt "Siehe auch", der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Informationen zur Browser-Kompatibilität hinzu

- Wenn Sie andere HTTP-Header-Seiten betrachtet haben, werden Sie sehen, dass es ein `\{{Compat}}` Makro gibt, das Ihnen eine Browser-Tabelle ausfüllt.
- Die Kompatibilitätstabelle wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns einen Pull-Request.

## Schritt 6 – Aktualisieren Sie die HTTP-Header-Liste

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Reference/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie diese als Pull-Request ein. Ein Mitglied unseres Review-Teams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
