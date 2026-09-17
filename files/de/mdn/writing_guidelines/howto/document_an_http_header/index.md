---
title: Anleitung zum Dokumentieren eines HTTP-Headers
short-title: Einen HTTP-Header dokumentieren
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Die [HTTP-Header-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert den Header-Abschnitt von Anforderungs- und Antwortnachrichten im Hypertext Transfer Protocol ([HTTP](/de/docs/Web/HTTP)).
Dieser Artikel erklärt, wie Sie eine neue Referenzseite für einen HTTP-Header erstellen.

## Schritt 1 – Den zu dokumentierenden HTTP-Header bestimmen

- Viele HTTP-Header sind in verschiedenen IETF-Standards definiert.
- IANA verwaltet ein [Register von HTTP-Header-Feldern](https://www.iana.org/assignments/http-fields), und Wikipedia listet die [bekannten Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) auf. Allerdings sind nicht alle für Webentwickler relevant oder Teil eines offiziellen Standards.
- Falls es auf der aktuellen [Übersichtsseite der HTTP-Header-Referenz](/de/docs/Web/HTTP/Reference/Headers) **rote Links** gibt, sind diese Header eine gute Wahl zur Dokumentation.
- Fragen Sie im Zweifelsfall das [MDN-Web-Docs-Team](/de/docs/MDN/Community/Communication_channels), ob es sinnvoll ist, über den von Ihnen ausgewählten Header zu schreiben.

## Schritt 2 – Die bestehenden HTTP-Header-Seiten prüfen

- Bestehende HTTP-Header sind [in der HTTP-Referenz](/de/docs/Web/HTTP/Reference/Headers) dokumentiert.
- Es gibt verschiedene Header-Kategorien: {{Glossary("Request_header", "Request header")}}, {{Glossary("Response_header", "Response header")}} und {{Glossary("Representation_header", "Representation header")}}.
- Finden Sie die Kategorie des Headers, den Sie dokumentieren möchten. Beachten Sie, dass einige Header je nach Kontext sowohl Request- als auch Response-Header sein können.
- Rufen Sie eine bestehende Header-Referenzseite derselben Kategorie auf.

## Schritt 3 – Die HTTP-Header-Seite erstellen

- Alle Header-Seiten befinden sich unter diesem Verzeichnisbaum: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)
- Anweisungen zum Erstellen einer neuen Seite finden Sie in unserem Leitfaden [So erstellen Sie eine Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Den Inhalt schreiben

- Beginnen Sie entweder mit unserer [Vorlagenseite für HTTP-Header](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) oder verwenden Sie eine kopierte Struktur aus einem der bestehenden HTTP-Header-Dokumente, die Sie in Schritt 2 gefunden haben. Sie haben die Wahl.
- Schreiben Sie über den neuen HTTP-Header.
- Stellen Sie sicher, dass die folgenden Abschnitte vorhanden sind:
  - Ein einleitender Text, dessen erster Satz den Header-Namen (fett formatiert) erwähnt und seinen Zweck zusammenfasst.
  - Ein Informationskasten, der mindestens den Header-Typ sowie die Angabe enthält, ob der Header ein {{Glossary("Forbidden_request_header", "Forbidden request header")}} ist.
  - Ein Syntaxkasten, der alle möglichen Direktiven/Parameter/Werte des HTTP-Headers enthält.
  - Ein Abschnitt, der diese Direktiven/Werte erklärt.
  - Ein Beispielabschnitt, der einen praktischen Anwendungsfall für diesen Header enthält oder zeigt, wo und wie er üblicherweise vorkommt.
  - Ein Spezifikationsabschnitt, der relevante RFC-Standarddokumente auflistet.
  - Ein Abschnitt „Siehe auch“, der relevante Ressourcen auflistet.

## Schritt 5 – Informationen zur Browser-Kompatibilität hinzufügen

- Wenn Sie sich andere HTTP-Header-Seiten angesehen haben, werden Sie gesehen haben, dass es ein Makro `\{{Compat}}` gibt, das eine Browser-Tabelle für Sie ausfüllt.
- Die Seite mit der Kompatibilitätstabelle wird aus strukturierten Daten generiert. Wenn Sie zu den Daten beitragen möchten, lesen Sie bitte die Anweisungen unter <https://github.com/mdn/browser-compat-data/blob/main/README.md> und senden Sie uns einen Pull Request.

## Schritt 6 – Die Liste der HTTP-Header aktualisieren

Stellen Sie sicher, dass Ihr Header in einer passenden Kategorie auf der [Übersichtsseite der HTTP-Header-Referenz](/de/docs/Web/HTTP/Reference/Headers) aufgeführt ist.

## Schritt 7 – Den Inhalt überprüfen lassen

Nachdem Sie die Header-Seite erstellt haben, reichen Sie sie als Pull Request ein. Ein Mitglied unseres Review-Teams wird automatisch zur Überprüfung Ihrer Seite zugewiesen.
