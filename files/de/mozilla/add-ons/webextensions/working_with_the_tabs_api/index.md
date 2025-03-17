---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Mit Tabs können Benutzer mehrere Webseiten in ihrem Browserfenster öffnen und dann zwischen diesen Webseiten wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Dienstprogramme zu erstellen, die Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem Anleitung-Artikel werden wir uns mit folgenden Themen befassen:

- Berechtigungen, die für die Verwendung der Tabs-API erforderlich sind.
- Mehr über Tabs und deren Eigenschaften mit {{WebExtAPIRef("tabs.query")}} herausfinden.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neu laden und Entfernen von Tabs.
- Manipulation des Zoomlevels eines Tabs.
- Manipulation der CSS eines Tabs.

Zum Schluss gehen wir auf einige andere, verschiedene Funktionen ein, die von der API angeboten werden.

> [!NOTE]
> Einige Funktionen der Tabs-API werden an anderer Stelle behandelt. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen über diese Methoden wünschen, sehen Sie sich den Konzeptartikel [Content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und den Anleitung-Leitfaden [Modify a web page](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page) an.

## Berechtigungen und die Tabs-API

Für die meisten Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie auch `"tabs"`, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} erforderlich.

So könnten Sie beispielsweise die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht Ihnen die Nutzung aller Tabs-API-Funktionen auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz, um Berechtigungen für die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} anzufordern, bei dem keine Hostberechtigung erforderlich ist, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung gewährt dieselben Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss mit der Erweiterung über deren Browser- oder Seitenaktionen, Kontextmenü oder Tastenkombination interagieren.
- Sie gewährt Berechtigungen nur innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Ihre Daten für alle Websites abrufen kann". Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab auszuführen, wann immer sie möchte, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine vom Benutzer angeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und deren Eigenschaften herausfinden

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern abrufen möchten. Manchmal möchten Sie möglicherweise einen Teil der Tabs finden, die bestimmten Kriterien entsprechen, z. B. solche, die von einem bestimmten Tab geöffnet wurden oder Seiten von einer bestimmten Domain anzeigen. Und wenn Sie Ihre Liste der Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften wissen.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Es wird entweder allein verwendet, um alle Tabs zu erhalten, oder indem es das `queryInfo`-Objekt verwendet, um Abfragekriterien festzulegen, wie z. B. ob der Tab aktiv ist, im aktuellen Fenster, oder eines oder mehrere von 17 Kriterien. {{WebExtAPIRef("tabs.query()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie Informationen nur über den aktuellen Tab möchten, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} abrufen. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Anleitung Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, gehen wir durch, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel die Liste der "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü, das den Bereich zum Wechseln zu Tabs zeigt](switch_to_tab.png)

- manifest.json

  - : Hier ist das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

    ```json
    {
      "browser_action": {
        "default_title": "Tabs, tabs, tabs",
        "default_popup": "tabs.html"
      },
      "description": "A list of methods you can perform on a tab.",
      "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs",
      "manifest_version": 2,
      "name": "Tabs, tabs, tabs",
      "permissions": ["tabs"],
      "version": "1.0"
    }
    ```

    > [!NOTE]
    >
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird angezeigt, wann immer der Benutzer auf das Toolbar-Symbol der Erweiterung klickt.
    > - **Berechtigungen beinhalten Tabs.** Dies ist erforderlich, um die Tablisten-Funktion zu unterstützen, da die Erweiterung die Titel der Tabs abliest, um sie im Popup anzuzeigen.

- tabs.html

  - : `tabs.html` definiert den Inhalt des Popups der Erweiterung:

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="tabs.css" />
      </head>

      <body>
        <div class="panel">
          <div class="panel-section panel-section-header">
            <div class="text-section-header">Tabs-tabs-tabs</div>
          </div>

          <a href="#" id="tabs-move-beginning">
            Move active tab to the beginning of the window
          </a>
          <br />

          <!-- Define the other menu items -->

          <div class="switch-tabs">
            <p>Switch to tab</p>
            <div id="tabs-list"></div>
          </div>
        </div>

        <script src="tabs.js"></script>
      </body>
    </html>
    ```

    Dies tut Folgendes:

    1. Die Menüelemente werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) wird gezeigt, wie die Liste der Tabs erstellt und zum Popup hinzugefügt wird.

#### Erstellen des Popups

Zuerst wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` tut, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zu Beginn:

1. Das `<div id="tabs-list">`-Element wird gegriffen.
2. Ein Dokumentfragment wird erstellt (in das die Liste aufgebaut wird).
3. Zähler werden festgelegt.
4. Der Inhalt des `<div id="tabs-list">`-Elements wird gelöscht.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById('tabs-list');
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als nächstes erstellen wir die Links für jeden Tab:

1. Schleifen Sie durch die ersten 5 Elemente aus dem {{WebExtAPIRef("tabs.Tab")}}-Objekt.
2. Für jedes Element wird ein Hyperlink zum Dokumentfragment hinzugefügt.

   - Die Beschriftung des Links, also der Text, wird mit dem Tab-`title` (oder der `id`, wenn kein `title` vorhanden ist) gesetzt.
   - Die Adresse des Links wird mittels der Tab-`id` festgelegt.

```js
for (const tab of tabs) {
  if (!tab.active && counter <= limit) {
    const tabLink = document.createElement("a");

    tabLink.textContent = tab.title || tab.id;

    tabLink.setAttribute("href", tab.id);
    tabLink.classList.add("switch-tabs");
    currentTabs.appendChild(tabLink);
  }

  counter += 1;
}
```

Schließlich wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Eine andere verwandte Beispiel-Funktion ist die "Alert active tab" Info-Option, die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften für den aktiven Tab in einem Alert ausgibt:

```js
else if (e.target.id === "tabs-alert-info") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${ item } = ${ tab[item] } \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schleift und nach dem Element mit "active" sucht:

```js
document.addEventListener("click", (e) => {
  function callOnActiveTab(callback) {
    getCurrentWindowTabs().then((tabs) => {
      for (const tab of tabs) {
        if (tab.active) {
          callback(tab, tabs);
        }
      }
    });
  }
}
```

## Erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie höchstwahrscheinlich etwas mit ihnen tun, entweder um den Benutzern Funktionen zum Manipulieren und Verwalten von Tabs anzubieten oder um Funktionen in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen stehen zur Verfügung:

- Einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- Einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- Einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- Einen Tab verschieben ({{WebExtAPIRef("tabs.move()")}}).
- Die URL des Tabs aktualisieren – effektiv zu einer neuen Seite navigieren ({{WebExtAPIRef("tabs.update()")}}).
- Die Seite des Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen benötigen alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Wohingegen die folgenden Funktionen auf dem aktiven Tab agieren werden (wenn keine Tab-`id` angegeben wird):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel übt alle diese Funktionen bis auf die Aktualisierung der URL eines Tabs aus. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher schauen wir uns eine der komplexeren Implementierungen an, nämlich die Option "Aktiven Tab zum Anfang der Fensterliste verschieben".

Aber zuerst, hier ist eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zum Ausführen, daher gibt es keine Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Aktiven Tab zum Anfang der Fensterliste verschieben", mit einer Reihe von `<a>`-Tags, die durch einen visuellen Separator gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüelement angefordert wird.

    ```html
    <a href="#" id="tabs-move-beginning">
      Move active tab to the beginning of the window
    </a>
    <br />
    <a href="#" id="tabs-move-end">Move active tab to the end of the window</a>
    <br />

    <div class="panel-section-separator"></div>

    <a href="#" id="tabs-duplicate">Duplicate active tab</a><br />
    <a href="#" id="tabs-reload">Reload active tab</a><br />
    <a href="#" id="tabs-alert-info">Alert active tab info</a><br />
    ```

- tabs.js

  - : Um das in `tabs.html` definierte "Menü" zu implementieren, enthält [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) einen Listener für Klicks in `tabs.html`:

    ```js
    document.addEventListener("click", (e) => {
      function callOnActiveTab(callback) {
        getCurrentWindowTabs().then((tabs) => {
          for (const tab of tabs) {
            if (tab.active) {
              callback(tab, tabs);
            }
          }
        });
      }
    });
    ```

    Eine Reihe von `if`-Anweisungen versucht dann die `id` des geklickten Elements zuzuordnen.

    Dieser Code-Schnipsel ist für die Option "Aktiven Tab zum Anfang der Fensterliste verschieben":

    ```js
    if (e.target.id === "tabs-move-beginning") {
      callOnActiveTab((tab, tabs) => {
        let index = 0;
        if (!tab.pinned) {
          index = firstUnpinnedTab(tabs);
        }
        console.log(`moving ${tab.id} to ${index}`);
        browser.tabs.move([tab.id], { index });
      });
    }
    ```

    Es ist erwähnenswert, die Verwendung von `console.log()` zu beachten. Damit können Sie Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole ausgeben, was nützlich sein kann, um während der Entwicklung festgestellte Probleme zu lösen.

    ![Beispiel der console.log-Ausgabe der Verschiebe-Tabs-Funktion in der Debugger-Konsole](console.png)

    Der Verschiebecode ruft zunächst `callOnActiveTab()` auf, welches wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit den Tabs des aktiven Fensters zu erhalten. Danach schleift es durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

    ```js
    function callOnActiveTab(callback) {
      getCurrentWindowTabs().then((tabs) => {
        for (const tab of tabs) {
          if (tab.active) {
            callback(tab, tabs);
          }
        }
      });
    }
    ```

#### Anheften von Tabs

Eine Funktion von Tabs ist, dass der Benutzer Tabs in einem Fenster _anheften_ kann. Angepinnte Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angepinnten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angepinnten Tabs durch Schleifen durch das `tabs`-Objekt zu finden:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Jetzt haben wir alles, was nötig ist, um den Tab zu verschieben: das aktive Tab-Objekt, von dem wir die Tab-ID erhalten können, und die Position, zu der der Tab verschoben werden soll. So können wir die Verschiebung implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulation des Zoomlevels eines Tabs

Die nächste Gruppe von Funktionen ermöglicht es, das Zoomlevel innerhalb eines Tabs abzurufen ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Das Zoomlevel kann zwischen 30 % und 500 % liegen (als Dezimalzahlen `0.3` bis `5` dargestellt).

In Firefox sind die Standardeinstellungen für den Zoom:

- **Standard-Zoomlevel:** 100 %.
- **Zoom-Modus:** automatisch (der Browser verwaltet, wie Zoomlevel gesetzt werden).
- **Geltungsbereich der Zoomänderungen:** `"per-origin"`, d.h. wenn Sie eine Website erneut besuchen, wird das Zoomlevel angewendet, das beim letzten Besuch gesetzt wurde.

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel enthält drei Demonstrationen der Zoom-Funktion: Zoom hinein, Zoom hinaus und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Sehen wir uns an, wie die Zoomfunktion implementiert wird.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, daher gibt es keine Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es wird nichts Neues oder Einzigartiges getan, um die Zoom-Optionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann denselben Listener, den wir zuvor besprochen haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Zoom-Funktion läuft:

    ```js
      else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
          browser.tabs.getZoom(tab.id).then((zoomFactor) => {
            //the maximum zoomFactor is 5, it can't go higher
            if (zoomFactor >= MAX_ZOOM) {
              alert("Tab zoom factor is already at max!");
            } else {
              let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
              //if the newZoomFactor is set to higher than the max accepted
              //it won't change, and will never alert that it's at maximum
              newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
              browser.tabs.setZoom(tab.id, newZoomFactor);
            }
          });
        });
      }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann verwendet {{WebExtAPIRef("tabs.getZoom")}}, um den aktuellen Zoomfaktor des Tabs zu erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen, und eine Warnung wird ausgegeben, wenn der Tab bereits auf maximalem Zoomlevel ist. Andernfalls wird das Zoomlevel inkrementiert, jedoch auf das maximale Zoomlevel begrenzt, und dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation der CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die die Tabs-API bietet, ist die Möglichkeit, die CSS innerhalb eines Tabs zu manipulieren—neue CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS aus einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, wenn Sie beispielsweise bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung Beispiel

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) Beispiel verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rand hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Gehen wir durch, wie es eingerichtet wird.

- manifest.json

  - : Das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die für die Verwendung der CSS-Funktionen erforderlichen Berechtigungen an. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letztere ist am nützlichsten, da sie einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie aus der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einer Tastenkombination ausgeführt wird.

    ```json
    {
      "description": "Adds a page action to toggle applying CSS to pages.",

      "manifest_version": 2,
      "name": "apply-css",
      "version": "1.0",
      "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/apply-css",

      "background": {
        "scripts": ["background.js"]
      },

      "page_action": {
        "default_icon": "icons/off.svg"
      },

      "permissions": ["activeTab", "tabs"]
    }
    ```

    Sie werden feststellen, dass zusätzlich zur `"activeTab"`-Berechtigung auch die `"tabs"`-Berechtigung angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, um dem Skript der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, dessen Wichtigkeit wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

    - **Einem Hintergrundskript**, das sofort läuft, sobald die Erweiterung geladen wird.
    - **Einer "Seitenaktion"**, die ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Starten legt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten fest, um das anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste von Protokollen zu definieren, in denen die Erweiterung funktioniert:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung das erste Mal geladen wird, verwendet sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Dann durchläuft sie die Tabs, indem sie `initializePageAction()` aufruft.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs ein Protokoll ist, auf das das CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Dann, wenn das Beispiel auf den Tab einwirken kann, setzt `initializePageAction()` das `pageAction`- (Navigationsleisten-) Symbol und den Titel des Tabs auf die "off"-Versionen, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als Nächstes wartet ein Listener auf `pageAction.onClicked`, bis das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn es angeklickt wird.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` ruft den Titel des `pageAction`-Elements ab und führt dann die beschriebene Aktion aus:

    - **Für "CSS anwenden":**

      - Wechselt das `pageAction`-Symbol und den Titel auf die "remove"-Versionen.
      - Wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**

      - Wechselt das `pageAction`-Symbol und den Titel auf die "apply"-Versionen.
      - Entfernt das CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

    ```js
    function toggleCSS(tab) {
      function gotTitle(title) {
        if (title === TITLE_APPLY) {
          browser.pageAction.setIcon({ tabId: tab.id, path: "icons/on.svg" });
          browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_REMOVE });
          browser.tabs.insertCSS({ code: CSS });
        } else {
          browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
          browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
          browser.tabs.removeCSS({ code: CSS });
        }
      }

      browser.pageAction.getTitle({ tabId: tab.id }).then(gotTitle);
    }
    ```

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update am Tab gültig ist, wird ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} gesetzt, der `initializePageAction()` bei jedem Update des Tabs aufruft, um zu prüfen, ob der Tab immer noch ein unterstütztes Protokoll verwendet, auf das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Features der Tabs-API, die nicht in eine der vorhergehenden Abschnitte passen:

- Erfassen des sichtbaren Tab-Inhalts mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen der Primärsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte verwendet werden, um beispielsweise die Sprache in der Benutzeroberfläche Ihrer Erweiterung an die Seite anzupassen, in der sie ausgeführt wird.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
