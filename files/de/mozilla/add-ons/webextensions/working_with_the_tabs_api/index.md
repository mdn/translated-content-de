---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{AddonSidebar}}

Tabs ermöglichen es dem Benutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Hilfsprogramme zu erstellen, die Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten, oder um die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem Artikel zur Anleitung betrachten wir:

- Benötigte Berechtigungen zur Nutzung der Tabs-API.
- Mehr über Tabs und ihre Eigenschaften herausfinden mit {{WebExtAPIRef("tabs.query")}}.
- Erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen von Tabs.
- Manipulation des Zoomfaktors eines Tabs.
- Manipulation der CSS eines Tabs.

Zum Abschluss betrachten wir noch einige andere, diverse Funktionen, die die API bietet.

> [!NOTE]
> Es gibt einige Tab-API-Funktionen, die anderswo behandelt werden. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, lesen Sie den Konzepte-Artikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Ändern einer Webseite](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrheit der Tabs-API-Funktionen benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL auszuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist nötig für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

Die folgende Anfrage zeigt, wie Sie die Berechtigung `"tabs"` in der Datei manifest.json Ihrer Erweiterung anfordern könnten:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht es Ihnen, alle Funktionen der Tabs-API auf allen Webseiten, die Ihr Benutzer besucht, zu nutzen. Es gibt auch einen alternativen Ansatz zur Anforderung von Berechtigungen für die Nutzung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet dieselben Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss mit der Erweiterung über ihre Browser- oder Seitenaktion, das Kontextmenü oder eine Tastenkombination interagieren.
- Sie gewährt nur Berechtigungen innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Zugriff auf Ihre Daten auf allen Websites" haben kann. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab auszuführen, wann immer es will, wohingegen [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine benutzerangeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und deren Eigenschaften herausfinden

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Andere Male möchten Sie vielleicht eine Teilmenge von Tabs finden, die einigen spezifischen Kriterien entsprechen, wie z.B. die von einem bestimmten Tab aus geöffnet wurden oder Seiten von einer bestimmten Domäne anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften wissen.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein verwendet, um alle Tabs abzurufen, oder mit dem `queryInfo`-Objekt verwendet—um Abfragekriterien wie die Aktivität des Tabs, das aktuelle Fenster oder eines von 17 Kriterien anzugeben—gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie nur Informationen über den aktuellen Tab benötigen, können Sie ein {{WebExtAPIRef("tabs.Tab")}} Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}} Objekt mit {{WebExtAPIRef("tabs.get()")}} erhalten.

### Anleitung mit Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, lassen Sie uns durchgehen, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel die Liste von "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü zeigt den Bereich zum Wechseln zu Tabs](switch_to_tab.png)

- manifest.json

  - : Hier ist die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird angezeigt, wann immer der Benutzer auf das Symbol der Erweiterung in der Toolbar klickt.
    > - **Berechtigungen beinhalten tabs.** Dies wird benötigt, um die Tab-Liste Funktion zu unterstützen, da die Erweiterung den Titel der Tabs für die Anzeige im Popup liest.

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
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Erstellen des Popups

Zuerst wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen ist:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` macht, ist, `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}} Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zuerst wird:

1. Das `<div id="tabs-list">` Element geholt.
2. Ein Dokumentfragment erstellt (in das die Liste aufgebaut wird).
3. Zähler gesetzt.
4. Der Inhalt des `<div id="tabs-list">` Elements gelöscht.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById('tabs-list');
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als Nächstes erstellen wir die Links für jeden Tab:

1. Schleifen durch die ersten 5 Elemente aus dem {{WebExtAPIRef("tabs.Tab")}} Objekt.
2. Für jedes Element wird ein Hyperlink zum Dokumentfragment hinzugefügt.

   - Das Label des Links—also der Text—wird mit dem `title` des Tabs (oder der `id`, wenn er keinen `title` hat) gesetzt.
   - Die Adresse des Links wird mit der `id` des Tabs gesetzt.

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

Abschließend wird das Dokumentfragment in das `<div id="tabs-list">` Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die "Alarmieren aktiver Tab" Info-Option, die alle {{WebExtAPIRef("tabs.Tab")}} Objekt-Eigenschaften für den aktiven Tab in einem Alarm ausgeben:

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

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}} Objekte schleift und nach dem Element mit gesetzter Aktivität sucht:

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

## Erstellen, Duplizieren, Verschieben, Aktualisieren, Neu laden und Entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen machen—entweder um Benutzern Funktionen zum Manipulieren und Verwalten von Tabs zu bieten oder um Funktionalität in Ihrer Erweiterung umzusetzen.

Die folgenden Funktionen sind verfügbar:

- Erstellen eines neuen Tabs ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren eines Tabs ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen eines Tabs ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben eines Tabs ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren der Tab-URL—effektiv zu einer neuen Seite navigieren—({{WebExtAPIRef("tabs.update()")}}).
- Neu laden der Tab-Seite ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf dem aktiven Tab arbeiten (wenn keine Tab-ID angegeben wird):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung mit Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel übt all diese Funktionen aus, mit Ausnahme der Aktualisierung einer Tab-URL. Die Verwendung dieser APIs ist ähnlich, daher werden wir uns eine der umfangreicheren Implementierungen ansehen, nämlich die Option "Verschieben des aktiven Tabs an den Anfang der Fensterliste".

Aber zuerst eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zum Betrieb, daher gibt es keine besonderen Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json), die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Verschieben des aktiven Tabs an den Anfang der Fensterliste", mit einer Reihe von `<a>`-Tags, die durch einen visuellen Trenner gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüelement angefordert wird.

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

    Eine Reihe von `if`-Anweisungen versucht dann, die `id` des angeklickten Elements zuzuordnen.

    Dieser Code-Schnipsel ist für die Option "Verschieben des aktiven Tabs an den Anfang der Fensterliste":

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

    Beachten Sie die Verwendung von `console.log()`. Dies ermöglicht es Ihnen, Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/) Konsole auszugeben, was nützlich sein kann, wenn Sie während der Entwicklung auf Probleme stoßen.

    ![Beispiel für die Konsolenausgabe von console.log, von der Funktion zum Verschieben von Tabs, in der Debugging-Konsole](console.png)

    Der Code zum Verschieben ruft zunächst `callOnActiveTab()` auf, das wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}} Objekt mit den Tabs des aktiven Fensters zu erhalten. Es durchläuft dann das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Fixierte Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _fixieren_ kann. Fixierte Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Dies bedeutet, dass die früheste Position, an die ein Tab verschoben werden kann, die erste Position nach allen fixierten Tabs ist. Also wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht fixierten Tabs zu finden, indem es durch das `tabs`-Objekt geht:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben jetzt alles, was nötig ist, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-ID und die Position, zu der der Tab verschoben werden soll, erhalten können. So können wir den Verschiebevorgang umsetzen:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs sind ähnlich implementiert.

## Manipulation des Zoomfaktors eines Tabs

Der nächste Satz von Funktionen ermöglicht es Ihnen, den Zoomfaktor in einem Tab zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und einzustellen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen einzustellen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Der Zoomfaktor kann zwischen 30% und 500% liegen (dargestellt als Dezimalwerte von `0.3` bis `5`).

In Firefox sind die Standard-Zoomeinstellungen:

- **standardmäßiger Zoomfaktor:** 100%.
- **Zoom-Modus:** automatisch (der Browser verwaltet also, wie Zoomebenen festgelegt werden).
- **Anwendungsbereich von Zoomänderungen:** `"per-origin"`, das bedeutet, dass wenn Sie eine Seite erneut besuchen, sie den bei Ihrem letzten Besuch gesetzten Zoomfaktor übernimmt.

### Anleitung mit Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel umfasst drei Demonstrationen der Zoom-Funktion: Einzoomen, Auszoomen und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Einzoomen implementiert ist.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, daher gibt es keine besonderen Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, nichts Neues oder Besonderes wird getan, um die Zoom-Optionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann denselben Listener, den wir zuvor besprochen haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Einzoom-Funktion ist dies der Ablauf:

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

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann verwendet {{WebExtAPIRef("tabs.getZoom")}}, um den aktuellen Zoomfaktor des Tabs zu erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und ein Alarm ausgelöst, wenn der Tab bereits beim maximalen Zoom ist. Andernfalls wird der Zoomfaktor erhöht, aber auf das maximale Zoom begrenzt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} eingestellt.

## Manipulation der CSS eines Tabs

Eine weitere bedeutende Möglichkeit, die die Tabs-API bietet, ist die Fähigkeit, das CSS innerhalb eines Tabs zu manipulieren—neues CSS zu einem Tab hinzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS von einem Tab entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, zum Beispiel, wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung mit Beispiel

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) Beispiel verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rand hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die notwendig sind, um die CSS-Funktionen zu verwenden. Sie benötigen entweder:

    - Die `"tabs"`-Berechtigung und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die `"activeTab"`-Berechtigung.

    Letztere ist die nützlichste, da sie es einer Erweiterung ermöglicht, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn diese von der Browser- oder Seitenaktion, dem Kontextmenü oder einer Tastenkombination der Erweiterung ausgeführt wird.

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

    Sie werden feststellen, dass die `"tabs"`-Berechtigung zusätzlich zur `"activeTab"`-Berechtigung angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, damit das Skript der Erweiterung auf die URL des Tabs zugreifen kann, was wichtig ist, wie wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript,** das sofort ausgeführt wird, sobald die Erweiterung geladen ist.
    - **einer "Seitenaktion,"** die ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste von Protokollen, in denen die Erweiterung arbeitet, zu definieren:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Beim ersten Laden verwendet die Erweiterung {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es durchläuft dann die Tabs und ruft `initializePageAction()` auf.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs eine ist, auf die das CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Dann, wenn das Beispiel auf den Tab wirken kann, setzt `initializePageAction()` das `pageAction`-Symbol (Navigationsleiste) des Tabs und den Titel auf die "aus"-Versionen, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als Nächstes wartet ein Listener auf `pageAction.onClicked` darauf, dass das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn es das wird.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` holt den Titel der `pageAction` und führt dann die beschriebene Aktion aus:

    - **Für "CSS anwenden":**

      - Wechselt das `pageAction`-Symbol und den Titel auf die "entfernen"-Versionen.
      - Wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**

      - Wechselt das `pageAction`-Symbol und den Titel auf die "anwenden"-Versionen.
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

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu überprüfen, dass der Tab immer noch ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Möglichkeiten

Es gibt ein paar weitere Funktionen der Tabs-API, die nicht in einen der vorherigen Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Primärsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte beispielsweise verwendet werden, um die Sprache in der Benutzeroberfläche Ihrer Erweiterung mit der Seite, auf der sie ausgeführt wird, abzustimmen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Referenz zur Tabs-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
