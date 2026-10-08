---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Im Tutorial [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) haben Sie die grundlegenden Schritte zum Schreiben einer Erweiterung kennengelernt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die weitere APIs demonstriert.

Die Erweiterung veranschaulicht viele grundlegende Konzepte der WebExtensions-API, darunter:

- Das Hinzufügen einer Schaltfläche zur Symbolleiste.
- Das Definieren eines Popups mit HTML, CSS und JavaScript.
- Das Einfügen von Content-Skripten in Webseiten.
- Die Kommunikation zwischen Content-Skripten und dem Rest der Erweiterung.
- Das Bündeln von Ressourcen mit der Erweiterung, die Webseiten verwenden können.

Die Erweiterung fügt der Firefox-Symbolleiste eine Schaltfläche hinzu. Wenn jemand darauf klickt, zeigt die Erweiterung ein Popup an, in dem ein Tier ausgewählt werden kann. Nach der Auswahl ersetzt die Erweiterung den Inhalt der aktiven Seite durch ein Bild dieses Tiers.

Dazu gehen Sie wie folgt vor:

- **Definieren Sie eine `action`, also eine [Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) in der Firefox-Symbolleiste**.
  Für die Schaltfläche geben Sie Folgendes an:
  - Ein Standardsymbol sowie Symbole für die Anzeige von hellem und dunklem Text in Firefox.
  - Einen Tooltip.
  - Ein Popup, das beim Klicken auf die Schaltfläche geöffnet wird. Das Popup enthält HTML, CSS und JavaScript.

- **Definieren Sie ein Symbol für die Erweiterung** namens „beasts-48.png“. Der Add-ons-Manager zeigt dieses Symbol bei den Details der Erweiterung an.
- **Schreiben Sie ein Content-Skript namens „beastify.js“, das die Erweiterung in Webseiten einfügt**.
  Dieser Code verändert die Seiten, um Tiere hinzuzufügen oder zu entfernen.
- **Bündeln Sie einige Tierbilder als für Webseiten zugängliche Ressourcen.**
  Die vom Content-Skript aktualisierten Seiten verwenden diese Bilder, um ein Tier anzuzeigen.

Die Gesamtstruktur der Erweiterung lässt sich so darstellen:

![Die Datei manifest.json enthält Symbole, Aktionen einschließlich Popups und für Webseiten zugängliche Ressourcen. Die JavaScript-Ressource des Popups zur Tierauswahl ruft das beastify-Skript auf.](untitled-1.png)

Den [vollständigen Quellcode der Erweiterung finden Sie auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Die Erweiterung schreiben

Erstellen Sie ein Verzeichnis und wechseln Sie hinein:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine Datei namens „manifest.json“ mit folgendem Inhalt:

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

- Die ersten drei Schlüssel ([`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) sind erforderlich und enthalten grundlegende Metadaten zur Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, ansonsten optional. Es empfiehlt sich jedoch, diese Eigenschaft festzulegen, da sie im Erweiterungsmanager des Browsers angezeigt wird (beispielsweise unter `about:addons` in Firefox).
- [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) ist optional, wird aber empfohlen: Die Eigenschaft liefert nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, wird aber empfohlen; damit können Sie ein Symbol für die Erweiterung angeben.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist erforderlich.
  - Die Eigenschaft `gecko` stellt addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen über die Erweiterung bereit:
  - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese ID wird benötigt, bevor eine Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
  - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt an, ob die Erweiterung personenbezogene Daten erfasst und übermittelt. Dieses Beispiel erfasst oder übermittelt keine Daten.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. In diesem Beispiel fordert die Erweiterung die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) an.
- [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) legt die Schaltfläche in der Symbolleiste, ihre Symbole, ihren Tooltip und ihr Popup fest. Einzelheiten zu den in diesem Beispiel verwendeten Eigenschaften finden Sie unter [Die Schaltfläche in der Symbolleiste](#die_schaltfläche_in_der_symbolleiste).
- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die Sie für Webseiten zugänglich machen möchten. Da die Erweiterung den Seiteninhalt durch Bilder ersetzt, die in der Erweiterung enthalten sind, müssen diese Bilder für die Seite zugänglich sein.

Beachten Sie, dass alle angegebenen Pfade relativ zur Datei manifest.json sind.

### Das Symbol

Die Erweiterung sollte ein Symbol haben. Der Add-ons-Manager („about:addons“) zeigt dieses Symbol neben dem Eintrag der Erweiterung an. Laut manifest.json befindet sich das Symbol der Erweiterung unter „icons/beasts-48.png“.

Erstellen Sie das Verzeichnis „icons“ und speichern Sie darin ein Symbol namens „beasts-48.png“. Sie können [das Symbol aus dem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden. Es stammt aus dem [kostenlosen Retina-Iconset von Aha-Soft](https://www.aha-soft.com/free-icons/free-retina-icon-set/) und wird gemäß dessen Lizenz verwendet.

Wenn Sie ein Symbol bereitstellen, sollte es 48 × 48 Pixel groß sein. Für hochauflösende Bildschirme können Sie zusätzlich ein Symbol mit 96 × 96 Pixeln bereitstellen. Geben Sie es in manifest.json als Eigenschaft `96` des Objekts `icons` an:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Schaltfläche in der Symbolleiste

Mit dem Schlüssel [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) fügen Sie eine Schaltfläche zur Symbolleiste hinzu und passen sie an. Der Schlüssel und alle seine Eigenschaften sind optional. Wenn Sie eine Schaltfläche in der Symbolleiste verwenden, legen Sie jedoch Eigenschaften fest, um sie anzupassen und bei Bedarf ein Popup hinzuzufügen, das beim Klicken auf die Schaltfläche erscheint. Dieses Beispiel verwendet:

- `default_icon` verweist auf das Standardsymbol der Schaltfläche.
- `theme_icons` stellt alternative Symbole für Themes bereit:
  - `light` legt das Symbol (`icons/beasts-32-light.png`) fest, das bei hellem Text verwendet wird (üblicherweise bei einem dunklen Theme).
  - `dark` legt das Symbol (`icons/beasts-32.png`) fest, das bei dunklem Text verwendet wird (üblicherweise bei einem hellen Theme).
  - `size` legt die Größe des Symbols in Pixeln fest.
- `default_title` enthält den Text des Tooltips, den Firefox anzeigt, wenn jemand den Mauszeiger über die Schaltfläche bewegt.
- `default_popup` verweist auf die HTML-Datei des Popups. Einzelheiten finden Sie unter [Das Popup](#das_popup).

Speichern Sie Ihre Symbole im Verzeichnis „icons“ oder verwenden Sie die aus dem Beispielquellcode auf GitHub:

- [beasts-32.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png)
- [beasts-32-light.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32-light.png)

Beide Symbole basieren auf einem Symbol aus dem [IconBeast-Lite-Iconset](https://www.iconbeast.com/free/) und werden gemäß dessen [Lizenz](https://www.iconbeast.com/faq/) verwendet.

### Das Popup

Bei Schaltflächen in der Symbolleiste können Sie ein Popup hinzufügen, das beim Klicken auf die Schaltfläche geöffnet wird.

Wenn Sie kein Popup angeben, löst ein Klick auf die Schaltfläche ein {{WebExtAPIRef("action.onClicked")}}-Ereignis für Ihre Erweiterung aus. Ihre Erweiterung verwendet dieses Ereignis, um die mit der Schaltfläche verknüpfte Funktion auszuführen.

In diesem Beispiel benötigen Sie ein Popup. Damit können Benutzer eines von drei Tieren auswählen.

Erstellen Sie im Stammverzeichnis der Erweiterung ein Verzeichnis namens „popup“. Darin erstellen Sie den Code für das Popup. Das Popup besteht aus drei Dateien:

- `choose_beast.html` definiert den Inhalt des Panels.
- `choose_beast.css` gestaltet den Inhalt.
- `choose_beast.js` verarbeitet die Auswahl, indem es ein Content-Skript im aktiven Tab ausführt.

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht so aus:

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

Das HTML enthält ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit der ID `"popup-content"`. Das Element enthält für jedes Tier eine Schaltfläche sowie eine Schaltfläche zum Zurücksetzen. Ein weiteres `<div>` hat die ID `"error-content"` und die Klasse `"hidden"`. Die Erweiterung verwendet dieses zweite `<div>`, wenn sie das Popup nicht initialisieren kann.

Beachten Sie, dass das HTML die CSS- und JavaScript-Dateien aus dem Verzeichnis einbindet, genau wie es bei einer Webseite möglich ist.

#### choose_beast.css

Das CSS legt die Größe des Popups fest, sorgt dafür, dass die drei Auswahlmöglichkeiten den verfügbaren Platz ausfüllen, und fügt eine grundlegende Gestaltung hinzu. Außerdem blendet es Elemente mit `class="hidden"` aus. Daher ist das Element `<div id="error-content"...` standardmäßig ausgeblendet.

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

Hier ist der JavaScript-Code für das Popup:

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

Das Popup-Skript führt [das Content-Skript](#das_content-skript) mit der API [`browser.scripting.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript) im aktiven Tab aus, sobald das Popup geladen wird. Wenn die Ausführung erfolgreich ist, bleibt das Content-Skript auf der Seite geladen, bis der Tab geschlossen wird oder jemand zu einer anderen Seite navigiert.

Der Aufruf von `browser.scripting.executeScript()` kann fehlschlagen, wenn die Erweiterung auf der aktiven Seite keine Content-Skripte ausführen darf. Beispielsweise kann eine Erweiterung auf privilegierten Browserseiten wie `about:debugging` oder auf Seiten der Domain [addons.mozilla.org](https://addons.mozilla.org/) keine Skripte ausführen. Schlägt der Aufruf fehl, blendet `reportExecuteScriptError()` das Element `<div id="popup-content">` aus, zeigt das Element `<div id="error-content"...` an und protokolliert einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/).

Wenn das Content-Skript ausgeführt wurde, ruft der Code `listenForClicks()` auf. Diese Funktion überwacht Klicks im Popup. Anschließend gilt:

- Erfolgt der Klick nicht auf eine Schaltfläche im Popup, wird er ignoriert und es geschieht nichts.
- Erfolgt der Klick auf eine Schaltfläche mit `type="reset"`, ruft der Code `reset()` auf.
- Erfolgt der Klick auf eine andere Schaltfläche (also eine Schaltfläche für ein Tier), ruft der Code `beastify()` auf.

Die Funktion `beastify()` führt drei Aktionen aus:

- Sie ordnet der angeklickten Schaltfläche eine URL zu, die auf das Bild eines Tiers verweist.
- Sie blendet den Seiteninhalt aus, indem sie mit der API [`browser.scripting.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS) CSS einfügt.
- Sie sendet mit der API [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) eine „beastify“-Nachricht an das Content-Skript. Dabei übergibt sie die URL des Tierbilds und fordert das Skript auf, die Seite entsprechend zu verändern.

Die Funktion `reset()` macht die Änderungen von `beastify()` rückgängig. Sie:

- entfernt das hinzugefügte CSS mit der API [`browser.scripting.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS).
- sendet eine „reset“-Nachricht an das Content-Skript und fordert es auf, die Seite zurückzusetzen.

### Das Content-Skript

Erstellen Sie im Stammverzeichnis der Erweiterung ein Verzeichnis namens „content_scripts“ und darin eine Datei namens „beastify.js“ mit folgendem Inhalt:

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

Als Erstes prüft das Content-Skript die globale Variable `window.hasRun`: Ist sie gesetzt, wird das Skript beendet. Andernfalls setzt es `window.hasRun` und fährt fort. Das ist nötig, weil bei jedem Öffnen des Popups ein Content-Skript im aktiven Tab ausgeführt wird. Dadurch könnten mehrere Instanzen des Skripts in einem einzelnen Tab laufen. In diesem Fall muss der Code sicherstellen, dass nur die erste Instanz aktiv wird.

Anschließend überwacht das Content-Skript mit der API [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) Nachrichten vom Popup. Wie bereits beschrieben, kann das Popup-Skript zwei Nachrichten senden: „beastify“ und „reset“.

- Bei der Nachricht „beastify“ erwartet der Code eine darin enthaltene URL, die auf ein Tierbild verweist. Die Erweiterung entfernt alle durch frühere „beastify“-Aufrufe hinzugefügten Tiere. Anschließend erstellt sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element, setzt dessen Attribut `src` auf die URL des Tierbilds und fügt es der Seite hinzu.
- Bei der Nachricht „reset“ entfernt die Erweiterung alle hinzugefügten Tiere.

### Die Tiere

Fügen Sie zum Schluss die Tierbilder hinzu.

Erstellen Sie ein Verzeichnis namens „beasts“ und fügen Sie die drei Bilder mit den entsprechenden Namen hinzu. Sie können die Bilder aus dem [GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Eine smaragdgrüne Hundskopfboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Die Erweiterung testen

Prüfen Sie zunächst, ob sich alle Dateien am richtigen Ort befinden:

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

Laden Sie die Erweiterung nun als temporäres Add-on. Öffnen Sie `about:debugging` in Firefox, klicken Sie auf **Dieser Firefox** und dann auf **Temporäres Add-on laden** und wählen Sie Ihre Datei manifest.json aus. Das Symbol der Erweiterung erscheint in der Firefox-Symbolleiste:

![Das beastify-Symbol in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Symbol, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite verändert:

![Eine Seite, deren Inhalt durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Entwicklung über die Befehlszeile

Mit dem Tool [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) können Sie die temporäre Installation automatisieren. Probieren Sie nach der Installation von `web-ext` Folgendes aus:

```bash
cd beastify
web-ext run
```

## Wie geht es weiter?

Nachdem Sie eine komplexere Erweiterung für Firefox erstellt haben, können Sie:

- [sich über den Aufbau einer Erweiterung informieren](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Beispiele für Erweiterungen erkunden](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [erfahren, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Ihre Kenntnisse vertiefen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
