---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Diese Funktion wird aufgerufen, um eine Verbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie Popup-Skripten oder Optionsseitenskripten) und allen [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) herzustellen, die zu dieser Erweiterung gehören und im angegebenen Tab ausgeführt werden. Diese Funktion gibt ein {{WebExtAPIRef("runtime.Port")}}-Objekt zurück.

Wenn diese Funktion aufgerufen wird, wird das {{WebExtAPIRef('runtime.onConnect')}}-Ereignis in jedem Inhaltsskript ausgelöst, das zu dieser Erweiterung gehört und im angegebenen Tab ausgeführt wird. Der Ereignis-Listener erhält ein weiteres {{WebExtAPIRef("runtime.Port")}}-Objekt. Die beiden Seiten können dann die `Port`-Objekte verwenden, um Nachrichten auszutauschen.

Für weitere Details siehe [Verbindungsbasierte Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). Sie können Nachrichten auch ohne Erstellung einer Verbindung senden. Für Ratschläge zur Wahl zwischen den Optionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

## Syntax

```js-nolint
browser.tabs.connect(
  tabId,      // integer
  connectInfo // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. Die ID des Tabs, zu dessen Inhalts-Skripten wir eine Verbindung herstellen möchten.
- `connectInfo` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `name` {{optional_inline}}
      - : `string`. Wird an {{WebExtAPIRef("runtime.onConnect")}}-Ereignis-Listener in Inhalts-Skripten übergeben, die zu dieser Erweiterung gehören und im angegebenen Tab ausgeführt werden.
    - `frameId` {{optional_inline}}
      - : `integer`. Öffnet einen Port zu einem bestimmten Frame, der durch `frameId` identifiziert wird, anstatt zu allen Frames im Tab.

### Rückgabewert

{{WebExtAPIRef('runtime.Port')}}. Ein Port, der zur Kommunikation mit den in dem angegebenen Tab laufenden Inhalts-Skripten verwendet werden kann.

## Beispiele

In diesem Beispiel hört ein Hintergrundskript auf einen Klick auf eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), stellt dann eine Verbindung zum derzeit aktiven Tab her und sendet dann eine Nachricht über den `Port`, der von `connect()` zurückgegeben wird:

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
> Diese API basiert auf der `chrome.tabs` API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
