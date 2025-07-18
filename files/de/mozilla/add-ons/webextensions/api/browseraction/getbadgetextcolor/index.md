---
title: browserAction.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeTextColor
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhält die Textfarbe für das Badge der Browser-Aktion.

Ab Firefox 63 wird, sofern die Badge-Textfarbe nicht ausdrücklich mit {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} festgelegt wurde, die Badge-Textfarbe automatisch auf Schwarz oder Weiß eingestellt, um den Kontrast zur angegebenen Badge-Hintergrundfarbe zu maximieren. Beispielsweise, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.browserAction.getBadgeTextColor(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId` {{optional_inline}}
      - : `integer`. Gibt den Tab an, von dem die Badge-Textfarbe abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, von dem die Badge-Textfarbe abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird die globale Badge-Textfarbe zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('browserAction.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren Sie die Textfarbe des Badges:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API von Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getBadgeBackgroundColor). Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
