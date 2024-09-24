---
title: Ihre zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{AddonSidebar}}

Wenn Sie den Artikel [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durchgearbeitet haben, haben Sie bereits eine Vorstellung davon, wie man eine Erweiterung schreibt. In diesem Artikel schreiben Sie eine etwas komplexere Erweiterung, die einige weitere APIs demonstriert.

Die Erweiterung fügt der Firefox-Werkzeugleiste eine neue Schaltfläche hinzu. Wenn der Benutzer auf die Schaltfläche klickt, wird ein Popup angezeigt, das ihm ermöglicht, ein Tier auszuwählen. Sobald er ein Tier ausgewählt hat, ersetzen wir den Inhalt der aktuellen Seite durch ein Bild des ausgewählten Tieres.

Um dies zu implementieren, werden wir:

- **eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) definieren, die eine Schaltfläche ist, die an die Firefox-Werkzeugleiste angehängt ist**. Für die Schaltfläche liefern wir:

  - ein Icon, genannt "beasts-32.png"
  - ein Popup, das geöffnet wird, wenn die Schaltfläche gedrückt wird. Das Popup wird HTML, CSS und JavaScript enthalten.

- **ein Icon für die Erweiterung definieren**, genannt "beasts-48.png". Dieses wird im Add-ons-Manager angezeigt.
- **ein Inhaltsskript "beastify.js" schreiben, das in Webseiten injiziert wird**.
  Dies ist der Code, der die Seiten tatsächlich verändert.
- **einige Bilder der Tiere verpacken, um Bilder auf der Webseite zu ersetzen**.
  Wir machen die Bilder zu „web accessible resources“, damit die Webseite auf sie zugreifen kann.

Sie könnten die Gesamtstruktur der Erweiterung so visualisieren:

![Die manifest.json-Datei enthält Icons, Browser-Aktionen, einschließlich Popups, und webzugängliche Ressourcen. Die JavaScript-Popup-Ressource zur Auswahl von Tieren ruft das beastify-Skript auf.](untitled-1.png)

Es ist eine einfache Erweiterung, zeigt jedoch viele der grundlegenden Konzepte der WebExtensions API:

- Hinzufügen einer Schaltfläche zur Symbolleiste
- Definieren eines Popup-Panels mit HTML, CSS und JavaScript
- Einfügen von Inhaltsskripten in Webseiten
- Kommunikation zwischen Inhaltsskripten und dem Rest der Erweiterung
- Verpackung von Ressourcen mit Ihrer Erweiterung, die von Webseiten verwendet werden können

Sie finden den [vollständigen Quellcode der Erweiterung auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/beastify).

## Schreiben der Erweiterung

Erstellen Sie ein neues Verzeichnis und navigieren Sie zu diesem:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstellen Sie nun eine neue Datei namens "manifest.json" und fügen Sie den folgenden Inhalt hinzu:

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Fügt ein Browser-Aktions-Icon zur Symbolleiste hinzu. Klicken Sie auf die Schaltfläche, um ein Tier auszuwählen. Der Inhalt der aktiven Registerkarte wird dann durch ein Bild des ausgewählten Tieres ersetzt. Siehe https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) sind verpflichtend und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional, aber empfohlen: Sie geben nützliche Informationen über die Erweiterung.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es ermöglicht Ihnen, ein Icon für die Erweiterung festzulegen, das im Add-ons-Manager angezeigt wird.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die die Erweiterung benötigt. Wir bitten hier nur um die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert die Schaltfläche in der Symbolleiste. Wir liefern hier drei Informationen:

  - `default_icon` ist verpflichtend und verweist auf das Icon der Schaltfläche.
  - `default_title` ist optional und wird in einem Tooltip angezeigt.
  - `default_popup` wird verwendet, wenn ein Popup angezeigt werden soll, wenn der Benutzer auf die Schaltfläche klickt. Wir möchten ein Popup, daher haben wir diesen Schlüssel eingefügt und lassen ihn auf eine in der Erweiterung enthaltene HTML-Datei verweisen.

- [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet Dateien auf, die für Webseiten zugänglich sein sollen. Da die Erweiterung den Inhalt der Seite durch Bilder ersetzt, die wir mit der Erweiterung verpackt haben, müssen wir diese Bilder für die Seite zugänglich machen.

Beachten Sie, dass alle angegebenen Pfade relativ zu manifest.json selbst sind.

### Das Icon

Die Erweiterung sollte ein Icon haben. Dieses wird neben dem Listeneintrag der Erweiterung im Add-ons-Manager angezeigt (Sie können diesen durch den Besuch der URL "about:addons" öffnen). Unser manifest.json hat versprochen, dass wir ein Symbol für die Symbolleiste bei "icons/beasts-48.png" haben.

Erstellen Sie das Verzeichnis "icons" und speichern Sie dort ein Icon mit dem Namen "beasts-48.png". Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png), das dem [Aha-Soft's Free Retina iconset](http://www.aha-soft.com/free-icons/free-retina-icon-set/) entnommen wurde und unter den Bedingungen seiner Lizenz verwendet wird.

Wenn Sie Ihr eigenes Icon bereitstellen, sollten es 48x48 Pixel haben. Sie könnten auch ein 96x96 Pixel großes Icon für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Symbolleistenschaltfläche

Die Symbolleistenschaltfläche benötigt auch ein Icon, und unser manifest.json hat versprochen, dass wir ein Symbol für die Symbolleiste bei "icons/beasts-32.png" haben.

Speichern Sie ein Icon mit dem Namen "beasts-32.png" im Verzeichnis "icons". Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png), das dem [IconBeast Lite icon set](http://www.iconbeast.com/free/) entnommen wurde und unter den Bedingungen seiner [Lizenz](http://www.iconbeast.com/faq/) verwendet wird.

Wenn Sie kein Popup bereitstellen, wird ein Klickevent an Ihre Erweiterung gesendet, wenn der Benutzer auf die Schaltfläche klickt. Wenn Sie ein Popup bereitstellen, wird das Klickevent nicht gesendet, sondern das Popup wird geöffnet. Wir möchten ein Popup, daher erstellen wir dieses als nächstes.

### Das Popup

Die Funktion des Popups ist es, dem Benutzer zu ermöglichen, eines von drei Tieren auszuwählen.

Erstellen Sie ein neues Verzeichnis namens "popup" unter dem Stammverzeichnis der Erweiterung. Hier speichern wir den Code für das Popup. Das Popup wird aus drei Dateien bestehen:

- **`choose_beast.html`** definiert den Inhalt des Bereichs
- **`choose_beast.css`** gestaltet den Inhalt
- **`choose_beast.js`** bearbeitet die Auswahl des Benutzers, indem es ein Inhaltsskript im aktiven Tab ausführt

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Die HTML-Datei sieht wie folgt aus:

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
      <p>Kann diese Webseite nicht „beastifizieren“.</p>
      <p>Versuchen Sie eine andere Seite.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

Wir haben ein [`<div>`](/de/docs/Web/HTML/Element/div)-Element mit der ID `"popup-content"`, das einen Button für jede Tierausschm°lAbtür und einen Reset-Button enthält. Wir haben ein weiteres `<div>` mit der ID `"error-content"` und einer Klasse `"hidden"`. Das werden wir verwenden, falls ein Problem bei der Initialisierung des Popups auftritt.

Beachten Sie, dass wir die CSS- und JS-Dateien aus dieser Datei einbeziehen, genau wie bei einer Webseite.

#### choose_beast.css

Das CSS legt die Größe des Popups fest, sorgt dafür, dass die drei Optionen den Raum ausfüllen, und gibt ihnen ein grundlegendes Styling. Es verbirgt auch Elemente mit `class="hidden"`: Dies bedeutet, dass unser `<div id="error-content"...` Element standardmäßig verborgen sein wird.

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
 * CSS, um alles auf der Seite zu verstecken,
 * außer Elemente mit der Klasse "beastify-image".
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Für Klicks auf die Schaltflächen horchen und die entsprechende Nachricht
 * an das Inhaltsskript in der Seite senden.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Bei Angabe des Namens eines Tieres die URL zum entsprechenden Bild erhalten.
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
     * Das CSS, um die Seite zu verbergen, in die aktive Registerkarte einfügen,
     * dann die Tier-URL erhalten und
     * eine "beastify"-Nachricht an das Inhaltsskript in der aktiven Registerkarte senden.
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
     * Das CSS, um die Seite zu verbergen, aus der aktiven Registerkarte entfernen,
     * eine "reset"-Nachricht an das Inhaltsskript in der aktiven Registerkarte senden.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Fehler einfach in die Konsole protokollieren.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * Die aktive Registerkarte erhalten,
     * dann "beastify()" oder "reset()" wie angemessen aufrufen.
     */
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      // Ignorieren, wenn nicht auf eine Schaltfläche innerhalb von <div id="popup-content"> geklickt wird.
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
 * Es gab einen Fehler bei der Ausführung des Skripts.
 * Die Fehlermeldung des Popups anzeigen und das normale UI verbergen.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * Wenn das Popup geladen wird, ein Inhaltsskript in die aktive Registerkarte injizieren
 * und einen Klick-Handler hinzufügen.
 * Wenn wir das Skript nicht injizieren konnten, mit dem Fehler umgehen.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

Der Startpunkt hier ist Zeile 99. Das Popup-Skript führt ein Inhaltsskript in der aktiven Registerkarte aus, sobald das Popup geladen wird, indem die [`browser.tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API verwendet wird. Wenn das Ausführen des Inhaltsskripts erfolgreich ist, bleibt das Inhaltsskript auf der Seite geladen, bis die Registerkarte geschlossen wird oder der Benutzer auf eine andere Seite navigiert.

Ein häufiger Grund, warum der Aufruf von `browser.tabs.executeScript()` fehlschlagen könnte, ist, dass Sie nicht in allen Seiten Inhaltsskripte ausführen können. Zum Beispiel können Sie sie nicht in privilegierten Browserseiten wie about:debugging ausführen und Sie können sie nicht auf Seiten der Domäne [addons.mozilla.org](https://addons.mozilla.org/) ausführen. Wenn es fehlschlägt, wird `reportExecuteScriptError()` das `<div id="popup-content">` Element verbergen, das `<div id="error-content"...` Element anzeigen und einen Fehler in die [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) protokollieren.

Wenn das Ausführen des Inhaltsskripts erfolgreich ist, rufen wir `listenForClicks()` auf. Dieses wartet auf Klicks im Popup.

- Wenn der Klick nicht auf eine Schaltfläche im Popup war, ignorieren wir ihn und tun nichts.
- Wenn der Klick auf eine Schaltfläche mit `type="reset"` erfolgte, dann rufen wir `reset()` auf.
- Wenn der Klick auf eine andere Schaltfläche erfolgte (d.h. die Tier-Schaltflächen), dann rufen wir `beastify()` auf.

Die `beastify()`-Funktion macht drei Dinge:

- Zuordnung der geklickten Schaltfläche zu einer URL, die auf ein Bild eines bestimmten Tieres zeigt
- Verbergen des Inhalts der Seite, indem wir etwas CSS injizieren, unter Verwendung der [`browser.tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API
- Senden einer "beastify"-Nachricht an das Inhaltsskript mit der [`browser.tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API, in der die Webseite „beastifiziert“ wird und die URL zum Tierbild übergeben wird.

Die `reset()` Funktion hebt im Wesentlichen eine „beastify“-Aktion auf:

- Entfernen des von uns hinzugefügten CSS, unter Verwendung der [`browser.tabs.removeCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API
- Senden einer "reset"-Nachricht an das Inhaltsskript, um die Seite zurückzusetzen.

### Das Inhaltsskript

Erstellen Sie ein neues Verzeichnis unter dem Stammverzeichnis der Erweiterung namens "content_scripts" und erstellen Sie eine neue Datei darin namens "beastify.js" mit folgendem Inhalt:

```js
(() => {
  /**
   * Überprüfen und setzen einer globalen Schutzvariable.
   * Wenn dieses Inhaltsskript erneut in die gleiche Seite injiziert wird,
   * wird es das nächste Mal nichts tun.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Bei Angabe einer URL zu einem Tierbild entfernen Sie alle vorhandenen Tiere,
   * erstellen Sie und gestalten Sie einen IMG-Knoten, der auf
   * dieses Bild verweist, und fügen Sie den Knoten in das Dokument ein.
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
   * Entfernen Sie jedes Tier von der Seite.
   */
  function removeExistingBeasts() {
    const existingBeasts = document.querySelectorAll(".beastify-image");
    for (const beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Lauschen auf Nachrichten vom Hintergrund-Skript.
   * Rufen Sie "insertBeast()" oder "removeExistingBeasts()" auf.
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

Das erste, was das Inhaltsskript tut, ist, nach einer globalen Variable `window.hasRun` zu überprüfen: Wenn sie gesetzt ist, kehrt das Skript frühzeitig zurück, ansonsten setzt es `window.hasRun` und fährt fort. Der Grund, warum wir das tun, ist, dass jedes Mal, wenn der Benutzer das Popup öffnet, das Popup ein Inhaltsskript in der aktiven Registerkarte ausführt, sodass wir mehrere Instanzen des Skripts in einer einzigen Registerkarte haben könnten. Wenn dies passiert, müssen wir sicherstellen, dass nur die erste Instanz tatsächlich etwas tut.

Danach ist der Startpunkt in Zeile 40, wo das Inhaltsskript auf Nachrichten vom Popup lauscht, indem die [`browser.runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API verwendet wird. Wir haben oben gesehen, dass das Popup-Skript zwei verschiedene Arten von Nachrichten senden kann: "beastify" und "reset".

- Wenn die Nachricht "beastify" lautet, erwarten wir, dass sie eine URL enthält, die auf ein Tierbild zeigt. Wir entfernen alle Tiere, die durch vorherige "beastify"-Aufrufe hinzugefügt wurden, dann konstruieren und fügen wir ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element ein, dessen `src`-Attribut auf die Tier-URL gesetzt ist.
- Wenn die Nachricht "reset" lautet, entfernen wir einfach alle Tiere, die hinzugefügt worden sein könnten.

### Die Tiere

Schließlich müssen wir die Bilder der Tiere einfügen.

Erstellen Sie ein neues Verzeichnis namens "beasts" und fügen Sie die drei Bilder in diesem Verzeichnis mit den entsprechenden Namen ein. Sie können die Bilder aus dem [GitHub-Repository](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts) oder von hier beziehen:

![Ein brauner Frosch.](frog.jpg)

![Ein Smaragd-Baumboa mit weißen Streifen.](snake.jpg)

![Eine Rotwangen-Schmuckschildkröte.](turtle.jpg)

## Testen

Überprüfen Sie zunächst, dass Sie die richtigen Dateien an den richtigen Stellen haben:

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

Laden Sie nun die Erweiterung als temporäres Add-on. Öffnen Sie "about:debugging" in Firefox, klicken Sie auf "Temporäres Add-on laden" und wählen Sie Ihre **manifest.json** Datei aus. Danach sollte das Symbol der Erweiterung in der Firefox-Werkzeugleiste erscheinen:

![Das beastify-Symbol in der Firefox-Werkzeugleiste](beastify_icon.png)

Öffnen Sie eine Webseite, klicken Sie auf das Symbol, wählen Sie ein Tier aus und sehen Sie, wie sich die Webseite ändert:

![Eine Seite, die durch das Bild einer Schildkröte ersetzt wurde](beastify_page.png)

## Entwicklung von der Befehlszeile aus

Sie können den temporären Installationsschritt durch die Verwendung des [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tools automatisieren. Versuchen Sie dies:

```bash
cd beastify
web-ext run
```

## Was kommt als nächstes?

Nun, da Sie eine fortgeschrittenere WebExtension für Firefox erstellt haben:

- [lesen Sie über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Wissen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
