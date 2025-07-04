---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`203 Non-Authoritative Information`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich war, aber ein _transformierender {{Glossary("Proxy_server", "Proxy")}}_ die Header oder den eingeschlossenen Inhalt aus der {{HTTPStatus("200")}} (`OK`)-Antwort des Ursprungsservers modifiziert hat.

Der Zweck dieses Statuscodes besteht darin, transformierenden Proxies zu erlauben, Clients zu benachrichtigen, wenn Änderungen an erfolgreichen Antworten vorgenommen wurden, da dies Entscheidungen bezüglich des Inhalts später beeinflussen kann.
Transformationen von Nachrichten können Modifikationen von Headern bedeuten, um anzuzeigen, dass eine Ressource von einem Spiegelserver oder einem Backup stammt, aber sie können auch bedeuten, den Inhalt auf eine Art zu ändern, die aus Sicht des Clients wünschenswert erscheint.
Diese Änderungen können Malware-Filterung, Formatkonvertierung, Datenschutzfilterung oder andere Hinweise auf künftige Anfragen an den Client umfassen.

Die `203`-Antwort ist ähnlich dem [`214`](/de/docs/Web/HTTP/Reference/Headers/Warning#warning_codes)-Wert `Transformation Applied` des veralteten {{HTTPHeader("Warning")}}-Headers, der auf Antworten mit jedem Statuscode anwendbar sein kann.

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

Ein Proxy hat die Nachricht basierend auf Malware-Filterregeln für bekannte unsichere Anhänge geändert.
Der Antwortinhalt wurde modifiziert, indem der Wert `attachment_url` durch einen Link mit Informationen über die angewandte Filterung ersetzt wurde:

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
- {{Glossary("Proxy_server", "Proxy-Server")}}
- {{HTTPHeader("Warning")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
