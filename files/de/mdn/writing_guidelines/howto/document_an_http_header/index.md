---
title: Anleitung zur Dokumentation eines HTTP-Headers
short-title: Dokumentation eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die [HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) dokumentiert den Header-Abschnitt von Anfrage- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)). Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA führt ein [Register der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf. Nicht alle sind relevant für Webentwickler oder Teil eines offiziellen Standards.
- Falls es **rote Links** auf der aktuellen [Übersichtsseite der HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Im Zweifelsfall [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Prüfen Sie die vorhandenen HTTP-Header-Seiten

- Vorhandene HTTP-Header sind [hier](/de/docs/Web/HTTP/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}} und {{Glossary("Representation_header", "Repräsentations-Header")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anfrage- als auch Antwort-Header sein können).
- Gehen Sie zu einer bestehenden Header-Referenzseite mit derselben Kategorie.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter folgendem Pfad: [`files/en-us/web/http/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/headers)
- Um eine neue Seite zu erstellen, folgen Sie den Anweisungen in unserem [Leitfaden zur Seitenerstellung](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlage für eine HTTP-Header-Seite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur von einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Die Wahl liegt bei Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie folgende Abschnitte haben:

  - Einleitender Text, in dem der Header-Name (fett) im ersten Satz erwähnt wird und der seinen Zweck zusammenfasst.
  - Informationsbox, die mindestens den Header-Typ enthält und ob der Header ein {{Glossary("Forbidden_header_name", "verbotener Header-Name")}} ist.
  - Ein Syntax-Block, der alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er normalerweise vorkommt.
  - Ein Spezifikationsabschnitt, der relevante RFC-Standarddokumente auflistet.
  - Ein "Siehe auch"-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Informationen zur Browser-Kompatibilität hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}`-Makro gibt, das eine Browser-Tabelle für Sie ausfüllt.
- Die Kompatibilitätstabellenseite wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, sehen Sie sich bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> an und senden Sie uns eine Pull-Anfrage.

## Schritt 6 – Aktualisieren Sie die HTTP-Headers-Liste

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [Übersichtsseite der HTTP-Headers-Referenz](/de/docs/Web/HTTP/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull-Anfrage ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zur Überprüfung Ihrer Seite zugewiesen.
