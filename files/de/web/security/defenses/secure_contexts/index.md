---
title: Sichere Kontexte
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Ein **sicherer Kontext** ist ein `Window` oder `Worker`, für den bestimmte Mindeststandards in Bezug auf Authentifizierung und Vertraulichkeit erfüllt sind. Viele Web-APIs und -Funktionen sind nur in einem sicheren Kontext zugänglich. Das Hauptziel sicherer Kontexte ist es, [MITM-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke APIs zuzugreifen, die das Opfer eines Angriffs weiter gefährden könnten.

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr mächtig und ermöglichen einem Angreifer unter anderem Folgendes:

- Verletzung der Privatsphäre eines Benutzers.
- Niedrigstufiger Zugriff auf den Computer eines Benutzers.
- Zugriff auf Daten wie Benutzeranmeldedaten.

## Wann wird ein Kontext als sicher angesehen?

Ein Kontext wird als sicher angesehen, wenn er bestimmte Mindeststandards in Bezug auf Authentifizierung und Vertraulichkeit erfüllt, die in der [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)-Spezifikation definiert sind. Ein bestimmtes Dokument wird als sicherer Kontext betrachtet, wenn es das [aktive Dokument](https://html.spec.whatwg.org/multipage/browsers.html#active-document) eines [Top-Level-Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) ist (im Wesentlichen ein enthaltendes Fenster oder Tab), der ein sicherer Kontext ist.

Zum Beispiel wird selbst ein über TLS geliefertes Dokument innerhalb eines {{HTMLElement("iframe")}} nicht als sicherer Kontext angesehen, wenn es einen Vorfahren hat, der nicht ebenfalls über TLS geliefert wurde.

Es ist jedoch wichtig zu beachten, dass, wenn ein unsicherer Kontext ein neues Fenster erstellen lässt (mit oder ohne Angabe von [noopener](/de/docs/Web/API/Window/open)), die Tatsache, dass der Eröffner unsicher war, keinen Einfluss darauf hat, ob das neue Fenster als sicher angesehen wird. Das liegt daran, dass die Bestimmung, ob ein bestimmtes Dokument in einem sicheren Kontext ist, nur auf Grundlage der Betrachtung innerhalb des zugehörigen Top-Level-Browsing-Kontexts erfolgt — und nicht darauf, ob ein unsicherer Kontext zufällig zur Erstellung verwendet wurde.

Ressourcen, die nicht lokal sind, müssen folgende Kriterien erfüllen, um als sicher zu gelten:

- Sie müssen über `https://` URLs geliefert werden.
- Die Sicherheitsmerkmale des Netzwerkkanals, der zur Bereitstellung der Ressource verwendet wird, dürfen nicht als veraltet angesehen werden.

## Potenziell vertrauenswürdige Ursprünge

Ein **potenziell vertrauenswürdiger Ursprung** ist einer, dem der Browser im Allgemeinen vertrauen kann, Datensicherheit bereitzustellen, obwohl er streng genommen nicht die Kriterien eines sicheren Kontexts erfüllt.

Lokal bereitgestellte Ressourcen wie jene mit `http://127.0.0.1`, `http://localhost` und `http://*.localhost` URLs (zum Beispiel `http://dev.whatever.localhost/`) werden nicht über HTTPS bereitgestellt, können jedoch als sicher angesehen werden, da sie sich auf dem gleichen Gerät wie der Browser befinden. Sie sind daher potenziell vertrauenswürdig. Dies ist für Entwickler praktisch, die Anwendungen lokal testen.

Dasselbe gilt im Allgemeinen für `file://` URLs.

Gesicherte [WebSocket](/de/docs/Web/API/WebSockets_API) (`"wss://"`) URLs werden ebenfalls als potenziell vertrauenswürdig betrachtet.

Anbieter-spezifische URL-Schemata wie `app://` oder `chrome-extension://` werden nicht von allen Browsern als potenziell vertrauenswürdig angesehen, können jedoch von den Browsern, deren Anbieter sie stammen, als vertrauenswürdig betrachtet werden.

> [!NOTE]
> Firefox 84 und höher unterstützen `http://localhost` und `http://*.localhost` URLs als vertrauenswürdige Ursprünge (frühere Versionen taten dies nicht, da `localhost` nicht garantiert auf eine lokale/Loopback-Adresse abgebildet wurde).

## Feature-Erkennung

Seiten können die Feature-Erkennung nutzen, um zu überprüfen, ob sie in einem sicheren Kontext sind oder nicht, indem sie den booleschen Wert [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) verwenden, der im globalen Gültigkeitsbereich verfügbar ist.

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
- <https://permission.site> — Eine Seite, die es Ihnen ermöglicht, zu überprüfen, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS durchführt
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
