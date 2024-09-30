---
title: runtime.onConnectExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnectExternal
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Erweiterung eine Verbindungsanfrage von einer anderen Erweiterung erhält.

Um eine Nachricht zu senden, die vom `onConnectExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.connect()")}}, indem Sie die ID des Empfängers im `extensionId`-Parameter angeben.

Dem Listener wird ein {{WebExtAPIRef('runtime.Port')}} Objekt übergeben, das verwendet werden kann, um Nachrichten zu senden und zu empfangen. Das `Port`-Objekt enthält auch eine `sender`-Eigenschaft, die ein {{WebExtAPIRef("runtime.MessageSender")}} Objekt ist und vom Empfänger zur Überprüfung der Sender-ID verwendet werden kann.

## Syntax

```js-nolint
browser.runtime.onConnectExternal.addListener(listener)
browser.runtime.onConnectExternal.removeListener(listener)
browser.runtime.onConnectExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}} Objekt, das das aktuelle Skript mit der anderen Erweiterung verbindet, zu der es eine Verbindung herstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem Beispiel verbindet sich die Erweiterung Hänsel mit der Erweiterung Gretel:

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

Gretel lauscht auf die Verbindung und überprüft, ob der Absender wirklich Hänsel ist:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnectExternal) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
