---
title: browserAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setPopup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das HTML-Dokument fest, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt. Tabs ohne ein spezifisches Popup erben das globale Popup, das standardmäßig auf das [`default_popup`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) eingestellt ist, welches im Manifest spezifiziert ist.

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
      - : `integer`. Setzt das Popup nur für einen bestimmten Tab ein. Das Popup wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für das angegebene Fenster ein.
    - `popup`

      - : `string` oder `null`. Die HTML-Datei, die in einem Popup angezeigt werden soll, angegeben als URL.

        Dies kann auf eine im Add-on gepackte Datei verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("extension.getURL")}}) oder auf ein entferntes Dokument (z.B. `https://example.org/`).

        Wenn ein leerer String (`""`) hier übergeben wird, wird das Popup deaktiviert und das Add-on erhält {{WebExtAPIRef("browserAction.onClicked")}} Ereignisse.

        Wenn `popup` `null` ist:

        - Wenn `tabId` angegeben ist, wird das tab-spezifische Popup entfernt, sodass der Tab das globale Popup erbt.
        - Wenn `windowId` angegeben ist, wird das fensterspezifische Popup entfernt, sodass das Fenster das globale Popup erbt.
        - Wenn `tabId` und `windowId` beide weggelassen werden, wird das globale Popup auf den Standardwert zurückgesetzt.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Popup wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Popup gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt ein Paar Kontextmenüeinträge hinzu, mit denen Sie zwischen zwei Popups wechseln können. Beachten Sie, dass Sie die "contextMenus" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) im Manifest des Add-ons einstellen müssen, um Kontextmenüeinträge zu erstellen.

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setPopup) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
