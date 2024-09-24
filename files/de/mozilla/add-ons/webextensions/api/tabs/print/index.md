---
title: tabs.print()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/print
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Rufen Sie diese Funktion auf, um den Inhalt des aktiven Tabs zu drucken. Wenn diese Funktion aufgerufen wird, wird dem Benutzer das Druckdialogfeld der zugrunde liegenden Plattform angezeigt, und der Benutzer hat die Möglichkeit, die Druckeinstellungen zu ändern und dann den aktuell aktiven Tab zu drucken.

## Syntax

```js-nolint
browser.tabs.print()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Beispiele

In diesem Beispiel hört ein Hintergrundskript auf einen Klick auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) und versucht dann, den aktuell aktiven Tab zu drucken:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.print();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
