---
title: Network Error Logging
slug: Web/HTTP/Network_Error_Logging
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-{{Glossary("Response_header", "Response-Header")}} konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtsgruppe gesendet, die innerhalb eines {{HTTPHeader("Report-To")}}-Headers definiert ist.

## Verwendung

Webanwendungen melden sich mit dem NEL-Header für dieses Verhalten an, der ein {{Glossary("Response_header", "JSON-codiertes")}} Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein Ursprung, der vom Browser als sicher betrachtet wird, ist erforderlich.

Die folgenden Objektschlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API) Gruppe, an die Netzwerkfehlerberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lang ist wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn `true`, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header gesetzt ist. Die Berichtsgruppe sollte ebenfalls so eingestellt sein, dass sie Subdomains einschließt, wenn diese Option aktiviert werden soll.
- success_fraction
  - : Gleitkommazahl zwischen 0 und 1, die den Anteil der **erfolgreichen** Netzwerkaufrufe angibt, die berichtet werden sollen. Standardmäßig 0, sodass keine erfolgreichen Netzwerkaufrufe gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.
- failure_fraction
  - : Gleitkommazahl zwischen 0 und 1, die den Anteil der **fehlgeschlagenen** Netzwerkaufrufe angibt, die berichtet werden sollen. Standardmäßig 1, sodass alle fehlgeschlagenen Netzwerkaufrufe gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.

Die oben referenzierte Berichtsgruppe wird in der üblichen Weise innerhalb des {{HTTPHeader("Report-To")}}-Headers definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Inhalt der Reporting API-Antwort angezeigt. Der oberste **`"body"`** Schlüssel enthält den Netzwerkfehlerbericht.

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt und keine `server_ip` verfügbar ist, die einbezogen werden könnte.

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

Der Typ des Netzwerkfehlers kann einer der im Spezifikationsvorgaben definierten Werte sein, aber Browser können eigene Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Benutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Benutzers hat geantwortet, konnte aber keine IP-Adresse für die angeforderte URI auflösen.
- `dns.failed`
  - : Die Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die von den vorherigen Fehlern nicht erfasst sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die IP-Adresse des Servers, der den ursprünglichen Bericht geliefert hat, zur aktuellen IP-Adresse bei Fehlergenerierung unterschiedlich ist, wird der Bericht auf Informationen zu diesem Problem herabgestuft und der Typ auf `dns.address_changed` gesetzt.
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
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die von den vorherigen Fehlern nicht erfasst sind
- `http.error`
  - : Der User-Agent hat erfolgreich eine Antwort erhalten, aber diese hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Die Antwort ist leer, hat einen Inhalt-Längen-Mismatch, eine unsachgemäße Kodierung und/oder andere Bedingungen, die den User-Agent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Redirect-Schleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll fehlgeschlagen, die von den vorherigen Fehlern nicht erfasst sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
