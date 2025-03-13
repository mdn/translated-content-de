---
title: Service-Worker-Allowed
slug: Web/HTTP/Reference/Headers/Service-Worker-Allowed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Service-Worker-Allowed`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um die Pfadeinschränkung für den Standard-`scope` eines Service-Workers zu erweitern.

Standardmäßig ist der [`scope`](/de/docs/Web/API/ServiceWorkerContainer/register#scope) für eine Service-Worker-Registrierung das Verzeichnis, in dem sich das Service-Worker-Skript befindet.
Zum Beispiel kann das Skript `sw.js`, das sich in `/js/sw.js` befindet, standardmäßig nur URLs unter `/js/` kontrollieren.
Server können den `Service-Worker-Allowed`-Header verwenden, um einem Service-Worker zu erlauben, URLs außerhalb seines eigenen Verzeichnisses zu kontrollieren.

Ein Service-Worker fängt alle Netzwerkrequests innerhalb seines Geltungsbereichs ab, deshalb sollten Sie es vermeiden, zu weitreichende Bereiche zu benutzen, es sei denn, es ist notwendig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
  - : Ein String, der eine URL darstellt, die den Registrierungsbereich eines Service-Workers definiert; das heißt, welchen Bereich von URLs ein Service-Worker kontrollieren kann.

## Beispiele

### Verwendung von Service-Worker-Allowed, um den Geltungsbereich eines Service-Workers zu erweitern

Das folgende JavaScript-Beispiel ist in `example.com/product/index.html` enthalten und versucht, einen Service-Worker mit einem Geltungsbereich zu [registrieren](/de/docs/Web/API/ServiceWorkerContainer/register), der für alle Ressourcen unter `example.com/` gilt.

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

Die HTTP-Antwort auf die Anfrage der Service-Worker-Skript-Ressource (`./sw.js`) enthält den `Service-Worker-Allowed`-Header, der auf `/` gesetzt ist:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// sw.js contents…
```

Wenn der Server den Header nicht setzt, schlägt die Service-Worker-Registrierung fehl, da die `scope`-Option (`{ scope: "/" }`) einen breiteren Geltungsbereich anfordert als das Verzeichnis, in dem sich das Service-Worker-Skript befindet (`/product/sw.js`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
- [Warum schlägt mein Service Worker bei der Registrierung fehl](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) in _Using Service Workers_.
