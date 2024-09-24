---
title: Sichere Kontexte
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für das bestimmte Mindeststandards an Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und -Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt sein?

Einige APIs im Web sind sehr leistungsstark und ermöglichen es einem Angreifer, Folgendes und mehr zu tun:

- Die Privatsphäre eines Benutzers zu verletzen.
- Niedrigstufigen Zugriff auf den Computer eines Benutzers zu erhalten.
- Zugang zu Daten wie Benutzeranmeldeinformationen zu erhalten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards an Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert sind. Ein bestimmtes Dokument wird als sicherer Kontext angesehen, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Grunde ein enthaltenes Fenster oder Tab), das ein sicherer Kontext ist.

Zum Beispiel wird selbst für ein Dokument, das über TLS innerhalb eines {{HTMLElement("iframe")}} geliefert wird, dessen Kontext **nicht** als sicher angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass ein unsicherer Kontext, der ein neues Fenster erstellt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), keine Auswirkungen darauf hat, ob das neue Fenster als sicher angesehen wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument sich in einem sicheren Kontext befindet, nur basierend auf dem top-level browsing context erfolgt, dem es zugeordnet ist – und nicht darauf, ob ein unsicherer Kontext zur Erstellung verwendet wurde.

Lokal bereitgestellte Ressourcen wie solche mit `http://127.0.0.1` URLs, `http://localhost` und `http://*.localhost` URLs (z. B. `http://dev.whatever.localhost/`) sowie `file://` URLs gelten ebenfalls als sicher bereitgestellt.

> [!NOTE]
> Firefox 84 und später unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, weil `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

Ressourcen, die nicht lokal sind, müssen die folgenden Kriterien erfüllen, um als sicher angesehen zu werden:

- müssen über `https://` oder `wss://` URLs bereitgestellt werden
- die Sicherheitseigenschaften des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet gelten

## Feature-Erkennung

Seiten können die Feature-Erkennung verwenden, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden, indem sie das {{domxref("Window.isSecureContext")}} oder {{domxref("WorkerGlobalScope.isSecureContext")}} Boolean verwenden, das im globalen Scope verfügbar ist.

```js
if (window.isSecureContext) {
  // Seite ist ein sicherer Kontext, daher sind jetzt Service Worker verfügbar
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Plattformfunktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der Funktionen, die nur in sicheren Kontexten verfügbar sind
- {{domxref("Window.isSecureContext")}} und {{domxref("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — Eine Website, die es Ihnen ermöglicht, zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP-Header
