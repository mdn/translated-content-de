---
title: action.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/getBadgeTextColor
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Ruft die Textfarbe für das Browser-Action-Badge ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox wird die Textfarbe des Badges, sofern sie nicht explizit mit {{WebExtAPIRef("action.setBadgeTextColor()")}} festgelegt wird, automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Hintergrundfarbe des Badges zu maximieren. Wenn Sie beispielsweise die Hintergrundfarbe des Badges auf Weiß setzen, wird die Standard-Textfarbe des Badges auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.action.getBadgeTextColor(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId` {{optional_inline}}
      - : `integer`. Gibt den Tab an, von dem die Textfarbe des Badges abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, von dem die Textfarbe des Badges abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird die globale Textfarbe des Badges zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('action.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren Sie die Textfarbe des Badges:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.action.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getBadgeBackgroundColor) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
