---
title: action.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/action/setTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Titel der Browser-Aktion. Der Titel wird in einem Tooltip über dem Symbol der Browser-Aktion angezeigt. Sie können einen `tabId` oder einen `windowId` als optionalen Parameter übergeben - wenn Sie dies tun, wird der Titel nur für den angegebenen Tab oder das Fenster geändert. Tabs oder Fenster ohne spezifischen Titel erben den globalen Titeltext, der standardmäßig auf den im Manifest angegebenen [`default_title`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) zurückgreift.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Der neue Titel und optional die ID des Tabs oder Fensters, das angesprochen wird.

    - `title`

      - : `string` oder `null`. Der String, den die Browser-Aktion anzeigen soll, wenn mit der Maus darüber gefahren wird.

        Wenn `title` ein leerer String ist, wird als Titel der Erweiterungsname verwendet, aber {{WebExtAPIRef("action.getTitle")}} liefert weiterhin den leeren String.

        Wenn `title` `null` ist:

        - Wenn `tabId` angegeben ist und der Tab einen tabspezifischen Titel hat, erbt der Tab den Titel des Fensters, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel hat, erbt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifest-Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browser-Aktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.action.setTitle({ title: "that" });
  } else {
    browser.action.setTitle({ title: "this" });
  }
}

browser.action.onClicked.addListener(() => {
  let gettingTitle = browser.action.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setTitle) API von Chromium. Diese Dokumentation ist aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
