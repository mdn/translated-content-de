---
title: Fügen Sie einen Button zur Symbolleiste hinzu
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

Symbolleisten-Buttons sind eine der Hauptkomponenten der Benutzeroberfläche, die für Erweiterungen verfügbar sind. Symbolleisten-Buttons befinden sich in der Hauptbrowser-Symbolleiste und enthalten ein Symbol. Wenn der Benutzer auf das Symbol klickt, kann eines von zwei Dingen geschehen:

- Wenn Sie ein Popup für das Symbol angegeben haben, wird das Popup angezeigt. Popups sind vorübergehende Dialoge, die mit HTML, CSS und JavaScript spezifiziert sind.
- Wenn Sie kein Popup angegeben haben, wird ein Klick-Ereignis generiert, das Sie in Ihrem Code abhören können, um eine andere Art von Aktion als Reaktion auszuführen.

Mit den WebExtension-APIs werden diese Arten von Buttons als "Browseraktionen" bezeichnet und folgendermaßen eingerichtet:

- Der `manifest.json` Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) wird verwendet, um den Button zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird verwendet, um Klicks zu überwachen und den Button zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Symbolleiste hinzufügt. Wenn der Benutzer den Button anklickt, werden wir <https://developer.mozilla.org> in einem neuen Tab öffnen.

Erstellen Sie zuerst ein neues Verzeichnis namens "button" und erstellen Sie eine Datei namens "manifest.json" darin mit folgendem Inhalt:

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

Dies gibt an, dass wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens "background.js" haben werden und eine Browseraktion (Button), dessen Symbole im "icons"-Verzeichnis liegen.

Erstellen Sie als Nächstes das Verzeichnis "icons" im Verzeichnis "button" und speichern Sie die unten gezeigten zwei Symbole darin:

**"page-16.png":**

!["16 pixel icon of a lined sheet of paper"](page-16.png)

**"page-32.png":**

!["32 pixel icon of a lined sheet of paper"](page-32.png)

> [!NOTE]
> Diese Symbole stammen aus dem [bitsies!](https://www.iconfinder.com/iconsets/bitsies) Iconset, erstellt von Recep Kütük.

Wir haben zwei Symbole, damit wir das größere auf hochauflösenden Bildschirmen verwenden können. Der Browser kümmert sich darum, das beste Symbol für das aktuelle Display auszuwählen.

Erstellen Sie als nächstes "background.js" im Stammverzeichnis der Erweiterung und geben Sie ihm folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies überwacht das Klickereignis der Browseraktion; wenn das Ereignis ausgelöst wird, wird die `openPage()`-Funktion ausgeführt, die die angegebene Seite mit der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-API öffnet.

An diesem Punkt sollte die vollständige Erweiterung wie folgt aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und klicken Sie auf den Button:

![Der von der Erweiterung hinzugefügte Button in der Symbolleiste](toolbar_button.png)

## Hinzufügen eines Popups

Versuchen wir, dem Button ein Popup hinzuzufügen. Ersetzen Sie "manifest.json" durch dieses:

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

Wir haben zwei Änderungen im Vergleich zum Original vorgenommen:

- die Referenz zu "background.js" entfernt, da wir nun die Logik der Erweiterung im Skript des Popups behandeln (Sie dürfen sowohl background.js als auch ein Popup haben, aber in diesem Fall benötigen wir es nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser mitteilt, dass diese Browseraktion jetzt ein Popup anzeigt, wenn darauf geklickt wird, dessen Dokument unter "popup/choose_page.html" zu finden ist.

Nun müssen wir dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann eine Datei namens "choose_page.html" darin. Geben Sie ihm folgenden Inhalt:

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

Sie können sehen, dass dies eine normale HTML-Seite ist, die drei {{htmlelement("div")}}-Elemente enthält, jedes mit dem Namen einer Mozilla-Seite. Sie enthält auch eine CSS-Datei und eine JavaScript-Datei, die wir als nächstes hinzufügen.

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

Erstellen Sie als Nächstes eine Datei namens "choose_page.js" im "popup"-Verzeichnis und geben Sie ihr diesen Inhalt:

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

In unserem JavaScript überwachen wir Klicks auf die Popup-Auswahlmöglichkeiten. Wir prüfen zunächst, ob der Klick auf einem der Seitenoptionen gelandet ist; falls nicht, tun wir nichts weiter. Wenn der Klick auf einer Seitenoption gelandet ist, erstellen wir eine URL daraus und öffnen einen neuen Tab mit der entsprechenden Seite. Beachten Sie, dass wir die WebExtension-APIs in Popup-Skripten genauso verwenden können wie in Hintergrundskripten.

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

Laden Sie nun [die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), klicken Sie erneut auf den Button und versuchen Sie, auf die Auswahlmöglichkeiten im Popup zu klicken:

![Der von der Erweiterung mit einem Popup hinzugefügte Button in der Symbolleiste](toolbar_button_with_popup.png)

## Seitenaktionen

[Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sind ähnlich wie Browseraktionen, mit dem Unterschied, dass sie für Aktionen gedacht sind, die nur für bestimmte Seiten relevant sind, nicht für den Browser insgesamt.

Während Browseraktionen immer angezeigt werden, werden Seitenaktionen nur in Tabs angezeigt, in denen sie relevant sind. Seitenaktions-Buttons werden in der URL-Leiste angezeigt, nicht in der Browser-Symbolleiste.

## Weitere Informationen

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für Browseraktionen:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für Seitenaktionen:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
