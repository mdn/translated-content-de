---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Browser-Aktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

Um eine Aktion bei Rechtsklick zu definieren, verwenden Sie die [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) API mit dem Kontexttyp "browser_action" [context type](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).

## Syntax

```js-nolint
browser.browserAction.onClicked.addListener(listener)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, sonst `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Symbol angeklickt wurde.
    - `OnClickData`

      - : Ein Objekt, das Informationen über den Klick enthält.

        - `modifiers`
          - : Ein `array`. Die zur Zeit des Klicks aktiven Tastatur-Modifikatoren, die eine oder mehrere der folgenden sein können: `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Gibt die verwendete Taste zum Klicken auf das Seitenaktionssymbol an: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z.B. von der Tastatur, und `1` für einen Klick mit der mittleren Taste oder dem Rad. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick verwendet, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Browser-Aktionssymbol klickt, schaltet dieser Code es für den aktiven Tab aus und protokolliert die URL des Tabs:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the browser action for the tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#event-onClicked). Diese Dokumentation basiert auf [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
