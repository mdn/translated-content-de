---
title: Network Error Logging (NEL)
short-title: Network Error Logging
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: 4877aae5dd61ffb22ba63bd0461d200087aa3543
---

{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den HTTP-{{HTTPHeader("NEL")}}-_{{Glossary("Response_header", "Antwort-Header")}}_ konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, sich anzumelden, um Berichte über fehlgeschlagene (und auf Wunsch auch erfolgreiche) Netzwerkabfragen von unterstützenden Browsern zu erhalten.

Berichte werden an eine in einem {{HTTPHeader("Report-To")}}-Header definierte Berichtgruppe gesendet.

## Verwendung

Webanwendungen melden sich mit dem NEL-Header für dieses Verhalten an, der ein _{{Glossary("Response_header", "JSON-codiertes")}}_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein Ursprung, den der Browser als sicher ansieht, ist erforderlich.

Die folgenden Schlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkerfehlerberichte gesendet werden (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die angegebene Berichtgruppe sollte mindestens so lange lebendig sein wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn `true`, wird diese NEL-Richtlinie auch für alle Subdomains des Ursprungs aktiviert, jedoch nur für Netzwerkerfehler, die während der DNS-Auflösung auftreten. Die NEL-Richtlinie wird nicht für Subdomains aktiviert, wenn `include_subdomains` nicht vorhanden ist, `false` ist oder für andere (nicht-DNS-bezogene) Netzwerkerfehler. Die Berichtgruppe muss auch auf das Einschließen von Subdomains eingestellt sein, damit diese Option Wirkung zeigt.
- success_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerkanfragen angibt, die gemeldet werden sollen. Standardmäßig 0, sodass keine erfolgreichen Netzwerkanfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.
- failure_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerkanfragen angibt, die gemeldet werden sollen. Standardmäßig 1, sodass alle fehlgeschlagenen Netzwerkanfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.

Die oben angegebene Berichtgruppe wird auf übliche Weise innerhalb des {{HTTPHeader("Report-To")}}-Headers definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Inhalt der Reporting API-Antwort angezeigt. Der oberste **`"body"`**-Schlüssel enthält den Netzwerkfehlerbericht.

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt ist und keine `server_ip` verfügbar ist, um sie einzuschließen.

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

Der Typ des Netzwerkerfehlers kann einer der folgenden vordefinierten Werte aus der Spezifikation sein, aber Browser können ihre eigenen Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Benutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Benutzers hat geantwortet, konnte jedoch keine IP-Adresse für die angeforderte URI auflösen.
- `dns.failed`
  - : Die Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die von vorherigen Fehlern nicht abgedeckt sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die Server-IP-Adresse, die den ursprünglichen Bericht geliefert hat, sich von der aktuellen Server-IP-Adresse zum Zeitpunkt der Fehlergenerierung unterscheidet, werden die Berichtsdaten herabgestuft, um nur Informationen über dieses Problem zu enthalten und der Typ wird auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : Die TCP-Verbindung zum Server hat eine Zeitüberschreitung verursacht
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
  - : Die IP-Adresse ist unerreichbar
- `tcp.failed`
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die von vorherigen Fehlern nicht abgedeckt sind
- `http.error`
  - : Der Benutzeragent hat erfolgreich eine Antwort erhalten, aber diese hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Die Antwort ist leer, hat eine Content-Length-Unstimmigkeit, ist falsch kodiert und/oder weist andere Bedingungen auf, die den Benutzeragenten daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll fehlgeschlagen, die von vorherigen Fehlern nicht abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
