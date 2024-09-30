---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das Symbol für die Seitenleiste fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('sidebarAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch bereitstellen, das mehrere Pfade oder `ImageData`-Objekte enthält. Dies bedeutet, dass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Arten von Symbolen

Ihre Erweiterung sollte ein Symbol für die Seitenleiste im Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angeben. Dies wird als _"Manifest-Symbol"_ bezeichnet.

Wenn Sie kein Symbol im `sidebar_action`-Schlüssel angeben, erhalten Sie das Standardsymbol des Browsers. Dies wird als _"Standardsymbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die `tabId`-Option einbeziehen, wird das Symbol nur für den angegebenen Tab festgelegt. Dieses Symbol wird als _"Tab-spezifisches Symbol"_ bezeichnet.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und die `windowId`-Option einbeziehen, wird das Symbol nur für das angegebene Fenster festgelegt. Dieses Symbol wird als _"Fenster-spezifisches Symbol"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein tab-spezifisches Symbol festgelegt haben.

Wenn Sie ein neues Symbol mit `setIcon()` festlegen und sowohl die `tabId`- als auch die `windowId`-Optionen weglassen, wird das _"globale Symbol"_ festgelegt. Das globale Symbol erscheint dann in allen Tabs, die kein tab-spezifisches Symbol festgelegt haben und deren Fenster kein Fenster-spezifisches Symbol hat.

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

      - : `{{WebExtAPIRef('sidebarAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Ist `imageData` ein Wörterbuch, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Weitere Informationen hierzu finden Sie unter [Symbolgrößen wählen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Ist `path` ein Wörterbuch, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das zu verwendende Bild je nach Pixeldichte des Bildschirms aus. Weitere Informationen hierzu finden Sie unter [Symbolgrößen wählen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` ein leerer String ist, verwendet der Browser das Standardsymbol.

        Wenn `path` nicht leer ist, jedoch nicht auf eine Symboldatei verweist, wird das Symbol verborgen.

        Wenn `path` `null` ist und `tabId` angegeben wurde und der angegebene Tab ein tab-spezifisches Symbol festgelegt hatte: wird das tab-spezifische Symbol auf das globale Symbol (falls ein globales Symbol festgelegt ist) oder das Manifest-Symbol zurückgesetzt.

        Wenn `path` `null` ist und `tabId` weggelassen wurde und es ein globales Symbol gab, wird es auf das Manifest-Symbol zurückgesetzt.

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

Der untenstehende Code wechselt das Sidebar-Symbol für den aktiven Tab, wenn der Benutzer auf eine Browseraktion klickt:

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
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/)-API von Opera.
