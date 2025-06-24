---
title: action.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/setPopup
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt das HTML-Dokument, das beim Klicken auf das Symbol der Browseraktion als Popup geöffnet wird. Tabs ohne ein spezifisches Popup erben das globale Popup, welches standardmäßig im [`default_popup`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) im Manifest angegeben ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setPopup(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für einen bestimmten Tab. Das Popup wird zurückgesetzt, wenn der Nutzer in diesem Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für das angegebene Fenster.
    - `popup`

      - : `string` oder `null`. Die HTML-Datei, die in einem Popup angezeigt werden soll, als URL angegeben.

        Dies kann auf eine innerhalb der Erweiterung gepackte Datei verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("extension.getURL")}}) oder auf ein entferntes Dokument (z. B. `https://example.org/`).

        Wenn hier ein leerer String (`""`) übergeben wird, wird das Popup deaktiviert, und die Erweiterung erhält {{WebExtAPIRef("action.onClicked")}}-Ereignisse.

        Wenn `popup` `null` ist:

        - Falls `tabId` angegeben ist, wird das tab-spezifische Popup entfernt, sodass der Tab das globale Popup erbt.
        - Falls `windowId` angegeben ist, wird das fensterspezifische Popup entfernt, sodass das Fenster das globale Popup erbt.
        - Falls sowohl `tabId` als auch `windowId` weggelassen werden, wird das globale Popup auf den Standardwert zurückgesetzt.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Popup wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Popup gesetzt.

## Beispiele

Dieser Code fügt ein Paar von Kontextmenüeinträgen hinzu, mit denen Sie zwischen zwei Popups wechseln können. Beachten Sie, dass Sie die "contextMenus"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) im Manifest der Erweiterung festlegen müssen, um Kontextmenüeinträge zu erstellen.

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
    browser.action.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.action.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setPopup) API von Chromium. Diese Dokumentation leitet sich von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code ab.
