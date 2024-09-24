---
title: runtime.onConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnect
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Diese Funktion wird ausgelöst, wenn eine Verbindung mit einem Erweiterungsprozess oder einem Inhalts-Skript hergestellt wird.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}} Objekt, das das aktuelle Skript mit dem anderen Kontext verbindet, zu dem es verbunden wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Inhalts-Skript:

- verbindet sich mit dem Hintergrund-Skript und speichert den `Port` in einer Variablen `myPort`
- lauscht auf Nachrichten auf `myPort` und protokolliert sie
- sendet Nachrichten an das Hintergrund-Skript, mittels `myPort`, wenn der Benutzer auf das Dokument klickt

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

Das entsprechende Hintergrund-Skript:

- lauscht auf Verbindungsversuche vom Inhalts-Skript
- Bei Erhalt eines Verbindungsversuchs:

  - speichert den Port in einer Variablen namens `portFromCS`
  - sendet dem Inhalts-Skript eine Nachricht über den Port
  - beginnt, auf Nachrichten zu lauschen, die über den Port empfangen werden, und protokolliert diese

- sendet Nachrichten an das Inhalts-Skript, mittels `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnect) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
