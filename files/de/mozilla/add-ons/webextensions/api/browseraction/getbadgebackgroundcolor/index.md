---
title: browserAction.getBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeBackgroundColor
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft die Hintergrundfarbe des Abzeichens der Browser-Aktion ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.browserAction.getBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Gibt den Tab an, von dem die Hintergrundfarbe des Abzeichens abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, von dem die Hintergrundfarbe des Abzeichens abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird die globale Hintergrundfarbe des Abzeichens zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('browserAction.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren Sie die Hintergrundfarbe des Abzeichens:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeBackgroundColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getBadgeBackgroundColor)-API von Chromium. Diese Dokumentation ist abgeleitet aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
