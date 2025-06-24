---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt das Icon für die Seitenleiste.

Sie können ein einzelnes Icon entweder als Pfad zu einer Bilddatei oder als ein {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können auch mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dadurch muss das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Icon-Typen

Ihre Erweiterung sollte ein Icon für die Seitenleiste im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Schlüssel angeben. Dies wird als _"Manifest-Icon"_ bezeichnet.

Wenn Sie kein Icon im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standardbrowser-Icon. Dies wird als _"Standard-Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und die `tabId`-Option einbeziehen, wird das Icon nur für den angegebenen Tab festgelegt. Dieses Icon wird als _"tab-spezifisches Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und die `windowId`-Option einbeziehen, wird das Icon nur für das angegebene Fenster festgelegt. Dieses Icon wird als _"fensterspezifisches Icon"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein tab-spezifisches Icon festgelegt haben.

Wenn Sie ein neues Icon mit `setIcon()` festlegen und sowohl die `tabId`- als auch die `windowId`-Option weglassen, wird dies als _"globales Icon"_ festgelegt. Das globale Icon wird dann in allen Tabs erscheinen, die kein tab-spezifisches Icon gesetzt haben und deren Fenster kein fensterspezifisches Icon hat.

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

      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch.

        Verwenden Sie ein Wörterbuch, um mehrere `ImageData`-Objekte in verschiedenen Größen festzulegen, sodass das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie hier:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Weitere Informationen finden Sie unter [Wahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuch.

        Verwenden Sie ein Wörterbuch, um mehrere Icon-Dateien in verschiedenen Größen festzulegen, damit das Icon nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, wie hier:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Weitere Informationen finden Sie unter [Wahl der Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` ein leerer String ist, verwendet der Browser das Standard-Icon.

        Wenn `path` nicht leer ist, aber nicht auf eine Icon-Datei zeigt, wird das Icon ausgeblendet.

        Wenn `path` `null` ist und `tabId` angegeben wurde, und der angegebene Tab ein tab-spezifisches Icon gesetzt hatte: dann wird das tab-spezifische Icon auf das globale Icon zurückgesetzt (falls ein globales Icon festgelegt ist) oder auf das Manifest-Icon.

        Wenn `path` `null` ist und `tabId` weggelassen wurde und ein globales Icon gesetzt war, wird es auf das Manifest-Icon zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Icon nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Icon wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das Icon global gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Icon gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der untenstehende Code wechselt das Seitenleisten-Icon für den aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

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
