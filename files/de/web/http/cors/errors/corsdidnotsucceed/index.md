---
title: "Grund: CORS-Anfrage war nicht erfolgreich"
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

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlschlug. Der Fehler steht nicht direkt im Zusammenhang mit CORS, sondern ist ein grundlegender Netzwerkfehler.

In vielen Fällen wird dies durch ein Browser-Plugin verursacht (z.B. ein Werbeblocker oder Datenschutztool), das die Anfrage blockiert.

Weitere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, führt zu diesem Fehler.
- Der Versuch, von einer Seite mit einem `https`-Ursprung auf eine `http`-Ressource zuzugreifen, führt ebenfalls zu diesem Fehler.
- Von Firefox 68 bis Firefox 84 durften `https`-Seiten nicht auf `http://localhost` zugreifen.
  Dies wurde mit [Fehler 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die eigentliche Anfrage geantwortet (selbst wenn er auf die {{Glossary("Preflight_request", "Preflight-Anfrage")}} geantwortet hat).
  Ein Szenario könnte ein HTTP-Dienst sein, der in Panik geriet und keine Daten zurückgab.
- Das Fenster ist im „Privaten Modus“ (der möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
