---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachteltes [`<iframe>`](/de/docs/Web/HTML/Element/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über den Frame, über den Informationen abgerufen werden sollen.

    - `tabId`
      - : `integer`. Die ID des Tabs, in dem sich der Frame befindet.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführte.
    - `frameId`
      - : `integer`. Die ID des Frames im gegebenen Tab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `errorOccurred`
  - : `boolean`. `True`, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Event ausgelöst wurde.
- `url`
  - : `string`. Die aktuell mit diesem Frame assoziierte URL, wenn der durch `frameId` identifizierte Frame zu einem bestimmten Zeitpunkt im durch `tabId` identifizierten Tab existierte. Die Tatsache, dass eine URL mit einer bestimmten `frameId` verbunden ist, bedeutet nicht, dass der entsprechende Frame noch existiert.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames dieses Frames. Dies ist -1, wenn es keinen übergeordneten Frame gibt: das heißt, wenn dieser Frame der oberste Browser-Kontext im Tab ist.

Wenn der Tab verworfen wird, wird das Promise stattdessen mit einem `null` Wert aufgelöst. Wenn die angegebene Tab- oder Frame-ID nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getFrame) API. Diese Dokumentation ist von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.
