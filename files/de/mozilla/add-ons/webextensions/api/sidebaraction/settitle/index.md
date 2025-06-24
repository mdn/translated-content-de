---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt den Titel der Seitenleiste. Der Titel wird überall dort angezeigt, wo der Browser verfügbare Seitenleisten auflistet. Zum Beispiel zeigt Firefox ihn im Menü "Ansicht > Seitenleiste" an. Er wird ebenfalls oben in der Seitenleiste angezeigt, wenn diese geöffnet ist.

## Typen von Titeln

Ihre Erweiterung sollte einen Titel für die Seitenleiste im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dieser wird als _"Manifest-Titel"_ bezeichnet. Wenn Sie den Manifest-Titel nicht angeben, wird standardmäßig der Name der Erweiterung verwendet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die `tabId`-Option einschließen, wird der Titel nur für den angegebenen Tab festgelegt. Dieser Titel wird als _"Tab-spezifischer Titel"_ bezeichnet.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und die `windowId`-Option einschließen, wird der Titel nur für das angegebene Fenster festgelegt. Dieser Titel wird als _"Fenster-spezifischer Titel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die keinen Tab-spezifischen Titel haben.

Wenn Sie einen neuen Titel mit `setTitle()` festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, wird der _"globale Titel"_ gesetzt. Der globale Titel erscheint dann in allen Tabs, die weder einen Tab-spezifischen Titel haben noch deren Fenster einen Fenster-spezifischen Titel hat.

## Syntax

```js-nolint
browser.sidebarAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt mit folgenden Eigenschaften:

    - `title`

      - : `string` oder `null`. Der neue Titel der Seitenleiste.

        Wenn `title` ein leerer String ist, wird der verwendete Titel der Name der Erweiterung sein, aber {{WebExtAPIRef("sidebarAction.getTitle")}} wird weiterhin den leeren String liefern.

        Wenn `title` `null` ist, wird ein zuvor gesetzter Titel entfernt, sodass:

        - Wenn `tabId` angegeben ist und der Tab einen Tab-spezifischen Titel hat, der Tab den Titel des Fensters erbt, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen Fenster-spezifischen Titel hat, das Fenster den globalen Titel erbt.
        - Andernfalls wird der globale Titel auf den Manifest-Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den Titel für die Seitenleiste, wenn der Benutzer auf eine Browser-Aktion klickt, aber nur für den aktuellen Tab:

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
