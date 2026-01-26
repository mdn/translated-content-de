---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgearbeitet haben, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die einige weitere der APIs demonstriert.

Die Erweiterung fügt der Firefox-Symbolleiste eine neue Schaltfläche hinzu. Wenn der Benutzer die Schaltfläche anklickt, zeigen wir ein Popup an, das es ihm ermöglicht, ein Tier auszuwählen. Sobald er ein Tier ausgewählt hat, ersetzen wir den Inhalt der aktuellen Seite mit einem Bild des ausgewählten Tieres.

Um dies zu implementieren, werden wir:

- **eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, das ist eine Schaltfläche, die an die Firefox-Symbolleiste angehängt ist**.
  Für die Schaltfläche liefern wir:
  - ein Icon, genannt "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn die Schaltfläche gedrückt wird. Das Popup enthält HTML, CSS und JavaScript.

- **ein Icon für die Erweiterung definieren**, genannt "beasts-48.png". Dieses wird im Add-ons-Manager angezeigt.
- **ein Inhalts-Skript schreiben, "beastify.js", das in Webseiten eingefügt wird**.
  Dies ist der Code, der tatsächlich die Seiten modifiziert.
- **Bilder der Tiere verpacken, um Bilder auf der Webseite zu ersetzen**.
  Wir machen die Bilder zu "web zugänglichen Ressourcen", sodass die Webseite darauf zugreifen kann.

Sie könnten die Gesamtstruktur der Erweiterung folgendermaßen visualisieren:

![Die manifest.json-Datei beinhaltet Icons, Browser-Aktionen, inklusive Popups, und web zugängliche Ressourcen. Das JavaScript-Popup-Resource zum Auswählen eines Tieres ruft das Beastify-Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, zeigt aber viele der grundlegenden Konzepte der WebExtensions-API:

- eine Schaltfläche zur Symbolleiste hinzufügen
- ein Popup-Panel mit HTML, CSS und JavaScript definieren
- Inhalte Scripte in Webseiten injizieren
- zwischen Inhalte Scripten und dem Rest der Erweiterung kommunizieren
- Ressourcen mit Ihrer Erweiterung verpacken, die von Webseiten genutzt werden können

Sie können den [vollständigen Quellcode für die Erweiterung auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify) finden.

## Die Erweiterung schreiben

Erstellen Sie ein neues Verzeichnis und navigieren Sie in dieses:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie liefern nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es ermöglicht, ein Icon für die Erweiterung anzugeben, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. Wir fragen hier nur nach der Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert die Symbolleistenschaltfläche. Wir liefern hier drei Informationen:
  - `default_icon` ist obligatorisch und verweist auf das Icon für die Schaltfläche
  - `default_title` ist optional und wird in einem Tooltip angezeigt
  - `default_popup` wird verwendet, wenn Sie ein Popup anzeigen möchten, wenn der Benutzer die Schaltfläche anklickt. Wir möchten das, also haben wir diesen Schlüssel aufgenommen und ihn auf eine HTML-Datei, die in der Erweiterung enthalten ist, verwiesen.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die wir Webseiten zugänglich machen möchten. Da die Erweiterung den Inhalt der Seite durch mit der Erweiterung verpackte Bilder ersetzt, müssen wir diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zu manifest.json selbst sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses wird neben dem Eintrag der Erweiterung im Add-ons-Manager angezeigt (Sie können dies öffnen, indem Sie die URL "about:addons" besuchen). Unser manifest.json versprach, dass wir ein Icon für die Symbolleiste bei "icons/beasts-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Icon mit dem Namen "beasts-48.png". Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden, das dem [Aha-Soft's Free Retina-Icon-Set](https://www.aha-soft.com/free-icons/free-retina-icon-set/) entnommen und unter den Bedingungen seiner Lizenz verwendet wird.

Wenn Sie sich entscheiden, Ihr eigenes Icon bereitzustellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Icon bereitstellen, für hochauflösende Displays, und wenn Sie das tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json spezifiziert:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Symbolleistenschaltfläche

Die Symbolleistenschaltfläche benötigt ebenfalls ein Icon, und unser manifest.json versprach, dass wir ein Icon für die Symbolleiste bei "icons/beasts-32.png" haben würden.

Speichern Sie ein Icon namens "beasts-32.png" im Verzeichnis "icons". Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png) verwenden, das dem [IconBeast Lite Icon-Set](https://www.iconbeast.com/free/) entnommen und unter den Bedingungen seiner [Lizenz](https://www.iconbeast.com/faq/) verwendet wird.

Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer die Schaltfläche anklickt. Wenn Sie ein Popup bereitstellen, wird das Klick-Ereignis nicht gesendet, stattdessen wird das Popup geöffnet. Wir möchten ein Popup, also erstellen wir das als nächstes.

### Das Popup

Die Funktion des Popups ist es, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" unter dem Erweiterungsstammverzeichnis. Hier werden wir den Code für das Popup speichern. Das Popup wird aus drei Dateien bestehen:

- **`choose_beast.html`** definiert den Inhalt des Panels
- **`choose_beast.css`** stylt den Inhalt
- **`choose_beast.js`** behandelt die Auswahl des Benutzers, indem es ein Inhalts-Skript im aktiven Tab ausführt

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht folgendermaßen aus:

```html
<!doctype html>
<html lang="en-US">
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

Wir haben ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit einer ID von `"popup-content"`, das eine Schaltfläche für jede Tierauswahl und eine Zurücksetzen-Schaltfläche enthält. Wir haben ein weiteres `<div>` mit einer ID von `"error-content"` und einer Klasse `"hidden"`. Das werden wir verwenden, falls es ein Problem beim Initialisieren des Popups gibt.

Beachten Sie, dass wir die CSS- und JS-Dateien von dieser Datei aus einbinden, genau wie bei einer Webseite.

#### choose_beast.css

Das CSS fixiert die Größe des Popups, stellt sicher, dass die drei Auswahlmöglichkeiten den Platz ausfüllen, und gibt ihnen ein grundlegendes Styling. Es verbirgt auch Elemente mit `class="hidden"`: Das bedeutet, dass unser `<div id="error-content"...`-Element standardmäßig verborgen wird.

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

Der Anfangspunkt hier ist Zeile 99. Das Popup-Skript führt ein Inhalts-Skript im aktiven Tab aus, sobald das Popup geladen ist, und verwendet die API [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, bleibt das Inhalts-Skript in der Seite geladen, bis der Tab geschlossen oder der Benutzer auf eine andere Seite navigiert.

Ein häufiger Grund, warum der Aufruf `browser.tabs.executeScript()` fehlschlagen könnte, ist, dass Sie nicht in allen Seiten Inhalts-Skripte ausführen können. Zum Beispiel können Sie sie nicht in privilegierten Browser-Seiten wie "about:debugging" ausführen, und Sie können sie nicht in Seiten der Domäne [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">`-Element verbergen, das `<div id="error-content"...`-Element zeigen und einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) protokollieren.

Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dies hört auf Klicks im Popup.

- Wenn der Klick nicht auf eine Schaltfläche im Popup war, ignorieren wir ihn und tun nichts.
- Wenn der Klick auf eine Schaltfläche mit `type="reset"` war, rufen wir `reset()` auf.
- Wenn der Klick auf eine andere Schaltfläche war (d.h. die Tierknöpfe), dann rufen wir `beastify()` auf.

Die Funktion `beastify()` macht drei Dinge:

- Zuordnung der angeklickten Schaltfläche zu einer URL, die auf ein Bild eines bestimmten Tieres zeigt
- Verbergen des gesamten Seiteninhalts durch Injektion einiger CSS, unter Verwendung der API [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- Senden einer "beastify"-Nachricht an das Inhalts-Skript unter Verwendung der API [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), mit der Bitte, die Seite zu "beastifyen" und ihr die URL zum Tierbild übergeben

Die Funktion `reset()` macht im Wesentlichen rückgängig, was ein "beastify" gemacht hat:

- Entfernen des hinzugefügten CSS, unter Verwendung der API [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS)
- Senden einer "reset"-Nachricht an das Inhalts-Skript mit der Bitte, die Seite zurückzusetzen

### Das Inhalts-Skript

Erstellen Sie ein neues Verzeichnis unter dem Erweiterungsstammverzeichnis, genannt "content_scripts", und erstellen Sie darin eine neue Datei namens "beastify.js" mit dem folgenden Inhalt:

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

Das erste, was das Inhalts-Skript macht, ist zu prüfen, ob eine globale Variable `window.hasRun` gesetzt ist: Wenn sie gesetzt ist, gibt das Skript frühzeitig zurück, andernfalls setzt es `window.hasRun` und fährt fort. Der Grund, warum wir dies tun ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhalts-Skript im aktiven Tab ausführt, sodass wir mehrere Instanzen des Skripts in einem einzigen Tab laufen haben könnten. Wenn dies passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas tut.

Nach dem ersten Schritt ist der Anfangspunkt Zeile 40, wo das Inhalts-Skript auf Nachrichten aus dem Popup hört, unter Verwendung der API [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Nachrichtenarten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" ist, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild zeigt. Wir entfernen alle Tiere, die durch vorherige "beastify"-Aufrufe hinzugefügt wurden, dann konstruieren und fügen wir ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element ein, dessen `src`-Attribut auf die Tier-URL gesetzt ist.
- Wenn die Nachricht "reset" ist, entfernen wir einfach alle Tiere, die hinzugefügt worden sein könnten.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einschließen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in dieses Verzeichnis ein, mit den entsprechenden Namen. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragd-Baumboa mit weißen Streifen.](snake.jpg)

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

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Temporäres Add-on laden", und wählen Sie Ihre **manifest.json**-Datei. Sie sollten dann das Icon der Erweiterung in der Firefox-Symbolleiste sehen:

![Das Beastify-Icon in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Icon, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite ändert:

![Eine Seite, die durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Von der Kommandozeile aus entwickeln

Sie können den Schritt der temporären Installation mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool automatisieren. Versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was kommt als Nächstes?

Jetzt, da Sie eine fortgeschrittenere WebExtension für Firefox erstellt haben:

- [lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erforschen Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
