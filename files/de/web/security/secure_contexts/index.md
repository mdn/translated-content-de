---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindestanforderungen an Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und -Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige Web-APIs sind sehr leistungsstark und geben einem Angreifer die Möglichkeit, Folgendes zu tun:

- Die Privatsphäre eines Nutzers verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Nutzers erhalten.
- Auf Daten wie Benutzeranmeldungen zugreifen.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext gilt als sicher, wenn er bestimmte Mindestanforderungen an Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert sind. Ein bestimmtes Dokument wird als in einem sicheren Kontext befindlich angesehen, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (im Wesentlichen ein enthaltendes Fenster oder Tab) ist, das ein sicherer Kontext ist.

Zum Beispiel, auch wenn ein Dokument über TLS innerhalb eines {{HTMLElement("iframe")}} bereitgestellt wird, wird sein Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS bereitgestellt wurde.

Es ist jedoch wichtig zu beachten, dass wenn ein nicht-sicherer Kontext ein neues Fenster öffnet (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass das öffnende Fenster unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher betrachtet wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur darauf basiert, es innerhalb des zugehörigen top-level browsing context zu betrachten — und nicht darauf, ob ein nicht-sicherer Kontext verwendet wurde, um es zu erstellen.

Lokal bereitgestellte Ressourcen wie solche mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z.B. `http://dev.whatever.localhost/`), und `file://` URLs werden ebenfalls als sicher bereitgestellt betrachtet.

> [!NOTE]
> Firefox 84 und später unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

Ressourcen, die nicht lokal sind, müssen folgende Kriterien erfüllen, um als sicher angesehen zu werden:

- müssen über `https://` oder `wss://` URLs bereitgestellt werden
- die Sicherheitsmerkmale des Netzwerkkanals, über den die Ressource bereitgestellt wird, dürfen nicht als veraltet angesehen werden

## Feature-Erkennung

Seiten können die Funktionserkennung verwenden, um zu prüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das boolesche [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) verwenden, die im globalen Bereich verfügbar sind.

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

- [Plattformfunktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der Funktionen, die nur in sicheren Kontexten verfügbar sind
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) und [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)
- <https://permission.site> — Eine Website, die es Ihnen ermöglicht, zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
