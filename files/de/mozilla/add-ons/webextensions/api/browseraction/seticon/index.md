---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt das Icon für die Browser-Aktion.

Sie können ein einzelnes Icon entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('browserAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch bereitstellen, das mehrere Pfade oder `ImageData`-Objekte enthält. Das bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Tabs ohne spezifisches Icon erben das globale Icon, welches standardmäßig auf das [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) gesetzt ist, das im Manifest angegeben ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das die `imageData`- oder `path`-Eigenschaft und optional entweder oder beide der `tabId`- und `windowId`-Eigenschaften enthält.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('browserAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und der Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Siehe [Auswahl von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen dazu.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und der Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Siehe [Auswahl von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen dazu.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab. Das Icon wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Icon gesetzt.

Wenn jede von `imageData` und `path` eine der `undefined`, `null` oder leeren Objekt ist:

- Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Icon gesetzt hat, dann erbt der Tab das Icon vom Fenster, zu dem es gehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Icon gesetzt hat, dann erbt das Fenster das globale Icon.
- Andernfalls wird das globale Icon auf das Manifest-Icon zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der untenstehende Code verwendet eine Browser-Aktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} zu toggeln, und verwendet `setIcon()`, um anzuzeigen, ob das Lauschen ein- oder ausgeschaltet ist:

```js
function logResponseHeaders(requestDetails) {
  console.log(requestDetails);
}

function startListening() {
  browser.webRequest.onHeadersReceived.addListener(
    logResponseHeaders,
    { urls: ["<all_urls>"] },
    ["responseHeaders"],
  );
  browser.browserAction.setIcon({ path: "icons/listening-on.svg" });
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.browserAction.setIcon({ path: "icons/listening-off.svg" });
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.browserAction.onClicked.addListener(toggleListener);
```

Der untenstehende Code setzt das Icon unter Verwendung eines [`ImageData`](/de/docs/Web/API/ImageData)-Objekts:

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setIcon({ imageData: getImageData() });
});
```

Der folgende Codeausschnitt aktualisiert das Icon, wenn der Benutzer darauf klickt, jedoch nur für den aktiven Tab:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setIcon). Diese Dokumentation ist von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
