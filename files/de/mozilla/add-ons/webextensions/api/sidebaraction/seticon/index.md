---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legt das Symbol für die Seitenleiste fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als ein {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Symbolen

Ihre Erweiterung sollte ein Symbol für die Seitenleiste im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dies wird als _"Manifest-Symbol"_ bezeichnet.

Wenn Sie kein Symbol im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standardsymbol des Browsers. Dies wird als _"Standardsymbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die `tabId`-Option einschließen, wird das Symbol nur für die angegebene Registerkarte festgelegt. Dieses Symbol wird als _"Registerkarten-spezifisches Symbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die `windowId`-Option einschließen, wird das Symbol nur für das angegebene Fenster festgelegt. Dieses Symbol wird als _"Fenster-spezifisches Symbol"_ bezeichnet und erscheint in allen Registerkarten dieses Fensters, die kein Registerkarten-spezifisches Symbol festgelegt haben.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und sowohl die `tabId`- als auch `windowId`-Optionen weglassen, wird das _"globale Symbol"_ gesetzt. Das globale Symbol erscheint dann in allen Registerkarten, die kein Registerkarten-spezifisches Symbol und deren Fenster kein Fenster-spezifisches Symbol haben.

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

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist die Größe, so:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}
      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist die Größe, so:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet werden soll. Weitere Informationen finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` eine leere Zeichenfolge ist, verwendet der Browser das Standardsymbol.

        Wenn `path` nicht leer ist, aber nicht auf eine Symboldatei verweist, wird das Symbol ausgeblendet.

        Wenn `path` `null` ist und `tabId` angegeben wurde und die angegebene Registerkarte ein registerkartenspezifisches Symbol hatte: Dann wird das registerkartenspezifische Symbol auf das globale Symbol zurückgesetzt (wenn ein globales Symbol festgelegt ist) oder das Manifest-Symbol.

        Wenn `path` `null` ist und `tabId` weggelassen wurde und ein globales Symbol gesetzt war, wird es auf das Manifest-Symbol zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für die angegebene Registerkarte.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das Symbol global gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol gesetzt wurde.

## Beispiele

Der folgende Code wechselt das Seitenleistensymbol für die aktive Registerkarte, wenn der Benutzer auf eine Browseraktion klickt:

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
