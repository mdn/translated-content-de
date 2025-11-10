---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS request did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene fehlgeschlagen ist. Der Fehler steht nicht direkt im Zusammenhang mit CORS, sondern ist eine grundlegende Netzwerkstörung irgendeiner Art.

In vielen Fällen wird er durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder Datenschutz-Tool), das die Anfrage blockiert.

Weitere mögliche Ursachen sind:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, wird diesen Fehler verursachen.
- Der Versuch, von einer Seite mit einem `https`-Ursprung auf eine `http`-Ressource zuzugreifen, wird ebenfalls diesen Fehler auslösen.
- Von Firefox 68 bis Firefox 84 durften `https`-Seiten nicht auf `http://localhost` zugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat nicht auf die eigentliche Anfrage geantwortet (auch wenn er auf die {{Glossary("Preflight_request", "Vorab-Anfrage")}} geantwortet hat).
  Eine Möglichkeit könnte ein HTTP-Dienst sein, der in der Entwicklung ist und ohne Rückgabe von Daten abgestürzt ist.
- Das Fenster ist im "Privaten Modus" (der möglicherweise Sicherheitsanforderungen hat, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
