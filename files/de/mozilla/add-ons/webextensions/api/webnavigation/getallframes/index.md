---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt, gegeben eine Tab-ID, Informationen über alle darin enthaltenen Frames zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über das Tab, von dem alle Frames abgerufen werden sollen.

    - `tabId`
      - : `integer`. Die ID des Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, von denen jedes die folgenden Eigenschaften hat:

- `errorOccurred`
  - : `boolean`. True, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis ausgelöst wurde.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt wurde, repräsentierte er die ID des Prozesses, der den Renderer für dieses Tab ausführte.
- `frameId`
  - : `integer`. Die ID des Frames. Wenn dies der Hauptframe ist, dann ist `frameId` null.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Dies ist -1, wenn es keinen übergeordneten Frame gibt: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.
- `url`
  - : `string`. Die URL, die derzeit mit diesem Frame verknüpft ist.

Wenn das Tab verworfen wird, wird das Promise stattdessen mit einem Wert von `null` aufgelöst. Wenn das spezifizierte Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert die URLs aller Frames im aktiven Tab, wenn der Nutzer auf eine Browser-Aktion klickt:

```js
function logFrameInfo(framesInfo) {
  for (const frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function logAllFrames(tabs) {
  browser.webNavigation
    .getAllFrames({
      tabId: tabs[0].id,
    })
    .then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getAllFrames) API. Diese Dokumentation ist aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.
