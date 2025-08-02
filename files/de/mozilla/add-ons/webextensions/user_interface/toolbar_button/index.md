---
title: Toolbar-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Allgemein als [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Browser-Toolbar hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Symbol für eine Browser-Aktion in der Browser-Toolbar, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Toolbar-Schaltfläche (Browser-Aktion) ist der Adressleisten-Schaltfläche (Seiten-Aktion) sehr ähnlich. Für die Unterschiede und Anleitungen, wann welche verwendet werden sollte, siehe [Seitenaktionen und Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Spezifizierung der Browser-Aktion

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

Es gibt keine obligatorischen Eigenschaften für diesen Schlüssel. Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet, und das Standard-Web-Erweiterungspuzzlesymbol wird verwendet, wenn die Erweiterung kein Symbol angibt. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browser-Aktion anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, das die Erweiterung mit [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) überwacht:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klick-Ereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, das automatisch geschlossen wird, wenn der Benutzer außerhalb davon klickt. Weitere Details zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Sie können viele der Eigenschaften der Browser-Aktion programmatisch mit der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)-API ändern.

## Symbole

Für Details dazu, wie man Symbole zur Verwendung mit Ihrer Browser-Aktion erstellt, siehe [Ikonografie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit einem Popup
