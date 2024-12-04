---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: 665b94c45d49c71009c3e6c9a9e0f601b6af0d82
---

{{AddonSidebar}}

Setzt den Titel der Seitenleiste. Der Titel wird überall dort angezeigt, wo der Browser verfügbare Seitenleisten auflistet. Zum Beispiel zeigt Firefox ihn im Menü "Ansicht > Seitenleiste" an. Er wird auch oben in der Seitenleiste angezeigt, wenn diese geöffnet ist.

## Arten von Titeln

Ihre Erweiterung sollte einen Titel für die Seitenleiste im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dies wird als _"Manifest-Titel"_ bezeichnet. Wenn Sie den Manifest-Titel nicht angeben, wird standardmäßig der Name der Erweiterung verwendet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die `tabId`-Option einschließen, wird der Titel nur für den angegebenen Tab festgelegt. Dieser Titel wird als _"tab-spezifischer Titel"_ bezeichnet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die `windowId`-Option einschließen, wird der Titel nur für das angegebene Fenster festgelegt. Dieser Titel wird als _"fensterspezifischer Titel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die keinen tab-spezifischen Titel haben.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und sowohl die `tabId`- als auch die `windowId`-Option weglassen, wird damit der _"globale Titel"_ festgelegt. Der globale Titel erscheint dann in allen Tabs, die keinen tab-spezifischen Titel haben und deren Fenster keinen fensterspezifischen Titel haben.

## Syntax

```js-nolint
browser.sidebarAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt mit den folgenden Eigenschaften:

    - `title`

      - : `string` oder `null`. Der neue Titel der Seitenleiste.

        Wenn `title` ein leerer String ist, wird der verwendete Titel der Name der Erweiterung sein, aber {{WebExtAPIRef("sidebarAction.getTitle")}} wird immer noch den leeren String liefern.

        Wenn `title` `null` ist, wird ein zuvor gesetzter Titel entfernt, sodass:

        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, wird der Tab den Titel des Fensters übernehmen, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel hat, wird das Fenster den globalen Titel übernehmen.
        - Andernfalls wird der globale Titel auf den Manifest-Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den Titel für die Seitenleiste, wenn der Benutzer auf eine Browseraktion klickt, jedoch nur für den aktuellen Tab:

```js
let title = "A different title";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
