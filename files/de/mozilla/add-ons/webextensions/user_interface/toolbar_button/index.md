---
title: Toolbar-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Häufig als [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Browser-Symbolleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browser-Symbolleiste, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Toolbar-Schaltfläche (Browser-Aktion) ist der Adressleisten-Schaltfläche (Seitenaktion) sehr ähnlich. Informationen zu den Unterschieden und Anleitungen, wann was zu verwenden ist, finden Sie unter [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Spezifizierung der Browser-Aktion

Sie definieren die Eigenschaften der Browser-Aktion mit dem Schlüssel [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt keine verpflichtenden Eigenschaften für diesen Schlüssel. Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet, und das Standard-Webextension-Puzzlesymbol wird verwendet, wenn die Erweiterung kein Symbol angibt. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browser-Aktion zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, das die Erweiterung mit [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) überwacht:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klick-Ereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, das sich automatisch schließt, wenn der Benutzer außerhalb davon klickt. Siehe den Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) für weitere Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Sie können viele der Eigenschaften der Browser-Aktion programmatisch mit der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API ändern.

## Symbole

Einzelheiten zur Erstellung von Symbolen zur Verwendung mit Ihrer Browser-Aktion finden Sie in der [Ikonografie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne ein Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit einem Popup
