---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene gescheitert ist. Der Fehler steht nicht direkt mit CORS in Verbindung, sondern ist ein grundlegender Netzwerkfehler irgendeiner Art.

In vielen Fällen wird dieser Fehler durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder ein Datenschutz-Plugin), das die Anfrage blockiert.

Andere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, führt zu diesem Fehler.
- Der Versuch, auf eine `http`-Ressource von einer Seite mit einem `https`-Ursprung zuzugreifen, führt ebenfalls zu diesem Fehler.
- Von Firefox 68 bis Firefox 84 war es `https`-Seiten nicht erlaubt, auf `http://localhost` zuzugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die tatsächliche Anfrage geantwortet (selbst wenn er auf die {{Glossary("Preflight_request", "Preflight-Anfrage")}} geantwortet hat).
  Ein Szenario könnte ein HTTP-Dienst sein, der ohne Rückgabe von Daten in Panik gerät.
- Das Fenster befindet sich im "Privates Surfen"-Modus (der möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/Guides/CORS)
