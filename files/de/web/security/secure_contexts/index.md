---
title: Secure contexts
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards für Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr leistungsfähig und geben einem Angreifer die Möglichkeit, Folgendes zu tun und mehr:

- Eine Verletzung der Privatsphäre des Benutzers.
- Niedrigstufigen Zugriff auf den Computer eines Benutzers.
- Zugriff auf Daten wie Benutzeranmeldedaten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards für Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)-Spezifikation definiert sind. Ein bestimmtes Dokument wird als sicherer Kontext betrachtet, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontextes](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltenes Fenster oder Tab), das ein sicherer Kontext ist.

Zum Beispiel wird auch für ein über TLS geliefertes Dokument innerhalb eines {{HTMLElement("iframe")}} sein Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster öffnet (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass der Öffner unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher betrachtet wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext vorliegt, nur auf der Betrachtung innerhalb des mit ihm verbundenen Top-Level-Browsing-Kontextes basiert — und nicht darauf, ob ein unsicherer Kontext zufällig für seine Erstellung verwendet wurde.

Lokal bereitgestellte Ressourcen, wie solche mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z.B. `http://dev.whatever.localhost/`), sowie `file://` URLs werden ebenfalls als sicher geliefert betrachtet.

> [!NOTE]
> Firefox 84 und später unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

Ressourcen, die nicht lokal sind, müssen folgende Kriterien erfüllen, um als sicher angesehen zu werden:

- müssen über `https://` oder `wss://` URLs bereitgestellt werden
- die Sicherheitseigenschaften des für die Bereitstellung der Ressource verwendeten Netzwerkanals dürfen nicht als veraltet angesehen werden

## Feature-Erkennung

Seiten können die Feature-Erkennung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Boolean verwenden, welches im globalen Scope verfügbar ist.

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Plattformfunktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der nur in sicheren Kontexten verfügbaren Funktionen
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) und [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)
- <https://permission.site> — Eine Seite, die es Ihnen ermöglicht zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS anwendet
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP-Header
