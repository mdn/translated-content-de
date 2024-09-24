---
title: Symbolleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Häufig als [browser action](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Browser-Symbolleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browser-Symbolleiste, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Symbolleisten-Schaltfläche (browser action) ähnelt stark der Adressleisten-Schaltfläche (page action). Für die Unterschiede und Hinweise, wann was verwendet werden soll, siehe [Seitenaktionen und Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Festlegen der Browseraktion

Sie definieren die Eigenschaften der Browseraktion mit dem Schlüssel [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt keine obligatorischen Eigenschaften für diesen Schlüssel. Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet, und das standardmäßige Puzzlesymbol der Web-Erweiterung wird verwendet, wenn die Erweiterung kein Symbol angibt. Wenn `"default_title"` nicht angegeben wird, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browseraktion anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, das die Erweiterung mithilfe von [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) abhört:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klickereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, das automatisch geschlossen wird, wenn der Benutzer außerhalb davon klickt. Weitere Informationen zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Browseraktion haben kann.

Sie können viele der Browseraktion-Eigenschaften programmgesteuert mit der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API ändern.

## Symbole

Für Details zum Erstellen von Symbolen für Ihre Browseraktion siehe [Ikonografie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Browseraktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browseraktion ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browseraktion mit Popup
