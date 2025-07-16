---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt den Titel der Seitenleiste. Der Titel wird überall dort angezeigt, wo der Browser verfügbare Seitenleisten auflistet. Im Beispiel zeigt Firefox ihn im Menü "Ansicht > Seitenleiste". Er wird auch oben in der Seitenleiste angezeigt, wenn diese geöffnet ist.

## Arten von Titeln

Ihre Erweiterung sollte einen Titel für die Seitenleiste im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dies wird als _"Manifest-Titel"_ bezeichnet. Wenn Sie den Manifest-Titel nicht angeben, wird standardmäßig der Name der Erweiterung verwendet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die Option `tabId` einschließen, wird der Titel nur für den angegebenen Tab festgelegt. Dieser Titel wird als _"tab-spezifischer Titel"_ bezeichnet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die Option `windowId` einschließen, wird der Titel nur für das angegebene Fenster festgelegt. Dieser Titel wird als _"fensterspezifischer Titel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die keinen tab-spezifischen Titel haben.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, dann wird der _"globale Titel"_ gesetzt. Der globale Titel erscheint dann in allen Tabs, die keinen tab-spezifischen Titel haben und deren Fenster keinen fensterspezifischen Titel haben.

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

        Wenn `title` ein leerer String ist, wird der Erweiterungsname als Titel verwendet, aber {{WebExtAPIRef("sidebarAction.getTitle")}} liefert weiterhin den leeren String.

        Wenn `title` `null` ist, wird ein zuvor gesetzter Titel entfernt, sodass:
        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, erbt der Tab den Titel von dem Fenster, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel hat, erbt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifest-Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Beispiele

Dieser Code ändert den Titel der Seitenleiste, wenn der Benutzer auf eine Browseraktion klickt, jedoch nur für den aktuellen Tab:

```js
let title = "A different title";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.
