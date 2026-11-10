---
title: Schaltfläche in der Symbolleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Diese als Browser-Aktion oder Aktion bezeichnete Benutzeroberflächenoption ist eine Schaltfläche, die Nutzer zur Browser-Symbolleiste hinzufügen können. Durch einen Klick auf die Schaltfläche können sie mit Ihrer Erweiterung interagieren.

![Ein benutzerdefiniertes, hervorgehobenes Symbol für eine Browser-Aktion, das wie ein Pfotenabdruck aussieht, in der Firefox-Symbolleiste.](toolbar_button.png)

Die Schaltfläche in der Symbolleiste (Browser-Aktion) ähnelt stark der Schaltfläche in der Adressleiste (Seitenaktion). Informationen zu den Unterschieden und dazu, wann Sie welche verwenden sollten, finden Sie unter [Seitenaktionen und Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions).

## Browser-Aktion festlegen

Sie legen die Eigenschaften der Browser-Aktion in der Datei `manifest.json` Ihrer Erweiterung fest. Verwenden Sie dazu:

- für Manifest-V2-Erweiterungen den Schlüssel [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action).
- für Manifest-V3-Erweiterungen den Schlüssel [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action).

Die Syntax dieser Schlüssel ist identisch.

```json
"action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Für diesen Schlüssel gibt es keine erforderlichen Eigenschaften.

Sie können eine Browser-Aktion mit oder ohne [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) festlegen. Wenn Sie kein Popup festlegen, wird beim Klick auf die Schaltfläche ein Ereignis an die Erweiterung gesendet. Die Erweiterung kann mit [`action.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked) auf dieses Ereignis reagieren:

```js
browser.action.onClicked.addListener(handleClick);
```

Wenn Sie ein Popup festlegen, wird das Klickereignis nicht gesendet. Stattdessen wird das Popup angezeigt, wenn Nutzer auf die Schaltfläche klicken. Nutzer können mit dem Popup interagieren; es schließt sich automatisch, wenn sie außerhalb des Popups klicken. Weitere Informationen zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popups](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Browser-Aktion haben kann.

Sie können viele Eigenschaften der Browser-Aktion programmgesteuert ändern. Verwenden Sie dazu:

- für Manifest-V2-Erweiterungen die API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction).
- für Manifest-V3-Erweiterungen die API [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action).

## Symbole

Wenn Sie `"default_icon"` nicht festlegen, wird das Symbol der Erweiterung verwendet. Wenn für die Erweiterung kein Symbol festgelegt ist, wird das standardmäßige Puzzleteil-Symbol für Web-Erweiterungen verwendet. Wenn `"default_title"` nicht festgelegt ist, wird der Name der Erweiterung verwendet.

Mit der Eigenschaft `"theme_icons"` können Sie Symbole für helle und dunkle Benutzeroberflächendesigns bereitstellen. Alternativ können Sie in einem SVG-Symbol eine Media Query für `prefers-color-scheme` verwenden. Weitere Informationen finden Sie unter [`"browser_action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#theme_icons) oder [`"action"` `"theme_icons"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action#theme_icons) sowie im Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons).

Wie Sie Symbole für Ihre Browser-Aktion erstellen, erfahren Sie unter [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [`webextensions-examples`](https://github.com/mdn/webextensions-examples) auf GitHub enthält zwei Beispiele für Erweiterungen mit Browser-Aktionen:

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) verwendet eine Browser-Aktion ohne Popup.
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) verwendet eine Browser-Aktion mit Popup.
