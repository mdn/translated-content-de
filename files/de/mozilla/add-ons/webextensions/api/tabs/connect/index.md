---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Rufen Sie diese Funktion auf, um eine Verbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten wie Popup-Skripten oder Optionsseitenskripten) und allen [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), die zu dieser Erweiterung gehören und in dem angegebenen Tab ausgeführt werden, herzustellen. Diese Funktion gibt ein {{WebExtAPIRef("runtime.Port")}}-Objekt zurück.

Wenn dies aufgerufen wird, wird das Ereignis {{WebExtAPIRef('runtime.onConnect')}} in jedem Inhalts-Skript ausgelöst, das zu dieser Erweiterung gehört und im angegebenen Tab ausgeführt wird. Der Ereignis-Listener erhält ein weiteres {{WebExtAPIRef("runtime.Port")}}-Objekt. Die beiden Seiten können dann die `Port`-Objekte verwenden, um Nachrichten auszutauschen.

Für weitere Details siehe [Verbindungsbasiertes Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). Sie können Nachrichten auch ohne Erstellung einer Verbindung senden, für Ratschläge zur Wahl zwischen den Optionen siehe [Entscheidung zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

## Syntax

```js-nolint
browser.tabs.connect(
  tabId,      // integer
  connectInfo // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, zu dessen Inhalts-Skripten wir eine Verbindung herstellen möchten.
- `connectInfo` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `name` {{optional_inline}}
      - : `string`. Wird an die {{WebExtAPIRef("runtime.onConnect")}}-Ereignis-Listener in Inhalts-Skripten, die zu dieser Erweiterung gehören und im angegebenen Tab ausgeführt werden, übergeben.
    - `frameId` {{optional_inline}}
      - : `integer`. Öffnen Sie einen Port zu einem spezifischen Frame, der durch `frameId` identifiziert wird, anstatt zu allen Frames im Tab.

### Rückgabewert

{{WebExtAPIRef('runtime.Port')}}. Ein Port, der zum Kommunizieren mit den im angegebenen Tab ausgeführten Inhalts-Skripten verwendet werden kann.

## Beispiele

In diesem Beispiel horcht ein Hintergrundskript auf einen Klick auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), stellt dann eine Verbindung zum aktuell aktiven Tab her und sendet anschließend eine Nachricht mithilfe des `Port`, der von `connect()` zurückgegeben wird:

```js
function connectToTab(tabs) {
  if (tabs.length > 0) {
    let examplePort = browser.tabs.connect(tabs[0].id, {
      name: "tabs-connect-example",
    });
    examplePort.postMessage({ greeting: "Hi from background script" });
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingActive = browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  gettingActive.then(connectToTab, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-connect). Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
