---
title: Toolbar-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Im Allgemeinen als Browser-Aktion bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Browser-Symbolleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browsersymbolleiste, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Toolbar-Schaltfläche (Browser-Aktion) ähnelt sehr der Adressleisten-Schaltfläche (Seitenaktion). Für die Unterschiede und Anleitungen, wann welche genutzt werden sollte, siehe [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Die Browser-Aktion festlegen

Sie definieren die Eigenschaften der Browser-Aktion in der `manifest.json`-Datei Ihrer Erweiterung mit:

- für Manifest-V2-Erweiterungen den [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Schlüssel.
- für Manifest-V3-Erweiterungen den [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Schlüssel.

Die Syntax für diese Schlüssel ist identisch.

```json
"action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt keine Pflichtangaben für diesen Schlüssel.

Es gibt zwei Möglichkeiten, eine Browser-Aktion zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird bei einem Klick des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, auf das die Erweiterung mit [`action.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked) reagiert:

```js
browser.action.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klickereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, welches sich automatisch schließt, wenn der Benutzer außerhalb davon klickt. Siehe den Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) für weitere Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Viele der Eigenschaften der Browser-Aktion können programmatisch geändert werden mittels:

- für Manifest-V2-Erweiterungen der [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)-API.
- für Manifest-V3-Erweiterungen der [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action)-API.

## Symbole

Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet. Wenn die Erweiterung kein Symbol angibt, wird das standardmäßige Puzzle-Symbol für Web-Erweiterungen verwendet. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Sie können Symbole für helle und dunkle UI-Themen mit der Eigenschaft `"theme_icons"` angeben oder eine Medienabfrage für `prefers-color-scheme` in einem SVG-Symbol verwenden. Für weitere Informationen siehe [`"browser_action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#theme_icons) oder [`"action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action#theme_icons), und das [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons)-Beispiel.

Für Details zur Erstellung von Symbolen zur Verwendung mit Ihrer Browser-Aktion, siehe [Ikonographie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest)-Dokumentation.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne ein Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit einem Popup
