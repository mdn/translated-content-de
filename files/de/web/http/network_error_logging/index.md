---
title: Netzwerkfehlerprotokollierung
slug: Web/HTTP/Network_Error_Logging
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die Netzwerkfehlerprotokollierung ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP _[Antwort-Header](/de/docs/Glossary/Response_header)_ konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtsgruppe gesendet, die in einem {{HTTPHeader("Report-To")}} Header definiert ist.

## Verwendung

Webanwendungen melden sich mit dem NEL-Header für dieses Verhalten an, der ein _[JSON-codiertes](/de/docs/Glossary/Response_header)_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein von dem Browser als sicher betrachteter Ursprung ist erforderlich.

Die folgenden Objektschlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting-API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkfehlerberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lange ist wie die der NEL-Richtlinie.
- include_subdomains
  - : Wenn wahr, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header festgelegt ist. Die Berichtsgruppe sollte ebenfalls so festgelegt werden, dass sie Subdomains einbezieht, falls diese Option aktiviert werden soll.
- success_fraction
  - : Fließkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerk-Anfragen angibt, die gemeldet werden sollen. Standardmäßig ist dieser Wert 0, sodass keine erfolgreichen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.
- failure_fraction
  - : Fließkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerk-Anfragen angibt, die gemeldet werden sollen. Standardmäßig ist dieser Wert 1, sodass alle fehlgeschlagenen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.

Die oben genannte Berichtsgruppe wird in üblicher Weise innerhalb des {{HTTPHeader("Report-To")}} Headers definiert, zum Beispiel:

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

### HTTP 400 (Fehler in der Anfrage)

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

Die Art des Netzwerkfehlers kann eine der folgenden vordefinierten Werte aus der Spezifikation sein, aber Browser können eigene Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Nutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Nutzers hat geantwortet, war jedoch nicht in der Lage, eine IP-Adresse für die angeforderte URI aufzulösen.
- `dns.failed`
  - : Die Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die nicht von den vorherigen Fehlern abgedeckt sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die IP-Adresse des Servers, der den ursprünglichen Bericht geliefert hat, sich von der aktuellen IP-Adresse des Servers zum Zeitpunkt der Fehlergenerierung unterscheidet, werden die Berichtsdaten heruntergestuft, um nur Informationen über dieses Problem zu enthalten und der Typ wird auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : TCP-Verbindung zum Server hat ein Zeitlimit überschritten
- `tcp.closed`
  - : Die TCP-Verbindung wurde vom Server geschlossen
- `tcp.reset`
  - : Die TCP-Verbindung wurde zurückgesetzt
- `tcp.refused`
  - : Die TCP-Verbindung wurde vom Server verweigert
- `tcp.aborted`
  - : Die TCP-Verbindung wurde abgebrochen
- `tcp.address_invalid`
  - : Die IP-Adresse ist ungültig
- `tcp.address_unreachable`
  - : Die IP-Adresse ist nicht erreichbar
- `tcp.failed`
  - : Die TCP-Verbindung ist aufgrund von Gründen fehlgeschlagen, die nicht von den vorherigen Fehlern abgedeckt sind
- `http.error`
  - : Der User-Agent hat erfolgreich eine Antwort erhalten, aber sie hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde wegen eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Die Antwort ist leer, hat ein Inhaltslängen-Missverhältnis, hat eine falsche Codierung und/oder andere Bedingungen, die den User-Agent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll fehlgeschlagen, die nicht von den vorherigen Fehlern abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
