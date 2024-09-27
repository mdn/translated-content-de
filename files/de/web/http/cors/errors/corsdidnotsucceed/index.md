---
title: "Grund: CORS-Anforderung war nicht erfolgreich"
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

Die [HTTP](/de/docs/Glossary/HTTP)-Anforderung, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlgeschlagen ist. Der Fehler steht nicht direkt in Zusammenhang mit CORS, sondern ist ein grundlegender Netzwerkfehler irgendeiner Art.

In vielen Fällen wird er durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder ein Datenschutzschutz), das die Anforderung blockiert.

Weitere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, führt zu diesem Fehler.
- Der Versuch, von einer Seite mit einem `https`-Ursprung auf eine `http`-Ressource zuzugreifen, führt ebenfalls zu diesem Fehler.
- Von Firefox 68 bis Firefox 84 war es `https`-Seiten nicht gestattet, auf `http://localhost` zuzugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die eigentliche Anforderung reagiert (auch wenn er auf die [Preflight-Anforderung](/de/docs/Glossary/Preflight_request) reagiert hat).
  Ein Szenario könnte ein HTTP-Dienst sein, der ohne Rückgabe von Daten in Panik geraten ist.
- Das Fenster befindet sich im "Privaten Modus" (der möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anforderung blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
