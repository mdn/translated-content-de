---
title: Service-Worker-Allowed
slug: Web/HTTP/Headers/Service-Worker-Allowed
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker-Allowed`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um die Pfadeinschränkung für den `scope` eines Service Workers zu erweitern.

Standardmäßig ist der [`scope`](/de/docs/Web/API/ServiceWorkerContainer/register#scope) für eine Registrierung eines Service Workers das Verzeichnis, in dem das Service Worker-Skript liegt. Zum Beispiel, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` kontrollieren. Server können den `Service-Worker-Allowed`-Header verwenden, um einem Service Worker zu erlauben, URLs außerhalb seines eigenen Verzeichnisses zu kontrollieren.

Ein Service Worker fängt alle Netzwerk-Anfragen innerhalb seines `scope` ab. Daher sollten Sie es vermeiden, zu weit gefasste `scopes` zu verwenden, es sei denn, es ist notwendig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Ein String, der eine URL repräsentiert, die den Registrierungsscope eines Service Workers definiert, also, welcher Bereich von URLs von einem Service Worker kontrolliert werden kann.

## Beispiele

### Verwendung von Service-Worker-Allowed zur Erweiterung des Service Worker-Scopes

Das folgende JavaScript-Beispiel ist in `example.com/product/index.html` enthalten und versucht, einen Service Worker mit einem `scope` zu registrieren, der auf alle Ressourcen unter `example.com/` angewendet wird.

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

Die HTTP-Antwort auf die Anforderung der Service Worker-Skriptressource (`./sw.js`) enthält den `Service-Worker-Allowed`-Header, der auf `/` gesetzt ist:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// sw.js contents…
```

Wenn der Server den Header nicht setzt, schlägt die Registrierung des Service Workers fehl, da die `scope`-Option (`{ scope: "/" }`) einen `scope` anfordert, der breiter ist als das Verzeichnis, in dem sich das Service Worker-Skript befindet (`/product/sw.js`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
- [Warum schlägt die Registrierung meines Service Workers fehl](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) in _Using Service Workers_.
