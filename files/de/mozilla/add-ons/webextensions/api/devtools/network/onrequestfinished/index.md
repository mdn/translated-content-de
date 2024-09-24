---
title: devtools.network.onRequestFinished
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn eine Netzwerkanforderung abgeschlossen ist und ihre Details der Erweiterung zur Verfügung stehen.

Die Anforderung wird als ein [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries) übergeben, welches auch eine asynchrone Methode `getContent()` hat, um den Inhalt des Antwortkörpers abzurufen.

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
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `request`
      - : `object`. Ein Objekt, das die Anforderung darstellt. Dieses Objekt ist ein einzelnes [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries). Es definiert auch eine asynchrone `getContent()` Methode, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das bei Auflösung ein Array mit zwei Elementen enthält. Das erste Element ist der HTTP-Antwortkörper als String, während das zweite Element der [MIME-Typ](/de/docs/Glossary/MIME_type) der HTTP-Antwort ebenfalls als String ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Listener hinzu, der die IP-Adresse des Servers und den Antwortkörper für jede Netzwerkanforderung protokolliert.

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
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.
