---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein neues Fenster.

Beim Erstellen des Fensters können Sie:

- Einen oder mehrere neue Tabs im Fenster öffnen.
- Einen Tab aus einem bestehenden Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, was in diesem Kontext bedeutet ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.).
- Verschiedene Eigenschaften des Fensters setzen, wie zum Beispiel, ob es fokussiert oder privat ist.

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

      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzelnen Tab oder mehr als einen Tab, wenn `url` angegeben ist und ein Array mit mehr als einer URL enthält. Standardmäßig ist es Skripten, die auf diesen Seiten ausgeführt werden, nicht erlaubt, ihren Tab mit [`window.close()`](/de/docs/Web/API/Window/close) zu schließen. Wenn Sie `allowScriptsToClose` einschließen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Tabs schließen können. Beachten Sie:

        - Dies gilt nur für die Tabs, die geöffnet wurden, als das Fenster erstellt wurde. Wenn der Benutzer weitere Tabs in diesem Fenster öffnet, können Skripte diese neuen Tabs nicht schließen.
        - Wenn die URL(s) in `url` auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. sie sind Seiten, die mit dieser Erweiterung integriert sind und mit dem "moz-extension:" Protokoll geladen werden), dann dürfen Skripte diese Tabs standardmäßig schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Falls vorhanden, gibt es die `CookieStoreId` für alle Tabs an, die beim Öffnen des Fensters erstellt werden. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen über die Verwendung von `cookieStoreId`.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das derzeit fokussierte Fenster bleibt fokussiert. Standardmäßig `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein Inkognito (privates) Fenster sein soll. Beachten Sie, dass wenn Sie `incognito` und `tabId` angeben, die ID auf einen privaten Tab zeigen muss – das heißt, Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der linken Kante des Bildschirms zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster aus verschoben. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Bug 1271047), kann aber mit browser.windows.update() gesetzt werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}} Wert. Der Anfangszustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Wenn enthalten, wird ein Tab der angegebenen ID aus einem bestehenden Fenster in das neue Fenster verschoben.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um dem Titel des Browserfensters einen String voranzustellen. Abhängig vom zugrunde liegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie z.B. about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der oberen Kante des Bildschirms zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster aus verschoben. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Bug 1271047), kann aber mit browser.windows.update() gesetzt werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}} Wert. Gibt an, welche Art von Browserfenster zu erstellen ist. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden. Vollständige URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardmäßig wird die Neue-Tab-Seite verwendet.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}} Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window` Objekt hat immer seine `tabs` Eigenschaft gesetzt, im Gegensatz zu den `Window` Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die `tabs` nur enthalten, wenn die `populate` Option übergeben wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Öffnen Sie ein Fenster mit zwei Tabs:

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

Öffnen Sie ein Fenster, wenn der Benutzer auf eine Browser-Aktion klickt, und verschieben Sie den derzeit aktiven Tab in das Fenster:

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

Öffnen Sie ein kleines Fenster im Panel-Stil und laden Sie eine lokal verpackte Datei darin:

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
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create) API von Chromium. Diese Dokumentation leitet sich von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Projekt ab.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
