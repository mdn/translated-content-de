---
title: Network Error Logging
slug: Web/HTTP/Network_Error_Logging
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}{{SeeCompatTable}}

Network Error Logging ist ein Mechanismus, der über den experimentellen HTTP-{{HTTPHeader("NEL")}}-Antwortheader konfiguriert werden kann. Dieser Header ermöglicht es Websites und Anwendungen, sich dafür zu entscheiden, Berichte über fehlgeschlagene (und, falls gewünscht, erfolgreiche) Netzwerkanfragen von unterstützenden Browsern zu erhalten.

Berichte werden an eine Berichtsgruppe gesendet, die innerhalb eines {{HTTPHeader("Report-To")}}-Headers definiert ist.

## Verwendung

Webanwendungen entscheiden sich für dieses Verhalten mit dem NEL-Header, der ein _{{Glossary("Response_header", "JSON-codiertes")}}_ Objekt ist:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Ein von dem Browser als sicher angesehenes Ursprungsdomäne wird benötigt.

Die folgenden Objekt-Schlüssel können im NEL-Header angegeben werden:

- report_to
  - : Die [Reporting-API](/de/docs/Web/API/Reporting_API)-Gruppe, an die Netzwerkfehlerberichte gesendet werden sollen (siehe unten).
- max_age
  - : Gibt die Lebensdauer der Richtlinie in Sekunden an (ähnlich wie z.B. HSTS-Richtlinien zeitlich begrenzt sind). Die referenzierte Berichtsgruppe sollte eine Lebensdauer haben, die mindestens so lang ist wie die NEL-Richtlinie.
- include_subdomains
  - : Wenn true, gilt die Richtlinie für alle Subdomains unter dem Ursprungsdomäne, auf dem der Richtlinien-Header gesetzt ist. Die Berichtsgruppe sollte auch so eingestellt sein, dass sie Subdomains einschließt, wenn diese Option aktiviert werden soll.
- success_fraction
  - : Fließkommawert zwischen 0 und 1, der den Anteil der **erfolgreichen** Netzwerk-Anfragen angibt, die berichtet werden sollen. Standardmäßig auf 0, sodass keine erfolgreichen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.
- failure_fraction
  - : Fließkommawert zwischen 0 und 1, der den Anteil der **fehlgeschlagenen** Netzwerk-Anfragen angibt, die berichtet werden sollen. Standardmäßig auf 1, sodass alle fehlgeschlagenen Netzwerk-Anfragen gemeldet werden, wenn der Schlüssel im JSON-Payload nicht vorhanden ist.

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

In diesen Beispielen wird der Inhalt der Reporting-API-Antwort gezeigt. Der oberste Schlüssel **`"body"`** enthält den Netzwerkfehlerbericht.

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

Der Typ des Netzwerkfehlers kann einer der folgenden vorab definierten Werte aus der Spezifikation sein, aber Browser können ihre eigenen Fehlertypen hinzufügen und senden:

- `dns.unreachable`
  - : Der DNS-Server des Benutzers ist nicht erreichbar
- `dns.name_not_resolved`
  - : Der DNS-Server des Benutzers hat geantwortet, war jedoch nicht in der Lage, eine IP-Adresse für die angeforderte URI aufzulösen.
- `dns.failed`
  - : Anfrage an den DNS-Server ist aus Gründen fehlgeschlagen, die nicht durch vorhergehende Fehler abgedeckt sind (z.B. SERVFAIL)
- `dns.address_changed`
  - : Aus Sicherheitsgründen wird, wenn die Server-IP-Adresse, die den ursprünglichen Bericht geliefert hat, zur Zeit der Fehlergenerierung von der aktuellen Server-IP-Adresse abweicht, die Berichtsdatensammlung auf Informationen über dieses Problem heruntergestuft und der Typ auf `dns.address_changed` gesetzt.
- `tcp.timed_out`
  - : Die TCP-Verbindung zum Server hat ein Zeitlimit überschritten
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
  - : Die TCP-Verbindung ist aus Gründen fehlgeschlagen, die nicht von vorhergehenden Fehlern abgedeckt sind
- `http.error`
  - : Der Benutzeragent hat eine Antwort erhalten, diese hatte jedoch einen [4xx](https://httpwg.org/specs/rfc9110.html#status.4xx)- oder [5xx](https://httpwg.org/specs/rfc9110.html#status.5xx)-Statuscode
- `http.protocol.error`
  - : Die Verbindung wurde aufgrund eines HTTP-Protokollfehlers abgebrochen
- `http.response.invalid`
  - : Antwort ist leer, hat ein Content-Length-Missverhältnis, hat unsachgemäße Kodierung und/oder andere Bedingungen, die den Benutzeragent daran hindern, die Antwort zu verarbeiten
- `http.response.redirect_loop`
  - : Die Anfrage wurde aufgrund einer erkannten Redirect-Schleife abgebrochen
- `http.failed`
  - : Die Verbindung ist aufgrund von Fehlern im HTTP-Protokoll fehlgeschlagen, die nicht durch vorhergehende Fehler abgedeckt sind

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
