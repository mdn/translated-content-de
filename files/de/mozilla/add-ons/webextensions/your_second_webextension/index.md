---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgearbeitet haben, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die einige weitere APIs demonstriert.

Die Erweiterung fügt der Firefox-Werkzeugleiste einen neuen Button hinzu. Wenn der Benutzer den Button anklickt, zeigen wir ein Popup an, das es ihm ermöglicht, ein Tier auszuwählen. Sobald er ein Tier ausgewählt hat, ersetzen wir den Inhalt der aktuellen Seite durch ein Bild des ausgewählten Tieres.

Um dies zu implementieren, werden wir:

- **eine [browser action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, die ein Button ist, der an die Firefox-Werkzeugleiste angehängt ist**.
  Für den Button liefern wir:

  - ein Symbol, genannt "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn der Button gedrückt wird. Das Popup wird HTML, CSS und JavaScript enthalten.

- **ein Symbol für die Erweiterung definieren**, genannt "beasts-48.png". Dies wird im Add-ons-Manager angezeigt.
- **ein Inhalts-Skript schreiben, "beastify.js", das in Webseiten injiziert wird**.
  Dies ist der Code, der die Seiten tatsächlich modifizieren wird.
- **einige Bilder der Tiere verpacken, um Bilder auf der Webseite zu ersetzen**.
  Wir machen die Bilder zu "webzugänglichen Ressourcen", damit die Webseite auf sie verweisen kann.

Sie könnten die Gesamtstruktur der Erweiterung so visualisieren:

![Die manifest.json-Datei enthält Symbole, Browseraktionen einschließlich Popups und webzugängliche Ressourcen. Das JavaScript-Popup-Ressource `choose beast` ruft das `beastify` Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, zeigt aber viele der grundlegenden Konzepte der WebExtensions-API:

- einen Button zur Werkzeugleiste hinzufügen
- ein Popup-Panel mit HTML, CSS und JavaScript definieren
- Inhalts-Skripte in Webseiten injizieren
- Kommunikation zwischen Inhalts-Skripten und dem Rest der Erweiterung
- Ressourcen mit Ihrer Erweiterung verpacken, die von Webseiten verwendet werden können

Sie können [den vollständigen Quellcode der Erweiterung auf GitHub finden](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Die Erweiterung schreiben

Erstellen Sie ein neues Verzeichnis und navigieren Sie dorthin:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie bieten nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es ermöglicht Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die die Erweiterung benötigt. Wir fragen hier nur nach der [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert den Werkzeugleisten-Button. Wir liefern hier drei Informationen:

  - `default_icon` ist obligatorisch und weist auf das Symbol für den Button hin
  - `default_title` ist optional und wird in einem Tooltip angezeigt
  - `default_popup` wird verwendet, wenn Sie möchten, dass ein Popup angezeigt wird, wenn der Benutzer den Button klickt. Wir möchten ein Popup, also haben wir diesen Schlüssel eingefügt und auf eine HTML-Datei verwiesen, die in der Erweiterung enthalten ist.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die wir für Webseiten zugänglich machen möchten. Da die Erweiterung den Inhalt der Seite mit Bildern ersetzt, die wir mit der Erweiterung verpackt haben, müssen wir diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zu manifest.json selbst sind.

### Das Symbol

Die Erweiterung sollte ein Symbol haben. Dies wird neben dem Eintrag der Erweiterung im Add-ons-Manager angezeigt (Sie können diesen öffnen, indem Sie die URL "about:addons" besuchen). Unser manifest.json versprach, dass wir ein Symbol für die Werkzeugleiste bei "icons/beasts-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Symbol mit dem Namen "beasts-48.png". Sie können [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png), das aus dem [Aha-Soft's Free Retina iconset](http://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und unter den Bedingungen seiner Lizenz verwendet wird.

Wenn Sie ein eigenes Symbol bereitstellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Displays bereitstellen, und wenn Sie dies tun, wird es als die `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Der Werkzeugleisten-Button

Der Werkzeugleisten-Button benötigt ebenfalls ein Symbol, und unser manifest.json versprach, dass wir ein Symbol für die Werkzeugleiste bei "icons/beasts-32.png" haben würden.

Speichern Sie ein Symbol mit dem Namen "beasts-32.png" im Verzeichnis "icons". Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png), das aus dem [IconBeast Lite icon set](https://www.iconbeast.com/free/) stammt und unter den Bedingungen seiner [Lizenz](https://www.iconbeast.com/faq/) verwendet wird.

Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer den Button klickt. Wenn Sie ein Popup bereitstellen, wird das Klick-Ereignis nicht gesendet, sondern das Popup wird geöffnet. Wir möchten ein Popup, also erstellen wir das nächste.

### Das Popup

Die Funktion des Popups ist es, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" im Stammverzeichnis der Erweiterung. Dies ist der Ort, an dem wir den Code für das Popup aufbewahren werden. Das Popup besteht aus drei Dateien:

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

Wir haben ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit einer ID von `"popup-content"`, das einen Button für jede Tierwahl und einen Zurücksetzen-Button enthält. Wir haben ein weiteres `<div>` mit einer ID von `"error-content"` und einer Klasse `"hidden"`. Wir verwenden dies, falls es ein Problem bei der Initialisierung des Popups gibt.

Beachten Sie, dass wir die CSS- und JS-Dateien aus dieser Datei einbinden, genau wie bei einer Webseite.

#### choose_beast.css

Das CSS fixiert die Größe des Popups, stellt sicher, dass die drei Auswahlmöglichkeiten den Platz ausfüllen und verleiht ihnen ein grundlegendes Styling. Es verbirgt auch Elemente mit `class="hidden"`: dies bedeutet, dass unser `<div id="error-content"...`-Element standardmäßig verborgen wird.

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

Der Einstiegspunkt ist hier die Zeile 99. Das Popup-Skript führt ein Inhalts-Skript im aktiven Tab aus, sobald das Popup geladen wird, unter Verwendung der [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, bleibt das Inhalts-Skript bis zum Schließen des Tabs oder bis der Benutzer zu einer anderen Seite navigiert, geladen.

Ein häufiger Grund, warum der Aufruf von `browser.tabs.executeScript()` fehlschlagen könnte, ist, dass Sie Inhalts-Skripte nicht in allen Seiten ausführen können. Zum Beispiel können Sie sie nicht in privilegierten Browser-Seiten wie about:debugging ausführen, und Sie können sie nicht auf Seiten der [addons.mozilla.org](https://addons.mozilla.org/) Domain ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">` Element ausblenden, das `<div id="error-content"...` Element anzeigen und einen Fehler in die [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) loggen.

Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dies lauscht auf Klicks im Popup.

- Wenn der Klick nicht auf einen Button im Popup war, ignorieren wir ihn und tun nichts.
- Wenn der Klick auf einen Button mit `type="reset"` war, rufen wir `reset()` auf.
- Wenn der Klick auf einen anderen Button (d.h. die Tier-Buttons) war, rufen wir `beastify()` auf.

Die Funktion `beastify()` tut drei Dinge:

- ordnet den geklickten Button einer URL zu, die auf ein Bild eines bestimmten Tieres zeigt
- versteckt den gesamten Inhalt der Seite, indem etwas CSS injiziert wird, mit der [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API
- sendet eine "beastify" Nachricht an das Inhalts-Skript mit der [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API, fragt es, die Seite zu beastifizieren, und übergibt die URL des Tierbildes.

Die Funktion `reset()` macht im Wesentlichen ein Beastify rückgängig:

- entfernt das von uns hinzugefügte CSS, mit der [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API
- sendet eine "reset" Nachricht an das Inhalts-Skript, um die Seite zurückzusetzen.

### Das Inhalts-Skript

Erstellen Sie ein neues Verzeichnis unter dem Stammverzeichnis der Erweiterung, genannt "content_scripts", und erstellen Sie eine neue Datei darin namens "beastify.js" mit folgendem Inhalt:

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

Das erste, was das Inhalts-Skript tut, ist zu überprüfen, ob eine globale Variable `window.hasRun` gesetzt ist: wenn sie gesetzt ist, gibt das Skript früh zurück, andernfalls setzt es `window.hasRun` und fährt fort. Der Grund, warum wir dies tun, ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhalts-Skript im aktiven Tab ausführt, sodass wir mehrere Instanzen des Skripts in einem einzigen Tab haben könnten. Wenn dies passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas tut.

Danach ist der Einstiegspunkt die Zeile 40, wo das Inhalts-Skript auf Nachrichten vom Popup lauscht, unter Verwendung der [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API. Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Arten von Nachrichten senden kann: "beastify" und "reset".

- wenn die Nachricht "beastify" lautet, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild zeigt. Wir entfernen alle Tiere, die durch vorherige "beastify"-Aufrufe hinzugefügt worden sein könnten, dann konstruieren und fügen wir ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element hinzu, dessen `src`-Attribut auf die Tier-URL gesetzt ist.
- wenn die Nachricht "reset" lautet, entfernen wir einfach alle Tiere, die hinzugefügt worden sein könnten.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einfügen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in dieses Verzeichnis ein, mit den entsprechenden Namen. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) nehmen oder von hier:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdbaumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Es ausprobieren

Überprüfen Sie zunächst, ob Sie die richtigen Dateien an den richtigen Stellen haben:

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

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Zeitlich begrenztes Add-on laden" und wählen Sie Ihre **manifest.json**-Datei aus. Sie sollten dann das Symbol der Erweiterung in der Firefox-Werkzeugleiste sehen:

![Das Beastify-Symbol in der Firefox-Werkzeugleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Symbol, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite ändert:

![Eine Seite, die durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Entwicklung über die Befehlszeile

Sie können den Schritt der temporären Installation automatisieren, indem Sie das [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool verwenden. Versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was nun?

Jetzt, da Sie eine fortgeschrittenere WebExtension für Firefox erstellt haben:

- [lesen Sie über die Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
