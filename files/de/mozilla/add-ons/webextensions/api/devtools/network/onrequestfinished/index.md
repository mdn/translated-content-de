---
title: devtools.network.onRequestFinished
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Netzwerkanforderung abgeschlossen ist und ihre Details der Erweiterung zur Verfügung stehen.

Die Anfrage wird als ein [HAR-Eintrag-Objekt](http://www.softwareishard.com/blog/har-12-spec/#entries) angegeben, welches auch eine asynchrone `getContent()`-Methode erhält, die den Inhalt des Antworttextes abruft.

Beachten Sie, dass obwohl Ihre Erweiterung jederzeit einen Listener hinzufügen kann, dieser nur ausgelöst wird, nachdem der Benutzer mindestens einmal das [Netzwerk-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) des Browsers aktiviert hat.

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
  - : Hört auf, auf dieses Ereignis zu hören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `request`
      - : `object`. Ein Objekt, das die Anfrage repräsentiert. Dieses Objekt ist ein einzelnes [HAR-Eintrag](http://www.softwareishard.com/blog/har-12-spec/#entries)-Objekt. Es definiert auch eine asynchrone `getContent()`-Methode, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das sich mit einem Array aus zwei Elementen auflöst. Das erste Element ist der HTTP-Antwortinhalt als Zeichenkette, während das zweite Element der [MIME-Typ](/de/docs/Glossary/MIME_type) der HTTP-Antwort ebenfalls als Zeichenkette ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Listener hinzu, der die Server-IP-Adresse und den Antworttext für jede Netzwerkanforderung protokolliert.

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
