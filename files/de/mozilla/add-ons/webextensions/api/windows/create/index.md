---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Erstellt ein neues Fenster.

Bei der Erstellung des Fensters können Sie:

- Ein oder mehrere neue Tabs in das Fenster laden.
- Einen Tab von einem bestehenden Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, was in diesem Kontext bedeutet, ein Fenster ohne die normale Browser-Oberfläche (Adressleiste, Toolbar usw.) zu erstellen.
- Verschiedene Eigenschaften des Fensters festlegen, z.B. ob es fokussiert oder privat ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let creating = browser.windows.create(
  createData            // optional object
)
```

### Parameter

- `createData` {{optional_inline}}

  - : `object`.

    - `allowScriptsToClose` {{optional_inline}}

      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzelnen Tab oder mehr als einen Tab, wenn `url` angegeben ist und ein Array mit mehr als einer URL enthält. Standardmäßig dürfen Skripte, die auf diesen Seiten ausgeführt werden, ihren Tab nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` einschließen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Tabs schließen können. Beachten Sie, dass:

        - Dies gilt nur für die Tabs, die geöffnet wurden, als das Fenster erstellt wurde. Wenn der Benutzer neue Tabs in diesem Fenster öffnet, können Skripte diese neuen Tabs nicht schließen.
        - Wenn die in `url` angegebenen URLs auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. es sind Seiten, die mit dieser Erweiterung enthalten und mit dem "moz-extension:"-Protokoll geladen werden), dürfen Skripte standardmäßig diese Tabs schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Gibt, falls vorhanden, die `CookieStoreId` für alle Tabs an, die bei der Öffnung des Fensters erstellt wurden. Weitere Informationen zur Verwendung von `cookieStoreId` finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das derzeit fokussierte Fenster bleibt fokussiert. Standardmäßig `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein Inkognito- (privates) Fenster sein soll. Beachten Sie, dass, wenn Sie `incognito` und `tabId` angeben, die ID auf einen privaten Tab verweisen muss — das heißt, Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der linken Kante des Bildschirms zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster verschoben. (Ignoriert in Firefox 108 oder früher für `panel` oder `popup` Fenstertypen; die Positionierung des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}} Wert. Der Anfangszustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Wenn enthalten, wird ein Tab mit der angegebenen ID aus einem bestehenden Fenster in das neue Fenster verschoben.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um dem Titel des Browserfensters eine Zeichenfolge voranzustellen. Abhängig vom zugrunde liegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der oberen Kante des Bildschirms zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster verschoben. (Ignoriert in Firefox 108 oder früher für `panel` oder `popup` Fenstertypen; die Positionierung des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}} Wert. Gibt an, welchen Typ von Browserfenster erstellt werden soll. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Oberfläche (Adressleiste, Toolbar usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden sollen. Vollständige URLs müssen ein Schema enthalten (z.B. `http://www.google.com`, nicht `www.google.com`). Relative URLs sind relativ zur aktuellen Seite innerhalb der Erweiterung. Standardmäßig zur Neuen Tab-Seite.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}} Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window` Objekt hat immer seine `tabs` Eigenschaft gesetzt, im Gegensatz zu den `Window` Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die nur `tabs` enthalten, wenn die `populate` Option übergeben wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Ein Fenster mit zwei Tabs öffnen:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let creating = browser.windows.create({
    url: ["https://developer.mozilla.org", "https://addons.mozilla.org"],
  });
  creating.then(onCreated, onError);
});
```

Ein Fenster öffnen, wenn der Benutzer auf eine Browseraktion klickt, und den derzeit aktiven Tab hineinverschieben:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let creating = browser.windows.create({
    tabId: tab.id,
  });
  creating.then(onCreated, onError);
});
```

Ein kleines Fenster im Panel-Stil öffnen und eine lokal verpackte Datei hineinladen:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let popupURL = browser.extension.getURL("popup/popup.html");

  let creating = browser.windows.create({
    url: popupURL,
    type: "popup",
    height: 200,
    width: 200,
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create) API. Diese Dokumentation leitet sich von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code ab.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
