---
title: Einen Button zur Toolbar hinzufügen
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

Toolbar-Buttons sind eine der Hauptkomponenten der Benutzeroberfläche, die Erweiterungen zur Verfügung stehen. Toolbar-Buttons befinden sich in der Haupt-Browser-Toolbar und enthalten ein Symbol. Wenn der Benutzer auf das Symbol klickt, passiert eines von zwei Dingen:

- Wenn Sie ein Popup für das Symbol angegeben haben, wird das Popup angezeigt. Popups sind temporäre Dialoge, die mit HTML, CSS und JavaScript angegeben werden.
- Wenn Sie kein Popup angegeben haben, wird ein Klickereignis generiert, das Sie in Ihrem Code abhören können, um eine andere Art von Aktion als Reaktion auszuführen.

Mit den WebExtension-APIs werden diese Arten von Schaltflächen als "Browser-Aktionen" bezeichnet und wie folgt eingerichtet:

- Der `manifest.json`-Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) wird verwendet, um den Button zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird verwendet, um auf Klicks zu lauschen und den Button zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Toolbar hinzufügt. Wenn der Benutzer auf den Button klickt, öffnen wir <https://developer.mozilla.org> in einem neuen Tab.

Erstellen Sie zuerst ein neues Verzeichnis "button" und erstellen Sie eine Datei namens "manifest.json" darin mit folgendem Inhalt:

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

Dies gibt an, dass wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens "background.js" haben werden und eine Browser-Aktion (Button), deren Symbole im "icons"-Verzeichnis abgelegt werden.

Erstellen Sie als nächstes das "icons"-Verzeichnis innerhalb des "buttons"-Verzeichnisses und speichern Sie die beiden unten gezeigten Symbole darin:

**"page-16.png":**

!["16 Pixel Symbol eines linierten Blatts"]("page-16.png")

**"page-32.png":**

!["32 Pixel Symbol eines linierten Blatts"]("page-32.png")

> [!NOTE]
> Diese Symbole stammen aus dem [bitsies!](https://www.iconfinder.com/iconsets/bitsies)-Iconset, erstellt von Recep Kütük.

Wir haben zwei Symbole, damit wir das größere auf hochdichten Bildschirmen verwenden können. Der Browser kümmert sich darum, das beste Symbol für das aktuelle Display auszuwählen.

Erstellen Sie als nächstes "background.js" im Stammverzeichnis der Erweiterung und geben Sie ihm folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies lauscht auf das Klickereignis der Browser-Aktion; wenn das Ereignis ausgelöst wird, wird die `openPage()`-Funktion ausgeführt, die die angegebene Seite mit der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-API öffnet.

An diesem Punkt sollte die vollständige Erweiterung so aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Nun [installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und klicken Sie auf den Button:

![Der durch die Erweiterung hinzugefügte Toolbar-Button](toolbar_button.png)

## Ein Popup hinzufügen

Versuchen wir, ein Popup zum Button hinzuzufügen. Ersetzen Sie `manifest.json` durch folgendes:

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

- die Referenz zu "background.js" entfernt, da wir nun die Logik der Erweiterung im Script des Popups behandeln (man darf sowohl ein `background.js` als auch ein Popup haben, aber in diesem Fall brauchen wir es nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser mitteilt, dass diese Browser-Aktion jetzt ein Popup anzeigt, wenn darauf geklickt wird, dessen Dokument unter "popup/choose_page.html" zu finden ist.

Nun müssen wir dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann darin eine Datei namens "choose_page.html". Geben Sie ihr folgenden Inhalt:

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

Sie sehen, dass dies eine normale HTML-Seite ist, die drei {{htmlelement("div")}}-Elemente enthält, jeweils mit dem Namen einer Mozilla-Seite darin. Es enthält auch eine CSS-Datei und eine JavaScript-Datei, die wir als nächstes hinzufügen werden.

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

Dies ist nur ein wenig Styling für unser Popup.

Erstellen Sie als nächstes eine "choose_page.js"-Datei im "popup"-Verzeichnis und geben Sie ihr diesen Inhalt:

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

In unserem JavaScript lauschen wir auf Klicks auf die Popup-Optionen. Zuerst prüfen wir, ob der Klick auf einer der Seitenoptionen gelandet ist; wenn nicht, machen wir nichts weiter. Wenn der Klick auf einer Seitenoption gelandet ist, konstruieren wir eine URL daraus und öffnen einen neuen Tab mit der entsprechenden Seite. Beachten Sie, dass wir WebExtension-APIs in Popup-Skripten genauso verwenden können wie in Hintergrundskripten.

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

Nun [laden Sie die Erweiterung erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), klicken Sie erneut auf den Button und versuchen Sie, auf die Optionen im Popup zu klicken:

![Der durch die Erweiterung hinzugefügte Toolbar-Button mit einem Popup](toolbar_button_with_popup.png)

## Page-Actions

[Page-Actions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sind ähnlich wie Browser-Aktionen, abgesehen davon, dass sie für Aktionen genutzt werden, die nur für bestimmte Seiten relevant sind, nicht für den Browser als Ganzes.

Während Browser-Aktionen immer angezeigt werden, werden Page-Actions nur in Tabs angezeigt, in denen sie relevant sind. Page-Action-Buttons werden in der URL-Leiste angezeigt, anstatt in der Browser-Toolbar.

## Mehr erfahren

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für Browser-Aktionen:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für Page-Actions:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
