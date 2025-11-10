---
title: action.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/action/setIcon
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Setzt das Icon für die Browseraktion.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Sie können ein einzelnes Icon als entweder den Pfad zu einer Bilddatei oder ein {{WebExtAPIRef('action.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Tabs ohne ein spezifisches Icon erben das globale Icon, das standardmäßig dem [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) entspricht, das im Manifest angegeben ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.action.setIcon(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das die Eigenschaft `imageData` oder `path` und optional entweder oder beide der Eigenschaften `tabId` und `windowId` enthält.
    - `imageData` {{optional_inline}}
      - : {{WebExtAPIRef('action.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, so wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild abhängig von der Pixeldichte des Bildschirms. Weitere Informationen finden Sie unter [Auswahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}
      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder es ist ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, so wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild abhängig von der Pixeldichte des Bildschirms. Weitere Informationen finden Sie unter [Auswahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab. Das Icon wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` ausgelassen werden, wird das globale Icon gesetzt.

Wenn jeder von `imageData` und `path` einer von `undefined`, `null` oder ein leeres Objekt ist:

- Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Icon gesetzt hat, dann übernimmt der Tab das Icon von dem Fenster, dem er angehört.
- Wenn `windowId` angegeben ist und das Fenster ein spezifisches Icon gesetzt hat, dann übernimmt das Fenster das globale Icon.
- Andernfalls wird das globale Icon auf das Manifest-Icon zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, sobald das Icon gesetzt wurde.

## Beispiele

Der untenstehende Code verwendet eine Browseraktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} umzuschalten und verwendet `setIcon()`, um anzuzeigen, ob das Lauschen ein- oder ausgeschaltet ist:

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

Der untenstehende Code setzt das Icon mithilfe eines [`ImageData`](/de/docs/Web/API/ImageData)-Objekts:

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

Das folgende Snippet aktualisiert das Icon, wenn der Benutzer darauf klickt, jedoch nur für den aktiven Tab:

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
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setIcon) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium Code.
