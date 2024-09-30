---
title: Einen Button zur Toolbar hinzufügen
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

Toolbar-Buttons sind eine der wichtigsten UI-Komponenten, die Erweiterungen zur Verfügung stehen. Toolbar-Buttons befinden sich in der Haupt-Browser-Toolbar und enthalten ein Icon. Wenn der Benutzer das Icon anklickt, können zwei Dinge passieren:

- Wenn Sie ein Popup für das Icon spezifiziert haben, wird das Popup angezeigt. Popups sind temporäre Dialoge, die mit HTML, CSS und JavaScript spezifiziert werden.
- Wenn Sie kein Popup spezifiziert haben, wird ein Klick-Ereignis generiert, das Sie in Ihrem Code abhören können, um daraufhin eine andere Aktion auszuführen.

Mit den WebExtension-APIs werden diese Arten von Buttons als "Browser-Aktionen" bezeichnet und wie folgt eingerichtet:

- Der Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in der manifest.json wird verwendet, um den Button zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird verwendet, um Klicks zu erfassen und um den Button zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Toolbar hinzufügt. Wenn der Benutzer den Button anklickt, öffnen wir <https://developer.mozilla.org> in einem neuen Tab.

Erstellen Sie zuerst ein neues Verzeichnis "button" und eine Datei namens "manifest.json" darin mit folgendem Inhalt:

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Dies spezifiziert, dass wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens "background.js" haben werden und eine Browser-Aktion (Button), deren Icons im "icons"-Verzeichnis liegen werden.

Erstellen Sie als Nächstes das "icons"-Verzeichnis im "buttons"-Verzeichnis und speichern Sie die beiden unten gezeigten Icons darin:

**"page-16.png":**

!["16 Pixel Icon eines linierten Blatt Papiers"](page-16.png)

**"page-32.png":**

!["32 Pixel Icon eines linierten Blatt Papiers"](page-32.png)

> [!NOTE]
> Diese Icons stammen aus dem [bitsies!](https://www.iconfinder.com/iconsets/bitsies) Iconset, erstellt von Recep Kütük.

Wir haben zwei Icons, damit wir das größere auf hochauflösenden Displays verwenden können. Der Browser kümmert sich darum, das beste Icon für das aktuelle Display auszuwählen.

Erstellen Sie als Nächstes "background.js" im Stammverzeichnis der Erweiterung und geben Sie ihm den folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies lauscht auf das Klick-Ereignis der Browser-Aktion; wenn das Ereignis ausgelöst wird, wird die Funktion `openPage()` ausgeführt, die die angegebene Seite mit der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API öffnet.

Zu diesem Zeitpunkt sollte die vollständige Erweiterung so aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und klicken Sie auf den Button:

![Der von der Erweiterung hinzugefügte Toolbar-Button](toolbar_button.png)

## Ein Popup hinzufügen

Lassen Sie uns versuchen, dem Button ein Popup hinzuzufügen. Ersetzen Sie manifest.json mit diesem:

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "browser_action": {
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Wir haben zwei Änderungen vorgenommen:

- Die Referenz auf "background.js" entfernt, da wir die Logik der Erweiterung nun im Skript des Popups behandeln werden (Sie dürfen sowohl background.js als auch ein Popup haben, aber wir brauchen es in diesem Fall nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser mitteilt, dass diese Browser-Aktion nun ein Popup anzeigen wird, wenn es angeklickt wird, das Dokument dafür kann bei "popup/choose_page.html" gefunden werden.

Nun müssen wir dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann eine Datei namens "choose_page.html" darin. Geben Sie ihr den folgenden Inhalt:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_page.css" />
  </head>
  <body>
    <div class="page-choice">developer.mozilla.org</div>
    <div class="page-choice">support.mozilla.org</div>
    <div class="page-choice">addons.mozilla.org</div>
    <script src="choose_page.js"></script>
  </body>
</html>
```

Sie sehen, dass dies eine normale HTML-Seite ist, die drei {{htmlelement("div")}} Elemente enthält, jedes mit dem Namen einer Mozilla-Seite darin. Es enthält auch eine CSS-Datei und eine JavaScript-Datei, die wir als Nächstes hinzufügen werden.

Erstellen Sie eine Datei namens "choose_page.css" im "popup"-Verzeichnis und geben Sie ihr diesen Inhalt:

```css
html,
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.page-choice:hover {
  background-color: #cff2f2;
}
```

Dies ist nur ein bisschen Styling für unser Popup.

Erstellen Sie als Nächstes eine "choose_page.js"-Datei im "popup"-Verzeichnis und geben Sie ihr diesen Inhalt:

```js
document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("page-choice")) {
    return;
  }

  const chosenPage = `https://${event.target.textContent}`;
  browser.tabs.create({
    url: chosenPage,
  });
});
```

In unserem JavaScript lauschen wir auf Klicks auf die Popup-Auswahl. Wir überprüfen zuerst, ob der Klick auf eine der Seiten-Auswahlen gelandet ist; wenn nicht, unternehmen wir nichts weiter. Wenn der Klick auf eine Seiten-Auswahl gelandet ist, konstruieren wir eine URL aus dieser und öffnen einen neuen Tab mit der entsprechenden Seite. Beachten Sie, dass wir WebExtension-APIs in Popup-Skripten genauso verwenden können wie in Hintergrundskripten.

Die finale Struktur der Erweiterung sollte so aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json
```

Laden Sie [die Erweiterung erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), klicken Sie erneut auf den Button und versuchen Sie, auf die Auswahlen im Popup zu klicken:

![Der von der Erweiterung hinzugefügte Toolbar-Button mit Popup](toolbar_button_with_popup.png)

## Seitenaktionen

[Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sind ähnlich wie Browser-Aktionen, außer dass sie für Aktionen gedacht sind, die nur für bestimmte Seiten und nicht für den Browser als Ganzes relevant sind.

Während Browser-Aktionen immer angezeigt werden, werden Seitenaktionen nur in Tabs angezeigt, in denen sie relevant sind. Seitenaktions-Buttons werden in der URL-Leiste angezeigt, anstatt in der Browser-Toolbar.

## Mehr erfahren

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für Browser-Aktionen:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für Seitenaktionen:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
