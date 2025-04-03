---
title: Network Error Logging
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-_Antwort-Header_ konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (und, wenn gewünscht, erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.

Berichte werden an eine im {{HTTPHeader("Report-To")}}-Header definierte Berichtsgruppe gesendet.

## Verwendung

Webanwendungen entscheiden sich für dieses Verhalten mit dem NEL-Header, der ein _{{Glossary("Response_header", "JSON-codiertes")}}_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein vom Browser als sicher betrachteter Ursprung ist erforderlich.

Die folgenden Objektschlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API) Gruppe, an die Netzwerkausfallberichte gesendet werden (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lang ist wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn true, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header gesetzt ist. Die Berichtsgruppe sollte ebenfalls so eingestellt sein, dass Subdomains einbezogen werden, wenn diese Option aktiviert werden soll.
- success_fraction
  - : Ein Gleitkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerk-Anfragen angibt, die gemeldet werden sollen. Standardmäßig 0, sodass keine erfolgreichen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.
- failure_fraction
  - : Ein Gleitkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerk-Anfragen angibt, die gemeldet werden sollen. Standardmäßig 1, sodass alle fehlgeschlagenen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.

Die oben referenzierte Berichtsgruppe wird in üblicher Weise im {{HTTPHeader("Report-To")}}-Header definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Inhalt der Reporting API-Antwort angezeigt. Der oberste **`"body"`**-Schlüssel enthält den Netzwerkausfallbericht.

### HTTP 400 (Bad Request) Antwort

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 338,
    "method": "POST",
    "phase": "application",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "192.0.2.172",
    "status_code": 400,
    "type": "http.error",
    "url": "https://example.com/bad-request"
  }
}
```

### DNS-Name nicht aufgelöst

Beachten Sie, dass die Phase in diesem Bericht auf `dns` eingestellt ist und keine `server_ip` verfügbar ist, um einbezogen zu werden.

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 18,
    "method": "POST",
    "phase": "dns",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "",
    "status_code": 0,
    "type": "dns.name_not_resolved",
    "url": "https://example-host.com/"
  }
}
```

Der Typ des Netzwerkausfalls kann einer der folgenden vordefinierten Werte aus der Spezifikation sein, aber Browser können eigene Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Benutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Benutzers hat geantwortet, konnte jedoch keine IP-Adresse für die angeforderte URI auflösen.
- `dns.failed`
  - : Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die von vorherigen Fehlern nicht abgedeckt sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die IP-Adresse des Servers, der den ursprünglichen Bericht geliefert hat, sich von der aktuellen Server-IP-Adresse zum Zeitpunkt der Fehlergenerierung unterscheidet, werden die Berichtsdateien heruntergestuft, sodass nur Informationen über dieses Problem enthalten sind und der Typ auf `dns.address_changed` gesetzt wird.
- `tcp.timed_out`
  - : TCP-Verbindung zum Server ist abgelaufen
- `tcp.closed`
  - : Die TCP-Verbindung wurde vom Server geschlossen
- `tcp.reset`
  - : Die TCP-Verbindung wurde zurückgesetzt
- `tcp.refused`
  - : Die TCP-Verbindung wurde vom Server abgelehnt
- `tcp.aborted`
  - : Die TCP-Verbindung wurde abgebrochen
- `tcp.address_invalid`
  - : Die IP-Adresse ist ungültig
- `tcp.address_unreachable`
  - : Die IP-Adresse ist nicht erreichbar
- `tcp.failed`
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die von vorherigen Fehlern nicht abgedeckt sind
- `http.error`
  - : Der Benutzeragent hat erfolgreich eine Antwort erhalten, aber diese hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Antwort ist leer, hat eine falsche Inhaltslänge, hat eine falsche Kodierung und/oder andere Bedingungen, die den Benutzeragenten daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Weiterleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll gescheitert, die von vorherigen Fehlern nicht abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
