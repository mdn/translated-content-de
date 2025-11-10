---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktualisiert die Eigenschaften eines Fensters. Verwenden Sie dies, um ein Fenster zu verschieben, die Größe zu ändern und den Fokus (de)aktivieren zu können.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.windows.update(
  windowId,              // integer
  updateInfo             // object
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, das aktualisiert werden soll.
- `updateInfo`
  - : `object`. Objekt, das die zu aktualisierenden Eigenschaften enthält.
    - `drawAttention` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das Fenster so angezeigt, dass es die Aufmerksamkeit des Benutzers erregt, ohne das fokussierte Fenster zu ändern. Der Effekt hält an, bis der Benutzer den Fokus auf das Fenster ändert. Diese Option hat keine Wirkung, wenn das Fenster bereits im Fokus steht. Auf `false` setzen, um eine vorherige `drawAttention`-Anforderung abzubrechen.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das Fenster in den Vordergrund gebracht. Wenn `false`, wird das nächste Fenster in der Z-Ordnung in den Vordergrund gebracht.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe, auf die das Fenster in Pixeln geändert werden soll. Dieser Wert wird für Panels ignoriert.
    - `left` {{optional_inline}}
      - : `integer`. Der Versatz vom linken Bildschirmrand, zu dem das Fenster in Pixeln verschoben werden soll. Dieser Wert wird für Panels ignoriert.
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}}. Der neue Zustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen String am Anfang des Fenstertitels des Browsers hinzuzufügen. Abhängig vom darunterliegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (z.B. about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Der Versatz vom oberen Bildschirmrand, zu dem das Fenster in Pixeln verschoben werden soll. Dieser Wert wird für Panels ignoriert.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite, auf die das Fenster in Pixeln geändert werden soll. Dieser Wert wird für Panels ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, welches die Details des aktualisierten Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Wenn der Benutzer auf das Symbol einer Browseraktion klickt, verschieben Sie das Fenster in die obere linke Ecke:

```js
function onUpdated(windowInfo) {
  console.log(`Updated window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let updating = browser.windows.update(tab.windowId, {
    left: 0,
    top: 0,
  });
  updating.then(onUpdated, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-update). Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
