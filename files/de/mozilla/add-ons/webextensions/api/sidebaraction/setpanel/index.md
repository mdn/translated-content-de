---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Legt das Panel der Seitenleiste fest: das ist das HTML-Dokument, das den Inhalt dieser Seitenleiste definiert.

## Arten von Panels

Seitenleisten haben immer ein „Manifest-Panel“, das im Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) definiert ist.

Wenn Sie mit `setPanel()` ein neues Panel festlegen und die Option `tabId` einschließen, dann wird das Panel nur für den angegebenen Tab festgelegt. Dieses Panel wird als „tab-spezifisches Panel“ bezeichnet.

Wenn Sie mit `setPanel()` ein neues Panel festlegen und die Option `windowId` einschließen, dann wird das Panel nur für das angegebene Fenster festgelegt. Dieses Panel wird als „fensterspezifisches Panel“ bezeichnet und erscheint in allen Tabs dieses Fensters, für die kein tab-spezifisches Panel festgelegt ist.

Wenn Sie mit `setPanel()` ein neues Panel festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, dann wird das „globale Panel“ festgelegt. Das globale Panel erscheint dann in allen Tabs, für die kein tab-spezifisches Panel festgelegt ist und deren Fenster kein fensterspezifisches Panel hat.

## Syntax

```js-nolint
browser.sidebarAction.setPanel(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `panel`
      - : `string` oder `null`. Das Panel, das in die Seitenleiste geladen werden soll, spezifiziert als URL, die auf ein HTML-Dokument zeigt, oder `null`, oder ein leerer String.

        Dies kann auf eine innerhalb der Erweiterung verpackte Datei zeigen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}), oder ein entferntes Dokument (z.B. `https://example.org/`). Es muss eine gültige URL sein.

        Wenn `panel` `null` oder `""` ist, wird ein zuvor festgelegtes Panel entfernt, sodass:
        - Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Panel hat, dann erbt der Tab das Panel von dem Fenster, zu dem es gehört.
        - Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Panel hat, erbt das Fenster das globale Panel.
        - Andernfalls wird das globale Panel auf das Manifest-Panel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für den angegebenen Tab fest.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Panel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Panel gesetzt.

## Beispiele

Dieser Code schaltet das Seitenleiste-Dokument um, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
let thisPanel = browser.runtime.getURL("/this.html");
let thatPanel = browser.runtime.getURL("/that.html");

function toggle(panel) {
  if (panel === thisPanel) {
    browser.sidebarAction.setPanel({ panel: thatPanel });
  } else {
    browser.sidebarAction.setPanel({ panel: thisPanel });
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.sidebarAction.getPanel({}).then(toggle);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
