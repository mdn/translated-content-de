---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: f0080356e5e8c38fda6ad867945371f75861969b
---

## Grund

```plain
Reason: CORS request did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("HTTP", "HTTP")}}-Anfrage, die CORS verwendet, ist fehlgeschlagen, weil die HTTP-Verbindung entweder auf Netzwerk- oder Protokollebene scheiterte. Der Fehler steht nicht direkt im Zusammenhang mit CORS, sondern ist ein grundlegender Netzwerkfehler.

In vielen Fällen wird er durch ein Browser-Plugin verursacht (z. B. ein Werbeblocker oder ein Datenschutz-Tool), das die Anfrage blockiert.

## So beheben Sie das Problem

- Überprüfen Sie DevTools > Netzwerk, um festzustellen, ob die Anfrage aufgrund einer DNS-Auflösung, eines Zeitüberschreitungsfehlers, einer verweigerten Verbindung oder eines TLS-Handshake-Fehlers fehlgeschlagen ist.
- Deaktivieren Sie Browser-Erweiterungen oder versuchen Sie es in einem privaten Browserfenster, da Werbeblocker, Firewalls und Datenschutz-Tools Netzwerk-Anfragen blockieren können.
- Beheben Sie Zertifikats- oder {{Glossary("TLS", "TLS")}}-Probleme, wie abgelaufene oder ungültige Zertifikate.
- Vermeiden Sie gemischte Inhalte: Wenn die Seite über HTTPS geladen wird, können Anfragen an HTTP-Ressourcen fehlschlagen.
  Stellen Sie die API stattdessen über HTTPS bereit.
- Bestätigen Sie, dass der Server korrekt antwortet und dass der Endpunkt eine Antwort zurückgibt.

Wenn Sie einen lokalen Entwicklungsserver verwenden, stellen Sie sicher, dass das korrekte Schema und der richtige Port verwendet werden und dass der Dienst läuft.

Andere mögliche Ursachen umfassen:

- Der Versuch, auf eine `https`-Ressource zuzugreifen, die ein ungültiges Zertifikat hat, wird diesen Fehler verursachen.
- Der Versuch, auf eine `http`-Ressource von einer Seite mit einem `https`-Ursprung zuzugreifen, wird ebenfalls diesen Fehler verursachen.
- Von Firefox 68 bis Firefox 84 war es `https`-Seiten nicht erlaubt, auf `http://localhost` zuzugreifen.
  Dies wurde mit [Bug 1488740](https://bugzil.la/1488740) geändert.
- Der Server hat auf die eigentliche Anfrage nicht geantwortet (selbst wenn er auf die {{Glossary("Preflight_request", "Preflight-Anfrage")}} geantwortet hat).
  Ein Szenario könnte ein HTTP-Dienst sein, der entwickelt wird und ohne Daten zurückzugeben in Panik geriet.
- Das Fenster befindet sich im "Privaten Modus" (was Sicherheitsanforderungen haben kann, die eine CORS-Anfrage blockieren könnten).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
