---
title: Anleitung zur Dokumentation eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{MDNSidebar}}

Die [HTTP-Header-Referenz](/de/docs/Web/HTTP/Headers) auf den MDN Web Docs dokumentiert HTTP-Header-Felder. Diese sind Komponenten des Header-Abschnitts von Anforderungs- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)). Sie definieren die Betriebsparameter einer HTTP-Transaktion. Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

Sie müssen über Kenntnisse in [HTTP](/de/docs/Web/HTTP) verfügen oder bereit sein, sich in das Thema einzuarbeiten.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- Die IANA pflegt ein [Verzeichnis der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), aber nicht alle sind für Web-Entwickler relevant oder Teil eines offiziellen Standards.
- Wenn es **rote Links** auf der aktuellen [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Headers) gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Im Zweifelsfall [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die vorhandenen HTTP-Header-Seiten

- Vorhandene HTTP-Header sind [hier](/de/docs/Web/HTTP/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: [Request header](/de/docs/Glossary/Request_header), [Response header](/de/docs/Glossary/Response_header) und [Representation header](/de/docs/Glossary/Representation_header).
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (achten Sie darauf, dass einige Header je nach Kontext sowohl Anforderungs- als auch Antwort-Header sein können).
- Gehen Sie zu einer vorhandenen Header-Referenzseite, die zur selben Kategorie gehört.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter diesem Verzeichnis: [/docs/Web/HTTP/Headers/](/de/docs/Web/HTTP/Headers)
- Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Entweder starten Sie mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder Sie verwenden die Struktur einer der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Die Wahl liegt bei Ihnen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie die folgenden Abschnitte haben:

  - Einleitender Text, bei dem im ersten Satz der Headername (fett) genannt und sein Zweck zusammengefasst wird.
  - Informationsbox, die mindestens den Header-Typ und ob der Header ein [Forbidden header name](/de/docs/Glossary/Forbidden_header_name) ist, enthält.
  - Ein Syntax-Feld mit allen möglichen Direktiven/Parametern/Werten des HTTP-Headers.
  - Einen Abschnitt, der diese Direktiven/Werte erklärt.
  - Einen Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er üblicherweise vorkommt.
  - Einen Spezifikationsabschnitt, der relevante RFC-Standard-Dokumente auflistet.
  - Einen „Siehe auch“-Abschnitt, der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Informationen zur Browser-Kompatibilität hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}`-Makro gibt, das Ihnen eine Tabelle zur Browser-Kompatibilität ausfüllt.
- Die Seite mit der Kompatibilitätstabelle wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns eine Pull-Anfrage.

## Schritt 6 – Aktualisieren Sie die HTTP-Header-Liste

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull-Anfrage ein. Ein Mitglied unseres Prüfteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
