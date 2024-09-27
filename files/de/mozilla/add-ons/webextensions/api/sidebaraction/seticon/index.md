---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das Symbol für die Seitenleiste fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als `{{WebExtAPIRef('sidebarAction.ImageDataType')}}`-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Dictionary mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Symbolen

Ihre Erweiterung sollte ein Symbol für die Seitenleiste im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dies wird als _"Manifest-Symbol"_ bezeichnet.

Wenn Sie kein Symbol im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standardsymbol des Browsers. Dies wird als _"Standard-Symbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die Option `tabId` einschließen, wird das Symbol nur für den angegebenen Tab festgelegt. Dieses Symbol wird als _"Tab-spezifisches Symbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die Option `windowId` einschließen, wird das Symbol nur für das angegebene Fenster festgelegt. Dieses Symbol wird als _"Fenster-spezifisches Symbol"_ bezeichnet und erscheint in allen Tabs dieses Fensters, für die kein Tab-spezifisches Symbol festgelegt ist.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und sowohl die Optionen `tabId` als auch `windowId` auslassen, wird das _"globale Symbol"_ festgelegt. Das globale Symbol erscheint dann in allen Tabs, die kein Tab-spezifisches Symbol haben und deren Fenster kein Fenster-spezifisches Symbol hat.

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

      - : `{{WebExtAPIRef('sidebarAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Dictionary-Objekt.

        Verwenden Sie ein Dictionary-Objekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Dictionary ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und der Name ist seine Größe, so wie dies:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wird das Bild auswählen, das je nach Pixeldichte des Bildschirms verwendet werden soll. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Dictionary-Objekt.

        Verwenden Sie ein Dictionary-Objekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Dictionary ist, ist der Wert jeder Eigenschaft ein relativer Pfad und der Name ist seine Größe, so wie dies:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wird das Bild auswählen, das je nach Pixeldichte des Bildschirms verwendet werden soll. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

        Wenn `path` ein leerer String ist, wird das Standardsymbol des Browsers verwendet.

        Wenn `path` nicht leer ist, aber nicht auf eine Symbol-Datei verweist, wird das Symbol ausgeblendet.

        Wenn `path` `null` ist und `tabId` angegeben wurde, und der angegebene Tab ein Tab-spezifisches Symbol hatte: wird das Tab-spezifische Symbol auf das globale Symbol zurückgesetzt (wenn ein globales Symbol festgelegt ist) oder auf das Manifest-Symbol.

        Wenn `path` `null` ist und `tabId` weggelassen wurde, und es ein globales Symbol gab, wird es auf das Manifest-Symbol zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt das Symbol nur für den angegebenen Tab fest.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt das Symbol nur für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht festgelegt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das Symbol global festgelegt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol festgelegt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der folgende Code schaltet das Seitenleisten-Symbol für den aktiven Tab um, wenn der Benutzer auf eine Browseraktion klickt:

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
> Diese API basiert auf der Opera [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
