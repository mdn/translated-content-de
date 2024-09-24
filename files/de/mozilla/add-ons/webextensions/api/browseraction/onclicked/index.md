---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Browser-Aktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

Um eine Rechtsklickaktion zu definieren, verwenden Sie die [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) API mit dem "browser_action" [Kontexttyp](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).

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
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Symbol angeklickt wurde.
    - `OnClickData`

      - : Ein Objekt, das Informationen über den Klick enthält.

        - `modifiers`
          - : Ein `array`. Die Tastaturmodifikatoren, die zum Zeitpunkt des Klicks aktiv waren, eine oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Gibt die Schaltfläche an, mit der das Seitensymbol geklickt wurde: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z. B. ein Tastaturklick, und `1` für einen mittleren Schalt- oder Radklick. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick konsumiert, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Browser-Aktionssymbol klickt, deaktiviert dieser Code es für den aktiven Tab und protokolliert die URL des Tabs:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // deaktiviert die Browser-Aktion für den Tab
  browser.browserAction.disable(tab.id);
  // erfordert die "tabs" oder "activeTab" Berechtigung oder Host-Berechtigungen für die URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#event-onClicked) API von Chromium. Diese Dokumentation wird aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
