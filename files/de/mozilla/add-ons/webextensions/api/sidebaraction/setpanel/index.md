---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das Panel der Seitenleiste fest: das HTML-Dokument, das den Inhalt dieser Seitenleiste definiert.

## Arten von Panels

Seitenleisten haben immer ein _"Manifest-Panel"_, das im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifestschlüssel definiert ist.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `tabId` einschließen, wird das Panel nur für den angegebenen Tab festgelegt. Dieses Panel wird als _"Tab-spezifisches Panel"_ bezeichnet.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `windowId` einschließen, wird das Panel nur für das angegebene Fenster festgelegt. Dieses Panel wird als _"Fenster-spezifisches Panel"_ bezeichnet und wird in allen Tabs dieses Fensters angezeigt, für die kein Tab-spezifisches Panel festgelegt ist.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und sowohl `tabId` als auch `windowId` weglassen, wird das _"globale Panel"_ festgelegt. Das globale Panel wird dann in allen Tabs angezeigt, die kein Tab-spezifisches Panel haben und deren Fenster kein Fenster-spezifisches Panel hat.

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

      - : `string` oder `null`. Das Panel, das in die Seitenleiste geladen werden soll, angegeben als URL, die auf ein HTML-Dokument zeigt, oder `null`, oder eine leere Zeichenkette.

        Dies kann auf eine Datei innerhalb der Erweiterung verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}) oder auf ein entferntes Dokument (z.B. `https://example.org/`). Es muss eine gültige URL sein.

        Wenn `panel` `null` oder `""` ist, dann wird ein zuvor festgelegtes Panel entfernt, so dass:

        - Wenn `tabId` angegeben ist und der Tab ein Tab-spezifisches Panel hat, erbt der Tab das Panel von dem Fenster, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster ein Fenster-spezifisches Panel hat, erbt das Fenster das globale Panel.
        - Andernfalls wird das globale Panel auf das Manifest-Panel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für den angegebenen Tab fest.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für das angegebene Fenster fest.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Panel wird nicht festgelegt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel festgelegt.

## Beispiele

Dieser Code schaltet das Seitenleisten-Dokument um, wenn der Benutzer auf eine Browser-Aktion klickt:

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
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.
