---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt das Symbol für die Browser-Aktion.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('browserAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dadurch muss das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden.

Tabs ohne ein spezifisches Symbol erben das globale Symbol, das standardmäßig auf das [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) festgelegt ist, welches im Manifest angegeben wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das die Eigenschaft `imageData` oder `path` enthält und optional entweder oder beide der Eigenschaften `tabId` und `windowId`.

    - `imageData` {{optional_inline}}

      - : {{WebExtAPIRef('browserAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Weitere Informationen finden Sie unter [Choosing icon sizes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Weitere Informationen finden Sie unter [Choosing icon sizes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für den angegebenen Tab. Das Symbol wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben werden, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Symbol gesetzt.

Wenn `imageData` oder `path` jeweils `undefined`, `null` oder ein leeres Objekt ist:

- Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Symbol hat, erbt der Tab das Symbol von dem Fenster, zu dem es gehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Symbol hat, erbt das Fenster das globale Symbol.
- Andernfalls wird das globale Symbol auf das Manifest-Symbol zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, sobald das Symbol gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der folgende Code verwendet eine Browser-Aktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} umzuschalten, und verwendet `setIcon()`, um anzuzeigen, ob das Lauschen ein- oder ausgeschaltet ist:

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

Der folgende Code setzt das Symbol unter Verwendung eines [`ImageData`](/de/docs/Web/API/ImageData)-Objekts:

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

Das folgende Snippet aktualisiert das Symbol, wenn der Benutzer darauf klickt, jedoch nur für den aktiven Tab:

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
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setIcon) API. Diese Dokumentation wird abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
