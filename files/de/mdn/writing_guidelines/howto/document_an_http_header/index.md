---
title: Anleitung zur Dokumentation eines HTTP-Headers
short-title: Dokumentation eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

Die [HTTP-Headers-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert den Header-Bereich von Anfrage- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)).
Dieser Artikel erklärt, wie man eine neue Referenzseite für einen HTTP-Header erstellt.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA pflegt ein [Register von HTTP-Header-Feldern](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Wenn es **rote Links** auf der aktuellen [HTTP-Headers-Referenzübersichtsseite](/de/docs/Web/HTTP/Reference/Headers) gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Im Zweifelsfall, [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die vorhandenen HTTP-Header-Seiten

- Bestehende HTTP-Header sind [in der HTTP-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}} und {{Glossary("Representation_header", "Repräsentations-Header")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anfrage- als auch Antwort-Header sein können).
- Gehen Sie zu einer vorhandenen Header-Referenzseite, die derselben Kategorie angehört.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich in diesem Verzeichnis: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)
- Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur von einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Die Entscheidung liegt bei Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie diese Abschnitte haben:

  - Ein einleitender Text, in dem der Header-Name (fett) im ersten Satz erwähnt und sein Zweck zusammengefasst wird.
  - Ein Informationskasten, der mindestens den Header-Typ und ob der Header ein {{Glossary("Forbidden_request_header", "verbotener Anfrage-Header")}} ist, enthält.
  - Eine Syntaxbox, die alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der eine praktische Nutzung dieses Headers zeigt oder wo und wie er üblicherweise vorkommt.
  - Ein Abschnitt zur Spezifikation, der relevante RFC-Standarddokumente auflistet.
  - Ein "Siehe auch"-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Informationen zur Browser-Kompatibilität hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}`-Makro gibt, das für Sie eine Browsertabelle ausfüllt.
- Die Kompatibilitätstabellenseite wird aus strukturierten Daten generiert. Wenn Sie Daten beitragen möchten, schauen Sie sich bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> an und senden Sie uns einen Pull-Request.

## Schritt 6 – Aktualisieren Sie die Liste der HTTP-Header

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [HTTP-Headers-Referenzübersichtsseite](/de/docs/Web/HTTP/Reference/Headers) aufgelistet ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
