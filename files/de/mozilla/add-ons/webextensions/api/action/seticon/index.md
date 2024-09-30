---
title: action.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/action/setIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt das Icon für die Browser-Aktion.

> [!NOTE]
> Diese API ist ab Manifest V3 oder höher verfügbar.

Sie können ein einzelnes Icon angeben, entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('action.ImageDataType')}}-Objekt.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Tabs ohne ein spezifisches Icon erben das globale Icon, das standardmäßig auf das [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) im Manifest festgelegt ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.action.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das die Eigenschaft `imageData` oder `path` enthält und optional entweder oder beide der Eigenschaften `tabId` und `windowId`.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('action.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in unterschiedlichen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt je nach Pixeldichte des Bildschirms das zu verwendende Bild aus. Weitere Informationen hierzu finden Sie unter [Auswahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Icon-Dateien in unterschiedlichen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt je nach Pixeldichte des Bildschirms das zu verwendende Bild aus. Weitere Informationen hierzu finden Sie unter [Auswahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab. Das Icon wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Icon gesetzt.

Wenn sowohl `imageData` als auch `path` eines von `undefined`, `null` oder ein leeres Objekt ist:

- Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Icon hat, dann erbt der Tab das Icon des Fensters, dem er angehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Icon hat, dann erbt das Fenster das globale Icon.
- Andernfalls wird das globale Icon auf das Manifest-Icon zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Beispiele

Der folgende Code verwendet eine Browser-Aktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} ein- und auszuschalten und verwendet `setIcon()`, um anzuzeigen, ob das Zuhören aktiviert oder deaktiviert ist:

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

Der folgende Code setzt das Icon mit einem [`ImageData`](/de/docs/Web/API/ImageData)-Objekt:

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

Der folgende Ausschnitt aktualisiert das Icon, wenn der Benutzer darauf klickt, aber nur für den aktiven Tab:

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
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setIcon) API von Chromium. Diese Dokumentation stammt von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
