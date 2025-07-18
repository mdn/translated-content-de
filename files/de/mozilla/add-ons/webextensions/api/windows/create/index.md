---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt ein neues Fenster.

Wenn Sie das Fenster erstellen, können Sie:

- Einen oder mehrere neue Tabs in das Fenster laden.
- Einen Tab aus einem bestehenden Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, das in diesem Kontext ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) bedeutet.
- Verschiedene Eigenschaften des Fensters festlegen, wie z.B., ob es fokussiert oder privat ist.

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
      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es einen einzelnen Tab oder mehr als einen Tab, wenn `url` angegeben ist und ein Array mit mehr als einer URL enthält. Standardmäßig dürfen Skripte, die in diesen Seiten laufen, ihren Tab nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` einfügen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Tabs schließen können. Beachten Sie:
        - dies gilt nur für die Tabs, die beim Erstellen des Fensters geöffnet wurden. Wenn der Benutzer in diesem Fenster weitere Tabs öffnet, können Skripte diese neuen Tabs nicht schließen.
        - wenn die in `url` angegebenen URLs auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. es sind Seiten, die mit dieser Erweiterung geliefert und mit dem "moz-extension:"-Protokoll geladen werden), dürfen Skripte standardmäßig diese Tabs schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Falls vorhanden, spezifiziert die `CookieStoreId` für alle Tabs, die beim Öffnen des Fensters erstellt werden. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen zur Verwendung von `cookieStoreId`.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das aktuell fokussierte Fenster bleibt fokussiert. Standardwert ist `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein inkognito (privates) Fenster sein soll. Beachten Sie, dass, wenn Sie `incognito` und `tabId` angeben, die ID sich auf einen privaten Tab beziehen muss – das heißt, Sie können keinen nicht-privaten Tab in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der linken Bildschirmkante zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster abgesetzt. (In Firefox 108 oder früher für `panel`- oder `popup`-Fenstertypen ignoriert; das Positionieren des Fensters mittels {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert. Der anfängliche Zustand des Fensters. Die Zustände `minimized`, `maximized`, und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Falls angegeben, wird ein Tab mit der angegebenen ID aus einem bestehenden Fenster in das neue Fenster verschoben.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um eine Zeichenfolge am Anfang des Fenstertitels des Browsers hinzuzufügen. Abhängig vom zugrundeliegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, um das neue Fenster von der oberen Bildschirmkante zu positionieren. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster abgesetzt. (In Firefox 108 oder früher für `panel`- oder `popup`-Fenstertypen ignoriert; das Positionieren des Fensters mittels {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}}-Wert. Gibt an, welche Art von Browserfenster erstellt werden soll. Geben Sie `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Tabs im Fenster geöffnet werden sollen. Vollständig qualifizierte URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardwert ist die New Tab Page.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixel des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window`-Objekt wird immer seine `tabs`-Eigenschaft gesetzt haben, im Gegensatz zu den `Window`-Objekten von APIs wie {{WebExtAPIRef("windows.get()")}}, die nur `tabs` enthalten, wenn die `populate`-Option übergeben wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Öffnen Sie ein Fenster, das zwei Tabs enthält:

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

Öffnen Sie ein Fenster, wenn der Benutzer auf eine Browseraktion klickt, und verschieben Sie den momentan aktiven Tab in dieses Fenster:

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

Öffnen Sie ein kleines Fenster im Panel-Stil und laden Sie eine lokal gepackte Datei hinein:

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
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create) API. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
