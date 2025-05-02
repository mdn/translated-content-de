---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{AddonSidebar}}

Tabs ermöglichen es einem Benutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Dienste zu erstellen, die Benutzern neue Möglichkeiten zur Arbeit mit Tabs bieten oder die Funktionen Ihrer Erweiterung bereitstellen.

In diesem Leitfaden werden wir uns mit Folgendem befassen:

- Benötigte Berechtigungen zur Nutzung der Tabs-API.
- Erfahren Sie mehr über Tabs und ihre Eigenschaften mit {{WebExtAPIRef("tabs.query")}}.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulieren des Zoomfaktors eines Tabs.
- Manipulieren der CSS eines Tabs.

Zum Schluss betrachten wir einige weitere, diverse Funktionen, die die API bietet.

> [!NOTE]
> Es gibt einige Tab-API-Funktionen, die anderswo behandelt werden. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, lesen Sie den Konzeptartikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrheit der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie auch `"tabs"`, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist nötig für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

Im Folgenden sehen Sie, wie Sie die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung anfordern könnten:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht Ihnen die Nutzung aller Funktionen der Tabs-API auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz für die Anforderung von Berechtigungen zur Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem keine Host-Berechtigung erforderlich ist, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, aber mit zwei Einschränkungen:

- Der Benutzer muss über seine Browser- oder Seitenaktion, das Kontextmenü oder einen Shortcut-Schlüssel mit der Erweiterung interagieren.
- Sie gewährt die Berechtigung nur innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes besteht darin, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "auf Ihre Daten für alle Websites zugreifen" kann. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, zu jeder Zeit Skripte in jedem Tab auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine benutzerangeforderte Aktion im aktuellen Tab auszuführen.

## Erfahren Sie mehr über Tabs und ihre Eigenschaften

Es wird Gelegenheiten geben, in denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Zu anderen Zeiten möchten Sie vielleicht eine Teilmenge von Tabs finden, die bestimmte Kriterien erfüllen, wie zum Beispiel diejenigen, die von einem bestimmten Tab geöffnet wurden oder Seiten von einer bestimmten Domain anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein verwendet, um alle Tabs zu erhalten, oder mit dem `queryInfo`-Objekt, um Abfragekriterien wie ob der Tab aktiv ist, im aktuellen Fenster oder eines oder mehrere von 17 Kriterien anzugeben, gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, die Informationen über die Tabs enthalten.

Wo Sie Informationen nur über den aktuellen Tab haben möchten, können Sie ein {{WebExtAPIRef("tabs.Tab")}} Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}} Objekt mit {{WebExtAPIRef("tabs.get()")}} erhalten.

### Anleitung

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, gehen wir durch, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel die Liste der "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü zeigt den Switch to Tab-Bereich](switch_to_tab.png)

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird jedes Mal angezeigt, wenn der Benutzer auf das Symbol der Erweiterung in der Symbolleiste klickt.
    > - **Berechtigungen beinhalten tabs.** Dies wird benötigt, um die Tab-Liste Funktion zu unterstützen, da die Erweiterung die Titel der Tabs liest, um sie im Popup anzuzeigen.

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
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs erstellt und zum Popup hinzugefügt wird.

#### Das Popup erstellen

Zuerst wird ein Ereignishandler hinzugefügt, der `listTabs()` ausführt, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` tut, ist `getCurrentWindowTabs()` aufzurufen. Dies ist, wo {{WebExtAPIRef("tabs.query()")}} verwendet wird, um ein {{WebExtAPIRef("tabs.Tab")}} Objekt für die Tabs im aktuellen Fenster zu bekommen:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Jetzt ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zu Beginn:

1. Erfassen Sie das `<div id="tabs-list">` Element.
2. Erstellen Sie ein Dokumentfragment (in das die Liste aufgebaut wird).
3. Setzen Sie Zähler.
4. Löschen Sie den Inhalt des `<div id="tabs-list">` Elements.

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById("tabs-list");
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = "";
```

Als Nächstes erstellen wir die Links für jeden Tab:

1. Schleifen Sie durch die ersten 5 Elemente des {{WebExtAPIRef("tabs.Tab")}} Objekts.
2. Für jedes Element fügen Sie dem Dokumentfragment einen Hyperlink hinzu.

   - Das Label des Links — das heißt, sein Text — wird mit dem `title` des Tabs (oder der `id`, falls er keinen `title` hat) gesetzt.
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

Schließlich wird das Dokumentfragment in das `<div id="tabs-list">` Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die "Alert aktivem Tab"-Infooption, die alle {{WebExtAPIRef("tabs.Tab")}} Objekt-Eigenschaften für den aktiven Tab in ein Alert ausschüttet:

```js
else if (e.target.id === "tabs-alert-info") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${item} = ${tab[item]} \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}} Objekte schleift und nach dem Element sucht, das auf aktiv gesetzt ist:

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

## Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen machen — entweder um Benutzern Funktionen zum Manipulieren und Verwalten von Tabs zu bieten oder um Funktionalitäten in Ihre Erweiterung zu implementieren.

Folgende Funktionen stehen zur Verfügung:

- Erstellen eines neuen Tabs ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren eines Tabs ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen eines Tabs ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben eines Tabs ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren der URL des Tabs — im Wesentlichen zu einer neuen Seite navigieren — ({{WebExtAPIRef("tabs.update()")}}).
- Neuladen der Tab-Seite ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Wohingegen die folgenden Funktionen auf den aktiven Tab wirken (wenn keine Tab-`id` angegeben ist):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel übt alle diese Funktionen aus außer der Aktualisierung der URL eines Tabs. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher schauen wir uns eine der aufwendigeren Implementierungen an, nämlich die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zur Ausführung, daher gibt es keine Funktionen in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) Datei, die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Aktiven Tab an den Anfang der Fensterliste verschieben", mit einer Reihe von `<a>` Tags, die durch einen visuellen Separator gruppiert sind. Jedes Menüpunkts-Element erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüpunkt-Element angefordert wird.

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

    Eine Reihe von `if`-Anweisungen sucht dann nach der `id` des geklickten Elements.

    Dieses Code-Snippet ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

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

    Es ist erwähnenswert, die Verwendung von `console.log()`. Damit können Sie Informationen in der [Debugger-Konsole](https://extensionworkshop.com/documentation/develop/debugging/) ausgeben, was nützlich sein kann, um während der Entwicklung gefundene Probleme zu lösen.

    ![Beispiel für die Konsolenausgabe der console.log Funktion der "Tabs verschieben" Funktion in der Debugging-Konsole](console.png)

    Der Umzug-Code ruft zuerst `callOnActiveTab()` auf, der wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}} Objekt zu erhalten, das die Tabs des aktiven Fensters enthält. Dann schleift er durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Angepinnte Tabs

Eine Funktion von Tabs ist, dass der Benutzer Tabs in einem Fenster _anpinnen_ kann. Angepinnte Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, zu der ein Tab bewegt werden kann, die erste Position nach allen angehefteten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angehefteten Tabs zu finden, indem durch das `tabs`-Objekt geschleift wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Jetzt haben wir alles, was benötigt wird, um den Tab zu verschieben: das aktive Tab-Objekt, von dem wir die Tab-`id` und die Position, an die der Tab verschoben werden soll, bekommen. Also können wir den Umzug implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden auf ähnliche Weise implementiert.

## Manipulation des Zoomfaktors eines Tabs

Die nächste Reihe von Funktionen ermöglicht es Ihnen, den Zoomfaktor innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoomeinstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}) in Firefox nicht verfügbar.

Der Zoomfaktor kann zwischen 30 % und 500 % liegen (dargestellt als Dezimalwerte `0.3` bis `5`).

In Firefox sind die Standard-Zoomeinstellungen:

- **Standard-Zoomfaktor:** 100 %.
- **Zoommodus:** automatisch (damit verwaltet der Browser, wie Zoomstufen gesetzt werden).
- **Reichweite der Zoomänderungen:** `"per-origin"`, was bedeutet, dass wenn Sie eine Seite erneut besuchen, es die Zoomstufe übernimmt, die bei Ihrem letzten Besuch eingestellt war.

### Anleitung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel umfasst drei Demonstrationen der Zoomfunktion: Zoomen, Herauszoomen und Zoom zurücksetzen. Hier ist das Feature in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Zoomen implementiert ist.

- manifest.json
  - : Keine der Zoomfunktionen erfordert Berechtigungen, daher gibt es keine Funktionen in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie das [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, nichts Neues oder Einzigartiges wird gemacht, um die Zoomoptionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann denselben Listener, den wir bereits besprochen haben, damit es auf Klicks in `tabs.html` reagieren kann.

    Für die Vergrößerung führt dies:

    ```js
      else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
          browser.tabs.getZoom(tab.id).then((zoomFactor) => {
            // The maximum zoomFactor is 5, it can't go higher
            if (zoomFactor >= MAX_ZOOM) {
              alert("Tab zoom factor is already at max!");
            } else {
              let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
              // If the newZoomFactor is set to higher than the max accepted
              // it won't change, and will never alert that it's at maximum
              newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
              browser.tabs.setZoom(tab.id, newZoomFactor);
            }
          });
        });
      }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann erhält {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und es wird eine Warnung ausgegeben, wenn der Tab bereits beim maximalen Zoom ist. Andernfalls wird der Zoomfaktor inkrementiert, aber auf den maximalen Zoom beschränkt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation der CSS eines Tabs

Eine andere wesentliche Fähigkeit, die die Tabs-API bietet, ist die Möglichkeit, das CSS innerhalb eines Tabs zu manipulieren — fügen Sie einem Tab neues CSS hinzu ({{WebExtAPIRef("tabs.insertCSS()")}}) oder entfernen Sie CSS von einem Tab ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, zum Beispiel, wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) Beispiel verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier ist das Feature in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die erforderlich sind, um die CSS-Funktionen zu verwenden. Sie benötigen entweder:

    - `"tabs"` Berechtigung und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - `"activeTab"` Berechtigung.

    Letzteres ist am nützlichsten, da es einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie von der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einem Shortcut ausgeführt wird.

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

    Sie werden feststellen, dass `"tabs"` Berechtigung zusätzlich zu `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist nötig, um dem Skript der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, dessen Bedeutung wir in einem Moment sehen werden.

    Die anderen Hauptmerkmale in der manifest.json Datei sind die Definition von:

    - **einem Hintergrundskript**, das gestartet wird, sobald die Erweiterung geladen ist.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS zu definieren, Titel für die "Seitenaktion" und eine Liste von Protokollen, mit denen die Erweiterung arbeiten wird:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung zuerst geladen wird, verwendet sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es schleift dann durch die Tabs und ruft `initializePageAction()` auf.

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

    Wenn das Beispiel dann auf den Tab wirken kann, setzt `initializePageAction()` das `pageAction` (Navigationsleisten)-Symbol und den Titel des Tabs zu den "Off"-Versionen, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als Nächstes wartet ein Listener auf `pageAction.onClicked` darauf, dass das `pageAction` Symbol geklickt wird, und ruft `toggleCSS` auf, wenn es das ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` holt den Titel der `pageAction` und führt dann die beschriebene Aktion aus:

    - **Für "CSS anwenden":**

      - wechselt das `pageAction` Symbol und den Titel zu den "Entfernen"-Versionen.
      - wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**

      - wechselt das `pageAction` Symbol und den Titel zu den "Anwenden"-Versionen.
      - entfernt das CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

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

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Aktualisieren des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu prüfen, ob der Tab noch ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt noch ein paar andere Funktionen der Tabs-API, die in keine der vorherigen Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Hauptsprache der Inhalte in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte zum Beispiel verwendet werden, um die Sprache im Benutzerinterface Ihrer Erweiterung mit der der Seite, auf der sie ausgeführt wird, abzustimmen.

## Erfahren Sie mehr

Wenn Sie mehr über die Tabs-API erfahren möchten, lesen Sie:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
