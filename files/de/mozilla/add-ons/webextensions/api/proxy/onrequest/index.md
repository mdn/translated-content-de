---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Webanfrage gesendet werden soll, um der Erweiterung die Möglichkeit zu geben, diese zu proxyen.

Dieses Ereignis ist eng an die im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API definierten Ereignisse angelehnt. Wie bei diesen Ereignissen nimmt die `addListener()`-Funktion drei Argumente entgegen:

- den Listener, der aufgerufen wird, wenn das Ereignis ausgelöst wird.
- ein [`RequestFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Objekt, das steuert, welche Anfragen das Ereignis auslösen.
- ein Array von Strings, um andere Aspekte des Verhaltens des Ereignisses zu steuern.

Das Ereignis wird ausgelöst, bevor eines der `webRequest`-Ereignisse für dieselbe Anfrage auftritt.

Wenn das Ereignis ausgelöst wird, wird der Listener mit einem Objekt aufgerufen, das Informationen über die Anfrage enthält. Der Listener gibt ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt zurück, das einen zu verwendenden Proxy repräsentiert (oder ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten, das dem Browser ermöglicht, auf einen anderen Proxy zurückzugreifen, wenn ein Proxy nicht erreichbar ist).

Um `proxy.onRequest` zu verwenden, muss eine Erweiterung die "proxy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der Anfragen besitzen, die sie abfängt. Das bedeutet, dass die Übereinstimmungsmuster im `filter`-Argument ein Teil der Host-Berechtigungen der Erweiterung sein müssen.

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
  - : Hört auf, dieses Ereignis zu beachten. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein einzelnes Argument übergeben, welches ein {{WebExtAPIRef("proxy.RequestDetails")}}-Objekt ist, das Details der Anfrage enthält.

    Der Listener kann eines der folgenden zurückgeben:

    - ein {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekt.
    - ein Array von {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekten.
    - ein `Promise`, das zu einem `ProxyInfo`-Objekt aufgelöst wird.
    - ein `Promise`, das zu einem Array von `ProxyInfo`-Objekten aufgelöst wird.

    Wenn der Listener ein Array oder ein Promise zurückgibt, das zu einem Array aufgelöst wird, dann stehen alle `ProxyInfo`-Objekte nach dem ersten für Ausweichmöglichkeiten: Wenn der Proxy an Position N im Array nicht erreichbar ist, wenn dessen `ProxyInfo.failoverTimeout` abläuft, versucht der Browser den Proxy an Position N+1.

    Wenn es einen Fehler bei der Spezifikation der {{WebExtAPIRef("proxy.ProxyInfo")}}-Objekte gibt, wird {{WebExtAPIRef("proxy.onError")}} aufgerufen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Satz von Filtern, der die an den Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Übergeben Sie `"requestHeaders"`, um die Anfrage-Header im `details`-Objekt einzuschließen, das an den Listener übergeben wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fängt Anfragen an `<all_urls>` ab und proxyet sie, wenn sie nicht für einen obersten Frame sind.

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
