---
title: Eine Schaltfläche zur Symbolleiste hinzufügen
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Schaltflächen in der Symbolleiste gehören zu den wichtigsten UI-Komponenten für Erweiterungen. Sie befinden sich in der Hauptsymbolleiste des Browsers und enthalten ein Symbol. Wenn Benutzer auf das Symbol klicken, geschieht eines von zwei Dingen:

- Wenn Sie für das Symbol ein Popup festgelegt haben, wird es angezeigt. Popups sind temporäre Dialoge, die mit HTML, CSS und JavaScript erstellt werden.
- Wenn Sie kein Popup festgelegt haben, wird ein Klickereignis ausgelöst. Sie können in Ihrem Code darauf reagieren und eine andere Aktion ausführen.

In den WebExtension-APIs heißen solche Schaltflächen „browser actions“. Sie werden wie folgt eingerichtet:

- Mit dem Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in manifest.json wird die Schaltfläche definiert.
- Mit der JavaScript-API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) können Sie auf Klicks reagieren, die Schaltfläche ändern oder andere Aktionen ausführen.

## Eine einfache Schaltfläche

In diesem Abschnitt erstellen wir eine Erweiterung, die der Symbolleiste eine Schaltfläche hinzufügt. Wenn Benutzer darauf klicken, öffnen wir <https://developer.mozilla.org> in einem neuen Tab.

Erstellen Sie zunächst ein neues Verzeichnis namens „button“ und darin eine Datei namens „manifest.json“ mit folgendem Inhalt:

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

Damit legen wir ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens „background.js“ und eine browser action (Schaltfläche) fest, deren Symbole sich im Verzeichnis „icons“ befinden.

Erstellen Sie als Nächstes im Verzeichnis „buttons“ das Verzeichnis „icons“ und speichern Sie darin die beiden folgenden Symbole:

**„page-16.png“:**

![16 Pixel großes Symbol eines linierten Blatts Papier](page-16.png)

**„page-32.png“:**

![32 Pixel großes Symbol eines linierten Blatts Papier](page-32.png)

> [!NOTE]
> Diese Symbole stammen aus dem von Recep Kütük erstellten Iconset „bitsies!“ auf iconfinder.com.

Wir verwenden zwei Symbole, damit auf Displays mit hoher Pixeldichte das größere angezeigt werden kann. Der Browser wählt das für das jeweilige Display am besten geeignete Symbol aus.

Erstellen Sie als Nächstes im Stammverzeichnis der Erweiterung die Datei „background.js“ mit folgendem Inhalt:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Dieser Code reagiert auf das Klickereignis der browser action. Wenn das Ereignis ausgelöst wird, wird die Funktion `openPage()` ausgeführt. Sie öffnet die angegebene Seite mithilfe der API [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs).

Die vollständige Erweiterung sollte nun so aussehen:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

[Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Klicken Sie in der Symbolleiste auf die Schaltfläche „Erweiterungen“ (Puzzleteil-Symbol) und suchen Sie die Erweiterung. Öffnen Sie das Menü mit den drei Punkten der Erweiterung und wählen Sie **An Symbolleiste anheften**. Klicken Sie nun auf die Schaltfläche in der Symbolleiste:

![Die von der Erweiterung hinzugefügte Schaltfläche in der Symbolleiste, hervorgehoben](toolbar_button.png)

## Ein Popup hinzufügen

Fügen wir der Schaltfläche nun ein Popup hinzu. Ersetzen Sie den Inhalt von manifest.json durch Folgendes:

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

Wir haben gegenüber der ursprünglichen Version zwei Änderungen vorgenommen:

- Wir haben den Verweis auf „background.js“ entfernt, weil wir die Logik der Erweiterung nun im Skript des Popups verarbeiten. Ein Hintergrundskript und ein Popup können auch gleichzeitig verwendet werden; in diesem Fall benötigen wir das Hintergrundskript jedoch nicht.
- Wir haben `"default_popup": "popup/choose_page.html"` hinzugefügt. Damit teilen wir dem Browser mit, dass diese browser action beim Anklicken ein Popup anzeigen soll, dessen Dokument sich unter „popup/choose_page.html“ befindet.

Nun müssen wir das Popup erstellen. Erstellen Sie ein Verzeichnis namens „popup“ und darin eine Datei namens „choose_page.html“ mit folgendem Inhalt:

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

Wie Sie sehen, handelt es sich um eine normale HTML-Seite mit drei {{htmlelement("div")}}-Elementen, die jeweils den Namen einer Mozilla-Website enthalten. Sie bindet außerdem eine CSS-Datei und eine JavaScript-Datei ein, die wir als Nächstes hinzufügen.

Erstellen Sie im Verzeichnis „popup“ eine Datei namens „choose_page.css“ mit folgendem Inhalt:

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

Damit gestalten wir das Popup.

Erstellen Sie als Nächstes im Verzeichnis „popup“ eine Datei namens „choose_page.js“ mit folgendem Inhalt:

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

In unserem JavaScript-Code reagieren wir auf Klicks auf die Auswahlmöglichkeiten im Popup. Zunächst prüfen wir, ob auf eine der auswählbaren Seiten geklickt wurde. Falls nicht, geschieht nichts weiter. Andernfalls erstellen wir daraus eine URL und öffnen die entsprechende Seite in einem neuen Tab. Beachten Sie, dass wir WebExtension-APIs in Popup-Skripten genauso verwenden können wie in Hintergrundskripten.

Die endgültige Verzeichnisstruktur der Erweiterung sollte so aussehen:

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

[Laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension) und klicken Sie auf die Schaltfläche, um das Popup zu öffnen:

![Die von der Erweiterung hinzugefügte Schaltfläche in der Symbolleiste mit geöffnetem Popup, hervorgehoben](toolbar_button_with_popup.png)

## Page actions

[Page actions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) funktionieren ähnlich wie browser actions. Sie sind jedoch für Aktionen vorgesehen, die nur für bestimmte Seiten relevant sind, statt für den Browser insgesamt.

Während browser actions immer angezeigt werden, erscheinen page actions nur in Tabs, in denen sie relevant sind. Schaltflächen für page actions werden in der URL-Leiste statt in der Browser-Symbolleiste angezeigt.

## Weitere Informationen

- Manifest-Schlüssel [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- API [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)
- Beispiele für browser actions:
  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- Manifest-Schlüssel [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- API [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
- Beispiele für page actions:
  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
