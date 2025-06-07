---
title: Network Error Logging (NEL)
short-title: Network Error Logging
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den {{HTTPHeader("NEL")}} HTTP-_ {{Glossary("Response_header", "Antwort-Header")}} _ konfiguriert werden kann. Dieser experimentelle Header erlaubt es Websites und Anwendungen, sich dafür zu entscheiden, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkabfragen von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtsgruppe gesendet, die innerhalb eines {{HTTPHeader("Report-To")}} Headers definiert ist.

## Verwendung

Webanwendungen wählen dieses Verhalten mit dem NEL-Header, der ein _{{Glossary("Response_header", "JSON-codiertes")}}_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein Ursprung, den der Browser als sicher ansieht, ist erforderlich.

Die folgenden Objektschlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkfehlerberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lang ist wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn wahr, gilt die Richtlinie für alle Subdomains unter dem Ursprung, für den der Richtlinien-Header gesetzt ist. Die Berichtsgruppe sollte auch so eingestellt sein, dass Subdomains eingeschlossen werden, wenn diese Option aktiviert werden soll.
- success_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerkabfragen angibt, die gemeldet werden sollen. Standardmäßig ist dies 0, sodass keine erfolgreichen Netzwerkabfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.
- failure_fraction
  - : Gleitkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerkabfragen angibt, die gemeldet werden sollen. Standardmäßig ist dies 1, sodass alle fehlgeschlagenen Netzwerkabfragen gemeldet werden, wenn der Schlüssel nicht im JSON-Payload vorhanden ist.

Die oben referenzierte Berichtsgruppe wird auf die übliche Weise innerhalb des {{HTTPHeader("Report-To")}} Headers definiert, zum Beispiel:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Fehlerberichte

In diesen Beispielen wird der Inhalt der Reporting-API-Antwort angezeigt. Der oberste **`"body"`**-Schlüssel enthält den Netzwerkfehlerbericht.

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

Beachten Sie, dass die Phase in diesem Bericht auf `dns` gesetzt ist und keine `server_ip` verfügbar ist, die einbezogen werden könnte.

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
  - : Der DNS-Server des Benutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Benutzers hat geantwortet, war jedoch nicht in der Lage, eine IP-Adresse für die angeforderte URI aufzulösen.
- `dns.failed`
  - : Anfrage an den DNS-Server scheiterte aus nicht durch vorherige Fehler abgedeckten Gründen (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen, wenn die IP-Adresse des Servers, der den ursprünglichen Bericht geliefert hat, von der aktuellen IP-Adresse des Servers zum Zeitpunkt der Fehlergenerierung abweicht, werden die Berichtsdaten heruntergestuft, um nur Informationen über dieses Problem einzuschließen und der Typ wird auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : TCP-Verbindung zum Server ist abgelaufen
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
  - : Die TCP-Verbindung scheiterte aus Gründen, die nicht durch vorherige Fehler abgedeckt sind
- `http.error`
  - : Der Benutzer-Agent hat erfolgreich eine Antwort erhalten, aber sie hatte einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx) oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx) Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Antwort ist leer, hat einen Content-Length-Mismatch, hat falsche Kodierung und/oder andere Bedingungen, die den Benutzer-Agent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Umleitungsschleife abgebrochen
- `http.failed`
  - : Die Verbindung scheiterte aufgrund von Fehlern im HTTP-Protokoll, die nicht durch vorherige Fehler abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
