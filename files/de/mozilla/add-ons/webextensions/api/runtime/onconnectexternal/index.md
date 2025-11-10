---
title: runtime.onConnectExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnectExternal
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Erweiterung eine Verbindungsanfrage von einer anderen Erweiterung erhält.

Um eine Nachricht zu senden, die vom `onConnectExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.connect()")}}, indem Sie die ID des Empfängers im `extensionId` Parameter übergeben.

Der Listener erhält ein {{WebExtAPIRef('runtime.Port')}}-Objekt, das er dann zum Senden und Empfangen von Nachrichten verwenden kann. Das `Port`-Objekt enthält auch eine `sender`-Eigenschaft, die ein {{WebExtAPIRef("runtime.MessageSender")}}-Objekt ist und die der Empfänger verwenden kann, um die ID des Absenders zu überprüfen.

## Syntax

```js-nolint
browser.runtime.onConnectExternal.addListener(listener)
browser.runtime.onConnectExternal.removeListener(listener)
browser.runtime.onConnectExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}}-Objekt, das das aktuelle Skript mit der anderen Erweiterung verbindet, mit der es sich verbindet.

## Beispiele

In diesem Beispiel verbindet sich die Erweiterung Hansel mit der Erweiterung Gretel:

```js
console.log("connecting to Gretel");
let myPort = browser.runtime.connect("gretel@mozilla.org");

myPort.onMessage.addListener((message) => {
  console.log(`From Gretel: ${message.content}`);
});

browser.browserAction.onClicked.addListener(() => {
  myPort.postMessage({ content: "Hello from Hansel" });
});
```

Gretel hört auf die Verbindung und überprüft, dass der Absender wirklich Hansel ist:

```js
let portFromHansel;

browser.runtime.onConnectExternal.addListener((port) => {
  console.log(port);
  if (port.sender.id === "hansel@mozilla.org") {
    console.log("connection attempt from Hansel");
    portFromHansel = port;
    portFromHansel.onMessage.addListener((message) => {
      console.log(`From Hansel: ${message.content}`);
    });
  }
});

browser.browserAction.onClicked.addListener(() => {
  portFromHansel.postMessage({ content: "Message from Gretel" });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnectExternal)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
