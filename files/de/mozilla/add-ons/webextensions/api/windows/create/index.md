---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erstellt ein neues Fenster.

Wenn Sie das Fenster erstellen, können Sie:

- Eine oder mehrere neue Registerkarten in das Fenster laden.
- Eine Registerkarte aus einem bestehenden Fenster in das neue Fenster verschieben.
- Die Größe und Position des Fensters festlegen.
- Ein Fenster im "Panel"-Stil erstellen, was in diesem Kontext ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) bedeutet.
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

      - : `boolean`. Wenn das Fenster geöffnet wird, enthält es eine einzelne Registerkarte oder, wenn `url` angegeben ist und ein Array mit mehr als einer URL enthält, mehr als eine Registerkarte. Standardmäßig dürfen Skripte, die auf diesen Seiten ausgeführt werden, ihre Registerkarte nicht mit [`window.close()`](/de/docs/Web/API/Window/close) schließen. Wenn Sie `allowScriptsToClose` einschließen und auf `true` setzen, wird dieses Standardverhalten geändert, sodass Skripte ihre Registerkarten schließen können. Beachten Sie, dass:
        - dies nur für die Registerkarten gilt, die beim Erstellen des Fensters geöffnet wurden. Wenn der Benutzer in diesem Fenster weitere Registerkarten öffnet, können Skripte diese neuen Registerkarten nicht schließen.
        - wenn die in `url` angegebenen URL(s) auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) verweisen (d.h. es handelt sich um Seiten, die mit dieser Erweiterung enthalten und mit dem "moz-extension:"-Protokoll geladen werden), dann dürfen Skripte diese Registerkarten standardmäßig schließen.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. Wenn vorhanden, gibt es die `CookieStoreId` für alle Registerkarten an, die beim Öffnen des Fensters erstellt werden. Weitere Informationen zur Verwendung von `cookieStoreId` finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das neue Fenster fokussiert. Wenn `false`, wird das neue Fenster im Hintergrund geöffnet und das aktuell fokussierte Fenster bleibt fokussiert. Standardmäßig `true`.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Höhe verwendet.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob das neue Fenster ein inkognito (privates) Fenster sein soll. Beachten Sie, dass wenn Sie `incognito` und `tabId` angeben, die ID auf eine private Registerkarte verweisen muss - das heißt, Sie können keine nicht-private Registerkarte in ein privates Fenster verschieben.
    - `left` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, die das neue Fenster vom linken Rand des Bildschirms entfernt positioniert werden soll. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster aus verschoben. (In Firefox 108 oder früher für `panel`- oder `popup`-Fenstertypen ignoriert; das Positionieren des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `state` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert. Der anfängliche Zustand des Fensters. Die `minimized`-, `maximized`- und `fullscreen`-Zustände können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Wenn enthalten, verschiebt es eine Registerkarte der angegebenen ID aus einem existierenden Fenster in das neue Fenster.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen String an den Anfang des Titels des Browserfensters hinzuzufügen. Abhängig von dem zugrundeliegenden Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (wie about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Die Anzahl der Pixel, die das neue Fenster vom oberen Rand des Bildschirms entfernt positioniert werden soll. Wenn nicht angegeben, wird das neue Fenster natürlich vom zuletzt fokussierten Fenster aus verschoben. (In Firefox 108 oder früher für `panel`- oder `popup`-Fenstertypen ignoriert; das Positionieren des Fensters mit {{WebExtAPIRef("windows.update()")}} könnte als Workaround verwendet werden.)
    - `type` {{optional_inline}}
      - : Ein {{WebExtAPIRef('windows.CreateType')}}-Wert. Spezifiziert, welcher Typ von Browserfenster erstellt werden soll. Geben Sie hier `panel` oder `popup` an, um ein Fenster ohne die normale Browser-Benutzeroberfläche (Adressleiste, Symbolleiste usw.) zu öffnen.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`s. Eine URL oder ein Array von URLs, die als Registerkarten im Fenster geöffnet werden sollen. Vollqualifizierte URLs müssen ein Schema enthalten (d.h. `http://www.google.com`, nicht `www.google.com`). Relative URLs beziehen sich auf die aktuelle Seite innerhalb der Erweiterung. Standardmäßig die Neue-Tab-Seite.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite in Pixeln des neuen Fensters, einschließlich des Rahmens. Wenn nicht angegeben, wird eine natürliche Breite verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des neuen Fensters enthält. Dieses `Window`-Objekt hat immer seine `tabs`-Eigenschaft gesetzt, im Gegensatz zu den `Window`-Objekten, die von {{WebExtAPIRef("windows.get()")}} und ähnlichen APIs zurückgegeben werden, die nur `tabs` enthalten, wenn die `populate`-Option übergeben wird. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Öffnen Sie ein Fenster, das zwei Registerkarten enthält:

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

Öffnen Sie ein Fenster, wenn der Benutzer auf eine Browseraktion klickt, und verschieben Sie die aktuell aktive Registerkarte hinein:

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
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-create)-API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

## Siehe auch

- [`window.open`](/de/docs/Web/API/Window/open)
