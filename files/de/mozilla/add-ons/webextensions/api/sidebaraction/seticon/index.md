---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das Symbol für die Seitenleiste fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Das bedeutet, dass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Symbolen

Ihre Erweiterung sollte ein Symbol für die Seitenleiste im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Key angeben. Dies wird als _"Manifest-Symbol"_ bezeichnet.

Wenn Sie kein Symbol im `sidebar_action`-Key angeben, erhalten Sie das Standardsymbol des Browsers. Dies wird als _"Standardsymbol"_ bezeichnet.

Wenn Sie mit `setIcon()` ein neues Symbol setzen und die `tabId`-Option einschließen, wird das Symbol nur für den angegebenen Tab gesetzt. Dieses Symbol wird als _"Tab-spezifisches Symbol"_ bezeichnet.

Wenn Sie mit `setIcon()` ein neues Symbol setzen und die `windowId`-Option einschließen, wird das Symbol nur für das angegebene Fenster gesetzt. Dieses Symbol wird als _"Fenster-spezifisches Symbol"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein Tab-spezifisches Symbol gesetzt haben.

Wenn Sie mit `setIcon()` ein neues Symbol setzen und sowohl die Optionen `tabId` als auch `windowId` weglassen, legt dies das _"globale Symbol"_ fest. Das globale Symbol erscheint dann in allen Tabs, die kein Tab-spezifisches Symbol gesetzt haben und deren Fenster kein Fenster-spezifisches Symbol aufweist.

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

      - : `{{WebExtAPIRef('sidebarAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und der Name ist seine Größe, so wie hier:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Weitere Informationen hierzu finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und der Name ist dessen Größe, so wie hier:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild basierend auf der Pixeldichte des Bildschirms aus. Weitere Informationen hierzu finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` ein leerer String ist, verwendet der Browser das Standardsymbol.

        Wenn `path` nicht leer ist, aber nicht auf eine Symboldatei zeigt, wird das Symbol ausgeblendet.

        Wenn `path` `null` ist und `tabId` angegeben wurde und der angegebene Tab ein Tab-spezifisches Symbol gesetzt hatte: dann wird das Tab-spezifische Symbol auf das globale Symbol zurückgesetzt (falls ein globales Symbol festgelegt ist) oder das Manifest-Symbol.

        Wenn `path` `null` ist, `tabId` weggelassen wurde und ein globales Symbol gesetzt war, wird es auf das Manifest-Symbol zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das Symbol global gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der folgende Code wechselt das Seitenleistensymbol für den aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

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
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.
