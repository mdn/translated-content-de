---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Webanfrage gestellt werden soll, um der Erweiterung die Möglichkeit zu geben, sie zu proxen.

Dieses Ereignis ist eng an die im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignisse angelehnt. Wie diese Ereignisse nimmt die `addListener()`-Funktion drei Argumente entgegen:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das kontrolliert, welche Anfragen das Ereignis auslösen.
- ein Array von Strings, um andere Aspekte des Verhaltens des Ereignisses zu steuern.

Das Ereignis wird ausgelöst, bevor eines der `webRequest`-Ereignisse für dieselbe Anfrage ausgelöst wird.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen zur Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy darstellt (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, wodurch es dem Browser ermöglicht wird, auf einen anderen Proxy zurückzugreifen, falls ein Proxy nicht erreichbar ist). Standardmäßig erfolgt bei der Anfrage ein Fallback auf einen vom Browser definierten Proxy, es sei denn, ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt endet, wird zurückgegeben.

Um `proxy.onRequest` verwenden zu können, muss eine Erweiterung die "proxy" [API-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der Anfragen besitzen, die sie abfängt. Das bedeutet, dass die Übereinstimmungsmuster im `filter`-Argument eine Teilmenge der Host-Erlaubnisse der Erweiterung sein müssen.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Argument übergeben, das ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt ist, das Details zur Anfrage enthält.

    Der Listener kann eines der folgenden zurückgeben:
    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das zu einem `ProxyInfo`-Objekt auflöst.
    - ein `Promise`, das zu einem Array von `ProxyInfo`-Objekten auflöst.

    Wenn der Listener ein Array oder ein Promise zurückgibt, das zu einem Array auflöst, stellen die `ProxyInfo`-Objekte nach dem ersten einen Fallback dar. Wenn der Proxy an Position N im Array nicht erreichbar ist, wenn seine `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Standardmäßig erfolgt bei der Anfrage ein Fallback auf einen vom Browser definierten Proxy, es sei denn, ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt endet (`[{ ... proxy info ...} , null]`), wird zurückgegeben.

    Wenn es einen Fehler bei der Angabe der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte gibt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an den Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anfrage-Header im `details`-Objekt einzuschließen, das an den Listener übergeben wird.

## Beispiele

Dieser Code fängt Anfragen an `<all_urls>` ab und proxyt sie, wenn sie nicht für einen Top-Level-Frame bestimmt sind.

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
