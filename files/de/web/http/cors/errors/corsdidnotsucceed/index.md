---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: 7c7c127e8486f6b0467cfaaeb8c86ac874bea4b2
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, da die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlgeschlagen ist. Der Fehler steht nicht direkt mit CORS in Verbindung, sondern ist eine grundlegende Netzwerkstörung irgendeiner Art.

In vielen Fällen wird dies durch ein Browser-Plugin (z.B. einen Werbeblocker oder Datenschutzschutz) verursacht, das die Anfrage blockiert.

Weitere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, führt zu diesem Fehler.
- Der Versuch, von einer Seite mit `https`-Herkunft auf eine `http`-Ressource zuzugreifen, führt ebenfalls zu diesem Fehler.
- In Firefox von Version 68 bis 84 war es `https`-Seiten nicht gestattet, auf `http://localhost` zuzugreifen.
  Dies wurde mit dem [Fehler 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die eigentliche Anfrage geantwortet (selbst wenn er auf die {{Glossary("Preflight_request", "Preflight-Anfrage")}} geantwortet hat).
  Ein Szenario könnte ein sich entwickelnder HTTP-Dienst sein, der ohne Rückgabe von Daten abgestürzt ist.
- Das Fenster befindet sich im "Privaten Modus" (der möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
