---
title: Service-Worker-Allowed header
short-title: Service-Worker-Allowed
slug: Web/HTTP/Reference/Headers/Service-Worker-Allowed
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Service-Worker-Allowed`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um die Pfadeinschränkung für den Standard-`scope` eines Service Workers zu erweitern.

Standardmäßig ist der [`scope`](/de/docs/Web/API/ServiceWorkerContainer/register#scope) für eine Registrierung eines Service Workers das Verzeichnis, in dem sich das Service-Worker-Skript befindet. Zum Beispiel kann das Skript `sw.js`, das sich in `/js/sw.js` befindet, standardmäßig nur URLs unter `/js/` kontrollieren. Server können den `Service-Worker-Allowed`-Header nutzen, um einem Service Worker zu erlauben, URLs außerhalb seines eigenen Verzeichnisses zu kontrollieren.

Ein Service Worker fängt alle Netzwerk-Anfragen innerhalb seines Scopes ab, daher sollten Sie vermeiden, zu breite Scopes zu verwenden, es sei denn, es ist notwendig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Allowed: <scope>
```

## Direktiven

- `<scope>`
  - : Ein String, der eine URL repräsentiert und den Registrierungs-Scope eines Service Workers definiert; also, welche Reichweite von URLs ein Service Worker kontrollieren kann.

## Beispiele

### Verwendung von Service-Worker-Allowed, um den Service-Worker-Scope zu erweitern

Das folgende JavaScript-Beispiel ist in `example.com/product/index.html` enthalten und versucht, einen Service Worker zu [registrieren](/de/docs/Web/API/ServiceWorkerContainer/register) mit einem Scope, der für alle Ressourcen unter `example.com/` gilt.

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

Die HTTP-Antwort auf die Anfrage für die Skriptressource des Service Workers (`./sw.js`) beinhaltet den `Service-Worker-Allowed`-Header, gesetzt auf `/`:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// sw.js contents…
```

Setzt der Server den Header nicht, schlägt die Registrierung des Service Workers fehl, da die `scope`-Option (`{ scope: "/" }`) einen breiteren Scope als das Verzeichnis anfragt, in dem sich das Service-Worker-Skript befindet (`/product/sw.js`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
- [Warum schlägt mein Service Worker fehl zu registrieren](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) in _Using Service Workers_.
