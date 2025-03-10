---
title: Werkzeugleistenschaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{AddonSidebar}}

Allgemein als [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Browser-Werkzeugleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Ihrer Erweiterung zu interagieren.
![Ein benutzerdefiniertes Browser-Action-Symbol in der Browser-Werkzeugleiste, das wie ein Pfotenabdruck aussieht.](toolbar_button.png)

Die Werkzeugleistenschaltfläche (Browser-Action) ähnelt sehr der Adressleistenschaltfläche (Seitenaktion). Für die Unterschiede und Anleitungen, wann Sie welche verwenden sollten, siehe [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Die Browser-Action festlegen

Sie definieren die Eigenschaften der Browser-Action mit dem Schlüssel [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Für diesen Schlüssel gibt es keine zwingenden Eigenschaften. Wenn Sie `"default_icon"` nicht angeben, wird das Erweiterungssymbol verwendet, und wenn die Erweiterung kein Symbol angibt, wird das Standard-Webextension-Puzzle-Symbol verwendet. Wenn `"default_title"` nicht angegeben ist, wird der Erweiterungsname verwendet.

Es gibt zwei Möglichkeiten, eine Browser-Action anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups). Wenn Sie kein Popup angeben, wird beim Klicken auf die Schaltfläche ein Ereignis an die Erweiterung gesendet, das die Erweiterung mithilfe von [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) empfängt:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup angeben, wird das Klickereignis nicht gesendet: Stattdessen wird das Popup angezeigt, wenn der Benutzer die Schaltfläche anklickt. Der Benutzer kann mit dem Popup interagieren, das automatisch geschlossen wird, wenn der Benutzer außerhalb des Popups klickt. Weitere Details zur Erstellung und Verwaltung von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Action haben kann.

Sie können viele der Eigenschaften der Browser-Action programmgesteuert über die [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API ändern.

## Symbole

Details zum Erstellen von Symbolen für Ihre Browser-Action finden Sie unter [Ikonographie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [`webextensions-examples`](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Browser-Aktionen implementieren:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Action ohne Popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Action mit Popup
