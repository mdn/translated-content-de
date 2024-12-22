---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 948f86c2251aa5234f075211fcaeb072e09cc75d
---

{{AddonSidebar}}

Setzt das Icon für die Sidebar.

Sie können ein einzelnes Icon als entweder den Pfad zu einer Bilddatei oder einem {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Icons in verschiedenen Größen angeben, indem Sie ein Wörterbuch verwenden, das mehrere Pfade oder `ImageData`-Objekte enthält. Dadurch muss das Icon nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Icons

Ihre Erweiterung sollte ein Icon für die Sidebar im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Schlüssel angeben. Dies wird als _"Manifest-Icon"_ bezeichnet.

Wenn Sie kein Icon im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standard-Icon des Browsers. Dies wird als _"Standard-Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` setzen und die Option `tabId` einfügen, wird das Icon nur für den angegebenen Tab gesetzt. Dieses Icon wird als _"tab-spezifisches Icon"_ bezeichnet.

Wenn Sie ein neues Icon mit `setIcon()` setzen und die Option `windowId` einfügen, wird das Icon nur für das angegebene Fenster gesetzt. Dieses Icon wird als _"fenster-spezifisches Icon"_ bezeichnet und erscheint in allen Tabs dieses Fensters, für die kein tab-spezifisches Icon festgelegt ist.

Wenn Sie ein neues Icon mit `setIcon()` setzen und sowohl die Optionen `tabId` als auch `windowId` weglassen, dann wird das _"globale Icon"_ gesetzt. Das globale Icon erscheint dann in allen Tabs, die kein tab-spezifisches Icon gesetzt haben und deren Fenster kein fenster-spezifisches Icon hat.

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

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in unterschiedlichen Größen anzugeben, damit das Icon nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Siehe [Wählen von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für mehr Informationen dazu.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Icon-Datei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Icon-Dateien in verschiedenen Größen anzugeben, damit das Icon nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Siehe [Wählen von Icon-Größen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für mehr Informationen dazu.

        Wenn `path` ein leerer String ist, verwendet der Browser das Standard-Icon.

        Wenn `path` nicht leer ist, aber nicht auf eine Icon-Datei zeigt, dann wird das Icon versteckt.

        Wenn `path` `null` ist und `tabId` angegeben wurde und der angegebene Tab ein tab-spezifisches Icon hatte: dann wird das tab-spezifische Icon auf das globale Icon zurückgesetzt (falls ein globales Icon gesetzt ist) oder das Manifest-Icon.

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

Der folgende Code wechselt das Sidebar-Icon für den aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

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
