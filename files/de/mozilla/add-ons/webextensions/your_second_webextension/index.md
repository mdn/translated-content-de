---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgegangen sind, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die einige weitere der APIs demonstriert.

Die Erweiterung fügt der Firefox-Symbolleiste eine neue Schaltfläche hinzu. Wenn der Benutzer auf die Schaltfläche klickt, wird ein Popup angezeigt, mit dem er ein Tier auswählen kann. Sobald er ein Tier ausgewählt hat, werden wir den Inhalt der aktuellen Seite durch ein Bild des gewählten Tieres ersetzen.

Um dies umzusetzen, werden wir:

- **eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, was eine Schaltfläche ist, die der Firefox-Symbolleiste hinzugefügt wird**.
  Für die Schaltfläche liefern wir:

  - ein Symbol namens "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn die Schaltfläche gedrückt wird. Das Popup beinhaltet HTML, CSS und JavaScript.

- **ein Symbol für die Erweiterung definieren**, genannt "beasts-48.png". Dieses wird im Add-ons-Manager angezeigt.
- **ein Inhalts-Skript, "beastify.js", schreiben, das in Webseiten injiziert wird**.
  Dies ist der Code, der tatsächlich die Seiten verändert.
- **einige Tierbilder packen, um die Bilder auf der Webseite zu ersetzen**.
  Wir machen die Bilder zu "webzugänglichen Ressourcen", sodass die Webseite auf sie verweisen kann.

Sie könnten die gesamte Struktur der Erweiterung so visualisieren:

![Die manifest.json-Datei beinhaltet Symbole, Browser-Aktionen einschließlich Popups und webzugängliche Ressourcen. Das JavaScript-Popup zur Tierausswahl ruft das Beastify-Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, aber sie zeigt viele der grundlegenden Konzepte der WebExtensions-API:

- Hinzufügen einer Schaltfläche zur Symbolleiste
- Definition eines Popup-Panels unter Verwendung von HTML, CSS und JavaScript
- Injektion von Inhalts-Skripten in Webseiten
- Kommunikation zwischen Inhalts-Skripten und dem Rest der Erweiterung
- Verpackung von Ressourcen mit Ihrer Erweiterung, die von Webseiten genutzt werden können

Sie können den [vollständigen Quellcode der Erweiterung auf GitHub finden](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Die Erweiterung schreiben

Erstellen Sie ein neues Verzeichnis und navigieren Sie dorthin:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie bieten nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es ermöglicht Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die die Erweiterung benötigt. Wir fragen hier nur nach der [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert die Symbolleistenschaltfläche. Wir liefern hier drei Informationen:

  - `default_icon` ist obligatorisch und weist auf das Symbol für die Schaltfläche hin
  - `default_title` ist optional und wird in einem Tooltip angezeigt
  - `default_popup` wird verwendet, wenn ein Popup angezeigt werden soll, wenn der Benutzer auf die Schaltfläche klickt. Wir tun dies, daher haben wir diesen Schlüssel eingefügt und darauf hingewiesen, dass er auf eine HTML-Datei zeigt, die mit der Erweiterung enthalten ist.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die wir Webseiten zugänglich machen möchten. Da die Erweiterung den Inhalt der Seite durch Bilder ersetzt, die wir mit der Erweiterung gepackt haben, müssen wir diese Bilder der Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zu manifest.json sind.

### Das Symbol

Die Erweiterung sollte ein Symbol haben. Dieses wird neben der Auflistung der Erweiterung im Add-ons-Manager angezeigt (Sie können diesen öffnen, indem Sie die URL "about:addons" besuchen). Unser manifest.json hat versprochen, dass wir ein Symbol für die Symbolleiste bei "icons/beasts-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Symbol unter dem Namen "beasts-48.png". Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png), das aus dem [Aha-Soft's Free Retina Iconset](https://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und unter den Bedingungen der Lizenz genutzt wird.

Wenn Sie sich entscheiden, Ihr eigenes Symbol bereitzustellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als `96` Eigenschaft des `icons` Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Symbolleistenschaltfläche

Die Symbolleistenschaltfläche benötigt ebenfalls ein Symbol, und unser manifest.json hat versprochen, dass wir ein Symbol für die Symbolleiste bei "icons/beasts-32.png" haben würden.

Speichern Sie ein Symbol namens "beasts-32.png" im "icons" Verzeichnis. Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png), das aus dem [IconBeast Lite Icon Set](https://www.iconbeast.com/free/) stammt und unter den Bedingungen der [Lizenz](https://www.iconbeast.com/faq/) genutzt wird.

Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf die Schaltfläche klickt. Wenn Sie jedoch ein Popup bereitstellen, wird das Klickereignis nicht gesendet, sondern das Popup geöffnet. Wir wollen ein Popup, daher erstellen wir dies als Nächstes.

### Das Popup

Die Funktion des Popups besteht darin, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" unterhalb des Hauptverzeichnisses der Erweiterung. Hier werden wir den Code für das Popup aufbewahren. Das Popup wird aus drei Dateien bestehen:

- **`choose_beast.html`** definiert den Inhalt des Panels
- **`choose_beast.css`** gestaltet den Inhalt
- **`choose_beast.js`** verarbeitet die Auswahl des Benutzers, indem ein Inhalts-Skript im aktiven Tab ausgeführt wird

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

Wir haben ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) Element mit einer ID von `"popup-content"`, das eine Schaltfläche für jede Tierauswahl und eine Rücksetzschaltfläche enthält. Wir haben ein weiteres `<div>` mit einer ID von `"error-content"` und einer Klasse `"hidden"`. Wir werden dies verwenden, falls ein Problem beim Initialisieren des Popups auftritt.

Beachten Sie, dass wir die CSS- und JS-Dateien von dieser Datei aus einbinden, genau wie auf einer Webseite.

#### choose_beast.css

Das CSS fixiert die Größe des Popups, sorgt dafür, dass die drei Auswahlmöglichkeiten den Platz ausfüllen, und verleiht ihnen ein grundlegendes Styling. Es verbirgt auch Elemente mit `class="hidden"`: dies bedeutet, dass unser `<div id="error-content"...` Element standardmäßig versteckt wird.

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

Der Einstiegspunkt hier ist Zeile 99. Das Popup-Skript führt ein Inhalts-Skript im aktiven Tab aus, sobald das Popup geladen ist, unter Verwendung der [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, bleibt das Inhalts-Skript bis zum Schließen des Tabs oder bis der Benutzer zu einer anderen Seite navigiert, geladen.

Ein häufiger Grund, warum der `browser.tabs.executeScript()` Aufruf fehlschlagen könnte, ist, dass Sie nicht in allen Seiten Inhalts-Skripte ausführen können. Beispielsweise können Sie sie nicht in privilegierten Browserseiten wie about:debugging ausführen, und Sie können sie nicht auf Seiten der Domain [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">` Element verbergen, das `<div id="error-content">...` Element anzeigen und einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) protokollieren.

Wenn das Ausführen des Inhalts-Skripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dieses hört auf Klicks im Popup.

- Wenn der Klick nicht auf eine Schaltfläche im Popup war, ignorieren wir ihn und machen nichts.
- Wenn der Klick auf eine Schaltfläche mit `type="reset"` war, dann rufen wir `reset()` auf.
- Wenn der Klick auf irgendeine andere Schaltfläche (d.h. die Tierschaltflächen) war, dann rufen wir `beastify()` auf.

Die `beastify()` Funktion erledigt drei Dinge:

- Sie ordnet der geklickten Schaltfläche eine URL zu, die auf ein Bild eines bestimmten Tieres zeigt
- Sie verbirgt den gesamten Seiteninhalt, indem etwas CSS injiziert wird, unter Verwendung der [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API
- Sie sendet eine "beastify" Nachricht an das Inhalts-Skript unter Verwendung der [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API und fordert es auf, die Seite zu "beastifyen" und übermittelt die URL des Tierbildes.

Die `reset()` Funktion hebt im Wesentlichen ein "beastify" auf:

- Entfernen des von uns hinzugefügten CSS, unter Verwendung der [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API
- Senden einer "reset" Nachricht an das Inhalts-Skript, um es zu bitten, die Seite zurückzusetzen.

### Das Inhalts-Skript

Erstellen Sie ein neues Verzeichnis, im Hauptverzeichnis der Erweiterung, namens "content_scripts" und erstellen Sie darin eine neue Datei namens "beastify.js" mit dem folgenden Inhalt:

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

Das Erste, was das Inhalts-Skript macht, ist zu überprüfen, ob eine globale Variable `window.hasRun` gesetzt ist: Wenn ja, kehrt das Skript frühzeitig zurück, andernfalls setzt es `window.hasRun` und fährt fort. Der Grund, warum wir das tun, ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhalts-Skript im aktiven Tab ausführt, sodass wir mehrere Instanzen des Skripts in einem einzigen Tab haben könnten. Wenn das passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas unternimmt.

Danach ist der Einstiegspunkt Zeile 40, wo das Inhalts-Skript auf Nachrichten vom Popup hört, unter Verwendung der [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API. Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Arten von Nachrichten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" ist, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild zeigt. Wir entfernen alle Tiere, die möglicherweise durch vorherige "beastify"-Aufrufe hinzugefügt wurden, und konstruieren und fügen ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img) Element hinzu, dessen `src` Attribut auf die Tier-URL gesetzt ist.
- Wenn die Nachricht "reset" ist, entfernen wir einfach alle Tiere, die möglicherweise hinzugefügt wurden.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einfügen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in diesem Verzeichnis hinzu, mit den entsprechenden Namen. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) holen oder von hier:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdbaumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Es ausprobieren

Überprüfen Sie zuerst, ob Sie die richtigen Dateien an den richtigen Stellen haben:

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

Laden Sie jetzt die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Load Temporary Add-on" und wählen Sie Ihre **manifest.json** Datei aus. Sie sollten dann das Symbol der Erweiterung in der Firefox-Symbolleiste sehen:

![Das Beastify-Symbol in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Symbol, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite verändert:

![Eine Seite, ersetzt durch das Bild einer Schildkröte](beastify_page.png)

## Entwicklung von der Befehlszeile aus

Sie können den temporären Installationsschritt automatisieren, indem Sie das [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool verwenden. Probieren Sie dies:

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
