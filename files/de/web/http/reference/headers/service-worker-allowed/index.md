---
title: Service-Worker-Allowed header
short-title: Service-Worker-Allowed
slug: Web/HTTP/Reference/Headers/Service-Worker-Allowed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Service-Worker-Allowed`**-{{Glossary("response_header", "Antwort-Header")}} wird verwendet, um die Pfadeinschränkung für den Standard-`scope` eines Service Workers zu erweitern.

Standardmäßig ist der [`scope`](/de/docs/Web/API/ServiceWorkerContainer/register#scope) für eine Service Worker-Registrierung das Verzeichnis, in dem sich das Service Worker-Skript befindet. Zum Beispiel, wenn sich das Skript `sw.js` in `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` kontrollieren. Server können den `Service-Worker-Allowed`-Header verwenden, um einem Service Worker zu erlauben, URLs außerhalb seines eigenen Verzeichnisses zu steuern.

Ein Service Worker fängt alle Netzwerk-Anfragen innerhalb seines `scope` ab, daher sollten Sie vermeiden, allzu breite Scopes zu verwenden, es sei denn, es ist notwendig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Allowed: <scope>
```

## Direktiven

- `<scope>`
  - : Ein String, der eine URL repräsentiert, die den Registrierungs-`scope` eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker kontrollieren kann.

## Beispiele

### Verwendung von Service-Worker-Allowed zur Erweiterung des Service Worker-Scopes

Das untenstehende JavaScript-Beispiel ist in `example.com/product/index.html` enthalten und versucht, einen Service Worker mit einem `scope` zu [registrieren](/de/docs/Web/API/ServiceWorkerContainer/register), der für alle Ressourcen unter `example.com/` gilt.

```js
navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
  (registration) => {
    console.log("Install succeeded, scoped to '/'", registration);
  },
  (error) => {
    console.error(`Service worker registration failed: ${error}`);
  },
);
```

Die HTTP-Antwort auf die Skriptressourcen-Anfrage des Service Workers (`./sw.js`) enthält den `Service-Worker-Allowed`-Header, der auf `/` gesetzt ist:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// sw.js contents…
```

Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da die `scope`-Option (`{ scope: "/" }`) einen breiteren Bereich anfordert als das Verzeichnis, in dem sich das Service Worker-Skript befindet (`/product/sw.js`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
- [Warum schlägt das Registrieren meines Service Workers fehl?](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) in _Using Service Workers_.
