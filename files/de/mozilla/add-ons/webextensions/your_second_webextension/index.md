---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{AddonSidebar}}

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgearbeitet haben, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel erstellen Sie eine etwas komplexere Erweiterung, die einige weitere der APIs demonstriert.

Die Erweiterung fügt der Firefox-Symbolleiste einen neuen Button hinzu. Wenn der Benutzer auf den Button klickt, wird ein Popup angezeigt, das es ihm ermöglicht, ein Tier auszuwählen. Sobald das Tier ausgewählt wurde, ersetzen wir den Inhalt der aktuellen Seite mit einem Bild des ausgewählten Tieres.

Um dies umzusetzen, werden wir:

- **eine [browser action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, was ein Button ist, der an die Firefox-Symbolleiste angehängt ist**.
  Für den Button werden wir bereitstellen:

  - ein Icon, genannt "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn der Button gedrückt wird. Das Popup wird HTML, CSS und JavaScript enthalten.

- **ein Icon für die Erweiterung definieren**, genannt "beasts-48.png". Dieses wird im Add-ons-Manager angezeigt.
- **ein Inhalts-Skript, "beastify.js", das in Webseiten injiziert wird, schreiben**.
  Dies ist der Code, der die Seiten tatsächlich verändert.
- **einige Bilder der Tiere bereitstellen, um Bilder auf der Webseite zu ersetzen**.
  Wir machen die Bilder zu "web accessible resources", damit die Webseite sie referenzieren kann.

Sie könnten die gesamte Struktur der Erweiterung wie folgt visualisieren:

![Die manifest.json-Datei enthält Icons, browser actions einschließlich Popups, und web zugängliche Ressourcen. Die JavaScript Popup-Ressource zur Auswahl des Tieres ruft das beastify-Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, zeigt aber viele der grundlegenden Konzepte der WebExtensions API:

- Hinzufügen eines Buttons zur Symbolleiste
- Definieren eines Popup-Panels unter Verwendung von HTML, CSS und JavaScript
- Injektion von Inhalts-Skripten in Webseiten
- Kommunikation zwischen Inhalts-Skripten und dem Rest der Erweiterung
- Verpackung von Ressourcen mit Ihrer Erweiterung, die von Webseiten genutzt werden können

Sie können den [vollständigen Quellcode der Erweiterung auf GitHub finden](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Schreiben der Erweiterung

Erstellen Sie ein neues Verzeichnis und navigieren Sie zu diesem:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine neue Datei namens "manifest.json" und geben Sie ihr den folgenden Inhalt:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie liefern nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es ermöglicht das Angeben eines Icons für die Erweiterung, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. Wir fragen hier nur nach der [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert den Toolbar-Button. Wir liefern drei Informationen:

  - `default_icon` ist obligatorisch und verweist auf das Icon für den Button
  - `default_title` ist optional und wird in einem Tooltip angezeigt
  - `default_popup` wird verwendet, wenn Sie ein Popup anzeigen möchten, wenn der Benutzer den Button klickt. Das tun wir, also haben wir diesen Schlüssel eingeschlossen und ihn auf eine HTML-Datei verwiesen, die mit der Erweiterung enthalten ist.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die wir für Webseiten zugänglich machen möchten. Da die Erweiterung den Inhalt der Seite mit Bildern ersetzt, die wir mit der Erweiterung verpackt haben, müssen wir diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zur manifest.json sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses wird neben der Auflistung der Erweiterung im Add-ons-Manager angezeigt (Sie können diesen öffnen, indem Sie die URL "about:addons" besuchen). Unsere manifest.json versprach, dass wir ein Icon für die Toolbar bei "icons/beasts-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" und speichern Sie ein Icon dort namens "beasts-48.png". Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden, das aus dem [Aha-Soft's Free Retina iconset](http://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und unter den Bedingungen seiner Lizenz verwendet wird.

Wenn Sie Ihr eigenes Icon bereitstellen möchten, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Icon für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als `96` Eigenschaft des `icons` Objekts in der manifest.json spezifiziert:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Der Toolbar-Button

Der Toolbar-Button braucht auch ein Icon, und unsere manifest.json versprach, dass wir ein Icon für die Toolbar bei "icons/beasts-32.png" haben würden.

Speichern Sie ein Icon namens "beasts-32.png" im "icons"-Verzeichnis. Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png) verwenden, das aus dem [IconBeast Lite icon set](http://www.iconbeast.com/free/) stammt und unter den Bedingungen seiner [Lizenz](http://www.iconbeast.com/faq/) verwendet wird.

Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer den Button klickt. Wenn Sie ein Popup bereitstellen, wird das Klick-Ereignis nicht gesendet, sondern stattdessen das Popup geöffnet. Wir wollen ein Popup, also erstellen wir das als nächstes.

### Das Popup

Die Funktion des Popups ist es, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" unter dem Erweiterungsverzeichnis. Hier halten wir den Code für das Popup. Das Popup wird aus drei Dateien bestehen:

- **`choose_beast.html`** definiert den Inhalt des Panels
- **`choose_beast.css`** stylt den Inhalt
- **`choose_beast.js`** verarbeitet die Auswahl des Benutzers, indem es ein Inhalts-Skript im aktiven Tab ausführt

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht so aus:

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

Wir haben ein [`<div>`](/de/docs/Web/HTML/Element/div)-Element mit einer ID von `"popup-content"`, das einen Button für jede Tierauswahl und einen Zurücksetzen-Button enthält. Wir haben ein weiteres `<div>` mit einer ID von `"error-content"` und einer Klasse `"hidden"`. Das werden wir verwenden, falls es ein Problem bei der Initialisierung des Popups gibt.

Beachten Sie, dass wir die CSS- und JS-Dateien aus dieser Datei einbinden, genau wie bei einer Webseite.

#### choose_beast.css

Das CSS bestimmt die Größe des Popups, stellt sicher, dass die drei Optionen den Platz ausfüllen und gibt ihnen einige grundlegende Stile. Es verbirgt auch Elemente mit `class="hidden"`: das bedeutet, dass unser `<div id="error-content"...`-Element standardmäßig ausgeblendet wird.

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

Der Ausgangspunkt hier ist Zeile 99. Das Popup-Skript führt ein Inhalts-Skript im aktiven Tab aus, sobald das Popup geladen ist, unter Verwendung der [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, bleibt das Inhalts-Skript in der Seite geladen, bis der Tab geschlossen wird oder der Benutzer zu einer anderen Seite navigiert.

Ein häufiger Grund, warum der Aufruf von `browser.tabs.executeScript()` fehlschlagen könnte, ist, dass Sie keine Inhalts-Skripte auf allen Seiten ausführen können. Zum Beispiel können Sie diese nicht in privilegierten Browser-Seiten wie about:debugging und auf Seiten in der [addons.mozilla.org](https://addons.mozilla.org/) Domäne ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">` Element ausblenden, das `<div id="error-content"...`-Element anzeigen und einen Fehler auf der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) protokollieren.

Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dies hört auf Klicks auf das Popup.

- Wenn der Klick nicht auf einem Button im Popup war, ignorieren wir ihn und tun nichts.
- Wenn der Klick auf einem Button mit `type="reset"` war, rufen wir `reset()` auf.
- Wenn der Klick auf einem anderen Button (d.h. den Tiere-Buttons) war, rufen wir `beastify()` auf.

Die Funktion `beastify()` macht drei Dinge:

- mappt den geklickten Button auf eine URL, die auf ein Bild eines bestimmten Tieres verweist
- verbirgt den gesamten Inhalt der Seite, indem CSS injiziert wird, unter Verwendung der [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API
- sendet eine "beastify" Nachricht an das Inhalts-Skript, indem es die [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API verwendet, fordert es auf, die Seite zu "beastifizieren" und übergibt die URL zum Tierbild.

Die Funktion `reset()` macht im Wesentlichen eine Beastifizierung rückgängig:

- entfernt das von uns hinzugefügte CSS, indem die [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API verwendet wird
- sendet eine "reset" Nachricht an das Inhalts-Skript, um es aufzufordern, die Seite zurückzusetzen.

### Das Inhalts-Skript

Erstellen Sie ein neues Verzeichnis unter dem Erweiterungsverzeichnis, genannt "content_scripts", und erstellen Sie eine neue Datei darin, namens "beastify.js", mit folgendem Inhalt:

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

Das erste, was das Inhalts-Skript tut, ist zu überprüfen, ob eine globale Variable `window.hasRun` gesetzt ist: wenn ja, kehrt das Skript frühzeitig zurück, andernfalls setzt es `window.hasRun` und fährt fort. Der Grund, warum wir dies tun, ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhalts-Skript im aktiven Tab ausführt, sodass wir mehrere Instanzen des Skripts in einem einzigen Tab laufen haben könnten. Wenn das passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas tut.

Danach ist der Ausgangspunkt Zeile 40, wo das Inhalts-Skript auf Nachrichten vom Popup hört, mit der [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API. Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Arten von Nachrichten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" ist, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild verweist. Wir entfernen alle Tiere, die möglicherweise durch frühere "beastify"-Aufrufe hinzugefügt wurden, und konstruieren und hängen ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element an, dessen `src`-Attribut auf die Tier-URL gesetzt ist.
- Wenn die Nachricht "reset" ist, entfernen wir einfach alle Tiere, die möglicherweise hinzugefügt wurden.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einfügen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in diesem Verzeichnis mit den entsprechenden Namen hinzu. Sie können die Bilder [aus dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier holen:

![Ein brauner Frosch.](frog.jpg)

![Ein Smaragdbaumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Testen

Überprüfen Sie zuerst, dass Sie die richtigen Dateien an den richtigen Orten haben:

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

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Vorübergehendes Add-on laden" und wählen Sie Ihre **manifest.json** Datei aus. Sie sollten dann das Icon der Erweiterung in der Firefox-Symbolleiste sehen:

![Das beastify-Icon in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Icon, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite ändert:

![Eine Seite ersetzt durch das Bild einer Schildkröte](beastify_page.png)

## Entwicklung über die Kommandozeile

Sie können den temporären Installationsschritt automatisieren, indem Sie das [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool verwenden. Versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was kommt als Nächstes?

Jetzt, da Sie eine fortgeschrittenere WebExtension für Firefox erstellt haben:

- [lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
