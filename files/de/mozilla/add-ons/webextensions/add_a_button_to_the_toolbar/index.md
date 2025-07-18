---
title: Einen Button zur Symbolleiste hinzufügen
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Symbolleisten-Buttons sind eine der Hauptkomponenten der Benutzeroberfläche, die Erweiterungen zur Verfügung stehen. Symbolleisten-Buttons befinden sich in der Hauptsymbolleiste des Browsers und enthalten ein Icon. Wenn der Benutzer auf das Icon klickt, können zwei Dinge geschehen:

- Wenn Sie ein Popup für das Icon angegeben haben, wird das Popup angezeigt. Popups sind temporäre Dialoge, die mit HTML, CSS und JavaScript spezifiziert werden.
- Wenn Sie kein Popup angegeben haben, wird ein Klickereignis generiert, das Sie in Ihrem Code abhören können, um eine andere Aktion als Reaktion darauf auszuführen.

Mit den WebExtension APIs werden diese Arten von Buttons als "browser actions" bezeichnet und wie folgt eingerichtet:

- Der `manifest.json`-Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) wird verwendet, um den Button zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird verwendet, um Klicks zu überwachen und den Button zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Symbolleiste hinzufügt. Wenn der Benutzer den Button anklickt, wird <https://developer.mozilla.org> in einem neuen Tab geöffnet.

Erstellen Sie zuerst ein neues Verzeichnis namens "button" und erstellen Sie darin eine Datei namens "manifest.json" mit folgendem Inhalt:

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

Dies gibt an, dass wir ein [background script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens "background.js" sowie eine browser action (Button) haben, deren Icons im "icons"-Verzeichnis gespeichert sind.

Erstellen Sie als Nächstes das "icons"-Verzeichnis im "button"-Verzeichnis und speichern Sie die beiden unten gezeigten Icons darin:

**"page-16.png":**

!["16-Pixel-Icon eines linierten Blatts"](page-16.png)

**"page-32.png":**

!["32-Pixel-Icon eines linierten Blatts"](page-32.png)

> [!NOTE]
> Diese Icons stammen aus dem [bitsies!](https://www.iconfinder.com/iconsets/bitsies) Iconset, erstellt von Recep Kütük.

Wir haben zwei Icons, damit wir das größere auf hochauflösenden Bildschirmen verwenden können. Der Browser kümmert sich darum, das beste Icon für das aktuelle Display auszuwählen.

Erstellen Sie als Nächstes "background.js" im Stammverzeichnis der Erweiterung und geben Sie ihm den folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies lauscht auf das Klickereignis der browser action; wenn das Ereignis ausgelöst wird, wird die Funktion `openPage()` ausgeführt, die die angegebene Seite mit der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API öffnet.

An diesem Punkt sollte die komplette Erweiterung so aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und klicken Sie auf den Button:

![Der von der Erweiterung hinzugefügte Symbolleisten-Button](toolbar_button.png)

## Hinzufügen eines Popups

Versuchen wir, dem Button ein Popup hinzuzufügen. Ersetzen Sie manifest.json durch folgendes:

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

Wir haben zwei Änderungen gegenüber dem Original vorgenommen:

- Verweis auf "background.js" entfernt, da wir die Logik der Erweiterung nun im Script des Popups abwickeln (es ist Ihnen erlaubt, sowohl background.js als auch ein Popup zu haben, aber in diesem Fall benötigen wir es nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser mitteilt, dass diese browser action nun ein Popup anzeigen wird, wenn sie angeklickt wird, das Dokument dafür befindet sich unter "popup/choose_page.html".

Also müssen wir jetzt dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann eine Datei namens "choose_page.html" darin. Geben Sie ihr folgenden Inhalt:

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

Sie sehen, dass dies eine normale HTML-Seite mit drei {{htmlelement("div")}}-Elementen ist, von denen jedes den Namen einer Mozilla-Website enthält. Es enthält auch eine CSS-Datei und eine JavaScript-Datei, die wir als Nächstes hinzufügen.

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

In unserem JavaScript lauschen wir auf Klicks auf die Popup-Auswahlmöglichkeiten. Wir überprüfen zuerst, ob der Klick auf einer der Seiten-Auswahlmöglichkeiten gelandet ist; wenn nicht, tun wir nichts weiter. Wenn der Klick auf einer Seiten-Auswahlmöglichkeit gelandet ist, konstruieren wir eine URL daraus und öffnen einen neuen Tab, der die entsprechende Seite enthält. Beachten Sie, dass wir die WebExtension APIs in Popup-Scripts genauso verwenden können wie in Background-Scripts.

Die endgültige Struktur der Erweiterung sollte so aussehen:

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

Laden Sie nun [die Erweiterung erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), klicken Sie erneut auf den Button und versuchen Sie auf die Auswahlmöglichkeiten im Popup zu klicken:

![Der von der Erweiterung hinzugefügte Symbolleisten-Button mit einem Popup](toolbar_button_with_popup.png)

## Page Actions

[Page actions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sind ähnlich wie browser actions, außer dass sie für Aktionen gedacht sind, die nur für bestimmte Seiten relevant sind und nicht für den gesamten Browser.

Während browser actions immer angezeigt werden, werden page actions nur in Tabs angezeigt, in denen sie relevant sind. Page action Buttons werden in der URL-Leiste anstelle der Browser-Symbolleiste angezeigt.

## Mehr erfahren

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für browser actions:
  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für page actions:
  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
