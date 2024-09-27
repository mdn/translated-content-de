---
title: menus.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Menüpunkt angeklickt wird.

Zur Kompatibilität mit anderen Browsern macht Firefox dieses Ereignis sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace verfügbar.

## Syntax

```js-nolint
browser.menus.onClicked.addListener(listener)
browser.menus.onClicked.removeListener(listener)
browser.menus.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `info`
      - : {{WebExtAPIRef('menus.OnClickData')}}. Informationen über das angeklickte Element und den Kontext, in dem der Klick erfolgt ist.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattfand. Wenn der Klick nicht in einem Tab oder auf einem Tab stattfand, fehlt dieser Parameter.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört auf Klicks auf einen Menüpunkt und protokolliert dann die ID des Elements und die Tab-ID:

```js
browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(`Item ${info.menuItemId} clicked in tab ${tab.id}`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#event-onClicked)-API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
