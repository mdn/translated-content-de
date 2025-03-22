---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 041cf35a6932dfc59c00df24eebe381ea252cd29
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Webanforderung kurz davor steht, ausgeführt zu werden, um der Erweiterung die Möglichkeit zu geben, sie zu proxyen.

Dieses Ereignis ist eng an die im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)-API definierten Ereignisse angelehnt. Wie bei diesen Ereignissen nimmt die `addListener()`-Funktion drei Argumente:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das steuert, welche Anfragen das Ereignis auslösen.
- ein Array von Zeichenfolgen, um andere Aspekte des Verhaltens des Ereignisses zu steuern.

Das Ereignis wird vor allen `webRequest`-Ereignissen für die gleiche Anfrage ausgelöst.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy darstellt (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, das es dem Browser ermöglicht, bei Nichterreichbarkeit eines Proxys zu einem anderen zu wechseln). Standardmäßig fällt die Anfrage auf einen vom Browser definierten Proxy zurück, es sei denn, ein `null`-Objekt oder ein Array, das in einem `null`-Objekt endet, wird zurückgegeben.

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung über die "proxy"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der angeforderten Anfragen verfügen, was bedeutet, dass die Übereinstimmungsmuster im `filter`-Argument ein Teilbereich der Host-Berechtigungen der Erweiterung sein müssen.

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
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, sonst `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird ein Argument übergeben, das ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt ist, welches Details zur Anfrage enthält.

    Der Listener kann eines der folgenden zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das sich in ein `ProxyInfo`-Objekt auflöst.
    - ein `Promise`, das sich in ein Array von `ProxyInfo`-Objekten auflöst.

    Wenn der Listener ein Array oder ein Promise zurückgibt, das sich in ein Array auflöst, stellen die `ProxyInfo`-Objekte nach dem ersten Ausweichmöglichkeiten dar. Wenn der Proxy an Position N im Array nicht erreichbar ist, wenn seine `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Standardmäßig fällt die Anfrage auf einen vom Browser definierten Proxy zurück, es sei denn, ein `null`-Objekt oder ein Array, das in einem `null`-Objekt endet (`[{ ... proxy info ...}, null]`), wird zurückgegeben.

    Wenn ein Fehler beim Spezifizieren der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte vorliegt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Satz von Filtern, der die an den Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anfrage-Header im `details`-Objekt einzuschließen, das an den Listener übergeben wird.

## Beispiele

Dieser Code fängt Anfragen an `<all_urls>` ab und leitet sie proxy, wenn sie nicht für ein oberstes Frame bestimmt sind.

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
