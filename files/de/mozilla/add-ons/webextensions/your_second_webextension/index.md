---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 0af4dd8fa2007f51373931068e6f524e4f2bf86a
---

Das Tutorial [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) hat Ihnen den grundlegenden Prozess zum Schreiben einer Erweiterung vorgestellt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die zusätzliche APIs demonstriert.

Die von Ihnen entwickelte Erweiterung veranschaulicht viele der grundlegenden Konzepte der WebExtensions-API, darunter:

- Hinzufügen einer Schaltfläche zur Symbolleiste.
- Definieren eines Popup-Panels mit HTML, CSS und JavaScript.
- Injizieren von Content-Skripten in Webseiten.
- Kommunikation zwischen Content-Skripten und dem Rest der Erweiterung.
- Paketieren von Ressourcen mit Ihrer Erweiterung, die Webseiten verwenden können.

Die Erweiterung fügt der Firefox-Symbolleiste eine Schaltfläche hinzu. Wenn der Benutzer auf die Schaltfläche klickt, zeigt die Erweiterung ein Popup an, in dem er ein Tier auswählen kann. Wenn der Benutzer ein Tier auswählt, ersetzt die Erweiterung den Inhalt der aktiven Seite durch ein Bild dieses Tiers.

Um dies zu implementieren, gehen Sie wie folgt vor:

- **Definieren Sie eine `action`, also eine [Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), die an die Firefox-Symbolleiste angehängt ist**.
  Für die Schaltfläche geben Sie Folgendes an:
  - Ein Standardsymbol sowie Symbole für die Anzeige von hellem und dunklem Text durch Firefox.
  - Einen Tooltip.
  - Ein Popup, das geöffnet wird, wenn der Benutzer die Schaltfläche drückt. Das Popup enthält HTML, CSS und JavaScript.

- **Definieren Sie ein Symbol für die Erweiterung** mit dem Namen „beasts-48.png“. Der Add-ons-Manager zeigt dieses Symbol zusammen mit den Details der Erweiterung an.
- **Schreiben Sie ein Content-Skript namens „beastify.js“, das die Erweiterung in Webseiten injiziert**.
  Dieser Code verändert die Seiten, um Tiere hinzuzufügen oder zu entfernen.
- **Paketieren Sie einige Bilder der Tiere als webzugängliche Ressourcen.**
  Auf diese Bilder wird von den durch das Content-Skript aktualisierten Seiten verwiesen, um ein Tier anzuzeigen.

Sie können sich die Gesamtstruktur der Erweiterung so vorstellen:

![Die Datei manifest.json enthält Symbole, actions einschließlich Popups und webzugängliche Ressourcen. Die JavaScript-Popup-Ressource zur Auswahl eines Tiers ruft das beastify-Skript auf.](untitled-1.png)

Den [vollständigen Quellcode der Erweiterung finden Sie auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Schreiben der Erweiterung

Erstellen Sie ein Verzeichnis und navigieren Sie dorthin:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine Datei mit dem Namen „manifest.json“ und geben Sie ihr folgenden Inhalt:

```json
{
  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "manifest_version": 3,
  "name": "Beastify",
  "version": "1.0",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },
  "permissions": ["activeTab", "scripting"],
  "browser_specific_settings": {
    "gecko": {
      "id": "beastify@mozilla.org",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },
  "action": {
    "default_icon": "icons/beasts-32.png",
    "theme_icons": [
      {
        "light": "icons/beasts-32-light.png",
        "dark": "icons/beasts-32.png",
        "size": 32
      }
    ],
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    {
      "resources": ["beasts/*.jpg"],
      "matches": ["*://*/*"]
    }
  ]
}
```

- Die ersten drei Schlüssel ([`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, ansonsten optional. Es ist jedoch empfehlenswert, diese Eigenschaft festzulegen, da sie im Erweiterungsmanager des Browsers angezeigt wird (beispielsweise in Firefox unter `about:addons`).
- [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) ist optional, wird jedoch empfohlen: Sie bietet nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, wird jedoch empfohlen; damit können Sie ein Symbol für die Erweiterung angeben.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist erforderlich.
  - Die Eigenschaft `gecko` stellt addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen über die Erweiterung bereit:
  - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese ID wird benötigt, bevor eine Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
  - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt Informationen darüber an, ob die Erweiterung personenbezogene Daten sammelt und überträgt. Dieses Beispiel sammelt oder überträgt keine Daten.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. In diesem Beispiel fordert die Erweiterung die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) an.
- [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) gibt die Schaltfläche der Symbolleiste, ihre Symbole, ihren Tooltip und ihr Popup an. Details zu den in diesem Beispiel verwendeten Eigenschaften finden Sie unter [Die Schaltfläche der Symbolleiste](#die_schaltfläche_der_symbolleiste).
- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die Sie für Webseiten zugänglich machen möchten. Da die Erweiterung den Seiteninhalt durch in der Erweiterung paketierte Bilder ersetzt, müssen Sie diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zur Datei manifest.json sind.

### Das Symbol

Die Erweiterung sollte ein Symbol haben. Dieses Symbol wird vom Add-ons-Manager („about:addons“) neben dem Eintrag der Erweiterung angezeigt. Die manifest.json legt fest, dass sich das Symbol der Erweiterung unter „icons/beasts-48.png“ befindet.

Erstellen Sie das Verzeichnis „icons“ und speichern Sie dort ein Symbol mit dem Namen „beasts-48.png“. Sie können [das Symbol aus dem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden, das aus [Aha-Softs Free Retina Iconset](https://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und gemäß dessen Lizenz verwendet wird.

Wenn Sie ein Symbol bereitstellen, sollte es 48 × 48 Pixel groß sein. Sie können auch ein 96 × 96 Pixel großes Symbol für hochauflösende Displays bereitstellen; geben Sie es als Eigenschaft `96` des `icons`-Objekts in manifest.json an:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Schaltfläche der Symbolleiste

Sie fügen eine Schaltfläche zur Symbolleiste mithilfe des Schlüssels [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) hinzu und passen sie an. Der Schlüssel und alle seine Eigenschaften sind optional. Wenn Sie jedoch eine Schaltfläche der Symbolleiste verwenden, geben Sie Eigenschaften an, um die Schaltfläche anzupassen und bei Bedarf ein Popup hinzuzufügen, das beim Klicken auf die Schaltfläche erscheint. Dieses Beispiel verwendet:

- `default_icon`, das auf das Standardsymbol der Schaltfläche verweist.
- `theme_icons`, das alternative Symbole für Themes bereitstellt:
  - `light` gibt das Symbol (`icons/beasts-32-light.png`) an, das verwendet wird, wenn heller Text angezeigt wird (in der Regel, wenn ein dunkles Theme aktiv ist).
  - `dark` gibt das Symbol (`icons/beasts-32.png`) an, das verwendet wird, wenn dunkler Text angezeigt wird (in der Regel, wenn ein helles Theme aktiv ist).
  - `size` gibt die Größe des Symbols in Pixeln an.
- `default_title` stellt den Text des Tooltips bereit, den Firefox anzeigt, wenn der Benutzer mit der Maus auf die Schaltfläche zeigt.
- `default_popup` verweist auf die HTML-Datei des Popups. Details finden Sie unter [Das Popup](#das_popup).

Speichern Sie Ihre Symbole im Verzeichnis „icons“ oder verwenden Sie die Symbole aus dem Beispielquellcode auf GitHub:

- [beasts-32.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png)
- [beasts-32-light.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32-light.png)

Beide Symbole basieren auf einem Symbol aus dem [IconBeast Lite Icon Set](https://www.iconbeast.com/free/) und werden gemäß dessen [Lizenz](https://www.iconbeast.com/faq/) verwendet.

### Das Popup

Schaltflächen der Symbolleiste ermöglichen es Ihnen, ein Popup hinzuzufügen, das geöffnet wird, wenn der Benutzer auf die Schaltfläche der Symbolleiste klickt.

Wenn Sie kein Popup bereitstellen, löst ein Klick auf die Schaltfläche ein {{WebExtAPIRef("action.onClicked")}}-Ereignis für Ihre Erweiterung aus. Ihre Erweiterung verwendet dieses Ereignis, um die mit der Schaltfläche verknüpfte Funktionalität auszulösen.

Für dieses Beispiel möchten Sie ein Popup. Das Popup ermöglicht dem Benutzer, eines von drei Tieren auszuwählen.

Erstellen Sie unter dem Stammverzeichnis der Erweiterung ein Verzeichnis mit dem Namen „popup“. In diesem Verzeichnis erstellen Sie den Code des Popups. Das Popup besteht aus drei Dateien:

- `choose_beast.html` definiert den Inhalt des Panels.
- `choose_beast.css` gestaltet den Inhalt.
- `choose_beast.js` verarbeitet die Auswahl des Benutzers, indem es ein Content-Skript im aktiven Tab ausführt.

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht wie folgt aus:

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

Das HTML enthält ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit der ID `"popup-content"`. Das Element enthält für jede Tierauswahl eine Schaltfläche sowie eine Zurücksetzen-Schaltfläche. Ein weiteres `<div>` hat die ID `"error-content"` und die Klasse `"hidden"`. Die Erweiterung verwendet dieses zweite `<div>`, wenn sie das Popup nicht initialisieren kann.

Beachten Sie, dass das HTML die CSS- und JavaScript-Dateien aus dem Verzeichnis einbindet, genau wie eine Webseite.

#### choose_beast.css

Das CSS legt die Größe des Popups fest, stellt sicher, dass die drei Auswahlmöglichkeiten den verfügbaren Platz ausfüllen, und fügt grundlegende Formatierungen hinzu. Außerdem blendet es Elemente mit `class="hidden"` aus, was bedeutet, dass die Erweiterung das Element `<div id="error-content"...` standardmäßig ausblendet.

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
 * except for elements that have the ".beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none !important;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", async (e) => {
    /**
     * Given the name of a beast, get the URL for the corresponding image.
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
     * get the beast URL, and
     * send a "beastify" message to the content script in the active tab.
     */
    async function beastify(tab) {
      await browser.scripting.insertCSS({
        target: { tabId: tab.id },
        css: hidePage,
      });
      const url = beastNameToURL(e.target.textContent);
      await browser.tabs.sendMessage(tab.id, {
        command: "beastify",
        beastURL: url,
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab and
     * send a "reset" message to the content script in the active tab.
     */
    async function reset(tab) {
      await browser.scripting.removeCSS({
        target: { tabId: tab.id },
        css: hidePage,
      });
      await browser.tabs.sendMessage(tab.id, { command: "reset" });
    }

    /**
     * Log the error to the console.
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

    try {
      const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });

      if (e.target.type === "reset") {
        await reset(tab);
      } else {
        await beastify(tab);
      }
    } catch (error) {
      reportError(error);
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
 * When the popup loads, inject a content script into the active tab
 * and add a click handler.
 * If the extension couldn't inject the script, handle the error.
 */
(async function runOnPopupOpened() {
  try {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    await browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["/content_scripts/beastify.js"],
    });
    listenForClicks();
  } catch (e) {
    reportExecuteScriptError(e);
  }
})();
```

Das Popup-Skript führt [das Content-Skript](#das_content-skript) im aktiven Tab aus, sobald das Popup geladen wird, und verwendet dafür die API [`browser.scripting.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript). Wenn die Ausführung des Content-Skripts erfolgreich ist, bleibt es auf der Seite geladen, bis der Tab geschlossen wird oder der Benutzer zu einer anderen Seite navigiert.

Der Aufruf von `browser.scripting.executeScript()` kann fehlschlagen, wenn die Erweiterung keine Content-Skripte auf der aktiven Seite ausführen kann. Beispielsweise kann eine Erweiterung keine Skripte auf privilegierten Browserseiten wie `about:debugging` oder auf Seiten in der Domain [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Wenn der Aufruf fehlschlägt, blendet `reportExecuteScriptError()` das Element `<div id="popup-content">` aus, zeigt das Element `<div id="error-content"...` an und protokolliert einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/).

Wenn das Content-Skript ausgeführt wird, ruft der Code `listenForClicks()` auf. Dieser Code lauscht auf Klicks im Popup. Dann gilt:

- Wenn ein Klick nicht auf eine Schaltfläche im Popup erfolgt, wird er ignoriert und es geschieht nichts.
- Wenn ein Klick auf eine Schaltfläche mit `type="reset"` erfolgt, ruft der Code `reset()` auf.
- Wenn ein Klick auf eine andere Schaltfläche erfolgt, also eine Tierschaltfläche, ruft der Code `beastify()` auf.

Die Funktion `beastify()` führt drei Dinge aus:

- Sie ordnet die angeklickte Schaltfläche einer URL zu, die auf ein Bild eines Tiers verweist.
- Sie blendet den Inhalt der Seite durch Injizieren von CSS mithilfe der API [`browser.scripting.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS) aus.
- Sie sendet mithilfe der API [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) eine „beastify“-Nachricht an das Content-Skript, übergibt ihm die URL des Tierbilds und fordert es auf, die Seite zu beastify.

Die Funktion `reset()` macht ein Beastify rückgängig. Sie:

- Entfernt das hinzugefügte CSS mithilfe der API [`browser.scripting.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS).
- Sendet eine „reset“-Nachricht an das Content-Skript und fordert es auf, die Seite zurückzusetzen.

### Das Content-Skript

Erstellen Sie unter dem Stammverzeichnis der Erweiterung ein Verzeichnis mit dem Namen „content_scripts“ und erstellen Sie darin eine Datei namens „beastify.js“ mit folgendem Inhalt:

```js
(function () {
  /**
   * Check and set a global guard variable to
   * ensure that if this content script is injected into a page again,
   * it returns (and does nothing).
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL for a beast image, remove all beasts,
   * then create and style an IMG node pointing to the image and
   * insert the node into the document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.objectFit = "contain";
    beastImage.style.position = "fixed";
    beastImage.style.height = "100%";
    beastImage.style.width = "100%";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * Remove all beasts from the page.
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Listen for messages from the background script.
   * Depending on the message, call "beastify()" or "reset()".
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

Das Content-Skript prüft zunächst die globale Variable `window.hasRun`: Wenn sie gesetzt ist, gibt das Skript zurück; andernfalls setzt es `window.hasRun` und fährt fort. Der Grund dafür ist, dass bei jedem Öffnen des Popups durch den Benutzer ein Content-Skript im aktiven Tab ausgeführt wird. Daher könnte die Erweiterung mehrere Instanzen des Skripts in einem einzelnen Tab ausführen. In diesem Fall muss der Code sicherstellen, dass nur die erste Instanz etwas unternimmt.

Das Content-Skript lauscht dann mithilfe der API [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) auf Nachrichten vom Popup. Sie haben zuvor gesehen, dass das Popup-Skript zwei Nachrichten senden kann: „beastify“ und „reset“.

- Wenn die Nachricht „beastify“ lautet, erwartet der Code, dass sie eine URL enthält, die auf ein Tierbild verweist. Die Erweiterung entfernt alle Tiere, die durch vorherige „beastify“-Aufrufe hinzugefügt wurden, und erstellt und hängt dann ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element an, dessen Attribut `src` auf die URL des Tierbilds gesetzt ist.
- Wenn die Nachricht „reset“ lautet, entfernt die Erweiterung alle hinzugefügten Tiere.

### Die Tiere

Abschließend fügen Sie die Bilder der Tiere hinzu.

Erstellen Sie ein Verzeichnis mit dem Namen „beasts“ und fügen Sie die drei Bilder mit den entsprechenden Namen hinzu. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Testen

Prüfen Sie zunächst noch einmal, ob Sie die richtigen Dateien an den richtigen Stellen haben:

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
        beasts-32-light.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie in Firefox `about:debugging`, klicken Sie auf **This Firefox** und anschließend auf **Load Temporary Add-on**, und wählen Sie Ihre Datei manifest.json aus. Das Symbol der Erweiterung wird in der Firefox-Symbolleiste angezeigt:

![Das Beastify-Symbol in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Symbol, wählen Sie ein Tier aus und beobachten Sie, wie sich die Webseite verändert:

![Eine Seite, die durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Entwicklung über die Befehlszeile

Sie können den Schritt der temporären Installation mithilfe des Tools [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) automatisieren. Probieren Sie nach der Installation von `web-ext` Folgendes aus:

```bash
cd beastify
web-ext run
```

## Was nun?

Nachdem Sie nun eine fortgeschrittenere Erweiterung für Firefox erstellt haben:

- [Lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Erfahren Sie, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Vertiefen Sie Ihr Wissen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
