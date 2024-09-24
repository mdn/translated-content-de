---
title: 203 Nicht-autoritative Informationen
slug: Web/HTTP/Status/203
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`203 Nicht-autoritative Informationen`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich war, aber ein _transformierender {{Glossary("Proxy server", "proxy")}}_ die Header oder den beigefügten Inhalt der {{HTTPStatus("200")}} (`OK`)-Antwort des Ursprungsservers geändert hat.

Der Zweck dieses Statuscodes besteht darin, transformierenden Proxys die Möglichkeit zu geben, Clients zu benachrichtigen, wenn Änderungen an erfolgreichen Antworten vorgenommen wurden, da dies spätere Entscheidungen bezüglich des Inhalts beeinflussen kann. Transformationen von Nachrichten können Modifikationen von Headern bedeuten, um anzuzeigen, dass eine Ressource von einem Spiegel- oder Backup-Server stammt, aber auch die Inhaltänderung auf eine Weise, die für den Client als wünschenswert angesehen wird. Diese Modifikationen könnten Malware-Filterung, Format-Transkodierung, Datenschutzfilterung oder andere Hinweise für den Client über zukünftige Anfragen umfassen.

Die `203`-Antwort ist ähnlich dem [`214`](/de/docs/Web/HTTP/Headers/Warning#warning_codes) `Transformation Applied`-Wert des veralteten {{HTTPHeader("Warning")}}-Headers, der auf Antworten mit jedem Statuscode zutreffen kann.

## Status

```http
203 Non-Authoritative Information
```

## Beispiele

### Empfang einer gefilterten Nachrichtenantwort

In diesem Beispiel sendet ein Benutzer eine `GET`-Anfrage für Inhalte mit der ID `123` an `example.com`.

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

Ein Proxy hat die Nachricht basierend auf Malware-Filterregeln für bekannte unsichere Anhänge verändert. Der Antwortinhalt wurde modifiziert, indem der `attachment_url`-Wert durch einen Link mit Informationen über die angewendete Filterung ersetzt wurde:

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
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
