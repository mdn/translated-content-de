---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Erzeugt ein neues Fenster.

Wenn Sie das Fenster erstellen, können Sie:

- Einen oder mehrere neue Tabs im Fenster laden.
- Ein Tab aus einem vorhandenen Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im „Panel“-Stil erstellen, was in diesem Kontext ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) bedeutet.
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
      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzigen Tab oder mehr als einen Tab, wenn `url` angegeben ist und ein Array mit mehr als einer URL enthält. Standardmäßig dürfen Skripte, die auf diesen Seiten ausgeführt werden, ihren Tab nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` einschließen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Tabs schließen können. Beachten Sie, dass:
        - dies nur für die Tabs gilt, die beim Erstellen des Fensters geöffnet wurden. Wenn der Benutzer in diesem Fenster weitere Tabs öffnet, können Skripte diese neuen Tabs nicht schließen.
        - wenn die in `url` angegebenen URLs auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. es sind Seiten, die mit dieser Erweiterung enthalten sind und mit dem „moz-extension:“-Protokoll geladen werden), dann dürfen Skripte standardmäßig diese Tabs schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Wenn vorhanden, bestimmt dies die `CookieStoreId` für alle Tabs, die beim Öffnen des Fensters erstellt werden. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen zur Verwendung von `cookieStoreId`.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das derzeit fokussierte Fenster bleibt fokussiert. Standardmäßig `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe des neuen Fensters in Pixeln, inklusive Rahmen. Falls nicht angegeben, wird die natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein Inkognito- (privates) Fenster sein soll. Beachten Sie, dass, wenn Sie `incognito` und `tabId` angeben, die ID auf einen privaten Tab verweisen muss – das heißt, Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der linken Kante des Bildschirms zu positionieren. Falls nicht angegeben, wird das neue Fenster natürlich von dem zuletzt fokussierten Fenster versetzt. (Ignoriert in Firefox 108 oder früher für `panel` oder `popup` Fenstertypen; das Positionieren des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte hier als Workaround dienen.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}} Wert. Der Anfangszustand des Fensters. Die `minimized`, `maximized` und `fullscreen` Zustände können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Falls enthalten, verschiebt einen Tab mit der angegebenen ID aus einem vorhandenen Fenster in das neue Fenster.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um dem Titel des Browserfensters eine Zeichenkette voranzustellen. Abhängig vom zugrunde liegenden Betriebssystem, könnte dies bei Browserfenstern, die keinen Titel haben (wie about:blank in Firefox), nicht funktionieren.
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der oberen Kante des Bildschirms zu positionieren. Falls nicht angegeben, wird das neue Fenster natürlich von dem zuletzt fokussierten Fenster versetzt. (Ignoriert in Firefox 108 oder früher für `panel` oder `popup` Fenstertypen; das Positionieren des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte hier als Workaround dienen.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}} Wert. Gibt an, welchen Typ von Browserfenster erstellt werden soll. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste, usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden sollen. Vollständig qualifizierte URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardmäßig auf die Neue Tab-Seite.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite des neuen Fensters in Pixeln, inklusive Rahmen. Falls nicht angegeben, wird die natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}} Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window`-Objekt hat immer seine `tabs`-Eigenschaft gesetzt, im Gegensatz zu den `Window`-Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die nur `tabs` enthalten, wenn die `populate`-Option übergeben wird. Bei einem Fehler wird das Promise mit einer Fehlermeldung abgelehnt.

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

Öffnen Sie ein Fenster, wenn der Benutzer auf eine Browseraktion klickt, und verschieben Sie den derzeit aktiven Tab hinein:

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

Öffnen Sie ein kleines Fenster im Panel-Stil und laden Sie eine lokal paketierte Datei hinein:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let popupURL = browser.runtime.getURL("popup/popup.html");

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
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create) API. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
