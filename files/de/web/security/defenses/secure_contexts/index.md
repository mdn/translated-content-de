---
title: Sichere Kontexte
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards der Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte besteht darin, zu verhindern, dass [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) Zugriff auf leistungsstarke APIs erhalten, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr leistungsstark und können einem Angreifer Folgendes und mehr ermöglichen:

- Die Privatsphäre eines Nutzers verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Nutzers erhalten.
- Zugriff auf Daten wie Benutzeranmeldedaten erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards der Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)-Spezifikation definiert sind. Ein bestimmtes Dokument wird als in einem sicheren Kontext befindlich angesehen, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltendes Fenster oder Tab), der ein sicherer Kontext ist.

Zum Beispiel, selbst wenn ein Dokument über TLS innerhalb eines {{HTMLElement("iframe")}} bereitgestellt wird, wird sein Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS bereitgestellt wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erstellt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass das öffnende Fenster unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher angesehen wird. Dies liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur auf seiner Berücksichtigung innerhalb des Top-Level-Browsing-Kontexts basiert, mit dem es assoziiert ist — und nicht darauf, ob ein unsicherer Kontext zufällig verwendet wurde, um es zu erstellen.

Ressourcen, die nicht lokal sind, müssen folgende Kriterien erfüllen, um als sicher zu gelten:

- Sie müssen über `https://` URLs bereitgestellt werden.
- Die Sicherheitsmerkmale des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet angesehen werden.

## Potenziell vertrauenswürdige Ursprünge

Ein **potenziell vertrauenswürdiger Ursprung** ist einer, dem der Browser im Allgemeinen vertrauen kann, Datensicherheit zu gewährleisten, auch wenn er streng genommen nicht die Kriterien eines sicheren Kontexts erfüllt.

Lokal bereitgestellte Ressourcen wie solche mit `http://127.0.0.1`, `http://localhost` und `http://*.localhost` URLs (zum Beispiel `http://dev.whatever.localhost/`) werden nicht über HTTPS bereitgestellt, können jedoch als sicher angesehen werden, da sie sich auf demselben Gerät wie der Browser befinden. Sie sind daher potenziell vertrauenswürdig. Dies ist praktisch für Entwickler, die Anwendungen lokal testen.

Dasselbe gilt im Allgemeinen für `file://` URLs.

Sichere [WebSocket](/de/docs/Web/API/WebSockets_API) (`"wss://"`) URLs werden ebenfalls als potenziell vertrauenswürdig angesehen.

Anbieter-spezifische URL-Schemata wie `app://` oder `chrome-extension://` werden nicht von allen Browsern als potenziell vertrauenswürdig angesehen, könnten jedoch von den Browsern als solches angesehen werden, von denen sie stammen.

> [!NOTE]
> Firefox 84 und höher unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

## Feature-Erkennung

Seiten können die Feature-Erkennung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Boolean verwenden, das im globalen Bereich verfügbar ist.

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

- [Plattform-Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der Funktionen, die nur in sicheren Kontexten verfügbar sind
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) und [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)
- <https://permission.site> — Eine Website, die es Ihnen ermöglicht zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
