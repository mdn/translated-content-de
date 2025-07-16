---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Aktualisiert die Eigenschaften eines Fensters. Verwenden Sie dies, um ein Fenster zu bewegen, seine Größe zu ändern, es (de-)fokussieren usw.

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
      - : `boolean`. Wenn `true`, wird das Fenster so angezeigt, dass es die Aufmerksamkeit des Nutzers auf sich zieht, ohne das fokussierte Fenster zu ändern. Der Effekt hält an, bis der Nutzer den Fokus auf das Fenster ändert. Diese Option hat keine Wirkung, wenn das Fenster bereits den Fokus hat. Setzen Sie den Wert auf `false`, um eine vorherige `drawAttention`-Anfrage abzubrechen.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das Fenster in den Vordergrund gebracht. Wenn `false`, wird das nächste Fenster in der Z-Reihenfolge in den Vordergrund gebracht.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe, auf die das Fenster in Pixeln angepasst werden soll. Dieser Wert wird bei Panels ignoriert.
    - `left` {{optional_inline}}
      - : `integer`. Der Versatz von der linken Bildschirmkante, zu der das Fenster in Pixeln verschoben werden soll. Dieser Wert wird bei Panels ignoriert.
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}}. Der neue Zustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen String an den Anfang des Titels des Browserfensters zu setzen. Abhängig vom zugrunde liegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie z.B. about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Der Versatz von der oberen Bildschirmkante, zu der das Fenster in Pixeln verschoben werden soll. Dieser Wert wird bei Panels ignoriert.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite, auf die das Fenster in Pixeln angepasst werden soll. Dieser Wert wird bei Panels ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des aktualisierten Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Wenn der Benutzer auf das Symbol einer Browseraktion klickt, wird das Fenster in die obere linke Ecke verschoben:

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
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-update)-API von Chromium. Diese Dokumentation stammt aus dem [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in dem Chromium-Code.
