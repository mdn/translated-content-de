---
title: Einen Button zur Symbolleiste hinzufügen
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

Symbolleisten-Buttons sind eine der wichtigsten UI-Komponenten, die Erweiterungen zur Verfügung stehen. Symbolleisten-Buttons befinden sich in der Haupt-Symbolleiste des Browsers und enthalten ein Symbol. Wenn der Benutzer auf das Symbol klickt, kann eines von zwei Dingen passieren:

- Wenn Sie ein Popup für das Symbol festgelegt haben, wird das Popup angezeigt. Popups sind temporäre Dialoge, die mittels HTML, CSS und JavaScript definiert werden.
- Wenn Sie kein Popup festgelegt haben, wird ein Klick-Ereignis generiert, das Sie in Ihrem Code abhören können, um daraufhin eine andere Aktion auszuführen.

Mit den WebExtension-APIs werden diese Art von Buttons als "browser actions" bezeichnet und wie folgt eingerichtet:

- Der Schlüssel `browser_action` im `manifest.json` wird verwendet, um den Button zu definieren.
- Die JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) wird genutzt, um Klicks abzuhören und den Button zu ändern oder Aktionen über Ihren Code auszuführen.

## Ein einfacher Button

In diesem Abschnitt erstellen wir eine Erweiterung, die einen Button zur Symbolleiste hinzufügt. Wenn der Benutzer auf den Button klickt, öffnen wir <https://developer.mozilla.org> in einem neuen Tab.

Erstellen Sie zuerst ein neues Verzeichnis namens "button" und legen Sie darin eine Datei namens "manifest.json" mit folgendem Inhalt an:

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

Dies gibt an, dass wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) mit dem Namen "background.js" haben werden und eine Browseraktion (Button), dessen Symbole im Verzeichnis "icons" gespeichert werden.

Erstellen Sie als Nächstes das Verzeichnis "icons" im Verzeichnis "buttons" und speichern Sie die beiden unten gezeigten Symbole darin:

**"page-16.png":**

!["16 Pixel-Symbol eines linierten Blattes Papier"](page-16.png)

**"page-32.png":**

!["32 Pixel-Symbol eines linierten Blattes Papier"](page-32.png)

> [!NOTE]
> Diese Symbole stammen aus dem "bitsies!" Iconset auf iconfinder.com, erstellt von Recep Kütük.

Wir haben zwei Symbole, sodass wir das größere in hochauflösenden Displays verwenden können. Der Browser kümmert sich darum, das beste Symbol für das aktuelle Display auszuwählen.

Erstellen Sie als Nächstes "background.js" im Root-Verzeichnis der Erweiterung und geben Sie ihm den folgenden Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dies hört auf das Klick-Ereignis der Browseraktion; wenn das Ereignis ausgelöst wird, wird die Funktion `openPage()` ausgeführt, die die angegebene Seite mithilfe der [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API öffnet.

Zu diesem Zeitpunkt sollte die vollständige Erweiterung wie folgt aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und klicken Sie auf den Button:

![Der durch die Erweiterung hinzugefügte Symbolleisten-Button](toolbar_button.png)

## Ein Popup hinzufügen

Lassen Sie uns versuchen, dem Button ein Popup hinzuzufügen. Ersetzen Sie die manifest.json mit folgender:

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

Wir haben zwei Änderungen vom Original vorgenommen:

- die Referenz zu "background.js" entfernt, da wir jetzt die Logik der Erweiterung im Skript des Popups behandeln (es ist erlaubt, sowohl background.js als auch ein Popup zu haben, nur brauchen wir es in diesem Fall nicht).
- `"default_popup": "popup/choose_page.html"` hinzugefügt, was dem Browser sagt, dass diese Browseraktion jetzt ein Popup anzeigen wird, wenn darauf geklickt wird. Das Dokument dafür befindet sich in "popup/choose_page.html".

Nun müssen wir dieses Popup erstellen. Erstellen Sie ein Verzeichnis namens "popup" und dann eine Datei namens "choose_page.html" darin. Geben Sie ihr folgenden Inhalt:

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

Sie sehen, dass dies eine normale HTML-Seite ist, die drei {{htmlelement("div")}} Elemente enthält, jeweils mit dem Namen einer Mozilla-Seite. Es beinhaltet auch eine CSS- und eine JavaScript-Datei, die wir als Nächstes hinzufügen werden.

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

In unserem JavaScript horchen wir auf Klicks auf die Popup-Auswahlen. Wir prüfen zuerst, ob der Klick auf eine der Seiten-Auswahlen gelandet ist; wenn nicht, machen wir nichts weiter. Wenn der Klick auf einer Seiten-Auswahl gelandet ist, konstruieren wir eine URL daraus und öffnen einen neuen Tab mit der entsprechenden Seite. Beachten Sie, dass wir WebExtension-APIs in Popup-Skripten genau wie in Hintergrund-Skripten verwenden können.

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

Laden Sie nun [die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), klicken Sie erneut auf den Button und probieren Sie die Auswahlen im Popup aus:

![Der durch die Erweiterung hinzugefügte Symbolleisten-Button mit einem Popup](toolbar_button_with_popup.png)

## Page actions

[Page actions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) ähneln Browseraktionen, außer dass sie für Aktionen gedacht sind, die nur für bestimmte Seiten relevant sind, nicht für den gesamten Browser.

Während Browseraktionen immer angezeigt werden, werden Page Actions nur in Tabs angezeigt, in denen sie relevant sind. Page Action-Buttons werden in der URL-Leiste angezeigt, anstatt in der Browser-Symbolleiste.

## Mehr erfahren

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel
- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Beispiele für Browseraktionen:
  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel
- [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Beispiele für Page Actions:
  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
