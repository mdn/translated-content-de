---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, bei dem bestimmte Mindeststandards in Bezug auf Authentifizierung und Vertraulichkeit erfüllt werden. Viele Web-APIs und -Funktionen sind nur in einem sicheren Kontext zugänglich. Das hauptsächliche Ziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt sein?

Einige APIs im Web sind sehr mächtig und ermöglichen es einem Angreifer, unter anderem Folgendes zu tun:

- Die Privatsphäre eines Nutzers zu verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Nutzers zu erlangen.
- Zugriff auf Daten wie Nutzeranmeldedaten zu erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards in Bezug auf Authentifizierung und Vertraulichkeit erfüllt, wie sie in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)-Spezifikation definiert sind. Ein bestimmtes Dokument gilt als sicherer Kontext, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontextes](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (im Wesentlichen ein enthaltendes Fenster oder Tab) ist, das ein sicherer Kontext ist.

Zum Beispiel wird ein Dokument, das über TLS innerhalb eines {{HTMLElement("iframe")}} geliefert wird, **nicht** als sicherer Kontext angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erstellt (mit oder ohne die Angabe von [noopener](/de/docs/Web/API/Window/open)), der Umstand, dass der Eröffner unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher angesehen wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur darauf basiert, ob es im zugehörigen top-level-Browsing-Kontext sicher ist — und nicht darauf, ob es von einem unsicheren Kontext erstellt wurde.

Lokal gelieferte Ressourcen wie solche mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z.B. `http://dev.whatever.localhost/`) und `file://` URLs gelten ebenfalls als sicher geliefert.

> [!NOTE]
> Firefox 84 und später unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, weil `localhost` nicht garantiert auf eine lokale/Loopback-Adresse verweist).

Ressourcen, die nicht lokal sind, müssen die folgenden Kriterien erfüllen, um als sicher angesehen zu werden:

- Sie müssen über `https://` oder `wss://` URLs bereitgestellt werden
- Die Sicherheitseigenschaften des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet angesehen werden

## Feature-Erkennung

Seiten können Feature-Erkennung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) boolean verwenden, das im globalen Gültigkeitsbereich verfügbar ist.

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
- <https://permission.site> — Eine Seite, die es Ihnen ermöglicht zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
