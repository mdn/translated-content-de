---
title: Network Error Logging
slug: Web/HTTP/Network_Error_Logging
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-_Antwortheader_ konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtgruppe gesendet, die innerhalb eines {{HTTPHeader("Report-To")}} Headers definiert ist.

## Verwendung

Webanwendungen melden sich für dieses Verhalten mit dem NEL-Header an, bei dem es sich um ein _[JSON-codiertes](/de/docs/Glossary/Response_header)_ Objekt handelt:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein Ursprung, der vom Browser als sicher gilt, ist erforderlich.

Die folgenden Objektschlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkausfallberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtgruppe sollte eine Lebensdauer haben, die mindestens so lang wie die NEL-Richtlinie ist.
- include_subdomains
  - : Wenn wahr, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinienheader festgelegt ist. Die Berichtgruppe sollte ebenfalls so eingestellt sein, dass Subdomains eingeschlossen werden, wenn diese Option aktiviert sein soll.
- success_fraction
  - : Gleitkommazahl zwischen 0 und 1, die den Anteil erfolgreicher Netzwerkanfragen angibt, der gemeldet werden soll. Standardmäßig 0, sodass keine erfolgreichen Netzwerkanfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.
- failure_fraction
  - : Gleitkommazahl zwischen 0 und 1, die den Anteil fehlgeschlagener Netzwerkanfragen angibt, der gemeldet werden soll. Standardmäßig 1, sodass alle fehlgeschlagenen Netzwerkanfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.

Die oben referenzierte Berichtgruppe wird auf die übliche Weise innerhalb des {{HTTPHeader("Report-To")}} Headers definiert, zum Beispiel:

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

### HTTP 400 (Ungültige Anfrage) Antwort

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt ist und keine `server_ip` zur Verfügung steht, um sie einzuschließen.

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
  - : Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die nicht durch vorherige Fehler abgedeckt sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen wird, wenn die Server-IP-Adresse, die den ursprünglichen Bericht geliefert hat, von der aktuellen Server-IP-Adresse zum Zeitpunkt der Fehlergenerierung abweicht, die Berichtsdaten auf Informationen zu diesem Problem herabgestuft und der Typ auf `dns.address_changed` gesetzt.
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
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die nicht durch vorherige Fehler abgedeckt sind
- `http.error`
  - : Der Benutzeragent hat erfolgreich eine Antwort erhalten, aber sie hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Antwort ist leer, hat eine Inhalt-Längen-Unstimmigkeit, unsachgemäße Kodierung und/oder andere Bedingungen, die den Benutzeragent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung schlug aufgrund von Fehlern im HTTP-Protokoll fehl, die nicht durch vorherige Fehler abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
