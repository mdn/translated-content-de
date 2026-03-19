---
title: Toolbar-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 1ba0755482292cd52e89cf96fda34000c8e60c91
---

Häufig als Browser-Aktion bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Browser-Toolbar hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Aktionssymbol in der Browser-Toolbar, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Toolbar-Schaltfläche (Browser-Aktion) ähnelt sehr der Adressleisten-Schaltfläche (Seitenaktion). Für die Unterschiede und Hinweise, wann man was verwenden sollte, siehe [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Festlegen der Browser-Aktion

Sie definieren die Eigenschaften der Browser-Aktion in der `manifest.json`-Datei Ihrer Erweiterung mit:

- dem Schlüssel [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) für Manifest V2-Erweiterungen.
- dem Schlüssel [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) für Manifest V3-Erweiterungen.

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

Es gibt keine verpflichtenden Eigenschaften für diesen Schlüssel.

Es gibt zwei Möglichkeiten, eine Browser-Aktion anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken des Benutzers auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, auf das die Erweiterung mit [`action.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked) hört:

```js
browser.action.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klick-Ereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer kann mit dem Popup interagieren, das sich automatisch schließt, wenn der Benutzer außerhalb davon klickt. Siehe den Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) für weitere Details zum Erstellen und Verwalten von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine einzige Browser-Aktion haben kann.

Viele der Eigenschaften der Browser-Aktion können Sie programmatisch ändern mit:

- der API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) für Manifest V2-Erweiterungen.
- der API [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action) für Manifest V3-Erweiterungen.

## Symbole

Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet. Wenn die Erweiterung kein Symbol angibt, wird das Standard-Symbol des Web-Extensions-Puzzleteils verwendet. Wenn `"default_title"` nicht angegeben wird, wird der Erweiterungsname verwendet.

Sie können Symbole für helle und dunkle UI-Themen mit der Eigenschaft `"theme_icons"` bereitstellen oder eine Medienabfrage zu `prefers-color-scheme` in einem SVG-Symbol verwenden. Weitere Informationen finden Sie in [`"browser_action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#theme_icons) oder [`"action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action#theme_icons) sowie im [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons)-Beispiel.

Details, wie Sie Symbole für Ihre Browser-Aktion erstellen, finden Sie unter [Ikonographie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit einem Popup
