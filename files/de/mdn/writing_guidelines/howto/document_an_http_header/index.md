---
title: Anleitung zum Dokumentieren eines HTTP-Headers
short-title: Dokumentieren eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

Die [HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) dokumentiert den Header-Abschnitt von Anforderungs- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)).
Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

## Schritt 1 – Bestimmen Sie den HTTP-Header, den Sie dokumentieren möchten

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA pflegt ein [Register der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml), und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Wenn es **rote Links** auf der aktuellen [Übersichtsseite der HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) gibt, sind diese Header eine gute Wahl, um dokumentiert zu werden.
- Wenn Sie unsicher sind, [fragen Sie das MDN Web Docs Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die vorhandenen HTTP-Header-Seiten

- Vorhandene HTTP-Header werden [hier](/de/docs/Web/HTTP/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}} und {{Glossary("Representation_header", "Repräsentationsheader")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anforderungs- als auch Antwortheader sein können).
- Gehen Sie zu einer vorhandenen Header-Referenzseite, die zur gleichen Kategorie gehört.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter folgendem Pfad: [`files/en-us/web/http/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/headers)
- Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur von einem der vorhandenen HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Die Entscheidung liegt bei Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Achten Sie darauf, dass Sie diese Abschnitte haben:

  - Ein einleitender Text, in dem im ersten Satz der Header-Name (fett) erwähnt und sein Zweck zusammengefasst wird.
  - Eine Informationsbox, die mindestens den Header-Typ enthält und ob der Header ein {{Glossary("Forbidden_request_header", "verbotener Anforderungsheader")}} ist.
  - Eine Syntax-Box, die alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Einen Abschnitt, der diese Direktiven/Werte erklärt.
  - Einen Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er üblicherweise vorkommt.
  - Einen Abschnitt mit Spezifikationen, der relevante RFC-Standarddokumente auflistet.
  - Einen "Siehe auch"-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Informationen zur Browser-Kompatibilität hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie feststellen, dass es ein `\{{Compat}}` Makro gibt, das für Sie eine Browser-Tabelle einfügt.
- Die Seite der Kompatibilitäts-Tabelle wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns eine Pull-Anfrage.

## Schritt 6 – Aktualisieren Sie die Liste der HTTP-Header

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [Übersichtsseite der HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie diese als Pull-Anfrage ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
