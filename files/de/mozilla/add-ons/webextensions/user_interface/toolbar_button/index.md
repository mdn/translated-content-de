---
title: Toolbar-Button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Häufig als [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption ein Button, der zur Browser-Toolbar hinzugefügt wird. Benutzer klicken auf den Button, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browser-Toolbar, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Der Toolbar-Button (Browser-Aktion) ähnelt sehr dem Adressleisten-Button (Seitenaktion). Für die Unterschiede und Anleitungen, wann was verwendet wird, siehe [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Spezifizieren der Browser-Aktion

Sie definieren die Eigenschaften der Browser-Aktion mithilfe des Schlüssels [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt keine Pflichtfelder für diesen Schlüssel. Wenn Sie kein `"default_icon"` angeben, wird das Erweiterungssymbol verwendet, und das Standard-Web-Erweiterung-Puzzlesymbol wird verwendet, wenn die Erweiterung kein Symbol angibt. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browser-Aktion anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken auf den Button ein Ereignis an die Erweiterung geschickt, auf das die Erweiterung mit [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) hört:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klickereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf den Button klickt. Der Benutzer kann mit dem Popup interagieren, das automatisch geschlossen wird, wenn der Benutzer außerhalb davon klickt. Siehe den Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) für weitere Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Sie können viele der Eigenschaften der Browser-Aktion programmatisch mit der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API ändern.

## Symbole

Weitere Informationen zum Erstellen von Symbolen, die mit Ihrer Browser-Aktion verwendet werden können, finden Sie in der [Iconography](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit Popup
