---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt das Icon für die Seitenleiste.

Sie können ein einzelnes Icon entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Das bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Icons

Ihre Erweiterung sollte ein Icon für die Seitenleiste im manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angeben. Dies wird als _"Manifest-Icon"_ bezeichnet.

Wenn Sie kein Icon im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standard-Icon des Browsers. Dies wird als _"Standard-Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` setzen und die Option `tabId` einschließen, wird das Icon nur für den angegebenen Tab gesetzt. Dieses Icon wird als _"tab-spezifisches Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` setzen und die Option `windowId` einschließen, wird das Icon nur für das angegebene Fenster gesetzt. Dieses Icon wird als _"fensterspezifisches Icon"_ bezeichnet und wird in allen Tabs dieses Fensters erscheinen, die kein tab-spezifisches Icon gesetzt haben.

Wenn Sie ein neues Icon mit `setIcon()` setzen und sowohl die `tabId` als auch die `windowId` Optionen weglassen, dann wird das _"globale Icon"_ gesetzt. Das globale Icon erscheint dann in allen Tabs, die kein tab-spezifisches Icon setzen und deren Fenster kein fensterspezifisches Icon besitzen.

## Syntax

```js-nolint
let settingIcon = browser.sidebarAction.setIcon(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `imageData` {{optional_inline}}
      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, so dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Siehe [Choosing icon sizes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen dazu.

    - `path` {{optional_inline}}
      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, so dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Siehe [Choosing icon sizes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen dazu.

        Wenn `path` eine leere Zeichenkette ist, verwendet der Browser das Standard-Icon.

        Wenn `path` nicht leer ist, aber nicht auf eine Icon-Datei zeigt, wird das Icon ausgeblendet.

        Wenn `path` `null` ist und `tabId` angegeben wurde und der angegebene Tab ein tab-spezifisches Icon hatte: dann wird das tab-spezifische Icon auf das globale Icon zurückgesetzt (wenn ein globales Icon gesetzt ist) oder auf das Manifest-Icon.

        Wenn `path` `null` ist, `tabId` weggelassen wurde und ein globales Icon gesetzt war, wird es auf das Manifest-Icon zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das Icon global gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Beispiele

Der folgende Code schaltet das Icon der Seitenleiste für den aktiven Tab um, wenn der Benutzer auf ein Browser-Action-Element klickt:

```js
let on = false;

function toggle(tab) {
  if (on) {
    browser.sidebarAction.setIcon({
      path: "off.svg",
      tabId: tab.id,
    });
    on = false;
  } else {
    browser.sidebarAction.setIcon({
      path: "on.svg",
      tabId: tab.id,
    });
    on = true;
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
