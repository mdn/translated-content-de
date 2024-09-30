---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`203 Non-Authoritative Information`** ([Erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses)) zeigt an, dass die Anfrage erfolgreich war, aber ein _transformierender [Proxy](/de/docs/Glossary/Proxy_server)_ die Header oder den eingeschlossenen Inhalt der {{HTTPStatus("200")}} (`OK`)-Antwort des Ursprungsservers geändert hat.

Der Zweck dieses Statuscodes ist es, transformierenden Proxies die Möglichkeit zu geben, Clients zu benachrichtigen, wenn Änderungen an erfolgreichen Antworten vorgenommen wurden, da dies Entscheidungen bezüglich des Inhalts während nachfolgender Schritte beeinflussen kann. Transformationen von Nachrichten können Modifikationen von Headern bedeuten, um anzuzeigen, dass eine Ressource von einem Spiegelserver oder einem Backup stammt, können jedoch auch Änderungen am Inhalt umfassen, die für den Client wünschenswert sind. Diese Modifikationen könnten Malware-Filterung, Format-Transkodierung, Datenschutzfilterung oder andere Hinweise an den Client über zukünftige Anfragen beinhalten.

Die `203`-Antwort ähnelt dem [`214`](/de/docs/Web/HTTP/Headers/Warning#warning_codes) `Transformation Applied` Wert des veralteten {{HTTPHeader("Warning")}} Headers, der für Antworten mit jedem Statuscode anwendbar sein könnte.

## Status

```http
203 Non-Authoritative Information
```

## Beispiele

### Empfang einer gefilterten Nachrichtenantwort

In diesem Beispiel sendet ein Benutzer eine `GET`-Anfrage für den Inhalt mit der ID `123` an `example.com`.

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

Ein Proxy hat die Nachricht basierend auf Malware-Filterregeln für bekannte unsichere Anhänge geändert. Der Antwortinhalt wurde modifiziert, indem der `attachment_url`-Wert durch einen Link mit Informationen über den angewendeten Filter ersetzt wurde:

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "comment": "Check out my bio!",
  "attachment_url": "https://example.com/attachment-unavailable-faq"
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("200")}}
- [Proxy-Server](/de/docs/Glossary/Proxy_server)
- {{HTTPHeader("Warning")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
