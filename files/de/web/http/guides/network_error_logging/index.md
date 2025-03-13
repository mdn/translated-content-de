---
title: Network Error Logging
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-_Antwortheader_ konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabrufe von unterstützten Browsern zu erhalten.

Berichte werden an eine in einem {{HTTPHeader("Report-To")}}-Header definierte Berichtgruppe gesendet.

## Verwendung

Webanwendungen entscheiden sich für dieses Verhalten mit dem NEL-Header, der ein _{{Glossary("Response_header", "JSON-kodiertes")}}_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein vom Browser als sicher eingestufter Ursprung ist erforderlich.

Die folgenden Objekt-Schlüssel können im NEL-Header spezifiziert werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkausfallberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich beschränkt sind). Die referenzierte Berichtgruppe sollte mindestens so lange gültig sein wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn wahr, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header gesetzt ist. Die Berichtgruppe sollte auch so eingestellt sein, dass sie Subdomains einschließt, falls diese Option aktiviert werden soll.
- success_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerkaufrufe angibt, die gemeldet werden sollen. Standardmäßig auf 0 gesetzt, sodass keine erfolgreichen Netzwerkaufrufe gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.
- failure_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerkaufrufe angibt, die gemeldet werden sollen. Standardmäßig auf 1 gesetzt, sodass alle fehlgeschlagenen Netzwerkaufrufe gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.

Die oben referenzierte Berichtgruppe wird wie üblich im {{HTTPHeader("Report-To")}}-Header definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Inhalt der Reporting-API-Antwort gezeigt. Der oberste **`"body"`**-Schlüssel enthält den Netzwerkfehlerbericht.

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt ist und keine `server_ip` verfügbar ist, die eingeschlossen werden könnte.

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

Die Art des Netzwerkfehlers kann einer der folgenden vordefinierten Werte aus der Spezifikation sein, aber Browser können ihre eigenen Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Nutzers ist nicht erreichbar.
- `dns.name_not_resolved`
  - : Der DNS-Server des Nutzers hat geantwortet, konnte jedoch keine IP-Adresse für die angeforderte URI auflösen.
- `dns.failed`
  - : Die Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die nicht durch vorherige Fehler abgedeckt sind (z.B. SERVFAIL).
- `dns.address_changed`
  - : Aus Sicherheitsgründen werden die Berichtsdaten heruntergestuft, wenn die Server-IP-Adresse, die den ursprünglichen Bericht geliefert hat, sich von der aktuellen Server-IP-Adresse zum Zeitpunkt der Fehlererzeugung unterscheidet. Der Typ wird auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : Die TCP-Verbindung zum Server ist abgelaufen.
- `tcp.closed`
  - : Die TCP-Verbindung wurde vom Server geschlossen.
- `tcp.reset`
  - : Die TCP-Verbindung wurde zurückgesetzt.
- `tcp.refused`
  - : Die TCP-Verbindung wurde vom Server abgelehnt.
- `tcp.aborted`
  - : Die TCP-Verbindung wurde abgebrochen.
- `tcp.address_invalid`
  - : Die IP-Adresse ist ungültig.
- `tcp.address_unreachable`
  - : Die IP-Adresse ist nicht erreichbar.
- `tcp.failed`
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die durch vorherige Fehler nicht abgedeckt werden.
- `http.error`
  - : Der Benutzeragent hat erfolgreich eine Antwort erhalten, aber sie hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode.
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen.
- `http.response.invalid`
  - : Die Antwort ist leer, weist einen Content-Length-Mismatch auf, hat eine falsche Kodierung und/oder andere Bedingungen, die den Benutzeragenten daran hindern, die Antwort zu verarbeiten.
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen.
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll fehlgeschlagen, die durch vorherige Fehler nicht abgedeckt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
