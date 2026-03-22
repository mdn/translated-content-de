---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

Das Tutorial [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) hat Sie in den grundlegenden Prozess der Erstellung einer Erweiterung eingeführt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die zusätzliche APIs demonstriert.

Die von Ihnen entwickelte Erweiterung veranschaulicht viele der grundlegenden Konzepte der WebExtensions-API, einschließlich:

- Hinzufügen eines Buttons zur Symbolleiste.
- Definieren eines Popup-Panels mit HTML, CSS und JavaScript.
- Injizieren von Inhalts-Skripten in Webseiten.
- Kommunikation zwischen Inhalts-Skripten und dem Rest der Erweiterung.
- Verpackung von Ressourcen mit Ihrer Erweiterung, die von Webseiten genutzt werden können.

Die Erweiterung fügt der Firefox-Symbolleiste einen Button hinzu. Wenn der Benutzer den Button klickt, zeigt die Erweiterung ein Popup an, das es ermöglicht, ein Tier auszuwählen. Wenn der Benutzer ein Tier auswählt, ersetzt die Erweiterung den Inhalt der aktiven Seite durch ein Bild dieses Tieres.

Um dies zu implementieren, müssen Sie:

- **Eine `action` definieren, bei der es sich um einen [Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) handelt, der an die Firefox-Symbolleiste angehängt ist.**
  Für den Button liefern Sie:
  - Ein Icon mit dem Namen "beasts-32.png".
  - Ein Popup, das geöffnet wird, wenn der Benutzer den Button drückt. Das Popup enthält HTML, CSS und JavaScript.

- **Ein Icon für die Erweiterung definieren**, das "beasts-48.png" heißt. Der Add-ons Manager zeigt dieses Icon mit den Details der Erweiterung an.
- **Ein Inhalts-Skript "beastify.js" schreiben, das die Erweiterung in Webseiten injiziert**.
  Dieser Code ändert die Seiten, um Bestien hinzuzufügen oder zu entfernen.
- **Einige Bilder der Tiere als Web-zugängliche Ressourcen verpacken.**
  Diese Bilder werden von den durch das Inhalts-Skript aktualisierten Seiten verwendet, um eine Bestie anzuzeigen.

Sie könnten die Gesamtstruktur der Erweiterung wie folgt visualisieren:

![Die manifest.json-Datei enthält Icons, Aktionen einschließlich Popups und Web-zugängliche Ressourcen. Die JavaScript-Popup-Ressource "choose beast" ruft das Beastify-Skript auf.](untitled-1.png)

Den [vollständigen Quellcode für die Erweiterung finden Sie auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Schreiben der Erweiterung

Erstellen Sie ein Verzeichnis und navigieren Sie zu diesem:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Jetzt erstellen Sie eine Datei namens "manifest.json" und geben ihr diesen Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, sonst ist es optional. Es ist jedoch eine gute Idee, diese Eigenschaft zu setzen, da sie im Erweiterungsmanager des Browsers angezeigt wird (zum Beispiel `about:addons` in Firefox).
- [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) ist optional, aber empfohlen: sie bietet nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen; es ermöglicht Ihnen, ein Icon für die Erweiterung festzulegen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist erforderlich.
  - Die `gecko`-Eigenschaft bietet addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen über die Erweiterung:
  - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese ID ist erforderlich, bevor eine Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
  - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt an, ob die Erweiterung persönlich identifizierbare Informationen sammelt und überträgt. Dieses Beispiel sammelt oder überträgt keine Daten.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. In diesem Beispiel verlangt die Erweiterung die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) spezifiziert den Symbolleisten-Button. Hier geben Sie drei Teile an Informationen an, die alle optional sind:
  - `default_icon` verweist auf das Icon des Buttons.
  - `default_title` liefert Text für einen Tooltip, der für den Aktionsbutton angezeigt wird.
  - `default_popup` verweist auf eine HTML-Datei, die mit der Erweiterung enthalten ist und den Inhalt des Popups definiert.
- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die für Webseiten zugänglich gemacht werden sollen. Da die Erweiterung den Inhalt der Seite durch Bilder ersetzt, die in der Erweiterung verpackt sind, müssen Sie diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zur manifest.json-Datei sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses Icon wird vom Add-ons-Manager ("about:addons") neben der Auflistung der Erweiterung angezeigt. Die manifest.json gibt an, dass das Icon der Erweiterung bei "icons/beasts-48.png" ist.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Icon mit dem Namen "beasts-48.png". Sie könnten [das aus dem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png), das aus Aha-Soft's Free Retina Iconset stammt und unter dessen Lizenz verwendet wird.

Wenn Sie sich entscheiden, ein Icon bereitzustellen, sollte es 48x48 Pixel groß sein. Sie können auch ein Icon mit 96x96 Pixeln bereitstellen, für hochauflösende Displays; benennen Sie es als `96`-Eigenschaft des `icons`-Objekts in der manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Der Symbolleisten-Button

Der Symbolleisten-Button benötigt ebenfalls ein Icon, und manifest.json gibt an, dass es bei "icons/beasts-32.png" ist.

Speichern Sie ein Icon namens "beasts-32.png" im Verzeichnis "icons". Sie könnten [das aus dem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png), das aus dem [IconBeast Lite icon set](https://www.iconbeast.com/free/) stammt und unter seiner [Lizenz](https://www.iconbeast.com/faq/) verwendet wird.

### Das Popup

Wenn Sie kein Popup bereitstellen, sendet Firefox bei einem Klick auf den Symbolleisten-Button ein Klick-Ereignis an Ihre Erweiterung. Wenn Sie ein Popup bereitstellen, öffnet sich dieses bei einem Klick auf den Symbolleisten-Button, und Firefox sendet kein Klick-Ereignis.

Für dieses Beispiel möchten Sie ein Popup. Die Funktion des Popups ist, dem Benutzer zu ermöglichen, eine von drei Bestien auszuwählen.

Erstellen Sie ein Verzeichnis namens "popup" unter dem Stammverzeichnis der Erweiterung. In diesem Verzeichnis erstellen Sie den Code für das Popup. Das Popup besteht aus drei Dateien:

- `choose_beast.html` definiert den Inhalt des Panels.
- `choose_beast.css` gestaltet den Inhalt.
- `choose_beast.js` verarbeitet die Auswahl des Benutzers durch das Ausführen eines Inhalts-Skripts im aktiven Tab.

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht folgendermaßen aus:

```html
<!DOCTYPE html>
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

Das HTML enthält ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit der ID `"popup-content"`. Das Element enthält einen Button für jede Tieraulwahl und einen Zurücksetzen-Button. Ein weiteres `<div>` hat die ID `"error-content"` und eine Klasse `"hidden"`. Die Erweiterung verwendet dieses zweite `<div>`, wenn sie das Popup nicht initialisieren kann.

Beachten Sie, dass das HTML die CSS- und JavaScript-Dateien aus dem Verzeichnis einbindet, ähnlich wie eine Webseite.

#### choose_beast.css

Das CSS fixiert die Größe des Popups, stellt sicher, dass die drei Auswahlmöglichkeiten den Raum ausfüllen, und fügt grundlegende Stile hinzu. Es versteckt auch Elemente mit `class="hidden"`, was bedeutet, dass die Erweiterung das `<div id="error-content"...`-Element standardmäßig versteckt.

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

Das Popup-Skript führt [das Inhalts-Skript aus](#the-content-script), sobald das Popup geladen wird, indem es die [`browser.scripting.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript)-API verwendet. Wenn die Ausführung des Inhalts-Skripts erfolgreich ist, bleibt es bis zum Schließen des Tabs oder bis der Benutzer auf eine andere Seite navigiert, geladen.

Der `browser.scripting.executeScript()`-Aufruf kann fehlschlagen, wenn die Erweiterung keine Inhalts-Skripte auf der aktiven Seite ausführen kann. Zum Beispiel kann eine Erweiterung keine Skripte auf privilegierten Browserseiten wie `about:debugging` oder auf Seiten der Domain [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Wenn der Aufruf fehlschlägt, versteckt `reportExecuteScriptError()` das `<div id="popup-content">`-Element, zeigt das `<div id="error-content"...`-Element an und protokolliert einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/).

Wenn das Inhalts-Skript ausgeführt wird, wird `listenForClicks()` aufgerufen. Dieser Code lauscht auf Klicks im Popup. Dann:

- Wenn ein Klick nicht auf einen Button im Popup ist, wird er ignoriert und nichts wird getan.
- Wenn ein Klick auf einem Button mit `type="reset"` ist, dann wird `reset()` aufgerufen.
- Wenn ein Klick auf einem anderen Button (d.h. einem Bestien-Button) ist, dann wird `beastify()` aufgerufen.

Die Funktion `beastify()` führt drei Dinge aus:

- Ordnet den geklickten Button einer URL zu, die auf ein Bild einer Bestie verweist.
- Versteckt den Inhalt der Seite durch das Injizieren von CSS, verwendet die [`browser.scripting.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS)-API.
- Sendet eine "beastify"-Nachricht an das Inhalts-Skript, indem die [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)-API verwendet wird, übergibt die URL des Bestien-Bildes und fragt es, die Seite zu beastify.

Die Funktion `reset()` macht ein Beastify rückgängig. Sie:

- Entfernt das hinzugefügte CSS, indem die [`browser.scripting.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS)-API verwendet wird.
- Sendet eine "reset"-Nachricht an das Inhalts-Skript, um es zu bitten, die Seite zurückzusetzen.

### Das Inhalts-Skript

Erstellen Sie ein Verzeichnis unter dem Stammverzeichnis der Erweiterung, das "content_scripts" heißt, und erstellen Sie eine Datei darin namens "beastify.js", mit diesem Inhalt:

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

Das erste, was das Inhalts-Skript tut, ist zu prüfen, ob die globale Variable `window.hasRun` gesetzt ist: Wenn sie gesetzt ist, beendet das Skript den Betrieb; andernfalls setzt es `window.hasRun` und fährt fort. Der Grund dafür ist, dass wann immer der Benutzer das Popup öffnet, es ein Inhalts-Skript im aktiven Tab ausführt, sodass die Erweiterung mehrere Instanzen des Skripts in einem einzigen Tab haben könnte. Wenn dies passiert, muss der Code sicherstellen, dass nur die erste Instanz etwas unternimmt.

Das Inhalts-Skript hört dann auf Nachrichten vom Popup, indem die [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)-API verwendet wird. Sie haben zuvor gesehen, dass das Popup-Skript zwei Nachrichten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" ist, erwartet der Code, dass sie eine URL zu einem Bestien-Bild enthält. Die Erweiterung entfernt alle durch vorherige "beastify"-Aufrufe hinzugefügten Bestien, dann konstruiert und hängt sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element an, dessen `src`-Attribut auf die Bestien-URL gesetzt wird.
- Wenn die Nachricht "reset" ist, entfernt die Erweiterung alle hinzugefügten Bestien.

### Die Bestien

Fügen Sie schließlich die Bilder der Bestien hinzu.

Erstellen Sie ein Verzeichnis namens "beasts" und fügen Sie die drei Bilder mit den entsprechenden Namen hinzu. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdbaumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Testen Sie es aus

Überprüfen Sie zuerst, dass Sie die richtigen Dateien an den richtigen Stellen haben:

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

Laden Sie nun die Erweiterung als vorübergehendes Add-on. Öffnen Sie `about:debugging` in Firefox, klicken Sie auf **Dieser Firefox** und dann auf **Vorübergehendes Add-on laden** und wählen Sie Ihre manifest.json-Datei aus. Sie sehen das Icon der Erweiterung in der Firefox-Symbolleiste:

![Das Beastify-Icon in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Icon, wählen Sie eine Bestie aus und sehen Sie, wie sich die Webseite ändert:

![Eine Seite, die mit dem Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Entwicklung über die Befehlszeile

Sie können den Schritt der vorübergehenden Installation automatisieren, indem Sie das [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)-Tool verwenden. Nachdem Sie `web-ext` installiert haben, versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was kommt als Nächstes?

Jetzt, da Sie eine fortgeschrittenere Erweiterung für Firefox erstellt haben:

- [Lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Erforschen Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Vertiefen Sie Ihr Lernen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
