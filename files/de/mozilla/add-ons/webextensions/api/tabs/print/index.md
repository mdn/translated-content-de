---
title: tabs.print()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/print
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Rufen Sie diese Funktion auf, um die Inhalte des aktiven Tabs zu drucken. Wenn diese Funktion aufgerufen wird, erhält der Benutzer das Druckdialogfeld der zugrunde liegenden Plattform und hat die Möglichkeit, die Druckeinstellungen zu ändern und dann den aktuell aktiven Tab zu drucken.

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
