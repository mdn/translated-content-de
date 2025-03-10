---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 25173c4fdc13060217d794ef7e2d31f8859f3fe0
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Webanfrage gestellt werden soll, um der Erweiterung die Möglichkeit zu geben, sie zu proxen.

Dieses Ereignis ist eng an den in der [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignissen orientiert. Wie diese Ereignisse nimmt die Funktion `addListener()` drei Argumente an:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird,
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das steuert, welche Anfragen das Ereignis auslösen,
- ein Array von Zeichenfolgen, um andere Aspekte des Verhaltens des Ereignisses zu steuern.

Das Ereignis wird vor allen `webRequest`-Ereignissen für dieselbe Anfrage ausgelöst.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy darstellt (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, wodurch der Browser übergehen kann, wenn ein Proxy nicht erreichbar ist). Standardmäßig fällt die Anfrage auf jeden vom Browser definierten Proxy zurück, es sei denn, ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt endet, wird zurückgegeben.

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung die "proxy"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der Anfragen haben, die sie abfängt, was bedeutet, dass die Muster im `filter`-Argument eine Teilmenge der Hostberechtigungen der Erweiterung sein müssen.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Argument übergeben, das ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt ist, welches Details der Anfrage enthält.

    Der Listener kann eines der folgenden zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das sich zu einem `ProxyInfo`-Objekt auflöst.
    - ein `Promise`, das sich zu einem Array von `ProxyInfo`-Objekten auflöst.

    Wenn der Listener ein Array oder ein Promise, das sich zu einem Array auflöst, zurückgibt, stellen die `ProxyInfo`-Objekte nach dem ersten eine Ausfallsicherung dar. Ist der Proxy an Position N im Array nicht erreichbar, wenn die `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Standardmäßig fällt die Anfrage auf jeden vom Browser definierten Proxy zurück, es sei denn, ein `null`-Objekt oder ein Array, das mit einem `null`-Objekt endet (`[{ ... proxy info ...} , null]`), wird zurückgegeben.

    Wenn es einen Fehler bei der Spezifizierung der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte gibt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränken, die an den Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anforderungsheader im `details`-Objekt einzuschließen, das an den Listener übergeben wird.

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
