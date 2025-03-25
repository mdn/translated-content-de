---
title: pageAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Legt das Symbol für die Seitenaktion fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als Objekt vom Typ {{WebExtAPIRef('pageAction.ImageDataType')}} angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Symbol für ein Gerät mit unterschiedlicher Pixeldichte nicht skaliert werden muss.

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

      - : {{WebExtAPIRef('pageAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, so dass das Symbol für ein Gerät mit unterschiedlicher Pixeldichte nicht skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl der Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, so dass das Symbol für ein Gerät mit unterschiedlicher Pixeldichte nicht skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl der Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` `null` ist, wird das Symbol der Seitenaktion auf das Symbol zurückgesetzt, das im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifest-Schlüssel angegeben wurde.

        Wenn `path` `""` ist, wird das Symbol auf das globale Standardsymbol des Browsers zurückgesetzt (d.h. das Symbol, das verwendet wird, wenn kein Symbol im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifest-Schlüssel angegeben ist).

        Wenn `path` nicht auf ein gültiges Symbol zeigt, wird kein Symbol angezeigt.

    - `tabId`
      - : `integer`. Die ID des Tabs, dessen Symbol Sie festlegen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol festgelegt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Legen Sie das Symbol für die Seitenaktion fest, wenn der Benutzer darauf klickt:

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
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setIcon) API von Chromium. Diese Dokumentation stammt aus [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.
