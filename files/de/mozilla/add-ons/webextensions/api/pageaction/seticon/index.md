---
title: pageAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{AddonSidebar}}

Setzt das Icon für die Page Action.

Sie können ein einzelnes Icon entweder als Pfad zu einer Bilddatei oder als ein {{WebExtAPIRef('pageAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.pageAction.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das entweder `imageData`- oder `path`-Eigenschaften und eine `tabId`-Eigenschaft enthält.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('pageAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild in Abhängigkeit von der Pixeldichte des Bildschirms. Siehe [Auswahl von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, damit das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild in Abhängigkeit von der Pixeldichte des Bildschirms. Siehe [Auswahl von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

        Wenn `path` `null` ist, wird das Icon der Page Action auf das im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel angegebene Icon zurückgesetzt.

        Wenn `path` `""` ist, wird das Icon auf das globale Standardicon des Browsers zurückgesetzt (das heißt, das Icon, das verwendet wird, wenn kein Icon im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel angegeben ist).

        Wenn `path` nicht auf ein gültiges Icon zeigt, wird kein Icon angezeigt.

    - `tabId`
      - : `integer`. Die ID des Tabs, dessen Icon Sie setzen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie das Icon der Page Action, wenn der Benutzer darauf klickt:

```js
browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.setIcon({
    tabId: tab.id,
    path: "icons/icon-48.png",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setIcon) API von Chromium. Diese Dokumentation basiert auf [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Quellcode.
