---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindestanforderungen an Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, Zugriff auf leistungsstarke APIs zu erhalten, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr leistungsstark und bieten einem Angreifer die Möglichkeit, unter anderem Folgendes zu tun:

- Die Privatsphäre eines Benutzers zu verletzen.
- Niedrigen Zugriff auf den Computer eines Benutzers zu erhalten.
- Zugriff auf Daten wie Benutzeranmeldedaten zu erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindestanforderungen an Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert sind. Ein bestimmtes Dokument wird als sicherer Kontext betrachtet, wenn es das [aktives Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [top-level Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltendes Fenster oder Tab), das ein sicherer Kontext ist.

Zum Beispiel wird auch ein Dokument, das über TLS innerhalb eines {{HTMLElement("iframe")}} übermittelt wird, **nicht** als sicherer Kontext angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS übermittelt wurde.

Es ist jedoch wichtig zu beachten, dass wenn ein unsicherer Kontext ein neues Fenster erstellt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), der unsichere Ursprung keinen Einfluss darauf hat, ob das neue Fenster als sicher angesehen wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur darauf basiert, es innerhalb des top-level Browsing-Kontexts zu betrachten, mit dem es verknüpft ist – und nicht darauf, ob ein unsicherer Kontext zufällig zur Erstellung verwendet wurde.

Lokal ausgelieferte Ressourcen, wie diejenigen mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z.B. `http://dev.whatever.localhost/`), und `file://` URLs werden auch als sicher geliefert angesehen.

> [!NOTE]
> Firefox 84 und höher unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abbildete).

Ressourcen, die nicht lokal sind, müssen um als sicher angesehen zu werden, die folgenden Kriterien erfüllen:

- müssen über `https://` oder `wss://` URLs bereitgestellt werden
- die Sicherheitseigenschaften des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet gelten

## Funktionsprüfung

Seiten können die Funktionsprüfung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie das [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Boolean verwenden, das im globalen Scope verfügbar ist.

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
- <https://permission.site> — Eine Site, die es Ihnen ermöglicht, zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS anwendet
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP Header
