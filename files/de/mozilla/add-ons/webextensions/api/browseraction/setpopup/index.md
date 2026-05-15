---
title: browserAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setPopup
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Setzt das HTML-Dokument, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt. Tabs ohne ein spezifisches Popup erben das globale Popup, das standardmäßig das im Manifest angegebene [`default_popup`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist.

## Syntax

```js-nolint
browser.browserAction.setPopup(
  details // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für einen bestimmten Tab. Das Popup wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für das angegebene Fenster.
    - `popup`
      - : `string` oder `null`. Die HTML-Datei, die in einem Popup angezeigt werden soll, angegeben als URL.

        Dies kann auf eine Datei innerhalb der Erweiterung verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}) oder auf ein entferntes Dokument (z.B. `https://example.org/`).

        Wenn hier ein leerer String (`""`) übergeben wird, wird das Popup deaktiviert und die Erweiterung erhält {{WebExtAPIRef("browserAction.onClicked")}}-Events.

        Wenn `popup` `null` ist:
        - Wenn `tabId` angegeben ist, wird das tab-spezifische Popup entfernt, sodass der Tab das globale Popup erbt.
        - Wenn `windowId` angegeben ist, wird das fenster-spezifische Popup entfernt, sodass das Fenster das globale Popup erbt.
        - Wenn sowohl `tabId` als auch `windowId` weggelassen werden, wird das globale Popup auf den Standardwert zurückgesetzt.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Popup wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Popup gesetzt.

## Beispiele

Dieser Code fügt ein Paar von Kontextmenüelementen hinzu, mit denen Sie zwischen zwei Popups wechseln können. Beachten Sie, dass Sie die "contextMenus"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) im Manifest der Erweiterung setzen müssen, um Kontextmenüelemente zu erstellen.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "Popup 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "Popup 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "popup-1") {
    browser.browserAction.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.browserAction.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setPopup) API. Diese Dokumentation ist aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
