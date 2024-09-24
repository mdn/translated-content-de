---
title: So dokumentieren Sie einen HTTP-Header
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{MDNSidebar}}

Die [Referenz zu HTTP-Headern](/de/docs/Web/HTTP/Headers) auf MDN Web Docs dokumentiert HTTP-Headerfelder. Diese sind Komponenten des Header-Abschnitts von Anforderungs- und Antwortnachrichten im Hypertext-Übertragungsprotokoll ([HTTP](/de/docs/Web/HTTP)). Sie definieren die Betriebsparameter einer HTTP-Transaktion. Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

Sie müssen einige Kenntnisse über [HTTP](/de/docs/Web/HTTP) haben oder bereit sein, sich einzuarbeiten.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA pflegt ein [Register der HTTP-Headerfelder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Headerfelder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Falls es auf der aktuellen [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Headers) **rote Links** gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Wenn Sie unsicher sind, [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die vorhandenen HTTP-Header-Seiten

- Bestehende HTTP-Header sind [hier](/de/docs/Web/HTTP/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request header")}}, {{Glossary("Response header")}}, und {{Glossary("Representation header")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anforderungs- als auch Antwortheader sein können).
- Gehen Sie zu einer bestehenden Header-Referenzseite, die dieselbe Kategorie hat.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter diesem Baum: [/docs/Web/HTTP/Headers/](/de/docs/Web/HTTP/Headers)
- Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem Leitfaden [wie man eine Seite erstellt](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Entweder beginnen Sie mit unserer [Vorlage für HTTP-Header-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder Sie verwenden eine kopierte Struktur von einem der vorhandenen HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Es ist Ihre Wahl.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie diese Abschnitte haben:

  - Einführungstext, bei dem der erste Satz den Headernamen (fett) erwähnt und seinen Zweck zusammenfasst.
  - Informationsbox, die mindestens den Header-Typ und ob der Header ein {{Glossary("Forbidden header name")}} ist, enthält.
  - Eine Syntaxbox, die alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er normalerweise auftritt.
  - Ein Abschnitt zur Spezifikation, der relevante RFC-Standarddokumente auflistet.
  - Ein Abschnitt "Siehe auch", der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Browserkompatibilitätsinformationen hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}`-Makro gibt, das für Sie eine Browser-Tabelle ausfüllt.
- Die Kompatibilitätstabellenseite wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen auf <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns einen Pull-Request.

## Schritt 6 – Aktualisieren Sie die Liste der HTTP-Header

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [HTTP-Header-Referenzübersichtsseite](/de/docs/Web/HTTP/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
