---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Tabs ermöglichen es dem Benutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und dann zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Hilfsprogramme zu erstellen, die den Benutzern neue Möglichkeiten im Umgang mit Tabs bieten oder die Funktionen Ihrer Erweiterung bereitstellen.

In diesem Artikel werden wir folgendes betrachten:

- Berechtigungen, die für die Verwendung der Tabs-API benötigt werden.
- Mehr über Tabs und ihre Eigenschaften mit {{WebExtAPIRef("tabs.query")}} herausfinden.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulation der Zoomstufe eines Tabs.
- Manipulation des CSS eines Tabs.

Abschließend werfen wir einen Blick auf einige andere, verschiedene Funktionen, die die API bietet.

> [!NOTE]
> Einige Funktionen der Tabs-API werden an anderer Stelle behandelt. Dabei handelt es sich um die Methoden, mit denen Sie den Tab-Inhalt mit Skripten manipulieren können ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, sehen Sie sich den Artikel Konzepte [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page) an.

## Berechtigungen und die Tabs-API

Für die Mehrheit der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie auch `"tabs"`, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist erforderlich für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

So könnten Sie die Berechtigung `"tabs"` in der Manifestdatei `manifest.json` Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht die Nutzung aller Funktionen der Tabs-API auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz zur Anforderung von Berechtigungen zur Nutzung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem Sie keine Host-Berechtigung benötigen, in der Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet dieselben Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über seine Browser- oder Seitenaktion, das Kontextmenü oder die Tastenkombination mit der Erweiterung interagieren.
- Sie gewährt die Berechtigung nur innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Ihre Daten für alle Websites" zugreifen kann. Dies liegt daran, dass die `<all_urls>`-Berechtigung einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab zu jedem Zeitpunkt auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu ermöglichen, eine vom Benutzer angeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und deren Eigenschaften herausfinden

Es gibt Gelegenheiten, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Zu anderen Zeiten möchten Sie vielleicht eine Teilmenge von Tabs finden, die bestimmten Kriterien entsprechen, z. B. die von einem bestimmten Tab geöffnet wurden oder Seiten von einer bestimmten Domäne anzeigen. Und sobald Sie Ihre Liste mit Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften wissen.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Alleine verwendet, um alle Tabs zu erhalten oder das `queryInfo`-Objekt zu verwenden, um Abfragekriterien wie ob der Tab aktiv ist, im aktuellen Fenster ist oder eines von 17 Kriterien, zu spezifizieren — {{WebExtAPIRef("tabs.query()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, das Informationen über die Tabs enthält.

Wenn Sie nur Informationen über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} erhalten.

### Beispiel für eine Anleitung

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, gehen wir durch, wie das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) die Liste der "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü, das den Bereich zum Wechseln von Tabs zeigt](switch_to_tab.png)

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
    > - **Berechtigungen umfassen Tabs.** Dies ist notwendig, um die Tab-Liste Funktion zu unterstützen, da die Erweiterung die Titel der Tabs zum Anzeigen im Popup liest.

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

    Dies tut folgendes:

    1. Die Menüelemente werden erklärt.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Das Popup erstellen

Zuerst wird ein Event-Handler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das erste, was `listTabs()` macht, ist, `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Um damit zu starten:

1. Holen Sie das `<div id="tabs-list">`-Element.
2. Erstellen Sie ein Dokumentfragment (in das die Liste aufgebaut wird).
3. Setzen Sie Zähler.
4. Löschen Sie den Inhalt des `<div id="tabs-list">`-Elements.

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById("tabs-list");
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = "";
```

Als nächstes erstellen wir die Links für jeden Tab:

1. Schleife durch die ersten 5 Elemente aus dem {{WebExtAPIRef("tabs.Tab")}}-Objekt.
2. Für jedes Element wird ein Hyperlink zum Dokumentfragment hinzugefügt.
   - Die Beschriftung des Links — das heißt, sein Text — wird mit dem `title` des Tabs (oder der `id`, falls kein `title` vorhanden ist) gesetzt.
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

Schließlich wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Mit dem aktiven Tab arbeiten

Ein weiteres verwandtes Beispiel ist die Funktion "Info über aktiven Tab warnen", die alle {{WebExtAPIRef("tabs.Tab")}}-Objekte-Eigenschaften für den aktiven Tab in einem Warnfenster ausgibt:

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

`callOnActiveTab()` findet das aktive Tab-Objekt, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schleift und nach dem Element sucht, das als aktiv gesetzt ist:

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

## Erstellen, duplizieren, verschieben, aktualisieren, neuladen und entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen machen — entweder um Benutzern Funktionen zum Manipulieren und Verwalten von Tabs anzubieten oder um Funktionalitäten in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen sind verfügbar:

- Erstellen eines neuen Tabs ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren eines Tabs ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen eines Tabs ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben eines Tabs ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren der URL des Tabs — effektiv zu einer neuen Seite browsen — ({{WebExtAPIRef("tabs.update()")}}).
- Neuladen der Seite des Tabs ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf den aktiven Tab wirken (wenn keine Tab `id` angegeben wird):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Beispiel für eine Anleitung

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) nutzt alle diese Funktionen, außer zum Aktualisieren der URL eines Tabs. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher schauen wir einen der ausführlicheren Implementierungen an, nämlich die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zum Ausführen, daher gibt es keine Besonderheiten, die im [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird. Es umfasst die Option "Aktiven Tab an den Anfang der Fensterliste verschieben", mit einer Reihe von `<a>`-Tags, die durch einen visuellen Trenner gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um festzustellen, welches Menüelement angefordert wird.

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

    Eine Reihe von `if`-Anweisungen prüfen dann, auf welches Element mit welcher `id` geklickt wurde.

    Dieser Codeausschnitt ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

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

    Es ist erwähnenswert, dass `console.log()` verwendet wird. Dies ermöglicht es Ihnen, Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole auszugeben, was bei der Lösung von Problemen, die während der Entwicklung auftreten können, nützlich ist.

    ![Beispiel der console.log-Ausgabe, von der Funktion zum Verschieben von Tabs, in der Debugger-Konsole](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, welches wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit den Tabs des aktiven Fensters zu erhalten. Dann läuft er durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Anpinnen von Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anpinnen_ kann. Angepinnte Tabs werden am Anfang der Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angepinnten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angepinnten Tabs zu finden, indem er durch das `tabs`-Objekt läuft:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben nun alles, was nötig ist, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-ID erhalten können, und die Position, zu der der Tab verschoben werden soll. Jetzt können wir den Verschiebevorgang implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs sind ähnlich implementiert.

## Manipulation der Zoomstufe eines Tabs

Die nächste Gruppe von Funktionen ermöglicht es Ihnen, das Zoomlevel innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Fähigkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Das Zoomlevel kann zwischen 30 % und 500 % liegen (was als Dezimalzahlen von `0.3` bis `5` dargestellt wird).

In Firefox sind die Standard-Zoomeinstellungen:

- **Standard-Zoomlevel:** 100 %.
- **Zoom-Modus:** automatisch (sodass der Browser verwaltet, wie Zoomlevel eingestellt werden).
- **Geltungsbereich der Zoomänderungen:** `"per-origin"`, was bedeutet, dass wenn Sie eine Seite erneut besuchen, sie das Zoomlevel übernimmt, das bei Ihrem letzten Besuch eingestellt war.

### Beispiel für eine Anleitung

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) enthält drei Demonstrationen der Zoomfunktion: Vergrößern, Verkleinern und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Vergrößern umgesetzt wird.

- manifest.json
  - : Keine der Zoom-Funktionen erfordern Berechtigungen, daher gibt es keine Besonderheiten, die in der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es ist nichts Neues oder Einzigartiges nötig, um die Zoomoptionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoomcode verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Dann wird derselbe Listener verwendet, den wir vorhin besprochen haben, um auf Klicks in `tabs.html` reagieren zu können.

    Für die Vergrößerungsfunktion läuft dieser:

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

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann nutzt {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und es wird eine Warnung ausgegeben, wenn der Tab bereits die maximale Vergrößerung hat. Andernfalls wird das Zoomlevel erhöht, aber auf das maximale Zoom beschränkt, dann wird das Zoomlevel mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation des CSS eines Tabs

Eine weitere bedeutende Fähigkeit der Tabs-API ist die Fähigkeit, das CSS innerhalb eines Tabs zu manipulieren — neues CSS zu einem Tab hinzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS aus einem Tab entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, zum Beispiel, wenn Sie bestimmte Seiten-Elemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Beispiel für eine Anleitung

Das Beispiel [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) nutzt diese Funktionen, um der Webseite im aktiven Tab einen roten Rand hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die Berechtigungen an, die für die Nutzung der CSS-Funktionen erforderlich sind. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letzteres ist die nützlichste, da es einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie von der Browser- oder Seitenaktion, dem Kontextmenü oder einer Verknüpfung aus ausgeführt wird.

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

    Sie werden feststellen, dass die Berechtigung `"tabs"` zusätzlich zu `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist notwendig, um dem Skript der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, deren Bedeutung wir in einem Moment sehen werden.

    Die anderen Hauptfeatures in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript**, das sofort ausgeführt wird, wenn die Erweiterung geladen wird.
    - **einem "page action"**, das ein Symbol definiert, das der Adresszeile des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, Titel für die "page action" und eine Liste der Protokolle, in denen die Erweiterung funktionieren soll, zu definieren:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung zum ersten Mal geladen wird, verwendet sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Dann wird durch die Tabs geschleift, wobei `initializePageAction()` aufgerufen wird.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs eines ist, das CSS darauf angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Dann, wenn das Beispiel auf den Tab wirken kann, setzt `initializePageAction()` das `pageAction` (Navigationsleisten-)Symbol und den Titel des Tabs auf die "aus"-Versionen, bevor es das `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als nächstes wartet ein Listener auf `pageAction.onClicked`, dass das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn es so ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` erhält den Titel des `pageAction` und führt dann die beschriebenen Aktionen aus:

    - **Für "CSS anwenden":**

      - schaltet das `pageAction`-Icon und den Titel auf die "entfernen"-Versionen um.
      - wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**
      - schaltet das `pageAction`-Icon und den Titel auf die "anwenden"-Versionen um.
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

    Schließlich, um sicherzustellen, dass das `pageAction` nach jedem Update auf den Tab gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu prüfen, dass der Tab immer noch ein Protokoll verwendet, auf welches das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige weitere interessante Fähigkeiten

Es gibt ein paar andere Funktionen der Tabs-API, die nicht in eine der vorherigen Abschnitte passen:

- Den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}} erfassen.
- Die Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}} erkennen. Dies könnte beispielsweise verwendet werden, um die Sprache der Benutzeroberfläche Ihrer Erweiterung mit der Seite, auf der sie ausgeführt wird, abzustimmen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
