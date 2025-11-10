---
title: Network Error Logging (NEL)
short-title: Network Error Logging
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-{{Glossary("Response_header", "Antwort-Header")}} konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, sich dafür zu entscheiden, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabfragen von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtsgruppe gesendet, die innerhalb eines {{HTTPHeader("Report-To")}} Headers definiert ist.

## Verwendung

Webanwendungen entscheiden sich für dieses Verhalten mit dem NEL-Header, welcher ein {{Glossary("Response_header", "JSON-codiertes")}} Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Es ist ein von dem Browser als sicher betrachteter Ursprung erforderlich.

Die folgenden Objekt-Schlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting-API](/de/docs/Web/API/Reporting_API) Gruppe, an die Netzwerkfehlerberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lang ist wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn wahr, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header festgelegt ist. Die Berichtsgruppe sollte ebenfalls so eingestellt sein, dass sie Subdomains einschließt, wenn diese Option aktiviert werden soll.
- success_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerk-Anfragen zum Melden angibt. Standardmäßig 0, sodass keine erfolgreichen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.
- failure_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerk-Anfragen zum Melden angibt. Standardmäßig 1, sodass alle fehlgeschlagenen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.

Die oben referenzierte Berichtsgruppe wird wie üblich innerhalb des {{HTTPHeader("Report-To")}} Headers definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Rückgabeinhalt der Reporting API gezeigt. Der oberste **`"body"`** Schlüssel enthält den Netzwerkfehlerbericht.

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt ist und keine `server_ip` verfügbar ist, die einbezogen werden kann.

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

Der Typ des Netzwerkfehlers kann einer der folgenden vordefinierten Werte aus der Spezifikation sein, aber Browser können ihre eigenen Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Nutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Nutzers hat geantwortet, konnte aber keine IP-Adresse für die angeforderte URI auflösen.
- `dns.failed`
  - : Die Anfrage an den DNS-Server ist aus Gründen gescheitert, die durch vorherige Fehler nicht abgedeckt sind (z. B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die Server-IP-Adresse, die den ursprünglichen Bericht geliefert hat, sich von der aktuellen Server-IP-Adresse zum Zeitpunkt der Fehlergenerierung unterscheidet, werden die Berichterstattungsdaten herabgestuft, um nur Informationen über dieses Problem aufzunehmen und der Typ auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : Die TCP-Verbindung zum Server ist abgelaufen
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
  - : Die TCP-Verbindung ist aus Gründen gescheitert, die durch vorherige Fehler nicht abgedeckt sind
- `http.error`
  - : Der User-Agent hat erfolgreich eine Antwort erhalten, aber sie hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Die Antwort ist leer, hat eine Inhaltslängen-Mismatch, hat falsche Kodierung und/oder andere Bedingungen, die den User-Agent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll gescheitert, die durch vorherige Fehler nicht abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
