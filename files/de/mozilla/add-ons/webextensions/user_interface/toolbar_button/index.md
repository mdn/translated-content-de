---
title: Toolbar-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Häufig als [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Browser-Symbolleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browser-Symbolleiste, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Toolbar-Schaltfläche (Browser-Aktion) ähnelt sehr der Adressleisten-Schaltfläche (Seitenaktion). Für die Unterschiede und eine Anleitung, wann was verwendet werden sollte, siehe [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Festlegen der Browser-Aktion

Sie definieren die Eigenschaften der Browser-Aktion mit dem [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Schlüssel in der manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt keine obligatorischen Eigenschaften für diesen Schlüssel. Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet, und das standardmäßige Web-Erweiterungspuzzlesymbol wird verwendet, wenn die Erweiterung kein Symbol angibt. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browser-Aktion festzulegen: mit oder ohne [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, auf das die Erweiterung mit [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) hört:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klickevent nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, das automatisch geschlossen wird, wenn der Benutzer außerhalb klickt. Siehe den Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) für weitere Details zum Erstellen und Verwalten von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Sie können viele der Browser-Aktionseigenschaften programmgesteuert mit der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)-API ändern.

## Symbole

Für Details zur Erstellung von Symbolen, die mit Ihrer Browser-Aktion verwendet werden können, sehen Sie sich die [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der Dokumentation des [Acorn Design System](https://acorn.firefox.com/latest) an.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit Popup
