---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{AddonSidebar}}

Setzt das Icon für die Sidebar.

Sie können ein einzelnes Icon entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Das bedeutet, dass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Icons

Ihre Erweiterung sollte ein Icon für die Sidebar im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Schlüssel angeben. Dies wird das _"Manifest-Icon"_ genannt.

Wenn Sie kein Icon im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standard-Icon des Browsers. Dies wird das _"Standard-Icon"_ genannt.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und die Option `tabId` einfügen, wird das Icon nur für den angegebenen Tab festgelegt. Dieses Icon wird das _"Tab-spezifische Icon"_ genannt.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und die Option `windowId` einfügen, wird das Icon nur für das angegebene Fenster festgelegt. Dieses Icon wird das _"Fenster-spezifische Icon"_ genannt und erscheint in allen Tabs dieses Fensters, die kein Tab-spezifisches Icon gesetzt haben.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, wird dies das _"Globale Icon"_. Das globale Icon erscheint dann in allen Tabs, die kein Tab-spezifisches Icon gesetzt haben und deren Fenster kein Fenster-spezifisches Icon hat.

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

      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in verschiedenen Größen zu spezifizieren, damit das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Ist `imageData` ein Wörterbuch, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und dessen Name ist die Größe, wie folgt:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild je nach Pixeldichte des Bildschirms aus. Siehe [Auswählen von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für mehr Informationen hierzu.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, damit das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Ist `path` ein Wörterbuch, ist der Wert jeder Eigenschaft ein relativer Pfad und dessen Name ist die Größe, wie folgt:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild je nach Pixeldichte des Bildschirms aus. Siehe [Auswählen von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für mehr Informationen hierzu.

        Wenn `path` ein leerer String ist, verwendet der Browser das Standard-Icon.

        Wenn `path` nicht leer ist, aber nicht auf eine Icon-Datei zeigt, dann wird das Icon versteckt.

        Wenn `path` `null` ist und `tabId` angegeben wurde und der angegebene Tab ein Tab-spezifisches Icon gesetzt hatte: dann wird das Tab-spezifische Icon auf das globale Icon zurückgesetzt (wenn ein globales Icon gesetzt ist) oder das Manifest-Icon.

        Wenn `path` `null` ist und `tabId` weggelassen wurde und ein globales Icon gesetzt war, wird es auf das Manifest-Icon zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das Icon global gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der untenstehende Code schaltet das Sidebar-Icon für den aktiven Tab um, wenn der Benutzer auf eine Browser-Aktion klickt:

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

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
