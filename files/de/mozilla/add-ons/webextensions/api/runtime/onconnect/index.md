---
title: runtime.onConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Verbindung mit einem Erweiterungsprozess oder einem Inhalts-Skript hergestellt wird.

## Syntax

```js-nolint
browser.runtime.onConnect.addListener(listener)
browser.runtime.onConnect.removeListener(listener)
browser.runtime.onConnect.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`
  - : Die aufgerufene Funktion, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}}-Objekt, das das aktuelle Skript mit dem anderen Kontext verbindet, mit dem es sich verbindet.

## Beispiele

Dieses Inhalts-Skript:

- stellt eine Verbindung zum Hintergrundskript her und speichert den `Port` in einer Variablen `myPort`
- horcht auf Nachrichten auf `myPort` und protokolliert sie
- sendet Nachrichten an das Hintergrundskript, indem `myPort` verwendet wird, wenn der Benutzer auf das Dokument klickt

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

Das entsprechende Hintergrundskript:

- horcht auf Verbindungsversuche vom Inhalts-Skript
- wenn es einen Verbindungsversuch empfängt:
  - speichert es den Port in einer Variablen namens `portFromCS`
  - sendet dem Inhalts-Skript eine Nachricht über den Port
  - beginnt, auf Nachrichten auf dem Port zu horchen und protokolliert sie

- sendet Nachrichten an das Inhalts-Skript, indem `portFromCS` verwendet wird, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnect)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
