---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Das Tutorial [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) hat Sie in den grundlegenden Prozess der Entwicklung einer Erweiterung eingeführt. In diesem Artikel erstellen Sie eine etwas komplexere Erweiterung, die zusätzliche APIs demonstriert.

Die von Ihnen entwickelte Erweiterung veranschaulicht viele der grundlegenden Konzepte der WebExtensions API, einschließlich:

- Hinzufügen eines Buttons zur Symbolleiste.
- Definieren eines Popup-Panels mit HTML, CSS und JavaScript.
- Einfügen von Inhalts-Skripten in Webseiten.
- Kommunikation zwischen Inhalts-Skripten und dem Rest der Erweiterung.
- Verpacken von Ressourcen mit Ihrer Erweiterung, die von Webseiten genutzt werden können.

Die Erweiterung fügt einen Button zur Firefox-Symbolleiste hinzu. Wenn der Benutzer den Button klickt, zeigt die Erweiterung ein Popup an, das es ihm ermöglicht, ein Tier auszuwählen. Wenn der Benutzer ein Tier auswählt, ersetzt die Erweiterung den Inhalt der aktiven Seite durch ein Bild dieses Tieres.

Um dies zu implementieren, gehen Sie wie folgt vor:

- **Definieren Sie eine `action`, die ein [Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist, der an der Firefox-Symbolleiste angebracht ist**.
  Für den Button liefern Sie:
  - Ein Icon, genannt "beasts-32.png".
  - Ein Popup, das geöffnet wird, wenn der Benutzer den Button drückt. Das Popup enthält HTML, CSS und JavaScript.

- **Definieren Sie ein Icon für die Erweiterung**, genannt "beasts-48.png". Der Add-ons-Manager zeigt dieses Icon mit den Details der Erweiterung an.
- **Schreiben Sie ein Inhalts-Skript, "beastify.js", das die Erweiterung in Webseiten einfügt**.
  Dieses Skript ändert die Seiten, um Tiere hinzuzufügen oder zu entfernen.
- **Verpacken Sie einige Bilder der Tiere als webseitenzugängliche Ressourcen**.
  Diese Bilder werden von den Seiten, die durch das Inhalts-Skript aktualisiert werden, referenziert, um ein Tier anzuzeigen.

Man könnte die Gesamtstruktur der Erweiterung so visualisieren:

![Die manifest.json-Datei enthält Icons, Aktionen, einschließlich Popups, und webseitenzugängliche Ressourcen. Die `choose beast` JavaScript-Popup-Ressource ruft das `beastify`-Skript auf.](untitled-1.png)

Sie können den [vollständigen Quellcode der Erweiterung auf GitHub finden](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Schreiben der Erweiterung

Erstellen Sie ein Verzeichnis und navigieren Sie dorthin:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine Datei namens "manifest.json" und geben Sie ihr diesen Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, ansonsten optional. Es ist jedoch eine gute Idee, diese Eigenschaft zu setzen, da sie im Erweiterungsmanager des Browsers angezeigt wird (zum Beispiel `about:addons` in Firefox).
- [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) ist optional, aber empfohlen: Sie bietet nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen; es ermöglicht Ihnen, ein Icon für die Erweiterung anzugeben.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist erforderlich.
  - Die `gecko` Eigenschaft bietet addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen über die Erweiterung:
  - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese ID ist erforderlich, bevor eine Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
  - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) bietet Informationen darüber, ob die Erweiterung personenbezogene Daten sammelt und überträgt. Dieses Beispiel sammelt oder überträgt keine Daten.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. In diesem Beispiel fordert die Erweiterung die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) an.
- [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) spezifiziert den Symbolleisten-Button. Sie geben hier drei Informationen an, die alle optional sind:
  - `default_icon` verweist auf das Icon des Buttons.
  - `default_title` liefert einen Text für ein Tooltip, das für den Aktionsbutton angezeigt wird.
  - `default_popup` verweist auf eine HTML-Datei, die mit der Erweiterung geliefert wird und den Inhalt der Popups definiert.
- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die Sie für Webseiten zugänglich machen möchten. Da die Erweiterung den Inhalt der Seite mit in der Erweiterung verpackten Bildern ersetzt, müssen Sie diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zur manifest.json-Datei sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses Icon wird vom Add-ons-Manager ("about:addons") neben dem Eintrag der Erweiterung angezeigt. Die manifest.json gibt an, dass sich das Icon der Erweiterung in "icons/beasts-48.png" befindet.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Icon namens "beasts-48.png". Sie können [das aus dem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png), welches aus [Aha-Soft's Free Retina Iconset](https://www.aha-soft.com/free-icons/free-retina-icon-set/) stammt und unter dessen Lizenz verwendet wird.

Wenn Sie sich entscheiden, ein Icon bereitzustellen, sollte es 48x48 Pixel groß sein. Sie können auch ein 96x96 Pixel großes Icon bereitstellen, für hochauflösende Displays; spezifizieren Sie es als `96`-Eigenschaft des `icons`-Objekts in manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Der Symbolleisten-Button

Auch der Symbolleisten-Button benötigt ein Icon, und manifest.json spezifiziert, dass es sich in "icons/beasts-32.png" befindet.

Speichern Sie ein Icon namens "beasts-32.png" im "icons"-Verzeichnis. Sie können [das aus dem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png), das aus dem [IconBeast Lite Icon Set](https://www.iconbeast.com/free/) stammt und unter seiner [Lizenz](https://www.iconbeast.com/faq/) verwendet wird.

### Das Popup

Wenn Sie kein Popup bereitstellen, löst Firefox ein Klickevent für Ihre Erweiterung aus, wenn der Benutzer den Symbolleisten-Button klickt. Wenn Sie ein Popup bereitstellen, öffnet sich das Popup, wenn der Benutzer den Symbolleisten-Button klickt, und Firefox löst kein Klickevent aus.

Für dieses Beispiel benötigen Sie ein Popup. Die Funktion des Popups besteht darin, dem Benutzer die Wahl zwischen drei Tieren zu ermöglichen.

Erstellen Sie ein Verzeichnis namens "popup" unter dem Erweiterungsstamm. Dieses Verzeichnis ist der Ort, an dem Sie den Code des Popups erstellen. Das Popup besteht aus drei Dateien:

- `choose_beast.html` definiert den Inhalt des Panels.
- `choose_beast.css` gestaltet den Inhalt.
- `choose_beast.js` verarbeitet die Auswahl des Benutzers, indem ein Inhalts-Skript im aktiven Tab ausgeführt wird.

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

Das HTML umfasst ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div)-Element mit einer ID von `"popup-content"`. Das Element enthält einen Button für jede Tierwahl und einen Rücksetz-Button. Ein weiteres `<div>` hat die ID `"error-content"` und eine Klasse `"hidden"`. Die Erweiterung verwendet dieses zweite `<div>`, wenn es nicht möglich ist, das Popup zu initialisieren.

Beachten Sie, dass das HTML die CSS- und JavaScript-Dateien aus dem Verzeichnis enthält, genau wie es eine Webseite kann.

#### choose_beast.css

Das CSS fixiert die Popup-Größe, stellt sicher, dass die drei Auswahlen den Raum füllen, und fügt grundlegende Stile hinzu. Es verbirgt auch Elemente mit `class="hidden"`, was bedeutet, dass die Erweiterung das `<div id="error-content"...`-Element standardmäßig ausblendet.

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

Das Popup-Skript führt [das Inhalts-Skript](#das_inhalts-skript) im aktiven Tab aus, sobald das Popup geladen ist, unter Verwendung der [`browser.scripting.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript) API. Wenn die Ausführung des Inhalts-Skriptes erfolgreich ist, bleibt es auf der Seite geladen, bis der Tab geschlossen oder der Benutzer zu einer anderen Seite navigiert.

Der Aufruf `browser.scripting.executeScript()` kann fehlschlagen, wenn die Erweiterung keine Inhalts-Skripte in der aktiven Seite ausführen kann. Beispielsweise kann eine Erweiterung keine Skripte auf privilegierten Browser-Seiten wie `about:debugging` oder auf Seiten in der [addons.mozilla.org](https://addons.mozilla.org/) Domäne ausführen. Wenn der Aufruf fehlschlägt, versteckt `reportExecuteScriptError()` das `<div id="popup-content">`-Element, zeigt das `<div id="error-content"...`-Element an und protokolliert einen Fehler in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/).

Wenn das Inhalts-Skript ausgeführt wird, ruft der Code `listenForClicks()` auf. Dieser Code lauscht auf Klicks im Popup. Dann:

- Wenn ein Klick nicht auf einem Button im Popup ist, wird er ignoriert, und es wird nichts getan.
- Wenn ein Klick auf einem Button mit `type="reset"` ist, ruft der Code `reset()` auf.
- Wenn ein Klick auf einem anderen Button (d.h. einem Tier-Button) ist, ruft der Code `beastify()` auf.

Die Funktion `beastify()` macht drei Dinge:

- Sie ordnet dem geklickten Button eine URL zu, die auf ein Bild eines Tieres zeigt.
- Sie verbirgt den Inhalt der Seite, indem sie CSS einfügt, unter Verwendung der [`browser.scripting.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS) API.
- Sie sendet eine "beastify"-Nachricht an das Inhalts-Skript, verwendet die [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API, übergibt ihm die URL zum Tierbild und fordert es auf, die Seite zu verändern.

Die Funktion `reset()` macht eine Veränderung rückgängig. Sie:

- Entfernt das hinzugefügte CSS, unter Verwendung der [`browser.scripting.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS) API.
- Sendet eine "reset"-Nachricht an das Inhalts-Skript und fordert es auf, die Seite zurückzusetzen.

### Das Inhalts-Skript

Erstellen Sie ein Verzeichnis, unter dem Erweiterungsstamm, namens "content_scripts" und erstellen Sie eine Datei darin namens "beastify.js", mit diesem Inhalt:

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

Das erste, was das Inhalts-Skript macht, ist das Überprüfen der globalen Variable `window.hasRun`: Wenn sie gesetzt ist, kehrt das Skript zurück; andernfalls setzt es `window.hasRun` und macht weiter. Der Grund dafür ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, ein Inhalts-Skript im aktiven Tab ausgeführt wird, sodass die Erweiterung mehrere Instanzen des Skripts in einem einzigen Tab haben könnte. Wenn dies geschieht, muss der Code sicherstellen, dass nur die erste Instanz etwas tut.

Das Inhalts-Skript hört dann auf Nachrichten vom Popup unter Verwendung der [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API. Vorher haben Sie gesehen, dass das Popup-Skript zwei Nachrichten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" lautet, erwartet der Code, dass sie eine URL enthält, die auf ein Tierbild zeigt. Die Erweiterung entfernt alle Tiere, die durch vorherige "beastify"-Aufrufe hinzugefügt wurden, und konstruiert und fügt ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element ein, dessen `src`-Attribut auf die Tier-URL gesetzt ist.
- Wenn die Nachricht "reset" lautet, entfernt die Erweiterung alle hinzugefügten Tiere.

### Die Tiere

Schließlich fügen Sie die Bilder der Tiere hinzu.

Erstellen Sie ein Verzeichnis namens "beasts" und fügen Sie die drei Bilder mit den entsprechenden Namen hinzu. Sie können die Bilder aus [dem GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier bekommen:

![Ein brauner Frosch.](frog.jpg)

![Eine Smaragdbaumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangenschmuckschildkröte.](turtle.jpg)

## Ausprobieren der Erweiterung

Überprüfen Sie zunächst, ob Sie die richtigen Dateien an den richtigen Orten haben:

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

Nun laden Sie die Erweiterung als temporäres Add-on. Öffnen Sie `about:debugging` in Firefox, klicken Sie auf **This Firefox** und dann auf **Load Temporary Add-on** und wählen Sie Ihre manifest.json-Datei. Sie sehen, dass das Icon der Erweiterung in der Firefox-Symbolleiste erscheint:

![Das Beastify-Icon in der Firefox-Symbolleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Icon, wählen Sie ein Tier und sehen Sie, wie sich die Webseite ändert:

![Eine Seite ersetzt durch das Bild einer Schildkröte](beastify_page.png)

## Entwicklung über die Kommandozeile

Sie können den temporären Installationsschritt automatisieren, indem Sie das [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool verwenden. Nachdem Sie `web-ext` installiert haben, versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was kommt als Nächstes?

Jetzt, da Sie eine fortgeschrittenere Erweiterung für Firefox erstellt haben:

- [Lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Erforschen Sie die Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Erfahren Sie, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Vertiefen Sie Ihr Lernen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
