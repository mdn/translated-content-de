---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Im Tutorial [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) haben Sie die Grundlagen zum Erstellen einer Erweiterung kennengelernt. In diesem Artikel erstellen Sie eine etwas komplexere Erweiterung, die weitere APIs veranschaulicht.

Die Erweiterung demonstriert viele grundlegende Konzepte der WebExtensions API, darunter:

- Das Hinzufügen einer Schaltfläche zur Symbolleiste.
- Das Erstellen eines Popup-Fensters mit HTML, CSS und JavaScript.
- Das Einfügen von Content Scripts in Webseiten.
- Die Kommunikation zwischen Content Scripts und dem Rest der Erweiterung.
- Das Bereitstellen von Ressourcen innerhalb der Erweiterung, die Webseiten verwenden können.

Die Erweiterung fügt der Firefox-Symbolleiste eine Schaltfläche hinzu. Wenn jemand darauf klickt, öffnet sich ein Popup, in dem ein Tier ausgewählt werden kann. Nach der Auswahl ersetzt die Erweiterung den Inhalt der aktiven Seite durch ein Bild dieses Tiers.

Dazu werden Sie:

- **Ein `action` definieren, also eine [Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) in der Firefox-Symbolleiste**.
  Für die Schaltfläche geben Sie Folgendes an:
  - Ein Standardsymbol sowie Symbole für die Darstellung mit hellem und dunklem Text in Firefox.
  - Einen Tooltip.
  - Ein Popup, das beim Klicken auf die Schaltfläche geöffnet wird. Das Popup enthält HTML, CSS und JavaScript.

- **Ein Symbol für die Erweiterung definieren**, das „beasts-48.png“ heißt. Die Add-ons-Verwaltung zeigt dieses Symbol zusammen mit den Details der Erweiterung an.
- **Ein Content Script namens „beastify.js“ schreiben, das die Erweiterung in Webseiten einfügt**.
  Dieser Code verändert die Seiten, um Tiere hinzuzufügen oder zu entfernen.
- **Einige Tierbilder als webzugängliche Ressourcen in die Erweiterung aufnehmen.**
  Die vom Content Script aktualisierten Seiten verwenden diese Bilder, um ein Tier anzuzeigen.

Die Gesamtstruktur der Erweiterung lässt sich so darstellen:

![Die Datei manifest.json enthält Symbole, Actions einschließlich Popups sowie webzugängliche Ressourcen. Der JavaScript-Code des Popups zur Tierauswahl ruft das Script beastify auf.](untitled-1.png)

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

- Die ersten drei Schlüssel ([`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) sind verpflichtend und enthalten grundlegende Metadaten zur Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, andernfalls optional. Es empfiehlt sich jedoch, diese Eigenschaft festzulegen, da sie in der Erweiterungsverwaltung des Browsers angezeigt wird (in Firefox beispielsweise unter `about:addons`).
- [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) ist optional, wird aber empfohlen: Die Eigenschaft stellt nützliche Informationen über die Erweiterung bereit.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, wird aber empfohlen; damit können Sie ein Symbol für die Erweiterung angeben.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist erforderlich.
  - Die Eigenschaft `gecko` stellt addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen zur Erweiterung bereit:
  - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese ID wird benötigt, bevor eine Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
  - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt an, ob die Erweiterung personenbezogene Daten erfasst und übermittelt. Dieses Beispiel erfasst und übermittelt keine Daten.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. In diesem Beispiel fordert sie die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) an.
- [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) legt die Symbolleisten-Schaltfläche, ihre Symbole, ihren Tooltip und ihr Popup fest. Einzelheiten zu den in diesem Beispiel verwendeten Eigenschaften finden Sie unter [Die Symbolleisten-Schaltfläche](#die_symbolleisten-schaltfläche).
- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die für Webseiten zugänglich sein sollen. Da die Erweiterung den Seiteninhalt durch Bilder ersetzt, die in der Erweiterung enthalten sind, müssen diese Bilder für die Seite zugänglich sein.

Beachten Sie, dass alle angegebenen Pfade relativ zur Datei manifest.json sind.

### Das Symbol

Die Erweiterung sollte ein Symbol haben. Die Add-ons-Verwaltung („about:addons“) zeigt es neben dem Eintrag der Erweiterung an. In der manifest.json ist „icons/beasts-48.png“ als Symbol der Erweiterung angegeben.

Erstellen Sie das Verzeichnis „icons“ und speichern Sie darin ein Symbol namens „beasts-48.png“. Sie können [das Symbol aus dem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png) verwenden. Es stammt aus dem [Free Retina iconset von Aha-Soft](https://www.aha-soft.com/free-icons/free-retina-icon-set/) und wird unter dessen Lizenz verwendet.

Wenn Sie ein Symbol bereitstellen, sollte es 48 × 48 Pixel groß sein. Für hochauflösende Bildschirme können Sie zusätzlich ein Symbol mit 96 × 96 Pixeln bereitstellen. Geben Sie es in der manifest.json als Eigenschaft `96` des Objekts `icons` an:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Symbolleisten-Schaltfläche

Mit dem Schlüssel [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) fügen Sie eine Symbolleisten-Schaltfläche hinzu und passen sie an. Der Schlüssel und alle seine Eigenschaften sind optional. Wenn Sie eine Symbolleisten-Schaltfläche verwenden, legen Sie jedoch Eigenschaften für ihre Anpassung fest und fügen bei Bedarf ein Popup hinzu, das beim Klicken auf die Schaltfläche erscheint. In diesem Beispiel werden folgende Eigenschaften verwendet:

- `default_icon` verweist auf das Standardsymbol der Schaltfläche.
- `theme_icons` stellt alternative Symbole für Themes bereit:
  - `light` gibt das Symbol (`icons/beasts-32-light.png`) an, das bei hellem Text verwendet wird (üblicherweise bei einem dunklen Theme).
  - `dark` gibt das Symbol (`icons/beasts-32.png`) an, das bei dunklem Text verwendet wird (üblicherweise bei einem hellen Theme).
  - `size` gibt die Größe des Symbols in Pixeln an.
- `default_title` enthält den Text des Tooltips, den Firefox anzeigt, wenn der Mauszeiger über der Schaltfläche steht.
- `default_popup` verweist auf die HTML-Datei des Popups. Weitere Einzelheiten finden Sie unter [Das Popup](#das_popup).

Speichern Sie Ihre Symbole im Verzeichnis „icons“ oder verwenden Sie die Symbole aus dem Beispielquellcode auf GitHub:

- [beasts-32.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png)
- [beasts-32-light.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32-light.png)

Beide Symbole basieren auf einem Symbol aus dem [IconBeast Lite icon set](https://www.iconbeast.com/free/) und werden unter dessen [Lizenz](https://www.iconbeast.com/faq/) verwendet.

### Das Popup

Für Symbolleisten-Schaltflächen können Sie ein Popup hinzufügen, das beim Klicken auf die Schaltfläche geöffnet wird.

Wenn Sie kein Popup angeben, löst ein Klick auf die Schaltfläche ein {{WebExtAPIRef("action.onClicked")}}-Ereignis für Ihre Erweiterung aus. Die Erweiterung kann dieses Ereignis nutzen, um die mit der Schaltfläche verknüpfte Funktion auszuführen.

In diesem Beispiel benötigen Sie ein Popup. Darin können Nutzer eines von drei Tieren auswählen.

Erstellen Sie im Stammverzeichnis der Erweiterung ein Verzeichnis namens „popup“. Darin erstellen Sie den Code für das Popup. Es besteht aus drei Dateien:

- `choose_beast.html` definiert den Inhalt des Popup-Fensters.
- `choose_beast.css` gestaltet den Inhalt.
- `choose_beast.js` verarbeitet die Auswahl, indem es ein Content Script im aktiven Tab ausführt.

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

Das HTML enthält ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit der ID `"popup-content"`. Dieses Element enthält für jedes Tier eine Schaltfläche sowie eine Schaltfläche zum Zurücksetzen. Ein weiteres `<div>` hat die ID `"error-content"` und die Klasse `"hidden"`. Die Erweiterung verwendet dieses zweite `<div>`, wenn sie das Popup nicht initialisieren kann.

Beachten Sie, dass das HTML die CSS- und JavaScript-Dateien aus dem Verzeichnis einbindet, genau wie eine Webseite es kann.

#### choose_beast.css

Das CSS legt die Größe des Popups fest, sorgt dafür, dass die drei Auswahlmöglichkeiten den verfügbaren Platz ausfüllen, und fügt eine grundlegende Gestaltung hinzu. Außerdem blendet es Elemente mit `class="hidden"` aus. Dadurch ist das Element `<div id="error-content"...` standardmäßig ausgeblendet.

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

Dies ist der JavaScript-Code für das Popup:

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

Sobald das Popup geladen wird, führt sein Script mithilfe der API [`browser.scripting.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript) [das Content Script](#das_content_script) im aktiven Tab aus. Wird das Content Script erfolgreich ausgeführt, bleibt es auf der Seite geladen, bis der Tab geschlossen wird oder zu einer anderen Seite navigiert wird.

Der Aufruf von `browser.scripting.executeScript()` kann fehlschlagen, wenn die Erweiterung auf der aktiven Seite keine Content Scripts ausführen darf. Beispielsweise kann eine Erweiterung keine Scripts auf privilegierten Browserseiten wie `about:debugging` oder auf Seiten der Domain [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Schlägt der Aufruf fehl, blendet `reportExecuteScriptError()` das Element `<div id="popup-content">` aus, zeigt das Element `<div id="error-content"...` an und protokolliert einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/).

Wird das Content Script ausgeführt, ruft der Code `listenForClicks()` auf. Diese Funktion überwacht Klicks im Popup. Anschließend gilt:

- Erfolgt ein Klick nicht auf eine Schaltfläche im Popup, wird er ignoriert.
- Erfolgt ein Klick auf eine Schaltfläche mit `type="reset"`, ruft der Code `reset()` auf.
- Erfolgt ein Klick auf eine andere Schaltfläche (also eine Tier-Schaltfläche), ruft der Code `beastify()` auf.

Die Funktion `beastify()` führt drei Schritte aus:

- Sie ordnet der angeklickten Schaltfläche eine URL zu, die auf ein Tierbild verweist.
- Sie blendet den Seiteninhalt aus, indem sie mithilfe der API [`browser.scripting.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS) CSS einfügt.
- Sie sendet mithilfe der API [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) eine „beastify“-Nachricht an das Content Script. Dabei übergibt sie die URL des Tierbilds und fordert das Script auf, die Seite entsprechend zu verändern.

Die Funktion `reset()` macht die Änderung durch `beastify()` rückgängig. Sie:

- Entfernt das hinzugefügte CSS mithilfe der API [`browser.scripting.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS).
- Sendet eine „reset“-Nachricht an das Content Script und fordert es auf, die Seite zurückzusetzen.

### Das Content Script

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

Als Erstes prüft das Content Script die globale Variable `window.hasRun`: Ist sie gesetzt, beendet sich das Script; andernfalls setzt es `window.hasRun` und fährt fort. Der Grund dafür ist, dass beim Öffnen des Popups jedes Mal ein Content Script im aktiven Tab ausgeführt wird. Dadurch könnten mehrere Instanzen des Scripts in einem Tab laufen. In diesem Fall muss der Code sicherstellen, dass nur die erste Instanz aktiv wird.

Anschließend überwacht das Content Script mithilfe der API [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) Nachrichten aus dem Popup. Wie bereits beschrieben, kann das Popup-Script zwei Nachrichten senden: „beastify“ und „reset“.

- Bei der Nachricht „beastify“ erwartet der Code eine URL, die auf ein Tierbild verweist. Die Erweiterung entfernt alle Tiere, die durch vorherige „beastify“-Aufrufe hinzugefügt wurden. Anschließend erstellt sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element, setzt dessen `src`-Attribut auf die URL des Tierbilds und fügt das Element hinzu.
- Bei der Nachricht „reset“ entfernt die Erweiterung alle hinzugefügten Tiere.

### Die Tiere

Zum Schluss fügen Sie die Tierbilder hinzu.

Erstellen Sie ein Verzeichnis namens „beasts“ und fügen Sie die drei Bilder unter den entsprechenden Namen hinzu. Sie finden die Bilder im [GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder hier:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdboa mit weißen Streifen.](snake.jpg)

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

Laden Sie die Erweiterung nun als temporäres Add-on. Öffnen Sie `about:debugging` in Firefox, klicken Sie auf **Dieser Firefox** und dann auf **Temporäres Add-on laden**. Wählen Sie anschließend Ihre Datei manifest.json aus.

Firefox fügt die Schaltfläche der Erweiterung zunächst zum Erweiterungsmenü hinzu. Sie müssen sie daher an die Symbolleiste anheften. Klicken Sie in der Symbolleiste auf die Erweiterungs-Schaltfläche (Puzzleteil-Symbol) und suchen Sie die Erweiterung. Klicken Sie auf das Dreipunktmenü der Erweiterung oder mit der rechten Maustaste auf die Erweiterung und wählen Sie **An Symbolleiste anheften**:

![Das Erweiterungsmenü mit geöffnetem Menü der Beastify-Erweiterung und hervorgehobener Option zum Anheften an die Symbolleiste](beastify_icon.png)

Das Symbol der Erweiterung erscheint nun in der Firefox-Symbolleiste.

Öffnen Sie eine Webseite, klicken Sie auf das Symbol und wählen Sie ein Tier aus. Die Webseite verändert sich entsprechend:

![Das Beastify-Popup mit hervorgehobener Schildkrötenauswahl und einer Seite, deren Inhalt durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Über die Befehlszeile entwickeln

Mit dem Tool [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) können Sie die temporäre Installation automatisieren. Probieren Sie nach der Installation von `web-ext` Folgendes aus:

```bash
cd beastify
web-ext run
```

## Wie geht es weiter?

Nachdem Sie eine etwas anspruchsvollere Erweiterung für Firefox erstellt haben, können Sie:

- [Mehr über den Aufbau einer Erweiterung erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Beispiele für Erweiterungen erkunden](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Erfahren, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Ihr Wissen weiter vertiefen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
