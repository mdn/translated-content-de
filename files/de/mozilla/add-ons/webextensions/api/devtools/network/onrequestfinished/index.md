---
title: devtools.network.onRequestFinished
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Netzwerkanforderung abgeschlossen ist und ihre Details der Erweiterung zur Verfügung stehen.

Die Anforderung wird als [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries) bereitgestellt, das auch eine asynchrone Methode `getContent()` enthält, die den Inhalt des Antwortkörpers abruft.

Beachten Sie, dass obwohl Ihre Erweiterung jederzeit einen Listener hinzufügen kann, dieser erst ausgelöst wird, nachdem der Benutzer das [Netzwerk-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) des Browsers mindestens einmal aktiviert hat.

## Syntax

```js-nolint
browser.devtools.network.onRequestFinished.addListener(listener)
browser.devtools.network.onRequestFinished.removeListener(listener)
browser.devtools.network.onRequestFinished.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `request`
      - : `object`. Ein Objekt, das die Anforderung darstellt. Dieses Objekt ist ein einzelnes [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries). Es definiert auch eine asynchrone Methode `getContent()`, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit einem Array von zwei Elementen aufgelöst wird. Das erste Element ist der HTTP-Antwortkörper als Zeichenkette, während das zweite Element der {{Glossary("MIME_type", "MIME-Typ")}} der HTTP-Antwort ebenfalls als Zeichenkette ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Listener hinzu, der die Server-IP-Adresse und den Antwortkörper für jede Netzwerkanforderung protokolliert.

```js
function handleRequestFinished(request) {
  console.log("Server IP: ", request.serverIPAddress);
  request.getContent().then(([content, mimeType]) => {
    console.log("Content: ", content);
    console.log("MIME type: ", mimeType);
  });
}

browser.devtools.network.onRequestFinished.addListener(handleRequestFinished);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
