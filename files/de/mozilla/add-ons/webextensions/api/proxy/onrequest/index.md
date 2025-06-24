---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn eine Webanfrage kurz davor steht, gemacht zu werden, um der Erweiterung die Möglichkeit zu geben, diese zu proxyen.

Dieses Ereignis orientiert sich eng an den im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignissen. Wie diese Ereignisse nimmt seine `addListener()`-Funktion drei Argumente entgegen:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das steuert, welche Anfragen das Ereignis auslösen.
- ein Array von Strings, um andere Aspekte des Verhaltens des Ereignisses zu steuern.

Das Ereignis wird vor allen `webRequest`-Ereignissen für die gleiche Anfrage ausgelöst.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy darstellt (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, was es dem Browser ermöglicht, bei Nichterreichbarkeit eines Proxys einen anderen zu verwenden). Standardmäßig fällt die Anfrage auf einen vom Browser definierten Proxy zurück, es sei denn, es wird ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt endet, zurückgegeben.

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung die "proxy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie die [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen besitzen. Das bedeutet, dass die Übereinstimmungsmuster im `filter`-Argument ein Teil der Host-Berechtigungen der Erweiterung sein müssen.

## Syntax

```js-nolint
browser.proxy.onRequest.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.proxy.onRequest.removeListener(listener)
browser.proxy.onRequest.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Argument übergeben, das ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt mit Details der Anfrage ist.

    Der Listener kann eines der folgenden zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das zu einem `ProxyInfo`-Objekt auflöst.
    - ein `Promise`, das zu einem Array von `ProxyInfo`-Objekten auflöst.

    Wenn der Listener ein Array oder ein `Promise`, das zu einem Array auflöst, zurückgibt, stellen die `ProxyInfo`-Objekte ab dem zweiten einen Failover dar. Ist der Proxy an Position N im Array nicht erreichbar, wenn dessen `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Standardmäßig fällt die Anfrage auf einen vom Browser definierten Proxy zurück, es sei denn, es wird ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt (`[{ ... proxy info ...} , null]`) endet, zurückgegeben.

    Wenn es einen Fehler bei der Angabe der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte gibt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an den Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anforderungsheader im `details`-Objekt zu enthalten, das an den Listener übergeben wird.

## Beispiele

Dieser Code fängt Anfragen an `<all_urls>` ab und verwendet Proxys, wenn sie nicht für ein Top-Level-Frame sind.

```js
function shouldProxyRequest(requestInfo) {
  return requestInfo.parentFrameId !== -1;
}

function handleProxyRequest(requestInfo) {
  if (shouldProxyRequest(requestInfo)) {
    console.log(`Proxying: ${requestInfo.url}`);
    return { type: "http", host: "127.0.0.1", port: 65535 };
  }
  return { type: "direct" };
}

browser.proxy.onRequest.addListener(handleProxyRequest, {
  urls: ["<all_urls>"],
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
