---
title: Anleitung zur Dokumentation eines HTTP-Headers
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{MDNSidebar}}

Das [HTTP-Header-Referenz](/de/docs/Web/HTTP/Headers) auf den MDN Web Docs dokumentiert HTTP-Header-Felder. Diese sind Komponenten des Header-Abschnitts von Anforderungs- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)). Sie definieren die Betriebsparameter einer HTTP-Transaktion. Dieser Artikel erklärt, wie man eine neue Referenzseite für einen HTTP-Header erstellt.

Sie sollten einige Kenntnisse über [HTTP](/de/docs/Web/HTTP) besitzen oder sich darin einarbeiten können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden HTTP-Header

- Es gibt viele HTTP-Header, die in verschiedenen IETF-Standards definiert sind.
- IANA führt ein [Register der HTTP-Header-Felder](https://www.iana.org/assignments/http-fields/http-fields.xhtml) und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf, aber nicht alle sind für Webentwickler relevant oder Teil eines offiziellen Standards.
- Falls es **rote Links** auf der aktuellen [Übersichtsseite der HTTP-Header-Referenz](/de/docs/Web/HTTP/Headers) gibt, sind diese Header eine gute Wahl zum Dokumentieren.
- Bei Unsicherheiten [fragen Sie das MDN Web Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen gewählten Header zu schreiben.

## Schritt 2 – Überprüfen Sie die bestehenden HTTP-Header-Seiten

- Vorhandene HTTP-Header sind [hier](/de/docs/Web/HTTP/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: [Anforderungs-Header](/de/docs/Glossary/Request_header), [Antwort-Header](/de/docs/Glossary/Response_header) und [Repräsentations-Header](/de/docs/Glossary/Representation_header).
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten (beachten Sie, dass einige Header je nach Kontext sowohl Anforderungs- als auch Antwort-Header sein können).
- Gehen Sie zu einer bestehenden Header-Referenzseite, die dieselbe Kategorie hat.

## Schritt 3 – Erstellen Sie die HTTP-Header-Seite

- Alle Header-Seiten befinden sich unter diesem Pfad: [/docs/Web/HTTP/Headers/](/de/docs/Web/HTTP/Headers)
- Um eine neue Seite zu erstellen, folgen Sie den Anweisungen in unserem [Leitfaden zur Seitenerstellung](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Schreiben Sie den Inhalt

- Beginnen Sie entweder mit unserer [Vorlagen-HTTP-Header-Seite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder nutzen Sie eine kopierte Struktur von einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Das bleibt Ihnen überlassen.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass Sie diese Abschnitte enthalten:

  - Einführungstext, in dem der Headername (fett) und sein Zweck zusammengefasst werden.
  - Informationsfeld, das mindestens den Header-Typ und ob der Header ein [forbidden header name](/de/docs/Glossary/Forbidden_header_name) ist, enthält.
  - Ein Syntaxfeld, das alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Einen Abschnitt, der diese Direktiven/Werte erklärt.
  - Einen Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er üblicherweise auftritt.
  - Einen Abschnitt Spezifikation, der relevante RFC-Standarddokumente auflistet.
  - Einen Abschnitt "Siehe auch", der relevante Ressourcen auflistet.

## Schritt 5 – Fügen Sie Browser-Kompatibilitätsinformationen hinzu

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie sehen, dass es ein `\{{Compat}}` Makro gibt, das Ihnen eine Browser-Tabelle ausfüllen wird.
- Die Kompatibilitätstabellen-Seite wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns eine Pull-Anfrage.

## Schritt 6 – Aktualisieren Sie die HTTP-Header-Liste

Stellen Sie sicher, dass Ihr Header in einer geeigneten Kategorie auf der [Übersichtsseite der HTTP-Header-Referenz](/de/docs/Web/HTTP/Headers) aufgeführt ist.

## Schritt 7 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu prüfen.
