---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein neues Fenster.

Wenn Sie das Fenster erstellen, können Sie:

- Einen oder mehrere neue Tabs in das Fenster laden.
- Einen Tab aus einem bestehenden Fenster in das neue verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, was in diesem Zusammenhang ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Werkzeugleiste usw.) bedeutet.
- Verschiedene Eigenschaften des Fensters festlegen, wie z. B. ob es fokussiert oder privat ist.

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

      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzelnen Tab oder mehr als einen Tab, wenn `url` gegeben ist und ein Array mit mehr als einer URL enthält. Standardmäßig dürfen Scripts, die auf diesen Seiten ausgeführt werden, ihren Tab nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` einschließen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Scripts ihre Tabs schließen können. Beachten Sie:

        - Dies gilt nur für die Tabs, die beim Erstellen des Fensters geöffnet wurden. Wenn der Benutzer in diesem Fenster weitere Tabs öffnet, können Scripts diese neuen Tabs nicht schließen.
        - Wenn die in `url` angegebenen URL(s) auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d. h. sie sind Seiten, die mit dieser Erweiterung enthalten sind und mit dem "moz-extension:"-Protokoll geladen werden), dürfen Scripts diese Tabs standardmäßig schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Wenn vorhanden, wird die `CookieStoreId` für alle Tabs angegeben, die beim Öffnen des Fensters erstellt werden. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen zur Verwendung von `cookieStoreId`.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das aktuell fokussierte Fenster bleibt fokussiert. Standardmäßig `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe angenommen.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein privates Fenster sein sollte. Beachten Sie, dass wenn Sie `incognito` und `tabId` angeben, die ID auf einen privaten Tab verweisen muss - das heißt, Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, mit der das neue Fenster von der linken Bildschirmkante positioniert wird. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster versetzt. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Fehler 1271047), kann aber mit browser.windows.update() gesetzt werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert. Der anfängliche Zustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Wenn enthalten, wird ein Tab der angegebenen ID aus einem bestehenden Fenster in das neue Fenster verschoben.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen String an den Anfang des Fenstertitels des Browsers hinzuzufügen. Abhängig vom zugrunde liegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, mit der das neue Fenster von der oberen Bildschirmkante positioniert wird. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster versetzt. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Fehler 1271047), kann aber mit browser.windows.update() gesetzt werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}}-Wert. Gibt an, welcher Typ von Browserfenster erstellt werden soll. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Werkzeugleiste usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden sollen. Vollständig qualifizierte URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardmäßig die neue Tabs-Seite.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite angenommen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window`-Objekt hat immer seine `tabs`-Eigenschaft gesetzt, im Gegensatz zu den `Window`-Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die nur `tabs` enthalten, wenn die `populate`-Option übergeben wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Öffnen eines Fensters mit zwei Tabs:

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

Öffnen eines Fensters, wenn der Benutzer auf eine Browseraktion klickt und den aktuell aktiven Tab dorthin verschieben:

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

Öffnen eines kleinen Fensters im Panel-Stil und Laden einer lokal verpackten Datei darin:

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
> Diese API basiert auf Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create) API. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

## Siehe auch

- {{domxref("Window.open()","window.open")}}
