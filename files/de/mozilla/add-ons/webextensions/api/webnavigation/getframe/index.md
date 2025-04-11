---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachteltes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über den Frame, über den Sie Informationen abrufen möchten.

    - `tabId`
      - : `integer`. Die ID des Tabs, in dem sich der Frame befindet.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. Dieser Wert wird in modernen Browsern nicht festgelegt. Wenn er festgelegt wurde, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführt.
    - `frameId`
      - : `integer`. Die ID des Frames im angegebenen Tab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `errorOccurred`
  - : `boolean`. True, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, das heißt, das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis ausgelöst wurde.
- `url`
  - : `string`. Die URL, die derzeit mit diesem Frame verknüpft ist, wenn der Frame, der durch `frameId` identifiziert wird, zu einem bestimmten Zeitpunkt im Tab, der durch `tabId` identifiziert wird, existierte. Die Tatsache, dass eine URL mit einer bestimmten `frameId` verknüpft ist, impliziert nicht, dass der entsprechende Frame noch existiert.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames dieses Frames. Dies ist -1, wenn es keinen übergeordneten Frame gibt: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.

Wenn der Tab verworfen wird, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn die angegebene Tab- oder Frame-ID nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537,
});

// Edge specific - processId is required not optional, must be integer not null
//let gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getFrame) API. Diese Dokumentation ist aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.
