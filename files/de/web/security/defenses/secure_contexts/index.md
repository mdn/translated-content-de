---
title: Sichere Kontexte
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards der Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und Features sind nur in einem sicheren Kontext zugänglich. Das primäre Ziel sicherer Kontexte ist es, [Angreifern in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) den Zugriff auf leistungsstarke APIs zu verwehren, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Features eingeschränkt werden?

Einige APIs im Web sind sehr leistungsstark und ermöglichen einem Angreifer Folgendes und mehr:

- Die Privatsphäre eines Nutzers zu verletzen.
- Niedrigen Zugriff auf den Computer eines Nutzers zu erhalten.
- Zugriff auf Daten wie Nutzer-Anmeldeinformationen zu bekommen.

## Wann wird ein Kontext als sicher betrachtet?

Ein Kontext wird als sicher betrachtet, wenn er bestimmte Mindeststandards der Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) Spezifikation definiert sind. Ein bestimmtes Dokument wird als sicherer Kontext betrachtet, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltendes Fenster oder Tab), das ein sicherer Kontext ist.

Zum Beispiel wird ein über TLS geliefertes Dokument innerhalb eines {{HTMLElement("iframe")}} nicht als sicherer Kontext betrachtet, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erstellt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass der Ersteller unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher betrachtet wird. Das liegt daran, dass die Feststellung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur darauf basierend erfolgt, dass es innerhalb des Top-Level-Browsing-Kontexts, mit dem es assoziiert ist, betrachtet wird — und nicht darauf, ob ein unsicherer Kontext zufällig zur Erstellung verwendet wurde.

Ressourcen, die nicht lokal sind, müssen folgende Kriterien erfüllen, um als sicher betrachtet zu werden:

- Sie müssen über `https://` URLs bereitgestellt werden.
- Die Sicherheitseigenschaften des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet betrachtet werden.

## Potenziell vertrauenswürdige Ursprünge

Ein **potenziell vertrauenswürdiger Ursprung** ist einer, dem der Browser im Allgemeinen vertrauen kann, Datensicherheit zu gewährleisten, auch wenn er streng genommen die Kriterien eines sicheren Kontexts nicht erfüllt.

Lokal bereitgestellte Ressourcen wie solche mit `http://127.0.0.1`, `http://localhost` und `http://*.localhost` URLs (zum Beispiel `http://dev.whatever.localhost/`) werden nicht unter Verwendung von HTTPS bereitgestellt, können jedoch als sicher geliefert betrachtet werden, da sie auf demselben Gerät wie der Browser sind. Daher sind sie potenziell vertrauenswürdig. Dies ist praktisch für Entwickler, die Anwendungen lokal testen.

Dasselbe gilt im Allgemeinen für `file://` URLs.

Sichere [WebSocket](/de/docs/Web/API/WebSockets_API) (`"wss://"`) URLs werden ebenfalls als potenziell vertrauenswürdig betrachtet.

Herstellerspezifische URL-Schemen wie `app://` oder `chrome-extension://` werden nicht von allen Browsern als potenziell vertrauenswürdig betrachtet, könnten jedoch von den Browsern der Hersteller, von denen sie stammen, als solche betrachtet werden.

> [!NOTE]
> Firefox 84 und spätere Versionen unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, da nicht garantiert war, dass `localhost` einer lokalen/loopback-Adresse zugeordnet ist).

## Feature-Erkennung

Seiten können die Feature-Erkennung nutzen, um zu überprüfen, ob sie sich in einem sicheren Kontext befinden oder nicht, indem sie den booleanischen Wert von [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) verwenden, der im globalen Scope verfügbar ist.

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

- [Plattformfeatures, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der Features, die nur in sicheren Kontexten verfügbar sind
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) und [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)
- <https://permission.site> — Eine Webseite, die es Ihnen ermöglicht zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
