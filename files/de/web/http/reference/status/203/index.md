---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`203 Non-Authoritative Information`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich war, aber ein _transformierender {{Glossary("Proxy_server", "Proxy")}}_ die Header oder den beigefügten Inhalt der {{HTTPStatus("200")}} (`OK`)-Antwort des Ursprungsservers modifiziert hat.

Der Zweck dieses Statuscodes ist es, transformierenden Proxies zu erlauben, Clients zu benachrichtigen, wenn Änderungen an erfolgreichen Antworten vorgenommen wurden, da dies Entscheidungen hinsichtlich des Inhalts später beeinflussen könnte. Transformationen an Nachrichten können die Modifikation von Headern bedeuten, um anzuzeigen, dass eine Ressource von einem Spiegel oder einem Backup stammt, können aber auch eine Anpassung des Inhalts in einer Weise bedeuten, die für den Client als wünschenswert erachtet wird. Diese Modifikationen können das Filtern von Malware, das Transkodieren von Formaten, das Filtern von Datenschutzinformationen oder andere Hinweise an den Client bezüglich zukünftiger Anfragen umfassen.

Die `203`-Antwort ähnelt dem [`214`](/de/docs/Web/HTTP/Reference/Headers/Warning#warning_codes) `Transformation Applied`-Wert des veralteten {{HTTPHeader("Warning")}} Headers, der auf Antworten mit jedem Statuscode anwendbar sein könnte.

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

Ein Proxy hat die Nachricht basierend auf Malware-Filterregeln für bekannte unsichere Anhänge verändert. Der Antwortinhalt wurde modifiziert, indem der `attachment_url`-Wert durch einen Link mit Informationen über den angewendeten Filter ersetzt wurde:

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
- {{Glossary("Proxy_server", "Proxyserver")}}
- {{HTTPHeader("Warning")}}
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
