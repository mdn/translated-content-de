---
title: Hinzufügen eines Buttons zur Werkzeugleiste
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Werkzeugleisten-Schaltflächen sind eine der Hauptkomponenten der Benutzeroberfläche, die Erweiterungen zur Verfügung stehen. Diese Schaltflächen befinden sich in der Haupt-Symbolleiste des Browsers und enthalten ein Symbol. Wenn der Benutzer auf das Symbol klickt, kann eines von zwei Dingen passieren:

- Wenn Sie ein Popup für das Symbol angegeben haben, wird das Popup angezeigt. Popups sind temporäre Dialoge, die mit HTML, CSS und JavaScript angegeben werden.
- Wenn Sie kein Popup angegeben haben, wird ein Klickereignis generiert, das Sie in Ihrem Code abhören können, um eine andere Art von Aktion als Reaktion auszuführen.

Mit WebExtension-APIs werden diese Arten von Schaltflächen "Browseraktionen" genannt und folgendermaßen eingerichtet:

- Der `manifest.json`-Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) wird verwendet, um die Schaltfläche zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird verwendet, um Klicks zu überwachen und die Schaltfläche zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Werkzeugleiste hinzufügt. Wenn der Benutzer auf den Button klickt, öffnen wir <https://developer.mozilla.org> in einem neuen Tab.

Erstellen Sie zunächst ein neues Verzeichnis namens "button" und erstellen Sie darin eine Datei namens "manifest.json" mit folgendem Inhalt:

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

Dies gibt an, dass wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens "background.js" und eine Browseraktion (Schaltfläche) haben werden, deren Symbole im Verzeichnis "icons" gespeichert werden.

Erstellen Sie als Nächstes das Verzeichnis "icons" im Verzeichnis "buttons" und speichern Sie die unten gezeigten zwei Symbole darin:

**"page-16.png":**

![16 Pixel großes Symbol eines linierten Blatts Papier](page-16.png)

**"page-32.png":**

![32 Pixel großes Symbol eines linierten Blatts Papier](page-32.png)

> [!NOTE]
> Diese Symbole stammen aus dem [bitsies!](https://www.iconfinder.com/iconsets/bitsies) Ikonensatz, erstellt von Recep Kütük.

Wir haben zwei Symbole, damit wir das größere auf hochauflösenden Bildschirmen verwenden können. Der Browser wählt automatisch das am besten geeignete Symbol für das aktuelle Display aus.

Erstellen Sie nun "background.js" im Hauptverzeichnis der Erweiterung und geben Sie ihm den folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies lauscht auf das Klickereignis der Browseraktion; wenn das Ereignis ausgelöst wird, wird die Funktion `openPage()` ausgeführt, die die angegebene Seite mit der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API öffnet.

Zu diesem Zeitpunkt sollte die vollständige Erweiterung wie folgt aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Installieren Sie nun die Erweiterung, und klicken Sie auf den Button:

![Der von der Erweiterung hinzugefügte Toolbar-Button](toolbar_button.png)

## Hinzufügen eines Popups

Versuchen wir, dem Button ein Popup hinzuzufügen. Ersetzen Sie `manifest.json` durch Folgendes:

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

- den Verweis auf "background.js" entfernt, da wir die Logik der Erweiterung jetzt im Skript des Popups behandeln werden (es ist erlaubt, sowohl `background.js` als auch ein Popup zu haben, aber in diesem Fall benötigen wir es nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser mitteilt, dass diese Browseraktion nun ein Popup anzeigt, wenn darauf geklickt wird, und dass sich das Dokument dafür unter "popup/choose_page.html" befindet.

Jetzt müssen wir dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann eine Datei namens "choose_page.html" darin. Geben Sie ihr den folgenden Inhalt:

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

Sie können sehen, dass dies eine normale HTML-Seite ist, die drei {{htmlelement("div")}} Elemente enthält, jedes mit dem Namen einer Mozilla-Website darin. Es enthält auch eine CSS-Datei und eine JavaScript-Datei, die wir als nächstes hinzufügen werden.

Erstellen Sie eine Datei namens "choose_page.css" im Verzeichnis "popup" und geben Sie ihr diesen Inhalt:

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

Erstellen Sie als Nächstes eine "choose_page.js" Datei im Verzeichnis "popup" und geben Sie ihr diesen Inhalt:

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

In unserem JavaScript lauschen wir auf Klicks auf die Popup-Auswahl. Wir prüfen zuerst, ob der Klick auf einem der Seite-Auswahl gelandet ist; wenn nicht, unternehmen wir nichts weiter. Wenn der Klick jedoch auf einer Seite-Auswahl gelandet ist, konstruieren wir eine URL daraus und öffnen einen neuen Tab mit der entsprechenden Seite. Beachten Sie, dass wir WebExtension-APIs in Pop-up-Skripts genauso verwenden können wie in Hintergrundskripts.

Die endgültige Struktur der Erweiterung sollte wie folgt aussehen:

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

Laden Sie nun die Erweiterung erneut und klicken Sie erneut auf den Button, und versuchen Sie, auf die Optionen im Popup zu klicken:

![Die von der Erweiterung hinzugefügte Toolbar-Schaltfläche mit einem Popup](toolbar_button_with_popup.png)

## Seitenaktionen

[Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sind genauso wie Browseraktionen, mit dem Unterschied, dass sie für Aktionen gedacht sind, die nur für bestimmte Seiten relevant sind, anstatt für den gesamten Browser.

Während Browseraktionen immer angezeigt werden, werden Seitenaktionen nur in Tabs angezeigt, in denen sie relevant sind. Schaltflächen für Seitenaktionen werden in der URL-Leiste angezeigt, anstelle der Browser-Werkzeugleiste.

## Weitere Informationen

- Manifest-Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für Browseraktionen:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- Manifest-Schlüssel [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für Seitenaktionen:
  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
