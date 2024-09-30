---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Webanfrage kurz davor ist, gemacht zu werden, um der Erweiterung die Möglichkeit zu geben, diese zu vermitteln.

Dieses Ereignis orientiert sich eng an den im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignissen. Wie bei diesen Ereignissen nimmt die Funktion `addListener()` drei Argumente an:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das steuert, welche Anfragen das Ereignis auslösen.
- ein Array von Zeichenfolgen, um andere Aspekte des Ereignisverhaltens zu steuern.

Das Ereignis wird vor allen `webRequest`-Ereignissen für die gleiche Anfrage ausgelöst.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy repräsentiert (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, wodurch der Browser auf einen anderen Proxy umschalten kann, falls ein Proxy nicht erreichbar ist).

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung die "proxy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der Anfragen, die sie abfängt, haben, was bedeutet, dass die Übereinstimmungsmuster im `filter`-Argument eine Teilmenge der Hostberechtigungen der Erweiterung sein müssen.

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

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Die Funktion erhält ein einziges Argument, das ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt ist, das Details der Anfrage enthält.

    Der Listener kann Folgendes zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das zu einem `ProxyInfo`-Objekt aufgelöst wird.
    - ein `Promise`, das zu einem Array von `ProxyInfo`-Objekten aufgelöst wird.

    Wenn der Listener ein Array oder ein Promise zurückgibt, das zu einem Array aufgelöst wird, dann repräsentieren alle `ProxyInfo`-Objekte nach dem ersten einen Failover: Wenn der Proxy an Position N im Array nicht erreichbar ist, wenn sein `ProxyInfo.failoverTimeout` abläuft, wird der Browser versuchen, den Proxy an Position N+1 zu verwenden.

    Wenn ein Fehler beim Festlegen der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte auftritt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an den Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anforderungsheader im `details`-Objekt einzuschließen, das an den Listener übergeben wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fängt Anfragen zu `<all_urls>` ab und vermittelt sie, wenn sie nicht für einen obersten Rahmen bestimmt sind.

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
