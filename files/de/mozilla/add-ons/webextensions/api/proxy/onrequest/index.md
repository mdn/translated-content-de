---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Webanfrage kurz vor der Ausführung steht, um der Erweiterung die Möglichkeit zu geben, sie zu proxyen.

Dieses Ereignis ist eng an den in der [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignissen orientiert. Wie bei diesen Ereignissen nimmt die Funktion `addListener()` drei Argumente entgegen:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) Objekt, das steuert, welche Anfragen das Ereignis auslösen.
- ein Array von Zeichenfolgen, um andere Aspekte des Ereignisverhaltens zu kontrollieren.

Das Ereignis wird vor allen `webRequest`-Ereignissen für dieselbe Anfrage ausgelöst.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}} Objekt zurück, das einen zu verwendenden Proxy darstellt (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}} Objekten, das es dem Browser ermöglicht, auf einen anderen Proxy zurückzugreifen, wenn ein Proxy nicht erreichbar ist).

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung über die "proxy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen verfügen, was bedeutet, dass die Mustervorlagen im `filter`-Argument eine Teilmenge der Hostberechtigungen der Erweiterung sein müssen.

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
  - : Hört auf, dieses Ereignis zu hören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein einziges Argument übergeben, das ein {{WebExtAPIRef("proxy.RequestDetails")}} Objekt enthält, das Details der Anfrage enthält.

    Der Listener kann eines der folgenden zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}} Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}} Objekten.
    - ein `Promise`, das in ein `ProxyInfo` Objekt aufgelöst wird.
    - ein `Promise`, das in ein Array von `ProxyInfo` Objekten aufgelöst wird.

    Wenn der Listener ein Array oder ein Promise zurückgibt, das in ein Array aufgelöst wird, stellen alle `ProxyInfo` Objekte nach dem ersten einen Failover dar: Wenn der Proxy an Position N im Array nicht erreichbar ist, wenn sein `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Wenn ein Fehler bei der Spezifikation der {{WebExtAPIRef("proxy.ProxyInfo")}} Objekte auftritt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an den Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anforderungsheader in das an den Listener übergebene `details`-Objekt aufzunehmen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fängt Anfragen an `<all_urls>` ab und proxyt sie, wenn sie nicht für ein Top-Level-Frame sind.

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
