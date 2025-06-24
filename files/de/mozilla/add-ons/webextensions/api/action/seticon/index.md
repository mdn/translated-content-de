---
title: action.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/action/setIcon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt das Symbol für die Browser-Aktion.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('action.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dadurch muss das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden.

Tabs ohne spezifisches Symbol erben das globale Symbol, das standardmäßig dem im Manifest angegebenen [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) entspricht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.action.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das die Eigenschaft `imageData` oder `path` enthält und optional entweder die `tabId`- oder die `windowId`-Eigenschaft (oder beide).

    - `imageData` {{optional_inline}}

      - : {{WebExtAPIRef('action.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist seine Größe, wie hier:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild aus, das abhängig von der Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, wie hier:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild aus, das abhängig von der Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für den angegebenen Tab. Das Symbol wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Symbol gesetzt.

Wenn `imageData` und `path` jeweils entweder `undefined`, `null` oder ein leeres Objekt sind:

- Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Symbol hat, dann erbt der Tab das Symbol aus dem Fenster, zu dem es gehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Symbol hat, dann erbt das Fenster das globale Symbol.
- Andernfalls wird das globale Symbol auf das Manifestsymbol zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn das Symbol gesetzt wurde, ohne Argumente.

## Beispiele

Der folgende Code verwendet eine Browser-Aktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} zu toggeln, und verwendet `setIcon()`, um anzuzeigen, ob zugehört wird oder nicht:

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
  browser.action.setIcon({ path: "icons/listening-on.svg" });
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.action.setIcon({ path: "icons/listening-off.svg" });
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.action.onClicked.addListener(toggleListener);
```

Der folgende Code setzt das Symbol mit einem [`ImageData`](/de/docs/Web/API/ImageData)-Objekt:

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.action.onClicked.addListener(() => {
  browser.action.setIcon({ imageData: getImageData() });
});
```

Das folgende Snippet aktualisiert das Symbol, wenn der Benutzer darauf klickt, jedoch nur für den aktiven Tab:

```js
browser.action.onClicked.addListener((tab) => {
  browser.action.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setIcon)-API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
