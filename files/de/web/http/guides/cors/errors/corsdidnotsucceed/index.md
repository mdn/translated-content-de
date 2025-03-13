---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlschlug. Der Fehler steht nicht direkt mit CORS in Verbindung, sondern ist eine grundlegende Netzwerkfehlerart.

In vielen Fällen wird der Fehler durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder Datenschutz-Plugin), das die Anfrage blockiert.

Weitere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, wird diesen Fehler verursachen.
- Der Versuch, von einer Seite mit `https`-Ursprung auf eine `http`-Ressource zuzugreifen, wird ebenfalls diesen Fehler verursachen.
- Von Firefox 68 bis Firefox 84 war es `https`-Seiten nicht erlaubt, auf `http://localhost` zuzugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die tatsächliche Anfrage geantwortet (selbst wenn er auf die {{Glossary("Preflight_request", "Preflight-Anfrage")}} geantwortet hat).
  Ein Szenario könnte ein HTTP-Dienst sein, der in Panik geriet, ohne irgendwelche Daten zurückzugeben.
- Das Fenster befindet sich im "Privatmodus" (was Sicherheitsanforderungen haben könnte, die eine CORS-Anfrage blockieren).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
