---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards der Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und -Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel der sicheren Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt sein?

Einige APIs im Web sind sehr leistungsfähig und geben einem Angreifer die Möglichkeit, Folgendes und mehr zu tun:

- Die Privatsphäre eines Benutzers verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Benutzers erhalten.
- Zugriff auf Daten wie Benutzeranmeldedaten erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards für Authentifizierung und Vertraulichkeit erfüllt, wie in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert. Ein bestimmtes Dokument wird als sicherer Kontext betrachtet, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltendes Fenster oder Tab), das ein sicherer Kontext ist.

Zum Beispiel wird selbst für ein Dokument, das über TLS innerhalb eines {{HTMLElement("iframe")}} geliefert wird, dessen Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erstellt (mit oder ohne die Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass der Erzeuger unsicher war, keine Auswirkung darauf hat, ob das neue Fenster als sicher betrachtet wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur auf der Betrachtung innerhalb des Top-Level-Browsing-Kontexts, mit dem es verbunden ist, basiert – und nicht darauf, ob ein unsicherer Kontext zur Erstellung verwendet wurde.

Ressourcen, die nicht lokal sind, müssen folgenden Kriterien erfüllen, um als sicher zu gelten:

- Sie müssen über `https://` URLs bereitgestellt werden.
- Die Sicherheitseigenschaften des für die Lieferung der Ressource verwendeten Netzwerkanals dürfen nicht als veraltet angesehen werden.

## Potenziell vertrauenswürdige Ursprünge

Ein **potenziell vertrauenswürdiger Ursprung** ist einer, dem der Browser im Allgemeinen trauen kann, um Datensicherheit zu gewährleisten, auch wenn er streng genommen nicht die Kriterien eines sicheren Kontexts erfüllt.

Lokal bereitgestellte Ressourcen wie solche mit `http://127.0.0.1`, `http://localhost` und `http://*.localhost` URLs (zum Beispiel `http://dev.whatever.localhost/`) werden nicht unter Verwendung von HTTPS bereitgestellt, können jedoch als sicher betrachtet werden, da sie auf demselben Gerät wie der Browser sind. Sie sind daher potenziell vertrauenswürdig. Dies ist praktisch für Entwickler, die Anwendungen lokal testen.

Gleiches gilt im Allgemeinen für `file://` URLs.

Sichere [WebSocket](/de/docs/Web/API/WebSockets_API) (`"wss://"`) URLs werden ebenfalls als potenziell vertrauenswürdig betrachtet.

Anbieter-spezifische URL-Schemata wie `app://` oder `chrome-extension://` werden nicht von allen Browsern als potenziell vertrauenswürdig angesehen, könnten aber sehr wohl von den Browsern als vertrauenswürdig betrachtet werden, deren Anbieter sie stammen.

> [!NOTE]
> Firefox 84 und folgende Versionen unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

## Funktionsprüfung

Seiten können die Funktionsprüfung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Boolean verwenden, das im globalen Bereich verfügbar ist.

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
- <https://permission.site> — Eine Seite, die es Ihnen ermöglicht, zu prüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS verwendet
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
