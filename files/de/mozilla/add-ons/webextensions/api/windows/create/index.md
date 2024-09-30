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
- Einen Tab aus einem bestehenden Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, was in diesem Kontext ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) bedeutet.
- Verschiedene Eigenschaften des Fensters festlegen, wie z.B. ob es fokussiert oder privat ist.

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

      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzigen Tab oder mehr als einen Tab, wenn `url` angegeben wird und ein Array mit mehr als einer URL enthält. Standardmäßig dürfen Skripte, die auf diesen Seiten ausgeführt werden, ihre Tabs nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` hinzufügen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Tabs schließen können. Beachten Sie, dass:

        - Dies gilt nur für die Tabs, die geöffnet wurden, als das Fenster erstellt wurde. Wenn der Benutzer weitere Tabs in diesem Fenster öffnet, können Skripte diese neuen Tabs nicht schließen.
        - Wenn die in `url` angegebenen URLs auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. Seiten, die mit dieser Erweiterung enthalten sind und mit dem "moz-extension:"-Protokoll geladen werden), dürfen Skripte diese Tabs standardmäßig schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Gibt, falls vorhanden, die `CookieStoreId` für alle Tabs an, die beim Öffnen des Fensters erstellt werden. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen zur Verwendung von `cookieStoreId`.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das aktuell fokussierte Fenster bleibt im Fokus. Standardwert ist `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein Inkognito-(privates) Fenster sein soll. Beachten Sie, dass, wenn Sie `incognito` und `tabId` angeben, die ID auf einen privaten Tab verweisen muss — d.h. Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um die das neue Fenster von der linken Bildschirmkante positioniert wird. Falls nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster versetzt. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Fehler 1271047), kann jedoch mit browser.windows.update() gesetzt werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert. Der Anfangszustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Falls enthalten, wird ein Tab mit der angegebenen ID aus einem bestehenden Fenster in das neue Fenster verschoben.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um dem Titel des Browserfensters eine Zeichenfolge voranzustellen. Abhängig vom zugrundeliegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie z.B. about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um die das neue Fenster von der oberen Bildschirmkante positioniert wird. Falls nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster versetzt. Dieser Wert wird für Panels ignoriert. (In Firefox wird dieser Wert derzeit für Popups ignoriert (Fehler 1271047), kann jedoch mit browser.windows.update() gesetzt werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}}-Wert. Gibt an, welchen Browserfenstertyp zu erstellen ist. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche zu öffnen (Adressleiste, Symbolleiste usw.).
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden sollen. Vollständige URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardmäßig wird die neue Tab-Seite verwendet.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window`-Objekt hat immer seine `tabs`-Eigenschaft gesetzt, im Gegensatz zu den `Window`-Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die nur `tabs` enthalten, wenn die Option `populate` übergeben wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

Öffnen Sie ein Fenster, wenn der Benutzer auf eine Browser-Aktion klickt, und verschieben Sie den aktuell aktiven Tab in dieses Fenster:

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

Öffnen Sie ein kleines Fenster im Panel-Stil und laden Sie eine lokal verpackte Datei in dieses Fenster:

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
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create)-API von Chromium. Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
