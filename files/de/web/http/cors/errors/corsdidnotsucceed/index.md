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

Die {{Glossary("HTTP")}}-Anfrage, die CORS verwendet, schlug fehl, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlgeschlagen ist. Der Fehler steht nicht direkt mit CORS in Verbindung, sondern ist eine grundlegende Netzwerkfehlerart.

In vielen Fällen wird dies durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder Datenschutz-Tool), das die Anfrage blockiert.

Andere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, führt zu diesem Fehler.
- Der Versuch, auf eine `http`-Ressource von einer Seite mit einem `https`-Ursprung zuzugreifen, wird diesen Fehler ebenfalls verursachen.
- Von Firefox 68 bis Firefox 84 durften `https`-Seiten nicht auf `http://localhost` zugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die eigentliche Anfrage geantwortet (auch wenn er auf die {{Glossary("Preflight request")}} geantwortet hat).
  Ein Szenario könnte ein sich in Entwicklung befindender HTTP-Dienst sein, der ohne Rückgabe von Daten abgestürzt ist.
- Das Fenster befindet sich im "Privatmodus" (was möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
