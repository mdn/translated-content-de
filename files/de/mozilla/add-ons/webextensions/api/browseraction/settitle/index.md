---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Titel der Browser-Aktion. Der Titel wird in einem Tooltip über dem Symbol der Browser-Aktion angezeigt. Sie können eine `tabId` oder eine `windowId` als optionalen Parameter übergeben - wenn Sie dies tun, wird der Titel nur für den angegebenen Tab oder das angegebene Fenster geändert. Tabs oder Fenster ohne einen spezifischen Titel übernehmen den globalen Titeltext, der standardmäßig auf den im Manifest angegebenen [`default_title`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) zurückfällt.

## Syntax

```js-nolint
browser.browserAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Der neue Titel und optional die ID des anzusprechenden Tabs oder Fensters.

    - `title`

      - : `string` oder `null`. Der String, der bei Mouseover von der Browser-Aktion angezeigt werden soll.

        Wenn `title` ein leerer String ist, wird der verwendete Titel der Name der Erweiterung sein, aber {{WebExtAPIRef("browserAction.getTitle")}} wird weiterhin den leeren String liefern.

        Wenn `title` `null` ist:

        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, dann übernimmt der Tab den Titel von dem Fenster, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fenster-spezifischen Titel hat, dann übernimmt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifesttitel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browser-Aktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setTitle) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium Code.
