---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{AddonSidebar}}

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgegangen sind, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel erstellen Sie eine etwas komplexere Erweiterung, die einige weitere APIs demonstriert.

Die Erweiterung fügt der Firefox-Symbolleiste einen neuen Button hinzu. Wenn der Benutzer auf den Button klickt, wird ein Popup angezeigt, das es ihm ermöglicht, ein Tier auszuwählen. Sobald ein Tier ausgewählt wird, ersetzen wir den Inhalt der aktuellen Seite durch ein Bild des ausgewählten Tieres.

Um dies zu implementieren, werden wir:

- **eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, die ein Button ist, der an die Firefox-Symbolleiste angehängt ist**.
  Für den Button liefern wir:

  - ein Icon, genannt "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn der Button gedrückt wird. Das Popup wird HTML, CSS und JavaScript enthalten.

- **ein Icon für die Erweiterung definieren**, genannt "beasts-48.png". Dieses wird im Add-ons-Manager angezeigt.
- **ein Inhaltsskript namens "beastify.js" schreiben, das in Webseiten eingefügt wird**.
  Dies ist der Code, der die Seiten tatsächlich modifiziert.
- **einige Bilder der Tiere paketieren, um Bilder auf der Webseite zu ersetzen**.
  Wir machen diese Bilder zu "web accessible resources", damit die Webseite auf sie verweisen kann.

Sie könnten die Gesamtstruktur der Erweiterung so visualisieren:

![Die Datei manifest.json enthält Icons, Browser-Aktionen einschließlich Popups und web accessible resources. Die Choose-Beast-JavaScript-Popup-Ressource ruft im Beastify-Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, aber sie zeigt viele der grundlegenden Konzepte der WebExtensions-API:

- Hinzufügen eines Buttons zur Symbolleiste
- Definieren eines Popup-Panels mit HTML, CSS und JavaScript
- Einfügen von Inhaltsskripten in Webseiten
- Kommunikation zwischen Inhaltsskripten und dem Rest der Erweiterung
- Paketieren von Ressourcen mit Ihrer Erweiterung, die von Webseiten genutzt werden können

Den [vollständigen Quellcode für die Erweiterung finden Sie auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Die Erweiterung schreiben

Erstellen Sie ein neues Verzeichnis und wechseln Sie in dieses:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine neue Datei namens "manifest.json" und geben Sie ihr folgenden Inhalt:

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
```

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie bieten nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Damit können Sie ein Icon für die Erweiterung angeben, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die die Erweiterung benötigt. Hier fragen wir nur nach der [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert den Toolbar-Button. Wir liefern hier drei Informationen:

  - `default_icon` ist obligatorisch und verweist auf das Icon für den Button
  - `default_title` ist optional und wird in einem Tooltip angezeigt
  - `default_popup` wird verwendet, wenn ein Popup angezeigt werden soll, wenn der Benutzer auf den Button klickt. Wir wollen ein Popup, also haben wir diesen Schlüssel hinzugefügt und auf eine HTML-Datei verwiesen, die mit der Erweiterung enthalten ist.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die wir für Webseiten zugänglich machen wollen. Da die Erweiterung den Inhalt der Seite mit Bildern ersetzt, die wir mit der Erweiterung paketiert haben, müssen wir diese Bilder der Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zur manifest.json sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses wird neben dem Eintrag der Erweiterung im Add-ons-Manager angezeigt (Sie können diesen öffnen, indem Sie die URL "about:addons" besuchen). Unser manifest.json hat versprochen, dass wir ein Icon für die Symbolleiste unter "icons/beasts-48.png" haben werden.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Icon namens "beasts-48.png". Sie können [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden, das aus dem [Aha-Soft's Free Retina Iconset](http://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und unter den Bestimmungen seiner Lizenz verwendet wird.

Wenn Sie sich entscheiden, Ihr eigenes Icon bereitzustellen, sollte es 48x48 Pixel groß sein. Sie können auch ein 96x96 Pixel großes Icon bereitstellen, für hochauflösende Displays, und wenn Sie dies tun, wird es als `96` Eigenschaft des `icons` Objekts in manifest.json spezifiziert:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Der Toolbar-Button

Der Toolbar-Button benötigt ebenfalls ein Icon, und unsere manifest.json hat versprochen, dass wir ein Icon für die Symbolleiste unter "icons/beasts-32.png" haben werden.

Speichern Sie ein Icon mit dem Namen "beasts-32.png" im Verzeichnis "icons". Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png) verwenden, das aus dem [IconBeast Lite Icon Set](http://www.iconbeast.com/free/) stammt und unter den Bestimmungen seiner [Lizenz](http://www.iconbeast.com/faq/) verwendet wird.

Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf den Button klickt. Wenn Sie ein Popup bereitstellen, wird das Klick-Ereignis nicht gesendet, sondern das Popup geöffnet. Wir möchten ein Popup, also erstellen wir das als nächstes.

### Das Popup

Die Funktion des Popups besteht darin, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" im Stammverzeichnis der Erweiterung. Hier bewahren wir den Code für das Popup auf. Das Popup besteht aus drei Dateien:

- **`choose_beast.html`** definiert den Inhalt des Panels
- **`choose_beast.css`** gestaltet den Inhalt
- **`choose_beast.js`** bearbeitet die Auswahl des Benutzers, indem es ein Inhaltskript im aktiven Tab ausführt

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht folgendermaßen aus:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <button>Frog</button>
      <button>Turtle</button>
      <button>Snake</button>
      <button type="reset">Reset</button>
    </div>
    <div id="error-content" class="hidden">
      <p>Can't beastify this web page.</p>
      <p>Try a different page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

Wir haben ein [`<div>`](/de/docs/Web/HTML/Element/div) Element mit der ID `"popup-content"`, das einen Button für jede Tierauswahl und einen Zurücksetzen-Button enthält. Wir haben ein weiteres `<div>` mit der ID `"error-content"` und einer Klasse `"hidden"`. Dies verwenden wir, falls es ein Problem bei der Initialisierung des Popups gibt.

Beachten Sie, dass wir die CSS- und JS-Dateien in dieser Datei einbinden, genau wie auf einer Webseite.

#### choose_beast.css

Das CSS legt die Größe des Popups fest, stellt sicher, dass die drei Auswahlmöglichkeiten den Raum ausfüllen, und gibt ihnen ein grundlegendes Styling. Es verbirgt auch Elemente mit `class="hidden"`: Das bedeutet, dass unser `<div id="error-content"...` Element standardmäßig ausgeblendet wird.

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

button {
  border: none;
  width: 100%;
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #e5f2f2;
}

button:hover {
  background-color: #cff2f2;
}

button[type="reset"] {
  background-color: #fbfbc9;
}

button[type="reset"]:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

Hier ist das JavaScript für das Popup:

```js
/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * Insert the page-hiding CSS into the active tab,
     * then get the beast URL and
     * send a "beastify" message to the content script in the active tab.
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        const url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * Get the active tab,
     * then call "beastify()" or "reset()" as appropriate.
     */
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      // Ignore when click is not on a button within <div id="popup-content">.
      return;
    }
    if (e.target.type === "reset") {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    } else {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

Der Startpunkt hier ist Zeile 99. Das Popup-Skript führt ein Inhaltsskript im aktiven Tab aus, sobald das Popup geladen ist, mithilfe der [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Wenn das Ausführen des Inhaltsskripts erfolgreich ist, bleibt das Inhaltsskript in der Seite geladen, bis der Tab geschlossen oder der Benutzer zu einer anderen Seite navigiert.

Ein häufiger Grund, warum der `browser.tabs.executeScript()`-Aufruf fehlschlagen könnte, ist, dass Sie Inhaltsskripts nicht in allen Seiten ausführen können. Zum Beispiel, Sie können sie nicht in privilegierten Browser-Seiten wie about:debugging oder auf Seiten in der [addons.mozilla.org](https://addons.mozilla.org/) Domain ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">` Element ausblenden, das `<div id="error-content"...` Element anzeigen und einen Fehler in die [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) protokollieren.

Wenn das Ausführen des Inhaltsskripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dies wartet auf Klicks im Popup.

- Wenn der Klick nicht auf einen Button im Popup war, ignorieren wir ihn und machen nichts.
- Wenn der Klick auf einen Button mit `type="reset"` war, rufen wir `reset()` auf.
- Wenn der Klick auf irgendeinen anderen Button war (d. h. die Tier-Buttons), dann rufen wir `beastify()` auf.

Die Funktion `beastify()` macht drei Dinge:

- Sie ordnet den geklickten Button einer URL zu, die auf ein Bild eines bestimmten Tieres zeigt.
- Verbirgt den gesamten Inhalt der Seite, indem etwas CSS eingefügt wird, mit Hilfe der [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API.
- Sendet eine "beastify"-Nachricht an das Inhaltsskript, mit der Bitte, die Seite zu verändern, und übergibt die URL zum Tierbild.

Die Funktion `reset()` macht im Wesentlichen ein Beastify rückgängig:

- Entfernt das hinzugefügte CSS mithilfe der [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API.
- Sendet eine "reset"-Nachricht an das Inhaltsskript und bittet es, die Seite zurückzusetzen.

### Das Inhaltsskript

Erstellen Sie ein neues Verzeichnis namens "content_scripts" im Stammverzeichnis der Erweiterung und erstellen Sie darin eine neue Datei namens "beastify.js" mit folgendem Inhalt:

```js
(() => {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    const beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * Remove every beast from the page.
   */
  function removeExistingBeasts() {
    const existingBeasts = document.querySelectorAll(".beastify-image");
    for (const beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Listen for messages from the background script.
   * Call "insertBeast()" or "removeExistingBeasts()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
```

Das erste, was das Inhaltsskript tut, ist zu prüfen, ob eine globale Variable `window.hasRun` gesetzt ist: Wenn ja, kehrt das Skript frühzeitig zurück, andernfalls setzt es `window.hasRun` und fährt fort. Der Grund dafür ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhaltsskript im aktiven Tab ausführt, sodass wir mehrere Instanzen des Skripts in einem einzigen Tab ausführen könnten. Wenn dies passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas tut.

Der Startpunkt danach ist in Zeile 40, wo das Inhaltsskript auf Nachrichten vom Popup hört, mit der [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API. Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Arten von Nachrichten senden kann: "beastify" und "reset".

- wenn die Nachricht "beastify" ist, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild zeigt. Wir entfernen alle Tiere, die durch vorherige "beastify"-Aufrufe hinzugefügt wurden, dann konstruieren und fügen wir ein [`<img>`](/de/docs/Web/HTML/Element/img) Element hinzu, dessen `src` Attribut auf die Tier-URL gesetzt ist.
- wenn die Nachricht "reset" ist, entfernen wir einfach alle Tiere, die möglicherweise hinzugefügt wurden.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einfügen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in diesem Verzeichnis mit den entsprechenden Namen hinzu. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragd-Baumschlange mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Es ausprobieren

Überprüfen Sie zunächst doppelt, ob Sie die richtigen Dateien an den richtigen Stellen haben:

```plain
beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Load Temporary Add-on" und wählen Sie Ihre **manifest.json** Datei aus. Dann sollte das Icon der Erweiterung in der Firefox-Symbolleiste erscheinen:

![Das Beastify-Icon in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Icon, wählen Sie ein Tier aus und beobachten Sie, wie sich die Webseite ändert:

![Eine Seite mit einem Schildkrötenbild ersetzt](beastify_page.png)

## Entwicklung über die Befehlszeile

Sie können den vorübergehenden Installationsschritt automatisieren, indem Sie das [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool verwenden. Probieren Sie dies aus:

```bash
cd beastify
web-ext run
```

## Was kommt als Nächstes?

Nachdem Sie nun eine fortgeschrittenere WebExtension für Firefox erstellt haben:

- [lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
