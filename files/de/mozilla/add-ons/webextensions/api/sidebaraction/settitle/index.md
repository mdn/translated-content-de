---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Setzt den Titel der Seitenleiste. Der Titel wird überall dort angezeigt, wo der Browser verfügbare Seitenleisten auflistet. Zum Beispiel zeigt Firefox ihn im Menü "Ansicht > Seitenleiste" an. Außerdem wird er oben in der Seitenleiste angezeigt, wenn diese geöffnet ist.

## Arten von Titeln

Ihre Erweiterung sollte einen Titel für die Seitenleiste im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angeben. Dies wird als _"Manifesttitel"_ bezeichnet. Wenn Sie keinen Manifesttitel angeben, wird standardmäßig der Name der Erweiterung verwendet.

Wenn Sie mit `setTitle()` einen neuen Titel festlegen und die Option `tabId` einschließen, wird der Titel nur für den angegebenen Tab gesetzt. Dieser Titel wird als _"tab-spezifischer Titel"_ bezeichnet.

Wenn Sie mit `setTitle()` einen neuen Titel festlegen und die Option `windowId` einschließen, wird der Titel nur für das angegebene Fenster gesetzt. Dieser Titel wird als _"fenster-spezifischer Titel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die keinen tab-spezifischen Titel festgelegt haben.

Wenn Sie mit `setTitle()` einen neuen Titel festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, dann wird der _"globale Titel"_ festgelegt. Der globale Titel erscheint dann in allen Tabs, die keinen tab-spezifischen Titel gesetzt haben und deren Fenster keinen fenster-spezifischen Titel hat.

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

        Wenn `title` ein leerer String ist, wird der Name der Erweiterung als Titel verwendet, aber {{WebExtAPIRef("sidebarAction.getTitle")}} gibt trotzdem den leeren String zurück.

        Wenn `title` `null` ist, wird ein zuvor gesetzter Titel entfernt, sodass:
        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, dann übernimmt der Tab den Titel des Fensters, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fenster-spezifischen Titel hat, dann übernimmt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifesttitel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird der globale Titel gesetzt.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Opera [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
