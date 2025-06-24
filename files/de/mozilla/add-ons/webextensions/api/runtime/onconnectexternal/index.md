---
title: runtime.onConnectExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnectExternal
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Erweiterung eine Verbindungsanforderung von einer anderen Erweiterung erhält.

Um eine Nachricht zu senden, die vom `onConnectExternal` Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.connect()")}} und übergeben Sie die ID des Empfängers im `extensionId` Parameter.

Dem Listener wird ein {{WebExtAPIRef('runtime.Port')}} Objekt übergeben, das zum Senden und Empfangen von Nachrichten verwendet werden kann. Das `Port`-Objekt enthält auch eine `sender`-Eigenschaft, die ein {{WebExtAPIRef("runtime.MessageSender")}} Objekt ist und mit der der Empfänger die ID des Senders überprüfen kann.

## Syntax

```js-nolint
browser.runtime.onConnectExternal.addListener(listener)
browser.runtime.onConnectExternal.removeListener(listener)
browser.runtime.onConnectExternal.hasListener(listener)
```

Ereignisse besitzen drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn ein Listener angemeldet ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}} Objekt, das das aktuelle Skript mit der anderen Erweiterung verbindet, zu der es verbunden wird.

## Browser-Kompatibilität

{{Compat}}

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

Gretel hört auf die Verbindung und überprüft, ob der Absender wirklich Hansel ist:

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
