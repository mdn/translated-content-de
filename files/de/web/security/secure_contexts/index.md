---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards für Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter kompromittieren könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr leistungsfähig und ermöglichen es einem Angreifer, Folgendes und mehr zu tun:

- Die Privatsphäre eines Benutzers verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Benutzers erhalten.
- Zugriff auf Daten wie Benutzeranmeldeinformationen erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards für Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert sind. Ein bestimmtes Dokument gilt als sicherer Kontext, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein umgebendes Fenster oder Tab), das ein sicherer Kontext ist.

Beispielsweise wird selbst für ein über TLS geliefertes Dokument innerhalb eines {{HTMLElement("iframe")}} der Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erzeugt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass der Erzeuger unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher angesehen wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur darauf basiert, es innerhalb des Top-Level-Browsing-Kontexts zu betrachten, mit dem es verknüpft ist – und nicht darauf, ob ein unsicherer Kontext zufällig verwendet wurde, um es zu erstellen.

Lokal gelieferte Ressourcen, wie solche mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z.B. `http://dev.whatever.localhost/`) sowie `file://` URLs werden ebenfalls als sicher geliefert angesehen.

> [!NOTE]
> Firefox 84 und später unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen nicht, da `localhost` nicht garantiert zu einer lokalen/Loopback-Adresse führt).

Ressourcen, die nicht lokal sind, müssen, um als sicher angesehen zu werden, die folgenden Kriterien erfüllen:

- müssen über `https://` oder `wss://` URLs geliefert werden
- die Sicherheitseigenschaften des Netzwerkanals, der zur Lieferung der Ressource verwendet wird, dürfen nicht als veraltet gelten

## Feature-Erkennung

Seiten können Feature-Erkennung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem der boolesche Wert [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) verwendet wird, der im globalen Bereich verfügbar ist.

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
- <https://permission.site> — Eine Seite, die es Ihnen ermöglicht zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS verwendet
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP-Header
