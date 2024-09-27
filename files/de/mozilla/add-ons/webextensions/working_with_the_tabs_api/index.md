---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Tabs ermöglichen es einem Nutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und zwischen diesen zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Tools zu erstellen, die Nutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten, oder um die Funktionen Ihrer Erweiterung bereitzustellen.

In dieser Anleitung betrachten wir:

- Berechtigungen, die zur Verwendung der Tabs-API erforderlich sind.
- Erfahren Sie mehr über Tabs und ihre Eigenschaften mit {{WebExtAPIRef("tabs.query")}}.
- Erstellen, Duplizieren, Bewegen, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulation des Zoom-Levels eines Tabs.
- Manipulation der CSS eines Tabs.

Zum Schluss betrachten wir einige weitere, verschiedene Funktionen, die von der API angeboten werden.

> [!NOTE]
> Es gibt einige Tab-API-Funktionen, die andernorts behandelt werden. Dazu gehören Methoden, die zur Manipulation von Tab-Inhalten mit Skripten verwendet werden können ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie weitere Informationen zu diesen Methoden wünschen, lesen Sie den Konzepte-Artikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die meisten Tabs-API-Funktionen benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} erforderlich.

So könnten Sie die `"tabs"`-Berechtigung in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht Ihnen die Nutzung aller Tabs-API-Funktionen auf allen Websites, die Ihr Nutzer besucht. Es gibt auch einen alternativen Ansatz, um Berechtigungen zur Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} anzufordern, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Nutzer muss mit der Erweiterung über deren Browser- oder Seitenaktion, Kontextmenü oder Tastenkürzel interagieren.
- Sie gewährt nur Berechtigung innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Nutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Auf Ihre Daten für alle Websites zugreifen" kann. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab jederzeit auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine vom Nutzer angeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und ihre Eigenschaften erfahren

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Manchmal könnte es sein, dass Sie eine Teilmenge von Tabs finden möchten, die bestimmten Kriterien entspricht, wie z.B. diejenigen, die von einem bestimmten Tab geöffnet wurden oder Seiten von einer bestimmten Domain anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über ihre Eigenschaften wissen.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein verwendet, um alle Tabs zu erhalten, oder mit dem `queryInfo`-Objekt, um Abfragekriterien wie ob der Tab aktiv ist, im aktuellen Fenster oder eine oder mehrere von 17 Kriterien anzugeben, liefert {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten mit Informationen über die Tabs.

Wenn Sie nur Informationen über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Anleitung Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, schauen wir uns an, wie das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) die Liste der "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü zeigt den Bereich zum Wechseln zu Tab](switch_to_tab.png)

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird jedes Mal angezeigt, wenn der Nutzer auf das Symbol der Erweiterung in der Toolbar klickt.
    > - **Berechtigungen umfassen Tabs.** Dies ist erforderlich, um das Tab-Listen-Feature zu unterstützen, da die Erweiterung die Titel der Tabs zum Anzeigen im Popup liest.

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

    Dies macht Folgendes:

    1. Die Menüelemente werden deklariert.
    2. Ein leeres `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js), werden wir sehen, wie die Liste der Tabs aufgebaut und dem Popup hinzugefügt wird.

#### Erstellung des Popups

Zuerst wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das erste, was `listTabs()` macht, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zuerst:

1. Holen Sie sich das `<div id="tabs-list">`-Element.
2. Erstellen Sie ein Dokumentfragment (in das die Liste erstellt wird).
3. Setzen Sie Zähler.
4. Löschen Sie den Inhalt des `<div id="tabs-list">`-Elements.

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
2. Fügen Sie für jedes Element einen Hyperlink zum Dokumentfragment hinzu.

   - Die Bezeichnung des Links – das heißt, sein Text – wird unter Verwendung des Tab-`title` (oder der `id`, falls es keinen `title` hat) gesetzt.
   - Die Adresse des Links wird unter Verwendung der Tab-`id` gesetzt.

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

Eine weitere verwandte Beispiel-Funktion ist die "Aktiven Tab alarmieren"-Info-Option, die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften für den aktiven Tab in einem Alert ausgibt:

```js
else if (e.target.id === "tabs-alertinfo") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${ item } = ${ tab[item] } \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schleift und nach dem Element mit aktivem Status sucht:

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

## Tabs erstellen, duplizieren, verschieben, aktualisieren, neuladen und entfernen

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun – entweder um den Nutzern Funktionen zur Tab-Manipulation und -Verwaltung zu bieten oder um Funktionen in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen stehen zur Verfügung:

- Erstellen Sie einen neuen Tab ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren Sie einen Tab ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen Sie einen Tab ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben Sie einen Tab ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren Sie die URL des Tabs – im Wesentlichen zu einer neuen Seite wechseln – ({{WebExtAPIRef("tabs.update()")}}).
- Laden Sie die Seite des Tabs neu ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf dem aktiven Tab wirken werden (wenn keine Tab-ID bereitgestellt wird):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel nutzt alle diese Funktionen, außer um die URL eines Tabs zu aktualisieren. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher betrachten wir eine der komplexeren Implementierungen: die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst, hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zum Betrieb, daher gibt es keine Funktionen in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Aktiven Tab an den Anfang der Fensterliste verschieben", mit einer Serie von `<a>`-Tags, die durch einen visuellen Trenner gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüelement angefordert wird.

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
    <a href="#" id="tabs-alertinfo">Alert active tab info</a><br />
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

    Eine Reihe von `if`-Anweisungen überprüft dann, ob die `id` des angeklickten Elements übereinstimmt.

    Dieser Code-Schnipsel ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

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

    Es ist bemerkenswert, die Verwendung von `console.log()`. Dies ermöglicht es Ihnen, Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole auszugeben, was nützlich sein kann, wenn Probleme während der Entwicklung gelöst werden müssen.

    ![Beispiel für die console.log-Ausgabe, vom Verschiebens-Tab-Feature, in der Debugging-Konsole](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, das seinerseits `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit den Tabs des aktiven Fensters zu erhalten. Dann schleift es durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Angehängte Tabs

Ein Feature von Tabs ist, dass der Nutzer Tabs in einem Fenster _anheften_ kann. Angehängte Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Dies bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angehängten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angehefteten Tabs zu finden, indem durch das `tabs`-Objekt geschleift wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Nun haben wir alles, was benötigt wird, um den Tab zu verschieben: das aktive Tab-Objekt, von dem wir die Tab-`id` erhalten können, und die Position, zu der der Tab verschoben werden soll. Daher können wir den Verschiebevorgang implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die restlichen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulation des Zoom-Levels eines Tabs

Der nächste Satz von Funktionen ermöglicht Ihnen, den Zoomfaktor in einem Tab zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt der Erstellung war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}) in Firefox nicht verfügbar.

Das Zoom-Level kann zwischen 30 % und 500 % liegen (dargestellt als Dezimalzahlen `0.3` bis `5`).

In Firefox sind die standardmäßigen Zoom-Einstellungen:

- **Standard-Zoom-Level:** 100 %.
- **Zoom-Modus:** automatisch (sodass der Browser verwaltet, wie die Zoom-Level eingestellt werden).
- **Geltungsbereich der Zoom-Änderungen:** `"per-origin"`, was bedeutet, dass, wenn Sie eine Seite erneut besuchen, sie das bei Ihrem letzten Besuch eingestellte Zoom-Level übernimmt.

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel umfasst drei Demonstrationen der Zoom-Funktion: heranzoomen, hinauszoomen und Zoom zurücksetzen. Hier ist das Feature in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Heranzoomen implementiert ist.

- manifest.json
  - : Keine der Zoom-Funktionen erfordern Berechtigungen, daher gibt es keine Funktionen in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie das [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es wird nichts Neues oder Einzigartiges getan, um die Zoom-Optionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann den gleichen Listener, den wir früher besprochen haben, um Klicks in `tabs.html` berücksichtigen zu können.

    Für die Zoom-Ein-Funktion läuft dies:

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

    Dieser Code verwendet `callOnActiveTab()`, um Details des aktiven Tabs zu erhalten, dann verwendet {{WebExtAPIRef("tabs.getZoom")}}, um den aktuellen Zoomfaktor des Tabs zu erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und ein Warnhinweis ausgegeben, wenn der Tab bereits auf dem maximalen Zoom ist. Andernfalls wird der Zoom-Level inkrementiert, aber auf das maximale Zoom begrenzt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation der CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die von der Tabs API angeboten wird, ist die Möglichkeit, die CSS in einem Tab zu manipulieren – neue CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS aus einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies könnte nützlich sein, zum Beispiel, wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung Beispiel

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) Beispiel verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier ist das Feature in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Schauen wir uns an, wie es eingerichtet ist.

- manifest.json

  - : Das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die erforderlich sind, um die CSS-Funktionen zu verwenden. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letztere ist die nützlichste, da sie einer Erweiterung ermöglicht, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie von der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einem Shortcut ausgeführt wird.

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

    Sie werden feststellen, dass die Berechtigung `"tabs"` zusätzlich zu `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, um dem Skript der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, dessen Bedeutung wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript**, das gestartet wird, sobald die Erweiterung geladen wird.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das der Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten zur Definition der anzuwendenden CSS, Titel für die "Seitenaktion" und einer Liste von Protokollen, in denen die Erweiterung funktionieren wird:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn sie zuerst geladen wird, verwendet die Erweiterung {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Sie durchläuft dann die Tabs und ruft `initializePageAction()` auf.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs eine ist, auf die die CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Wenn das Beispiel auf dem Tab ausgeführt werden kann, setzt `initializePageAction()` das `pageAction`-Icon (Navigationsleiste) und den Titel des Tabs auf die "aus"-Versionen, bevor `pageAction` sichtbar gemacht wird:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Ein Listener auf `pageAction.onClicked` wartet als nächstes darauf, dass das `pageAction`-Icon angeklickt wird, und ruft `toggleCSS` auf, wenn es angeklickt wird.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` ruft den Titel des `pageAction` ab und führt anschließend die beschriebene Aktion durch:

    - **Für "CSS anwenden":**

      - wechselt das `pageAction`-Icon und den Titel zu den "entfernen"-Versionen.
      - wendet die CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**

      - wechselt das `pageAction`-Icon und den Titel zu den "anwenden"-Versionen.
      - entfernt die CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

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

    Schließlich um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu überprüfen, dass der Tab noch ein Protokoll verwendet, auf das die CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Tabs-API-Funktionen, die nicht in einen der vorhergehenden Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Primärsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte z.B. verwendet werden, um die Sprache der Benutzeroberfläche Ihrer Erweiterung mit der der Seite, auf der sie läuft, zu matchen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (viele davon verwenden die Tabs-API)
