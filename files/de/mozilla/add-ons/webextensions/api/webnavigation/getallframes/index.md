---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: dec39bc3ee8676967dac28821f58c7c1d4a32d7d
---

Gibt die Informationen über alle Frames eines Tabs zurück, basierend auf der Tab-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // object
)
```

### Parameter

- `details`
  - : `object`. Informationen über den Tab, von dem alle Frames abgerufen werden sollen.
    - `tabId`
      - : `integer`. Die ID des Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, von denen jedes die folgenden Eigenschaften hat:

- `errorOccurred`
  - : `boolean`. Wahr, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis ausgelöst wurde.
- `url`
  - : `string`. Die URL, die mit diesem Frame assoziiert ist.
- `frameId`
  - : `integer`. Die ID des Frames. Wenn dies der Hauptframe ist, dann ist `frameId` null.
- `frameType`
  - : `string`. Der Typ des Frames. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des Elternframes dieses Frames. Dies ist -1, wenn es keinen Elternframe gibt: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.
- `documentId`
  - : `string`. Eine UUID des Dokuments des Frames.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, dem der Frame gehört. Wird nicht gesetzt, wenn es kein übergeordnetes Dokument gibt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Als er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.

Wenn der Tab verworfen wurde, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn der angegebene Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code protokolliert die URLs aller Frames im aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getAllFrames) API. Diese Dokumentation leitet sich von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code ab.
